import * as React from "react";

interface CallBackProps extends React.RefAttributes<any> {
    children?: React.ReactNode;
    closePortal(): void;
}

interface ReactPortalProps {
    children: React.ReactElement;
    isOpened?: boolean | undefined;
    openByClickOn?: React.ReactElement<CallBackProps> | undefined;
    closeOnEsc?: boolean | undefined;
    closeOnOutsideClick?: boolean | undefined;
    onOpen?(node: HTMLDivElement): void;
    beforeClose?(node: HTMLDivElement, resetPortalState: () => void): void;
    onClose?(): void;
    onUpdate?(): void;
}

declare const ReactPortal: React.ComponentClass<ReactPortalProps>;
export = ReactPortal;
