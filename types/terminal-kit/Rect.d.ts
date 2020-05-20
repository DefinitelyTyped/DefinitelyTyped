import Terminal = require("./Terminal");
import ScreenBuffer = require("./ScreenBuffer");
import TextBuffer = require("./TextBuffer");

declare class Rect {
  readonly width: number;
  readonly height: number;
  readonly xmin: number;
  readonly ymin: number;
  readonly xmax: number;
  readonly ymax: number;
  readonly isNull: boolean;

  constructor(
    options:
      | Rect.AbsoluteOptions
      | Rect.Region
      | Rect
      | Terminal
      | ScreenBuffer
      | TextBuffer
  );
  constructor(xmin: number, xmax: number, ymin: number, ymax: number);

  static wrappingRect(params: {
    srcRect: Rect;
    dstRect: Rect;
    offsetX: number;
    offsetY: number;
    wrapOnly?: "x" | "y";
  }): void;

  set(obj: Rect.Region): void;

  clip(
    dstRect: Rect,
    offsetX: number,
    offsetY: number,
    dstClipping: boolean
  ): void;
}

export = Rect;

declare namespace Rect {
  type Options = AbsoluteOptions | Region;

  interface AbsoluteOptions {
    width: number;
    height: number;
    x?: number;
    y?: number;
  }

  interface Region {
    xmin: number;
    ymin: number;
    xmax: number;
    ymax: number;
  }
}
