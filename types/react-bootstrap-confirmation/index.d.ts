// Type definitions for react-bootstrap-confirmation 1.0
// Project: https://github.com/react-bootstrap-confirmation
// Definitions by: Julián Bovone <https://github.com/jbovone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export {};

type BootstrapStyleFlags =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';

interface AlertOptions {
    /**
     * A facultative title to use for the modal.
     * @default undefined
     */
    title?: string;
    /**
     * The text of the "OK" button.
     * @default "OK"
     */
    okText?: string;
    /**
     * The style of the "OK" button. Must correspond to one of the 6 button styles of Bootstrap.
     * @default "primary"
     */
    okButtonStyle?: BootstrapStyleFlags;
}

interface ConfirmOptions extends AlertOptions {
    /**
     * The text of the "Cancel" button.
     * @default "Cancel"
     */
    cancelText?: string;
    /**
     * The style of the "Cancel" button. Must correspond to one of the 6 button styles of Bootstrap.
     * @default "secondary"
     */
    cancelButtonStyle?: BootstrapStyleFlags;
}

export function alert(message: string, options?: AlertOptions): Promise<void>;
export function confirm(message: string, options?: ConfirmOptions): Promise<boolean>;
