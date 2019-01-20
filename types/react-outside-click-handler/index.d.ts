// Type definitions for react-outside-click-handler 1.2
// Project: https://github.com/airbnb/react-outside-click-handler
// Definitions by: Ivan Zub <https://github.com/zubivan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from "react";
import * as ReactDOM from "react-dom";

export interface DefaultProps {
    disabled: boolean;
    useCapture: boolean;
    display: "block" | "flex" | "inline-block";
}

// TODO: Remove partial once DT support TS 3.0, so skipping mandatory listed in default props won't result in compile error
export interface Props extends Partial<DefaultProps> {
    children: React.ReactNode;
    onOutsideClick: (e: ReactDOM.MouseEvent<HTMLElement>) => void;
}

export default class OutsideClickHandler extends React.Component<Props> {
    static defaultProps: DefaultProps;
}
