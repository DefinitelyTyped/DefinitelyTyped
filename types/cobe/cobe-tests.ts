import createGlobe = require('cobe');

let phi = 0;

// $ExpectType Renderer
const globe = createGlobe(new HTMLCanvasElement(), {
    devicePixelRatio: 2,
    width: 1000,
    height: 1000,
    phi: 0,
    theta: 0,
    dark: 0,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.3, 0.3, 0.3],
    markerColor: [1, 0.5, 1],
    glowColor: [1, 1, 1],
    markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
    ],
    onRender: state => {
        state; // $ExpectType Record<string, unknown>
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
    },
});
