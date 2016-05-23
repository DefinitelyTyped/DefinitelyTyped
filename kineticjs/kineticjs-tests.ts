// http://www.html5canvastutorials.com/kineticjs/html5-canvas-kineticjs-rect-tutorial/
namespace RectTutorial {
    var stage = new Kinetic.Stage({
        container: 'container',
        width: 578,
        height: 200
    });

    var layer = new Kinetic.Layer();

    var rect = new Kinetic.Rect({
        x: 239,
        y: 75,
        width: 100,
        height: 50,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4
    });

    // add the shape to the layer
    layer.add(rect);

    // add the layer to the stage
    stage.add(layer);
}

// http://www.html5canvastutorials.com/kineticjs/html5-canvas-kineticjs-circle-tutorial/
namespace CircleTutorial {
    var stage = new Kinetic.Stage({
        container: 'container',
        width: 578,
        height: 200
    });

    var layer = new Kinetic.Layer();

    var circle = new Kinetic.Circle({
        x: stage.getWidth() / 2,
        y: stage.getHeight() / 2,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
    });

    // add the shape to the layer
    layer.add(circle);

    // add the layer to the stage
    stage.add(layer);
}
