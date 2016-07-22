// Type definitions for material-ui v0.15.1
// Project: https://github.com/callemall/material-ui
// Definitions by: Nathan Brown <https://github.com/ngbrown>, Oliver Herrmann <https://github.com/herrmanno>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare module "material-ui" {
    export import AppBar = __MaterialUI.AppBar;
    export import AutoComplete = __MaterialUI.AutoComplete;
    export import Avatar = __MaterialUI.Avatar;
    export import Badge = __MaterialUI.Badge;
    export import Card = __MaterialUI.Card.Card;
    export import CardActions = __MaterialUI.Card.CardActions;
    export import CardHeader = __MaterialUI.Card.CardHeader;
    export import CardMedia = __MaterialUI.Card.CardMedia;
    export import CardText = __MaterialUI.Card.CardText;
    export import CardTitle = __MaterialUI.Card.CardTitle;
    export import Checkbox = __MaterialUI.Switches.Checkbox;
    export import Chip = __MaterialUI.Chip;
    export import CircularProgress = __MaterialUI.CircularProgress;
    export import DatePicker = __MaterialUI.DatePicker.DatePicker;
    export import Dialog = __MaterialUI.Dialog;
    export import Divider = __MaterialUI.Divider;
    export import Drawer = __MaterialUI.Drawer;
    export import DropDownMenu = __MaterialUI.Menus.DropDownMenu;
    export import FlatButton = __MaterialUI.FlatButton;
    export import FloatingActionButton = __MaterialUI.FloatingActionButton;
    export import FontIcon = __MaterialUI.FontIcon;
    export import GridList = __MaterialUI.GridList.GridList;
    export import GridTile = __MaterialUI.GridList.GridTile;
    export import IconButton = __MaterialUI.IconButton;
    export import IconMenu = __MaterialUI.Menus.IconMenu;
    export import LinearProgress = __MaterialUI.LinearProgress;
    export import List = __MaterialUI.List.List;
    export import ListItem = __MaterialUI.List.ListItem;
    export import MakeSelectable = __MaterialUI.List.MakeSelectable;
    export import Menu = __MaterialUI.Menus.Menu;
    export import MenuItem = __MaterialUI.Menus.MenuItem;
    export import Paper = __MaterialUI.Paper;
    export import Popover = __MaterialUI.Popover.Popover;
    export import RadioButton = __MaterialUI.Switches.RadioButton;
    export import RadioButtonGroup = __MaterialUI.Switches.RadioButtonGroup;
    export import RaisedButton = __MaterialUI.RaisedButton;
    export import RefreshIndicator = __MaterialUI.RefreshIndicator;
    export import SelectField = __MaterialUI.SelectField;
    export import Slider = __MaterialUI.Slider;
    export import Subheader = __MaterialUI.Subheader;
    export import SvgIcon = __MaterialUI.SvgIcon;
    export import Step = __MaterialUI.Stepper.Step;
    export import StepButton = __MaterialUI.Stepper.StepButton;
    export import StepContent = __MaterialUI.Stepper.StepContent;
    export import StepLabel = __MaterialUI.Stepper.StepLabel;
    export import Stepper = __MaterialUI.Stepper;
    export import Snackbar = __MaterialUI.Snackbar;
    export import Tab = __MaterialUI.Tabs.Tab;
    export import Tabs = __MaterialUI.Tabs.Tabs;
    export import Table = __MaterialUI.Table.Table;
    export import TableBody = __MaterialUI.Table.TableBody;
    export import TableFooter = __MaterialUI.Table.TableFooter;
    export import TableHeader = __MaterialUI.Table.TableHeader;
    export import TableHeaderColumn = __MaterialUI.Table.TableHeaderColumn;
    export import TableRow = __MaterialUI.Table.TableRow;
    export import TableRowColumn = __MaterialUI.Table.TableRowColumn;
    export import TextField = __MaterialUI.TextField;
    export import TimePicker = __MaterialUI.TimePicker;
    export import Toggle = __MaterialUI.Switches.Toggle;
    export import Toolbar = __MaterialUI.Toolbar.Toolbar;
    export import ToolbarGroup = __MaterialUI.Toolbar.ToolbarGroup;
    export import ToolbarSeparator = __MaterialUI.Toolbar.ToolbarSeparator;
    export import ToolbarTitle = __MaterialUI.Toolbar.ToolbarTitle;

    // export type definitions
    export type TouchTapEvent = __MaterialUI.TouchTapEvent;
    export type TouchTapEventHandler = __MaterialUI.TouchTapEventHandler;
}

declare namespace __MaterialUI {
    export import React = __React;

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

    interface ThemeWrapperProps extends React.Props<ThemeWrapper> {
        theme: Styles.MuiTheme;
    }
    export class ThemeWrapper extends React.Component<ThemeWrapperProps, {}> {
    }

    export namespace Styles {
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
            alternateTextColor?: string;
            canvasColor?: string;
            borderColor?: string;
            disabledColor?: string;
            pickerHeaderColor?: string;
            clockCircleColor?: string;
            shadowColor?: string;
        }
        interface MuiTheme {
            spacing?: Spacing;
            fontFamily?: string;
            palette?: ThemePalette;
            isRtl?: boolean;
            userAgent?: string;
            zIndex?: zIndex;
            baseTheme?: RawTheme;
            rawTheme?: RawTheme;
            appBar?: {
                color?: string;
                textColor?: string;
                height?: number;
                titleFontWeight?: number;
                padding?: number;
            };
            avatar?: {
                color?: string;
                backgroundColor?: string;
                borderColor?: string;
            };
            badge?: {
                color?: string;
                textColor?: string;
                primaryColor?: string;
                primaryTextColor?: string;
                secondaryColor?: string;
                secondaryTextColor?: string;
                fontWeight?: number;
            };
            button?: {
                height?: number;
                minWidth?: number;
                iconButtonSize?: number;
            };
            card?: {
                titleColor?: string;
                subtitleColor?: string;
                fontWeight?: number;
            };
            cardMedia?: {
              color?: string;
              overlayContentBackground?: string;
              titleColor?: string;
              subtitleColor?: string;
            };
            cardText?: {
                textColor?: string;
            };
            checkbox?: {
                boxColor?: string;
                checkedColor?: string;
                requiredColor?: string;
                disabledColor?: string;
                labelColor?: string;
                labelDisabledColor?: string;
            };
            chip?: {
              backgroundColor?: string;
              deleteIconColor?: string;
              textColor?: string;
              fontSize?: number;
              fontWeight?: number;
              shadow?: string;
            };
            datePicker?: {
                color?: string;
                textColor?: string;
                calendarTextColor?: string;
                selectColor?: string;
                selectTextColor?: string;
                calendarYearBackgroundColor?: string;
            };
            dialog?: {
              titleFontSize?: number;
              bodyFontSize?: number;
              bodyColor?: string;
            };
            dropDownMenu?: {
                accentColor?: string;
            };
            enhancedButton?: {
              tapHighlightColor?: string;
            };
            flatButton?: {
                color?: string;
                buttonFilterColor?: string;
                disabledTextColor?: string;
                textColor?: string;
                primaryTextColor?: string;
                secondaryTextColor?: string;
                fontSize?: number;
                fontWeight?: number;
            };
            floatingActionButton?: {
                buttonSize?: number;
                miniSize?: number;
                color?: string;
                iconColor?: string;
                secondaryColor?: string;
                secondaryIconColor?: string;
                disabledTextColor?: string;
                disabledColor?: string;
            };
            gridTile?: {
                textColor?: string;
            };
            icon?: {
              color?: string;
              backgroundColor?: string;
            };
            inkBar?: {
                backgroundColor?: string;
            };
            drawer?: {
                width?: number;
                color?: string;
            };
            listItem?: {
                nestedLevelDepth?: number;
                secondaryTextColor?: string;
                leftIconColor?: string;
                rightIconColor?: string;
            };
            menu?: {
                backgroundColor?: string;
                containerBackgroundColor?: string;
            };
            menuItem?: {
                dataHeight?: number;
                height?: number;
                hoverColor?: string;
                padding?: number;
                selectedTextColor?: string;
                rightIconDesktopFill?: string;
            };
            menuSubheader?: {
                padding?: number;
                borderColor?: string;
                textColor?: string;
            };
            overlay?: {
                backgroundColor?: string;
            };
            paper?: {
                color?: string;
                backgroundColor?: string;
                zDepthShadows?: string[];
            };
            radioButton?: {
                borderColor?: string;
                backgroundColor?: string;
                checkedColor?: string;
                requiredColor?: string;
                disabledColor?: string;
                size?: number;
                labelColor?: string;
                labelDisabledColor?: string;
            };
            raisedButton?: {
                color?: string;
                textColor?: string;
                primaryColor?: string;
                primaryTextColor?: string;
                secondaryColor?: string;
                secondaryTextColor?: string;
                disabledColor?: string;
                disabledTextColor?: string;
                fontSize?: number;
                fontWeight?: number;
            };
            refreshIndicator?: {
                strokeColor?: string;
                loadingStrokeColor?: string;
            };
            ripple?: {
                color?: string;
            };
            slider?: {
                trackSize?: number;
                trackColor?: string;
                trackColorSelected?: string;
                handleSize?: number;
                handleSizeDisabled?: number;
                handleSizeActive?: number;
                handleColorZero?: string;
                handleFillColor?: string;
                selectionColor?: string;
                rippleColor?: string;
            };
            snackbar?: {
                textColor?: string;
                backgroundColor?: string;
                actionColor?: string;
            };
            subheader?: {
                color?: string;
                fontWeight?: number;
            };
            stepper?: {
                backgroundColor?: string;
                hoverBackgroundColor?: string;
                iconColor?: string;
                hoveredIconColor?: string;
                inactiveIconColor?: string;
                textColor?: string;
                disabledTextColor?: string;
                connectorLineColor?: string;
            };
            table?: {
                backgroundColor?: string;
            };
            tableFooter?: {
                borderColor?: string;
                textColor?: string;
            };
            tableHeader?: {
                borderColor?: string;
            };
            tableHeaderColumn?: {
                textColor?: string;
                height?: number;
                spacing?: number;
            };
            tableRow?: {
                hoverColor?: string;
                stripeColor?: string;
                selectedColor?: string;
                textColor?: string;
                borderColor?: string;
                height?: number;
            };
            tableRowColumn?: {
                height?: number;
                spacing?: number;
            };
            tabs?: {
                backgroundColor?: string;
                textColor?: string;
                selectedTextColor?: string;
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
            timePicker?: {
                color?: string;
                textColor?: string;
                accentColor?: string;
                clockColor?: string;
                clockCircleColor?: string;
                headerColor?: string;
                selectColor?: string;
                selectTextColor?: string;
            };
            toggle?: {
                thumbOnColor?: string;
                thumbOffColor?: string;
                thumbDisabledColor?: string;
                thumbRequiredColor?: string;
                trackOnColor?: string;
                trackOffColor?: string;
                trackDisabledColor?: string;
                labelColor?: string;
                labelDisabledColor?: string;
                trackRequiredColor?: string;
            };
            toolbar?: {
                color?: string;
                hoverColor?: string;
                backgroundColor?: string;
                height?: number;
                titleFontSize?: number;
                iconColor?: string;
                separatorColor?: string;
                menuHoverColor?: string;
            };
            tooltip?: {
                color?: string;
                rippleBackgroundColor?: string;
            };
            prepareStyles?: Function;
        }

        interface zIndex {
            menu: number;
            appBar: number;
            drawerOverlay: number;
            drawer: number;
            dialogOverlay: number;
            dialog: number;
            layer: number;
            popover: number;
            snackbar: number;
            tooltip: number;
        }
        export var zIndex: zIndex;

        interface RawTheme {
            spacing?: Spacing;
            fontFamily?: string;
            palette?: ThemePalette;
        }
        var lightBaseTheme: RawTheme;
        var darkBaseTheme: RawTheme;

        export function muiThemeable<TComponent extends React.Component<P, S>, P, S>(): (component: TComponent) => TComponent;

        //** @deprecated use MuiThemeProvider instead **/
        export function themeDecorator(muiTheme: Styles.MuiTheme): <TFunction extends Function>(Component: TFunction) => TFunction;

        interface MuiThemeProviderProps extends React.Props<MuiThemeProvider> {
            muiTheme?: Styles.MuiTheme;
        }
        export class MuiThemeProvider extends React.Component<MuiThemeProviderProps, {}>{
        }

        export function getMuiTheme(...muiTheme: MuiTheme[]): MuiTheme;

        interface ThemeManager {
            //** @deprecated ThemeManager is deprecated. please import getMuiTheme directly from "material-ui/styles/getMuiTheme" **/
            getMuiTheme(baseTheme: RawTheme, muiTheme?: MuiTheme): MuiTheme;

            //** @deprecated modifyRawThemeSpacing is deprecated. please use getMuiTheme to modify your theme directly. http://www.material-ui.com/#/customization/themes **/
            modifyRawThemeSpacing(muiTheme: MuiTheme, newSpacing: Spacing): MuiTheme;

            //** @deprecated modifyRawThemePalette is deprecated. please use getMuiTheme to modify your theme directly. http://www.material-ui.com/#/customization/themes **/
            modifyRawThemePalette(muiTheme: MuiTheme, newPaletteKeys: ThemePalette): MuiTheme;

            //** @deprecated modifyRawThemeFontFamily is deprecated. please use getMuiTheme to modify your theme directly. http://www.material-ui.com/#/customization/themes **/
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

        //** @deprecated use darkBaseTheme instead **/
        export var DarkRawTheme: RawTheme;

        //** @deprecated use lightBaseTheme instead **/
        export var LightRawTheme: RawTheme;
    }

    interface AppBarProps extends React.Props<AppBar> {
        className?: string;
        iconClassNameLeft?: string;
        iconClassNameRight?: string;
        iconElementLeft?: React.ReactElement<any>;
        iconElementRight?: React.ReactElement<any>;
        iconStyleRight?: string;
        iconStyleLeft?: string;
        onLeftIconButtonTouchTap?: TouchTapEventHandler;
        onRightIconButtonTouchTap?: TouchTapEventHandler;
        onTitleTouchTap?: TouchTapEventHandler;
        showMenuIconButton?: boolean;
        style?: React.CSSProperties;
        title?: React.ReactNode;
        titleStyle?: React.CSSProperties;
        zDepth?: number;
    }
    export class AppBar extends React.Component<AppBarProps, {}>{
    }

    interface AppCanvasProps extends React.Props<AppCanvas> {
    }
    export class AppCanvas extends React.Component<AppCanvasProps, {}> {
    }

    namespace propTypes {
        type horizontal = 'left' | 'middle' | 'right';
        type vertical = 'top' | 'center' | 'bottom';
        type direction = 'left' | 'right' | 'up' | 'down';
        
        interface origin {
            horizontal: horizontal;
            vertical: vertical;
        }

        type corners = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
        type cornersAndCenter = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';
    }

    type AutoCompleteDataItem = { text: string, value: React.ReactNode } | string;
    type AutoCompleteDataSource = { text: string, value: React.ReactNode }[] | string[];
    interface AutoCompleteProps extends React.Props<AutoComplete> {
        anchorOrigin?: propTypes.origin;
        animated?: boolean;
        dataSource: AutoCompleteDataSource;
        disableFocusRipple?: boolean;
        errorStyle?: React.CSSProperties;
        errorText?: string;
        filter?: (searchText: string, key: string, item: AutoCompleteDataItem) => boolean;
        floatingLabelText?: string;
        fullWidth?: boolean;
        hintText?: string;
        listStyle?: React.CSSProperties;
        maxSearchResults?: number;
        menuCloseDelay?: number;
        menuProps?: any;
        menuStyle?: React.CSSProperties;
        onBlur?: React.FocusEventHandler;
        onFocus?: React.FocusEventHandler;
        onKeyDown?: React.KeyboardEventHandler;
        onNewRequest?: (chosenRequest: string, index: number) => void;
        onUpdateInput?: (searchText: string, dataSource: AutoCompleteDataSource) => void;
        open?: boolean;
        openOnFocus?: boolean;
        searchText?: string;
        style?: React.CSSProperties;
        targetOrigin?: propTypes.origin;
        /** @deprecated Instead, use openOnFocus */
        triggerUpdateOnFocus?: boolean;
    }
    export class AutoComplete extends React.Component<AutoCompleteProps, {}> {
        static noFilter: () => boolean;
        static defaultFilter: (searchText: string, key: string) => boolean;
        static caseSensitiveFilter: (searchText: string, key: string) => boolean;
        static caseInsensitiveFilter: (searchText: string, key: string) => boolean;
        static levenshteinDistanceFilter(distanceLessThan: number): (searchText: string, key: string) => boolean;
        static fuzzyFilter: (searchText: string, key: string) => boolean;
        static Item: Menus.MenuItem;
        static Divider: Divider;
    }

    interface AvatarProps extends React.Props<Avatar> {
        backgroundColor?: string;
        className?: string;
        color?: string;
        icon?: React.ReactElement<any>;
        size?: number;
        src?: string;
        style?: React.CSSProperties;
    }
    export class Avatar extends React.Component<AvatarProps, {}> {
    }

    interface BadgeProps extends React.Props<Badge> {
        badgeContent: React.ReactNode;
        badgeStyle?: React.CSSProperties;
        className?: string;
        primary?: boolean;
        secondary?: boolean;
        style?: React.CSSProperties;
    }
    export class Badge extends React.Component<BadgeProps, {}> {
    }

    interface BeforeAfterWrapperProps extends React.Props<BeforeAfterWrapper> {
        afterElementType?: string;
        afterStyle?: React.CSSProperties;
        beforeElementType?: string;
        beforeStyle?: React.CSSProperties;
        elementType?: string;
        style?: React.CSSProperties;
    }
    export class BeforeAfterWrapper extends React.Component<BeforeAfterWrapperProps, {}> {
    }

    // non generally overridden elements of EnhancedButton
    interface SharedEnhancedButtonProps<T> extends React.Props<T> {
        centerRipple?: boolean;
        disableFocusRipple?: boolean;
        disableKeyboardFocus?: boolean;
        disableTouchRipple?: boolean;
        focusRippleColor?: string;
        focusRippleOpacity?: number;
        keyboardFocused?: boolean;
        linkButton?: boolean;
        onBlur?: React.FocusEventHandler;
        onFocus?: React.FocusEventHandler;
        onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
        onKeyDown?: React.KeyboardEventHandler;
        onKeyUp?: React.KeyboardEventHandler;
        onTouchTap?: TouchTapEventHandler;
        onClick?: React.MouseEventHandler;
        style?: React.CSSProperties;
        tabIndex?: number;
        touchRippleColor?: string;
        touchRippleOpacity?: number;
        type?: string;
        containerElement?: React.ReactNode | string;
    }

    interface EnhancedButtonProps extends React.HTMLAttributes, SharedEnhancedButtonProps<EnhancedButton> {
        // container element, <button/>, or <span/>(if disabled link) is the element that get the 'other' properties
        containerElement?: React.ReactNode | string;
        disabled?: boolean;
    }
    export class EnhancedButton extends React.Component<EnhancedButtonProps, {}> {
    }

    interface FlatButtonProps extends React.DOMAttributes, SharedEnhancedButtonProps<FlatButton> {
        // <EnhancedButton/> is the element that get the 'other' properties
        backgroundColor?: string;
        disabled?: boolean;
        hoverColor?: string;
        href?: string;
        icon?: React.ReactNode;
        label?: React.ReactNode;
        labelPosition?: "before" | "after";
        labelStyle?: React.CSSProperties;
        linkButton?: boolean;
        onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        onTouchStart?: React.TouchEventHandler;
        primary?: boolean;
        rippleColor?: string;
        secondary?: boolean;
        style?: React.CSSProperties;
    }
    export class FlatButton extends React.Component<FlatButtonProps, {}> {
    }

    interface RaisedButtonProps extends SharedEnhancedButtonProps<RaisedButton> {
        // <EnhancedButton/> is the element that get the 'other' properties
        backgroundColor?: string;
        className?: string;
        disabled?: boolean;
        disabledBackgroundColor?: string;
        disabledLabelColor?: string;
        fullWidth?: boolean;
        href?: string;
        icon?: React.ReactNode;
        label?: React.ReactNode;
        labelColor?: string;
        labelPosition?: "before" | "after";
        labelStyle?: React.CSSProperties;
        linkButton?: boolean;
        onMouseDown?: React.MouseEventHandler;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        onMouseUp?: React.MouseEventHandler;
        onTouchEnd?: React.TouchEventHandler;
        onTouchStart?: React.TouchEventHandler;
        primary?: boolean;
        rippleStyle?: React.CSSProperties;
        secondary?: boolean;
        style?: React.CSSProperties;
    }
    export class RaisedButton extends React.Component<RaisedButtonProps, {}> {
    }

    interface FloatingActionButtonProps extends React.HTMLAttributes, SharedEnhancedButtonProps<FloatingActionButton> {
        // <EnhancedButton/> is the element that get the 'other' properties
        backgroundColor?: string;
        className?: string;
        disabled?: boolean;
        disabledColor?: string;
        href?: string;
        iconClassName?: string;
        iconStyle?: React.CSSProperties;
        linkButton?: boolean;
        mini?: boolean;
        onMouseDown?: React.MouseEventHandler;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        onMouseUp?: React.MouseEventHandler;
        onTouchEnd?: React.TouchEventHandler;
        onTouchStart?: React.TouchEventHandler;
        secondary?: boolean;
        style?: React.CSSProperties;
        zDepth?: number;
    }
    export class FloatingActionButton extends React.Component<FloatingActionButtonProps, {}> {
    }

    interface IconButtonProps extends React.HTMLAttributes, SharedEnhancedButtonProps<IconButton> {
        // <EnhancedButton/> is the element that get the 'other' properties
        className?: string;
        disableTouchRipple?: boolean;
        disabled?: boolean;
        iconClassName?: string;
        iconStyle?: React.CSSProperties;
        onBlur?: React.FocusEventHandler;
        onFocus?: React.FocusEventHandler;
        onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        onMouseOut?: React.MouseEventHandler;
        style?: React.CSSProperties;
        tooltip?: string;
        tooltipPosition?: propTypes.cornersAndCenter;
        tooltipStyles?: React.CSSProperties;
        touch?: boolean;
    }
    export class IconButton extends React.Component<IconButtonProps, {}> {
    }

    namespace Card {

        interface CardProps extends React.Props<Card> {
            actAsExpander?: boolean;
            containerStyle?: React.CSSProperties;
            expandable?: boolean;
            expanded?: boolean;
            initiallyExpanded?: boolean;
            onExpandChange?: (isExpanded: boolean) => void;
            showExpandableButton?: boolean;
            style?: React.CSSProperties;
        }
        export class Card extends React.Component<CardProps, {}> {
        }

        interface CardActionsProps extends React.Props<CardActions> {
            actAsExpander?: boolean;
            expandable?: boolean;
            showExpandableButton?: boolean;
            style?: React.CSSProperties;
        }
        export class CardActions extends React.Component<CardActionsProps, {}> {
        }

        interface CardExpandableProps extends React.Props<CardExpandable> {
            expanded?: boolean;
            onExpanding?: (isExpanded: boolean) => void;
            style?: React.CSSProperties;
        }
        export class CardExpandable extends React.Component<CardExpandableProps, {}> {
        }

        interface CardHeaderProps extends React.Props<CardHeader> {
            actAsExpander?: boolean;
            avatar?: React.ReactNode;
            expandable?: boolean;
            showExpandableButton?: boolean;
            style?: React.CSSProperties;
            subtitle?: React.ReactNode;
            subtitleColor?: string;
            subtitleStyle?: React.CSSProperties;
            textStyle?: React.CSSProperties;
            title?: React.ReactNode;
            titleColor?: string;
            titleStyle?: React.CSSProperties;
        }
        export class CardHeader extends React.Component<CardHeaderProps, {}> {
        }

        interface CardMediaProps extends React.Props<CardMedia> {
            actAsExpander?: boolean;
            expandable?: boolean;
            mediaStyle?: React.CSSProperties;
            overlay?: React.ReactNode;
            overlayContainerStyle?: React.CSSProperties;
            overlayContentStyle?: React.CSSProperties;
            overlayStyle?: React.CSSProperties;
            style?: React.CSSProperties;
        }
        export class CardMedia extends React.Component<CardMediaProps, {}> {
        }

        interface CardTextProps extends React.Props<CardText> {
            actAsExpander?: boolean;
            color?: string;
            expandable?: boolean;
            style?: React.CSSProperties;
        }
        export class CardText extends React.Component<CardTextProps, {}> {
        }

        interface CardTitleProps extends React.Props<CardTitle> {
            actAsExpander?: boolean;
            expandable?: boolean;
            showExpandableButton?: boolean;
            style?: React.CSSProperties;
            subtitle?: React.ReactNode;
            subtitleColor?: string;
            subtitleStyle?: React.CSSProperties;
            title?: React.ReactNode;
            titleColor?: string;
            titleStyle?: React.CSSProperties;
        }
        export class CardTitle extends React.Component<CardTitleProps, {}> {
        }
    }

    interface ChipProps extends React.Props<Chip> {
        backgroundColor?: string;
        className?: string;
        labelColor?: string;
        labelStyle?: React.CSSProperties;
        onRequestDelete?: React.TouchEventHandler;
        onTouchTap?: React.TouchEventHandler;
        style?: React.CSSProperties;
    }
    export class Chip extends React.Component<ChipProps, {}> {
    }

    namespace DatePicker {
        interface DatePickerProps extends React.Props<DatePicker> {
            // <TextField/> is the element that get the 'other' properties
            DateTimeFormat?: Intl.DateTimeFormat;
            autoOk?: boolean;
            cancelLabel?: React.ReactNode;
            container?: "dialog" | "inline";
            defaultDate?: Date;
            disableYearSelection?: boolean;
            disabled?: boolean;
            firstDayOfWeek?: number;
            formatDate?: (date: Date) => string;
            locale?: string;
            maxDate?: Date;
            minDate?: Date;
            mode?: "portrait" | "landscape";
            okLabel?: React.ReactNode;
            onChange?: (e: any, date: Date) => void; // e is always null
            onDismiss?: () => void;
            onFocus?: React.FocusEventHandler;
            onShow?: () => void;
            onTouchTap?: React.TouchEventHandler;
            shouldDisableDate?: (day: Date) => boolean;
            style?: React.CSSProperties;
            textFieldStyle?: React.CSSProperties;
            value?: Date;
            /** @deprecated use cancelLabel and okLabel instead */
            wordings?: {ok: string, cancel: string};

            // From <TextField />
            className?: string;
            defaultValue?: string;
            errorStyle?: React.CSSProperties;
            errorText?: React.ReactNode;
            floatingLabelStyle?: React.CSSProperties;
            floatingLabelText?: React.ReactNode;
            fullWidth?: boolean;
            hintStyle?: React.CSSProperties;
            hintText?: React.ReactNode;
            id?: string;
            inputStyle?: React.CSSProperties;
            name?: string;
            onBlur?: React.FocusEventHandler;
            onKeyDown?: React.KeyboardEventHandler;
            type?: string;
            underlineDisabledStyle?: React.CSSProperties;
            underlineFocusStyle?: React.CSSProperties;
            underlineShow?: boolean;
            underlineStyle?: React.CSSProperties;
        }
        export class DatePicker extends React.Component<DatePickerProps, {}> {
        }

        interface DatePickerDialogProps extends React.Props<DatePickerDialog> {
            // <Container/> is the element that get the 'other' properties
            DateTimeFormat?: Intl.DateTimeFormat;
            autoOk?: boolean;
            cancelLabel?: React.ReactNode;
            container?: "dialog" | "inline";
            disableYearSelection?: boolean;
            firstDayOfWeek?: number;
            initialDate?: Date;
            locale?: string;
            maxDate?: Date;
            minDate?: Date;
            mode?: "portrait" | "landscape";
            okLabel?: React.ReactNode;
            onAccept?: (d: Date) => void;
            onDismiss?: () => void;
            onShow?: () => void;
            shouldDisableDate?: (day: Date) => boolean;
            style?: React.CSSProperties;
            wordings?: { ok: string, cancel: string };
        }
        export class DatePickerDialog extends React.Component<DatePickerDialogProps, {}> {
        }
    }

    interface DialogProps extends React.DOMAttributes, React.Props<Dialog> {
        actions?: React.ReactElement<any> | React.ReactElement<any>[];
        actionsContainerClassName?: string;
        actionsContainerStyle?: React.CSSProperties;
        autoDetectWindowHeight?: boolean;
        autoScrollBodyContent?: boolean;
        bodyClassName?: string;
        bodyStyle?: React.CSSProperties;
        className?: string;
        contentClassName?: string;
        contentStyle?: React.CSSProperties;
        modal?: boolean;
        onRequestClose?: (buttonClicked: boolean) => void;
        open: boolean;
        overlayClassName?: string;
        overlayStyle?: React.CSSProperties;
        repositionOnUpdate?: boolean;
        style?: React.CSSProperties;
        title?: React.ReactNode;
        titleClassName?: string;
        titleStyle?: React.CSSProperties;
    }
    export class Dialog extends React.Component<DialogProps, {}> {
    }

    interface DividerProps extends React.Props<Divider> {
        className?: string;
        inset?: boolean;
        style?: React.CSSProperties;
    }
    export class Divider extends React.Component<DividerProps, {}>{
    }

    interface DrawerProps extends React.Props<Drawer> {
        className?: string;
        containerClassName?: string;
        containerStyle?: React.CSSProperties;
        disableSwipeToOpen?: boolean;
        docked?: boolean;
        onRequestChange?: (opening: boolean, reason: string) => void;
        open?: boolean;
        openSecondary?: Boolean;
        overlayClassName?: string;
        overlayStyle?: React.CSSProperties;
        style?: React.CSSProperties;
        swipeAreaWidth?: number;
        width?: number;
        zDepth?: number;
    }
    export class Drawer extends React.Component<DrawerProps, {}> {
    }

    namespace GridList {
        interface GridListProps extends React.Props<GridList> {
            cellHeight?: number;
            cols?: number;
            padding?: number;
            style?: React.CSSProperties;
        }
        export class GridList extends React.Component<GridListProps, {}>{
        }

        interface GridTileProps extends React.Props<GridTile> {
            actionIcon?: React.ReactElement<any>;
            actionPosition?: "left" | "right";
            cols?: number;
            containerElement?: string | React.ReactElement<any> | React.ComponentClass<any>;
            rows?: number;
            style?: React.CSSProperties;
            subtitle?: React.ReactNode;
            title?: React.ReactNode;
            titleBackground?: string;
            titlePosition?: "top" | "bottom";
        }
        export class GridTile extends React.Component<GridTileProps, {}>{
        }
    }

    interface FontIconProps extends React.HTMLAttributes, React.Props<FontIcon> {
        // <span/> is the element that get the 'other' properties
        color?: string;
        hoverColor?: string;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        style?: React.CSSProperties;
    }
    export class FontIcon extends React.Component<FontIconProps, {}> {
    }

    interface SvgIconProps extends React.SVGAttributes, React.Props<SvgIcon> {
        // <svg/> is the element that get the 'other' properties
        color?: string;
        hoverColor?: string;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        style?: React.CSSProperties;
        viewBox?: string;
    }
    export class SvgIcon extends React.Component<SvgIconProps, {}> {
    }

    namespace List {
        interface ListProps extends React.Props<List> {
            // <Paper/> is the element that get the 'other' properties
            /** @deprecated nest the Subheader component directly inside the List instead */
            insetSubheader?: boolean;
            style?: React.CSSProperties;
            /** @deprecated nest the Subheader component directly inside the List instead */
            subheader?: string;
            /** @deprecated nest the Subheader component directly inside the List instead */
            subheaderStyle?: React.CSSProperties;
            /** @deprecated wrap it in `Paper` or another component that provides zDepth instead */
            zDepth?: number;
        }
        export class List extends React.Component<ListProps, {}> {
        }

        interface ListItemProps extends React.HTMLAttributes, React.Props<ListItem> {
            // <EnhancedButton/> is the element that get the 'other' properties
            autoGenerateNestedIndicator?: boolean;
            disableKeyboardFocus?: boolean;
            disabled?: boolean;
            initiallyOpen?: boolean;
            innerDivStyle?: React.CSSProperties;
            insetChildren?: boolean;
            leftAvatar?: React.ReactElement<any>;
            leftCheckbox?: React.ReactElement<any>;
            leftIcon?: React.ReactElement<any>;
            nestedItems?: React.ReactElement<ListItemProps>[];
            nestedLevel?: number;
            nestedListStyle?: React.CSSProperties;
            onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
            onMouseEnter?: React.MouseEventHandler;
            onMouseLeave?: React.MouseEventHandler;
            onNestedListToggle?: (item: ListItem) => void;
            onTouchStart?: React.TouchEventHandler;
            onTouchTap?: TouchTapEventHandler;
            primaryText?: React.ReactNode;
            primaryTogglesNestedList?: boolean;
            rightAvatar?: React.ReactElement<any>;
            rightIcon?: React.ReactElement<any>;
            rightIconButton?: React.ReactElement<any>;
            rightToggle?: React.ReactElement<any>;
            secondaryText?: React.ReactNode;
            secondaryTextLines?: number; // 1 or 2
            style?: React.CSSProperties;
        }
        export class ListItem extends React.Component<ListItemProps, {}> {
        }

        interface SelectableProps {
            onChange?: (e: TouchTapEvent, value: any) => void;
            selectedItemStyle?: React.CSSProperties;
            value?: any;
            /** @deprecated use the value and onChange property instead */
            valueLink?: { value: any; requestChange: (e: TouchTapEvent, value: any) => void };
        }

        // union types for higher order components in TypeScript 1.8: https://github.com/Microsoft/TypeScript/issues/4362
        export function MakeSelectable<P extends {}>(component: React.ComponentClass<P>): React.ComponentClass<P & SelectableProps>;
    }

    namespace Menus {
        interface MenuProps extends React.Props<Menu> {
            // <List/> is the element that get the 'other' properties
            /** @deprecated Instead, use a Popover */
            animated?: boolean;
            autoWidth?: boolean;
            desktop?: boolean;
            disableAutoFocus?: boolean;
            initiallyKeyboardFocused?: boolean;
            listStyle?: React.CSSProperties;
            maxHeight?: number;
            multiple?: boolean;
            onChange?: (e: TouchTapEvent, itemValue: any | any[]) => void;
            onEscKeyDown?: React.KeyboardEventHandler;
            onItemTouchTap?: (e: TouchTapEvent, item: MenuItem) => void;
            onKeyDown?: React.KeyboardEventHandler;
            /** @deprecated Instead, use a Popover */
            openDirection?: propTypes.corners;
            selectedMenuItemStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            value?: any | any[];
            valueLink?: ReactLink<any | any[]>;
            width?: string | number;
            /** @deprecated wrap it in `Paper` or another component that provides zDepth instead */
            zDepth?: number;
        }
        export class Menu extends React.Component<MenuProps, {}>{
        }

        interface MenuItemProps extends React.HTMLAttributes, React.Props<MenuItem> {
            // <ListItem/> is the element that get the 'other' properties
            checked?: boolean;
            desktop?: boolean;
            disabled?: boolean;
            focusState?: string; // 'none', 'focused', or 'keyboard-focused'
            innerDivStyle?: React.CSSProperties;
            insetChildren?: boolean;
            leftIcon?: React.ReactElement<any>;
            menuItems?: React.ReactNode;
            onTouchTap?: TouchTapEventHandler;
            rightIcon?: React.ReactElement<any>;
            secondaryText?: React.ReactNode;
            style?: React.CSSProperties;
            value?: any;

            // useful attributes passed to <ListItem/>
            primaryText?: React.ReactNode;
            secondaryTextLines?: number; // 1 or 2
        }
        export class MenuItem extends React.Component<MenuItemProps, {}>{
        }

        interface IconMenuProps extends React.Props<IconMenu> {
            // <Menu/> is the element that get the 'other' properties
            anchorOrigin?: propTypes.origin;
            className?: string;
            iconButtonElement: React.ReactElement<IconButtonProps>;
            iconStyle?: React.CSSProperties;
            menuStyle?: React.CSSProperties;
            onItemTouchTap?: (e: TouchTapEvent, item: MenuItem) => void;
            onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
            onMouseDown?: React.MouseEventHandler;
            onMouseEnter?: React.MouseEventHandler;
            onMouseLeave?: React.MouseEventHandler;
            onMouseUp?: React.MouseEventHandler;
            onRequestChange?: (opening: boolean, reason: string) => void;
            onTouchTap?: TouchTapEventHandler;
            open?: boolean;
            style?: React.CSSProperties;
            targetOrigin?: propTypes.origin;
            touchTapCloseDelay?: number;
            useLayerForClickAway?: boolean;

            animated?: boolean;
            autoWidth?: boolean;
            desktop?: boolean;
            listStyle?: React.CSSProperties;
            maxHeight?: number;
            multiple?: boolean;
            onChange?: (e: TouchTapEvent, itemValue: any | any[]) => void;
            onKeyDown?: React.KeyboardEventHandler;
            /** @deprecated Instead, use a Popover */
            openDirection?: string;
            selectedMenuItemStyle?: React.CSSProperties;
            value?: any | any[];
            valueLink?: ReactLink<any | any[]>;
            width?: string | number;
        }
        export class IconMenu extends React.Component<IconMenuProps, {}> {
        }

        interface DropDownMenuProps extends React.Props<DropDownMenu> {
            // <div/> is the element that gets the 'other' properties
            animated?: boolean;
            autoWidth?: boolean;
            className?: string;
            disabled?: boolean;
            iconStyle?: React.CSSProperties;
            labelStyle?: React.CSSProperties;
            listStyle?: React.CSSProperties;
            maxHeight?: number;
            menuStyle?: React.CSSProperties;
            onChange?: (e: TouchTapEvent, index: number, menuItemValue: any) => void;
            openImmediately?: boolean;
            style?: React.CSSProperties;
            underlineStyle?: React.CSSProperties;
            value?: any;
        }
        export class DropDownMenu extends React.Component<DropDownMenuProps, {}> {
        }
    }

    interface PaperProps extends React.HTMLAttributes, React.Props<Paper> {
        circle?: boolean;
        rounded?: boolean;
        style?: React.CSSProperties;
        transitionEnabled?: boolean;
        zDepth?: number;
    }
    export class Paper extends React.Component<PaperProps, {}> {
    }

    namespace Popover {
        interface PopoverAnimationProps {
            open: boolean;
            style?: React.CSSProperties;
        }

        interface PopoverProps extends React.Props<Popover> {
            anchorEl?: React.ReactInstance;
            anchorOrigin?: propTypes.origin;
            animated?: boolean;
            animation?: React.ComponentClass<PopoverAnimationProps>;
            autoCloseWhenOffScreen?: boolean;
            canAutoPosition?: boolean;
            className?: string;
            onRequestClose?: (reason: string) => void;
            open?: boolean;
            style?: React.CSSProperties;
            targetOrigin?: propTypes.origin;
            useLayerForClickAway?: boolean;
            zDepth?: number;
        }
        export class Popover extends React.Component<PopoverProps, {}>{
        }

        interface PopoverAnimationVerticalProps extends PopoverAnimationProps, React.Props<PopoverAnimationVertical> {
            className?: string;
            targetOrigin?: propTypes.origin;
            zDepth?: number;
        }
        export class PopoverAnimationVertical extends React.Component<PopoverAnimationVerticalProps, {}>{
        }

        interface PopoverAnimationDefaultProps extends PopoverAnimationProps, React.Props<PopoverAnimationDefault> {
            className?: string;
            targetOrigin?: propTypes.origin;
            zDepth?: number;
        }
        export class PopoverAnimationDefault extends React.Component<PopoverAnimationDefaultProps, {}>{
        }
    }

    interface CircularProgressProps extends React.Props<CircularProgress> {
        color?: string;
        innerStyle?: React.CSSProperties;
        max?: number;
        min?: number;
        mode?: "determinate" | "indeterminate";
        size?: number;
        style?: React.CSSProperties;
        value?: number;
    }
    export class CircularProgress extends React.Component<CircularProgressProps, {}> {
    }

    interface LinearProgressProps extends React.Props<LinearProgress> {
        color?: string;
        max?: number;
        min?: number;
        mode?: "determinate" | "indeterminate";
        style?: React.CSSProperties;
        value?: number;
    }
    export class LinearProgress extends React.Component<LinearProgressProps, {}> {
    }

    interface RefreshIndicatorProps extends React.Props<RefreshIndicator> {
        color?: string;
        left: number;
        loadingColor?: string;
        percentage?: number;
        size?: number;
        status?: "ready" | "loading" | "hide";
        style?: React.CSSProperties;
        top: number;
    }
    export class RefreshIndicator extends React.Component<RefreshIndicatorProps, {}> {
    }

    interface SelectFieldProps extends React.Props<SelectField> {
        // <DropDownMenu/> is the element that get the 'other' properties
        autoWidth?: boolean;
        disabled?: boolean;
        errorStyle?: React.CSSProperties;
        errorText?: React.ReactNode;
        floatingLabelFixed?: boolean;
        floatingLabelStyle?: React.CSSProperties;
        floatingLabelText?: React.ReactNode;
        fullWidth?: boolean;
        hintStyle?: React.CSSProperties;
        hintText?: React.ReactNode;
        iconStyle?: React.CSSProperties;
        id?: string;
        labelStyle?: React.CSSProperties;
        onBlur?: React.FocusEventHandler;
        onChange?: (e: TouchTapEvent, index: number, menuItemValue: any) => void;
        onFocus?: React.FocusEventHandler;
        style?: React.CSSProperties;
        underlineDisabledStyle?: React.CSSProperties;
        underlineFocusStyle?: React.CSSProperties;
        underlineStyle?: React.CSSProperties;
        value?: any;

        // useful attributes passed to <DropDownMenu/>
        className?: string;
        maxHeight?: number;
        menuStyle?: any;
        openImmediately?: boolean;
    }
    export class SelectField extends React.Component<SelectFieldProps, {}> {
    }

    interface SliderProps extends React.Props<Slider> {
        defaultValue?: number;
        description?: string;
        disableFocusRipple?: boolean;
        disabled?: boolean;
        error?: string;
        max?: number;
        min?: number;
        name?: string;
        onBlur?: React.FocusEventHandler;
        onChange?: (e: React.MouseEvent, value: number) => void;
        onDragStart?: React.MouseEventHandler;
        onDragStop?: React.MouseEventHandler;
        onFocus?: React.FocusEventHandler;
        required?: boolean;
        step?: number;
        style?: React.CSSProperties;
        value?: number;
    }
    export class Slider extends React.Component<SliderProps, {}> {
    }

    namespace Switches {

        // what's not commonly overridden by Checkbox, RadioButton, or Toggle
        interface CommonEnhancedSwitchProps<T> extends React.HTMLAttributes, React.Props<T> {
        }

        interface CheckboxProps extends CommonEnhancedSwitchProps<Checkbox> {
            // <EnhancedSwitch/> is element that get the 'other' properties
            checked?: boolean;
            checkedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
            defaultChecked?: boolean;
            disabled?: boolean;
            iconStyle?: React.CSSProperties;
            labelPosition?: "left" | "right";
            labelStyle?: React.CSSProperties;
            onCheck?: (event: React.MouseEvent, checked: boolean) => void;
            style?: React.CSSProperties;
            /** @deprecated Use uncheckedIcon instead */
            unCheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
            uncheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
            valueLink?: ReactLink<boolean>;
        }
        export class Checkbox extends React.Component<CheckboxProps, {}> {
            /** @deprecated Use checked property instead */
            isChecked(): void;
            /** @deprecated Use checked property instead */
            setChecked(newCheckedValue: boolean): void;
        }

        interface RadioButtonProps extends CommonEnhancedSwitchProps<RadioButton> {
            // <EnhancedSwitch/> is element that get the 'other' properties
            checkedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
            disabled?: boolean;
            iconStyle?: React.CSSProperties;
            inputStyle?: React.CSSProperties;
            labelStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            uncheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
            value?: string;
        }
        export class RadioButton extends React.Component<RadioButtonProps, {}> {
            isChecked(): boolean;
            getValue(): string;
        }

        interface RadioButtonGroupProps extends React.Props<RadioButtonGroup> {
            className?: string;
            defaultSelected?: string;
            labelPosition?: "left" | "right";
            name: string;
            onChange?: (e: React.FormEvent, selected: string) => void;
            style?: React.CSSProperties;
            valueSelected?: string;
        }
        export class RadioButtonGroup extends React.Component<RadioButtonGroupProps, {}> {
            clearValue(): void;
            getSelectedValue(): string;
            setSelectedValue(newSelectionValue: string): void;
        }

        interface ToggleProps extends CommonEnhancedSwitchProps<Toggle> {
            // <EnhancedSwitch/> is element that get the 'other' properties
            defaultToggled?: boolean;
            disabled?: boolean;
            elementStyle?: React.CSSProperties;
            iconStyle?: React.CSSProperties;
            inputStyle?: React.CSSProperties;
            label?: string;
            labelPosition?: "left" | "right";
            labelStyle?: React.CSSProperties;
            onToggle?: (e: React.MouseEvent, isInputChecked: boolean) => void;
            rippleStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            thumbStyle?: React.CSSProperties;
            toggled?: boolean;
            trackStyle?: React.CSSProperties;
            valueLink?: ReactLink<boolean>;
        }
        export class Toggle extends React.Component<ToggleProps, {}> {
            isToggled(): boolean;
            setToggled(newToggledValue: boolean): void;
        }
    }

    interface SnackbarProps extends React.Props<Snackbar> {
        action?: string;
        autoHideDuration?: number;
        bodyStyle?: React.CSSProperties;
        className?: string;
        message: React.ReactNode;
        onActionTouchTap?: React.TouchEventHandler;
        onRequestClose: (reason: string) => void;
        open: boolean;
        style?: React.CSSProperties;
    }
    export class Snackbar extends React.Component<SnackbarProps, {}> {
    }

    namespace Stepper {
        interface StepProps extends React.Props<Step> {
            active?: boolean;
            completed?: boolean;
            disabled?: boolean;
            style?: React.CSSProperties;
        }
        export class Step extends React.Component<StepProps, {}>{
        }

        interface StepButtonProps extends SharedEnhancedButtonProps<StepButton> {
            active?: boolean;
            completed?: boolean;
            disabled?: boolean;
            icon?: React.ReactNode | string | number;
            onMouseEnter?: React.MouseEventHandler;
            onMouseLeave?: React.MouseEventHandler;
            onTouchStart?: React.TouchEventHandler;
            style?: React.CSSProperties;
        }
        export class StepButton extends React.Component<StepButtonProps, {}>{
        }

        interface StepContentProps extends React.Props<StepContent> {
            active?: boolean;
            last?: boolean;
            style?: React.CSSProperties;
        }
        export class StepContent extends React.Component<StepContentProps, {}>{
        }

        interface StepLabelProps extends React.Props<StepLabel> {
            active?: boolean;
            completed?: boolean;
            disabled?: boolean;
            icon?: React.ReactNode | string | number;
            style?: React.CSSProperties;
        }
        export class StepLabel extends React.Component<StepLabelProps, {}>{
        }

        interface StepperProps extends React.Props<Stepper> {
            activeStep?: number;
            linear?: boolean;
            orientation?: "horizontal" | "vertical";
            style?: React.CSSProperties;
        }
        export class Stepper extends React.Component<StepperProps, {}>{
        }
    }

    interface SubheaderProps extends React.Props<Subheader> {
        inset?: boolean;
        style?: React.CSSProperties;
    }
    export class Subheader extends React.Component<SubheaderProps, {}>{
    }

    namespace Table {
        interface TableProps extends React.Props<Table> {
            allRowsSelected?: boolean;
            bodyStyle?: React.CSSProperties;
            className?: string;
            fixedFooter?: boolean;
            fixedHeader?: boolean;
            footerStyle?: React.CSSProperties;
            headerStyle?: React.CSSProperties;
            height?: string;
            multiSelectable?: boolean;
            onCellClick?: (row: number, column: number) => void;
            onCellHover?: (row: number, column: number) => void;
            onCellHoverExit?: (row: number, column: number) => void;
            onRowHover?: (row: number) => void;
            onRowHoverExit?: (row: number) => void;
            onRowSelection?: (selectedRows: number[] | string) => void;
            selectable?: boolean;
            style?: React.CSSProperties;
            wrapperStyle?: React.CSSProperties;
        }
        export class Table extends React.Component<TableProps, {}> {
        }

        interface TableRowProps extends React.Props<TableRow> {
            // <tr/> is element that get the 'other' properties
            className?: string;
            displayBorder?: boolean;
            hoverable?: boolean;
            hovered?: boolean;
            /** @deprecated Instead, use event handler on Table */
            onCellClick?: (e: React.MouseEvent, row: number, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onCellHover?: (e: React.MouseEvent, row: number, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onCellHoverExit?: (e: React.MouseEvent, row: number, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onRowClick?: (e: React.MouseEvent, row: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onRowHover?: (e: React.MouseEvent, row: number) => void;
            /** @deprecated Instead, use event handler on Table */
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
            // <td/> is element that get the 'other' properties
            className?: string;
            columnNumber?: number;
            hoverable?: boolean;
            key?: string;
            /** @deprecated Instead, use event handler on Table */
            onClick?: (e: React.MouseEvent, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onHover?: (e: React.MouseEvent, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onHoverExit?: (e: React.MouseEvent, column: number) => void;
            style?: React.CSSProperties;

            // useful attributes passed to <td/>
            colSpan?: number;
        }
        export class TableRowColumn extends React.Component<TableRowColumnProps, {}> {
        }

        interface TableHeaderProps extends React.Props<TableHeader> {
            adjustForCheckbox?: boolean;
            className?: string;
            displaySelectAll?: boolean;
            enableSelectAll?: boolean;
            /** @deprecated Instead, use event handler on Table */
            onSelectAll?: (checked: boolean) => void;
            /** @deprecated Instead, use event handler on Table */
            selectAllSelected?: boolean;
            style?: React.CSSProperties;
        }
        export class TableHeader extends React.Component<TableHeaderProps, {}> {
        }

        interface TableHeaderColumnProps extends React.Props<TableHeaderColumn> {
            // <th/> is element that get the 'other' properties
            className?: string;
            columnNumber?: number;
            onClick?: (e: React.MouseEvent, column: number) => void;
            style?: React.CSSProperties;
            tooltip?: string;
            tooltipStyle?: React.CSSProperties;

            // useful attributes passed to <th/>
            colSpan?: number;
        }
        export class TableHeaderColumn extends React.Component<TableHeaderColumnProps, {}> {
        }

        interface TableBodyProps extends React.Props<TableBody> {
            /** @deprecated Instead, use property on Table */
            allRowsSelected?: boolean;
            className?: string;
            deselectOnClickaway?: boolean;
            displayRowCheckbox?: boolean;
            /** @deprecated Instead, use property on Table */
            multiSelectable?: boolean;
            /** @deprecated Instead, use event handler on Table */
            onCellClick?: (row: number, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onCellHover?: (row: number, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onCellHoverExit?: (row: number, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onRowHover?: (row: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onRowHoverExit?: (row: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onRowSelection?: (selectedRows: number[] | string) => void;
            preScanRows?: boolean;
            /** @deprecated Instead, use property on Table */
            selectable?: boolean;
            showRowHover?: boolean;
            stripedRows?: boolean;
            style?: React.CSSProperties;
        }
        export class TableBody extends React.Component<TableBodyProps, {}> {
        }

        interface TableFooterProps extends React.Props<TableFooter> {
            // <tfoot/> is element that get the 'other' properties
            adjustForCheckbox?: boolean;
            className?: string;
            style?: React.CSSProperties;
        }
        export class TableFooter extends React.Component<TableFooterProps, {}> {
        }
    }

    namespace Tabs {
        interface TabsProps extends React.Props<Tabs> {
            className?: string;
            contentContainerClassName?: string;
            contentContainerStyle?: React.CSSProperties;
            initialSelectedIndex?: number;
            inkBarStyle?: React.CSSProperties;
            onChange?: (value: any, e: React.FormEvent, tab: Tab) => void;
            style?: React.CSSProperties;
            tabItemContainerStyle?: React.CSSProperties;
            tabTemplate?: React.ComponentClass<any>;
            value?: any;
        }
        export class Tabs extends React.Component<TabsProps, {}> {
        }

        interface TabProps extends SharedEnhancedButtonProps<Tab> {
            className?: string;
            icon?: React.ReactNode;
            label?: React.ReactNode;
            onActive?: (tab: Tab) => void;
            style?: React.CSSProperties;
            value?: any;
            disabled?: boolean;
        }
        export class Tab extends React.Component<
            TabProps, {}> {
        }
    }

    interface TextFieldProps extends React.Props<TextField> {
        className?: string;
        defaultValue?: string | number;
        disabled?: boolean;
        errorStyle?: React.CSSProperties;
        errorText?: React.ReactNode;
        floatingLabelFixed?: boolean;
        floatingLabelFocusStyle?: React.CSSProperties;
        floatingLabelStyle?: React.CSSProperties;
        floatingLabelText?: React.ReactNode;
        fullWidth?: boolean;
        hintStyle?: React.CSSProperties;
        hintText?: React.ReactNode;
        id?: string;
        inputStyle?: React.CSSProperties;
        multiLine?: boolean;
        name?: string;
        onBlur?: React.FocusEventHandler;
        onChange?: React.FormEventHandler;
        /** @deprecated Use onKeyDown and check for keycode instead. */
        onEnterKeyDown?: React.KeyboardEventHandler;
        onFocus?: React.FocusEventHandler;
        onKeyDown?: React.KeyboardEventHandler;
        rows?: number,
        rowsMax?: number,
        style?: React.CSSProperties;
        textareaStyle?: React.CSSProperties;
        type?: string;
        underlineDisabledStyle?: React.CSSProperties;
        underlineFocusStyle?: React.CSSProperties;
        underlineShow?: boolean;
        underlineStyle?: React.CSSProperties;
        value?: string | number;
    }
    export class TextField extends React.Component<TextFieldProps, {}> {
        blur(): void;
        focus(): void;
        select(): void;
        getValue(): string;
        getInputNode(): Element;
    }

    interface TimePickerProps extends React.Props<TimePicker> {
        // <TextField/> is element that get the 'other' properties
        autoOk?: boolean;
        cancelLabel?: React.ReactNode;
        defaultTime?: Date;
        dialogBodyStyle?: React.CSSProperties;
        dialogStyle?: React.CSSProperties;
        disabled?: boolean;
        format?: "ampm" | "24hr";
        okLabel?: React.ReactNode;
        onChange?: (e: any, time: Date) => void;
        onDismiss?: () => void;
        onFocus?: React.FocusEventHandler;
        onShow?: () => void;
        onTouchTap?: TouchTapEventHandler;
        pedantic?: boolean;
        style?: React.CSSProperties;
        textFieldStyle?: React.CSSProperties;
        value?: Date;

        // From <TextField />
        className?: string;
        defaultValue?: string | number;
        errorStyle?: React.CSSProperties;
        errorText?: React.ReactNode;
        floatingLabelFixed?: boolean;
        floatingLabelFocusStyle?: React.CSSProperties;
        floatingLabelStyle?: React.CSSProperties;
        floatingLabelText?: React.ReactNode;
        fullWidth?: boolean;
        hintStyle?: React.CSSProperties;
        hintText?: React.ReactNode;
        id?: string;
        inputStyle?: React.CSSProperties;
        multiLine?: boolean;
        name?: string;
        onBlur?: React.FocusEventHandler;
        onKeyDown?: React.KeyboardEventHandler;
        rows?: number,
        rowsMax?: number,
        textareaStyle?: React.CSSProperties;
        type?: string;
        underlineDisabledStyle?: React.CSSProperties;
        underlineFocusStyle?: React.CSSProperties;
        underlineShow?: boolean;
        underlineStyle?: React.CSSProperties;
    }
    export class TimePicker extends React.Component<TimePickerProps, {}> {
        /** @deprecated Use defaultTime instead. */
        getTime(): Date;
        /** @deprecated Use defaultTime instead. */
        setTime(time: Date): void;
        focus(): void;
        openDialog(): void;
    }

    namespace Toolbar {
        interface ToolbarProps extends React.Props<Toolbar> {
            className?: string;
            noGutter?: boolean;
            style?: React.CSSProperties;
        }
        export class Toolbar extends React.Component<ToolbarProps, {}> {
        }

        interface ToolbarGroupProps extends React.Props<ToolbarGroup> {
            className?: string;
            firstChild?: boolean;
            float?: "left" | "right";
            lastChild?: boolean;
            style?: React.CSSProperties;
        }
        export class ToolbarGroup extends React.Component<ToolbarGroupProps, {}> {
        }

        interface ToolbarSeparatorProps extends React.Props<ToolbarSeparator> {
            className?: string;
            style?: React.CSSProperties;
        }
        export class ToolbarSeparator extends React.Component<ToolbarSeparatorProps, {}> {
        }

        interface ToolbarTitleProps extends React.HTMLAttributes, React.Props<ToolbarTitle> {
            className?: string;
            style?: React.CSSProperties;
            text?: string;
        }
        export class ToolbarTitle extends React.Component<ToolbarTitleProps, {}> {
        }
    }

    export namespace Utils {
        export namespace ColorManipulator {
            interface MuiColorObject {
                type: string;
                values: number[];
            }
            function convertColorToString(color: any): string;
            function convertHexToRGB(color: string): string;
            function decomposeColor(color: string): MuiColorObject;
            function getContrastRatio(foreground: string, background: string): number;
            function getLuminance(color: string): number;
            function emphasize(color: string, coefficient?: number): string;
            function fade(color: string, value: number): string;
            function darken(color: string, coefficient: number): string;
            function lighten(color: string, coefficient: number): string;
        }

        interface Dom {
            addClass(el: Element, className: string): void;
            forceRedraw(el: HTMLElement): void;
            getStyleAttributeAsNumber(el: HTMLElement, attr: string): number;
            hasClass(el: Element, className: string): boolean;
            isDescendant(parent: Node, child: Node): boolean;
            offset(el: Element): { top: number, left: number };
            removeClass(el: Element, className: string): void;
            toggleClass(el: Element, className: string): void;
            withoutTransition(el: HTMLElement, callback: () => void): void;
        }
        export var Dom: Dom;

        interface Events {
            isKeyboard(e: Event): boolean;
            off(el: Element, type: string, callback: EventListener): void;
            on(el: Element, type: string, callback: EventListener): void;
            once(el: Element, type: string, callback: EventListener): void;
        }
        export var Events: Events;
    }
}    // __MaterialUI

declare module 'material-ui/AppBar' {
    export import AppBar = __MaterialUI.AppBar;
    export default AppBar;
}

declare module 'material-ui/AutoComplete' {
    export import AutoComplete = __MaterialUI.AutoComplete;
    export default AutoComplete;
}

declare module 'material-ui/Avatar' {
    export import Avatar = __MaterialUI.Avatar;
    export default Avatar;
}

declare module "material-ui/Badge" {
    export import Badge = __MaterialUI.Badge;
    export default Badge;
}

declare module 'material-ui/Card' {
    export import Card = __MaterialUI.Card.Card;
    export import CardActions = __MaterialUI.Card.CardActions;
    export import CardExpandable = __MaterialUI.Card.CardExpandable;
    export import CardHeader = __MaterialUI.Card.CardHeader;
    export import CardMedia = __MaterialUI.Card.CardMedia;
    export import CardText = __MaterialUI.Card.CardText;
    export import CardTitle = __MaterialUI.Card.CardTitle;
    export default Card;
}

declare module 'material-ui/Card/Card' {
    export import Card = __MaterialUI.Card.Card;
    export default Card;
}

declare module 'material-ui/Card/CardActions' {
    export import CardActions = __MaterialUI.Card.CardActions;
    export default CardActions;
}

declare module 'material-ui/Card/CardExpandable' {
    export import CardExpandable = __MaterialUI.Card.CardExpandable;
    export default CardExpandable;
}

declare module 'material-ui/Card/CardHeader' {
    export import CardHeader = __MaterialUI.Card.CardHeader;
    export default CardHeader;
}

declare module 'material-ui/Card/CardMedia' {
    export import CardMedia = __MaterialUI.Card.CardMedia;
    export default CardMedia;
}

declare module 'material-ui/Card/CardText' {
    export import CardText = __MaterialUI.Card.CardText;
    export default CardText;
}

declare module 'material-ui/Card/CardTitle' {
    export import CardTitle = __MaterialUI.Card.CardTitle;
    export default CardTitle;
}

declare module 'material-ui/Checkbox' {
    export import Checkbox = __MaterialUI.Switches.Checkbox;
    export default Checkbox;
}

declare module 'material-ui/Chip' {
    export import Chip = __MaterialUI.Chip;
    export default Chip;
}

declare module 'material-ui/CircularProgress' {
    export import CircularProgress = __MaterialUI.CircularProgress;
    export default CircularProgress;
}

declare module 'material-ui/DatePicker' {
    export import DatePicker = __MaterialUI.DatePicker.DatePicker;
    export default DatePicker;
}

declare module 'material-ui/Dialog' {
    export import Dialog = __MaterialUI.Dialog;
    export default Dialog;
}

declare module "material-ui/Divider" {
    export import Divider = __MaterialUI.Divider;
    export default Divider;
}

declare module 'material-ui/Drawer' {
    export import Drawer = __MaterialUI.Drawer;
    export default Drawer;
}

declare module 'material-ui/DropDownMenu' {
    export import DropDownMenu = __MaterialUI.Menus.DropDownMenu;
    export default DropDownMenu;
}

declare module 'material-ui/FlatButton' {
    export import FlatButton = __MaterialUI.FlatButton;
    export default FlatButton;
}

declare module 'material-ui/FloatingActionButton' {
    export import FloatingActionButton = __MaterialUI.FloatingActionButton;
    export default FloatingActionButton;
}

declare module 'material-ui/FontIcon' {
    export import FontIcon = __MaterialUI.FontIcon;
    export default FontIcon;
}

declare module "material-ui/GridList" {
    export import GridList = __MaterialUI.GridList.GridList;
    export import GridTile = __MaterialUI.GridList.GridTile;
    export default GridList;
}

declare module "material-ui/GridList/GridList" {
    export import GridList = __MaterialUI.GridList.GridList;
    export default GridList;
}

declare module "material-ui/GridList/GridTile" {
    export import GridTile = __MaterialUI.GridList.GridTile;
    export default GridTile;
}

declare module 'material-ui/IconButton' {
    export import IconButton = __MaterialUI.IconButton;
    export default IconButton;
}

declare module "material-ui/IconMenu" {
    export import IconMenu = __MaterialUI.Menus.IconMenu;
    export default IconMenu;
}

declare module 'material-ui/LinearProgress' {
    export import LinearProgress = __MaterialUI.LinearProgress;
    export default LinearProgress;
}

declare module 'material-ui/List' {
    export import List = __MaterialUI.List.List;
    export import ListItem = __MaterialUI.List.ListItem;
    export import MakeSelectable = __MaterialUI.List.MakeSelectable;
    export default List;
}

declare module 'material-ui/List/List' {
    export import List = __MaterialUI.List.List;
    export default List;
}

declare module 'material-ui/List/ListItem' {
    export import ListItem = __MaterialUI.List.ListItem;
    export default ListItem;
}

declare module 'material-ui/List/MakeSelectable' {
    export import MakeSelectable = __MaterialUI.List.MakeSelectable;
    export default MakeSelectable;
}

declare module "material-ui/Menu" {
    export import Menu = __MaterialUI.Menus.Menu;
    export import MenuItem = __MaterialUI.Menus.MenuItem;
    export default Menu;
}

declare module "material-ui/MenuItem" {
    export import MenuItem = __MaterialUI.Menus.MenuItem;
    export default MenuItem;
}

declare module 'material-ui/Paper' {
    export import Paper = __MaterialUI.Paper;
    export default Paper;
}

declare module 'material-ui/Popover' {
    export import Popover = __MaterialUI.Popover.Popover;
    export import PopoverAnimationVertical = __MaterialUI.Popover.PopoverAnimationVertical;
    export default Popover;
}

declare module 'material-ui/Popover/Popover' {
    export import Popover = __MaterialUI.Popover.Popover;
    export default Popover;
}

declare module 'material-ui/Popover/PopoverAnimationDefault' {
    export import PopoverAnimationDefault = __MaterialUI.Popover.PopoverAnimationDefault;
    export default PopoverAnimationDefault;
}

declare module 'material-ui/Popover/PopoverAnimationVertical' {
    export import PopoverAnimationVertical = __MaterialUI.Popover.PopoverAnimationVertical;
    export default PopoverAnimationVertical;
}

declare module 'material-ui/RadioButton' {
    export import RadioButton = __MaterialUI.Switches.RadioButton;
    export import RadioButtonGroup = __MaterialUI.Switches.RadioButtonGroup;
    export default RadioButton;
}

declare module 'material-ui/RadioButton/RadioButtonGroup' {
    export import RadioButtonGroup = __MaterialUI.Switches.RadioButtonGroup;
    export default RadioButtonGroup;
}

declare module 'material-ui/RaisedButton' {
    export import RaisedButton = __MaterialUI.RaisedButton;
    export default RaisedButton;
}

declare module 'material-ui/RefreshIndicator' {
    export import RefreshIndicator = __MaterialUI.RefreshIndicator;
    export default RefreshIndicator;
}

declare module 'material-ui/SelectField' {
    export import SelectField = __MaterialUI.SelectField;
    export default SelectField;
}

declare module 'material-ui/Slider' {
    export import Slider = __MaterialUI.Slider;
    export default Slider;
}

declare module 'material-ui/Snackbar' {
    export import Snackbar = __MaterialUI.Snackbar;
    export default Snackbar;
}

declare module 'material-ui/Stepper' {
    export import Step = __MaterialUI.Stepper.Step;
    export import StepButton = __MaterialUI.Stepper.StepButton;
    export import StepContent = __MaterialUI.Stepper.StepContent;
    export import StepLabel = __MaterialUI.Stepper.StepLabel;
    export import Stepper = __MaterialUI.Stepper.Stepper;
}

declare module 'material-ui/Subheader' {
    export import Subheader = __MaterialUI.Subheader;
    export default Subheader;
}

declare module 'material-ui/SvgIcon' {
    export import SvgIcon = __MaterialUI.SvgIcon;
    export default SvgIcon;
}

declare module 'material-ui/styles' {
    export import MuiThemeProvider = __MaterialUI.Styles.MuiThemeProvider;
    export import colors = __MaterialUI.Styles.Colors;
    export import darkBaseTheme = __MaterialUI.Styles.darkBaseTheme;
    export import DarkRawTheme = __MaterialUI.Styles.darkBaseTheme;
    export import lightBaseTheme = __MaterialUI.Styles.lightBaseTheme;
    export import LightRawTheme = __MaterialUI.Styles.lightBaseTheme;
    export import getMuiTheme = __MaterialUI.Styles.getMuiTheme;
    export import spacing = __MaterialUI.Styles.Spacing;
    export import themeManager = __MaterialUI.Styles.ThemeManager;
    export import transitions = __MaterialUI.Styles.Transitions;
    export import typography = __MaterialUI.Styles.Typography;
    export import zIndex = __MaterialUI.Styles.zIndex;

    export type MuiTheme = __MaterialUI.Styles.MuiTheme;
}

declare module 'material-ui/styles/getMuiTheme' {
    export import getMuiTheme = __MaterialUI.Styles.getMuiTheme;
    export default getMuiTheme;
}

declare module 'material-ui/styles/muiThemeable' {
    export import muiThemeable = __MaterialUI.Styles.muiThemeable;
    export default muiThemeable;
}

declare module 'material-ui/styles/MuiThemeProvider' {
    export import MuiThemeProvider = __MaterialUI.Styles.MuiThemeProvider;
    export default MuiThemeProvider;
}

declare module 'material-ui/styles/spacing' {
    type Spacing = __MaterialUI.Styles.Spacing;
    var Spacing: Spacing;
    export default Spacing;
}

declare module 'material-ui/styles/themeManager' {
    export import ThemeManager = __MaterialUI.Styles.ThemeManager;
    export default ThemeManager;
}

declare module 'material-ui/styles/transitions' {
    export import Transitions = __MaterialUI.Styles.Transitions;
    export default Transitions;
}

declare module 'material-ui/styles/typography' {
    export import Typography = __MaterialUI.Styles.Typography;
    export default Typography;
}

declare module 'material-ui/styles/baseThemes/lightBaseTheme' {
    export import lightBaseTheme = __MaterialUI.Styles.lightBaseTheme;
    export default lightBaseTheme;
}

//** @deprecated use lightBaseTheme instead **/
declare module 'material-ui/styles/raw-themes/light-raw-theme' {
    export import LightRawTheme = __MaterialUI.Styles.LightRawTheme;
    export default LightRawTheme;
}

declare module 'material-ui/styles/baseThemes/darkBaseTheme' {
    export import darkBaseTheme = __MaterialUI.Styles.darkBaseTheme;
    export default darkBaseTheme;
}

//** @deprecated use darkBaseTheme instead **/
declare module 'material-ui/styles/raw-themes/dark-raw-theme' {
    export import DarkRawTheme = __MaterialUI.Styles.DarkRawTheme;
    export default DarkRawTheme;
}

declare module 'material-ui/styles/themeDecorator' {
    export import themeDecorator = __MaterialUI.Styles.themeDecorator;
    export default themeDecorator;
}

declare module 'material-ui/styles/zIndex' {
    export import zIndex = __MaterialUI.Styles.zIndex;
    export default zIndex;
}

declare module "material-ui/styles/colors" {
  export const red50: string;
  export const red100: string;
  export const red200: string;
  export const red300: string;
  export const red400: string;
  export const red500: string;
  export const red600: string;
  export const red700: string;
  export const red800: string;
  export const red900: string;
  export const redA100: string;
  export const redA200: string;
  export const redA400: string;
  export const redA700: string;

  export const pink50: string;
  export const pink100: string;
  export const pink200: string;
  export const pink300: string;
  export const pink400: string;
  export const pink500: string;
  export const pink600: string;
  export const pink700: string;
  export const pink800: string;
  export const pink900: string;
  export const pinkA100: string;
  export const pinkA200: string;
  export const pinkA400: string;
  export const pinkA700: string;

  export const purple50: string;
  export const purple100: string;
  export const purple200: string;
  export const purple300: string;
  export const purple400: string;
  export const purple500: string;
  export const purple600: string;
  export const purple700: string;
  export const purple800: string;
  export const purple900: string;
  export const purpleA100: string;
  export const purpleA200: string;
  export const purpleA400: string;
  export const purpleA700: string;

  export const deepPurple50: string;
  export const deepPurple100: string;
  export const deepPurple200: string;
  export const deepPurple300: string;
  export const deepPurple400: string;
  export const deepPurple500: string;
  export const deepPurple600: string;
  export const deepPurple700: string;
  export const deepPurple800: string;
  export const deepPurple900: string;
  export const deepPurpleA100: string;
  export const deepPurpleA200: string;
  export const deepPurpleA400: string;
  export const deepPurpleA700: string;

  export const indigo50: string;
  export const indigo100: string;
  export const indigo200: string;
  export const indigo300: string;
  export const indigo400: string;
  export const indigo500: string;
  export const indigo600: string;
  export const indigo700: string;
  export const indigo800: string;
  export const indigo900: string;
  export const indigoA100: string;
  export const indigoA200: string;
  export const indigoA400: string;
  export const indigoA700: string;

  export const blue50: string;
  export const blue100: string;
  export const blue200: string;
  export const blue300: string;
  export const blue400: string;
  export const blue500: string;
  export const blue600: string;
  export const blue700: string;
  export const blue800: string;
  export const blue900: string;
  export const blueA100: string;
  export const blueA200: string;
  export const blueA400: string;
  export const blueA700: string;

  export const lightBlue50: string;
  export const lightBlue100: string;
  export const lightBlue200: string;
  export const lightBlue300: string;
  export const lightBlue400: string;
  export const lightBlue500: string;
  export const lightBlue600: string;
  export const lightBlue700: string;
  export const lightBlue800: string;
  export const lightBlue900: string;
  export const lightBlueA100: string;
  export const lightBlueA200: string;
  export const lightBlueA400: string;
  export const lightBlueA700: string;

  export const cyan50: string;
  export const cyan100: string;
  export const cyan200: string;
  export const cyan300: string;
  export const cyan400: string;
  export const cyan500: string;
  export const cyan600: string;
  export const cyan700: string;
  export const cyan800: string;
  export const cyan900: string;
  export const cyanA100: string;
  export const cyanA200: string;
  export const cyanA400: string;
  export const cyanA700: string;

  export const teal50: string;
  export const teal100: string;
  export const teal200: string;
  export const teal300: string;
  export const teal400: string;
  export const teal500: string;
  export const teal600: string;
  export const teal700: string;
  export const teal800: string;
  export const teal900: string;
  export const tealA100: string;
  export const tealA200: string;
  export const tealA400: string;
  export const tealA700: string;

  export const green50: string;
  export const green100: string;
  export const green200: string;
  export const green300: string;
  export const green400: string;
  export const green500: string;
  export const green600: string;
  export const green700: string;
  export const green800: string;
  export const green900: string;
  export const greenA100: string;
  export const greenA200: string;
  export const greenA400: string;
  export const greenA700: string;

  export const lightGreen50: string;
  export const lightGreen100: string;
  export const lightGreen200: string;
  export const lightGreen300: string;
  export const lightGreen400: string;
  export const lightGreen500: string;
  export const lightGreen600: string;
  export const lightGreen700: string;
  export const lightGreen800: string;
  export const lightGreen900: string;
  export const lightGreenA100: string;
  export const lightGreenA200: string;
  export const lightGreenA400: string;
  export const lightGreenA700: string;

  export const lime50: string;
  export const lime100: string;
  export const lime200: string;
  export const lime300: string;
  export const lime400: string;
  export const lime500: string;
  export const lime600: string;
  export const lime700: string;
  export const lime800: string;
  export const lime900: string;
  export const limeA100: string;
  export const limeA200: string;
  export const limeA400: string;
  export const limeA700: string;

  export const yellow50: string;
  export const yellow100: string;
  export const yellow200: string;
  export const yellow300: string;
  export const yellow400: string;
  export const yellow500: string;
  export const yellow600: string;
  export const yellow700: string;
  export const yellow800: string;
  export const yellow900: string;
  export const yellowA100: string;
  export const yellowA200: string;
  export const yellowA400: string;
  export const yellowA700: string;

  export const amber50: string;
  export const amber100: string;
  export const amber200: string;
  export const amber300: string;
  export const amber400: string;
  export const amber500: string;
  export const amber600: string;
  export const amber700: string;
  export const amber800: string;
  export const amber900: string;
  export const amberA100: string;
  export const amberA200: string;
  export const amberA400: string;
  export const amberA700: string;

  export const orange50: string;
  export const orange100: string;
  export const orange200: string;
  export const orange300: string;
  export const orange400: string;
  export const orange500: string;
  export const orange600: string;
  export const orange700: string;
  export const orange800: string;
  export const orange900: string;
  export const orangeA100: string;
  export const orangeA200: string;
  export const orangeA400: string;
  export const orangeA700: string;

  export const deepOrange50: string;
  export const deepOrange100: string;
  export const deepOrange200: string;
  export const deepOrange300: string;
  export const deepOrange400: string;
  export const deepOrange500: string;
  export const deepOrange600: string;
  export const deepOrange700: string;
  export const deepOrange800: string;
  export const deepOrange900: string;
  export const deepOrangeA100: string;
  export const deepOrangeA200: string;
  export const deepOrangeA400: string;
  export const deepOrangeA700: string;

  export const brown50: string;
  export const brown100: string;
  export const brown200: string;
  export const brown300: string;
  export const brown400: string;
  export const brown500: string;
  export const brown600: string;
  export const brown700: string;
  export const brown800: string;
  export const brown900: string;

  export const blueGrey50: string;
  export const blueGrey100: string;
  export const blueGrey200: string;
  export const blueGrey300: string;
  export const blueGrey400: string;
  export const blueGrey500: string;
  export const blueGrey600: string;
  export const blueGrey700: string;
  export const blueGrey800: string;
  export const blueGrey900: string;

  export const grey50: string;
  export const grey100: string;
  export const grey200: string;
  export const grey300: string;
  export const grey400: string;
  export const grey500: string;
  export const grey600: string;
  export const grey700: string;
  export const grey800: string;
  export const grey900: string;

  export const black: string;
  export const white: string;

  export const transparent: string;
  export const fullBlack: string;
  export const darkBlack: string;
  export const lightBlack: string;
  export const minBlack: string;
  export const faintBlack: string;
  export const fullWhite: string;
  export const darkWhite: string;
  export const lightWhite: string;
}

declare module 'material-ui/Table' {
    export import Table = __MaterialUI.Table.Table;
    export import TableBody = __MaterialUI.Table.TableBody;
    export import TableFooter = __MaterialUI.Table.TableFooter;
    export import TableHeader = __MaterialUI.Table.TableHeader;
    export import TableHeaderColumn = __MaterialUI.Table.TableHeaderColumn;
    export import TableRow = __MaterialUI.Table.TableRow;
    export import TableRowColumn = __MaterialUI.Table.TableRowColumn;
    export default Table;
}

declare module 'material-ui/Table/Table' {
    export import Table = __MaterialUI.Table.Table;
    export default Table;
}

declare module 'material-ui/Table/TableBody' {
    export import TableBody = __MaterialUI.Table.TableBody;
    export default TableBody;
}

declare module 'material-ui/Table/TableFooter' {
    export import TableFooter = __MaterialUI.Table.TableFooter;
    export default TableFooter;
}

declare module 'material-ui/Table/TableHeader' {
    export import TableHeader = __MaterialUI.Table.TableHeader;
    export default TableHeader;
}

declare module 'material-ui/Table/TableHeaderColumn' {
    export import TableHeaderColumn = __MaterialUI.Table.TableHeaderColumn;
    export default TableHeaderColumn;
}

declare module 'material-ui/Table/TableRow' {
    export import TableRow = __MaterialUI.Table.TableRow;
    export default TableRow;
}

declare module 'material-ui/Table/TableRowColumn' {
    export import TableRowColumn = __MaterialUI.Table.TableRowColumn;
    export default TableRowColumn;
}

declare module 'material-ui/Tabs' {
    export import Tab = __MaterialUI.Tabs.Tab;
    export import Tabs = __MaterialUI.Tabs.Tabs;
    export default Tabs;
}

declare module 'material-ui/Tabs/Tab' {
    export import Tab = __MaterialUI.Tabs.Tab;
    export default Tab;
}

declare module 'material-ui/Tabs/Tabs' {
    export import Tabs = __MaterialUI.Tabs.Tabs;
    export default Tabs;
}

declare module 'material-ui/TextField' {
    export import TextField = __MaterialUI.TextField;
    export default TextField;
}

declare module 'material-ui/TimePicker' {
    export import TimePicker = __MaterialUI.TimePicker;
    export default TimePicker;
}

declare module 'material-ui/Toggle' {
    export import Toggle = __MaterialUI.Switches.Toggle;
    export default Toggle;
}

declare module 'material-ui/Toolbar' {
    export import Toolbar = __MaterialUI.Toolbar.Toolbar;
    export import ToolbarGroup = __MaterialUI.Toolbar.ToolbarGroup;
    export import ToolbarSeparator = __MaterialUI.Toolbar.ToolbarSeparator;
    export import ToolbarTitle = __MaterialUI.Toolbar.ToolbarTitle;
    export default Toolbar;
}

declare module 'material-ui/Toolbar/Toolbar' {
    export import Toolbar = __MaterialUI.Toolbar.Toolbar;
    export default Toolbar;
}

declare module 'material-ui/Toolbar/ToolbarGroup' {
    export import ToolbarGroup = __MaterialUI.Toolbar.ToolbarGroup;
    export default ToolbarGroup;
}

declare module 'material-ui/Toolbar/ToolbarSeparator' {
    export import ToolbarSeparator = __MaterialUI.Toolbar.ToolbarSeparator;
    export default ToolbarSeparator;
}

declare module 'material-ui/Toolbar/ToolbarTitle' {
    export import ToolbarTitle = __MaterialUI.Toolbar.ToolbarTitle;
    export default ToolbarTitle;
}

declare module 'material-ui/utils/colorManipulator' {
    export import convertColorToString = __MaterialUI.Utils.ColorManipulator.convertColorToString;
    export import convertHexToRGB = __MaterialUI.Utils.ColorManipulator.convertHexToRGB;
    export import decomposeColor = __MaterialUI.Utils.ColorManipulator.decomposeColor;
    export import getContrastRatio = __MaterialUI.Utils.ColorManipulator.getContrastRatio;
    export import getLuminance = __MaterialUI.Utils.ColorManipulator.getLuminance;
    export import emphasize = __MaterialUI.Utils.ColorManipulator.emphasize;
    export import fade = __MaterialUI.Utils.ColorManipulator.fade;
    export import darken = __MaterialUI.Utils.ColorManipulator.darken;
    export import lighten = __MaterialUI.Utils.ColorManipulator.lighten;
}
declare module 'material-ui/utils/dom' {
    export import Dom = __MaterialUI.Utils.Dom;
    export default Dom;
}
declare module 'material-ui/utils/events' {
    export import Events = __MaterialUI.Utils.Events;
    export default Events;
}
declare module 'material-ui/utils/withWidth' {
    export const SMALL: number;
    export const MEDIUM: number;
    export const LARGE: number;

    interface Options {
        largeWidth?: number;
        mediumWidth?: number;
        resizeInterval?: number;
    }

    type ReactType<P> = __React.ComponentClass<P> | __React.StatelessComponent<P>

    export interface ComponentDecorator<TOriginalProps, TOwnProps> {
      (component: ReactType<TOriginalProps>): ReactType<TOwnProps>;
    }

    export interface WithWidthProps {
      width: number;
    }

    export default function withWidth<TProps>
      (options?: Options): ComponentDecorator<TProps & WithWidthProps, TProps>;
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



declare module 'material-ui/internal/AppCanvas' {
  interface AppCanvasProps extends __React.Props<AppCanvas> { }
  class AppCanvas extends __React.Component<AppCanvasProps, {}> { }
  export default AppCanvas;
}
declare module 'material-ui/internal/AutoLockScrolling' {
  interface AutoLockScrollingProps extends __React.Props<AutoLockScrolling> {
    lock: boolean;
  }
  class AutoLockScrolling extends __React.Component<AutoLockScrollingProps, {}> { }
  export default AutoLockScrolling;
}
declare module 'material-ui/internal/BeforeAfterWrapper' {
  interface BeforeAfterWrapperProps extends __React.Props<BeforeAfterWrapper> {
    afterElementType?: string,
    afterStyle?: __React.CSSProperties,
    beforeElementType?: string,
    beforeStyle?: __React.CSSProperties,
    elementType?: string,
    style?: __React.CSSProperties,
  }
  class BeforeAfterWrapper extends __React.Component<BeforeAfterWrapperProps, {}> { }
  export default BeforeAfterWrapper;
}
declare module 'material-ui/internal/CircleRipple' {
  interface CircleRippleProps extends __React.Props<CircleRipple> {
    aborted?: boolean;
    color?: string;
    opacity?: number;
    style?: __React.CSSProperties;
  }
  class CircleRipple extends __React.Component<CircleRippleProps, {}> { }
  export default CircleRipple;
}
declare module 'material-ui/internal/ClearFix' {
  interface ClearFixProps extends __React.Props<ClearFix> {
    style?: __React.CSSProperties;
  }
  class ClearFix extends __React.Component<ClearFixProps, {}> { }
  export default ClearFix;
}
declare module 'material-ui/internal/ClickAwayListener' {
  interface ClickAwayListenerProps extends __React.Props<ClickAwayListener> {
    onClickAway?: any,
  }
  class ClickAwayListener extends __React.Component<ClickAwayListenerProps, {}> { }
  export default ClickAwayListener;
}
declare module 'material-ui/internal/EnhancedButton' {
  interface EnhancedButtonProps extends __MaterialUI.SharedEnhancedButtonProps<EnhancedButton> {}
  class EnhancedButton extends __React.Component<EnhancedButtonProps, {}> {}
  export default EnhancedButton;
}
declare module 'material-ui/internal/EnhancedSwitch' {
  interface EnhancedSwitchProps extends __MaterialUI.Switches.CommonEnhancedSwitchProps<EnhancedSwitch> {}
  class EnhancedSwitch extends __React.Component<EnhancedSwitchProps, {}> {}
  export default EnhancedSwitch;
}
declare module 'material-ui/internal/ExpandTransition' {
  interface ExpandTransitionProps extends __React.Props<ExpandTransition> {
    enterDelay?: number;
    loading?: boolean;
    open?: boolean;
    style?: __React.CSSProperties;
    transitionDelay?: number;
    transitionDuration?: number;
  }
  class ExpandTransition extends __React.Component<ExpandTransitionProps, {}> { }
  export default ExpandTransition;
}
declare module 'material-ui/internal/ExpandTransitionChild' {
  interface ExpandTransitionChildProps extends __React.Props<ExpandTransitionChild> {
    enterDelay?: number;
    style?: __React.CSSProperties;
    transitionDelay?: number;
    transitionDuration?: number;
  }
  class ExpandTransitionChild extends __React.Component<ExpandTransitionChildProps, {}> { }
  export default ExpandTransitionChild;
}
declare module 'material-ui/internal/FocusRipple' {
  interface FocusRippleProps extends __React.Props<FocusRipple> {
    color?: string,
    innerStyle?: __React.CSSProperties,
    opacity?: number,
    show?: boolean,
    style?: __React.CSSProperties
  }
  class FocusRipple extends __React.Component<FocusRippleProps, {}> { }
  export default FocusRipple;
}
declare module 'material-ui/internal/Overlay' {
  interface OverlayProps extends __React.Props<Overlay> {
    autoLockScrolling?: boolean;
    show: boolean;
    style?: __React.CSSProperties;
    transitionEnabled?: boolean;
  }
  class Overlay extends __React.Component<OverlayProps, {}> { }
  export default Overlay;
}
declare module 'material-ui/internal/RenderToLayer' {
  interface RenderToLayerProps extends __React.Props<RenderToLayer> {
    componentClickAway?: Function;
    open: boolean;
    render: Function;
    useLayerForClickAway?: boolean;
  }
  class RenderToLayer extends __React.Component<RenderToLayerProps, {}> { }
  export default RenderToLayer;
}
declare module 'material-ui/internal/ScaleIn' {
  interface ScaleInProps extends __React.Props<ScaleIn> {
    childStyle?: __React.CSSProperties;
    enterDelay?: number;
    maxScale?: number;
    minScale?: number;
  }
  class ScaleIn extends __React.Component<ScaleInProps, {}> { }
  export default ScaleIn;
}
declare module 'material-ui/internal/ScaleInChild' {
  interface ScaleInChildProps extends __React.Props<ScaleInChild> {
    enterDelay?: number;
    maxScale?: number;
    minScale?: number;
    style?: __React.CSSProperties;
  }
  class ScaleInChild extends __React.Component<ScaleInChildProps, {}> { }
  export default ScaleInChild;
}
declare module 'material-ui/internal/SlideIn' {
  interface SlideInProps extends __React.Props<SlideIn> {
    childStyle?: __React.CSSProperties;
    direction?: __MaterialUI.propTypes.direction;
    enterDelay?: number;
    style?: __React.CSSProperties;
  }
  class SlideIn extends __React.Component<SlideInProps, {}> { }
  export default SlideIn;
}
declare module 'material-ui/internal/SlideInChild' {
  interface SlideInChildProps extends __React.Props<SlideInChild> {
    direction?: string,
    enterDelay?: number;
    getLeaveDirection: Function;
    style?: __React.CSSProperties;
  }
  class SlideInChild extends __React.Component<SlideInChildProps, {}> { }
  export default SlideInChild;
}
declare module 'material-ui/internal/Tooltip' {
  interface TooltipProps extends __React.Props<Tooltip> {
    className?: string;
    horizontalPosition?: __MaterialUI.propTypes.horizontal;
    label: any;
    show?: boolean;
    style?: __React.CSSProperties;
    touch?: boolean;
    verticalPosition?: __MaterialUI.propTypes.vertical;
  }
  class Tooltip extends __React.Component<TooltipProps, {}> { }
  export default Tooltip;
}
declare module 'material-ui/internal/TouchRipple' {
  interface TouchRippleProps extends __React.Props<TouchRipple> {
    abortOnScroll?: boolean,
    centerRipple?: boolean;
    color?: string;
    opacity?: number;
    style?: __React.CSSProperties
  }
  class TouchRipple extends __React.Component<TouchRippleProps, {}> { }
  export default TouchRipple;
}
