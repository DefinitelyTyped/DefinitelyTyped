// Type definitions for material-ui v0.13.4
// Project: https://github.com/callemall/material-ui
// Definitions by: Nathan Brown <https://github.com/ngbrown>, Oliver Herrmann <https://github.com/herrmanno>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="react" />

declare module "material-ui" {
    export import AppBar = __MaterialUI.AppBar; // require('material-ui/lib/app-bar');
    export import AppCanvas = __MaterialUI.AppCanvas; // require('material-ui/lib/app-canvas');
    export import Avatar = __MaterialUI.Avatar; // require('material-ui/lib/avatar');
    export import Badge = __MaterialUI.Badge; // require('material-ui/lib/badge');
    export import BeforeAfterWrapper = __MaterialUI.BeforeAfterWrapper; // require('material-ui/lib/before-after-wrapper');
    export import Card = __MaterialUI.Card.Card; // require('material-ui/lib/card/card');
    export import CardActions = __MaterialUI.Card.CardActions; // require('material-ui/lib/card/card-actions');
    export import CardExpandable = __MaterialUI.Card.CardExpandable; // require('material-ui/lib/card/card-expandable');
    export import CardHeader = __MaterialUI.Card.CardHeader; // require('material-ui/lib/card/card-header');
    export import CardMedia = __MaterialUI.Card.CardMedia; // require('material-ui/lib/card/card-media');
    export import CardText = __MaterialUI.Card.CardText; // require('material-ui/lib/card/card-text');
    export import CardTitle = __MaterialUI.Card.CardTitle; // require('material-ui/lib/card/card-title');
    export import Checkbox = __MaterialUI.Checkbox; // require('material-ui/lib/checkbox');
    export import CircularProgress = __MaterialUI.CircularProgress; // require('material-ui/lib/circular-progress');
    export import ClearFix = __MaterialUI.ClearFix; // require('material-ui/lib/clearfix');
    export import DatePicker = __MaterialUI.DatePicker.DatePicker; // require('material-ui/lib/date-picker/date-picker');
    export import DatePickerDialog = __MaterialUI.DatePicker.DatePickerDialog; // require('material-ui/lib/date-picker/date-picker-dialog');
    export import Dialog = __MaterialUI.Dialog // require('material-ui/lib/dialog');
    export import DropDownIcon = __MaterialUI.DropDownIcon; // require('material-ui/lib/drop-down-icon');
    export import DropDownMenu = __MaterialUI.DropDownMenu; // require('material-ui/lib/drop-down-menu');
    export import EnhancedButton = __MaterialUI.EnhancedButton; // require('material-ui/lib/enhanced-button');
    export import FlatButton = __MaterialUI.FlatButton; // require('material-ui/lib/flat-button');
    export import FloatingActionButton = __MaterialUI.FloatingActionButton; // require('material-ui/lib/floating-action-button');
    export import FontIcon = __MaterialUI.FontIcon; // require('material-ui/lib/font-icon');
    export import IconButton = __MaterialUI.IconButton; // require('material-ui/lib/icon-button');
    export import IconMenu = __MaterialUI.Menus.IconMenu; // require('material-ui/lib/menus/icon-menu');
    export import LeftNav = __MaterialUI.LeftNav; // require('material-ui/lib/left-nav');
    export import LinearProgress = __MaterialUI.LinearProgress; // require('material-ui/lib/linear-progress');
    export import List = __MaterialUI.Lists.List; // require('material-ui/lib/lists/list');
    export import ListDivider = __MaterialUI.Lists.ListDivider; // require('material-ui/lib/lists/list-divider');
    export import ListItem = __MaterialUI.Lists.ListItem; // require('material-ui/lib/lists/list-item');
    export import Menu = __MaterialUI.Menu.Menu; // require('material-ui/lib/menu/menu');
    export import MenuItem = __MaterialUI.Menu.MenuItem; // require('material-ui/lib/menu/menu-item');
    export import Mixins = __MaterialUI.Mixins; // require('material-ui/lib/mixins/');
    export import Overlay = __MaterialUI.Overlay; // require('material-ui/lib/overlay');
    export import Paper = __MaterialUI.Paper; // require('material-ui/lib/paper');
    export import RadioButton = __MaterialUI.RadioButton; // require('material-ui/lib/radio-button');
    export import RadioButtonGroup = __MaterialUI.RadioButtonGroup; // require('material-ui/lib/radio-button-group');
    export import RaisedButton = __MaterialUI.RaisedButton; // require('material-ui/lib/raised-button');
    export import RefreshIndicator = __MaterialUI.RefreshIndicator; // require('material-ui/lib/refresh-indicator');
    export import Ripples = __MaterialUI.Ripples; // require('material-ui/lib/ripples/');
    export import SelectField = __MaterialUI.SelectField; // require('material-ui/lib/select-field');
    export import Slider = __MaterialUI.Slider; // require('material-ui/lib/slider');
    export import SvgIcon = __MaterialUI.SvgIcon; // require('material-ui/lib/svg-icon');
    export import Icons = __MaterialUI.Icons;
    export import Styles = __MaterialUI.Styles; // require('material-ui/lib/styles/');
    export import Snackbar = __MaterialUI.Snackbar; // require('material-ui/lib/snackbar');
    export import Tab = __MaterialUI.Tabs.Tab; // require('material-ui/lib/tabs/tab');
    export import Tabs = __MaterialUI.Tabs.Tabs; // require('material-ui/lib/tabs/tabs');
    export import Table = __MaterialUI.Table.Table; // require('material-ui/lib/table/table');
    export import TableBody = __MaterialUI.Table.TableBody; // require('material-ui/lib/table/table-body');
    export import TableFooter = __MaterialUI.Table.TableFooter; // require('material-ui/lib/table/table-footer');
    export import TableHeader = __MaterialUI.Table.TableHeader; // require('material-ui/lib/table/table-header');
    export import TableHeaderColumn = __MaterialUI.Table.TableHeaderColumn; // require('material-ui/lib/table/table-header-column');
    export import TableRow = __MaterialUI.Table.TableRow; // require('material-ui/lib/table/table-row');
    export import TableRowColumn = __MaterialUI.Table.TableRowColumn; // require('material-ui/lib/table/table-row-column');
    export import ThemeWrapper = __MaterialUI.ThemeWrapper; // require('material-ui/lib/theme-wrapper');
    export import Toggle = __MaterialUI.Toggle; // require('material-ui/lib/toggle');
    export import TimePicker = __MaterialUI.TimePicker; // require('material-ui/lib/time-picker');
    export import TextField = __MaterialUI.TextField; // require('material-ui/lib/text-field');
    export import Toolbar = __MaterialUI.Toolbar.Toolbar; // require('material-ui/lib/toolbar/toolbar');
    export import ToolbarGroup = __MaterialUI.Toolbar.ToolbarGroup; // require('material-ui/lib/toolbar/toolbar-group');
    export import ToolbarSeparator = __MaterialUI.Toolbar.ToolbarSeparator; // require('material-ui/lib/toolbar/toolbar-separator');
    export import ToolbarTitle = __MaterialUI.Toolbar.ToolbarTitle; // require('material-ui/lib/toolbar/toolbar-title');
    export import Tooltip = __MaterialUI.Tooltip; // require('material-ui/lib/tooltip');
    export import Utils = __MaterialUI.Utils; // require('material-ui/lib/utils/');
    
    export import GridList = __MaterialUI.GridList.GridList; // require('material-ui/lib/gridlist/grid-list');
    export import GridTile = __MaterialUI.GridList.GridTile; // require('material-ui/lib/gridlist/grid-tile');

    // export type definitions
    export type TouchTapEvent = __MaterialUI.TouchTapEvent;
    export type TouchTapEventHandler = __MaterialUI.TouchTapEventHandler;
    export type DialogAction = __MaterialUI.DialogAction;
}

declare namespace __MaterialUI {
    import React = __React;

    // ReactLink is from "react/addons"
    interface ReactLink<T> {
        value: T;
        requestChange(newValue: T): void;
    }

    // What's common between React.TouchEvent and React.MouseEvent
    interface TouchTapEvent extends React.SyntheticEvent {
        altKey: boolean;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        shiftKey: boolean;
    }

    // What's common between React.TouchEventHandler and React.MouseEventHandler
    interface TouchTapEventHandler extends React.EventHandler<TouchTapEvent> { }

    // more specific than React.HTMLAttributes

    interface AppBarProps extends React.Props<AppBar> {
        iconClassNameLeft?: string;
        iconClassNameRight?: string;
        iconElementLeft?: React.ReactElement<any>;
        iconElementRight?: React.ReactElement<any>;
        iconStyleRight?: string;
        style?: React.CSSProperties;
        showMenuIconButton?: boolean;
        title?: React.ReactNode;
        zDepth?: number;

        onLeftIconButtonTouchTap?: TouchTapEventHandler;
        onRightIconButtonTouchTap?: TouchTapEventHandler;
    }
    export class AppBar extends React.Component<AppBarProps, {}>{
    }

    interface AppCanvasProps extends React.Props<AppCanvas> {
        style?: React.CSSProperties;
    }
    export class AppCanvas extends React.Component<AppCanvasProps, {}> {
    }

    interface AvatarProps extends React.Props<Avatar> {
        icon?: React.ReactElement<any>;
        backgroundColor?: string;
        color?: string;
        size?: number;
        src?: string;
        style?: React.CSSProperties;
    }
    export class Avatar extends React.Component<AvatarProps, {}> {
    }

    interface BadgeProps extends React.Props<Badge> {
        badgeContent: React.ReactElement<any> | string | number;
        primary?: boolean;
        secondary?: boolean;
        style?: React.CSSProperties;
        badgeStyle?: React.CSSProperties;
    }
    export class Badge extends React.Component<BadgeProps, {}> {
    }

    interface BeforeAfterWrapperProps extends React.Props<BeforeAfterWrapper> {
        beforeStyle?: React.CSSProperties;
        afterStyle?: React.CSSProperties;
        beforeElementType?: string;
        afterElementType?: string;
        elementType?: string;
    }
    export class BeforeAfterWrapper extends React.Component<BeforeAfterWrapperProps, {}> {
    }

    namespace Card {

        interface CardProps extends React.Props<Card> {
            expandable?: boolean;
            initiallyExpanded?: boolean;
            onExpandedChange?: (isExpanded: boolean) => void;
            style?: React.CSSProperties;
        }
        export class Card extends React.Component<CardProps, {}> {
        }

        interface CardActionsProps extends React.Props<CardActions> {
            expandable?: boolean;
            showExpandableButton?: boolean;
            style?: React.CSSProperties;
        }
        export class CardActions extends React.Component<CardActionsProps, {}> {
        }

        interface CardExpandableProps extends React.Props<CardExpandable> {
            onExpanding?: (isExpanded: boolean) => void;
            expanded?: boolean;
            style?: React.CSSProperties;
        }
        export class CardExpandable extends React.Component<CardExpandableProps, {}> {
        }

        interface CardHeaderProps extends React.Props<CardHeader> {
            expandable?: boolean;
            showExpandableButton?: boolean;
            title?: string | React.ReactElement<any>;
            titleColor?: string;
            titleStyle?: React.CSSProperties;
            subtitle?: string | React.ReactElement<any>;
            subtitleColor?: string;
            subtitleStyle?: React.CSSProperties;
            textStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            avatar: React.ReactElement<any> | string;
        }
        export class CardHeader extends React.Component<CardHeaderProps, {}> {
        }

        interface CardMediaProps extends React.Props<CardMedia> {
            expandable?: boolean;
            overlay?: React.ReactNode;
            overlayStyle?: React.CSSProperties;
            overlayContainerStyle?: React.CSSProperties;
            overlayContentStyle?: React.CSSProperties;
            mediaStyle?: React.CSSProperties;
            style?: React.CSSProperties;
        }
        export class CardMedia extends React.Component<CardMediaProps, {}> {
        }

        interface CardTextProps extends React.Props<CardText> {
            expandable?: boolean;
            color?: string;
            style?: React.CSSProperties;
        }
        export class CardText extends React.Component<CardTextProps, {}> {
        }

        interface CardTitleProps extends React.Props<CardTitle> {
            expandable?: boolean;
            showExpandableButton?: boolean;
            title?: string | React.ReactElement<any>;
            titleColor?: string;
            titleStyle?: React.CSSProperties;
            subtitle?: string | React.ReactElement<any>;
            subtitleColor?: string;
            subtitleStyle?: React.CSSProperties;
            textStyle?: React.CSSProperties;
            style?: React.CSSProperties;
        }
        export class CardTitle extends React.Component<CardTitleProps, {}> {
        }
    }

    // what's not commonly overridden by Checkbox, RadioButton, or Toggle
    interface CommonEnhancedSwitchProps<T> extends React.HTMLAttributes, React.Props<T> {
        // <input/> is root element
        id?: string;
        iconStyle?: React.CSSProperties;
        labelStyle?: React.CSSProperties;
        rippleStyle?: React.CSSProperties;
        thumbStyle?: React.CSSProperties;
        trackStyle?: React.CSSProperties;
        name?: string;
        value?: string;
        label?: string;
        required?: boolean;
        disabled?: boolean;
        defaultSwitched?: boolean;
        disableFocusRipple?: boolean;
        disableTouchRipple?: boolean;
    }

    interface EnhancedSwitchProps extends CommonEnhancedSwitchProps<EnhancedSwitch> {
        // <input/> is root element
        inputType: string;
        switchElement: React.ReactElement<any>;
        onParentShouldUpdate: (isInputChecked: boolean) => void;
        switched: boolean;
        rippleColor?: string;
        onSwitch?: (e: React.MouseEvent, isInputChecked: boolean) => void;
        labelPosition?: string;
    }
    export class EnhancedSwitch extends React.Component<EnhancedSwitchProps, {}> {
        isSwitched(): boolean;
        setSwitched(newSwitchedValue: boolean): void;
        getValue(): any;
        isKeyboardFocused(): boolean;
    }

    interface CheckboxProps extends CommonEnhancedSwitchProps<Checkbox> {
        // <EnhancedSwitch/> is root element
        checkedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
        defaultChecked?: boolean;
        iconStyle?: React.CSSProperties;
        label?: string;
        labelStyle?: React.CSSProperties;
        labelPosition?: string;
        style?: React.CSSProperties;
        checked?: boolean;
        unCheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon

        disabled?: boolean;
        valueLink?: ReactLink<boolean>;
        checkedLink?: ReactLink<boolean>;

        onCheck?: (event: React.MouseEvent, checked: boolean) => void;
    }
    export class Checkbox extends React.Component<CheckboxProps, {}> {
        isChecked(): void;
        setChecked(newCheckedValue: boolean): void;
    }

    interface CircularProgressProps extends React.Props<CircularProgress> {
        mode?: string;
        value?: number;
        min?: number;
        max?: number;
        size?: number;
        color?: string;
        innerStyle?: React.CSSProperties;
        style?: React.CSSProperties;

    }
    export class CircularProgress extends React.Component<CircularProgressProps, {}> {
    }

    interface ClearFixProps extends React.Props<ClearFix> {
    }
    export class ClearFix extends React.Component<ClearFixProps, {}> {
    }

    namespace DatePicker {
        interface DatePickerProps extends React.Props<DatePicker> {
            autoOk?: boolean;
            defaultDate?: Date;
            formatDate?: (date:Date) => string;
            hintText?: string;
            floatingLabelText?: string;
            hideToolbarYearChange?: boolean;
            maxDate?: Date;
            minDate?: Date;
            mode?: string;
            onDismiss?: () => void;

            // e is always null
            onChange?: (e: any, d: Date) => void;

            onFocus?: React.FocusEventHandler;
            onShow?: () => void;
            onTouchTap?: React.TouchEventHandler;
            shouldDisableDate?: (day: Date) => boolean;
            showYearSelector?: boolean;
            style?: React.CSSProperties;
            textFieldStyle?: React.CSSProperties;
        }
        export class DatePicker extends React.Component<DatePickerProps, {}> {
        }

        interface DatePickerDialogProps extends React.Props<DatePickerDialog> {
            disableYearSelection?: boolean;
            initialDate?: Date;
            maxDate?: Date;
            minDate?: Date;
            onAccept?: (d: Date) => void;
            onClickAway?: () => void;
            onDismiss?: () => void;
            onShow?: () => void;
            shouldDisableDate?: (day: Date) => boolean;
            showYearSelector?: boolean;
        }
        export class DatePickerDialog extends React.Component<DatePickerDialogProps, {}> {
        }
    }

    export interface DialogAction {
        id?: string;
        text: string;
        ref?: string;

        onTouchTap?: TouchTapEventHandler;
        onClick?: React.MouseEventHandler;
    }
    interface DialogProps extends React.Props<Dialog> {
        actions?: Array<DialogAction | React.ReactElement<any>>;
        actionFocus?: string;
        autoDetectWindowHeight?: boolean;
        autoScrollBodyContent?: boolean;
        style?: React.CSSProperties;
        bodyStyle?: React.CSSProperties;
        contentClassName?: string;
        contentInnerStyle?: React.CSSProperties;
        contentStyle?: React.CSSProperties;
        modal?: boolean;
        openImmediately?: boolean;
        repositionOnUpdate?: boolean;
        title?: React.ReactNode;
        defaultOpen?: boolean;
        open?: boolean;

        onClickAway?: () => void;
        onDismiss?: () => void;
        onShow?: () => void;
        onRequestClose?: (buttonClicked: boolean) => void;
    }
    export class Dialog extends React.Component<DialogProps, {}> {
        dismiss(): void;
        show(): void;
        isOpen(): boolean;
    }

    interface DropDownIconProps extends React.Props<DropDownIcon> {
        menuItems: Menu.MenuItemRequest[];
        closeOnMenuItemTouchTap?: boolean;
        iconStyle?: React.CSSProperties;
        iconClassName?: string;
        iconLigature?: string;

        onChange?: Menu.ItemTapEventHandler;
    }
    export class DropDownIcon extends React.Component<DropDownIconProps, {}> {
    }

    interface DropDownMenuProps extends React.Props<DropDownMenu> {
        displayMember?: string;
        valueMember?: string;
        autoWidth?: boolean;
        menuItems: Menu.MenuItemRequest[];
        menuItemStyle?: React.CSSProperties;
        selectedIndex?: number;
        underlineStyle?: React.CSSProperties;
        iconStyle?: React.CSSProperties;
        labelStyle?: React.CSSProperties;
        style?: React.CSSProperties;
        disabled?: boolean;
        valueLink?: ReactLink<any>;
        value?: number;

        onChange?: Menu.ItemTapEventHandler;
    }
    export class DropDownMenu extends React.Component<DropDownMenuProps, {}> {
    }

    // non generally overridden elements of EnhancedButton
    interface SharedEnhancedButtonProps<T> extends React.HTMLAttributes, React.Props<T> {
        centerRipple?: boolean;
        containerElement?: string | React.ReactElement<any>;
        disabled?: boolean;
        disableFocusRipple?: boolean;
        disableKeyboardFocus?: boolean;
        disableTouchRipple?: boolean;
        keyboardFocused?: boolean;
        linkButton?: boolean;
        focusRippleColor?: string;
        focusRippleOpacity?: number;
        touchRippleOpacity?: number;
        tabIndex?: number;

        onBlur?: React.FocusEventHandler;
        onFocus?: React.FocusEventHandler;
        onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
        onKeyDown?: React.KeyboardEventHandler;
        onKeyUp?: React.KeyboardEventHandler;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        onTouchStart?: React.TouchEventHandler;
        onTouchEnd?: React.TouchEventHandler;
        onTouchTap?: TouchTapEventHandler;
    }

    interface EnhancedButtonProps extends SharedEnhancedButtonProps<EnhancedButton> {
        touchRippleColor?: string;
        focusRippleColor?: string;
        style?: React.CSSProperties;
    }
    export class EnhancedButton extends React.Component<EnhancedButtonProps, {}> {
    }

    interface FlatButtonProps extends SharedEnhancedButtonProps<FlatButton> {
        hoverColor?: string;
        label?: string;
        labelPosition?: string;
        labelStyle?: React.CSSProperties;
        linkButton?: boolean;
        primary?: boolean;
        secondary?: boolean;
        rippleColor?: string;
        style?: React.CSSProperties;
    }
    export class FlatButton extends React.Component<FlatButtonProps, {}> {
    }

    interface FloatingActionButtonProps extends SharedEnhancedButtonProps<FloatingActionButton> {
        backgroundColor?: string;
        disabled?: boolean;
        disabledColor?: string;
        iconClassName?: string;
        iconStyle?: React.CSSProperties;
        mini?: boolean;
        secondary?: boolean;
        style?: React.CSSProperties;
    }
    export class FloatingActionButton extends React.Component<FloatingActionButtonProps, {}> {
    }

    interface FontIconProps extends React.Props<FontIcon> {
        color?: string;
        hoverColor?: string;
        onMouseLeave?: React.MouseEventHandler;
        onMouseEnter?: React.MouseEventHandler;
        style?: React.CSSProperties;
        className?: string;
    }
    export class FontIcon extends React.Component<FontIconProps, {}> {
    }

    interface IconButtonProps extends SharedEnhancedButtonProps<IconButton> {
        iconClassName?: string;
        iconStyle?: React.CSSProperties;
        style?: React.CSSProperties;
        tooltip?: string;
        tooltipPosition?: string;
        tooltipStyles?: React.CSSProperties;
        touch?: boolean;

        onBlur?: React.FocusEventHandler;
        onFocus?: React.FocusEventHandler;
    }
    export class IconButton extends React.Component<IconButtonProps, {}> {
    }

    interface LeftNavProps extends React.Props<LeftNav> {
        disableSwipeToOpen?: boolean;
        docked?: boolean;
        header?: React.ReactElement<any>;
        menuItems: Menu.MenuItemRequest[];
        onChange?: Menu.ItemTapEventHandler;
        onNavOpen?: () => void;
        onNavClose?: () => void;
        openRight?: Boolean;
        selectedIndex?: number;
        menuItemClassName?: string;
        menuItemClassNameSubheader?: string;
        menuItemClassNameLink?: string;
        style?: React.CSSProperties;
    }
    export class LeftNav extends React.Component<LeftNavProps, {}> {
    }

    interface LinearProgressProps extends React.Props<LinearProgress> {
        mode?: string;
        value?: number;
        min?: number;
        max?: number;
    }
    export class LinearProgress extends React.Component<LinearProgressProps, {}> {
    }

    namespace Lists {
        interface ListProps extends React.Props<List> {
            insetSubheader?: boolean;
            subheader?: string;
            subheaderStyle?: React.CSSProperties;
            zDepth?: number;
            style?: React.CSSProperties;
        }
        export class List extends React.Component<ListProps, {}> {
        }

        interface ListDividerProps extends React.Props<ListDivider> {
            inset?: boolean;
        }
        export class ListDivider extends React.Component<ListDividerProps, {}> {
        }

        interface ListItemProps extends React.Props<ListItem> {
            autoGenerateNestedIndicator?: boolean;
            disableKeyboardFocus?: boolean;
            initiallyOpen?: boolean;
            innerDivStyle?: React.CSSProperties;
            insetChildren?: boolean;
            innerStyle?: React.CSSProperties;
            leftAvatar?: React.ReactElement<any>;
            leftCheckbox?: React.ReactElement<any>;
            leftIcon?: React.ReactElement<any>;
            nestedLevel?: number;
            nestedItems?: React.ReactElement<any>[];
            onKeyboardFocus?: React.FocusEventHandler;
            onNestedListToggle?: (item: ListItem) => void;
            onClick?: React.MouseEventHandler;
            rightAvatar?: React.ReactElement<any>;
            rightIcon?: React.ReactElement<any>;
            rightIconButton?: React.ReactElement<any>;
            rightToggle?: React.ReactElement<any>;
            primaryText?: React.ReactNode;
            secondaryText?: React.ReactNode;
            secondaryTextLines?: number;
            style?: React.CSSProperties;
        }
        export class ListItem extends React.Component<ListItemProps, {}> {
        }
    }

    // Old menu implementation.  Being replaced by new "menus".
    namespace Menu {
        interface ItemTapEventHandler {
            (e: TouchTapEvent, index: number, menuItem: MenuItemRequest): void;
        }

        // almost extends MenuItemProps, but certain required items are generated in Menu and not passed here.
        interface MenuItemRequest extends React.Props<MenuItem> {
            // use value from MenuItem.Types.*
            type?: string;

            text?: string;
            data?: string;
            payload?: string;
            icon?: React.ReactElement<any>;
            attribute?: string;
            number?: string;
            toggle?: boolean;
            onTouchTap?: TouchTapEventHandler;
            isDisabled?: boolean;
            style?: React.CSSProperties;

            // for MenuItems.Types.NESTED
            items?: MenuItemRequest[];

            // for custom text or payloads
            [propertyName: string]: any;
        }

        interface MenuProps extends React.Props<Menu> {
            index: number;
            text?: string;
            menuItems: MenuItemRequest[];
            zDepth?: number;
            active?: boolean;
            onItemTap?: ItemTapEventHandler;
            menuItemStyle?: React.CSSProperties;
            style?: React.CSSProperties;
        }
        export class Menu extends React.Component<MenuProps, {}> {
        }

        interface MenuItemProps extends React.Props<MenuItem> {
            index: number;
            icon?: React.ReactElement<any>;
            iconClassName?: string;
            iconRightClassName?: string;
            iconStyle?: React.CSSProperties;
            iconRightStyle?: React.CSSProperties;
            attribute?: string;
            number?: string;
            data?: string;
            toggle?: boolean;
            onTouchTap?: (e: React.MouseEvent, key: number) => void;
            onToggle?: (e: React.MouseEvent, key: number, toggled: boolean) => void;
            selected?: boolean;
            active?: boolean;
            style?: React.CSSProperties;
        }
        export class MenuItem extends React.Component<MenuItemProps, {}> {
            static Types: { LINK: string, SUBHEADER: string, NESTED: string, }
        }
    }

    export namespace Mixins {
        interface ClickAwayable extends React.Mixin<any, any> {
        }
        var ClickAwayable: ClickAwayable;

        interface WindowListenable extends React.Mixin<any, any> {
        }
        var WindowListenable: WindowListenable;

        interface StylePropable extends React.Mixin<any, any> {
        }
        var StylePropable: StylePropable

        interface StyleResizable extends React.Mixin<any, any> {
        }
        var StyleResizable: StyleResizable
    }

    interface OverlayProps extends React.Props<Overlay> {
        autoLockScrolling?: boolean;
        show?: boolean;
        transitionEnabled?: boolean;
    }
    export class Overlay extends React.Component<OverlayProps, {}> {
    }

    interface PaperProps extends React.HTMLAttributes, React.Props<Paper> {
        circle?: boolean;
        rounded?: boolean;
        transitionEnabled?: boolean;
        zDepth?: number;
    }
    export class Paper extends React.Component<PaperProps, {}> {
    }

    interface RadioButtonProps extends CommonEnhancedSwitchProps<RadioButton> {
        // <EnhancedSwitch/> is root element
        defaultChecked?: boolean;
        iconStyle?: React.CSSProperties;
        label?: string;
        labelStyle?: React.CSSProperties;
        labelPosition?: string;
        style?: React.CSSProperties;
        value?: string;

        onCheck?: (e: React.FormEvent, selected: string) => void;
    }
    export class RadioButton extends React.Component<RadioButtonProps, {}> {
    }

    interface RadioButtonGroupProps extends React.Props<RadioButtonGroup> {
        defaultSelected?: string;
        labelPosition?: string;
        name: string;
        style?: React.CSSProperties;
        valueSelected?: string;

        onChange?: (e: React.FormEvent, selected: string) => void;
    }
    export class RadioButtonGroup extends React.Component<RadioButtonGroupProps, {}> {
        getSelectedValue(): string;
        setSelectedValue(newSelectionValue: string): void;
        clearValue(): void;
    }

    interface RaisedButtonProps extends SharedEnhancedButtonProps<RaisedButton> {
        className?: string;
        disabled?: boolean;
        label?: string;
        primary?: boolean;
        secondary?: boolean;
        labelStyle?: React.CSSProperties;
        backgroundColor?: string;
        labelColor?: string;
        disabledBackgroundColor?: string;
        disabledLabelColor?: string;
        fullWidth?: boolean;
    }
    export class RaisedButton extends React.Component<RaisedButtonProps, {}> {
    }

    interface RefreshIndicatorProps extends React.Props<RefreshIndicator> {
        left: number;
        percentage?: number;
        size?: number;
        status?: string;
        top: number;
        style?: React.CSSProperties;
    }
    export class RefreshIndicator extends React.Component<RefreshIndicatorProps, {}> {
    }

    namespace Ripples {
        interface CircleRippleProps extends React.Props<CircleRipple> {
            color?: string;
            opacity?: number;
            style?: React.CSSProperties;
        }
        export class CircleRipple extends React.Component<CircleRippleProps, {}> {
        }

        interface FocusRippleProps extends React.Props<FocusRipple> {
            color?: string;
            style?: React.CSSProperties;
            innerStyle?: React.CSSProperties;
            opacity?: number;
            show?: boolean;
        }
        export class FocusRipple extends React.Component<FocusRippleProps, {}> {
        }

        interface TouchRippleProps extends React.Props<TouchRipple> {
            centerRipple?: boolean;
            color?: string;
            opacity?: number;
            style?: React.CSSProperties;
        }
        export class TouchRipple extends React.Component<TouchRippleProps, {}> {
        }
    }

    interface SelectFieldProps extends React.Props<SelectField> {
        // passed to TextField
        errorStyle?: React.CSSProperties;
        errorText?: string;
        floatingLabelText?: string;
        floatingLabelStyle?: React.CSSProperties;
        fullWidth?: boolean;
        hintText?: string | React.ReactElement<any>;

        // passed to DropDownMenu
        displayMember?: string;
        valueMember?: string;
        autoWidth?: boolean;
        menuItems: Menu.MenuItemRequest[];
        menuItemStyle?: React.CSSProperties;
        selectedIndex?: number;
        underlineStyle?: React.CSSProperties;
        underlineFocusStyle?: React.CSSProperties;
        iconStyle?: React.CSSProperties;
        labelStyle?: React.CSSProperties;
        style?: React.CSSProperties;
        disabled?: boolean;
        valueLink?: ReactLink<any>;
        value?: number;

        onChange?: Menu.ItemTapEventHandler;
        onEnterKeyDown?: React.KeyboardEventHandler;

        // own properties
        selectFieldRoot?: string;
        multiLine?: boolean;
        type?: string;
        rows?: number;
        inputStyle?: React.CSSProperties;
    }
    export class SelectField extends React.Component<SelectFieldProps, {}> {
    }

    interface SliderProps extends React.Props<Slider> {
        name: string;
        defaultValue?: number;
        description?: string;
        error?: string;
        max?: number;
        min?: number;
        required?: boolean;
        step?: number;
        value?: number;
        style?: React.CSSProperties;
    }
    export class Slider extends React.Component<SliderProps, {}> {
    }

    interface SvgIconProps extends React.Props<SvgIcon> {
        color?: string;
        hoverColor?: string;
        viewBox?: string;
        style?: React.CSSProperties;
    }
    export class SvgIcon extends React.Component<SvgIconProps, {}> {
    }

    export namespace Icons {
        export import NavigationMenu = __MaterialUI.NavigationMenu;
        export import NavigationChevronLeft = __MaterialUI.NavigationChevronLeft;
        export import NavigationChevronRight = __MaterialUI.NavigationChevronRight;
    }

    interface NavigationMenuProps extends React.Props<NavigationMenu> {
    }
    export class NavigationMenu extends React.Component<NavigationMenuProps, {}> {
    }

    interface NavigationChevronLeftProps extends React.Props<NavigationChevronLeft> {
    }
    export class NavigationChevronLeft extends React.Component<NavigationChevronLeftProps, {}> {
    }

    interface NavigationChevronRightProps extends React.Props<NavigationChevronRight> {
    }
    export class NavigationChevronRight extends React.Component<NavigationChevronRightProps, {}> {
    }

    export namespace Styles {
        interface AutoPrefix {
            all(styles: React.CSSProperties): React.CSSProperties;
            set(style: React.CSSProperties, key: string, value: string | number): void;
            single(key: string): string;
            singleHyphened(key: string): string;
        }
        export var AutoPrefix: AutoPrefix;

        interface Spacing {
            iconSize?: number;

            desktopGutter?: number;
            desktopGutterMore?: number;
            desktopGutterLess?: number;
            desktopGutterMini?: number;
            desktopKeylineIncrement?: number;
            desktopDropDownMenuItemHeight?: number;
            desktopDropDownMenuFontSize?: number;
            desktopLeftNavMenuItemHeight?: number;
            desktopSubheaderHeight?: number;
            desktopToolbarHeight?: number;
        }
        export var Spacing: Spacing;

        interface ThemePalette {
            primary1Color?: string;
            primary2Color?: string;
            primary3Color?: string;
            accent1Color?: string;
            accent2Color?: string;
            accent3Color?: string;
            textColor?: string;
            canvasColor?: string;
            borderColor?: string;
            disabledColor?: string;
            alternateTextColor?: string;
        }
        interface MuiTheme {
            rawTheme: RawTheme;
            static: boolean;
            appBar?: {
                color?: string,
                textColor?: string,
                height?: number
            },
            avatar?: {
                borderColor?: string;
            }
            button?: {
                height?: number,
                minWidth?: number,
                iconButtonSize?: number
            },
            checkbox?: {
                boxColor?: string,
                checkedColor?: string,
                requiredColor?: string,
                disabledColor?: string,
                labelColor?: string,
                labelDisabledColor?: string
            },
            datePicker?: {
                color?: string,
                textColor?: string,
                calendarTextColor?: string,
                selectColor?: string,
                selectTextColor?: string,
            },
            dropDownMenu?: {
                accentColor?: string,
            },
            flatButton?: {
                color?: string,
                textColor?: string,
                primaryTextColor?: string,
                secondaryTextColor?: string,
                disabledColor?: string
            },
            floatingActionButton?: {
                buttonSize?: number,
                miniSize?: number,
                color?: string,
                iconColor?: string,
                secondaryColor?: string,
                secondaryIconColor?: string,
                disabledColor?: string,
                disabledTextColor?: string
            },
            inkBar?: {
                backgroundColor?: string;
            },
            leftNav?: {
                width?: number,
                color?: string,
            },
            listItem?: {
                nestedLevelDepth?: number;
            },
            menu?: {
                backgroundColor?: string,
                containerBackgroundColor?: string,
            },
            menuItem?: {
                dataHeight?: number,
                height?: number,
                hoverColor?: string,
                padding?: number,
                selectedTextColor?: string,
            },
            menuSubheader?: {
                padding?: number,
                borderColor?: string,
                textColor?: string,
            },
            paper?: {
                backgroundColor?: string,
            },
            radioButton?: {
                borderColor?: string,
                backgroundColor?: string,
                checkedColor?: string,
                requiredColor?: string,
                disabledColor?: string,
                size?: number,
                labelColor?: string,
                labelDisabledColor?: string
            },
            raisedButton?: {
                color?: string,
                textColor?: string,
                primaryColor?: string,
                primaryTextColor?: string,
                secondaryColor?: string,
                secondaryTextColor?: string,
                disabledColor?: string,
                disabledTextColor?: string
            },
            refreshIndicator?: {
                strokeColor?: string;
                loadingStrokeColor?: string;
            };
            slider?: {
                trackSize?: number,
                trackColor?: string,
                trackColorSelected?: string,
                handleSize?: number,
                handleSizeActive?: number,
                handleSizeDisabled?: number,
                handleColorZero?: string,
                handleFillColor?: string,
                selectionColor?: string,
                rippleColor?: string,
            },
            snackbar?: {
                textColor?: string,
                backgroundColor?: string,
                actionColor?: string,
            },
            table?: {
                backgroundColor?: string;
            };
            tableHeader?: {
                borderColor?: string;
            };
            tableHeaderColumn?: {
                textColor?: string;
            };
            tableFooter?: {
                borderColor?: string;
                textColor?: string;
            };
            tableRow?: {
                hoverColor?: string;
                stripeColor?: string;
                selectedColor?: string;
                textColor?: string;
                borderColor?: string;
            };
            tableRowColumn?: {
                height?: number;
                spacing?: number;
            };
            timePicker?: {
                color?: string;
                textColor?: string;
                accentColor?: string;
                clockColor?: string;
                selectColor?: string;
                selectTextColor?: string;
            };
            toggle?: {
                thumbOnColor?: string,
                thumbOffColor?: string,
                thumbDisabledColor?: string,
                thumbRequiredColor?: string,
                trackOnColor?: string,
                trackOffColor?: string,
                trackDisabledColor?: string,
                trackRequiredColor?: string,
                labelColor?: string,
                labelDisabledColor?: string
            },
            toolbar?: {
                backgroundColor?: string,
                height?: number,
                titleFontSize?: number,
                iconColor?: string,
                separatorColor?: string,
                menuHoverColor?: string,
            };
            tabs?: {
                backgroundColor?: string;
            };
            textField?: {
                textColor?: string;
                hintColor?: string;
                floatingLabelColor?: string;
                disabledTextColor?: string;
                errorColor?: string;
                focusColor?: string;
                backgroundColor?: string;
                borderColor?: string;
            };
            isRtl: boolean;
        }

        interface RawTheme {
            spacing: Spacing;
            fontFamily?: string;
            palette: ThemePalette;
        }

        export function ThemeDecorator(muiTheme: Styles.MuiTheme): <P>(Component: React.ComponentClass<P>) => React.ComponentClass<P>;

        interface ThemeManager {
            getMuiTheme(rawTheme: RawTheme): MuiTheme;
            modifyRawThemeSpacing(muiTheme: MuiTheme, newSpacing: Spacing): MuiTheme;
            modifyRawThemePalette(muiTheme: MuiTheme, newPaletteKeys: ThemePalette): MuiTheme;
            modifyRawThemeFontFamily(muiTheme: MuiTheme, newFontFamily: string): MuiTheme;
        }
        export var ThemeManager: ThemeManager;

        interface Transitions {
            easeOut(duration?: string, property?: string | string[], delay?: string, easeFunction?: string): string;
            create(duration?: string, property?: string, delay?: string, easeFunction?: string): string;
            easeOutFunction: string;
            easeInOutFunction: string;
        }
        export var Transitions: Transitions;

        interface Typography {
            textFullBlack: string;
            textDarkBlack: string;
            textLightBlack: string;
            textMinBlack: string;
            textFullWhite: string;
            textDarkWhite: string;
            textLightWhite: string;

            // font weight
            fontWeightLight: number;
            fontWeightNormal: number;
            fontWeightMedium: number;

            fontStyleButtonFontSize: number;
        }
        export var Typography: Typography;

        export var DarkRawTheme: RawTheme;
        export var LightRawTheme: RawTheme;
    }

    interface SnackbarProps extends React.Props<Snackbar> {
        message: string;
        action?: string;
        autoHideDuration?: number;
        onActionTouchTap?: React.TouchEventHandler;
        onShow?: () => void;
        onDismiss?: () => void;
        openOnMount?: boolean;
        style?: React.CSSProperties;
    }
    export class Snackbar extends React.Component<SnackbarProps, {}> {
    }

    namespace Tabs {
        interface TabProps extends React.Props<Tab> {
            label?: any;
            value?: string;
            selected?: boolean;
            width?: string;
            style?: React.CSSProperties;

            // Called by Tabs component
            onActive?: (tab: Tab) => void;

            onTouchTap?: (value: string, e: TouchTapEvent, tab: Tab) => void;
        }
        export class Tab extends React.Component<TabProps, {}> {
        }

        interface TabsProps extends React.Props<Tabs> {
            contentContainerStyle?: React.CSSProperties;
            initialSelectedIndex?: number;
            inkBarStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            tabItemContainerStyle?: React.CSSProperties;
            tabWidth?: number;
            value?: string | number;
            tabTemplate?: __React.ComponentClass<any>;

            onChange?: (value: string | number, e: React.FormEvent, tab: Tab) => void;
        }
        export class Tabs extends React.Component<TabsProps, {}> {
        }
    }

    namespace Table {
        interface TableProps extends React.Props<Table> {
            allRowsSelected?: boolean;
            fixedFooter?: boolean;
            fixedHeader?: boolean;
            height?: string;
            multiSelectable?: boolean;
            onCellClick?: (row: number, column: number) => void;
            onCellHover?: (row: number, column: number) => void;
            onCellHoverExit?: (row: number, column: number) => void;
            onRowHover?: (row: number) => void;
            onRowHoverExit?: (row: number) => void;
            onRowSelection?: (selectedRows: number[]) => void;
            selectable?: boolean;
            style?: React.CSSProperties;
        }
        export class Table extends React.Component<TableProps, {}> {
        }

        interface TableBodyProps extends React.Props<TableBody> {
            allRowsSelected?: boolean;
            deselectOnClickaway?: boolean;
            displayRowCheckbox?: boolean;
            multiSelectable?: boolean;
            onCellClick?: (row: number, column: number) => void;
            onCellHover?: (row: number, column: number) => void;
            onCellHoverExit?: (row: number, column: number) => void;
            onRowHover?: (row: number) => void;
            onRowHoverExit?: (row: number) => void;
            onRowSelection?: (selectedRows: number[]) => void;
            preScanRows?: boolean;
            selectable?: boolean;
            showRowHover?: boolean;
            stripedRows?: boolean;
            style?: React.CSSProperties;
        }
        export class TableBody extends React.Component<TableBodyProps, {}> {
        }

        interface TableFooterProps extends React.Props<TableFooter> {
            adjustForCheckbox?: boolean;
            style?: React.CSSProperties;
        }
        export class TableFooter extends React.Component<TableFooterProps, {}> {
        }

        interface TableHeaderProps extends React.Props<TableHeader> {
            adjustForCheckbox?: boolean;
            displaySelectAll?: boolean;
            enableSelectAll?: boolean;
            onSelectAll?: (event: React.MouseEvent) => void;
            selectAllSelected?: boolean;
            style?: React.CSSProperties;
        }
        export class TableHeader extends React.Component<TableHeaderProps, {}> {
        }

        interface TableHeaderColumnProps extends React.Props<TableHeaderColumn> {
            columnNumber?: number;
            onClick?: (e: React.MouseEvent, column: number) => void;
            tooltip?: string;
            tooltipStyle?: React.CSSProperties;
            style?: React.CSSProperties;
        }
        export class TableHeaderColumn extends React.Component<TableHeaderColumnProps, {}> {
        }

        interface TableRowProps extends React.Props<TableRow> {
            displayBorder?: boolean;
            hoverable?: boolean;
            onCellClick?: (e: React.MouseEvent, row: number, column: number) => void;
            onCellHover?: (e: React.MouseEvent, row: number, column: number) => void;
            onCellHoverExit?: (e: React.MouseEvent, row: number, column: number) => void;
            onRowClick?: (e: React.MouseEvent, row: number) => void;
            onRowHover?: (e: React.MouseEvent, row: number) => void;
            onRowHoverExit?: (e: React.MouseEvent, row: number) => void;
            rowNumber?: number;
            selectable?: boolean;
            selected?: boolean;
            striped?: boolean;
            style?: React.CSSProperties;
        }
        export class TableRow extends React.Component<TableRowProps, {}> {
        }

        interface TableRowColumnProps extends React.Props<TableRowColumn> {
            columnNumber?: number;
            colSpan?: number;
            hoverable?: boolean;
            onClick?: React.MouseEventHandler;
            onHover?: (e: React.MouseEvent, column: number) => void;
            onHoverExit?: (e: React.MouseEvent, column: number) => void;
            style?: React.CSSProperties;
        }
        export class TableRowColumn extends React.Component<TableRowColumnProps, {}> {
        }
    }

    interface ThemeWrapperProps extends React.Props<ThemeWrapper> {
        theme: Styles.MuiTheme;
    }
    export class ThemeWrapper extends React.Component<ThemeWrapperProps, {}> {
    }

    interface ToggleProps extends CommonEnhancedSwitchProps<Toggle> {
        // <EnhancedSwitch/> is root element

        elementStyle?: React.CSSProperties;
        labelStyle?: React.CSSProperties;
        onToggle?: (e: React.MouseEvent, isInputChecked: boolean) => void;
        toggled?: boolean;
        defaultToggled?: boolean;
    }
    export class Toggle extends React.Component<ToggleProps, {}> {
        isToggled(): boolean;
        setToggled(newToggledValue: boolean): void;
    }

    interface TimePickerProps extends React.Props<TimePicker> {
        defaultTime?: Date;
        format?: string;
        pedantic?: boolean;
        style?: __React.CSSProperties;
        textFieldStyle?: __React.CSSProperties;
        autoOk?: boolean;
        openDialog?: () => void;
        onFocus?: React.FocusEventHandler;
        onTouchTap?: TouchTapEventHandler;
        onChange?: (e: any, time: Date) => void;
        onShow?: () => void;
        onDismiss?: () => void;
    }
    export class TimePicker extends React.Component<TimePickerProps, {}> {
    }

    interface TextFieldProps extends React.Props<TextField> {
        errorStyle?: React.CSSProperties;
        errorText?: string;
        floatingLabelText?: string;
        floatingLabelStyle?: React.CSSProperties;
        fullWidth?: boolean;
        hintText?: string | React.ReactElement<any>;
        id?: string;
        inputStyle?: React.CSSProperties;
        multiLine?: boolean;
        onEnterKeyDown?: React.KeyboardEventHandler;
        style?: React.CSSProperties;
        rows?: number,
        underlineStyle?: React.CSSProperties;
        underlineFocusStyle?: React.CSSProperties;
        underlineDisabledStyle?: React.CSSProperties;
        type?: string;
        hintStyle?: React.CSSProperties;

        disabled?: boolean;
        isRtl?: boolean;
        value?: string;
        defaultValue?: string;
        valueLink?: ReactLink<string>;

        onBlur?: React.FocusEventHandler;
        onChange?: React.FormEventHandler;
        onFocus?: React.FocusEventHandler;
        onKeyDown?: React.KeyboardEventHandler;
    }
    export class TextField extends React.Component<TextFieldProps, {}> {
        blur(): void;
        clearValue(): void;
        focus(): void;
        getValue(): string;
        setErrorText(newErrorText: string): void;
        setValue(newValue: string): void;
    }

    namespace Toolbar {
        interface ToolbarProps extends React.Props<Toolbar> {
            style?: React.CSSProperties;
        }
        export class Toolbar extends React.Component<ToolbarProps, {}> {
        }

        interface ToolbarGroupProps extends React.Props<ToolbarGroup> {
            float?: string;
            style?: React.CSSProperties;
        }
        export class ToolbarGroup extends React.Component<ToolbarGroupProps, {}> {
        }

        interface ToolbarSeparatorProps extends React.Props<ToolbarSeparator> {
            style?: React.CSSProperties;
        }
        export class ToolbarSeparator extends React.Component<ToolbarSeparatorProps, {}> {
        }

        interface ToolbarTitleProps extends React.HTMLAttributes, React.Props<ToolbarTitle> {
            text?: string;
            style?: React.CSSProperties;
        }
        export class ToolbarTitle extends React.Component<ToolbarTitleProps, {}> {
        }
    }

    interface TooltipProps extends React.Props<Tooltip> {
        label: string;
        show?: boolean;
        touch?: boolean;
        verticalPosition?: string;
        horizontalPosition?: string;
    }
    export class Tooltip extends React.Component<TooltipProps, {}> {
    }

    export namespace Utils {
        interface ContrastLevel {
            range: [number, number];
            color: string;
        }
        interface ColorManipulator {
            fade(color: string, amount: string | number): string;
            lighten(color: string, amount: string | number): string;
            darken(color: string, amount: string | number): string;
            contrastRatio(background: string, foreground: string): number;
            contrastRatioLevel(background: string, foreground: string): ContrastLevel;
        }
        export var ColorManipulator: ColorManipulator;

        interface CssEvent {
            transitionEndEventName(): string;
            animationEndEventName(): string;
            onTransitionEnd(el: Element, callback: () => void): void;
            onAnimationEnd(el: Element, callback: () => void): void;
        }
        export var CssEvent: CssEvent;

        interface Dom {
            isDescendant(parent: Node, child: Node): boolean;
            offset(el: Element): { top: number, left: number };
            getStyleAttributeAsNumber(el: HTMLElement, attr: string): number;
            addClass(el: Element, className: string): void;
            removeClass(el: Element, className: string): void;
            hasClass(el: Element, className: string): boolean;
            toggleClass(el: Element, className: string): void;
            forceRedraw(el: HTMLElement): void;
            withoutTransition(el: HTMLElement, callback: () => void): void;
        }
        export var Dom: Dom;

        interface Events {
            once(el: Element, type: string, callback: EventListener): void;
            on(el: Element, type: string, callback: EventListener): void;
            off(el: Element, type: string, callback: EventListener): void;
            isKeyboard(e: Event): boolean;
        }
        export var Events: Events;

        function Extend<T, S1>(base: T, override: S1): (T & S1);

        interface ImmutabilityHelper {
            merge(base: any, ...args: any[]): any;
            mergeItem(obj: any, key: any, newValueObject: any): any;
            push(array: any[], obj: any): any[];
            shift(array: any[]): any[];
        }
        export var ImmutabilityHelper: ImmutabilityHelper;

        interface KeyCode {
            DOWN: number;
            ESC: number;
            ENTER: number;
            LEFT: number;
            RIGHT: number;
            SPACE: number;
            TAB: number;
            UP: number;
        }
        var KeyCode: KeyCode;

        interface KeyLine {
            Desktop: {
                GUTTER: number;
                GUTTER_LESS: number;
                INCREMENT: number;
                MENU_ITEM_HEIGHT: number;
            };

            getIncrementalDim(dim: number): number;
        }
        export var KeyLine: KeyLine;

        interface UniqueId {
            generate(): string;
        }
        export var UniqueId: UniqueId;

        interface Styles {
            mergeAndPrefix(base: any, ...args: any[]): React.CSSProperties;
        }
        export var Styles: Styles;
    }

    // New menus available only through requiring directly to the end file
    namespace Menus {
        interface IconMenuProps extends React.Props<IconMenu> {
            closeOnItemTouchTap?: boolean;
            desktop?: boolean;
            iconButtonElement: React.ReactElement<IconButtonProps>;
            openDirection?: string;
            menuStyle?: React.CSSProperties;
            multiple?: boolean;
            value?: string | Array<string>;
            width?: string | number;
            touchTapCloseDelay?: number;
            style?: React.CSSProperties;

            onKeyboardFocus?: React.FocusEventHandler;
            onItemTouchTap?: (e: TouchTapEvent, item: React.ReactElement<any>) => void;
            onChange?: (e: React.FormEvent, value: string | Array<string>) => void;
        }
        export class IconMenu extends React.Component<IconMenuProps, {}> {
        }

        interface MenuProps extends React.Props<Menu> {
            animated?: boolean;
            autoWidth?: boolean;
            desktop?: boolean;
            listStyle?: React.CSSProperties;
            maxHeight?: number;
            multiple?: boolean;
            openDirection?: string;
            value?: string | Array<string>;
            width?: string | number;
            zDepth?: number;
            style?: React.CSSProperties;
        }
        export class Menu extends React.Component<MenuProps, {}>{
        }

        interface MenuItemProps extends React.Props<MenuItem> {
            checked?: boolean;
            desktop?: boolean;
            disabled?: boolean;
            innerDivStyle?: React.CSSProperties;
            insetChildren?: boolean;
            leftIcon?: React.ReactElement<any>;
            primaryText?: string | React.ReactElement<any>;
            rightIcon?: React.ReactElement<any>;
            secondaryText?: React.ReactNode;
            value?: string;
            style?: React.CSSProperties;

            onEscKeyDown?: React.KeyboardEventHandler;
            onItemTouchTap?: (e: TouchTapEvent, item: React.ReactElement<any>) => void;
            onChange?: (e: React.FormEvent, value: string) => void;
        }
        export class MenuItem extends React.Component<MenuItemProps, {}>{
        }

        interface MenuDividerProps extends React.Props<MenuDivider> {
            inset?: boolean;
            style?: React.CSSProperties;
        }
        export class MenuDivider extends React.Component<MenuDividerProps, {}>{
        }
    }

    namespace GridList {

        interface GridListProps extends React.Props<GridList> {
            cols?: number;
            padding?: number;
            cellHeight?: number;
            style?: React.CSSProperties;
        }

        export class GridList extends React.Component<GridListProps, {}>{
        }

        interface GridTileProps extends React.Props<GridTile> {
            title?: string;
            subtitle?: __React.ReactNode;
            titlePosition?: string; //"top"|"bottom"
            titleBackground?: string;
            actionIcon?: __React.ReactElement<any>;
            actionPosition?: string; //"left"|"right"
            cols?: number;
            rows?: number;
            rootClass?: string | __React.Component<any,any>;
            style?: React.CSSProperties;
        }

        export class GridTile extends React.Component<GridTileProps, {}>{
        }

    }
}    // __MaterialUI

declare module 'material-ui/lib/app-bar' {
    import AppBar = __MaterialUI.AppBar;
    export = AppBar;
}

declare module 'material-ui/lib/app-canvas' {
    import AppCanvas = __MaterialUI.AppCanvas;
    export = AppCanvas;
}

declare module 'material-ui/lib/avatar' {
    import Avatar = __MaterialUI.Avatar;
    export = Avatar;
}

declare module "material-ui/lib/badge" {
    import Badge = __MaterialUI.Badge;
    export = Badge;
}

declare module 'material-ui/lib/before-after-wrapper' {
    import BeforeAfterWrapper = __MaterialUI.BeforeAfterWrapper;
    export = BeforeAfterWrapper;
}

declare module 'material-ui/lib/card/card' {
    import Card = __MaterialUI.Card.Card;
    export = Card;
}

declare module 'material-ui/lib/card/card-actions' {
    import CardActions = __MaterialUI.Card.CardActions;
    export = CardActions;
}

declare module 'material-ui/lib/card/card-expandable' {
    import CardExpandable = __MaterialUI.Card.CardExpandable;
    export = CardExpandable;
}

declare module 'material-ui/lib/card/card-header' {
    import CardHeader = __MaterialUI.Card.CardHeader;
    export = CardHeader;
}

declare module 'material-ui/lib/card/card-media' {
    import CardMedia = __MaterialUI.Card.CardMedia;
    export = CardMedia;
}

declare module 'material-ui/lib/card/card-text' {
    import CardText = __MaterialUI.Card.CardText;
    export = CardText;
}

declare module 'material-ui/lib/card/card-title' {
    import CardTitle = __MaterialUI.Card.CardTitle;
    export = CardTitle;
}

declare module 'material-ui/lib/checkbox' {
    import Checkbox = __MaterialUI.Checkbox;
    export = Checkbox;
}

declare module 'material-ui/lib/circular-progress' {
    import CircularProgress = __MaterialUI.CircularProgress;
    export = CircularProgress;
}

declare module 'material-ui/lib/clearfix' {
    import ClearFix = __MaterialUI.ClearFix;
    export = ClearFix;
}

declare module 'material-ui/lib/date-picker/date-picker' {
    import DatePicker = __MaterialUI.DatePicker.DatePicker;
    export = DatePicker;
}

declare module 'material-ui/lib/date-picker/date-picker-dialog' {
    import DatePickerDialog = __MaterialUI.DatePicker.DatePickerDialog;
    export = DatePickerDialog;
}

declare module 'material-ui/lib/dialog' {
    import Dialog = __MaterialUI.Dialog;
    export = Dialog;
}

declare module 'material-ui/lib/drop-down-icon' {
    import DropDownIcon = __MaterialUI.DropDownIcon;
    export = DropDownIcon;
}

declare module 'material-ui/lib/drop-down-menu' {
    import DropDownMenu = __MaterialUI.DropDownMenu;
    export = DropDownMenu;
}

declare module 'material-ui/lib/enhanced-button' {
    import EnhancedButton = __MaterialUI.EnhancedButton;
    export = EnhancedButton;
}

declare module 'material-ui/lib/flat-button' {
    import FlatButton = __MaterialUI.FlatButton;
    export = FlatButton;
}

declare module 'material-ui/lib/floating-action-button' {
    import FloatingActionButton = __MaterialUI.FloatingActionButton;
    export = FloatingActionButton;
}

declare module 'material-ui/lib/font-icon' {
    import FontIcon = __MaterialUI.FontIcon;
    export = FontIcon;
}

declare module 'material-ui/lib/icon-button' {
    import IconButton = __MaterialUI.IconButton;
    export = IconButton;
}

declare module 'material-ui/lib/left-nav' {
    import LeftNav = __MaterialUI.LeftNav;
    export = LeftNav;
}

declare module 'material-ui/lib/linear-progress' {
    import LinearProgress = __MaterialUI.LinearProgress;
    export = LinearProgress;
}

declare module 'material-ui/lib/lists/list' {
    import List = __MaterialUI.Lists.List;
    export = List;
}

declare module 'material-ui/lib/lists/list-divider' {
    import ListDivider = __MaterialUI.Lists.ListDivider;
    export = ListDivider;
}

declare module 'material-ui/lib/lists/list-item' {
    import ListItem = __MaterialUI.Lists.ListItem;
    export = ListItem;
}

declare module 'material-ui/lib/menu/menu' {
    import Menu = __MaterialUI.Menu.Menu;
    export = Menu;
}

declare module 'material-ui/lib/menu/menu-item' {
    import MenuItem = __MaterialUI.Menu.MenuItem;
    export = MenuItem;
}

declare module 'material-ui/lib/mixins/' {
    export import ClickAwayable = __MaterialUI.Mixins.ClickAwayable; // require('material-ui/lib/mixins/click-awayable');
    export import WindowListenable = __MaterialUI.Mixins.WindowListenable; // require('material-ui/lib/mixins/window-listenable');
    export import StylePropable = __MaterialUI.Mixins.StylePropable; // require('material-ui/lib/mixins/style-propable');
    export import StyleResizable = __MaterialUI.Mixins.StyleResizable; // require('material-ui/lib/mixins/style-resizable');
}

declare module 'material-ui/lib/mixins/click-awayable' {
    import ClickAwayable = __MaterialUI.Mixins.ClickAwayable;
    export = ClickAwayable;
}

declare module 'material-ui/lib/mixins/window-listenable' {
    import WindowListenable = __MaterialUI.Mixins.WindowListenable;
    export = WindowListenable;
}

declare module 'material-ui/lib/mixins/style-propable' {
    import StylePropable = __MaterialUI.Mixins.StylePropable;
    export = StylePropable;
}

declare module 'material-ui/lib/mixins/style-resizable' {
    import StyleResizable = __MaterialUI.Mixins.StyleResizable;
    export = StyleResizable;
}

declare module 'material-ui/lib/overlay' {
    import Overlay = __MaterialUI.Overlay;
    export = Overlay;
}

declare module 'material-ui/lib/paper' {
    import Paper = __MaterialUI.Paper;
    export = Paper;
}

declare module 'material-ui/lib/radio-button' {
    import RadioButton = __MaterialUI.RadioButton;
    export = RadioButton;
}

declare module 'material-ui/lib/radio-button-group' {
    import RadioButtonGroup = __MaterialUI.RadioButtonGroup;
    export = RadioButtonGroup;
}

declare module 'material-ui/lib/raised-button' {
    import RaisedButton = __MaterialUI.RaisedButton;
    export = RaisedButton;
}

declare module 'material-ui/lib/refresh-indicator' {
    import RefreshIndicator = __MaterialUI.RefreshIndicator;
    export = RefreshIndicator;
}

declare module 'material-ui/lib/ripples/' {
    export import CircleRipple = __MaterialUI.Ripples.CircleRipple;
    export import FocusRipple = __MaterialUI.Ripples.FocusRipple;
    export import TouchRipple = __MaterialUI.Ripples.TouchRipple;
}

declare module 'material-ui/lib/select-field' {
    import SelectField = __MaterialUI.SelectField;
    export = SelectField;
}

declare module 'material-ui/lib/slider' {
    import Slider = __MaterialUI.Slider;
    export = Slider;
}

declare module 'material-ui/lib/svg-icon' {
    import SvgIcon = __MaterialUI.SvgIcon;
    export = SvgIcon;
}

declare module 'material-ui/lib/svg-icons/navigation/menu' {
    import NavigationMenu = __MaterialUI.NavigationMenu;
    export = NavigationMenu;
}

declare module 'material-ui/lib/svg-icons/navigation/chevron-left' {
    import NavigationChevronLeft = __MaterialUI.NavigationChevronLeft;
    export = NavigationChevronLeft;
}

declare module 'material-ui/lib/svg-icons/navigation/chevron-right' {
    import NavigationChevronRight = __MaterialUI.NavigationChevronRight;
    export = NavigationChevronRight;
}

declare module 'material-ui/lib/styles/' {
    export import AutoPrefix = __MaterialUI.Styles.AutoPrefix; // require('material-ui/lib/styles/auto-prefix');
    export import Colors = __MaterialUI.Styles.Colors; // require('material-ui/lib/styles/colors');
    export import Spacing = require('material-ui/lib/styles/spacing');
    export import ThemeManager = __MaterialUI.Styles.ThemeManager; // require('material-ui/lib/styles/theme-manager');
    export import Transitions = __MaterialUI.Styles.Transitions; // require('material-ui/lib/styles/transitions');
    export import Typography = __MaterialUI.Styles.Typography; // require('material-ui/lib/styles/typography');
    export import LightRawTheme = __MaterialUI.Styles.LightRawTheme; // require('material-ui/lib/styles/raw-themes/light-raw-theme'),
    export import DarkRawTheme = __MaterialUI.Styles.DarkRawTheme; // require('material-ui/lib/styles/raw-themes/dark-raw-theme'),
    export import ThemeDecorator = __MaterialUI.Styles.ThemeDecorator; //require('material-ui/lib/styles/theme-decorator');
}

declare module 'material-ui/lib/styles/auto-prefix' {
    import AutoPrefix = __MaterialUI.Styles.AutoPrefix;
    export = AutoPrefix;
}

declare module 'material-ui/lib/styles/spacing' {
    type Spacing = __MaterialUI.Styles.Spacing;
    var Spacing: Spacing;
    export = Spacing;
}

declare module 'material-ui/lib/styles/theme-manager' {
    import ThemeManager = __MaterialUI.Styles.ThemeManager;
    export = ThemeManager;
}

declare module 'material-ui/lib/styles/transitions' {
    import Transitions = __MaterialUI.Styles.Transitions;
    export = Transitions;
}

declare module 'material-ui/lib/styles/typography' {
    import Typography = __MaterialUI.Styles.Typography;
    export = Typography;
}

declare module 'material-ui/lib/styles/raw-themes/light-raw-theme' {
    import LightRawTheme = __MaterialUI.Styles.LightRawTheme;
    export = LightRawTheme;
}

declare module 'material-ui/lib/styles/raw-themes/dark-raw-theme' {
    import DarkRawTheme = __MaterialUI.Styles.DarkRawTheme;
    export = DarkRawTheme;
}

declare module 'material-ui/lib/styles/theme-decorator' {
    import ThemeDecorator = __MaterialUI.Styles.ThemeDecorator;
    export = ThemeDecorator;
}


declare module 'material-ui/lib/snackbar' {
    import Snackbar = __MaterialUI.Snackbar;
    export = Snackbar;
}

declare module 'material-ui/lib/tabs/tab' {
    import Tab = __MaterialUI.Tabs.Tab;
    export = Tab;
}

declare module 'material-ui/lib/tabs/tabs' {
    import Tabs = __MaterialUI.Tabs.Tabs;
    export = Tabs;
}

declare module 'material-ui/lib/table/table' {
    import Table = __MaterialUI.Table.Table;
    export = Table;
}

declare module 'material-ui/lib/table/table-body' {
    import TableBody = __MaterialUI.Table.TableBody;
    export = TableBody;
}

declare module 'material-ui/lib/table/table-footer' {
    import TableFooter = __MaterialUI.Table.TableFooter;
    export = TableFooter;
}

declare module 'material-ui/lib/table/table-header' {
    import TableHeader = __MaterialUI.Table.TableHeader;
    export = TableHeader;
}

declare module 'material-ui/lib/table/table-header-column' {
    import TableHeaderColumn = __MaterialUI.Table.TableHeaderColumn;
    export = TableHeaderColumn;
}

declare module 'material-ui/lib/table/table-row' {
    import TableRow = __MaterialUI.Table.TableRow;
    export = TableRow;
}

declare module 'material-ui/lib/table/table-row-column' {
    import TableRowColumn = __MaterialUI.Table.TableRowColumn;
    export = TableRowColumn;
}

declare module 'material-ui/lib/theme-wrapper' {
    import ThemeWrapper = __MaterialUI.ThemeWrapper;
    export = ThemeWrapper;
}

declare module 'material-ui/lib/toggle' {
    import Toggle = __MaterialUI.Toggle;
    export = Toggle;
}

declare module 'material-ui/lib/time-picker' {
    import TimePicker = __MaterialUI.TimePicker;
    export = TimePicker;
}

declare module 'material-ui/lib/text-field' {
    import TextField = __MaterialUI.TextField;
    export = TextField;
}

declare module 'material-ui/lib/toolbar/toolbar' {
    import Toolbar = __MaterialUI.Toolbar.Toolbar;
    export = Toolbar;
}

declare module 'material-ui/lib/toolbar/toolbar-group' {
    import ToolbarGroup = __MaterialUI.Toolbar.ToolbarGroup;
    export = ToolbarGroup;
}

declare module 'material-ui/lib/toolbar/toolbar-separator' {
    import ToolbarSeparator = __MaterialUI.Toolbar.ToolbarSeparator;
    export = ToolbarSeparator;
}

declare module 'material-ui/lib/toolbar/toolbar-title' {
    import ToolbarTitle = __MaterialUI.Toolbar.ToolbarTitle;
    export = ToolbarTitle;
}

declare module 'material-ui/lib/tooltip' {
    import Tooltip = __MaterialUI.Tooltip;
    export = Tooltip;
}

declare module 'material-ui/lib/utils/' {
    export import ColorManipulator = __MaterialUI.Utils.ColorManipulator; // require('material-ui/lib/utils/color-manipulator');
    export import CssEvent = __MaterialUI.Utils.CssEvent; // require('material-ui/lib/utils/css-event');
    export import Dom = __MaterialUI.Utils.Dom; // require('material-ui/lib/utils/dom');
    export import Events = __MaterialUI.Utils.Events; // require('material-ui/lib/utils/events');
    export import Extend = __MaterialUI.Utils.Extend; // require('material-ui/lib/utils/extend');
    export import ImmutabilityHelper = __MaterialUI.Utils.ImmutabilityHelper; // require('material-ui/lib/utils/immutability-helper');
    export import KeyCode = __MaterialUI.Utils.KeyCode; // require('material-ui/lib/utils/key-code');
    export import KeyLine = __MaterialUI.Utils.KeyLine; // require('material-ui/lib/utils/key-line');
    export import UniqueId = __MaterialUI.Utils.UniqueId; // require('material-ui/lib/utils/unique-id');
    export import Styles = __MaterialUI.Utils.Styles; // require('material-ui/lib/utils/styles');
}

declare module 'material-ui/lib/utils/color-manipulator' {
    import ColorManipulator = __MaterialUI.Utils.ColorManipulator;
    export = ColorManipulator;
}

declare module 'material-ui/lib/utils/css-event' {
    import CssEvent = __MaterialUI.Utils.CssEvent;
    export = CssEvent;
}

declare module 'material-ui/lib/utils/dom' {
    import Dom = __MaterialUI.Utils.Dom;
    export = Dom;
}

declare module 'material-ui/lib/utils/events' {
    import Events = __MaterialUI.Utils.Events;
    export = Events;
}

declare module 'material-ui/lib/utils/extend' {
    import Extend = __MaterialUI.Utils.Extend;
    export = Extend;
}

declare module 'material-ui/lib/utils/immutability-helper' {
    import ImmutabilityHelper = __MaterialUI.Utils.ImmutabilityHelper;
    export = ImmutabilityHelper;
}

declare module 'material-ui/lib/utils/key-code' {
    import KeyCode = __MaterialUI.Utils.KeyCode;
    export = KeyCode;
}

declare module 'material-ui/lib/utils/key-line' {
    import KeyLine = __MaterialUI.Utils.KeyLine;
    export = KeyLine;
}

declare module 'material-ui/lib/utils/unique-id' {
    import UniqueId = __MaterialUI.Utils.UniqueId;
    export = UniqueId;
}

declare module 'material-ui/lib/utils/styles' {
    import Styles = __MaterialUI.Utils.Styles;
    export = Styles;
}

declare module "material-ui/lib/menus/icon-menu" {
    import IconMenu = __MaterialUI.Menus.IconMenu;
    export = IconMenu;
}

declare module "material-ui/lib/menus/menu" {
    import Menu = __MaterialUI.Menus.Menu;
    export = Menu;
}

declare module "material-ui/lib/menus/menu-item" {
    import MenuItem = __MaterialUI.Menus.MenuItem;
    export = MenuItem;
}

declare module "material-ui/lib/menus/menu-divider" {
    import MenuDivider = __MaterialUI.Menus.MenuDivider;
    export = MenuDivider;
}

declare module "material-ui/lib/grid-list/grid-list" {
    import GridList = __MaterialUI.GridList.GridList;
    export = GridList;
}

declare module "material-ui/lib/grid-list/grid-tile" {
    import GridTile = __MaterialUI.GridList.GridTile;
    export = GridTile;
}

declare module "material-ui/lib/styles/colors" {
    import Colors = __MaterialUI.Styles.Colors;
    export = Colors;
}

declare namespace __MaterialUI.Styles {
    interface Colors {
        red50: string;
        red100: string;
        red200: string;
        red300: string;
        red400: string;
        red500: string;
        red600: string;
        red700: string;
        red800: string;
        red900: string;
        redA100: string;
        redA200: string;
        redA400: string;
        redA700: string;

        pink50: string;
        pink100: string;
        pink200: string;
        pink300: string;
        pink400: string;
        pink500: string;
        pink600: string;
        pink700: string;
        pink800: string;
        pink900: string;
        pinkA100: string;
        pinkA200: string;
        pinkA400: string;
        pinkA700: string;

        purple50: string;
        purple100: string;
        purple200: string;
        purple300: string;
        purple400: string;
        purple500: string;
        purple600: string;
        purple700: string;
        purple800: string;
        purple900: string;
        purpleA100: string;
        purpleA200: string;
        purpleA400: string;
        purpleA700: string;

        deepPurple50: string;
        deepPurple100: string;
        deepPurple200: string;
        deepPurple300: string;
        deepPurple400: string;
        deepPurple500: string;
        deepPurple600: string;
        deepPurple700: string;
        deepPurple800: string;
        deepPurple900: string;
        deepPurpleA100: string;
        deepPurpleA200: string;
        deepPurpleA400: string;
        deepPurpleA700: string;

        indigo50: string;
        indigo100: string;
        indigo200: string;
        indigo300: string;
        indigo400: string;
        indigo500: string;
        indigo600: string;
        indigo700: string;
        indigo800: string;
        indigo900: string;
        indigoA100: string;
        indigoA200: string;
        indigoA400: string;
        indigoA700: string;

        blue50: string;
        blue100: string;
        blue200: string;
        blue300: string;
        blue400: string;
        blue500: string;
        blue600: string;
        blue700: string;
        blue800: string;
        blue900: string;
        blueA100: string;
        blueA200: string;
        blueA400: string;
        blueA700: string;

        lightBlue50: string;
        lightBlue100: string;
        lightBlue200: string;
        lightBlue300: string;
        lightBlue400: string;
        lightBlue500: string;
        lightBlue600: string;
        lightBlue700: string;
        lightBlue800: string;
        lightBlue900: string;
        lightBlueA100: string;
        lightBlueA200: string;
        lightBlueA400: string;
        lightBlueA700: string;

        cyan50: string;
        cyan100: string;
        cyan200: string;
        cyan300: string;
        cyan400: string;
        cyan500: string;
        cyan600: string;
        cyan700: string;
        cyan800: string;
        cyan900: string;
        cyanA100: string;
        cyanA200: string;
        cyanA400: string;
        cyanA700: string;

        teal50: string;
        teal100: string;
        teal200: string;
        teal300: string;
        teal400: string;
        teal500: string;
        teal600: string;
        teal700: string;
        teal800: string;
        teal900: string;
        tealA100: string;
        tealA200: string;
        tealA400: string;
        tealA700: string;

        green50: string;
        green100: string;
        green200: string;
        green300: string;
        green400: string;
        green500: string;
        green600: string;
        green700: string;
        green800: string;
        green900: string;
        greenA100: string;
        greenA200: string;
        greenA400: string;
        greenA700: string;

        lightGreen50: string;
        lightGreen100: string;
        lightGreen200: string;
        lightGreen300: string;
        lightGreen400: string;
        lightGreen500: string;
        lightGreen600: string;
        lightGreen700: string;
        lightGreen800: string;
        lightGreen900: string;
        lightGreenA100: string;
        lightGreenA200: string;
        lightGreenA400: string;
        lightGreenA700: string;

        lime50: string;
        lime100: string;
        lime200: string;
        lime300: string;
        lime400: string;
        lime500: string;
        lime600: string;
        lime700: string;
        lime800: string;
        lime900: string;
        limeA100: string;
        limeA200: string;
        limeA400: string;
        limeA700: string;

        yellow50: string;
        yellow100: string;
        yellow200: string;
        yellow300: string;
        yellow400: string;
        yellow500: string;
        yellow600: string;
        yellow700: string;
        yellow800: string;
        yellow900: string;
        yellowA100: string;
        yellowA200: string;
        yellowA400: string;
        yellowA700: string;

        amber50: string;
        amber100: string;
        amber200: string;
        amber300: string;
        amber400: string;
        amber500: string;
        amber600: string;
        amber700: string;
        amber800: string;
        amber900: string;
        amberA100: string;
        amberA200: string;
        amberA400: string;
        amberA700: string;

        orange50: string;
        orange100: string;
        orange200: string;
        orange300: string;
        orange400: string;
        orange500: string;
        orange600: string;
        orange700: string;
        orange800: string;
        orange900: string;
        orangeA100: string;
        orangeA200: string;
        orangeA400: string;
        orangeA700: string;

        deepOrange50: string;
        deepOrange100: string;
        deepOrange200: string;
        deepOrange300: string;
        deepOrange400: string;
        deepOrange500: string;
        deepOrange600: string;
        deepOrange700: string;
        deepOrange800: string;
        deepOrange900: string;
        deepOrangeA100: string;
        deepOrangeA200: string;
        deepOrangeA400: string;
        deepOrangeA700: string;

        brown50: string;
        brown100: string;
        brown200: string;
        brown300: string;
        brown400: string;
        brown500: string;
        brown600: string;
        brown700: string;
        brown800: string;
        brown900: string;

        blueGrey50: string;
        blueGrey100: string;
        blueGrey200: string;
        blueGrey300: string;
        blueGrey400: string;
        blueGrey500: string;
        blueGrey600: string;
        blueGrey700: string;
        blueGrey800: string;
        blueGrey900: string;

        grey50: string;
        grey100: string;
        grey200: string;
        grey300: string;
        grey400: string;
        grey500: string;
        grey600: string;
        grey700: string;
        grey800: string;
        grey900: string;

        black: string;
        white: string;

        transparent: string;
        fullBlack: string;
        darkBlack: string;
        lightBlack: string;
        minBlack: string;
        faintBlack: string;
        fullWhite: string;
        darkWhite: string;
        lightWhite: string;
    }
    export var Colors: Colors;
}

declare module "material-ui/lib/svg-icons" {
    export var ActionAccessibility: __MaterialUI.SvgIcon;
    export var ActionAccessible: __MaterialUI.SvgIcon;
    export var ActionAccountBalanceWallet: __MaterialUI.SvgIcon;
    export var ActionAccountBalance: __MaterialUI.SvgIcon;
    export var ActionAccountBox: __MaterialUI.SvgIcon;
    export var ActionAccountCircle: __MaterialUI.SvgIcon;
    export var ActionAddShoppingCart: __MaterialUI.SvgIcon;
    export var ActionAlarmAdd: __MaterialUI.SvgIcon;
    export var ActionAlarmOff: __MaterialUI.SvgIcon;
    export var ActionAlarmOn: __MaterialUI.SvgIcon;
    export var ActionAlarm: __MaterialUI.SvgIcon;
    export var ActionAllOut: __MaterialUI.SvgIcon;
    export var ActionAndroid: __MaterialUI.SvgIcon;
    export var ActionAnnouncement: __MaterialUI.SvgIcon;
    export var ActionAspectRatio: __MaterialUI.SvgIcon;
    export var ActionAssessment: __MaterialUI.SvgIcon;
    export var ActionAssignmentInd: __MaterialUI.SvgIcon;
    export var ActionAssignmentLate: __MaterialUI.SvgIcon;
    export var ActionAssignmentReturn: __MaterialUI.SvgIcon;
    export var ActionAssignmentReturned: __MaterialUI.SvgIcon;
    export var ActionAssignmentTurnedIn: __MaterialUI.SvgIcon;
    export var ActionAssignment: __MaterialUI.SvgIcon;
    export var ActionAutorenew: __MaterialUI.SvgIcon;
    export var ActionBackup: __MaterialUI.SvgIcon;
    export var ActionBook: __MaterialUI.SvgIcon;
    export var ActionBookmarkBorder: __MaterialUI.SvgIcon;
    export var ActionBookmark: __MaterialUI.SvgIcon;
    export var ActionBugReport: __MaterialUI.SvgIcon;
    export var ActionBuild: __MaterialUI.SvgIcon;
    export var ActionCached: __MaterialUI.SvgIcon;
    export var ActionCameraEnhance: __MaterialUI.SvgIcon;
    export var ActionCardGiftcard: __MaterialUI.SvgIcon;
    export var ActionCardMembership: __MaterialUI.SvgIcon;
    export var ActionCardTravel: __MaterialUI.SvgIcon;
    export var ActionChangeHistory: __MaterialUI.SvgIcon;
    export var ActionCheckCircle: __MaterialUI.SvgIcon;
    export var ActionChromeReaderMode: __MaterialUI.SvgIcon;
    export var ActionClass: __MaterialUI.SvgIcon;
    export var ActionCode: __MaterialUI.SvgIcon;
    export var ActionCompareArrows: __MaterialUI.SvgIcon;
    export var ActionCopyright: __MaterialUI.SvgIcon;
    export var ActionCreditCard: __MaterialUI.SvgIcon;
    export var ActionDashboard: __MaterialUI.SvgIcon;
    export var ActionDateRange: __MaterialUI.SvgIcon;
    export var ActionDelete: __MaterialUI.SvgIcon;
    export var ActionDescription: __MaterialUI.SvgIcon;
    export var ActionDns: __MaterialUI.SvgIcon;
    export var ActionDoneAll: __MaterialUI.SvgIcon;
    export var ActionDone: __MaterialUI.SvgIcon;
    export var ActionDonutLarge: __MaterialUI.SvgIcon;
    export var ActionDonutSmall: __MaterialUI.SvgIcon;
    export var ActionEject: __MaterialUI.SvgIcon;
    export var ActionEventSeat: __MaterialUI.SvgIcon;
    export var ActionEvent: __MaterialUI.SvgIcon;
    export var ActionExitToApp: __MaterialUI.SvgIcon;
    export var ActionExplore: __MaterialUI.SvgIcon;
    export var ActionExtension: __MaterialUI.SvgIcon;
    export var ActionFace: __MaterialUI.SvgIcon;
    export var ActionFavoriteBorder: __MaterialUI.SvgIcon;
    export var ActionFavorite: __MaterialUI.SvgIcon;
    export var ActionFeedback: __MaterialUI.SvgIcon;
    export var ActionFindInPage: __MaterialUI.SvgIcon;
    export var ActionFindReplace: __MaterialUI.SvgIcon;
    export var ActionFingerprint: __MaterialUI.SvgIcon;
    export var ActionFlightLand: __MaterialUI.SvgIcon;
    export var ActionFlightTakeoff: __MaterialUI.SvgIcon;
    export var ActionFlipToBack: __MaterialUI.SvgIcon;
    export var ActionFlipToFront: __MaterialUI.SvgIcon;
    export var ActionGavel: __MaterialUI.SvgIcon;
    export var ActionGetApp: __MaterialUI.SvgIcon;
    export var ActionGif: __MaterialUI.SvgIcon;
    export var ActionGrade: __MaterialUI.SvgIcon;
    export var ActionGroupWork: __MaterialUI.SvgIcon;
    export var ActionHelpOutline: __MaterialUI.SvgIcon;
    export var ActionHelp: __MaterialUI.SvgIcon;
    export var ActionHighlightOff: __MaterialUI.SvgIcon;
    export var ActionHistory: __MaterialUI.SvgIcon;
    export var ActionHome: __MaterialUI.SvgIcon;
    export var ActionHourglassEmpty: __MaterialUI.SvgIcon;
    export var ActionHourglassFull: __MaterialUI.SvgIcon;
    export var ActionHttp: __MaterialUI.SvgIcon;
    export var ActionHttps: __MaterialUI.SvgIcon;
    export var ActionImportantDevices: __MaterialUI.SvgIcon;
    export var ActionInfoOutline: __MaterialUI.SvgIcon;
    export var ActionInfo: __MaterialUI.SvgIcon;
    export var ActionInput: __MaterialUI.SvgIcon;
    export var ActionInvertColors: __MaterialUI.SvgIcon;
    export var ActionLabelOutline: __MaterialUI.SvgIcon;
    export var ActionLabel: __MaterialUI.SvgIcon;
    export var ActionLanguage: __MaterialUI.SvgIcon;
    export var ActionLaunch: __MaterialUI.SvgIcon;
    export var ActionLightbulbOutline: __MaterialUI.SvgIcon;
    export var ActionLineStyle: __MaterialUI.SvgIcon;
    export var ActionLineWeight: __MaterialUI.SvgIcon;
    export var ActionList: __MaterialUI.SvgIcon;
    export var ActionLockOpen: __MaterialUI.SvgIcon;
    export var ActionLockOutline: __MaterialUI.SvgIcon;
    export var ActionLock: __MaterialUI.SvgIcon;
    export var ActionLoyalty: __MaterialUI.SvgIcon;
    export var ActionMarkunreadMailbox: __MaterialUI.SvgIcon;
    export var ActionMotorcycle: __MaterialUI.SvgIcon;
    export var ActionNoteAdd: __MaterialUI.SvgIcon;
    export var ActionOfflinePin: __MaterialUI.SvgIcon;
    export var ActionOpacity: __MaterialUI.SvgIcon;
    export var ActionOpenInBrowser: __MaterialUI.SvgIcon;
    export var ActionOpenInNew: __MaterialUI.SvgIcon;
    export var ActionOpenWith: __MaterialUI.SvgIcon;
    export var ActionPageview: __MaterialUI.SvgIcon;
    export var ActionPanTool: __MaterialUI.SvgIcon;
    export var ActionPayment: __MaterialUI.SvgIcon;
    export var ActionPermCameraMic: __MaterialUI.SvgIcon;
    export var ActionPermContactCalendar: __MaterialUI.SvgIcon;
    export var ActionPermDataSetting: __MaterialUI.SvgIcon;
    export var ActionPermDeviceInformation: __MaterialUI.SvgIcon;
    export var ActionPermIdentity: __MaterialUI.SvgIcon;
    export var ActionPermMedia: __MaterialUI.SvgIcon;
    export var ActionPermPhoneMsg: __MaterialUI.SvgIcon;
    export var ActionPermScanWifi: __MaterialUI.SvgIcon;
    export var ActionPets: __MaterialUI.SvgIcon;
    export var ActionPictureInPictureAlt: __MaterialUI.SvgIcon;
    export var ActionPictureInPicture: __MaterialUI.SvgIcon;
    export var ActionPlayForWork: __MaterialUI.SvgIcon;
    export var ActionPolymer: __MaterialUI.SvgIcon;
    export var ActionPowerSettingsNew: __MaterialUI.SvgIcon;
    export var ActionPregnantWoman: __MaterialUI.SvgIcon;
    export var ActionPrint: __MaterialUI.SvgIcon;
    export var ActionQueryBuilder: __MaterialUI.SvgIcon;
    export var ActionQuestionAnswer: __MaterialUI.SvgIcon;
    export var ActionReceipt: __MaterialUI.SvgIcon;
    export var ActionRecordVoiceOver: __MaterialUI.SvgIcon;
    export var ActionRedeem: __MaterialUI.SvgIcon;
    export var ActionReorder: __MaterialUI.SvgIcon;
    export var ActionReportProblem: __MaterialUI.SvgIcon;
    export var ActionRestore: __MaterialUI.SvgIcon;
    export var ActionRoom: __MaterialUI.SvgIcon;
    export var ActionRoundedCorner: __MaterialUI.SvgIcon;
    export var ActionRowing: __MaterialUI.SvgIcon;
    export var ActionSchedule: __MaterialUI.SvgIcon;
    export var ActionSearch: __MaterialUI.SvgIcon;
    export var ActionSettingsApplications: __MaterialUI.SvgIcon;
    export var ActionSettingsBackupRestore: __MaterialUI.SvgIcon;
    export var ActionSettingsBluetooth: __MaterialUI.SvgIcon;
    export var ActionSettingsBrightness: __MaterialUI.SvgIcon;
    export var ActionSettingsCell: __MaterialUI.SvgIcon;
    export var ActionSettingsEthernet: __MaterialUI.SvgIcon;
    export var ActionSettingsInputAntenna: __MaterialUI.SvgIcon;
    export var ActionSettingsInputComponent: __MaterialUI.SvgIcon;
    export var ActionSettingsInputComposite: __MaterialUI.SvgIcon;
    export var ActionSettingsInputHdmi: __MaterialUI.SvgIcon;
    export var ActionSettingsInputSvideo: __MaterialUI.SvgIcon;
    export var ActionSettingsOverscan: __MaterialUI.SvgIcon;
    export var ActionSettingsPhone: __MaterialUI.SvgIcon;
    export var ActionSettingsPower: __MaterialUI.SvgIcon;
    export var ActionSettingsRemote: __MaterialUI.SvgIcon;
    export var ActionSettingsVoice: __MaterialUI.SvgIcon;
    export var ActionSettings: __MaterialUI.SvgIcon;
    export var ActionShopTwo: __MaterialUI.SvgIcon;
    export var ActionShop: __MaterialUI.SvgIcon;
    export var ActionShoppingBasket: __MaterialUI.SvgIcon;
    export var ActionShoppingCart: __MaterialUI.SvgIcon;
    export var ActionSpeakerNotes: __MaterialUI.SvgIcon;
    export var ActionSpellcheck: __MaterialUI.SvgIcon;
    export var ActionStars: __MaterialUI.SvgIcon;
    export var ActionStore: __MaterialUI.SvgIcon;
    export var ActionSubject: __MaterialUI.SvgIcon;
    export var ActionSupervisorAccount: __MaterialUI.SvgIcon;
    export var ActionSwapHoriz: __MaterialUI.SvgIcon;
    export var ActionSwapVert: __MaterialUI.SvgIcon;
    export var ActionSwapVerticalCircle: __MaterialUI.SvgIcon;
    export var ActionSystemUpdateAlt: __MaterialUI.SvgIcon;
    export var ActionTabUnselected: __MaterialUI.SvgIcon;
    export var ActionTab: __MaterialUI.SvgIcon;
    export var ActionTheaters: __MaterialUI.SvgIcon;
    export var ActionThreeDRotation: __MaterialUI.SvgIcon;
    export var ActionThumbDown: __MaterialUI.SvgIcon;
    export var ActionThumbUp: __MaterialUI.SvgIcon;
    export var ActionThumbsUpDown: __MaterialUI.SvgIcon;
    export var ActionTimeline: __MaterialUI.SvgIcon;
    export var ActionToc: __MaterialUI.SvgIcon;
    export var ActionToday: __MaterialUI.SvgIcon;
    export var ActionToll: __MaterialUI.SvgIcon;
    export var ActionTouchApp: __MaterialUI.SvgIcon;
    export var ActionTrackChanges: __MaterialUI.SvgIcon;
    export var ActionTranslate: __MaterialUI.SvgIcon;
    export var ActionTrendingDown: __MaterialUI.SvgIcon;
    export var ActionTrendingFlat: __MaterialUI.SvgIcon;
    export var ActionTrendingUp: __MaterialUI.SvgIcon;
    export var ActionTurnedInNot: __MaterialUI.SvgIcon;
    export var ActionTurnedIn: __MaterialUI.SvgIcon;
    export var ActionUpdate: __MaterialUI.SvgIcon;
    export var ActionVerifiedUser: __MaterialUI.SvgIcon;
    export var ActionViewAgenda: __MaterialUI.SvgIcon;
    export var ActionViewArray: __MaterialUI.SvgIcon;
    export var ActionViewCarousel: __MaterialUI.SvgIcon;
    export var ActionViewColumn: __MaterialUI.SvgIcon;
    export var ActionViewDay: __MaterialUI.SvgIcon;
    export var ActionViewHeadline: __MaterialUI.SvgIcon;
    export var ActionViewList: __MaterialUI.SvgIcon;
    export var ActionViewModule: __MaterialUI.SvgIcon;
    export var ActionViewQuilt: __MaterialUI.SvgIcon;
    export var ActionViewStream: __MaterialUI.SvgIcon;
    export var ActionViewWeek: __MaterialUI.SvgIcon;
    export var ActionVisibilityOff: __MaterialUI.SvgIcon;
    export var ActionVisibility: __MaterialUI.SvgIcon;
    export var ActionWatchLater: __MaterialUI.SvgIcon;
    export var ActionWork: __MaterialUI.SvgIcon;
    export var ActionYoutubeSearchedFor: __MaterialUI.SvgIcon;
    export var ActionZoomIn: __MaterialUI.SvgIcon;
    export var ActionZoomOut: __MaterialUI.SvgIcon;
    export var AlertAddAlert: __MaterialUI.SvgIcon;
    export var AlertErrorOutline: __MaterialUI.SvgIcon;
    export var AlertError: __MaterialUI.SvgIcon;
    export var AlertWarning: __MaterialUI.SvgIcon;
    export var AvAddToQueue: __MaterialUI.SvgIcon;
    export var AvAirplay: __MaterialUI.SvgIcon;
    export var AvAlbum: __MaterialUI.SvgIcon;
    export var AvArtTrack: __MaterialUI.SvgIcon;
    export var AvAvTimer: __MaterialUI.SvgIcon;
    export var AvClosedCaption: __MaterialUI.SvgIcon;
    export var AvEqualizer: __MaterialUI.SvgIcon;
    export var AvExplicit: __MaterialUI.SvgIcon;
    export var AvFastForward: __MaterialUI.SvgIcon;
    export var AvFastRewind: __MaterialUI.SvgIcon;
    export var AvFiberDvr: __MaterialUI.SvgIcon;
    export var AvFiberManualRecord: __MaterialUI.SvgIcon;
    export var AvFiberNew: __MaterialUI.SvgIcon;
    export var AvFiberPin: __MaterialUI.SvgIcon;
    export var AvFiberSmartRecord: __MaterialUI.SvgIcon;
    export var AvForward10: __MaterialUI.SvgIcon;
    export var AvForward30: __MaterialUI.SvgIcon;
    export var AvForward5: __MaterialUI.SvgIcon;
    export var AvGames: __MaterialUI.SvgIcon;
    export var AvHd: __MaterialUI.SvgIcon;
    export var AvHearing: __MaterialUI.SvgIcon;
    export var AvHighQuality: __MaterialUI.SvgIcon;
    export var AvLibraryAdd: __MaterialUI.SvgIcon;
    export var AvLibraryBooks: __MaterialUI.SvgIcon;
    export var AvLibraryMusic: __MaterialUI.SvgIcon;
    export var AvLoop: __MaterialUI.SvgIcon;
    export var AvMicNone: __MaterialUI.SvgIcon;
    export var AvMicOff: __MaterialUI.SvgIcon;
    export var AvMic: __MaterialUI.SvgIcon;
    export var AvMovie: __MaterialUI.SvgIcon;
    export var AvMusicVideo: __MaterialUI.SvgIcon;
    export var AvNewReleases: __MaterialUI.SvgIcon;
    export var AvNotInterested: __MaterialUI.SvgIcon;
    export var AvPauseCircleFilled: __MaterialUI.SvgIcon;
    export var AvPauseCircleOutline: __MaterialUI.SvgIcon;
    export var AvPause: __MaterialUI.SvgIcon;
    export var AvPlayArrow: __MaterialUI.SvgIcon;
    export var AvPlayCircleFilled: __MaterialUI.SvgIcon;
    export var AvPlayCircleOutline: __MaterialUI.SvgIcon;
    export var AvPlaylistAddCheck: __MaterialUI.SvgIcon;
    export var AvPlaylistAdd: __MaterialUI.SvgIcon;
    export var AvPlaylistPlay: __MaterialUI.SvgIcon;
    export var AvQueueMusic: __MaterialUI.SvgIcon;
    export var AvQueuePlayNext: __MaterialUI.SvgIcon;
    export var AvQueue: __MaterialUI.SvgIcon;
    export var AvRadio: __MaterialUI.SvgIcon;
    export var AvRecentActors: __MaterialUI.SvgIcon;
    export var AvRemoveFromQueue: __MaterialUI.SvgIcon;
    export var AvRepeatOne: __MaterialUI.SvgIcon;
    export var AvRepeat: __MaterialUI.SvgIcon;
    export var AvReplay10: __MaterialUI.SvgIcon;
    export var AvReplay30: __MaterialUI.SvgIcon;
    export var AvReplay5: __MaterialUI.SvgIcon;
    export var AvReplay: __MaterialUI.SvgIcon;
    export var AvShuffle: __MaterialUI.SvgIcon;
    export var AvSkipNext: __MaterialUI.SvgIcon;
    export var AvSkipPrevious: __MaterialUI.SvgIcon;
    export var AvSlowMotionVideo: __MaterialUI.SvgIcon;
    export var AvSnooze: __MaterialUI.SvgIcon;
    export var AvSortByAlpha: __MaterialUI.SvgIcon;
    export var AvStop: __MaterialUI.SvgIcon;
    export var AvSubscriptions: __MaterialUI.SvgIcon;
    export var AvSubtitles: __MaterialUI.SvgIcon;
    export var AvSurroundSound: __MaterialUI.SvgIcon;
    export var AvVideoLibrary: __MaterialUI.SvgIcon;
    export var AvVideocamOff: __MaterialUI.SvgIcon;
    export var AvVideocam: __MaterialUI.SvgIcon;
    export var AvVolumeDown: __MaterialUI.SvgIcon;
    export var AvVolumeMute: __MaterialUI.SvgIcon;
    export var AvVolumeOff: __MaterialUI.SvgIcon;
    export var AvVolumeUp: __MaterialUI.SvgIcon;
    export var AvWebAsset: __MaterialUI.SvgIcon;
    export var AvWeb: __MaterialUI.SvgIcon;
    export var CommunicationBusiness: __MaterialUI.SvgIcon;
    export var CommunicationCallEnd: __MaterialUI.SvgIcon;
    export var CommunicationCallMade: __MaterialUI.SvgIcon;
    export var CommunicationCallMerge: __MaterialUI.SvgIcon;
    export var CommunicationCallMissedOutgoing: __MaterialUI.SvgIcon;
    export var CommunicationCallMissed: __MaterialUI.SvgIcon;
    export var CommunicationCallReceived: __MaterialUI.SvgIcon;
    export var CommunicationCallSplit: __MaterialUI.SvgIcon;
    export var CommunicationCall: __MaterialUI.SvgIcon;
    export var CommunicationChatBubbleOutline: __MaterialUI.SvgIcon;
    export var CommunicationChatBubble: __MaterialUI.SvgIcon;
    export var CommunicationChat: __MaterialUI.SvgIcon;
    export var CommunicationClearAll: __MaterialUI.SvgIcon;
    export var CommunicationComment: __MaterialUI.SvgIcon;
    export var CommunicationContactMail: __MaterialUI.SvgIcon;
    export var CommunicationContactPhone: __MaterialUI.SvgIcon;
    export var CommunicationContacts: __MaterialUI.SvgIcon;
    export var CommunicationDialerSip: __MaterialUI.SvgIcon;
    export var CommunicationDialpad: __MaterialUI.SvgIcon;
    export var CommunicationEmail: __MaterialUI.SvgIcon;
    export var CommunicationForum: __MaterialUI.SvgIcon;
    export var CommunicationImportContacts: __MaterialUI.SvgIcon;
    export var CommunicationImportExport: __MaterialUI.SvgIcon;
    export var CommunicationInvertColorsOff: __MaterialUI.SvgIcon;
    export var CommunicationLiveHelp: __MaterialUI.SvgIcon;
    export var CommunicationLocationOff: __MaterialUI.SvgIcon;
    export var CommunicationLocationOn: __MaterialUI.SvgIcon;
    export var CommunicationMailOutline: __MaterialUI.SvgIcon;
    export var CommunicationMessage: __MaterialUI.SvgIcon;
    export var CommunicationNoSim: __MaterialUI.SvgIcon;
    export var CommunicationPhone: __MaterialUI.SvgIcon;
    export var CommunicationPhonelinkErase: __MaterialUI.SvgIcon;
    export var CommunicationPhonelinkLock: __MaterialUI.SvgIcon;
    export var CommunicationPhonelinkRing: __MaterialUI.SvgIcon;
    export var CommunicationPhonelinkSetup: __MaterialUI.SvgIcon;
    export var CommunicationPortableWifiOff: __MaterialUI.SvgIcon;
    export var CommunicationPresentToAll: __MaterialUI.SvgIcon;
    export var CommunicationRingVolume: __MaterialUI.SvgIcon;
    export var CommunicationScreenShare: __MaterialUI.SvgIcon;
    export var CommunicationSpeakerPhone: __MaterialUI.SvgIcon;
    export var CommunicationStayCurrentLandscape: __MaterialUI.SvgIcon;
    export var CommunicationStayCurrentPortrait: __MaterialUI.SvgIcon;
    export var CommunicationStayPrimaryLandscape: __MaterialUI.SvgIcon;
    export var CommunicationStayPrimaryPortrait: __MaterialUI.SvgIcon;
    export var CommunicationStopScreenShare: __MaterialUI.SvgIcon;
    export var CommunicationSwapCalls: __MaterialUI.SvgIcon;
    export var CommunicationTextsms: __MaterialUI.SvgIcon;
    export var CommunicationVoicemail: __MaterialUI.SvgIcon;
    export var CommunicationVpnKey: __MaterialUI.SvgIcon;
    export var ContentAddBox: __MaterialUI.SvgIcon;
    export var ContentAddCircleOutline: __MaterialUI.SvgIcon;
    export var ContentAddCircle: __MaterialUI.SvgIcon;
    export var ContentAdd: __MaterialUI.SvgIcon;
    export var ContentArchive: __MaterialUI.SvgIcon;
    export var ContentBackspace: __MaterialUI.SvgIcon;
    export var ContentBlock: __MaterialUI.SvgIcon;
    export var ContentClear: __MaterialUI.SvgIcon;
    export var ContentContentCopy: __MaterialUI.SvgIcon;
    export var ContentContentCut: __MaterialUI.SvgIcon;
    export var ContentContentPaste: __MaterialUI.SvgIcon;
    export var ContentCreate: __MaterialUI.SvgIcon;
    export var ContentDrafts: __MaterialUI.SvgIcon;
    export var ContentFilterList: __MaterialUI.SvgIcon;
    export var ContentFlag: __MaterialUI.SvgIcon;
    export var ContentFontDownload: __MaterialUI.SvgIcon;
    export var ContentForward: __MaterialUI.SvgIcon;
    export var ContentGesture: __MaterialUI.SvgIcon;
    export var ContentInbox: __MaterialUI.SvgIcon;
    export var ContentLink: __MaterialUI.SvgIcon;
    export var ContentMail: __MaterialUI.SvgIcon;
    export var ContentMarkunread: __MaterialUI.SvgIcon;
    export var ContentMoveToInbox: __MaterialUI.SvgIcon;
    export var ContentNextWeek: __MaterialUI.SvgIcon;
    export var ContentRedo: __MaterialUI.SvgIcon;
    export var ContentRemoveCircleOutline: __MaterialUI.SvgIcon;
    export var ContentRemoveCircle: __MaterialUI.SvgIcon;
    export var ContentRemove: __MaterialUI.SvgIcon;
    export var ContentReplyAll: __MaterialUI.SvgIcon;
    export var ContentReply: __MaterialUI.SvgIcon;
    export var ContentReport: __MaterialUI.SvgIcon;
    export var ContentSave: __MaterialUI.SvgIcon;
    export var ContentSelectAll: __MaterialUI.SvgIcon;
    export var ContentSend: __MaterialUI.SvgIcon;
    export var ContentSort: __MaterialUI.SvgIcon;
    export var ContentTextFormat: __MaterialUI.SvgIcon;
    export var ContentUnarchive: __MaterialUI.SvgIcon;
    export var ContentUndo: __MaterialUI.SvgIcon;
    export var ContentWeekend: __MaterialUI.SvgIcon;
    export var DeviceAccessAlarm: __MaterialUI.SvgIcon;
    export var DeviceAccessAlarms: __MaterialUI.SvgIcon;
    export var DeviceAccessTime: __MaterialUI.SvgIcon;
    export var DeviceAddAlarm: __MaterialUI.SvgIcon;
    export var DeviceAirplanemodeActive: __MaterialUI.SvgIcon;
    export var DeviceAirplanemodeInactive: __MaterialUI.SvgIcon;
    export var DeviceBattery20: __MaterialUI.SvgIcon;
    export var DeviceBattery30: __MaterialUI.SvgIcon;
    export var DeviceBattery50: __MaterialUI.SvgIcon;
    export var DeviceBattery60: __MaterialUI.SvgIcon;
    export var DeviceBattery80: __MaterialUI.SvgIcon;
    export var DeviceBattery90: __MaterialUI.SvgIcon;
    export var DeviceBatteryAlert: __MaterialUI.SvgIcon;
    export var DeviceBatteryCharging20: __MaterialUI.SvgIcon;
    export var DeviceBatteryCharging30: __MaterialUI.SvgIcon;
    export var DeviceBatteryCharging50: __MaterialUI.SvgIcon;
    export var DeviceBatteryCharging60: __MaterialUI.SvgIcon;
    export var DeviceBatteryCharging80: __MaterialUI.SvgIcon;
    export var DeviceBatteryCharging90: __MaterialUI.SvgIcon;
    export var DeviceBatteryChargingFull: __MaterialUI.SvgIcon;
    export var DeviceBatteryFull: __MaterialUI.SvgIcon;
    export var DeviceBatteryStd: __MaterialUI.SvgIcon;
    export var DeviceBatteryUnknown: __MaterialUI.SvgIcon;
    export var DeviceBluetoothConnected: __MaterialUI.SvgIcon;
    export var DeviceBluetoothDisabled: __MaterialUI.SvgIcon;
    export var DeviceBluetoothSearching: __MaterialUI.SvgIcon;
    export var DeviceBluetooth: __MaterialUI.SvgIcon;
    export var DeviceBrightnessAuto: __MaterialUI.SvgIcon;
    export var DeviceBrightnessHigh: __MaterialUI.SvgIcon;
    export var DeviceBrightnessLow: __MaterialUI.SvgIcon;
    export var DeviceBrightnessMedium: __MaterialUI.SvgIcon;
    export var DeviceDataUsage: __MaterialUI.SvgIcon;
    export var DeviceDeveloperMode: __MaterialUI.SvgIcon;
    export var DeviceDevices: __MaterialUI.SvgIcon;
    export var DeviceDvr: __MaterialUI.SvgIcon;
    export var DeviceGpsFixed: __MaterialUI.SvgIcon;
    export var DeviceGpsNotFixed: __MaterialUI.SvgIcon;
    export var DeviceGpsOff: __MaterialUI.SvgIcon;
    export var DeviceGraphicEq: __MaterialUI.SvgIcon;
    export var DeviceLocationDisabled: __MaterialUI.SvgIcon;
    export var DeviceLocationSearching: __MaterialUI.SvgIcon;
    export var DeviceNetworkCell: __MaterialUI.SvgIcon;
    export var DeviceNetworkWifi: __MaterialUI.SvgIcon;
    export var DeviceNfc: __MaterialUI.SvgIcon;
    export var DeviceScreenLockLandscape: __MaterialUI.SvgIcon;
    export var DeviceScreenLockPortrait: __MaterialUI.SvgIcon;
    export var DeviceScreenLockRotation: __MaterialUI.SvgIcon;
    export var DeviceScreenRotation: __MaterialUI.SvgIcon;
    export var DeviceSdStorage: __MaterialUI.SvgIcon;
    export var DeviceSettingsSystemDaydream: __MaterialUI.SvgIcon;
    export var DeviceSignalCellular0Bar: __MaterialUI.SvgIcon;
    export var DeviceSignalCellular1Bar: __MaterialUI.SvgIcon;
    export var DeviceSignalCellular2Bar: __MaterialUI.SvgIcon;
    export var DeviceSignalCellular3Bar: __MaterialUI.SvgIcon;
    export var DeviceSignalCellular4Bar: __MaterialUI.SvgIcon;
    export var DeviceSignalCellularConnectedNoInternet0Bar: __MaterialUI.SvgIcon;
    export var DeviceSignalCellularConnectedNoInternet1Bar: __MaterialUI.SvgIcon;
    export var DeviceSignalCellularConnectedNoInternet2Bar: __MaterialUI.SvgIcon;
    export var DeviceSignalCellularConnectedNoInternet3Bar: __MaterialUI.SvgIcon;
    export var DeviceSignalCellularConnectedNoInternet4Bar: __MaterialUI.SvgIcon;
    export var DeviceSignalCellularNoSim: __MaterialUI.SvgIcon;
    export var DeviceSignalCellularNull: __MaterialUI.SvgIcon;
    export var DeviceSignalCellularOff: __MaterialUI.SvgIcon;
    export var DeviceSignalWifi0Bar: __MaterialUI.SvgIcon;
    export var DeviceSignalWifi1BarLock: __MaterialUI.SvgIcon;
    export var DeviceSignalWifi1Bar: __MaterialUI.SvgIcon;
    export var DeviceSignalWifi2BarLock: __MaterialUI.SvgIcon;
    export var DeviceSignalWifi2Bar: __MaterialUI.SvgIcon;
    export var DeviceSignalWifi3BarLock: __MaterialUI.SvgIcon;
    export var DeviceSignalWifi3Bar: __MaterialUI.SvgIcon;
    export var DeviceSignalWifi4BarLock: __MaterialUI.SvgIcon;
    export var DeviceSignalWifi4Bar: __MaterialUI.SvgIcon;
    export var DeviceSignalWifiOff: __MaterialUI.SvgIcon;
    export var DeviceStorage: __MaterialUI.SvgIcon;
    export var DeviceUsb: __MaterialUI.SvgIcon;
    export var DeviceWallpaper: __MaterialUI.SvgIcon;
    export var DeviceWidgets: __MaterialUI.SvgIcon;
    export var DeviceWifiLock: __MaterialUI.SvgIcon;
    export var DeviceWifiTethering: __MaterialUI.SvgIcon;
    export var EditorAttachFile: __MaterialUI.SvgIcon;
    export var EditorAttachMoney: __MaterialUI.SvgIcon;
    export var EditorBorderAll: __MaterialUI.SvgIcon;
    export var EditorBorderBottom: __MaterialUI.SvgIcon;
    export var EditorBorderClear: __MaterialUI.SvgIcon;
    export var EditorBorderColor: __MaterialUI.SvgIcon;
    export var EditorBorderHorizontal: __MaterialUI.SvgIcon;
    export var EditorBorderInner: __MaterialUI.SvgIcon;
    export var EditorBorderLeft: __MaterialUI.SvgIcon;
    export var EditorBorderOuter: __MaterialUI.SvgIcon;
    export var EditorBorderRight: __MaterialUI.SvgIcon;
    export var EditorBorderStyle: __MaterialUI.SvgIcon;
    export var EditorBorderTop: __MaterialUI.SvgIcon;
    export var EditorBorderVertical: __MaterialUI.SvgIcon;
    export var EditorDragHandle: __MaterialUI.SvgIcon;
    export var EditorFormatAlignCenter: __MaterialUI.SvgIcon;
    export var EditorFormatAlignJustify: __MaterialUI.SvgIcon;
    export var EditorFormatAlignLeft: __MaterialUI.SvgIcon;
    export var EditorFormatAlignRight: __MaterialUI.SvgIcon;
    export var EditorFormatBold: __MaterialUI.SvgIcon;
    export var EditorFormatClear: __MaterialUI.SvgIcon;
    export var EditorFormatColorFill: __MaterialUI.SvgIcon;
    export var EditorFormatColorReset: __MaterialUI.SvgIcon;
    export var EditorFormatColorText: __MaterialUI.SvgIcon;
    export var EditorFormatIndentDecrease: __MaterialUI.SvgIcon;
    export var EditorFormatIndentIncrease: __MaterialUI.SvgIcon;
    export var EditorFormatItalic: __MaterialUI.SvgIcon;
    export var EditorFormatLineSpacing: __MaterialUI.SvgIcon;
    export var EditorFormatListBulleted: __MaterialUI.SvgIcon;
    export var EditorFormatListNumbered: __MaterialUI.SvgIcon;
    export var EditorFormatPaint: __MaterialUI.SvgIcon;
    export var EditorFormatQuote: __MaterialUI.SvgIcon;
    export var EditorFormatShapes: __MaterialUI.SvgIcon;
    export var EditorFormatSize: __MaterialUI.SvgIcon;
    export var EditorFormatStrikethrough: __MaterialUI.SvgIcon;
    export var EditorFormatTextdirectionLToR: __MaterialUI.SvgIcon;
    export var EditorFormatTextdirectionRToL: __MaterialUI.SvgIcon;
    export var EditorFormatUnderlined: __MaterialUI.SvgIcon;
    export var EditorFunctions: __MaterialUI.SvgIcon;
    export var EditorHighlight: __MaterialUI.SvgIcon;
    export var EditorInsertChart: __MaterialUI.SvgIcon;
    export var EditorInsertComment: __MaterialUI.SvgIcon;
    export var EditorInsertDriveFile: __MaterialUI.SvgIcon;
    export var EditorInsertEmoticon: __MaterialUI.SvgIcon;
    export var EditorInsertInvitation: __MaterialUI.SvgIcon;
    export var EditorInsertLink: __MaterialUI.SvgIcon;
    export var EditorInsertPhoto: __MaterialUI.SvgIcon;
    export var EditorLinearScale: __MaterialUI.SvgIcon;
    export var EditorMergeType: __MaterialUI.SvgIcon;
    export var EditorModeComment: __MaterialUI.SvgIcon;
    export var EditorModeEdit: __MaterialUI.SvgIcon;
    export var EditorMoneyOff: __MaterialUI.SvgIcon;
    export var EditorPublish: __MaterialUI.SvgIcon;
    export var EditorShortText: __MaterialUI.SvgIcon;
    export var EditorSpaceBar: __MaterialUI.SvgIcon;
    export var EditorStrikethroughS: __MaterialUI.SvgIcon;
    export var EditorTextFields: __MaterialUI.SvgIcon;
    export var EditorVerticalAlignBottom: __MaterialUI.SvgIcon;
    export var EditorVerticalAlignCenter: __MaterialUI.SvgIcon;
    export var EditorVerticalAlignTop: __MaterialUI.SvgIcon;
    export var EditorWrapText: __MaterialUI.SvgIcon;
    export var FileAttachment: __MaterialUI.SvgIcon;
    export var FileCloudCircle: __MaterialUI.SvgIcon;
    export var FileCloudDone: __MaterialUI.SvgIcon;
    export var FileCloudDownload: __MaterialUI.SvgIcon;
    export var FileCloudOff: __MaterialUI.SvgIcon;
    export var FileCloudQueue: __MaterialUI.SvgIcon;
    export var FileCloudUpload: __MaterialUI.SvgIcon;
    export var FileCloud: __MaterialUI.SvgIcon;
    export var FileCreateNewFolder: __MaterialUI.SvgIcon;
    export var FileFileDownload: __MaterialUI.SvgIcon;
    export var FileFileUpload: __MaterialUI.SvgIcon;
    export var FileFolderOpen: __MaterialUI.SvgIcon;
    export var FileFolderShared: __MaterialUI.SvgIcon;
    export var FileFolder: __MaterialUI.SvgIcon;
    export var HardwareCastConnected: __MaterialUI.SvgIcon;
    export var HardwareCast: __MaterialUI.SvgIcon;
    export var HardwareComputer: __MaterialUI.SvgIcon;
    export var HardwareDesktopMac: __MaterialUI.SvgIcon;
    export var HardwareDesktopWindows: __MaterialUI.SvgIcon;
    export var HardwareDeveloperBoard: __MaterialUI.SvgIcon;
    export var HardwareDeviceHub: __MaterialUI.SvgIcon;
    export var HardwareDevicesOther: __MaterialUI.SvgIcon;
    export var HardwareDock: __MaterialUI.SvgIcon;
    export var HardwareGamepad: __MaterialUI.SvgIcon;
    export var HardwareHeadsetMic: __MaterialUI.SvgIcon;
    export var HardwareHeadset: __MaterialUI.SvgIcon;
    export var HardwareKeyboardArrowDown: __MaterialUI.SvgIcon;
    export var HardwareKeyboardArrowLeft: __MaterialUI.SvgIcon;
    export var HardwareKeyboardArrowRight: __MaterialUI.SvgIcon;
    export var HardwareKeyboardArrowUp: __MaterialUI.SvgIcon;
    export var HardwareKeyboardBackspace: __MaterialUI.SvgIcon;
    export var HardwareKeyboardCapslock: __MaterialUI.SvgIcon;
    export var HardwareKeyboardHide: __MaterialUI.SvgIcon;
    export var HardwareKeyboardReturn: __MaterialUI.SvgIcon;
    export var HardwareKeyboardTab: __MaterialUI.SvgIcon;
    export var HardwareKeyboardVoice: __MaterialUI.SvgIcon;
    export var HardwareKeyboard: __MaterialUI.SvgIcon;
    export var HardwareLaptopChromebook: __MaterialUI.SvgIcon;
    export var HardwareLaptopMac: __MaterialUI.SvgIcon;
    export var HardwareLaptopWindows: __MaterialUI.SvgIcon;
    export var HardwareLaptop: __MaterialUI.SvgIcon;
    export var HardwareMemory: __MaterialUI.SvgIcon;
    export var HardwareMouse: __MaterialUI.SvgIcon;
    export var HardwarePhoneAndroid: __MaterialUI.SvgIcon;
    export var HardwarePhoneIphone: __MaterialUI.SvgIcon;
    export var HardwarePhonelinkOff: __MaterialUI.SvgIcon;
    export var HardwarePhonelink: __MaterialUI.SvgIcon;
    export var HardwarePowerInput: __MaterialUI.SvgIcon;
    export var HardwareRouter: __MaterialUI.SvgIcon;
    export var HardwareScanner: __MaterialUI.SvgIcon;
    export var HardwareSecurity: __MaterialUI.SvgIcon;
    export var HardwareSimCard: __MaterialUI.SvgIcon;
    export var HardwareSmartphone: __MaterialUI.SvgIcon;
    export var HardwareSpeakerGroup: __MaterialUI.SvgIcon;
    export var HardwareSpeaker: __MaterialUI.SvgIcon;
    export var HardwareTabletAndroid: __MaterialUI.SvgIcon;
    export var HardwareTabletMac: __MaterialUI.SvgIcon;
    export var HardwareTablet: __MaterialUI.SvgIcon;
    export var HardwareToys: __MaterialUI.SvgIcon;
    export var HardwareTv: __MaterialUI.SvgIcon;
    export var HardwareVideogameAsset: __MaterialUI.SvgIcon;
    export var HardwareWatch: __MaterialUI.SvgIcon;
    export var ImageAddAPhoto: __MaterialUI.SvgIcon;
    export var ImageAddToPhotos: __MaterialUI.SvgIcon;
    export var ImageAdjust: __MaterialUI.SvgIcon;
    export var ImageAssistantPhoto: __MaterialUI.SvgIcon;
    export var ImageAssistant: __MaterialUI.SvgIcon;
    export var ImageAudiotrack: __MaterialUI.SvgIcon;
    export var ImageBlurCircular: __MaterialUI.SvgIcon;
    export var ImageBlurLinear: __MaterialUI.SvgIcon;
    export var ImageBlurOff: __MaterialUI.SvgIcon;
    export var ImageBlurOn: __MaterialUI.SvgIcon;
    export var ImageBrightness1: __MaterialUI.SvgIcon;
    export var ImageBrightness2: __MaterialUI.SvgIcon;
    export var ImageBrightness3: __MaterialUI.SvgIcon;
    export var ImageBrightness4: __MaterialUI.SvgIcon;
    export var ImageBrightness5: __MaterialUI.SvgIcon;
    export var ImageBrightness6: __MaterialUI.SvgIcon;
    export var ImageBrightness7: __MaterialUI.SvgIcon;
    export var ImageBrokenImage: __MaterialUI.SvgIcon;
    export var ImageBrush: __MaterialUI.SvgIcon;
    export var ImageCameraAlt: __MaterialUI.SvgIcon;
    export var ImageCameraFront: __MaterialUI.SvgIcon;
    export var ImageCameraRear: __MaterialUI.SvgIcon;
    export var ImageCameraRoll: __MaterialUI.SvgIcon;
    export var ImageCamera: __MaterialUI.SvgIcon;
    export var ImageCenterFocusStrong: __MaterialUI.SvgIcon;
    export var ImageCenterFocusWeak: __MaterialUI.SvgIcon;
    export var ImageCollectionsBookmark: __MaterialUI.SvgIcon;
    export var ImageCollections: __MaterialUI.SvgIcon;
    export var ImageColorLens: __MaterialUI.SvgIcon;
    export var ImageColorize: __MaterialUI.SvgIcon;
    export var ImageCompare: __MaterialUI.SvgIcon;
    export var ImageControlPointDuplicate: __MaterialUI.SvgIcon;
    export var ImageControlPoint: __MaterialUI.SvgIcon;
    export var ImageCrop169: __MaterialUI.SvgIcon;
    export var ImageCrop32: __MaterialUI.SvgIcon;
    export var ImageCrop54: __MaterialUI.SvgIcon;
    export var ImageCrop75: __MaterialUI.SvgIcon;
    export var ImageCropDin: __MaterialUI.SvgIcon;
    export var ImageCropFree: __MaterialUI.SvgIcon;
    export var ImageCropLandscape: __MaterialUI.SvgIcon;
    export var ImageCropOriginal: __MaterialUI.SvgIcon;
    export var ImageCropPortrait: __MaterialUI.SvgIcon;
    export var ImageCropRotate: __MaterialUI.SvgIcon;
    export var ImageCropSquare: __MaterialUI.SvgIcon;
    export var ImageCrop: __MaterialUI.SvgIcon;
    export var ImageDehaze: __MaterialUI.SvgIcon;
    export var ImageDetails: __MaterialUI.SvgIcon;
    export var ImageEdit: __MaterialUI.SvgIcon;
    export var ImageExposureNeg1: __MaterialUI.SvgIcon;
    export var ImageExposureNeg2: __MaterialUI.SvgIcon;
    export var ImageExposurePlus1: __MaterialUI.SvgIcon;
    export var ImageExposurePlus2: __MaterialUI.SvgIcon;
    export var ImageExposureZero: __MaterialUI.SvgIcon;
    export var ImageExposure: __MaterialUI.SvgIcon;
    export var ImageFilter1: __MaterialUI.SvgIcon;
    export var ImageFilter2: __MaterialUI.SvgIcon;
    export var ImageFilter3: __MaterialUI.SvgIcon;
    export var ImageFilter4: __MaterialUI.SvgIcon;
    export var ImageFilter5: __MaterialUI.SvgIcon;
    export var ImageFilter6: __MaterialUI.SvgIcon;
    export var ImageFilter7: __MaterialUI.SvgIcon;
    export var ImageFilter8: __MaterialUI.SvgIcon;
    export var ImageFilter9Plus: __MaterialUI.SvgIcon;
    export var ImageFilter9: __MaterialUI.SvgIcon;
    export var ImageFilterBAndW: __MaterialUI.SvgIcon;
    export var ImageFilterCenterFocus: __MaterialUI.SvgIcon;
    export var ImageFilterDrama: __MaterialUI.SvgIcon;
    export var ImageFilterFrames: __MaterialUI.SvgIcon;
    export var ImageFilterHdr: __MaterialUI.SvgIcon;
    export var ImageFilterNone: __MaterialUI.SvgIcon;
    export var ImageFilterTiltShift: __MaterialUI.SvgIcon;
    export var ImageFilterVintage: __MaterialUI.SvgIcon;
    export var ImageFilter: __MaterialUI.SvgIcon;
    export var ImageFlare: __MaterialUI.SvgIcon;
    export var ImageFlashAuto: __MaterialUI.SvgIcon;
    export var ImageFlashOff: __MaterialUI.SvgIcon;
    export var ImageFlashOn: __MaterialUI.SvgIcon;
    export var ImageFlip: __MaterialUI.SvgIcon;
    export var ImageGradient: __MaterialUI.SvgIcon;
    export var ImageGrain: __MaterialUI.SvgIcon;
    export var ImageGridOff: __MaterialUI.SvgIcon;
    export var ImageGridOn: __MaterialUI.SvgIcon;
    export var ImageHdrOff: __MaterialUI.SvgIcon;
    export var ImageHdrOn: __MaterialUI.SvgIcon;
    export var ImageHdrStrong: __MaterialUI.SvgIcon;
    export var ImageHdrWeak: __MaterialUI.SvgIcon;
    export var ImageHealing: __MaterialUI.SvgIcon;
    export var ImageImageAspectRatio: __MaterialUI.SvgIcon;
    export var ImageImage: __MaterialUI.SvgIcon;
    export var ImageIso: __MaterialUI.SvgIcon;
    export var ImageLandscape: __MaterialUI.SvgIcon;
    export var ImageLeakAdd: __MaterialUI.SvgIcon;
    export var ImageLeakRemove: __MaterialUI.SvgIcon;
    export var ImageLens: __MaterialUI.SvgIcon;
    export var ImageLinkedCamera: __MaterialUI.SvgIcon;
    export var ImageLooks3: __MaterialUI.SvgIcon;
    export var ImageLooks4: __MaterialUI.SvgIcon;
    export var ImageLooks5: __MaterialUI.SvgIcon;
    export var ImageLooks6: __MaterialUI.SvgIcon;
    export var ImageLooksOne: __MaterialUI.SvgIcon;
    export var ImageLooksTwo: __MaterialUI.SvgIcon;
    export var ImageLooks: __MaterialUI.SvgIcon;
    export var ImageLoupe: __MaterialUI.SvgIcon;
    export var ImageMonochromePhotos: __MaterialUI.SvgIcon;
    export var ImageMovieCreation: __MaterialUI.SvgIcon;
    export var ImageMovieFilter: __MaterialUI.SvgIcon;
    export var ImageMusicNote: __MaterialUI.SvgIcon;
    export var ImageNaturePeople: __MaterialUI.SvgIcon;
    export var ImageNature: __MaterialUI.SvgIcon;
    export var ImageNavigateBefore: __MaterialUI.SvgIcon;
    export var ImageNavigateNext: __MaterialUI.SvgIcon;
    export var ImagePalette: __MaterialUI.SvgIcon;
    export var ImagePanoramaFishEye: __MaterialUI.SvgIcon;
    export var ImagePanoramaHorizontal: __MaterialUI.SvgIcon;
    export var ImagePanoramaVertical: __MaterialUI.SvgIcon;
    export var ImagePanoramaWideAngle: __MaterialUI.SvgIcon;
    export var ImagePanorama: __MaterialUI.SvgIcon;
    export var ImagePhotoAlbum: __MaterialUI.SvgIcon;
    export var ImagePhotoCamera: __MaterialUI.SvgIcon;
    export var ImagePhotoFilter: __MaterialUI.SvgIcon;
    export var ImagePhotoLibrary: __MaterialUI.SvgIcon;
    export var ImagePhotoSizeSelectActual: __MaterialUI.SvgIcon;
    export var ImagePhotoSizeSelectLarge: __MaterialUI.SvgIcon;
    export var ImagePhotoSizeSelectSmall: __MaterialUI.SvgIcon;
    export var ImagePhoto: __MaterialUI.SvgIcon;
    export var ImagePictureAsPdf: __MaterialUI.SvgIcon;
    export var ImagePortrait: __MaterialUI.SvgIcon;
    export var ImageRemoveRedEye: __MaterialUI.SvgIcon;
    export var ImageRotate90DegreesCcw: __MaterialUI.SvgIcon;
    export var ImageRotateLeft: __MaterialUI.SvgIcon;
    export var ImageRotateRight: __MaterialUI.SvgIcon;
    export var ImageSlideshow: __MaterialUI.SvgIcon;
    export var ImageStraighten: __MaterialUI.SvgIcon;
    export var ImageStyle: __MaterialUI.SvgIcon;
    export var ImageSwitchCamera: __MaterialUI.SvgIcon;
    export var ImageSwitchVideo: __MaterialUI.SvgIcon;
    export var ImageTagFaces: __MaterialUI.SvgIcon;
    export var ImageTexture: __MaterialUI.SvgIcon;
    export var ImageTimelapse: __MaterialUI.SvgIcon;
    export var ImageTimer10: __MaterialUI.SvgIcon;
    export var ImageTimer3: __MaterialUI.SvgIcon;
    export var ImageTimerOff: __MaterialUI.SvgIcon;
    export var ImageTimer: __MaterialUI.SvgIcon;
    export var ImageTonality: __MaterialUI.SvgIcon;
    export var ImageTransform: __MaterialUI.SvgIcon;
    export var ImageTune: __MaterialUI.SvgIcon;
    export var ImageViewComfy: __MaterialUI.SvgIcon;
    export var ImageViewCompact: __MaterialUI.SvgIcon;
    export var ImageVignette: __MaterialUI.SvgIcon;
    export var ImageWbAuto: __MaterialUI.SvgIcon;
    export var ImageWbCloudy: __MaterialUI.SvgIcon;
    export var ImageWbIncandescent: __MaterialUI.SvgIcon;
    export var ImageWbIridescent: __MaterialUI.SvgIcon;
    export var ImageWbSunny: __MaterialUI.SvgIcon;
    export var MapsAddLocation: __MaterialUI.SvgIcon;
    export var MapsBeenhere: __MaterialUI.SvgIcon;
    export var MapsDirectionsBike: __MaterialUI.SvgIcon;
    export var MapsDirectionsBoat: __MaterialUI.SvgIcon;
    export var MapsDirectionsBus: __MaterialUI.SvgIcon;
    export var MapsDirectionsCar: __MaterialUI.SvgIcon;
    export var MapsDirectionsRailway: __MaterialUI.SvgIcon;
    export var MapsDirectionsRun: __MaterialUI.SvgIcon;
    export var MapsDirectionsSubway: __MaterialUI.SvgIcon;
    export var MapsDirectionsTransit: __MaterialUI.SvgIcon;
    export var MapsDirectionsWalk: __MaterialUI.SvgIcon;
    export var MapsDirections: __MaterialUI.SvgIcon;
    export var MapsEditLocation: __MaterialUI.SvgIcon;
    export var MapsFlight: __MaterialUI.SvgIcon;
    export var MapsHotel: __MaterialUI.SvgIcon;
    export var MapsLayersClear: __MaterialUI.SvgIcon;
    export var MapsLayers: __MaterialUI.SvgIcon;
    export var MapsLocalActivity: __MaterialUI.SvgIcon;
    export var MapsLocalAirport: __MaterialUI.SvgIcon;
    export var MapsLocalAtm: __MaterialUI.SvgIcon;
    export var MapsLocalBar: __MaterialUI.SvgIcon;
    export var MapsLocalCafe: __MaterialUI.SvgIcon;
    export var MapsLocalCarWash: __MaterialUI.SvgIcon;
    export var MapsLocalConvenienceStore: __MaterialUI.SvgIcon;
    export var MapsLocalDining: __MaterialUI.SvgIcon;
    export var MapsLocalDrink: __MaterialUI.SvgIcon;
    export var MapsLocalFlorist: __MaterialUI.SvgIcon;
    export var MapsLocalGasStation: __MaterialUI.SvgIcon;
    export var MapsLocalGroceryStore: __MaterialUI.SvgIcon;
    export var MapsLocalHospital: __MaterialUI.SvgIcon;
    export var MapsLocalHotel: __MaterialUI.SvgIcon;
    export var MapsLocalLaundryService: __MaterialUI.SvgIcon;
    export var MapsLocalLibrary: __MaterialUI.SvgIcon;
    export var MapsLocalMall: __MaterialUI.SvgIcon;
    export var MapsLocalMovies: __MaterialUI.SvgIcon;
    export var MapsLocalOffer: __MaterialUI.SvgIcon;
    export var MapsLocalParking: __MaterialUI.SvgIcon;
    export var MapsLocalPharmacy: __MaterialUI.SvgIcon;
    export var MapsLocalPhone: __MaterialUI.SvgIcon;
    export var MapsLocalPizza: __MaterialUI.SvgIcon;
    export var MapsLocalPlay: __MaterialUI.SvgIcon;
    export var MapsLocalPostOffice: __MaterialUI.SvgIcon;
    export var MapsLocalPrintshop: __MaterialUI.SvgIcon;
    export var MapsLocalSee: __MaterialUI.SvgIcon;
    export var MapsLocalShipping: __MaterialUI.SvgIcon;
    export var MapsLocalTaxi: __MaterialUI.SvgIcon;
    export var MapsMap: __MaterialUI.SvgIcon;
    export var MapsMyLocation: __MaterialUI.SvgIcon;
    export var MapsNavigation: __MaterialUI.SvgIcon;
    export var MapsNearMe: __MaterialUI.SvgIcon;
    export var MapsPersonPinCircle: __MaterialUI.SvgIcon;
    export var MapsPersonPin: __MaterialUI.SvgIcon;
    export var MapsPinDrop: __MaterialUI.SvgIcon;
    export var MapsPlace: __MaterialUI.SvgIcon;
    export var MapsRateReview: __MaterialUI.SvgIcon;
    export var MapsRestaurantMenu: __MaterialUI.SvgIcon;
    export var MapsSatellite: __MaterialUI.SvgIcon;
    export var MapsStoreMallDirectory: __MaterialUI.SvgIcon;
    export var MapsTerrain: __MaterialUI.SvgIcon;
    export var MapsTraffic: __MaterialUI.SvgIcon;
    export var MapsZoomOutMap: __MaterialUI.SvgIcon;
    export var NavigationApps: __MaterialUI.SvgIcon;
    export var NavigationArrowBack: __MaterialUI.SvgIcon;
    export var NavigationArrowDownward: __MaterialUI.SvgIcon;
    export var NavigationArrowDropDownCircle: __MaterialUI.SvgIcon;
    export var NavigationArrowDropDown: __MaterialUI.SvgIcon;
    export var NavigationArrowDropUp: __MaterialUI.SvgIcon;
    export var NavigationArrowForward: __MaterialUI.SvgIcon;
    export var NavigationArrowUpward: __MaterialUI.SvgIcon;
    export var NavigationCancel: __MaterialUI.SvgIcon;
    export var NavigationCheck: __MaterialUI.SvgIcon;
    export var NavigationChevronLeft: __MaterialUI.SvgIcon;
    export var NavigationChevronRight: __MaterialUI.SvgIcon;
    export var NavigationClose: __MaterialUI.SvgIcon;
    export var NavigationExpandLess: __MaterialUI.SvgIcon;
    export var NavigationExpandMore: __MaterialUI.SvgIcon;
    export var NavigationFullscreenExit: __MaterialUI.SvgIcon;
    export var NavigationFullscreen: __MaterialUI.SvgIcon;
    export var NavigationMenu: __MaterialUI.SvgIcon;
    export var NavigationMoreHoriz: __MaterialUI.SvgIcon;
    export var NavigationMoreVert: __MaterialUI.SvgIcon;
    export var NavigationRefresh: __MaterialUI.SvgIcon;
    export var NavigationSubdirectoryArrowLeft: __MaterialUI.SvgIcon;
    export var NavigationSubdirectoryArrowRight: __MaterialUI.SvgIcon;
    export var NavigationUnfoldLess: __MaterialUI.SvgIcon;
    export var NavigationUnfoldMore: __MaterialUI.SvgIcon;
    export var NavigationArrowDropRight: __MaterialUI.SvgIcon;
    export var NotificationAdb: __MaterialUI.SvgIcon;
    export var NotificationAirlineSeatFlatAngled: __MaterialUI.SvgIcon;
    export var NotificationAirlineSeatFlat: __MaterialUI.SvgIcon;
    export var NotificationAirlineSeatIndividualSuite: __MaterialUI.SvgIcon;
    export var NotificationAirlineSeatLegroomExtra: __MaterialUI.SvgIcon;
    export var NotificationAirlineSeatLegroomNormal: __MaterialUI.SvgIcon;
    export var NotificationAirlineSeatLegroomReduced: __MaterialUI.SvgIcon;
    export var NotificationAirlineSeatReclineExtra: __MaterialUI.SvgIcon;
    export var NotificationAirlineSeatReclineNormal: __MaterialUI.SvgIcon;
    export var NotificationBluetoothAudio: __MaterialUI.SvgIcon;
    export var NotificationConfirmationNumber: __MaterialUI.SvgIcon;
    export var NotificationDiscFull: __MaterialUI.SvgIcon;
    export var NotificationDoNotDisturbAlt: __MaterialUI.SvgIcon;
    export var NotificationDoNotDisturb: __MaterialUI.SvgIcon;
    export var NotificationDriveEta: __MaterialUI.SvgIcon;
    export var NotificationEnhancedEncryption: __MaterialUI.SvgIcon;
    export var NotificationEventAvailable: __MaterialUI.SvgIcon;
    export var NotificationEventBusy: __MaterialUI.SvgIcon;
    export var NotificationEventNote: __MaterialUI.SvgIcon;
    export var NotificationFolderSpecial: __MaterialUI.SvgIcon;
    export var NotificationLiveTv: __MaterialUI.SvgIcon;
    export var NotificationMms: __MaterialUI.SvgIcon;
    export var NotificationMore: __MaterialUI.SvgIcon;
    export var NotificationNetworkCheck: __MaterialUI.SvgIcon;
    export var NotificationNetworkLocked: __MaterialUI.SvgIcon;
    export var NotificationNoEncryption: __MaterialUI.SvgIcon;
    export var NotificationOndemandVideo: __MaterialUI.SvgIcon;
    export var NotificationPersonalVideo: __MaterialUI.SvgIcon;
    export var NotificationPhoneBluetoothSpeaker: __MaterialUI.SvgIcon;
    export var NotificationPhoneForwarded: __MaterialUI.SvgIcon;
    export var NotificationPhoneInTalk: __MaterialUI.SvgIcon;
    export var NotificationPhoneLocked: __MaterialUI.SvgIcon;
    export var NotificationPhoneMissed: __MaterialUI.SvgIcon;
    export var NotificationPhonePaused: __MaterialUI.SvgIcon;
    export var NotificationPower: __MaterialUI.SvgIcon;
    export var NotificationRvHookup: __MaterialUI.SvgIcon;
    export var NotificationSdCard: __MaterialUI.SvgIcon;
    export var NotificationSimCardAlert: __MaterialUI.SvgIcon;
    export var NotificationSmsFailed: __MaterialUI.SvgIcon;
    export var NotificationSms: __MaterialUI.SvgIcon;
    export var NotificationSyncDisabled: __MaterialUI.SvgIcon;
    export var NotificationSyncProblem: __MaterialUI.SvgIcon;
    export var NotificationSync: __MaterialUI.SvgIcon;
    export var NotificationSystemUpdate: __MaterialUI.SvgIcon;
    export var NotificationTapAndPlay: __MaterialUI.SvgIcon;
    export var NotificationTimeToLeave: __MaterialUI.SvgIcon;
    export var NotificationVibration: __MaterialUI.SvgIcon;
    export var NotificationVoiceChat: __MaterialUI.SvgIcon;
    export var NotificationVpnLock: __MaterialUI.SvgIcon;
    export var NotificationWc: __MaterialUI.SvgIcon;
    export var NotificationWifi: __MaterialUI.SvgIcon;
    export var PlacesAcUnit: __MaterialUI.SvgIcon;
    export var PlacesAirportShuttle: __MaterialUI.SvgIcon;
    export var PlacesAllInclusive: __MaterialUI.SvgIcon;
    export var PlacesBeachAccess: __MaterialUI.SvgIcon;
    export var PlacesBusinessCenter: __MaterialUI.SvgIcon;
    export var PlacesCasino: __MaterialUI.SvgIcon;
    export var PlacesChildCare: __MaterialUI.SvgIcon;
    export var PlacesChildFriendly: __MaterialUI.SvgIcon;
    export var PlacesFitnessCenter: __MaterialUI.SvgIcon;
    export var PlacesFreeBreakfast: __MaterialUI.SvgIcon;
    export var PlacesGolfCourse: __MaterialUI.SvgIcon;
    export var PlacesHotTub: __MaterialUI.SvgIcon;
    export var PlacesKitchen: __MaterialUI.SvgIcon;
    export var PlacesPool: __MaterialUI.SvgIcon;
    export var PlacesRoomService: __MaterialUI.SvgIcon;
    export var PlacesSmokeFree: __MaterialUI.SvgIcon;
    export var PlacesSmokingRooms: __MaterialUI.SvgIcon;
    export var PlacesSpa: __MaterialUI.SvgIcon;
    export var SocialCake: __MaterialUI.SvgIcon;
    export var SocialDomain: __MaterialUI.SvgIcon;
    export var SocialGroupAdd: __MaterialUI.SvgIcon;
    export var SocialGroup: __MaterialUI.SvgIcon;
    export var SocialLocationCity: __MaterialUI.SvgIcon;
    export var SocialMoodBad: __MaterialUI.SvgIcon;
    export var SocialMood: __MaterialUI.SvgIcon;
    export var SocialNotificationsActive: __MaterialUI.SvgIcon;
    export var SocialNotificationsNone: __MaterialUI.SvgIcon;
    export var SocialNotificationsOff: __MaterialUI.SvgIcon;
    export var SocialNotificationsPaused: __MaterialUI.SvgIcon;
    export var SocialNotifications: __MaterialUI.SvgIcon;
    export var SocialPages: __MaterialUI.SvgIcon;
    export var SocialPartyMode: __MaterialUI.SvgIcon;
    export var SocialPeopleOutline: __MaterialUI.SvgIcon;
    export var SocialPeople: __MaterialUI.SvgIcon;
    export var SocialPersonAdd: __MaterialUI.SvgIcon;
    export var SocialPersonOutline: __MaterialUI.SvgIcon;
    export var SocialPerson: __MaterialUI.SvgIcon;
    export var SocialPlusOne: __MaterialUI.SvgIcon;
    export var SocialPoll: __MaterialUI.SvgIcon;
    export var SocialPublic: __MaterialUI.SvgIcon;
    export var SocialSchool: __MaterialUI.SvgIcon;
    export var SocialShare: __MaterialUI.SvgIcon;
    export var SocialWhatshot: __MaterialUI.SvgIcon;
    export var ToggleCheckBoxOutlineBlank: __MaterialUI.SvgIcon;
    export var ToggleCheckBox: __MaterialUI.SvgIcon;
    export var ToggleIndeterminateCheckBox: __MaterialUI.SvgIcon;
    export var ToggleRadioButtonChecked: __MaterialUI.SvgIcon;
    export var ToggleRadioButtonUnchecked: __MaterialUI.SvgIcon;
    export var ToggleStarBorder: __MaterialUI.SvgIcon;
    export var ToggleStarHalf: __MaterialUI.SvgIcon;
    export var ToggleStar: __MaterialUI.SvgIcon;
}