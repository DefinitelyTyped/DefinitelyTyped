// Type definitions for react-bootstrap
// Project: https://github.com/react-bootstrap/react-bootstrap
// Definitions by: Walker Burgin <https://github.com/walkerburgin>, Vincent Siao <https://github.com/vsiao>, Danilo Barros <https://github.com/danilojrr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react/react.d.ts"/>

declare module "react-bootstrap" {
    // Import React
    import React = require("react");


    // <Button />
    // ----------------------------------------
    interface ButtonProps extends React.HTMLProps<Button> {

        // Optional
        active?: boolean;
        block?: boolean;
        bsStyle?: string;
        bsSize?: string;
        navItem?: boolean;
        navDropdown?: boolean;
        componentClass?: React.ReactType;
    }
    type Button = React.ClassicComponent<ButtonProps, {}>;
    var Button: React.ClassicComponentClass<ButtonProps>;

    // <ButtonToolbar />
    // ----------------------------------------
    interface ButtonToolbarProps extends React.HTMLProps<ButtonToolbar> {

        // Optional
        block?: boolean;
        bsSize?: string;
        bsStyle?: string;
        justified?: boolean;
        vertical?: boolean;
    }
    type ButtonToolbar = React.ClassicComponent<ButtonToolbarProps, {}>;
    var ButtonToolbar: React.ClassicComponentClass<ButtonToolbarProps>;

    // <ButtonGroup />
    // ----------------------------------------
    interface ButtonGroupProps extends React.HTMLProps<ButtonGroup> {
        // Optional
        block?: boolean;
        bsSize?: string;
        bsStyle?: string;
        justified?: boolean;
        vertical?: boolean;
    }
    type ButtonGroup = React.ClassicComponent<ButtonGroupProps, {}>;
    var ButtonGroup: React.ClassicComponentClass<ButtonGroupProps>;

    // <DropdownButton />
    // ----------------------------------------
    interface DropdownButtonProps extends React.HTMLProps<DropdownButton> {
        bsStyle?: string;
        bsSize?: string;
        buttonClassName?: string;
        dropup?: boolean;
        navItem?: boolean;
        noCaret?: boolean;
        pullRight?: boolean;
    }
    class DropdownButton extends React.Component<DropdownButtonProps, {}> {
    }

    // <SplitButton />
    // ----------------------------------------
    interface SplitButtonProps extends React.HTMLProps<SplitButton> {
        bsStyle?: string;
        bsSize?: string;
        dropdownTitle?: any; // TODO: Add more specific type
        dropup?: boolean;
        pullRight?: boolean;
    }
    class SplitButton extends React.Component<SplitButtonProps, {}> {
    }

    // <MenuItem />
    // ----------------------------------------
    interface MenuItemProps extends React.HTMLProps<MenuItem> {
        active?: boolean;
        divider?: boolean;
        eventKey?: any;
        header?: boolean;
    }
    class MenuItem extends React.Component<MenuItemProps, {}> {
    }

    // <Panel />
    // ----------------------------------------
    interface PanelProps extends React.HTMLProps<Panel> {
        bsSize?: string;
        bsStyle?: string;
        collapsible?: boolean;
        defaultExpanded?: boolean;
        eventKey?: any;
        expanded?: boolean;
        footer?: any; // TODO: Add more specific type
        header?: any; // TODO: Add more specific type
    }
    type Panel = React.ClassicComponent<PanelProps, {}>;
    var Panel: React.ClassicComponentClass<PanelProps>;

    // <Accordion />
    // ----------------------------------------
    interface AccordionProps extends React.HTMLProps<Accordion> {
        bsSize?: string;
        bsStyle?: string;
        collapsible?: boolean;
        defaultExpanded?: boolean;
        eventKey?: any;
        expanded?: boolean;
        footer?: any; // TODO: Add more specific type
        header?: any; // TODO: Add more specific type
    }
    type Accordion = React.ClassicComponent<AccordionProps, {}>;
    var Accordion: React.ClassicComponentClass<AccordionProps>;

    // <PanelGroup />
    // ----------------------------------------
    interface PanelGroupProps extends React.HTMLProps<PanelGroup> {
        accordion?: boolean;
        activeKey?: any;
        bsSize?: string;
        bsStyle?: string;
        defaultActiveKey?: any;
    }
    type PanelGroup = React.ClassicComponent<PanelGroupProps, {}>;
    var PanelGroup: React.ClassicComponentClass<PanelGroupProps>;

    // <Modal.Dialog />
    // ----------------------------------------
    interface ModalDialogProps extends React.HTMLProps<ModalDialog> {
        // TODO: Add more specific type
    }
    type ModalDialog = React.ClassicComponent<ModalDialogProps, {}>;
    var ModalDialog: React.ClassicComponentClass<ModalDialogProps>;

    // <Modal.Header />
    // ----------------------------------------
  interface ModalHeaderProps extends React.HTMLProps<ModalHeader> {
        closeButton?: boolean;
        modalClassName?: string;
        onHide?: Function;
        // undefined?: string;
    }
    class ModalHeader extends React.Component<ModalHeaderProps, {}> {
    }

    // <Modal.Title/>
    // ----------------------------------------
    interface ModalTitleProps extends React.HTMLProps<ModalTitle> {
        modalClassName?: string;
    }
    class ModalTitle extends React.Component<ModalTitleProps, {}> {
    }

    // <Modal.Body />
    // ----------------------------------------
    interface ModalBodyProps extends React.HTMLProps<ModalBody> {
        modalClassName?: string;
    }
    class ModalBody extends React.Component<ModalBodyProps, {}> {
    }

    // <Modal.Footer />
    // ----------------------------------------
    interface ModalFooterProps extends React.HTMLProps<ModalFooter> {
        modalClassName?: string;
    }
    class ModalFooter extends React.Component<ModalFooterProps, {}> {
    }

    // <Modal />
    // ----------------------------------------
    interface ModalProps extends React.HTMLProps<Modal> {
        // Required
        onHide: Function;

        // Optional
        animation?: boolean;
        backdrop?: boolean|string;
        bsSize?: string;
        container?: any; // TODO: Add more specific type
        dialogClassName?: string;
        dialogComponent?: any; // TODO: Add more specific type
        enforceFocus?: boolean;
        keyboard?: boolean;
        onEnter?: (node: HTMLElement) => any;
        onEntered?: (node: HTMLElement) => any;
        onEntering?: (node: HTMLElement) => any;
        onExit?: (node: HTMLElement) => any;
        onExited?: (node: HTMLElement) => any;
        onExiting?: (node: HTMLElement) => any;
        show?: boolean;
    }
    interface ModalClass extends React.ClassicComponentClass<ModalProps> {
        Body: typeof ModalBody;
        Header: typeof ModalHeader;
        Title: typeof ModalTitle;
        Footer: typeof ModalFooter;
        Dialog: typeof ModalDialog;
    }
    type Modal = React.ClassicComponent<ModalProps, {}>;
    var Modal: ModalClass;


    // <OverlayTrigger />
    // ----------------------------------------
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
    type OverlayTrigger = React.ClassicComponent<OverlayTriggerProps, {}>;
    var OverlayTrigger: React.ClassicComponentClass<OverlayTriggerProps>;

    // <Tooltip />
    // ----------------------------------------
    interface TooltipProps extends React.HTMLProps<Tooltip> {
        // Optional
        arrowOffsetLeft?: number | string;
        arrowOffsetTop?: number | string;
        bsSize?: string;
        bsStyle?: string;
        placement?: string;
        positionLeft?: number;
        positionTop?: number;
    }
    type Tooltip = React.ClassicComponent<TooltipProps, {}>;
    var Tooltip: React.ClassicComponentClass<TooltipProps>;

    // <Popover/>
    // ----------------------------------------
    interface PopoverProps  extends React.HTMLProps<Popover> {
        // Optional
        arrowOffsetLeft?: number | string;
        arrowOffsetTop?: number | string;
        bsSize?: string;
        bsStyle?: string;
        placement?: string;
        positionLeft?: number;
        positionTop?: number;
    }
    type Popover = React.ClassicComponent<PopoverProps, {}>;
    var Popover: React.ClassicComponentClass<PopoverProps>;

    // <Overlay />
    // ----------------------------------------
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
        target?: Function;
    }
    class Overlay extends React.Component<OverlayProps, {}> {
    }

    // <ProgressBar />
    // ----------------------------------------
    interface ProgressBarProps extends React.HTMLProps<ProgressBar> {
        // Optional
        active?: boolean;
        bsSize?: string;
        bsStyle?: string;
        interpolatedClass?: any; // TODO: Add more specific type
        max?: number;
        min?: number;
        now?: number;
        srOnly?: boolean;
        striped?: boolean;
    }
    class ProgressBar extends React.Component<ProgressBarProps, {}> {
    }

    // <Nav />
    // ----------------------------------------
    // TODO: This one turned into a union of two different types
    interface NavProps extends React.HTMLProps<Nav> {
        // Optional
        activeHref?: string;
        activeKey?: any;
        bsSize?: string;
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
    class Nav extends React.Component<NavProps, {}> {
    }

    // <NavItem />
    // ----------------------------------------
    interface NavItemProps extends React.HTMLProps<NavItem> {
        active?: boolean;
        brand?: any; // TODO: Add more specific type
        bsSize?: string;
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
        onToggle?: Function;
        staticTop?: boolean;
        toggleButton?: any; // TODO: Add more specific type
        toggleNavKey?: string | number;
    }
    type NavItem = React.ClassicComponent<NavItemProps, {}>;
    var NavItem: React.ClassicComponentClass<NavItemProps>;

    // <Navbar.Brand />
    // ----------------------------------------
    interface NavbarBrandProps extends React.HTMLProps<NavbarBrand> {
    }
    class NavbarBrand extends React.Component<NavbarBrandProps, {}> {
    }

    // <Navbar.Collapse />
    // ----------------------------------------
    interface NavbarCollapseProps {
    }
    type NavbarCollapse = React.ClassicComponent<NavbarCollapseProps, {}>;
    var NavbarCollapse: React.ClassicComponentClass<NavbarCollapseProps>;

    // <Navbar.Header />
    // ----------------------------------------
    interface NavbarHeaderProps extends React.HTMLProps<NavbarHeader> {
    }
    type NavbarHeader = React.ClassicComponent<NavbarHeaderProps, {}>;
    var NavbarHeader: React.ClassicComponentClass<NavbarHeaderProps>;

    // <Navbar.Toggle />
    // ----------------------------------------
    interface NavbarToggleProps {
    }
    type NavbarToggle = React.ClassicComponent<NavbarToggleProps, {}>;
    var NavbarToggle: React.ClassicComponentClass<NavbarToggleProps>;

    // <Navbar />
    // ----------------------------------------
    interface NavbarProps extends React.HTMLProps<Navbar> {
        brand?: any; // TODO: Add more specific type
        bsSize?: string;
        bsStyle?: string;
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
    }
    type Navbar = React.ClassicComponent<NavbarProps, {}>;
    var Navbar: NavbarClass;

    // <NavDropdown />
    // ----------------------------------------
    interface NavDropdownProps extends React.HTMLProps<NavDropdown> {
        eventKey?: any;
    }
    class NavDropdown extends React.Component<NavDropdownProps, {}> {
    }

    // <Tabs />
    // ----------------------------------------
    interface TabsProps extends React.HTMLProps<Tabs> {
        activeKey?: any;
        animation?: boolean;
        bsStyle?: string;
        defaultActiveKey?: any;
        paneWidth?: any; // TODO: Add more specific type
        position?: string;
        tabWidth?: any; // TODO: Add more specific type
    }
    type Tabs = React.ClassicComponent<TabsProps, {}>;
    var Tabs: React.ClassicComponentClass<TabsProps>;

    // <Tab />
    // ----------------------------------------
    interface TabProps extends React.HTMLProps<Tab> {
        animation?: boolean;
        eventKey?: any; // TODO: Add more specific type
    }
    type Tab = React.ClassicComponent<TabProps, {}>;
    var Tab: React.ClassicComponentClass<TabProps>;

    // <Pager />
    // ----------------------------------------
    interface PagerProps extends React.HTMLProps<Pager> {
    }
    type Pager = React.ClassicComponent<PagerProps, {}>;
    var Pager: React.ClassicComponentClass<PagerProps>;

    // <PageItem />
    // ----------------------------------------
    interface PageItemProps extends React.HTMLProps<PageItem> {
        eventKey?: any;
        next?: boolean;
        previous?: boolean;
    }
    type PageItem = React.ClassicComponent<PageItemProps, {}>;
    var PageItem: React.ClassicComponentClass<PageItemProps>;

    // <Pagination />
    // ----------------------------------------
    interface PaginationProps extends React.HTMLProps<Pagination> {
        activePage?: number;
        bsSize?: string;
        bsStyle?: string;
        buttonComponentClass?: React.ReactType;
        ellipsis?: boolean;
        first?: boolean;
        items?: number;
        last?: boolean;
        maxButtons?: number;
        next?: boolean;
        prev?: boolean;
    }
    type Pagination = React.ClassicComponent<PaginationProps, {}>;
    var Pagination: React.ClassicComponentClass<PaginationProps>;

    // <Alert />
    // ----------------------------------------
    interface AlertProps extends React.HTMLProps<Alert> {
        bsSize?: string;
        bsStyle?: string;
        closeLabel?: string;
        dismissAfter?: number;
        onDismiss?: Function;
    }
    type Alert = React.ClassicComponent<AlertProps, {}>;
    var Alert: React.ClassicComponentClass<AlertProps>;

    // <Carousel />
    // ----------------------------------------
    interface CarouselProps extends React.HTMLProps<Carousel> {
        activeIndex?: number;
        bsSize?: string;
        bsStyle?: string;
        controls?: boolean;
        defaultActiveIndex?: number;
        direction?: string;
        indicators?: boolean;
        interval?: number;
        nextIcon?: any; // TODO: Add more specific type
        onSlideEnd?: Function;
        pauseOnHover?: boolean;
        prevIcon?: any; // TODO: Add more specific type
        slide?: boolean;
    }
    type Carousel = React.ClassicComponent<CarouselProps, {}>;
    var Carousel: React.ClassicComponentClass<CarouselProps>;

    // <CarouselItem />
    // ----------------------------------------
    interface CarouselItemProps extends React.HTMLProps<CarouselItem> {
        active?: boolean;
        animtateIn?: boolean;
        animateOut?: boolean;
        caption?: any; // TODO: Add more specific type
        direction?: string;
        index?: number;
        onAnimateOutEnd?: Function;
    }
    type CarouselItem = React.ClassicComponent<CarouselItemProps, {}>;
    var CarouselItem: React.ClassicComponentClass<CarouselItemProps>;

    // <Grid />
    // ----------------------------------------
    interface GridProps extends React.HTMLProps<Grid> {
        componentClass?: React.ReactType;
        fluid?: boolean;
    }
    type Grid = React.ClassicComponent<GridProps, {}>;
    var Grid: React.ClassicComponentClass<GridProps>;

    // <Row />
    // ----------------------------------------
    interface RowProps extends React.HTMLProps<Row> {
        componentClass?: React.ReactType;
    }
    type Row = React.ClassicComponent<RowProps, {}>;
    var Row: React.ClassicComponentClass<RowProps>;

    // <Col />
    // ----------------------------------------
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
    type Col = React.ClassicComponent<ColProps, {}>;
    var Col: React.ClassicComponentClass<ColProps>;

    // <Thumbnail />
    // ----------------------------------------
    interface ThumbnailProps extends React.HTMLProps<Thumbnail> {
        bsSize?: string;
        bsStyle?: string;
    }
    type Thumbnail = React.ClassicComponent<ThumbnailProps, {}>;
    var Thumbnail: React.ClassicComponentClass<ThumbnailProps>;

    // <ListGroup />
    // ----------------------------------------
    interface ListGroupProps extends React.HTMLProps<ListGroup> {
        fill?: boolean; // TODO: Add more specific type
    }
    class ListGroup extends React.Component<ListGroupProps, {}> {
    }

    // <ListGroupItem />
    // ----------------------------------------
    interface ListGroupItemProps extends React.HTMLProps<ListGroupItem> {
        active?: any;
        bsSize?: string;
        bsStyle?: string;
        eventKey?: any;
        header?: any; // TODO: Add more specific type
        key?: any; // TODO: Add more specific type
        listItem?: boolean;
    }
    class ListGroupItem extends React.Component<ListGroupItemProps, {}> {
    }

    // <Label />
    // ----------------------------------------
    interface LabelProps extends React.HTMLProps<Label> {
        bsSize?: string;
        bsStyle?: string;
    }
    class Label extends React.Component<LabelProps, {}> {
    }

    // <Badge />
    // ----------------------------------------
    interface BadgeProps extends React.HTMLProps<Badge> {
        pullRight?: boolean;
    }
    type Badge = React.ClassicComponent<BadgeProps, {}>;
    var Badge: React.ClassicComponentClass<BadgeProps>;

    // <Jumbotron />
    // ----------------------------------------
    interface JumbotronProps extends React.HTMLProps<Jumbotron> {
        componentClass?: React.ReactType;
    }
    type Jumbotron = React.ClassicComponent<JumbotronProps, {}>;
    var Jumbotron: React.ClassicComponentClass<JumbotronProps>;

    // <PageHeader />
    // ----------------------------------------
    interface PageHeaderProps extends React.HTMLProps<PageHeader> {
    }
    class PageHeader extends React.Component<PageHeaderProps, {}> {
    }

    // <Well />
    // ----------------------------------------
    interface WellProps extends React.HTMLProps<Well> {
        bsSize?: string;
        bsStyle?: string;
    }
    class Well extends React.Component<WellProps, {}> {
    }

    // <Glyphicon />
    // ----------------------------------------
    interface GlyphiconProps extends React.HTMLProps<Glyphicon> {
        // Required
        glyph: string;
    }
    type Glyphicon = React.ClassicComponent<GlyphiconProps, {}>;
    var Glyphicon: React.ClassicComponentClass<GlyphiconProps>;

    // <Table />
    // ----------------------------------------
    interface TableProps extends React.HTMLProps<Table> {
        bordered?: boolean;
        condensed?: boolean;
        hover?: boolean;
        responsive?: boolean;
        striped?: boolean;
    }
    type Table = React.ClassicComponent<TableProps, {}>;
    var Table: React.ClassicComponentClass<TableProps>;

    // <Input />
    // ----------------------------------------
    interface InputProps extends React.HTMLProps<Input> {
        defaultValue?:string;
        addonAfter?: any; // TODO: Add more specific type
        addonBefore?: any; // TODO: Add more specific type
        bsSize?: string;
        bsStyle?: string;
        buttonAfter?: any; // TODO: Add more specific type
        buttonBefore?: any; // TODO: Add more specific type
        feedbackIcon?: any; // TODO: Add more specific type
        groupClassName?: string;
        hasFeedback?: boolean;
        help?: any; // TODO: Add more specific type
        labelClassName?: string;
        wrapperClassName?: string;
    }
    // TODO: extends InputBase
    class Input extends React.Component<InputProps, {}> {
    }

    // <ButtonInput />
    // ----------------------------------------
    interface ButtonInputProps extends React.HTMLProps<ButtonInput> {
        addonAfter?: any; // TODO: Add more specific type
        addonBefore?: any; // TODO: Add more specific type
        bsSize?: string;
        bsStyle?: string;
        buttonAfter?: any; // TODO: Add more specific type
        buttonBefore?: any; // TODO: Add more specific type
        feedbackIcon?: any; // TODO: Add more specific type
        groupClassName?: string;
        hasFeedback?: boolean;
        help?: any; // TODO: Add more specific type
        labelClassName?: string;
        wrapperClassName?: string;
    }
    // TODO: extends InputBase
    class ButtonInput extends React.Component<ButtonInputProps, {}> {
    }


    // <FormControls.Static />
    // ----------------------------------------

    interface StaticProps extends React.HTMLProps<Static> {}
    interface Static extends React.ReactElement<StaticProps> { }
    interface StaticClass extends React.ComponentClass<StaticProps> { }
    interface FormControlsClass {
      Static: StaticClass;
    }
    var FormControls: FormControlsClass;

    // <Form />
    // ----------------------------------------
    interface FormProps extends React.HTMLProps<Form> {
        bsClass?: string;
        componentClass?: React.ReactType;
        horizontal?: boolean;
        inline?: boolean;
    }
    class Form extends React.Component<FormProps, {}> {}

    // <FormGroup />
    // ----------------------------------------
    interface FormGroupProps extends React.HTMLProps<FormGroup> {
        bsClass?: string;
        bsSize?: "sm" | "small" | "lg" | "large";
        controlId?: string;
        validationState?: "success" | "warning" | "error";
    }
    class FormGroup extends React.Component<FormGroupProps, {}> {}

    // <ControlLabel />
    // ----------------------------------------
    interface ControlLabelProps extends React.HTMLProps<ControlLabel> {
        bsClass?: string;
        htmlFor?: string;
        srOnly?: boolean;
    }
    class ControlLabel extends React.Component<ControlLabelProps, {}> {}

    // <FormControl.Feedback />
    // ----------------------------------------
    interface FormControlFeedbackProps extends React.HTMLProps<FormControlFeedback> {
    }
    class FormControlFeedback extends React.Component<FormControlFeedbackProps, {}> {
    }

    // <FormControl />
    // ----------------------------------------
    interface FormControlProps extends React.HTMLProps<FormControl> {
        bsClass?: string;
        componentClass?: React.ReactType;
        id?: string;
        type?: string;
    }
    interface FormControlClass extends React.ClassicComponentClass<FormControlProps> {
        Feedback: typeof FormControlFeedback;
    }
    type FormControl = React.Component<FormControlProps, {}>;
    var FormControl: FormControlClass;

    // <HelpBlock />
    // ----------------------------------------
    interface HelpBlockProps extends React.HTMLProps<HelpBlock> {
        bsClass?: string;
    }
    class HelpBlock extends React.Component<HelpBlockProps, {}> {}

    // <Checkbox />
    // ----------------------------------------
    interface CheckboxProps extends React.HTMLProps<Checkbox> {
        bsClass?: string;
        disabled?: boolean;
        inline?: boolean;
        validationState?: "success" | "warning" | "error";
    }
    class Checkbox extends React.Component<CheckboxProps, {}> {}

    // <Radio />
    // ----------------------------------------
    interface RadioProps extends React.HTMLProps<Radio> {
        bsClass?: string;
        disabled?: boolean;
        inline?: boolean;
        validationState?: "success" | "warning" | "error";
    }
    class Radio extends React.Component<RadioProps, {}> {}

    // <Portal />
    // ----------------------------------------
    interface PortalProps {
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
    type Portal = React.ClassicComponent<PortalProps, {}>;
    var Portal: React.ClassicComponentClass<PortalProps>;

    // <Position />
    // ----------------------------------------
    interface PositionProps {
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
    class Position extends React.Component<PositionProps, {}> {
    }

    // <Fade />
    // ----------------------------------------
    interface FadeProps {
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
    class Fade extends React.Component<FadeProps, {}> {
    }
}
