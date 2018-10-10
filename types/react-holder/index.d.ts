// Type definitions for react-holder 1.0.0
// Project: https://github.com/Moeriki/react-holder
// Definitions by: Isman Usoh <https://github.com/isman-usoh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

///<reference types="react"/>

import * as React from "react";

interface ReactHolderProp extends React.HTMLAttributes<ReactHolder> {
    width: string | number;
    height: string | number;
    updateOnResize: boolean;

    // config args
    theme?: string;
    random?: boolean;
    bg?: string
    fg?: string;
    text?: string;
    size?: number;
    font?: string;
    align?: string;
    outline?: boolean;
    lineWrap?: number;
}

declare class ReactHolder extends React.Component<ReactHolderProp> {

}
export default ReactHolder;
