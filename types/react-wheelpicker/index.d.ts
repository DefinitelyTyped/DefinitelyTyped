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
