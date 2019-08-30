// Type definitions for CodeMirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_dialog

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface CloseFunction {
       (): void;
    }
    interface KeyEvent {
      (event: KeyboardEvent, value: string, close: CloseFunction): boolean;
    }
    interface ButtonCallback {
      (cm: CodeMirror.Editor): void
    }

    interface DialogOptions {
      bottom?: boolean;
    }

    interface OpenDialogOptions extends DialogOptions {
      /**
       * If true, the dialog will be closed when the user presses enter in the input. Defaults to true.
       */
      closeOnEnter?: boolean;
      /**
       * Determines whether the dialog is closed when it loses focus. Defaults to true.
       */
      closeOnBlur?: boolean;
      /**
       * An event handler that will be called whenever keydown fires in the dialog's input. If your callback returns true,
       * the dialog will not do any further processing of the event.
       */
      onKeyDown?: KeyEvent;
      /**
       * Same as onKeyDown but for the keyup event.
       */
      onKeyUp?: KeyEvent;
      /**
       * Same as onKeyDown but for the input event.
       */
      onInput?: KeyEvent;
      /**
       * A callback that will be called after the dialog has been closed and removed from the DOM.
       */
      onClose?: (instance: Element) => void;
    }

    interface NotificationOptions extends DialogOptions {
      /**
       * The amount of time after which the notification will be automatically closed. If duration is zero, the dialog
       * will not be closed automatically.
       */
      duration?: number;
    }

    interface Editor {
        /**
         * Which can be called with an HTML fragment or a detached DOM node that provides the prompt (should include an
         * input or button tag), and a callback function that is called when the user presses enter.
         * @param template the DOM template
         * @param callback the callback when press "enter"
         * @param options optional options object
         */
        openDialog(template: Element, callback: (value: string, event: KeyboardEvent) => void, options?: OpenDialogOptions): CloseFunction;
        /**
         * That simply shows an HTML fragment as a notification at the top of the editor. If a notification is opened while another
         * is opened, it will close the currently opened one and open the new one immediately.
         * @param template the DOM template
         * @param callback the callback when press "enter"
         * @param options optional options object
         */
        openNotification(template: Element, options?: NotificationOptions): CloseFunction;
        /**
         *
         * @param template the DOM template
         * @param callbacks the callbacks when click on button
         * @param options optional options object
         */
        openConfirm(template: Element, callbacks: ButtonCallback[], options?: DialogOptions): CloseFunction;
    }
}
