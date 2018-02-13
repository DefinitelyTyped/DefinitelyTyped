import * as React from 'react';
import Accordion = require('react-bootstrap/lib/Accordion');
import Alert = require('react-bootstrap/lib/Alert');
import Badge = require('react-bootstrap/lib/Badge');
import Breadcrumb = require('react-bootstrap/lib/Breadcrumb');
import BreadcrumbItem = require('react-bootstrap/lib/BreadcrumbItem');
import Button = require('react-bootstrap/lib/Button');
import ButtonGroup = require('react-bootstrap/lib/ButtonGroup');
import ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
import Carousel = require('react-bootstrap/lib/Carousel');
import CarouselCaption = require('react-bootstrap/lib/CarouselCaption');
import CarouselItem = require('react-bootstrap/lib/CarouselItem');
import Checkbox = require('react-bootstrap/lib/Checkbox');
import Clearfix = require('react-bootstrap/lib/Clearfix');
import Col = require('react-bootstrap/lib/Col');
import Collapse = require('react-bootstrap/lib/Collapse');
import ControlLabel = require('react-bootstrap/lib/ControlLabel');
import Dropdown = require('react-bootstrap/lib/Dropdown');
import DropdownButton = require('react-bootstrap/lib/DropdownButton');
import DropdownMenu = require('react-bootstrap/lib/DropdownMenu');
import DropdownToggle = require('react-bootstrap/lib/DropdownToggle');
import Fade = require('react-bootstrap/lib/Fade');
import Form = require('react-bootstrap/lib/Form');
import FormControl = require('react-bootstrap/lib/FormControl');
import FormControlFeedback = require('react-bootstrap/lib/FormControlFeedback');
import FormControlStatic = require('react-bootstrap/lib/FormControlStatic');
import FormGroup = require('react-bootstrap/lib/FormGroup');
import Glyphicon = require('react-bootstrap/lib/Glyphicon');
import Grid = require('react-bootstrap/lib/Grid');
import HelpBlock = require('react-bootstrap/lib/HelpBlock');
import Image = require('react-bootstrap/lib/Image');
import InputGroup = require('react-bootstrap/lib/InputGroup');
import InputGroupAddon = require('react-bootstrap/lib/InputGroupAddon');
import InputGroupButton = require('react-bootstrap/lib/InputGroupButton');
import Jumbotron = require('react-bootstrap/lib/Jumbotron');
import Label = require('react-bootstrap/lib/Label');
import ListGroup = require('react-bootstrap/lib/ListGroup');
import ListGroupItem = require('react-bootstrap/lib/ListGroupItem');
import Media = require('react-bootstrap/lib/Media');
import MediaBody = require('react-bootstrap/lib/MediaBody');
import MediaHeading = require('react-bootstrap/lib/MediaHeading');
import MediaLeft = require('react-bootstrap/lib/MediaLeft');
import MediaList = require('react-bootstrap/lib/MediaList');
import MediaListItem = require('react-bootstrap/lib/MediaListItem');
import MediaRight = require('react-bootstrap/lib/MediaRight');
import MenuItem = require('react-bootstrap/lib/MenuItem');
import Modal = require('react-bootstrap/lib/Modal');
import ModalBody = require('react-bootstrap/lib/ModalBody');
import ModalDialog = require('react-bootstrap/lib/ModalDialog');
import ModalFooter = require('react-bootstrap/lib/ModalFooter');
import ModalHeader = require('react-bootstrap/lib/ModalHeader');
import ModalTitle = require('react-bootstrap/lib/ModalTitle');
import Nav = require('react-bootstrap/lib/Nav');
import NavDropdown = require('react-bootstrap/lib/NavDropdown');
import NavItem = require('react-bootstrap/lib/NavItem');
import Navbar = require('react-bootstrap/lib/Navbar');
import NavbarBrand = require('react-bootstrap/lib/NavbarBrand');
import NavbarCollapse = require('react-bootstrap/lib/NavbarCollapse');
import NavbarHeader = require('react-bootstrap/lib/NavbarHeader');
import NavbarToggle = require('react-bootstrap/lib/NavbarToggle');
import Overlay = require('react-bootstrap/lib/Overlay');
import OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');
import PageHeader = require('react-bootstrap/lib/PageHeader');
import PageItem = require('react-bootstrap/lib/PageItem');
import Pager = require('react-bootstrap/lib/Pager');
import PagerItem = require('react-bootstrap/lib/PagerItem');
import Pagination = require('react-bootstrap/lib/Pagination');
import PaginationFirst = require('react-bootstrap/lib/PaginationFirst');
import PaginationPrev = require('react-bootstrap/lib/PaginationPrev');
import PaginationNext = require('react-bootstrap/lib/PaginationNext');
import PaginationLast = require('react-bootstrap/lib/PaginationLast');
import PaginationEllipsis = require('react-bootstrap/lib/PaginationEllipsis');
import PaginationItem = require('react-bootstrap/lib/PaginationItem');
import Panel = require('react-bootstrap/lib/Panel');
import PanelHeading = require('react-bootstrap/lib/PanelHeading');
import PanelTitle = require('react-bootstrap/lib/PanelTitle');
import PanelToggle = require('react-bootstrap/lib/PanelToggle');
import PanelCollapse = require('react-bootstrap/lib/PanelCollapse');
import PanelBody = require('react-bootstrap/lib/PanelBody');
import PanelFooter = require('react-bootstrap/lib/PanelFooter');
import PanelGroup = require('react-bootstrap/lib/PanelGroup');
import Popover = require('react-bootstrap/lib/Popover');
import ProgressBar = require('react-bootstrap/lib/ProgressBar');
import Radio = require('react-bootstrap/lib/Radio');
import ResponsiveEmbed = require('react-bootstrap/lib/ResponsiveEmbed');
import Row = require('react-bootstrap/lib/Row');
import SafeAnchor = require('react-bootstrap/lib/SafeAnchor');
import SplitButton = require('react-bootstrap/lib/SplitButton');
import SplitToggle = require('react-bootstrap/lib/SplitToggle');
import Tab = require('react-bootstrap/lib/Tab');
import TabContainer = require('react-bootstrap/lib/TabContainer');
import TabContent = require('react-bootstrap/lib/TabContent');
import TabPane = require('react-bootstrap/lib/TabPane');
import Table = require('react-bootstrap/lib/Table');
import Tabs = require('react-bootstrap/lib/Tabs');
import Thumbnail = require('react-bootstrap/lib/Thumbnail');
import ToggleButton = require('react-bootstrap/lib/ToggleButton');
import ToggleButtonGroup = require('react-bootstrap/lib/ToggleButtonGroup');
import Tooltip = require('react-bootstrap/lib/Tooltip');
import Well = require('react-bootstrap/lib/Well');

const noop = () => {};

/**
 * Mostly just checking here that TS recognizes all of the imports as Components,
 * which means we properly exported them from lib
 */

export class ReactBootstrapIndividualComponentsTest extends React.Component {
  render() {
    return (
      <div>
        <Accordion />
        <Alert />
        <Badge />
        <Breadcrumb>
          <BreadcrumbItem />
        </Breadcrumb>
        <Button />
        <ButtonGroup><Button /></ButtonGroup>
        <ButtonToolbar><Button /></ButtonToolbar>
        <Carousel>
          <CarouselCaption />
          <Carousel.Caption />
          <CarouselItem />
          <Carousel.Item />
        </Carousel>
        <Checkbox />
        <Clearfix />
        <Col />
        <Collapse />
        <ControlLabel />
        <Dropdown id="foo" />
        <DropdownButton id="foo" title="bar" />
        <DropdownMenu />
        <DropdownToggle />
        <Fade />
        <Form />
        <FormControl />
        <FormControlFeedback />
        <FormControlStatic />
        <FormGroup />
        <Glyphicon glyph="foo" />
        <Grid />
        <HelpBlock />
        <Image />
        <InputGroup />
        <InputGroupAddon />
        <InputGroupButton />
        <Jumbotron />
        <Label />
        <ListGroup />
        <ListGroupItem />
        <Media />
        <MediaBody />
        <MediaHeading />
        <MediaLeft />
        <MediaList />
        <MediaListItem />
        <MediaRight />
        <MenuItem />
        <Modal onHide={noop} />
        <ModalBody />
        <ModalDialog />
        <ModalFooter />
        <ModalHeader />
        <ModalTitle />
        <Nav />
        <NavDropdown id="foo" />
        <NavItem />
        <Navbar />
        <NavbarBrand />
        <NavbarCollapse />
        <NavbarHeader />
        <NavbarToggle />
        <Overlay />
        <OverlayTrigger overlay="" />
        <PageHeader />
        <PageItem />
        <Pager />
        <PagerItem />
        <Pagination />
        <PaginationItem />
        <PaginationFirst />
        <PaginationLast />
        <PaginationNext />
        <PaginationPrev />
        <PaginationEllipsis />
        <Panel />
        <PanelHeading />
        <PanelBody />
        <PanelCollapse />
        <PanelFooter />
        <PanelTitle />
        <PanelToggle />
        <PanelGroup />
        <Popover />
        <ProgressBar />
        <Radio />
        <ResponsiveEmbed />
        <Row />
        <SafeAnchor />
        <SplitButton id="foo" title="bar" />
        <SplitToggle />
        <Tab />
        <TabContainer />
        <TabContent />
        <TabPane />
        <Table />
        <Tabs />
        <Thumbnail />
        <ToggleButton value="foo" />
        <ToggleButtonGroup type="checkbox" />
        <ToggleButtonGroup type="radio" name="foo" />
        <Tooltip />
        <Well />
      </div>
    );
  }
}
