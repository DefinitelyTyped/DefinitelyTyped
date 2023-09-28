// Type definitions for react-outside-click-handler 1.3
// Project: https://github.com/airbnb/react-outside-click-handler
// Definitions by: Ivan Zub <https://github.com/zubivan>
//                 JadowityHerbatnik <https://github.com/JadowityHerbatnik>
//                 Adam Jones <https://github.com/domdomegg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from "react";

export interface DefaultProps {
    disabled: boolean;
    useCapture: boolean;
    display: "block" | "flex" | "inline" | "inline-block" | "contents";
}

// TODO: Remove partial once DT support TS 3.0, so skipping mandatory listed in default props won't result in compile error
export interface Props extends Partial<DefaultProps> {
    children: React.ReactNode;
    onOutsideClick: (e: MouseEvent) => void;
}

export default class OutsideClickHandler extends React.Component<Props> {
    static defaultProps: DefaultProps;
}
