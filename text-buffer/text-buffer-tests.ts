/// <reference path="./text-buffer.d.ts" />

declare var Point: TextBuffer.IPointStatic;

var pointA = new Point(1, 2);
pointA.row;
pointA.column;

var pointB = Point.fromObject({row: 2, column: 3});
var pointC = Point.min(pointA, pointB);

declare var TRange: TextBuffer.IRangeStatic;

var rangeA = new TRange(pointA, pointB);

declare var TextBufferStatic: TextBuffer.ITextBufferStatic;

var textBuffer = new TextBufferStatic("Hello, world!");
textBuffer.getLineCount();
