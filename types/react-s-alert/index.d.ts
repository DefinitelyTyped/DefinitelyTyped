// Type definitions for react-s-alert 1.3
// Project: https://github.com/juliancwirko/react-s-alert
// Definitions by: mitsuruog <https://github.com/mitsuruog>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

declare class SAlert extends React.Component<SAlert.SAlertProps> {}

declare namespace SAlert {
  interface SAlertConfigProps {
    position?: string;
    offset?: number;
    stack?: boolean | SAlertStackProps;
    effect?: string;
    beep?: string | boolean | SAlertBeepProps;
    timeout?: string | number;
    html?: boolean;
    onClose?: () => void;
    onShow?: () => void;
    customFields?: object;
    contentTemplate?: (...args: any[]) => any;
  }

  interface SAlertProps extends SAlertConfigProps {
    message?: string;
  }

  interface SAlertStackProps {
    limit?: number;
    spacing?: number;
  }

  interface SAlertBeepProps {
    info?: string;
    error?: string;
    warning?: string;
    success?: string;
  }

  function info(msg?: string, data?: SAlertConfigProps): number;

  function error(msg?: string, data?: SAlertConfigProps): number;

  function warning(msg?: string, data?: SAlertConfigProps): number;

  function success(msg?: string, data?: SAlertConfigProps): number;

  function close(id: number): void;

  function closeAll(): void;
}

export default SAlert;
