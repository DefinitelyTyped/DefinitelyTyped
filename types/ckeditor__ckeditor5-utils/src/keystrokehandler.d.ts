import { Emitter } from "./emittermixin";
import { PriorityString } from "./priorities";
import * as ckEngine from "@ckeditor/ckeditor5-engine";

/**
 * Keystroke handler allows registering callbacks for given keystrokes.
 *
 * The most frequent use of this class is through the {@link module:core/editor/editor~Editor#keystrokes `editor.keystrokes`}
 * property. It allows listening to keystrokes executed in the editing view:
 *
 *  editor.keystrokes.set( 'Ctrl+A', ( keyEvtData, cancel ) => {
 *   console.log( 'Ctrl+A has been pressed' );
 *   cancel();
 *  } );
 *
 * However, this utility class can be used in various part of the UI. For instance, a certain {@link module:ui/view~View}
 * can use it like this:
 *
 *  class MyView extends View {
 *   constructor() {
 *    this.keystrokes = new KeystrokeHandler();
 *
 *    	this.keystrokes.set( 'tab', handleTabKey );
 *   }
 *
 *   render() {
 *    super.render();
 *
 *    this.keystrokes.listenTo( this.element );
 *   }
 *  }
 *
 * That keystroke handler will listen to `keydown` events fired in this view's main element.
 *
 */
export default class KeystrokeHandler {
    /**
     * Starts listening for `keydown` events from a given emitter.
     *
     */
    listenTo(emitter: Emitter): void;
    /**
     * Registers a handler for the specified keystroke.
     *
     * the {@link module:utils/keyboard~parseKeystroke} function.
     * {@link module:engine/view/observer/keyobserver~KeyEventData key event data} object and
     * a helper funcion to call both `preventDefault()` and `stopPropagation()` on the underlying event.
     * callback. The higher the priority value the sooner the callback will be executed. Keystrokes having the same priority
     * are called in the order they were added.
     */
    set(
        keystroke: string | Array<string | number>,
        callback: (keyEvtData: ckEngine.view.observer.KeyEventData, cancel: () => void) => void,
        options?: { priority?: PriorityString | number },
    ): void;
    /**
     * Triggers a keystroke handler for a specified key combination, if such a keystroke was {@link #set defined}.
     *
     */
    press(keyEvtData: ckEngine.view.observer.KeyEventData): boolean;
    /**
     * Destroys the keystroke handler.
     */
    destroy(): void;
}
