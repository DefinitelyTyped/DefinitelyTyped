// Type definitions for @orbit-ui/react-components 11.1.0
// Project: https://github.com/gsoft-inc/sg-orbit
// Definitions by: Alexandre Asselin <https://github.com/alexasselin008>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module '@orbit-ui/react-components' {
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
        StrictTextAreaProps as SemanticTextAreaProps,
    } from 'semantic-ui-react';
    import type { Moment } from 'moment';

    type UnsupportedButtonProps = 'animated' | 'attached' | 'color' | 'labelPosition' | 'floated' | 'inverted';
    type ButtonPropsToOverwrite = 'onClick';

    interface StrictButtonProps extends Omit<SemanticButtonProps, UnsupportedButtonProps | ButtonPropsToOverwrite> {
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

    interface ButtonProps extends StrictButtonProps {
        [key: string]: any;
    }

    class Button extends Component<ButtonProps, {}> {
        static Content: typeof ButtonContent;
        static Group: typeof ButtonGroup;
        static Or: typeof ButtonOr;

        focus: () => void;
    }

    type UnsupportedCheckboxProps = 'as' | 'slider' | 'type' | 'radio' | 'toggle';
    type CheckboxPropsToOverwrite = 'onChange' | 'onClick' | 'onMouseDown' | 'onMouseUp';

    interface StrictCheckboxProps
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
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props and proposed checked/indeterminate state.
         */
        onChange?: (event: FormEvent<HTMLInputElement>, data: CheckboxProps) => void;

        /**
         * Called when the checkbox or label is clicked.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props and current checked/indeterminate state.
         */
        onClick?: (event: MouseEvent<HTMLInputElement>, data: CheckboxProps) => void;

        /**
         * Called when the user presses down on the mouse.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props and current checked/indeterminate state.
         */
        onMouseDown?: (event: MouseEvent<HTMLInputElement>, data: CheckboxProps) => void;

        /**
         * Called when the user releases the mouse.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props and current checked/indeterminate state.
         */
        onMouseUp?: (event: MouseEvent<HTMLInputElement>, data: CheckboxProps) => void;
    }

    interface CheckboxProps extends StrictCheckboxProps {
        [key: string]: any;
    }

    const Checkbox: ComponentType<CheckboxProps>;

    type UnsupportedToggleProps = 'as' | 'defaultIndeterminate' | 'indeterminate' | 'slider' | 'radio' | 'type';

    type ToggleProps = Omit<CheckboxProps, UnsupportedToggleProps>;

    const Toggle: ComponentType<ToggleProps>;

    interface CountProps {
        /**
         * Delay before trying to autofocus.
         */
        className?: string;
    }

    const Count: ComponentType<CountProps>;

    interface DatePreset {
        startDate: Moment;
        endDate: Moment;
        text?: string;
    }

    const DEFAULT_DATES_PRESETS: [DatePreset];

    interface DateRangePickerProps {
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
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {Moment} startDate - Selected start date.
         * @param {Moment} endDate - Selected end date.
         * @param {string} presetName - Selected preset name.
         * @param {DateRangePickerProps} props - All the props.
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
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {boolean} isVisible - Indicate if the calendar is visible.
         * @param {DateRangePickerProps} props - All the props.
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

    const DateRangePicker: ComponentType<DateRangePickerProps>;

    type DropdownPropsToOverwrite =
        | 'onAddItem'
        | 'onBlur'
        | 'onChange'
        | 'onClick'
        | 'onClose'
        | 'onFocus'
        | 'onMouseDown'
        | 'onOpen'
        | 'options';

    interface StrictDropdownProps extends Omit<SemanticDropdownProps, DropdownPropsToOverwrite> {
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
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props and the new item's value.
         */
        onAddItem?: (event: KeyboardEvent<HTMLElement>, data: DropdownProps) => void;

        /**
         * Called on blur.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onBlur?: (event: KeyboardEvent<HTMLElement>, data: DropdownProps) => void;

        /**
         * Called when the user attempts to change the value.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props and proposed value.
         */
        onChange?: (event: SyntheticEvent<HTMLElement>, data: DropdownProps) => void;

        /**
         * Called on click.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onClick?: (event: KeyboardEvent<HTMLElement>, data: DropdownProps) => void;

        /**
         * Called when a close event happens.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onClose?: (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => void;

        /**
         * Called on focus.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onFocus?: (event: SyntheticEvent<HTMLElement>, data: DropdownProps) => void;

        /**
         * Called on mousedown.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onMouseDown?: (event: MouseEvent<HTMLElement>, data: DropdownProps) => void;

        /**
         * Called when an open event happens.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onOpen?: (event: SyntheticEvent<HTMLElement>, data: DropdownProps) => void;
    }

    interface DropdownProps extends StrictDropdownProps {
        [key: string]: any;
    }

    type DropdownItemPropsToOverwrite = 'onClick';

    interface StrictDropdownItemProps extends Omit<SemanticDropdownItemProps, DropdownItemPropsToOverwrite> {
        tooltip?: string;
        tooltipPosition?: string;
        icon?: ReactElement;
        onClick?: (event: MouseEvent<HTMLDivElement>, data: DropdownItemProps) => void;
    }

    interface DropdownItemProps extends StrictDropdownItemProps {
        [key: string]: any;
    }

    const DropdownItem: ComponentType<DropdownItemProps>;

    class Dropdown extends Component<DropdownProps, {}> {
        static Divider: typeof SemanticDropdown.Divider;
        static Header: typeof SemanticDropdown.Header;
        static Item: typeof DropdownItem;
        static Menu: typeof SemanticDropdown.Menu;
        static SearchInput: typeof SemanticDropdown.SearchInput;
    }

    interface IconProps {
        className?: string;
        /**
         * An icon can vary in size.
         */
        size?: 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
    }

    interface MultiVariantIconProps {
        className?: string;
        /**
         * An icon can vary in size.
         */
        size?: 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
    }

    export class Icon {
        static create(type: ComponentType): ComponentType<IconProps>;
    }

    export class MultiVariantIcon {
        static create(type24: ComponentType, type32: ComponentType): ComponentType<MultiVariantIconProps>;
    }

    const AddIcon24: ComponentType<IconProps>;
    const AddIcon32: ComponentType<IconProps>;
    const CalendarIcon24: ComponentType<IconProps>;
    const CalendarIcon32: ComponentType<IconProps>;
    const CarretIcon24: ComponentType<IconProps>;
    const CarretIcon32: ComponentType<IconProps>;
    const CheckIcon24: ComponentType<IconProps>;
    const CheckIcon32: ComponentType<IconProps>;
    const ChevronIcon24: ComponentType<IconProps>;
    const ChevronIcon32: ComponentType<IconProps>;
    const CircleIcon24: ComponentType<IconProps>;
    const CircleIcon32: ComponentType<IconProps>;
    const ClearFilterIcon24: ComponentType<IconProps>;
    const ClearFilterIcon32: ComponentType<IconProps>;
    const CrossIcon24: ComponentType<IconProps>;
    const CrossIcon32: ComponentType<IconProps>;
    const CsvIcon32: ComponentType<IconProps>;
    const DoNotDisturbIcon32: ComponentType<IconProps>;
    const DownloadIcon32: ComponentType<IconProps>;
    const EmailIcon32: ComponentType<IconProps>;
    const EmailReminderIcon32: ComponentType<IconProps>;
    const EditIcon32: ComponentType<IconProps>;
    const FileIcon32: ComponentType<IconProps>;
    const FolderIcon32: ComponentType<IconProps>;
    const GearIcon32: ComponentType<IconProps>;
    const GroupIcon32: ComponentType<IconProps>;
    const HelpIcon24: ComponentType<IconProps>;
    const HelpIcon32: ComponentType<IconProps>;
    const HorizontalDotsIcon32: ComponentType<IconProps>;
    const ImageIcon32: ComponentType<IconProps>;
    const InfoIcon24: ComponentType<IconProps>;
    const InfoIcon32: ComponentType<IconProps>;
    const LightbulbIcon24: ComponentType<IconProps>;
    const LightbulbIcon32: ComponentType<IconProps>;
    const MagnifierIcon32: ComponentType<IconProps>;
    const MusicIcon32: ComponentType<IconProps>;
    const NotificationIcon24: ComponentType<IconProps>;
    const NotificationIcon32: ComponentType<IconProps>;
    const PdfIcon32: ComponentType<IconProps>;
    const PrinterIcon24: ComponentType<IconProps>;
    const PrinterIcon32: ComponentType<IconProps>;
    const PrivacyIcon24: ComponentType<IconProps>;
    const SignoutIcon24: ComponentType<IconProps>;
    const SignoutIcon32: ComponentType<IconProps>;
    const SortIcon24: ComponentType<IconProps>;
    const SortIcon32: ComponentType<IconProps>;
    const TrashIcon32: ComponentType<IconProps>;
    const UserAddIcon32: ComponentType<IconProps>;
    const UserRemoveIcon32: ComponentType<IconProps>;
    const VerticalDotsIcon32: ComponentType<IconProps>;
    const VideoIcon32: ComponentType<IconProps>;
    const WarningIcon24: ComponentType<IconProps>;
    const WarningIcon32: ComponentType<IconProps>;
    const ZipIcon32: ComponentType<IconProps>;

    const AddIcon: ComponentType<MultiVariantIconProps>;
    const ArrowIcon: ComponentType<MultiVariantIconProps>;
    const ChevronIcon: ComponentType<MultiVariantIconProps>;
    const CalendarIcon: ComponentType<MultiVariantIconProps>;
    const CarretIcon: ComponentType<MultiVariantIconProps>;
    const CheckIcon: ComponentType<MultiVariantIconProps>;
    const CircleIcon: ComponentType<MultiVariantIconProps>;
    const ClearFilterIcon: ComponentType<MultiVariantIconProps>;
    const CrossIcon: ComponentType<MultiVariantIconProps>;
    const CsvIcon: ComponentType<MultiVariantIconProps>;
    const DoNotDisturbIcon: ComponentType<MultiVariantIconProps>;
    const DownloadIcon: ComponentType<MultiVariantIconProps>;
    const EditIcon: ComponentType<MultiVariantIconProps>;
    const EmailIcon: ComponentType<MultiVariantIconProps>;
    const EmailReminderIcon: ComponentType<MultiVariantIconProps>;
    const FileIcon: ComponentType<MultiVariantIconProps>;
    const FolderIcon: ComponentType<MultiVariantIconProps>;
    const GearIcon: ComponentType<MultiVariantIconProps>;
    const GroupIcon: ComponentType<MultiVariantIconProps>;
    const HelpIcon: ComponentType<MultiVariantIconProps>;
    const HorizontalDotsIcon: ComponentType<MultiVariantIconProps>;
    const ImageIcon: ComponentType<MultiVariantIconProps>;
    const InfoIcon: ComponentType<MultiVariantIconProps>;
    const LightbulbIcon: ComponentType<MultiVariantIconProps>;
    const MagnifierIcon: ComponentType<MultiVariantIconProps>;
    const MusicIcon: ComponentType<MultiVariantIconProps>;
    const NotificationIcon: ComponentType<MultiVariantIconProps>;
    const PdfIcon: ComponentType<MultiVariantIconProps>;
    const PrinterIcon: ComponentType<MultiVariantIconProps>;
    const PrivacyIcon: ComponentType<MultiVariantIconProps>;
    const SortIcon: ComponentType<MultiVariantIconProps>;
    const SignoutIcon: ComponentType<MultiVariantIconProps>;
    const TrashIcon: ComponentType<MultiVariantIconProps>;
    const UserAddIcon: ComponentType<MultiVariantIconProps>;
    const UserRemoveIcon: ComponentType<MultiVariantIconProps>;
    const VerticalDotsIcon: ComponentType<MultiVariantIconProps>;
    const VideoIcon: ComponentType<MultiVariantIconProps>;
    const WarningIcon: ComponentType<MultiVariantIconProps>;
    const ZipIcon: ComponentType<MultiVariantIconProps>;

    type UnsupportedLabelProps = 'tag';
    type LabelPropsToOverwrite = 'onClick' | 'onRemove';

    interface StrictLabelProps extends Omit<SemanticLabelProps, UnsupportedLabelProps | LabelPropsToOverwrite> {
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
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onClick?: (event: React.MouseEvent<HTMLElement>, data: LabelProps) => void;

        /**
         * Adds an "x" icon, called when "x" is clicked.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onRemove?: (event: React.MouseEvent<HTMLElement>, data: LabelProps) => void;
    }

    interface LabelProps extends StrictLabelProps {
        [key: string]: any;
    }

    class Label extends Component<LabelProps, {}> {
        Detail: typeof LabelDetail;
        Group: typeof LabelGroup;
    }

    class Tag extends Component<LabelProps, {}> {
        Detail: typeof LabelDetail;
        Group: typeof LabelGroup;
    }

    type StrictMessageProps = SemanticMessageProps;

    interface MessageProps extends StrictMessageProps {
        [key: string]: any;
    }

    class Message extends Component<MessageProps, {}> {
        static Content: typeof MessageContent;
        static Header: typeof MessageHeader;
        static List: typeof MessageList;
        static Item: typeof MessageItem;
    }

    type UnsupportedNumberInputProps =
        | 'action'
        | 'actionPosition'
        | 'inverted'
        | 'button'
        | 'iconsPosition'
        | 'type'
        | 'size';
    type NumberInputPropsToOverwrite = 'onChange';

    interface StrictNumberInputProps
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
         *
         * @param {ChangeEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props and a proposed value.
         */
        onChange?: (event: ChangeEvent<HTMLInputElement>, data: NumericInputOnChangeData) => void;
    }

    interface NumberInputProps extends StrictNumberInputProps {
        [key: string]: any;
    }

    interface NumericInputOnChangeData extends NumberInputProps {
        value?: number;
    }

    const NumberInput: ComponentType<NumberInputProps>;

    type PopperPlacement =
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

    interface PopperOptions {
        placement: PopperPlacement;
        modifiers: any[];
        strategy: 'fixed' | 'absolute';
        onFirstUpdate?: (any) => void;
    }

    interface PopperProps {
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

    interface AutoControlledPopperProps extends PopperProps {
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
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {boolean} isVisible - Indicate if the popup is visible.
         * @returns {void}
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

    interface ButtonPopperProps extends Omit<AutoControlledPopperProps, 'trigger' | 'toggleHandler'> {
        button: ReactNode;
    }

    interface TextInputPopperProps extends Omit<AutoControlledPopperProps, 'trigger' | 'toggleHandler'> {
        input: ReactNode;
    }

    const Popper: ComponentType<PopperProps>;
    const AutoControlledPopper: ComponentType<AutoControlledPopperProps>;
    const ButtonPopper: ComponentType<ButtonPopperProps>;
    const TextInputPopper: ComponentType<TextInputPopperProps>;

    type UnsupportedRadioProps = 'as' | 'defaultIndeterminate' | 'indeterminate' | 'slider' | 'toggle' | 'type';
    type RadioPropsToOverwrite = 'onChange' | 'onClick' | 'onMouseDown' | 'onMouseUp';

    interface StrictRadioProps extends Omit<SemanticRadioProps, UnsupportedRadioProps | RadioPropsToOverwrite> {
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
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props and proposed checked/indeterminate state.
         */
        onChange?: (event: FormEvent<HTMLInputElement>, data: RadioProps) => void;

        /**
         * Called when the checkbox or label is clicked.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props and current checked/indeterminate state.
         */
        onClick?: (event: MouseEvent<HTMLInputElement>, data: RadioProps) => void;

        /**
         * Called when the user presses down on the mouse.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props and current checked/indeterminate state.
         */
        onMouseDown?: (event: MouseEvent<HTMLInputElement>, data: RadioProps) => void;

        /**
         * Called when the user releases the mouse.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props and current checked/indeterminate state.
         */
        onMouseUp?: (event: MouseEvent<HTMLInputElement>, data: RadioProps) => void;
    }

    interface RadioProps extends StrictRadioProps {
        [key: string]: any;
    }

    const Radio: ComponentType<RadioProps>;

    interface ResultShape {
        id: string;
        text: string;
    }

    interface RemoteSearchInputProps<T> {
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
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {Object} value - Selected value.
         * @param {Object} props - All the props.
         * @returns {void}
         */
        onValueChange: (event: SyntheticEvent, value: T, props: RemoteSearchInputProps<T>) => void;
        /**
         * Called when a fetch event happens.
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {string} query - Search query that triggered the search.
         * @param {Object} props - All the props.
         * @returns {Promise} - Promise resolved with the results to display or reject if the HTTP call fail.
         */
        onFetchResults: (event: SyntheticEvent, query: string, props: RemoteSearchInputProps<T>) => Promise<any>;
        /**
         * Called after a fetch.
         * @param {Result[]} results - Results returned by the fetch call.
         * @param {string} query - Search query that triggered the search.
         * @param {Object} props - All the props.
         * @returns {Result[]} - Results to display.
         */
        onResults?: (results: { content: T[] }, query: string, props: RemoteSearchInputProps<T>) => ResultShape[];
        /**
         * Called when a clear event happens.
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {Object} props - All the props.
         * @returns {void}
         */
        onClear?: (event: SyntheticEvent, props: RemoteSearchInputProps<T>) => void;
        /**
         * Called on blur.
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {Object} props - All the props.
         * @returns {void}
         */
        onBlur?: (event: SyntheticEvent, props: RemoteSearchInputProps<T>) => void;
        /**
         * Called when a click happens outside the search input.
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {Object} props - All the props.
         * @returns {void}
         */
        onOutsideClick?: (event: SyntheticEvent, props: RemoteSearchInputProps<T>) => void;
        /**
         * Called on keydown.
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {Object} props - All the props.
         * @returns {void}
         */
        onKeyDown?: (event: SyntheticEvent, props: RemoteSearchInputProps<T>) => void;
        /**
         * Called when the search results open / close.
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {boolean} isVisible - Indicate if the search input results are visible.
         * @param {Object} props - All the props.
         * @returns {void}
         */
        onVisibilityChange?: (event: SyntheticEvent, isVisible: boolean, props: RemoteSearchInputProps<T>) => void;
        /**
         * Render a result.
         * @param {Object} result - Result to render.
         * @param {Object} props - All the props.
         * @returns {ReactElement} - React element to render.
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

    interface SearchInputProps<T> {
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
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {boolean} isVisible - Indicate if the search input results are visible.
         * @param {Object} props - All the props.
         * @returns {void}
         */
        onVisibilityChange?: (event: SyntheticEvent, isVisible: boolean, props: SearchInputProps<T>) => void;
        /**
         * Called when a search event happens.
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {Result[]} results - Available results.
         * @param {string} query - Search query that triggered the search.
         * @param {Object} props - All the props.
         * @returns {Result[]} - Results to display.
         */
        onSearch?: (
            event: SyntheticEvent,
            results: ResultShape[],
            query: string,
            props: SearchInputProps<T>,
        ) => ResultShape[];
        /**
         * Called when a clear event happens.
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {Object} props - All the props.
         * @returns {void}
         */
        onClear?: (event: SyntheticEvent, props: SearchInputProps<T>) => void;
        /**
         * Called on blur.
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {Object} props - All the props.
         * @returns {void}
         */
        onBlur?: (event: SyntheticEvent, props: SearchInputProps<T>) => void;
        /**
         * Called when a click happens outside the search input.
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {Object} props - All the props.
         * @returns {void}
         */
        onOutsideClick?: (event: SyntheticEvent, props: SearchInputProps<T>) => void;
        /**
         * Render a result.
         * @param {Object} result - Result to render.
         * @param {Object} props - All the props.
         * @returns {ReactElement} - React element to render.
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

    interface SearchInputControllerProps {
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

    class SearchInput<T> extends Component<SearchInputProps<T>, {}> { }

    class RemoteSearchInput<T> extends Component<RemoteSearchInputProps<T>, {}> { }

    const SearchInputController: ComponentType<SearchInputControllerProps>;

    function searchInputResult<T>(id: string, text: string, obj?: T): T & ResultShape;

    type UnsupportedSelectProps =
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
    type SelectPropsToOverwrite =
        | 'options'
        | 'onAddItem'
        | 'onBlur'
        | 'onChange'
        | 'onClick'
        | 'onClose'
        | 'onFocus'
        | 'onMouseDown'
        | 'onOpen';

    type SelectItemProps = DropdownItemProps;

    interface StrictSelectProps extends Omit<StrictDropdownProps, UnsupportedSelectProps | SelectPropsToOverwrite> {
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
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props and the new item's value.
         */
        onAddItem?: (event: React.KeyboardEvent<HTMLElement>, data: SelectProps) => void;

        /**
         * Called on blur.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onBlur?: (event: React.KeyboardEvent<HTMLElement>, data: SelectProps) => void;

        /**
         * Called when the user attempts to change the value.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props and proposed value.
         */
        onChange?: (event: React.SyntheticEvent<HTMLElement>, data: SelectProps) => void;

        /**
         * Called on click.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onClick?: (event: React.KeyboardEvent<HTMLElement>, data: SelectProps) => void;

        /**
         * Called when a close event happens.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onClose?: (event: React.SyntheticEvent<HTMLElement>, data: SelectProps) => void;

        /**
         * Called on focus.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onFocus?: (event: React.SyntheticEvent<HTMLElement>, data: SelectProps) => void;

        /**
         * Called on mousedown.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onMouseDown?: (event: React.MouseEvent<HTMLElement>, data: SelectProps) => void;

        /**
         * Called when an open event happens.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onOpen?: (event: React.SyntheticEvent<HTMLElement>, data: SelectProps) => void;
    }

    interface SelectProps extends StrictSelectProps {
        [key: string]: any;
    }

    const SelectItem: ComponentType<SelectItemProps>;

    class Select extends Component<SelectProps, {}> {
        static Divider: typeof SemanticDropdown.Divider;
        static Header: typeof SemanticDropdown.Header;
        static Item: typeof SelectItem;
        static Menu: typeof SemanticDropdown.Menu;
        static SearchInput: typeof SemanticDropdown.SearchInput;
    }

    function selectItem(text: string, value: string, additionalProps?: SelectItemProps): typeof SelectItem;

    interface TagsPickerProps {
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
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {string[]} values - Selected values.
         * @param {Object} props - All the props.
         * @returns {void}
         */
        onValuesChange: (event: SyntheticEvent, values: string[], props: TagsPickerProps) => void;

        /**
         * Called when a search for an item happens.
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {Item[]} items - Available items.
         * @param {string} query - Search query.
         * @param {Object} props - All the props.
         * @returns {Item[]} - Items to display.
         */
        onSearch?: (event: SyntheticEvent, items: ITEM_SHAPE[], query: string, props: TagsPickerProps) => ITEM_SHAPE[];

        /**
         * Called when the dropdown open / close.
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {boolean} isVisible - Indicate if the multi-select dropdown is visible.
         * @param {Object} props - All the props.
         * @returns {void}
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

    interface TagsPickerSelectedItemsProps {
        items?: ITEM_SHAPE[];
        itemRenderer?: (item: ITEM_SHAPE, options: SELECTED_ITEMS_OPTIONS) => ReactElement;
        onRemoveSelectedItem?: (event: SyntheticEvent, item: ITEM_SHAPE, props: TagsPickerSelectedItemsProps) => void;
        disabled?: boolean;
        className?: string;
    }

    type ITEM_SHAPE = {
        text: string;
        value: string;
        category?: string;
    };

    type SELECTED_ITEMS_OPTIONS = {
        disabled: boolean;
        onRemove: () => void;
    };

    const SelectedItem: ComponentType<TagsPickerSelectedItemsProps>;

    class TagsPicker extends Component<TagsPickerProps, {}> {
        static SelectedItems: typeof SelectedItem;
    }

    type TagsPickerReturn<T> = ITEM_SHAPE &
        {
            [P in keyof T]: T[P];
        };

    function tagsPickerItem<T>(text: string, value: string, category?: string, obj?: T): TagsPickerReturn<T>;

    type TextAreaPropsToOverwrite = 'onChange' | 'onInput';

    interface StrictTextAreaProps extends Omit<SemanticTextAreaProps, TextAreaPropsToOverwrite> {
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
         *
         * @param {SyntheticEvent} event - The React SyntheticEvent object
         * @param {object} data - All props and the event value.
         */
        onChange?: (event: ChangeEvent<HTMLTextAreaElement>, data: TextAreaProps) => void;

        /**
         * Called on input.
         *
         * @param {SyntheticEvent} event - The React SyntheticEvent object
         * @param {object} data - All props and the event value.
         */
        onInput?: (event: FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => void;
    }

    interface TextAreaProps extends StrictTextAreaProps {
        [key: string]: any;
    }

    const TextArea: ComponentType<TextAreaProps>;

    type UnsupportedTextInputProps = 'action' | 'actionPosition' | 'inverted' | 'size';
    type TextInputPropsToOverwrite = 'onChange';

    interface StrictTextInputProps
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
         *
         * @param {ChangeEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props and a proposed value.
         */
        onChange?: (event: ChangeEvent<HTMLInputElement>, data: TextInputOnChangeData) => void;
    }

    interface TextInputOnChangeData extends TextInputProps {
        value: string;
    }

    interface TextInputProps extends StrictTextInputProps {
        [key: string]: any;
    }

    const TextInput: ComponentType<TextInputProps>;

    type TooltipPropsToOverwrite = 'onClose' | 'onMount' | 'onOpen' | 'onUnmount';

    interface StrictTooltipProps extends Omit<SemanticPopupProps, TooltipPropsToOverwrite> {
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
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onClose?: (event: MouseEvent<HTMLElement>, data: TooltipProps) => void;

        /**
         * Called when the portal is mounted on the DOM.
         *
         * @param {null}
         * @param {object} data - All props.
         */
        onMount?: (nothing: null, data: TooltipProps) => void;

        /**
         * Called when an open event happens.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onOpen?: (event: MouseEvent<HTMLElement>, data: TooltipProps) => void;

        /**
         * Called when the portal is unmounted from the DOM.
         *
         * @param {null}
         * @param {object} data - All props.
         */
        onUnmount?: (nothing: null, data: TooltipProps) => void;
    }

    interface TooltipProps extends StrictTooltipProps {
        [key: string]: any;
    }

    class Tooltip extends Component<TooltipProps, {}> {
        static Content: typeof SemanticPopup.Content;
        static Header: typeof SemanticPopup.Header;
    }
}
