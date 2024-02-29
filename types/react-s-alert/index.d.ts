import * as React from "react";

declare class SAlert extends React.Component<SAlert.SAlertProps> {}

declare namespace SAlert {
    interface SAlertConfigProps {
        position?: string | undefined;
        offset?: number | undefined;
        stack?: boolean | SAlertStackProps | undefined;
        effect?: string | undefined;
        beep?: string | boolean | SAlertBeepProps | undefined;
        timeout?: string | number | undefined;
        html?: boolean | undefined;
        onClose?: (() => void) | undefined;
        onShow?: (() => void) | undefined;
        customFields?: object | undefined;
        contentTemplate?: ((...args: any[]) => any) | undefined;
    }

    interface SAlertProps extends SAlertConfigProps {
        message?: string | undefined;
    }

    interface SAlertStackProps {
        limit?: number | undefined;
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

export default SAlert;
