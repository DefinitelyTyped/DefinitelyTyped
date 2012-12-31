///<reference path="..\fabricjs.d.ts" />

var dot, i,
    t1, t2,
    startTimer = function() {
        t1 = new Date().getTime();
        return t1;
    },
    stopTimer = function() {
        t2 = new Date().getTime();
        return t2 - t1;
    },
    getRandomInt = fabric.util.getRandomInt,
    rainbow    = ["#ffcc66", "#ccff66", "#66ccff", "#ff6fcf", "#ff6666"],
    rainbowEnd = rainbow.length - 1;

//
// Rendering canvas #1
//
var canvas1  = new fabric.Canvas('c1', { backgroundColor: "#000" }),
    results1 = document.getElementById('results-c1');

startTimer();
for (i = 100; i >= 0; i--) {
    dot = new fabric.Circle({
        left:   getRandomInt(0, 400),
        top:    getRandomInt(0, 350),
        radius: 3,
        fill:   rainbow[getRandomInt(0, rainbowEnd)]
    });
    canvas1.add(dot);
}
results1.innerHTML = 'Regular rendering of 100 elements in ' + stopTimer() + 'ms';


//
// Rendering canvas #2
//
var canvas2  = new fabric.Canvas('c2', { backgroundColor: "#000", renderOnAddition: false }),
    results2 = document.getElementById('results-c2');

startTimer();
for (i = 1000; i >= 0; i--) {
    dot = new fabric.Circle({
        left:   getRandomInt(0, 400),
        top:    getRandomInt(0, 350),
        radius: 3,
        fill:   rainbow[getRandomInt(0, rainbowEnd)]
    });
    canvas2.add(dot);
}
canvas2.renderAll(); // Note, calling renderAll() is important in this case
results2.innerHTML = 'Rendering 1000 elements using canvas.renderOnAddition = false in ' + stopTimer() + 'ms';