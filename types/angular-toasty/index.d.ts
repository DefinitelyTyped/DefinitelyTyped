/// <reference types="angular" />

declare namespace toasty {
    interface IToastyService {
        /**
         * Create a toast with the given options and type.
         * @param options
         * @param type
         */
        (options: IToastyConfig, type?: string): void;

        /**
         * Create a default "quick toast" with the given title.
         * @param title
         */
        (title: string | number): void;

        /**
         * Create a default toast with the given options.
         * @param options
         */
        default(options: IToastyConfig): void;

        /**
         * Create a default "quick toast" with the given title.
         * @param title
         */
        default(title: string | number): void;

        /**
         * Create an info toast with the given options.
         * @param options
         */
        info(options: IToastyConfig): void;

        /**
         * Create an info "quick toast" with the given title.
         * @param title
         */
        info(title: string | number): void;

        /**
         * Create a wait toast with the given options.
         * @param options
         */
        wait(options: IToastyConfig): void;

        /**
         * Create a wait "quick toast" with the given title.
         * @param title
         */
        wait(title: string | number): void;

        /**
         * Create a success toast with the given options.
         * @param options
         */
        success(options: IToastyConfig): void;

        /**
         * Create a success "quick toast" with the given title.
         * @param title
         */
        success(title: string | number): void;

        /**
         * Create an error toast with the given options.
         * @param options
         */
        error(options: IToastyConfig): void;

        /**
         * Create an error "quick toast" with the given title.
         * @param title
         */
        error(title: string | number): void;

        /**
         * Create a warning toast with the given options.
         * @param options
         */
        warning(options: IToastyConfig): void;

        /**
         * Create a warning "quick toast" with the given title.
         * @param title
         */
        warning(title: string | number): void;

        /**
         * Clear toast(s).
         * @param id Optional ID to clear a specific toast.
         */
        clear(id?: number): void;

        /**
         * Get the global config.
         */
        getGlobalConfig(): IGlobalConfig;
    }

    interface IToastyConfig {
        /**
         * The toast's title.
         */
        title: string;

        /**
         * The toast's message.
         */
        msg?: string | undefined;

        /**
         * Whether to show the 'X' icon to close the toast.
         */
        showClose?: boolean | undefined;

        /**
         * Whether clicking the toast closes it.
         */
        clickToClose?: boolean | undefined;

        /**
         * How long (in milliseconds) the toast shows before it's removed. Set to false to disable.
         */
        timeout?: number | undefined;

        /**
         * Whether to play a sound when a toast is added.
         */
        sound?: boolean | undefined;

        /**
         * Whether HTML is allowed in toasts.
         */
        html?: boolean | undefined;

        /**
         * Whether to shake the toasts.
         */
        shake?: boolean | undefined;

        /**
         * What theme to use.
         * - 'default'
         * - 'material'
         * - 'bootstrap'
         */
        theme?: string | undefined;

        /**
         * The toast's type:
         * - 'default'
         * - 'info'
         * - 'success'
         * - 'wait'
         * - 'error'
         * - 'warning'
         */
        type?: string | undefined;

        /**
         * Add event handler.
         */
        onAdd?: Function | undefined;

        /**
         * Remove event handler.
         */
        onRemove?: Function | undefined;

        /**
         * Click event handler.
         */
        onClick?: Function | undefined;
    }

    interface IGlobalConfig {
        /**
         * Maximum number of toasts to show at once.
         */
        limit?: number | undefined;

        /**
         * The toast's title.
         */
        title?: string | undefined;

        /**
         * The toast's message.
         */
        msg?: string | undefined;

        /**
         * Whether to show the 'X' icon to close the toast.
         */
        showClose?: boolean | undefined;

        /**
         * Whether clicking the toast closes it.
         */
        clickToClose?: boolean | undefined;

        /**
         * The window position where the toast pops up.
         */
        position?: string | undefined;

        /**
         * How long (in miliseconds) the toast shows before it's removed. Set to false to disable.
         */
        timeout?: number | boolean | undefined;

        /**
         * Whether to play a sound when a toast is added.
         */
        sound?: boolean | undefined;

        /**
         * Whether HTML is allowed in toast.
         */
        html?: boolean | undefined;

        /**
         * Whether to shake the toast.
         */
        shake?: boolean | undefined;

        /**
         * What theme to use.
         * - 'default'
         * - 'material'
         * - 'bootstrap'
         */
        theme?: string | undefined;
    }

    interface IToastyConfigProvider {
        setConfig(override: IGlobalConfig): void;
        $get(): IGlobalConfig;
    }
}
