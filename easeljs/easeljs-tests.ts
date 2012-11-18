/// <reference path="easeljs-0.5.d.ts" />

function test_simple() {
    var canvas = document.getElementById('canvas');
    var stage = new Stage(canvas);
    var shape = new Shape();
    shape.graphics.beginFill('rgba(255,0,0,1)').drawRoundRect(0, 0, 120, 120, 10);
    stage.addChild(shape);
    stage.update();
}

function test_animation() {
    var ss = new SpriteSheet({
        "frames": {
            "width": 200,
            "numFrames": 64,
            "regX": 2,
            "regY": 2,
            "height": 361
        },
        "animations": { "jump": [26, 63], "run": [0, 25] },
        "images": ["./assets/runningGrant.png"]
    });

    ss.getAnimation("run").frequency = 2;
    ss.getAnimation("run").next = "jump";
    ss.getAnimation("jump").next = "run";

    var bitmapAnimation = new BitmapAnimation(ss);
    bitmapAnimation.scaleY = bitmapAnimation.scaleX = .4;

    bitmapAnimation.gotoAndPlay("run");

    Ticker.setFPS(60);
    Ticker.addListener(stage);
    stage.addChild(bitmapAnimation);
}

function test_graphics() {
    var g = new Graphics();
    g.setStrokeStyle(1);
    g.beginStroke(Graphics.getRGB(0, 0, 0));
    g.beginFill(Graphics.getRGB(255, 0, 0));
    g.drawCircle(0, 0, 3);
    var s = new Shape(g);
    s.x = 100;
    s.y = 100;
    stage.addChild(s);
    stage.update();

    var myGraphics: Graphics;
    myGraphics.beginStroke("#F00").beginFill("#00F").drawRect(20, 20, 100, 50).draw(myContext2D);
}