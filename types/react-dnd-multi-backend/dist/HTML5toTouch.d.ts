import { Backends } from '../';

/**
 * Most commonly used set of Backends.
 * The default backend is the react-dnd-html5-backend.
 * The second backend is the react-dnd-touch-backend with enableMouseEvents = true,
 * preview = true, and the transition triggering on the "touchstart" event.
 */
declare const HTML5ToTouch: Backends;

export default HTML5ToTouch;
