// Type definitions for react-mathjax 1.0
// Project: https://github.com/SamyPesse/react-mathjax#readme
// Definitions by: ArtoLord <https://github.com/ArtoLord>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

interface MathJaxContextValue {
    MathJax?: object | undefined;
    registerNode: () => void;
}

declare namespace MathJax {
    class Provider extends React.Component<
        {
            script?: string | boolean | undefined;
            options?: object | undefined;
            children: React.ReactNode;
        },
        MathJaxContextValue
    > {}

    class Node extends React.PureComponent<{
        formula: string;
        inline?: boolean | undefined;
        onRender?: (() => void) | undefined;
    }> {}
}

export default MathJax;
