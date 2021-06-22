import NextGenEvents = require("nextgen-events");

import Terminal = require("./Terminal");
import ScreenBufferHD = require("./ScreenBufferHD");
import Rect = require("./Rect");

declare class ScreenBuffer extends NextGenEvents {
  readonly dst: Terminal | ScreenBuffer;
  readonly x: number;
  readonly y: number;
  readonly blending: boolean | ScreenBufferHD.IsBlending;

  constructor(options: ScreenBuffer.Options);

  static create(options: ScreenBuffer.Options): ScreenBuffer;

  static createFromString(
    options: {
      attr: number | ScreenBuffer.Attributes;
      transparencyChar: string;
      transparencyType: number;
    },
    str: string
  ): ScreenBuffer;

  static loadImage(
    url: string,
    options: {
      terminal: Terminal;
      shrink?: {
        width: number;
        height: number;
      };
    },
    calback: (error: any, image: ScreenBufferHD) => void
  ): void;

  static loadImage(
    url: string,
    calback: (error?: any, image?: ScreenBufferHD) => void
  ): void;

  static attr2object(attrFlags: number): void;
  attr2object(attrFlags: number): void;

  static object2attr(attrObject: ScreenBuffer.Attributes): void;
  object2attr(attrObject: ScreenBuffer.Attributes): void;

  static loadSync(filepath: string): ScreenBuffer;

  fill(options?: {
    attr: ScreenBuffer.Attributes | number;
    char?: string;
  }): void;

  clear(): void;

  put(
    options: ScreenBuffer.PutOptions,
    format: string,
    ...formatArgumets: any[]
  ): void;

  get(options?: {
    x: number;
    y: number;
  }): { char: string; attr: ScreenBuffer.Attributes };

  resize(fromRect: Rect | Rect.Options): void;

  draw(options?: ScreenBuffer.DrawOptions): void;

  drawCursor(options?: { dst: Terminal | ScreenBuffer }): void;

  moveTo(x: number, y: number): void;

  vScroll(offset: number, drawToTerminal: boolean): void;

  dumpChars(): string;

  saveSync(filepath: string): void;
}

export = ScreenBuffer;

declare namespace ScreenBuffer {
  interface Options {
    width?: number;
    height?: number;
    dst: Terminal | ScreenBuffer;
    x?: number;
    y?: number;
    blending?: boolean;
    wrap?: boolean;
    noFill?: boolean;
  }

  interface DrawOptions {
    dst?: Terminal | ScreenBuffer;
    x?: number;
    y?: number;
    srcClipRect?: Rect;
    dstClipRect?: Rect;
    blending?: boolean;
    delta?: boolean;
    wrap?: boolean | "x" | "y";
    tile?: boolean;
  }

  interface Attributes {
    color?: number;
    defaultColor?: boolean;
    bgColor?: number;
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
    fgTransparency?: boolean;
    bgTransparency?: boolean;
    styleTransparency?: boolean;
    charTransparency?: boolean;
  }

  interface PutOptions {
    x: number;
    y: number;
    attr: Attributes | number;
    wrap: boolean;
    direction?: "right" | "left" | "up" | "down" | null;
    dx: number;
    dy: number;
  }
}
