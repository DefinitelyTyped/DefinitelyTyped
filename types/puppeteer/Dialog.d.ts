export type DialogType = "alert" | "beforeunload" | "confirm" | "prompt";

/** Dialog objects are dispatched by page via the 'dialog' event. */
export interface Dialog {
    /**
     * Accepts the dialog.
     * @param promptText A text to enter in prompt. Does not cause any effects if the dialog's type is not prompt.
     */
    accept(promptText?: string): Promise<void>;

    /** If dialog is prompt, returns default prompt value. Otherwise, returns empty string. */
    defaultValue(): string;

    /** Dismiss the dialog */
    dismiss(): Promise<void>;

    /** Returns the message displayed in the dialog. */
    message(): string;

    /** The dialog type. Dialog's type, can be one of `alert`, `beforeunload`, `confirm` or `prompt`. */
    type(): DialogType;
}
