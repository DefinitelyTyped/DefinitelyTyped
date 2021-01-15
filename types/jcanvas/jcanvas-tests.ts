
import jcanvas = require("jcanvas");
jcanvas($, window);


const elt = $(".foo");
elt.clearCanvas();
elt.drawSlice({
    fillStyle: "blue",
    x: 100, y: 100,
    radius: 80,
    start: 0, end: 359.9
});
elt.drawText({
    fillStyle: "white",
    strokeStyle: "red",
    strokeWidth: 2,
    x: 100, y: 100,
    fontSize: 48,
    fontFamily: "Arial",
    text: "bar"
});
