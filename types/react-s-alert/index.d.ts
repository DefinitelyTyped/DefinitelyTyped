import * as React from "react";

declare class SAlert extends React.Component<SAlert.SAlertProps> {}

declare namespace SAlert {
    interface SAlertConfigProps {
        /**
         * Where the alert should appear.
         */
        position?:
            | "top"
            | "bottom"
            | "top-right"
            | "top-left"
            | "bottom-right"
            | "bottom-left"
            | undefined;
        /**
         * In px. Will be added to first alert (bottom or top - depends on the position in config).
         */
        offset?: number | undefined;
        /**
         * You can stack your alerts or just display them in the same place.
         */
        stack?: boolean | SAlertStackProps | undefined;
        /**
         * You can provide the name of the animations effect, you also need to import proper CSS file.
         */
        effect?:
            | "slide"
            | "scale"
            | "bouncyflip"
            | "flip"
            | "genie"
            | "jelly"
            | "stackslide"
            | undefined;
        /**
         * You can set up your audio 'beeps'. Just configure your audio file path.
         * (.mp3 files should work in every browser.) You can also configure 4 paths for 4 conditions.
         *
         * There is no default audio sample in the package.
         * You should use sound samples which you know that you have the right to use it.
         */
        beep?: string | SAlertBeepProps | undefined;
        /**
         * You can set up the timeout in ms.
         */
        timeout?: "none" | number | undefined;
        /**
         * You can configure if your alert should display HTML formated messages.
         */
        html?: boolean | undefined;
        /**
         * Execute a callback function. Will fire the function when the alert is closed.
         */
        onClose?: (() => void) | undefined;
        /**
         * Execute a callback function. onShow will fire the function when the alert appears.
         */
        onShow?: (() => void) | undefined;
        /**
         * You can pass a customFields object for your custom content template component.
         * You need to prepare the component to be able to display customFields values.
         */
        customFields?: object | undefined;
        /**
         * You can prepare your own content template even with additional fields.
         */
        contentTemplate?: ((...args: any[]) => any) | undefined;
        /**
         * Makes sure that your Alert always has the parent's context.
         * It is needed because the Alert's height,
         * which is needed for calculating the position of each element in the stack,
         * is measured by directly mounting an Alert into DOM by using `ReactDOM.render`.
         * If you want to include any custom JSX inside your Alert,
         * e.g. for Material UI, which uses context for passing theme configuration,
         * you will need this option to be set to true.
         *
         * This options enables the usage of the new `ReactDOM.unstable_renderSubtreeIntoContainer` function,
         * which works exactly the same as ReactDOM.render,
         * but keeps the context from the parent's component.
         * Even though this option is named as "unstable", it works perfectly fine.
         */
        preserveContext?: boolean | undefined;
    }

    interface SAlertProps extends SAlertConfigProps {
        message?: string | undefined;
    }

    interface SAlertStackProps {
        /**
         * you can limit your alerts displayed on screen.
         */
        limit?: number | undefined;
        /**
         * you can change the space around your alerts.
         */
        spacing?: number | undefined;
    }

    interface SAlertBeepProps {
        info?: string | undefined;
        error?: string | undefined;
        warning?: string | undefined;
        success?: string | undefined;
    }

    function info(msg?: string, data?: SAlertConfigProps): number;

    function error(msg?: string, data?: SAlertConfigProps): number;

    function warning(msg?: string, data?: SAlertConfigProps): number;

    function success(msg?: string, data?: SAlertConfigProps): number;

    function close(id: number): void;

    function closeAll(): void;
}

export = SAlert;
