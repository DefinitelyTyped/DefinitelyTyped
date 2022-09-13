import InputTextView from '../inputtext/inputtextview';
import LabeledFieldView from './labeledfieldview';
import DropdownView from '../dropdown/dropdownview';
import InputNumberView from '../inputnumber/inputnumberview';

/**
 * A helper for creating labeled dropdowns.
 *
 * It creates an instance of a {@link module:ui/dropdown/dropdownview~DropdownView dropdown} that is
 * logically related to a {@link module:ui/labeledfield/labeledfieldview~LabeledFieldView labeled field view}.
 *
 * The helper does the following:
 *
 * * It sets dropdown's `id` and `ariaDescribedById` attributes.
 * * It binds input's `isEnabled` to the labeled view.
 *
 * Usage:
 *
 *    const labeledInputView = new LabeledFieldView( locale, createLabeledDropdown );
 *    console.log( labeledInputView.fieldView ); // A dropdown instance.
 */
export function createLabeledDropdown(
    labeledFieldView: LabeledFieldView,
    viewUid: string,
    statusUid: string,
): DropdownView;

/**
 * A helper for creating labeled inputs.
 *
 * It creates an instance of a {@link module:ui/inputtext/inputtextview~InputTextView input text} that is
 * logically related to a {@link module:ui/labeledfield/labeledfieldview~LabeledFieldView labeled view} in DOM.
 *
 * The helper does the following:
 *
 * * It sets input's `id` and `ariaDescribedById` attributes.
 * * It binds input's `isReadOnly` to the labeled view.
 * * It binds input's `hasError` to the labeled view.
 * * It enables a logic that cleans up the error when user starts typing in the input.
 *
 * Usage:
 *
 *    const labeledInputView = new LabeledFieldView( locale, createLabeledInputText );
 *    console.log( labeledInputView.fieldView ); // A text input instance.
 */
export function createLabeledInputText(
    labeledFieldView: LabeledFieldView,
    viewUid: string,
    statusUid: string,
): InputTextView;

/**
 * A helper for creating labeled number inputs.
 *
 * It creates an instance of a {@link module:ui/inputnumber/inputnumberview~InputNumberView input number} that is
 * logically related to a {@link module:ui/labeledfield/labeledfieldview~LabeledFieldView labeled view} in DOM.
 *
 * The helper does the following:
 *
 * * It sets input's `id` and `ariaDescribedById` attributes.
 * * It binds input's `isReadOnly` to the labeled view.
 * * It binds input's `hasError` to the labeled view.
 * * It enables a logic that cleans up the error when user starts typing in the input.
 *
 * Usage:
 *
 *    const labeledInputView = new LabeledFieldView( locale, createLabeledInputNumber );
 *    console.log( labeledInputView.fieldView ); // A number input instance.
 */
export function createLabeledInputNumber(
    labeledFieldView: LabeledFieldView,
    viewUid: string,
    statusUid: string,
): InputNumberView;
