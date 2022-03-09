import { View } from '@ckeditor/ckeditor5-ui';
import { FocusTracker, Locale } from '@ckeditor/ckeditor5-utils';

export default class InputView extends View {
    constructor(locale: Locale);

    /**
     * The value of the input.
     */
    get value(): string;
    protected set value(value: string);

    /**
     * The `id` attribute of the input (i.e. to pair with a `<label>` element).
     */
    get id(): string;
    protected set id(value: string);

    /**
     * The `placeholder` attribute of the input.
     */
    get placeholder(): string;
    protected set placeholder(value: string);

    /**
     * Controls whether the input view is in read-only mode.
     */
    get isReadOnly(): boolean;
    protected set isReadOnly(value: boolean);

    /**
     * Set to `true` when the field has some error. Usually controlled via
     * {@link module:ui/labeledinput/labeledinputview~LabeledInputView#errorText}.
     */
    get hasError(): boolean;
    protected set hasError(value: boolean);

    /**
     * The `id` of the element describing this field, e.g. when it has
     * some error, it helps screen readers read the error text.
     */
    get ariaDescribedById(): string;
    protected set ariaDescribedById(value: string);

    /**
     * Stores information about the editor UI focus and propagates it so various plugins and components
     * are unified as a focus group.
     */
    readonly focusTracker: FocusTracker;

    /**
     * An observable flag set to `true` when the input is currently focused by the user.
     * Set to `false` otherwise.
     */
    get isFocused(): boolean;
    protected set isFocused(val: boolean);

    /**
     * An observable flag set to `true` when the input contains no text, i.e.
     * when {@link #value} is `''`, `null`, or `false`.
     */
    get isEmpty(): boolean;
    protected set isEmpty(val: boolean);

    /**
     * Corresponds to the `inputmode` DOM attribute. Can be `text`, `numeric`, `decimal`, etc..
     */
    get inputMode(): HTMLInputElement['type'];
    protected set inputMode(value: HTMLInputElement['type']);

    render(): void;

    destroy(): void;

    /**
     * Moves the focus to the input and selects the value.
     */
    select(): void;

    /**
     * Focuses the input.
     */
    focus(): void;
}
