// Type definitions for react-measure 2.0
// Project: https://github.com/souporserious/react-measure
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>, Marc Fallows <https://github.com/marcfallows>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

type MeasurementType = "client" | "offset" | "scroll" | "bounds" | "margin";

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

export interface ChildrenOpts {
    measureRef(ref: Element | null): void;
    measure(): void;
    contentRect: ContentRect;
}

export interface MeasureProps<T> {
    client?: boolean;
    offset?: boolean;
    scroll?: boolean;
    bounds?: boolean;
    margin?: boolean;
    innerRef?(ref: Element | null): void;
    onResize?(contentRect: ContentRect): void;
    children?(arg: ChildrenOpts): React.ReactElement<T>;
}

export declare function withContentRect(types: MeasurementType | MeasurementType[]): <T>(fn: (arg: ChildrenOpts) => React.ReactElement<T>) => React.ComponentClass<T>;
declare class Measure<T> extends React.Component<MeasureProps<T>> {}
export default Measure;
