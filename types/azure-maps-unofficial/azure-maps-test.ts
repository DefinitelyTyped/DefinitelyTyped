
let options = {
    "disable-telemetry": false,
    "subscription-key": "",
    zoom : 2,
    bearing: 0
} as atlas.Models.ServiceOptions & atlas.Models.CameraOptions ;

let m = new atlas.Map("map", options);

let circle = new atlas.data.Point(new atlas.data.Position(0,0));
var c_options = {
    color: "red",
    radius: 20,
    outlineWidth: 2,
    outlineColor: "white"
} as atlas.Models.CircleProperties;


let feature = new atlas.data.Feature(circle, c_options);

m.addCircles([feature]);

