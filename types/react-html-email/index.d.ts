// Type definitions for react-html-email 3.0
// Project: https://github.com/chromakode/react-html-email#readme
// Definitions by: Saiichi Hashimoto <https://github.com/saiichihashimoto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import type { CSSProperties, FunctionComponent, FunctionComponentElement, ReactElement, ReactNode } from 'react';

export interface AProps {
    children?: ReactNode;
    color?: string;
    download?: string;
    href: string;
    style?: CSSProperties;
    textDecoration?: string;
}

export const A: FunctionComponent<AProps>;

export interface BoxProps {
    align?: 'left' | 'center' | 'right';
    bgcolor?: string;
    border?: string;
    cellPadding?: number;
    cellSpacing?: number;
    children?: ReactNode;
    height?: string;
    style?: CSSProperties;
    valign?: 'top' | 'middle' | 'bottom';
    width?: string;
}

export const Box: FunctionComponent<BoxProps>;

export interface EmailProps {
    align?: 'left' | 'center' | 'right';
    bgcolor?: string;
    bodyStyle?: CSSProperties;
    cellPadding?: number;
    cellSpacing?: number;
    children?: ReactNode;
    headCSS?: string;
    lang?: string;
    style?: CSSProperties;
    title: string;
    valign?: 'top' | 'middle' | 'bottom';
    width?: string;
}

export const Email: FunctionComponent<EmailProps>;

export interface ImageProps {
    alt: string;
    height: number;
    src: string;
    style?: CSSProperties;
    width: number;
}

export const Image: FunctionComponent<ImageProps>;

export interface ItemProps {
    align?: 'left' | 'center' | 'right';
    bgcolor?: string;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    valign?: 'top' | 'middle' | 'bottom';
}

export const Item: FunctionComponent<ItemProps>;

export interface SpanProps {
    children?: ReactNode;
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: string;
    lineHeight?: number;
    style?: CSSProperties;
}

export const Span: FunctionComponent<SpanProps>;

export function configStyleValidator(config: {
    strict?: boolean;
    warn?: boolean;
}): void;

export function renderEmail(emailElement: ReactElement<EmailProps>): string;
