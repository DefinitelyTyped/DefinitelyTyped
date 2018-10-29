import * as React from 'react';
import * as DOM from "react-dom-factories";

interface Props {
    a: number;
    b: string;
    c: boolean;
}

export default class ClassComponent extends React.Component<Props> {
    render() {
        return DOM.div(null, 'Hello World');
    }
}
