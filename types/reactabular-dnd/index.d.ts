// Type definitions for reactabular-dnd 8.16
// Project: http://reactabular.js.org/
// Definitions by: Marcos Junior <https://github.com/junalmeida>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="react" />

import * as Table from "reactabular-table";

export interface DndMoveEvent {
    sourceLabel: string;
    targetLabel: string;
}

export function moveLabels(columns: Table.Column[], event: DndMoveEvent): Table.Column[];

export function Header(props: any): JSX.Element;
