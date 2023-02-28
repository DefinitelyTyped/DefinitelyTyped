import NextGenEvents = require("nextgen-events");

import Terminal = require("./Terminal");
import ScreenBufferHD = require("./ScreenBufferHD");
import Rect = require("./Rect");

declare class ScreenBuffer extends NextGenEvents {
  readonly dst: Terminal | ScreenBuffer;
  readonly x: number;
  readonly y: number;
  readonly blending: boolean | ScreenBufferHD.IsBlending;
  readonly width: number;
  readonly height: number;

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
      } | undefined;
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
    char?: string | undefined;
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
    width?: number | undefined;
    height?: number | undefined;
    dst: Terminal | ScreenBuffer;
    x?: number | undefined;
    y?: number | undefined;
    blending?: boolean | undefined;
    wrap?: boolean | undefined;
    noFill?: boolean | undefined;
  }

  interface DrawOptions {
    dst?: Terminal | ScreenBuffer | undefined;
    x?: number | undefined;
    y?: number | undefined;
    srcClipRect?: Rect | undefined;
    dstClipRect?: Rect | undefined;
    blending?: boolean | undefined;
    delta?: boolean | undefined;
    wrap?: boolean | "x" | "y" | undefined;
    tile?: boolean | undefined;
  }

  interface Attributes {
    color?: number | string | undefined;
    defaultColor?: boolean | undefined;
    bgColor?: number | string | undefined;
    bgDefaultColor?: boolean | undefined;
    bold?: boolean | undefined;
    dim?: boolean | undefined;
    italic?: boolean | undefined;
    underline?: boolean | undefined;
    blink?: boolean | undefined;
    inverse?: boolean | undefined;
    hidden?: boolean | undefined;
    strike?: boolean | undefined;
    transparency?: boolean | undefined;
    fgTransparency?: boolean | undefined;
    bgTransparency?: boolean | undefined;
    styleTransparency?: boolean | undefined;
    charTransparency?: boolean | undefined;
  }

  interface PutOptions {
    x: number;
    y: number;
    attr: Attributes | number;
    wrap: boolean;
    direction?: "right" | "left" | "up" | "down" | null | undefined;
    dx: number;
    dy: number;
  }
}
