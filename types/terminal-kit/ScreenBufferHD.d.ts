import ScreenBuffer = require("./ScreenBuffer");

declare class ScreenBufferHD extends ScreenBuffer {
  constructor(
    options: { blending: ScreenBufferHD.IsBlending } | ScreenBuffer.Options
  );

  readonly blending: ScreenBufferHD.IsBlending;

  static loadImage(
    url: string,
    calback: (error?: any, image?: ScreenBufferHD) => void
  ): void;

  static loadImage(
    url: string,
    options: { shrink?: { height: number; width: number } },
    callback: (error: any, image: ScreenBufferHD) => void
  ): void;

  draw(
    options?: ScreenBuffer.DrawOptions | { blending: ScreenBufferHD.IsBlending }
  ): void;

  fill(
    options?:
      | {
          attr: ScreenBuffer.Attributes | number;
          char?: string;
        }
      | {
          attr: ScreenBufferHD.Attributes | number;
          char?: string;
        }
  ): void;
}

export = ScreenBufferHD;

declare namespace ScreenBufferHD {
  interface Attributes {
    r: number;
    g: number;
    b: number;
    a?: number;
    defaultColor?: boolean;
    bgR: number;
    bgG: number;
    bgB: number;
    bgA?: number;
    bgDefaultColor?: boolean;
    bold?: boolean;
    dim?: boolean;
    italic?: boolean;
    underline?: boolean;
    blink?: boolean;
    inverse?: boolean;
    hidden?: boolean;
    strike?: boolean;
    transparency?: boolean;
    styleTransparency?: boolean;
    charTransparency?: boolean;
  }

  type IsBlending = false | Blending;

  interface Blending {
    fn: BlendFunction;
    opacity: number;
    blendSrcFgWithDstBg: boolean;
  }

  type BlendFunction = (src: number, dst: number) => number;

  interface BlendFn {
    normal: BlendFunction;
    multiply: BlendFunction;
    screen: BlendFunction;
    overlay: BlendFunction;
    hardLight: BlendFunction;
    softLight: BlendFunction;
  }
}
