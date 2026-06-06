import Parallax = require("parallax-js");
import { ParallaxOptions } from "parallax-js";

// --- test parallax constructor ---
// @ts-expect-error
new Parallax(); // first argument is required

// @ts-expect-error
new Parallax(null); // first argument may not be null

const scene: HTMLElement = document.createElement("div");
new Parallax(scene); // the options object is optional
new Parallax(scene, {}); // all options are optional

// --- test parallax options with examples ---

// create parallax default options
const defaultOptions: ParallaxOptions = {
    relativeInput: false,
    clipRelativeInput: false,
    hoverOnly: false,
    inputElement: null,
    calibrateX: false,
    calibrateY: true,
    invertX: true,
    invertY: true,
    limitX: false,
    limitY: false,
    scalarX: 10.0,
    scalarY: 10.0,
    frictionX: 0.1,
    frictionY: 0.1,
    originX: 0.5,
    originY: 0.5,
    precision: 1,
    selector: null,
    pointerEvents: false,
    onReady: null,
};

// create parallax with valid non-default values
const parallax = new Parallax(scene, {
    relativeInput: true,
    clipRelativeInput: true,
    hoverOnly: true,
    inputElement: scene,
    calibrateX: true,
    calibrateY: false,
    invertX: false,
    invertY: false,
    limitX: 512,
    limitY: 512,
    scalarX: 15.0,
    scalarY: 30.0,
    frictionX: 1.0,
    frictionY: 1.0,
    originX: 0.0,
    originY: 0.0,
    precision: 10,
    selector: ".my-layer",
    pointerEvents: true,
    onReady: () => console.log("I'm SO ready to do some parallaxing!"),
});

// --- test options that allow multiple types ---
// inputElement allows null, HTMLElement
const inputElementOpts: ParallaxOptions[] = [{ inputElement: null }, { inputElement: scene }];
parallax.setInputElement(null);
parallax.setInputElement(scene);

// Query selector strings are not accepted for programmatically setting the
// input element. They are only allowed for setting the input element through
// the `data-input-element` attribute.
// @ts-expect-error
parallax.setInputElement("#scene");
// @ts-expect-error
const invalidInputElementOpt: ParallaxOptions = { inputElement: "#scene" };

// limitX allows false (but not true!) and integers
const limitXOpts: ParallaxOptions[] = [{ limitX: false }, { limitX: 100 }];
parallax.limit(false, 0);
parallax.limit(100, 0);
// @ts-expect-error
const invalidLimitXOpt: ParallaxOptions = { limitX: true };
// @ts-expect-error
parallax.limit(true, 0);

// limitY allows false (but not true!) and integers
const limitYOpts: ParallaxOptions[] = [{ limitY: false }, { limitY: 100 }];
parallax.limit(0, false);
parallax.limit(0, 100);
// @ts-expect-error
const invalidLimitYOpt: ParallaxOptions = { limitY: true };
// @ts-expect-error
parallax.limit(0, true);

// selector allows null or string
const selectorOpts: ParallaxOptions[] = [{ selector: null }, { selector: ".layer" }];

// onReady allows null or callback function
const onReadyOptions: ParallaxOptions[] = [{ onReady: null }, { onReady: () => console.log("Parallax is ready!") }];

// --- test parallax object non-setter methods ---
parallax.disable();
parallax.enable();
const version: string = parallax.version();
parallax.destroy();

// --- test parallax setters with valid sample values ---
parallax.setInputElement(scene);
parallax.calibrate(true, false);
parallax.invert(true, false);
parallax.limit(false, 100);
parallax.scalar(25.0, 15.0);
parallax.friction(0.15, 0.075);
parallax.origin(0, 0.5);
