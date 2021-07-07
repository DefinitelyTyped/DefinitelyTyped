// Type definitions for react-anchor-link-smooth-scroll 1.0
// Project: https://github.com/mauricevancooten/react-anchor-link-smooth-scroll#readme
// Definitions by: Nicholas Newman <https://github.com/nicholas-newman1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface AnchorLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    offset?: string | number | (() => number);
}

export default class AnchorLink extends React.Component<AnchorLinkProps> {}
