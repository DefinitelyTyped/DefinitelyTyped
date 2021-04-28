import DocumentSelection from "../documentselection";
import Model from "../model";
import Selection from "../selection";

export default function modifySelection(
    model: Model,
    selection: Selection | DocumentSelection,
    options?: { direction?: "forward" | "backward"; unit?: "character" | "codePoint" | "word" },
): void;
