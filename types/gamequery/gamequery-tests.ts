

//Original examples: https://github.com/onaluf/gameQuery/tree/master/tests/human

$(function () {
    var simpleVerticalAnimation = new $.gameQuery.Animation({ imageURL: "sv.png", type: $.gameQuery.ANIMATION_VERTICAL, numberOfFrame: 4, delta: 32, rate: 300 });
    var simpleHorizontalAnimation = new $.gameQuery.Animation({ imageURL: "sh.png", type: $.gameQuery.ANIMATION_HORIZONTAL, numberOfFrame: 4, delta: 32, rate: 300 });

    var multiVerticalAnimation = new $.gameQuery.Animation({ imageURL: "mv.png", type: $.gameQuery.ANIMATION_VERTICAL | $.gameQuery.ANIMATION_MULTI, numberOfFrame: 4, delta: 32, rate: 300, distance: 32 });
    var multiHorizontalAnimation = new $.gameQuery.Animation({ imageURL: "mh.png", type: $.gameQuery.ANIMATION_HORIZONTAL | $.gameQuery.ANIMATION_MULTI, numberOfFrame: 4, delta: 32, rate: 300, distance: 32 });

    var simpleOffsetVerticalAnimation = new $.gameQuery.Animation({ imageURL: "sov.png", type: $.gameQuery.ANIMATION_VERTICAL, offsetx: 100, offsety: 100, numberOfFrame: 4, delta: 32, rate: 300 });
    var simpleOffsetHorizontalAnimation = new $.gameQuery.Animation({ imageURL: "soh.png", type: $.gameQuery.ANIMATION_HORIZONTAL, offsetx: 100, offsety: 100, numberOfFrame: 4, delta: 32, rate: 300 });

    var multiOffsetVerticalAnimation = new $.gameQuery.Animation({ imageURL: "mov.png", type: $.gameQuery.ANIMATION_VERTICAL | $.gameQuery.ANIMATION_MULTI, offsetx: 100, offsety: 100, numberOfFrame: 4, delta: 32, rate: 300, distance: 32 });
    var multiOffsetHorizontalAnimation = new $.gameQuery.Animation({ imageURL: "moh.png", type: $.gameQuery.ANIMATION_HORIZONTAL | $.gameQuery.ANIMATION_MULTI, offsetx: 100, offsety: 100, numberOfFrame: 4, delta: 32, rate: 300, distance: 32 });

    var pingpongAnimation = new $.gameQuery.Animation({ imageURL: "rebound.png", type: $.gameQuery.ANIMATION_HORIZONTAL | $.gameQuery.ANIMATION_PINGPONG, numberOfFrame: 9, delta: 64, rate: 60 });
    var multiPingpongAnimation = new $.gameQuery.Animation({ imageURL: "reboundm.png", type: $.gameQuery.ANIMATION_HORIZONTAL | $.gameQuery.ANIMATION_PINGPONG | $.gameQuery.ANIMATION_MULTI, numberOfFrame: 9, delta: 64, rate: 60, distance: 64 });

    var callbackAnim = new $.gameQuery.Animation({ imageURL: "sv.png", type: $.gameQuery.ANIMATION_VERTICAL | $.gameQuery.ANIMATION_ONCE | $.gameQuery.ANIMATION_CALLBACK, numberOfFrame: 4, delta: 32, rate: 300 });
    var counter = 0;
    $("#playground").playground({ height: 64, width: 500 });

    $.playground()
        .addSprite("simpleVertical", { animation: simpleVerticalAnimation, posx: 0 })
        .addSprite("simpleHorizontal", { animation: simpleHorizontalAnimation, posx: 34 })
        .addSprite("multiVertical", { animation: multiVerticalAnimation, posx: 75 })
        .addSprite("multiHorizontal", { animation: multiHorizontalAnimation, posx: 109 })
        .addSprite("simpleOffsetVertical", { animation: simpleOffsetVerticalAnimation, posx: 150 })
        .addSprite("simpleOffsetHorizontal", { animation: simpleOffsetHorizontalAnimation, posx: 184 })
        .addSprite("multiOffsetVertical", { animation: multiOffsetVerticalAnimation, posx: 225 })
        .addSprite("multiOffsetHorizontal", { animation: multiOffsetHorizontalAnimation, posx: 259 })
        .addSprite("pingpong", { animation: pingpongAnimation, posx: 286, width: 64, height: 64 })
        .addSprite("multiPingpong", { animation: multiPingpongAnimation, posx: 350, width: 64, height: 64 })
        .addSprite("callback", {
            animation: callbackAnim, posx: 414, callback: function () {
                counter++;
                if (counter > 1) { 
                    $("#callback").remove();
                }
            }
        });

    $("#multiVertical").setAnimation(1);
    $("#multiHorizontal").setAnimation(1);
    $("#multiOffsetVertical").setAnimation(1);
    $("#multiOffsetHorizontal").setAnimation(1);
    $("#multiPingpong").setAnimation(1);

    $.playground().startGame();
});
$(function () {

    var red = new $.gameQuery.Animation({
        imageURL: "red.png",
        type: $.gameQuery.ANIMATION_HORIZONTAL
    });
    var blue = new $.gameQuery.Animation({
        imageURL: "blue.png",
        type: $.gameQuery.ANIMATION_HORIZONTAL
    });

    $("#playground").playground({ height: 450, width: 350 });

    // no group, no translation, no transformation
    $.playground()
        .addSprite("a1", { animation: red, width: 30, height: 30, posx: 0, posy: 0 })
        .addSprite("b1", { animation: red, width: 30, height: 30, posx: 15, posy: 15 });

    // one group, no translation, no transformation
    $.playground()
        .addSprite("a2", { animation: red, width: 30, height: 30, posx: 0, posy: 50 })
        .addGroup("g1", { width: 100, height: 100, posx: -55, posy: -5 })
            .addSprite("b2", { animation: red, width: 30, height: 30, posx: 70, posy: 70 });

    // no group, absolute translation, no rotation
    $.playground()
        .addSprite("a3", { animation: red, width: 30, height: 30, posx: 0, posy: 100 })
        .addSprite("b3", { animation: red, width: 30, height: 30, posx: 100, posy: 131 });
    $("#b3").x(15).y(115);

    // no group, relative translation, scale
    $.playground()
        .addSprite("a4", { animation: red, width: 30, height: 30, posx: 0, posy: 150 })
        .addSprite("b4", { animation: red, width: 30, height: 30, posx: 100, posy: 181 });
    $("#b4").x(-85, true).y(-16, true);

    // no group, no translation, flip
    $.playground()
        .addSprite("a5", { animation: red, width: 30, height: 30, posx: 0, posy: 200 })
        .addSprite("b5", { animation: red, width: 30, height: 30, posx: 15, posy: 215 });
    $("#a5").flipv();
    $("#b5").fliph();

    // no group, no translation, rotation
    $.playground()
        .addSprite("a6", { animation: red, width: 30, height: 30, posx: 0, posy: 250 })
        .addSprite("b6", { animation: red, width: 30, height: 30, posx: 30, posy: 265 });
    $("#b6").rotate(45);

    // no group, no translation, scale
    $.playground()
        .addSprite("a7", { animation: red, width: 30, height: 30, posx: 0, posy: 300 })
        .addSprite("b7", { animation: red, width: 30, height: 30, posx: 30, posy: 315 });
    $("#b7").scale(1.5);

    // no group, no translation, override
    $.playground()
        .addSprite("a8", { animation: red, width: 30, height: 30, posx: 0, posy: 370 })
        .addSprite("b8", { animation: red, width: 30, height: 30, posx: 40, posy: 385 });



    // now we try to turn every b* sprites blue
    $("#a1").collision().each(function () {
        $(this).setAnimation(blue);
    });

    $("#a2").collision().each(function () {
        $(this).setAnimation(blue);
    });

    $("#a3").collision().each(function () {
        $(this).setAnimation(blue);
    });

    $("#a4").collision().each(function () {
        $(this).setAnimation(blue);
    });

    $("#a5").collision().each(function () {
        $(this).setAnimation(blue);
    });

    $("#a6").collision().each(function () {
        $(this).setAnimation(blue);
    });

    $("#a7").collision().each(function () {
        $(this).setAnimation(blue);
    });

    $("#a8").collision({ x: 35 }).each(function () {
        $(this).setAnimation(blue);
    });

    $.playground().startGame();
});

$(function () {
    var multiAnimation = new $.gameQuery.Animation({
        imageURL: "m.png",
        type: $.gameQuery.ANIMATION_HORIZONTAL | $.gameQuery.ANIMATION_MULTI,
        numberOfFrame: 3,
        delta: 10,
        distance: 10,
        rate: 300
    });

    var multiAnimationPingpong = new $.gameQuery.Animation({
        imageURL: "m.png",
        type: $.gameQuery.ANIMATION_HORIZONTAL | $.gameQuery.ANIMATION_MULTI | $.gameQuery.ANIMATION_PINGPONG,
        numberOfFrame: 3,
        delta: 10,
        distance: 10,
        rate: 300
    });
    var animations = [];
    animations[0] = new $.gameQuery.Animation({
        imageURL: "s1.png",
        type: $.gameQuery.ANIMATION_HORIZONTAL,
        numberOfFrame: 3,
        delta: 10,
        rate: 300
    });
    animations[1] = new $.gameQuery.Animation({
        imageURL: "s2.png",
        type: $.gameQuery.ANIMATION_HORIZONTAL,
        numberOfFrame: 3,
        delta: 10,
        rate: 300
    });
    animations[2] = new $.gameQuery.Animation({
        imageURL: "s3.png",
        type: $.gameQuery.ANIMATION_HORIZONTAL,
        numberOfFrame: 3,
        delta: 10,
        rate: 300
    });

    var animationsPingpong = [];
    animationsPingpong[0] = new $.gameQuery.Animation({
        imageURL: "s1.png",
        type: $.gameQuery.ANIMATION_HORIZONTAL | $.gameQuery.ANIMATION_PINGPONG,
        numberOfFrame: 3,
        delta: 10,
        rate: 300
    });
    animationsPingpong[1] = new $.gameQuery.Animation({
        imageURL: "s2.png",
        type: $.gameQuery.ANIMATION_HORIZONTAL | $.gameQuery.ANIMATION_PINGPONG,
        numberOfFrame: 3,
        delta: 10,
        rate: 300
    });
    animationsPingpong[2] = new $.gameQuery.Animation({
        imageURL: "s3.png",
        type: $.gameQuery.ANIMATION_HORIZONTAL | $.gameQuery.ANIMATION_PINGPONG,
        numberOfFrame: 3,
        delta: 10,
        rate: 300
    });

    var tileDef = [[1, 2, 3], [2, 3, 1], [3, 1, 2]];
    var tileFun = function (i, j) { return 1 + (i + j) % 3; };
    $("#playground").playground({ height: 64, width: 350 });

    $.playground()
        .addTilemap("multiArray", tileDef, multiAnimation, { width: 10, height: 10, sizex: 3, sizey: 3, posx: 0 }).end()
        .addTilemap("multiFunction", tileFun, multiAnimation, { width: 10, height: 10, sizex: 3, sizey: 3, posx: 40 }).end()
        .addTilemap("arrayArray", tileDef, animations, { width: 10, height: 10, sizex: 3, sizey: 3, posx: 80 }).end()
        .addTilemap("arrayFunction", tileFun, animations, { width: 10, height: 10, sizex: 3, sizey: 3, posx: 120 }).end()
        .addTilemap("multiArrayPingpong", tileDef, multiAnimationPingpong, { width: 10, height: 10, sizex: 3, sizey: 3, posx: 160 }).end()
        .addTilemap("arrayArrayPingpong", tileDef, animationsPingpong, { width: 10, height: 10, sizex: 3, sizey: 3, posx: 200 }).end()
        .addGroup("testGroup", { height: 30, width: 30, posx: -40 }).addTilemap("outside", tileDef, multiAnimation, { width: 10, height: 10, sizex: 3, sizey: 3, posx: 0 });
    $("#testGroup").x(240);
    $.playground().startGame();
});

$(function () {
    var multiAnimation = new $.gameQuery.Animation({
        imageURL: "m.png",
        type: $.gameQuery.ANIMATION_HORIZONTAL | $.gameQuery.ANIMATION_MULTI,
        numberOfFrame: 3,
        delta: 10,
        distance: 10,
        rate: 300
    });

    var tileDef = [[1, 2, 3, 1, 2, 3, 1, 2, 3],
                   [2, 3, 1, 2, 3, 1, 2, 3, 1],
                   [3, 1, 2, 3, 1, 2, 3, 1, 2]];

    $("#playground").playground({ height: 60, width: 90 });

    $.playground()
        .addGroup("testGroup1", { height: 60, width: 180, posx: 0 })
            .addTilemap("map1", tileDef, multiAnimation, { width: 10, height: 10, sizex: 9, sizey: 3, posx: 0 }).end()
            .addTilemap("map2", tileDef, multiAnimation, { width: 10, height: 10, sizex: 9, sizey: 3, posx: 90 }).end()
        .end()
        .addGroup("testGroup2", { height: 60, width: 90, posy: 60 })
            .addTilemap("map3", tileDef, multiAnimation, { width: 10, height: 10, sizex: 9, sizey: 3, posx: 0 });


    $("#testGroup1").x(-45);
    $("#testGroup2").y(30);
    $.playground().startGame();
});

$(function () {
    var animation = new $.gameQuery.Animation({ imageURL: "sh.png", type: $.gameQuery.ANIMATION_HORIZONTAL, numberOfFrame: 4, delta: 32, rate: 300 });

    $("#playground").playground({ height: 64, width: 480 });

    $.playground()
        .addSprite("rotate", { animation: animation, posx: 0, posy: 16 })
        .addSprite("scale", { animation: animation, posx: 80, posy: 16 })
        .addSprite("rotateScale", { animation: animation, posx: 160, posy: 16 })
        .addSprite("scaleRotate", { animation: animation, posx: 240, posy: 16 })
        .addSprite("flipH", { animation: animation, posx: 320, posy: 16 })
        .addSprite("flipV", { animation: animation, posx: 400, posy: 16 })

    $("#rotate").rotate(45);
    $("#scale").scale(4);
    $("#scale").scale(0.5, true);
    $("#rotateScale").rotate(45).scale(2);
    $("#scaleRotate").scale(2).rotate(45);
    $("#flipV").flipv(true);
    $("#flipH").fliph(true);
    $.playground().startGame();
});
