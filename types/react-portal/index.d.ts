import * as React from "react";

export interface PortalProps {
    children: React.ReactNode;
    node?: Element | null | undefined;
}

export const Portal: React.ComponentClass<PortalProps>;

export interface PortalFunctionParams {
    openPortal: (event?: any) => void;
    closePortal: () => void;
    portal: (children: React.ReactNode) => React.ReactElement<React.ComponentClass<PortalProps>>;
    isOpen: boolean;
}

export interface PortalWithStateProps {
    children: (params: PortalFunctionParams) => React.ReactNode;
    node?: Element | null | undefined;
    defaultOpen?: boolean | undefined;
    openByClickOn?: React.ReactElement | undefined;
    closeOnEsc?: boolean | undefined;
    closeOnOutsideClick?: boolean | undefined;
    onOpen?(): void;
    onClose?(): void;
}

export const PortalWithState: React.ComponentClass<PortalWithStateProps>;
