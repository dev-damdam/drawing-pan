import { fabric } from "fabric";

interface IObject {
  [key: string]: any;
}

class drawing {
  public fabricInit(id: string): fabric.Canvas {
    return new fabric.Canvas(id);
  }

  public setPencil(_canvas: fabric.Canvas) {
    _canvas.isDrawingMode = true;
    _canvas.freeDrawingBrush.color = "black";
    _canvas.freeDrawingBrush.width = 4;
  }

  public setHighlighter(_canvas: fabric.Canvas, color: string) {
    _canvas.isDrawingMode = true;
    _canvas.freeDrawingBrush.color = color;
    _canvas.freeDrawingBrush.width = 30;
  }

  public setTextBox(_canvas: fabric.Canvas, postion: IObject) {
    _canvas.isDrawingMode = false;
    const options = { fontSize: 11 };
    const fabricText = new fabric.Textbox("텍스트", options);
    _canvas.add(fabricText);
  }

  public eraser(_canvas: fabric.Canvas) {
    _canvas.isDrawingMode = false;
    _canvas.on("mouse:down", function (e) {
      console.log(e);
    });
  }

  public changePencilColor(_canvas: fabric.Canvas, color: string) {
    _canvas.freeDrawingBrush.color = color;
  }

  public changeHighlightColor(_canvas: fabric.Canvas, color: string) {
    //todo
  }
}

export { drawing };
