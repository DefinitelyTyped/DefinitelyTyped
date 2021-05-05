import '../../';

export type DialogCloseFunction = () => void;

export interface DialogOptions {
    bottom?: boolean;
}

export interface OpenDialogOptions extends DialogOptions {
    /** If true, the dialog will be closed when the user presses enter in the input. Defaults to true. */
    closeOnEnter?: boolean;
    /** Determines whether the dialog is closed when it loses focus. Defaults to true. */
    closeOnBlur?: boolean;
    /** An event handler that will be called whenever keydown fires in the dialog's input. If the callback returns true, the dialog will not do any further processing of the event. */
    onKeyDown?(event: KeyboardEvent, value: string, close: DialogCloseFunction): boolean | undefined;
    /** An event handler that will be called whenever keyup fires in the dialog's input. If the callback returns true, the dialog will not do any further processing of the event. */
    onKeyUp?(event: KeyboardEvent, value: string, close: DialogCloseFunction): boolean | undefined;
    /** An event handler that will be called whenever input fires in the dialog's input. If the callback returns true, the dialog will not do any further processing of the event. */
    onInput?(event: KeyboardEvent, value: string, close: DialogCloseFunction): boolean | undefined;
    /** A callback that will be called after the dialog has been closed and removed from the DOM. */
    onClose?(instance: HTMLElement): void;
}

export interface OpenNotificationOptions extends DialogOptions {
    duration?: number;
}

declare module '../../' {
    interface Editor {
        /** Provides a very simple way to query users for text input. */
         openDialog(template: string | Node, callback: (value: string, e: Event) => void, options?: OpenDialogOptions): DialogCloseFunction;
         openNotification(template: string | Node, options?: OpenNotificationOptions): DialogCloseFunction;
         openConfirm(template: string | Node, callbacks: ReadonlyArray<(editor: Editor) => void>, options?: DialogOptions): DialogCloseFunction;
    }
}
