// Type definitions for react-portal 3.0
// Project: https://github.com/tajo/react-portal#readme
// Definitions by: Shun Takahashi <https://github.com/shuntksh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

interface CallBackProps {
    children?: React.ReactNode;
    ref?: React.LegacyRef<any> | undefined;
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
