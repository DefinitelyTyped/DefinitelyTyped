import { icons as genIcons } from "./generated/feather-icons";

export {};
export as namespace feather;

export type FeatherIconNames = keyof typeof genIcons;
export type FeatherStrokeLineCap = "butt" | "round" | "square";
export type FeatherStrokeLineJoin = "arcs" | "bevel" | "miter" | "miter-clip" | "round";

type FeatherToSvg = (options?: Partial<FeatherAttributes>) => string;

export interface FeatherAttributes {
    [index: string]: string | number;
    class: string;
    xmlns: string;
    width: string | number;
    height: string | number;
    viewBox: string;
    fill: string;
    stroke: string;
    "stroke-width": string | number;
    "stroke-linecap": FeatherStrokeLineCap;
    "stroke-linejoin": FeatherStrokeLineJoin;
}

export interface FeatherIcon {
    [index: string]: string | string[] | FeatherAttributes | FeatherToSvg;
    name: string;
    contents: string;
    tags: string[];
    attrs: FeatherAttributes;
    toSvg: FeatherToSvg;
}

export function replace(options?: Partial<FeatherAttributes>): void;

export const icons: {
    [key in FeatherIconNames]: FeatherIcon;
};
