import * as React from "react";

export type TokenProps = {
    className?: string;
} & { [x: string]: any };

export const Token: React.FunctionComponent<TokenProps>;
