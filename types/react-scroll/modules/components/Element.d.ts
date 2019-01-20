import * as React from "react";
import * as ReactDOM from "react-dom";

export interface ElementProps extends ReactDOM.HTMLProps<HTMLDivElement> {
    name: string;
    id?: string;
}

export default class Element extends React.Component<ElementProps> { }
