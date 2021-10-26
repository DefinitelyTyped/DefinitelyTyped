import * as React from 'react';

declare namespace OverlayTrigger {
    export interface OverlayTriggerProps {
        children?: React.ReactNode;
        ref?: React.LegacyRef<OverlayTrigger> | undefined;
        // Required
        overlay: any; // TODO: Add more specific type

        // Optional
        animation?: any; // TODO: Add more specific type
        container?: any; // TODO: Add more specific type
        containerPadding?: number | undefined;
        defaultOverlayShown?: boolean | undefined;
        delay?: number | undefined;
        delayHide?: number | undefined;
        delayShow?: number | undefined;
        onEnter?: Function | undefined;
        onEntered?: Function | undefined;
        onEntering?: Function | undefined;
        onExit?: Function | undefined;
        onExited?: Function | undefined;
        onExiting?: Function | undefined;
        placement?: string | undefined;
        rootClose?: boolean | undefined;
        trigger?: string | string[] | undefined;
    }
}
declare class OverlayTrigger extends React.Component<OverlayTrigger.OverlayTriggerProps> { }
export = OverlayTrigger;
