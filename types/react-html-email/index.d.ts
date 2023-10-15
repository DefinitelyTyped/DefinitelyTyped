// Type definitions for react-html-email 3.0
// Project: https://github.com/chromakode/react-html-email#readme
// Definitions by: Saiichi Hashimoto <https://github.com/saiichihashimoto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import type { CSSProperties, FunctionComponent, FunctionComponentElement, ReactElement, ReactNode } from "react";

export interface AProps {
    children?: ReactNode | undefined;
    color?: string | undefined;
    download?: string | undefined;
    href: string;
    style?: CSSProperties | undefined;
    textDecoration?: string | undefined;
}

export const A: FunctionComponent<AProps>;

export interface BoxProps {
    align?: "left" | "center" | "right" | undefined;
    bgcolor?: string | undefined;
    border?: string | undefined;
    cellPadding?: number | undefined;
    cellSpacing?: number | undefined;
    children?: ReactNode | undefined;
    height?: string | undefined;
    style?: CSSProperties | undefined;
    valign?: "top" | "middle" | "bottom" | undefined;
    width?: string | undefined;
}

export const Box: FunctionComponent<BoxProps>;

export interface EmailProps {
    align?: "left" | "center" | "right" | undefined;
    bgcolor?: string | undefined;
    bodyStyle?: CSSProperties | undefined;
    cellPadding?: number | undefined;
    cellSpacing?: number | undefined;
    children?: ReactNode | undefined;
    headCSS?: string | undefined;
    lang?: string | undefined;
    style?: CSSProperties | undefined;
    title: string;
    valign?: "top" | "middle" | "bottom" | undefined;
    width?: string | undefined;
}

export const Email: FunctionComponent<EmailProps>;

export interface ImageProps {
    alt: string;
    height: number;
    src: string;
    style?: CSSProperties | undefined;
    width: number;
}

export const Image: FunctionComponent<ImageProps>;

export interface ItemProps {
    align?: "left" | "center" | "right" | undefined;
    bgcolor?: string | undefined;
    children?: ReactNode | undefined;
    className?: string | undefined;
    style?: CSSProperties | undefined;
    valign?: "top" | "middle" | "bottom" | undefined;
}

export const Item: FunctionComponent<ItemProps>;

export interface SpanProps {
    children?: ReactNode | undefined;
    color?: string | undefined;
    fontFamily?: string | undefined;
    fontSize?: number | undefined;
    fontWeight?: string | undefined;
    lineHeight?: number | undefined;
    style?: CSSProperties | undefined;
}

export const Span: FunctionComponent<SpanProps>;

export function configStyleValidator(config: {
    platforms?: string[] | undefined;
    strict?: boolean | undefined;
    warn?: boolean | undefined;
}): void;

export function renderEmail(emailElement: ReactElement<EmailProps>): string;
