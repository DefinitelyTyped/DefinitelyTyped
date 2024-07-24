// Project: https://github.com/f3oall/awesome-notifications
// Definitions by: Sibin Grasic <https://github.com/oblakstudio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace AWN {
    type AwnPosition = "bottom-right" | "bottom-left" | "top-left" | "top-right";
    type AwnPopupType = "modal" | "confirm";
    type AwnToastType = "global" | "tip" | "info" | "success" | "warning" | "alert";
    type AwnAsyncType = "async" | "async-block";
    type AwnConfirmType = "confirm" | "confirmOk" | "confirmCancel";

    type AwnToastOptions<T = string> = {
        [key in AwnToastType]?: T;
    };

    type AwnAsyncOptions<T = string> = {
        [key in AwnAsyncType]?: T;
    };

    type AwnConfirmOptions<T = string> = {
        [key in AwnConfirmType]?: T;
    };

    type AwnIconOptions =
        & Omit<AwnToastOptions<string>, "global">
        & Omit<AwnAsyncOptions<string>, "async-block">
        & { enabled?: boolean };

    type AwnLabelOptions =
        & Omit<AwnToastOptions<string>, "global">
        & Omit<AwnAsyncOptions<string>, "async-block">
        & AwnConfirmOptions<string>;

    type AwnMessageOptions =
        & Omit<AwnToastOptions<string>, "global">
        & AwnAsyncOptions<string>
        & Omit<AwnConfirmOptions<string>, "confirmOk" | "confirmCancel">;

    type AwnReplacementOptions =
        & Omit<AwnToastOptions<string>, "global">
        & AwnAsyncOptions<string>
        & Omit<AwnConfirmOptions<string>, "confirmOk" | "confirmCancel">
        & {
            modal?: string;
            general?: {
                "<script>"?: string;
                "</script>"?: string;
            };
        };

    interface AwnOptions<E = Error> {
        /**
         * Defines position of the toast. Can be 'bottom-right', 'bottom-left', 'top-left', 'top-right'.
         *
         * @default 'bottom-right'
         */
        position?: AwnPosition;

        /**
         * Maximum number of visible toasts. If there’re more toasts, the oldest will be removed.
         *
         * @default 10
         */
        maxNotifications?: number;

        /**
         * Animation duration in milliseconds.
         *
         * @default 300
         */
        animationDuration?: number;

        /**
         * Duration of the toast in milliseconds. Can be set for each type of toast separately.
         *
         * @default 5000
         */
        durations?: AwnToastOptions<number>;
        minDurations?: AwnAsyncOptions<number>;
        icons?: AwnIconOptions;
        labels?: AwnLabelOptions;
        messages?: AwnMessageOptions;
        replacements?: AwnReplacementOptions;
        formatError?: (error: E) => string | E;
    }

    class Elem {
        beforeInsert(): void;
        afterInsert(): void;
        insert(): Elem;
        replace(el: Elem): Elem;
        beforeDelete(el?: Elem): Promise<number>;
        delete(el?: Elem): Promise<void> | null;
        afterDelete(): void;
        getElement<T extends HTMLDivElement>(el?: Elem): T;
        addEvent<K extends keyof HTMLElementEventMap>(
            name: K,
            func: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any,
        ): void;
        toggleClass(classname: string): void;
        updateType(type: AwnToastType | AwnPopupType): void;
    }

    class Toast extends Elem {
        el: HTMLDivElement;

        parent: HTMLDivElement;

        setInnerHtml(html: string): void;

        /**
         * Checks if an element is deleted
         *
         * @param Elem el Element to check deletion status
         * @default this.el
         */
        isDeleted(el?: Elem): boolean;

        get progressBar(): string;
        get label(): string;
    }

    class Popup extends Elem {
        setInnerHtml(html: string): void;
        keyupListener(e: KeyboardEvent): void;

        get okBtn(): HTMLButtonElement;
        get cancelBtn(): HTMLButtonElement;
    }
}

declare class AWN<E = Error> {
    /**
     * Awesome Notifications
     * Lightweight JavaScript library with enhanced asynchronous events support.
     * @param  opts AwnOptions object
     */
    constructor(opts?: AWN.AwnOptions<E>);

    /**
     * Shows new tip toast
     * @param  message Defines message of the toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
     * @param  options Instance of `AwnOptions`, which will override globals for this call
     * @return         A new Toast instance
     */
    tip(message: string, options?: AWN.AwnOptions): AWN.Toast;

    /**
     * Shows new info toast
     * @param  message Defines message of the toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
     * @param  options Instance of `AwnOptions`, which will override globals for this call
     * @return         A new Toast instance
     */
    info(message: string, options?: AWN.AwnOptions): AWN.Toast;

    /**
     * Shows new success toast
     * @param  message Defines message of the toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
     * @param  options Instance of `AwnOptions`, which will override globals for this call
     * @return         A new Toast instance
     */
    success(message: string, options?: AWN.AwnOptions): AWN.Toast;

    /**
     * Shows new warning toast
     * @param  message Defines message of the toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
     * @param  options Instance of `AwnOptions`, which will override globals for this call
     * @return         A new Toast instance
     */
    warning(message: string, options?: AWN.AwnOptions): AWN.Toast;

    /**
     * Shows new alert toast
     * @param  message Defines message of the toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
     * @param  options Instance of `AwnOptions`, which will override globals for this call
     * @return         A new Toast instance
     */
    alert(message: string, options?: AWN.AwnOptions): AWN.Toast;

    /**
     * Closes all visible toasts. Do nothing if there’re no visible toasts.
     */
    closeToasts(): void;

    /**
     * Shows new async toast.
     * @param promise   Any JavaScript Promise
     * @param onResolve Can be Function or String. Processing of this parameter start after Promise resolve.
     *
     *                  If omitted, uses default behavior - `AWN.success(resp)` method will be called.
     *
     *                  If String, `AWN.success(onResolve)` method will be called;
     *
     *                  If Function, it will be called, can take resp as optional parameter.
     *
     *                  If null, disables default behavior.
     * @param onReject  Can be Function or String. Processing of this parameter start after Promise reject.
     *
     *                  If omitted, uses default behavior - `AWN.alert(err)` method will be called.
     *
     *                  If String, `AWN.alert(onReject)` method will be called;
     *
     *                  If Function, it will be called, can take err as optional parameter.
     *
     *                  If null, disables default behavior.
     * @param message   A message of async toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
     * @param options   Instance of `AwnOptions`, which will override globals for this call
     */
    async<T = unknown, R = E>(
        promise: Promise<T>,
        onResolve?: ((resp?: T) => void) | string,
        onReject?: ((resp: T | R) => void) | string,
        message?: string,
        options?: AWN.AwnOptions,
    ): Promise<T>;

    /**
     * Shows new blocking sync toast.
     *
     * @param promise   Any JavaScript Promise
     * @param onResolve Can be Function or String. Processing of this parameter start after Promise resolve.
     *                  If omitted, uses default behavior - `AWN.success(resp)` method will be called.
     *
     *                  If String, `AWN.success(onResolve)` method will be called;
     *
     *                  If Function, it will be called, can take resp as optional parameter.
     *
     *                  If null, disables default behavior.
     * @param onReject  Can be Function or String. Processing of this parameter start after Promise reject.
     *
     *                  If omitted, uses default behavior - `AWN.alert(err)` method will be called.
     *
     *                  If String, `AWN.alert(onReject)` method will be called;
     *
     *                  If Function, it will be called, can take err as optional parameter.
     *
     *                  If null, disables default behavior.
     * @param message   A message of async toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
     * @param options   Instance of `AwnOptions`, which will override globals for this call
     */
    asyncBlock<T = unknown, R = E>(
        promise: Promise<T>,
        onResolve?: ((resp?: T) => void) | string,
        onReject?: ((resp: T | R) => void) | string,
        message?: string,
        options?: AWN.AwnOptions,
    ): Promise<T>;

    /**
     * @param  message   Defines message of the modal window. Can be any valid HTML or text string.
     * @param  className Defines modal window DOM element class name, it will be concatenated with default prefix ‘awn-popup-‘
     * @param  options   Instance of `AwnOptions`, which will override globals for this call
     * @return           A new Popup instance
     */
    modal(message: string, className?: string, options?: AWN.AwnOptions): AWN.Popup;

    /**
     * Shows new confirmation window.
     *
     * Confirmation window can be closed by clicking on one of two buttons.
     *
     * Also you can use Esc key to close it. Focus will be set on OK button on opening by default.
     *
     * Focus will be trapped inside window, so user can use Tab (Shift+Tab) key only to switch between one of two buttons
     *
     * @param  message  Defines message of the confirmation window. Can be any valid HTML or text string.
     * @param  onOk     Defines Function, which will be executed on click to ‘OK’ button.
     * @param  onCancel Defines Function, which will be executed on click to ‘Cancel’ button.
     *                  If false was passed, ‘Cancel’ button will be hidden.
     * @param  options  Instance of `AwnOptions`, which will override globals for this call
     * @return          A new Popup instance
     */
    confirm(
        message: string,
        onOk?: () => void,
        onCancel?: (() => void) | false,
        options?: AWN.AwnOptions,
    ): AWN.Popup;
}

export = AWN;
