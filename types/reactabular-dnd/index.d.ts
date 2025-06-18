import * as Table from "reactabular-table";

import { JSX } from "react";

export interface DndMoveEvent {
    sourceLabel: string;
    targetLabel: string;
}

export function moveLabels(columns: Table.Column[], event: DndMoveEvent): Table.Column[];

export function Header(props: any): JSX.Element;
