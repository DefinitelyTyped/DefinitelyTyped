///<reference path="..\fabricjs.d.ts" />

module fabric {
    export interface ImageWithInfo extends IImage {
        movingLeft: bool;
    }
}

var canvas = new fabric.Canvas('c', { selection: false });

setInterval(function() {
  fabric.Image.fromURL('../assets/ladybug.png', function(obj) {
      var img = <fabric.ImageWithInfo>obj;
      img.set('left', fabric.util.getRandomInt(200, 600)).set('top', -50);
      img.movingLeft = !!Math.round(Math.random());
      canvas.add(img);
  });
}, 1000);


var animate = (function animate() {
    canvas.forEachObject(function (obj) {
        var img = <fabric.ImageWithInfo>obj;
        img.left += (img.movingLeft ? -1 : 1);
        img.top += 1;
        if (img.left > 900 || img.top > 500) {
            canvas.remove(img);
        }
        else {
            img.setAngle(img.getAngle() + 2);
        }
    });
    canvas.renderAll();
    window.requestAnimationFrame(animate);
});

animate();