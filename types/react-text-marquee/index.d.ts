// Type definitions for react-text-marquee 1.0
// Project: github.com/jcgertig/react-text-marquee
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface MarqueeProps extends React.HTMLProps<HTMLTextAreaElement> {
    text: string;
    hoverToStop?: boolean | undefined;
    loop?: boolean | undefined;
    leading?: number | undefined;
    trailing?: number | undefined;
}

export default class Marquee extends React.Component<MarqueeProps> { }
