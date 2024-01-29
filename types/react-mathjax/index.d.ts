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
