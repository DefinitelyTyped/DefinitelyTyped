import { LabeledFieldView, ListDropdownItemDefinition, ToolbarView } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';
import { TableColorConfig } from '../../table';
import TableCellPropertiesView from '../../tablecellproperties/ui/tablecellpropertiesview';
import TablePropertiesView from '../../tableproperties/ui/tablepropertiesview';
import ColorInputView from '../../ui/colorinputview';

/**
 * Returns an object containing pairs of CSS border style values and their localized UI
 * labels. Used by {@link module:table/tablecellproperties/ui/tablecellpropertiesview~TableCellPropertiesView}
 * and {@link module:table/tableproperties/ui/tablepropertiesview~TablePropertiesView}.
 */
export function getBorderStyleLabels(t: Locale['t']): {
    none: string;
    solid: string;
    dotted: string;
    dashed: string;
    double: string;
    groove: string;
    ridge: string;
    inset: string;
    outset: string;
};

/**
 * Returns a localized error string that can be displayed next to color (background, border)
 * fields that have an invalid value.
 */
export function getLocalizedColorErrorText(t: Locale['t']): string;

/**
 * Returns a localized error string that can be displayed next to length (padding, border width)
 * fields that have an invalid value.
 */
export function getLocalizedLengthErrorText(t: Locale['t']): string;

/**
 * Returns `true` when the passed value is an empty string or a valid CSS color expression.
 * Otherwise, `false` is returned.
 *
 * See {@link module:engine/view/styles/utils~isColor}.
 */
export function colorFieldValidator(value: string): boolean;

/**
 * Returns `true` when the passed value is an empty string, a number without a unit or a valid CSS length expression.
 * Otherwise, `false` is returned.
 *
 * See {@link module:engine/view/styles/utils~isLength}.
 * See {@link module:engine/view/styles/utils~isPercentage}.
 */
export function lengthFieldValidator(value: string): boolean;

/**
 * Returns `true` when the passed value is an empty string, a number without a unit or a valid CSS length expression.
 * Otherwise, `false` is returned.
 *
 * See {@link module:engine/view/styles/utils~isLength}.
 */
export function lineWidthFieldValidator(value: string): boolean;

/**
 * Generates item definitions for a UI dropdown that allows changing the border style of a table or a table cell.
 */
export function getBorderStyleDefinitions(
    view: TableCellPropertiesView,
    defaultStyle: string,
): ListDropdownItemDefinition;

/**
 * A helper that fills a toolbar with buttons that:
 *
 * * have some labels,
 * * have some icons,
 * * set a certain UI view property value upon execution.
 */
export function fillToolbar(options: {
    view: TableCellPropertiesView | TablePropertiesView;
    icons: string[];
    toolbar: ToolbarView;
    labels: Record<string, string>;
    propertyName: string;
    nameToValue: (name: string) => string;
}): void;

/**
 * A default color palette used by various user interfaces related to tables, for instance,
 * by {@link module:table/tablecellproperties/tablecellpropertiesui~TableCellPropertiesUI} or
 * {@link module:table/tableproperties/tablepropertiesui~TablePropertiesUI}.
 *
 * The color palette follows the {@link module:table/table~TableColorConfig table color configuration format}
 * and contains the following color definitions:
 *
 *    const defaultColors = [
 *      {
 *        color: 'hsl(0, 0%, 0%)',
 *        label: 'Black'
 *      },
 *      {
 *        color: 'hsl(0, 0%, 30%)',
 *        label: 'Dim grey'
 *      },
 *      {
 *        color: 'hsl(0, 0%, 60%)',
 *        label: 'Grey'
 *      },
 *      {
 *        color: 'hsl(0, 0%, 90%)',
 *        label: 'Light grey'
 *      },
 *      {
 *        color: 'hsl(0, 0%, 100%)',
 *        label: 'White',
 *        hasBorder: true
 *      },
 *      {
 *        color: 'hsl(0, 75%, 60%)',
 *        label: 'Red'
 *      },
 *      {
 *        color: 'hsl(30, 75%, 60%)',
 *        label: 'Orange'
 *      },
 *      {
 *        color: 'hsl(60, 75%, 60%)',
 *        label: 'Yellow'
 *      },
 *      {
 *        color: 'hsl(90, 75%, 60%)',
 *        label: 'Light green'
 *      },
 *      {
 *        color: 'hsl(120, 75%, 60%)',
 *        label: 'Green'
 *      },
 *      {
 *        color: 'hsl(150, 75%, 60%)',
 *        label: 'Aquamarine'
 *      },
 *      {
 *        color: 'hsl(180, 75%, 60%)',
 *        label: 'Turquoise'
 *      },
 *      {
 *        color: 'hsl(210, 75%, 60%)',
 *        label: 'Light blue'
 *      },
 *      {
 *        color: 'hsl(240, 75%, 60%)',
 *        label: 'Blue'
 *      },
 *      {
 *        color: 'hsl(270, 75%, 60%)',
 *        label: 'Purple'
 *      }
 *    ];
 */
export const defaultColors: [
    {
        color: 'hsl(0, 0%, 0%)';
        label: 'Black';
    },
    {
        color: 'hsl(0, 0%, 30%)';
        label: 'Dim grey';
    },
    {
        color: 'hsl(0, 0%, 60%)';
        label: 'Grey';
    },
    {
        color: 'hsl(0, 0%, 90%)';
        label: 'Light grey';
    },
    {
        color: 'hsl(0, 0%, 100%)';
        label: 'White';
        hasBorder: true;
    },
    {
        color: 'hsl(0, 75%, 60%)';
        label: 'Red';
    },
    {
        color: 'hsl(30, 75%, 60%)';
        label: 'Orange';
    },
    {
        color: 'hsl(60, 75%, 60%)';
        label: 'Yellow';
    },
    {
        color: 'hsl(90, 75%, 60%)';
        label: 'Light green';
    },
    {
        color: 'hsl(120, 75%, 60%)';
        label: 'Green';
    },
    {
        color: 'hsl(150, 75%, 60%)';
        label: 'Aquamarine';
    },
    {
        color: 'hsl(180, 75%, 60%)';
        label: 'Turquoise';
    },
    {
        color: 'hsl(210, 75%, 60%)';
        label: 'Light blue';
    },
    {
        color: 'hsl(240, 75%, 60%)';
        label: 'Blue';
    },
    {
        color: 'hsl(270, 75%, 60%)';
        label: 'Purple';
    },
];

/**
 * Returns a creator for a color input with a label.
 *
 * For given options, it returns a function that creates an instance of a
 * {@link module:table/ui/colorinputview~ColorInputView color input} logically related to
 * a {@link module:ui/labeledfield/labeledfieldview~LabeledFieldView labeled view} in the DOM.
 *
 * The helper does the following:
 *
 * * It sets the color input `id` and `ariaDescribedById` attributes.
 * * It binds the color input `isReadOnly` to the labeled view.
 * * It binds the color input `hasError` to the labeled view.
 * * It enables a logic that cleans up the error when the user starts typing in the color input.
 *
 * Usage:
 *
 *    const colorInputCreator = getLabeledColorInputCreator( {
 *      colorConfig: [ ... ],
 *      columns: 3,
 *    } );
 *
 *    const labeledInputView = new LabeledFieldView( locale, colorInputCreator );
 *    console.log( labeledInputView.view ); // A color input instance.
 */
export function getLabeledColorInputCreator(options: {
    colorConfig: TableColorConfig;
    columns: number;
    defaultColorValue?: string;
}): (labeledFieldView: LabeledFieldView, viewUid: string, statusUid: string) => ColorInputView;
