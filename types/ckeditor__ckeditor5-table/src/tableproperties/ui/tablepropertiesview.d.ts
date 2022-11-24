import { ButtonView, LabeledFieldView, View, ViewCollection } from '@ckeditor/ckeditor5-ui';
import { FocusTracker, KeystrokeHandler, Locale } from '@ckeditor/ckeditor5-utils';
import { TableColorConfig } from '../../table';
import { TablePropertiesOptions } from '../../tableproperties';

/**
 * The class representing a table properties form, allowing users to customize
 * certain style aspects of a table, for instance, border, background color, alignment, etc..
 */
export default class TablePropertiesView extends View {
    constructor(
        locale: Locale,
        options?: {
            borderColors: TableColorConfig;
            backgroundColors: TableColorConfig;
            defaultTableProperties: TablePropertiesOptions;
        },
    );

    /**
     * The value of the border style.
     */
    get borderStyle(): string;
    protected set borderStyle(value: string);

    /**
     * The value of the border width style.
     */
    get borderWidth(): string;
    protected set borderWidth(value: string);

    /**
     * The value of the border color style.
     */
    get borderColor(): string;
    protected set borderColor(value: string);

    /**
     * The value of the background color style.
     */
    get backgroundColor(): string;
    protected set backgroundColor(value: string);

    /**
     * The value of the table width style.
     */
    get width(): string;
    protected set width(value: string);

    /**
     * The value of the table height style.
     */
    get height(): string;
    protected set height(value: string);

    /**
     * The value of the table alignment style.
     */
    get alignment(): string;
    protected set alignment(value: string);

    /**
     * Options passed to the view. See {@link #constructor} to learn more.
     */
    readonly options: {
        borderColors: TableColorConfig;
        backgroundColors: TableColorConfig;
        defaultTableProperties: TablePropertiesOptions;
    };

    /**
     * Tracks information about the DOM focus in the form.
     */
    readonly focusTracker: FocusTracker;

    /**
     * An instance of the {@link module:utils/keystrokehandler~KeystrokeHandler}.
     */
    readonly keystrokes: KeystrokeHandler;

    /**
     * A collection of child views in the form.
     */
    readonly children: ViewCollection;

    /**
     * A dropdown that allows selecting the style of the table border.
     */
    readonly borderStyleDropdown: LabeledFieldView;

    /**
     * An input that allows specifying the width of the table border.
     */
    readonly borderWidthInput: LabeledFieldView;

    /**
     * An input that allows specifying the color of the table border.
     */
    readonly borderColorInput: LabeledFieldView;

    /**
     * An input that allows specifying the table background color.
     */
    readonly backgroundInput: LabeledFieldView;

    /**
     * An input that allows specifying the table width.
     */
    readonly widthInput: LabeledFieldView;

    /**
     * An input that allows specifying the table height.
     */
    readonly heightInput: LabeledFieldView;

    /**
     * A toolbar with buttons that allow changing the alignment of an entire table.
     */
    readonly alignmentToolbar: LabeledFieldView;

    /**
     * The "Save" button view.
     */
    readonly saveButtonView: ButtonView;

    /**
     * The "Cancel" button view.
     */
    readonly cancelButtonView: ButtonView;

    /**
     * Focuses the fist focusable field in the form.
     */
    focus(): void;
    destroy(): void;
}
