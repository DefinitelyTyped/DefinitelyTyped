///<reference path="../jquery/jquery.d.ts" />
///<reference path="tether.d.ts" />

var yellowBox = document.querySelector(".yellow");
var greenBox = document.querySelector(".green");

new Tether({
    attachment: "bottom middle",
    targetAttachment: "top middle",
    targetModifier: "visible",
    offset: "-15px 0",
    targetOffset: "0 0"
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

