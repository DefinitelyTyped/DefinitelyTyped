// Type definitions for @reach/skip-nav 0.1
// Project: https://github.com/reach/reach-ui
// Definitions by: Harry Hedger <https://github.com/hedgerh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface SkipNavProps {
    children?: string | React.ReactNode;
}

export class SkipNavLink extends React.Component<SkipNavProps & React.HTMLProps<HTMLAnchorElement>> {}
export class SkipNavContent extends React.Component<SkipNavProps & React.HTMLProps<HTMLDivElement>> {}
