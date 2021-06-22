import Emitter from "../emittermixin";

/**
 * Mixin that injects the DOM events API into its host. It provides the API
 * compatible with {@link module:utils/emittermixin~EmitterMixin}.
 *
 * DOM emitter mixin is by default available in the {@link module:ui/view~View} class,
 * but it can also be mixed into any other class:
 *
 *  import mix from '../utils/mix.js';
 *  import DomEmitterMixin from '../utils/dom/emittermixin.js';
 *
 *  class SomeView {}
 *  mix( SomeView, DomEmitterMixin );
 *
 *  const view = new SomeView();
 *  view.listenTo( domElement, ( evt, domEvt ) => {
 *   console.log( evt, domEvt );
 *  } );
 *
 */
export default abstract class DomEmitterMixin extends Emitter {}
