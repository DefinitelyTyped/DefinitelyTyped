/// <reference types="angular"/>
/// <reference types="angular-ui-bootstrap"/>

declare namespace angular.dialogservice {
    interface IDialogOptions {
        /**
         * Set to false to disable animations on new modal/backdrop. Does not toggle animations for modals/backdrops that are already displayed.
         *
         * @default false
         */
        animation?: boolean | undefined;

        /**
         * controls the presence of a backdrop
         * Allowed values:
         *   - true (default)
         *   - false (no backdrop)
         *   - 'static' backdrop is present but modal window is not closed when clicking outside of the modal window
         *
         * @default true
         */
        backdrop?: boolean | string | undefined;

        /**
         * indicates whether the dialog should be closable by hitting the ESC key
         *
         * @default true
         */
        keyboard?: boolean | undefined;

        /**
         * additional CSS class(es) to be added to a modal backdrop template
         *
         * @default 'dialogs-backdrop-default'
         */
        backdropClass?: string | undefined;

        /**
         * additional CSS class(es) to be added to a modal window template
         *
         * @default 'dialogs-default'
         */
        windowClass?: string | undefined;

        /**
         * Optional suffix of modal window class. The value used is appended to the `modal-` class, i.e. a value of `sm` gives `modal-sm`.
         *
         * @default 'lg'
         */
        size?: string | undefined;
    }

    interface IDialogService {
        /**
         * Opens a new error modal instance.
         */
        error(header: string, msg: string, opts?: IDialogOptions): ng.ui.bootstrap.IModalServiceInstance;
        /**
         * Opens a new wait modal instance.
         */
        wait(
            header: string,
            msg: string,
            progress: number,
            opts?: IDialogOptions,
        ): ng.ui.bootstrap.IModalServiceInstance;
        /**
         * Opens a new notify modal instance.
         */
        notify(header: string, msg: string, opts?: IDialogOptions): ng.ui.bootstrap.IModalServiceInstance;
        /**
         * Opens a new confirm modal instance.
         */
        confirm(header: string, msg: string, opts?: IDialogOptions): ng.ui.bootstrap.IModalServiceInstance;
        /**
         * Opens a new custom modal instance.
         */
        create(url: string, ctrlr: string, data: any, opts?: IDialogOptions): ng.ui.bootstrap.IModalServiceInstance;
    }
}
