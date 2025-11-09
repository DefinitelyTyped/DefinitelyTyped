// Test file for Color Thief type definitions
// This file should compile without errors when the types are correct

// Import the ColorThief class for testing
import ColorThief from "colorthief";

// Browser version tests
const colorThief = new ColorThief();
const img = document.createElement("img");

// Test getColor method
const dominantColor: ColorThief.RGBColor = colorThief.getColor(img);
const dominantColorWithQuality: ColorThief.RGBColor = colorThief.getColor(img, 5);

// Test getPalette method
const palette: ColorThief.RGBColor[] = colorThief.getPalette(img);
const paletteWithOptions: ColorThief.RGBColor[] = colorThief.getPalette(img, 8, 5);

// Test callback-based methods with proper typing
colorThief.getColorFromUrl(
    "https://example.com/image.jpg",
    (color: ColorThief.RGBColor, source: HTMLImageElement | string) => {
        console.log("Color:", color);
        console.log("Source:", source);
    },
);

colorThief.getImageData("https://example.com/image.jpg", (dataUrl: string) => {
    console.log("Data URL:", dataUrl);
});

colorThief.getColorAsync(
    "https://example.com/image.jpg",
    (color: ColorThief.RGBColor, source: HTMLImageElement | string) => {
        console.log("Async Color:", color);
        console.log("Source:", source);
    },
);

// Type checking - these should be valid types
const rgbColor: ColorThief.RGBColor = [255, 128, 0];
const options: ColorThief.Options = {
    colorCount: 5,
    quality: 8,
};

// Callback type checking
const colorCallback: ColorThief.ColorCallback = (color: ColorThief.RGBColor, source: HTMLImageElement | string) => {
    const [r, g, b] = color;
    console.log(`RGB: ${r}, ${g}, ${b}`);
};

const imageDataCallback: ColorThief.ImageDataCallback = (dataUrl: string) => {
    console.log("Received data URL:", dataUrl);
};

// Test array destructuring
const [red, green, blue] = dominantColor;
console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

// Test palette iteration
palette.forEach((color: ColorThief.RGBColor) => {
    const [r, g, b] = color;
    console.log(`Color: rgb(${r}, ${g}, ${b})`);
});

// Test type constraints
const validColorCount: number = 10; // should be between 2-20
const validQuality: number = 5; // should be >= 1

// Test optional parameters
const colorNoQuality = colorThief.getColor(img);
const paletteNoOptions = colorThief.getPalette(img);
const paletteWithColorCount = colorThief.getPalette(img, 5);

// Test that RGB values are numbers
const testColor: ColorThief.RGBColor = [255, 128, 0];
const rValue: number = testColor[0];
const gValue: number = testColor[1];
const bValue: number = testColor[2];
