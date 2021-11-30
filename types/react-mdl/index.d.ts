// Type definitions for react-mdl 1.7.0
// Project: https://github.com/tleunen/react-mdl
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export = __ReactMDL;

declare namespace __ReactMDL {
    type __MDLClassProps = React.ClassAttributes<any>;
    type __MDLOtherProps = React.HTMLProps<any>;
    class __MDLComponent<P> extends React.Component<P> { }
    class __MDLBasicComponent extends __MDLComponent<__MDLOtherProps> { }

    interface ShadowedComponent {
        shadow?: number | undefined;
    }
    interface RippleComponent {
        ripple?: boolean | undefined;
    }
    interface CustomRenderedComponent {
        component?: string | JSX.Element | Function | undefined;
    }


    // HTMLAttributes (minus the 'data', 'icon', 'label', 'name', 'rows', 'size', 'title', 'value' attributes)
    interface MDLHTMLAttributes {
        // React-specific Attributes
        defaultChecked?: boolean | undefined;
        defaultValue?: number | string | string[] | undefined;

        // Standard HTML Attributes
        accept?: string | undefined;
        acceptCharset?: string | undefined;
        accessKey?: string | undefined;
        action?: string | undefined;
        allowFullScreen?: boolean | undefined;
        allowTransparency?: boolean | undefined;
        alt?: string | undefined;
        async?: boolean | undefined;
        autoComplete?: string | undefined;
        autoFocus?: boolean | undefined;
        autoPlay?: boolean | undefined;
        capture?: boolean | undefined;
        cellPadding?: number | string | undefined;
        cellSpacing?: number | string | undefined;
        charSet?: string | undefined;
        challenge?: string | undefined;
        checked?: boolean | undefined;
        classID?: string | undefined;
        className?: string | undefined;
        cols?: number | undefined;
        colSpan?: number | undefined;
        content?: string | undefined;
        contentEditable?: boolean | undefined;
        contextMenu?: string | undefined;
        controls?: boolean | undefined;
        coords?: string | undefined;
        crossOrigin?: string | undefined;
        dateTime?: string | undefined;
        default?: boolean | undefined;
        defer?: boolean | undefined;
        dir?: string | undefined;
        disabled?: boolean | undefined;
        download?: any;
        draggable?: boolean | undefined;
        encType?: string | undefined;
        form?: string | undefined;
        formAction?: string | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        frameBorder?: number | string | undefined;
        headers?: string | undefined;
        height?: number | string | undefined;
        hidden?: boolean | undefined;
        high?: number | undefined;
        href?: string | undefined;
        hrefLang?: string | undefined;
        htmlFor?: string | undefined;
        httpEquiv?: string | undefined;
        id?: string | undefined;
        inputMode?: string | undefined;
        integrity?: string | undefined;
        is?: string | undefined;
        keyParams?: string | undefined;
        keyType?: string | undefined;
        kind?: string | undefined;
        lang?: string | undefined;
        list?: string | undefined;
        loop?: boolean | undefined;
        low?: number | undefined;
        manifest?: string | undefined;
        marginHeight?: number | undefined;
        marginWidth?: number | undefined;
        max?: number | string | undefined;
        maxLength?: number | undefined;
        media?: string | undefined;
        mediaGroup?: string | undefined;
        method?: string | undefined;
        min?: number | string | undefined;
        minLength?: number | undefined;
        multiple?: boolean | undefined;
        muted?: boolean | undefined;
        nonce?: string | undefined;
        noValidate?: boolean | undefined;
        open?: boolean | undefined;
        optimum?: number | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        poster?: string | undefined;
        preload?: string | undefined;
        radioGroup?: string | undefined;
        readOnly?: boolean | undefined;
        rel?: string | undefined;
        required?: boolean | undefined;
        reversed?: boolean | undefined;
        role?: string | undefined;
        rowSpan?: number | undefined;
        sandbox?: string | undefined;
        scope?: string | undefined;
        scoped?: boolean | undefined;
        scrolling?: string | undefined;
        seamless?: boolean | undefined;
        selected?: boolean | undefined;
        shape?: string | undefined;
        sizes?: string | undefined;
        span?: number | undefined;
        spellCheck?: boolean | undefined;
        src?: string | undefined;
        srcDoc?: string | undefined;
        srcLang?: string | undefined;
        srcSet?: string | undefined;
        start?: number | undefined;
        step?: number | string | undefined;
        style?: React.CSSProperties | undefined;
        summary?: string | undefined;
        tabIndex?: number | undefined;
        target?: string | undefined;
        type?: string | undefined;
        useMap?: string | undefined;
        width?: number | string | undefined;
        wmode?: string | undefined;
        wrap?: string | undefined;

        // RDFa Attributes
        about?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        resource?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;

        // Non-standard Attributes
        autoCapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        color?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: boolean | undefined;

        // Allows aria- and data- Attributes
        [key: string]: any;
    }
    // DOMAttributes (minus 'onClick', 'onChange')
    interface MDLDOMAttributes<T> {
        // DOMAttributes (minus onClick)
        children?: React.ReactNode | undefined;
        dangerouslySetInnerHTML?: {
            __html: string;
        } | undefined;

        // Clipboard Events
        onCopy?: React.ClipboardEventHandler<T> | undefined;
        onCut?: React.ClipboardEventHandler<T> | undefined;
        onPaste?: React.ClipboardEventHandler<T> | undefined;

        // Composition Events
        onCompositionEnd?: React.CompositionEventHandler<T> | undefined;
        onCompositionStart?: React.CompositionEventHandler<T> | undefined;
        onCompositionUpdate?: React.CompositionEventHandler<T> | undefined;

        // Focus Events
        onFocus?: React.FocusEventHandler<T> | undefined;
        onBlur?: React.FocusEventHandler<T> | undefined;

        // Form Events
        onInput?: React.FormEventHandler<T> | undefined;
        onSubmit?: React.FormEventHandler<T> | undefined;

        // Image Events
        onLoad?: React.ReactEventHandler<T> | undefined;
        onError?: React.ReactEventHandler<T> | undefined; // also a Media Event

        // Keyboard Events
        onKeyDown?: React.KeyboardEventHandler<T> | undefined;
        onKeyPress?: React.KeyboardEventHandler<T> | undefined;
        onKeyUp?: React.KeyboardEventHandler<T> | undefined;

        // Media Events
        onAbort?: React.ReactEventHandler<T> | undefined;
        onCanPlay?: React.ReactEventHandler<T> | undefined;
        onCanPlayThrough?: React.ReactEventHandler<T> | undefined;
        onDurationChange?: React.ReactEventHandler<T> | undefined;
        onEmptied?: React.ReactEventHandler<T> | undefined;
        onEncrypted?: React.ReactEventHandler<T> | undefined;
        onEnded?: React.ReactEventHandler<T> | undefined;
        onLoadedData?: React.ReactEventHandler<T> | undefined;
        onLoadedMetadata?: React.ReactEventHandler<T> | undefined;
        onLoadStart?: React.ReactEventHandler<T> | undefined;
        onPause?: React.ReactEventHandler<T> | undefined;
        onPlay?: React.ReactEventHandler<T> | undefined;
        onPlaying?: React.ReactEventHandler<T> | undefined;
        onProgress?: React.ReactEventHandler<T> | undefined;
        onRateChange?: React.ReactEventHandler<T> | undefined;
        onSeeked?: React.ReactEventHandler<T> | undefined;
        onSeeking?: React.ReactEventHandler<T> | undefined;
        onStalled?: React.ReactEventHandler<T> | undefined;
        onSuspend?: React.ReactEventHandler<T> | undefined;
        onTimeUpdate?: React.ReactEventHandler<T> | undefined;
        onVolumeChange?: React.ReactEventHandler<T> | undefined;
        onWaiting?: React.ReactEventHandler<T> | undefined;

        // MouseEvents
        onContextMenu?: React.MouseEventHandler<T> | undefined;
        onDoubleClick?: React.MouseEventHandler<T> | undefined;
        onDrag?: React.DragEventHandler<T> | undefined;
        onDragEnd?: React.DragEventHandler<T> | undefined;
        onDragEnter?: React.DragEventHandler<T> | undefined;
        onDragExit?: React.DragEventHandler<T> | undefined;
        onDragLeave?: React.DragEventHandler<T> | undefined;
        onDragOver?: React.DragEventHandler<T> | undefined;
        onDragStart?: React.DragEventHandler<T> | undefined;
        onDrop?: React.DragEventHandler<T> | undefined;
        onMouseDown?: React.MouseEventHandler<T> | undefined;
        onMouseEnter?: React.MouseEventHandler<T> | undefined;
        onMouseLeave?: React.MouseEventHandler<T> | undefined;
        onMouseMove?: React.MouseEventHandler<T> | undefined;
        onMouseOut?: React.MouseEventHandler<T> | undefined;
        onMouseOver?: React.MouseEventHandler<T> | undefined;
        onMouseUp?: React.MouseEventHandler<T> | undefined;

        // Selection Events
        onSelect?: React.ReactEventHandler<T> | undefined;

        // Touch Events
        onTouchCancel?: React.TouchEventHandler<T> | undefined;
        onTouchEnd?: React.TouchEventHandler<T> | undefined;
        onTouchMove?: React.TouchEventHandler<T> | undefined;
        onTouchStart?: React.TouchEventHandler<T> | undefined;

        // UI Events
        onScroll?: React.UIEventHandler<T> | undefined;

        // Wheel Events
        onWheel?: React.WheelEventHandler<T> | undefined;
    }



    interface BadgeProps extends __MDLClassProps {
        children?: string | React.ReactElement;
        text: string | number;
        className?: string | undefined;
        noBackground?: boolean | undefined;
        overlap?: boolean | undefined;
    }
    class Badge extends __MDLComponent<BadgeProps> { }

    interface ChipProps extends __MDLOtherProps {
        onClick?: React.MouseEventHandler<Chip> | undefined;
        onClose?: React.MouseEventHandler<Chip> | undefined;
    }

    class Chip extends __MDLComponent<ChipProps> { }

    class ChipContact extends __MDLComponent<__MDLOtherProps> { }

    interface ButtonProps extends __MDLOtherProps, RippleComponent, CustomRenderedComponent {
        accent?: boolean | undefined;
        colored?: boolean | undefined;
        primary?: boolean | undefined;
    }
    interface StandardButtonProps extends ButtonProps {
        raised?: boolean | undefined;
    }
    interface FABButtonProps extends ButtonProps {
        mini?: boolean | undefined;
    }
    interface IconButtonProps extends ButtonProps {
        name?: string | undefined;
        raised?: boolean | undefined;
    }
    class Button extends __MDLComponent<StandardButtonProps> { }
    class FABButton extends __MDLComponent<FABButtonProps> { }
    class IconButton extends __MDLComponent<IconButtonProps> { }


    interface CardProps extends __MDLOtherProps, ShadowedComponent { }
    interface CardActionProps extends __MDLOtherProps {
        border?: boolean | undefined;
    }
    interface CardTitleProps extends __MDLOtherProps {
        expand?: boolean | undefined;
    }
    class Card extends __MDLComponent<CardProps> { }
    class CardActions extends __MDLComponent<CardActionProps> { }
    class CardTitle extends __MDLComponent<CardTitleProps> { }
    class CardText extends __MDLBasicComponent { }
    class CardMenu extends __MDLBasicComponent { }
    class CardMedia extends __MDLBasicComponent { }


    interface CheckboxProps extends __MDLOtherProps, RippleComponent {
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
        label?: string | undefined;
    }
    class Checkbox extends __MDLComponent<CheckboxProps> { }

    interface UndecoratedTableProps extends __MDLClassProps, MDLHTMLAttributes, React.DOMAttributes<UndecoratedTable>, ShadowedComponent {
        rows: Array<any>;
        rowKeyColumn?: string | undefined;

        name?: string | undefined;
        title?: string | undefined;
    }
    interface TableProps extends UndecoratedTableProps {
        sortable?: boolean | undefined;
        selectable?: boolean | undefined;
        onSelectionChanged?: ((row: any) => any) | undefined;
    }
    interface TableHeaderProps extends __MDLClassProps, MDLHTMLAttributes, MDLDOMAttributes<TableHeader> {
        name: string;
        title?: string | undefined;
        cellFormatter?: ((value: any, row: any, index: number) => React.ReactNode) | undefined;
        numeric?: boolean | undefined;
        nosort?: boolean | undefined;
        onClick?: ((e: React.MouseEvent<TableHeader>, name: string) => any) | undefined;
        sortFn?: ((a: any, b: any, isAsc: boolean) => number) | undefined;
        tooltip?: React.ReactNode | undefined;
    }
    class Table extends __MDLComponent<TableProps> { }
    class TableHeader extends __MDLComponent<TableHeaderProps> { }
    class UndecoratedTable extends __MDLComponent<UndecoratedTableProps> { }
    class DataTable extends Table { }


    interface DialogProps extends __MDLOtherProps {
        open?: boolean | undefined;
        onCancel?: ((e: any) => void) | undefined;
    }
    interface DialogActionsProps extends __MDLOtherProps {
        fullWidth?: boolean | undefined;
    }
    interface DialogTitleProps extends __MDLOtherProps, CustomRenderedComponent { }
    class Dialog extends __MDLComponent<DialogProps> { }
    class DialogActions extends __MDLComponent<DialogActionsProps> { }
    class DialogTitle extends __MDLComponent<DialogTitleProps> { }
    class DialogContent extends __MDLBasicComponent { }


    interface GridProps extends __MDLOtherProps, CustomRenderedComponent, ShadowedComponent {
        noSpacing?: boolean | undefined;
    }
    interface CellProps extends __MDLOtherProps, CustomRenderedComponent, ShadowedComponent {
        col: number;
        offset?: number | undefined;
        offsetDesktop?: number | undefined;
        offsetPhone?: number | undefined;
        offsetTablet?: number | undefined;
        align?: string | undefined;
        phone?: number | undefined;
        tablet?: number | undefined;
        hideDesktop?: boolean | undefined;
        hidePhone?: boolean | undefined;
        hideTablet?: boolean | undefined;
    }
    class Grid extends __MDLComponent<GridProps> { }
    class Cell extends __MDLComponent<CellProps> { }


    interface IconProps extends __MDLOtherProps {
        name: string;
    }
    class Icon extends __MDLComponent<IconProps> { }


    interface IconToggleProps extends __MDLOtherProps, RippleComponent {
        name: string;
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
    }
    class IconToggle extends __MDLComponent<IconToggleProps> { }


    interface ContentProps extends __MDLOtherProps, CustomRenderedComponent { }
    interface DrawerProps extends __MDLOtherProps {
        title?: string | undefined;
    }
    interface HeaderProps extends __MDLOtherProps {
        title?: any; // string | JSX.Element
        scroll?: boolean | undefined;
        seamed?: boolean | undefined;
        transparent?: boolean | undefined;
        waterfall?: boolean | undefined;
        hideTop?: boolean | undefined;
        hideSpacer?: boolean | undefined;
    }
    interface HeaderRowProps extends __MDLOtherProps {
        title?: any; // string | JSX.Element
        hideSpacer?: boolean | undefined;
    }
    interface HeaderTabsProps extends __MDLOtherProps, RippleComponent {
        activeTab?: number | undefined;
        onChange?: React.FormEventHandler<Header> | undefined;
    }
    interface LayoutProps extends __MDLOtherProps {
        fixedDrawer?: boolean | undefined;
        fixedHeader?: boolean | undefined;
        fixedTabs?: boolean | undefined;
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
        size?: string | undefined;

        title?: string | undefined;
    }
    interface FooterDropDownSectionProps extends MDLHTMLAttributes, React.DOMAttributes<FooterDropDownSection> {
        size?: string | undefined;
        title: React.ReactNode;
    }
    interface FooterLinkListProps extends MDLHTMLAttributes, React.DOMAttributes<FooterLinkList> {
        size?: string | undefined;

        title?: string | undefined;
    }
    interface FooterSectionProps extends MDLHTMLAttributes, React.DOMAttributes<FooterSection> {
        size?: string | undefined;
        type?: string | undefined;
        logo?: React.ReactNode | undefined;

        title?: string | undefined;
    }
    class Footer extends __MDLComponent<FooterProps> { }
    class FooterDropDownSection extends __MDLComponent<FooterDropDownSectionProps> { }
    class FooterLinkList extends __MDLComponent<FooterLinkListProps> { }
    class FooterSection extends __MDLComponent<FooterSectionProps> { }

    interface ListItemProps extends __MDLOtherProps {
        twoLine?: boolean | undefined;
        threeLine?: boolean | undefined;
    }
    interface ListItemActionProps extends __MDLOtherProps {
        info?: string | undefined;
    }
    interface ListItemContentProps extends MDLHTMLAttributes, React.DOMAttributes<ListItemContent> {
        avatar?: string | JSX.Element | undefined;
        icon?: string | JSX.Element | undefined;
        subtitle?: React.ReactNode | undefined;
        useBodyClass?: boolean | undefined;
    }
    class List extends __MDLBasicComponent { }
    class ListItem extends __MDLComponent<ListItemProps> { }
    class ListItemAction extends __MDLComponent<ListItemActionProps> { }
    class ListItemContent extends __MDLComponent<ListItemContentProps> { }


    interface MenuProps extends __MDLOtherProps, RippleComponent {
        target: string;
        align?: string | undefined;
        valign?: string | undefined;
    }
    class Menu extends __MDLComponent<MenuProps> { }
    class MenuItem extends __MDLBasicComponent { }


    interface ProgressBarProps extends __MDLOtherProps {
        buffer?: number | undefined;
        indeterminate?: boolean | undefined;
        progress?: number | undefined;
    }
    class ProgressBar extends __MDLComponent<ProgressBarProps> { }


    interface RadioProps extends MDLHTMLAttributes, React.DOMAttributes<Radio>, RippleComponent {
        value: string | number;
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
        name?: string | undefined;
        onChange?: React.FormEventHandler<Radio> | undefined;
        label?: string | undefined;
    }
    interface RadioGroupProps extends MDLHTMLAttributes, React.DOMAttributes<RadioGroup> {
        name: string;
        value: string | number;
        childContainer?: string | undefined;
        container?: string | undefined;
        onChange?: React.FormEventHandler<RadioGroup> | undefined;
        label?: string | undefined;
    }
    class Radio extends __MDLComponent<RadioProps> { }
    class RadioGroup extends __MDLComponent<RadioGroupProps> { }


    interface SliderProps extends MDLHTMLAttributes, React.DOMAttributes<Slider> {
        max: number;
        min: number;
        onChange?: React.FormEventHandler<Slider> | undefined;
        value?: number | undefined;
    }
    class Slider extends __MDLComponent<SliderProps> { }


    interface SnackbarProps extends __MDLOtherProps {
        active: boolean;
        onTimeout: () => any;
        action?: string | undefined;
        onActionClick?: React.MouseEventHandler<Snackbar> | undefined;
        timeout?: number | undefined;
    }
    class Snackbar extends __MDLComponent<SnackbarProps> { }


    interface SpinnerProps extends __MDLOtherProps {
        singleColor?: boolean | undefined;
    }
    class Spinner extends __MDLComponent<SpinnerProps> { }


    interface SwitchProps extends __MDLOtherProps, RippleComponent {
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
        onChange?: React.FormEventHandler<Switch> | undefined;
    }
    class Switch extends __MDLComponent<SwitchProps> { }


    interface TabProps extends __MDLOtherProps, CustomRenderedComponent {
        active?: boolean | undefined;
        cssPrefix?: string | undefined;
        onTabClick?: ((tabId: number) => any) | undefined;
        tabId?: number | undefined;
    }
    interface TabBarProps extends MDLHTMLAttributes, MDLDOMAttributes<TabBar> {
        cssPrefix: string;
        activeTab?: number | undefined;
        onChange?: ((tabId: number) => any) | undefined;

        name?: string | undefined;
        title?: string | undefined;
        onClick?: React.MouseEventHandler<TabBar> | undefined;
    }
    interface TabsProps extends MDLHTMLAttributes, MDLDOMAttributes<Tabs> {
        activeTab?: number | undefined;
        onChange?: ((tabId: number) => any) | undefined;
        tabBarProps?: TabBarProps | undefined;

        name?: string | undefined;
        title?: string | undefined;
        onClick?: React.MouseEventHandler<Tabs> | undefined;
    }
    class Tab extends __MDLComponent<TabProps> { }
    class TabBar extends __MDLComponent<TabBarProps> { }
    class Tabs extends __MDLComponent<TabsProps> { }


    interface TextfieldProps extends MDLHTMLAttributes, React.DOMAttributes<HTMLInputElement> {
        label: string;
        disabled?: boolean | undefined;
        error?: React.ReactNode | undefined;
        expandable?: boolean | undefined;
        expandableIcon?: string | undefined;
        floatingLabel?: boolean | undefined;
        id?: string | undefined;
        inputClassName?: string | undefined;
        maxRows?: number | undefined;
        onChange?: React.FormEventHandler<HTMLInputElement> | undefined;
        pattern?: string | undefined;
        required?: boolean | undefined;
        rows?: number | undefined;
        value?: string | number | undefined;

        name?: string | undefined;
        title?: string | undefined;
    }
    class Textfield extends __MDLComponent<TextfieldProps> {
        inputRef?: HTMLInputElement | undefined;
    }


    interface TooltipProps extends MDLHTMLAttributes, React.DOMAttributes<Tooltip> {
        label: React.ReactNode;
        large?: boolean | undefined;
        position?: string | undefined;

        name?: string | undefined;
        title?: string | undefined;
    }
    class Tooltip extends __MDLComponent<TooltipProps> { }

    class MDLComponent extends React.Component<{ children: React.ReactElement; recursive?: boolean | undefined }> { }
}
