import * as React from "react";

export interface AppProps {
    children?: React.ReactNode;
    /**
     * Called when the quit menu item is called, right before the entire app quits.
     */
    onShouldQuit?: (() => void) | undefined;
}

/**
 * The app is the container for the entire program and holds Windows and Menus.
 */
export class App extends React.Component<AppProps> {}

export interface AreaBaseProps extends GridChildrenProps, Label, Stretchy {
    children?: React.ReactNode;
    /**
     * The fill color for the component.
     */
    fill?: string | undefined;
    /**
     * The opacity of the fill (between 0 and 1). Gets multiplied with the fill colors alpha value.
     */
    fillOpacity?: number | undefined;
    /**
     * The stroke (line) color for the component.
     */
    stroke?: string | undefined;

    strokeLinecap?: "flat" | "round" | "bevel" | undefined;

    strokeLinejoin?: "miter" | "round" | "bevel" | undefined;
    /**
     * How far to extend the stroke at a sharp corner when using `strokeLinejoin='miter'`
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit
     * for a more detailed explanation.
     */
    strokeMiterlimit?: number | undefined;
    /**
     * The opacity of the stroke (between 0 and 1). Gets multiplied with the stroke colors alpha value.
     */
    strokeOpacity?: number | undefined;

    strokeWidth?: number | undefined;
    /**
     * List of transformations to apply to the component (are quite similar to SVG transformations). Example for multiple transformations: `transform="translate(100, 100) rotate(90)"`.
     *
     * All x and y coordinates specified in a transformation are relative _to the component itself_, meaning that `translate(-50%, 0)` will translate the component by 50% of it's own width to left.
     */
    transform?: string | undefined;
}

export interface AreaRectangleProps extends AreaBaseProps {
    /**
     * The height of the rectangle.
     */
    height: number | string;
    /**
     * The width of the rectangle.
     */
    width: number | string;
    /**
     * The x coordinate of the rectangles top left corner.
     */
    x: number | string;
    /**
     * The y coordinate of the rectangles top left corner.
     */
    y: number | string;
}

/**
 * A rectangle to be displayed in an Area component.
 */
export class AreaRectangle extends React.Component<AreaRectangleProps> {}

export interface AreaLineProps extends AreaBaseProps {
    /**
     * The x coordinate of the line's start point.
     */
    x1: number | string;
    /**
     * The x coordinate of the line's end point.
     */
    x2: number | string;
    /**
     * The y coordinate of the line's start point.
     */
    y1: number | string;
    /**
     * The y coordinate of the line's end point.
     */
    y2: number | string;
}

export class AreaLine extends React.Component<AreaLineProps> {}

export interface AreaCircleProps extends AreaBaseProps {
    /**
     * The circle's radius. Percentage values use the Area's width.
     */
    r: number | string;
    /**
     * The x coordinate of the center of the cirle.
     */
    x: number | string;
    /**
     * The y coordinate of the center of the cirle.
     */
    y: number | string;
}

export class AreaCircle extends React.Component<AreaCircleProps> {}

export interface AreaBezierProps extends AreaBaseProps {
    /**
     * The x coordinate of the curve's control point at the start.
     */
    cx1: number | string;
    /**
     * The x coordinate of the curve's control point at the end.
     */
    cx2: number | string;
    /**
     * The y coordinate of the curve's control point at the start.
     */
    cy1: number | string;
    /**
     * The y coordinate of the curve's control point at the end.
     */
    cy2: number | string;
    /**
     * The x coordinate of the curve's start point.
     */
    x1: number | string;
    /**
     * The x coordinate of the curve's end point.
     */
    x2: number | string;
    /**
     * The y coordinate of the curve's start point.
     */
    y1: number | string;
    /**
     * The y coordinate of the curve's end point.
     */
    y2: number | string;
}

export class AreaBezier extends React.Component<AreaBezierProps> {}

export interface AreaPathProps extends AreaBaseProps {
    /**
     * A string describing the path (uses SVG's path syntax, explanation @see https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths).
     *
     * A warning is displayed whan an unimplemented shaped are used (Quadratic Beziers and Arcs).
     */
    d: string;
    /**
     * Sets the methods how to determine wheter to fill a path. Explanation @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule.
     */
    fillMode: "nonzero" | "evenodd";
}

export class AreaPath extends React.Component<AreaPathProps> {}

export interface AreaTextProps extends StyledTextProps, AreaBaseProps {}

export class AreaText extends React.Component<AreaTextProps> {}

export interface AreaGroupProps extends AreaBaseProps {
    /**
     * Specify `width` and `height` to be able to use percentage values in transforms.
     */
    width?: number | string | undefined;
    /**
     * Specify `width` and `height` to be able to use percentage values in transforms.
     */
    height?: number | string | undefined;
}

export class AreaGroup extends React.Component<AreaGroupProps> {}

export interface MouseEvent {
    button: number;
    height: number;
    width: number;
    x: number;
    y: number;
}

export interface KeyboardEvent {
    extKey: number;
    key: string;
    modifierKey: number;
    modifiers: number;
}

export interface AreaProps extends AreaBaseProps {
    /**
     * Called when releasing a key. Return `true` to signal that this event got handled (always returning true will disable any menu accelerators).
     */
    onKeyDown?: ((event: KeyboardEvent) => boolean) | undefined;
    /**
     * Called when pressing a key. Return `true` to signal that this event got handled (always returning true will disable any menu accelerators).
     */
    onKeyUp?: ((event: KeyboardEvent) => boolean) | undefined;
    /**
     * Whether the area can be seen.
     */
    onMouseDown?: ((event: MouseEvent) => void) | undefined;
    /**
     * Called when the mouse enters the area.
     */
    onMouseEnter?: (() => void) | undefined;
    /**
     * Called when the mouse leaves the area.
     */
    onMouseLeave?: (() => void) | undefined;
    /**
     * Called when the mouse is moved over the area
     */
    onMouseMove?:
        | ((event: {
            buttons: ReadonlyArray<string>;
            height: number;
            width: number;
            x: number;
            y: number;
        }) => void)
        | undefined;
    /**
     * **Not working at the moment.**
     *
     * Called when releasing a mouse button over the area.
     */
    onMouseUp?: ((event: MouseEvent) => void) | undefined;
    /**
     * Whether the area can be seen.
     */
    visible?: boolean | undefined;
}

/**
 * A component onto which area components like rectangles or circles can be drawn.
 *
 * Some props can be applied to all area components (including Area itself and children)
 * @see https://proton-native.js.org/#/area_props.
 */
export class Area extends React.Component<AreaProps> {
    /**
     * A Bezier curve to be displayed in an Area component.
     */
    static Bezier: typeof AreaBezier;
    /**
     * A circle to be displayed in an Area component.
     */
    static Circle: typeof AreaCircle;
    /**
     * A component to apply props to all it's children in an Area component.
     *
     * To be able to use percentage values in transforms, the props `width` and `height` need to be specified (they have no graphical effect).
     */
    static Group: typeof AreaGroup;
    /**
     * A straigt line to be displayed in an Area component.
     */
    static Line: typeof AreaLine;
    /**
     * A component describing a path to be displayed in an Area component.
     *
     * To be able to use percentage values in transforms, the props `width` and `height` need to be specified (they have no graphical effect).
     */
    static Path: typeof AreaPath;
    /**
     * A rectangle to be displayed in an Area component.
     */
    static Rectangle: typeof AreaRectangle;
    /**
     * A (possibly styled) text to be displayed in an Area component. Nested `Area.Text` components inheirit the parent's style.
     */
    static Text: typeof AreaText;
}

export interface BoxProps extends GridChildrenProps, Label, Stretchy {
    children?: React.ReactNode;
    /**
     * Whether the Box is enabled.
     */
    enabled?: boolean | undefined;
    /**
     * Whether there is extra space between the children in the Box.
     */
    padded?: boolean | undefined;
    /**
     * Whether the Box arranges its children vertically or horizontally.
     */
    vertical?: boolean | undefined;
    /**
     * Whether the Box and its children can be seen.
     */
    visible?: boolean | undefined;
}

export class Box extends React.Component<BoxProps> {}

export interface ButtonProps extends GridChildrenProps, Label, Stretchy {
    /**
     * The text to display in the button.
     */
    children?: string | undefined;
    /**
     * Whether the button can be clicked.
     */
    enabled?: boolean | undefined;
    /**
     * Called when the button is clicked.
     */
    onClick?: (() => void) | undefined;
    /**
     * Whether the button can be seen.
     */
    visible?: boolean | undefined;
}

/**
 * A container for multiple components that are ordered vertically or horizontally. Similar to React Native's `View`.
 */
export class Button extends React.Component<ButtonProps> {}

export interface CheckboxProps extends GridChildrenProps, Label, Stretchy {
    /**
     * Whether the checkbox is checked or not.
     */
    checked?: boolean | undefined;
    /**
     * The text to display next to the check box.
     */
    children?: string | undefined;
    /**
     * Whether the checkbox can be used.
     */
    enabled?: boolean | undefined;
    /**
     * Called when the checkbox is clicked. The current checkbox state is passed as an argument.
     */
    onToggle?: ((checked: boolean) => void) | undefined;
    /**
     * Whether the checkbox can be seen.
     */
    visible?: boolean | undefined;
}

export class Checkbox extends React.Component<CheckboxProps> {}

export interface ColorButtonProps extends GridChildrenProps, Label, Stretchy {
    /**
     * The initial color for the ColorButton. Can be passed as standard color seen in CSS (a color name, hex, rgb, rgba, hsl, hsla).
     */
    color?: string | undefined;
    /**
     * Called when the color is changed for the ColorButton. The current color is passed as an object of RGBA.
     */
    onChange?:
        | ((color: {
            r: number;
            g: number;
            b: number;
            a: number;
        }) => void)
        | undefined;
}

/**
 * A button that allows the user to choose a color.
 */
export class ColorButton extends React.Component<ColorButtonProps> {}

export interface FormProps extends GridChildrenProps, Stretchy {
    children?: React.ReactNode;
    /**
     * Whether the Form is enabled.
     */
    enabled?: boolean | undefined;
    /**
     * Whether there is padding between the components
     */
    padded?: boolean | undefined;
    /**
     * Whether the Form can be seen.
     */
    visible?: boolean | undefined;
}

/**
 * A container where there is a label on the left and a component on the right.
 *
 * Each form component has a single prop, `label` which sets the label to its left. It is required.
 */
export class Form extends React.Component<FormProps> {}

export interface GridChildrenProps {
    /**
     * Whether the component is aligned with the other components in the column/row.
     */
    align?: {
        h: boolean;
        v: boolean;
    } | undefined;
    /**
     * What column the component resides in.
     */
    column?: number | undefined;
    /**
     * Whether the component can expand in the direction.
     */
    expand?: {
        h: boolean;
        v: boolean;
    } | undefined;
    /**
     * What row the component resides in.
     */
    row?: number | undefined;
    /**
     * How many rows/columns the component takes off.
     */
    span?: {
        x: number;
        y: number;
    } | undefined;
}

export interface GridProps {
    children?: React.ReactNode;
    /**
     * Whether the Grid is enabled.
     */
    enabled?: boolean | undefined;
    /**
     * Whether there is padding between the components
     */
    padded?: boolean | undefined;
    /**
     * Whether the Grid can be seen.
     */
    visible?: boolean | undefined;
}

/**
 * A grid where components can be placed in rows and columns.
 */
export class Grid extends React.Component<GridProps> {}

export interface GroupProps extends GridChildrenProps, Label, Stretchy {
    /**
     * Group can only have one child. To have more than one child, use boxes.
     */
    children?: JSX.Element | undefined;
    /**
     * Whether the Group is enabled.
     */
    enabled?: boolean | undefined;
    /**
     * Whether there is a margin inside the group.
     */
    margined?: boolean | undefined;
    /**
     * The name of the group.
     */
    title?: string | undefined;
    /**
     * Whether the Grid can be seen.
     */
    visible?: boolean | undefined;
}

/**
 * A named group of components.
 *
 * **Note:** Group can only have one child. To have more than one child, use boxes
 */
export class Group extends React.Component<GroupProps> {}

export interface Label {
    /**
     * Label for Form and Tab children
     */
    label?: string | undefined;
}

export interface MenuProps {
    children?: React.ReactNode;
    /**
     * The name of the menu.
     */
    label?: string | undefined;
}

export interface MenuItemProps {
    /**
     * The text to display for the menu item.
     */
    children?: string | undefined;
    /**
     * If the type is `Check`, then set whether it is checked or not.
     */
    checked?: boolean | undefined;
    /**
     * How the menu item is displayed.
     *
     * - `Check` - a checkable option in the menu.
     * - `Quit` - a Quit button. This accepts no text.
     * - `About` - an About button. This accepts no text.
     * - `Preferences` - a Preferences button. This accepts no text.
     * - `Separator` - a Separator between menu items. This accepts no text.
     * - `Item` - a normal menu button. This is the default.
     */
    type?: "Check" | "Quit" | "About" | "Preferences" | "Separator" | "Item" | undefined;
    /**
     * Called when the menu item is clicked. If the type is `Check`, then it passes whether it is checked as an argument.
     */
    onClick?: ((checked: boolean) => void) | undefined;
}

/**
 * A single item in a Menu.
 */
export class MenuItem extends React.Component<MenuItemProps> {}

/**
 * The top bar on a window that can have multiple options.
 *
 * The menu must come outside and before the Window for it to take effect. It is made up of Menu.Items. Menus can be embedded inside eachother to make sub-menus.
 */
export class Menu extends React.Component<MenuProps> {
    /**
     * A single item in a Menu.
     */
    static Item: typeof MenuItem;
}

export interface PickerProps extends GridChildrenProps, Label, Stretchy {
    /**
     * Whether the user can enter their own custom text in addition to the drop down menu.
     */
    editable?: boolean | undefined;
    /**
     * Whether the Picker is enabled.
     */
    enabled?: boolean | undefined;
    /**
     * When an *editable* Picker is changed. The current text is passed as an argument.
     */
    onChange?: ((text: string) => void) | undefined;
    /**
     * When a *non-editable* Picker is changed. The current selection is passed as an argument.
     */
    onSelect?: ((selection: number) => void) | undefined;
    /**
     * What element is selected if the picker *is not* editable.
     */
    selected?: number | undefined;
    /**
     * What text is selected/typed if the picker *is* editable.
     */
    text?: string | undefined;
    /**
     * Whether the Picker can be seen.
     */
    visible?: boolean | undefined;
}

export interface PickerItemProps {
    children: string;
}

export class PickerItem extends React.Component<PickerItemProps> {}

/**
 * A drop down menu where the user can pick different values.
 */
export class Picker extends React.Component<PickerProps> {
    static Item: typeof PickerItem;
}

export interface ProgressBarProps extends GridChildrenProps, Label, Stretchy {
    /**
     * Whether the ProgressBar is enabled.
     */
    enabled?: boolean | undefined;
    /**
     * The current value of the ProgressBar (0-100). A value of -1 indicates an indeterminate progressbar.
     */
    value?: number | undefined;
    /**
     * Whether the ProgressBar can be seen.
     */
    visible?: boolean | undefined;
}

/**
 * A bar that shows the progress in a certain task, 0-100.
 */
export class ProgressBar extends React.Component<ProgressBarProps> {}

export interface RadioButtonsItemProps {
    children: string;
}

export class RadioButtonsItem extends React.Component<RadioButtonsItemProps> {}

export interface RadioButtonsProps extends GridChildrenProps, Label, Stretchy {
    children?: React.ReactNode;
    /**
     * Whether the RadioButtons can be used.
     */
    enabled?: boolean | undefined;
    /**
     * Called when a RadioButton is selected. The number selected is passed as an argument.
     */
    onSelect?: ((selected: number) => void) | undefined;
    /**
     * What RadioButton is selected, zero-indexed. -1 means nothing is selected.
     */
    selected?: number | undefined;
    /**
     * Whether the RadioButtons can be seen.
     */
    visible?: boolean | undefined;
}

/**
 * A choice between multiple options.
 *
 * Every child must be a RadioButtons.Item, that requires a string child that is the label to display to the right of the RadioButton.
 */
export class RadioButtons extends React.Component<RadioButtonsProps> {
    static Item: typeof RadioButtonsItem;
}

export interface SeparatorProps extends GridChildrenProps, Label, Stretchy {
    /**
     * Whether the Separator is enabled.
     */
    enabled?: boolean | undefined;
    /**
     * Whether the line is vertical or horizontal.
     */
    vertical?: boolean | undefined;
    /**
     * Whether the Separator can be seen.
     */
    visible?: boolean | undefined;
}

/**
 * A line to separate two components, commonly used in a Box.
 */
export class Separator extends React.Component<SeparatorProps> {}

export interface SliderProps extends GridChildrenProps, Label, Stretchy {
    /**
     * Whether the Slider is enabled.
     */
    enabled?: boolean | undefined;
    /**
     * The minimum value for the slider.
     */
    min?: number | undefined;
    /**
     * The maximum value for the slider.
     */
    max?: number | undefined;
    /**
     * Called when the value of the slider is changed. The current value is passed as an argument.
     */
    onChange?: ((value: number) => void) | undefined;
    /**
     * The current value of the Slider (0-100).
     */
    value?: number | undefined;
    /**
     * Whether the Slider can be seen.
     */
    visible?: boolean | undefined;
}

/**
 * A bar that can be dragged by the user from 0-100.
 */
export class Slider extends React.Component<SliderProps> {}

export interface SpinBoxProps extends GridChildrenProps, Label, Stretchy {
    /**
     * Whether the Spinbox is enabled.
     */
    enabled?: boolean | undefined;
    /**
     * When the Spinbox value is changed. The current value is passed as a parameter.
     */
    onChange?: ((value: number) => void) | undefined;
    /**
     * What the value of the Spinbox is set to.
     */
    value?: number | undefined;
    /**
     * Whether the Spinbox can be seen.
     */
    visible?: boolean | undefined;
}

/**
 * A location for the user to choose a number.
 */
export class SpinBox extends React.Component<SpinBoxProps> {}

export interface Stretchy {
    /**
     * Whether the component should stretch to fill the available space. Defaults to true.
     *
     * Excluded on:
     * - Tabs
     * - Grid children
     * - Combobox/RadioButton Items
     * - MenuBar
     */
    stretchy?: boolean | undefined;
}

export interface StyledTextProps {
    style?: {
        /**
         * The background color, specified as a CSS color string.
         */
        backgroundColor?: string | undefined;
        /**
         * The text color, specified as a CSS color string.
         */
        color?: string | undefined;
        /**
         * The font family (only if available on the system).
         */
        fontFamily?: string | undefined;
        /**
         * The font size (in pt).
         */
        fontSize?: number | undefined;
        /**
         * Whether an italic font should be used.
         */
        fontStyle?: "normal" | "oblique" | "italic" | undefined;
        /**
         * Whether a bold font should be used (and the amount).
         */
        fontWeight?:
            | "minimum"
            | "thin"
            | "ultraLight"
            | "light"
            | "book"
            | "normal"
            | "medium"
            | "semiBold"
            | "bold"
            | "ultraBold"
            | "heavy"
            | "ultraHeavy"
            | "maximum"
            | number
            | undefined;
        /**
         * Wheter the text should be aligned to the left, center or right.
         *
         * **Works only on a top level text component, not it's children!**
         */
        textAlign?: "left" | "center" | "right" | undefined;
        /**
         * How wide or narrow the characters should be.
         */
        textStretch?:
            | "ultraCondensed"
            | "extraCondensed"
            | "condensed"
            | "semiCondensed"
            | "normal"
            | "semiExpanded"
            | "expanded"
            | "extraExpanded"
            | "ultraExpanded"
            | undefined;
        /**
         * The text underline style.
         */
        textUnderline?: "none" | "single" | "double" | "suggestion" | undefined;
        /**
         * The text underline color.
         *
         * A color string | 'spelling' | 'grammar' | 'auxiliary'
         */
        textUnderlineColor?: "spelling" | "grammar" | "auxiliary" | string | undefined;
    } | undefined;
    /**
     * The x coordinate of the text's top left corner. (Only in a top level text component.)
     */
    x?: number | string | undefined;
    /**
     * The y coordinate of the text's top left corner. (Only in a top level text component.)
     */
    y?: number | string | undefined;
}

export class StyledText extends React.Component<StyledTextProps> {}

export interface TabProps extends GridChildrenProps {
    /**
     * Whether the Tab is enabled.
     */
    enabled?: boolean | undefined;
    /**
     * Whether the Tab can be seen.
     */
    visible?: boolean | undefined;
}

/**
 * A component with different named tabs containing other components.
 *
 * Each child is required to have a label prop that is displayed at the top and names the tab.
 */
export class Tab extends React.Component<TabProps> {}

export interface TextProps extends GridChildrenProps, Label, Stretchy {
    /**
     * The text to display.
     */
    children?: string | undefined;
}

/**
 * Displays some text.
 */
export class Text extends React.Component<TextProps> {}

export interface TextInputProps extends GridChildrenProps, Label, Stretchy {
    /**
     * The default text in the TextInput.
     */
    children?: string | undefined;
    /**
     * Whether the TextInput can be used.
     */
    enabled?: boolean | undefined;
    /**
     * Whether multiple lines can be inputted into the TextInput.
     */
    multiline?: boolean | undefined;
    /**
     * Called when the TextInput text is changed. The new text is passed as an argument.
     */
    onChange?: ((text: string) => void) | undefined;
    /**
     * Whether the TextInput can be written to by the user.
     */
    readOnly?: boolean | undefined;
    /**
     * Whether characters are hidden in the TextInput. Commonly used for passwords.
     */
    secure?: boolean | undefined;
    /**
     * Whether the TextInput can be seen.
     */
    visible?: boolean | undefined;
}

/**
 * A place for the user to type in a string.
 */
export class TextInput extends React.Component<TextInputProps> {}

export interface WindowProps {
    /**
     * Whether the window will have a border on the inside.
     */
    borderless?: boolean | undefined;
    /**
     * Window can only have one child. To have more than one child, use boxes.
     */
    children?: JSX.Element | undefined;
    /**
     * Whether the window is closed. If set to closed, then the window will be closed.
     */
    closed?: boolean | undefined;
    /**
     * Whether the window will be fullscreen on start.
     */
    fullscreen?: boolean | undefined;
    /**
     * Whether the window is the last window. If set to `true`, then the program will quit once the window is closed.
     */
    lastWindow?: boolean | undefined;
    /**
     * Whether all children will have a margin around them and the outer edge of the window.
     */
    margined?: boolean | undefined;
    /**
     * Whether a menubar will be shown on the top of the window.
     */
    menuBar?: boolean | undefined;
    /**
     * Called when the window is closed.
     */
    onClose?: (() => void) | undefined;
    /**
     * Called when the window size is changed by the user. The new size is passed as an argument, in an object.
     */
    onContentSizeChange?:
        | ((size: {
            h: number;
            y: number;
        }) => void)
        | undefined;
    /**
     * How big the window is when the application is first started.
     */
    size?: {
        h: number;
        w: number;
    } | undefined;
    /**
     * The title of the window. Will be shown at the top left ribbon.
     */
    title?: string | undefined;
}

/**
 * The window is the basis where all other components reside.
 *
 * **Note:** Window can only have one child. To have more than one child, use boxes.
 */
export class Window extends React.Component<WindowProps> {}

/**
 * Renders the input component
 */
export function render(element: JSX.Element): void;

/**
 * A method to display an alert.
 * @param type What type the dialog is. The current types are:
 * - Message - a simple message
 * - Error - an error message
 * - Open - open a file
 * - Save - save a file
 * @param options Options for the title and descript.
 */
export function Dialog(
    type: "Message" | "Error",
    options?: {
        title: string;
        description?: string | undefined;
    } | {
        title?: string | undefined;
        description: string;
    },
): void;

/**
 * A dialog to save or open a file. Returns chosen file path.
 * @param type What type the dialog is. The current types are:
 * - Open - open a file
 * - Save - save a file
 */
export function Dialog(type: "Open" | "Save"): string;
