import * as React from "react";

export interface PortalProps {
    children?: React.ReactNode | undefined;
    container?: React.MutableRefObject<Element>;
}

export declare const Portal: React.FC<PortalProps>;
