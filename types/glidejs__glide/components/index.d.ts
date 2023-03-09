import Glide = require('../index');
import EventsBus from '../core/event/events-bus';
import { Anchors } from './anchors';
import { Autoplay } from './autoplay';
import { Breakpoints } from './breakpoints';
import { Build } from './build';
import { Clones } from './clones';
import { Controls } from './controls';
import { Direction } from './direction';
import { Gaps } from './gaps';
import { Html } from './html';
import { Images } from './images';
import { Keyboard } from './keyboard';
import { Move } from './move';
import { Peek } from './peek';
import { Resize } from './resize';
import { Run } from './run';
import { Sizes } from './sizes';
import { Swipe } from './swipe';
import { Transition } from './transition';
import { Translate } from './translate';

type ComponentFunction<T = Record<string, any>> = (Glide: Glide, Components: Components, Events: EventsBus) => T;

export interface Components {
    Anchors: Anchors;
    Autoplay: Autoplay;
    Breakpoints: Breakpoints;
    Build: Build;
    Clones: Clones;
    Controls: Controls;
    Direction: Direction;
    Gaps: Gaps;
    Html: Html;
    Images: Images;
    Keyboard: Keyboard;
    Move: Move;
    Peek: Peek;
    Resize: Resize;
    Run: Run;
    Sizes: Sizes;
    Swipe: Swipe;
    Transition: Transition;
    Translate: Translate;
}

export default ComponentFunction;
