

// tests by Daniel Rosenwasser
function tester1() {
    var paper = Snap("#content");

    var i = 0;
    var n = 1000000;

    var x = 0;
    var y = 0;

    paper.click((ev) => { var x = ev.clientX; }, this)

    redrawLoop();

    function redrawLoop(): void {
        if (i < n) {
            setTimeout(redrawLoop, 50 + Math.random() * 50);
            drawDrop();
            i++;
        }
    }

    function drawDrop(): void {
        //var c = paper.circle(window.innerWidth * Math.random(), window.innerHeight * Math.random(), 50);
        var radius = 25;
        var c = paper.circle(x + radius * Math.random() - radius*2, y + radius * Math.random() - radius, radius*2);
        c.animate({ r: 0 }, 1000,  mina.bounce, () => c.remove());
    }
}

function tester2() {
    var m1 = Snap.matrix(1,2,3,4,5,6);

    m1.add(m1).add(m1);

    var m2 = Snap.matrix(0,0,0,0,0,0);
    m2.add(1,-1,1,-1,1,-1).add(-1,1,-1,1,-1,1);

    var m3 = Snap.matrix(1,1,1,1,1,1);
    m3.add(Snap.matrix(0,0,0,0,0,0)).add(m2);

    var m4 = Snap.matrix();

    console.log(m1.toString());
    console.log(m2.toString());
    console.log(m3.toString());
    console.log(m4.toString());
}

function tester3() {
    // true
    console.log(Snap.deg(Snap.rad(Snap.deg(Math.PI))) === Snap.deg(Snap.rad(180)));

    var colorString = "#BADA55";
    var rgb = Snap.getRGB(colorString);
    var col = Snap.color(colorString);
    var hsl = Snap.rgb2hsl(rgb.r, rgb.g, rgb.b);
    var hsb = Snap.rgb2hsb(rgb.r, rgb.g, rgb.b);

    // all true
    console.log(rgb.r === col.r && rgb.g === col.g && rgb.b === col.b && rgb.hex === col.hex);
    console.log(hsl.h === hsb.h);
    console.log(hsl.h === col.h && hsl.s === col.s && hsb.b === col.v);
    console.log(!col.error);
}

function tester4() {
    console.log("tester4");
    var paper = Snap(800,600);
    var bbox = paper.getBBox();

    console.log("cx:     " + bbox.cx);
    console.log("cy:     " + bbox.cy);
    console.log("h:      " + bbox.h);
    console.log("height: " + bbox.height);
    console.log("path:   " + bbox.path);
    console.log("r0:     " + bbox.r0);
    console.log("r1:     " + bbox.r1);
    console.log("r2:     " + bbox.r2);
    console.log("vb:     " + bbox.vb);
    console.log("w:      " + bbox.w);
    console.log("width:  " + bbox.width);
    console.log("x2:     " + bbox.x2);
    console.log("x:      " + bbox.x);
    console.log("y2:     " + bbox.y2);
    console.log("y:      " + bbox.y);
}

function tester5() {
    var sideLength = 100;
    var papel = Snap(1000, 1000);
    var square = papel.rect(100, 100, sideLength, sideLength, 10, 10);

    function updater(newSideLength: number) {
        square.attr({ x: newSideLength, y: newSideLength });
    }

    function easer(iArdlyKnowEr: number) {
        return iArdlyKnowEr * iArdlyKnowEr;
    }

    Snap.animate(sideLength, sideLength + 100, updater, 1500 /*ms*/);
    setTimeout(500, () => { Snap.animate(sideLength + 100,
                                         0,
                                         updater,
                                         100 /*ms*/,
                                         easer,
                                         square.remove); });
}

function tester6() {
    var path = Snap.path;
    // bboxing
    var b1 = path.bezierBBox(0, 0, 0, 0, 100, 100, 100, 100);
    var b2 = path.bezierBBox(50, 50, 50, 50, 150, 150, 150, 150);
    var b3 = path.bezierBBox(100, 100, 100, 100, 200, 200, 200, 200);

    // all true
    console.log(path.isBBoxIntersect(b1, b2));
    console.log(path.isBBoxIntersect(b1, b3));
    console.log(path.isPointInsideBBox(b1, 50, 50));
    console.log(path.isPointInsideBBox(b2, 50, 50));
    console.log(!path.isPointInsideBBox(b3, 50, 50));
}

//$(function () {
//    tester1();
//});

//tester2();
//tester3();
//tester4();
//tester5();
//tester6();
