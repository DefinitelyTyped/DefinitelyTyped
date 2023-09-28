// Type definitions for react-katex 3.0
// Project: https://github.com/talyssonoc/react-katex
// Definitions by: Geoffrey Tang <https://github.com/jeffswt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 2.8

import * as React from "react";

export type ErrorRenderer = (error: Error) => React.ReactNode;

export interface MathComponentPropsWithMath {
    math: string;
    errorColor?: string;
    renderError?: ErrorRenderer;
}

export interface MathComponentPropsWithChildren {
    children: React.ReactNode;
    errorColor?: string;
    renderError?: ErrorRenderer;
}

export type MathComponentProps = MathComponentPropsWithMath | MathComponentPropsWithChildren;

export function BlockMath(props: MathComponentProps): JSX.Element;

export function InlineMath(props: MathComponentProps): JSX.Element;
