<template>
  <div class="editor-tool">
    <ul class="editor-tool__list">
      <li class="editor-tool__list--pencil" @click="selectTool('pencil')">
        <div>
          <img src="@/assets/images/drawing/pen.png" />
          pencil
        </div>
        <div class="pencil-color__block" v-show="value.name == 'pencil'">
          <div
            v-for="(color, idx) in pencilColors"
            :key="idx"
            :class="['pencil-color__block--color', color]"
            @click="changePencilColor(color)"
          ></div>
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

const PENCIL_COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
  "gray",
  "black",
];
export default vue.extend({
  props: {
    value: {
      default: "",
    },
  },
  data() {
    return {
      pencilColors: [],
      tool: {
        name: "",
        color: "",
      },
    };
  },
  mounted() {
    this.setPencilColorList();
  },
  methods: {
    setPencilColorList() {
      for (let i = 0; i < PENCIL_COLORS.length; i++) {
        this.pencilColors.push(PENCIL_COLORS[i]);
      }
    },
    selectTool(_tool: string) {
      this.tool.name = _tool;
      this.$emit("input", this.tool);
    },
    changePencilColor(_color: string) {
      //todo
      this.tool.color = _color;
      this.$emit("input", this.tool);
    },
  },
});
</script>

<style lang="scss">
.editor-tool {
  width: 100%;

  display: flex;
  padding: 0;
  .editor-tool__list {
    flex: 0 0 100px;
    list-style: none;
    div > img {
      display: block;
      margin: 0 auto;
      max-width: 30px;
    }
    .editor-tool__list--pencil {
      position: relative;
      top: 0;
      left: 0;
      .pencil-color__block {
        position: absolute;
        top: 0;
        left: 100px;

        padding: 10px;
        border: 1px solid black;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
        column-gap: 10px;
        row-gap: 10px;
      }

      .pencil-color__block > .pencil-color__block--color {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
}

.red {
  background-color: #eb0000;
}
.orange {
  background-color: #ffa500;
}
.yellow {
  background-color: #ffe650;
}
.green {
  background-color: #329632;
}
.blue {
  background-color: #0000ff;
}
.indigo {
  background-color: #00008c;
}
.purple {
  background-color: #9400d3;
}
.pink {
  background-color: #ff69b4;
}
.gray {
  background-color: #828282;
}
.black {
  background-color: #000000;
}
</style>
