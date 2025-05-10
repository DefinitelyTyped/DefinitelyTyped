/// <reference types="react"/>

import * as React from "react";

declare namespace ReactHolder {
    interface ReactHolderProp extends React.HTMLAttributes<ReactHolder> {
        /** @default '100' */
        width: string | number;
        /** @default '100' */
        height: string | number;
        updateOnResize?: boolean | undefined;

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
}

declare class ReactHolder extends React.Component<ReactHolder.ReactHolderProp> {
}

export = ReactHolder;
