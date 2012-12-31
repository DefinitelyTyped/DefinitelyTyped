///<reference path="..\fabricjs.d.ts" />

var canvas = new fabric.Canvas('c');
var $ = function (id) { return document.getElementById(id); };

var rect = new fabric.Rect({
    width: 100,
    height: 100,
    top: 150,
    left: 150,
    fill: 'rgba(255,0,0,0.5)'
});

canvas.add(rect);

var angleControl = <HTMLInputElement>$('angle-control');
angleControl.onchange = function() {
  rect.setAngle(this.value).setCoords();
  canvas.renderAll();
};

var scaleControl = <HTMLInputElement>$('scale-control');
scaleControl.onchange = function() {
  rect.scale(this.value).setCoords();
  canvas.renderAll();
};

var topControl = <HTMLInputElement>$('top-control');
topControl.onchange = function() {
  rect.setTop(this.value).setCoords();
  canvas.renderAll();
};

var leftControl = <HTMLInputElement>$('left-control');
leftControl.onchange = function() {
  rect.setLeft(this.value).setCoords();
  canvas.renderAll();
};

function updateControls() {

  scaleControl.value = rect.getScaleX().toString();
  angleControl.value = rect.getAngle().toString();
  leftControl.value = rect.getLeft().toString();
  topControl.value = rect.getTop().toString();
}
canvas.on({
  'object:moving': updateControls,
  'object:scaling': updateControls,
  'object:resizing': updateControls
});
