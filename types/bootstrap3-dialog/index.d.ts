// Type definitions for bootstrap3-dialog 1.35
// Project: http://nakupanda.github.io/bootstrap3-dialog
// Definitions by: Dante <https://github.com/nakupanda>
//                 Craig Boland <https://github.com/cnboland>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace BootstrapDialog {
    interface DialogStatic {
        BUTTON_SIZES: any;
        BUTTONS_ORDER_CANCEL_OK: string;
        BUTTONS_ORDER_OK_CANCEL: string;
        DEFAULT_TEXTS: any;                 /** For text localization. */
        ICON_SPINNER: string;
        NAMESPACE: string;

        SIZE_NORMAL: string;
        SIZE_SMALL: string;
        SIZE_WIDE: string;
        SIZE_LARGE: string;

        TYPE_DEFAULT: string;
        TYPE_INFO: string;
        TYPE_PRIMARY: string;
        TYPE_SUCCESS: string;
        TYPE_WARNING: string;
        TYPE_DANGER: string;

        (options: DialogOptions): DialogContext;
        alert(message: string, closeCallback?: () => void): void;
        confirm(message: string, closeCallback?: (result: boolean) => void): void;
        show(options: DialogOptions): DialogInstance;
    }

    interface DialogOptions {
        /** Dialog header type. See BootstrapDialog.TYPE_xxx constants. */
        type?: string;
        /** Text size. See BootstrapDialog.SIZE_xxx constants. By default - SIZE_NORMAL */
        size?: string;
        /** Dialog title. Either string or JQuery element. */
        title?: string | JQuery;
        /** Dialog message. Either string, JQuery element, or function that returns either string or JQuery element. */
        message?: string | JQuery | ((dialog?: DialogContext) => string | JQuery);
        /**
         * When set to true, you can close the dialog by:
         *  - Clicking the close icon in dialog header.
         *  - Clicking outside the dialog.
         *  - ESC key.
         *
         * FALSE by default.
         */
        closable?: boolean;
        /** Whether dialog will close by clicking outside of it. */
        closeByBackdrop?: boolean;
        /** Whether dialog will close by ESC. */
        closeByKeyboard?: boolean;
        /** Whether fade-out background while showing the dialog. TRUE by default. */
        animate?: boolean;
        /** Data to be bound to the dialog. */
        data?: any;
        /** Whether dialog could be dragged by its header. Cursor could be changed (see doc)! FALSE by default. */
        draggable?: boolean;
        /**
         * If provided, 'aria-describedby' attribute will be added to the dialog with the description string as its value. This can improve accessibility, as the description can be read by screen
         * readers.
         */
        description?: string;
        /** Default button title. OK by default. */
        buttonLabel?: string;
        buttons?: DialogButton[];
        /** Result will be true if button was click, while it will be false if users close the dialog directly. */
        callback?: (result: boolean) => void;
        /** If provided, it will be invoked when the dialog is popping up. */
        onshow?(dialog?: DialogContext): void;
        /** If provided, it will be invoked when the dialog is popped up. */
        onshown?(dialog?: DialogContext): void;
        /**
         * If provided, it will be invoked when the dialog is popping down.
         * Return FALSE to don`t close the dialog. Don`t return anything by default.
         */
        onhide?(dialog?: DialogContext): any;
        /** If provided, it will be invoked when the dialog is popped down. */
        onhidden?(dialog?: DialogContext): void;

        /** 'Cancel' by default. */
        btnCancelLabel?: string;
        /** 'OK' by default. */
        btnOKLabel?: string;
        /** If you didn't specify it, dialog type will be used. */
        btnOKClass?: string;
        /** Additional css classes that will be added to your dialog. */
        cssClass?: string;
        /** Icon class name, for example 'glyphicon glyphicon-check'. */
        spinicon?: string;
        /**
         * When it's true, all modal stuff will be removed from the DOM tree after the dialog is popped down,
         * set it to false if you need your dialog (same instance) pups up and down again and again.
         * Default is true.
         */
        autodestroy?: boolean;
        /**
         * Automatically convert line breaking character to <br /> if it's set to true,
         * everything keeps original if it's false.
         */
        nl2br?: boolean;
    }

    interface DialogInstance {
        $modal: JQuery;
        $modalBody: JQuery;
        $modalContent: JQuery;
        $modalDialog: JQuery;
        $modalHeader: JQuery;
        $modalFooter: JQuery;
        options: DialogOptions;
        opened: boolean;
    }

    interface DialogButton {
        /** If id is set, you can use dialogInstance.getButton(id) to get the button later. */
        id?: string;
        label?: string;
        /** Hotkey char code */
        hotkey?: number;
        /** If set, the specified icon will be added to the button. */
        icon?: string;
        /** Additional css class to be added to the button. */
        cssClass?: string;
        /** Object containing data attributes to be added to the button. */
        data?: any;
        /**  If it's true, after clicked the button a spinning icon appears. */
        autospin?: boolean;
        /**
         * If provided, the callback will be invoked after the button is clicked, and the dialog instance
         * will be passed to the callback function.
         */
        action?: (dialog: DialogContext) => void;
    }

    interface DialogButtonInstance {
        toggleEnable(enabled: boolean): void;
        /** Equals to $button.toggleEnable(true); */
        enable(): void;
        /** Equals to $button.toggleEnable(false); */
        disable(): void;
        toggleSpin(spin: boolean): void;
        /** Equals to $button.toggleSpin(true); */
        spin(): void;
        /** Equals to $button.toggleSpin(false); */
        stopSpin(): void;
    }

    interface DialogContext {
        /** Open the dialog. Usage: dialogInstance.open() */
        open(): void;
        /**  	Close the dialog. Usage: dialogInstance.close() */
        close(): void;
        /**
         * Calling dialog.open() will automatically get this method called first, but if you want to do something on your dialog
         * before it's shown, you can manually call dialog.realize() before calling dialog.open().
         */
        realize(): void;
        getTitle(): string;
        setTitle(title: string): void;
        setMessage(message: string): void;
        /** Bind data entry to dialog instance, value can be any types that javascript supports. */
        setData(dataName: string, value: any): void;
        /** Get data entry according to the given key, returns null if no data entry found. */
        getData(dataName: string): any;
        getButton(buttonId: string): JQuery;
        /**
         * When set to true (default), dialog can be closed by clicking close icon in dialog header,
         * or by clicking outside the dialog, or, ESC key is pressed.
         */
        setClosable(closable: boolean): void;
        /** See BootstrapDialog.TYPE_xxx constants. */
        setType(dialogType: string): void;
        /** Disable all buttons in dialog footer when it's false, enable all when it's true. */
        enableButtons(enable: boolean): void;
        /** Return the raw modal, equivalent to $('<div class='modal fade'...></div>') */
        getModal(): JQuery;
        /** Return the raw modal content. */
        getModalContent(): JQuery;
        /** Return the raw modal dialog. */
        getModalDialog(): JQuery;
        /** Return the raw modal header. */
        getModalHeader(): JQuery;
        /** Return the raw modal footer. */
        getModalFooter(): JQuery;
        /** Return the raw modal body. */
        getModalBody(): JQuery;
    }
}

declare const BootstrapDialog: BootstrapDialog.DialogStatic;
