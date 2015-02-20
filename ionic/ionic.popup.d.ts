declare module Ionic {
    interface IPopupButton {
        text: string;
        type: string;
        onTap(e: Event): void;
    }

    interface IPopupOptions {
        /**
         * The title of the popup
         */
        title: string;

        /**
         * The sub-title of the popup
         */
        subTitle?: string;

        /**
         * The html template to place in the popup body
         */
        template?: string;

        /**
         * The URL of an html template to place in the popup body
         */
        templateUrl?: string;

        /**
         * A scope to link to the popup content
         */
        scope?: ng.IScope;

        /**
         * Buttons to place in the popup footer
         */
        buttons?: Array<IPopupButton>;
    }

    interface IPopupAlertOptions {
        /**
         * The title of the popup
         */
        title: string;

        /**
         * The sub-title of the popup
         */
        subTitle?: string;

        /**
         * The html template to place in the popup body
         */
        template?: string;

        /**
         * The URL of an html template to place in the popup body
         */
        templateUrl?: string;

        /**
         * The text of the OK button
         */
        okText?: string;

        /**
         * The type of the OK button
         */
        okType?: string;
    }

    interface IPopupConfirmOptions {
        /**
         * The title of the popup
         */
        title: string;

        /**
         * The sub-title of the popup
         */
        subTitle?: string;

        /**
         * The html template to place in the popup body
         */
        template?: string;

        /**
         * The URL of an html template to place in the popup body
         */
        templateUrl?: string;

        /**
         * The text of the Cancel button
         */
        canelText?: string;

        /**
         * The type of the Cancel button
         */
        cancelType?: string;

        /**
         * The text of the OK button
         */
        okText?: string;

        /**
         * The type of the OK button
         */
        okType?: string;
    }

    interface IPopupPromptOptions {
        /**
         * The title of the popup
         */
        title: string;

        /**
         * The sub-title of the popup
         */
        subTitle?: string;

        /**
         * The html template to place in the popup body
         */
        template?: string;

        /**
         * The URL of an html template to place in the popup body
         */
        templateUrl?: string;

        /**
         * The type of input of use
         */
        inputType: string;

        /**
         * A placeholder to use for the input
         */
        inputPlaceholder: string;

        /**
         * The text of the Cancel button
         */
        canelText?: string;

        /**
         * The type of the Cancel button
         */
        cancelType?: string;

        /**
         * The text of the OK button
         */
        okText?: string;

        /**
         * The type of the OK button
         */
        okType?: string;
    }

    /**
     * Angular service: $ionicPopup
     * 
     * The Ionic Popup service allows programmatically creating and showing popup windows that require the user to respond in order to continue.
     * The popup system has support for more flexible versions of the built in alert(), prompt(), and confirm() functions that users are used to,
     * in addition to allowing popups with completely custom content and look.
     * An input can be given an autofocus attribute so it automatically receives focus when the popup first shows.
     * However, depending on certain use-cases this can cause issues with the tap/click system,
     * which is why Ionic prefers using the autofocus attribute as an opt-in feature and not the default.
     */
    interface IPopup {
        // TODO: promise
        /**
         * Show a complex popup. This is the master show function for all popups.
         * A complex popup has a buttons array, with each button having a text and type field, in addition to an onTap function.
         * The onTap function, called when the correspondingbutton on the popup is tapped,
         * will by default close the popup and resolve the popup promise with its return value.
         * If you wish to prevent the default and keep the popup open on button tap, call event.preventDefault() on the passed in tap event.
         * 
         * Returns a promise which is resolved when the popup is closed. Has an additional close function, which can be used to programmatically close the popup.
         * 
         * @param options The options for the new popup
         */
        show(options: IPopupOptions): any;

        /**
         * Show a simple alert popup with a message and one button that the user can tap to close the popup.
         * 
         * Returns a promise which is resolved when the popup is closed. Has one additional function close, which can be called with any value to programmatically close the popup with the given value.
         * 
         * @param options The options for showing the alert
         */
        alert(options: IPopupAlertOptions): any;

        /**
         * Show a simple confirm popup with a Cancel and OK button.
         * Resolves the promise with true if the user presses the OK button, and false if the user presses the Cancel button.
         * 
         * Returns a promise which is resolved when the popup is closed. Has one additional function close, which can be called with any value to programmatically close the popup with the given value.
         * 
         * @parma options The options for showing the confirm popup
         */
        confirm(options: IPopupConfirmOptions): any;

        /**
         * Show a simple prompt popup, which has an input, OK button, and Cancel button. Resolves the promise with the value of the input if the user presses OK, and with undefined if the user presses Cancel.
         * 
         * Returns a promise which is resolved when the popup is closed. Has one additional function close, which can be called with any value to programmatically close the popup with the given value.
         * 
         * @param options The options for showing the prompt popup
         */
        prompt(options: IPopupPromptOptions): any;
    }
}