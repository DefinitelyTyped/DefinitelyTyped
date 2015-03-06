///<reference path="../tether/tether.d.ts" />
///<reference path="drop.d.ts" />

var yellowBox = document.querySelector(".yellow");
var greenBox = document.querySelector(".green");

var d = new Drop({
    position: "bottom left",
    openOn: "click",
    constrainToWindow: true,
    constrainToScrollParent: true,
    classes: "",
    tetherOptions: {}
});

d.open();
d.close();
d.remove();
d.toggle();
d.position();
d.destroy();

d.on("open", () => null);
d.on("close", () => null);
d.once("close", () => null);
d.off("close", () => null);
d.off("open");

