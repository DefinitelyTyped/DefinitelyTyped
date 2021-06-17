import InputTextView from "../inputtext/inputtextview";
import LabeledFieldView from "./labeledfieldview";
import DropdownView from "../dropdown/dropdownview";

export function createLabeledDropdown(
    labeledFieldView: LabeledFieldView,
    viewUid: string,
    statusUid: string,
): DropdownView;

export function createLabeledInputText(
    labeledFieldView: LabeledFieldView,
    viewUid: string,
    statusUid: string,
): InputTextView;
