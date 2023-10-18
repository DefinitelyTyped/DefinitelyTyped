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

export interface ContextSelectorProps<T> {
    theme: {
        context: {
            [key: string]: T;
        };
    };
}

export interface ThemeContextSelector<T> {
    (props: ContextSelectorProps<T>): T;
}

// pie menu selectors
export const radius: ThemeContextSelector<number>;
export const centerRadius: ThemeContextSelector<number>;
export const centralAngle: ThemeContextSelector<number>;
export const polar: ThemeContextSelector<boolean>;
export function ifObtuse(value: any, _default: any): any;

// slice selectors
export const startAngle: ThemeContextSelector<number>;
export const endAngle: ThemeContextSelector<number>;
export const skew: ThemeContextSelector<number>;

// components
export const Slice: React.ComponentType<SliceProps>;
export const PieMenu: React.ComponentType<PieMenuProps>;
export const PieCenter: React.ComponentType<PieCenterProps>;
