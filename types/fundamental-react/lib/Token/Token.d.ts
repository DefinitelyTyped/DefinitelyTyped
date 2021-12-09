import * as React from "react";

export type TokenProps = {
    className?: string | undefined;
    compact?: boolean | undefined;
    disableStyles?: boolean | undefined;
    readOnly?: boolean | undefined;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
} & React.HTMLAttributes<HTMLDivElement>;

declare const Token: React.FunctionComponent<TokenProps>;

export default Token;
