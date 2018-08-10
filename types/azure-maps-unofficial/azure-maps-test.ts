
const options = {
    "disable-telemetry": false,
    "subscription-key": "",
    zoom : 2,
    bearing: 0
} as atlas.Models.ServiceOptions & atlas.Models.CameraOptions ;

let m = new atlas.Map("map", options);

