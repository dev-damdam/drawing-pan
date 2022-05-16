<template>
  <div class="drawing-pan">
    {{ value }}
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
      default: () => {
        return {
          name: "",
          color: "",
        };
      },
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
        return this.value.name;
      },
    },
    changeColor: {
      set(val: string) {
        this.changeToolColor(val);
      },
      get(): string {
        return this.value.color;
      },
    },
  },
  watch: {
    "value.name"(val: string) {
      this.changeTool = val;
    },
    "value.color"(val: string) {
      this.changeColor = val;
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
    changeToolColor(color: string) {
      if (this.changeTool == "pencil") {
        this.drawing.changePencilColor(this.canvas, color);
      } else {
        //todo
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
