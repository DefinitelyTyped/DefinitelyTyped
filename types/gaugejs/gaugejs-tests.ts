import { Gauge, GaugeOptions } from "gaugejs";

const opts: GaugeOptions = {
    angle: 0.15, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: '#000000', // Fill color
        // Extra optional pointer options:
        iconPath: 'myicon.png',  // Icon image source
        iconScale: 1,    // Size scaling factor
        iconAngle: 90.0  // Rotation offset angle, degrees
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    percentColors: [[0.0, "#a9d70b"], [0.50, "#f9c802"], [1.0, "#ff0000"]],
    staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [100, 130, 150, 220.1, 260, 300],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
    },
    staticZones: [
        { strokeStyle: "#F03E3E", min: 100, max: 130 }, // Red from 100 to 130
        { strokeStyle: "#FFDD00", min: 130, max: 150 }, // Yellow
        { strokeStyle: "#30B32D", min: 150, max: 220 }, // Green
        { strokeStyle: "#FFDD00", min: 220, max: 260 }, // Yellow
        { strokeStyle: "#F03E3E", min: 260, max: 300 }  // Red
    ],
    renderTicks: {
        divisions: 5,
        divWidth: 1.1,
        divLength: 0.7,
        divColor: "#333333",
        subDivisions: 3,
        subLength: 0.5,
        subWidth: 0.6,
        subColor: "#666666"
    }
};

opts.staticZones = [
    { strokeStyle: "rgb(255,0,0)", min: 0, max: 500, height: 1.4 },
    { strokeStyle: "rgb(200,100,0)", min: 500, max: 1000, height: 1.2 },
    { strokeStyle: "rgb(150,150,0)", min: 1000, max: 1500, height: 1 },
    { strokeStyle: "rgb(100,200,0)", min: 1500, max: 2000, height: 0.8 },
    { strokeStyle: "rgb(0,255,0)", min: 2000, max: 3100, height: 0.6 }
];

const canvasElement = new HTMLCanvasElement();
const gauge = new Gauge(canvasElement).setOptions(opts); // create sexy gauge!
gauge.maxValue = 3000; // set max gauge value
gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.set(1250); // set actual value
