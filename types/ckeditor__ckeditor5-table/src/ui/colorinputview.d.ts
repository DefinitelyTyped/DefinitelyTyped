import { View } from '@ckeditor/ckeditor5-ui';
import { ColorDefinition } from '@ckeditor/ckeditor5-ui/src/colorgrid/colorgridview';
import { Locale } from '@ckeditor/ckeditor5-utils';

/**
 * The color input view class. It allows the user to type in a color (hex, rgb, etc.)
 * or choose it from the configurable color palette with a preview.
 */
export default class ColorInputView extends View {
    /**
     * Creates an instance of the color input view.
     */
    constructor(
        locale: Locale,
        options: { colorDefinitions: ColorDefinition[]; columns: number; defaultColorValue?: string },
    );

    /**
     * The value of the input.
     */
    get value(): string;
    protected set value(value: string);

    /**
     * The `id` attribute of the input (i.e. to pair with the `<label>` element).
     */
    get id(): string;
    protected set id(value: string);

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
     * An observable flag set to `true` when the input is focused by the user.
     * `false` otherwise.
     */
    get isFocused(): boolean;
    protected set isFocused(value: boolean);

    /**
     * An observable flag set to `true` when the input contains no text.
     */
    get isEmpty(): boolean;
    protected set isEmpty(value: boolean);

    /**
     * The `id` of the element describing this field. When the field has
     * some error, it helps screen readers read the error text.
     */
    get ariaDescribedById(): string | undefined;
    protected set ariaDescribedById(value: string | undefined);

    /**
     * A cached reference to the options passed to the constructor.
     */
    readonly options: { colorDefinitions: ColorDefinition[]; columns: number; defaultColorValue?: string };
    /**
     * Focuses the input.
     */
    focus(): void;
}
