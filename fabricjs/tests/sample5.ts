///<reference path="..\fabricjs.d.ts" />

module fabric {
    export interface CircleWithLineInfos extends ICircle {
        line1?: ILine;
        line2?: ILine;
        line3?: ILine;
        line4?: ILine;
    }
}

var makeCircle = function(left: number, top: number, line1?: fabric.ILine, line2?: fabric.ILine, line3?: fabric.ILine, line4?: fabric.ILine): fabric.ICircle {
    var c = <fabric.CircleWithLineInfos>new fabric.Circle({
        left: left,
        top: top,
        strokeWidth: 5,
        radius: 12,
        fill: '#fff',
        stroke: '#666'
    });

    c.line1 = line1;
    c.line2 = line2;
    c.line3 = line3;
    c.line4 = line4;
    c.hasControls = c.hasBorders = false;
    return c;
}

function makeLine(coords: number[]) {
  return new fabric.Line(coords, {
    fill: 'red',
    strokeWidth: 5,
    selectable: false
  });
}

var canvas = new fabric.Canvas('c', { selection: false });

var line = makeLine([ 250, 125, 250, 175 ]),
    line2 = makeLine([ 250, 175, 250, 250 ]),
    line3 = makeLine([ 250, 250, 300, 350]),
    line4 = makeLine([ 250, 250, 200, 350]),
    line5 = makeLine([ 250, 175, 175, 225 ]),
    line6 = makeLine([ 250, 175, 325, 225 ]);

canvas.add(line, line2, line3, line4, line5, line6);

canvas.add(
  makeCircle(line.x1, line.y1, null, line),
  makeCircle(line.x2, line.y2, line, line2, line5, line6),
  makeCircle(line2.x2, line2.y2, line2, line3, line4),
  makeCircle(line3.x2, line3.y2, line3),
  makeCircle(line4.x2, line4.y2, line4),
  makeCircle(line5.x2, line5.y2, line5),
  makeCircle(line6.x2, line6.y2, line6)
);

canvas.on('object:moving', function(e) {
  var p = <fabric.CircleWithLineInfos>e.target;
  p.line1 && p.line1.set({ 'x2': p.left, 'y2': p.top });
  p.line2 && p.line2.set({ 'x1': p.left, 'y1': p.top });
  p.line3 && p.line3.set({ 'x1': p.left, 'y1': p.top });
  p.line4 && p.line4.set({ 'x1': p.left, 'y1': p.top });
  canvas.renderAll();
});