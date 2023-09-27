// Type definitions for reactabular-sticky 8.14
// Project: http://reactabular.js.org/
// Definitions by: Marcos Junior <https://github.com/junalmeida>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

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
