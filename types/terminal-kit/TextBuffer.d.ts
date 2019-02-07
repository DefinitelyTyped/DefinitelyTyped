import ScreenBuffer = require("./ScreenBuffer");
import Rect = require("./Rect");

export as namespace TextBuffer;

declare class TextBuffer {
  readonly x: number;
  readonly y: number;

  constructor(options: TextBuffer.Options);

  getText(): string;
  setText(text: string): void;

  getHidden(): boolean;
  setHidden(state: boolean): void;

  getContentSize(): { width: number; height: number };

  setEmptyCellAttr(attr: ScreenBuffer.Attributes | number): void;

  setAttrAt(attr: ScreenBuffer.Attributes | number, x: number, y: number): void;
  setAttrCodeAt(attr: number, x: number, y: number): void;

  setAttrRegion(
    attr: ScreenBuffer.Attributes | number,
    region?: Rect.Region
  ): void;
  setAttrCodeRegion(attr: number, region?: Rect.Region): void;

  getMisc(): any;
  getMiscAt(x: number, y: number): any;

  moveTo(x: number, y: number): void;
  moveToColumn(x: number): void;
  moveToLine(y: number): void;
  moveToRow(y: number): void;

  move(x: number, y: number): void;
  moveUp(): void;
  moveDown(): void;
  moveLeft(): void;
  moveRight(): void;
  moveForward(justSkipNullCells: boolean): void;
  moveBackward(justSkipNullCells: boolean): void;
  moveToEndOfLine(): void;
  moveInBound(ignoreCx: boolean): void;

  insert(text: string, attr?: ScreenBuffer.Attributes | number): void;

  delete(n?: number): void;
  bulkDelete(n?: number): void;

  newLine(): void;
  joinLine(): void;

  iterate(
    options: { finalCall: boolean },
    callback: (
      cellData: {
        offset: number;
        x: number;
        y: number;
        text: string;
        attr: number;
        misc: any;
      }
    ) => void
  ): void;

  draw(options?: ScreenBuffer.DrawOptions): void;

  drawCursor(options?: { dst: ScreenBuffer }): void;

  load(filepath: string, callback: (error?: any) => void): void;

  save(filepath: string, callback: (error?: any) => void): void;
}

export = TextBuffer;

declare namespace TextBuffer {
  interface Options {
    dst: ScreenBuffer;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    tabWidth?: number;
    forceInBound?: number;
    hidden?: boolean;
    wrap?: boolean;
  }
}
