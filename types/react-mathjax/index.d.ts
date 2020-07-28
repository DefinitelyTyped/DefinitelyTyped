// Type definitions for react-mathjax 1.0
// Project: https://github.com/SamyPesse/react-mathjax#readme
// Definitions by: ArtoLord <https://github.com/ArtoLord>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

interface MathJaxContextValue {
    MathJax?: object;
    registerNode: () => void;
}

declare namespace MathJax {
    class Provider extends React.Component<
        {
            script?: string | boolean;
            options?: object;
            children: React.ReactNode;
        },
        MathJaxContextValue
    > {}

    class Node extends React.PureComponent<{
        formula: string;
        inline?: boolean;
        onRender?: () => void;
    }> {}
}

export default MathJax;
