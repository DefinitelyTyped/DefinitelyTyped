// Type definitions for react-wheelpicker 1.0
// Project: https://github.com/sahilverma2209/react-wheelpicker
// Definitions by: Timothy Odei Yirenkyi <https://github.com/tyirenkyi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import React = require("react");

interface Props {
    scrollerId: string;
    data: string[];
    animation: string;
    height: number;
    parentHeight: number;
    defaultSelection: number;
    updateSelection: (index: number) => void;
    fontSize: number;
}

export default class WheelPicker extends React.Component<Props> {}

export {};
