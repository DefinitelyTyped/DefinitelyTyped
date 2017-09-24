import * as React from "react";

export interface ElementProps extends React.HTMLProps<HTMLDivElement> {
    name: string;
    id?: string;
}

export default class Element extends React.Component<ElementProps> { }
