// Type definitions for react-count-to 0.12
// Project: https://github.com/MicheleBertoli/react-count-to
// Definitions by: pwolaq <https://github.com/pwolaq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export as namespace ReactCountTo;

export = ReactCountTo;

declare namespace ReactCountTo {
    interface Props {
        from?: number;
        to: number;
        speed: number;
        delay?: number;
        onComplete?(): void;
        digits?: number;
        className?: string;
        tagName?: string;
        children?(value: number): React.ReactElement;
        easing?(progress: number): number;
    }
}

declare class ReactCountTo extends React.PureComponent<ReactCountTo.Props> {}
