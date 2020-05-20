import * as React from "react";

export function findIcon<T extends { name?: string }>(name: string, iconsObj?: readonly T[]): false | T;
export function setIconsList<T extends { name?: string }>(list: readonly T[]): void;
export function getSvgData<R = unknown>(iconName: string): R;
export function svgShapes<D = unknown>(svgData: D): Array<React.ReactNode | React.ReactNodeArray>;
export function isPrefixed(name: string): boolean;

interface InheritedProps extends React.SVGAttributes<SVGSVGElement> { }

export interface IconData {
    width?: string;
    height?: string;
    viewBox: string;
    svgData: any;
}

export interface IconProps extends InheritedProps {
    description: string,
    icon?: IconData,
    iconRef?: React.Ref<HTMLElement>,
    iconTitle?: string,
}

declare const Icon: React.FC<IconProps>;

// TODO: icons

export default Icon;
