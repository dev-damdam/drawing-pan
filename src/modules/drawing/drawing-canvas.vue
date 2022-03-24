<template>
  <div>
    <canvas
      id="drawing-canvas"
      width="400"
      height="400"
      @mousedown="drawStart"
      @mousemove="drawLine"
      @mouseup="drawEnd"
      @mouseover="drawEnd"
    ></canvas>
  </div>
</template>

<script lang="ts">
import vue from "vue";

interface IObject {
  [key: string]: any;
}
export default vue.extend({
  data() {
    return {
      canvas: null as any,
      context: null as any,
      isDraw: false,
      coords: {} as IObject,
    };
  },
  mounted() {
    this.canvas = document.getElementById("drawing-canvas") as HTMLElement;
    this.context = this.canvas.getContext("2d");
    // set line stroke and line width
    this.context.strokeStyle = "red";
    this.context.lineWidth = 5;
  },
  methods: {
    drawStart($event: any) {
      this.coords = {
        x: $event.offsetX,
        y: $event.offsetY,
      };
      this.isDraw = true;

      this.context.beginPath();
      this.context.moveTo(this.coords.x, this.coords.y);
    },
    drawLine($event: any) {
      if (!this.isDraw) return;

      // draw a red line
      this.context.lineTo($event.offsetX, $event.offsetY);
      this.context.stroke();
    },

    drawEnd() {
      this.isDraw = false;
    },
  },
});
</script>
<style scoped>
#drawing-canvas {
  border: 1px solid red;
}
</style>
