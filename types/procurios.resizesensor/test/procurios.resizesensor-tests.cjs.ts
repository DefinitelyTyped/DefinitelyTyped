import resizeSensor = require("procurios.resizesensor");

const element = document.createElement("div");

// $ExpectType ResizeSensor
const sensor = resizeSensor.create(element, dimensions => {
    // $ExpectType Dimensions
    dimensions;
});

// $ExpectType void
sensor.destroy();
