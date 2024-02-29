import * as React from "react";

export interface AnchorLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    offset?: string | number | (() => number) | undefined;
}

export default class AnchorLink extends React.Component<AnchorLinkProps> {}
