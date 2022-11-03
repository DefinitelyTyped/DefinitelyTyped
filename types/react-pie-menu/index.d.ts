// Type definitions for react-pie-menu 1.0
// Project: https://github.com/psychobolt/react-pie-menu#readme
// Definitions by: Joel Keyser <https://github.com/keyserj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Callback = (_event: React.SyntheticEvent<unknown>) => unknown;

export interface SliceContext {
    radius?: string;
    centerRadius?: string;
    centralAngle?: number;
    polar?: boolean;
}

export interface SliceProps extends SliceContext {
    as?: unknown;
    className?: string;
    contentHeight?: string;
    onMouseEnter?: Callback;
    onMouseOver?: Callback;
    onMouseOut?: Callback;
    onSelect?: Callback;
    onKeyDown?: Callback;
    onFocus?: Callback;
    onBlur?: Callback;
    attrs?: Record<string, unknown>;
    children?: React.ReactNode;
}

export interface Metadata {
    className?: string;
    radiusPx?: number;
    centerRadiusPx?: number;
}

export interface PieMenuProps extends SliceContext, Metadata {
    slices?: { itemId: string; slice: React.ReactNode[] };
    startOffsetAngle?: number;
    polar?: boolean;
    Center?: React.ComponentType<unknown>;
    attrs?: Record<string, unknown>;
    children: React.ReactNode;
}

export interface PieCenterProps {
    onClick?: Callback;
    children?: React.ReactNode;
}

export const Slice: React.ComponentType<SliceProps>;
export const PieMenu: React.ComponentType<PieMenuProps>;
export const PieCenter: React.ComponentType<PieCenterProps>;
