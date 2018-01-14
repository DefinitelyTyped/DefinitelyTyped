// Type definitions for react-mdl 1.7.0
// Project: https://github.com/tleunen/react-mdl
// Definitions by: Brad Zacher <https://github.com/bradzacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export = __ReactMDL;

declare namespace __ReactMDL {
    type __MDLClassProps = React.ClassAttributes<any>;
    type __MDLOtherProps = React.HTMLProps<any>;
    class __MDLComponent<P> extends React.Component<P> { }
    class __MDLBasicComponent extends __MDLComponent<__MDLOtherProps> { }

    interface ShadowedComponent {
        shadow?: number;
    }
    interface RippleComponent {
        ripple?: boolean;
    }
    interface CustomRenderedComponent {
        component?: string | JSX.Element | Function;
    }


    // HTMLAttributes (minus the 'data', 'icon', 'label', 'name', 'rows', 'size', 'title', 'value' attributes)
    interface MDLHTMLAttributes {
        // React-specific Attributes
        defaultChecked?: boolean;
        defaultValue?: number | string | string[];

        // Standard HTML Attributes
        accept?: string;
        acceptCharset?: string;
        accessKey?: string;
        action?: string;
        allowFullScreen?: boolean;
        allowTransparency?: boolean;
        alt?: string;
        async?: boolean;
        autoComplete?: string;
        autoFocus?: boolean;
        autoPlay?: boolean;
        capture?: boolean;
        cellPadding?: number | string;
        cellSpacing?: number | string;
        charSet?: string;
        challenge?: string;
        checked?: boolean;
        classID?: string;
        className?: string;
        cols?: number;
        colSpan?: number;
        content?: string;
        contentEditable?: boolean;
        contextMenu?: string;
        controls?: boolean;
        coords?: string;
        crossOrigin?: string;
        dateTime?: string;
        default?: boolean;
        defer?: boolean;
        dir?: string;
        disabled?: boolean;
        download?: any;
        draggable?: boolean;
        encType?: string;
        form?: string;
        formAction?: string;
        formEncType?: string;
        formMethod?: string;
        formNoValidate?: boolean;
        formTarget?: string;
        frameBorder?: number | string;
        headers?: string;
        height?: number | string;
        hidden?: boolean;
        high?: number;
        href?: string;
        hrefLang?: string;
        htmlFor?: string;
        httpEquiv?: string;
        id?: string;
        inputMode?: string;
        integrity?: string;
        is?: string;
        keyParams?: string;
        keyType?: string;
        kind?: string;
        lang?: string;
        list?: string;
        loop?: boolean;
        low?: number;
        manifest?: string;
        marginHeight?: number;
        marginWidth?: number;
        max?: number | string;
        maxLength?: number;
        media?: string;
        mediaGroup?: string;
        method?: string;
        min?: number | string;
        minLength?: number;
        multiple?: boolean;
        muted?: boolean;
        nonce?: string;
        noValidate?: boolean;
        open?: boolean;
        optimum?: number;
        pattern?: string;
        placeholder?: string;
        poster?: string;
        preload?: string;
        radioGroup?: string;
        readOnly?: boolean;
        rel?: string;
        required?: boolean;
        reversed?: boolean;
        role?: string;
        rowSpan?: number;
        sandbox?: string;
        scope?: string;
        scoped?: boolean;
        scrolling?: string;
        seamless?: boolean;
        selected?: boolean;
        shape?: string;
        sizes?: string;
        span?: number;
        spellCheck?: boolean;
        src?: string;
        srcDoc?: string;
        srcLang?: string;
        srcSet?: string;
        start?: number;
        step?: number | string;
        style?: React.CSSProperties;
        summary?: string;
        tabIndex?: number;
        target?: string;
        type?: string;
        useMap?: string;
        width?: number | string;
        wmode?: string;
        wrap?: string;

        // RDFa Attributes
        about?: string;
        datatype?: string;
        inlist?: any;
        prefix?: string;
        property?: string;
        resource?: string;
        typeof?: string;
        vocab?: string;

        // Non-standard Attributes
        autoCapitalize?: string;
        autoCorrect?: string;
        autoSave?: string;
        color?: string;
        itemProp?: string;
        itemScope?: boolean;
        itemType?: string;
        itemID?: string;
        itemRef?: string;
        results?: number;
        security?: string;
        unselectable?: boolean;

        // Allows aria- and data- Attributes
        [key: string]: any;
    }
    // DOMAttributes (minus 'onClick', 'onChange')
    interface MDLDOMAttributes<T> {
        // DOMAttributes (minus onClick)
        children?: React.ReactNode;
        dangerouslySetInnerHTML?: {
            __html: string;
        };

        // Clipboard Events
        onCopy?: React.ClipboardEventHandler<T>;
        onCut?: React.ClipboardEventHandler<T>;
        onPaste?: React.ClipboardEventHandler<T>;

        // Composition Events
        onCompositionEnd?: React.CompositionEventHandler<T>;
        onCompositionStart?: React.CompositionEventHandler<T>;
        onCompositionUpdate?: React.CompositionEventHandler<T>;

        // Focus Events
        onFocus?: React.FocusEventHandler<T>;
        onBlur?: React.FocusEventHandler<T>;

        // Form Events
        onInput?: React.FormEventHandler<T>;
        onSubmit?: React.FormEventHandler<T>;

        // Image Events
        onLoad?: React.ReactEventHandler<T>;
        onError?: React.ReactEventHandler<T>; // also a Media Event

        // Keyboard Events
        onKeyDown?: React.KeyboardEventHandler<T>;
        onKeyPress?: React.KeyboardEventHandler<T>;
        onKeyUp?: React.KeyboardEventHandler<T>;

        // Media Events
        onAbort?: React.ReactEventHandler<T>;
        onCanPlay?: React.ReactEventHandler<T>;
        onCanPlayThrough?: React.ReactEventHandler<T>;
        onDurationChange?: React.ReactEventHandler<T>;
        onEmptied?: React.ReactEventHandler<T>;
        onEncrypted?: React.ReactEventHandler<T>;
        onEnded?: React.ReactEventHandler<T>;
        onLoadedData?: React.ReactEventHandler<T>;
        onLoadedMetadata?: React.ReactEventHandler<T>;
        onLoadStart?: React.ReactEventHandler<T>;
        onPause?: React.ReactEventHandler<T>;
        onPlay?: React.ReactEventHandler<T>;
        onPlaying?: React.ReactEventHandler<T>;
        onProgress?: React.ReactEventHandler<T>;
        onRateChange?: React.ReactEventHandler<T>;
        onSeeked?: React.ReactEventHandler<T>;
        onSeeking?: React.ReactEventHandler<T>;
        onStalled?: React.ReactEventHandler<T>;
        onSuspend?: React.ReactEventHandler<T>;
        onTimeUpdate?: React.ReactEventHandler<T>;
        onVolumeChange?: React.ReactEventHandler<T>;
        onWaiting?: React.ReactEventHandler<T>;

        // MouseEvents
        onContextMenu?: React.MouseEventHandler<T>;
        onDoubleClick?: React.MouseEventHandler<T>;
        onDrag?: React.DragEventHandler<T>;
        onDragEnd?: React.DragEventHandler<T>;
        onDragEnter?: React.DragEventHandler<T>;
        onDragExit?: React.DragEventHandler<T>;
        onDragLeave?: React.DragEventHandler<T>;
        onDragOver?: React.DragEventHandler<T>;
        onDragStart?: React.DragEventHandler<T>;
        onDrop?: React.DragEventHandler<T>;
        onMouseDown?: React.MouseEventHandler<T>;
        onMouseEnter?: React.MouseEventHandler<T>;
        onMouseLeave?: React.MouseEventHandler<T>;
        onMouseMove?: React.MouseEventHandler<T>;
        onMouseOut?: React.MouseEventHandler<T>;
        onMouseOver?: React.MouseEventHandler<T>;
        onMouseUp?: React.MouseEventHandler<T>;

        // Selection Events
        onSelect?: React.ReactEventHandler<T>;

        // Touch Events
        onTouchCancel?: React.TouchEventHandler<T>;
        onTouchEnd?: React.TouchEventHandler<T>;
        onTouchMove?: React.TouchEventHandler<T>;
        onTouchStart?: React.TouchEventHandler<T>;

        // UI Events
        onScroll?: React.UIEventHandler<T>;

        // Wheel Events
        onWheel?: React.WheelEventHandler<T>;
    }



    interface BadgeProps extends __MDLClassProps {
        text: string | number;
        className?: string;
        noBackground?: boolean;
        overlap?: boolean;
    }
    class Badge extends __MDLComponent<BadgeProps> { }

    interface ChipProps extends __MDLOtherProps {
        onClick?: React.MouseEventHandler<Chip>;
        onClose?: React.MouseEventHandler<Chip>;
    }

    class Chip extends __MDLComponent<ChipProps> { }

    class ChipContact extends __MDLComponent<__MDLOtherProps> { }

    interface ButtonProps extends __MDLOtherProps, RippleComponent, CustomRenderedComponent {
        accent?: boolean;
        colored?: boolean;
        primary?: boolean;
    }
    interface StandardButtonProps extends ButtonProps {
        raised?: boolean;
    }
    interface FABButtonProps extends ButtonProps {
        mini?: boolean;
    }
    interface IconButtonProps extends ButtonProps {
        name?: string;
        raised?: boolean;
    }
    class Button extends __MDLComponent<StandardButtonProps> { }
    class FABButton extends __MDLComponent<FABButtonProps> { }
    class IconButton extends __MDLComponent<IconButtonProps> { }


    interface CardProps extends __MDLOtherProps, ShadowedComponent { }
    interface CardActionProps extends __MDLOtherProps {
        border?: boolean;
    }
    interface CardTitleProps extends __MDLOtherProps {
        expand?: boolean;
    }
    class Card extends __MDLComponent<CardProps> { }
    class CardActions extends __MDLComponent<CardActionProps> { }
    class CardTitle extends __MDLComponent<CardTitleProps> { }
    class CardText extends __MDLBasicComponent { }
    class CardMenu extends __MDLBasicComponent { }
    class CardMedia extends __MDLBasicComponent { }


    interface CheckboxProps extends __MDLOtherProps, RippleComponent {
        checked?: boolean;
        disabled?: boolean;
        label?: string;
    }
    class Checkbox extends __MDLComponent<CheckboxProps> { }

    interface UndecoratedTableProps extends __MDLClassProps, MDLHTMLAttributes, React.DOMAttributes<UndecoratedTable>, ShadowedComponent {
        rows: Array<any>;
        rowKeyColumn?: string;

        name?: string;
        title?: string;
    }
    interface TableProps extends UndecoratedTableProps {
        sortable?: boolean;
        selectable?: boolean;
        onSelectionChanged?: (row: any) => any;
    }
    interface TableHeaderProps extends __MDLClassProps, MDLHTMLAttributes, MDLDOMAttributes<TableHeader> {
        name: string;
        title?: string;
        cellFormatter?: (value: any, row: any, index: number) => React.ReactNode;
        numeric?: boolean;
        nosort?: boolean;
        onClick?: (e: React.MouseEvent<TableHeader>, name: string) => any;
        sortFn?: (a: any, b: any, isAsc: boolean) => number;
        tooltip?: React.ReactNode;
    }
    class Table extends __MDLComponent<TableProps> { }
    class TableHeader extends __MDLComponent<TableHeaderProps> { }
    class UndecoratedTable extends __MDLComponent<UndecoratedTableProps> { }
    class DataTable extends Table { }


    interface DialogProps extends __MDLOtherProps {
        open?: boolean;
        onCancel?: (e: any) => void;
    }
    interface DialogActionsProps extends __MDLOtherProps {
        fullWidth?: boolean;
    }
    interface DialogTitleProps extends __MDLOtherProps, CustomRenderedComponent { }
    class Dialog extends __MDLComponent<DialogProps> { }
    class DialogActions extends __MDLComponent<DialogActionsProps> { }
    class DialogTitle extends __MDLComponent<DialogTitleProps> { }
    class DialogContent extends __MDLBasicComponent { }


    interface GridProps extends __MDLOtherProps, CustomRenderedComponent, ShadowedComponent {
        noSpacing?: boolean;
    }
    interface CellProps extends __MDLOtherProps, CustomRenderedComponent, ShadowedComponent {
        col: number;
        offset?: number;
        offsetDesktop?: number;
        offsetPhone?: number;
        offsetTablet?: number;
        align?: string;
        phone?: number;
        tablet?: number;
        hideDesktop?: boolean;
        hidePhone?: boolean;
        hideTablet?: boolean;
    }
    class Grid extends __MDLComponent<GridProps> { }
    class Cell extends __MDLComponent<CellProps> { }


    interface IconProps extends __MDLOtherProps {
        name: string;
    }
    class Icon extends __MDLComponent<IconProps> { }


    interface IconToggleProps extends __MDLOtherProps, RippleComponent {
        name: string;
        checked?: boolean;
        disabled?: boolean;
    }
    class IconToggle extends __MDLComponent<IconToggleProps> { }


    interface ContentProps extends __MDLOtherProps, CustomRenderedComponent { }
    interface DrawerProps extends __MDLOtherProps {
        title?: string;
    }
    interface HeaderProps extends __MDLOtherProps {
        title?: any; // string | JSX.Element
        scroll?: boolean;
        seamed?: boolean;
        transparent?: boolean;
        waterfall?: boolean;
        hideTop?: boolean;
        hideSpacer?: boolean;
    }
    interface HeaderRowProps extends __MDLOtherProps {
        title?: any; // string | JSX.Element
        hideSpacer?: boolean;
    }
    interface HeaderTabsProps extends __MDLOtherProps, RippleComponent {
        activeTab?: number;
        onChange?: React.FormEventHandler<Header>;
    }
    interface LayoutProps extends __MDLOtherProps {
        fixedDrawer?: boolean;
        fixedHeader?: boolean;
        fixedTabs?: boolean;
    }
    interface NavigationProps extends __MDLOtherProps { }
    class Content extends __MDLComponent<ContentProps> { }
    class Drawer extends __MDLComponent<DrawerProps> { }
    class Header extends __MDLComponent<HeaderProps> { }
    class HeaderRow extends __MDLComponent<HeaderRowProps> { }
    class HeaderTabs extends __MDLComponent<HeaderTabsProps> { }
    class Layout extends __MDLComponent<LayoutProps> { }
    class Navigation extends __MDLComponent<NavigationProps> { }
    class Spacer extends __MDLBasicComponent { }

    interface FooterProps extends MDLHTMLAttributes, React.DOMAttributes<Footer> {
        size?: string;

        title?: string;
    }
    interface FooterDropDownSectionProps extends MDLHTMLAttributes, React.DOMAttributes<FooterDropDownSection> {
        size?: string;
        title: React.ReactNode;
    }
    interface FooterLinkListProps extends MDLHTMLAttributes, React.DOMAttributes<FooterLinkList> {
        size?: string;

        title?: string;
    }
    interface FooterSectionProps extends MDLHTMLAttributes, React.DOMAttributes<FooterSection> {
        size?: string;
        type?: string;
        logo?: React.ReactNode;

        title?: string;
    }
    class Footer extends __MDLComponent<FooterProps> { }
    class FooterDropDownSection extends __MDLComponent<FooterDropDownSectionProps> { }
    class FooterLinkList extends __MDLComponent<FooterLinkListProps> { }
    class FooterSection extends __MDLComponent<FooterSectionProps> { }

    interface ListItemProps extends __MDLOtherProps {
        twoLine?: boolean;
        threeLine?: boolean;
    }
    interface ListItemActionProps extends __MDLOtherProps {
        info?: string;
    }
    interface ListItemContentProps extends MDLHTMLAttributes, React.DOMAttributes<ListItemContent> {
        avatar?: string | JSX.Element;
        icon?: string | JSX.Element;
        subtitle?: React.ReactNode;
        useBodyClass?: boolean;
    }
    class List extends __MDLBasicComponent { }
    class ListItem extends __MDLComponent<ListItemProps> { }
    class ListItemAction extends __MDLComponent<ListItemActionProps> { }
    class ListItemContent extends __MDLComponent<ListItemContentProps> { }


    interface MenuProps extends __MDLOtherProps, RippleComponent {
        target: string;
        align?: string;
        valign?: string;
    }
    class Menu extends __MDLComponent<MenuProps> { }
    class MenuItem extends __MDLBasicComponent { }


    interface ProgressBarProps extends __MDLOtherProps {
        buffer?: number;
        indeterminate?: boolean;
        progress?: number;
    }
    class ProgressBar extends __MDLComponent<ProgressBarProps> { }


    interface RadioProps extends MDLHTMLAttributes, React.DOMAttributes<Radio>, RippleComponent {
        value: string | number;
        checked?: boolean;
        disabled?: boolean;
        name?: string;
        onChange?: React.FormEventHandler<Radio>;
        label?: string;
    }
    interface RadioGroupProps extends MDLHTMLAttributes, React.DOMAttributes<RadioGroup> {
        name: string;
        value: string | number;
        childContainer?: string;
        container?: string;
        onChange?: React.FormEventHandler<RadioGroup>;
        label?: string;
    }
    class Radio extends __MDLComponent<RadioProps> { }
    class RadioGroup extends __MDLComponent<RadioGroupProps> { }


    interface SliderProps extends MDLHTMLAttributes, React.DOMAttributes<Slider> {
        max: number;
        min: number;
        onChange?: React.FormEventHandler<Slider>;
        value?: number;
    }
    class Slider extends __MDLComponent<SliderProps> { }


    interface SnackbarProps extends __MDLOtherProps {
        active: boolean;
        onTimeout: () => any;
        action?: string;
        onActionClick?: React.MouseEventHandler<Snackbar>;
        timeout?: number;
    }
    class Snackbar extends __MDLComponent<SnackbarProps> { }


    interface SpinnerProps extends __MDLOtherProps {
        singleColor?: boolean;
    }
    class Spinner extends __MDLComponent<SpinnerProps> { }


    interface SwitchProps extends __MDLOtherProps, RippleComponent {
        checked?: boolean;
        disabled?: boolean;
        onChange?: React.FormEventHandler<Switch>;
    }
    class Switch extends __MDLComponent<SwitchProps> { }


    interface TabProps extends __MDLOtherProps, CustomRenderedComponent {
        active?: boolean;
        cssPrefix?: string;
        onTabClick?: (tabId: number) => any;
        tabId?: number;
    }
    interface TabBarProps extends MDLHTMLAttributes, MDLDOMAttributes<TabBar> {
        cssPrefix: string;
        activeTab?: number;
        onChange?: (tabId: number) => any;

        name?: string;
        title?: string;
        onClick?: React.MouseEventHandler<TabBar>;
    }
    interface TabsProps extends MDLHTMLAttributes, MDLDOMAttributes<Tabs> {
        activeTab?: number;
        onChange?: (tabId: number) => any;
        tabBarProps?: TabBarProps;

        name?: string;
        title?: string;
        onClick?: React.MouseEventHandler<Tabs>;
    }
    class Tab extends __MDLComponent<TabProps> { }
    class TabBar extends __MDLComponent<TabBarProps> { }
    class Tabs extends __MDLComponent<TabsProps> { }


    interface TextfieldProps extends MDLHTMLAttributes, React.DOMAttributes<HTMLInputElement> {
        label: string;
        disabled?: boolean;
        error?: React.ReactNode;
        expandable?: boolean;
        expandableIcon?: string;
        floatingLabel?: boolean;
        id?: string;
        inputClassName?: string;
        maxRows?: number;
        onChange?: React.FormEventHandler<HTMLInputElement>;
        pattern?: string;
        required?: boolean;
        rows?: number;
        value?: string | number;

        name?: string;
        title?: string;
    }
    class Textfield extends __MDLComponent<TextfieldProps> {
        inputRef?: HTMLInputElement;
    }


    interface TooltipProps extends MDLHTMLAttributes, React.DOMAttributes<Tooltip> {
        label: React.ReactNode;
        large?: boolean;
        position?: string;

        name?: string;
        title?: string;
    }
    class Tooltip extends __MDLComponent<TooltipProps> { }

    class MDLComponent extends React.Component<{ recursive?: boolean }> { }
}
