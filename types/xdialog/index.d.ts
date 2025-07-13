declare namespace XDialog {
    interface Dialog {
        /**
         * Dialog html element id.
         */
        id: string;

        /**
         * Dialog html element.
         */
        element: Element;

        /**
         * Show dialog.
         */
        show(): void;

        /**
         * Hide dialog.
         */
        hide(): void;

        /**
         * Destroy dialog.
         */
        destroy(): void;

        /**
         * Hide dialog and destroy it.
         */
        close(): void;

        /**
         * Adjust dialog to make the whole dialog visible.
         */
        adjust(): void;

        /**
         * Fix Chrome blur.
         */
        fixChromeBlur(): void;
    }

    interface Button {
        text?: string;
        style?: string;
        clazz?: string;
    }

    interface CallbackParam {
        /**
         * Dialog html element id.
         */
        id: string;

        /**
         * Dialog html element.
         */
        element: Element;

        /**
         * Dialog instance.
         */
        dialog: XDialog.Dialog;

        /**
         * Dialog overlay element.
         */
        overlay: Element;

        /**
         * Event if any.
         */
        event: Event | null;
    }

    interface Options {
        /**
         * Dialog title.
         *
         * Use null value to remove title.
         */
        title?: string | null;

        /**
         * Dialog body.
         *
         * Valid values:
         * - null
         *      no body
         *
         * - string
         *      body html
         *
         * - object
         *      - src: body source selector
         *      - element: body source dom element
         *
         *      Please use element when selector not usable.
         *
         *      Example:
         *      ```
         *      {
         *          src: '#demo6-content'
         *          element: document.getElementById('demo6-content')
         *      }
         *      ```
         */
        body?: string | null | { src: string; element: Element };

        /**
         * Dialog buttons.
         *
         * valid values:
         * - null: no buttons
         *
         * - array:
         *      predefined button name or user defined button html like
         *      example: `['ok', 'cancel', 'delete', '<button id="my-button-id" class="my-button-class">Button-text</button>']`
         *
         * - object
         *      Button name to button text (predefined) or button html (user defined) or attribute object map like
         *      example:
         *      ```
         *      {
         *          ok: {
         *              text: 'okay',
         *              style: 'background:#4336f4;',
         *              clazz: 'xd-button xd-ok demo-copy-button'
         *          },
         *          delete: 'Delete',
         *          cancel: 'Cancel',
         *          other: '<button id="my-button-id" class="my-button-class">Button-text</button>'
         *      }
         *      ```
         */
        buttons?: ReadonlyArray<string> | null | {
            ok?: string | XDialog.Button;
            delete?: string | XDialog.Button;
            cancel?: string | XDialog.Button;
            other?: string | XDialog.Button;
        };

        /**
         * Dialog extra classes.
         *
         * For example `'xd-fatal my-dialog-class'`.
         */
        extraClass?: string;

        /**
         * Dialog extra style.
         *
         * For example `'width: 640px;'`.
         */
        style?: string;

        /**
         * Dialog show/hide effect, one of the following values:
         * - fade_in_and_scale
         * - slide_in_right
         * - slide_in_bottom
         * - newspaper
         * - fall
         * - side_fall
         * - sticky_up
         * - 3d_flip_horizontal
         * - 3d_flip_vertical
         * - 3d_sign
         * - super_scaled
         * - just_me
         * - 3d_slit
         * - 3d_rotate_bottom
         * - 3d_rotate_in_left
         * - blur
         * - let_me_in
         * - make_way
         * - slip_from_top
         *
         * Use '' or null value to disable effect.
         */
        effect?:
            | "fade_in_and_scale"
            | "slide_in_right"
            | "slide_in_bottom"
            | "newspaper"
            | "fall"
            | "side_fall"
            | "sticky_up"
            | "3d_flip_horizontal"
            | "3d_flip_vertical"
            | "3d_sign"
            | "super_scaled"
            | "just_me"
            | "3d_slit"
            | "3d_rotate_bottom"
            | "3d_rotate_in_left"
            | "blur"
            | "let_me_in"
            | "make_way"
            | "slip_from_top"
            | ""
            | null;

        /**
         * Fix dialog blur for chrome browser with/without transform and/or with/without perspective.
         *
         * true: to fix
         *
         * false: not to fix
         */
        fixChromeBlur?: boolean;

        /**
         * Modal or not.
         */
        modal?: boolean;

        /**
         * Timeout in seconds to close dialog automatically.
         *
         * Use 0 value to disable closing dialog automatically.
         */
        timeout?: number;

        /**
         * Listen enter key press or not.
         */
        listenEnterKey?: boolean;

        /**
         * Listen ESC key press or not.
         */
        listenESCKey?: boolean;

        /**
         * Callback when dialog element is about to be created.
         *
         * Return false to stop creating process.
         */
        beforecreate?: ((param: XDialog.CallbackParam) => boolean) | ((param: XDialog.CallbackParam) => void) | null;

        /**
         * Callback when dialog element has been created.
         */
        aftercreate?: ((param: XDialog.CallbackParam) => void) | null;

        /**
         * Callback before show.
         *
         * Return false to stop showing process.
         */
        beforeshow?: ((param: XDialog.CallbackParam) => boolean) | ((param: XDialog.CallbackParam) => void) | null;

        /**
         * Callback after show.
         */
        aftershow?: ((param: XDialog.CallbackParam) => void) | null;

        /**
         * Callback before hide.
         *
         * Return false to stop hidding process.
         */
        beforehide?: ((param: XDialog.CallbackParam) => boolean) | ((param: XDialog.CallbackParam) => void) | null;

        /**
         * Callback after hide.
         */
        afterhide?: ((param: XDialog.CallbackParam) => void) | null;

        /**
         * Callback when OK button pressed.
         *
         * Return false to avoid to be closed.
         */
        onok?: ((param: XDialog.CallbackParam) => boolean) | ((param: XDialog.CallbackParam) => void) | null;

        /**
         * Callback when Cancel button pressed.
         *
         * Return false to avoid to be closed.
         */
        oncancel?: ((param: XDialog.CallbackParam) => boolean) | ((param: XDialog.CallbackParam) => void) | null;

        /**
         * Callback when Delete button pressed.
         *
         * Return false to avoid to be closed.
         */
        ondelete?: ((param: XDialog.CallbackParam) => boolean) | ((param: XDialog.CallbackParam) => void) | null;

        /**
         * Callback when dialog is about to be destroyed.
         *
         * Return false to avoid to be destroyed.
         */
        ondestroy?: ((param: XDialog.CallbackParam) => boolean) | ((param: XDialog.CallbackParam) => void) | null;

        /**
         * Callback when drag will start.
         *
         * Return false to avoid being dragged by default process.
         *
         * Return true to allow being dragged.
         *
         * Otherwise to go default process.
         */
        ondrag?:
            | ((element: Element, destElement: Element, srcElement: Element) => boolean)
            | ((element: Element, destElement: Element, srcElement: Element) => void)
            | null;
    }
}

declare const xdialog: {
    /**
     * Ininitialize xdialog.
     * @param options.zIndex0 - initial z index to use, default value is 10000.
     */
    init(options: { zIndex0: number }): void;

    /**
     * Create a dialog.
     */
    create(options: XDialog.Options): XDialog.Dialog;

    /**
     * Create a dialog and show it.
     */
    open(options: XDialog.Options): XDialog.Dialog;

    /**
     * Display an alert dialog.
     */
    alert(text: string, options?: XDialog.Options): XDialog.Dialog;

    /**
     * Display a confirm dialog.
     */
    confirm(text: string, onyes: (param: XDialog.CallbackParam) => void, options?: XDialog.Options): XDialog.Dialog;

    /**
     * Display an information dialog.
     */
    info(text: string, options?: XDialog.Options): XDialog.Dialog;

    /**
     * Display a warning dialog.
     */
    warn(text: string, options?: XDialog.Options): XDialog.Dialog;

    /**
     * Display an error dialog.
     */
    error(text: string, options?: XDialog.Options): XDialog.Dialog;

    /**
     * Display a fatal error dialog.
     */
    fatal(text: string, options?: XDialog.Options): XDialog.Dialog;

    /**
     * Start spin animation.
     */
    startSpin(): void;

    /**
     * Stop spin animation.
     */
    stopSpin(): void;

    /**
     * Get all dialog instances.
     */
    readonly dialogs: ReadonlyArray<XDialog.Dialog>;
};
