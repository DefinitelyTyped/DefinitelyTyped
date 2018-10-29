import * as React from 'react';
import * as DOM from "react-dom-factories";

interface Props {
    a: string;
    b: number;
    c: boolean;
}

const SFC: React.SFC<Props> = () => {
    return DOM.div(null, 'Hello World');
};

export default SFC;
