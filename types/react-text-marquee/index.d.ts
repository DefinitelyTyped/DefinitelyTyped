import * as React from "react";

export interface MarqueeProps extends React.HTMLProps<HTMLTextAreaElement> {
    text: string;
    hoverToStop?: boolean | undefined;
    loop?: boolean | undefined;
    leading?: number | undefined;
    trailing?: number | undefined;
}

export default class Marquee extends React.Component<MarqueeProps> {}
