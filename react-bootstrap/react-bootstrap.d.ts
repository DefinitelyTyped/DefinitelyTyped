// Type definitions for react-bootstrap 
// Project: https://github.com/react-bootstrap/react-bootstrap
// Definitions by: Walker Burgin <https://github.com/walkerburgin>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../react/react.d.ts"/>
    
declare module "react-bootstrap" {
    // Import React 
    import React = require("react");


    // <Button />
    // ----------------------------------------
    interface ButtonProps extends React.Props<ButtonClass>{

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
    interface Button extends  React.ReactElement<ButtonProps> { }
    interface ButtonClass extends  React.ComponentClass<ButtonProps> { }
    var Button: ButtonClass;


    // <ButtonToolbar />
    // ----------------------------------------
    interface ButtonToolbarProps extends React.Props<ButtonToolbarClass> {

        // Optional
        block?: boolean;
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        justified?: boolean;
        vertical?: boolean;
    }
    interface ButtonToolbar extends React.ReactElement<ButtonToolbarProps> { }
    interface ButtonToolbarClass extends  React.ComponentClass<ButtonToolbarProps> { }
    var ButtonToolbar: ButtonToolbarClass;

    // <ButtonGroup />
    // ----------------------------------------
    interface ButtonGroupProps extends React.Props<ButtonGroupClass> {
        // Optional
        block?: boolean;
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        justified?: boolean;
        vertical?: boolean;
    }
    interface ButtonGroup extends React.ReactElement<ButtonGroupProps> { }
    interface ButtonGroupClass extends  React.ComponentClass<ButtonGroupProps> { }
    var ButtonGroup: ButtonGroupClass;
    

    // <DropdownButton />
    // ----------------------------------------
    interface DropdownButtonProps extends React.Props<DropdownButtonClass> {
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
    interface DropdownButton extends React.ReactElement<DropdownButtonProps> { }
    interface DropdownButtonClass extends React.ComponentClass<DropdownButtonProps> { }
    var DropdownButton: DropdownButtonClass;


    // <SplitButton />
    // ----------------------------------------
    interface SplitButtonProps extends React.Props<SplitButtonClass>{ 
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
    interface SplitButton extends React.ReactElement<SplitButtonProps> { }
    interface SplitButtonClass extends React.ComponentClass<SplitButtonProps> { }
    var SplitButton: SplitButtonClass;


    // <MenuItem />
    // ----------------------------------------
    interface MenuItemProps extends React.Props<MenuItemClass> {
        active?: boolean;
        className?: string;
        disabled?: boolean;
        divider?: boolean;
        eventKey?: any;
        header?: boolean;
        href?: string;
        onSelect?: Function;
        target?: string;
        title?: string;
    }
    interface MenuItem extends React.ReactElement<MenuItemProps> { }
    interface MenuItemClass extends React.ComponentClass<MenuItemProps> { }
    var MenuItem: MenuItemClass;


    // <Panel />
    // ----------------------------------------
    interface PanelProps extends React.Props<PanelClass> {
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
    interface Panel extends React.ReactElement<PanelProps> { }
    interface PanelClass extends React.ComponentClass<PanelProps> { }
    var Panel: PanelClass;


    // <Accordion />
    // ----------------------------------------
    interface AccordionProps extends React.Props<AccordionClass> {
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
    interface Accordion extends React.ReactElement<AccordionProps> { }
    interface AccordionClass extends  React.ComponentClass<AccordionProps> { }
    var Accordion: AccordionClass;


    // <PanelGroup />
    // ----------------------------------------
    interface PanelGroupProps extends React.Props<PanelGroupClass> { 
        accordion?: boolean;
        activeKey?: any;
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        defaultActiveKey?: any;
        onSelect?: Function;
    }
    interface PanelGroup extends React.ReactElement<PanelGroupProps> { }
    interface PanelGroupClass extends  React.ComponentClass<PanelGroupProps> { }
    var PanelGroup: PanelGroupClass;


    // <Modal.Dialog />
    // ----------------------------------------
    interface ModalDialogProps extends React.Props<ModalDialogClass> {
        // TODO: Add more specific type 
    }
    interface ModalDialog extends React.ReactElement<ModalDialogProps> { }
    interface ModalDialogClass extends React.ComponentClass<ModalHeaderProps> { }


    // <Modal.Header />
    // ----------------------------------------
  interface ModalHeaderProps extends React.Props<ModalHeaderClass> {
        className?: string;
        closeButton?: boolean;
        modalClassName?: string;
        onHide?: Function;
        // undefined?: string;
    }
    interface ModalHeader extends React.ReactElement<ModalHeaderProps> { }
    interface ModalHeaderClass extends React.ComponentClass<ModalHeaderProps> { }


    // <Modal.Title/>
    // ----------------------------------------
    interface ModalTitleProps extends React.Props<ModalTitleClass> {
        className?: string;
        modalClassName?: string;
    }
    interface ModalTitle extends React.ReactElement<ModalTitleProps> { }
    interface ModalTitleClass extends React.ComponentClass<ModalTitleProps> { }


    // <Modal.Body />
    // ----------------------------------------
    interface ModalBodyProps extends React.Props<ModalBodyClass> {
        className?: string;
        modalClassName?: string;
    }
    interface ModalBody extends React.ReactElement<ModalBodyProps> { }
    interface ModalBodyClass extends React.ComponentClass<ModalBodyProps> { }


    // <Modal.Footer />
    // ----------------------------------------
    interface ModalFooterProps extends React.Props<ModalFooterClass> {
        className?: string;
        modalClassName?: string;
    }
    interface ModalFooter extends React.ReactElement<ModalFooterProps> { }
    interface ModalFooterClass extends React.ComponentClass<ModalFooterProps> { }


    // <Modal />
    // ----------------------------------------
    interface ModalProps extends React.Props<ModalClass> {
        // Required
        onHide: Function;

        // Optional
        animation?: boolean;
        autoFocus?: boolean;
        backdrop?: boolean|string;
        bsSize?: string;
        container?: any; // TODO: Add more specific type
        dialogClassName?: string;
        dialogComponent?: any; // TODO: Add more specific type
        enforceFocus?: boolean;
        keyboard?: boolean;
        show?: boolean;
    }
    interface Modal extends React.ReactElement<ModalProps> { }
    interface ModalClass extends React.ComponentClass<ModalProps> {
        Header: ModalHeaderClass;
        Title: ModalTitleClass;
        Body: ModalBodyClass;
        Footer: ModalFooterClass;
        Dialog: ModalDialogClass;
    }
    var Modal: ModalClass;


    // <OverlayTrigger />
    // ----------------------------------------
    interface OverlayTriggerProps extends React.Props<OverlayTriggerClass> {
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
        trigger?: string;
    }
    interface OverlayTrigger extends React.ReactElement<OverlayTriggerProps> { }
    interface OverlayTriggerClass extends  React.ComponentClass<OverlayTriggerProps> { }
    var OverlayTrigger: OverlayTriggerClass;


    // <Tooltip />
    // ----------------------------------------
    interface TooltipProps extends React.Props<TooltipClass> {
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
    interface Tooltip extends React.ReactElement<TooltipProps> { }
    interface TooltipClass extends React.ComponentClass<TooltipProps> { }
    var Tooltip: TooltipClass;


    // <Popover/>
    // ----------------------------------------
    interface PopoverProps  extends React.Props<PopoverClass> {
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
        title: any; // TODO: Add more specific type
    }
    interface Popover extends React.ReactElement<PopoverProps> { }
    interface PopoverClass extends React.ComponentClass<PopoverProps> { }
    var Popover: PopoverClass;


    // <Overlay />
    // ----------------------------------------
    interface OverlayProps extends React.Props<OverlayClass> {
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
    interface Overlay extends React.ReactElement<OverlayProps> { }
    interface OverlayClass extends  React.ComponentClass<OverlayProps> { }
    var Overlay: OverlayClass;


    // <ProgressBar />
    // ----------------------------------------
    interface ProgressBarProps extends React.Props<ProgressBarClass> {
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
    interface ProgressBar extends React.ReactElement<ProgressBarProps> { }
    interface ProgressBarClass extends  React.ComponentClass<ProgressBarProps> { }
    var ProgressBar: ProgressBarClass;


    // <Nav />
    // ----------------------------------------
    // TODO: This one turned into a union of two different types 
    interface NavProps extends React.Props<NavClass> {
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
    interface Nav extends React.ReactElement<NavProps> { }
    interface NavClass extends  React.ComponentClass<NavProps> { }
    var Nav: NavClass;


    // <NavItem />
    // ----------------------------------------
    interface NavItemProps extends React.Props<NavItemClass> {
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
    interface NavItem extends React.ReactElement<NavItemProps> { }
    interface NavItemClass extends React.ComponentClass<NavItemProps> { }
    var NavItem: NavItemClass;


    // <Navbar />
    // ----------------------------------------
    interface NavbarProps extends React.Props<NavbarClass> {
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
    interface Navbar extends React.ReactElement<NavbarProps> { }
    interface NavbarClass extends  React.ComponentClass<NavbarProps> { }
    var Navbar: NavbarClass;
    
    // <NavBrand />
    // ----------------------------------------
    interface NavBrandProps {

    }
    interface NavBrand extends React.ReactElement<NavbarProps> { }
    interface NavBrandClass extends  React.ComponentClass<NavbarProps> { }
    var NavBrand: NavBrandClass;


    // <NavDropdown />
    // ----------------------------------------
    interface NavDropdownProps extends React.Props<NavDropdownClass> {
        className?: string;
        eventKey?: any;
        title?: string;
        id?: string;
    }
    interface NavDropdown extends React.ReactElement<NavDropdownProps> { }
    interface NavDropdownClass extends  React.ComponentClass<NavDropdownProps> { }
    var NavDropdown: NavDropdownClass;


    // <Tabs />
    // ----------------------------------------
    interface TabsProps extends React.Props<TabsClass> {
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
    interface Tabs extends React.ReactElement<TabsProps> { }
    interface TabsClass extends React.ComponentClass<TabsProps> { }
    var Tabs: TabsClass;


    // <Tab />
    // ----------------------------------------
    interface TabProps extends React.Props<TabClass> {
        animation?: boolean;
        className?: string;
        disabled?: boolean;
        eventKey?: any; // TODO: Add more specific type
        title?: any; // TODO: Add more specific type
    }
    interface Tab extends React.ReactElement<TabProps> { }
    interface TabClass extends React.ComponentClass<TabProps> { }
    var Tab: TabClass;


    // <Pager />
    // ----------------------------------------
    interface PagerProps extends React.Props<PagerClass> {
        className?: string;
        onSelect?: Function;
    }
    interface Pager extends React.ReactElement<PagerProps> { }
    interface PagerClass extends  React.ComponentClass<PagerProps> { }
    var Pager: PagerClass;


    // <PageItem />
    // ----------------------------------------
    interface PageItemProps extends React.Props<PageItemClass> {
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
    interface PageItem extends React.ReactElement<PageItemProps> { }
    interface PageItemClass extends React.ComponentClass<PageItemProps> { }
    var PageItem: PageItemClass;


    // <Pagination />
    // ----------------------------------------
    interface PaginationProps extends React.Props<PaginationClass> {
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
    interface Pagination extends React.ReactElement<PaginationProps> { }
    interface PaginationClass extends React.ComponentClass<PaginationProps> { }
    var Pagination: PaginationClass;


    // <Alert />
    // ----------------------------------------
    interface AlertProps extends React.Props<AlertClass> {
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        closeLabel?: string;
        dismissAfter?: number;
        onDismiss?: Function;
    }
    interface Alert extends React.ReactElement<AlertProps> { }
    interface AlertClass extends React.ComponentClass<AlertProps> { }
    var Alert: AlertClass;


    // <Carousel />
    // ----------------------------------------
    interface CarouselProps extends React.Props<CarouselClass> {
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
    interface Carousel extends React.ReactElement<CarouselProps> { }
    interface CarouselClass extends React.ComponentClass<CarouselProps> { }
    var Carousel: CarouselClass;


    // <CarouselItem />
    // ----------------------------------------
    interface CarouselItemProps extends React.Props<CarouselItemClass> {
        active?: boolean;
        animtateIn?: boolean;
        animateOut?: boolean;
        caption?: any; // TODO: Add more specific type
        className?: string;
        direction?: string;
        index?: number;
        onAnimateOutEnd?: Function;
    }
    interface CarouselItem extends React.ReactElement<CarouselItemProps> { }
    interface CarouselItemClass extends React.ComponentClass<CarouselItemProps> { }
    var CarouselItem: CarouselItemClass;


    // <Grid />
    // ----------------------------------------
    interface GridProps extends React.Props<GridClass> {
        className?: string;
        componentClass?: any; // TODO: Add more specific type
        fluid?: boolean; 
    }
    interface Grid extends React.ReactElement<GridProps> { }
    interface GridClass extends React.ComponentClass<GridProps> { }
    var Grid: GridClass;


    // <Row />
    // ----------------------------------------
    interface RowProps extends React.Props<RowClass> {
        className?: string;
        componentClass?: any; // TODO: Add more specific type
    }
    interface Row extends React.ReactElement<RowProps> { }
    interface RowClass extends React.ComponentClass<RowProps> { }
    var Row: RowClass;


    // <Col />
    // ----------------------------------------
    interface ColProps extends React.Props<ColClass> {
        className?: string;
        componentClass?: any; // TODO: Add more specific type
        lg?: number;
        lgOffset?: number;
        lgPull?: number;
        lgPush?: number;
        md?: number;
        mdOffset?: number;
        mdPull?: number;
        mdPush?: number;
        sm?: number;
        smOffset?: number;
        smPull?: number;
        smPush?: number;
        xs?: number;
        xsOffset?: number;
        xsPull?: number;
        xsPush?: number;
    }
    interface Col extends React.ReactElement<ColProps> { } 
    interface ColClass extends React.ComponentClass<ColProps> { }
    var Col: ColClass;


    // <Thumbnail />
    // ----------------------------------------
    interface ThumbnailProps extends React.Props<ThumbnailClass> {
        alt?: string;
        bsSize?: string;
        bsStyle?: string;
        className?: string;
        href?: string;
        src?: string;
    }
    interface Thumbnail extends React.ReactElement<ThumbnailProps> { }
    interface ThumbnailClass extends React.ComponentClass<ThumbnailProps> { }
    var Thumbnail: ThumbnailClass;    


    // <ListGroup />
    // ----------------------------------------
    interface ListGroupProps extends React.Props<ListGroupClass> {
        className?: string;
        id?: string | number;
        fill?: boolean; // TODO: Add more specific type
    }
    interface ListGroup extends React.ReactElement<ListGroupProps> { }
    interface ListGroupClass extends React.ComponentClass<ListGroupProps> { }
    var ListGroup: ListGroupClass;


    // <ListGroupItem />
    // ----------------------------------------
    interface ListGroupItemProps extends React.Props<ListGroupItemClass> {
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
    interface ListGroupItem extends React.ReactElement<ListGroupItemProps> { }
    interface ListGroupItemClass extends React.ComponentClass<ListGroupItemProps> { }
    var ListGroupItem: ListGroupItemClass;


    // <Label />
    // ----------------------------------------
    interface LabelProps extends React.Props<LabelClass> {
        bsSize?: string;
        bsStyle?: string;
        className?: string;
    }
    interface Label extends React.ReactElement<LabelProps> { }
    interface LabelClass extends React.ComponentClass<LabelProps> { }
    var Label: LabelClass;


    // <Badge />
    // ----------------------------------------
    interface BadgeProps extends React.Props<BadgeClass> {
        className?: string;
        pullRight?: boolean;
    }
    interface Badge extends React.ReactElement<BadgeProps> { }
    interface BadgeClass extends React.ComponentClass<BadgeProps> { }
    var Badge: BadgeClass;


    // <Jumbotron />
    // ----------------------------------------
    interface JumbotronProps extends React.Props<JumbotronClass> {
        className?: string;
        componentClass?: any; // TODO: Add more specific type
    }
    interface Jumbotron extends React.ReactElement<JumbotronProps> { }
    interface JumbotronClass extends React.ComponentClass<JumbotronProps> { }
    var Jumbotron: JumbotronClass;


    // <PageHeader />
    // ----------------------------------------
    interface PageHeaderProps extends React.Props<PageHeaderClass> {
        className?: string;
    }
    interface PageHeader extends React.ReactElement<PageHeaderProps> { }
    interface PageHeaderClass extends React.ComponentClass<PageHeaderProps> { }
    var PageHeader: PageHeaderClass;


    // <Well />
    // ----------------------------------------
    interface WellProps extends React.Props<WellClass> {
        bsSize?: string;
        bsStyle?: string;
        className?: string;
    }
    interface Well extends React.ReactElement<WellProps> { }
    interface WellClass extends React.ComponentClass<WellProps> { }
    var Well: WellClass;


    // <Glyphicon />
    // ----------------------------------------
    interface GlyphiconProps extends React.Props<GlyphiconClass> {
        className?: string;
        // Required 
        glyph: string;
    }
    interface Glyphicon extends React.ReactElement<GlyphiconProps> { }
    interface GlyphiconClass extends React.ComponentClass<GlyphiconProps> { }
    var Glyphicon: GlyphiconClass;


    // <Table />
    // ----------------------------------------
    interface TableProps extends React.Props<TableClass> {
        bordered?: boolean;
        className?: string;
        condensed?: boolean;
        hover?: boolean;
        responsive?: boolean;
        striped?: boolean;
    }
    interface Table extends React.ReactElement<TableProps> { }
    interface TableClass extends React.ComponentClass<TableProps> { }
    var Table: TableClass;


    // <Input />
    // ----------------------------------------
    interface InputProps extends React.Props<InputClass> {
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
    interface Input extends React.ReactElement<InputProps> { }
    interface InputClass extends React.ComponentClass<InputProps> { }
    var Input: InputClass;


    // <ButtonInput />
    // ----------------------------------------
    interface ButtonInputProps extends React.Props<ButtonInputClass> {
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
    interface ButtonInput extends React.ReactElement<ButtonInputProps> { }
    interface ButtonInputClass extends React.ComponentClass<ButtonInputProps> { }
    var ButtonInput: ButtonInputClass;


    // TODO: FormControls.Static
  
  
    // <Portal />
    // ----------------------------------------
    interface PortalProps extends React.Props<PortalClass> {
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
    interface Portal extends React.ReactElement<PortalProps> { }
    interface PortalClass extends React.ComponentClass<PortalProps> { }
    var Portal: PortalClass;

   
    // <Position />
    // ----------------------------------------
    interface PositionProps extends React.Props<PositionClass> {
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
    interface Position extends React.ReactElement<PositionProps> { }
    interface PositionClass extends  React.ComponentClass<PositionProps> { }
    var Position: PositionClass;


    // <Fade />
    // ----------------------------------------
    interface FadeProps extends React.Props<FadeClass> {
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
    interface Fade extends React.ReactElement<FadeProps> { }
    interface FadeClass extends React.ComponentClass<FadeProps> { }
    var Fade: FadeClass;
}
