// Type definitions for Apache Cordova Dialogs plugin
// Project: https://github.com/apache/cordova-plugin-dialogs
// Definitions by: Microsoft Open Technologies Inc <http://msopentech.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// 
// Copyright (c) Microsoft Open Technologies Inc
// Licensed under the MIT license. 

interface Navigator {
    /** This plugin provides access to some native dialog UI elements. */
    notification: Notification
}

/** This plugin provides access to some native dialog UI elements. */
interface Notification {
    /**
     * Shows a custom alert or dialog box. Most Cordova implementations use a native dialog box for this feature,
     * but some platforms use the browser's alert function, which is typically less customizable.
     * @param message       Dialog message.
     * @param alertCallback Callback to invoke when alert dialog is dismissed.
     * @param title         Dialog title, defaults to 'Alert'.
     * @param buttonName    Button name, defaults to OK.
     */
    alert(message: string,
        alertCallback: () => void,
        title?: string,
        buttonName?: string): void;
    /**
     * The device plays a beep sound.
     * @param times The number of times to repeat the beep. 
     */
    beep(times: number): void;
    /**
     * Displays a customizable confirmation dialog box.
     * @param message           Dialog message.
     * @param confirmCallback   Callback to invoke with index of button pressed (1, 2, or 3)
     *                                   or when the dialog is dismissed without a button press (0).
     * @param title             Dialog title, defaults to Confirm.
     * @param buttonLabels      Array of strings specifying button labels, defaults to [OK,Cancel].
     */
    confirm(message: string,
        confirmCallback: (choice: number) => void,
        title?: string,
        buttonLabels?: string[]): void;
    /**
     * Displays a native dialog box that is more customizable than the browser's prompt function.
     * @param message           Dialog message.
     * @param promptCallback    Callback to invoke when a button is pressed.
     * @param title             Dialog title, defaults to "Prompt".
     * @param buttonLabels      Array of strings specifying button labels, defaults to ["OK","Cancel"].
     * @param defaultText       Default textbox input value, default: "".
     */
    prompt(message: string,
        promptCallback: (result: NotificationPromptResult) => void,
        title?: string,
        buttonLabels?: string[],
        defaultText?: string): void;
}

/** Object, passed to promptCallback */
interface NotificationPromptResult {
    /**
     * The index of the pressed button. Note that the index uses one-based indexing, so the value is 1, 2, 3, etc.
     * 0 is the result when the dialog is dismissed without a button press.
     */
    buttonIndex: number;
    /** The text entered in the prompt dialog box. */
    input1: string;
}