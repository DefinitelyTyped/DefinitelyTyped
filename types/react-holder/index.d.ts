/// <reference types="react"/>

import * as React from "react";

interface ReactHolderProp extends React.HTMLAttributes<ReactHolder> {
    width: string | number;
    height: string | number;
    updateOnResize: boolean;

    // config args
    theme?: string | undefined;
    random?: boolean | undefined;
    bg?: string | undefined;
    fg?: string | undefined;
    text?: string | undefined;
    size?: number | undefined;
    font?: string | undefined;
    align?: string | undefined;
    outline?: boolean | undefined;
    lineWrap?: number | undefined;
}

declare class ReactHolder extends React.Component<ReactHolderProp> {
}
export default ReactHolder;
