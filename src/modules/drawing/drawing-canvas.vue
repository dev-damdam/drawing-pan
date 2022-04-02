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
  data() {
    return {
      canvas: null,
      drawing: null,
    };
  },
  mounted() {
    this.drawing = new drawing();
    this.canvas = this.drawing.fabricInit("drawing-canvas");
    console.log(this.canvas);
  },
  methods: {},
});
</script>
<style scoped>
#drawing-canvas {
  border: 1px solid red;
}
</style>
