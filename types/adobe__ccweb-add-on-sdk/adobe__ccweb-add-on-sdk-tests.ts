import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";
import addOnSandboxSdk from "add-on-sdk-document-sandbox";
import { editor } from "express-document-sdk";

// $ExpectType string
addOnUISdk.apiVersion;

// Test iframe ui sdk is ready for use
addOnUISdk.ready.then(() => {
    console.log("addOnUISdk is ready for use.");
});

// Get the document sandbox runtime.
const { runtime } = addOnSandboxSdk.instance;

// Create a rectangle using the `editor`
const rectangle = editor.createRectangle();

// Define rectangle dimensions.
rectangle.width = 240;
rectangle.height = 180;

// Define rectangle color.
const color = { red: 0.32, green: 0.34, blue: 0.89, alpha: 1 };

// Fill the rectangle with the color.
const rectangleFill = editor.makeColorFill(color);
rectangle.fill = rectangleFill;

// Add the rectangle to the document.
const insertionParent = editor.context.insertionParent;
insertionParent.children.append(rectangle);
