import * as React from 'react';

export interface AnchorLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    offset?: string | number | (() => number);
}

export default class AnchorLink extends React.Component<AnchorLinkProps> {}
