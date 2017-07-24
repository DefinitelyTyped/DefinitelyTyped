// Type definitions for ReactCSS 1.2
// Project: http://reactcss.com/
// Definitions by: Chris Gervang <https://github.com/chrisgervang>, Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";
import { ComponentClass, ComponentType, CSSProperties } from "react";

export interface LoopableProps {
    "first-child"?: boolean;
    "last-child"?: boolean;
    even?: boolean;
    odd?: boolean;
    [nthChild: string]: any;
}

export interface InjectedHoverProps {
    hover: boolean;
}

export interface Styles {
    [key: string]: CSSProperties;
}

export interface StyleScopes<Styles> {
    default: Styles;
    [scope: string]: Styles;
}

export function hover<P = {}>(component: ComponentType<P>): ComponentClass<P & InjectedHoverProps>;

export function loop(index: number, length: number): LoopableProps;

export default function reactCSS<Styles>(
    classes: StyleScopes<Styles>,
    activators?: { [K in keyof StyleScopes<Styles>]?: boolean }
): Styles;
