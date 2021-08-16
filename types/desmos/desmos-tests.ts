const elt = document.getElementById("calculator") as HTMLDivElement;
const calculator = Desmos.GraphingCalculator(elt);
calculator.setExpression({ id: "graph1", latex: "y=x^2" });

// Save the current state of a calculator instance
const state = calculator.getState();

// Load a state into a calculator instance
calculator.setState(state);

// Reset the calculator to a blank state
calculator.setBlank();

// Save the current state of a calculator instance
const newDefaultState = calculator.getState();

// Set a new default state to match the current state
calculator.setDefaultState(newDefaultState);

// From this point forward the "Delete All" button will be replaced with a "Reset"
// button that will set the calculator to the state stored in newDefaultState,
// and the "home" zoom button will restore the viewport to that of newDefaultState.

// Capture a full size screenshot of the graphpaper
const fullsize = calculator.screenshot();

// Capture a double resolution screenshot of the graphpaper designed to
// be displayed at 200px by 200px
const thumbnail = calculator.screenshot({
    width: 200,
    height: 200,
    targetPixelRatio: 2,
});

// Append the thumbnail image to the current page
const img = document.createElement("img");
// Note: if width and height are not set, the thumbnail
// would display at 400px by 400px since it was captured
// with targetPixelRatio: 2.
img.width = 200;
img.height = 200;
img.src = thumbnail;
document.body.appendChild(img);

// Callback
function setImageSrc(data: string) {
    const img = document.getElementById("my-image") as HTMLImageElement;
    img.src = data;
}

// Take a screenshot of an exact region without regard for the aspect ratio
calculator.asyncScreenshot(
    {
        mode: "stretch",
        mathBounds: { left: -5, right: 5, bottom: -20, top: 0 },
    },
    setImageSrc,
);

// Show -5 to 5 on the x-axis and preserve the aspect ratio
calculator.asyncScreenshot(
    {
        mode: "preserveX",
        width: 500,
        height: 300,
        mathBounds: { left: -5, right: 5 },
    },
    setImageSrc
);

// Use the smallest bounding box containing the current viewport and preserve the aspect ratio
calculator.asyncScreenshot(setImageSrc);

// Preserve the aspect ratio if the axes are square, otherwise show the exact region
const opts = {
    mode: calculator.isProjectionUniform() ? "contain" as const : "stretch" as const,
    width: 500,
    height: 300,
    mathBounds: { left: -5, right: 5, bottom: -20, top: 0 },
};
calculator.asyncScreenshot(opts, setImageSrc);

// Define a variable m.  Doesn't graph anything.
calculator.setExpression({ id: "m", latex: "m=2" });

// Draw a red line with slope of m through the origin.
// Because m = 2, this line will be of slope 2.
calculator.setExpression({ id: "line1", latex: "y=mx", color: "#ff0000" });

// Updating the value of m will change the slope of the line to 3
calculator.setExpression({ id: "m", latex: "m=3" });

// Inequality to shade a circle at the origin
calculator.setExpression({ id: "circle1", latex: "x^2 + y^2 < 1" });

// Restrict the slider for the m variable to the integers from 1 to 10
calculator.setExpression({
    id: "m",
    sliderBounds: { min: 1, max: 10, step: 1 },
});

// Table with three columns. Note that the first two columns have explicitly
// specified values, and the third column is computed from the first.
calculator.setExpression({
    type: "table",
    columns: [
        {
            latex: "x",
            values: ["1", "2", "3", "4", "5"],
        },
        {
            latex: "y",
            values: ["1", "4", "9", "16", "25"],
            dragMode: Desmos.DragModes.XY,
        },
    ],
});

// Set the x axis to have arrows on both ends
calculator.updateSettings({ xAxisArrowMode: Desmos.AxisArrowModes.BOTH });

// Set xAxisLabel
calculator.updateSettings({ xAxisLabel: "Time" });

// Observe the value of `xAxisLabel`, and log a message when it changes.
calculator.settings.observe("xAxisLabel", () => {
    console.log(calculator.settings.xAxisLabel);
});

calculator.updateSettings({ randomSeed: "my-random-seed" });

// Only show the first quadrant
calculator.setMathBounds({
    left: 0,
    right: 10,
    bottom: 0,
    top: 10,
});

calculator.observe("graphpaperBounds", () => {
    const pixelCoordinates = calculator.graphpaperBounds.pixelCoordinates;
    const mathCoordinates = calculator.graphpaperBounds.mathCoordinates;

    const pixelsPerUnitY = pixelCoordinates.height / mathCoordinates.height;
    const pixelsPerUnitX = pixelCoordinates.width / mathCoordinates.width;

    console.log("Current aspect ratio: " + pixelsPerUnitY / pixelsPerUnitX);
});

// Find the pixel coordinates of the graphpaper origin:
calculator.mathToPixels({ x: 0, y: 0 });

// Find the math coordinates of the mouse
const calculatorRect = elt.getBoundingClientRect();
document.addEventListener("mousemove", (evt) => {
    console.log(
        calculator.pixelsToMath({
            x: evt.clientX - calculatorRect.left,
            y: evt.clientY - calculatorRect.top,
        }),
    );
});

// Add three different observers to the 'xAxisLabel' property
calculator.settings.observe("xAxisLabel.foo", () => {});
calculator.settings.observe("xAxisLabel.bar", () => {});
calculator.settings.observe("xAxisLabel.baz", () => {});

// Stop firing `callback2` when the x-axis label changes
calculator.settings.unobserve("xAxisLabel.bar");

// Remove the two remaining observers
calculator.settings.unobserve("xAxisLabel");

calculator.setExpression({
    id: "1",
    latex: "y=x",
    color: Desmos.Colors.BLUE,
});

calculator.setExpression({
    id: "2",
    latex: "y=x + 1",
    color: "#ff0000",
});

calculator.setExpression({
    id: "3",
    latex: "y=sin(x)",
    color: calculator.colors.customBlue,
});

// Make a dashed line
calculator.setExpression({
    id: "line",
    latex: "y=x",
    lineStyle: Desmos.Styles.DASHED,
});

// This will render with normal movable point styling, because named point
// assignments result in points with a `dragMode` of `XY` by default
calculator.setExpression({
    id: "pointA",
    latex: "A=(1,2)",
    pointStyle: Desmos.Styles.CROSS,
});

// Now point A will render with `CROSS` styling
calculator.setExpression({
    id: "pointA",
    dragMode: Desmos.DragModes.NONE,
});

// Point B will render as a hole
calculator.setExpression({
    id: "pointB",
    latex: "B=(2,4)",
    dragMode: Desmos.DragModes.NONE,
    pointStyle: Desmos.Styles.OPEN,
});

// This point will render with `CROSS` styling, because the default
// `dragMode` for an unassigned point with numeric values is `NONE`
calculator.setExpression({
    id: "pointC",
    latex: "(7,5)",
    pointStyle: Desmos.Styles.CROSS,
});

calculator.updateSettings({ fontSize: Desmos.FontSizes.LARGE });

calculator.updateSettings({ fontSize: 11 });

// Inspect available languages
Desmos.supportedLanguages; // ['es', 'fr']

// Set a calculator instance to French
calculator.updateSettings({ language: "fr" });

// All features enabled
Desmos.enabledFeatures ===
    {
        GraphingCalculator: true,
        FourFunctionCalculator: true,
        ScientificCalculator: true,
    };

// Only graphing calculator enabled
Desmos.enabledFeatures ===
    {
        GraphingCalculator: true,
        FourFunctionCalculator: false,
        ScientificCalculator: false,
    };

const elt1 = document.getElementById("four-function-calculator") as HTMLDivElement;
const calculator1 = Desmos.FourFunctionCalculator(elt1);

const elt2 = document.getElementById("scientific-calculator") as HTMLDivElement;
const calculator2 = Desmos.ScientificCalculator(elt2);
