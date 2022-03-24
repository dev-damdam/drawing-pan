<template>
  <div class="canvas">
    <editor-tools />
    <drawing-canvas />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DrawingCanvas from "@/modules/drawing/drawing-canvas.vue";
import EditorTools from "@/modules/drawing/editor-tools.vue";

@Component({
  components: {
    DrawingCanvas,
    EditorTools,
  },
})
export default class CanvasView extends Vue {}
</script>
