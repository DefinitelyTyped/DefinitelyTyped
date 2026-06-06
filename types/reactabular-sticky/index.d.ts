import * as React from "react";
import * as Table from "reactabular-table";

export interface StickyHeaderProps {
    tableBody: HTMLElement | null;
    onScroll?: ((e: Partial<UIEvent>) => void) | undefined;
}

export class Header extends React.Component<StickyHeaderProps & Table.HeaderProps> {
    ref: HTMLElement;
    container: HTMLElement;
}

export interface StickyBodyProps {
    tableHeader: HTMLElement | null;
    onScroll?: ((e: Partial<UIEvent>) => void) | undefined;
}

export class Body extends React.Component<StickyBodyProps & Table.BodyProps> {
    ref: HTMLElement;
}
