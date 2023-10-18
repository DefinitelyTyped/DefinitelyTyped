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
