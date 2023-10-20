import * as React from "react";

export as namespace ReactCountTo;

export = ReactCountTo;

declare namespace ReactCountTo {
    interface Props {
        from?: number | undefined;
        to: number;
        speed: number;
        delay?: number | undefined;
        onComplete?(): void;
        digits?: number | undefined;
        className?: string | undefined;
        tagName?: string | undefined;
        children?(value: number): React.ReactElement;
        easing?(progress: number): number;
    }
}

declare class ReactCountTo extends React.PureComponent<ReactCountTo.Props> {}
