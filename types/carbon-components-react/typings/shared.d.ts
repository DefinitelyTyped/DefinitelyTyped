import * as React from 'react';

export interface ReactAttr<T = HTMLElement> extends React.HTMLAttributes<T> {}
export interface ReactAnchorAttr<T = HTMLAnchorElement> extends React.AnchorHTMLAttributes<T> {}
export interface ReactButtonAttr<T = HTMLButtonElement> extends React.ButtonHTMLAttributes<T> {}
export interface ReactDivAttr extends ReactAttr<HTMLDivElement> {}
export interface ReactInputAttr<T = HTMLInputElement> extends React.InputHTMLAttributes<T> {}
export interface ReactLabelAttr<T = HTMLLabelElement> extends React.LabelHTMLAttributes<T> {}
export interface ReactLIAttr<T = HTMLLIElement> extends React.LiHTMLAttributes<T> {}
export type ReactCreateElementParam = Parameters<typeof React.createElement>[0];

export type ShapeOf<B extends object, E extends object = { [key: string]: any }> = (E extends never ? {} : E) & B;
export type Overwrite<T, U> = [T] extends [never] ? U : Omit<T, keyof U> & U;

export type VerticalDirection = 'bottom' | 'top';
export type HorizontalDirection = 'left' | 'right';
export type Direction = HorizontalDirection | VerticalDirection;
export type ListBoxBaseItemType = object | string;
export type TooltipAlignment = 'center' | 'end' | 'start';
export type TooltipPosition = Direction;
export type CarbonSize = 'lg' | 'sm' | 'xs';
export type CarbonInputSize = 'sm' | 'lg' | 'xl';

//
// In retrospect, it may not always be a good idea to lump shared props into a common reused interface.
// There's no real relation between components that share these types and they could diverge causing painful refactors.
// This approach should probably be left for more complicated types such as those that involve generics.
//

export interface DownshiftTypedProps<ItemType> {
    itemToString?(item: ItemType): string;
}

export interface InternationalProps<MID = string> {
    translateWithId?(messageId: MID): string;
}

export interface MenuOffsetData {
    left?: number;
    top?: number;
}

export interface RenderIconProps<P = any> {
    renderIcon?: React.ComponentType<P>;
}

export interface RequiresChildrenProps<T = React.ReactNode> {
    children: NonNullable<T>;
}

export interface RequiresIdProps<T = ReactAttr['id']> {
    id: NonNullable<T>;
}

export interface SizingProps {
    small?: boolean;
}

export interface SideNavSharedProps {
    isSideNavExpanded?: boolean;
}

export interface SideNavSizingProps {
    large?: boolean;
}

//
// aliases for some React types that it doesn't export directly. They are needed to make sure we match the signatures
// as close as possible.
//
// reference patterns:
//  function component with no generics: export declare const Comp: React.FC<PropsInterface>;
//  function component with generics: export declare function Comp<T extends SomeType>(props: FCProps<PropsInterface<T>>): FCReturn;
//  forwardRef component with no generics: export declare const Comp: ForwardRefReturn<HTMLElement, PropsInterface>;
//  forwardRef component with generics: export declare function Comp<T extends SomeType>(props: ForwardRefProps<PropsInterface<T>>): FCReturn;
//
export type FCProps<P = {}> = Parameters<React.FC<P>>[0];
export type FCReturn = ReturnType<React.FC>;
export type ForwardRefProps<T, P = {}> = React.PropsWithoutRef<React.PropsWithChildren<P>> & React.RefAttributes<T>;
export type ForwardRefReturn<T, P = {}> = React.ForwardRefExoticComponent<ForwardRefProps<T, P>>;

export type JSXIntrinsicElementProps<
    K extends keyof JSX.IntrinsicElements,
    REF extends boolean = false
> = REF extends true ? JSX.IntrinsicElements[K] : Omit<JSX.IntrinsicElements[K], 'ref'>;
