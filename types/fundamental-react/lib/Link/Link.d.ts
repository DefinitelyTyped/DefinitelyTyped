import * as React from "react";

export type LinkProps = {
    className?: string;
    href?: string;
    disabled?: boolean;
    disableStyles?: boolean;
    ref?: React.Ref<HTMLAnchorElement>;
} & React.HTMLAttributes<HTMLAnchorElement>;

declare const Link: React.FunctionComponent<LinkProps> & {
    displayName: "Link";
};

export default Link;
