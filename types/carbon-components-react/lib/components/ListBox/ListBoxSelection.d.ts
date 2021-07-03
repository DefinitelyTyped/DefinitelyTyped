import * as React from "react";
import { InternationalProps } from "../../../typings/shared";

export type ListBoxSelectionTranslationKey = "clear.all" | "clear.selection";

export interface ListBoxSelectionProps extends InternationalProps<ListBoxSelectionTranslationKey> {
    clearSelection(e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>): void,
    disabled?: boolean,
    onClearSelection?(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>): void,
    selectionCount?: number,
}

export interface ListBoxSelectionComponent extends React.FC<ListBoxSelectionProps> { }

declare const ListBoxSelection: ListBoxSelectionComponent;

export default ListBoxSelection;
