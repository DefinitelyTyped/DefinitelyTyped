import { ButtonView, LabeledFieldView, View, ViewCollection } from '@ckeditor/ckeditor5-ui';
import { FocusTracker, KeystrokeHandler, Locale } from '@ckeditor/ckeditor5-utils';
import { TableColorConfig } from '../../table';
import { TableCellPropertiesOptions } from '../../tablecellproperties';

/**
 * The class representing a table cell properties form, allowing users to customize
 * certain style aspects of a table cell, for instance, border, padding, text alignment, etc..
 */
export default class TableCellPropertiesView extends View {
    constructor(
        locale: Locale,
        options: {
            borderColors: TableColorConfig;
            backgroundColors: TableColorConfig;
            defaultTableCellProperties: TableCellPropertiesOptions;
        },
    );

    /**
     * The value of the cell border style.
     */
    get borderStyle(): string;
    protected set borderStyle(value: string);
    /**
     * The value of the cell border width style.
     */
    get borderWidth(): string;
    protected set borderWidth(value: string);

    /**
     * The value of the cell border color style.
     */
    get borderColor(): string;
    protected set borderColor(value: string);

    /**
     * The value of the cell padding style.
     */
    get padding(): string;
    protected set padding(value: string);

    /**
     * The value of the cell background color style.
     */
    get backgroundColor(): string;
    protected set backgroundColor(value: string);

    /**
     * The value of the table cell width style.
     */
    get width(): string;
    protected set width(value: string);

    /**
     * The value of the table cell height style.
     */
    get height(): string;
    protected set height(value: string);

    /**
     * The value of the horizontal text alignment style.
     */
    get horizontalAlignment(): string;
    protected set horizontalAlignment(value: string);

    /**
     * The value of the vertical text alignment style.
     */
    get verticalAlignment(): string;
    protected set verticalAlignment(value: string);

    /**
     * Options passed to the view. See {@link #constructor} to learn more.
     */
    readonly options: {
        borderColors: TableColorConfig;
        backgroundColors: TableColorConfig;
        defaultTableCellProperties: TableCellPropertiesOptions;
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
     * A dropdown that allows selecting the style of the table cell border.
     */
    readonly borderStyleDropdown: LabeledFieldView;

    /**
     * An input that allows specifying the width of the table cell border.
     */
    readonly borderWidthInput: LabeledFieldView;

    /**
     * An input that allows specifying the color of the table cell border.
     */
    readonly borderColorInput: LabeledFieldView;

    /**
     * An input that allows specifying the table cell background color.
     */
    readonly backgroundInput: LabeledFieldView;

    /**
     * An input that allows specifying the table cell padding.
     */
    readonly paddingInput: LabeledFieldView;

    /**
     * An input that allows specifying the table cell width.
     */
    readonly widthInput: LabeledFieldView;

    /**
     * An input that allows specifying the table cell height.
     */
    readonly heightInput: LabeledFieldView;

    /**
     * A toolbar with buttons that allow changing the horizontal text alignment in a table cell.
     */
    readonly horizontalAlignmentToolbar: LabeledFieldView;

    /**
     * A toolbar with buttons that allow changing the vertical text alignment in a table cell.
     */
    readonly verticalAlignmentToolbar: LabeledFieldView;

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
