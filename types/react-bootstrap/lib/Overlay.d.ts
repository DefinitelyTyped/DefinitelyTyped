import * as React from 'react';
import { TransitionCallbacks } from 'react-bootstrap';

declare namespace Overlay {
    export interface OverlayProps extends TransitionCallbacks {
        // Optional
        animation?: any; // TODO: Add more specific type
        container?: any; // TODO: Add more specific type
        containerPadding?: number | undefined; // TODO: Add more specific type
        onHide?: Function | undefined;
        placement?: string | undefined;
        rootClose?: boolean | undefined;
        show?: boolean | undefined;
        target?: Function | React.ReactInstance | undefined;
        shouldUpdatePosition?: boolean | undefined;
    }
}
declare class Overlay extends React.Component<Overlay.OverlayProps> { }
export = Overlay;
