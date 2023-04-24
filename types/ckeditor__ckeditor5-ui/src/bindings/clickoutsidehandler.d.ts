import { Emitter } from '@ckeditor/ckeditor5-utils/src/dom/emittermixin';

/**
 * Handles clicking **outside** of a specified set of elements, then fires an action.
 *
 * **Note**: Actually, the action is executed upon `mousedown`, not `click`. It prevents
 * certain issues when the user keeps holding the mouse button and the UI cannot react
 * properly.
 */
export default function clickOutsideHandler(options: {
    emitter: Emitter;
    activator: () => boolean;
    callback: () => void;
    contextElements: HTMLElement[];
}): void;
