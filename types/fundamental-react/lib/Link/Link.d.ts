import * as React from "react";

export type LinkProps = {
    className?: string;
    customStyles?: {[x: string]: any};
    disabled?: boolean;
    disableStyles?: boolean;
    ref?: React.Ref<HTMLAnchorElement>;
} & React.HTMLAttributes<HTMLAnchorElement>;

declare const Link: React.FunctionComponent<LinkProps> & {
    displayName: "Link";
};

export default Link;
