import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare namespace Alert {
    export interface AlertProps extends React.HTMLProps<Alert> {
        bsSize?: Sizes | undefined;
        bsStyle?: string | undefined;
        bsClass?: string | undefined;
        closeLabel?: string | undefined;
        /** @deprecated since v0.29.0 */dismissAfter?: number | undefined;
        // TODO: Add more specific type
        onDismiss?: Function | undefined;
    }
}
declare class Alert extends React.Component<Alert.AlertProps> { }
export = Alert;
