import * as React from "react";

export type LinkProps = {
    className?: string | undefined;
    href?: string | undefined;
    disabled?: boolean | undefined;
    disableStyles?: boolean | undefined;
    ref?: React.Ref<HTMLAnchorElement> | undefined;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

declare const Link: React.FunctionComponent<LinkProps> & {
    displayName: "Link";
};

export default Link;
