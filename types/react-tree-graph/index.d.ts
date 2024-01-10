import type { FC, HTMLProps, ReactNode } from "react";

type EventListenerWithNodeId<T> = T extends ((this: infer ListenerThis, ev: infer Event) => infer ListenerReturnType)
    ? (this: ListenerThis, ev: Event, nodeId: string) => ListenerReturnType
    : T;

type EventListenerWithPathsId<T> = T extends ((this: infer ListenerThis, ev: infer Event) => infer ListenerReturnType)
    ? (this: ListenerThis, ev: Event, sourceNodeId: string, targetNodeId: string) => ListenerReturnType
    : T;

type AddPathsIdToElementEvents<T> = {
    [K in keyof T]: K extends `on${string}` ? EventListenerWithPathsId<T[K]> : T[K];
};

type AddNodeIdToElementEvents<T> = {
    [K in keyof T]: K extends `on${string}` ? EventListenerWithNodeId<T[K]> : T[K];
};

interface NodeProps {
    keyProp?: string;
    labelProp?: string;
    shape?: "circle" | "image" | "polygon" | "rect";
    nodeProps?:
        | AddNodeIdToElementEvents<HTMLProps<SVGCircleElement>>
        | AddNodeIdToElementEvents<HTMLProps<SVGRectElement>>
        | AddNodeIdToElementEvents<HTMLProps<SVGImageElement>>
        | AddNodeIdToElementEvents<HTMLProps<SVGPolygonElement>>;
    gProps?: AddNodeIdToElementEvents<HTMLProps<SVGGElement>>;
    pathProps?: AddPathsIdToElementEvents<HTMLProps<SVGPathElement>>;
    textProps?: AddNodeIdToElementEvents<HTMLProps<SVGTextElement>>;
}

type R = NodeProps["gProps"];

interface Data extends NodeProps {
    name: string;
    children: Data[];
}

interface TreeProps extends Omit<NodeProps, "shape"> {
    data: Data;
    children?: ReactNode;
    direction?: "ltr" | "rtl";
    getChildren?: (node: Data) => Data[];
    height: number;
    width: number;
    nodeShape?: NodeProps["shape"];
    margins?: {
        bottom: number;
        left: number;
        right: number;
        top: number;
    };
    pathFunc?: (x1: number, y1: number, x2: number, y2: number) => string;
    svgProps?: HTMLProps<SVGElement>;
}

interface AnimatedTreeProps extends TreeProps {
    duration?: number;
    easing?: (t: number) => number;
    steps?: number;
}

declare const Tree: FC<TreeProps>;
declare const AnimatedTree: FC<AnimatedTreeProps>;

export { AnimatedTree, AnimatedTreeProps, Data, Tree, TreeProps };
