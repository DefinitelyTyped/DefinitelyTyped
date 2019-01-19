import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Sizes } from 'react-bootstrap';

declare namespace Alert {
    export interface AlertProps extends ReactDOM.HTMLProps<Alert> {
        bsSize?: Sizes;
        bsStyle?: string;
        bsClass?: string;
        closeLabel?: string;
        /** @deprecated since v0.29.0 */dismissAfter?: number;
        // TODO: Add more specific type
        onDismiss?: Function;
    }
}
declare class Alert extends React.Component<Alert.AlertProps> { }
export = Alert;
