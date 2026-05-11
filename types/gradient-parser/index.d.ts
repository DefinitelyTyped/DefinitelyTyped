export interface LinearGradientNode {
    type: "linear-gradient";
    orientation?: DirectionalNode | AngularNode | undefined;
    colorStops: ColorStop[];
}

export interface RepeatingLinearGradientNode {
    type: "repeating-linear-gradient";
    orientation?: DirectionalNode | AngularNode | undefined;
    colorStops: ColorStop[];
}

export interface RadialGradientNode {
    type: "radial-gradient";
    orientation?: Array<ShapeNode | DefaultRadialNode | ExtentKeywordNode> | undefined;
    colorStops: ColorStop[];
}

export interface RepeatingRadialGradientNode {
    type: "repeating-radial-gradient";
    orientation?: Array<ShapeNode | DefaultRadialNode | ExtentKeywordNode> | undefined;
    colorStops: ColorStop[];
}

export interface DirectionalNode {
    type: "directional";
    value:
        | "left"
        | "top"
        | "bottom"
        | "right"
        | "left top"
        | "top left"
        | "left bottom"
        | "bottom left"
        | "right top"
        | "top right"
        | "right bottom"
        | "bottom right";
}

export interface AngularNode {
    type: "angular";
    value: string;
}

export interface LiteralNode {
    type: "literal";
    value: string;
    length?: PxNode | EmNode | PercentNode | CalcNode | undefined;
}

export interface HexNode {
    type: "hex";
    value: string;
    length?: PxNode | EmNode | PercentNode | CalcNode | undefined;
}

export interface RgbNode {
    type: "rgb";
    value: [string, string, string];
    length?: PxNode | EmNode | PercentNode | CalcNode | undefined;
}

export interface RgbaNode {
    type: "rgba";
    value: [string, string, string, string?];
    length?: PxNode | EmNode | PercentNode | CalcNode | undefined;
}

export interface HslNode {
    type: "hsl";
    value: [string, string, string];
    length?: PxNode | EmNode | PercentNode | CalcNode | undefined;
}

export interface HslaNode {
    type: "hsla";
    value: [string, string, string, string?];
    length?: PxNode | EmNode | PercentNode | CalcNode | undefined;
}

export interface VarNode {
    type: "var";
    value: string;
    length?: PxNode | EmNode | PercentNode | CalcNode | undefined;
}

export interface ShapeNode {
    type: "shape";
    style?: ExtentKeywordNode | PxNode | EmNode | PercentNode | PositionKeywordNode | CalcNode | undefined;
    value: "ellipse" | "circle";
    at?: PositionNode | undefined;
}

export interface DefaultRadialNode {
    type: "default-radial";
    at: PositionNode;
}

export interface PositionKeywordNode {
    type: "position-keyword";
    value: "center" | "left" | "top" | "bottom" | "right";
}

export interface PositionNode {
    type: "position";
    value: {
        x: ExtentKeywordNode | PxNode | EmNode | PercentNode | PositionKeywordNode | CalcNode;
        y: ExtentKeywordNode | PxNode | EmNode | PercentNode | PositionKeywordNode | CalcNode;
    };
}

export interface ExtentKeywordNode {
    type: "extent-keyword";
    value: "closest-side" | "closest-corner" | "farthest-side" | "farthest-corner" | "contain" | "cover";
    at?: PositionNode | undefined;
}

export interface PxNode {
    type: "px";
    value: string;
}

export interface EmNode {
    type: "em";
    value: string;
}

export interface PercentNode {
    type: "%";
    value: string;
}

export interface CalcNode {
    type: "calc";
    value: string;
}

export type ColorStop = LiteralNode | HexNode | RgbNode | RgbaNode | HslNode | HslaNode | VarNode;

export type GradientNode =
    | LinearGradientNode
    | RepeatingLinearGradientNode
    | RadialGradientNode
    | RepeatingRadialGradientNode;

export function parse(value: string): GradientNode[];
export function stringify(ast: GradientNode[]): string;
