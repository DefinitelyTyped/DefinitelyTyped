import * as React from "react";

export type TokenProps = {
    className?: string;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

declare const Token: React.FunctionComponent<TokenProps>;

export default Token;
