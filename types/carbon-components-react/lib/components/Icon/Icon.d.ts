import * as React from "react";

export function findIcon<T extends { name?: string | undefined }>(name: string, iconsObj?: readonly T[]): false | T;
export function setIconsList<T extends { name?: string | undefined }>(list: readonly T[]): void;
export function getSvgData<R = unknown>(iconName: string): R;
export function svgShapes<D = unknown>(svgData: D): Array<React.ReactNode | readonly React.ReactNode[]>;
export function isPrefixed(name: string): boolean;

export interface IconData {
    width?: string | undefined;
    height?: string | undefined;
    viewBox: string;
    svgData: any;
}

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
    description: string;
    icon?: IconData | undefined;
    iconRef?: React.Ref<HTMLElement> | undefined;
    iconTitle?: string | undefined;
}

declare const Icon: React.FC<IconProps>;

export declare const icons: any;

export default Icon;
