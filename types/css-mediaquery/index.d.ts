export type MediaValues = Record<
    | "orientation"
    | "scan"
    | "width"
    | "height"
    | "device-width"
    | "device-height"
    | "resolution"
    | "aspect-ratio"
    | "device-aspect-ratio"
    | "grid"
    | "color"
    | "color-index"
    | "monochrome"
    | "prefers-color-scheme",
    unknown
>;

export function match(query: string, values: Partial<MediaValues>): boolean;

export type AST = QueryNode[];
export interface QueryNode {
    inverse: boolean;
    type: string;
    expressions: Expression[];
}
export interface Expression {
    modifier: string;
    feature: string;
    value: string;
}

export function parse(query: string): AST;
