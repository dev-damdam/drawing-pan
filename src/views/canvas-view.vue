<template>
  <div class="canvas">
    <editor-tools v-model="toolInfo" />
    <drawing-canvas v-model="toolInfo" />
  </div>
</template>

<script lang="ts">
import vue from "vue";
import DrawingCanvas from "@/modules/drawing/drawing-canvas.vue";
import EditorTools from "@/modules/drawing/editor-tools.vue";
interface IObject {
  [key: string]: any;
}
export default vue.extend({
  components: {
    DrawingCanvas,
    EditorTools,
  },
  data() {
    return {
      toolInfo: {}, // set default tool
    };
  },
  methods: {},
  computed: {
    selectedTool: {
      set(val: IObject) {
        this.toolInfo = val;
      },
      get(): IObject {
        return this.toolInfo;
      },
    },
  },
});
</script>
