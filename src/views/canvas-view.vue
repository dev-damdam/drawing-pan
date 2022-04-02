<template>
  <div class="canvas">
    <editor-tools v-model="toolName" />
    <drawing-canvas v-model="toolName" />
  </div>
</template>

<script lang="ts">
import vue from "vue";
import DrawingCanvas from "@/modules/drawing/drawing-canvas.vue";
import EditorTools from "@/modules/drawing/editor-tools.vue";

export default vue.extend({
  components: {
    DrawingCanvas,
    EditorTools,
  },
  data() {
    return {
      toolName: "", // set default tool
    };
  },
  methods: {},
  computed: {
    selectedTool: {
      set(val: string) {
        this.toolName = val;
      },
      get(): string {
        return this.toolName;
      },
    },
  },
});
</script>
