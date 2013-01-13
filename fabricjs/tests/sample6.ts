///<reference path="..\fabricjs.d.ts" />

var canvas = new fabric.Canvas('c');
fabric.loadSVGFromURL('../assets/135.svg', function (objects) {
    var obj = objects[0].scale(0.25);
    canvas.centerObject(obj);
    canvas.add(obj);

  canvas.add(obj.clone().set({ left: 100, top: 100, angle: -15 }));
  canvas.add(obj.clone().set({ left: 480, top: 100, angle: 15 }));
  canvas.add(obj.clone().set({ left: 100, top: 400, angle: -15 }));
  canvas.add(obj.clone().set({ left: 480, top: 400, angle: 15 }));

  canvas.on('mouse:move', function (options) {
      var p = canvas.getPointer(options.e);

      canvas.forEachObject(function (obj) {
          var distX = Math.abs(p.x - obj.left),
          distY = Math.abs(p.y - obj.top),
          dist = Math.round(Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)));
          obj.setOpacity(1 / (dist / 20));
      });

  });

});