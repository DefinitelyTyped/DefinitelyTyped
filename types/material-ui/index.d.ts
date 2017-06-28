// Type definitions for material-ui v0.17.51
// Project: https://github.com/callemall/material-ui
// Definitions by: Nathan Brown <https://github.com/ngbrown>
//                 Igor Beagorudsky <https://github.com/theigor>
//                 Ali Taheri Moghaddar <https://github.com/alitaheri>
//                 Oliver Herrmann <https://github.com/herrmanno>
//                 Daniel Roth <https://github.com/DaIgeb>
//                 Aurelién Allienne <https://github.com/allienna>
//                 Matthias Schlesinger <https://github.com/schlesingermatthias>
//                 Jonathon Kelly <https://github.com/InsidersByte>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="react" />
/// <reference types="react-addons-linked-state-mixin" />

declare module "material-ui" {
    export import AppBar = __MaterialUI.AppBar;
    export import AutoComplete = __MaterialUI.AutoComplete;
    export import Avatar = __MaterialUI.Avatar;
    export import Badge = __MaterialUI.Badge;
    export import BottomNavigation = __MaterialUI.BottomNavigation.BottomNavigation;
    export import BottomNavigationItem = __MaterialUI.BottomNavigation.BottomNavigationItem;
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
    export import makeSelectable = __MaterialUI.List.makeSelectable;
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
    // ReactLink is from "react/addons"
    interface ReactLink<T> {
        value: T;
        requestChange(newValue: T): void;
    }

    // What's common between React.TouchEvent and React.MouseEvent
    interface TouchTapEvent extends React.SyntheticEvent<{}> {
        altKey: boolean;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        shiftKey: boolean;
    }

    // What's common between React.TouchEventHandler and React.MouseEventHandler
    interface TouchTapEventHandler extends React.EventHandler<TouchTapEvent> {
    }

    interface ThemeWrapperProps {
        theme: Styles.MuiTheme;
    }
    export class ThemeWrapper extends React.Component<ThemeWrapperProps> {
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
            secondaryTextColor?: string;
            alternateTextColor?: string;
            canvasColor?: string;
            borderColor?: string;
            disabledColor?: string;
            pickerHeaderColor?: string;
            clockCircleColor?: string;
            shadowColor?: string;
        }
        export var ThemePalette: ThemePalette;
        interface MuiTheme {
            spacing?: Spacing;
            fontFamily?: string;
            palette?: ThemePalette;
            isRtl?: boolean;
            userAgent?: string | boolean;
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
                textTransform?: string;
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
            svgIcon?: {
                color?: string,
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

        export function muiThemeable(): <
            TComponent extends React.ComponentClass<P> | React.StatelessComponent<P>,
            P extends {muiTheme?: MuiTheme}
        >(component: TComponent) => TComponent;

        interface MuiThemeProviderProps {
            muiTheme?: Styles.MuiTheme;
        }
        export class MuiThemeProvider extends React.Component<MuiThemeProviderProps> {
        }

        export function getMuiTheme(...muiTheme: MuiTheme[]): MuiTheme;

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
    }

    interface AppBarProps {
        className?: string;
        iconClassNameLeft?: string;
        iconClassNameRight?: string;
        iconElementLeft?: React.ReactElement<any>;
        iconElementRight?: React.ReactElement<any>;
        iconStyleRight?: React.CSSProperties;
        iconStyleLeft?: React.CSSProperties;
        onLeftIconButtonTouchTap?: TouchTapEventHandler;
        onRightIconButtonTouchTap?: TouchTapEventHandler;
        onTitleTouchTap?: TouchTapEventHandler;
        showMenuIconButton?: boolean;
        style?: React.CSSProperties;
        title?: React.ReactNode;
        titleStyle?: React.CSSProperties;
        zDepth?: number;
    }
    export class AppBar extends React.Component<AppBarProps> {
    }

    interface AppCanvasProps {
    }
    export class AppCanvas extends React.Component<AppCanvasProps> {
    }

    namespace propTypes {
        type horizontal = 'left' | 'middle' | 'right';
        type tooltipHorizontal = 'left' | 'center' | 'right';
        type vertical = 'top' | 'center' | 'bottom';
        type direction = 'left' | 'right' | 'up' | 'down';

        interface origin {
            horizontal: horizontal;
            vertical: vertical;
        }

        interface utils {
            getWeekArray: (date: Date, firstDayOfWeek: number) => (Date | null)[][];
            getYear: (date: Date) => number;
            setYear: (date: Date, year: number) => Date;
            addDays: (date: Date, days: number) => Date;
            addMonths: (date: Date, months: number) => Date;
            addYears: (date: Date, years: number) => Date;
            getFirstDayOfMonth: (date: Date) => Date;
            monthDiff: (date1: Date, date2: Date) => number;
        }

        type corners = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
        type cornersAndCenter = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';
    }

    interface AutoCompleteProps<DataItem> extends TextFieldProps {
        anchorOrigin?: propTypes.origin;
        animated?: boolean;
        animation?: React.ComponentClass<Popover.PopoverAnimationProps>;
        dataSource: DataItem[];
        dataSourceConfig?: { text: string; value: string; };
        disableFocusRipple?: boolean;
        errorStyle?: React.CSSProperties;
        errorText?: React.ReactNode;
        filter?: (searchText: string, key: string, item: DataItem) => boolean;
        floatingLabelText?: React.ReactNode;
        fullWidth?: boolean;
        hintText?: React.ReactNode;
        listStyle?: React.CSSProperties;
        maxSearchResults?: number;
        menuCloseDelay?: number;
        menuProps?: any;
        menuStyle?: React.CSSProperties;
        onBlur?: React.FocusEventHandler<{}>;
        onFocus?: React.FocusEventHandler<{}>;
        onKeyDown?: React.KeyboardEventHandler<{}>;
        onNewRequest?: (chosenRequest: DataItem, index: number) => void;
        onUpdateInput?: (searchText: string, dataSource: DataItem[]) => void;
        open?: boolean;
        openOnFocus?: boolean;
        popoverProps?: Popover.PopoverProps;
        searchText?: string;
        style?: React.CSSProperties;
        targetOrigin?: propTypes.origin;
        textFieldStyle?: React.CSSProperties;
    }
    export class AutoComplete extends React.Component<AutoCompleteProps<any>> {
        static noFilter: () => boolean;
        static defaultFilter: (searchText: string, key: string) => boolean;
        static caseSensitiveFilter: (searchText: string, key: string) => boolean;
        static caseInsensitiveFilter: (searchText: string, key: string) => boolean;

        static levenshteinDistanceFilter(distanceLessThan: number): (searchText: string, key: string) => boolean;

        static fuzzyFilter: (searchText: string, key: string) => boolean;
        static Item: Menus.MenuItem;
        static Divider: Divider;
    }

    interface AvatarProps {
        backgroundColor?: string;
        className?: string;
        color?: string;
        icon?: React.ReactElement<any>;
        size?: number;
        src?: string;
        style?: React.CSSProperties;
    }
    export class Avatar extends React.Component<AvatarProps> {
    }

    interface BadgeProps {
        badgeContent: React.ReactNode;
        badgeStyle?: React.CSSProperties;
        className?: string;
        primary?: boolean;
        secondary?: boolean;
        style?: React.CSSProperties;
    }
    export class Badge extends React.Component<BadgeProps> {
    }

    interface BeforeAfterWrapperProps {
        afterElementType?: string;
        afterStyle?: React.CSSProperties;
        beforeElementType?: string;
        beforeStyle?: React.CSSProperties;
        elementType?: string;
        style?: React.CSSProperties;
    }
    export class BeforeAfterWrapper extends React.Component<BeforeAfterWrapperProps> {
    }

    // non generally overridden elements of EnhancedButton
    interface SharedEnhancedButtonProps<T> {
        centerRipple?: boolean;
        disableFocusRipple?: boolean;
        disableKeyboardFocus?: boolean;
        disableTouchRipple?: boolean;
        focusRippleColor?: string;
        focusRippleOpacity?: number;
        href?: string;
        keyboardFocused?: boolean;
        onBlur?: React.FocusEventHandler<{}>;
        onFocus?: React.FocusEventHandler<{}>;
        onKeyboardFocus?: (e: React.FocusEvent<{}>, isKeyboardFocused: boolean) => void;
        onKeyDown?: React.KeyboardEventHandler<{}>;
        onKeyUp?: React.KeyboardEventHandler<{}>;
        onTouchTap?: TouchTapEventHandler;
        onClick?: React.MouseEventHandler<{}>;
        style?: React.CSSProperties;
        tabIndex?: number;
        target?: string;
        touchRippleColor?: string;
        touchRippleOpacity?: number;
        type?: string;
        containerElement?: React.ReactNode | string;
    }

    interface EnhancedButtonProps extends React.HTMLAttributes<{}>, SharedEnhancedButtonProps<EnhancedButton> {
        // container element, <button/>, or <span/>(if disabled link) is the element that get the 'other' properties
        containerElement?: React.ReactNode | string;
        disabled?: boolean;
    }
    export class EnhancedButton extends React.Component<EnhancedButtonProps> {
    }

    interface FlatButtonProps extends React.DOMAttributes<{}>, SharedEnhancedButtonProps<FlatButton> {
        // <EnhancedButton/> is the element that get the 'other' properties
        backgroundColor?: string;
        className?: string;
        disabled?: boolean;
        fullWidth?: boolean;
        hoverColor?: string;
        icon?: React.ReactNode;
        label?: React.ReactNode;
        labelPosition?: "before" | "after";
        labelStyle?: React.CSSProperties;
        linkButton?: boolean;
        onKeyboardFocus?: (e: React.FocusEvent<{}>, isKeyboardFocused: boolean) => void;
        onMouseEnter?: React.MouseEventHandler<{}>;
        onMouseLeave?: React.MouseEventHandler<{}>;
        onTouchStart?: React.TouchEventHandler<{}>;
        primary?: boolean;
        rippleColor?: string;
        secondary?: boolean;
        style?: React.CSSProperties;
    }
    export class FlatButton extends React.Component<FlatButtonProps> {
    }

    interface RaisedButtonProps extends SharedEnhancedButtonProps<RaisedButton> {
        // <EnhancedButton/> is the element that get the 'other' properties
        backgroundColor?: string;
        buttonStyle?: React.CSSProperties;
        className?: string;
        disabled?: boolean;
        disabledBackgroundColor?: string;
        disabledLabelColor?: string;
        fullWidth?: boolean;
        icon?: React.ReactNode;
        label?: React.ReactNode;
        labelColor?: string;
        labelPosition?: "before" | "after";
        labelStyle?: React.CSSProperties;
        linkButton?: boolean;
        onMouseDown?: React.MouseEventHandler<{}>;
        onMouseEnter?: React.MouseEventHandler<{}>;
        onMouseLeave?: React.MouseEventHandler<{}>;
        onMouseUp?: React.MouseEventHandler<{}>;
        onTouchEnd?: React.TouchEventHandler<{}>;
        onTouchStart?: React.TouchEventHandler<{}>;
        overlayStyle?: React.CSSProperties;
        primary?: boolean;
        rippleStyle?: React.CSSProperties;
        secondary?: boolean;
        style?: React.CSSProperties;
    }
    export class RaisedButton extends React.Component<RaisedButtonProps> {
    }

    interface FloatingActionButtonProps extends React.HTMLAttributes<{}>, SharedEnhancedButtonProps<FloatingActionButton> {
        // <EnhancedButton/> is the element that get the 'other' properties
        backgroundColor?: string;
        className?: string;
        disabled?: boolean;
        disabledColor?: string;
        iconClassName?: string;
        iconStyle?: React.CSSProperties;
        mini?: boolean;
        onMouseDown?: React.MouseEventHandler<{}>;
        onMouseEnter?: React.MouseEventHandler<{}>;
        onMouseLeave?: React.MouseEventHandler<{}>;
        onMouseUp?: React.MouseEventHandler<{}>;
        onTouchEnd?: React.TouchEventHandler<{}>;
        onTouchStart?: React.TouchEventHandler<{}>;
        secondary?: boolean;
        style?: React.CSSProperties;
        zDepth?: number;
    }
    export class FloatingActionButton extends React.Component<FloatingActionButtonProps> {
    }

    interface IconButtonProps extends React.HTMLAttributes<{}>, SharedEnhancedButtonProps<IconButton> {
        // <EnhancedButton/> is the element that get the 'other' properties
        className?: string;
        disableTouchRipple?: boolean;
        disabled?: boolean;
        hoveredStyle?: React.CSSProperties;
        iconClassName?: string;
        iconStyle?: React.CSSProperties;
        onBlur?: React.FocusEventHandler<{}>;
        onFocus?: React.FocusEventHandler<{}>;
        onKeyboardFocus?: (e: React.FocusEvent<{}>, isKeyboardFocused: boolean) => void;
        onMouseEnter?: React.MouseEventHandler<{}>;
        onMouseLeave?: React.MouseEventHandler<{}>;
        onMouseOut?: React.MouseEventHandler<{}>;
        style?: React.CSSProperties;
        tooltip?: React.ReactNode | string;
        tooltipPosition?: propTypes.cornersAndCenter;
        tooltipStyles?: React.CSSProperties;
        touch?: boolean;
    }
    export class IconButton extends React.Component<IconButtonProps> {
    }

    namespace BottomNavigation {
        interface BottomNavigationProps {
            className?: string;
            selectedIndex?: number;
            style?: React.CSSProperties;
        }

        export class BottomNavigation extends React.Component<BottomNavigationProps> { }

        interface BottomNavigationItemProps extends SharedEnhancedButtonProps<BottomNavigationItem> {
            className?: string;
            icon?: React.ReactNode;
            label?: React.ReactNode;
        }

        export class BottomNavigationItem extends React.Component<BottomNavigationItemProps> { }
    }

    namespace Card {

        interface CardProps {
            className?: string;
            actAsExpander?: boolean;
            containerStyle?: React.CSSProperties;
            expandable?: boolean;
            expanded?: boolean;
            initiallyExpanded?: boolean;
            onExpandChange?: (isExpanded: boolean) => void;
            showExpandableButton?: boolean;
            style?: React.CSSProperties;
        }
        export class Card extends React.Component<CardProps> {
        }

        interface CardActionsProps {
            actAsExpander?: boolean;
            expandable?: boolean;
            showExpandableButton?: boolean;
            style?: React.CSSProperties;
            className?: string;
        }
        export class CardActions extends React.Component<CardActionsProps> {
        }

        interface CardExpandableProps {
            expanded?: boolean;
            onExpanding?: (isExpanded: boolean) => void;
            style?: React.CSSProperties;
        }
        export class CardExpandable extends React.Component<CardExpandableProps> {
        }

        interface CardHeaderProps {
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
            className?: string;
            openIcon?: React.ReactNode;
            closeIcon?: React.ReactNode;
            iconStyle?: React.CSSProperties;
        }
        export class CardHeader extends React.Component<CardHeaderProps> {
        }

        interface CardMediaProps {
            actAsExpander?: boolean;
            expandable?: boolean;
            mediaStyle?: React.CSSProperties;
            overlay?: React.ReactNode;
            overlayContainerStyle?: React.CSSProperties;
            overlayContentStyle?: React.CSSProperties;
            overlayStyle?: React.CSSProperties;
            style?: React.CSSProperties;
        }
        export class CardMedia extends React.Component<CardMediaProps> {
        }

        interface CardTextProps {
            actAsExpander?: boolean;
            color?: string;
            expandable?: boolean;
            style?: React.CSSProperties;
            className?: string;
        }
        export class CardText extends React.Component<CardTextProps> {
        }

        interface CardTitleProps {
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
        export class CardTitle extends React.Component<CardTitleProps> {
        }
    }

    interface ChipProps {
        backgroundColor?: string;
        className?: string;
        labelColor?: string;
        labelStyle?: React.CSSProperties;
        onRequestDelete?: React.TouchEventHandler<Chip>;
        onTouchTap?: React.TouchEventHandler<Chip>;
        style?: React.CSSProperties;
    }
    export class Chip extends React.Component<ChipProps> {
    }

    namespace DatePicker {
        interface DatePickerProps {
            // <TextField/> is the element that get the 'other' properties
            DateTimeFormat?: typeof Intl.DateTimeFormat;
            autoOk?: boolean;
            cancelLabel?: React.ReactNode;
            container?: "dialog" | "inline";
            defaultDate?: Date;
            dialogContainerStyle?: React.CSSProperties;
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
            onFocus?: React.FocusEventHandler<{}>;
            onShow?: () => void;
            onTouchTap?: React.TouchEventHandler<{}>;
            shouldDisableDate?: (day: Date) => boolean;
            style?: React.CSSProperties;
            textFieldStyle?: React.CSSProperties;
            value?: Date;

            // From <TextField />
            className?: string;
            defaultValue?: string;
            errorStyle?: React.CSSProperties;
            errorText?: React.ReactNode;
            floatingLabelStyle?: React.CSSProperties;
            floatingLabelText?: React.ReactNode;
            fullWidth?: boolean;
            hideCalendarDate?: boolean;
            hintStyle?: React.CSSProperties;
            hintText?: React.ReactNode;
            id?: string;
            inputStyle?: React.CSSProperties;
            onBlur?: React.FocusEventHandler<{}>;
            onKeyDown?: React.KeyboardEventHandler<{}>;
            rows?: number,
            rowsMax?: number,
            name?: string;
            type?: string;
            underlineDisabledStyle?: React.CSSProperties;
            underlineFocusStyle?: React.CSSProperties;
            underlineShow?: boolean;
            underlineStyle?: React.CSSProperties;
            utils?: propTypes.utils;
        }
        export class DatePicker extends React.Component<DatePickerProps> {
            focus(): void;
            openDialog(): void;
        }

        interface DatePickerDialogProps {
            // <Container/> is the element that get the 'other' properties
            DateTimeFormat?: typeof Intl.DateTimeFormat;
            animation?: React.ComponentClass<Popover.PopoverAnimationProps>;
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
            utils?: propTypes.utils;
        }
        export class DatePickerDialog extends React.Component<DatePickerDialogProps> {
            public show(): void;
            public dismiss(): void;
        }
    }

    /** @deprecated use array of components instead */
    export interface DialogAction {
        id?: string;
        onClick?: React.MouseEventHandler<{}>;
        onTouchTap?: TouchTapEventHandler;
        ref?: string;
        text: string;
    }
    export interface DialogProps extends React.DOMAttributes<{}>, React.Props<Dialog> {
        actions?: Array<DialogAction | React.ReactElement<any>>;
        /** @deprecated use a custom `actions` property instead */
        actionFocus?: string;
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
    export class Dialog extends React.Component<DialogProps> {
    }

    interface DividerProps {
        className?: string;
        inset?: boolean;
        style?: React.CSSProperties;
    }
    export class Divider extends React.Component<DividerProps> {
    }

    interface DrawerProps {
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
        width?: number | string;
        zDepth?: number;
    }
    export class Drawer extends React.Component<DrawerProps> {
    }

    namespace GridList {
        interface GridListProps {
            cellHeight?: number|'auto';
            cols?: number;
            padding?: number;
            style?: React.CSSProperties;
        }
        export class GridList extends React.Component<GridListProps> {
        }

        interface GridTileProps {
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
            onTouchTap?: TouchTapEventHandler;
        }
        export class GridTile extends React.Component<GridTileProps> {
        }
    }

    interface FontIconProps extends React.HTMLAttributes<{}>, React.Props<FontIcon> {
        // <span/> is the element that get the 'other' properties
        color?: string;
        hoverColor?: string;
        onMouseEnter?: React.MouseEventHandler<{}>;
        onMouseLeave?: React.MouseEventHandler<{}>;
        style?: React.CSSProperties;
    }
    export class FontIcon extends React.Component<FontIconProps> {
    }

    interface SvgIconProps extends React.SVGAttributes<{}>, React.Props<SvgIcon> {
        // <svg/> is the element that get the 'other' properties
        color?: string;
        hoverColor?: string;
        onMouseEnter?: React.MouseEventHandler<{}>;
        onMouseLeave?: React.MouseEventHandler<{}>;
        style?: React.CSSProperties;
        viewBox?: string;
    }
    export class SvgIcon extends React.Component<SvgIconProps> {
    }

    namespace List {
        interface ListProps {
            // <Paper/> is the element that get the 'other' properties
            style?: React.CSSProperties;
        }
        export class List extends React.Component<ListProps> {
        }

        interface ListItemProps extends EnhancedButtonProps {
            // <EnhancedButton/> is the element that get the 'other' properties
            autoGenerateNestedIndicator?: boolean;
            disableKeyboardFocus?: boolean;
            disabled?: boolean;
            hoverColor?: string;
            initiallyOpen?: boolean;
            innerDivStyle?: React.CSSProperties;
            insetChildren?: boolean;
            leftAvatar?: React.ReactElement<any>;
            leftCheckbox?: React.ReactElement<any>;
            leftIcon?: React.ReactElement<any>;
            nestedItems?: React.ReactElement<ListItemProps>[];
            nestedLevel?: number;
            nestedListStyle?: React.CSSProperties;
            onKeyboardFocus?: (e: React.FocusEvent<{}>, isKeyboardFocused: boolean) => void;
            onMouseEnter?: React.MouseEventHandler<{}>;
            onMouseLeave?: React.MouseEventHandler<{}>;
            onNestedListToggle?: (item: ListItem) => void;
            onTouchStart?: React.TouchEventHandler<{}>;
            onTouchTap?: TouchTapEventHandler;
            open?: boolean;
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
        export class ListItem extends React.Component<ListItemProps> {
        }

        interface SelectableProps {
            onChange?: (e: TouchTapEvent, value: any) => void;
            selectedItemStyle?: React.CSSProperties;
            value?: any;
        }

        // union types for higher order components in TypeScript 1.8: https://github.com/Microsoft/TypeScript/issues/4362
        export function makeSelectable<P extends {}>(component: React.ComponentClass<P>): React.ComponentClass<P & SelectableProps>;
    }

    namespace Menus {
        interface MenuProps {
            // <List/> is the element that get the 'other' properties
            autoWidth?: boolean;
            desktop?: boolean;
            disableAutoFocus?: boolean;
            initiallyKeyboardFocused?: boolean;
            listStyle?: React.CSSProperties;
            maxHeight?: number;
            multiple?: boolean;
            onChange?: (e: TouchTapEvent, itemValue: any | any[]) => void;
            onEscKeyDown?: React.KeyboardEventHandler<{}>;
            onItemTouchTap?: (e: TouchTapEvent, item: MenuItem) => void;
            onKeyDown?: React.KeyboardEventHandler<{}>;
            selectedMenuItemStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            value?: any | any[];
            valueLink?: ReactLink<any | any[]>;
            width?: string | number;
        }
        export class Menu extends React.Component<MenuProps> {
        }

        interface MenuItemProps extends List.ListItemProps {
            // <ListItem/> is the element that get the 'other' properties
            animation?: React.ComponentClass<Popover.PopoverAnimationProps>;
            checked?: boolean;
            desktop?: boolean;
            disabled?: boolean;
            focusState?: string; // 'none', 'focused', or 'keyboard-focused'
            innerDivStyle?: React.CSSProperties;
            insetChildren?: boolean;
            leftIcon?: React.ReactElement<any>;
            menuItems?: React.ReactNode;
            onTouchTap?: TouchTapEventHandler;
            primaryText?: React.ReactNode;
            rightIcon?: React.ReactElement<any>;
            secondaryText?: React.ReactNode;
            style?: React.CSSProperties;
            value?: any;
            containerElement?: React.ReactNode | string;
        }
        export class MenuItem extends React.Component<MenuItemProps> {
        }

        interface IconMenuProps {
            // <Menu/> is the element that get the 'other' properties
            anchorOrigin?: propTypes.origin;
            animation?: React.ComponentClass<Popover.PopoverAnimationProps>;
            className?: string;
            iconButtonElement: React.ReactElement<IconButtonProps>;
            iconStyle?: React.CSSProperties;
            menuStyle?: React.CSSProperties;
            onItemTouchTap?: (e: TouchTapEvent, item: MenuItem) => void;
            onKeyboardFocus?: (e: React.FocusEvent<{}>, isKeyboardFocused: boolean) => void;
            onMouseDown?: React.MouseEventHandler<{}>;
            onMouseEnter?: React.MouseEventHandler<{}>;
            onMouseLeave?: React.MouseEventHandler<{}>;
            onMouseUp?: React.MouseEventHandler<{}>;
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
            onKeyDown?: React.KeyboardEventHandler<{}>;
            selectedMenuItemStyle?: React.CSSProperties;
            value?: any | any[];
            valueLink?: ReactLink<any | any[]>;
            width?: string | number;
        }
        export class IconMenu extends React.Component<IconMenuProps> {
        }

        interface DropDownMenuProps {
            // <div/> is the element that gets the 'other' properties
            animated?: boolean;
            animation?: React.ComponentClass<Popover.PopoverAnimationProps>;
            autoWidth?: boolean;
            className?: string;
            disabled?: boolean;
            iconStyle?: React.CSSProperties;
            labelStyle?: React.CSSProperties;
            listStyle?: React.CSSProperties;
            maxHeight?: number;
            menuStyle?: React.CSSProperties;
            onChange?: (e: TouchTapEvent, index: number, menuItemValue: any) => void;
            onClose?: (e: TouchTapEvent) => void;
            openImmediately?: boolean;
            style?: React.CSSProperties;
            underlineStyle?: React.CSSProperties;
            value?: any;
        }
        export class DropDownMenu extends React.Component<DropDownMenuProps> {
        }
    }

    interface OverlayProps extends React.Props<Overlay> {
        autoLockScrolling?: boolean;
        show?: boolean;
        transitionEnabled?: boolean;
        onClick?: React.MouseEventHandler<{}>;
        onTouchTap?: TouchTapEventHandler;
    }
    export class Overlay extends React.Component<OverlayProps> {
    }

    interface PaperProps extends React.HTMLAttributes<{}>, React.Props<Paper> {
        circle?: boolean;
        rounded?: boolean;
        style?: React.CSSProperties;
        transitionEnabled?: boolean;
        zDepth?: number;
    }
    export class Paper extends React.Component<PaperProps> {
    }

    namespace Popover {
        interface PopoverAnimationProps {
            open: boolean;
            style?: React.CSSProperties;
        }

        interface PopoverProps {
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
        export class Popover extends React.Component<PopoverProps> {
        }

        interface PopoverAnimationVerticalProps extends PopoverAnimationProps {
            className?: string;
            targetOrigin?: propTypes.origin;
            zDepth?: number;
        }
        export class PopoverAnimationVertical extends React.Component<PopoverAnimationVerticalProps> {
        }

        interface PopoverAnimationDefaultProps extends PopoverAnimationProps {
            className?: string;
            targetOrigin?: propTypes.origin;
            zDepth?: number;
        }
        export class PopoverAnimationDefault extends React.Component<PopoverAnimationDefaultProps> {
        }
    }

    interface CircularProgressProps {
        color?: string;
        innerStyle?: React.CSSProperties;
        max?: number;
        min?: number;
        mode?: "determinate" | "indeterminate";
        size?: number;
        style?: React.CSSProperties;
        thickness?: number;
        value?: number;
    }
    export class CircularProgress extends React.Component<CircularProgressProps> {
    }

    interface LinearProgressProps {
        color?: string;
        max?: number;
        min?: number;
        mode?: "determinate" | "indeterminate";
        style?: React.CSSProperties;
        value?: number;
    }
    export class LinearProgress extends React.Component<LinearProgressProps> {
    }

    interface RefreshIndicatorProps {
        color?: string;
        left: number;
        loadingColor?: string;
        percentage?: number;
        size?: number;
        status?: "ready" | "loading" | "hide";
        style?: React.CSSProperties;
        top: number;
    }
    export class RefreshIndicator extends React.Component<RefreshIndicatorProps> {
    }

    interface SelectFieldProps {
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
        multiple?: boolean;
        onBlur?: React.FocusEventHandler<{}>;
        onChange?: (e: TouchTapEvent, index: number, menuItemValue: any) => void;
        onFocus?: React.FocusEventHandler<{}>;
        selectFieldRoot?: React.CSSProperties;
        selectionRenderer?: (value: any) => React.ReactNode;
        style?: React.CSSProperties;
        underlineDisabledStyle?: React.CSSProperties;
        underlineFocusStyle?: React.CSSProperties;
        underlineStyle?: React.CSSProperties;
        value?: any;

        // useful attributes passed to <DropDownMenu/>
        className?: string;
        maxHeight?: number;
        menuStyle?: any;
        listStyle?: React.CSSProperties;
        menuItemStyle?: React.CSSProperties;
        selectedMenuItemStyle?: React.CSSProperties;
        openImmediately?: boolean;
    }
    export class SelectField extends React.Component<SelectFieldProps> {
    }

    interface SliderProps {
        axis?: 'x' | 'x-reverse' | 'y' | 'y-reverse';
        defaultValue?: number;
        description?: string;
        disableFocusRipple?: boolean;
        disabled?: boolean;
        error?: string;
        max?: number;
        min?: number;
        name?: string;
        onBlur?: React.FocusEventHandler<{}>;
        onChange?: (e: React.MouseEvent<{}>, value: number) => void;
        onDragStart?: React.MouseEventHandler<{}>;
        onDragStop?: React.MouseEventHandler<{}>;
        onFocus?: React.FocusEventHandler<{}>;
        required?: boolean;
        sliderStyle?: React.CSSProperties,
        step?: number;
        style?: React.CSSProperties;
        value?: number;
    }
    export class Slider extends React.Component<SliderProps> {
    }

    namespace Switches {

        // what's not commonly overridden by Checkbox, RadioButton, or Toggle
        interface CommonEnhancedSwitchProps<T> extends React.HTMLAttributes<{}>, React.Props<T> {
        }

        interface EnhancedSwitchProps extends CommonEnhancedSwitchProps<EnhancedSwitch> {
            // <input/> is element that get the 'other' properties
            className?: string;
            defaultSwitched?: boolean;
            disableFocusRipple?: boolean;
            disableTouchRipple?: boolean;
            disabled?: boolean;
            iconStyle?: React.CSSProperties;
            id?: string;
            inputStyle: React.CSSProperties;
            inputType: string;
            label?: string;
            labelPosition?: string; // oneOf(['left', 'right'])
            labelStyle?: React.CSSProperties;
            name?: string;
            onBlur?: React.FocusEventHandler<{}>;
            onFocus?: React.FocusEventHandler<{}>;
            onMouseDown?: React.MouseEventHandler<{}>;
            onMouseLeave?: React.MouseEventHandler<{}>;
            onMouseUp?: React.MouseEventHandler<{}>;
            onParentShouldUpdate: (isInputChecked: boolean) => void;
            onSwitch?: (e: React.MouseEvent<{}>, isInputChecked: boolean) => void;
            onTouchEnd?: React.TouchEventHandler<{}>;
            onTouchStart?: React.TouchEventHandler<{}>;
            required?: boolean;
            rippleColor?: string;
            rippleStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            switchElement: React.ReactElement<any>;
            switched: boolean;
            thumbStyle?: React.CSSProperties;
            trackStyle?: React.CSSProperties;
            value?: string;
        }
        export class EnhancedSwitch extends React.Component<EnhancedSwitchProps> {
            getValue(): string;
            isKeyboardFocused(): boolean;
            isSwitched(): boolean;
            setSwitched(newSwitchedValue: boolean): void;
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
            onCheck?: (event: React.MouseEvent<{}>, checked: boolean) => void;
            style?: React.CSSProperties;
            uncheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
            valueLink?: ReactLink<boolean>;
        }
        export class Checkbox extends React.Component<CheckboxProps> {
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
            onCheck?: (e: React.FormEvent<{}>, selected: string) => void;
            style?: React.CSSProperties;
            uncheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
            value?: any;
        }
        export class RadioButton extends React.Component<RadioButtonProps> {
            isChecked(): boolean;

            getValue(): string;
        }

        interface RadioButtonGroupProps {
            className?: string;
            defaultSelected?: any;
            labelPosition?: "left" | "right";
            name: string;
            onChange?: (e: React.FormEvent<{}>, selected: string) => void;
            style?: React.CSSProperties;
            valueSelected?: any;
        }
        export class RadioButtonGroup extends React.Component<RadioButtonGroupProps> {
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
            onToggle?: (e: React.MouseEvent<{}>, isInputChecked: boolean) => void;
            rippleStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            thumbStyle?: React.CSSProperties;
            thumbSwitchedStyle?: React.CSSProperties;
            trackSwitchedStyle?: React.CSSProperties;
            toggled?: boolean;
            trackStyle?: React.CSSProperties;
            valueLink?: ReactLink<boolean>;
        }
        export class Toggle extends React.Component<ToggleProps> {
            isToggled(): boolean;

            setToggled(newToggledValue: boolean): void;
        }
    }

    interface SnackbarProps {
        action?: React.ReactNode;
        autoHideDuration?: number;
        bodyStyle?: React.CSSProperties;
        className?: string;
        contentStyle?: React.CSSProperties;
        message: React.ReactNode;
        onActionTouchTap?: React.TouchEventHandler<{}>;
        onRequestClose?: (reason: string) => void;
        open: boolean;
        style?: React.CSSProperties;
    }
    export class Snackbar extends React.Component<SnackbarProps> {
    }

    namespace Stepper {
        interface StepProps {
            active?: boolean;
            completed?: boolean;
            disabled?: boolean;
            style?: React.CSSProperties;
        }
        export class Step extends React.Component<StepProps> {
        }

        interface StepButtonProps extends SharedEnhancedButtonProps<StepButton> {
            active?: boolean;
            completed?: boolean;
            disabled?: boolean;
            icon?: React.ReactNode | string | number;
            onMouseEnter?: React.MouseEventHandler<{}>;
            onMouseLeave?: React.MouseEventHandler<{}>;
            onTouchStart?: React.TouchEventHandler<{}>;
            style?: React.CSSProperties;
        }
        export class StepButton extends React.Component<StepButtonProps> {
        }

        interface StepContentProps {
            active?: boolean;
            last?: boolean;
            style?: React.CSSProperties;
        }
        export class StepContent extends React.Component<StepContentProps> {
        }

        interface StepLabelProps {
            active?: boolean;
            completed?: boolean;
            disabled?: boolean;
            icon?: React.ReactNode | string | number;
            iconContainerStyle?: React.CSSProperties;
            style?: React.CSSProperties;
        }
        export class StepLabel extends React.Component<StepLabelProps> {
        }

        interface SnackbarProps extends React.Props<Snackbar> {
            action?: string;
            autoHideDuration?: number;
            bodyStyle?: React.CSSProperties;
            className?: string;
            message: string | JSX.Element;
            onActionTouchTap?: React.TouchEventHandler<{}>;
            /** @deprecated Use the open property to control the component instead */
            onDismiss?: () => void; // DEPRECATED
            onRequestClose: (reason: string) => void;
            /** @deprecated Use the open property to control the component instead */
            onShow?: () => void; // DEPRECATED
            open: boolean;
            /** @deprecated Use the open property to control the component instead */
            openOnMount?: boolean; // DEPRECATED
        }

        interface StepperProps {
            activeStep?: number;
            linear?: boolean;
            orientation?: "horizontal" | "vertical";
            style?: React.CSSProperties;
        }
        export class Stepper extends React.Component<StepperProps> {
        }
    }

    interface SubheaderProps {
        inset?: boolean;
        style?: React.CSSProperties;
    }
    export class Subheader extends React.Component<SubheaderProps> {
    }

    namespace Table {
        interface TableProps {
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
        export class Table extends React.Component<TableProps> {
        }

        interface TableRowProps {
            // <tr/> is element that get the 'other' properties
            className?: string;
            displayBorder?: boolean;
            hoverable?: boolean;
            hovered?: boolean;
            /** @deprecated Instead, use event handler on Table */
            onCellClick?: (e: React.MouseEvent<{}>, row: number, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onCellHover?: (e: React.MouseEvent<{}>, row: number, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onCellHoverExit?: (e: React.MouseEvent<{}>, row: number, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onRowClick?: (e: React.MouseEvent<{}>, row: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onRowHover?: (e: React.MouseEvent<{}>, row: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onRowHoverExit?: (e: React.MouseEvent<{}>, row: number) => void;
            rowNumber?: number;
            selectable?: boolean;
            selected?: boolean;
            striped?: boolean;
            style?: React.CSSProperties;
        }
        export class TableRow extends React.Component<TableRowProps> {
        }

        interface TableRowColumnProps {
            // <td/> is element that get the 'other' properties
            className?: string;
            columnNumber?: number;
            hoverable?: boolean;
            key?: string;
            /** @deprecated Instead, use event handler on Table */
            onClick?: (e: React.MouseEvent<{}>, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onHover?: (e: React.MouseEvent<{}>, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onHoverExit?: (e: React.MouseEvent<{}>, column: number) => void;
            style?: React.CSSProperties;

            // useful attributes passed to <td/>
            colSpan?: number;
        }
        export class TableRowColumn extends React.Component<TableRowColumnProps> {
        }

        interface TableHeaderProps {
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
        export class TableHeader extends React.Component<TableHeaderProps> {
        }

        interface TableHeaderColumnProps {
            // <th/> is element that get the 'other' properties
            className?: string;
            columnNumber?: number;
            key?: string;
            onClick?: (e: React.MouseEvent<{}>, column: number) => void;
            style?: React.CSSProperties;
            tooltip?: string;
            tooltipStyle?: React.CSSProperties;

            // useful attributes passed to <th/>
            colSpan?: number;
        }
        export class TableHeaderColumn extends React.Component<TableHeaderColumnProps> {
        }

        interface TableBodyProps {
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
        export class TableBody extends React.Component<TableBodyProps> {
        }

        interface TableFooterProps {
            // <tfoot/> is element that get the 'other' properties
            adjustForCheckbox?: boolean;
            className?: string;
            style?: React.CSSProperties;
        }
        export class TableFooter extends React.Component<TableFooterProps> {
        }
    }

    namespace Tabs {
        interface TabsProps {
            className?: string;
            contentContainerClassName?: string;
            contentContainerStyle?: React.CSSProperties;
            initialSelectedIndex?: number;
            inkBarStyle?: React.CSSProperties;
            onChange?: (value: any, e: React.FormEvent<{}>, tab: Tab) => void;
            style?: React.CSSProperties;
            tabItemContainerStyle?: React.CSSProperties;
            tabTemplate?: React.ComponentClass<any>;
            tabTemplateStyle?: React.CSSProperties;
            value?: any;
        }
        export class Tabs extends React.Component<TabsProps> {
        }

        interface TabProps extends SharedEnhancedButtonProps<Tab> {
            buttonStyle?: React.CSSProperties;
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

    interface TextFieldProps {
        className?: string;
        defaultValue?: string | number;
        disabled?: boolean;
        errorStyle?: React.CSSProperties;
        errorText?: React.ReactNode;
        floatingLabelFixed?: boolean;
        floatingLabelFocusStyle?: React.CSSProperties;
        floatingLabelShrinkStyle?: React.CSSProperties;
        floatingLabelStyle?: React.CSSProperties;
        floatingLabelText?: React.ReactNode;
        fullWidth?: boolean;
        hintStyle?: React.CSSProperties;
        hintText?: React.ReactNode;
        id?: string;
        inputStyle?: React.CSSProperties;
        multiLine?: boolean;
        name?: string;
        onBlur?: React.FocusEventHandler<{}>;
        onChange?: (e: React.FormEvent<{}>, newValue: string) => void;
        onFocus?: React.FocusEventHandler<{}>;
        onKeyDown?: React.KeyboardEventHandler<{}>;
        onKeyUp?: React.KeyboardEventHandler<{}>;
        onKeyPress?: React.KeyboardEventHandler<{}>;
        required?: boolean;
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
        autoFocus?: boolean;
        min?: number;
        max?: number;
        step?: number;
        autoComplete?: string;
    }
    export class TextField extends React.Component<TextFieldProps> {
        blur(): void;

        focus(): void;

        select(): void;

        getValue(): string;

        getInputNode(): HTMLInputElement;
    }

    interface TimePickerProps {
        // <TextField/> is element that get the 'other' properties
        autoOk?: boolean;
        cancelLabel?: React.ReactNode;
        defaultTime?: Date;
        dialogBodyStyle?: React.CSSProperties;
        dialogStyle?: React.CSSProperties;
        disabled?: boolean;
        format?: "ampm" | "24hr";
        minutesStep?: number;
        okLabel?: React.ReactNode;
        onChange?: (e: any, time: Date) => void;
        onDismiss?: () => void;
        onFocus?: React.FocusEventHandler<{}>;
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
        onBlur?: React.FocusEventHandler<{}>;
        onKeyDown?: React.KeyboardEventHandler<{}>;
        rows?: number,
        rowsMax?: number,
        textareaStyle?: React.CSSProperties;
        type?: string;
        underlineDisabledStyle?: React.CSSProperties;
        underlineFocusStyle?: React.CSSProperties;
        underlineShow?: boolean;
        underlineStyle?: React.CSSProperties;
    }
    export class TimePicker extends React.Component<TimePickerProps> {
        focus(): void;

        openDialog(): void;
    }

    export namespace Toolbar {
        interface ToolbarProps {
            className?: string;
            noGutter?: boolean;
            style?: React.CSSProperties;
        }
        export class Toolbar extends React.Component<ToolbarProps> {
        }

        interface ToolbarGroupProps {
            className?: string;
            firstChild?: boolean;
            float?: "left" | "right";
            lastChild?: boolean;
            style?: React.CSSProperties;
        }
        export class ToolbarGroup extends React.Component<ToolbarGroupProps> {
        }

        interface ToolbarSeparatorProps {
            className?: string;
            style?: React.CSSProperties;
        }
        export class ToolbarSeparator extends React.Component<ToolbarSeparatorProps> {
        }

        interface ToolbarTitleProps extends React.HTMLAttributes<{}>, React.Props<ToolbarTitle> {
            className?: string;
            style?: React.CSSProperties;
            text?: string;
        }
        export class ToolbarTitle extends React.Component<ToolbarTitleProps> {
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

declare module 'material-ui/BottomNavigation' {
    export import BottomNavigation = __MaterialUI.BottomNavigation.BottomNavigation;
    export import BottomNavigationItem = __MaterialUI.BottomNavigation.BottomNavigationItem;
    export default BottomNavigation;
}

declare module 'material-ui/BottomNavigation/BottomNavigationItem' {
    export import BottomNavigationItem = __MaterialUI.BottomNavigation.BottomNavigationItem;
    export default BottomNavigationItem;
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

declare module 'material-ui/DatePicker/DatePickerDialog' {
    export import DatePickerDialog = __MaterialUI.DatePicker.DatePickerDialog;
    export default DatePickerDialog;
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
    export import makeSelectable = __MaterialUI.List.makeSelectable;
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

declare module 'material-ui/List/makeSelectable' {
    export import makeSelectable = __MaterialUI.List.makeSelectable;
    export default makeSelectable;
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

declare module 'material-ui/svg-icons/action/work' {
    export import ActionWork = __MaterialUI.SvgIcon;
    export default ActionWork;
}

declare module 'material-ui/svg-icons/action/camera-enhance' {
    export import ActionCameraEnhance = __MaterialUI.SvgIcon;
    export default ActionCameraEnhance;
}

declare module 'material-ui/svg-icons/action/flip-to-back' {
    export import ActionFlipToBack = __MaterialUI.SvgIcon;
    export default ActionFlipToBack;
}

declare module 'material-ui/svg-icons/action/feedback' {
    export import ActionFeedback = __MaterialUI.SvgIcon;
    export default ActionFeedback;
}

declare module 'material-ui/svg-icons/action/assignment-turned-in' {
    export import ActionAssignmentTurnedIn = __MaterialUI.SvgIcon;
    export default ActionAssignmentTurnedIn;
}

declare module 'material-ui/svg-icons/action/track-changes' {
    export import ActionTrackChanges = __MaterialUI.SvgIcon;
    export default ActionTrackChanges;
}

declare module 'material-ui/svg-icons/action/view-stream' {
    export import ActionViewStream = __MaterialUI.SvgIcon;
    export default ActionViewStream;
}

declare module 'material-ui/svg-icons/action/open-in-browser' {
    export import ActionOpenInBrowser = __MaterialUI.SvgIcon;
    export default ActionOpenInBrowser;
}

declare module 'material-ui/svg-icons/action/view-headline' {
    export import ActionViewHeadline = __MaterialUI.SvgIcon;
    export default ActionViewHeadline;
}

declare module 'material-ui/svg-icons/action/alarm-add' {
    export import ActionAlarmAdd = __MaterialUI.SvgIcon;
    export default ActionAlarmAdd;
}

declare module 'material-ui/svg-icons/action/history' {
    export import ActionHistory = __MaterialUI.SvgIcon;
    export default ActionHistory;
}

declare module 'material-ui/svg-icons/action/perm-device-information' {
    export import ActionPermDeviceInformation = __MaterialUI.SvgIcon;
    export default ActionPermDeviceInformation;
}

declare module 'material-ui/svg-icons/action/reorder' {
    export import ActionReorder = __MaterialUI.SvgIcon;
    export default ActionReorder;
}

declare module 'material-ui/svg-icons/action/assignment' {
    export import ActionAssignment = __MaterialUI.SvgIcon;
    export default ActionAssignment;
}

declare module 'material-ui/svg-icons/action/shopping-cart' {
    export import ActionShoppingCart = __MaterialUI.SvgIcon;
    export default ActionShoppingCart;
}

declare module 'material-ui/svg-icons/action/face' {
    export import ActionFace = __MaterialUI.SvgIcon;
    export default ActionFace;
}

declare module 'material-ui/svg-icons/action/event' {
    export import ActionEvent = __MaterialUI.SvgIcon;
    export default ActionEvent;
}

declare module 'material-ui/svg-icons/action/view-week' {
    export import ActionViewWeek = __MaterialUI.SvgIcon;
    export default ActionViewWeek;
}

declare module 'material-ui/svg-icons/action/rounded-corner' {
    export import ActionRoundedCorner = __MaterialUI.SvgIcon;
    export default ActionRoundedCorner;
}

declare module 'material-ui/svg-icons/action/view-carousel' {
    export import ActionViewCarousel = __MaterialUI.SvgIcon;
    export default ActionViewCarousel;
}

declare module 'material-ui/svg-icons/action/toll' {
    export import ActionToll = __MaterialUI.SvgIcon;
    export default ActionToll;
}

declare module 'material-ui/svg-icons/action/home' {
    export import ActionHome = __MaterialUI.SvgIcon;
    export default ActionHome;
}

declare module 'material-ui/svg-icons/action/subject' {
    export import ActionSubject = __MaterialUI.SvgIcon;
    export default ActionSubject;
}

declare module 'material-ui/svg-icons/action/lock' {
    export import ActionLock = __MaterialUI.SvgIcon;
    export default ActionLock;
}

declare module 'material-ui/svg-icons/action/visibility-off' {
    export import ActionVisibilityOff = __MaterialUI.SvgIcon;
    export default ActionVisibilityOff;
}

declare module 'material-ui/svg-icons/action/opacity' {
    export import ActionOpacity = __MaterialUI.SvgIcon;
    export default ActionOpacity;
}

declare module 'material-ui/svg-icons/action/dns' {
    export import ActionDns = __MaterialUI.SvgIcon;
    export default ActionDns;
}

declare module 'material-ui/svg-icons/action/open-with' {
    export import ActionOpenWith = __MaterialUI.SvgIcon;
    export default ActionOpenWith;
}

declare module 'material-ui/svg-icons/action/system-update-alt' {
    export import ActionSystemUpdateAlt = __MaterialUI.SvgIcon;
    export default ActionSystemUpdateAlt;
}

declare module 'material-ui/svg-icons/action/picture-in-picture-alt' {
    export import ActionPictureInPictureAlt = __MaterialUI.SvgIcon;
    export default ActionPictureInPictureAlt;
}

declare module 'material-ui/svg-icons/action/bookmark-border' {
    export import ActionBookmarkBorder = __MaterialUI.SvgIcon;
    export default ActionBookmarkBorder;
}

declare module 'material-ui/svg-icons/action/settings' {
    export import ActionSettings = __MaterialUI.SvgIcon;
    export default ActionSettings;
}

declare module 'material-ui/svg-icons/action/dashboard' {
    export import ActionDashboard = __MaterialUI.SvgIcon;
    export default ActionDashboard;
}

declare module 'material-ui/svg-icons/action/done-all' {
    export import ActionDoneAll = __MaterialUI.SvgIcon;
    export default ActionDoneAll;
}

declare module 'material-ui/svg-icons/action/aspect-ratio' {
    export import ActionAspectRatio = __MaterialUI.SvgIcon;
    export default ActionAspectRatio;
}

declare module 'material-ui/svg-icons/action/verified-user' {
    export import ActionVerifiedUser = __MaterialUI.SvgIcon;
    export default ActionVerifiedUser;
}

declare module 'material-ui/svg-icons/action/update' {
    export import ActionUpdate = __MaterialUI.SvgIcon;
    export default ActionUpdate;
}

declare module 'material-ui/svg-icons/action/query-builder' {
    export import ActionQueryBuilder = __MaterialUI.SvgIcon;
    export default ActionQueryBuilder;
}

declare module 'material-ui/svg-icons/action/supervisor-account' {
    export import ActionSupervisorAccount = __MaterialUI.SvgIcon;
    export default ActionSupervisorAccount;
}

declare module 'material-ui/svg-icons/action/polymer' {
    export import ActionPolymer = __MaterialUI.SvgIcon;
    export default ActionPolymer;
}

declare module 'material-ui/svg-icons/action/accessible' {
    export import ActionAccessible = __MaterialUI.SvgIcon;
    export default ActionAccessible;
}

declare module 'material-ui/svg-icons/action/highlight-off' {
    export import ActionHighlightOff = __MaterialUI.SvgIcon;
    export default ActionHighlightOff;
}

declare module 'material-ui/svg-icons/action/power-settings-new' {
    export import ActionPowerSettingsNew = __MaterialUI.SvgIcon;
    export default ActionPowerSettingsNew;
}

declare module 'material-ui/svg-icons/action/chrome-reader-mode' {
    export import ActionChromeReaderMode = __MaterialUI.SvgIcon;
    export default ActionChromeReaderMode;
}

declare module 'material-ui/svg-icons/action/perm-camera-mic' {
    export import ActionPermCameraMic = __MaterialUI.SvgIcon;
    export default ActionPermCameraMic;
}

declare module 'material-ui/svg-icons/action/touch-app' {
    export import ActionTouchApp = __MaterialUI.SvgIcon;
    export default ActionTouchApp;
}

declare module 'material-ui/svg-icons/action/receipt' {
    export import ActionReceipt = __MaterialUI.SvgIcon;
    export default ActionReceipt;
}

declare module 'material-ui/svg-icons/action/assignment-late' {
    export import ActionAssignmentLate = __MaterialUI.SvgIcon;
    export default ActionAssignmentLate;
}

declare module 'material-ui/svg-icons/action/alarm-off' {
    export import ActionAlarmOff = __MaterialUI.SvgIcon;
    export default ActionAlarmOff;
}

declare module 'material-ui/svg-icons/action/toc' {
    export import ActionToc = __MaterialUI.SvgIcon;
    export default ActionToc;
}

declare module 'material-ui/svg-icons/action/settings-bluetooth' {
    export import ActionSettingsBluetooth = __MaterialUI.SvgIcon;
    export default ActionSettingsBluetooth;
}

declare module 'material-ui/svg-icons/action/settings-brightness' {
    export import ActionSettingsBrightness = __MaterialUI.SvgIcon;
    export default ActionSettingsBrightness;
}

declare module 'material-ui/svg-icons/action/donut-small' {
    export import ActionDonutSmall = __MaterialUI.SvgIcon;
    export default ActionDonutSmall;
}

declare module 'material-ui/svg-icons/action/zoom-out' {
    export import ActionZoomOut = __MaterialUI.SvgIcon;
    export default ActionZoomOut;
}

declare module 'material-ui/svg-icons/action/loyalty' {
    export import ActionLoyalty = __MaterialUI.SvgIcon;
    export default ActionLoyalty;
}

declare module 'material-ui/svg-icons/action/search' {
    export import ActionSearch = __MaterialUI.SvgIcon;
    export default ActionSearch;
}

declare module 'material-ui/svg-icons/action/account-balance-wallet' {
    export import ActionAccountBalanceWallet = __MaterialUI.SvgIcon;
    export default ActionAccountBalanceWallet;
}

declare module 'material-ui/svg-icons/action/date-range' {
    export import ActionDateRange = __MaterialUI.SvgIcon;
    export default ActionDateRange;
}

declare module 'material-ui/svg-icons/action/alarm-on' {
    export import ActionAlarmOn = __MaterialUI.SvgIcon;
    export default ActionAlarmOn;
}

declare module 'material-ui/svg-icons/action/view-quilt' {
    export import ActionViewQuilt = __MaterialUI.SvgIcon;
    export default ActionViewQuilt;
}

declare module 'material-ui/svg-icons/action/launch' {
    export import ActionLaunch = __MaterialUI.SvgIcon;
    export default ActionLaunch;
}

declare module 'material-ui/svg-icons/action/visibility' {
    export import ActionVisibility = __MaterialUI.SvgIcon;
    export default ActionVisibility;
}

declare module 'material-ui/svg-icons/action/flight-land' {
    export import ActionFlightLand = __MaterialUI.SvgIcon;
    export default ActionFlightLand;
}

declare module 'material-ui/svg-icons/action/card-travel' {
    export import ActionCardTravel = __MaterialUI.SvgIcon;
    export default ActionCardTravel;
}

declare module 'material-ui/svg-icons/action/get-app' {
    export import ActionGetApp = __MaterialUI.SvgIcon;
    export default ActionGetApp;
}

declare module 'material-ui/svg-icons/action/markunread-mailbox' {
    export import ActionMarkunreadMailbox = __MaterialUI.SvgIcon;
    export default ActionMarkunreadMailbox;
}

declare module 'material-ui/svg-icons/action/view-agenda' {
    export import ActionViewAgenda = __MaterialUI.SvgIcon;
    export default ActionViewAgenda;
}

declare module 'material-ui/svg-icons/action/timeline' {
    export import ActionTimeline = __MaterialUI.SvgIcon;
    export default ActionTimeline;
}

declare module 'material-ui/svg-icons/action/settings-remote' {
    export import ActionSettingsRemote = __MaterialUI.SvgIcon;
    export default ActionSettingsRemote;
}

declare module 'material-ui/svg-icons/action/input' {
    export import ActionInput = __MaterialUI.SvgIcon;
    export default ActionInput;
}

declare module 'material-ui/svg-icons/action/record-voice-over' {
    export import ActionRecordVoiceOver = __MaterialUI.SvgIcon;
    export default ActionRecordVoiceOver;
}

declare module 'material-ui/svg-icons/action/backup' {
    export import ActionBackup = __MaterialUI.SvgIcon;
    export default ActionBackup;
}

declare module 'material-ui/svg-icons/action/language' {
    export import ActionLanguage = __MaterialUI.SvgIcon;
    export default ActionLanguage;
}

declare module 'material-ui/svg-icons/action/play-for-work' {
    export import ActionPlayForWork = __MaterialUI.SvgIcon;
    export default ActionPlayForWork;
}

declare module 'material-ui/svg-icons/action/gif' {
    export import ActionGif = __MaterialUI.SvgIcon;
    export default ActionGif;
}

declare module 'material-ui/svg-icons/action/theaters' {
    export import ActionTheaters = __MaterialUI.SvgIcon;
    export default ActionTheaters;
}

declare module 'material-ui/svg-icons/action/offline-pin' {
    export import ActionOfflinePin = __MaterialUI.SvgIcon;
    export default ActionOfflinePin;
}

declare module 'material-ui/svg-icons/action/assignment-return' {
    export import ActionAssignmentReturn = __MaterialUI.SvgIcon;
    export default ActionAssignmentReturn;
}

declare module 'material-ui/svg-icons/action/print' {
    export import ActionPrint = __MaterialUI.SvgIcon;
    export default ActionPrint;
}

declare module 'material-ui/svg-icons/action/settings-overscan' {
    export import ActionSettingsOverscan = __MaterialUI.SvgIcon;
    export default ActionSettingsOverscan;
}

declare module 'material-ui/svg-icons/action/store' {
    export import ActionStore = __MaterialUI.SvgIcon;
    export default ActionStore;
}

declare module 'material-ui/svg-icons/action/exit-to-app' {
    export import ActionExitToApp = __MaterialUI.SvgIcon;
    export default ActionExitToApp;
}

declare module 'material-ui/svg-icons/action/account-balance' {
    export import ActionAccountBalance = __MaterialUI.SvgIcon;
    export default ActionAccountBalance;
}

declare module 'material-ui/svg-icons/action/grade' {
    export import ActionGrade = __MaterialUI.SvgIcon;
    export default ActionGrade;
}

declare module 'material-ui/svg-icons/action/picture-in-picture' {
    export import ActionPictureInPicture = __MaterialUI.SvgIcon;
    export default ActionPictureInPicture;
}

declare module 'material-ui/svg-icons/action/copyright' {
    export import ActionCopyright = __MaterialUI.SvgIcon;
    export default ActionCopyright;
}

declare module 'material-ui/svg-icons/action/donut-large' {
    export import ActionDonutLarge = __MaterialUI.SvgIcon;
    export default ActionDonutLarge;
}

declare module 'material-ui/svg-icons/action/lock-open' {
    export import ActionLockOpen = __MaterialUI.SvgIcon;
    export default ActionLockOpen;
}

declare module 'material-ui/svg-icons/action/perm-media' {
    export import ActionPermMedia = __MaterialUI.SvgIcon;
    export default ActionPermMedia;
}

declare module 'material-ui/svg-icons/action/all-out' {
    export import ActionAllOut = __MaterialUI.SvgIcon;
    export default ActionAllOut;
}

declare module 'material-ui/svg-icons/action/check-circle' {
    export import ActionCheckCircle = __MaterialUI.SvgIcon;
    export default ActionCheckCircle;
}

declare module 'material-ui/svg-icons/action/swap-vertical-circle' {
    export import ActionSwapVerticalCircle = __MaterialUI.SvgIcon;
    export default ActionSwapVerticalCircle;
}

declare module 'material-ui/svg-icons/action/settings-input-svideo' {
    export import ActionSettingsInputSvideo = __MaterialUI.SvgIcon;
    export default ActionSettingsInputSvideo;
}

declare module 'material-ui/svg-icons/action/watch-later' {
    export import ActionWatchLater = __MaterialUI.SvgIcon;
    export default ActionWatchLater;
}

declare module 'material-ui/svg-icons/action/question-answer' {
    export import ActionQuestionAnswer = __MaterialUI.SvgIcon;
    export default ActionQuestionAnswer;
}

declare module 'material-ui/svg-icons/action/assignment-ind' {
    export import ActionAssignmentInd = __MaterialUI.SvgIcon;
    export default ActionAssignmentInd;
}

declare module 'material-ui/svg-icons/action/code' {
    export import ActionCode = __MaterialUI.SvgIcon;
    export default ActionCode;
}

declare module 'material-ui/svg-icons/action/turned-in-not' {
    export import ActionTurnedInNot = __MaterialUI.SvgIcon;
    export default ActionTurnedInNot;
}

declare module 'material-ui/svg-icons/action/line-weight' {
    export import ActionLineWeight = __MaterialUI.SvgIcon;
    export default ActionLineWeight;
}

declare module 'material-ui/svg-icons/action/restore' {
    export import ActionRestore = __MaterialUI.SvgIcon;
    export default ActionRestore;
}

declare module 'material-ui/svg-icons/action/tab' {
    export import ActionTab = __MaterialUI.SvgIcon;
    export default ActionTab;
}

declare module 'material-ui/svg-icons/action/open-in-new' {
    export import ActionOpenInNew = __MaterialUI.SvgIcon;
    export default ActionOpenInNew;
}

declare module 'material-ui/svg-icons/action/turned-in' {
    export import ActionTurnedIn = __MaterialUI.SvgIcon;
    export default ActionTurnedIn;
}

declare module 'material-ui/svg-icons/action/settings-input-hdmi' {
    export import ActionSettingsInputHdmi = __MaterialUI.SvgIcon;
    export default ActionSettingsInputHdmi;
}

declare module 'material-ui/svg-icons/action/favorite-border' {
    export import ActionFavoriteBorder = __MaterialUI.SvgIcon;
    export default ActionFavoriteBorder;
}

declare module 'material-ui/svg-icons/action/done' {
    export import ActionDone = __MaterialUI.SvgIcon;
    export default ActionDone;
}

declare module 'material-ui/svg-icons/action/payment' {
    export import ActionPayment = __MaterialUI.SvgIcon;
    export default ActionPayment;
}

declare module 'material-ui/svg-icons/action/announcement' {
    export import ActionAnnouncement = __MaterialUI.SvgIcon;
    export default ActionAnnouncement;
}

declare module 'material-ui/svg-icons/action/find-in-page' {
    export import ActionFindInPage = __MaterialUI.SvgIcon;
    export default ActionFindInPage;
}

declare module 'material-ui/svg-icons/action/thumbs-up-down' {
    export import ActionThumbsUpDown = __MaterialUI.SvgIcon;
    export default ActionThumbsUpDown;
}

declare module 'material-ui/svg-icons/action/explore' {
    export import ActionExplore = __MaterialUI.SvgIcon;
    export default ActionExplore;
}

declare module 'material-ui/svg-icons/action/today' {
    export import ActionToday = __MaterialUI.SvgIcon;
    export default ActionToday;
}

declare module 'material-ui/svg-icons/action/settings-power' {
    export import ActionSettingsPower = __MaterialUI.SvgIcon;
    export default ActionSettingsPower;
}

declare module 'material-ui/svg-icons/action/gavel' {
    export import ActionGavel = __MaterialUI.SvgIcon;
    export default ActionGavel;
}

declare module 'material-ui/svg-icons/action/build' {
    export import ActionBuild = __MaterialUI.SvgIcon;
    export default ActionBuild;
}

declare module 'material-ui/svg-icons/action/rowing' {
    export import ActionRowing = __MaterialUI.SvgIcon;
    export default ActionRowing;
}

declare module 'material-ui/svg-icons/action/label' {
    export import ActionLabel = __MaterialUI.SvgIcon;
    export default ActionLabel;
}

declare module 'material-ui/svg-icons/action/card-giftcard' {
    export import ActionCardGiftcard = __MaterialUI.SvgIcon;
    export default ActionCardGiftcard;
}

declare module 'material-ui/svg-icons/action/thumb-up' {
    export import ActionThumbUp = __MaterialUI.SvgIcon;
    export default ActionThumbUp;
}

declare module 'material-ui/svg-icons/action/shopping-basket' {
    export import ActionShoppingBasket = __MaterialUI.SvgIcon;
    export default ActionShoppingBasket;
}

declare module 'material-ui/svg-icons/action/swap-horiz' {
    export import ActionSwapHoriz = __MaterialUI.SvgIcon;
    export default ActionSwapHoriz;
}

declare module 'material-ui/svg-icons/action/help-outline' {
    export import ActionHelpOutline = __MaterialUI.SvgIcon;
    export default ActionHelpOutline;
}

declare module 'material-ui/svg-icons/action/pregnant-woman' {
    export import ActionPregnantWoman = __MaterialUI.SvgIcon;
    export default ActionPregnantWoman;
}

declare module 'material-ui/svg-icons/action/help' {
    export import ActionHelp = __MaterialUI.SvgIcon;
    export default ActionHelp;
}

declare module 'material-ui/svg-icons/action/settings-input-antenna' {
    export import ActionSettingsInputAntenna = __MaterialUI.SvgIcon;
    export default ActionSettingsInputAntenna;
}

declare module 'material-ui/svg-icons/action/find-replace' {
    export import ActionFindReplace = __MaterialUI.SvgIcon;
    export default ActionFindReplace;
}

declare module 'material-ui/svg-icons/action/shop' {
    export import ActionShop = __MaterialUI.SvgIcon;
    export default ActionShop;
}

declare module 'material-ui/svg-icons/action/change-history' {
    export import ActionChangeHistory = __MaterialUI.SvgIcon;
    export default ActionChangeHistory;
}

declare module 'material-ui/svg-icons/action/info' {
    export import ActionInfo = __MaterialUI.SvgIcon;
    export default ActionInfo;
}

declare module 'material-ui/svg-icons/action/trending-down' {
    export import ActionTrendingDown = __MaterialUI.SvgIcon;
    export default ActionTrendingDown;
}

declare module 'material-ui/svg-icons/action/flight-takeoff' {
    export import ActionFlightTakeoff = __MaterialUI.SvgIcon;
    export default ActionFlightTakeoff;
}

declare module 'material-ui/svg-icons/action/alarm' {
    export import ActionAlarm = __MaterialUI.SvgIcon;
    export default ActionAlarm;
}

declare module 'material-ui/svg-icons/action/spellcheck' {
    export import ActionSpellcheck = __MaterialUI.SvgIcon;
    export default ActionSpellcheck;
}

declare module 'material-ui/svg-icons/action/settings-input-component' {
    export import ActionSettingsInputComponent = __MaterialUI.SvgIcon;
    export default ActionSettingsInputComponent;
}

declare module 'material-ui/svg-icons/action/settings-applications' {
    export import ActionSettingsApplications = __MaterialUI.SvgIcon;
    export default ActionSettingsApplications;
}

declare module 'material-ui/svg-icons/action/room' {
    export import ActionRoom = __MaterialUI.SvgIcon;
    export default ActionRoom;
}

declare module 'material-ui/svg-icons/action/book' {
    export import ActionBook = __MaterialUI.SvgIcon;
    export default ActionBook;
}

declare module 'material-ui/svg-icons/action/class' {
    export import ActionClass = __MaterialUI.SvgIcon;
    export default ActionClass;
}

declare module 'material-ui/svg-icons/action/group-work' {
    export import ActionGroupWork = __MaterialUI.SvgIcon;
    export default ActionGroupWork;
}

declare module 'material-ui/svg-icons/action/hourglass-full' {
    export import ActionHourglassFull = __MaterialUI.SvgIcon;
    export default ActionHourglassFull;
}

declare module 'material-ui/svg-icons/action/assessment' {
    export import ActionAssessment = __MaterialUI.SvgIcon;
    export default ActionAssessment;
}

declare module 'material-ui/svg-icons/action/youtube-searched-for' {
    export import ActionYoutubeSearchedFor = __MaterialUI.SvgIcon;
    export default ActionYoutubeSearchedFor;
}

declare module 'material-ui/svg-icons/action/eject' {
    export import ActionEject = __MaterialUI.SvgIcon;
    export default ActionEject;
}

declare module 'material-ui/svg-icons/action/trending-up' {
    export import ActionTrendingUp = __MaterialUI.SvgIcon;
    export default ActionTrendingUp;
}

declare module 'material-ui/svg-icons/action/http' {
    export import ActionHttp = __MaterialUI.SvgIcon;
    export default ActionHttp;
}

declare module 'material-ui/svg-icons/action/stars' {
    export import ActionStars = __MaterialUI.SvgIcon;
    export default ActionStars;
}

declare module 'material-ui/svg-icons/action/autorenew' {
    export import ActionAutorenew = __MaterialUI.SvgIcon;
    export default ActionAutorenew;
}

declare module 'material-ui/svg-icons/action/settings-ethernet' {
    export import ActionSettingsEthernet = __MaterialUI.SvgIcon;
    export default ActionSettingsEthernet;
}

declare module 'material-ui/svg-icons/action/label-outline' {
    export import ActionLabelOutline = __MaterialUI.SvgIcon;
    export default ActionLabelOutline;
}

declare module 'material-ui/svg-icons/action/settings-phone' {
    export import ActionSettingsPhone = __MaterialUI.SvgIcon;
    export default ActionSettingsPhone;
}

declare module 'material-ui/svg-icons/action/info-outline' {
    export import ActionInfoOutline = __MaterialUI.SvgIcon;
    export default ActionInfoOutline;
}

declare module 'material-ui/svg-icons/action/lock-outline' {
    export import ActionLockOutline = __MaterialUI.SvgIcon;
    export default ActionLockOutline;
}

declare module 'material-ui/svg-icons/action/settings-input-composite' {
    export import ActionSettingsInputComposite = __MaterialUI.SvgIcon;
    export default ActionSettingsInputComposite;
}

declare module 'material-ui/svg-icons/action/invert-colors' {
    export import ActionInvertColors = __MaterialUI.SvgIcon;
    export default ActionInvertColors;
}

declare module 'material-ui/svg-icons/action/bookmark' {
    export import ActionBookmark = __MaterialUI.SvgIcon;
    export default ActionBookmark;
}

declare module 'material-ui/svg-icons/action/add-shopping-cart' {
    export import ActionAddShoppingCart = __MaterialUI.SvgIcon;
    export default ActionAddShoppingCart;
}

declare module 'material-ui/svg-icons/action/bug-report' {
    export import ActionBugReport = __MaterialUI.SvgIcon;
    export default ActionBugReport;
}

declare module 'material-ui/svg-icons/action/cached' {
    export import ActionCached = __MaterialUI.SvgIcon;
    export default ActionCached;
}

declare module 'material-ui/svg-icons/action/view-day' {
    export import ActionViewDay = __MaterialUI.SvgIcon;
    export default ActionViewDay;
}

declare module 'material-ui/svg-icons/action/fingerprint' {
    export import ActionFingerprint = __MaterialUI.SvgIcon;
    export default ActionFingerprint;
}

declare module 'material-ui/svg-icons/action/accessibility' {
    export import ActionAccessibility = __MaterialUI.SvgIcon;
    export default ActionAccessibility;
}

declare module 'material-ui/svg-icons/action/perm-data-setting' {
    export import ActionPermDataSetting = __MaterialUI.SvgIcon;
    export default ActionPermDataSetting;
}

declare module 'material-ui/svg-icons/action/settings-backup-restore' {
    export import ActionSettingsBackupRestore = __MaterialUI.SvgIcon;
    export default ActionSettingsBackupRestore;
}

declare module 'material-ui/svg-icons/action/zoom-in' {
    export import ActionZoomIn = __MaterialUI.SvgIcon;
    export default ActionZoomIn;
}

declare module 'material-ui/svg-icons/action/perm-identity' {
    export import ActionPermIdentity = __MaterialUI.SvgIcon;
    export default ActionPermIdentity;
}

declare module 'material-ui/svg-icons/action/favorite' {
    export import ActionFavorite = __MaterialUI.SvgIcon;
    export default ActionFavorite;
}

declare module 'material-ui/svg-icons/action/thumb-down' {
    export import ActionThumbDown = __MaterialUI.SvgIcon;
    export default ActionThumbDown;
}

declare module 'material-ui/svg-icons/action/assignment-returned' {
    export import ActionAssignmentReturned = __MaterialUI.SvgIcon;
    export default ActionAssignmentReturned;
}

declare module 'material-ui/svg-icons/action/account-box' {
    export import ActionAccountBox = __MaterialUI.SvgIcon;
    export default ActionAccountBox;
}

declare module 'material-ui/svg-icons/action/extension' {
    export import ActionExtension = __MaterialUI.SvgIcon;
    export default ActionExtension;
}

declare module 'material-ui/svg-icons/action/pageview' {
    export import ActionPageview = __MaterialUI.SvgIcon;
    export default ActionPageview;
}

declare module 'material-ui/svg-icons/action/https' {
    export import ActionHttps = __MaterialUI.SvgIcon;
    export default ActionHttps;
}

declare module 'material-ui/svg-icons/action/translate' {
    export import ActionTranslate = __MaterialUI.SvgIcon;
    export default ActionTranslate;
}

declare module 'material-ui/svg-icons/action/three-d-rotation' {
    export import ActionThreeDRotation = __MaterialUI.SvgIcon;
    export default ActionThreeDRotation;
}

declare module 'material-ui/svg-icons/action/tab-unselected' {
    export import ActionTabUnselected = __MaterialUI.SvgIcon;
    export default ActionTabUnselected;
}

declare module 'material-ui/svg-icons/action/description' {
    export import ActionDescription = __MaterialUI.SvgIcon;
    export default ActionDescription;
}

declare module 'material-ui/svg-icons/action/note-add' {
    export import ActionNoteAdd = __MaterialUI.SvgIcon;
    export default ActionNoteAdd;
}

declare module 'material-ui/svg-icons/action/perm-scan-wifi' {
    export import ActionPermScanWifi = __MaterialUI.SvgIcon;
    export default ActionPermScanWifi;
}

declare module 'material-ui/svg-icons/action/pets' {
    export import ActionPets = __MaterialUI.SvgIcon;
    export default ActionPets;
}

declare module 'material-ui/svg-icons/action/view-array' {
    export import ActionViewArray = __MaterialUI.SvgIcon;
    export default ActionViewArray;
}

declare module 'material-ui/svg-icons/action/shop-two' {
    export import ActionShopTwo = __MaterialUI.SvgIcon;
    export default ActionShopTwo;
}

declare module 'material-ui/svg-icons/action/line-style' {
    export import ActionLineStyle = __MaterialUI.SvgIcon;
    export default ActionLineStyle;
}

declare module 'material-ui/svg-icons/action/lightbulb-outline' {
    export import ActionLightbulbOutline = __MaterialUI.SvgIcon;
    export default ActionLightbulbOutline;
}

declare module 'material-ui/svg-icons/action/report-problem' {
    export import ActionReportProblem = __MaterialUI.SvgIcon;
    export default ActionReportProblem;
}

declare module 'material-ui/svg-icons/action/swap-vert' {
    export import ActionSwapVert = __MaterialUI.SvgIcon;
    export default ActionSwapVert;
}

declare module 'material-ui/svg-icons/action/list' {
    export import ActionList = __MaterialUI.SvgIcon;
    export default ActionList;
}

declare module 'material-ui/svg-icons/action/settings-voice' {
    export import ActionSettingsVoice = __MaterialUI.SvgIcon;
    export default ActionSettingsVoice;
}

declare module 'material-ui/svg-icons/action/view-list' {
    export import ActionViewList = __MaterialUI.SvgIcon;
    export default ActionViewList;
}

declare module 'material-ui/svg-icons/action/pan-tool' {
    export import ActionPanTool = __MaterialUI.SvgIcon;
    export default ActionPanTool;
}

declare module 'material-ui/svg-icons/action/important-devices' {
    export import ActionImportantDevices = __MaterialUI.SvgIcon;
    export default ActionImportantDevices;
}

declare module 'material-ui/svg-icons/action/redeem' {
    export import ActionRedeem = __MaterialUI.SvgIcon;
    export default ActionRedeem;
}

declare module 'material-ui/svg-icons/action/flip-to-front' {
    export import ActionFlipToFront = __MaterialUI.SvgIcon;
    export default ActionFlipToFront;
}

declare module 'material-ui/svg-icons/action/android' {
    export import ActionAndroid = __MaterialUI.SvgIcon;
    export default ActionAndroid;
}

declare module 'material-ui/svg-icons/action/account-circle' {
    export import ActionAccountCircle = __MaterialUI.SvgIcon;
    export default ActionAccountCircle;
}

declare module 'material-ui/svg-icons/action/event-seat' {
    export import ActionEventSeat = __MaterialUI.SvgIcon;
    export default ActionEventSeat;
}

declare module 'material-ui/svg-icons/action/perm-contact-calendar' {
    export import ActionPermContactCalendar = __MaterialUI.SvgIcon;
    export default ActionPermContactCalendar;
}

declare module 'material-ui/svg-icons/action/perm-phone-msg' {
    export import ActionPermPhoneMsg = __MaterialUI.SvgIcon;
    export default ActionPermPhoneMsg;
}

declare module 'material-ui/svg-icons/action/delete' {
    export import ActionDelete = __MaterialUI.SvgIcon;
    export default ActionDelete;
}

declare module 'material-ui/svg-icons/action/card-membership' {
    export import ActionCardMembership = __MaterialUI.SvgIcon;
    export default ActionCardMembership;
}

declare module 'material-ui/svg-icons/action/hourglass-empty' {
    export import ActionHourglassEmpty = __MaterialUI.SvgIcon;
    export default ActionHourglassEmpty;
}

declare module 'material-ui/svg-icons/action/schedule' {
    export import ActionSchedule = __MaterialUI.SvgIcon;
    export default ActionSchedule;
}

declare module 'material-ui/svg-icons/action/trending-flat' {
    export import ActionTrendingFlat = __MaterialUI.SvgIcon;
    export default ActionTrendingFlat;
}

declare module 'material-ui/svg-icons/action/motorcycle' {
    export import ActionMotorcycle = __MaterialUI.SvgIcon;
    export default ActionMotorcycle;
}

declare module 'material-ui/svg-icons/action/view-column' {
    export import ActionViewColumn = __MaterialUI.SvgIcon;
    export default ActionViewColumn;
}

declare module 'material-ui/svg-icons/action/settings-cell' {
    export import ActionSettingsCell = __MaterialUI.SvgIcon;
    export default ActionSettingsCell;
}

declare module 'material-ui/svg-icons/action/credit-card' {
    export import ActionCreditCard = __MaterialUI.SvgIcon;
    export default ActionCreditCard;
}

declare module 'material-ui/svg-icons/action/view-module' {
    export import ActionViewModule = __MaterialUI.SvgIcon;
    export default ActionViewModule;
}

declare module 'material-ui/svg-icons/action/compare-arrows' {
    export import ActionCompareArrows = __MaterialUI.SvgIcon;
    export default ActionCompareArrows;
}

declare module 'material-ui/svg-icons/action/speaker-notes' {
    export import ActionSpeakerNotes = __MaterialUI.SvgIcon;
    export default ActionSpeakerNotes;
}

declare module 'material-ui/svg-icons/social/person' {
    export import SocialPerson = __MaterialUI.SvgIcon;
    export default SocialPerson;
}

declare module 'material-ui/svg-icons/social/notifications-none' {
    export import SocialNotificationsNone = __MaterialUI.SvgIcon;
    export default SocialNotificationsNone;
}

declare module 'material-ui/svg-icons/social/domain' {
    export import SocialDomain = __MaterialUI.SvgIcon;
    export default SocialDomain;
}

declare module 'material-ui/svg-icons/social/notifications-paused' {
    export import SocialNotificationsPaused = __MaterialUI.SvgIcon;
    export default SocialNotificationsPaused;
}

declare module 'material-ui/svg-icons/social/person-outline' {
    export import SocialPersonOutline = __MaterialUI.SvgIcon;
    export default SocialPersonOutline;
}

declare module 'material-ui/svg-icons/social/plus-one' {
    export import SocialPlusOne = __MaterialUI.SvgIcon;
    export default SocialPlusOne;
}

declare module 'material-ui/svg-icons/social/notifications-active' {
    export import SocialNotificationsActive = __MaterialUI.SvgIcon;
    export default SocialNotificationsActive;
}

declare module 'material-ui/svg-icons/social/share' {
    export import SocialShare = __MaterialUI.SvgIcon;
    export default SocialShare;
}

declare module 'material-ui/svg-icons/social/whatshot' {
    export import SocialWhatshot = __MaterialUI.SvgIcon;
    export default SocialWhatshot;
}

declare module 'material-ui/svg-icons/social/poll' {
    export import SocialPoll = __MaterialUI.SvgIcon;
    export default SocialPoll;
}

declare module 'material-ui/svg-icons/social/pages' {
    export import SocialPages = __MaterialUI.SvgIcon;
    export default SocialPages;
}

declare module 'material-ui/svg-icons/social/notifications-off' {
    export import SocialNotificationsOff = __MaterialUI.SvgIcon;
    export default SocialNotificationsOff;
}

declare module 'material-ui/svg-icons/social/notifications' {
    export import SocialNotifications = __MaterialUI.SvgIcon;
    export default SocialNotifications;
}

declare module 'material-ui/svg-icons/social/school' {
    export import SocialSchool = __MaterialUI.SvgIcon;
    export default SocialSchool;
}

declare module 'material-ui/svg-icons/social/cake' {
    export import SocialCake = __MaterialUI.SvgIcon;
    export default SocialCake;
}

declare module 'material-ui/svg-icons/social/people-outline' {
    export import SocialPeopleOutline = __MaterialUI.SvgIcon;
    export default SocialPeopleOutline;
}

declare module 'material-ui/svg-icons/social/location-city' {
    export import SocialLocationCity = __MaterialUI.SvgIcon;
    export default SocialLocationCity;
}

declare module 'material-ui/svg-icons/social/public' {
    export import SocialPublic = __MaterialUI.SvgIcon;
    export default SocialPublic;
}

declare module 'material-ui/svg-icons/social/mood-bad' {
    export import SocialMoodBad = __MaterialUI.SvgIcon;
    export default SocialMoodBad;
}

declare module 'material-ui/svg-icons/social/people' {
    export import SocialPeople = __MaterialUI.SvgIcon;
    export default SocialPeople;
}

declare module 'material-ui/svg-icons/social/mood' {
    export import SocialMood = __MaterialUI.SvgIcon;
    export default SocialMood;
}

declare module 'material-ui/svg-icons/social/party-mode' {
    export import SocialPartyMode = __MaterialUI.SvgIcon;
    export default SocialPartyMode;
}

declare module 'material-ui/svg-icons/social/group' {
    export import SocialGroup = __MaterialUI.SvgIcon;
    export default SocialGroup;
}

declare module 'material-ui/svg-icons/social/person-add' {
    export import SocialPersonAdd = __MaterialUI.SvgIcon;
    export default SocialPersonAdd;
}

declare module 'material-ui/svg-icons/social/group-add' {
    export import SocialGroupAdd = __MaterialUI.SvgIcon;
    export default SocialGroupAdd;
}

declare module 'material-ui/svg-icons/maps/edit-location' {
    export import MapsEditLocation = __MaterialUI.SvgIcon;
    export default MapsEditLocation;
}

declare module 'material-ui/svg-icons/maps/local-airport' {
    export import MapsLocalAirport = __MaterialUI.SvgIcon;
    export default MapsLocalAirport;
}

declare module 'material-ui/svg-icons/maps/local-phone' {
    export import MapsLocalPhone = __MaterialUI.SvgIcon;
    export default MapsLocalPhone;
}

declare module 'material-ui/svg-icons/maps/directions-car' {
    export import MapsDirectionsCar = __MaterialUI.SvgIcon;
    export default MapsDirectionsCar;
}

declare module 'material-ui/svg-icons/maps/local-drink' {
    export import MapsLocalDrink = __MaterialUI.SvgIcon;
    export default MapsLocalDrink;
}

declare module 'material-ui/svg-icons/maps/local-gas-station' {
    export import MapsLocalGasStation = __MaterialUI.SvgIcon;
    export default MapsLocalGasStation;
}

declare module 'material-ui/svg-icons/maps/store-mall-directory' {
    export import MapsStoreMallDirectory = __MaterialUI.SvgIcon;
    export default MapsStoreMallDirectory;
}

declare module 'material-ui/svg-icons/maps/add-location' {
    export import MapsAddLocation = __MaterialUI.SvgIcon;
    export default MapsAddLocation;
}

declare module 'material-ui/svg-icons/maps/local-laundry-service' {
    export import MapsLocalLaundryService = __MaterialUI.SvgIcon;
    export default MapsLocalLaundryService;
}

declare module 'material-ui/svg-icons/maps/local-hotel' {
    export import MapsLocalHotel = __MaterialUI.SvgIcon;
    export default MapsLocalHotel;
}

declare module 'material-ui/svg-icons/maps/local-pizza' {
    export import MapsLocalPizza = __MaterialUI.SvgIcon;
    export default MapsLocalPizza;
}

declare module 'material-ui/svg-icons/maps/person-pin-circle' {
    export import MapsPersonPinCircle = __MaterialUI.SvgIcon;
    export default MapsPersonPinCircle;
}

declare module 'material-ui/svg-icons/maps/terrain' {
    export import MapsTerrain = __MaterialUI.SvgIcon;
    export default MapsTerrain;
}

declare module 'material-ui/svg-icons/maps/directions-subway' {
    export import MapsDirectionsSubway = __MaterialUI.SvgIcon;
    export default MapsDirectionsSubway;
}

declare module 'material-ui/svg-icons/maps/local-bar' {
    export import MapsLocalBar = __MaterialUI.SvgIcon;
    export default MapsLocalBar;
}

declare module 'material-ui/svg-icons/maps/local-car-wash' {
    export import MapsLocalCarWash = __MaterialUI.SvgIcon;
    export default MapsLocalCarWash;
}

declare module 'material-ui/svg-icons/maps/restaurant-menu' {
    export import MapsRestaurantMenu = __MaterialUI.SvgIcon;
    export default MapsRestaurantMenu;
}

declare module 'material-ui/svg-icons/maps/near-me' {
    export import MapsNearMe = __MaterialUI.SvgIcon;
    export default MapsNearMe;
}

declare module 'material-ui/svg-icons/maps/directions' {
    export import MapsDirections = __MaterialUI.SvgIcon;
    export default MapsDirections;
}

declare module 'material-ui/svg-icons/maps/my-location' {
    export import MapsMyLocation = __MaterialUI.SvgIcon;
    export default MapsMyLocation;
}

declare module 'material-ui/svg-icons/maps/local-convenience-store' {
    export import MapsLocalConvenienceStore = __MaterialUI.SvgIcon;
    export default MapsLocalConvenienceStore;
}

declare module 'material-ui/svg-icons/maps/local-offer' {
    export import MapsLocalOffer = __MaterialUI.SvgIcon;
    export default MapsLocalOffer;
}

declare module 'material-ui/svg-icons/maps/local-florist' {
    export import MapsLocalFlorist = __MaterialUI.SvgIcon;
    export default MapsLocalFlorist;
}

declare module 'material-ui/svg-icons/maps/local-shipping' {
    export import MapsLocalShipping = __MaterialUI.SvgIcon;
    export default MapsLocalShipping;
}

declare module 'material-ui/svg-icons/maps/local-taxi' {
    export import MapsLocalTaxi = __MaterialUI.SvgIcon;
    export default MapsLocalTaxi;
}

declare module 'material-ui/svg-icons/maps/directions-walk' {
    export import MapsDirectionsWalk = __MaterialUI.SvgIcon;
    export default MapsDirectionsWalk;
}

declare module 'material-ui/svg-icons/maps/local-hospital' {
    export import MapsLocalHospital = __MaterialUI.SvgIcon;
    export default MapsLocalHospital;
}

declare module 'material-ui/svg-icons/maps/layers' {
    export import MapsLayers = __MaterialUI.SvgIcon;
    export default MapsLayers;
}

declare module 'material-ui/svg-icons/maps/directions-run' {
    export import MapsDirectionsRun = __MaterialUI.SvgIcon;
    export default MapsDirectionsRun;
}

declare module 'material-ui/svg-icons/maps/rate-review' {
    export import MapsRateReview = __MaterialUI.SvgIcon;
    export default MapsRateReview;
}

declare module 'material-ui/svg-icons/maps/local-dining' {
    export import MapsLocalDining = __MaterialUI.SvgIcon;
    export default MapsLocalDining;
}

declare module 'material-ui/svg-icons/maps/local-post-office' {
    export import MapsLocalPostOffice = __MaterialUI.SvgIcon;
    export default MapsLocalPostOffice;
}

declare module 'material-ui/svg-icons/maps/pin-drop' {
    export import MapsPinDrop = __MaterialUI.SvgIcon;
    export default MapsPinDrop;
}

declare module 'material-ui/svg-icons/maps/directions-boat' {
    export import MapsDirectionsBoat = __MaterialUI.SvgIcon;
    export default MapsDirectionsBoat;
}

declare module 'material-ui/svg-icons/maps/local-see' {
    export import MapsLocalSee = __MaterialUI.SvgIcon;
    export default MapsLocalSee;
}

declare module 'material-ui/svg-icons/maps/map' {
    export import MapsMap = __MaterialUI.SvgIcon;
    export default MapsMap;
}

declare module 'material-ui/svg-icons/maps/flight' {
    export import MapsFlight = __MaterialUI.SvgIcon;
    export default MapsFlight;
}

declare module 'material-ui/svg-icons/maps/person-pin' {
    export import MapsPersonPin = __MaterialUI.SvgIcon;
    export default MapsPersonPin;
}

declare module 'material-ui/svg-icons/maps/satellite' {
    export import MapsSatellite = __MaterialUI.SvgIcon;
    export default MapsSatellite;
}

declare module 'material-ui/svg-icons/maps/local-printshop' {
    export import MapsLocalPrintshop = __MaterialUI.SvgIcon;
    export default MapsLocalPrintshop;
}

declare module 'material-ui/svg-icons/maps/navigation' {
    export import MapsNavigation = __MaterialUI.SvgIcon;
    export default MapsNavigation;
}

declare module 'material-ui/svg-icons/maps/directions-railway' {
    export import MapsDirectionsRailway = __MaterialUI.SvgIcon;
    export default MapsDirectionsRailway;
}

declare module 'material-ui/svg-icons/maps/local-atm' {
    export import MapsLocalAtm = __MaterialUI.SvgIcon;
    export default MapsLocalAtm;
}

declare module 'material-ui/svg-icons/maps/directions-transit' {
    export import MapsDirectionsTransit = __MaterialUI.SvgIcon;
    export default MapsDirectionsTransit;
}

declare module 'material-ui/svg-icons/maps/local-parking' {
    export import MapsLocalParking = __MaterialUI.SvgIcon;
    export default MapsLocalParking;
}

declare module 'material-ui/svg-icons/maps/local-cafe' {
    export import MapsLocalCafe = __MaterialUI.SvgIcon;
    export default MapsLocalCafe;
}

declare module 'material-ui/svg-icons/maps/local-mall' {
    export import MapsLocalMall = __MaterialUI.SvgIcon;
    export default MapsLocalMall;
}

declare module 'material-ui/svg-icons/maps/zoom-out-map' {
    export import MapsZoomOutMap = __MaterialUI.SvgIcon;
    export default MapsZoomOutMap;
}

declare module 'material-ui/svg-icons/maps/local-activity' {
    export import MapsLocalActivity = __MaterialUI.SvgIcon;
    export default MapsLocalActivity;
}

declare module 'material-ui/svg-icons/maps/local-grocery-store' {
    export import MapsLocalGroceryStore = __MaterialUI.SvgIcon;
    export default MapsLocalGroceryStore;
}

declare module 'material-ui/svg-icons/maps/local-pharmacy' {
    export import MapsLocalPharmacy = __MaterialUI.SvgIcon;
    export default MapsLocalPharmacy;
}

declare module 'material-ui/svg-icons/maps/local-movies' {
    export import MapsLocalMovies = __MaterialUI.SvgIcon;
    export default MapsLocalMovies;
}

declare module 'material-ui/svg-icons/maps/place' {
    export import MapsPlace = __MaterialUI.SvgIcon;
    export default MapsPlace;
}

declare module 'material-ui/svg-icons/maps/layers-clear' {
    export import MapsLayersClear = __MaterialUI.SvgIcon;
    export default MapsLayersClear;
}

declare module 'material-ui/svg-icons/maps/hotel' {
    export import MapsHotel = __MaterialUI.SvgIcon;
    export default MapsHotel;
}

declare module 'material-ui/svg-icons/maps/directions-bike' {
    export import MapsDirectionsBike = __MaterialUI.SvgIcon;
    export default MapsDirectionsBike;
}

declare module 'material-ui/svg-icons/maps/local-library' {
    export import MapsLocalLibrary = __MaterialUI.SvgIcon;
    export default MapsLocalLibrary;
}

declare module 'material-ui/svg-icons/maps/local-play' {
    export import MapsLocalPlay = __MaterialUI.SvgIcon;
    export default MapsLocalPlay;
}

declare module 'material-ui/svg-icons/maps/directions-bus' {
    export import MapsDirectionsBus = __MaterialUI.SvgIcon;
    export default MapsDirectionsBus;
}

declare module 'material-ui/svg-icons/maps/traffic' {
    export import MapsTraffic = __MaterialUI.SvgIcon;
    export default MapsTraffic;
}

declare module 'material-ui/svg-icons/maps/beenhere' {
    export import MapsBeenhere = __MaterialUI.SvgIcon;
    export default MapsBeenhere;
}

declare module 'material-ui/svg-icons/communication/call-received' {
    export import CommunicationCallReceived = __MaterialUI.SvgIcon;
    export default CommunicationCallReceived;
}

declare module 'material-ui/svg-icons/communication/dialpad' {
    export import CommunicationDialpad = __MaterialUI.SvgIcon;
    export default CommunicationDialpad;
}

declare module 'material-ui/svg-icons/communication/forum' {
    export import CommunicationForum = __MaterialUI.SvgIcon;
    export default CommunicationForum;
}

declare module 'material-ui/svg-icons/communication/no-sim' {
    export import CommunicationNoSim = __MaterialUI.SvgIcon;
    export default CommunicationNoSim;
}

declare module 'material-ui/svg-icons/communication/chat' {
    export import CommunicationChat = __MaterialUI.SvgIcon;
    export default CommunicationChat;
}

declare module 'material-ui/svg-icons/communication/stay-primary-landscape' {
    export import CommunicationStayPrimaryLandscape = __MaterialUI.SvgIcon;
    export default CommunicationStayPrimaryLandscape;
}

declare module 'material-ui/svg-icons/communication/phonelink-setup' {
    export import CommunicationPhonelinkSetup = __MaterialUI.SvgIcon;
    export default CommunicationPhonelinkSetup;
}

declare module 'material-ui/svg-icons/communication/ring-volume' {
    export import CommunicationRingVolume = __MaterialUI.SvgIcon;
    export default CommunicationRingVolume;
}

declare module 'material-ui/svg-icons/communication/phonelink-lock' {
    export import CommunicationPhonelinkLock = __MaterialUI.SvgIcon;
    export default CommunicationPhonelinkLock;
}

declare module 'material-ui/svg-icons/communication/contacts' {
    export import CommunicationContacts = __MaterialUI.SvgIcon;
    export default CommunicationContacts;
}

declare module 'material-ui/svg-icons/communication/call-missed' {
    export import CommunicationCallMissed = __MaterialUI.SvgIcon;
    export default CommunicationCallMissed;
}

declare module 'material-ui/svg-icons/communication/contact-mail' {
    export import CommunicationContactMail = __MaterialUI.SvgIcon;
    export default CommunicationContactMail;
}

declare module 'material-ui/svg-icons/communication/portable-wifi-off' {
    export import CommunicationPortableWifiOff = __MaterialUI.SvgIcon;
    export default CommunicationPortableWifiOff;
}

declare module 'material-ui/svg-icons/communication/call-merge' {
    export import CommunicationCallMerge = __MaterialUI.SvgIcon;
    export default CommunicationCallMerge;
}

declare module 'material-ui/svg-icons/communication/tact-mail' {
    export import CommunicationTactMail = __MaterialUI.SvgIcon;
    export default CommunicationTactMail;
}

declare module 'material-ui/svg-icons/communication/stop-screen-share' {
    export import CommunicationStopScreenShare = __MaterialUI.SvgIcon;
    export default CommunicationStopScreenShare;
}

declare module 'material-ui/svg-icons/communication/vpn-key' {
    export import CommunicationVpnKey = __MaterialUI.SvgIcon;
    export default CommunicationVpnKey;
}

declare module 'material-ui/svg-icons/communication/swap-calls' {
    export import CommunicationSwapCalls = __MaterialUI.SvgIcon;
    export default CommunicationSwapCalls;
}

declare module 'material-ui/svg-icons/communication/dialer-sip' {
    export import CommunicationDialerSip = __MaterialUI.SvgIcon;
    export default CommunicationDialerSip;
}

declare module 'material-ui/svg-icons/communication/business' {
    export import CommunicationBusiness = __MaterialUI.SvgIcon;
    export default CommunicationBusiness;
}

declare module 'material-ui/svg-icons/communication/phonelink-erase' {
    export import CommunicationPhonelinkErase = __MaterialUI.SvgIcon;
    export default CommunicationPhonelinkErase;
}

declare module 'material-ui/svg-icons/communication/call' {
    export import CommunicationCall = __MaterialUI.SvgIcon;
    export default CommunicationCall;
}

declare module 'material-ui/svg-icons/communication/screen-share' {
    export import CommunicationScreenShare = __MaterialUI.SvgIcon;
    export default CommunicationScreenShare;
}

declare module 'material-ui/svg-icons/communication/clear-all' {
    export import CommunicationClearAll = __MaterialUI.SvgIcon;
    export default CommunicationClearAll;
}

declare module 'material-ui/svg-icons/communication/chat-bubble-outline' {
    export import CommunicationChatBubbleOutline = __MaterialUI.SvgIcon;
    export default CommunicationChatBubbleOutline;
}

declare module 'material-ui/svg-icons/communication/call-missed-outgoing' {
    export import CommunicationCallMissedOutgoing = __MaterialUI.SvgIcon;
    export default CommunicationCallMissedOutgoing;
}

declare module 'material-ui/svg-icons/communication/stay-primary-portrait' {
    export import CommunicationStayPrimaryPortrait = __MaterialUI.SvgIcon;
    export default CommunicationStayPrimaryPortrait;
}

declare module 'material-ui/svg-icons/communication/stay-current-portrait' {
    export import CommunicationStayCurrentPortrait = __MaterialUI.SvgIcon;
    export default CommunicationStayCurrentPortrait;
}

declare module 'material-ui/svg-icons/communication/voicemail' {
    export import CommunicationVoicemail = __MaterialUI.SvgIcon;
    export default CommunicationVoicemail;
}

declare module 'material-ui/svg-icons/communication/speaker-phone' {
    export import CommunicationSpeakerPhone = __MaterialUI.SvgIcon;
    export default CommunicationSpeakerPhone;
}

declare module 'material-ui/svg-icons/communication/call-split' {
    export import CommunicationCallSplit = __MaterialUI.SvgIcon;
    export default CommunicationCallSplit;
}

declare module 'material-ui/svg-icons/communication/live-help' {
    export import CommunicationLiveHelp = __MaterialUI.SvgIcon;
    export default CommunicationLiveHelp;
}

declare module 'material-ui/svg-icons/communication/call-made' {
    export import CommunicationCallMade = __MaterialUI.SvgIcon;
    export default CommunicationCallMade;
}

declare module 'material-ui/svg-icons/communication/phone' {
    export import CommunicationPhone = __MaterialUI.SvgIcon;
    export default CommunicationPhone;
}

declare module 'material-ui/svg-icons/communication/textsms' {
    export import CommunicationTextsms = __MaterialUI.SvgIcon;
    export default CommunicationTextsms;
}

declare module 'material-ui/svg-icons/communication/message' {
    export import CommunicationMessage = __MaterialUI.SvgIcon;
    export default CommunicationMessage;
}

declare module 'material-ui/svg-icons/communication/import-export' {
    export import CommunicationImportExport = __MaterialUI.SvgIcon;
    export default CommunicationImportExport;
}

declare module 'material-ui/svg-icons/communication/import-contacts' {
    export import CommunicationImportContacts = __MaterialUI.SvgIcon;
    export default CommunicationImportContacts;
}

declare module 'material-ui/svg-icons/communication/phonelink-ring' {
    export import CommunicationPhonelinkRing = __MaterialUI.SvgIcon;
    export default CommunicationPhonelinkRing;
}

declare module 'material-ui/svg-icons/communication/present-to-all' {
    export import CommunicationPresentToAll = __MaterialUI.SvgIcon;
    export default CommunicationPresentToAll;
}

declare module 'material-ui/svg-icons/communication/contact-phone' {
    export import CommunicationContactPhone = __MaterialUI.SvgIcon;
    export default CommunicationContactPhone;
}

declare module 'material-ui/svg-icons/communication/invert-colors-off' {
    export import CommunicationInvertColorsOff = __MaterialUI.SvgIcon;
    export default CommunicationInvertColorsOff;
}

declare module 'material-ui/svg-icons/communication/comment' {
    export import CommunicationComment = __MaterialUI.SvgIcon;
    export default CommunicationComment;
}

declare module 'material-ui/svg-icons/communication/chat-bubble' {
    export import CommunicationChatBubble = __MaterialUI.SvgIcon;
    export default CommunicationChatBubble;
}

declare module 'material-ui/svg-icons/communication/mail-outline' {
    export import CommunicationMailOutline = __MaterialUI.SvgIcon;
    export default CommunicationMailOutline;
}

declare module 'material-ui/svg-icons/communication/location-on' {
    export import CommunicationLocationOn = __MaterialUI.SvgIcon;
    export default CommunicationLocationOn;
}

declare module 'material-ui/svg-icons/communication/stay-current-landscape' {
    export import CommunicationStayCurrentLandscape = __MaterialUI.SvgIcon;
    export default CommunicationStayCurrentLandscape;
}

declare module 'material-ui/svg-icons/communication/location-off' {
    export import CommunicationLocationOff = __MaterialUI.SvgIcon;
    export default CommunicationLocationOff;
}

declare module 'material-ui/svg-icons/communication/email' {
    export import CommunicationEmail = __MaterialUI.SvgIcon;
    export default CommunicationEmail;
}

declare module 'material-ui/svg-icons/communication/call-end' {
    export import CommunicationCallEnd = __MaterialUI.SvgIcon;
    export default CommunicationCallEnd;
}

declare module 'material-ui/svg-icons/toggle/check-box' {
    export import ToggleCheckBox = __MaterialUI.SvgIcon;
    export default ToggleCheckBox;
}

declare module 'material-ui/svg-icons/toggle/star-half' {
    export import ToggleStarHalf = __MaterialUI.SvgIcon;
    export default ToggleStarHalf;
}

declare module 'material-ui/svg-icons/toggle/check-box-outline-blank' {
    export import ToggleCheckBoxOutlineBlank = __MaterialUI.SvgIcon;
    export default ToggleCheckBoxOutlineBlank;
}

declare module 'material-ui/svg-icons/toggle/star' {
    export import ToggleStar = __MaterialUI.SvgIcon;
    export default ToggleStar;
}

declare module 'material-ui/svg-icons/toggle/star-border' {
    export import ToggleStarBorder = __MaterialUI.SvgIcon;
    export default ToggleStarBorder;
}

declare module 'material-ui/svg-icons/toggle/radio-button-unchecked' {
    export import ToggleRadioButtonUnchecked = __MaterialUI.SvgIcon;
    export default ToggleRadioButtonUnchecked;
}

declare module 'material-ui/svg-icons/toggle/indeterminate-check-box' {
    export import ToggleIndeterminateCheckBox = __MaterialUI.SvgIcon;
    export default ToggleIndeterminateCheckBox;
}

declare module 'material-ui/svg-icons/toggle/radio-button-checked' {
    export import ToggleRadioButtonChecked = __MaterialUI.SvgIcon;
    export default ToggleRadioButtonChecked;
}

declare module 'material-ui/svg-icons/index' {
    export import Index = __MaterialUI.SvgIcon;
    export default Index;
}

declare module 'material-ui/svg-icons/index-generator' {
    export import IndexGenerator = __MaterialUI.SvgIcon;
    export default IndexGenerator;
}

declare module 'material-ui/svg-icons/alert/warning' {
    export import AlertWarning = __MaterialUI.SvgIcon;
    export default AlertWarning;
}

declare module 'material-ui/svg-icons/alert/add-alert' {
    export import AlertAddAlert = __MaterialUI.SvgIcon;
    export default AlertAddAlert;
}

declare module 'material-ui/svg-icons/alert/error-outline' {
    export import AlertErrorOutline = __MaterialUI.SvgIcon;
    export default AlertErrorOutline;
}

declare module 'material-ui/svg-icons/alert/error' {
    export import AlertError = __MaterialUI.SvgIcon;
    export default AlertError;
}

declare module 'material-ui/svg-icons/file/file-upload' {
    export import FileFileUpload = __MaterialUI.SvgIcon;
    export default FileFileUpload;
}

declare module 'material-ui/svg-icons/file/cloud-upload' {
    export import FileCloudUpload = __MaterialUI.SvgIcon;
    export default FileCloudUpload;
}

declare module 'material-ui/svg-icons/file/cloud-done' {
    export import FileCloudDone = __MaterialUI.SvgIcon;
    export default FileCloudDone;
}

declare module 'material-ui/svg-icons/file/folder-open' {
    export import FileFolderOpen = __MaterialUI.SvgIcon;
    export default FileFolderOpen;
}

declare module 'material-ui/svg-icons/file/cloud-off' {
    export import FileCloudOff = __MaterialUI.SvgIcon;
    export default FileCloudOff;
}

declare module 'material-ui/svg-icons/file/cloud-queue' {
    export import FileCloudQueue = __MaterialUI.SvgIcon;
    export default FileCloudQueue;
}

declare module 'material-ui/svg-icons/file/folder-shared' {
    export import FileFolderShared = __MaterialUI.SvgIcon;
    export default FileFolderShared;
}

declare module 'material-ui/svg-icons/file/cloud-circle' {
    export import FileCloudCircle = __MaterialUI.SvgIcon;
    export default FileCloudCircle;
}

declare module 'material-ui/svg-icons/file/folder' {
    export import FileFolder = __MaterialUI.SvgIcon;
    export default FileFolder;
}

declare module 'material-ui/svg-icons/file/attachment' {
    export import FileAttachment = __MaterialUI.SvgIcon;
    export default FileAttachment;
}

declare module 'material-ui/svg-icons/file/create-new-folder' {
    export import FileCreateNewFolder = __MaterialUI.SvgIcon;
    export default FileCreateNewFolder;
}

declare module 'material-ui/svg-icons/file/cloud-download' {
    export import FileCloudDownload = __MaterialUI.SvgIcon;
    export default FileCloudDownload;
}

declare module 'material-ui/svg-icons/file/cloud' {
    export import FileCloud = __MaterialUI.SvgIcon;
    export default FileCloud;
}

declare module 'material-ui/svg-icons/file/file-download' {
    export import FileFileDownload = __MaterialUI.SvgIcon;
    export default FileFileDownload;
}

declare module 'material-ui/svg-icons/navigation-arrow-drop-right' {
    export import NavigationArrowDropRight = __MaterialUI.SvgIcon;
    export default NavigationArrowDropRight;
}

declare module 'material-ui/svg-icons/hardware/keyboard' {
    export import HardwareKeyboard = __MaterialUI.SvgIcon;
    export default HardwareKeyboard;
}

declare module 'material-ui/svg-icons/hardware/toys' {
    export import HardwareToys = __MaterialUI.SvgIcon;
    export default HardwareToys;
}

declare module 'material-ui/svg-icons/hardware/dock' {
    export import HardwareDock = __MaterialUI.SvgIcon;
    export default HardwareDock;
}

declare module 'material-ui/svg-icons/hardware/headset' {
    export import HardwareHeadset = __MaterialUI.SvgIcon;
    export default HardwareHeadset;
}

declare module 'material-ui/svg-icons/hardware/keyboard-voice' {
    export import HardwareKeyboardVoice = __MaterialUI.SvgIcon;
    export default HardwareKeyboardVoice;
}

declare module 'material-ui/svg-icons/hardware/phonelink-off' {
    export import HardwarePhonelinkOff = __MaterialUI.SvgIcon;
    export default HardwarePhonelinkOff;
}

declare module 'material-ui/svg-icons/hardware/speaker-group' {
    export import HardwareSpeakerGroup = __MaterialUI.SvgIcon;
    export default HardwareSpeakerGroup;
}

declare module 'material-ui/svg-icons/hardware/desktop-windows' {
    export import HardwareDesktopWindows = __MaterialUI.SvgIcon;
    export default HardwareDesktopWindows;
}

declare module 'material-ui/svg-icons/hardware/laptop-mac' {
    export import HardwareLaptopMac = __MaterialUI.SvgIcon;
    export default HardwareLaptopMac;
}

declare module 'material-ui/svg-icons/hardware/keyboard-return' {
    export import HardwareKeyboardReturn = __MaterialUI.SvgIcon;
    export default HardwareKeyboardReturn;
}

declare module 'material-ui/svg-icons/hardware/gamepad' {
    export import HardwareGamepad = __MaterialUI.SvgIcon;
    export default HardwareGamepad;
}

declare module 'material-ui/svg-icons/hardware/keyboard-arrow-up' {
    export import HardwareKeyboardArrowUp = __MaterialUI.SvgIcon;
    export default HardwareKeyboardArrowUp;
}

declare module 'material-ui/svg-icons/hardware/laptop' {
    export import HardwareLaptop = __MaterialUI.SvgIcon;
    export default HardwareLaptop;
}

declare module 'material-ui/svg-icons/hardware/phone-iphone' {
    export import HardwarePhoneIphone = __MaterialUI.SvgIcon;
    export default HardwarePhoneIphone;
}

declare module 'material-ui/svg-icons/hardware/memory' {
    export import HardwareMemory = __MaterialUI.SvgIcon;
    export default HardwareMemory;
}

declare module 'material-ui/svg-icons/hardware/security' {
    export import HardwareSecurity = __MaterialUI.SvgIcon;
    export default HardwareSecurity;
}

declare module 'material-ui/svg-icons/hardware/keyboard-capslock' {
    export import HardwareKeyboardCapslock = __MaterialUI.SvgIcon;
    export default HardwareKeyboardCapslock;
}

declare module 'material-ui/svg-icons/hardware/sim-card' {
    export import HardwareSimCard = __MaterialUI.SvgIcon;
    export default HardwareSimCard;
}

declare module 'material-ui/svg-icons/hardware/devices-other' {
    export import HardwareDevicesOther = __MaterialUI.SvgIcon;
    export default HardwareDevicesOther;
}

declare module 'material-ui/svg-icons/hardware/tablet-android' {
    export import HardwareTabletAndroid = __MaterialUI.SvgIcon;
    export default HardwareTabletAndroid;
}

declare module 'material-ui/svg-icons/hardware/keyboard-arrow-right' {
    export import HardwareKeyboardArrowRight = __MaterialUI.SvgIcon;
    export default HardwareKeyboardArrowRight;
}

declare module 'material-ui/svg-icons/hardware/keyboard-tab' {
    export import HardwareKeyboardTab = __MaterialUI.SvgIcon;
    export default HardwareKeyboardTab;
}

declare module 'material-ui/svg-icons/hardware/watch' {
    export import HardwareWatch = __MaterialUI.SvgIcon;
    export default HardwareWatch;
}

declare module 'material-ui/svg-icons/hardware/speaker' {
    export import HardwareSpeaker = __MaterialUI.SvgIcon;
    export default HardwareSpeaker;
}

declare module 'material-ui/svg-icons/hardware/phonelink' {
    export import HardwarePhonelink = __MaterialUI.SvgIcon;
    export default HardwarePhonelink;
}

declare module 'material-ui/svg-icons/hardware/laptop-windows' {
    export import HardwareLaptopWindows = __MaterialUI.SvgIcon;
    export default HardwareLaptopWindows;
}

declare module 'material-ui/svg-icons/hardware/tv' {
    export import HardwareTv = __MaterialUI.SvgIcon;
    export default HardwareTv;
}

declare module 'material-ui/svg-icons/hardware/headset-mic' {
    export import HardwareHeadsetMic = __MaterialUI.SvgIcon;
    export default HardwareHeadsetMic;
}

declare module 'material-ui/svg-icons/hardware/videogame-asset' {
    export import HardwareVideogameAsset = __MaterialUI.SvgIcon;
    export default HardwareVideogameAsset;
}

declare module 'material-ui/svg-icons/hardware/keyboard-arrow-down' {
    export import HardwareKeyboardArrowDown = __MaterialUI.SvgIcon;
    export default HardwareKeyboardArrowDown;
}

declare module 'material-ui/svg-icons/hardware/keyboard-hide' {
    export import HardwareKeyboardHide = __MaterialUI.SvgIcon;
    export default HardwareKeyboardHide;
}

declare module 'material-ui/svg-icons/hardware/scanner' {
    export import HardwareScanner = __MaterialUI.SvgIcon;
    export default HardwareScanner;
}

declare module 'material-ui/svg-icons/hardware/laptop-chromebook' {
    export import HardwareLaptopChromebook = __MaterialUI.SvgIcon;
    export default HardwareLaptopChromebook;
}

declare module 'material-ui/svg-icons/hardware/tablet-mac' {
    export import HardwareTabletMac = __MaterialUI.SvgIcon;
    export default HardwareTabletMac;
}

declare module 'material-ui/svg-icons/hardware/cast' {
    export import HardwareCast = __MaterialUI.SvgIcon;
    export default HardwareCast;
}

declare module 'material-ui/svg-icons/hardware/cast-connected' {
    export import HardwareCastConnected = __MaterialUI.SvgIcon;
    export default HardwareCastConnected;
}

declare module 'material-ui/svg-icons/hardware/keyboard-arrow-left' {
    export import HardwareKeyboardArrowLeft = __MaterialUI.SvgIcon;
    export default HardwareKeyboardArrowLeft;
}

declare module 'material-ui/svg-icons/hardware/phone-android' {
    export import HardwarePhoneAndroid = __MaterialUI.SvgIcon;
    export default HardwarePhoneAndroid;
}

declare module 'material-ui/svg-icons/hardware/computer' {
    export import HardwareComputer = __MaterialUI.SvgIcon;
    export default HardwareComputer;
}

declare module 'material-ui/svg-icons/hardware/power-input' {
    export import HardwarePowerInput = __MaterialUI.SvgIcon;
    export default HardwarePowerInput;
}

declare module 'material-ui/svg-icons/hardware/smartphone' {
    export import HardwareSmartphone = __MaterialUI.SvgIcon;
    export default HardwareSmartphone;
}

declare module 'material-ui/svg-icons/hardware/router' {
    export import HardwareRouter = __MaterialUI.SvgIcon;
    export default HardwareRouter;
}

declare module 'material-ui/svg-icons/hardware/keyboard-backspace' {
    export import HardwareKeyboardBackspace = __MaterialUI.SvgIcon;
    export default HardwareKeyboardBackspace;
}

declare module 'material-ui/svg-icons/hardware/developer-board' {
    export import HardwareDeveloperBoard = __MaterialUI.SvgIcon;
    export default HardwareDeveloperBoard;
}

declare module 'material-ui/svg-icons/hardware/device-hub' {
    export import HardwareDeviceHub = __MaterialUI.SvgIcon;
    export default HardwareDeviceHub;
}

declare module 'material-ui/svg-icons/hardware/mouse' {
    export import HardwareMouse = __MaterialUI.SvgIcon;
    export default HardwareMouse;
}

declare module 'material-ui/svg-icons/hardware/desktop-mac' {
    export import HardwareDesktopMac = __MaterialUI.SvgIcon;
    export default HardwareDesktopMac;
}

declare module 'material-ui/svg-icons/hardware/tablet' {
    export import HardwareTablet = __MaterialUI.SvgIcon;
    export default HardwareTablet;
}

declare module 'material-ui/svg-icons/content/add-box' {
    export import ContentAddBox = __MaterialUI.SvgIcon;
    export default ContentAddBox;
}

declare module 'material-ui/svg-icons/content/filter-list' {
    export import ContentFilterList = __MaterialUI.SvgIcon;
    export default ContentFilterList;
}

declare module 'material-ui/svg-icons/content/save' {
    export import ContentSave = __MaterialUI.SvgIcon;
    export default ContentSave;
}

declare module 'material-ui/svg-icons/content/unarchive' {
    export import ContentUnarchive = __MaterialUI.SvgIcon;
    export default ContentUnarchive;
}

declare module 'material-ui/svg-icons/content/link' {
    export import ContentLink = __MaterialUI.SvgIcon;
    export default ContentLink;
}

declare module 'material-ui/svg-icons/content/sort' {
    export import ContentSort = __MaterialUI.SvgIcon;
    export default ContentSort;
}

declare module 'material-ui/svg-icons/content/text-format' {
    export import ContentTextFormat = __MaterialUI.SvgIcon;
    export default ContentTextFormat;
}

declare module 'material-ui/svg-icons/content/add' {
    export import ContentAdd = __MaterialUI.SvgIcon;
    export default ContentAdd;
}

declare module 'material-ui/svg-icons/content/send' {
    export import ContentSend = __MaterialUI.SvgIcon;
    export default ContentSend;
}

declare module 'material-ui/svg-icons/content/gesture' {
    export import ContentGesture = __MaterialUI.SvgIcon;
    export default ContentGesture;
}

declare module 'material-ui/svg-icons/content/archive' {
    export import ContentArchive = __MaterialUI.SvgIcon;
    export default ContentArchive;
}

declare module 'material-ui/svg-icons/content/weekend' {
    export import ContentWeekend = __MaterialUI.SvgIcon;
    export default ContentWeekend;
}

declare module 'material-ui/svg-icons/content/markunread' {
    export import ContentMarkunread = __MaterialUI.SvgIcon;
    export default ContentMarkunread;
}

declare module 'material-ui/svg-icons/content/create' {
    export import ContentCreate = __MaterialUI.SvgIcon;
    export default ContentCreate;
}

declare module 'material-ui/svg-icons/content/content-cut' {
    export import ContentContentCut = __MaterialUI.SvgIcon;
    export default ContentContentCut;
}

declare module 'material-ui/svg-icons/content/clear' {
    export import ContentClear = __MaterialUI.SvgIcon;
    export default ContentClear;
}

declare module 'material-ui/svg-icons/content/redo' {
    export import ContentRedo = __MaterialUI.SvgIcon;
    export default ContentRedo;
}

declare module 'material-ui/svg-icons/content/block' {
    export import ContentBlock = __MaterialUI.SvgIcon;
    export default ContentBlock;
}

declare module 'material-ui/svg-icons/content/forward' {
    export import ContentForward = __MaterialUI.SvgIcon;
    export default ContentForward;
}

declare module 'material-ui/svg-icons/content/mail' {
    export import ContentMail = __MaterialUI.SvgIcon;
    export default ContentMail;
}

declare module 'material-ui/svg-icons/content/inbox' {
    export import ContentInbox = __MaterialUI.SvgIcon;
    export default ContentInbox;
}

declare module 'material-ui/svg-icons/content/remove-circle' {
    export import ContentRemoveCircle = __MaterialUI.SvgIcon;
    export default ContentRemoveCircle;
}

declare module 'material-ui/svg-icons/content/move-to-inbox' {
    export import ContentMoveToInbox = __MaterialUI.SvgIcon;
    export default ContentMoveToInbox;
}

declare module 'material-ui/svg-icons/content/flag' {
    export import ContentFlag = __MaterialUI.SvgIcon;
    export default ContentFlag;
}

declare module 'material-ui/svg-icons/content/reply-all' {
    export import ContentReplyAll = __MaterialUI.SvgIcon;
    export default ContentReplyAll;
}

declare module 'material-ui/svg-icons/content/remove' {
    export import ContentRemove = __MaterialUI.SvgIcon;
    export default ContentRemove;
}

declare module 'material-ui/svg-icons/content/next-week' {
    export import ContentNextWeek = __MaterialUI.SvgIcon;
    export default ContentNextWeek;
}

declare module 'material-ui/svg-icons/content/undo' {
    export import ContentUndo = __MaterialUI.SvgIcon;
    export default ContentUndo;
}

declare module 'material-ui/svg-icons/content/font-download' {
    export import ContentFontDownload = __MaterialUI.SvgIcon;
    export default ContentFontDownload;
}

declare module 'material-ui/svg-icons/content/remove-circle-outline' {
    export import ContentRemoveCircleOutline = __MaterialUI.SvgIcon;
    export default ContentRemoveCircleOutline;
}

declare module 'material-ui/svg-icons/content/backspace' {
    export import ContentBackspace = __MaterialUI.SvgIcon;
    export default ContentBackspace;
}

declare module 'material-ui/svg-icons/content/reply' {
    export import ContentReply = __MaterialUI.SvgIcon;
    export default ContentReply;
}

declare module 'material-ui/svg-icons/content/report' {
    export import ContentReport = __MaterialUI.SvgIcon;
    export default ContentReport;
}

declare module 'material-ui/svg-icons/content/add-circle' {
    export import ContentAddCircle = __MaterialUI.SvgIcon;
    export default ContentAddCircle;
}

declare module 'material-ui/svg-icons/content/content-copy' {
    export import ContentContentCopy = __MaterialUI.SvgIcon;
    export default ContentContentCopy;
}

declare module 'material-ui/svg-icons/content/content-paste' {
    export import ContentContentPaste = __MaterialUI.SvgIcon;
    export default ContentContentPaste;
}

declare module 'material-ui/svg-icons/content/select-all' {
    export import ContentSelectAll = __MaterialUI.SvgIcon;
    export default ContentSelectAll;
}

declare module 'material-ui/svg-icons/content/add-circle-outline' {
    export import ContentAddCircleOutline = __MaterialUI.SvgIcon;
    export default ContentAddCircleOutline;
}

declare module 'material-ui/svg-icons/content/drafts' {
    export import ContentDrafts = __MaterialUI.SvgIcon;
    export default ContentDrafts;
}

declare module 'material-ui/svg-icons/editor/wrap-text' {
    export import EditorWrapText = __MaterialUI.SvgIcon;
    export default EditorWrapText;
}

declare module 'material-ui/svg-icons/editor/format-size' {
    export import EditorFormatSize = __MaterialUI.SvgIcon;
    export default EditorFormatSize;
}

declare module 'material-ui/svg-icons/editor/functions' {
    export import EditorFunctions = __MaterialUI.SvgIcon;
    export default EditorFunctions;
}

declare module 'material-ui/svg-icons/editor/format-bold' {
    export import EditorFormatBold = __MaterialUI.SvgIcon;
    export default EditorFormatBold;
}

declare module 'material-ui/svg-icons/editor/format-align-center' {
    export import EditorFormatAlignCenter = __MaterialUI.SvgIcon;
    export default EditorFormatAlignCenter;
}

declare module 'material-ui/svg-icons/editor/mode-comment' {
    export import EditorModeComment = __MaterialUI.SvgIcon;
    export default EditorModeComment;
}

declare module 'material-ui/svg-icons/editor/money-off' {
    export import EditorMoneyOff = __MaterialUI.SvgIcon;
    export default EditorMoneyOff;
}

declare module 'material-ui/svg-icons/editor/format-textdirection-r-to-l' {
    export import EditorFormatTextdirectionRToL = __MaterialUI.SvgIcon;
    export default EditorFormatTextdirectionRToL;
}

declare module 'material-ui/svg-icons/editor/insert-drive-file' {
    export import EditorInsertDriveFile = __MaterialUI.SvgIcon;
    export default EditorInsertDriveFile;
}

declare module 'material-ui/svg-icons/editor/highlight' {
    export import EditorHighlight = __MaterialUI.SvgIcon;
    export default EditorHighlight;
}

declare module 'material-ui/svg-icons/editor/format-clear' {
    export import EditorFormatClear = __MaterialUI.SvgIcon;
    export default EditorFormatClear;
}

declare module 'material-ui/svg-icons/editor/border-style' {
    export import EditorBorderStyle = __MaterialUI.SvgIcon;
    export default EditorBorderStyle;
}

declare module 'material-ui/svg-icons/editor/format-shapes' {
    export import EditorFormatShapes = __MaterialUI.SvgIcon;
    export default EditorFormatShapes;
}

declare module 'material-ui/svg-icons/editor/format-paint' {
    export import EditorFormatPaint = __MaterialUI.SvgIcon;
    export default EditorFormatPaint;
}

declare module 'material-ui/svg-icons/editor/linear-scale' {
    export import EditorLinearScale = __MaterialUI.SvgIcon;
    export default EditorLinearScale;
}

declare module 'material-ui/svg-icons/editor/insert-photo' {
    export import EditorInsertPhoto = __MaterialUI.SvgIcon;
    export default EditorInsertPhoto;
}

declare module 'material-ui/svg-icons/editor/drag-handle' {
    export import EditorDragHandle = __MaterialUI.SvgIcon;
    export default EditorDragHandle;
}

declare module 'material-ui/svg-icons/editor/merge-type' {
    export import EditorMergeType = __MaterialUI.SvgIcon;
    export default EditorMergeType;
}

declare module 'material-ui/svg-icons/editor/attach-money' {
    export import EditorAttachMoney = __MaterialUI.SvgIcon;
    export default EditorAttachMoney;
}

declare module 'material-ui/svg-icons/editor/border-vertical' {
    export import EditorBorderVertical = __MaterialUI.SvgIcon;
    export default EditorBorderVertical;
}

declare module 'material-ui/svg-icons/editor/format-indent-decrease' {
    export import EditorFormatIndentDecrease = __MaterialUI.SvgIcon;
    export default EditorFormatIndentDecrease;
}

declare module 'material-ui/svg-icons/editor/insert-emoticon' {
    export import EditorInsertEmoticon = __MaterialUI.SvgIcon;
    export default EditorInsertEmoticon;
}

declare module 'material-ui/svg-icons/editor/insert-invitation' {
    export import EditorInsertInvitation = __MaterialUI.SvgIcon;
    export default EditorInsertInvitation;
}

declare module 'material-ui/svg-icons/editor/format-color-fill' {
    export import EditorFormatColorFill = __MaterialUI.SvgIcon;
    export default EditorFormatColorFill;
}

declare module 'material-ui/svg-icons/editor/mode-edit' {
    export import EditorModeEdit = __MaterialUI.SvgIcon;
    export default EditorModeEdit;
}

declare module 'material-ui/svg-icons/editor/vertical-align-bottom' {
    export import EditorVerticalAlignBottom = __MaterialUI.SvgIcon;
    export default EditorVerticalAlignBottom;
}

declare module 'material-ui/svg-icons/editor/format-align-justify' {
    export import EditorFormatAlignJustify = __MaterialUI.SvgIcon;
    export default EditorFormatAlignJustify;
}

declare module 'material-ui/svg-icons/editor/attach-file' {
    export import EditorAttachFile = __MaterialUI.SvgIcon;
    export default EditorAttachFile;
}

declare module 'material-ui/svg-icons/editor/space-bar' {
    export import EditorSpaceBar = __MaterialUI.SvgIcon;
    export default EditorSpaceBar;
}

declare module 'material-ui/svg-icons/editor/border-clear' {
    export import EditorBorderClear = __MaterialUI.SvgIcon;
    export default EditorBorderClear;
}

declare module 'material-ui/svg-icons/editor/short-text' {
    export import EditorShortText = __MaterialUI.SvgIcon;
    export default EditorShortText;
}

declare module 'material-ui/svg-icons/editor/insert-link' {
    export import EditorInsertLink = __MaterialUI.SvgIcon;
    export default EditorInsertLink;
}

declare module 'material-ui/svg-icons/editor/format-list-numbered' {
    export import EditorFormatListNumbered = __MaterialUI.SvgIcon;
    export default EditorFormatListNumbered;
}

declare module 'material-ui/svg-icons/editor/format-quote' {
    export import EditorFormatQuote = __MaterialUI.SvgIcon;
    export default EditorFormatQuote;
}

declare module 'material-ui/svg-icons/editor/border-left' {
    export import EditorBorderLeft = __MaterialUI.SvgIcon;
    export default EditorBorderLeft;
}

declare module 'material-ui/svg-icons/editor/format-underlined' {
    export import EditorFormatUnderlined = __MaterialUI.SvgIcon;
    export default EditorFormatUnderlined;
}

declare module 'material-ui/svg-icons/editor/text-fields' {
    export import EditorTextFields = __MaterialUI.SvgIcon;
    export default EditorTextFields;
}

declare module 'material-ui/svg-icons/editor/format-italic' {
    export import EditorFormatItalic = __MaterialUI.SvgIcon;
    export default EditorFormatItalic;
}

declare module 'material-ui/svg-icons/editor/publish' {
    export import EditorPublish = __MaterialUI.SvgIcon;
    export default EditorPublish;
}

declare module 'material-ui/svg-icons/editor/border-top' {
    export import EditorBorderTop = __MaterialUI.SvgIcon;
    export default EditorBorderTop;
}

declare module 'material-ui/svg-icons/editor/format-indent-increase' {
    export import EditorFormatIndentIncrease = __MaterialUI.SvgIcon;
    export default EditorFormatIndentIncrease;
}

declare module 'material-ui/svg-icons/editor/border-bottom' {
    export import EditorBorderBottom = __MaterialUI.SvgIcon;
    export default EditorBorderBottom;
}

declare module 'material-ui/svg-icons/editor/format-align-right' {
    export import EditorFormatAlignRight = __MaterialUI.SvgIcon;
    export default EditorFormatAlignRight;
}

declare module 'material-ui/svg-icons/editor/border-right' {
    export import EditorBorderRight = __MaterialUI.SvgIcon;
    export default EditorBorderRight;
}

declare module 'material-ui/svg-icons/editor/insert-comment' {
    export import EditorInsertComment = __MaterialUI.SvgIcon;
    export default EditorInsertComment;
}

declare module 'material-ui/svg-icons/editor/strikethrough-s' {
    export import EditorStrikethroughS = __MaterialUI.SvgIcon;
    export default EditorStrikethroughS;
}

declare module 'material-ui/svg-icons/editor/format-strikethrough' {
    export import EditorFormatStrikethrough = __MaterialUI.SvgIcon;
    export default EditorFormatStrikethrough;
}

declare module 'material-ui/svg-icons/editor/insert-chart' {
    export import EditorInsertChart = __MaterialUI.SvgIcon;
    export default EditorInsertChart;
}

declare module 'material-ui/svg-icons/editor/format-color-reset' {
    export import EditorFormatColorReset = __MaterialUI.SvgIcon;
    export default EditorFormatColorReset;
}

declare module 'material-ui/svg-icons/editor/border-inner' {
    export import EditorBorderInner = __MaterialUI.SvgIcon;
    export default EditorBorderInner;
}

declare module 'material-ui/svg-icons/editor/format-color-text' {
    export import EditorFormatColorText = __MaterialUI.SvgIcon;
    export default EditorFormatColorText;
}

declare module 'material-ui/svg-icons/editor/border-horizontal' {
    export import EditorBorderHorizontal = __MaterialUI.SvgIcon;
    export default EditorBorderHorizontal;
}

declare module 'material-ui/svg-icons/editor/format-list-bulleted' {
    export import EditorFormatListBulleted = __MaterialUI.SvgIcon;
    export default EditorFormatListBulleted;
}

declare module 'material-ui/svg-icons/editor/border-outer' {
    export import EditorBorderOuter = __MaterialUI.SvgIcon;
    export default EditorBorderOuter;
}

declare module 'material-ui/svg-icons/editor/format-align-left' {
    export import EditorFormatAlignLeft = __MaterialUI.SvgIcon;
    export default EditorFormatAlignLeft;
}

declare module 'material-ui/svg-icons/editor/border-color' {
    export import EditorBorderColor = __MaterialUI.SvgIcon;
    export default EditorBorderColor;
}

declare module 'material-ui/svg-icons/editor/format-textdirection-l-to-r' {
    export import EditorFormatTextdirectionLToR = __MaterialUI.SvgIcon;
    export default EditorFormatTextdirectionLToR;
}

declare module 'material-ui/svg-icons/editor/vertical-align-center' {
    export import EditorVerticalAlignCenter = __MaterialUI.SvgIcon;
    export default EditorVerticalAlignCenter;
}

declare module 'material-ui/svg-icons/editor/vertical-align-top' {
    export import EditorVerticalAlignTop = __MaterialUI.SvgIcon;
    export default EditorVerticalAlignTop;
}

declare module 'material-ui/svg-icons/editor/format-line-spacing' {
    export import EditorFormatLineSpacing = __MaterialUI.SvgIcon;
    export default EditorFormatLineSpacing;
}

declare module 'material-ui/svg-icons/editor/border-all' {
    export import EditorBorderAll = __MaterialUI.SvgIcon;
    export default EditorBorderAll;
}

declare module 'material-ui/svg-icons/device/screen-lock-portrait' {
    export import DeviceScreenLockPortrait = __MaterialUI.SvgIcon;
    export default DeviceScreenLockPortrait;
}

declare module 'material-ui/svg-icons/device/signal-cellular-off' {
    export import DeviceSignalCellularOff = __MaterialUI.SvgIcon;
    export default DeviceSignalCellularOff;
}

declare module 'material-ui/svg-icons/device/bluetooth-searching' {
    export import DeviceBluetoothSearching = __MaterialUI.SvgIcon;
    export default DeviceBluetoothSearching;
}

declare module 'material-ui/svg-icons/device/signal-cellular-3-bar' {
    export import DeviceSignalCellular3Bar = __MaterialUI.SvgIcon;
    export default DeviceSignalCellular3Bar;
}

declare module 'material-ui/svg-icons/device/network-cell' {
    export import DeviceNetworkCell = __MaterialUI.SvgIcon;
    export default DeviceNetworkCell;
}

declare module 'material-ui/svg-icons/device/signal-cellular-no-sim' {
    export import DeviceSignalCellularNoSim = __MaterialUI.SvgIcon;
    export default DeviceSignalCellularNoSim;
}

declare module 'material-ui/svg-icons/device/signal-wifi-2-bar' {
    export import DeviceSignalWifi2Bar = __MaterialUI.SvgIcon;
    export default DeviceSignalWifi2Bar;
}

declare module 'material-ui/svg-icons/device/devices' {
    export import DeviceDevices = __MaterialUI.SvgIcon;
    export default DeviceDevices;
}

declare module 'material-ui/svg-icons/device/battery-90' {
    export import DeviceBattery90 = __MaterialUI.SvgIcon;
    export default DeviceBattery90;
}

declare module 'material-ui/svg-icons/device/battery-charging-80' {
    export import DeviceBatteryCharging80 = __MaterialUI.SvgIcon;
    export default DeviceBatteryCharging80;
}

declare module 'material-ui/svg-icons/device/location-searching' {
    export import DeviceLocationSearching = __MaterialUI.SvgIcon;
    export default DeviceLocationSearching;
}

declare module 'material-ui/svg-icons/device/wallpaper' {
    export import DeviceWallpaper = __MaterialUI.SvgIcon;
    export default DeviceWallpaper;
}

declare module 'material-ui/svg-icons/device/screen-lock-rotation' {
    export import DeviceScreenLockRotation = __MaterialUI.SvgIcon;
    export default DeviceScreenLockRotation;
}

declare module 'material-ui/svg-icons/device/screen-lock-landscape' {
    export import DeviceScreenLockLandscape = __MaterialUI.SvgIcon;
    export default DeviceScreenLockLandscape;
}

declare module 'material-ui/svg-icons/device/battery-charging-20' {
    export import DeviceBatteryCharging20 = __MaterialUI.SvgIcon;
    export default DeviceBatteryCharging20;
}

declare module 'material-ui/svg-icons/device/usb' {
    export import DeviceUsb = __MaterialUI.SvgIcon;
    export default DeviceUsb;
}

declare module 'material-ui/svg-icons/device/airplanemode-active' {
    export import DeviceAirplanemodeActive = __MaterialUI.SvgIcon;
    export default DeviceAirplanemodeActive;
}

declare module 'material-ui/svg-icons/device/network-wifi' {
    export import DeviceNetworkWifi = __MaterialUI.SvgIcon;
    export default DeviceNetworkWifi;
}

declare module 'material-ui/svg-icons/device/graphic-eq' {
    export import DeviceGraphicEq = __MaterialUI.SvgIcon;
    export default DeviceGraphicEq;
}

declare module 'material-ui/svg-icons/device/bluetooth-connected' {
    export import DeviceBluetoothConnected = __MaterialUI.SvgIcon;
    export default DeviceBluetoothConnected;
}

declare module 'material-ui/svg-icons/device/gps-fixed' {
    export import DeviceGpsFixed = __MaterialUI.SvgIcon;
    export default DeviceGpsFixed;
}

declare module 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-4-bar' {
    export import DeviceSignalCellularConnectedNoInternet4Bar = __MaterialUI.SvgIcon;
    export default DeviceSignalCellularConnectedNoInternet4Bar;
}

declare module 'material-ui/svg-icons/device/brightness-medium' {
    export import DeviceBrightnessMedium = __MaterialUI.SvgIcon;
    export default DeviceBrightnessMedium;
}

declare module 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-3-bar' {
    export import DeviceSignalCellularConnectedNoInternet3Bar = __MaterialUI.SvgIcon;
    export default DeviceSignalCellularConnectedNoInternet3Bar;
}

declare module 'material-ui/svg-icons/device/signal-wifi-3-bar-lock' {
    export import DeviceSignalWifi3BarLock = __MaterialUI.SvgIcon;
    export default DeviceSignalWifi3BarLock;
}

declare module 'material-ui/svg-icons/device/battery-80' {
    export import DeviceBattery80 = __MaterialUI.SvgIcon;
    export default DeviceBattery80;
}

declare module 'material-ui/svg-icons/device/wifi-lock' {
    export import DeviceWifiLock = __MaterialUI.SvgIcon;
    export default DeviceWifiLock;
}

declare module 'material-ui/svg-icons/device/signal-wifi-2-bar-lock' {
    export import DeviceSignalWifi2BarLock = __MaterialUI.SvgIcon;
    export default DeviceSignalWifi2BarLock;
}

declare module 'material-ui/svg-icons/device/bluetooth' {
    export import DeviceBluetooth = __MaterialUI.SvgIcon;
    export default DeviceBluetooth;
}

declare module 'material-ui/svg-icons/device/access-time' {
    export import DeviceAccessTime = __MaterialUI.SvgIcon;
    export default DeviceAccessTime;
}

declare module 'material-ui/svg-icons/device/battery-charging-30' {
    export import DeviceBatteryCharging30 = __MaterialUI.SvgIcon;
    export default DeviceBatteryCharging30;
}

declare module 'material-ui/svg-icons/device/signal-wifi-off' {
    export import DeviceSignalWifiOff = __MaterialUI.SvgIcon;
    export default DeviceSignalWifiOff;
}

declare module 'material-ui/svg-icons/device/dvr' {
    export import DeviceDvr = __MaterialUI.SvgIcon;
    export default DeviceDvr;
}

declare module 'material-ui/svg-icons/device/battery-60' {
    export import DeviceBattery60 = __MaterialUI.SvgIcon;
    export default DeviceBattery60;
}

declare module 'material-ui/svg-icons/device/access-alarm' {
    export import DeviceAccessAlarm = __MaterialUI.SvgIcon;
    export default DeviceAccessAlarm;
}

declare module 'material-ui/svg-icons/device/nfc' {
    export import DeviceNfc = __MaterialUI.SvgIcon;
    export default DeviceNfc;
}

declare module 'material-ui/svg-icons/device/data-usage' {
    export import DeviceDataUsage = __MaterialUI.SvgIcon;
    export default DeviceDataUsage;
}

declare module 'material-ui/svg-icons/device/access-alarms' {
    export import DeviceAccessAlarms = __MaterialUI.SvgIcon;
    export default DeviceAccessAlarms;
}

declare module 'material-ui/svg-icons/device/battery-full' {
    export import DeviceBatteryFull = __MaterialUI.SvgIcon;
    export default DeviceBatteryFull;
}

declare module 'material-ui/svg-icons/device/battery-charging-full' {
    export import DeviceBatteryChargingFull = __MaterialUI.SvgIcon;
    export default DeviceBatteryChargingFull;
}

declare module 'material-ui/svg-icons/device/settings-system-daydream' {
    export import DeviceSettingsSystemDaydream = __MaterialUI.SvgIcon;
    export default DeviceSettingsSystemDaydream;
}

declare module 'material-ui/svg-icons/device/battery-std' {
    export import DeviceBatteryStd = __MaterialUI.SvgIcon;
    export default DeviceBatteryStd;
}

declare module 'material-ui/svg-icons/device/battery-unknown' {
    export import DeviceBatteryUnknown = __MaterialUI.SvgIcon;
    export default DeviceBatteryUnknown;
}

declare module 'material-ui/svg-icons/device/add-alarm' {
    export import DeviceAddAlarm = __MaterialUI.SvgIcon;
    export default DeviceAddAlarm;
}

declare module 'material-ui/svg-icons/device/storage' {
    export import DeviceStorage = __MaterialUI.SvgIcon;
    export default DeviceStorage;
}

declare module 'material-ui/svg-icons/device/battery-charging-90' {
    export import DeviceBatteryCharging90 = __MaterialUI.SvgIcon;
    export default DeviceBatteryCharging90;
}

declare module 'material-ui/svg-icons/device/screen-rotation' {
    export import DeviceScreenRotation = __MaterialUI.SvgIcon;
    export default DeviceScreenRotation;
}

declare module 'material-ui/svg-icons/device/signal-wifi-4-bar' {
    export import DeviceSignalWifi4Bar = __MaterialUI.SvgIcon;
    export default DeviceSignalWifi4Bar;
}

declare module 'material-ui/svg-icons/device/battery-charging-50' {
    export import DeviceBatteryCharging50 = __MaterialUI.SvgIcon;
    export default DeviceBatteryCharging50;
}

declare module 'material-ui/svg-icons/device/battery-30' {
    export import DeviceBattery30 = __MaterialUI.SvgIcon;
    export default DeviceBattery30;
}

declare module 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-0-bar' {
    export import DeviceSignalCellularConnectedNoInternet0Bar = __MaterialUI.SvgIcon;
    export default DeviceSignalCellularConnectedNoInternet0Bar;
}

declare module 'material-ui/svg-icons/device/battery-alert' {
    export import DeviceBatteryAlert = __MaterialUI.SvgIcon;
    export default DeviceBatteryAlert;
}

declare module 'material-ui/svg-icons/device/signal-wifi-1-bar' {
    export import DeviceSignalWifi1Bar = __MaterialUI.SvgIcon;
    export default DeviceSignalWifi1Bar;
}

declare module 'material-ui/svg-icons/device/signal-cellular-4-bar' {
    export import DeviceSignalCellular4Bar = __MaterialUI.SvgIcon;
    export default DeviceSignalCellular4Bar;
}

declare module 'material-ui/svg-icons/device/wifi-tethering' {
    export import DeviceWifiTethering = __MaterialUI.SvgIcon;
    export default DeviceWifiTethering;
}

declare module 'material-ui/svg-icons/device/signal-wifi-0-bar' {
    export import DeviceSignalWifi0Bar = __MaterialUI.SvgIcon;
    export default DeviceSignalWifi0Bar;
}

declare module 'material-ui/svg-icons/device/brightness-auto' {
    export import DeviceBrightnessAuto = __MaterialUI.SvgIcon;
    export default DeviceBrightnessAuto;
}

declare module 'material-ui/svg-icons/device/location-disabled' {
    export import DeviceLocationDisabled = __MaterialUI.SvgIcon;
    export default DeviceLocationDisabled;
}

declare module 'material-ui/svg-icons/device/signal-wifi-3-bar' {
    export import DeviceSignalWifi3Bar = __MaterialUI.SvgIcon;
    export default DeviceSignalWifi3Bar;
}

declare module 'material-ui/svg-icons/device/gps-not-fixed' {
    export import DeviceGpsNotFixed = __MaterialUI.SvgIcon;
    export default DeviceGpsNotFixed;
}

declare module 'material-ui/svg-icons/device/signal-cellular-1-bar' {
    export import DeviceSignalCellular1Bar = __MaterialUI.SvgIcon;
    export default DeviceSignalCellular1Bar;
}

declare module 'material-ui/svg-icons/device/battery-charging-60' {
    export import DeviceBatteryCharging60 = __MaterialUI.SvgIcon;
    export default DeviceBatteryCharging60;
}

declare module 'material-ui/svg-icons/device/gps-off' {
    export import DeviceGpsOff = __MaterialUI.SvgIcon;
    export default DeviceGpsOff;
}

declare module 'material-ui/svg-icons/device/signal-cellular-null' {
    export import DeviceSignalCellularNull = __MaterialUI.SvgIcon;
    export default DeviceSignalCellularNull;
}

declare module 'material-ui/svg-icons/device/brightness-low' {
    export import DeviceBrightnessLow = __MaterialUI.SvgIcon;
    export default DeviceBrightnessLow;
}

declare module 'material-ui/svg-icons/device/sd-storage' {
    export import DeviceSdStorage = __MaterialUI.SvgIcon;
    export default DeviceSdStorage;
}

declare module 'material-ui/svg-icons/device/airplanemode-inactive' {
    export import DeviceAirplanemodeInactive = __MaterialUI.SvgIcon;
    export default DeviceAirplanemodeInactive;
}

declare module 'material-ui/svg-icons/device/widgets' {
    export import DeviceWidgets = __MaterialUI.SvgIcon;
    export default DeviceWidgets;
}

declare module 'material-ui/svg-icons/device/brightness-high' {
    export import DeviceBrightnessHigh = __MaterialUI.SvgIcon;
    export default DeviceBrightnessHigh;
}

declare module 'material-ui/svg-icons/device/battery-20' {
    export import DeviceBattery20 = __MaterialUI.SvgIcon;
    export default DeviceBattery20;
}

declare module 'material-ui/svg-icons/device/bluetooth-disabled' {
    export import DeviceBluetoothDisabled = __MaterialUI.SvgIcon;
    export default DeviceBluetoothDisabled;
}

declare module 'material-ui/svg-icons/device/signal-wifi-4-bar-lock' {
    export import DeviceSignalWifi4BarLock = __MaterialUI.SvgIcon;
    export default DeviceSignalWifi4BarLock;
}

declare module 'material-ui/svg-icons/device/developer-mode' {
    export import DeviceDeveloperMode = __MaterialUI.SvgIcon;
    export default DeviceDeveloperMode;
}

declare module 'material-ui/svg-icons/device/battery-50' {
    export import DeviceBattery50 = __MaterialUI.SvgIcon;
    export default DeviceBattery50;
}

declare module 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-1-bar' {
    export import DeviceSignalCellularConnectedNoInternet1Bar = __MaterialUI.SvgIcon;
    export default DeviceSignalCellularConnectedNoInternet1Bar;
}

declare module 'material-ui/svg-icons/device/signal-cellular-2-bar' {
    export import DeviceSignalCellular2Bar = __MaterialUI.SvgIcon;
    export default DeviceSignalCellular2Bar;
}

declare module 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-2-bar' {
    export import DeviceSignalCellularConnectedNoInternet2Bar = __MaterialUI.SvgIcon;
    export default DeviceSignalCellularConnectedNoInternet2Bar;
}

declare module 'material-ui/svg-icons/device/signal-cellular-0-bar' {
    export import DeviceSignalCellular0Bar = __MaterialUI.SvgIcon;
    export default DeviceSignalCellular0Bar;
}

declare module 'material-ui/svg-icons/device/signal-wifi-1-bar-lock' {
    export import DeviceSignalWifi1BarLock = __MaterialUI.SvgIcon;
    export default DeviceSignalWifi1BarLock;
}

declare module 'material-ui/svg-icons/navigation/arrow-forward' {
    export import NavigationArrowForward = __MaterialUI.SvgIcon;
    export default NavigationArrowForward;
}

declare module 'material-ui/svg-icons/navigation/unfold-more' {
    export import NavigationUnfoldMore = __MaterialUI.SvgIcon;
    export default NavigationUnfoldMore;
}

declare module 'material-ui/svg-icons/navigation/arrow-drop-down' {
    export import NavigationArrowDropDown = __MaterialUI.SvgIcon;
    export default NavigationArrowDropDown;
}

declare module 'material-ui/svg-icons/navigation/arrow-back' {
    export import NavigationArrowBack = __MaterialUI.SvgIcon;
    export default NavigationArrowBack;
}

declare module 'material-ui/svg-icons/navigation/arrow-downward' {
    export import NavigationArrowDownward = __MaterialUI.SvgIcon;
    export default NavigationArrowDownward;
}

declare module 'material-ui/svg-icons/navigation/fullscreen' {
    export import NavigationFullscreen = __MaterialUI.SvgIcon;
    export default NavigationFullscreen;
}

declare module 'material-ui/svg-icons/navigation/unfold-less' {
    export import NavigationUnfoldLess = __MaterialUI.SvgIcon;
    export default NavigationUnfoldLess;
}

declare module 'material-ui/svg-icons/navigation/chevron-right' {
    export import NavigationChevronRight = __MaterialUI.SvgIcon;
    export default NavigationChevronRight;
}

declare module 'material-ui/svg-icons/navigation/arrow-drop-down-circle' {
    export import NavigationArrowDropDownCircle = __MaterialUI.SvgIcon;
    export default NavigationArrowDropDownCircle;
}

declare module 'material-ui/svg-icons/navigation/check' {
    export import NavigationCheck = __MaterialUI.SvgIcon;
    export default NavigationCheck;
}

declare module 'material-ui/svg-icons/navigation/fullscreen-exit' {
    export import NavigationFullscreenExit = __MaterialUI.SvgIcon;
    export default NavigationFullscreenExit;
}

declare module 'material-ui/svg-icons/navigation/chevron-left' {
    export import NavigationChevronLeft = __MaterialUI.SvgIcon;
    export default NavigationChevronLeft;
}

declare module 'material-ui/svg-icons/navigation/menu' {
    export import NavigationMenu = __MaterialUI.SvgIcon;
    export default NavigationMenu;
}

declare module 'material-ui/svg-icons/navigation/apps' {
    export import NavigationApps = __MaterialUI.SvgIcon;
    export default NavigationApps;
}

declare module 'material-ui/svg-icons/navigation/arrow-upward' {
    export import NavigationArrowUpward = __MaterialUI.SvgIcon;
    export default NavigationArrowUpward;
}

declare module 'material-ui/svg-icons/navigation/close' {
    export import NavigationClose = __MaterialUI.SvgIcon;
    export default NavigationClose;
}

declare module 'material-ui/svg-icons/navigation/more-horiz' {
    export import NavigationMoreHoriz = __MaterialUI.SvgIcon;
    export default NavigationMoreHoriz;
}

declare module 'material-ui/svg-icons/navigation/cancel' {
    export import NavigationCancel = __MaterialUI.SvgIcon;
    export default NavigationCancel;
}

declare module 'material-ui/svg-icons/navigation/subdirectory-arrow-right' {
    export import NavigationSubdirectoryArrowRight = __MaterialUI.SvgIcon;
    export default NavigationSubdirectoryArrowRight;
}

declare module 'material-ui/svg-icons/navigation/expand-more' {
    export import NavigationExpandMore = __MaterialUI.SvgIcon;
    export default NavigationExpandMore;
}

declare module 'material-ui/svg-icons/navigation/arrow-drop-up' {
    export import NavigationArrowDropUp = __MaterialUI.SvgIcon;
    export default NavigationArrowDropUp;
}

declare module 'material-ui/svg-icons/navigation/subdirectory-arrow-left' {
    export import NavigationSubdirectoryArrowLeft = __MaterialUI.SvgIcon;
    export default NavigationSubdirectoryArrowLeft;
}

declare module 'material-ui/svg-icons/navigation/expand-less' {
    export import NavigationExpandLess = __MaterialUI.SvgIcon;
    export default NavigationExpandLess;
}

declare module 'material-ui/svg-icons/navigation/refresh' {
    export import NavigationRefresh = __MaterialUI.SvgIcon;
    export default NavigationRefresh;
}

declare module 'material-ui/svg-icons/navigation/more-vert' {
    export import NavigationMoreVert = __MaterialUI.SvgIcon;
    export default NavigationMoreVert;
}

declare module 'material-ui/svg-icons/notification/rv-hookup' {
    export import NotificationRvHookup = __MaterialUI.SvgIcon;
    export default NotificationRvHookup;
}

declare module 'material-ui/svg-icons/notification/no-encryption' {
    export import NotificationNoEncryption = __MaterialUI.SvgIcon;
    export default NotificationNoEncryption;
}

declare module 'material-ui/svg-icons/notification/phone-forwarded' {
    export import NotificationPhoneForwarded = __MaterialUI.SvgIcon;
    export default NotificationPhoneForwarded;
}

declare module 'material-ui/svg-icons/notification/airline-seat-flat-angled' {
    export import NotificationAirlineSeatFlatAngled = __MaterialUI.SvgIcon;
    export default NotificationAirlineSeatFlatAngled;
}

declare module 'material-ui/svg-icons/notification/time-to-leave' {
    export import NotificationTimeToLeave = __MaterialUI.SvgIcon;
    export default NotificationTimeToLeave;
}

declare module 'material-ui/svg-icons/notification/airline-seat-legroom-extra' {
    export import NotificationAirlineSeatLegroomExtra = __MaterialUI.SvgIcon;
    export default NotificationAirlineSeatLegroomExtra;
}

declare module 'material-ui/svg-icons/notification/airline-seat-recline-extra' {
    export import NotificationAirlineSeatReclineExtra = __MaterialUI.SvgIcon;
    export default NotificationAirlineSeatReclineExtra;
}

declare module 'material-ui/svg-icons/notification/airline-seat-individual-suite' {
    export import NotificationAirlineSeatIndividualSuite = __MaterialUI.SvgIcon;
    export default NotificationAirlineSeatIndividualSuite;
}

declare module 'material-ui/svg-icons/notification/vibration' {
    export import NotificationVibration = __MaterialUI.SvgIcon;
    export default NotificationVibration;
}

declare module 'material-ui/svg-icons/notification/sim-card-alert' {
    export import NotificationSimCardAlert = __MaterialUI.SvgIcon;
    export default NotificationSimCardAlert;
}

declare module 'material-ui/svg-icons/notification/sms-failed' {
    export import NotificationSmsFailed = __MaterialUI.SvgIcon;
    export default NotificationSmsFailed;
}

declare module 'material-ui/svg-icons/notification/airline-seat-flat' {
    export import NotificationAirlineSeatFlat = __MaterialUI.SvgIcon;
    export default NotificationAirlineSeatFlat;
}

declare module 'material-ui/svg-icons/notification/do-not-disturb' {
    export import NotificationDoNotDisturb = __MaterialUI.SvgIcon;
    export default NotificationDoNotDisturb;
}

declare module 'material-ui/svg-icons/notification/sync-problem' {
    export import NotificationSyncProblem = __MaterialUI.SvgIcon;
    export default NotificationSyncProblem;
}

declare module 'material-ui/svg-icons/notification/event-available' {
    export import NotificationEventAvailable = __MaterialUI.SvgIcon;
    export default NotificationEventAvailable;
}

declare module 'material-ui/svg-icons/notification/network-check' {
    export import NotificationNetworkCheck = __MaterialUI.SvgIcon;
    export default NotificationNetworkCheck;
}

declare module 'material-ui/svg-icons/notification/sms' {
    export import NotificationSms = __MaterialUI.SvgIcon;
    export default NotificationSms;
}

declare module 'material-ui/svg-icons/notification/disc-full' {
    export import NotificationDiscFull = __MaterialUI.SvgIcon;
    export default NotificationDiscFull;
}

declare module 'material-ui/svg-icons/notification/do-not-disturb-alt' {
    export import NotificationDoNotDisturbAlt = __MaterialUI.SvgIcon;
    export default NotificationDoNotDisturbAlt;
}

declare module 'material-ui/svg-icons/notification/system-update' {
    export import NotificationSystemUpdate = __MaterialUI.SvgIcon;
    export default NotificationSystemUpdate;
}

declare module 'material-ui/svg-icons/notification/phone-bluetooth-speaker' {
    export import NotificationPhoneBluetoothSpeaker = __MaterialUI.SvgIcon;
    export default NotificationPhoneBluetoothSpeaker;
}

declare module 'material-ui/svg-icons/notification/ondemand-video' {
    export import NotificationOndemandVideo = __MaterialUI.SvgIcon;
    export default NotificationOndemandVideo;
}

declare module 'material-ui/svg-icons/notification/power' {
    export import NotificationPower = __MaterialUI.SvgIcon;
    export default NotificationPower;
}

declare module 'material-ui/svg-icons/notification/phone-locked' {
    export import NotificationPhoneLocked = __MaterialUI.SvgIcon;
    export default NotificationPhoneLocked;
}

declare module 'material-ui/svg-icons/notification/sd-card' {
    export import NotificationSdCard = __MaterialUI.SvgIcon;
    export default NotificationSdCard;
}

declare module 'material-ui/svg-icons/notification/event-busy' {
    export import NotificationEventBusy = __MaterialUI.SvgIcon;
    export default NotificationEventBusy;
}

declare module 'material-ui/svg-icons/notification/personal-video' {
    export import NotificationPersonalVideo = __MaterialUI.SvgIcon;
    export default NotificationPersonalVideo;
}

declare module 'material-ui/svg-icons/notification/airline-seat-legroom-normal' {
    export import NotificationAirlineSeatLegroomNormal = __MaterialUI.SvgIcon;
    export default NotificationAirlineSeatLegroomNormal;
}

declare module 'material-ui/svg-icons/notification/phone-in-talk' {
    export import NotificationPhoneInTalk = __MaterialUI.SvgIcon;
    export default NotificationPhoneInTalk;
}

declare module 'material-ui/svg-icons/notification/airline-seat-legroom-reduced' {
    export import NotificationAirlineSeatLegroomReduced = __MaterialUI.SvgIcon;
    export default NotificationAirlineSeatLegroomReduced;
}

declare module 'material-ui/svg-icons/notification/phone-paused' {
    export import NotificationPhonePaused = __MaterialUI.SvgIcon;
    export default NotificationPhonePaused;
}

declare module 'material-ui/svg-icons/notification/sync-disabled' {
    export import NotificationSyncDisabled = __MaterialUI.SvgIcon;
    export default NotificationSyncDisabled;
}

declare module 'material-ui/svg-icons/notification/enhanced-encryption' {
    export import NotificationEnhancedEncryption = __MaterialUI.SvgIcon;
    export default NotificationEnhancedEncryption;
}

declare module 'material-ui/svg-icons/notification/mms' {
    export import NotificationMms = __MaterialUI.SvgIcon;
    export default NotificationMms;
}

declare module 'material-ui/svg-icons/notification/drive-eta' {
    export import NotificationDriveEta = __MaterialUI.SvgIcon;
    export default NotificationDriveEta;
}

declare module 'material-ui/svg-icons/notification/voice-chat' {
    export import NotificationVoiceChat = __MaterialUI.SvgIcon;
    export default NotificationVoiceChat;
}

declare module 'material-ui/svg-icons/notification/wifi' {
    export import NotificationWifi = __MaterialUI.SvgIcon;
    export default NotificationWifi;
}

declare module 'material-ui/svg-icons/notification/airline-seat-recline-normal' {
    export import NotificationAirlineSeatReclineNormal = __MaterialUI.SvgIcon;
    export default NotificationAirlineSeatReclineNormal;
}

declare module 'material-ui/svg-icons/notification/more' {
    export import NotificationMore = __MaterialUI.SvgIcon;
    export default NotificationMore;
}

declare module 'material-ui/svg-icons/notification/vpn-lock' {
    export import NotificationVpnLock = __MaterialUI.SvgIcon;
    export default NotificationVpnLock;
}

declare module 'material-ui/svg-icons/notification/event-note' {
    export import NotificationEventNote = __MaterialUI.SvgIcon;
    export default NotificationEventNote;
}

declare module 'material-ui/svg-icons/notification/confirmation-number' {
    export import NotificationConfirmationNumber = __MaterialUI.SvgIcon;
    export default NotificationConfirmationNumber;
}

declare module 'material-ui/svg-icons/notification/network-locked' {
    export import NotificationNetworkLocked = __MaterialUI.SvgIcon;
    export default NotificationNetworkLocked;
}

declare module 'material-ui/svg-icons/notification/adb' {
    export import NotificationAdb = __MaterialUI.SvgIcon;
    export default NotificationAdb;
}

declare module 'material-ui/svg-icons/notification/bluetooth-audio' {
    export import NotificationBluetoothAudio = __MaterialUI.SvgIcon;
    export default NotificationBluetoothAudio;
}

declare module 'material-ui/svg-icons/notification/wc' {
    export import NotificationWc = __MaterialUI.SvgIcon;
    export default NotificationWc;
}

declare module 'material-ui/svg-icons/notification/tap-and-play' {
    export import NotificationTapAndPlay = __MaterialUI.SvgIcon;
    export default NotificationTapAndPlay;
}

declare module 'material-ui/svg-icons/notification/folder-special' {
    export import NotificationFolderSpecial = __MaterialUI.SvgIcon;
    export default NotificationFolderSpecial;
}

declare module 'material-ui/svg-icons/notification/live-tv' {
    export import NotificationLiveTv = __MaterialUI.SvgIcon;
    export default NotificationLiveTv;
}

declare module 'material-ui/svg-icons/notification/sync' {
    export import NotificationSync = __MaterialUI.SvgIcon;
    export default NotificationSync;
}

declare module 'material-ui/svg-icons/notification/phone-missed' {
    export import NotificationPhoneMissed = __MaterialUI.SvgIcon;
    export default NotificationPhoneMissed;
}

declare module 'material-ui/svg-icons/av/skip-previous' {
    export import AvSkipPrevious = __MaterialUI.SvgIcon;
    export default AvSkipPrevious;
}

declare module 'material-ui/svg-icons/av/volume-off' {
    export import AvVolumeOff = __MaterialUI.SvgIcon;
    export default AvVolumeOff;
}

declare module 'material-ui/svg-icons/av/subscriptions' {
    export import AvSubscriptions = __MaterialUI.SvgIcon;
    export default AvSubscriptions;
}

declare module 'material-ui/svg-icons/av/play-arrow' {
    export import AvPlayArrow = __MaterialUI.SvgIcon;
    export default AvPlayArrow;
}

declare module 'material-ui/svg-icons/av/play-circle-outline' {
    export import AvPlayCircleOutline = __MaterialUI.SvgIcon;
    export default AvPlayCircleOutline;
}

declare module 'material-ui/svg-icons/av/replay-30' {
    export import AvReplay30 = __MaterialUI.SvgIcon;
    export default AvReplay30;
}

declare module 'material-ui/svg-icons/av/videocam' {
    export import AvVideocam = __MaterialUI.SvgIcon;
    export default AvVideocam;
}

declare module 'material-ui/svg-icons/av/replay-5' {
    export import AvReplay5 = __MaterialUI.SvgIcon;
    export default AvReplay5;
}

declare module 'material-ui/svg-icons/av/forward-10' {
    export import AvForward10 = __MaterialUI.SvgIcon;
    export default AvForward10;
}

declare module 'material-ui/svg-icons/av/recent-actors' {
    export import AvRecentActors = __MaterialUI.SvgIcon;
    export default AvRecentActors;
}

declare module 'material-ui/svg-icons/av/replay-10' {
    export import AvReplay10 = __MaterialUI.SvgIcon;
    export default AvReplay10;
}

declare module 'material-ui/svg-icons/av/repeat' {
    export import AvRepeat = __MaterialUI.SvgIcon;
    export default AvRepeat;
}

declare module 'material-ui/svg-icons/av/queue-music' {
    export import AvQueueMusic = __MaterialUI.SvgIcon;
    export default AvQueueMusic;
}

declare module 'material-ui/svg-icons/av/fiber-pin' {
    export import AvFiberPin = __MaterialUI.SvgIcon;
    export default AvFiberPin;
}

declare module 'material-ui/svg-icons/av/new-releases' {
    export import AvNewReleases = __MaterialUI.SvgIcon;
    export default AvNewReleases;
}

declare module 'material-ui/svg-icons/av/fiber-new' {
    export import AvFiberNew = __MaterialUI.SvgIcon;
    export default AvFiberNew;
}

declare module 'material-ui/svg-icons/av/fiber-manual-record' {
    export import AvFiberManualRecord = __MaterialUI.SvgIcon;
    export default AvFiberManualRecord;
}

declare module 'material-ui/svg-icons/av/hearing' {
    export import AvHearing = __MaterialUI.SvgIcon;
    export default AvHearing;
}

declare module 'material-ui/svg-icons/av/loop' {
    export import AvLoop = __MaterialUI.SvgIcon;
    export default AvLoop;
}

declare module 'material-ui/svg-icons/av/volume-up' {
    export import AvVolumeUp = __MaterialUI.SvgIcon;
    export default AvVolumeUp;
}

declare module 'material-ui/svg-icons/av/high-quality' {
    export import AvHighQuality = __MaterialUI.SvgIcon;
    export default AvHighQuality;
}

declare module 'material-ui/svg-icons/av/surround-sound' {
    export import AvSurroundSound = __MaterialUI.SvgIcon;
    export default AvSurroundSound;
}

declare module 'material-ui/svg-icons/av/equalizer' {
    export import AvEqualizer = __MaterialUI.SvgIcon;
    export default AvEqualizer;
}

declare module 'material-ui/svg-icons/av/music-video' {
    export import AvMusicVideo = __MaterialUI.SvgIcon;
    export default AvMusicVideo;
}

declare module 'material-ui/svg-icons/av/shuffle' {
    export import AvShuffle = __MaterialUI.SvgIcon;
    export default AvShuffle;
}

declare module 'material-ui/svg-icons/av/volume-down' {
    export import AvVolumeDown = __MaterialUI.SvgIcon;
    export default AvVolumeDown;
}

declare module 'material-ui/svg-icons/av/radio' {
    export import AvRadio = __MaterialUI.SvgIcon;
    export default AvRadio;
}

declare module 'material-ui/svg-icons/av/web-asset' {
    export import AvWebAsset = __MaterialUI.SvgIcon;
    export default AvWebAsset;
}

declare module 'material-ui/svg-icons/av/replay' {
    export import AvReplay = __MaterialUI.SvgIcon;
    export default AvReplay;
}

declare module 'material-ui/svg-icons/av/queue-play-next' {
    export import AvQueuePlayNext = __MaterialUI.SvgIcon;
    export default AvQueuePlayNext;
}

declare module 'material-ui/svg-icons/av/closed-caption' {
    export import AvClosedCaption = __MaterialUI.SvgIcon;
    export default AvClosedCaption;
}

declare module 'material-ui/svg-icons/av/fiber-dvr' {
    export import AvFiberDvr = __MaterialUI.SvgIcon;
    export default AvFiberDvr;
}

declare module 'material-ui/svg-icons/av/explicit' {
    export import AvExplicit = __MaterialUI.SvgIcon;
    export default AvExplicit;
}

declare module 'material-ui/svg-icons/av/games' {
    export import AvGames = __MaterialUI.SvgIcon;
    export default AvGames;
}

declare module 'material-ui/svg-icons/av/videocam-off' {
    export import AvVideocamOff = __MaterialUI.SvgIcon;
    export default AvVideocamOff;
}

declare module 'material-ui/svg-icons/av/hd' {
    export import AvHd = __MaterialUI.SvgIcon;
    export default AvHd;
}

declare module 'material-ui/svg-icons/av/fast-rewind' {
    export import AvFastRewind = __MaterialUI.SvgIcon;
    export default AvFastRewind;
}

declare module 'material-ui/svg-icons/av/add-to-queue' {
    export import AvAddToQueue = __MaterialUI.SvgIcon;
    export default AvAddToQueue;
}

declare module 'material-ui/svg-icons/av/movie' {
    export import AvMovie = __MaterialUI.SvgIcon;
    export default AvMovie;
}

declare module 'material-ui/svg-icons/av/library-books' {
    export import AvLibraryBooks = __MaterialUI.SvgIcon;
    export default AvLibraryBooks;
}

declare module 'material-ui/svg-icons/av/art-track' {
    export import AvArtTrack = __MaterialUI.SvgIcon;
    export default AvArtTrack;
}

declare module 'material-ui/svg-icons/av/web' {
    export import AvWeb = __MaterialUI.SvgIcon;
    export default AvWeb;
}

declare module 'material-ui/svg-icons/av/play-circle-filled' {
    export import AvPlayCircleFilled = __MaterialUI.SvgIcon;
    export default AvPlayCircleFilled;
}

declare module 'material-ui/svg-icons/av/snooze' {
    export import AvSnooze = __MaterialUI.SvgIcon;
    export default AvSnooze;
}

declare module 'material-ui/svg-icons/av/forward-5' {
    export import AvForward5 = __MaterialUI.SvgIcon;
    export default AvForward5;
}

declare module 'material-ui/svg-icons/av/sort-by-alpha' {
    export import AvSortByAlpha = __MaterialUI.SvgIcon;
    export default AvSortByAlpha;
}

declare module 'material-ui/svg-icons/av/pause-circle-filled' {
    export import AvPauseCircleFilled = __MaterialUI.SvgIcon;
    export default AvPauseCircleFilled;
}

declare module 'material-ui/svg-icons/av/fiber-smart-record' {
    export import AvFiberSmartRecord = __MaterialUI.SvgIcon;
    export default AvFiberSmartRecord;
}

declare module 'material-ui/svg-icons/av/stop' {
    export import AvStop = __MaterialUI.SvgIcon;
    export default AvStop;
}

declare module 'material-ui/svg-icons/av/playlist-play' {
    export import AvPlaylistPlay = __MaterialUI.SvgIcon;
    export default AvPlaylistPlay;
}

declare module 'material-ui/svg-icons/av/library-add' {
    export import AvLibraryAdd = __MaterialUI.SvgIcon;
    export default AvLibraryAdd;
}

declare module 'material-ui/svg-icons/av/volume-mute' {
    export import AvVolumeMute = __MaterialUI.SvgIcon;
    export default AvVolumeMute;
}

declare module 'material-ui/svg-icons/av/skip-next' {
    export import AvSkipNext = __MaterialUI.SvgIcon;
    export default AvSkipNext;
}

declare module 'material-ui/svg-icons/av/forward-30' {
    export import AvForward30 = __MaterialUI.SvgIcon;
    export default AvForward30;
}

declare module 'material-ui/svg-icons/av/playlist-add' {
    export import AvPlaylistAdd = __MaterialUI.SvgIcon;
    export default AvPlaylistAdd;
}

declare module 'material-ui/svg-icons/av/album' {
    export import AvAlbum = __MaterialUI.SvgIcon;
    export default AvAlbum;
}

declare module 'material-ui/svg-icons/av/video-library' {
    export import AvVideoLibrary = __MaterialUI.SvgIcon;
    export default AvVideoLibrary;
}

declare module 'material-ui/svg-icons/av/library-music' {
    export import AvLibraryMusic = __MaterialUI.SvgIcon;
    export default AvLibraryMusic;
}

declare module 'material-ui/svg-icons/av/not-interested' {
    export import AvNotInterested = __MaterialUI.SvgIcon;
    export default AvNotInterested;
}

declare module 'material-ui/svg-icons/av/playlist-add-check' {
    export import AvPlaylistAddCheck = __MaterialUI.SvgIcon;
    export default AvPlaylistAddCheck;
}

declare module 'material-ui/svg-icons/av/mic-none' {
    export import AvMicNone = __MaterialUI.SvgIcon;
    export default AvMicNone;
}

declare module 'material-ui/svg-icons/av/pause' {
    export import AvPause = __MaterialUI.SvgIcon;
    export default AvPause;
}

declare module 'material-ui/svg-icons/av/remove-from-queue' {
    export import AvRemoveFromQueue = __MaterialUI.SvgIcon;
    export default AvRemoveFromQueue;
}

declare module 'material-ui/svg-icons/av/slow-motion-video' {
    export import AvSlowMotionVideo = __MaterialUI.SvgIcon;
    export default AvSlowMotionVideo;
}

declare module 'material-ui/svg-icons/av/subtitles' {
    export import AvSubtitles = __MaterialUI.SvgIcon;
    export default AvSubtitles;
}

declare module 'material-ui/svg-icons/av/mic-off' {
    export import AvMicOff = __MaterialUI.SvgIcon;
    export default AvMicOff;
}

declare module 'material-ui/svg-icons/av/repeat-one' {
    export import AvRepeatOne = __MaterialUI.SvgIcon;
    export default AvRepeatOne;
}

declare module 'material-ui/svg-icons/av/queue' {
    export import AvQueue = __MaterialUI.SvgIcon;
    export default AvQueue;
}

declare module 'material-ui/svg-icons/av/fast-forward' {
    export import AvFastForward = __MaterialUI.SvgIcon;
    export default AvFastForward;
}

declare module 'material-ui/svg-icons/av/mic' {
    export import AvMic = __MaterialUI.SvgIcon;
    export default AvMic;
}

declare module 'material-ui/svg-icons/av/av-timer' {
    export import AvAvTimer = __MaterialUI.SvgIcon;
    export default AvAvTimer;
}

declare module 'material-ui/svg-icons/av/pause-circle-outline' {
    export import AvPauseCircleOutline = __MaterialUI.SvgIcon;
    export default AvPauseCircleOutline;
}

declare module 'material-ui/svg-icons/av/airplay' {
    export import AvAirplay = __MaterialUI.SvgIcon;
    export default AvAirplay;
}

declare module 'material-ui/svg-icons/image/camera-rear' {
    export import ImageCameraRear = __MaterialUI.SvgIcon;
    export default ImageCameraRear;
}

declare module 'material-ui/svg-icons/image/add-a-photo' {
    export import ImageAddAPhoto = __MaterialUI.SvgIcon;
    export default ImageAddAPhoto;
}

declare module 'material-ui/svg-icons/image/portrait' {
    export import ImagePortrait = __MaterialUI.SvgIcon;
    export default ImagePortrait;
}

declare module 'material-ui/svg-icons/image/looks' {
    export import ImageLooks = __MaterialUI.SvgIcon;
    export default ImageLooks;
}

declare module 'material-ui/svg-icons/image/exposure-neg-2' {
    export import ImageExposureNeg2 = __MaterialUI.SvgIcon;
    export default ImageExposureNeg2;
}

declare module 'material-ui/svg-icons/image/wb-cloudy' {
    export import ImageWbCloudy = __MaterialUI.SvgIcon;
    export default ImageWbCloudy;
}

declare module 'material-ui/svg-icons/image/switch-video' {
    export import ImageSwitchVideo = __MaterialUI.SvgIcon;
    export default ImageSwitchVideo;
}

declare module 'material-ui/svg-icons/image/wb-auto' {
    export import ImageWbAuto = __MaterialUI.SvgIcon;
    export default ImageWbAuto;
}

declare module 'material-ui/svg-icons/image/filter-center-focus' {
    export import ImageFilterCenterFocus = __MaterialUI.SvgIcon;
    export default ImageFilterCenterFocus;
}

declare module 'material-ui/svg-icons/image/crop-7-5' {
    export import ImageCrop75 = __MaterialUI.SvgIcon;
    export default ImageCrop75;
}

declare module 'material-ui/svg-icons/image/crop-3-2' {
    export import ImageCrop32 = __MaterialUI.SvgIcon;
    export default ImageCrop32;
}

declare module 'material-ui/svg-icons/image/assistant-photo' {
    export import ImageAssistantPhoto = __MaterialUI.SvgIcon;
    export default ImageAssistantPhoto;
}

declare module 'material-ui/svg-icons/image/looks-one' {
    export import ImageLooksOne = __MaterialUI.SvgIcon;
    export default ImageLooksOne;
}

declare module 'material-ui/svg-icons/image/collections-bookmark' {
    export import ImageCollectionsBookmark = __MaterialUI.SvgIcon;
    export default ImageCollectionsBookmark;
}

declare module 'material-ui/svg-icons/image/image-aspect-ratio' {
    export import ImageImageAspectRatio = __MaterialUI.SvgIcon;
    export default ImageImageAspectRatio;
}

declare module 'material-ui/svg-icons/image/brush' {
    export import ImageBrush = __MaterialUI.SvgIcon;
    export default ImageBrush;
}

declare module 'material-ui/svg-icons/image/linked-camera' {
    export import ImageLinkedCamera = __MaterialUI.SvgIcon;
    export default ImageLinkedCamera;
}

declare module 'material-ui/svg-icons/image/filter-1' {
    export import ImageFilter1 = __MaterialUI.SvgIcon;
    export default ImageFilter1;
}

declare module 'material-ui/svg-icons/image/edit' {
    export import ImageEdit = __MaterialUI.SvgIcon;
    export default ImageEdit;
}

declare module 'material-ui/svg-icons/image/timelapse' {
    export import ImageTimelapse = __MaterialUI.SvgIcon;
    export default ImageTimelapse;
}

declare module 'material-ui/svg-icons/image/nature' {
    export import ImageNature = __MaterialUI.SvgIcon;
    export default ImageNature;
}

declare module 'material-ui/svg-icons/image/monochrome-photos' {
    export import ImageMonochromePhotos = __MaterialUI.SvgIcon;
    export default ImageMonochromePhotos;
}

declare module 'material-ui/svg-icons/image/brightness-6' {
    export import ImageBrightness6 = __MaterialUI.SvgIcon;
    export default ImageBrightness6;
}

declare module 'material-ui/svg-icons/image/music-note' {
    export import ImageMusicNote = __MaterialUI.SvgIcon;
    export default ImageMusicNote;
}

declare module 'material-ui/svg-icons/image/collections' {
    export import ImageCollections = __MaterialUI.SvgIcon;
    export default ImageCollections;
}

declare module 'material-ui/svg-icons/image/wb-sunny' {
    export import ImageWbSunny = __MaterialUI.SvgIcon;
    export default ImageWbSunny;
}

declare module 'material-ui/svg-icons/image/hdr-strong' {
    export import ImageHdrStrong = __MaterialUI.SvgIcon;
    export default ImageHdrStrong;
}

declare module 'material-ui/svg-icons/image/panorama-vertical' {
    export import ImagePanoramaVertical = __MaterialUI.SvgIcon;
    export default ImagePanoramaVertical;
}

declare module 'material-ui/svg-icons/image/navigate-next' {
    export import ImageNavigateNext = __MaterialUI.SvgIcon;
    export default ImageNavigateNext;
}

declare module 'material-ui/svg-icons/image/looks-4' {
    export import ImageLooks4 = __MaterialUI.SvgIcon;
    export default ImageLooks4;
}

declare module 'material-ui/svg-icons/image/filter-4' {
    export import ImageFilter4 = __MaterialUI.SvgIcon;
    export default ImageFilter4;
}

declare module 'material-ui/svg-icons/image/brightness-1' {
    export import ImageBrightness1 = __MaterialUI.SvgIcon;
    export default ImageBrightness1;
}

declare module 'material-ui/svg-icons/image/exposure-plus-1' {
    export import ImageExposurePlus1 = __MaterialUI.SvgIcon;
    export default ImageExposurePlus1;
}

declare module 'material-ui/svg-icons/image/timer-3' {
    export import ImageTimer3 = __MaterialUI.SvgIcon;
    export default ImageTimer3;
}

declare module 'material-ui/svg-icons/image/exposure-zero' {
    export import ImageExposureZero = __MaterialUI.SvgIcon;
    export default ImageExposureZero;
}

declare module 'material-ui/svg-icons/image/blur-linear' {
    export import ImageBlurLinear = __MaterialUI.SvgIcon;
    export default ImageBlurLinear;
}

declare module 'material-ui/svg-icons/image/photo-library' {
    export import ImagePhotoLibrary = __MaterialUI.SvgIcon;
    export default ImagePhotoLibrary;
}

declare module 'material-ui/svg-icons/image/filter-drama' {
    export import ImageFilterDrama = __MaterialUI.SvgIcon;
    export default ImageFilterDrama;
}

declare module 'material-ui/svg-icons/image/dehaze' {
    export import ImageDehaze = __MaterialUI.SvgIcon;
    export default ImageDehaze;
}

declare module 'material-ui/svg-icons/image/control-point-duplicate' {
    export import ImageControlPointDuplicate = __MaterialUI.SvgIcon;
    export default ImageControlPointDuplicate;
}

declare module 'material-ui/svg-icons/image/image' {
    export import ImageImage = __MaterialUI.SvgIcon;
    export default ImageImage;
}

declare module 'material-ui/svg-icons/image/flash-auto' {
    export import ImageFlashAuto = __MaterialUI.SvgIcon;
    export default ImageFlashAuto;
}

declare module 'material-ui/svg-icons/image/rotate-90-degrees-ccw' {
    export import ImageRotate90DegreesCcw = __MaterialUI.SvgIcon;
    export default ImageRotate90DegreesCcw;
}

declare module 'material-ui/svg-icons/image/blur-circular' {
    export import ImageBlurCircular = __MaterialUI.SvgIcon;
    export default ImageBlurCircular;
}

declare module 'material-ui/svg-icons/image/filter-3' {
    export import ImageFilter3 = __MaterialUI.SvgIcon;
    export default ImageFilter3;
}

declare module 'material-ui/svg-icons/image/exposure-plus-2' {
    export import ImageExposurePlus2 = __MaterialUI.SvgIcon;
    export default ImageExposurePlus2;
}

declare module 'material-ui/svg-icons/image/flash-on' {
    export import ImageFlashOn = __MaterialUI.SvgIcon;
    export default ImageFlashOn;
}

declare module 'material-ui/svg-icons/image/view-comfy' {
    export import ImageViewComfy = __MaterialUI.SvgIcon;
    export default ImageViewComfy;
}

declare module 'material-ui/svg-icons/image/colorize' {
    export import ImageColorize = __MaterialUI.SvgIcon;
    export default ImageColorize;
}

declare module 'material-ui/svg-icons/image/brightness-4' {
    export import ImageBrightness4 = __MaterialUI.SvgIcon;
    export default ImageBrightness4;
}

declare module 'material-ui/svg-icons/image/crop-free' {
    export import ImageCropFree = __MaterialUI.SvgIcon;
    export default ImageCropFree;
}

declare module 'material-ui/svg-icons/image/vignette' {
    export import ImageVignette = __MaterialUI.SvgIcon;
    export default ImageVignette;
}

declare module 'material-ui/svg-icons/image/tag-faces' {
    export import ImageTagFaces = __MaterialUI.SvgIcon;
    export default ImageTagFaces;
}

declare module 'material-ui/svg-icons/image/brightness-7' {
    export import ImageBrightness7 = __MaterialUI.SvgIcon;
    export default ImageBrightness7;
}

declare module 'material-ui/svg-icons/image/healing' {
    export import ImageHealing = __MaterialUI.SvgIcon;
    export default ImageHealing;
}

declare module 'material-ui/svg-icons/image/nature-people' {
    export import ImageNaturePeople = __MaterialUI.SvgIcon;
    export default ImageNaturePeople;
}

declare module 'material-ui/svg-icons/image/gradient' {
    export import ImageGradient = __MaterialUI.SvgIcon;
    export default ImageGradient;
}

declare module 'material-ui/svg-icons/image/flash-off' {
    export import ImageFlashOff = __MaterialUI.SvgIcon;
    export default ImageFlashOff;
}

declare module 'material-ui/svg-icons/image/movie-creation' {
    export import ImageMovieCreation = __MaterialUI.SvgIcon;
    export default ImageMovieCreation;
}

declare module 'material-ui/svg-icons/image/leak-add' {
    export import ImageLeakAdd = __MaterialUI.SvgIcon;
    export default ImageLeakAdd;
}

declare module 'material-ui/svg-icons/image/filter-5' {
    export import ImageFilter5 = __MaterialUI.SvgIcon;
    export default ImageFilter5;
}

declare module 'material-ui/svg-icons/image/photo' {
    export import ImagePhoto = __MaterialUI.SvgIcon;
    export default ImagePhoto;
}

declare module 'material-ui/svg-icons/image/color-lens' {
    export import ImageColorLens = __MaterialUI.SvgIcon;
    export default ImageColorLens;
}

declare module 'material-ui/svg-icons/image/broken-image' {
    export import ImageBrokenImage = __MaterialUI.SvgIcon;
    export default ImageBrokenImage;
}

declare module 'material-ui/svg-icons/image/looks-6' {
    export import ImageLooks6 = __MaterialUI.SvgIcon;
    export default ImageLooks6;
}

declare module 'material-ui/svg-icons/image/picture-as-pdf' {
    export import ImagePictureAsPdf = __MaterialUI.SvgIcon;
    export default ImagePictureAsPdf;
}

declare module 'material-ui/svg-icons/image/palette' {
    export import ImagePalette = __MaterialUI.SvgIcon;
    export default ImagePalette;
}

declare module 'material-ui/svg-icons/image/crop-landscape' {
    export import ImageCropLandscape = __MaterialUI.SvgIcon;
    export default ImageCropLandscape;
}

declare module 'material-ui/svg-icons/image/grid-on' {
    export import ImageGridOn = __MaterialUI.SvgIcon;
    export default ImageGridOn;
}

declare module 'material-ui/svg-icons/image/slideshow' {
    export import ImageSlideshow = __MaterialUI.SvgIcon;
    export default ImageSlideshow;
}

declare module 'material-ui/svg-icons/image/brightness-3' {
    export import ImageBrightness3 = __MaterialUI.SvgIcon;
    export default ImageBrightness3;
}

declare module 'material-ui/svg-icons/image/style' {
    export import ImageStyle = __MaterialUI.SvgIcon;
    export default ImageStyle;
}

declare module 'material-ui/svg-icons/image/filter-vintage' {
    export import ImageFilterVintage = __MaterialUI.SvgIcon;
    export default ImageFilterVintage;
}

declare module 'material-ui/svg-icons/image/tune' {
    export import ImageTune = __MaterialUI.SvgIcon;
    export default ImageTune;
}

declare module 'material-ui/svg-icons/image/camera' {
    export import ImageCamera = __MaterialUI.SvgIcon;
    export default ImageCamera;
}

declare module 'material-ui/svg-icons/image/timer' {
    export import ImageTimer = __MaterialUI.SvgIcon;
    export default ImageTimer;
}

declare module 'material-ui/svg-icons/image/landscape' {
    export import ImageLandscape = __MaterialUI.SvgIcon;
    export default ImageLandscape;
}

declare module 'material-ui/svg-icons/image/crop-16-9' {
    export import ImageCrop169 = __MaterialUI.SvgIcon;
    export default ImageCrop169;
}

declare module 'material-ui/svg-icons/image/add-to-photos' {
    export import ImageAddToPhotos = __MaterialUI.SvgIcon;
    export default ImageAddToPhotos;
}

declare module 'material-ui/svg-icons/image/wb-incandescent' {
    export import ImageWbIncandescent = __MaterialUI.SvgIcon;
    export default ImageWbIncandescent;
}

declare module 'material-ui/svg-icons/image/hdr-weak' {
    export import ImageHdrWeak = __MaterialUI.SvgIcon;
    export default ImageHdrWeak;
}

declare module 'material-ui/svg-icons/image/details' {
    export import ImageDetails = __MaterialUI.SvgIcon;
    export default ImageDetails;
}

declare module 'material-ui/svg-icons/image/view-compact' {
    export import ImageViewCompact = __MaterialUI.SvgIcon;
    export default ImageViewCompact;
}

declare module 'material-ui/svg-icons/image/brightness-5' {
    export import ImageBrightness5 = __MaterialUI.SvgIcon;
    export default ImageBrightness5;
}

declare module 'material-ui/svg-icons/image/center-focus-weak' {
    export import ImageCenterFocusWeak = __MaterialUI.SvgIcon;
    export default ImageCenterFocusWeak;
}

declare module 'material-ui/svg-icons/image/adjust' {
    export import ImageAdjust = __MaterialUI.SvgIcon;
    export default ImageAdjust;
}

declare module 'material-ui/svg-icons/image/camera-front' {
    export import ImageCameraFront = __MaterialUI.SvgIcon;
    export default ImageCameraFront;
}

declare module 'material-ui/svg-icons/image/transform' {
    export import ImageTransform = __MaterialUI.SvgIcon;
    export default ImageTransform;
}

declare module 'material-ui/svg-icons/image/filter' {
    export import ImageFilter = __MaterialUI.SvgIcon;
    export default ImageFilter;
}

declare module 'material-ui/svg-icons/image/grain' {
    export import ImageGrain = __MaterialUI.SvgIcon;
    export default ImageGrain;
}

declare module 'material-ui/svg-icons/image/filter-9-plus' {
    export import ImageFilter9Plus = __MaterialUI.SvgIcon;
    export default ImageFilter9Plus;
}

declare module 'material-ui/svg-icons/image/looks-5' {
    export import ImageLooks5 = __MaterialUI.SvgIcon;
    export default ImageLooks5;
}

declare module 'material-ui/svg-icons/image/hdr-on' {
    export import ImageHdrOn = __MaterialUI.SvgIcon;
    export default ImageHdrOn;
}

declare module 'material-ui/svg-icons/image/audiotrack' {
    export import ImageAudiotrack = __MaterialUI.SvgIcon;
    export default ImageAudiotrack;
}

declare module 'material-ui/svg-icons/image/compare' {
    export import ImageCompare = __MaterialUI.SvgIcon;
    export default ImageCompare;
}

declare module 'material-ui/svg-icons/image/crop' {
    export import ImageCrop = __MaterialUI.SvgIcon;
    export default ImageCrop;
}

declare module 'material-ui/svg-icons/image/texture' {
    export import ImageTexture = __MaterialUI.SvgIcon;
    export default ImageTexture;
}

declare module 'material-ui/svg-icons/image/movie-filter' {
    export import ImageMovieFilter = __MaterialUI.SvgIcon;
    export default ImageMovieFilter;
}

declare module 'material-ui/svg-icons/image/exposure' {
    export import ImageExposure = __MaterialUI.SvgIcon;
    export default ImageExposure;
}

declare module 'material-ui/svg-icons/image/filter-b-and-w' {
    export import ImageFilterBAndW = __MaterialUI.SvgIcon;
    export default ImageFilterBAndW;
}

declare module 'material-ui/svg-icons/image/photo-size-select-actual' {
    export import ImagePhotoSizeSelectActual = __MaterialUI.SvgIcon;
    export default ImagePhotoSizeSelectActual;
}

declare module 'material-ui/svg-icons/image/crop-5-4' {
    export import ImageCrop54 = __MaterialUI.SvgIcon;
    export default ImageCrop54;
}

declare module 'material-ui/svg-icons/image/brightness-2' {
    export import ImageBrightness2 = __MaterialUI.SvgIcon;
    export default ImageBrightness2;
}

declare module 'material-ui/svg-icons/image/tonality' {
    export import ImageTonality = __MaterialUI.SvgIcon;
    export default ImageTonality;
}

declare module 'material-ui/svg-icons/image/panorama-wide-angle' {
    export import ImagePanoramaWideAngle = __MaterialUI.SvgIcon;
    export default ImagePanoramaWideAngle;
}

declare module 'material-ui/svg-icons/image/flip' {
    export import ImageFlip = __MaterialUI.SvgIcon;
    export default ImageFlip;
}

declare module 'material-ui/svg-icons/image/filter-9' {
    export import ImageFilter9 = __MaterialUI.SvgIcon;
    export default ImageFilter9;
}

declare module 'material-ui/svg-icons/image/blur-on' {
    export import ImageBlurOn = __MaterialUI.SvgIcon;
    export default ImageBlurOn;
}

declare module 'material-ui/svg-icons/image/assistant' {
    export import ImageAssistant = __MaterialUI.SvgIcon;
    export default ImageAssistant;
}

declare module 'material-ui/svg-icons/image/lens' {
    export import ImageLens = __MaterialUI.SvgIcon;
    export default ImageLens;
}

declare module 'material-ui/svg-icons/image/switch-camera' {
    export import ImageSwitchCamera = __MaterialUI.SvgIcon;
    export default ImageSwitchCamera;
}

declare module 'material-ui/svg-icons/image/photo-filter' {
    export import ImagePhotoFilter = __MaterialUI.SvgIcon;
    export default ImagePhotoFilter;
}

declare module 'material-ui/svg-icons/image/wb-iridescent' {
    export import ImageWbIridescent = __MaterialUI.SvgIcon;
    export default ImageWbIridescent;
}

declare module 'material-ui/svg-icons/image/crop-square' {
    export import ImageCropSquare = __MaterialUI.SvgIcon;
    export default ImageCropSquare;
}

declare module 'material-ui/svg-icons/image/timer-10' {
    export import ImageTimer10 = __MaterialUI.SvgIcon;
    export default ImageTimer10;
}

declare module 'material-ui/svg-icons/image/rotate-right' {
    export import ImageRotateRight = __MaterialUI.SvgIcon;
    export default ImageRotateRight;
}

declare module 'material-ui/svg-icons/image/grid-off' {
    export import ImageGridOff = __MaterialUI.SvgIcon;
    export default ImageGridOff;
}

declare module 'material-ui/svg-icons/image/filter-7' {
    export import ImageFilter7 = __MaterialUI.SvgIcon;
    export default ImageFilter7;
}

declare module 'material-ui/svg-icons/image/loupe' {
    export import ImageLoupe = __MaterialUI.SvgIcon;
    export default ImageLoupe;
}

declare module 'material-ui/svg-icons/image/filter-6' {
    export import ImageFilter6 = __MaterialUI.SvgIcon;
    export default ImageFilter6;
}

declare module 'material-ui/svg-icons/image/filter-tilt-shift' {
    export import ImageFilterTiltShift = __MaterialUI.SvgIcon;
    export default ImageFilterTiltShift;
}

declare module 'material-ui/svg-icons/image/crop-din' {
    export import ImageCropDin = __MaterialUI.SvgIcon;
    export default ImageCropDin;
}

declare module 'material-ui/svg-icons/image/center-focus-strong' {
    export import ImageCenterFocusStrong = __MaterialUI.SvgIcon;
    export default ImageCenterFocusStrong;
}

declare module 'material-ui/svg-icons/image/rotate-left' {
    export import ImageRotateLeft = __MaterialUI.SvgIcon;
    export default ImageRotateLeft;
}

declare module 'material-ui/svg-icons/image/filter-hdr' {
    export import ImageFilterHdr = __MaterialUI.SvgIcon;
    export default ImageFilterHdr;
}

declare module 'material-ui/svg-icons/image/timer-off' {
    export import ImageTimerOff = __MaterialUI.SvgIcon;
    export default ImageTimerOff;
}

declare module 'material-ui/svg-icons/image/straighten' {
    export import ImageStraighten = __MaterialUI.SvgIcon;
    export default ImageStraighten;
}

declare module 'material-ui/svg-icons/image/exposure-neg-1' {
    export import ImageExposureNeg1 = __MaterialUI.SvgIcon;
    export default ImageExposureNeg1;
}

declare module 'material-ui/svg-icons/image/navigate-before' {
    export import ImageNavigateBefore = __MaterialUI.SvgIcon;
    export default ImageNavigateBefore;
}

declare module 'material-ui/svg-icons/image/iso' {
    export import ImageIso = __MaterialUI.SvgIcon;
    export default ImageIso;
}

declare module 'material-ui/svg-icons/image/photo-album' {
    export import ImagePhotoAlbum = __MaterialUI.SvgIcon;
    export default ImagePhotoAlbum;
}

declare module 'material-ui/svg-icons/image/crop-rotate' {
    export import ImageCropRotate = __MaterialUI.SvgIcon;
    export default ImageCropRotate;
}

declare module 'material-ui/svg-icons/image/remove-red-eye' {
    export import ImageRemoveRedEye = __MaterialUI.SvgIcon;
    export default ImageRemoveRedEye;
}

declare module 'material-ui/svg-icons/image/crop-portrait' {
    export import ImageCropPortrait = __MaterialUI.SvgIcon;
    export default ImageCropPortrait;
}

declare module 'material-ui/svg-icons/image/camera-alt' {
    export import ImageCameraAlt = __MaterialUI.SvgIcon;
    export default ImageCameraAlt;
}

declare module 'material-ui/svg-icons/image/control-point' {
    export import ImageControlPoint = __MaterialUI.SvgIcon;
    export default ImageControlPoint;
}

declare module 'material-ui/svg-icons/image/panorama' {
    export import ImagePanorama = __MaterialUI.SvgIcon;
    export default ImagePanorama;
}

declare module 'material-ui/svg-icons/image/panorama-fish-eye' {
    export import ImagePanoramaFishEye = __MaterialUI.SvgIcon;
    export default ImagePanoramaFishEye;
}

declare module 'material-ui/svg-icons/image/filter-8' {
    export import ImageFilter8 = __MaterialUI.SvgIcon;
    export default ImageFilter8;
}

declare module 'material-ui/svg-icons/image/looks-two' {
    export import ImageLooksTwo = __MaterialUI.SvgIcon;
    export default ImageLooksTwo;
}

declare module 'material-ui/svg-icons/image/panorama-horizontal' {
    export import ImagePanoramaHorizontal = __MaterialUI.SvgIcon;
    export default ImagePanoramaHorizontal;
}

declare module 'material-ui/svg-icons/image/looks-3' {
    export import ImageLooks3 = __MaterialUI.SvgIcon;
    export default ImageLooks3;
}

declare module 'material-ui/svg-icons/image/filter-none' {
    export import ImageFilterNone = __MaterialUI.SvgIcon;
    export default ImageFilterNone;
}

declare module 'material-ui/svg-icons/image/photo-size-select-large' {
    export import ImagePhotoSizeSelectLarge = __MaterialUI.SvgIcon;
    export default ImagePhotoSizeSelectLarge;
}

declare module 'material-ui/svg-icons/image/blur-off' {
    export import ImageBlurOff = __MaterialUI.SvgIcon;
    export default ImageBlurOff;
}

declare module 'material-ui/svg-icons/image/camera-roll' {
    export import ImageCameraRoll = __MaterialUI.SvgIcon;
    export default ImageCameraRoll;
}

declare module 'material-ui/svg-icons/image/leak-remove' {
    export import ImageLeakRemove = __MaterialUI.SvgIcon;
    export default ImageLeakRemove;
}

declare module 'material-ui/svg-icons/image/filter-frames' {
    export import ImageFilterFrames = __MaterialUI.SvgIcon;
    export default ImageFilterFrames;
}

declare module 'material-ui/svg-icons/image/flare' {
    export import ImageFlare = __MaterialUI.SvgIcon;
    export default ImageFlare;
}

declare module 'material-ui/svg-icons/image/photo-size-select-small' {
    export import ImagePhotoSizeSelectSmall = __MaterialUI.SvgIcon;
    export default ImagePhotoSizeSelectSmall;
}

declare module 'material-ui/svg-icons/image/photo-camera' {
    export import ImagePhotoCamera = __MaterialUI.SvgIcon;
    export default ImagePhotoCamera;
}

declare module 'material-ui/svg-icons/image/hdr-off' {
    export import ImageHdrOff = __MaterialUI.SvgIcon;
    export default ImageHdrOff;
}

declare module 'material-ui/svg-icons/image/filter-2' {
    export import ImageFilter2 = __MaterialUI.SvgIcon;
    export default ImageFilter2;
}

declare module 'material-ui/svg-icons/image/crop-original' {
    export import ImageCropOriginal = __MaterialUI.SvgIcon;
    export default ImageCropOriginal;
}

declare module 'material-ui/svg-icons/places/kitchen' {
    export import PlacesKitchen = __MaterialUI.SvgIcon;
    export default PlacesKitchen;
}

declare module 'material-ui/svg-icons/places/spa' {
    export import PlacesSpa = __MaterialUI.SvgIcon;
    export default PlacesSpa;
}

declare module 'material-ui/svg-icons/places/all-inclusive' {
    export import PlacesAllInclusive = __MaterialUI.SvgIcon;
    export default PlacesAllInclusive;
}

declare module 'material-ui/svg-icons/places/ac-unit' {
    export import PlacesAcUnit = __MaterialUI.SvgIcon;
    export default PlacesAcUnit;
}

declare module 'material-ui/svg-icons/places/child-care' {
    export import PlacesChildCare = __MaterialUI.SvgIcon;
    export default PlacesChildCare;
}

declare module 'material-ui/svg-icons/places/golf-course' {
    export import PlacesGolfCourse = __MaterialUI.SvgIcon;
    export default PlacesGolfCourse;
}

declare module 'material-ui/svg-icons/places/business-center' {
    export import PlacesBusinessCenter = __MaterialUI.SvgIcon;
    export default PlacesBusinessCenter;
}

declare module 'material-ui/svg-icons/places/free-breakfast' {
    export import PlacesFreeBreakfast = __MaterialUI.SvgIcon;
    export default PlacesFreeBreakfast;
}

declare module 'material-ui/svg-icons/places/fitness-center' {
    export import PlacesFitnessCenter = __MaterialUI.SvgIcon;
    export default PlacesFitnessCenter;
}

declare module 'material-ui/svg-icons/places/pool' {
    export import PlacesPool = __MaterialUI.SvgIcon;
    export default PlacesPool;
}

declare module 'material-ui/svg-icons/places/child-friendly' {
    export import PlacesChildFriendly = __MaterialUI.SvgIcon;
    export default PlacesChildFriendly;
}

declare module 'material-ui/svg-icons/places/casino' {
    export import PlacesCasino = __MaterialUI.SvgIcon;
    export default PlacesCasino;
}

declare module 'material-ui/svg-icons/places/hot-tub' {
    export import PlacesHotTub = __MaterialUI.SvgIcon;
    export default PlacesHotTub;
}

declare module 'material-ui/svg-icons/places/smoke-free' {
    export import PlacesSmokeFree = __MaterialUI.SvgIcon;
    export default PlacesSmokeFree;
}

declare module 'material-ui/svg-icons/places/room-service' {
    export import PlacesRoomService = __MaterialUI.SvgIcon;
    export default PlacesRoomService;
}

declare module 'material-ui/svg-icons/places/smoking-rooms' {
    export import PlacesSmokingRooms = __MaterialUI.SvgIcon;
    export default PlacesSmokingRooms;
}

declare module 'material-ui/svg-icons/places/beach-access' {
    export import PlacesBeachAccess = __MaterialUI.SvgIcon;
    export default PlacesBeachAccess;
}

declare module 'material-ui/svg-icons/places/airport-shuttle' {
    export import PlacesAirportShuttle = __MaterialUI.SvgIcon;
    export default PlacesAirportShuttle;
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

declare module 'material-ui/styles/baseThemes/darkBaseTheme' {
    export import darkBaseTheme = __MaterialUI.Styles.darkBaseTheme;
    export default darkBaseTheme;
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
    export default function withWidth<C extends Function>(options?: Options): (component: C) => C;
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

declare module "material-ui/svg-icons" {
    export import ActionAccessibility = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/accessibility');
    export import ActionAccessible = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/accessible');
    export import ActionAccountBalance = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/account-balance');
    export import ActionAccountBalanceWallet = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/account-balance-wallet');
    export import ActionAccountBox = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/account-box');
    export import ActionAccountCircle = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/account-circle');
    export import ActionAddShoppingCart = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/add-shopping-cart');
    export import ActionAlarm = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/alarm');
    export import ActionAlarmAdd = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/alarm-add');
    export import ActionAlarmOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/alarm-off');
    export import ActionAlarmOn = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/alarm-on');
    export import ActionAllOut = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/all-out');
    export import ActionAndroid = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/android');
    export import ActionAnnouncement = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/announcement');
    export import ActionAspectRatio = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/aspect-ratio');
    export import ActionAssessment = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/assessment');
    export import ActionAssignment = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/assignment');
    export import ActionAssignmentInd = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/assignment-ind');
    export import ActionAssignmentLate = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/assignment-late');
    export import ActionAssignmentReturn = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/assignment-return');
    export import ActionAssignmentReturned = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/assignment-returned');
    export import ActionAssignmentTurnedIn = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/assignment-turned-in');
    export import ActionAutorenew = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/autorenew');
    export import ActionBackup = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/backup');
    export import ActionBook = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/book');
    export import ActionBookmark = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/bookmark');
    export import ActionBookmarkBorder = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/bookmark-border');
    export import ActionBugReport = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/bug-report');
    export import ActionBuild = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/build');
    export import ActionCached = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/cached');
    export import ActionCameraEnhance = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/camera-enhance');
    export import ActionCardGiftcard = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/card-giftcard');
    export import ActionCardMembership = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/card-membership');
    export import ActionCardTravel = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/card-travel');
    export import ActionChangeHistory = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/change-history');
    export import ActionCheckCircle = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/check-circle');
    export import ActionChromeReaderMode = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/chrome-reader-mode');
    export import ActionClass = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/class');
    export import ActionCode = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/code');
    export import ActionCompareArrows = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/compare-arrows');
    export import ActionCopyright = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/copyright');
    export import ActionCreditCard = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/credit-card');
    export import ActionDashboard = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/dashboard');
    export import ActionDateRange = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/date-range');
    export import ActionDelete = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/delete');
    export import ActionDescription = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/description');
    export import ActionDns = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/dns');
    export import ActionDone = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/done');
    export import ActionDoneAll = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/done-all');
    export import ActionDonutLarge = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/donut-large');
    export import ActionDonutSmall = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/donut-small');
    export import ActionEject = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/eject');
    export import ActionEvent = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/event');
    export import ActionEventSeat = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/event-seat');
    export import ActionExitToApp = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/exit-to-app');
    export import ActionExplore = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/explore');
    export import ActionExtension = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/extension');
    export import ActionFace = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/face');
    export import ActionFavorite = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/favorite');
    export import ActionFavoriteBorder = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/favorite-border');
    export import ActionFeedback = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/feedback');
    export import ActionFindInPage = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/find-in-page');
    export import ActionFindReplace = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/find-replace');
    export import ActionFingerprint = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/fingerprint');
    export import ActionFlightLand = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/flight-land');
    export import ActionFlightTakeoff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/flight-takeoff');
    export import ActionFlipToBack = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/flip-to-back');
    export import ActionFlipToFront = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/flip-to-front');
    export import ActionGavel = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/gavel');
    export import ActionGetApp = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/get-app');
    export import ActionGif = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/gif');
    export import ActionGrade = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/grade');
    export import ActionGroupWork = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/group-work');
    export import ActionHelp = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/help');
    export import ActionHelpOutline = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/help-outline');
    export import ActionHighlightOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/highlight-off');
    export import ActionHistory = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/history');
    export import ActionHome = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/home');
    export import ActionHourglassEmpty = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/hourglass-empty');
    export import ActionHourglassFull = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/hourglass-full');
    export import ActionHttp = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/http');
    export import ActionHttps = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/https');
    export import ActionImportantDevices = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/important-devices');
    export import ActionInfo = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/info');
    export import ActionInfoOutline = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/info-outline');
    export import ActionInput = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/input');
    export import ActionInvertColors = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/invert-colors');
    export import ActionLabel = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/label');
    export import ActionLabelOutline = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/label-outline');
    export import ActionLanguage = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/language');
    export import ActionLaunch = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/launch');
    export import ActionLightbulbOutline = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/lightbulb-outline');
    export import ActionLineStyle = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/line-style');
    export import ActionLineWeight = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/line-weight');
    export import ActionList = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/list');
    export import ActionLock = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/lock');
    export import ActionLockOpen = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/lock-open');
    export import ActionLockOutline = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/lock-outline');
    export import ActionLoyalty = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/loyalty');
    export import ActionMarkunreadMailbox = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/markunread-mailbox');
    export import ActionMotorcycle = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/motorcycle');
    export import ActionNoteAdd = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/note-add');
    export import ActionOfflinePin = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/offline-pin');
    export import ActionOpacity = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/opacity');
    export import ActionOpenInBrowser = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/open-in-browser');
    export import ActionOpenInNew = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/open-in-new');
    export import ActionOpenWith = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/open-with');
    export import ActionPageview = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/pageview');
    export import ActionPanTool = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/pan-tool');
    export import ActionPayment = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/payment');
    export import ActionPermCameraMic = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/perm-camera-mic');
    export import ActionPermContactCalendar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/perm-contact-calendar');
    export import ActionPermDataSetting = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/perm-data-setting');
    export import ActionPermDeviceInformation = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/perm-device-information');
    export import ActionPermIdentity = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/perm-identity');
    export import ActionPermMedia = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/perm-media');
    export import ActionPermPhoneMsg = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/perm-phone-msg');
    export import ActionPermScanWifi = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/perm-scan-wifi');
    export import ActionPets = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/pets');
    export import ActionPictureInPicture = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/picture-in-picture');
    export import ActionPictureInPictureAlt = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/picture-in-picture-alt');
    export import ActionPlayForWork = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/play-for-work');
    export import ActionPolymer = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/polymer');
    export import ActionPowerSettingsNew = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/power-settings-new');
    export import ActionPregnantWoman = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/pregnant-woman');
    export import ActionPrint = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/print');
    export import ActionQueryBuilder = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/query-builder');
    export import ActionQuestionAnswer = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/question-answer');
    export import ActionReceipt = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/receipt');
    export import ActionRecordVoiceOver = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/record-voice-over');
    export import ActionRedeem = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/redeem');
    export import ActionReorder = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/reorder');
    export import ActionReportProblem = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/report-problem');
    export import ActionRestore = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/restore');
    export import ActionRoom = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/room');
    export import ActionRoundedCorner = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/rounded-corner');
    export import ActionRowing = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/rowing');
    export import ActionSchedule = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/schedule');
    export import ActionSearch = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/search');
    export import ActionSettings = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings');
    export import ActionSettingsApplications = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings-applications');
    export import ActionSettingsBackupRestore = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings-backup-restore');
    export import ActionSettingsBluetooth = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings-bluetooth');
    export import ActionSettingsBrightness = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings-brightness');
    export import ActionSettingsCell = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings-cell');
    export import ActionSettingsEthernet = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings-ethernet');
    export import ActionSettingsInputAntenna = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings-input-antenna');
    export import ActionSettingsInputComponent = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings-input-component');
    export import ActionSettingsInputComposite = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings-input-composite');
    export import ActionSettingsInputHdmi = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings-input-hdmi');
    export import ActionSettingsInputSvideo = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings-input-svideo');
    export import ActionSettingsOverscan = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings-overscan');
    export import ActionSettingsPhone = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings-phone');
    export import ActionSettingsPower = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings-power');
    export import ActionSettingsRemote = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings-remote');
    export import ActionSettingsVoice = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/settings-voice');
    export import ActionShop = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/shop');
    export import ActionShoppingBasket = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/shopping-basket');
    export import ActionShoppingCart = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/shopping-cart');
    export import ActionShopTwo = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/shop-two');
    export import ActionSpeakerNotes = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/speaker-notes');
    export import ActionSpellcheck = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/spellcheck');
    export import ActionStars = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/stars');
    export import ActionStore = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/store');
    export import ActionSubject = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/subject');
    export import ActionSupervisorAccount = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/supervisor-account');
    export import ActionSwapHoriz = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/swap-horiz');
    export import ActionSwapVert = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/swap-vert');
    export import ActionSwapVerticalCircle = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/swap-vertical-circle');
    export import ActionSystemUpdateAlt = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/system-update-alt');
    export import ActionTab = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/tab');
    export import ActionTabUnselected = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/tab-unselected');
    export import ActionTheaters = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/theaters');
    export import ActionThreeDRotation = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/three-d-rotation');
    export import ActionThumbDown = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/thumb-down');
    export import ActionThumbsUpDown = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/thumbs-up-down');
    export import ActionThumbUp = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/thumb-up');
    export import ActionTimeline = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/timeline');
    export import ActionToc = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/toc');
    export import ActionToday = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/today');
    export import ActionToll = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/toll');
    export import ActionTouchApp = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/touch-app');
    export import ActionTrackChanges = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/track-changes');
    export import ActionTranslate = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/translate');
    export import ActionTrendingDown = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/trending-down');
    export import ActionTrendingFlat = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/trending-flat');
    export import ActionTrendingUp = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/trending-up');
    export import ActionTurnedIn = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/turned-in');
    export import ActionTurnedInNot = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/turned-in-not');
    export import ActionUpdate = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/update');
    export import ActionVerifiedUser = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/verified-user');
    export import ActionViewAgenda = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/view-agenda');
    export import ActionViewArray = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/view-array');
    export import ActionViewCarousel = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/view-carousel');
    export import ActionViewColumn = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/view-column');
    export import ActionViewDay = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/view-day');
    export import ActionViewHeadline = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/view-headline');
    export import ActionViewList = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/view-list');
    export import ActionViewModule = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/view-module');
    export import ActionViewQuilt = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/view-quilt');
    export import ActionViewStream = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/view-stream');
    export import ActionViewWeek = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/view-week');
    export import ActionVisibility = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/visibility');
    export import ActionVisibilityOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/visibility-off');
    export import ActionWatchLater = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/watch-later');
    export import ActionWork = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/work');
    export import ActionYoutubeSearchedFor = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/youtube-searched-for');
    export import ActionZoomIn = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/zoom-in');
    export import ActionZoomOut = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/action/zoom-out');
    export import AlertAddAlert = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/alert/add-alert');
    export import AlertError = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/alert/error');
    export import AlertErrorOutline = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/alert/error-outline');
    export import AlertWarning = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/alert/warning');
    export import AvAddToQueue = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/add-to-queue');
    export import AvAirplay = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/airplay');
    export import AvAlbum = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/album');
    export import AvArtTrack = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/art-track');
    export import AvAvTimer = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/av-timer');
    export import AvClosedCaption = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/closed-caption');
    export import AvEqualizer = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/equalizer');
    export import AvExplicit = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/explicit');
    export import AvFastForward = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/fast-forward');
    export import AvFastRewind = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/fast-rewind');
    export import AvFiberDvr = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/fiber-dvr');
    export import AvFiberManualRecord = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/fiber-manual-record');
    export import AvFiberNew = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/fiber-new');
    export import AvFiberPin = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/fiber-pin');
    export import AvFiberSmartRecord = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/fiber-smart-record');
    export import AvForward10 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/forward-10');
    export import AvForward30 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/forward-30');
    export import AvForward5 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/forward-5');
    export import AvGames = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/games');
    export import AvHd = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/hd');
    export import AvHearing = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/hearing');
    export import AvHighQuality = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/high-quality');
    export import AvLibraryAdd = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/library-add');
    export import AvLibraryBooks = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/library-books');
    export import AvLibraryMusic = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/library-music');
    export import AvLoop = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/loop');
    export import AvMic = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/mic');
    export import AvMicNone = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/mic-none');
    export import AvMicOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/mic-off');
    export import AvMovie = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/movie');
    export import AvMusicVideo = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/music-video');
    export import AvNewReleases = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/new-releases');
    export import AvNotInterested = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/not-interested');
    export import AvPause = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/pause');
    export import AvPauseCircleFilled = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/pause-circle-filled');
    export import AvPauseCircleOutline = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/pause-circle-outline');
    export import AvPlayArrow = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/play-arrow');
    export import AvPlayCircleFilled = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/play-circle-filled');
    export import AvPlayCircleOutline = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/play-circle-outline');
    export import AvPlaylistAdd = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/playlist-add');
    export import AvPlaylistAddCheck = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/playlist-add-check');
    export import AvPlaylistPlay = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/playlist-play');
    export import AvQueue = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/queue');
    export import AvQueueMusic = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/queue-music');
    export import AvQueuePlayNext = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/queue-play-next');
    export import AvRadio = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/radio');
    export import AvRecentActors = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/recent-actors');
    export import AvRemoveFromQueue = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/remove-from-queue');
    export import AvRepeat = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/repeat');
    export import AvRepeatOne = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/repeat-one');
    export import AvReplay = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/replay');
    export import AvReplay10 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/replay-10');
    export import AvReplay30 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/replay-30');
    export import AvReplay5 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/replay-5');
    export import AvShuffle = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/shuffle');
    export import AvSkipNext = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/skip-next');
    export import AvSkipPrevious = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/skip-previous');
    export import AvSlowMotionVideo = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/slow-motion-video');
    export import AvSnooze = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/snooze');
    export import AvSortByAlpha = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/sort-by-alpha');
    export import AvStop = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/stop');
    export import AvSubscriptions = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/subscriptions');
    export import AvSubtitles = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/subtitles');
    export import AvSurroundSound = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/surround-sound');
    export import AvVideocam = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/videocam');
    export import AvVideocamOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/videocam-off');
    export import AvVideoLibrary = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/video-library');
    export import AvVolumeDown = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/volume-down');
    export import AvVolumeMute = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/volume-mute');
    export import AvVolumeOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/volume-off');
    export import AvVolumeUp = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/volume-up');
    export import AvWeb = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/web');
    export import AvWebAsset = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/av/web-asset');
    export import CommunicationBusiness = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/business');
    export import CommunicationCall = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/call');
    export import CommunicationCallEnd = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/call-end');
    export import CommunicationCallMade = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/call-made');
    export import CommunicationCallMerge = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/call-merge');
    export import CommunicationCallMissed = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/call-missed');
    export import CommunicationCallMissedOutgoing = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/call-missed-outgoing');
    export import CommunicationCallReceived = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/call-received');
    export import CommunicationCallSplit = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/call-split');
    export import CommunicationChat = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/chat');
    export import CommunicationChatBubble = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/chat-bubble');
    export import CommunicationChatBubbleOutline = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/chat-bubble-outline');
    export import CommunicationClearAll = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/clear-all');
    export import CommunicationComment = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/comment');
    export import CommunicationContactMail = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/contact-mail');
    export import CommunicationContactPhone = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/contact-phone');
    export import CommunicationContacts = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/contacts');
    export import CommunicationDialerSip = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/dialer-sip');
    export import CommunicationDialpad = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/dialpad');
    export import CommunicationEmail = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/email');
    export import CommunicationForum = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/forum');
    export import CommunicationImportContacts = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/import-contacts');
    export import CommunicationImportExport = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/import-export');
    export import CommunicationInvertColorsOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/invert-colors-off');
    export import CommunicationLiveHelp = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/live-help');
    export import CommunicationLocationOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/location-off');
    export import CommunicationLocationOn = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/location-on');
    export import CommunicationMailOutline = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/mail-outline');
    export import CommunicationMessage = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/message');
    export import CommunicationNoSim = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/no-sim');
    export import CommunicationPhone = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/phone');
    export import CommunicationPhonelinkErase = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/phonelink-erase');
    export import CommunicationPhonelinkLock = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/phonelink-lock');
    export import CommunicationPhonelinkRing = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/phonelink-ring');
    export import CommunicationPhonelinkSetup = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/phonelink-setup');
    export import CommunicationPortableWifiOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/portable-wifi-off');
    export import CommunicationPresentToAll = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/present-to-all');
    export import CommunicationRingVolume = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/ring-volume');
    export import CommunicationScreenShare = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/screen-share');
    export import CommunicationSpeakerPhone = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/speaker-phone');
    export import CommunicationStayCurrentLandscape = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/stay-current-landscape');
    export import CommunicationStayCurrentPortrait = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/stay-current-portrait');
    export import CommunicationStayPrimaryLandscape = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/stay-primary-landscape');
    export import CommunicationStayPrimaryPortrait = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/stay-primary-portrait');
    export import CommunicationStopScreenShare = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/stop-screen-share');
    export import CommunicationSwapCalls = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/swap-calls');
    export import CommunicationTactMail = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/tact-mail');
    export import CommunicationTextsms = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/textsms');
    export import CommunicationVoicemail = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/voicemail');
    export import CommunicationVpnKey = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/communication/vpn-key');
    export import ContentAdd = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/add');
    export import ContentAddBox = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/add-box');
    export import ContentAddCircle = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/add-circle');
    export import ContentAddCircleOutline = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/add-circle-outline');
    export import ContentArchive = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/archive');
    export import ContentBackspace = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/backspace');
    export import ContentBlock = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/block');
    export import ContentClear = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/clear');
    export import ContentContentCopy = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/content-copy');
    export import ContentContentCut = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/content-cut');
    export import ContentContentPaste = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/content-paste');
    export import ContentCreate = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/create');
    export import ContentDrafts = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/drafts');
    export import ContentFilterList = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/filter-list');
    export import ContentFlag = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/flag');
    export import ContentFontDownload = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/font-download');
    export import ContentForward = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/forward');
    export import ContentGesture = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/gesture');
    export import ContentInbox = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/inbox');
    export import ContentLink = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/link');
    export import ContentMail = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/mail');
    export import ContentMarkunread = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/markunread');
    export import ContentMoveToInbox = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/move-to-inbox');
    export import ContentNextWeek = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/next-week');
    export import ContentRedo = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/redo');
    export import ContentRemove = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/remove');
    export import ContentRemoveCircle = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/remove-circle');
    export import ContentRemoveCircleOutline = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/remove-circle-outline');
    export import ContentReply = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/reply');
    export import ContentReplyAll = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/reply-all');
    export import ContentReport = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/report');
    export import ContentSave = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/save');
    export import ContentSelectAll = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/select-all');
    export import ContentSend = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/send');
    export import ContentSort = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/sort');
    export import ContentTextFormat = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/text-format');
    export import ContentUnarchive = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/unarchive');
    export import ContentUndo = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/undo');
    export import ContentWeekend = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/content/weekend');
    export import DeviceAccessAlarm = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/access-alarm');
    export import DeviceAccessAlarms = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/access-alarms');
    export import DeviceAccessTime = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/access-time');
    export import DeviceAddAlarm = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/add-alarm');
    export import DeviceAirplanemodeActive = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/airplanemode-active');
    export import DeviceAirplanemodeInactive = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/airplanemode-inactive');
    export import DeviceBattery20 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-20');
    export import DeviceBattery30 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-30');
    export import DeviceBattery50 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-50');
    export import DeviceBattery60 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-60');
    export import DeviceBattery80 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-80');
    export import DeviceBattery90 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-90');
    export import DeviceBatteryAlert = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-alert');
    export import DeviceBatteryCharging20 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-charging-20');
    export import DeviceBatteryCharging30 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-charging-30');
    export import DeviceBatteryCharging50 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-charging-50');
    export import DeviceBatteryCharging60 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-charging-60');
    export import DeviceBatteryCharging80 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-charging-80');
    export import DeviceBatteryCharging90 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-charging-90');
    export import DeviceBatteryChargingFull = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-charging-full');
    export import DeviceBatteryFull = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-full');
    export import DeviceBatteryStd = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-std');
    export import DeviceBatteryUnknown = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/battery-unknown');
    export import DeviceBluetooth = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/bluetooth');
    export import DeviceBluetoothConnected = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/bluetooth-connected');
    export import DeviceBluetoothDisabled = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/bluetooth-disabled');
    export import DeviceBluetoothSearching = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/bluetooth-searching');
    export import DeviceBrightnessAuto = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/brightness-auto');
    export import DeviceBrightnessHigh = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/brightness-high');
    export import DeviceBrightnessLow = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/brightness-low');
    export import DeviceBrightnessMedium = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/brightness-medium');
    export import DeviceDataUsage = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/data-usage');
    export import DeviceDeveloperMode = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/developer-mode');
    export import DeviceDevices = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/devices');
    export import DeviceDvr = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/dvr');
    export import DeviceGpsFixed = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/gps-fixed');
    export import DeviceGpsNotFixed = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/gps-not-fixed');
    export import DeviceGpsOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/gps-off');
    export import DeviceGraphicEq = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/graphic-eq');
    export import DeviceLocationDisabled = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/location-disabled');
    export import DeviceLocationSearching = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/location-searching');
    export import DeviceNetworkCell = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/network-cell');
    export import DeviceNetworkWifi = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/network-wifi');
    export import DeviceNfc = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/nfc');
    export import DeviceScreenLockLandscape = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/screen-lock-landscape');
    export import DeviceScreenLockPortrait = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/screen-lock-portrait');
    export import DeviceScreenLockRotation = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/screen-lock-rotation');
    export import DeviceScreenRotation = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/screen-rotation');
    export import DeviceSdStorage = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/sd-storage');
    export import DeviceSettingsSystemDaydream = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/settings-system-daydream');
    export import DeviceSignalCellular0Bar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-0-bar');
    export import DeviceSignalCellular1Bar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-1-bar');
    export import DeviceSignalCellular2Bar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-2-bar');
    export import DeviceSignalCellular3Bar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-3-bar');
    export import DeviceSignalCellular4Bar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-4-bar');
    export import DeviceSignalCellularConnectedNoInternet0Bar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-connected-no-internet-0-bar');
    export import DeviceSignalCellularConnectedNoInternet1Bar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-connected-no-internet-1-bar');
    export import DeviceSignalCellularConnectedNoInternet2Bar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-connected-no-internet-2-bar');
    export import DeviceSignalCellularConnectedNoInternet3Bar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-connected-no-internet-3-bar');
    export import DeviceSignalCellularConnectedNoInternet4Bar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-connected-no-internet-4-bar');
    export import DeviceSignalCellularNoSim = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-no-sim');
    export import DeviceSignalCellularNull = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-null');
    export import DeviceSignalCellularOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-off');
    export import DeviceSignalWifi0Bar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-0-bar');
    export import DeviceSignalWifi1Bar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-1-bar');
    export import DeviceSignalWifi1BarLock = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-1-bar-lock');
    export import DeviceSignalWifi2Bar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-2-bar');
    export import DeviceSignalWifi2BarLock = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-2-bar-lock');
    export import DeviceSignalWifi3Bar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-3-bar');
    export import DeviceSignalWifi3BarLock = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-3-bar-lock');
    export import DeviceSignalWifi4Bar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-4-bar');
    export import DeviceSignalWifi4BarLock = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-4-bar-lock');
    export import DeviceSignalWifiOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-off');
    export import DeviceStorage = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/storage');
    export import DeviceUsb = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/usb');
    export import DeviceWallpaper = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/wallpaper');
    export import DeviceWidgets = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/widgets');
    export import DeviceWifiLock = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/wifi-lock');
    export import DeviceWifiTethering = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/device/wifi-tethering');
    export import EditorAttachFile = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/attach-file');
    export import EditorAttachMoney = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/attach-money');
    export import EditorBorderAll = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/border-all');
    export import EditorBorderBottom = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/border-bottom');
    export import EditorBorderClear = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/border-clear');
    export import EditorBorderColor = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/border-color');
    export import EditorBorderHorizontal = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/border-horizontal');
    export import EditorBorderInner = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/border-inner');
    export import EditorBorderLeft = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/border-left');
    export import EditorBorderOuter = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/border-outer');
    export import EditorBorderRight = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/border-right');
    export import EditorBorderStyle = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/border-style');
    export import EditorBorderTop = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/border-top');
    export import EditorBorderVertical = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/border-vertical');
    export import EditorDragHandle = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/drag-handle');
    export import EditorFormatAlignCenter = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-align-center');
    export import EditorFormatAlignJustify = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-align-justify');
    export import EditorFormatAlignLeft = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-align-left');
    export import EditorFormatAlignRight = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-align-right');
    export import EditorFormatBold = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-bold');
    export import EditorFormatClear = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-clear');
    export import EditorFormatColorFill = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-color-fill');
    export import EditorFormatColorReset = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-color-reset');
    export import EditorFormatColorText = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-color-text');
    export import EditorFormatIndentDecrease = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-indent-decrease');
    export import EditorFormatIndentIncrease = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-indent-increase');
    export import EditorFormatItalic = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-italic');
    export import EditorFormatLineSpacing = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-line-spacing');
    export import EditorFormatListBulleted = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-list-bulleted');
    export import EditorFormatListNumbered = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-list-numbered');
    export import EditorFormatPaint = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-paint');
    export import EditorFormatQuote = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-quote');
    export import EditorFormatShapes = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-shapes');
    export import EditorFormatSize = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-size');
    export import EditorFormatStrikethrough = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-strikethrough');
    export import EditorFormatTextdirectionLToR = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-textdirection-l-to-r');
    export import EditorFormatTextdirectionRToL = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-textdirection-r-to-l');
    export import EditorFormatUnderlined = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/format-underlined');
    export import EditorFunctions = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/functions');
    export import EditorHighlight = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/highlight');
    export import EditorInsertChart = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/insert-chart');
    export import EditorInsertComment = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/insert-comment');
    export import EditorInsertDriveFile = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/insert-drive-file');
    export import EditorInsertEmoticon = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/insert-emoticon');
    export import EditorInsertInvitation = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/insert-invitation');
    export import EditorInsertLink = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/insert-link');
    export import EditorInsertPhoto = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/insert-photo');
    export import EditorLinearScale = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/linear-scale');
    export import EditorMergeType = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/merge-type');
    export import EditorModeComment = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/mode-comment');
    export import EditorModeEdit = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/mode-edit');
    export import EditorMoneyOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/money-off');
    export import EditorPublish = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/publish');
    export import EditorShortText = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/short-text');
    export import EditorSpaceBar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/space-bar');
    export import EditorStrikethroughS = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/strikethrough-s');
    export import EditorTextFields = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/text-fields');
    export import EditorVerticalAlignBottom = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/vertical-align-bottom');
    export import EditorVerticalAlignCenter = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/vertical-align-center');
    export import EditorVerticalAlignTop = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/vertical-align-top');
    export import EditorWrapText = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/editor/wrap-text');
    export import FileAttachment = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/file/attachment');
    export import FileCloud = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/file/cloud');
    export import FileCloudCircle = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/file/cloud-circle');
    export import FileCloudDone = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/file/cloud-done');
    export import FileCloudDownload = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/file/cloud-download');
    export import FileCloudOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/file/cloud-off');
    export import FileCloudQueue = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/file/cloud-queue');
    export import FileCloudUpload = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/file/cloud-upload');
    export import FileCreateNewFolder = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/file/create-new-folder');
    export import FileFileDownload = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/file/file-download');
    export import FileFileUpload = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/file/file-upload');
    export import FileFolder = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/file/folder');
    export import FileFolderOpen = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/file/folder-open');
    export import FileFolderShared = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/file/folder-shared');
    export import HardwareCast = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/cast');
    export import HardwareCastConnected = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/cast-connected');
    export import HardwareComputer = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/computer');
    export import HardwareDesktopMac = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/desktop-mac');
    export import HardwareDesktopWindows = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/desktop-windows');
    export import HardwareDeveloperBoard = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/developer-board');
    export import HardwareDeviceHub = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/device-hub');
    export import HardwareDevicesOther = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/devices-other');
    export import HardwareDock = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/dock');
    export import HardwareGamepad = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/gamepad');
    export import HardwareHeadset = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/headset');
    export import HardwareHeadsetMic = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/headset-mic');
    export import HardwareKeyboard = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard');
    export import HardwareKeyboardArrowDown = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-arrow-down');
    export import HardwareKeyboardArrowLeft = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-arrow-left');
    export import HardwareKeyboardArrowRight = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-arrow-right');
    export import HardwareKeyboardArrowUp = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-arrow-up');
    export import HardwareKeyboardBackspace = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-backspace');
    export import HardwareKeyboardCapslock = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-capslock');
    export import HardwareKeyboardHide = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-hide');
    export import HardwareKeyboardReturn = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-return');
    export import HardwareKeyboardTab = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-tab');
    export import HardwareKeyboardVoice = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-voice');
    export import HardwareLaptop = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/laptop');
    export import HardwareLaptopChromebook = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/laptop-chromebook');
    export import HardwareLaptopMac = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/laptop-mac');
    export import HardwareLaptopWindows = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/laptop-windows');
    export import HardwareMemory = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/memory');
    export import HardwareMouse = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/mouse');
    export import HardwarePhoneAndroid = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/phone-android');
    export import HardwarePhoneIphone = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/phone-iphone');
    export import HardwarePhonelink = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/phonelink');
    export import HardwarePhonelinkOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/phonelink-off');
    export import HardwarePowerInput = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/power-input');
    export import HardwareRouter = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/router');
    export import HardwareScanner = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/scanner');
    export import HardwareSecurity = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/security');
    export import HardwareSimCard = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/sim-card');
    export import HardwareSmartphone = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/smartphone');
    export import HardwareSpeaker = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/speaker');
    export import HardwareSpeakerGroup = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/speaker-group');
    export import HardwareTablet = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/tablet');
    export import HardwareTabletAndroid = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/tablet-android');
    export import HardwareTabletMac = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/tablet-mac');
    export import HardwareToys = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/toys');
    export import HardwareTv = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/tv');
    export import HardwareVideogameAsset = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/videogame-asset');
    export import HardwareWatch = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/hardware/watch');
    export import ImageAddAPhoto = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/add-a-photo');
    export import ImageAddToPhotos = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/add-to-photos');
    export import ImageAdjust = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/adjust');
    export import ImageAssistant = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/assistant');
    export import ImageAssistantPhoto = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/assistant-photo');
    export import ImageAudiotrack = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/audiotrack');
    export import ImageBlurCircular = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/blur-circular');
    export import ImageBlurLinear = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/blur-linear');
    export import ImageBlurOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/blur-off');
    export import ImageBlurOn = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/blur-on');
    export import ImageBrightness1 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/brightness-1');
    export import ImageBrightness2 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/brightness-2');
    export import ImageBrightness3 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/brightness-3');
    export import ImageBrightness4 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/brightness-4');
    export import ImageBrightness5 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/brightness-5');
    export import ImageBrightness6 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/brightness-6');
    export import ImageBrightness7 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/brightness-7');
    export import ImageBrokenImage = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/broken-image');
    export import ImageBrush = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/brush');
    export import ImageCamera = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/camera');
    export import ImageCameraAlt = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/camera-alt');
    export import ImageCameraFront = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/camera-front');
    export import ImageCameraRear = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/camera-rear');
    export import ImageCameraRoll = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/camera-roll');
    export import ImageCenterFocusStrong = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/center-focus-strong');
    export import ImageCenterFocusWeak = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/center-focus-weak');
    export import ImageCollections = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/collections');
    export import ImageCollectionsBookmark = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/collections-bookmark');
    export import ImageColorize = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/colorize');
    export import ImageColorLens = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/color-lens');
    export import ImageCompare = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/compare');
    export import ImageControlPoint = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/control-point');
    export import ImageControlPointDuplicate = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/control-point-duplicate');
    export import ImageCrop = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/crop');
    export import ImageCrop169 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/crop-16-9');
    export import ImageCrop32 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/crop-3-2');
    export import ImageCrop54 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/crop-5-4');
    export import ImageCrop75 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/crop-7-5');
    export import ImageCropDin = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/crop-din');
    export import ImageCropFree = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/crop-free');
    export import ImageCropLandscape = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/crop-landscape');
    export import ImageCropOriginal = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/crop-original');
    export import ImageCropPortrait = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/crop-portrait');
    export import ImageCropRotate = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/crop-rotate');
    export import ImageCropSquare = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/crop-square');
    export import ImageDehaze = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/dehaze');
    export import ImageDetails = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/details');
    export import ImageEdit = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/edit');
    export import ImageExposure = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/exposure');
    export import ImageExposureNeg1 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/exposure-neg-1');
    export import ImageExposureNeg2 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/exposure-neg-2');
    export import ImageExposurePlus1 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/exposure-plus-1');
    export import ImageExposurePlus2 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/exposure-plus-2');
    export import ImageExposureZero = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/exposure-zero');
    export import ImageFilter = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter');
    export import ImageFilter1 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-1');
    export import ImageFilter2 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-2');
    export import ImageFilter3 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-3');
    export import ImageFilter4 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-4');
    export import ImageFilter5 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-5');
    export import ImageFilter6 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-6');
    export import ImageFilter7 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-7');
    export import ImageFilter8 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-8');
    export import ImageFilter9 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-9');
    export import ImageFilter9Plus = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-9-plus');
    export import ImageFilterBAndW = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-b-and-w');
    export import ImageFilterCenterFocus = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-center-focus');
    export import ImageFilterDrama = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-drama');
    export import ImageFilterFrames = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-frames');
    export import ImageFilterHdr = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-hdr');
    export import ImageFilterNone = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-none');
    export import ImageFilterTiltShift = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-tilt-shift');
    export import ImageFilterVintage = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/filter-vintage');
    export import ImageFlare = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/flare');
    export import ImageFlashAuto = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/flash-auto');
    export import ImageFlashOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/flash-off');
    export import ImageFlashOn = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/flash-on');
    export import ImageFlip = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/flip');
    export import ImageGradient = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/gradient');
    export import ImageGrain = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/grain');
    export import ImageGridOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/grid-off');
    export import ImageGridOn = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/grid-on');
    export import ImageHdrOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/hdr-off');
    export import ImageHdrOn = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/hdr-on');
    export import ImageHdrStrong = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/hdr-strong');
    export import ImageHdrWeak = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/hdr-weak');
    export import ImageHealing = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/healing');
    export import ImageImage = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/image');
    export import ImageImageAspectRatio = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/image-aspect-ratio');
    export import ImageIso = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/iso');
    export import ImageLandscape = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/landscape');
    export import ImageLeakAdd = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/leak-add');
    export import ImageLeakRemove = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/leak-remove');
    export import ImageLens = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/lens');
    export import ImageLinkedCamera = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/linked-camera');
    export import ImageLooks = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/looks');
    export import ImageLooks3 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/looks-3');
    export import ImageLooks4 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/looks-4');
    export import ImageLooks5 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/looks-5');
    export import ImageLooks6 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/looks-6');
    export import ImageLooksOne = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/looks-one');
    export import ImageLooksTwo = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/looks-two');
    export import ImageLoupe = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/loupe');
    export import ImageMonochromePhotos = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/monochrome-photos');
    export import ImageMovieCreation = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/movie-creation');
    export import ImageMovieFilter = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/movie-filter');
    export import ImageMusicNote = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/music-note');
    export import ImageNature = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/nature');
    export import ImageNaturePeople = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/nature-people');
    export import ImageNavigateBefore = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/navigate-before');
    export import ImageNavigateNext = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/navigate-next');
    export import ImagePalette = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/palette');
    export import ImagePanorama = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/panorama');
    export import ImagePanoramaFishEye = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/panorama-fish-eye');
    export import ImagePanoramaHorizontal = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/panorama-horizontal');
    export import ImagePanoramaVertical = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/panorama-vertical');
    export import ImagePanoramaWideAngle = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/panorama-wide-angle');
    export import ImagePhoto = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/photo');
    export import ImagePhotoAlbum = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/photo-album');
    export import ImagePhotoCamera = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/photo-camera');
    export import ImagePhotoFilter = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/photo-filter');
    export import ImagePhotoLibrary = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/photo-library');
    export import ImagePhotoSizeSelectActual = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/photo-size-select-actual');
    export import ImagePhotoSizeSelectLarge = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/photo-size-select-large');
    export import ImagePhotoSizeSelectSmall = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/photo-size-select-small');
    export import ImagePictureAsPdf = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/picture-as-pdf');
    export import ImagePortrait = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/portrait');
    export import ImageRemoveRedEye = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/remove-red-eye');
    export import ImageRotate90DegreesCcw = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/rotate-90-degrees-ccw');
    export import ImageRotateLeft = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/rotate-left');
    export import ImageRotateRight = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/rotate-right');
    export import ImageSlideshow = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/slideshow');
    export import ImageStraighten = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/straighten');
    export import ImageStyle = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/style');
    export import ImageSwitchCamera = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/switch-camera');
    export import ImageSwitchVideo = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/switch-video');
    export import ImageTagFaces = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/tag-faces');
    export import ImageTexture = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/texture');
    export import ImageTimelapse = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/timelapse');
    export import ImageTimer = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/timer');
    export import ImageTimer10 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/timer-10');
    export import ImageTimer3 = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/timer-3');
    export import ImageTimerOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/timer-off');
    export import ImageTonality = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/tonality');
    export import ImageTransform = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/transform');
    export import ImageTune = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/tune');
    export import ImageViewComfy = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/view-comfy');
    export import ImageViewCompact = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/view-compact');
    export import ImageVignette = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/vignette');
    export import ImageWbAuto = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/wb-auto');
    export import ImageWbCloudy = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/wb-cloudy');
    export import ImageWbIncandescent = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/wb-incandescent');
    export import ImageWbIridescent = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/wb-iridescent');
    export import ImageWbSunny = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/image/wb-sunny');
    export import Index = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/index');
    export import IndexGenerator = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/index-generator');
    export import MapsAddLocation = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/add-location');
    export import MapsBeenhere = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/beenhere');
    export import MapsDirections = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/directions');
    export import MapsDirectionsBike = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/directions-bike');
    export import MapsDirectionsBoat = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/directions-boat');
    export import MapsDirectionsBus = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/directions-bus');
    export import MapsDirectionsCar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/directions-car');
    export import MapsDirectionsRailway = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/directions-railway');
    export import MapsDirectionsRun = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/directions-run');
    export import MapsDirectionsSubway = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/directions-subway');
    export import MapsDirectionsTransit = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/directions-transit');
    export import MapsDirectionsWalk = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/directions-walk');
    export import MapsEditLocation = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/edit-location');
    export import MapsFlight = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/flight');
    export import MapsHotel = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/hotel');
    export import MapsLayers = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/layers');
    export import MapsLayersClear = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/layers-clear');
    export import MapsLocalActivity = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-activity');
    export import MapsLocalAirport = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-airport');
    export import MapsLocalAtm = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-atm');
    export import MapsLocalBar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-bar');
    export import MapsLocalCafe = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-cafe');
    export import MapsLocalCarWash = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-car-wash');
    export import MapsLocalConvenienceStore = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-convenience-store');
    export import MapsLocalDining = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-dining');
    export import MapsLocalDrink = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-drink');
    export import MapsLocalFlorist = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-florist');
    export import MapsLocalGasStation = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-gas-station');
    export import MapsLocalGroceryStore = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-grocery-store');
    export import MapsLocalHospital = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-hospital');
    export import MapsLocalHotel = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-hotel');
    export import MapsLocalLaundryService = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-laundry-service');
    export import MapsLocalLibrary = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-library');
    export import MapsLocalMall = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-mall');
    export import MapsLocalMovies = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-movies');
    export import MapsLocalOffer = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-offer');
    export import MapsLocalParking = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-parking');
    export import MapsLocalPharmacy = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-pharmacy');
    export import MapsLocalPhone = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-phone');
    export import MapsLocalPizza = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-pizza');
    export import MapsLocalPlay = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-play');
    export import MapsLocalPostOffice = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-post-office');
    export import MapsLocalPrintshop = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-printshop');
    export import MapsLocalSee = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-see');
    export import MapsLocalShipping = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-shipping');
    export import MapsLocalTaxi = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/local-taxi');
    export import MapsMap = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/map');
    export import MapsMyLocation = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/my-location');
    export import MapsNavigation = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/navigation');
    export import MapsNearMe = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/near-me');
    export import MapsPersonPin = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/person-pin');
    export import MapsPersonPinCircle = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/person-pin-circle');
    export import MapsPinDrop = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/pin-drop');
    export import MapsPlace = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/place');
    export import MapsRateReview = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/rate-review');
    export import MapsRestaurantMenu = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/restaurant-menu');
    export import MapsSatellite = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/satellite');
    export import MapsStoreMallDirectory = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/store-mall-directory');
    export import MapsTerrain = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/terrain');
    export import MapsTraffic = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/traffic');
    export import MapsZoomOutMap = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/maps/zoom-out-map');
    export import NavigationApps = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/apps');
    export import NavigationArrowBack = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/arrow-back');
    export import NavigationArrowDownward = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/arrow-downward');
    export import NavigationArrowDropDown = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/arrow-drop-down');
    export import NavigationArrowDropDownCircle = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/arrow-drop-down-circle');
    export import NavigationArrowDropRight = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation-arrow-drop-right');
    export import NavigationArrowDropUp = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/arrow-drop-up');
    export import NavigationArrowForward = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/arrow-forward');
    export import NavigationArrowUpward = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/arrow-upward');
    export import NavigationCancel = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/cancel');
    export import NavigationCheck = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/check');
    export import NavigationChevronLeft = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/chevron-left');
    export import NavigationChevronRight = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/chevron-right');
    export import NavigationClose = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/close');
    export import NavigationExpandLess = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/expand-less');
    export import NavigationExpandMore = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/expand-more');
    export import NavigationFullscreen = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/fullscreen');
    export import NavigationFullscreenExit = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/fullscreen-exit');
    export import NavigationMenu = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/menu');
    export import NavigationMoreHoriz = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/more-horiz');
    export import NavigationMoreVert = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/more-vert');
    export import NavigationRefresh = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/refresh');
    export import NavigationSubdirectoryArrowLeft = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/subdirectory-arrow-left');
    export import NavigationSubdirectoryArrowRight = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/subdirectory-arrow-right');
    export import NavigationUnfoldLess = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/unfold-less');
    export import NavigationUnfoldMore = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/navigation/unfold-more');
    export import NotificationAdb = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/adb');
    export import NotificationAirlineSeatFlat = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/airline-seat-flat');
    export import NotificationAirlineSeatFlatAngled = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/airline-seat-flat-angled');
    export import NotificationAirlineSeatIndividualSuite = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/airline-seat-individual-suite');
    export import NotificationAirlineSeatLegroomExtra = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/airline-seat-legroom-extra');
    export import NotificationAirlineSeatLegroomNormal = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/airline-seat-legroom-normal');
    export import NotificationAirlineSeatLegroomReduced = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/airline-seat-legroom-reduced');
    export import NotificationAirlineSeatReclineExtra = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/airline-seat-recline-extra');
    export import NotificationAirlineSeatReclineNormal = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/airline-seat-recline-normal');
    export import NotificationBluetoothAudio = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/bluetooth-audio');
    export import NotificationConfirmationNumber = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/confirmation-number');
    export import NotificationDiscFull = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/disc-full');
    export import NotificationDoNotDisturb = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/do-not-disturb');
    export import NotificationDoNotDisturbAlt = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/do-not-disturb-alt');
    export import NotificationDriveEta = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/drive-eta');
    export import NotificationEnhancedEncryption = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/enhanced-encryption');
    export import NotificationEventAvailable = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/event-available');
    export import NotificationEventBusy = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/event-busy');
    export import NotificationEventNote = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/event-note');
    export import NotificationFolderSpecial = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/folder-special');
    export import NotificationLiveTv = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/live-tv');
    export import NotificationMms = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/mms');
    export import NotificationMore = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/more');
    export import NotificationNetworkCheck = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/network-check');
    export import NotificationNetworkLocked = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/network-locked');
    export import NotificationNoEncryption = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/no-encryption');
    export import NotificationOndemandVideo = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/ondemand-video');
    export import NotificationPersonalVideo = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/personal-video');
    export import NotificationPhoneBluetoothSpeaker = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/phone-bluetooth-speaker');
    export import NotificationPhoneForwarded = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/phone-forwarded');
    export import NotificationPhoneInTalk = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/phone-in-talk');
    export import NotificationPhoneLocked = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/phone-locked');
    export import NotificationPhoneMissed = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/phone-missed');
    export import NotificationPhonePaused = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/phone-paused');
    export import NotificationPower = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/power');
    export import NotificationRvHookup = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/rv-hookup');
    export import NotificationSdCard = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/sd-card');
    export import NotificationSimCardAlert = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/sim-card-alert');
    export import NotificationSms = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/sms');
    export import NotificationSmsFailed = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/sms-failed');
    export import NotificationSync = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/sync');
    export import NotificationSyncDisabled = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/sync-disabled');
    export import NotificationSyncProblem = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/sync-problem');
    export import NotificationSystemUpdate = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/system-update');
    export import NotificationTapAndPlay = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/tap-and-play');
    export import NotificationTimeToLeave = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/time-to-leave');
    export import NotificationVibration = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/vibration');
    export import NotificationVoiceChat = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/voice-chat');
    export import NotificationVpnLock = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/vpn-lock');
    export import NotificationWc = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/wc');
    export import NotificationWifi = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/notification/wifi');
    export import PlacesAcUnit = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/ac-unit');
    export import PlacesAirportShuttle = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/airport-shuttle');
    export import PlacesAllInclusive = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/all-inclusive');
    export import PlacesBeachAccess = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/beach-access');
    export import PlacesBusinessCenter = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/business-center');
    export import PlacesCasino = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/casino');
    export import PlacesChildCare = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/child-care');
    export import PlacesChildFriendly = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/child-friendly');
    export import PlacesFitnessCenter = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/fitness-center');
    export import PlacesFreeBreakfast = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/free-breakfast');
    export import PlacesGolfCourse = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/golf-course');
    export import PlacesHotTub = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/hot-tub');
    export import PlacesKitchen = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/kitchen');
    export import PlacesPool = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/pool');
    export import PlacesRoomService = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/room-service');
    export import PlacesSmokeFree = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/smoke-free');
    export import PlacesSmokingRooms = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/smoking-rooms');
    export import PlacesSpa = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/places/spa');
    export import SocialCake = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/cake');
    export import SocialDomain = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/domain');
    export import SocialGroup = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/group');
    export import SocialGroupAdd = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/group-add');
    export import SocialLocationCity = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/location-city');
    export import SocialMood = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/mood');
    export import SocialMoodBad = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/mood-bad');
    export import SocialNotifications = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/notifications');
    export import SocialNotificationsActive = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/notifications-active');
    export import SocialNotificationsNone = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/notifications-none');
    export import SocialNotificationsOff = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/notifications-off');
    export import SocialNotificationsPaused = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/notifications-paused');
    export import SocialPages = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/pages');
    export import SocialPartyMode = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/party-mode');
    export import SocialPeople = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/people');
    export import SocialPeopleOutline = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/people-outline');
    export import SocialPerson = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/person');
    export import SocialPersonAdd = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/person-add');
    export import SocialPersonOutline = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/person-outline');
    export import SocialPlusOne = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/plus-one');
    export import SocialPoll = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/poll');
    export import SocialPublic = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/public');
    export import SocialSchool = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/school');
    export import SocialShare = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/share');
    export import SocialWhatshot = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/social/whatshot');
    export import ToggleCheckBox = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/toggle/check-box');
    export import ToggleCheckBoxOutlineBlank = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/toggle/check-box-outline-blank');
    export import ToggleIndeterminateCheckBox = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/toggle/indeterminate-check-box');
    export import ToggleRadioButtonChecked = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/toggle/radio-button-checked');
    export import ToggleRadioButtonUnchecked = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/toggle/radio-button-unchecked');
    export import ToggleStar = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/toggle/star');
    export import ToggleStarBorder = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/toggle/star-border');
    export import ToggleStarHalf = __MaterialUI.SvgIcon; // require('material-ui/svg-icons/toggle/star-half');
}


declare module 'material-ui/internal/AppCanvas' {
    interface AppCanvasProps extends React.Props<AppCanvas> { }
    class AppCanvas extends React.Component<AppCanvasProps> { }
    export default AppCanvas;
}
declare module 'material-ui/internal/AutoLockScrolling' {
    interface AutoLockScrollingProps extends React.Props<AutoLockScrolling> {
        lock: boolean;
    }
    class AutoLockScrolling extends React.Component<AutoLockScrollingProps> { }
    export default AutoLockScrolling;
}
declare module 'material-ui/internal/BeforeAfterWrapper' {
    interface BeforeAfterWrapperProps extends React.Props<BeforeAfterWrapper> {
        afterElementType?: string,
        afterStyle?: React.CSSProperties,
        beforeElementType?: string,
        beforeStyle?: React.CSSProperties,
        elementType?: string,
        style?: React.CSSProperties,
    }
    class BeforeAfterWrapper extends React.Component<BeforeAfterWrapperProps> { }
    export default BeforeAfterWrapper;
}
declare module 'material-ui/internal/CircleRipple' {
    interface CircleRippleProps extends React.Props<CircleRipple> {
        aborted?: boolean;
        color?: string;
        opacity?: number;
        style?: React.CSSProperties;
    }
    class CircleRipple extends React.Component<CircleRippleProps> { }
    export default CircleRipple;
}
declare module 'material-ui/internal/ClearFix' {
    interface ClearFixProps extends React.Props<ClearFix> {
        style?: React.CSSProperties;
    }
    class ClearFix extends React.Component<ClearFixProps> { }
    export default ClearFix;
}
declare module 'material-ui/internal/ClickAwayListener' {
    interface ClickAwayListenerProps extends React.Props<ClickAwayListener> {
        onClickAway?: any,
    }
    class ClickAwayListener extends React.Component<ClickAwayListenerProps> { }
    export default ClickAwayListener;
}
declare module 'material-ui/internal/EnhancedButton' {
    interface EnhancedButtonProps extends __MaterialUI.SharedEnhancedButtonProps<EnhancedButton> {
    }
    class EnhancedButton extends React.Component<EnhancedButtonProps> { }
    export default EnhancedButton;
}
declare module 'material-ui/internal/EnhancedSwitch' {
    interface EnhancedSwitchProps extends __MaterialUI.Switches.CommonEnhancedSwitchProps<EnhancedSwitch> {
    }
    class EnhancedSwitch extends React.Component<EnhancedSwitchProps> { }
    export default EnhancedSwitch;
}
declare module 'material-ui/internal/ExpandTransition' {
    interface ExpandTransitionProps extends React.Props<ExpandTransition> {
        enterDelay?: number;
        loading?: boolean;
        open?: boolean;
        style?: React.CSSProperties;
        transitionDelay?: number;
        transitionDuration?: number;
    }
    class ExpandTransition extends React.Component<ExpandTransitionProps> { }
    export default ExpandTransition;
}
declare module 'material-ui/internal/ExpandTransitionChild' {
    interface ExpandTransitionChildProps extends React.Props<ExpandTransitionChild> {
        enterDelay?: number;
        style?: React.CSSProperties;
        transitionDelay?: number;
        transitionDuration?: number;
    }
    class ExpandTransitionChild extends React.Component<ExpandTransitionChildProps> { }
    export default ExpandTransitionChild;
}
declare module 'material-ui/internal/FocusRipple' {
    interface FocusRippleProps extends React.Props<FocusRipple> {
        color?: string,
        innerStyle?: React.CSSProperties,
        opacity?: number,
        show?: boolean,
        style?: React.CSSProperties
    }
    class FocusRipple extends React.Component<FocusRippleProps> { }
    export default FocusRipple;
}
declare module 'material-ui/internal/Overlay' {
    interface OverlayProps extends React.Props<Overlay> {
        autoLockScrolling?: boolean;
        show: boolean;
        style?: React.CSSProperties;
        transitionEnabled?: boolean;
        onClick?: React.MouseEventHandler<{}>;
        onTouchTap?: __MaterialUI.TouchTapEventHandler;
    }
    class Overlay extends React.Component<OverlayProps> { }
    export default Overlay;
}
declare module 'material-ui/internal/RenderToLayer' {
    interface RenderToLayerProps extends React.Props<RenderToLayer> {
        componentClickAway?: Function;
        open: boolean;
        render: Function;
        useLayerForClickAway?: boolean;
    }
    class RenderToLayer extends React.Component<RenderToLayerProps> { }
    export default RenderToLayer;
}
declare module 'material-ui/internal/ScaleIn' {
    interface ScaleInProps extends React.Props<ScaleIn> {
        childStyle?: React.CSSProperties;
        enterDelay?: number;
        maxScale?: number;
        minScale?: number;
    }
    class ScaleIn extends React.Component<ScaleInProps> { }
    export default ScaleIn;
}
declare module 'material-ui/internal/ScaleInChild' {
    interface ScaleInChildProps extends React.Props<ScaleInChild> {
        enterDelay?: number;
        maxScale?: number;
        minScale?: number;
        style?: React.CSSProperties;
    }
    class ScaleInChild extends React.Component<ScaleInChildProps> { }
    export default ScaleInChild;
}
declare module 'material-ui/internal/SlideIn' {
    interface SlideInProps extends React.Props<SlideIn> {
        childStyle?: React.CSSProperties;
        direction?: __MaterialUI.propTypes.direction;
        enterDelay?: number;
        style?: React.CSSProperties;
    }
    class SlideIn extends React.Component<SlideInProps> { }
    export default SlideIn;
}
declare module 'material-ui/internal/SlideInChild' {
    interface SlideInChildProps extends React.Props<SlideInChild> {
        direction?: string,
        enterDelay?: number;
        getLeaveDirection: Function;
        style?: React.CSSProperties;
    }
    class SlideInChild extends React.Component<SlideInChildProps> { }
    export default SlideInChild;
}
declare module 'material-ui/internal/Tooltip' {
    interface TooltipProps extends React.Props<Tooltip> {
        className?: string;
        horizontalPosition?: __MaterialUI.propTypes.tooltipHorizontal;
        label: any;
        show?: boolean;
        style?: React.CSSProperties;
        touch?: boolean;
        verticalPosition?: __MaterialUI.propTypes.vertical;
    }
    class Tooltip extends React.Component<TooltipProps> { }
    export default Tooltip;
}
declare module 'material-ui/internal/TouchRipple' {
    interface TouchRippleProps extends React.Props<TouchRipple> {
        abortOnScroll?: boolean,
        centerRipple?: boolean;
        color?: string;
        opacity?: number;
        style?: React.CSSProperties
    }
    class TouchRipple extends React.Component<TouchRippleProps> { }
    export default TouchRipple;
}
