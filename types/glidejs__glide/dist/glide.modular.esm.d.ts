/* this module is ESModule only. */

import Glide = require('../index');
import ComponentFunction from '../components';
import TransformerFunction from '../mutator/transformers';
import { Anchors } from '../components/anchors';
import { Autoplay } from '../components/autoplay';
import { Breakpoints } from '../components/breakpoints';
import { Controls } from '../components/controls';
import { Images } from '../components/images';
import { Keyboard } from '../components/keyboard';
import { Swipe } from '../components/swipe';
import { Clones } from '../components/clones';
import { Direction } from '../components/direction';
import { Gaps } from '../components/gaps';
import { Html } from '../components/html';
import { Move } from '../components/move';
import { Peek } from '../components/peek';
import { Resize } from '../components/resize';
import { Run } from '../components/run';
import { Sizes } from '../components/sizes';
import { Transition } from '../components/transition';
import { Translate } from '../components/translate';

export { ComponentFunction, TransformerFunction };

/**
 * Handles clicking and dragging events of the internal `<a>` HTML elements,
 * so they won't interfere while interacting with an instance.
 */
export const Anchors: ComponentFunction<Anchors>;

/**
 * Manages auto-changing of slides after a defined time interval.
 */
export const Autoplay: ComponentFunction<Autoplay>;

/**
 * Reconfigures instance and its options based on currently matched `@media` breakpoint.
 */
export const Breakpoints: ComponentFunction<Breakpoints>;

export const Clones: ComponentFunction<Clones>;

/**
 * Manages creating a buttons that allows user to control movement of the instance.
 */
export const Controls: ComponentFunction<Controls>;

export const Direction: ComponentFunction<Direction>;

export const Gaps: ComponentFunction<Gaps>;

export const Html: ComponentFunction<Html>;

/**
 * Handles dragging events of the internal `<img>` HTML elements,
 * so they won't interfere while interacting with an instance.
 */
export const Images: ComponentFunction<Images>;

/**
 * Allows for controlling movement of the instance with keyboard's arrow keys.
 */
export const Keyboard: ComponentFunction<Keyboard>;

export const Move: ComponentFunction<Move>;

export const Peek: ComponentFunction<Peek>;

export const Resize: ComponentFunction<Resize>;

export const Run: ComponentFunction<Run>;

export const Sizes: ComponentFunction<Sizes>;

/**
 * Allows for controlling movement of the instance using finger swipe gestures.
 */
export const Swipe: ComponentFunction<Swipe>;

export const Transition: ComponentFunction<Transition>;

export const Translate: ComponentFunction<Translate>;

export default Glide;
