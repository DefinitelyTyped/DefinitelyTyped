import * as React from "react";
import { InternationalProps } from "../../../typings/shared";

export type ListBoxSelectionTranslationKey = "clear.all" | "clear.selection";
interface InheritedProps extends InternationalProps<ListBoxSelectionTranslationKey> { }

export interface ListBoxSelectionProps extends InheritedProps {
    clearSelection(e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>): void,
    selectionCount?: number,
}

export interface ListBoxSelectionComponent extends React.FC<ListBoxSelectionProps> { }

declare const ListBoxSelection: ListBoxSelectionComponent;

export default ListBoxSelection;
