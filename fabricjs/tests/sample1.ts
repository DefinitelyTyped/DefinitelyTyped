///<reference path="..\fabricjs.d.ts" />

var canvas = new fabric.Canvas('c', {
  hoverCursor: 'pointer',
  selection: false,
});

canvas.on({
  'object:moving': function(e) {
    e.target.opacity = 0.5;
  },
  'object:modified': function(e) {
    e.target.opacity = 1;
  }
});

for (var i = 0, len = 15; i < len; i++) {
  fabric.Image.fromURL('../assets/ladybug.png', function(img) {
    img.set({
      left: fabric.util.getRandomInt(0, 600),
      top: fabric.util.getRandomInt(0, 500),
      angle: fabric.util.getRandomInt(0, 90)
    });

    img.perPixelTargetFind = true;
    // img.targetFindTolerance = 4;
    img.hasControls = img.hasBorders = false;

    img.scale(fabric.util.getRandomInt(50, 100) / 100);

    canvas.add(img);
  });
}