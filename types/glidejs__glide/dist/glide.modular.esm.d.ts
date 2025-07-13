/* this module is ESModule only. */

import Glide = require("../index");
import ComponentFunction from "../components";
import { Anchors as AnchorsComponent } from "../components/anchors";
import { Autoplay as AutoplayComponent } from "../components/autoplay";
import { Breakpoints as BreakpointsComponent } from "../components/breakpoints";
import { Clones as ClonesComponent } from "../components/clones";
import { Controls as ControlsComponent } from "../components/controls";
import { Direction as DirectionComponent } from "../components/direction";
import { Gaps as GapsComponent } from "../components/gaps";
import { Html as HtmlComponent } from "../components/html";
import { Images as ImagesComponent } from "../components/images";
import { Keyboard as KeyboardComponent } from "../components/keyboard";
import { Move as MoveComponent } from "../components/move";
import { Peek as PeekComponent } from "../components/peek";
import { Resize as ResizeComponent } from "../components/resize";
import { Run as RunComponent } from "../components/run";
import { Sizes as SizesComponent } from "../components/sizes";
import { Swipe as SwipeComponent } from "../components/swipe";
import { Transition as TransitionComponent } from "../components/transition";
import { Translate as TranslateComponent } from "../components/translate";
import TransformerFunction from "../mutator/transformers";

export { ComponentFunction, TransformerFunction };

/**
 * Handles clicking and dragging events of the internal `<a>` HTML elements,
 * so they won't interfere while interacting with an instance.
 */
export const Anchors: ComponentFunction<AnchorsComponent>;

/**
 * Manages auto-changing of slides after a defined time interval.
 */
export const Autoplay: ComponentFunction<AutoplayComponent>;

/**
 * Reconfigures instance and its options based on currently matched `@media` breakpoint.
 */
export const Breakpoints: ComponentFunction<BreakpointsComponent>;

export const Clones: ComponentFunction<ClonesComponent>;

/**
 * Manages creating a buttons that allows user to control movement of the instance.
 */
export const Controls: ComponentFunction<ControlsComponent>;

export const Direction: ComponentFunction<DirectionComponent>;

export const Gaps: ComponentFunction<GapsComponent>;

export const Html: ComponentFunction<HtmlComponent>;

/**
 * Handles dragging events of the internal `<img>` HTML elements,
 * so they won't interfere while interacting with an instance.
 */
export const Images: ComponentFunction<ImagesComponent>;

/**
 * Allows for controlling movement of the instance with keyboard's arrow keys.
 */
export const Keyboard: ComponentFunction<KeyboardComponent>;

export const Move: ComponentFunction<MoveComponent>;

export const Peek: ComponentFunction<PeekComponent>;

export const Resize: ComponentFunction<ResizeComponent>;

export const Run: ComponentFunction<RunComponent>;

export const Sizes: ComponentFunction<SizesComponent>;

/**
 * Allows for controlling movement of the instance using finger swipe gestures.
 */
export const Swipe: ComponentFunction<SwipeComponent>;

export const Transition: ComponentFunction<TransitionComponent>;

export const Translate: ComponentFunction<TranslateComponent>;

export default Glide;
