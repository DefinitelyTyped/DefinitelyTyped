// Type definitions for react-measure 2.0
// Project: https://github.com/souporserious/react-measure
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>, Marc Fallows <https://github.com/marcfallows>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export type MeasurementType = "client" | "offset" | "scroll" | "bounds" | "margin";

interface TopLeft {
    readonly top: number;
    readonly left: number;
}

interface BottomRight {
    readonly bottom: number;
    readonly right: number;
}

interface Dimensions {
    readonly width: number;
    readonly height: number;
}

export type Margin = TopLeft & BottomRight;

export type Rect = TopLeft & Dimensions;

export type BoundingRect = Dimensions & Margin;

export interface ContentRect {
    client?: Rect;
    offset?: Rect;
    scroll?: Rect;
    bounds?: BoundingRect;
    margin?: Margin;
    entry?: any;
}

export interface MeasuredComponentProps {
    measureRef(ref: Element | null): void;
    measure(): void;
    contentRect: ContentRect;
}

type MeasuredComponent<T> = React.ComponentType<T & MeasuredComponentProps>;

export interface MeasureProps {
    client?: boolean;
    offset?: boolean;
    scroll?: boolean;
    bounds?: boolean;
    margin?: boolean;
    innerRef?(ref: Element | null): void;
    onResize?(contentRect: ContentRect): void;
    children?: React.SFC<MeasuredComponentProps>;
}

export declare function withContentRect(types: ReadonlyArray<MeasurementType> | MeasurementType):
    <T extends {}>(fn: MeasuredComponent<T>) => React.ComponentType<T>;

declare class Measure extends React.Component<MeasureProps> {}
export default Measure;
