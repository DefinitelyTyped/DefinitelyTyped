// Basic constructor test
const eyeDropper = new EyeDropper();

// Test open() with no options
eyeDropper.open().then((result) => {
    // $ExpectType ColorSelectionResult
    result;

    // $ExpectType string
    result.sRGBHex;
});

// Test open() with empty options
eyeDropper.open({}).then((result) => {
    // $ExpectType ColorSelectionResult
    result;
});

// Test open() with AbortSignal
const controller = new AbortController();
eyeDropper.open({ signal: controller.signal }).then((result) => {
    // $ExpectType ColorSelectionResult
    result;

    // $ExpectType string
    result.sRGBHex;
});

// Test aborting the eyedropper
const controller2 = new AbortController();
const promise = eyeDropper.open({ signal: controller2.signal });
controller2.abort();
promise.catch((error) => {
    // $ExpectType any
    error;
});

// Test using async/await
async function selectColor() {
    const eyeDropper = new EyeDropper();
    const result = await eyeDropper.open();

    // $ExpectType ColorSelectionResult
    result;

    // $ExpectType string
    result.sRGBHex;

    return result.sRGBHex;
}

// Test with user interaction (e.g., button click)
document.getElementById("color-picker")?.addEventListener("click", async () => {
    const eyeDropper = new EyeDropper();
    try {
        const result = await eyeDropper.open();
        console.log(result.sRGBHex);
    } catch (error) {
        console.error("Color selection failed:", error);
    }
});
