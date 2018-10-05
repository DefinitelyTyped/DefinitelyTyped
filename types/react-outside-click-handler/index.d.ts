// Type definitions for react-outside-click-handler 1.2.2
// Project: https://github.com/airbnb/react-outside-click-handler
// Definitions by: Ivan Zub <https://github.com/zubivan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0.3

import * as React from "react";

type Props = {
    children: React.ReactNode;
    onOutsideClick: (e: React.MouseEvent<HTMLElement>) => void;
    disabled: boolean;
    useCapture: boolean;
    display: "block" | "flex" | "inline-block";
};

export default class OutsideClickHandler extends React.Component<Props> {
    static defaultProps : {
        disabled: false,
        useCapture: false,
        display: "block"
    }
}