// Type definitions for react-bootstrap
// Project: https://github.com/react-bootstrap/react-bootstrap
// Definitions by: Walker Burgin <https://github.com/walkerburgin>, Vincent Siao <https://github.com/vsiao>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../react/react-global.d.ts"/>

declare namespace ReactBootstrap {

    // <Button />
    // ----------------------------------------
    export interface ButtonProps extends React.Props<Button> {

        // Optional
        active?: boolean;
        disabled?: boolean;
        block?: boolean;
        bsStyle?: string;
        bsSize?: string;
        className?: string;
        navItem?: boolean;
        navDropdown?: boolean;
        componentClass?: string;
        href?: string;
        onClick?: Function; // Add more specific type
        target?: string;
        type?: string;
    }
    export type Button = React.ClassicComponent<ButtonProps, {}>;
    export var Button: React.ClassicComponentClass<ButtonProps>;

    // <ButtonToolbar />
    // ----------------------------------------
    export interface ButtonToolbarProps extends React.Props<ButtonToolbar> {

        // Optional
        block?: boolean;
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        justified?: boolean;
        vertical?: boolean;
    }
    export type ButtonToolbar = React.ClassicComponent<ButtonToolbarProps, {}>;
    export var ButtonToolbar: React.ClassicComponentClass<ButtonToolbarProps>;

    // <ButtonGroup />
    // ----------------------------------------
    export interface ButtonGroupProps extends React.Props<ButtonGroup> {
        // Optional
        block?: boolean;
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        justified?: boolean;
        vertical?: boolean;
    }
    export type ButtonGroup = React.ClassicComponent<ButtonGroupProps, {}>;
    export var ButtonGroup: React.ClassicComponentClass<ButtonGroupProps>;

    // <DropdownButton />
    // ----------------------------------------
    export interface DropdownButtonProps extends React.Props<DropdownButton> {
        bsStyle?: string;
        bsSize?: string;
        buttonClassName?: string;
        className?: string;
        dropup?: boolean;
        href?: string;
        id?: string | number;
        navItem?: boolean;
        noCaret?: boolean;
        onClick?: Function;  // TODO: Add more specifc type
        onSelect?: Function; // TODO: Add more specific type
        pullRight?: boolean;
        title?: any; // TODO: Add more specific type
    }
    export class DropdownButton extends React.Component<DropdownButtonProps, {}> {
    }

    // <SplitButton />
    // ----------------------------------------
    export interface SplitButtonProps extends React.Props<SplitButton> {
        bsStyle?: string;
        bsSize?: string;
        className?: string;
        disabled?: boolean;
        dropdownTitle?: any; // TODO: Add more specific type
        dropup?: boolean;
        href?: string;
        id?: string;
        onClick?: Function;  // TODO: Add more specific type
        onSelect?: Function; // TODO: Add more specific type
        pullRight?: boolean;
        target?: string;
        title?: any; // TODO: Add more specific type
    }
    export class SplitButton extends React.Component<SplitButtonProps, {}> {
    }

    // <MenuItem />
    // ----------------------------------------
    export interface MenuItemProps extends React.Props<MenuItem> {
        active?: boolean;
        className?: string;
        disabled?: boolean;
        divider?: boolean;
        eventKey?: any;
        header?: boolean;
        href?: string;
        onClick?: Function;
        onKeyDown?: Function;
        onSelect?: Function;
        target?: string;
        title?: string;
    }
    export class MenuItem extends React.Component<MenuItemProps, {}> {
    }

    // <Panel />
    // ----------------------------------------
    export interface PanelProps extends React.Props<Panel> {
        className?: string;
        bsSize?: string;
        bsStyle?: string;
        collapsible?: boolean;
        defaultExpanded?: boolean;
        eventKey?: any;
        expanded?: boolean;
        footer?: any; // TODO: Add more specific type
        header?: any; // TODO: Add more specific type
        id?: string;
        onSelect?: Function; // TODO: Add more specific type
        onClick?: Function; // TODO: Add more specific type
    }
    export type Panel = React.ClassicComponent<PanelProps, {}>;
    export var Panel: React.ClassicComponentClass<PanelProps>;

    // <Accordion />
    // ----------------------------------------
    export interface AccordionProps extends React.Props<Accordion> {
        bsSize?: string;
        bsStyle?: string;
        collapsible?: boolean;
        defaultExpanded?: boolean;
        eventKey?: any;
        expanded?: boolean;
        footer?: any; // TODO: Add more specific type
        header?: any; // TODO: Add more specific type
        id?: string;
        onSelect?: Function; // TODO: Add more specific type
    }
    export type Accordion = React.ClassicComponent<AccordionProps, {}>;
    export var Accordion: React.ClassicComponentClass<AccordionProps>;

    // <PanelGroup />
    // ----------------------------------------
    export interface PanelGroupProps extends React.Props<PanelGroup> {
        accordion?: boolean;
        activeKey?: any;
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        defaultActiveKey?: any;
        onSelect?: Function;
    }
    export type PanelGroup = React.ClassicComponent<PanelGroupProps, {}>;
    export var PanelGroup: React.ClassicComponentClass<PanelGroupProps>;

    // <Modal.Dialog />
    // ----------------------------------------
    export interface ModalDialogProps extends React.Props<ModalDialog> {
        // TODO: Add more specific type
    }
    export type ModalDialog = React.ClassicComponent<ModalDialogProps, {}>;
    export var ModalDialog: React.ClassicComponentClass<ModalDialogProps>;

    // <Modal.Header />
    // ----------------------------------------
    export interface ModalHeaderProps extends React.Props<ModalHeader> {
        className?: string;
        closeButton?: boolean;
        modalClassName?: string;
        onHide?: Function;
        // undefined?: string;
    }
    export class ModalHeader extends React.Component<ModalHeaderProps, {}> {
    }

    // <Modal.Title/>
    // ----------------------------------------
    export interface ModalTitleProps extends React.Props<ModalTitle> {
        className?: string;
        modalClassName?: string;
    }
    export class ModalTitle extends React.Component<ModalTitleProps, {}> {
    }

    // <Modal.Body />
    // ----------------------------------------
    export interface ModalBodyProps extends React.Props<ModalBody> {
        className?: string;
        modalClassName?: string;
    }
    export class ModalBody extends React.Component<ModalBodyProps, {}> {
    }

    // <Modal.Footer />
    // ----------------------------------------
    export interface ModalFooterProps extends React.Props<ModalFooter> {
        className?: string;
        modalClassName?: string;
    }
    export class ModalFooter extends React.Component<ModalFooterProps, {}> {
    }

    // <Modal />
    // ----------------------------------------
    export interface ModalProps extends React.Props<Modal> {
        // Required
        onHide: Function;

        // Optional
        animation?: boolean;
        autoFocus?: boolean;
        backdrop?: boolean | string;
        bsSize?: string;
        container?: any; // TODO: Add more specific type
        dialogClassName?: string;
        dialogComponent?: any; // TODO: Add more specific type
        enforceFocus?: boolean;
        keyboard?: boolean;
        show?: boolean;
    }
    export interface ModalClass extends React.ClassicComponentClass<ModalProps> {
        Body: typeof ModalBody;
        Header: typeof ModalHeader;
        Title: typeof ModalTitle;
        Footer: typeof ModalFooter;
        Dialog: typeof ModalDialog;
    }
    export type Modal = React.ClassicComponent<ModalProps, {}>;
    export var Modal: ModalClass;

    // <OverlayTrigger />
    // ----------------------------------------
    export interface OverlayTriggerProps extends React.Props<OverlayTrigger> {
        // Required
        overlay: any; // TODO: Add more specific type

        // Optional
        animation?: any; // TODO: Add more specific type
        container?: any; // TODO: Add more specific type
        containerPadding?: number;
        defaultOverlayShown?: boolean;
        delay?: number;
        delayHide?: number;
        delayShow?: number;
        onEnter?: Function;
        onEntered?: Function;
        onEntering?: Function;
        onExit?: Function;
        onExited?: Function;
        onExiting?: Function;
        placement?: string;
        rootClose?: boolean;
        trigger?: string | string[];
    }
    export type OverlayTrigger = React.ClassicComponent<OverlayTriggerProps, {}>;
    export var OverlayTrigger: React.ClassicComponentClass<OverlayTriggerProps>;

    // <Tooltip />
    // ----------------------------------------
    export interface TooltipProps extends React.Props<Tooltip> {
        // Optional
        arrowOffsetLeft?: number | string;
        arrowOffsetTop?: number | string;
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        id?: string;
        placement?: string;
        positionLeft?: number;
        positionTop?: number;
        title?: any; // TODO: Add more specific type
    }
    export type Tooltip = React.ClassicComponent<TooltipProps, {}>;
    export var Tooltip: React.ClassicComponentClass<TooltipProps>;

    // <Popover/>
    // ----------------------------------------
    export interface PopoverProps extends React.Props<Popover> {
        // Optional
        arrowOffsetLeft?: number | string;
        arrowOffsetTop?: number | string;
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        id?: string;
        placement?: string;
        positionLeft?: number;
        positionTop?: number;
        title?: any; // TODO: Add more specific type
    }
    export type Popover = React.ClassicComponent<PopoverProps, {}>;
    export var Popover: React.ClassicComponentClass<PopoverProps>;

    // <Overlay />
    // ----------------------------------------
    export interface OverlayProps extends React.Props<Overlay> {
        // Optional
        animation?: any; // TODO: Add more specific type
        container?: any; // TODO: Add more specific type
        containerPadding?: number; // TODO: Add more specific type
        onEnter?: Function;
        onEntered?: Function;
        onEntering?: Function;
        onExit?: Function;
        onExited?: Function;
        onExiting?: Function;
        onHide?: Function;
        placement?: string;
        rootClose?: boolean;
        show?: boolean;
        target?: Function;
    }
    export class Overlay extends React.Component<OverlayProps, {}> {
    }

    // <ProgressBar />
    // ----------------------------------------
    export interface ProgressBarProps extends React.Props<ProgressBar> {
        // Optional
        active?: boolean;
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        interpolatedClass?: any; // TODO: Add more specific type
        label?: any; // TODO: Add more specific type
        max?: number;
        min?: number;
        now?: number;
        srOnly?: boolean;
        striped?: boolean;
    }
    export class ProgressBar extends React.Component<ProgressBarProps, {}> {
    }

    // <Nav />
    // ----------------------------------------
    // TODO: This one turned into a union of two different types
    export interface NavProps extends React.Props<Nav> {
        // Optional
        activeHref?: string;
        activeKey?: any;
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        collapsible?: boolean;
        eventKey?: any;
        expanded?: boolean;
        id?: string;
        justified?: boolean;
        navbar?: boolean;
        onSelect?: Function;
        pullRight?: boolean;
        right?: boolean;
        stacked?: boolean;
        ulClassName?: string;
        ulId?: string;
    }
    export class Nav extends React.Component<NavProps, {}> {
    }

    // <NavItem />
    // ----------------------------------------
    export interface NavItemProps extends React.Props<NavItem> {
        active?: boolean;
        brand?: any; // TODO: Add more specific type
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        componentClass?: any; // TODO: Add more specific type
        defaultNavExpanded?: boolean;
        disabled?: boolean;
        eventKey?: any;
        fixedBottom?: boolean;
        fixedTop?: boolean;
        fluid?: boolean;
        href?: string;
        inverse?: boolean;
        linkId?: string;
        navExpanded?: boolean;
        onClick?: Function;
        onSelect?: Function;
        onToggle?: Function;
        role?: string;
        staticTop?: boolean;
        target?: string;
        title?: string;
        toggleButton?: any; // TODO: Add more specific type
        toggleNavKey?: string | number;
    }
    export type NavItem = React.ClassicComponent<NavItemProps, {}>;
    export var NavItem: React.ClassicComponentClass<NavItemProps>;

    // <Navbar.Brand />
    // ----------------------------------------
    export interface NavbarBrandProps extends React.Props<NavbarBrand> {
    }
    export class NavbarBrand extends React.Component<NavbarBrandProps, {}> {
    }

    // <Navbar.Collapse />
    // ----------------------------------------
    export interface NavbarCollapseProps extends React.Props<NavbarCollapse> {
    }
    export type NavbarCollapse = React.ClassicComponent<NavbarCollapseProps, {}>;
    export var NavbarCollapse: React.ClassicComponentClass<NavbarCollapseProps>;

    // <Navbar.Header />
    // ----------------------------------------
    export interface NavbarHeaderProps extends React.Props<NavbarHeader> {
    }
    export type NavbarHeader = React.ClassicComponent<NavbarHeaderProps, {}>;
    export var NavbarHeader: React.ClassicComponentClass<NavbarHeaderProps>;

    // <Navbar.Toggle />
    // ----------------------------------------
    export interface NavbarToggleProps extends React.Props<NavbarToggle> {
    }
    export type NavbarToggle = React.ClassicComponent<NavbarToggleProps, {}>;
    export var NavbarToggle: React.ClassicComponentClass<NavbarToggleProps>;

    // <Navbar />
    // ----------------------------------------
    export interface NavbarProps extends React.Props<Navbar> {
        brand?: any; // TODO: Add more specific type
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        componentClass?: any; // TODO: Add more specific type
        defaultNavExpanded?: boolean;
        fixedBottom?: boolean;
        fixedTop?: boolean;
        fluid?: boolean;
        inverse?: boolean;
        navExpanded?: boolean;
        onToggle?: Function;
        role?: string;
        staticTop?: boolean;
        toggleButton?: any; // TODO: Add more specific type
        toggleNavKey?: string | number;
    }
    export interface NavbarClass extends React.ClassicComponentClass<NavbarProps> {
        Brand: typeof NavbarBrand;
        Collapse: typeof NavbarCollapse;
        Header: typeof NavbarHeader;
        Toggle: typeof NavbarToggle;
    }
    export type Navbar = React.ClassicComponent<NavbarProps, {}>;
    export var Navbar: NavbarClass;

    // <NavDropdown />
    // ----------------------------------------
    export interface NavDropdownProps extends React.Props<NavDropdown> {
        className?: string;
        eventKey?: any;
        title?: string;
        id?: string;
    }
    export class NavDropdown extends React.Component<NavDropdownProps, {}> {
    }

    // <Tabs />
    // ----------------------------------------
    export interface TabsProps extends React.Props<Tabs> {
        activeKey?: any;
        animation?: boolean;
        bsStyle?: string;
        defaultActiveKey?: any;
        id?: string | number;
        onSelect?: Function;
        paneWidth?: any; // TODO: Add more specific type
        position?: string;
        tabWidth?: any; // TODO: Add more specific type
    }
    export type Tabs = React.ClassicComponent<TabsProps, {}>;
    export var Tabs: React.ClassicComponentClass<TabsProps>;

    // <Tab />
    // ----------------------------------------
    export interface TabProps extends React.Props<Tab> {
        animation?: boolean;
        className?: string;
        disabled?: boolean;
        eventKey?: any; // TODO: Add more specific type
        title?: any; // TODO: Add more specific type
    }
    export type Tab = React.ClassicComponent<TabProps, {}>;
    export var Tab: React.ClassicComponentClass<TabProps>;

    // <Pager />
    // ----------------------------------------
    export interface PagerProps extends React.Props<Pager> {
        className?: string;
        onSelect?: Function;
    }
    export type Pager = React.ClassicComponent<PagerProps, {}>;
    export var Pager: React.ClassicComponentClass<PagerProps>;

    // <PageItem />
    // ----------------------------------------
    export interface PageItemProps extends React.Props<PageItem> {
        className?: string;
        disabled?: boolean;
        eventKey?: any;
        href?: string;
        next?: boolean;
        onSelect?: Function;
        previous?: boolean;
        target?: string;
        title?: string;
    }
    export type PageItem = React.ClassicComponent<PageItemProps, {}>;
    export var PageItem: React.ClassicComponentClass<PageItemProps>;

    // <Pagination />
    // ----------------------------------------
    export interface PaginationProps extends React.Props<Pagination> {
        activePage?: number;
        bsSize?: string;
        bsStyle?: string;
        buttonComponentClass?: any; // TODO: Add more specific type
        className?: string;
        ellipsis?: boolean;
        first?: boolean;
        items?: number;
        last?: boolean;
        maxButtons?: number;
        next?: boolean;
        onSelect?: Function;
        prev?: boolean;
    }
    export type Pagination = React.ClassicComponent<PaginationProps, {}>;
    export var Pagination: React.ClassicComponentClass<PaginationProps>;

    // <Alert />
    // ----------------------------------------
    export interface AlertProps extends React.Props<Alert> {
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        closeLabel?: string;
        dismissAfter?: number;
        onDismiss?: Function;
    }
    export type Alert = React.ClassicComponent<AlertProps, {}>;
    export var Alert: React.ClassicComponentClass<AlertProps>;

    // <Carousel />
    // ----------------------------------------
    export interface CarouselProps extends React.Props<Carousel> {
        activeIndex?: number;
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        controls?: boolean;
        defaultActiveIndex?: number;
        direction?: string;
        indicators?: boolean;
        interval?: number;
        nextIcon?: any; // TODO: Add more specific type
        onSelect?: Function;
        onSlideEnd?: Function;
        pauseOnHover?: boolean;
        prevIcon?: any; // TODO: Add more specific type
        slide?: boolean;
        wrap?: boolean;
    }
    export type Carousel = React.ClassicComponent<CarouselProps, {}>;
    export var Carousel: React.ClassicComponentClass<CarouselProps>;

    // <CarouselItem />
    // ----------------------------------------
    export interface CarouselItemProps extends React.Props<CarouselItem> {
        active?: boolean;
        animtateIn?: boolean;
        animateOut?: boolean;
        caption?: any; // TODO: Add more specific type
        className?: string;
        direction?: string;
        index?: number;
        onAnimateOutEnd?: Function;
    }
    export type CarouselItem = React.ClassicComponent<CarouselItemProps, {}>;
    export var CarouselItem: React.ClassicComponentClass<CarouselItemProps>;

    // <Grid />
    // ----------------------------------------
    export interface GridProps extends React.Props<Grid> {
        className?: string;
        componentClass?: any; // TODO: Add more specific type
        fluid?: boolean;
    }
    export type Grid = React.ClassicComponent<GridProps, {}>;
    export var Grid: React.ClassicComponentClass<GridProps>;

    // <Row />
    // ----------------------------------------
    export interface RowProps extends React.Props<Row> {
        className?: string;
        componentClass?: any; // TODO: Add more specific type
    }
    export type Row = React.ClassicComponent<RowProps, {}>;
    export var Row: React.ClassicComponentClass<RowProps>;

    // <Col />
    // ----------------------------------------
    export interface ColProps extends React.Props<Col> {
        className?: string;
        componentClass?: any; // TODO: Add more specific type
        lg?: number;
        lgHidden?: boolean;
        lgOffset?: number;
        lgPull?: number;
        lgPush?: number;
        md?: number;
        mdHidden?: boolean;
        mdOffset?: number;
        mdPull?: number;
        mdPush?: number;
        sm?: number;
        smHidden?: boolean;
        smOffset?: number;
        smPull?: number;
        smPush?: number;
        xs?: number;
        xsHidden?: boolean;
        xsOffset?: number;
        xsPull?: number;
        xsPush?: number;
    }
    export type Col = React.ClassicComponent<ColProps, {}>;
    export var Col: React.ClassicComponentClass<ColProps>;

    // <Thumbnail />
    // ----------------------------------------
    export interface ThumbnailProps extends React.Props<Thumbnail> {
        alt?: string;
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        href?: string;
        src?: string;
    }
    export type Thumbnail = React.ClassicComponent<ThumbnailProps, {}>;
    export var Thumbnail: React.ClassicComponentClass<ThumbnailProps>;

    // <ListGroup />
    // ----------------------------------------
    export interface ListGroupProps extends React.Props<ListGroup> {
        className?: string;
        id?: string | number;
        fill?: boolean; // TODO: Add more specific type
    }
    export class ListGroup extends React.Component<ListGroupProps, {}> {
    }

    // <ListGroupItem />
    // ----------------------------------------
    export interface ListGroupItemProps extends React.Props<ListGroupItem> {
        active?: any;
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        disabled?: any;
        eventKey?: any;
        header?: any; // TODO: Add more specific type
        href?: string;
        key?: any; // TODO: Add more specific type
        listItem?: boolean;
        onClick?: Function; // TODO: Add more specific type
        target?: string;
    }
    export class ListGroupItem extends React.Component<ListGroupItemProps, {}> {
    }

    // <Label />
    // ----------------------------------------
    export interface LabelProps extends React.Props<Label> {
        bsSize?: string;
        bsStyle?: string;
        className?: string;
    }
    export class Label extends React.Component<LabelProps, {}> {
    }

    // <Badge />
    // ----------------------------------------
    export interface BadgeProps extends React.Props<Badge> {
        className?: string;
        pullRight?: boolean;
    }
    export type Badge = React.ClassicComponent<BadgeProps, {}>;
    export var Badge: React.ClassicComponentClass<BadgeProps>;

    // <Jumbotron />
    // ----------------------------------------
    export interface JumbotronProps extends React.Props<Jumbotron> {
        className?: string;
        componentClass?: any; // TODO: Add more specific type
    }
    export type Jumbotron = React.ClassicComponent<JumbotronProps, {}>;
    export var Jumbotron: React.ClassicComponentClass<JumbotronProps>;

    // <PageHeader />
    // ----------------------------------------
    export interface PageHeaderProps extends React.Props<PageHeader> {
        className?: string;
    }
    export class PageHeader extends React.Component<PageHeaderProps, {}> {
    }

    // <Well />
    // ----------------------------------------
    export interface WellProps extends React.Props<Well> {
        bsSize?: string;
        bsStyle?: string;
        className?: string;
    }
    export class Well extends React.Component<WellProps, {}> {
    }

    // <Glyphicon />
    // ----------------------------------------
    export interface GlyphiconProps extends React.Props<Glyphicon> {
        className?: string;
        // Required
        glyph: string;
    }
    export type Glyphicon = React.ClassicComponent<GlyphiconProps, {}>;
    export var Glyphicon: React.ClassicComponentClass<GlyphiconProps>;

    // <Table />
    // ----------------------------------------
    export interface TableProps extends React.Props<Table> {
        bordered?: boolean;
        className?: string;
        condensed?: boolean;
        hover?: boolean;
        responsive?: boolean;
        striped?: boolean;
    }
    export type Table = React.ClassicComponent<TableProps, {}>;
    export var Table: React.ClassicComponentClass<TableProps>;

    // <Input />
    // ----------------------------------------
    export interface InputProps extends React.Props<Input> {
        defaultValue?: string;
        addonAfter?: any; // TODO: Add more specific type
        addonBefore?: any; // TODO: Add more specific type
        bsSize?: string;
        bsStyle?: string;
        buttonAfter?: any; // TODO: Add more specific type
        buttonBefore?: any; // TODO: Add more specific type
        className?: string;
        checked?: boolean;
        disabled?: boolean;
        feedbackIcon?: any; // TODO: Add more specific type
        groupClassName?: string;
        hasFeedback?: boolean;
        help?: any; // TODO: Add more specific type
        id?: string | number;
        label?: any; // TODO: Add more specific type
        labelClassName?: string;
        multiple?: boolean;
        placeholder?: string;
        readOnly?: boolean;
        type?: string;
        onChange?: Function; // TODO: Add more specific type
        onKeyDown?: Function; // TODO: Add more specific type
        onKeyUp?: Function; // TODO: Add more specific type
        onKeyPress?: Function; // TODO: Add more specific type
        value?: any; // TODO: Add more specific type
        wrapperClassName?: string;
    }
    // TODO: extends InputBase
    export class Input extends React.Component<InputProps, {}> {
    }

    // <ButtonInput />
    // ----------------------------------------
    export interface ButtonInputProps extends React.Props<ButtonInput> {
        addonAfter?: any; // TODO: Add more specific type
        addonBefore?: any; // TODO: Add more specific type
        bsSize?: string;
        bsStyle?: string;
        buttonAfter?: any; // TODO: Add more specific type
        buttonBefore?: any; // TODO: Add more specific type
        className?: string;
        disabled?: boolean;
        feedbackIcon?: any; // TODO: Add more specific type
        groupClassName?: string;
        hasFeedback?: boolean;
        help?: any; // TODO: Add more specific type
        id?: string | number;
        label?: any; // TODO: Add more specific type
        labelClassName?: string;
        multiple?: boolean;
        onClick?: Function; // TODO: Add more specific type
        type?: string;
        value?: any; // TODO: Add more specific type
        wrapperClassName?: string;
    }
    // TODO: extends InputBase
    export class ButtonInput extends React.Component<ButtonInputProps, {}> {
    }


    // <FormControls.Static />
    // ----------------------------------------

    export interface StaticProps extends React.Props<StaticClass> { }
    export interface Static extends React.ReactElement<StaticProps> { }
    export interface StaticClass extends React.ComponentClass<StaticProps> { }
    export interface FormControlsClass {
        Static: StaticClass;
    }
    export var FormControls: FormControlsClass;


    // <Portal />
    // ----------------------------------------
    export interface PortalProps extends React.Props<Portal> {
        dimension?: string | Function;
        getDimensionValue?: Function;
        in?: boolean;
        onEnter?: Function;
        onEntered?: Function;
        onEntering?: Function;
        onExit?: Function;
        onExited?: Function;
        onExiting?: Function;
        role?: string;
        timeout?: number;
        transitionAppear?: boolean;
        unmountOnExit?: boolean;
    }
    export type Portal = React.ClassicComponent<PortalProps, {}>;
    export var Portal: React.ClassicComponentClass<PortalProps>;

    // <Position />
    // ----------------------------------------
    export interface PositionProps extends React.Props<Position> {
        dimension?: string | Function;
        getDimensionValue?: Function;
        in?: boolean;
        onEnter?: Function;
        onEntered?: Function;
        onEntering?: Function;
        onExit?: Function;
        onExited?: Function;
        onExiting?: Function;
        role?: string;
        timeout?: number;
        transitionAppear?: boolean;
        unmountOnExit?: boolean;
    }
    export class Position extends React.Component<PositionProps, {}> {
    }

    // <Fade />
    // ----------------------------------------
    export interface FadeProps extends React.Props<Fade> {
        in?: boolean;
        onEnter?: Function;
        onEntered?: Function;
        onEntering?: Function;
        onExit?: Function;
        onExited?: Function;
        onExiting?: Function;
        timeout?: number;
        transitionAppear?: boolean;
        unmountOnExit?: boolean;
    }
    export class Fade extends React.Component<FadeProps, {}> {
    }
}

declare module "react-bootstrap" {
    export = ReactBootstrap;
}