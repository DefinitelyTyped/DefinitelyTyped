import * as React from "react";

export type TokenProps = {
    className?: string;
} & { [x: string]: any };

declare const Token: React.FunctionComponent<TokenProps>;

export default Token;
