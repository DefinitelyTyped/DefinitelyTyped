import * as React from "react";

export type TokenProps = {
    className?: string;
    compact?: boolean;
    disableStyles?: boolean;
    readOnly?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & React.HTMLAttributes<HTMLDivElement>;

declare const Token: React.FunctionComponent<TokenProps>;

export default Token;
