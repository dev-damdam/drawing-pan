<template>
  <div>
    <ul class="editor-tool">
      <li class="editor-tool__item" @click="selectTool('pencil')">
        <div>
          <img src="@/assets/images/drawing/pen.png" />
          pencil
        </div>
      </li>
      <li class="editor-tool__item" @click="selectTool('highlighter')">
        <div>
          <img src="@/assets/images/drawing/highlighter.png" />
          highlighter
        </div>
      </li>
      <li class="editor-tool__item" @click="selectTool('text-box')">
        <div>
          <img src="@/assets/images/drawing/text.png" />
          text
        </div>
      </li>
      <li class="editor-tool__item">clipboard</li>
      <li class="editor-tool__item" @click="selectTool('eraser')">
        <div>
          <img src="@/assets/images/drawing/eraser.png" />
          eraser
        </div>
      </li>
      <li class="editor-tool__item">
        <div>
          <img src="@/assets/images/drawing/diskette.png" />
          save
        </div>
      </li>
      <li class="editor-tool__item">
        <div>
          <img src="@/assets/images/drawing/undo.png" />
          undo
        </div>
      </li>
      <li class="editor-tool__item">
        <div>
          <img src="@/assets/images/drawing/redo.png" />
          redo
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import vue from "vue";

export default vue.extend({
  props: {
    value: {
      default: "",
    },
  },
  methods: {
    selectTool(tool: string) {
      this.$emit("input", tool);
    },
  },
});
</script>

<style lang="scss">
.editor-tool {
  width: 100%;
  list-style: none;
  display: flex;
  padding: 0;
  .editor-tool__item {
    flex: 0 0 100px;

    div > img {
      display: block;
      margin: 0 auto;
      max-width: 30px;
    }
  }
}
</style>
