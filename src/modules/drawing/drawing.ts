import { fabric } from "fabric";

class drawing {
  public fabricInit(id: string): fabric.Canvas {
    return new fabric.Canvas(id);
  }
}

export { drawing };
