// Type definitions for @orbit-ui/react-components 11.1
// Project: https://github.com/gsoft-inc/sg-orbit
// Definitions by: Alexandre Asselin <https://github.com/alexasselin008>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8
import type {
    Component,
    ReactElement,
    MouseEvent,
    ComponentType,
    FormEvent,
    ReactNode,
    SyntheticEvent,
    ChangeEvent,
    CSSProperties,
    KeyboardEvent,
} from 'react';
import type {
    ButtonContent,
    ButtonGroup,
    ButtonOr,
    LabelDetail,
    LabelGroup,
    MessageContent,
    MessageHeader,
    MessageItem,
    MessageList,
    StrictButtonProps as SemanticButtonProps,
    StrictCheckboxProps as SemanticCheckboxProps,
    Dropdown as SemanticDropdown,
    StrictDropdownItemProps as SemanticDropdownItemProps,
    StrictDropdownProps as SemanticDropdownProps,
    StrictInputProps as SemanticInputProps,
    StrictLabelProps as SemanticLabelProps,
    StrictMessageProps as SemanticMessageProps,
    Popup as SemanticPopup,
    StrictPopupProps as SemanticPopupProps,
    StrictRadioProps as SemanticRadioProps,
    TextAreaProps as SemanticTextAreaProps,
    StrictMenuProps,
    StrictTabProps
} from 'semantic-ui-react';
import type { Moment } from 'moment';

export interface MenuProps extends StrictMenuProps {
    [key: string]: any;
}

export const Tab: ComponentType<MenuProps>;

export interface TabProps extends StrictTabProps {
    [key: string]: any;
}

export const Menu: ComponentType<MenuProps>;

export type UnsupportedButtonProps = 'animated' | 'attached' | 'color' | 'labelPosition' | 'floated' | 'inverted';
export type ButtonPropsToOverwrite = 'onClick';

export interface StrictButtonProps extends Omit<SemanticButtonProps, UnsupportedButtonProps | ButtonPropsToOverwrite> {
    /**
     * A ghost button doesn't have a background color until it's hovered.
     */
    ghost?: boolean;
    /**
     * A button can look like a link.
     */
    link?: boolean;
    /**
     * A button can contain an icon.
     */
    icon?: ReactElement;
    /**
     * An icon can appear on the left or right.
     */
    iconPosition?: 'left' | 'right';
    /**
     * A button can contain a label.
     */
    label?: ReactElement | object;
    /**
     * A button can contain a tag.
     */
    tag?: ReactElement | object;
    /**
     * A button can be colorless. Use this variant if you need to customize the button.
     */
    naked?: boolean;
    /**
     * An input can vary in sizes.
     */
    size?: 'tiny' | 'small' | 'medium' | 'large';
    /**
     * The HTML button type.
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * @ignore
     */
    loading?: boolean;
    /**
     * @ignore
     */
    disabled?: boolean;
    /**
     * @ignore
     */
    className?: string;

    onClick?: (event: MouseEvent<HTMLButtonElement>, data: ButtonProps) => void;
}

export interface ButtonProps extends StrictButtonProps {
    [key: string]: any;
}

export class Button extends Component<ButtonProps> {
    static Content: typeof ButtonContent;
    static Group: typeof ButtonGroup;
    static Or: typeof ButtonOr;

    focus: () => void;
}

export type UnsupportedCheckboxProps = 'as' | 'slider' | 'type' | 'radio' | 'toggle';
export type CheckboxPropsToOverwrite = 'onChange' | 'onClick' | 'onMouseDown' | 'onMouseUp';

export interface StrictCheckboxProps
    extends Omit<SemanticCheckboxProps, UnsupportedCheckboxProps | CheckboxPropsToOverwrite> {
    /**
     * Whether or not the checkbox should autofocus on render.
     */
    autofocus?: boolean;
    /**
     * Delay before trying to autofocus.
     */
    autofocusDelay?: number;
    /**
     * The text associated to the checkbox.
     */
    text?: string;
    /**
     * A checkbox can display icons.
     */
    icons?: ReactElement | ReactElement[];
    /**
     * A label displayed after the checkbox text.
     */
    label?: ReactElement | object;
    /**
     * A count displayed after the checkbox text.
     */
    count?: ReactElement | object;
    /**
     * An input can vary in sizes.
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * @ignore
     */
    disabled?: boolean;
    /**
     * @ignore
     */
    className?: string;

    /**
     * Called when the user attempts to change the checked state.
     */
    onChange?: (event: FormEvent<HTMLInputElement>, data: CheckboxProps) => void;

    /**
     * Called when the checkbox or label is clicked.
     */
    onClick?: (event: MouseEvent<HTMLInputElement>, data: CheckboxProps) => void;

    /**
     * Called when the user presses down on the mouse.
     */
    onMouseDown?: (event: MouseEvent<HTMLInputElement>, data: CheckboxProps) => void;

    /**
     * Called when the user releases the mouse.
     */
    onMouseUp?: (event: MouseEvent<HTMLInputElement>, data: CheckboxProps) => void;
}

export interface CheckboxProps extends StrictCheckboxProps {
    [key: string]: any;
}

export const Checkbox: ComponentType<CheckboxProps>;

export type UnsupportedToggleProps = 'as' | 'defaultIndeterminate' | 'indeterminate' | 'slider' | 'radio' | 'type';

export type ToggleProps = Omit<CheckboxProps, UnsupportedToggleProps>;

export const Toggle: ComponentType<ToggleProps>;

export interface CountProps {
    /**
     * Delay before trying to autofocus.
     */
    className?: string;
}

export const Count: ComponentType<CountProps>;

export interface DatePreset {
    startDate: Moment;
    endDate: Moment;
    text?: string;
}

export function preset(text: string, startDate: Moment, endDate: Moment): DatePreset;

export const DEFAULT_DATES_PRESETS: [DatePreset];
export const LAST_12_MONTHS_PRESET: DatePreset;
export const LAST_3_MONTHS_PRESET: DatePreset;
export const LAST_6_MONTHS_PRESET: DatePreset;
export const LAST_MONTH_PRESET: DatePreset;
export const LAST_WEEK_PRESET: DatePreset;

export interface DateRangePickerProps {
    /**
     * A controlled start date value.
     */
    startDate?: Moment | null;

    /**
     * A controlled end date value.
     */
    endDate?: Moment | null;

    /**
     * The initial value of start date.
     */
    defaultStartDate?: Moment;

    /**
     * The initial value of end date.
     */
    defaultEndDate?: Moment;

    /**
     * Called when the date(s) are / is applied.
     */
    onDatesChange: (
        event: SyntheticEvent,
        startDate: Moment,
        endDate: Moment,
        presetName: string,
        props: DateRangePickerProps,
    ) => void;

    /**
     * Called when the calendar open / close.
     */
    onVisibilityChange?: (event: SyntheticEvent, isVisible: boolean, props: DateRangePickerProps) => void;

    /**
     * Whether or not the calendar enforce the selection of of a range of dates.
     */
    allowSingleDateSelection?: boolean;
    /**
     * Whether or not the calendar selected date(s) can be cleared.
     */
    allowClear?: boolean;

    /**
     * The minimum (inclusive) date available for selection.
     */
    minDate?: Moment;

    /**
     * The maximum (inclusive) date available for selection.
     */
    maxDate?: Moment;

    /**
     * An initial visible month displayed when the calendar open.
     */
    initialVisibleMonth?: Moment | (() => Moment);

    /**
     * The number of months displayed simultaneously in the calendar.
     */
    numberOfMonths?: number;

    /**
     * A React component that display the currently applied date(s) and open the calendar.
     */
    input?: ReactNode;

    /**
     * The placeholder text.
     */
    placeholder?: string;

    /**
     * A format to display the currently applied date(s).
     */
    rangeFormat?: string;

    /**
     * A format to display a date.
     */
    dateFormat?: string;

    /**
     * Whether or not the calendar will open upward.
     */
    upward?: boolean;

    /**
     * A calendar can open to the left or to the right.
     */
    direction: 'left' | 'right';

    /**
     * An array containing an horizontal and vertical offsets for the calendar position.
     * Ex: `["10px", "-10px"]`
     */
    offsets?: string[];

    /**
     * z-index of the calendar.
     */
    zIndex?: string;

    /**
     *
     * A React component to select a date.
     */
    calendar?: ReactNode;

    /**
     * A React component to list and select a preset.
     */
    presetsComponent?: ReactNode;

    /**
     * Array of pre-determined dates range displayed to the left of the calendar.
     */
    presets?: DatePreset[];

    /**
     * A React component displayed under the calendar to `clear` and `apply` the date(s).
     */
    buttons?: ReactNode;

    /**
     * A controlled open value that determined whether or not the calendar is displayed.
     */
    open?: boolean;

    /**
     * The initial value of open.
     */
    defaultOpen?: boolean;

    /**
     * A disabled date picker does not allow user interaction.
     */
    disabled?: boolean;
    /**
     * Whether or not the date picker take up the width of its container.
     */
    fluid?: boolean;

    /**
     * Whether or not the calendar should close when the date picker loose focus.
     */
    closeOnBlur?: boolean;

    /**
     * Whether or not the calendar should close when a click happens outside the date picker.
     * Requires `closeOnBlur` to be false.
     */
    closeOnOutsideClick?: boolean;

    /**
     * A date picker can vary in sizes.
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * Additional classes.
     */
    className?: string;
    /**
     * Custom inline style.
     */
    style?: CSSProperties;
}

export const DateRangePicker: ComponentType<DateRangePickerProps>;

export type DropdownPropsToOverwrite =
    | 'onAddItem'
    | 'onBlur'
    | 'onChange'
    | 'onClick'
    | 'onClose'
    | 'onFocus'
    | 'onMouseDown'
    | 'onOpen'
    | 'options';

export interface StrictDropdownProps extends Omit<SemanticDropdownProps, DropdownPropsToOverwrite> {
    /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
    options?: DropdownItemProps[];

    /**
     * A dropdown menu can display an icon before it's content.
     */
    icon?: ReactElement;
    /**
     * A dropdown menu can vary in sizes.
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Whether or not the dropdown menu should autofocus on render.
     */
    autofocus?: boolean;
    /**
     * Delay before trying to autofocus.
     */
    autofocusDelay?: number;

    /**
     * Called when a user adds a new item. Use this to update the options list.
     */
    onAddItem?: (event: KeyboardEvent<HTMLElement>, data: DropdownProps) => void;

    /**
     * Called on blur.
     */
    onBlur?: (event: KeyboardEvent<HTMLElement>, data: DropdownProps) => void;

    /**
     * Called when the user attempts to change the value.
     */
    onChange?: (event: SyntheticEvent<HTMLElement>, data: DropdownProps) => void;

    /**
     * Called on click.
     */
    onClick?: (event: KeyboardEvent<HTMLElement>, data: DropdownProps) => void;

    /**
     * Called when a close event happens.
     */
    onClose?: (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => void;

    /**
     * Called on focus.
     */
    onFocus?: (event: SyntheticEvent<HTMLElement>, data: DropdownProps) => void;

    /**
     * Called on mousedown.
     */
    onMouseDown?: (event: MouseEvent<HTMLElement>, data: DropdownProps) => void;

    /**
     * Called when an open event happens.
     */
    onOpen?: (event: SyntheticEvent<HTMLElement>, data: DropdownProps) => void;
}

export interface DropdownProps extends StrictDropdownProps {
    [key: string]: any;
}

export type DropdownItemPropsToOverwrite = 'onClick';

export interface StrictDropdownItemProps extends Omit<SemanticDropdownItemProps, DropdownItemPropsToOverwrite> {
    tooltip?: string;
    tooltipPosition?: string;
    icon?: ReactElement;
    onClick?: (event: MouseEvent<HTMLDivElement>, data: DropdownItemProps) => void;
}

export interface DropdownItemProps extends StrictDropdownItemProps {
    [key: string]: any;
}

export const DropdownItem: ComponentType<DropdownItemProps>;

export class Dropdown extends Component<DropdownProps> {
    static Divider: typeof SemanticDropdown.Divider;
    static Header: typeof SemanticDropdown.Header;
    static Item: typeof DropdownItem;
    static Menu: typeof SemanticDropdown.Menu;
    static SearchInput: typeof SemanticDropdown.SearchInput;
}

export interface IconProps {
    className?: string;
    /**
     * An icon can vary in size.
     */
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
}

export interface MultiVariantIconProps {
    className?: string;
    /**
     * An icon can vary in size.
     */
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
}

// tslint:disable-next-line no-unnecessary-class
export class Icon {
    static create(type: ComponentType): ComponentType<IconProps>;
}

// tslint:disable-next-line no-unnecessary-class
export class MultiVariantIcon {
    static create(type24: ComponentType, type32: ComponentType): ComponentType<MultiVariantIconProps>;
}

export const AddIcon24: ComponentType<IconProps>;
export const AddIcon32: ComponentType<IconProps>;
export const ArrowIcon24: ComponentType<IconProps>;
export const ArrowIcon32: ComponentType<IconProps>;
export const CalendarIcon24: ComponentType<IconProps>;
export const CalendarIcon32: ComponentType<IconProps>;
export const CarretIcon24: ComponentType<IconProps>;
export const CarretIcon32: ComponentType<IconProps>;
export const CheckCircleIcon24: ComponentType<IconProps>;
export const CheckCircleIcon32: ComponentType<IconProps>;
export const CheckIcon24: ComponentType<IconProps>;
export const CheckIcon32: ComponentType<IconProps>;
export const ChevronIcon24: ComponentType<IconProps>;
export const ChevronIcon32: ComponentType<IconProps>;
export const CircleIcon24: ComponentType<IconProps>;
export const CircleIcon32: ComponentType<IconProps>;
export const ClearFilterIcon24: ComponentType<IconProps>;
export const ClearFilterIcon32: ComponentType<IconProps>;
export const CrossIcon24: ComponentType<IconProps>;
export const CrossIcon32: ComponentType<IconProps>;
export const CsvIcon24: ComponentType<IconProps>;
export const CsvIcon32: ComponentType<IconProps>;
export const DashIcon24: ComponentType<IconProps>;
export const DashIcon32: ComponentType<IconProps>;
export const DoNotDisturbIcon32: ComponentType<IconProps>;
export const DownloadIcon24: ComponentType<IconProps>;
export const DownloadIcon32: ComponentType<IconProps>;
export const EmailIcon24: ComponentType<IconProps>;
export const EmailIcon32: ComponentType<IconProps>;
export const EmailReminderIcon24: ComponentType<IconProps>;
export const EmailReminderIcon32: ComponentType<IconProps>;
export const EditIcon24: ComponentType<IconProps>;
export const EditIcon32: ComponentType<IconProps>;
export const FileIcon24: ComponentType<IconProps>;
export const FileIcon32: ComponentType<IconProps>;
export const FilterIcon24: ComponentType<IconProps>;
export const FilterIcon32: ComponentType<IconProps>;
export const FlagIcon24: ComponentType<IconProps>;
export const FlagIcon32: ComponentType<IconProps>;
export const FolderIcon24: ComponentType<IconProps>;
export const FolderIcon32: ComponentType<IconProps>;
export const GearIcon24: ComponentType<IconProps>;
export const GearIcon32: ComponentType<IconProps>;
export const GroupIcon24: ComponentType<IconProps>;
export const GroupIcon32: ComponentType<IconProps>;
export const GuestAddIcon24: ComponentType<IconProps>;
export const GuestAddIcon32: ComponentType<IconProps>;
export const GuestRemoveIcon24: ComponentType<IconProps>;
export const GuestRemoveIcon32: ComponentType<IconProps>;
export const HelpIcon24: ComponentType<IconProps>;
export const HelpIcon32: ComponentType<IconProps>;
export const HorizontalDotsIcon24: ComponentType<IconProps>;
export const HorizontalDotsIcon32: ComponentType<IconProps>;
export const ImageIcon24: ComponentType<IconProps>;
export const ImageIcon32: ComponentType<IconProps>;
export const InfoIcon24: ComponentType<IconProps>;
export const InfoIcon32: ComponentType<IconProps>;
export const LightbulbIcon24: ComponentType<IconProps>;
export const LightbulbIcon32: ComponentType<IconProps>;
export const MagnifierIcon24: ComponentType<IconProps>;
export const MagnifierIcon32: ComponentType<IconProps>;
export const MusicIcon24: ComponentType<IconProps>;
export const MusicIcon32: ComponentType<IconProps>;
export const NotificationIcon24: ComponentType<IconProps>;
export const NotificationIcon32: ComponentType<IconProps>;
export const NotificationOffIcon24: ComponentType<IconProps>;
export const NotificationOffIcon32: ComponentType<IconProps>;
export const PdfIcon24: ComponentType<IconProps>;
export const PdfIcon32: ComponentType<IconProps>;
export const PrinterIcon24: ComponentType<IconProps>;
export const PrinterIcon32: ComponentType<IconProps>;
export const PrivacyIcon24: ComponentType<IconProps>;
export const PrivacyIcon32: ComponentType<IconProps>;
export const SignoutIcon24: ComponentType<IconProps>;
export const SignoutIcon32: ComponentType<IconProps>;
export const SlashIcon24: ComponentType<IconProps>;
export const SlashIcon32: ComponentType<IconProps>;
export const SortIcon24: ComponentType<IconProps>;
export const SortIcon32: ComponentType<IconProps>;
export const TrashIcon24: ComponentType<IconProps>;
export const TrashIcon32: ComponentType<IconProps>;
export const UserAddIcon24: ComponentType<IconProps>;
export const UserAddIcon32: ComponentType<IconProps>;
export const UserRemoveIcon24: ComponentType<IconProps>;
export const UserRemoveIcon32: ComponentType<IconProps>;
export const VerticalDotsIcon24: ComponentType<IconProps>;
export const VerticalDotsIcon32: ComponentType<IconProps>;
export const VideoIcon24: ComponentType<IconProps>;
export const VideoIcon32: ComponentType<IconProps>;
export const WarningIcon24: ComponentType<IconProps>;
export const WarningIcon32: ComponentType<IconProps>;
export const ZipIcon24: ComponentType<IconProps>;
export const ZipIcon32: ComponentType<IconProps>;

export const AddIcon: ComponentType<MultiVariantIconProps>;
export const ArrowIcon: ComponentType<MultiVariantIconProps>;
export const ChevronIcon: ComponentType<MultiVariantIconProps>;
export const CalendarIcon: ComponentType<MultiVariantIconProps>;
export const CarretIcon: ComponentType<MultiVariantIconProps>;
export const CheckCircleIcon: ComponentType<MultiVariantIconProps>;
export const CheckIcon: ComponentType<MultiVariantIconProps>;
export const CircleIcon: ComponentType<MultiVariantIconProps>;
export const ClearFilterIcon: ComponentType<MultiVariantIconProps>;
export const CrossIcon: ComponentType<MultiVariantIconProps>;
export const CsvIcon: ComponentType<MultiVariantIconProps>;
export const DashIcon: ComponentType<MultiVariantIconProps>;
export const DoNotDisturbIcon: ComponentType<MultiVariantIconProps>;
export const DownloadIcon: ComponentType<MultiVariantIconProps>;
export const EditIcon: ComponentType<MultiVariantIconProps>;
export const EmailIcon: ComponentType<MultiVariantIconProps>;
export const EmailReminderIcon: ComponentType<MultiVariantIconProps>;
export const FileIcon: ComponentType<MultiVariantIconProps>;
export const FilterIcon: ComponentType<MultiVariantIconProps>;
export const FlagIcon: ComponentType<MultiVariantIconProps>;
export const FolderIcon: ComponentType<MultiVariantIconProps>;
export const GearIcon: ComponentType<MultiVariantIconProps>;
export const GroupIcon: ComponentType<MultiVariantIconProps>;
export const GuestAddIcon: ComponentType<MultiVariantIconProps>;
export const GuestRemoveIcon: ComponentType<MultiVariantIconProps>;
export const HelpIcon: ComponentType<MultiVariantIconProps>;
export const HorizontalDotsIcon: ComponentType<MultiVariantIconProps>;
export const ImageIcon: ComponentType<MultiVariantIconProps>;
export const InfoIcon: ComponentType<MultiVariantIconProps>;
export const LightbulbIcon: ComponentType<MultiVariantIconProps>;
export const MagnifierIcon: ComponentType<MultiVariantIconProps>;
export const MusicIcon: ComponentType<MultiVariantIconProps>;
export const NotificationIcon: ComponentType<MultiVariantIconProps>;
export const NotificationOffIcon: ComponentType<MultiVariantIconProps>;
export const PdfIcon: ComponentType<MultiVariantIconProps>;
export const PrinterIcon: ComponentType<MultiVariantIconProps>;
export const PrivacyIcon: ComponentType<MultiVariantIconProps>;
export const SlashIcon: ComponentType<MultiVariantIconProps>;
export const SortIcon: ComponentType<MultiVariantIconProps>;
export const SignoutIcon: ComponentType<MultiVariantIconProps>;
export const TrashIcon: ComponentType<MultiVariantIconProps>;
export const UserAddIcon: ComponentType<MultiVariantIconProps>;
export const UserRemoveIcon: ComponentType<MultiVariantIconProps>;
export const VerticalDotsIcon: ComponentType<MultiVariantIconProps>;
export const VideoIcon: ComponentType<MultiVariantIconProps>;
export const WarningIcon: ComponentType<MultiVariantIconProps>;
export const ZipIcon: ComponentType<MultiVariantIconProps>;

export type UnsupportedLabelProps = 'tag';
export type LabelPropsToOverwrite = 'onClick' | 'onRemove';

export interface StrictLabelProps extends Omit<SemanticLabelProps, UnsupportedLabelProps | LabelPropsToOverwrite> {
    /**
     * A label can be colorless. Use this variant if you need to customize the label.
     */
    naked?: boolean;
    /**
     * A label can contain a button.
     */
    button?: ReactElement | object;
    /**
     * A label can contain an icon.
     */
    icon?: ReactElement;
    /**
     * An icon can appear on the left or right.
     */
    iconPosition?: 'left' | 'right';
    /**
     * A label can contain a tag.
     */
    tag?: ReactElement | object;
    /**
     * Whether to add emphasis on the label text or not.
     */
    highlight?: boolean;
    /**
     * @ignore
     */
    className?: string;

    /**
     * Called on click.
     */
    onClick?: (event: React.MouseEvent<HTMLElement>, data: LabelProps) => void;

    /**
     * Adds an "x" icon, called when "x" is clicked.
     */
    onRemove?: (event: React.MouseEvent<HTMLElement>, data: LabelProps) => void;
}

export interface LabelProps extends StrictLabelProps {
    [key: string]: any;
}

export class Label extends Component<LabelProps> {
    Detail: typeof LabelDetail;
    Group: typeof LabelGroup;
}

export class Tag extends Component<LabelProps> {
    Detail: typeof LabelDetail;
    Group: typeof LabelGroup;
}

export type StrictMessageProps = SemanticMessageProps;

export interface MessageProps extends StrictMessageProps {
    [key: string]: any;
}

export class Message extends Component<MessageProps> {
    static Content: typeof MessageContent;
    static Header: typeof MessageHeader;
    static List: typeof MessageList;
    static Item: typeof MessageItem;
}

export type UnsupportedNumberInputProps =
    | 'action'
    | 'actionPosition'
    | 'inverted'
    | 'button'
    | 'iconsPosition'
    | 'type'
    | 'size';
export type NumberInputPropsToOverwrite = 'onChange';

export interface StrictNumberInputProps
    extends Omit<SemanticInputProps, UnsupportedNumberInputProps | NumberInputPropsToOverwrite> {
    /**
     * Whether or not the input should autofocus on render.
     */
    autofocus?: boolean;
    /**
     * Delay before trying to autofocus.
     */
    autofocusDelay?: number;
    /**
     * A React component displayed before or after the prompt based on "iconPosition".
     */
    icon?: ReactElement;
    /**
     * An input can vary in sizes.
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * @ignore
     */
    className?: string;
    /**
     * @ignore
     */
    disabled?: boolean;
    /**
     * The value of the input.
     */
    value?: number;
    /**
     * The default value of the input.
     */
    defaultValue?: number;
    /**
     * The minimum value of the input.
     */
    min?: number;
    /**
     * The maximum value of the input.
     */
    max?: number;
    /**
     * The increment step of the input value.
     */
    step?: number;

    /**
     * Called on change.
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, data: NumericInputOnChangeData) => void;
}

export interface NumberInputProps extends StrictNumberInputProps {
    [key: string]: any;
}

export interface NumericInputOnChangeData extends NumberInputProps {
    value?: number;
}

export const NumberInput: ComponentType<NumberInputProps>;

export type PopperPlacement =
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end';

export interface PopperOptions {
    placement: PopperPlacement;
    modifiers: any[];
    strategy: 'fixed' | 'absolute';
    onFirstUpdate?: (arg0: any) => void;
}

export interface PopperProps {
    /**
     * A controlled show value that determined whether or not the popper is displayed.
     */
    show?: boolean;
    /**
     * Position of the popper element.
     */
    position?: PopperPlacement;
    /**
     * When true, disables automatic repositioning of the component, it will always be placed according to the position value.
     */
    pinned?: boolean;
    /**
     * Whether or not to render the popper element in an additional element that will handles [Popper.js](https://popper.js.org) references, attributes and styles.
     */
    noWrap?: boolean;
    /**
     * Allow to displace the popper element from its trigger element.
     * Ex: `[10, -10]`
     */
    offset?: number[];
    /**
     * An array of modifiers passed directly to [Popper.js](https://popper.js.org) modifiers. For more info, view [Popper.js modifiers documentation](https://popper.js.org/docs/v2/modifiers).
     */
    popperModifiers?: any[];
    /**
     * A set of options passed directly to [Popper.js](https://popper.js.org). For more info, view [Popper.js options documentation](https://popper.js.org/docs/v2/constructors/#options).
     */
    popperOptions?: PopperOptions;
    /**
     * A DOM element in which the popper element will appended via a React portal.
     */
    portalContainerElement?: HTMLElement;
    /**
     * Whether or not to render the popper element with React portal. The popper element will be rendered within it's parent DOM hierarchy.
     */
    noPortal?: boolean;
    /**
     * Whether or not to animate the popper element when opening / closing.
     */
    animate?: boolean;

    children: ReactNode;
}

export interface AutoControlledPopperProps extends PopperProps {
    /**
     * The initial value of show.
     */
    defaultShow?: boolean;
    /**
     * The popper trigger.
     */
    trigger: ReactNode;
    /**
     * The [event handler](https://reactjs.org/docs/events.html) that toggle the popper visibility.
     * Ex. "onClick"
     */
    toggleHandler: string;
    /**
     * Called when the popup open / close.
     */
    onVisibilityChange?: (event: SyntheticEvent, isVisible: boolean) => void;
    /**
     * Whether or not the trigger will be rendered as fluid.
     */
    fluid?: boolean;
    /**
     * z-index of the popper element.
     */
    zIndex?: number;
    /**
     * Whether or not to focus the trigger when the popper is made visible. When `true`, the trigger must expose a `focus` function in order to work.
     */
    focusTriggerOnShow?: boolean;
    /**
     * Whether or not to focus the trigger on escape keydown. When `true`, the trigger must expose a `focus` function in order to work.
     */
    focusTriggerOnEscape?: boolean;
    /**
     * Whether or not to focus the first element of the popper when the popper is shown.
     */
    focusFirstElementOnShow?: boolean;
    /**
     * Whether or not to focus the first element of the popper when the popper is shown on keydown.
     */
    focusFirstElementOnKeyboardShow?: boolean;
    /**
     * Additional [keys](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) to show the popper on keydown.
     * Ex. `[13]` for Enter
     */
    showOnKeys?: number[];
    /**
     * Whether or not to toggle the popper on spacebar keydown.
     */
    toggleOnSpacebar?: boolean;
    /**
     * Whether or not to toggle the popper on enter keydown.
     */
    toggleOnEnter?: boolean;
    /**
     * Whether or not the popper should hide on escape keydown.
     */
    hideOnEscape?: boolean;
    /**
     * Whether or not the popper should hide when it loose focus.
     */
    hideOnBlur?: boolean;
    /**
     * Whether or not the popper should hide when a click happens outside.
     */
    hideOnOutsideClick?: boolean;
    /**
     * [Shorthand](/?path=/docs/getting-started-shorthand-props--page) for the popper.
     */
    popper?: ReactElement | object;
}

export interface ButtonPopperProps extends Omit<AutoControlledPopperProps, 'trigger' | 'toggleHandler'> {
    button: ReactNode;
}

export interface TextInputPopperProps extends Omit<AutoControlledPopperProps, 'trigger' | 'toggleHandler'> {
    input: ReactNode;
}

export const Popper: ComponentType<PopperProps>;
export const AutoControlledPopper: ComponentType<AutoControlledPopperProps>;
export const ButtonPopper: ComponentType<ButtonPopperProps>;
export const TextInputPopper: ComponentType<TextInputPopperProps>;

export type UnsupportedRadioProps = 'as' | 'defaultIndeterminate' | 'indeterminate' | 'slider' | 'toggle' | 'type';
export type RadioPropsToOverwrite = 'onChange' | 'onClick' | 'onMouseDown' | 'onMouseUp';

export interface StrictRadioProps extends Omit<SemanticRadioProps, UnsupportedRadioProps | RadioPropsToOverwrite> {
    /**
     * Whether or not the radio should autofocus on render.
     */
    autofocus?: boolean;
    /**
     * Delay before trying to autofocus.
     */
    autofocusDelay?: number;
    /**
     * The text associated to the radio.
     */
    text?: string;
    /**
     * A checkbox can display icons.
     */
    icons?: ReactElement | ReactElement[];
    /**
     * A label displayed after the radio text.
     */
    label?: ReactElement | object;
    /**
     * An input can vary in sizes.
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * @ignore
     */
    disabled?: boolean;
    /**
     * @ignore
     */
    className?: string;

    /**
     * Called when the user attempts to change the checked state.
     */
    onChange?: (event: FormEvent<HTMLInputElement>, data: RadioProps) => void;

    /**
     * Called when the checkbox or label is clicked.
     */
    onClick?: (event: MouseEvent<HTMLInputElement>, data: RadioProps) => void;

    /**
     * Called when the user presses down on the mouse.
     */
    onMouseDown?: (event: MouseEvent<HTMLInputElement>, data: RadioProps) => void;

    /**
     * Called when the user releases the mouse.
     */
    onMouseUp?: (event: MouseEvent<HTMLInputElement>, data: RadioProps) => void;
}

export interface RadioProps extends StrictRadioProps {
    [key: string]: any;
}

export const Radio: ComponentType<RadioProps>;

export interface ResultShape {
    id: string;
    text: string;
}

export interface RemoteSearchInputProps<T> {
    /**
     * A controlled value property.
     */
    value?: string;
    /**
     * Initial value.
     */
    defaultValue?: string;
    /**
     * Called when the value change.
     */
    onValueChange: (event: SyntheticEvent, value: T, props: RemoteSearchInputProps<T>) => void;
    /**
     * Called when a fetch event happens.
     */
    onFetchResults: (event: SyntheticEvent, query: string, props: RemoteSearchInputProps<T>) => Promise<any>;
    /**
     * Called after a fetch.
     */
    onResults?: (results: { content: T[] }, query: string, props: RemoteSearchInputProps<T>) => ResultShape[];
    /**
     * Called when a clear event happens.
     */
    onClear?: (event: SyntheticEvent, props: RemoteSearchInputProps<T>) => void;
    /**
     * Called on blur.
     */
    onBlur?: (event: SyntheticEvent, props: RemoteSearchInputProps<T>) => void;
    /**
     * Called when a click happens outside the search input.
     */
    onOutsideClick?: (event: SyntheticEvent, props: RemoteSearchInputProps<T>) => void;
    /**
     * Called on keydown.
     */
    onKeyDown?: (event: SyntheticEvent, props: RemoteSearchInputProps<T>) => void;
    /**
     * Called when the search results open / close.
     */
    onVisibilityChange?: (event: SyntheticEvent, isVisible: boolean, props: RemoteSearchInputProps<T>) => void;
    /**
     * Render a result.
     */
    resultRenderer?: (result: T & ResultShape, props: RemoteSearchInputProps<T>) => ReactElement;
    /**
     * Whether or not the query should be cleared when a result is selected.
     */
    clearOnSelect?: boolean;
    /**
     * Message to display when there are no results matching the query.
     */
    noResultsMessage?: string;
    /**
     * Delay before initiating a search when the query change.
     */
    debounceDelay?: number;
    /**
     * Delay before displaying the loading indicator.
     */
    loadingDelay?: number;
    /**
     * Minimum characters to query for results.
     */
    minCharacters?: number;
    /**
     * The search input placeholder text.
     */
    placeholder?: string;
    /**
     * A controlled open value that determined whether or not the search results are displayed.
     */
    open?: boolean;
    /**
     * The initial value of open.
     */
    defaultOpen?: boolean;
    /**
     * A disabled search input does not allow user interaction.
     */
    disabled?: boolean;
    /**
     * Whether or not the search input should focus on render.
     */
    autofocus?: boolean;
    /**
     * Delay before trying to autofocus.
     */
    autofocusDelay?: number;
    /**
     * Whether or not the search results should close when the search input loose focus.
     */
    closeOnBlur?: boolean;
    /**
     * Whether or not the search results should close when a click happens outside the search input.
     * Requires `closeOnBlur` to be `false`.
     */
    closeOnOutsideClick?: boolean;
    /**
     * A remote search input can take the width of its container.
     */
    fluid?: boolean;
    /**
     * Additional classes.
     */
    className?: string;
}

export interface SearchInputProps<T> {
    /**
     * Array of results.
     */
    results: ResultShape[];
    /**
     * A controlled value property.
     */
    value?: string;
    /**
     * Initial value.
     */
    defaultValue?: string;
    /**
     *  Called when the value change.
     */
    onValueChange: (event: SyntheticEvent, value: T & ResultShape, props: SearchInputProps<T>) => void;
    /**
     * Called when the search results open / close.
     */
    onVisibilityChange?: (event: SyntheticEvent, isVisible: boolean, props: SearchInputProps<T>) => void;
    /**
     * Called when a search event happens.
     */
    onSearch?: (
        event: SyntheticEvent,
        results: ResultShape[],
        query: string,
        props: SearchInputProps<T>,
    ) => ResultShape[];
    /**
     * Called when a clear event happens.
     */
    onClear?: (event: SyntheticEvent, props: SearchInputProps<T>) => void;
    /**
     * Called on blur.
     */
    onBlur?: (event: SyntheticEvent, props: SearchInputProps<T>) => void;
    /**
     * Called when a click happens outside the search input.
     */
    onOutsideClick?: (event: SyntheticEvent, props: SearchInputProps<T>) => void;
    /**
     * Render a result.
     */
    resultRenderer?: (result: ResultShape, props: SearchInputProps<T>) => ReactElement;
    /**
     * Whether or not the query should be cleared when a result is selected.
     */
    clearOnSelect?: boolean;
    /**
     * Message to display when there are no results matching the query.
     */
    noResultsMessage?: string;
    /**
     * Delay before initiating a search when the query change.
     */
    debounceDelay?: number;
    /**
     * Minimum characters to query for results.
     */
    minCharacters?: number;
    /**
     * The search input placeholder text.
     */
    placeholder?: string;
    /**
     * A controlled open value that determined whether or not the search results are displayed.
     */
    open?: boolean;
    /**
     * The initial value of open.
     */
    defaultOpen?: boolean;
    /**
     * A disabled search input does not allow user interaction.
     */
    disabled?: boolean;
    /**
     * Whether or not the search input should focus on render.
     */
    autofocus?: boolean;
    /**
     * Delay before trying to autofocus.
     */
    autofocusDelay?: number;
    /**
     * Whether or not the search results should close when the search input loose focus.
     */
    closeOnBlur?: boolean;
    /**
     * Whether or not the search results should close when a click happens outside the search input.
     * Requires `closeOnBlur` to be `false`.
     */
    closeOnOutsideClick?: boolean;
    /**
     * Additional classes.
     */
    className?: string;
}

export interface SearchInputControllerProps {
    open?: boolean;
    results: ResultShape[];
    value?: string;
    defaultValue?: string;
    onValueChange: (event: SyntheticEvent, value: string, props: SearchInputControllerProps) => void;
    onSearch: (
        event: SyntheticEvent,
        results: ResultShape[],
        query: string,
        props: SearchInputControllerProps,
    ) => ResultShape[];
    onClear?: (event: SyntheticEvent, props: SearchInputControllerProps) => void;
    onFocus?: (event: SyntheticEvent, props: SearchInputControllerProps) => void;
    onBlur?: (event: SyntheticEvent, props: SearchInputControllerProps) => void;
    onKeyDown?: (event: SyntheticEvent, props: SearchInputControllerProps) => void;
    onOutsideClick?: (event: SyntheticEvent, props: SearchInputControllerProps) => void;
    resultRenderer?: (result: ResultShape, props: SearchInputControllerProps) => ReactElement;
    clearOnSelect?: boolean;
    noResultsMessage?: string;
    minCharacters?: number;
    placeholder?: string;
    debounceDelay?: number;
    loading?: boolean;
    clearIcon?: ReactNode;
    disabled?: boolean;
    autofocus?: boolean;
    autofocusDelay?: number;
    className?: string;
}

export class SearchInput<T> extends Component<SearchInputProps<T>> { }

export class RemoteSearchInput<T> extends Component<RemoteSearchInputProps<T>> { }

export const SearchInputController: ComponentType<SearchInputControllerProps>;

export function searchInputResult<T>(id: string, text: string, obj?: T): T & ResultShape;

export type UnsupportedSelectProps =
    | 'basic'
    | 'button'
    | 'compact'
    | 'additionLabel'
    | 'additionPosition'
    | 'allowAdditions'
    | 'direction'
    | 'floating'
    | 'header'
    | 'item'
    | 'labeled'
    | 'openOnFocus'
    | 'pointing'
    | 'selection'
    | 'selectOnBlur'
    | 'selectOnNavigation'
    | 'simple';
export type SelectPropsToOverwrite =
    | 'options'
    | 'onAddItem'
    | 'onBlur'
    | 'onChange'
    | 'onClick'
    | 'onClose'
    | 'onFocus'
    | 'onMouseDown'
    | 'onOpen';

export type SelectItemProps = DropdownItemProps;

export interface StrictSelectProps extends Omit<StrictDropdownProps, UnsupportedSelectProps | SelectPropsToOverwrite> {
    /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
    options?: SelectItemProps[];
    /**
     * @ignore
     */
    inline?: boolean;
    /**
     * @ignore
     */
    multiple?: boolean;

    /**
     * Called when a user adds a new item. Use this to update the options list.
     */
    onAddItem?: (event: React.KeyboardEvent<HTMLElement>, data: SelectProps) => void;

    /**
     * Called on blur.
     */
    onBlur?: (event: React.KeyboardEvent<HTMLElement>, data: SelectProps) => void;

    /**
     * Called when the user attempts to change the value.
     */
    onChange?: (event: React.SyntheticEvent<HTMLElement>, data: SelectProps) => void;

    /**
     * Called on click.
     */
    onClick?: (event: React.KeyboardEvent<HTMLElement>, data: SelectProps) => void;

    /**
     * Called when a close event happens.
     */
    onClose?: (event: React.SyntheticEvent<HTMLElement>, data: SelectProps) => void;

    /**
     * Called on focus.
     */
    onFocus?: (event: React.SyntheticEvent<HTMLElement>, data: SelectProps) => void;

    /**
     * Called on mousedown.
     */
    onMouseDown?: (event: React.MouseEvent<HTMLElement>, data: SelectProps) => void;

    /**
     * Called when an open event happens.
     */
    onOpen?: (event: React.SyntheticEvent<HTMLElement>, data: SelectProps) => void;
}

export interface SelectProps extends StrictSelectProps {
    [key: string]: any;
}

export const SelectItem: ComponentType<SelectItemProps>;

export class Select extends Component<SelectProps> {
    static Divider: typeof SemanticDropdown.Divider;
    static Header: typeof SemanticDropdown.Header;
    static Item: typeof SelectItem;
    static Menu: typeof SemanticDropdown.Menu;
    static SearchInput: typeof SemanticDropdown.SearchInput;
}

export function selectItem(text: string, value: string, additionalProps?: SelectItemProps): typeof SelectItem;

export interface TagsPickerProps {
    /**
     * All available items.
     */
    items: ITEM_SHAPE[];

    /**
     * A controlled array of selected values.
     */
    values?: string[];

    /**
     * The initial selected values.
     */
    defaultValues?: string[];

    /**
     * Called when a value is selected / removed.
     */
    onValuesChange: (event: SyntheticEvent, values: string[], props: TagsPickerProps) => void;

    /**
     * Called when a search for an item happens.
     */
    onSearch?: (event: SyntheticEvent, items: ITEM_SHAPE[], query: string, props: TagsPickerProps) => ITEM_SHAPE[];

    /**
     * Called when the dropdown open / close.
     */
    onVisibilityChange?: (event: SyntheticEvent, isVisible: boolean, props: TagsPickerProps) => void;

    /**
     * A custom React component to select an item.
     */
    dropdown?: ReactElement;

    /**
     * Whether or not the dropdown should close when an item is selected.
     */
    closeOnSelect?: boolean;

    /**
     * The text of the trigger button to open the dropdown.
     */
    addText?: string;

    /**
     * Message to display when there are no items matching the search input.
     */
    noResultsMessage?: string;

    /**
     * The search input placeholder text.
     */
    placeholder?: string;

    /**
     * A custom React component to display the selected values.
     */
    selectedItemsComponent?: ReactElement;

    /**
     * A custom React component to clear the selected values.
     */
    clearButton?: ReactElement;

    /**
     * A controlled open value that determined whether or not the dropdown is displayed.
     */
    open?: boolean;

    /**
     * The initial value of open.
     */
    defaultOpen?: boolean;

    /**
     * A disabled multi-select does not allow user interaction.
     */
    disabled?: boolean;

    /**
     * Whether or not the dropdown should close when the multi-select loose focus.
     */
    closeOnBlur?: boolean;

    /**
     * Whether or not the dropdown should close when a click happens outside the multi-select.
     * Requires `closeOnBlur` to be `false`.
     */
    closeOnOutsideClick?: boolean;

    /**
     * Additional classes.
     */
    className?: string;
}

export interface TagsPickerSelectedItemsProps {
    items?: ITEM_SHAPE[];
    itemRenderer?: (item: ITEM_SHAPE, options: SELECTED_ITEMS_OPTIONS) => ReactElement;
    onRemoveSelectedItem?: (event: SyntheticEvent, item: ITEM_SHAPE, props: TagsPickerSelectedItemsProps) => void;
    disabled?: boolean;
    className?: string;
}

// tslint:disable-next-line:interface-name
export interface ITEM_SHAPE {
    text: string;
    value: string;
    category?: string;
}

export interface SELECTED_ITEMS_OPTIONS {
    disabled: boolean;
    onRemove: () => void;
}

export const SelectedItem: ComponentType<TagsPickerSelectedItemsProps>;

export class TagsPicker extends Component<TagsPickerProps> {
    static SelectedItems: typeof SelectedItem;
}

export type TagsPickerReturn<T> = ITEM_SHAPE &
    {
        [P in keyof T]: T[P];
    };

export function tagsPickerItem<T>(text: string, value: string, category?: string, obj?: T): TagsPickerReturn<T>;

export type TextAreaPropsToOverwrite = 'onChange' | 'onInput';

export interface StrictTextAreaProps extends Omit<SemanticTextAreaProps, TextAreaPropsToOverwrite> {
    /**
     * Whether or not the textarea should autofocus on render.
     */
    autofocus?: boolean;
    /**
     * Delay before trying to autofocus.
     */
    autofocusDelay?: number;
    /**
     * A textarea can have different sizes.
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Whether or not the textarea take up the width of its container
     */
    fluid?: boolean;
    /**
     * A textarea can show that the data contains errors.
     */
    error?: boolean;
    /**
     * Whether or not a user is currently interacting with the textarea.
     */
    focused?: boolean;
    /**
     * Whether or not the textarea is transparent.
     */
    transparent?: boolean;
    /**
     * Whether or not the textarea is resizable.
     */
    resizable?: boolean;
    /**
     * @ignore
     */
    disabled?: boolean;
    /**
     * @ignore
     */
    className?: string;

    /**
     * Called on change.
     */
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>, data: TextAreaProps) => void;

    /**
     * Called on input.
     */
    onInput?: (event: FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => void;
}

export interface TextAreaProps extends StrictTextAreaProps {
    [key: string]: any;
}

export const TextArea: ComponentType<TextAreaProps>;

export type UnsupportedTextInputProps = 'action' | 'actionPosition' | 'inverted' | 'size';
export type TextInputPropsToOverwrite = 'onChange';

export interface StrictTextInputProps
    extends Omit<SemanticInputProps, UnsupportedTextInputProps | TextInputPropsToOverwrite> {
    /**
     * Whether or not the input should autofocus on render.
     */
    autofocus?: boolean;
    /**
     * Delay before trying to autofocus.
     */
    autofocusDelay?: number;
    /**
     * A React component displayed before or after the prompt based on "iconPosition".
     */
    icon?: ReactElement;
    /**
     * An icon can appear on the left or right.
     */
    iconPosition?: 'left';
    /**
     * An input can contain a button.
     */
    button?: ReactElement | object;
    /**
     * An input can vary in sizes.
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * @ignore
     */
    className?: string;
    /**
     * @ignore
     */
    disabled?: boolean;
    /**
     * The value of the input.
     */
    value?: string;
    /**
     * The default value of the input.
     */
    defaultValue?: string;
    /**
     * The [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) of the input.
     */
    type?: 'text' | 'password' | 'email';
    /**
     * Called on change.
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, data: TextInputOnChangeData) => void;
}

export interface TextInputOnChangeData extends TextInputProps {
    value: string;
}

export interface TextInputProps extends StrictTextInputProps {
    [key: string]: any;
}

export const TextInput: ComponentType<TextInputProps>;

export type TooltipPropsToOverwrite = 'onClose' | 'onMount' | 'onOpen' | 'onUnmount';

export interface StrictTooltipProps extends Omit<SemanticPopupProps, TooltipPropsToOverwrite> {
    flush?: boolean;
    /**
     * @ignore
     */
    trigger: any;
    /**
     * @ignore
     */
    className?: string;

    /**
     * Called when a close event happens.
     */
    onClose?: (event: MouseEvent<HTMLElement>, data: TooltipProps) => void;

    /**
     * Called when the portal is mounted on the DOM.
     */
    onMount?: (nothing: null, data: TooltipProps) => void;

    /**
     * Called when an open event happens.
     */
    onOpen?: (event: MouseEvent<HTMLElement>, data: TooltipProps) => void;

    /**
     * Called when the portal is unmounted from the DOM.
     */
    onUnmount?: (nothing: null, data: TooltipProps) => void;
}

export interface TooltipProps extends StrictTooltipProps {
    [key: string]: any;
}

export class Tooltip extends Component<TooltipProps> {
    static Content: typeof SemanticPopup.Content;
    static Header: typeof SemanticPopup.Header;
}
