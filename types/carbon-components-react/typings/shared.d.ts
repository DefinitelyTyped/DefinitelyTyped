import * as React from "react";

export interface ReactAttr<T = HTMLElement> extends React.HTMLAttributes<T> { }
export interface ReactAnchorAttr<T = HTMLAnchorElement> extends React.AnchorHTMLAttributes<T> { }
export interface ReactButtonAttr<T = HTMLButtonElement> extends React.ButtonHTMLAttributes<T> { }
export interface ReactDivAttr extends ReactAttr<HTMLDivElement> { }
export interface ReactInputAttr<T = HTMLInputElement> extends React.InputHTMLAttributes<T> { }
export interface ReactLabelAttr<T = HTMLLabelElement> extends React.LabelHTMLAttributes<T> { }
export interface ReactLIAttr<T = HTMLLIElement> extends React.LiHTMLAttributes<T> { }
export type ReactCreateElementParam = Parameters<typeof React.createElement>[0];

export type ShapeOf<B extends object, E extends object = { [key: string]: any }> = (E extends never ? {} : E) & B;
export type Overwrite<T, U> = [T] extends [never] ? U : Omit<T, keyof U> & U;

export type Direction = "bottom" | "left" | "right" | "top";
export type ListBoxBaseItemType = object | string;
export type TooltipAlignment = "center" | "end" | "start";
export type TooltipPosition = Direction;

export interface DownshiftTypedProps<ItemType> {
    itemToString?(item: ItemType): string,
}

export interface EmbeddedIconProps {
    iconDescription?: string,
}

export interface EmbeddedTooltipProps {
    tooltipAlignment?: TooltipAlignment,
    tooltipPosition?: TooltipPosition,
}

export interface InternationalProps<MID = string> {
    translateWithId?(messageId: MID): string,
}

export interface MenuOffsetData {
    left?: number,
    top?: number,
}

export interface RenderIconProps {
    renderIcon?: React.ComponentType,
}

export interface RequiresChildrenProps<T = React.ReactNode> {
    children: NonNullable<T>,
}

export interface RequiresIdProps<T = ReactAttr["id"]> {
    id: NonNullable<T>,
}

export interface SizingProps {
    small?: boolean,
}

export interface ThemeProps {
    light?: boolean,
}

export interface ValidityProps {
    invalid?: boolean,
    invalidText?: string,
}

export interface SideNavSharedProps {
    isSideNavExpanded?: boolean;
}

export interface SideNavSizingProps {
    large?: boolean;
}

export interface RefForwardingProps<T = HTMLElement> {
    ref?: React.RefObject<T>;
}
