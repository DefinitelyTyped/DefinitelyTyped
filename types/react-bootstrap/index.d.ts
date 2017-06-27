// Type definitions for react-bootstrap
// Project: https://github.com/react-bootstrap/react-bootstrap
// Definitions by: Walker Burgin <https://github.com/walkerburgin>, Vincent Siao <https://github.com/vsiao>, Danilo Barros <https://github.com/danilojrr>, Batbold Gansukh <https://github.com/Batbold-Gansukh>, Raymond May Jr. <https://github.com/octatone>, Cheng Sieu Ly <https://github.com/chengsieuly>, Kat Busch <https://github.com/katbusch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
export = ReactBootstrap;
export as namespace ReactBootstrap;

declare namespace ReactBootstrap {

    type Sizes = 'xs' | 'xsmall' | 'sm' | 'small' | 'medium' | 'lg' | 'large';


    // Change onSelect signature to be (eventKey: any, event: SyntheticEvent<{}>) => any on all React-Bootstrap components, instead of the old inconsistent mishmash (#1604, #1677, #1756)
    /** ( eventKey:any, e:React.SyntheticEvent<{}> ):void */
    interface SelectCallback extends React.EventHandler<any> {
        (eventKey: any, e: React.SyntheticEvent<{}>): void;
        /**
            @deprecated
            This signature is a hack so can still derive from HTMLProps.
            It does not reflect the underlying event and should not be used.
        */
        (e: React.MouseEvent<{}>): void;
    }


    interface TransitionCallbacks {
        onEnter?: Function;
        onEntered?: Function;
        onEntering?: Function;
        onExit?: Function;
        onExited?: Function;
        onExiting?: Function;
    }


    // <Accordion />
    interface AccordionProps extends React.HTMLProps<Accordion> {
        bsSize?: Sizes;
        bsStyle?: string;
        collapsible?: boolean;
        defaultExpanded?: boolean;
        eventKey?: any;
        expanded?: boolean;
        footer?: any; // TODO: Add more specific type
        header?: any; // TODO: Add more specific type
    }
    type Accordion = React.ClassicComponent<AccordionProps>;
    var Accordion: React.ClassicComponentClass<AccordionProps>;


    // <Breadcrumb />
    interface BreadcrumbProps extends React.Props<Breadcrumb> {
        bsClass?: string;
    }
    interface BreadcrumbClass extends React.ClassicComponentClass<BreadcrumbProps> {
        Item: typeof BreadcrumbItem;
    }
    type Breadcrumb = React.ClassicComponent<BreadcrumbProps>;
    var Breadcrumb: BreadcrumbClass;


    // <BreadcrumbItem />
    interface BreadcrumbItemProps extends React.Props<BreadcrumbItem> {
        active?: boolean;
        id?: string | number;
        href?: string;
        title?: React.ReactNode;
        target?: string;
    }
    type BreadcrumbItem = React.ClassicComponent<BreadcrumbItemProps>;
    var BreadcrumbItem: React.ClassicComponentClass<BreadcrumbItemProps>;


    // <Button />
    interface ButtonProps extends React.HTMLProps<Button> {
        bsClass?: string;
        active?: boolean;
        block?: boolean;
        bsStyle?: string;
        bsSize?: Sizes;
        componentClass?: React.ReactType;
        disabled?: boolean;
    }
    type Button = React.ClassicComponent<ButtonProps>;
    var Button: React.ClassicComponentClass<ButtonProps>;


    // <ButtonToolbar />
    interface ButtonToolbarProps extends React.HTMLProps<ButtonToolbar> {
        block?: boolean;
        bsSize?: Sizes;
        bsStyle?: string;
        justified?: boolean;
        vertical?: boolean;
    }
    type ButtonToolbar = React.ClassicComponent<ButtonToolbarProps>;
    var ButtonToolbar: React.ClassicComponentClass<ButtonToolbarProps>;


    // <ButtonGroup />
    interface ButtonGroupProps extends React.HTMLProps<ButtonGroup> {
        block?: boolean;
        bsSize?: Sizes;
        bsStyle?: string;
        justified?: boolean;
        vertical?: boolean;
    }
    type ButtonGroup = React.ClassicComponent<ButtonGroupProps>;
    var ButtonGroup: React.ClassicComponentClass<ButtonGroupProps>;


    // <SafeAnchor />
    interface SafeAnchorProps extends React.HTMLProps<SafeAnchor> {
        href?: string;
        onClick?: React.MouseEventHandler<{}>;
        disabled?: boolean;
        role?: string;
        componentClass?: React.ReactType;
    }
    type SafeAnchor = React.ClassicComponent<SafeAnchorProps>;
    const SafeAnchor: React.ClassicComponentClass<SafeAnchorProps>;


    // <Checkbox />
    interface CheckboxProps extends React.HTMLProps<Checkbox> {
        bsClass?: string;
        disabled?: boolean;
        inline?: boolean;
        inputRef?: (instance: HTMLInputElement) => void;
        validationState?: "success" | "warning" | "error";
    }
    class Checkbox extends React.Component<CheckboxProps> { }


    // <Clearfix />
    interface ClearfixProps extends React.HTMLProps<Clearfix> {
        componentClass?: React.ReactType,
        visibleXsBlock?: boolean;
        visibleSmBlock?: boolean;
        visibleMdBlock?: boolean;
        visibleLgBlock?: boolean;
    }
    class Clearfix extends React.Component<ClearfixProps> { }


    // <Collapse />
    interface CollapseProps extends TransitionCallbacks, React.Props<Collapse> {
        dimension?: 'height' | 'width' | { ( ):string };
        getDimensionValue?: ( dimension:number, element:React.ReactElement<any> ) => number;
        in?: boolean;
        timeout?: number;
        transitionAppear?: boolean;
        unmountOnExit?: boolean;
    }
    class Collapse extends React.Component<CollapseProps> { }


    // <Dropdown />
    interface DropdownBaseProps {
        bsClass?: string;
        componentClass?: React.ReactType;
        disabled?: boolean;
        dropup?: boolean;
        id: string;
        onClose?: Function;
        onSelect?: SelectCallback;
        onToggle?: (isOpen: boolean) => void;
        open?: boolean;
        pullRight?: boolean;
        role?: string;
    }
    type DropdownProps = DropdownBaseProps & React.HTMLProps<Dropdown>;
    class Dropdown extends React.Component<DropdownProps> {
        public static Menu: typeof DropdownMenu;
        public static Toggle: typeof DropdownToggle;
    }


    // <DropdownButton />
    interface DropdownButtonBaseProps extends DropdownBaseProps {
        block?: boolean;
        bsSize?: Sizes;
        bsStyle?: string;
        navItem?: boolean;
        noCaret?: boolean;
        pullRight?: boolean;
    }
    type DropdownButtonProps = DropdownButtonBaseProps & React.HTMLProps<DropdownButton>;
    class DropdownButton extends React.Component<DropdownButtonProps> { }


    // <Dropdown.Menu />
    interface DropdownMenuProps extends React.HTMLProps<DropdownMenu> {
        labelledBy?: string | number;
        onClose?: Function;
        onSelect?: SelectCallback;
        open?: boolean;
        pullRight?: boolean;
    }
    class DropdownMenu extends React.Component<DropdownMenuProps> { }


    // <Dropdown.Toggle />
    interface DropdownToggleProps extends React.HTMLProps<DropdownToggle> {
        bsRole?: string;
        noCaret?: boolean;
        open?: boolean;
        title?: string;
        useAnchor?: boolean;
        bsClass?:string; // Added since v0.30.0
        bsStyle?:string;
    }
    class DropdownToggle extends React.Component<DropdownToggleProps> { }


    // <Fade />
    interface FadeProps extends TransitionCallbacks, React.Props<Fade> {
        in?: boolean;
        timeout?: number;
        transitionAppear?: boolean;
        unmountOnExit?: boolean;
    }
    class Fade extends React.Component<FadeProps> { }


    // <MenuItem />
    interface MenuItemProps extends React.HTMLProps<MenuItem> {
        active?: boolean;
        bsClass?: string;
        disabled?: boolean;
        divider?: boolean;
        eventKey?: any;
        header?: boolean;
        onClick?: React.MouseEventHandler<{}>;
        onSelect?: SelectCallback;
        target?: string;
        title?: string;
    }
    class MenuItem extends React.Component<MenuItemProps> { }


    // <Panel />
    interface PanelProps extends TransitionCallbacks, React.HTMLProps<Panel> {
        bsClass?: string;
        bsSize?: Sizes;
        bsStyle?: string;
        collapsible?: boolean;
        defaultExpanded?: boolean;
        eventKey?: any;
        expanded?: boolean;
        footer?: React.ReactNode;
        header?: React.ReactNode;
        onSelect?: SelectCallback;
    }
    type Panel = React.ClassicComponent<PanelProps>;
    var Panel: React.ClassicComponentClass<PanelProps>;


    // <PanelGroup />
    interface PanelGroupProps extends React.HTMLProps<PanelGroup> {
        accordion?: boolean;
        activeKey?: any;
        bsSize?: Sizes;
        bsStyle?: string;
        defaultActiveKey?: any;
        onSelect?: SelectCallback;
    }
    type PanelGroup = React.ClassicComponent<PanelGroupProps>;
    var PanelGroup: React.ClassicComponentClass<PanelGroupProps>;


    // <SplitButton />
    interface SplitButtonProps extends React.HTMLProps<SplitButton> {
        bsStyle?: string;
        bsSize?: Sizes;
        dropdownTitle?: any; // TODO: Add more specific type
        dropup?: boolean;
        pullRight?: boolean;
    }
    class SplitButton extends React.Component<SplitButtonProps> { }


    // <Modal.Dialog />
    interface ModalDialogProps extends React.HTMLProps<ModalDialog> {
        // TODO: Add more specific type
        onHide?: Function;
        onEnter?: Function;
        onEntered?: Function;
        onEntering?: Function;
        onExit?: Function;
        onExited?: Function;
        onExiting?: Function;
    }
    type ModalDialog = React.ClassicComponent<ModalDialogProps>;
    var ModalDialog: React.ClassicComponentClass<ModalDialogProps>;


    // <Modal.Header />
    interface ModalHeaderProps extends React.HTMLProps<ModalHeader> {
        closeButton?: boolean;
        modalClassName?: string;
        onHide?: Function;
        // undefined?: string;
    }
    class ModalHeader extends React.Component<ModalHeaderProps> {
    }


    // <Modal.Title/>
    interface ModalTitleProps extends React.HTMLProps<ModalTitle> {
        modalClassName?: string;
    }
    class ModalTitle extends React.Component<ModalTitleProps> {
    }

    // <Modal.Body />
    interface ModalBodyProps extends React.HTMLProps<ModalBody> {
        modalClassName?: string;
    }
    class ModalBody extends React.Component<ModalBodyProps> {
    }

    // <Modal.Footer />
    interface ModalFooterProps extends React.HTMLProps<ModalFooter> {
        modalClassName?: string;
    }
    class ModalFooter extends React.Component<ModalFooterProps> {
    }

    // <Modal />
    interface ModalProps extends React.HTMLProps<Modal> {
        // Required
        onHide: Function;

        // Optional
        animation?: boolean;
        autoFocus?: boolean;
        backdrop?: boolean | string;
        backdropClassName?: string;
        backdropStyle?: any;
        backdropTransitionTimeout?: number;
        bsSize?: Sizes;
        container?: any; // TODO: Add more specific type
        containerClassName?: string;
        dialogClassName?: string;
        dialogComponent?: any; // TODO: Add more specific type
        dialogTransitionTimeout?: number;
        enforceFocus?: boolean;
        keyboard?: boolean;
        onBackdropClick?: (node: HTMLElement) => any;
        onEnter?: (node: HTMLElement) => any;
        onEntered?: (node: HTMLElement) => any;
        onEntering?: (node: HTMLElement) => any;
        onEscapeKeyUp?: (node: HTMLElement) => any;
        onExit?: (node: HTMLElement) => any;
        onExited?: (node: HTMLElement) => any;
        onExiting?: (node: HTMLElement) => any;
        onShow?: (node: HTMLElement) => any;
        show?: boolean;
        transition?: React.ReactElement<any>;
    }
    interface ModalClass extends React.ClassicComponentClass<ModalProps> {
        Body: typeof ModalBody;
        Header: typeof ModalHeader;
        Title: typeof ModalTitle;
        Footer: typeof ModalFooter;
        Dialog: typeof ModalDialog;
    }
    type Modal = React.ClassicComponent<ModalProps>;
    var Modal: ModalClass;

    // <OverlayTrigger />
    interface OverlayTriggerProps {
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
    type OverlayTrigger = React.ClassicComponent<OverlayTriggerProps>;
    var OverlayTrigger: React.ClassicComponentClass<OverlayTriggerProps>;

    // <Tooltip />
    interface TooltipProps extends React.HTMLProps<Tooltip> {
        // Optional
        arrowOffsetLeft?: number | string;
        arrowOffsetTop?: number | string;
        bsSize?: Sizes;
        bsStyle?: string;
        placement?: string;
        positionLeft?: number;
        positionTop?: number;
    }
    type Tooltip = React.ClassicComponent<TooltipProps>;
    var Tooltip: React.ClassicComponentClass<TooltipProps>;

    // <Popover/>
    interface PopoverProps extends React.HTMLProps<Popover> {
        // Optional
        arrowOffsetLeft?: number | string;
        arrowOffsetTop?: number | string;
        bsSize?: Sizes;
        bsStyle?: string;
        placement?: string;
        positionLeft?: number | string; // String support added since v0.30.0
        positionTop?: number | string; // String support added since v0.30.0
    }
    type Popover = React.ClassicComponent<PopoverProps>;
    var Popover: React.ClassicComponentClass<PopoverProps>;

    // <Overlay />
    interface OverlayProps {
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
        target?: Function | React.ReactInstance;
        shouldUpdatePosition?: boolean;
    }
    class Overlay extends React.Component<OverlayProps> {
    }

    // <ProgressBar />
    interface ProgressBarProps extends React.HTMLProps<ProgressBar> {
        // Optional
        active?: boolean;
        bsSize?: Sizes;
        bsStyle?: string;
        interpolatedClass?: any; // TODO: Add more specific type
        max?: number;
        min?: number;
        now?: number;
        srOnly?: boolean;
        striped?: boolean;
    }
    class ProgressBar extends React.Component<ProgressBarProps> {
    }

    // <Nav />
    // TODO: This one turned into a union of two different types
    interface NavProps extends React.HTMLProps<Nav> {
        // Optional
        activeHref?: string;
        activeKey?: any;
        bsSize?: Sizes;
        bsStyle?: string;
        collapsible?: boolean;
        eventKey?: any;
        expanded?: boolean;
        justified?: boolean;
        navbar?: boolean;
        pullRight?: boolean;
        right?: boolean;
        stacked?: boolean;
        ulClassName?: string;
        ulId?: string;
    }
    class Nav extends React.Component<NavProps> {
    }

    // <NavItem />
    interface NavItemProps extends React.HTMLProps<NavItem> {
        active?: boolean;
        brand?: any; // TODO: Add more specific type
        bsSize?: Sizes;
        bsStyle?: string;
        componentClass?: React.ReactType;
        defaultNavExpanded?: boolean;
        eventKey?: any;
        fixedBottom?: boolean;
        fixedTop?: boolean;
        fluid?: boolean;
        inverse?: boolean;
        linkId?: string;
        navExpanded?: boolean;
        onSelect?: SelectCallback;
        onToggle?: Function;
        staticTop?: boolean;
        toggleButton?: any; // TODO: Add more specific type
        toggleNavKey?: string | number;
    }
    type NavItem = React.ClassicComponent<NavItemProps>;
    var NavItem: React.ClassicComponentClass<NavItemProps>;

    // <Navbar.Brand />
    interface NavbarBrandProps extends React.HTMLProps<NavbarBrand> {
    }
    class NavbarBrand extends React.Component<NavbarBrandProps> {
    }

    // <Navbar.Collapse />
    interface NavbarCollapseProps {
    }
    type NavbarCollapse = React.ClassicComponent<NavbarCollapseProps>;
    var NavbarCollapse: React.ClassicComponentClass<NavbarCollapseProps>;

    // <Navbar.Header />
    interface NavbarHeaderProps extends React.HTMLProps<NavbarHeader> {
    }
    type NavbarHeader = React.ClassicComponent<NavbarHeaderProps>;
    var NavbarHeader: React.ClassicComponentClass<NavbarHeaderProps>;

    // <Navbar.Toggle />
    interface NavbarToggleProps {
        onClick?: React.MouseEventHandler<HTMLButtonElement>;
    }
    type NavbarToggle = React.ClassicComponent<NavbarToggleProps>;
    var NavbarToggle: React.ClassicComponentClass<NavbarToggleProps>;

    // <Navbar.Link />
    interface NavbarLinkProps {
        href: string;
        onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    }
    type NavbarLink = React.ClassicComponent<NavbarLinkProps>;
    const NavbarLink: React.ClassicComponentClass<NavbarLinkProps>;

    // <Navbar.Text />
    interface NavbarTextProps {
        pullRight?: boolean;
    }
    type NavbarText = React.ClassicComponent<NavbarTextProps>;
    const NavbarText: React.ClassicComponentClass<NavbarTextProps>;

    // <Navbar.Form />
    interface NavbarFormProps extends React.HTMLProps<NavbarForm> {
        componentClass?: React.ReactType;
        pullRight?: boolean;
    }
    type NavbarForm = React.ClassicComponent<NavbarFormProps>;
    const NavbarForm: React.ClassicComponentClass<NavbarFormProps>;

    // <Navbar />
    interface NavbarProps extends React.HTMLProps<Navbar> {
        brand?: any; // TODO: Add more specific type
        bsSize?: Sizes;
        bsStyle?: string;
        collapseOnSelect?: boolean;
        componentClass?: React.ReactType;
        defaultNavExpanded?: boolean;
        fixedBottom?: boolean;
        fixedTop?: boolean;
        fluid?: boolean;
        inverse?: boolean;
        navExpanded?: boolean;
        onToggle?: Function;
        staticTop?: boolean;
        toggleButton?: any; // TODO: Add more specific type
        toggleNavKey?: string | number;
    }
    interface NavbarClass extends React.ClassicComponentClass<NavbarProps> {
        Brand: typeof NavbarBrand;
        Collapse: typeof NavbarCollapse;
        Header: typeof NavbarHeader;
        Toggle: typeof NavbarToggle;
        Link: typeof NavbarLink;
        Text: typeof NavbarText;
        Form: typeof NavbarForm;
    }
    type Navbar = React.ClassicComponent<NavbarProps>;
    var Navbar: NavbarClass;


    // <NavDropdown />
    interface NavDropdownBaseProps extends DropdownBaseProps {
        active?: boolean;
        noCaret?: boolean;
        eventKey?: any;
    }
    type NavDropdownProps = NavDropdownBaseProps & React.HTMLProps<NavDropdown>;
    class NavDropdown extends React.Component<NavDropdownProps> { }

    // <Tabs />
    interface TabsProps extends React.HTMLProps<Tabs> {
        activeKey?: any;
        animation?: boolean;
        bsStyle?: string;
        defaultActiveKey?: any;
        onSelect?: SelectCallback;
        paneWidth?: any; // TODO: Add more specific type
        position?: string;
        tabWidth?: any; // TODO: Add more specific type
        unmountOnExit?: boolean;
        justified?: boolean;
    }
    type Tabs = React.ClassicComponent<TabsProps>;
    var Tabs: React.ClassicComponentClass<TabsProps>;

    // <Tab />
    interface TabProps extends React.HTMLProps<Tab> {
        animation?: boolean;
        'aria-labelledby'?:string;
        bsClass?:string;
        eventKey?: any; // TODO: Add more specific type
        onEnter?: Function;
        onEntered?: Function;
        onEntering?: Function;
        onExit?: Function;
        onExited?: Function;
        onExiting?: Function;
        unmountOnExit?: boolean;
        tabClassName?:string;
    }
    interface TabClass extends React.ClassicComponentClass<TabProps> {
        Container: TabContainer;
        Pane: TabPane;
        Content: TabClass;
    }
    type Tab = TabClass;
    var Tab: TabClass;

    // <Tab.Container />
    // ----------------------------------------
    interface TabContainerProps extends React.HTMLAttributes<{}> {
        activeKey?: any;
        defaultActiveKey?: any;
        generateChildId?: (eventKey: any, type: any) => string;
    }
    type TabContainer = React.ClassicComponentClass<TabContainerProps>;

    // <Tab.Pane />
    // ----------------------------------------
    interface TabPaneProps extends React.HTMLAttributes<{}> {
        animation?: boolean | React.ComponentClass<any>;
        'aria-labelledby'?: string;
        bsClass?: string;
        eventKey?: any;
        onEnter?: Function;
        onEntered?: Function;
        onEntering?: Function;
        onExit?: Function;
        onExited?: Function;
        onExiting?: Function;
        unmountOnExit?: boolean;
    }
    type TabPane = React.ClassicComponentClass<TabPaneProps>;


    // <Pager />
    interface PagerProps extends React.HTMLProps<Pager> {
        onSelect?: SelectCallback;
    }
    interface PagerClass extends React.ClassicComponentClass<PagerProps> {
        Item: typeof PageItem // Added since v0.30.0
    }
    type Pager = React.ClassicComponent<PagerProps>;
    var Pager: PagerClass;


    // <PageItem />
    interface PageItemProps extends React.HTMLProps<PageItem> {
        disabled?: boolean;
        eventKey?: any;
        next?: boolean;
        onSelect?: SelectCallback;
        previous?: boolean;
        target?: string;
    }
    type PageItem = React.ClassicComponent<PageItemProps>;
    /** @deprecated since v0.30.0, should use <Pager.Item> instead of <PageItem>*/
    var PageItem: React.ClassicComponentClass<PageItemProps>;


    // <Pagination />
    interface PaginationProps extends React.HTMLProps<Pagination> {
        activePage?: number;
        bsSize?: Sizes;
        bsStyle?: string;
        boundaryLinks?: boolean;
        buttonComponentClass?: React.ReactType;
        ellipsis?: React.ReactNode;
        first?: React.ReactNode;
        items?: number;
        last?: React.ReactNode;
        maxButtons?: number;
        next?: React.ReactNode;
        onSelect?: SelectCallback;
        prev?: React.ReactNode;
    }
    type Pagination = React.ClassicComponent<PaginationProps>;
    var Pagination: React.ClassicComponentClass<PaginationProps>;


    // <Alert />
    interface AlertProps extends React.HTMLProps<Alert> {
        bsSize?: Sizes;
        bsStyle?: string;
        closeLabel?: string;
        /** @deprecated since v0.29.0 */ dismissAfter?: number;
        onDismiss?: Function;
    }
    type Alert = React.ClassicComponent<AlertProps>;
    var Alert: React.ClassicComponentClass<AlertProps>;


    // <Carousel />
    interface CarouselProps extends React.HTMLProps<Carousel> {
        activeIndex?: number;
        bsSize?: Sizes;
        bsStyle?: string;
        controls?: boolean;
        defaultActiveIndex?: number;
        direction?: string;
        indicators?: boolean;
        interval?: number;
        nextIcon?: React.ReactNode;
        onSelect?: SelectCallback;
        onSlideEnd?: Function;
        pauseOnHover?: boolean;
        prevIcon?: React.ReactNode;
        slide?: boolean;
        // wrap?: boolean;
    }
    interface CarouselClass extends React.ClassicComponentClass<CarouselProps> {
        Caption: typeof CarouselCaption;
        Item: typeof CarouselItem;
    }
    type Carousel = React.ClassicComponent<CarouselProps>;
    var Carousel: CarouselClass;

    // <CarouselItem />
    interface CarouselItemProps extends React.HTMLProps<CarouselItem> {
        active?: boolean;
        animtateIn?: boolean;
        animateOut?: boolean;
        direction?: string;
        index?: number;
        onAnimateOutEnd?: Function;
    }
    type CarouselItem = React.ClassicComponent<CarouselItemProps>;
    var CarouselItem: React.ClassicComponentClass<CarouselItemProps>;

    // <CarouselCaption />
    interface CarouselCaptionProps extends React.HTMLProps<CarouselCaption> {
        componentClass?: React.ReactType;
    }
    type CarouselCaption = React.ClassicComponent<CarouselCaptionProps>;
    var CarouselCaption: React.ClassicComponentClass<CarouselCaptionProps>;

    // <Grid />
    interface GridProps extends React.HTMLProps<Grid> {
        componentClass?: React.ReactType;
        fluid?: boolean;
        bsClass?: string;
    }
    type Grid = React.ClassicComponent<GridProps>;
    var Grid: React.ClassicComponentClass<GridProps>;

    // <Row />
    interface RowProps extends React.HTMLProps<Row> {
        componentClass?: React.ReactType;
    }
    type Row = React.ClassicComponent<RowProps>;
    var Row: React.ClassicComponentClass<RowProps>;

    // <Col />
    interface ColProps extends React.HTMLProps<Col> {
        componentClass?: React.ReactType;
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
    type Col = React.ClassicComponent<ColProps>;
    var Col: React.ClassicComponentClass<ColProps>;

    // <Thumbnail />
    interface ThumbnailProps extends React.HTMLProps<Thumbnail> {
        bsSize?: Sizes;
        bsStyle?: string;
    }
    type Thumbnail = React.ClassicComponent<ThumbnailProps>;
    var Thumbnail: React.ClassicComponentClass<ThumbnailProps>;

    // <ListGroup />
    interface ListGroupProps extends React.HTMLProps<ListGroup> {
        componentClass?: React.ReactType; // Added since v0.30.0
        fill?: boolean; // TODO: Add more specific type
    }
    class ListGroup extends React.Component<ListGroupProps> {
    }

    // <ListGroupItem />
    interface ListGroupItemProps extends React.HTMLProps<ListGroupItem> {
        active?: any;
        bsSize?: Sizes;
        bsStyle?: string;
        eventKey?: any;
        header?: any; // TODO: Add more specific type
        key?: any; // TODO: Add more specific type
        listItem?: boolean;
    }
    class ListGroupItem extends React.Component<ListGroupItemProps> {
    }

    // <Label />
    interface LabelProps extends React.HTMLProps<Label> {
        bsSize?: Sizes;
        bsStyle?: string;
    }
    class Label extends React.Component<LabelProps> {
    }

    // <Badge />
    interface BadgeProps extends React.HTMLProps<Badge> {
        bsClass?: string;
        pullRight?: boolean;
    }
    type Badge = React.ClassicComponent<BadgeProps>;
    var Badge: React.ClassicComponentClass<BadgeProps>;

    // <Jumbotron />
    interface JumbotronProps extends React.HTMLProps<Jumbotron> {
        componentClass?: React.ReactType;
    }
    type Jumbotron = React.ClassicComponent<JumbotronProps>;
    var Jumbotron: React.ClassicComponentClass<JumbotronProps>;

    // <Image />
    interface ImageProps extends React.HTMLProps<Image> {
        circle?: boolean;
        responsive?: boolean;
        rounded?: boolean;
        thumbnail?: boolean;
    }
    type Image = React.ClassicComponent<ImageProps>;
    var Image: React.ClassicComponentClass<ImageProps>;

    // <ResponsiveEmbed />
    interface ResponsiveEmbedProps extends React.HTMLProps<ResponsiveEmbed> {
        a16by9?: boolean;
        a4by3?: boolean;
        bsClass?: string;
    }
    class ResponsiveEmbed extends React.Component<ResponsiveEmbedProps> {
    }

    // <PageHeader />
    interface PageHeaderProps extends React.HTMLProps<PageHeader> {
    }
    class PageHeader extends React.Component<PageHeaderProps> {
    }

    // <Well />
    interface WellProps extends React.HTMLProps<Well> {
        bsSize?: Sizes;
        bsStyle?: string;
    }
    class Well extends React.Component<WellProps> {
    }

    // <Glyphicon />
    interface GlyphiconProps extends React.HTMLProps<Glyphicon> {
        // Required
        glyph: string;
    }
    type Glyphicon = React.ClassicComponent<GlyphiconProps>;
    var Glyphicon: React.ClassicComponentClass<GlyphiconProps>;

    // <Table />
    interface TableProps extends React.HTMLProps<Table> {
        bordered?: boolean;
        condensed?: boolean;
        hover?: boolean;
        responsive?: boolean;
        striped?: boolean;
        fill?: boolean;
        bsClass?: string;
    }
    type Table = React.ClassicComponent<TableProps>;
    var Table: React.ClassicComponentClass<TableProps>;

    // <InputGroup />
    interface InputGroupProps extends React.HTMLProps<InputGroup> {
        bsClass?: string;
        bsSize?: Sizes;
    }
    interface InputGroupClass extends React.ClassicComponentClass<InputGroupProps> {
        Addon: typeof InputGroupAddon;
        Button: typeof InputGroupButton;
    }
    type InputGroup = React.Component<InputGroupProps>;
    var InputGroup: InputGroupClass;


    // <InputGroup.Addon />
    interface InputGroupAddonProps extends React.HTMLProps<InputGroupAddon> { }
    type InputGroupAddon = React.ClassicComponent<InputGroupAddonProps>;
    var InputGroupAddon: React.ClassicComponentClass<InputGroupAddonProps>;


    // <InputGroup.Button />
    interface InputGroupButtonProps extends React.HTMLProps<InputGroupButton> { }
    type InputGroupButton = React.ClassicComponent<InputGroupButtonProps>;
    var InputGroupButton: React.ClassicComponentClass<InputGroupButtonProps>;


    // <Form />
    interface FormProps extends React.HTMLProps<Form> {
        bsClass?: string;
        componentClass?: React.ReactType;
        horizontal?: boolean;
        inline?: boolean;
    }
    class Form extends React.Component<FormProps> { }

    // <FormGroup />
    interface FormGroupProps extends React.HTMLProps<FormGroup> {
        bsClass?: string;
        bsSize?: Sizes;
        controlId?: string;
        validationState?: "success" | "warning" | "error";
    }
    class FormGroup extends React.Component<FormGroupProps> { }

    // <ControlLabel />
    interface ControlLabelProps extends React.HTMLProps<ControlLabel> {
        bsClass?: string;
        htmlFor?: string;
        srOnly?: boolean;
    }
    class ControlLabel extends React.Component<ControlLabelProps> { }

    // <FormControl />
    interface FormControlProps extends React.HTMLProps<FormControl> {
        bsClass?: string;
        bsSize?: Sizes;
        componentClass?: React.ReactType;
        id?: string;
        inputRef?: (instance: HTMLInputElement) => void;
        type?: string;
    }
    interface FormControlClass extends React.ClassicComponentClass<FormControlProps> {
        Feedback: typeof FormControlFeedback;
        Static: typeof FormControlStatic;
    }
    type FormControl = React.Component<FormControlProps>;
    var FormControl: FormControlClass;

    // <FormControl.Feedback />
    interface FormControlFeedbackProps extends React.HTMLProps<FormControlFeedback> {
    }
    class FormControlFeedback extends React.Component<FormControlFeedbackProps> {
    }

    // <FormControl.Static />
    interface FormControlStaticProps extends React.HTMLProps<FormControlStatic> {
        bsClass?: string;
        componentClass?: React.ReactType;
    }
    class FormControlStatic extends React.Component<FormControlStaticProps> { }


    // <HelpBlock />
    interface HelpBlockProps extends React.HTMLProps<HelpBlock> {
        bsClass?: string;
    }
    class HelpBlock extends React.Component<HelpBlockProps> { }


    // <Radio />
    interface RadioProps extends React.HTMLProps<Radio> {
        bsClass?: string;
        disabled?: boolean;
        inline?: boolean;
        inputRef?: (instance: HTMLInputElement) => void;
        validationState?: "success" | "warning" | "error";
    }
    class Radio extends React.Component<RadioProps> { }


    // <Portal />
    interface PortalProps extends React.Props<Portal> {
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
    type Portal = React.ClassicComponent<PortalProps>;
    var Portal: React.ClassicComponentClass<PortalProps>;

    // <Position />
    interface PositionProps extends TransitionCallbacks, React.Props<Position> {
        dimension?: string | Function;
        getDimensionValue?: Function;
        in?: boolean;
        role?: string;
        timeout?: number;
        transitionAppear?: boolean;
        unmountOnExit?: boolean;
    }
    class Position extends React.Component<PositionProps> {
    }
    // <Media.Left />
    interface MediaLeftProps {
        align?: string;
    }
    type MediaLeft = React.ClassicComponent<MediaLeftProps>;
    var MediaLeft: React.ClassicComponentClass<MediaLeftProps>;

    // <Media.Right />
    interface MediaRightProps {
        align?: string;
    }
    type MediaRight = React.ClassicComponent<MediaRightProps>;
    var MediaRight: React.ClassicComponentClass<MediaRightProps>;

    // <Media.Heading />
    interface MediaHeadingProps {
        componentClass?: React.ReactType;
    }
    type MediaHeading = React.ClassicComponent<MediaHeadingProps>;
    var MediaHeading: React.ClassicComponentClass<MediaHeadingProps>;

    // <Media.Body />
    interface MediaBodyProps {
        componentClass?: React.ReactType;
    }
    type MediaBody = React.ClassicComponent<MediaBodyProps>;
    var MediaBody: React.ClassicComponentClass<MediaBodyProps>;

    // <Media.List />
    interface MediaListProps {
    }
    type MediaList = React.ClassicComponent<MediaListProps>;
    var MediaList: React.ClassicComponentClass<MediaListProps>;

    // <Media.ListItem />
    interface MediaListItemProps {
        componentClass?: React.ReactType;
    }
    type MediaListItem = React.ClassicComponent<MediaListItemProps>;
    var MediaListItem: React.ClassicComponentClass<MediaListItemProps>;

    // <Media />
    interface MediaProps extends React.HTMLProps<Media> {
        componentClass?: React.ReactType;
    }
    interface MediaClass extends React.ClassicComponentClass<MediaProps> {
        Left: typeof MediaLeft;
        Right: typeof MediaRight;
        Heading: typeof MediaHeading;
        Body: typeof MediaBody;
        List: typeof MediaList;
        ListItem: typeof MediaListItem;
    }
    type Media = React.ClassicComponent<MediaProps>;
    var Media: MediaClass;

    /* Utils */
    interface bootstrapUtilsType{
        // TODO: Implement functions
    }
    function createChainedFunctionType(...funcs:Function[]):Function
    interface ValidComponentChildrenType{
        map: (children:any,func:any,context:any) => any
        forEach:(children:any,func:any,context:any) => any
        count:(children:any) => number
        filter:(children:any,func:any,context:any) => any
        find:(children:any,func:any,context:any) => any
        every:(children:any,func:any,context:any) => any
        some:(children:any,func:any,context:any) => any
        toArray:(children:any) => any
    }
    class utils {
        static bootstrapUtils:bootstrapUtilsType
        static createChainedFunction: typeof createChainedFunctionType
        static ValidComponentChildren:ValidComponentChildrenType
    }
}
