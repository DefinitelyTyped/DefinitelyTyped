import * as React from "react";

export type TouchAction = "auto" | "none" | "pan-x" | "pan-y" | "manipulation";

export interface PointableProps extends React.HTMLAttributes<Element>, React.SVGAttributes<Element> {
    tagName?: keyof ElementTagNameMap | undefined;
    touchAction?: TouchAction | undefined;
    elementRef?(el: HTMLElement | SVGElement): void;
}

export default class Pointable extends React.Component<PointableProps> {
    static defaultProps: {
        tagName: "div";
        touchAction: "auto";
    };
}
