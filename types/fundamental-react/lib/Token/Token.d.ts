import * as React from "react";

export type TokenProps = {
    /** A localized string to be used as aria-label for the token's button */
    buttonLabel: string;
    className?: string | undefined;
    compact?: boolean | undefined;
    readOnly?: boolean | undefined;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
} & React.HTMLAttributes<HTMLSpanElement>;

declare const Token: React.ForwardRefExoticComponent<TokenProps & React.RefAttributes<HTMLSpanElement>>;

export default Token;
