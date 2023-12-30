import type { FC, HTMLProps, ReactNode } from "react";

export interface Data {
  name: string;
  children: Data[];
}

export interface TreeProps {
  data: Data;
  children?: ReactNode;
  direction?: "ltr" | "rtl";
  getChildren?: (node: Data) => Data[];
  height: number;
  width: number;
  keyProp?: string;
  labelProp?: string;
  margins?: {
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  pathFunc?: (x1: number, y1: number, x2: number, y2: number) => string;
  nodeShape?: "circle" | "image" | "polygon" | "rect";
  nodeProps?:
  | HTMLProps<SVGCircleElement>
  | HTMLProps<SVGRectElement>
  | HTMLProps<SVGImageElement>
  | HTMLProps<SVGPolygonElement>;
  gProps?: HTMLProps<SVGGElement>;
  pathProps?: HTMLProps<SVGPathElement>;
  svgProps?: HTMLProps<SVGElement>;
  textProps?: HTMLProps<SVGTextElement>;
}

export interface AnimatedTreeProps extends TreeProps {
  duration?: number;
  easing?: (t: number) => number;
  steps?: number;
}

export const Tree: FC<TreeProps>;
export const AnimatedTree: FC<AnimatedTreeProps>;
