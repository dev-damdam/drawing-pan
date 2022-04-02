<template>
  <div>
    <canvas id="drawing-canvas" width="400" height="400"></canvas>
  </div>
</template>

<script lang="ts">
import vue from "vue";
import { drawing } from "./drawing";

interface IObject {
  [key: string]: any;
}
export default vue.extend({
  props: {
    value: {
      default: "",
    },
  },
  data() {
    return {
      canvas: null,
      drawing: null,
    };
  },
  computed: {
    changeTool: {
      set(val: string) {
        this.drawingCanvas(val);
      },
      get(): string {
        return this.value;
      },
    },
  },
  watch: {
    value(val: string) {
      this.changeTool = val;
    },
  },
  mounted() {
    this.drawing = new drawing();
    this.canvas = this.drawing.fabricInit("drawing-canvas");
  },
  methods: {
    drawingCanvas(tool: string) {
      if (tool == "pencil") {
        this.drawing.setPencil(this.canvas);
      } else if (tool == "highlighter") {
        this.drawing.setHighlighter(this.canvas, "#ffff0095");
      } else if (tool == "text-box") {
        this.drawing.setTextBox(this.canvas);
      } else if (tool == "eraser") {
        this.drawing.eraser(this.canvas);
      }
    },
  },
});
</script>
<style scoped>
#drawing-canvas {
  border: 1px solid red;
}
</style>
