///<reference types="jquery" />
import Tether = require("tether");

var yellowBox = document.querySelector(".yellow");
var greenBox = document.querySelector(".green");

new Tether({
    attachment: "bottom middle",
    targetAttachment: "top middle",
    targetModifier: "visible",
    offset: "-15px 0",
    targetOffset: "0 0",
    classes: {
      'element': false,
      'target': 'someClassName'
    }
});

new Tether({
    element: yellowBox,
    target: greenBox,
    attachment: "top left",
    optimizations: {
        gpu: false
    }
});

new Tether({
    element: yellowBox,
    target: greenBox,
    attachment: "top left",
    targetAttachment: "bottom left",
    constraints: [
        {
            to: "scrollParent",
            pin: true
        },
        {
            to: "window",
            attachment: "together"
        }
    ]
});

new Tether({
    element: yellowBox,
    target: greenBox,
    attachment: "middle left",
    targetAttachment: "middle left",
    constraints: [
        {
            to: "scrollParent",
            pin: ["top"]
        }
    ]
});
