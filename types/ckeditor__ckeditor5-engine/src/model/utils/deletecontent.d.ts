import DocumentSelection from "../documentselection";
import Model from "../model";
import Selection from "../selection";

export default function deleteContent(
    model: Model,
    selection: Selection | DocumentSelection,
    options?: { leaveUnmerged?: boolean; doNotResetEntireContent?: boolean; doNotAutoparagraph?: boolean },
): void;
