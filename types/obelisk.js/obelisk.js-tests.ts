import * as obelisk from 'obelisk.js';

function test_brick() {
    var canvas = <HTMLCanvasElement>document.getElementById('canvas-demo');

    var point = new obelisk.Point(500, 20);
    var pixelView = new obelisk.PixelView(canvas, point);

    var color = new obelisk.SideColor().getByInnerColor(obelisk.ColorPattern.PINK);
    var dimension = new obelisk.BrickDimension(300, 400);
    var brick = new obelisk.Brick(dimension, color);

    pixelView.renderObject(brick);
    var p3D = new obelisk.Point3D(20, 20, 0);
    pixelView.renderObject(brick, p3D);
}

function test_cube() {
    var canvas = <HTMLCanvasElement>document.getElementById('canvas-demo');

    var point = new obelisk.Point(500, 240);
    var pixelView = new obelisk.PixelView(canvas, point);

    var dimension = new obelisk.CubeDimension(120, 200, 60);
    var color = new obelisk.CubeColor().getByHorizontalColor(obelisk.ColorPattern.GRAY);
    var cube = new obelisk.Cube(dimension, color, false);
    pixelView.renderObject(cube);
}

function test_pyramid() {
    var canvas = <HTMLCanvasElement>document.getElementById('canvas-demo');

    var point = new obelisk.Point(500, 240);
    var pixelView = new obelisk.PixelView(canvas, point);

    var dimension = new obelisk.PyramidDimension(120);
    var color = new obelisk.PyramidColor().getByRightColor(obelisk.ColorPattern.YELLOW);
    var pyramid = new obelisk.Pyramid(dimension, color);
    pixelView.renderObject(pyramid);
}

function test_side() {
    var canvas = <HTMLCanvasElement>document.getElementById('canvas-demo');

    var point = new obelisk.Point(500, 200);
    var pixelView = new obelisk.PixelView(canvas, point);

    var colorX = new obelisk.SideColor().getByInnerColor(obelisk.ColorPattern.PINK);
    var colorY = new obelisk.SideColor().getByInnerColor(obelisk.ColorPattern.GRASS_GREEN);
    var dimensionX = new obelisk.SideXDimension(300, 100);
    var dimensionY = new obelisk.SideYDimension(300, 100);
    var sideX = new obelisk.SideX(dimensionX, colorX);
    var sideY = new obelisk.SideY(dimensionY, colorY);

    pixelView.renderObject(sideX);

    var p3DY = new obelisk.Point3D(0, 30, 0);
    pixelView.renderObject(sideY, p3DY);
}

function test_slope() {
    var canvas = <HTMLCanvasElement>document.getElementById('canvas-demo');

    var point = new obelisk.Point(550, 50);
    var pixelView = new obelisk.PixelView(canvas, point);

    var colorBrick = new obelisk.SideColor().getByInnerColor(obelisk.ColorPattern.GRAY);
    var dimension = new obelisk.BrickDimension(150, 400);
    var brick = new obelisk.Brick(dimension, colorBrick);

    pixelView.renderObject(brick);

    var color = new obelisk.SlopeColor().getByHorizontalColor(obelisk.ColorPattern.GRAY);

    var dimensionNorth = new obelisk.SlopeDimension(50, 40);
    var dimensionEast = new obelisk.SlopeDimension(40, 50);
    var dimensionSouth = new obelisk.SlopeDimension(50, 40);
    var dimensionWest = new obelisk.SlopeDimension(40, 50);

    var slopeNorth = new obelisk.SlopeNorth(dimensionNorth, color, false);
    var slopeEast = new obelisk.SlopeEast(dimensionEast, color);
    var slopeSouth = new obelisk.SlopeSouth(dimensionSouth, color);
    var slopeWest = new obelisk.SlopeWest(dimensionWest, color);

    var p3dNorth = new obelisk.Point3D(50, 50, 0);
    var p3dEast = new obelisk.Point3D(50, 200, 0);
    var p3dSouth = new obelisk.Point3D(50, 125, 0);
    var p3dWest = new obelisk.Point3D(50, 275, 0);

    pixelView.renderObject(slopeNorth, p3dNorth);
    pixelView.renderObject(slopeSouth, p3dSouth);
    pixelView.renderObject(slopeEast, p3dEast);
    pixelView.renderObject(slopeWest, p3dWest);

    pixelView.clear();
}

function test_gif_rendering() {
    var WIDTH = 64;
    var HEIGHT = 28;

    var img = <HTMLCanvasElement>document.getElementById('animation');
    var ctx = <CanvasRenderingContext2D>document.createElement('canvas').getContext("2d");
    var canvas = <HTMLCanvasElement>document.getElementById('canvas-uncle');

    var stack: any[] = [];
    var size = 8;
    var point = new obelisk.Point(50, 120);
    var pixelView = new obelisk.PixelView(canvas, point);

    function draw() {
        ctx.drawImage(img, 0, 0, WIDTH, HEIGHT);
        var imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
        pixelView.clear();
        for (var y = HEIGHT - 1; y >= 0; y--) {
            for (var x = 0; x < WIDTH - 1; x++) {
                var pixelColor = obelisk.CanvasTool.getPixel(imgData, x, y);
                if (pixelColor !== 0xFFFFFF) {
                    var cube: obelisk.Cube;
                    var flag = false;
                    for (var i in stack) {
                        if (stack[i][1] === pixelColor) {
                            cube = stack[i][0];
                            flag = true;
                            break;
                        }
                    }
                    if (!flag) {
                        var fixedColor = obelisk.ColorGeom.applyBrightness(pixelColor, 50);
                        var color = new obelisk.CubeColor().getByHorizontalColor(fixedColor);
                        var dimension = new obelisk.CubeDimension(size, size + 2, size);
                        cube = new obelisk.Cube(dimension, color, false);
                        stack.push([cube, pixelColor]);
                    }
                    var p3d = new obelisk.Point3D(x * (size - 2), 0, (HEIGHT - 1 - y) * (size));
                    pixelView.renderObject(cube, p3d);
                }
            }
        }
    }
    window.setInterval(draw, 50);

    var canvasFloor = <HTMLCanvasElement>document.getElementById('canvas-floor');
    var pixelViewFloor = new obelisk.PixelView(canvasFloor, point);
    var floorDimension = new obelisk.CubeDimension((size - 2) * (WIDTH + 2), (size - 2) * 9, size);
    var floor = new obelisk.Cube(floorDimension, new obelisk.CubeColor(), false);
    pixelViewFloor.renderObject(floor, new obelisk.Point3D(-20, -30, 0));
}

function test_line_rendering() {
    var canvas = document.getElementById('canvas-demo') as HTMLCanvasElement;

    // create pixel view container in point
    var point = new obelisk.Point(400, 200);
    var pixelView = new obelisk.PixelView(canvas, point);

    // create brick
    var colorX = new obelisk.LineColor(obelisk.ColorPattern.PINK);
    var colorY = new obelisk.LineColor(obelisk.ColorPattern.BLACK);
    var colorZ = new obelisk.LineColor(obelisk.ColorPattern.BLUE);

    var dimensionX = new obelisk.LineXDimension(100);
    var dimensionY = new obelisk.LineYDimension(100);
    var dimensionZ = new obelisk.LineZDimension(100);

    var lineX = new obelisk.LineX(dimensionX, colorX);
    var lineY = new obelisk.LineY(dimensionY, colorY);
    var lineZ = new obelisk.LineZ(dimensionZ, colorZ);

    // render in view
    var p3D = new obelisk.Point3D(0, 0, 0);
    pixelView.renderObject(lineX, p3D);
    pixelView.renderObject(lineY, p3D);
    pixelView.renderObject(lineZ, p3D);
}
