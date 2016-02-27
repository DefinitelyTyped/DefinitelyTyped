// Type definitions for material-ui v0.13.4
// Project: https://github.com/callemall/material-ui
// Definitions by: Nathan Brown <https://github.com/ngbrown>, Oliver Herrmann <https://github.com/herrmanno>, Ali Malekpour <https://github.com/malekpour>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../react/react.d.ts' />

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
    export import ActionAccessibility = __MaterialUI.SvgIcon;
    export import ActionAccessible = __MaterialUI.SvgIcon;
    export import ActionAccountBalanceWallet = __MaterialUI.SvgIcon;
    export import ActionAccountBalance = __MaterialUI.SvgIcon;
    export import ActionAccountBox = __MaterialUI.SvgIcon;
    export import ActionAccountCircle = __MaterialUI.SvgIcon;
    export import ActionAddShoppingCart = __MaterialUI.SvgIcon;
    export import ActionAlarmAdd = __MaterialUI.SvgIcon;
    export import ActionAlarmOff = __MaterialUI.SvgIcon;
    export import ActionAlarmOn = __MaterialUI.SvgIcon;
    export import ActionAlarm = __MaterialUI.SvgIcon;
    export import ActionAllOut = __MaterialUI.SvgIcon;
    export import ActionAndroid = __MaterialUI.SvgIcon;
    export import ActionAnnouncement = __MaterialUI.SvgIcon;
    export import ActionAspectRatio = __MaterialUI.SvgIcon;
    export import ActionAssessment = __MaterialUI.SvgIcon;
    export import ActionAssignmentInd = __MaterialUI.SvgIcon;
    export import ActionAssignmentLate = __MaterialUI.SvgIcon;
    export import ActionAssignmentReturn = __MaterialUI.SvgIcon;
    export import ActionAssignmentReturned = __MaterialUI.SvgIcon;
    export import ActionAssignmentTurnedIn = __MaterialUI.SvgIcon;
    export import ActionAssignment = __MaterialUI.SvgIcon;
    export import ActionAutorenew = __MaterialUI.SvgIcon;
    export import ActionBackup = __MaterialUI.SvgIcon;
    export import ActionBook = __MaterialUI.SvgIcon;
    export import ActionBookmarkBorder = __MaterialUI.SvgIcon;
    export import ActionBookmark = __MaterialUI.SvgIcon;
    export import ActionBugReport = __MaterialUI.SvgIcon;
    export import ActionBuild = __MaterialUI.SvgIcon;
    export import ActionCached = __MaterialUI.SvgIcon;
    export import ActionCameraEnhance = __MaterialUI.SvgIcon;
    export import ActionCardGiftcard = __MaterialUI.SvgIcon;
    export import ActionCardMembership = __MaterialUI.SvgIcon;
    export import ActionCardTravel = __MaterialUI.SvgIcon;
    export import ActionChangeHistory = __MaterialUI.SvgIcon;
    export import ActionCheckCircle = __MaterialUI.SvgIcon;
    export import ActionChromeReaderMode = __MaterialUI.SvgIcon;
    export import ActionClass = __MaterialUI.SvgIcon;
    export import ActionCode = __MaterialUI.SvgIcon;
    export import ActionCompareArrows = __MaterialUI.SvgIcon;
    export import ActionCopyright = __MaterialUI.SvgIcon;
    export import ActionCreditCard = __MaterialUI.SvgIcon;
    export import ActionDashboard = __MaterialUI.SvgIcon;
    export import ActionDateRange = __MaterialUI.SvgIcon;
    export import ActionDelete = __MaterialUI.SvgIcon;
    export import ActionDescription = __MaterialUI.SvgIcon;
    export import ActionDns = __MaterialUI.SvgIcon;
    export import ActionDoneAll = __MaterialUI.SvgIcon;
    export import ActionDone = __MaterialUI.SvgIcon;
    export import ActionDonutLarge = __MaterialUI.SvgIcon;
    export import ActionDonutSmall = __MaterialUI.SvgIcon;
    export import ActionEject = __MaterialUI.SvgIcon;
    export import ActionEventSeat = __MaterialUI.SvgIcon;
    export import ActionEvent = __MaterialUI.SvgIcon;
    export import ActionExitToApp = __MaterialUI.SvgIcon;
    export import ActionExplore = __MaterialUI.SvgIcon;
    export import ActionExtension = __MaterialUI.SvgIcon;
    export import ActionFace = __MaterialUI.SvgIcon;
    export import ActionFavoriteBorder = __MaterialUI.SvgIcon;
    export import ActionFavorite = __MaterialUI.SvgIcon;
    export import ActionFeedback = __MaterialUI.SvgIcon;
    export import ActionFindInPage = __MaterialUI.SvgIcon;
    export import ActionFindReplace = __MaterialUI.SvgIcon;
    export import ActionFingerprint = __MaterialUI.SvgIcon;
    export import ActionFlightLand = __MaterialUI.SvgIcon;
    export import ActionFlightTakeoff = __MaterialUI.SvgIcon;
    export import ActionFlipToBack = __MaterialUI.SvgIcon;
    export import ActionFlipToFront = __MaterialUI.SvgIcon;
    export import ActionGavel = __MaterialUI.SvgIcon;
    export import ActionGetApp = __MaterialUI.SvgIcon;
    export import ActionGif = __MaterialUI.SvgIcon;
    export import ActionGrade = __MaterialUI.SvgIcon;
    export import ActionGroupWork = __MaterialUI.SvgIcon;
    export import ActionHelpOutline = __MaterialUI.SvgIcon;
    export import ActionHelp = __MaterialUI.SvgIcon;
    export import ActionHighlightOff = __MaterialUI.SvgIcon;
    export import ActionHistory = __MaterialUI.SvgIcon;
    export import ActionHome = __MaterialUI.SvgIcon;
    export import ActionHourglassEmpty = __MaterialUI.SvgIcon;
    export import ActionHourglassFull = __MaterialUI.SvgIcon;
    export import ActionHttp = __MaterialUI.SvgIcon;
    export import ActionHttps = __MaterialUI.SvgIcon;
    export import ActionImportantDevices = __MaterialUI.SvgIcon;
    export import ActionInfoOutline = __MaterialUI.SvgIcon;
    export import ActionInfo = __MaterialUI.SvgIcon;
    export import ActionInput = __MaterialUI.SvgIcon;
    export import ActionInvertColors = __MaterialUI.SvgIcon;
    export import ActionLabelOutline = __MaterialUI.SvgIcon;
    export import ActionLabel = __MaterialUI.SvgIcon;
    export import ActionLanguage = __MaterialUI.SvgIcon;
    export import ActionLaunch = __MaterialUI.SvgIcon;
    export import ActionLightbulbOutline = __MaterialUI.SvgIcon;
    export import ActionLineStyle = __MaterialUI.SvgIcon;
    export import ActionLineWeight = __MaterialUI.SvgIcon;
    export import ActionList = __MaterialUI.SvgIcon;
    export import ActionLockOpen = __MaterialUI.SvgIcon;
    export import ActionLockOutline = __MaterialUI.SvgIcon;
    export import ActionLock = __MaterialUI.SvgIcon;
    export import ActionLoyalty = __MaterialUI.SvgIcon;
    export import ActionMarkunreadMailbox = __MaterialUI.SvgIcon;
    export import ActionMotorcycle = __MaterialUI.SvgIcon;
    export import ActionNoteAdd = __MaterialUI.SvgIcon;
    export import ActionOfflinePin = __MaterialUI.SvgIcon;
    export import ActionOpacity = __MaterialUI.SvgIcon;
    export import ActionOpenInBrowser = __MaterialUI.SvgIcon;
    export import ActionOpenInNew = __MaterialUI.SvgIcon;
    export import ActionOpenWith = __MaterialUI.SvgIcon;
    export import ActionPageview = __MaterialUI.SvgIcon;
    export import ActionPanTool = __MaterialUI.SvgIcon;
    export import ActionPayment = __MaterialUI.SvgIcon;
    export import ActionPermCameraMic = __MaterialUI.SvgIcon;
    export import ActionPermContactCalendar = __MaterialUI.SvgIcon;
    export import ActionPermDataSetting = __MaterialUI.SvgIcon;
    export import ActionPermDeviceInformation = __MaterialUI.SvgIcon;
    export import ActionPermIdentity = __MaterialUI.SvgIcon;
    export import ActionPermMedia = __MaterialUI.SvgIcon;
    export import ActionPermPhoneMsg = __MaterialUI.SvgIcon;
    export import ActionPermScanWifi = __MaterialUI.SvgIcon;
    export import ActionPets = __MaterialUI.SvgIcon;
    export import ActionPictureInPictureAlt = __MaterialUI.SvgIcon;
    export import ActionPictureInPicture = __MaterialUI.SvgIcon;
    export import ActionPlayForWork = __MaterialUI.SvgIcon;
    export import ActionPolymer = __MaterialUI.SvgIcon;
    export import ActionPowerSettingsNew = __MaterialUI.SvgIcon;
    export import ActionPregnantWoman = __MaterialUI.SvgIcon;
    export import ActionPrint = __MaterialUI.SvgIcon;
    export import ActionQueryBuilder = __MaterialUI.SvgIcon;
    export import ActionQuestionAnswer = __MaterialUI.SvgIcon;
    export import ActionReceipt = __MaterialUI.SvgIcon;
    export import ActionRecordVoiceOver = __MaterialUI.SvgIcon;
    export import ActionRedeem = __MaterialUI.SvgIcon;
    export import ActionReorder = __MaterialUI.SvgIcon;
    export import ActionReportProblem = __MaterialUI.SvgIcon;
    export import ActionRestore = __MaterialUI.SvgIcon;
    export import ActionRoom = __MaterialUI.SvgIcon;
    export import ActionRoundedCorner = __MaterialUI.SvgIcon;
    export import ActionRowing = __MaterialUI.SvgIcon;
    export import ActionSchedule = __MaterialUI.SvgIcon;
    export import ActionSearch = __MaterialUI.SvgIcon;
    export import ActionSettingsApplications = __MaterialUI.SvgIcon;
    export import ActionSettingsBackupRestore = __MaterialUI.SvgIcon;
    export import ActionSettingsBluetooth = __MaterialUI.SvgIcon;
    export import ActionSettingsBrightness = __MaterialUI.SvgIcon;
    export import ActionSettingsCell = __MaterialUI.SvgIcon;
    export import ActionSettingsEthernet = __MaterialUI.SvgIcon;
    export import ActionSettingsInputAntenna = __MaterialUI.SvgIcon;
    export import ActionSettingsInputComponent = __MaterialUI.SvgIcon;
    export import ActionSettingsInputComposite = __MaterialUI.SvgIcon;
    export import ActionSettingsInputHdmi = __MaterialUI.SvgIcon;
    export import ActionSettingsInputSvideo = __MaterialUI.SvgIcon;
    export import ActionSettingsOverscan = __MaterialUI.SvgIcon;
    export import ActionSettingsPhone = __MaterialUI.SvgIcon;
    export import ActionSettingsPower = __MaterialUI.SvgIcon;
    export import ActionSettingsRemote = __MaterialUI.SvgIcon;
    export import ActionSettingsVoice = __MaterialUI.SvgIcon;
    export import ActionSettings = __MaterialUI.SvgIcon;
    export import ActionShopTwo = __MaterialUI.SvgIcon;
    export import ActionShop = __MaterialUI.SvgIcon;
    export import ActionShoppingBasket = __MaterialUI.SvgIcon;
    export import ActionShoppingCart = __MaterialUI.SvgIcon;
    export import ActionSpeakerNotes = __MaterialUI.SvgIcon;
    export import ActionSpellcheck = __MaterialUI.SvgIcon;
    export import ActionStars = __MaterialUI.SvgIcon;
    export import ActionStore = __MaterialUI.SvgIcon;
    export import ActionSubject = __MaterialUI.SvgIcon;
    export import ActionSupervisorAccount = __MaterialUI.SvgIcon;
    export import ActionSwapHoriz = __MaterialUI.SvgIcon;
    export import ActionSwapVert = __MaterialUI.SvgIcon;
    export import ActionSwapVerticalCircle = __MaterialUI.SvgIcon;
    export import ActionSystemUpdateAlt = __MaterialUI.SvgIcon;
    export import ActionTabUnselected = __MaterialUI.SvgIcon;
    export import ActionTab = __MaterialUI.SvgIcon;
    export import ActionTheaters = __MaterialUI.SvgIcon;
    export import ActionThreeDRotation = __MaterialUI.SvgIcon;
    export import ActionThumbDown = __MaterialUI.SvgIcon;
    export import ActionThumbUp = __MaterialUI.SvgIcon;
    export import ActionThumbsUpDown = __MaterialUI.SvgIcon;
    export import ActionTimeline = __MaterialUI.SvgIcon;
    export import ActionToc = __MaterialUI.SvgIcon;
    export import ActionToday = __MaterialUI.SvgIcon;
    export import ActionToll = __MaterialUI.SvgIcon;
    export import ActionTouchApp = __MaterialUI.SvgIcon;
    export import ActionTrackChanges = __MaterialUI.SvgIcon;
    export import ActionTranslate = __MaterialUI.SvgIcon;
    export import ActionTrendingDown = __MaterialUI.SvgIcon;
    export import ActionTrendingFlat = __MaterialUI.SvgIcon;
    export import ActionTrendingUp = __MaterialUI.SvgIcon;
    export import ActionTurnedInNot = __MaterialUI.SvgIcon;
    export import ActionTurnedIn = __MaterialUI.SvgIcon;
    export import ActionUpdate = __MaterialUI.SvgIcon;
    export import ActionVerifiedUser = __MaterialUI.SvgIcon;
    export import ActionViewAgenda = __MaterialUI.SvgIcon;
    export import ActionViewArray = __MaterialUI.SvgIcon;
    export import ActionViewCarousel = __MaterialUI.SvgIcon;
    export import ActionViewColumn = __MaterialUI.SvgIcon;
    export import ActionViewDay = __MaterialUI.SvgIcon;
    export import ActionViewHeadline = __MaterialUI.SvgIcon;
    export import ActionViewList = __MaterialUI.SvgIcon;
    export import ActionViewModule = __MaterialUI.SvgIcon;
    export import ActionViewQuilt = __MaterialUI.SvgIcon;
    export import ActionViewStream = __MaterialUI.SvgIcon;
    export import ActionViewWeek = __MaterialUI.SvgIcon;
    export import ActionVisibilityOff = __MaterialUI.SvgIcon;
    export import ActionVisibility = __MaterialUI.SvgIcon;
    export import ActionWatchLater = __MaterialUI.SvgIcon;
    export import ActionWork = __MaterialUI.SvgIcon;
    export import ActionYoutubeSearchedFor = __MaterialUI.SvgIcon;
    export import ActionZoomIn = __MaterialUI.SvgIcon;
    export import ActionZoomOut = __MaterialUI.SvgIcon;
    export import AlertAddAlert = __MaterialUI.SvgIcon;
    export import AlertErrorOutline = __MaterialUI.SvgIcon;
    export import AlertError = __MaterialUI.SvgIcon;
    export import AlertWarning = __MaterialUI.SvgIcon;
    export import AvAddToQueue = __MaterialUI.SvgIcon;
    export import AvAirplay = __MaterialUI.SvgIcon;
    export import AvAlbum = __MaterialUI.SvgIcon;
    export import AvArtTrack = __MaterialUI.SvgIcon;
    export import AvAvTimer = __MaterialUI.SvgIcon;
    export import AvClosedCaption = __MaterialUI.SvgIcon;
    export import AvEqualizer = __MaterialUI.SvgIcon;
    export import AvExplicit = __MaterialUI.SvgIcon;
    export import AvFastForward = __MaterialUI.SvgIcon;
    export import AvFastRewind = __MaterialUI.SvgIcon;
    export import AvFiberDvr = __MaterialUI.SvgIcon;
    export import AvFiberManualRecord = __MaterialUI.SvgIcon;
    export import AvFiberNew = __MaterialUI.SvgIcon;
    export import AvFiberPin = __MaterialUI.SvgIcon;
    export import AvFiberSmartRecord = __MaterialUI.SvgIcon;
    export import AvForward10 = __MaterialUI.SvgIcon;
    export import AvForward30 = __MaterialUI.SvgIcon;
    export import AvForward5 = __MaterialUI.SvgIcon;
    export import AvGames = __MaterialUI.SvgIcon;
    export import AvHd = __MaterialUI.SvgIcon;
    export import AvHearing = __MaterialUI.SvgIcon;
    export import AvHighQuality = __MaterialUI.SvgIcon;
    export import AvLibraryAdd = __MaterialUI.SvgIcon;
    export import AvLibraryBooks = __MaterialUI.SvgIcon;
    export import AvLibraryMusic = __MaterialUI.SvgIcon;
    export import AvLoop = __MaterialUI.SvgIcon;
    export import AvMicNone = __MaterialUI.SvgIcon;
    export import AvMicOff = __MaterialUI.SvgIcon;
    export import AvMic = __MaterialUI.SvgIcon;
    export import AvMovie = __MaterialUI.SvgIcon;
    export import AvMusicVideo = __MaterialUI.SvgIcon;
    export import AvNewReleases = __MaterialUI.SvgIcon;
    export import AvNotInterested = __MaterialUI.SvgIcon;
    export import AvPauseCircleFilled = __MaterialUI.SvgIcon;
    export import AvPauseCircleOutline = __MaterialUI.SvgIcon;
    export import AvPause = __MaterialUI.SvgIcon;
    export import AvPlayArrow = __MaterialUI.SvgIcon;
    export import AvPlayCircleFilled = __MaterialUI.SvgIcon;
    export import AvPlayCircleOutline = __MaterialUI.SvgIcon;
    export import AvPlaylistAddCheck = __MaterialUI.SvgIcon;
    export import AvPlaylistAdd = __MaterialUI.SvgIcon;
    export import AvPlaylistPlay = __MaterialUI.SvgIcon;
    export import AvQueueMusic = __MaterialUI.SvgIcon;
    export import AvQueuePlayNext = __MaterialUI.SvgIcon;
    export import AvQueue = __MaterialUI.SvgIcon;
    export import AvRadio = __MaterialUI.SvgIcon;
    export import AvRecentActors = __MaterialUI.SvgIcon;
    export import AvRemoveFromQueue = __MaterialUI.SvgIcon;
    export import AvRepeatOne = __MaterialUI.SvgIcon;
    export import AvRepeat = __MaterialUI.SvgIcon;
    export import AvReplay10 = __MaterialUI.SvgIcon;
    export import AvReplay30 = __MaterialUI.SvgIcon;
    export import AvReplay5 = __MaterialUI.SvgIcon;
    export import AvReplay = __MaterialUI.SvgIcon;
    export import AvShuffle = __MaterialUI.SvgIcon;
    export import AvSkipNext = __MaterialUI.SvgIcon;
    export import AvSkipPrevious = __MaterialUI.SvgIcon;
    export import AvSlowMotionVideo = __MaterialUI.SvgIcon;
    export import AvSnooze = __MaterialUI.SvgIcon;
    export import AvSortByAlpha = __MaterialUI.SvgIcon;
    export import AvStop = __MaterialUI.SvgIcon;
    export import AvSubscriptions = __MaterialUI.SvgIcon;
    export import AvSubtitles = __MaterialUI.SvgIcon;
    export import AvSurroundSound = __MaterialUI.SvgIcon;
    export import AvVideoLibrary = __MaterialUI.SvgIcon;
    export import AvVideocamOff = __MaterialUI.SvgIcon;
    export import AvVideocam = __MaterialUI.SvgIcon;
    export import AvVolumeDown = __MaterialUI.SvgIcon;
    export import AvVolumeMute = __MaterialUI.SvgIcon;
    export import AvVolumeOff = __MaterialUI.SvgIcon;
    export import AvVolumeUp = __MaterialUI.SvgIcon;
    export import AvWebAsset = __MaterialUI.SvgIcon;
    export import AvWeb = __MaterialUI.SvgIcon;
    export import CommunicationBusiness = __MaterialUI.SvgIcon;
    export import CommunicationCallEnd = __MaterialUI.SvgIcon;
    export import CommunicationCallMade = __MaterialUI.SvgIcon;
    export import CommunicationCallMerge = __MaterialUI.SvgIcon;
    export import CommunicationCallMissedOutgoing = __MaterialUI.SvgIcon;
    export import CommunicationCallMissed = __MaterialUI.SvgIcon;
    export import CommunicationCallReceived = __MaterialUI.SvgIcon;
    export import CommunicationCallSplit = __MaterialUI.SvgIcon;
    export import CommunicationCall = __MaterialUI.SvgIcon;
    export import CommunicationChatBubbleOutline = __MaterialUI.SvgIcon;
    export import CommunicationChatBubble = __MaterialUI.SvgIcon;
    export import CommunicationChat = __MaterialUI.SvgIcon;
    export import CommunicationClearAll = __MaterialUI.SvgIcon;
    export import CommunicationComment = __MaterialUI.SvgIcon;
    export import CommunicationContactMail = __MaterialUI.SvgIcon;
    export import CommunicationContactPhone = __MaterialUI.SvgIcon;
    export import CommunicationContacts = __MaterialUI.SvgIcon;
    export import CommunicationDialerSip = __MaterialUI.SvgIcon;
    export import CommunicationDialpad = __MaterialUI.SvgIcon;
    export import CommunicationEmail = __MaterialUI.SvgIcon;
    export import CommunicationForum = __MaterialUI.SvgIcon;
    export import CommunicationImportContacts = __MaterialUI.SvgIcon;
    export import CommunicationImportExport = __MaterialUI.SvgIcon;
    export import CommunicationInvertColorsOff = __MaterialUI.SvgIcon;
    export import CommunicationLiveHelp = __MaterialUI.SvgIcon;
    export import CommunicationLocationOff = __MaterialUI.SvgIcon;
    export import CommunicationLocationOn = __MaterialUI.SvgIcon;
    export import CommunicationMailOutline = __MaterialUI.SvgIcon;
    export import CommunicationMessage = __MaterialUI.SvgIcon;
    export import CommunicationNoSim = __MaterialUI.SvgIcon;
    export import CommunicationPhone = __MaterialUI.SvgIcon;
    export import CommunicationPhonelinkErase = __MaterialUI.SvgIcon;
    export import CommunicationPhonelinkLock = __MaterialUI.SvgIcon;
    export import CommunicationPhonelinkRing = __MaterialUI.SvgIcon;
    export import CommunicationPhonelinkSetup = __MaterialUI.SvgIcon;
    export import CommunicationPortableWifiOff = __MaterialUI.SvgIcon;
    export import CommunicationPresentToAll = __MaterialUI.SvgIcon;
    export import CommunicationRingVolume = __MaterialUI.SvgIcon;
    export import CommunicationScreenShare = __MaterialUI.SvgIcon;
    export import CommunicationSpeakerPhone = __MaterialUI.SvgIcon;
    export import CommunicationStayCurrentLandscape = __MaterialUI.SvgIcon;
    export import CommunicationStayCurrentPortrait = __MaterialUI.SvgIcon;
    export import CommunicationStayPrimaryLandscape = __MaterialUI.SvgIcon;
    export import CommunicationStayPrimaryPortrait = __MaterialUI.SvgIcon;
    export import CommunicationStopScreenShare = __MaterialUI.SvgIcon;
    export import CommunicationSwapCalls = __MaterialUI.SvgIcon;
    export import CommunicationTextsms = __MaterialUI.SvgIcon;
    export import CommunicationVoicemail = __MaterialUI.SvgIcon;
    export import CommunicationVpnKey = __MaterialUI.SvgIcon;
    export import ContentAddBox = __MaterialUI.SvgIcon;
    export import ContentAddCircleOutline = __MaterialUI.SvgIcon;
    export import ContentAddCircle = __MaterialUI.SvgIcon;
    export import ContentAdd = __MaterialUI.SvgIcon;
    export import ContentArchive = __MaterialUI.SvgIcon;
    export import ContentBackspace = __MaterialUI.SvgIcon;
    export import ContentBlock = __MaterialUI.SvgIcon;
    export import ContentClear = __MaterialUI.SvgIcon;
    export import ContentContentCopy = __MaterialUI.SvgIcon;
    export import ContentContentCut = __MaterialUI.SvgIcon;
    export import ContentContentPaste = __MaterialUI.SvgIcon;
    export import ContentCreate = __MaterialUI.SvgIcon;
    export import ContentDrafts = __MaterialUI.SvgIcon;
    export import ContentFilterList = __MaterialUI.SvgIcon;
    export import ContentFlag = __MaterialUI.SvgIcon;
    export import ContentFontDownload = __MaterialUI.SvgIcon;
    export import ContentForward = __MaterialUI.SvgIcon;
    export import ContentGesture = __MaterialUI.SvgIcon;
    export import ContentInbox = __MaterialUI.SvgIcon;
    export import ContentLink = __MaterialUI.SvgIcon;
    export import ContentMail = __MaterialUI.SvgIcon;
    export import ContentMarkunread = __MaterialUI.SvgIcon;
    export import ContentMoveToInbox = __MaterialUI.SvgIcon;
    export import ContentNextWeek = __MaterialUI.SvgIcon;
    export import ContentRedo = __MaterialUI.SvgIcon;
    export import ContentRemoveCircleOutline = __MaterialUI.SvgIcon;
    export import ContentRemoveCircle = __MaterialUI.SvgIcon;
    export import ContentRemove = __MaterialUI.SvgIcon;
    export import ContentReplyAll = __MaterialUI.SvgIcon;
    export import ContentReply = __MaterialUI.SvgIcon;
    export import ContentReport = __MaterialUI.SvgIcon;
    export import ContentSave = __MaterialUI.SvgIcon;
    export import ContentSelectAll = __MaterialUI.SvgIcon;
    export import ContentSend = __MaterialUI.SvgIcon;
    export import ContentSort = __MaterialUI.SvgIcon;
    export import ContentTextFormat = __MaterialUI.SvgIcon;
    export import ContentUnarchive = __MaterialUI.SvgIcon;
    export import ContentUndo = __MaterialUI.SvgIcon;
    export import ContentWeekend = __MaterialUI.SvgIcon;
    export import DeviceAccessAlarm = __MaterialUI.SvgIcon;
    export import DeviceAccessAlarms = __MaterialUI.SvgIcon;
    export import DeviceAccessTime = __MaterialUI.SvgIcon;
    export import DeviceAddAlarm = __MaterialUI.SvgIcon;
    export import DeviceAirplanemodeActive = __MaterialUI.SvgIcon;
    export import DeviceAirplanemodeInactive = __MaterialUI.SvgIcon;
    export import DeviceBattery20 = __MaterialUI.SvgIcon;
    export import DeviceBattery30 = __MaterialUI.SvgIcon;
    export import DeviceBattery50 = __MaterialUI.SvgIcon;
    export import DeviceBattery60 = __MaterialUI.SvgIcon;
    export import DeviceBattery80 = __MaterialUI.SvgIcon;
    export import DeviceBattery90 = __MaterialUI.SvgIcon;
    export import DeviceBatteryAlert = __MaterialUI.SvgIcon;
    export import DeviceBatteryCharging20 = __MaterialUI.SvgIcon;
    export import DeviceBatteryCharging30 = __MaterialUI.SvgIcon;
    export import DeviceBatteryCharging50 = __MaterialUI.SvgIcon;
    export import DeviceBatteryCharging60 = __MaterialUI.SvgIcon;
    export import DeviceBatteryCharging80 = __MaterialUI.SvgIcon;
    export import DeviceBatteryCharging90 = __MaterialUI.SvgIcon;
    export import DeviceBatteryChargingFull = __MaterialUI.SvgIcon;
    export import DeviceBatteryFull = __MaterialUI.SvgIcon;
    export import DeviceBatteryStd = __MaterialUI.SvgIcon;
    export import DeviceBatteryUnknown = __MaterialUI.SvgIcon;
    export import DeviceBluetoothConnected = __MaterialUI.SvgIcon;
    export import DeviceBluetoothDisabled = __MaterialUI.SvgIcon;
    export import DeviceBluetoothSearching = __MaterialUI.SvgIcon;
    export import DeviceBluetooth = __MaterialUI.SvgIcon;
    export import DeviceBrightnessAuto = __MaterialUI.SvgIcon;
    export import DeviceBrightnessHigh = __MaterialUI.SvgIcon;
    export import DeviceBrightnessLow = __MaterialUI.SvgIcon;
    export import DeviceBrightnessMedium = __MaterialUI.SvgIcon;
    export import DeviceDataUsage = __MaterialUI.SvgIcon;
    export import DeviceDeveloperMode = __MaterialUI.SvgIcon;
    export import DeviceDevices = __MaterialUI.SvgIcon;
    export import DeviceDvr = __MaterialUI.SvgIcon;
    export import DeviceGpsFixed = __MaterialUI.SvgIcon;
    export import DeviceGpsNotFixed = __MaterialUI.SvgIcon;
    export import DeviceGpsOff = __MaterialUI.SvgIcon;
    export import DeviceGraphicEq = __MaterialUI.SvgIcon;
    export import DeviceLocationDisabled = __MaterialUI.SvgIcon;
    export import DeviceLocationSearching = __MaterialUI.SvgIcon;
    export import DeviceNetworkCell = __MaterialUI.SvgIcon;
    export import DeviceNetworkWifi = __MaterialUI.SvgIcon;
    export import DeviceNfc = __MaterialUI.SvgIcon;
    export import DeviceScreenLockLandscape = __MaterialUI.SvgIcon;
    export import DeviceScreenLockPortrait = __MaterialUI.SvgIcon;
    export import DeviceScreenLockRotation = __MaterialUI.SvgIcon;
    export import DeviceScreenRotation = __MaterialUI.SvgIcon;
    export import DeviceSdStorage = __MaterialUI.SvgIcon;
    export import DeviceSettingsSystemDaydream = __MaterialUI.SvgIcon;
    export import DeviceSignalCellular0Bar = __MaterialUI.SvgIcon;
    export import DeviceSignalCellular1Bar = __MaterialUI.SvgIcon;
    export import DeviceSignalCellular2Bar = __MaterialUI.SvgIcon;
    export import DeviceSignalCellular3Bar = __MaterialUI.SvgIcon;
    export import DeviceSignalCellular4Bar = __MaterialUI.SvgIcon;
    export import DeviceSignalCellularConnectedNoInternet0Bar = __MaterialUI.SvgIcon;
    export import DeviceSignalCellularConnectedNoInternet1Bar = __MaterialUI.SvgIcon;
    export import DeviceSignalCellularConnectedNoInternet2Bar = __MaterialUI.SvgIcon;
    export import DeviceSignalCellularConnectedNoInternet3Bar = __MaterialUI.SvgIcon;
    export import DeviceSignalCellularConnectedNoInternet4Bar = __MaterialUI.SvgIcon;
    export import DeviceSignalCellularNoSim = __MaterialUI.SvgIcon;
    export import DeviceSignalCellularNull = __MaterialUI.SvgIcon;
    export import DeviceSignalCellularOff = __MaterialUI.SvgIcon;
    export import DeviceSignalWifi0Bar = __MaterialUI.SvgIcon;
    export import DeviceSignalWifi1BarLock = __MaterialUI.SvgIcon;
    export import DeviceSignalWifi1Bar = __MaterialUI.SvgIcon;
    export import DeviceSignalWifi2BarLock = __MaterialUI.SvgIcon;
    export import DeviceSignalWifi2Bar = __MaterialUI.SvgIcon;
    export import DeviceSignalWifi3BarLock = __MaterialUI.SvgIcon;
    export import DeviceSignalWifi3Bar = __MaterialUI.SvgIcon;
    export import DeviceSignalWifi4BarLock = __MaterialUI.SvgIcon;
    export import DeviceSignalWifi4Bar = __MaterialUI.SvgIcon;
    export import DeviceSignalWifiOff = __MaterialUI.SvgIcon;
    export import DeviceStorage = __MaterialUI.SvgIcon;
    export import DeviceUsb = __MaterialUI.SvgIcon;
    export import DeviceWallpaper = __MaterialUI.SvgIcon;
    export import DeviceWidgets = __MaterialUI.SvgIcon;
    export import DeviceWifiLock = __MaterialUI.SvgIcon;
    export import DeviceWifiTethering = __MaterialUI.SvgIcon;
    export import EditorAttachFile = __MaterialUI.SvgIcon;
    export import EditorAttachMoney = __MaterialUI.SvgIcon;
    export import EditorBorderAll = __MaterialUI.SvgIcon;
    export import EditorBorderBottom = __MaterialUI.SvgIcon;
    export import EditorBorderClear = __MaterialUI.SvgIcon;
    export import EditorBorderColor = __MaterialUI.SvgIcon;
    export import EditorBorderHorizontal = __MaterialUI.SvgIcon;
    export import EditorBorderInner = __MaterialUI.SvgIcon;
    export import EditorBorderLeft = __MaterialUI.SvgIcon;
    export import EditorBorderOuter = __MaterialUI.SvgIcon;
    export import EditorBorderRight = __MaterialUI.SvgIcon;
    export import EditorBorderStyle = __MaterialUI.SvgIcon;
    export import EditorBorderTop = __MaterialUI.SvgIcon;
    export import EditorBorderVertical = __MaterialUI.SvgIcon;
    export import EditorDragHandle = __MaterialUI.SvgIcon;
    export import EditorFormatAlignCenter = __MaterialUI.SvgIcon;
    export import EditorFormatAlignJustify = __MaterialUI.SvgIcon;
    export import EditorFormatAlignLeft = __MaterialUI.SvgIcon;
    export import EditorFormatAlignRight = __MaterialUI.SvgIcon;
    export import EditorFormatBold = __MaterialUI.SvgIcon;
    export import EditorFormatClear = __MaterialUI.SvgIcon;
    export import EditorFormatColorFill = __MaterialUI.SvgIcon;
    export import EditorFormatColorReset = __MaterialUI.SvgIcon;
    export import EditorFormatColorText = __MaterialUI.SvgIcon;
    export import EditorFormatIndentDecrease = __MaterialUI.SvgIcon;
    export import EditorFormatIndentIncrease = __MaterialUI.SvgIcon;
    export import EditorFormatItalic = __MaterialUI.SvgIcon;
    export import EditorFormatLineSpacing = __MaterialUI.SvgIcon;
    export import EditorFormatListBulleted = __MaterialUI.SvgIcon;
    export import EditorFormatListNumbered = __MaterialUI.SvgIcon;
    export import EditorFormatPaint = __MaterialUI.SvgIcon;
    export import EditorFormatQuote = __MaterialUI.SvgIcon;
    export import EditorFormatShapes = __MaterialUI.SvgIcon;
    export import EditorFormatSize = __MaterialUI.SvgIcon;
    export import EditorFormatStrikethrough = __MaterialUI.SvgIcon;
    export import EditorFormatTextdirectionLToR = __MaterialUI.SvgIcon;
    export import EditorFormatTextdirectionRToL = __MaterialUI.SvgIcon;
    export import EditorFormatUnderlined = __MaterialUI.SvgIcon;
    export import EditorFunctions = __MaterialUI.SvgIcon;
    export import EditorHighlight = __MaterialUI.SvgIcon;
    export import EditorInsertChart = __MaterialUI.SvgIcon;
    export import EditorInsertComment = __MaterialUI.SvgIcon;
    export import EditorInsertDriveFile = __MaterialUI.SvgIcon;
    export import EditorInsertEmoticon = __MaterialUI.SvgIcon;
    export import EditorInsertInvitation = __MaterialUI.SvgIcon;
    export import EditorInsertLink = __MaterialUI.SvgIcon;
    export import EditorInsertPhoto = __MaterialUI.SvgIcon;
    export import EditorLinearScale = __MaterialUI.SvgIcon;
    export import EditorMergeType = __MaterialUI.SvgIcon;
    export import EditorModeComment = __MaterialUI.SvgIcon;
    export import EditorModeEdit = __MaterialUI.SvgIcon;
    export import EditorMoneyOff = __MaterialUI.SvgIcon;
    export import EditorPublish = __MaterialUI.SvgIcon;
    export import EditorShortText = __MaterialUI.SvgIcon;
    export import EditorSpaceBar = __MaterialUI.SvgIcon;
    export import EditorStrikethroughS = __MaterialUI.SvgIcon;
    export import EditorTextFields = __MaterialUI.SvgIcon;
    export import EditorVerticalAlignBottom = __MaterialUI.SvgIcon;
    export import EditorVerticalAlignCenter = __MaterialUI.SvgIcon;
    export import EditorVerticalAlignTop = __MaterialUI.SvgIcon;
    export import EditorWrapText = __MaterialUI.SvgIcon;
    export import FileAttachment = __MaterialUI.SvgIcon;
    export import FileCloudCircle = __MaterialUI.SvgIcon;
    export import FileCloudDone = __MaterialUI.SvgIcon;
    export import FileCloudDownload = __MaterialUI.SvgIcon;
    export import FileCloudOff = __MaterialUI.SvgIcon;
    export import FileCloudQueue = __MaterialUI.SvgIcon;
    export import FileCloudUpload = __MaterialUI.SvgIcon;
    export import FileCloud = __MaterialUI.SvgIcon;
    export import FileCreateNewFolder = __MaterialUI.SvgIcon;
    export import FileFileDownload = __MaterialUI.SvgIcon;
    export import FileFileUpload = __MaterialUI.SvgIcon;
    export import FileFolderOpen = __MaterialUI.SvgIcon;
    export import FileFolderShared = __MaterialUI.SvgIcon;
    export import FileFolder = __MaterialUI.SvgIcon;
    export import HardwareCastConnected = __MaterialUI.SvgIcon;
    export import HardwareCast = __MaterialUI.SvgIcon;
    export import HardwareComputer = __MaterialUI.SvgIcon;
    export import HardwareDesktopMac = __MaterialUI.SvgIcon;
    export import HardwareDesktopWindows = __MaterialUI.SvgIcon;
    export import HardwareDeveloperBoard = __MaterialUI.SvgIcon;
    export import HardwareDeviceHub = __MaterialUI.SvgIcon;
    export import HardwareDevicesOther = __MaterialUI.SvgIcon;
    export import HardwareDock = __MaterialUI.SvgIcon;
    export import HardwareGamepad = __MaterialUI.SvgIcon;
    export import HardwareHeadsetMic = __MaterialUI.SvgIcon;
    export import HardwareHeadset = __MaterialUI.SvgIcon;
    export import HardwareKeyboardArrowDown = __MaterialUI.SvgIcon;
    export import HardwareKeyboardArrowLeft = __MaterialUI.SvgIcon;
    export import HardwareKeyboardArrowRight = __MaterialUI.SvgIcon;
    export import HardwareKeyboardArrowUp = __MaterialUI.SvgIcon;
    export import HardwareKeyboardBackspace = __MaterialUI.SvgIcon;
    export import HardwareKeyboardCapslock = __MaterialUI.SvgIcon;
    export import HardwareKeyboardHide = __MaterialUI.SvgIcon;
    export import HardwareKeyboardReturn = __MaterialUI.SvgIcon;
    export import HardwareKeyboardTab = __MaterialUI.SvgIcon;
    export import HardwareKeyboardVoice = __MaterialUI.SvgIcon;
    export import HardwareKeyboard = __MaterialUI.SvgIcon;
    export import HardwareLaptopChromebook = __MaterialUI.SvgIcon;
    export import HardwareLaptopMac = __MaterialUI.SvgIcon;
    export import HardwareLaptopWindows = __MaterialUI.SvgIcon;
    export import HardwareLaptop = __MaterialUI.SvgIcon;
    export import HardwareMemory = __MaterialUI.SvgIcon;
    export import HardwareMouse = __MaterialUI.SvgIcon;
    export import HardwarePhoneAndroid = __MaterialUI.SvgIcon;
    export import HardwarePhoneIphone = __MaterialUI.SvgIcon;
    export import HardwarePhonelinkOff = __MaterialUI.SvgIcon;
    export import HardwarePhonelink = __MaterialUI.SvgIcon;
    export import HardwarePowerInput = __MaterialUI.SvgIcon;
    export import HardwareRouter = __MaterialUI.SvgIcon;
    export import HardwareScanner = __MaterialUI.SvgIcon;
    export import HardwareSecurity = __MaterialUI.SvgIcon;
    export import HardwareSimCard = __MaterialUI.SvgIcon;
    export import HardwareSmartphone = __MaterialUI.SvgIcon;
    export import HardwareSpeakerGroup = __MaterialUI.SvgIcon;
    export import HardwareSpeaker = __MaterialUI.SvgIcon;
    export import HardwareTabletAndroid = __MaterialUI.SvgIcon;
    export import HardwareTabletMac = __MaterialUI.SvgIcon;
    export import HardwareTablet = __MaterialUI.SvgIcon;
    export import HardwareToys = __MaterialUI.SvgIcon;
    export import HardwareTv = __MaterialUI.SvgIcon;
    export import HardwareVideogameAsset = __MaterialUI.SvgIcon;
    export import HardwareWatch = __MaterialUI.SvgIcon;
    export import ImageAddAPhoto = __MaterialUI.SvgIcon;
    export import ImageAddToPhotos = __MaterialUI.SvgIcon;
    export import ImageAdjust = __MaterialUI.SvgIcon;
    export import ImageAssistantPhoto = __MaterialUI.SvgIcon;
    export import ImageAssistant = __MaterialUI.SvgIcon;
    export import ImageAudiotrack = __MaterialUI.SvgIcon;
    export import ImageBlurCircular = __MaterialUI.SvgIcon;
    export import ImageBlurLinear = __MaterialUI.SvgIcon;
    export import ImageBlurOff = __MaterialUI.SvgIcon;
    export import ImageBlurOn = __MaterialUI.SvgIcon;
    export import ImageBrightness1 = __MaterialUI.SvgIcon;
    export import ImageBrightness2 = __MaterialUI.SvgIcon;
    export import ImageBrightness3 = __MaterialUI.SvgIcon;
    export import ImageBrightness4 = __MaterialUI.SvgIcon;
    export import ImageBrightness5 = __MaterialUI.SvgIcon;
    export import ImageBrightness6 = __MaterialUI.SvgIcon;
    export import ImageBrightness7 = __MaterialUI.SvgIcon;
    export import ImageBrokenImage = __MaterialUI.SvgIcon;
    export import ImageBrush = __MaterialUI.SvgIcon;
    export import ImageCameraAlt = __MaterialUI.SvgIcon;
    export import ImageCameraFront = __MaterialUI.SvgIcon;
    export import ImageCameraRear = __MaterialUI.SvgIcon;
    export import ImageCameraRoll = __MaterialUI.SvgIcon;
    export import ImageCamera = __MaterialUI.SvgIcon;
    export import ImageCenterFocusStrong = __MaterialUI.SvgIcon;
    export import ImageCenterFocusWeak = __MaterialUI.SvgIcon;
    export import ImageCollectionsBookmark = __MaterialUI.SvgIcon;
    export import ImageCollections = __MaterialUI.SvgIcon;
    export import ImageColorLens = __MaterialUI.SvgIcon;
    export import ImageColorize = __MaterialUI.SvgIcon;
    export import ImageCompare = __MaterialUI.SvgIcon;
    export import ImageControlPointDuplicate = __MaterialUI.SvgIcon;
    export import ImageControlPoint = __MaterialUI.SvgIcon;
    export import ImageCrop169 = __MaterialUI.SvgIcon;
    export import ImageCrop32 = __MaterialUI.SvgIcon;
    export import ImageCrop54 = __MaterialUI.SvgIcon;
    export import ImageCrop75 = __MaterialUI.SvgIcon;
    export import ImageCropDin = __MaterialUI.SvgIcon;
    export import ImageCropFree = __MaterialUI.SvgIcon;
    export import ImageCropLandscape = __MaterialUI.SvgIcon;
    export import ImageCropOriginal = __MaterialUI.SvgIcon;
    export import ImageCropPortrait = __MaterialUI.SvgIcon;
    export import ImageCropRotate = __MaterialUI.SvgIcon;
    export import ImageCropSquare = __MaterialUI.SvgIcon;
    export import ImageCrop = __MaterialUI.SvgIcon;
    export import ImageDehaze = __MaterialUI.SvgIcon;
    export import ImageDetails = __MaterialUI.SvgIcon;
    export import ImageEdit = __MaterialUI.SvgIcon;
    export import ImageExposureNeg1 = __MaterialUI.SvgIcon;
    export import ImageExposureNeg2 = __MaterialUI.SvgIcon;
    export import ImageExposurePlus1 = __MaterialUI.SvgIcon;
    export import ImageExposurePlus2 = __MaterialUI.SvgIcon;
    export import ImageExposureZero = __MaterialUI.SvgIcon;
    export import ImageExposure = __MaterialUI.SvgIcon;
    export import ImageFilter1 = __MaterialUI.SvgIcon;
    export import ImageFilter2 = __MaterialUI.SvgIcon;
    export import ImageFilter3 = __MaterialUI.SvgIcon;
    export import ImageFilter4 = __MaterialUI.SvgIcon;
    export import ImageFilter5 = __MaterialUI.SvgIcon;
    export import ImageFilter6 = __MaterialUI.SvgIcon;
    export import ImageFilter7 = __MaterialUI.SvgIcon;
    export import ImageFilter8 = __MaterialUI.SvgIcon;
    export import ImageFilter9Plus = __MaterialUI.SvgIcon;
    export import ImageFilter9 = __MaterialUI.SvgIcon;
    export import ImageFilterBAndW = __MaterialUI.SvgIcon;
    export import ImageFilterCenterFocus = __MaterialUI.SvgIcon;
    export import ImageFilterDrama = __MaterialUI.SvgIcon;
    export import ImageFilterFrames = __MaterialUI.SvgIcon;
    export import ImageFilterHdr = __MaterialUI.SvgIcon;
    export import ImageFilterNone = __MaterialUI.SvgIcon;
    export import ImageFilterTiltShift = __MaterialUI.SvgIcon;
    export import ImageFilterVintage = __MaterialUI.SvgIcon;
    export import ImageFilter = __MaterialUI.SvgIcon;
    export import ImageFlare = __MaterialUI.SvgIcon;
    export import ImageFlashAuto = __MaterialUI.SvgIcon;
    export import ImageFlashOff = __MaterialUI.SvgIcon;
    export import ImageFlashOn = __MaterialUI.SvgIcon;
    export import ImageFlip = __MaterialUI.SvgIcon;
    export import ImageGradient = __MaterialUI.SvgIcon;
    export import ImageGrain = __MaterialUI.SvgIcon;
    export import ImageGridOff = __MaterialUI.SvgIcon;
    export import ImageGridOn = __MaterialUI.SvgIcon;
    export import ImageHdrOff = __MaterialUI.SvgIcon;
    export import ImageHdrOn = __MaterialUI.SvgIcon;
    export import ImageHdrStrong = __MaterialUI.SvgIcon;
    export import ImageHdrWeak = __MaterialUI.SvgIcon;
    export import ImageHealing = __MaterialUI.SvgIcon;
    export import ImageImageAspectRatio = __MaterialUI.SvgIcon;
    export import ImageImage = __MaterialUI.SvgIcon;
    export import ImageIso = __MaterialUI.SvgIcon;
    export import ImageLandscape = __MaterialUI.SvgIcon;
    export import ImageLeakAdd = __MaterialUI.SvgIcon;
    export import ImageLeakRemove = __MaterialUI.SvgIcon;
    export import ImageLens = __MaterialUI.SvgIcon;
    export import ImageLinkedCamera = __MaterialUI.SvgIcon;
    export import ImageLooks3 = __MaterialUI.SvgIcon;
    export import ImageLooks4 = __MaterialUI.SvgIcon;
    export import ImageLooks5 = __MaterialUI.SvgIcon;
    export import ImageLooks6 = __MaterialUI.SvgIcon;
    export import ImageLooksOne = __MaterialUI.SvgIcon;
    export import ImageLooksTwo = __MaterialUI.SvgIcon;
    export import ImageLooks = __MaterialUI.SvgIcon;
    export import ImageLoupe = __MaterialUI.SvgIcon;
    export import ImageMonochromePhotos = __MaterialUI.SvgIcon;
    export import ImageMovieCreation = __MaterialUI.SvgIcon;
    export import ImageMovieFilter = __MaterialUI.SvgIcon;
    export import ImageMusicNote = __MaterialUI.SvgIcon;
    export import ImageNaturePeople = __MaterialUI.SvgIcon;
    export import ImageNature = __MaterialUI.SvgIcon;
    export import ImageNavigateBefore = __MaterialUI.SvgIcon;
    export import ImageNavigateNext = __MaterialUI.SvgIcon;
    export import ImagePalette = __MaterialUI.SvgIcon;
    export import ImagePanoramaFishEye = __MaterialUI.SvgIcon;
    export import ImagePanoramaHorizontal = __MaterialUI.SvgIcon;
    export import ImagePanoramaVertical = __MaterialUI.SvgIcon;
    export import ImagePanoramaWideAngle = __MaterialUI.SvgIcon;
    export import ImagePanorama = __MaterialUI.SvgIcon;
    export import ImagePhotoAlbum = __MaterialUI.SvgIcon;
    export import ImagePhotoCamera = __MaterialUI.SvgIcon;
    export import ImagePhotoFilter = __MaterialUI.SvgIcon;
    export import ImagePhotoLibrary = __MaterialUI.SvgIcon;
    export import ImagePhotoSizeSelectActual = __MaterialUI.SvgIcon;
    export import ImagePhotoSizeSelectLarge = __MaterialUI.SvgIcon;
    export import ImagePhotoSizeSelectSmall = __MaterialUI.SvgIcon;
    export import ImagePhoto = __MaterialUI.SvgIcon;
    export import ImagePictureAsPdf = __MaterialUI.SvgIcon;
    export import ImagePortrait = __MaterialUI.SvgIcon;
    export import ImageRemoveRedEye = __MaterialUI.SvgIcon;
    export import ImageRotate90DegreesCcw = __MaterialUI.SvgIcon;
    export import ImageRotateLeft = __MaterialUI.SvgIcon;
    export import ImageRotateRight = __MaterialUI.SvgIcon;
    export import ImageSlideshow = __MaterialUI.SvgIcon;
    export import ImageStraighten = __MaterialUI.SvgIcon;
    export import ImageStyle = __MaterialUI.SvgIcon;
    export import ImageSwitchCamera = __MaterialUI.SvgIcon;
    export import ImageSwitchVideo = __MaterialUI.SvgIcon;
    export import ImageTagFaces = __MaterialUI.SvgIcon;
    export import ImageTexture = __MaterialUI.SvgIcon;
    export import ImageTimelapse = __MaterialUI.SvgIcon;
    export import ImageTimer10 = __MaterialUI.SvgIcon;
    export import ImageTimer3 = __MaterialUI.SvgIcon;
    export import ImageTimerOff = __MaterialUI.SvgIcon;
    export import ImageTimer = __MaterialUI.SvgIcon;
    export import ImageTonality = __MaterialUI.SvgIcon;
    export import ImageTransform = __MaterialUI.SvgIcon;
    export import ImageTune = __MaterialUI.SvgIcon;
    export import ImageViewComfy = __MaterialUI.SvgIcon;
    export import ImageViewCompact = __MaterialUI.SvgIcon;
    export import ImageVignette = __MaterialUI.SvgIcon;
    export import ImageWbAuto = __MaterialUI.SvgIcon;
    export import ImageWbCloudy = __MaterialUI.SvgIcon;
    export import ImageWbIncandescent = __MaterialUI.SvgIcon;
    export import ImageWbIridescent = __MaterialUI.SvgIcon;
    export import ImageWbSunny = __MaterialUI.SvgIcon;
    export import MapsAddLocation = __MaterialUI.SvgIcon;
    export import MapsBeenhere = __MaterialUI.SvgIcon;
    export import MapsDirectionsBike = __MaterialUI.SvgIcon;
    export import MapsDirectionsBoat = __MaterialUI.SvgIcon;
    export import MapsDirectionsBus = __MaterialUI.SvgIcon;
    export import MapsDirectionsCar = __MaterialUI.SvgIcon;
    export import MapsDirectionsRailway = __MaterialUI.SvgIcon;
    export import MapsDirectionsRun = __MaterialUI.SvgIcon;
    export import MapsDirectionsSubway = __MaterialUI.SvgIcon;
    export import MapsDirectionsTransit = __MaterialUI.SvgIcon;
    export import MapsDirectionsWalk = __MaterialUI.SvgIcon;
    export import MapsDirections = __MaterialUI.SvgIcon;
    export import MapsEditLocation = __MaterialUI.SvgIcon;
    export import MapsFlight = __MaterialUI.SvgIcon;
    export import MapsHotel = __MaterialUI.SvgIcon;
    export import MapsLayersClear = __MaterialUI.SvgIcon;
    export import MapsLayers = __MaterialUI.SvgIcon;
    export import MapsLocalActivity = __MaterialUI.SvgIcon;
    export import MapsLocalAirport = __MaterialUI.SvgIcon;
    export import MapsLocalAtm = __MaterialUI.SvgIcon;
    export import MapsLocalBar = __MaterialUI.SvgIcon;
    export import MapsLocalCafe = __MaterialUI.SvgIcon;
    export import MapsLocalCarWash = __MaterialUI.SvgIcon;
    export import MapsLocalConvenienceStore = __MaterialUI.SvgIcon;
    export import MapsLocalDining = __MaterialUI.SvgIcon;
    export import MapsLocalDrink = __MaterialUI.SvgIcon;
    export import MapsLocalFlorist = __MaterialUI.SvgIcon;
    export import MapsLocalGasStation = __MaterialUI.SvgIcon;
    export import MapsLocalGroceryStore = __MaterialUI.SvgIcon;
    export import MapsLocalHospital = __MaterialUI.SvgIcon;
    export import MapsLocalHotel = __MaterialUI.SvgIcon;
    export import MapsLocalLaundryService = __MaterialUI.SvgIcon;
    export import MapsLocalLibrary = __MaterialUI.SvgIcon;
    export import MapsLocalMall = __MaterialUI.SvgIcon;
    export import MapsLocalMovies = __MaterialUI.SvgIcon;
    export import MapsLocalOffer = __MaterialUI.SvgIcon;
    export import MapsLocalParking = __MaterialUI.SvgIcon;
    export import MapsLocalPharmacy = __MaterialUI.SvgIcon;
    export import MapsLocalPhone = __MaterialUI.SvgIcon;
    export import MapsLocalPizza = __MaterialUI.SvgIcon;
    export import MapsLocalPlay = __MaterialUI.SvgIcon;
    export import MapsLocalPostOffice = __MaterialUI.SvgIcon;
    export import MapsLocalPrintshop = __MaterialUI.SvgIcon;
    export import MapsLocalSee = __MaterialUI.SvgIcon;
    export import MapsLocalShipping = __MaterialUI.SvgIcon;
    export import MapsLocalTaxi = __MaterialUI.SvgIcon;
    export import MapsMap = __MaterialUI.SvgIcon;
    export import MapsMyLocation = __MaterialUI.SvgIcon;
    export import MapsNavigation = __MaterialUI.SvgIcon;
    export import MapsNearMe = __MaterialUI.SvgIcon;
    export import MapsPersonPinCircle = __MaterialUI.SvgIcon;
    export import MapsPersonPin = __MaterialUI.SvgIcon;
    export import MapsPinDrop = __MaterialUI.SvgIcon;
    export import MapsPlace = __MaterialUI.SvgIcon;
    export import MapsRateReview = __MaterialUI.SvgIcon;
    export import MapsRestaurantMenu = __MaterialUI.SvgIcon;
    export import MapsSatellite = __MaterialUI.SvgIcon;
    export import MapsStoreMallDirectory = __MaterialUI.SvgIcon;
    export import MapsTerrain = __MaterialUI.SvgIcon;
    export import MapsTraffic = __MaterialUI.SvgIcon;
    export import MapsZoomOutMap = __MaterialUI.SvgIcon;
    export import NavigationApps = __MaterialUI.SvgIcon;
    export import NavigationArrowBack = __MaterialUI.SvgIcon;
    export import NavigationArrowDownward = __MaterialUI.SvgIcon;
    export import NavigationArrowDropDownCircle = __MaterialUI.SvgIcon;
    export import NavigationArrowDropDown = __MaterialUI.SvgIcon;
    export import NavigationArrowDropUp = __MaterialUI.SvgIcon;
    export import NavigationArrowForward = __MaterialUI.SvgIcon;
    export import NavigationArrowUpward = __MaterialUI.SvgIcon;
    export import NavigationCancel = __MaterialUI.SvgIcon;
    export import NavigationCheck = __MaterialUI.SvgIcon;
    export import NavigationChevronLeft = __MaterialUI.SvgIcon;
    export import NavigationChevronRight = __MaterialUI.SvgIcon;
    export import NavigationClose = __MaterialUI.SvgIcon;
    export import NavigationExpandLess = __MaterialUI.SvgIcon;
    export import NavigationExpandMore = __MaterialUI.SvgIcon;
    export import NavigationFullscreenExit = __MaterialUI.SvgIcon;
    export import NavigationFullscreen = __MaterialUI.SvgIcon;
    export import NavigationMenu = __MaterialUI.SvgIcon;
    export import NavigationMoreHoriz = __MaterialUI.SvgIcon;
    export import NavigationMoreVert = __MaterialUI.SvgIcon;
    export import NavigationRefresh = __MaterialUI.SvgIcon;
    export import NavigationSubdirectoryArrowLeft = __MaterialUI.SvgIcon;
    export import NavigationSubdirectoryArrowRight = __MaterialUI.SvgIcon;
    export import NavigationUnfoldLess = __MaterialUI.SvgIcon;
    export import NavigationUnfoldMore = __MaterialUI.SvgIcon;
    export import NavigationArrowDropRight = __MaterialUI.SvgIcon;
    export import NotificationAdb = __MaterialUI.SvgIcon;
    export import NotificationAirlineSeatFlatAngled = __MaterialUI.SvgIcon;
    export import NotificationAirlineSeatFlat = __MaterialUI.SvgIcon;
    export import NotificationAirlineSeatIndividualSuite = __MaterialUI.SvgIcon;
    export import NotificationAirlineSeatLegroomExtra = __MaterialUI.SvgIcon;
    export import NotificationAirlineSeatLegroomNormal = __MaterialUI.SvgIcon;
    export import NotificationAirlineSeatLegroomReduced = __MaterialUI.SvgIcon;
    export import NotificationAirlineSeatReclineExtra = __MaterialUI.SvgIcon;
    export import NotificationAirlineSeatReclineNormal = __MaterialUI.SvgIcon;
    export import NotificationBluetoothAudio = __MaterialUI.SvgIcon;
    export import NotificationConfirmationNumber = __MaterialUI.SvgIcon;
    export import NotificationDiscFull = __MaterialUI.SvgIcon;
    export import NotificationDoNotDisturbAlt = __MaterialUI.SvgIcon;
    export import NotificationDoNotDisturb = __MaterialUI.SvgIcon;
    export import NotificationDriveEta = __MaterialUI.SvgIcon;
    export import NotificationEnhancedEncryption = __MaterialUI.SvgIcon;
    export import NotificationEventAvailable = __MaterialUI.SvgIcon;
    export import NotificationEventBusy = __MaterialUI.SvgIcon;
    export import NotificationEventNote = __MaterialUI.SvgIcon;
    export import NotificationFolderSpecial = __MaterialUI.SvgIcon;
    export import NotificationLiveTv = __MaterialUI.SvgIcon;
    export import NotificationMms = __MaterialUI.SvgIcon;
    export import NotificationMore = __MaterialUI.SvgIcon;
    export import NotificationNetworkCheck = __MaterialUI.SvgIcon;
    export import NotificationNetworkLocked = __MaterialUI.SvgIcon;
    export import NotificationNoEncryption = __MaterialUI.SvgIcon;
    export import NotificationOndemandVideo = __MaterialUI.SvgIcon;
    export import NotificationPersonalVideo = __MaterialUI.SvgIcon;
    export import NotificationPhoneBluetoothSpeaker = __MaterialUI.SvgIcon;
    export import NotificationPhoneForwarded = __MaterialUI.SvgIcon;
    export import NotificationPhoneInTalk = __MaterialUI.SvgIcon;
    export import NotificationPhoneLocked = __MaterialUI.SvgIcon;
    export import NotificationPhoneMissed = __MaterialUI.SvgIcon;
    export import NotificationPhonePaused = __MaterialUI.SvgIcon;
    export import NotificationPower = __MaterialUI.SvgIcon;
    export import NotificationRvHookup = __MaterialUI.SvgIcon;
    export import NotificationSdCard = __MaterialUI.SvgIcon;
    export import NotificationSimCardAlert = __MaterialUI.SvgIcon;
    export import NotificationSmsFailed = __MaterialUI.SvgIcon;
    export import NotificationSms = __MaterialUI.SvgIcon;
    export import NotificationSyncDisabled = __MaterialUI.SvgIcon;
    export import NotificationSyncProblem = __MaterialUI.SvgIcon;
    export import NotificationSync = __MaterialUI.SvgIcon;
    export import NotificationSystemUpdate = __MaterialUI.SvgIcon;
    export import NotificationTapAndPlay = __MaterialUI.SvgIcon;
    export import NotificationTimeToLeave = __MaterialUI.SvgIcon;
    export import NotificationVibration = __MaterialUI.SvgIcon;
    export import NotificationVoiceChat = __MaterialUI.SvgIcon;
    export import NotificationVpnLock = __MaterialUI.SvgIcon;
    export import NotificationWc = __MaterialUI.SvgIcon;
    export import NotificationWifi = __MaterialUI.SvgIcon;
    export import PlacesAcUnit = __MaterialUI.SvgIcon;
    export import PlacesAirportShuttle = __MaterialUI.SvgIcon;
    export import PlacesAllInclusive = __MaterialUI.SvgIcon;
    export import PlacesBeachAccess = __MaterialUI.SvgIcon;
    export import PlacesBusinessCenter = __MaterialUI.SvgIcon;
    export import PlacesCasino = __MaterialUI.SvgIcon;
    export import PlacesChildCare = __MaterialUI.SvgIcon;
    export import PlacesChildFriendly = __MaterialUI.SvgIcon;
    export import PlacesFitnessCenter = __MaterialUI.SvgIcon;
    export import PlacesFreeBreakfast = __MaterialUI.SvgIcon;
    export import PlacesGolfCourse = __MaterialUI.SvgIcon;
    export import PlacesHotTub = __MaterialUI.SvgIcon;
    export import PlacesKitchen = __MaterialUI.SvgIcon;
    export import PlacesPool = __MaterialUI.SvgIcon;
    export import PlacesRoomService = __MaterialUI.SvgIcon;
    export import PlacesSmokeFree = __MaterialUI.SvgIcon;
    export import PlacesSmokingRooms = __MaterialUI.SvgIcon;
    export import PlacesSpa = __MaterialUI.SvgIcon;
    export import SocialCake = __MaterialUI.SvgIcon;
    export import SocialDomain = __MaterialUI.SvgIcon;
    export import SocialGroupAdd = __MaterialUI.SvgIcon;
    export import SocialGroup = __MaterialUI.SvgIcon;
    export import SocialLocationCity = __MaterialUI.SvgIcon;
    export import SocialMoodBad = __MaterialUI.SvgIcon;
    export import SocialMood = __MaterialUI.SvgIcon;
    export import SocialNotificationsActive = __MaterialUI.SvgIcon;
    export import SocialNotificationsNone = __MaterialUI.SvgIcon;
    export import SocialNotificationsOff = __MaterialUI.SvgIcon;
    export import SocialNotificationsPaused = __MaterialUI.SvgIcon;
    export import SocialNotifications = __MaterialUI.SvgIcon;
    export import SocialPages = __MaterialUI.SvgIcon;
    export import SocialPartyMode = __MaterialUI.SvgIcon;
    export import SocialPeopleOutline = __MaterialUI.SvgIcon;
    export import SocialPeople = __MaterialUI.SvgIcon;
    export import SocialPersonAdd = __MaterialUI.SvgIcon;
    export import SocialPersonOutline = __MaterialUI.SvgIcon;
    export import SocialPerson = __MaterialUI.SvgIcon;
    export import SocialPlusOne = __MaterialUI.SvgIcon;
    export import SocialPoll = __MaterialUI.SvgIcon;
    export import SocialPublic = __MaterialUI.SvgIcon;
    export import SocialSchool = __MaterialUI.SvgIcon;
    export import SocialShare = __MaterialUI.SvgIcon;
    export import SocialWhatshot = __MaterialUI.SvgIcon;
    export import ToggleCheckBoxOutlineBlank = __MaterialUI.SvgIcon;
    export import ToggleCheckBox = __MaterialUI.SvgIcon;
    export import ToggleIndeterminateCheckBox = __MaterialUI.SvgIcon;
    export import ToggleRadioButtonChecked = __MaterialUI.SvgIcon;
    export import ToggleRadioButtonUnchecked = __MaterialUI.SvgIcon;
    export import ToggleStarBorder = __MaterialUI.SvgIcon;
    export import ToggleStarHalf = __MaterialUI.SvgIcon;
    export import ToggleStar = __MaterialUI.SvgIcon;
}