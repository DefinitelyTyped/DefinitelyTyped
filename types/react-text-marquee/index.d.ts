// Type definitions for react-text-marquee v1.0.1
// Project: github.com/jcgertig/react-text-marquee
// Definitions by: Boris <https://github.com/captain328>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare module "react-text-marquee" {
    import * as React from "react";

    export interface MarqueeProps extends React.HTMLProps<HTMLTextAreaElement> {
        text: string,
        hoverToStop?: boolean,
        loop?: boolean,
        leading?: number,
        trailing?: number,
    }

    export default class Marquee extends React.Component<MarqueeProps> { }
}
