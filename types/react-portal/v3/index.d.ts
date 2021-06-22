// Type definitions for react-portal 3.0
// Project: https://github.com/tajo/react-portal#readme
// Definitions by: Shun Takahashi <https://github.com/shuntksh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

interface CallBackProps extends React.Props<any> {
    closePortal(): void;
}

interface ReactPortalProps {
    isOpened?: boolean;
    openByClickOn?: React.ReactElement<CallBackProps>;
    closeOnEsc?: boolean;
    closeOnOutsideClick?: boolean;
    onOpen?(node: HTMLDivElement): void;
    beforeClose?(node: HTMLDivElement, resetPortalState: () => void): void;
    onClose?(): void;
    onUpdate?(): void;
}

declare const ReactPortal: React.ComponentClass<ReactPortalProps>;
export = ReactPortal;
