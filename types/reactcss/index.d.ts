// Type definitions for ReactCSS 1.2
// Project: http://reactcss.com/
// Definitions by: Chris Gervang <https://github.com/chrisgervang>, Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";
import { ComponentClass, ComponentType, CSSProperties } from "react";

interface InjectedLoopableProps {
    "nth-child": number
    "first-child"?: boolean
    "last-child"?: boolean
    even?: boolean
    odd?: boolean
}

interface InjectedHoverProps {
    hover: boolean
}

interface ScopeClasses {
    [key: string]: CSSProperties;
}

interface ClassesConfig<T extends ScopeClasses> {
    default: T;
    [scope: string]: Partial<T>;
}

export function hover<P = {}>(component: ComponentType<P & InjectedHoverProps>): ComponentClass<P & InjectedHoverProps>;

export function loop(index: number, length: number): InjectedLoopableProps;

export default function reactCSS<Styles>(
    classes: ClassesConfig<Styles>,
    activators: { [K in keyof ClassesConfig<Styles>]?: boolean }
): Styles;
