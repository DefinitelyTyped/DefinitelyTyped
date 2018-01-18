import * as React from 'react';
import * as Accordion from 'react-bootstrap/lib/Accordion';
import * as Alert from 'react-bootstrap/lib/Alert';
import * as Badge from 'react-bootstrap/lib/Badge';
import * as Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import * as BreadcrumbItem from 'react-bootstrap/lib/BreadcrumbItem';
import * as Button from 'react-bootstrap/lib/Button';
import * as ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import * as ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import * as Carousel from 'react-bootstrap/lib/Carousel';
import * as CarouselCaption from 'react-bootstrap/lib/CarouselCaption';
import * as CarouselItem from 'react-bootstrap/lib/CarouselItem';
import * as Checkbox from 'react-bootstrap/lib/Checkbox';
import * as Clearfix from 'react-bootstrap/lib/Clearfix';
import * as Col from 'react-bootstrap/lib/Col';
import * as Collapse from 'react-bootstrap/lib/Collapse';
import * as ControlLabel from 'react-bootstrap/lib/ControlLabel';
import * as Dropdown from 'react-bootstrap/lib/Dropdown';
import * as DropdownButton from 'react-bootstrap/lib/DropdownButton';
import * as DropdownMenu from 'react-bootstrap/lib/DropdownMenu';
import * as DropdownToggle from 'react-bootstrap/lib/DropdownToggle';
import * as Fade from 'react-bootstrap/lib/Fade';
import * as Form from 'react-bootstrap/lib/Form';
import * as FormControl from 'react-bootstrap/lib/FormControl';
import * as FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import * as FormControlStatic from 'react-bootstrap/lib/FormControlStatic';
import * as FormGroup from 'react-bootstrap/lib/FormGroup';
import * as Glyphicon from 'react-bootstrap/lib/Glyphicon';
import * as Grid from 'react-bootstrap/lib/Grid';
import * as HelpBlock from 'react-bootstrap/lib/HelpBlock';
import * as Image from 'react-bootstrap/lib/Image';
import * as InputGroup from 'react-bootstrap/lib/InputGroup';
import * as InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';
import * as InputGroupButton from 'react-bootstrap/lib/InputGroupButton';
import * as Jumbotron from 'react-bootstrap/lib/Jumbotron';
import * as Label from 'react-bootstrap/lib/Label';
import * as ListGroup from 'react-bootstrap/lib/ListGroup';
import * as ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import * as Media from 'react-bootstrap/lib/Media';
import * as MediaBody from 'react-bootstrap/lib/MediaBody';
import * as MediaHeading from 'react-bootstrap/lib/MediaHeading';
import * as MediaLeft from 'react-bootstrap/lib/MediaLeft';
import * as MediaList from 'react-bootstrap/lib/MediaList';
import * as MediaListItem from 'react-bootstrap/lib/MediaListItem';
import * as MediaRight from 'react-bootstrap/lib/MediaRight';
import * as MenuItem from 'react-bootstrap/lib/MenuItem';
import * as Modal from 'react-bootstrap/lib/Modal';
import * as ModalBody from 'react-bootstrap/lib/ModalBody';
import * as ModalDialog from 'react-bootstrap/lib/ModalDialog';
import * as ModalFooter from 'react-bootstrap/lib/ModalFooter';
import * as ModalHeader from 'react-bootstrap/lib/ModalHeader';
import * as ModalTitle from 'react-bootstrap/lib/ModalTitle';
import * as Nav from 'react-bootstrap/lib/Nav';
import * as NavDropdown from 'react-bootstrap/lib/NavDropdown';
import * as NavItem from 'react-bootstrap/lib/NavItem';
import * as Navbar from 'react-bootstrap/lib/Navbar';
import * as NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import * as NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import * as NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import * as NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import * as Overlay from 'react-bootstrap/lib/Overlay';
import * as OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import * as PageHeader from 'react-bootstrap/lib/PageHeader';
import * as PageItem from 'react-bootstrap/lib/PageItem';
import * as Pager from 'react-bootstrap/lib/Pager';
import * as PagerItem from 'react-bootstrap/lib/PagerItem';
import * as Pagination from 'react-bootstrap/lib/Pagination';
import * as PaginationFirst from 'react-bootstrap/lib/PaginationFirst';
import * as PaginationPrev from 'react-bootstrap/lib/PaginationPrev';
import * as PaginationNext from 'react-bootstrap/lib/PaginationNext';
import * as PaginationLast from 'react-bootstrap/lib/PaginationLast';
import * as PaginationEllipsis from 'react-bootstrap/lib/PaginationEllipsis';
import * as PaginationItem from 'react-bootstrap/lib/PaginationItem';
import * as Panel from 'react-bootstrap/lib/Panel';
import * as PanelHeading from 'react-bootstrap/lib/PanelHeading';
import * as PanelTitle from 'react-bootstrap/lib/PanelTitle';
import * as PanelToggle from 'react-bootstrap/lib/PanelToggle';
import * as PanelCollapse from 'react-bootstrap/lib/PanelCollapse';
import * as PanelBody from 'react-bootstrap/lib/PanelBody';
import * as PanelFooter from 'react-bootstrap/lib/PanelFooter';
import * as PanelGroup from 'react-bootstrap/lib/PanelGroup';
import * as Popover from 'react-bootstrap/lib/Popover';
import * as ProgressBar from 'react-bootstrap/lib/ProgressBar';
import * as Radio from 'react-bootstrap/lib/Radio';
import * as ResponsiveEmbed from 'react-bootstrap/lib/ResponsiveEmbed';
import * as Row from 'react-bootstrap/lib/Row';
import * as SafeAnchor from 'react-bootstrap/lib/SafeAnchor';
import * as SplitButton from 'react-bootstrap/lib/SplitButton';
import * as SplitToggle from 'react-bootstrap/lib/SplitToggle';
import * as Tab from 'react-bootstrap/lib/Tab';
import * as TabContainer from 'react-bootstrap/lib/TabContainer';
import * as TabContent from 'react-bootstrap/lib/TabContent';
import * as TabPane from 'react-bootstrap/lib/TabPane';
import * as Table from 'react-bootstrap/lib/Table';
import * as Tabs from 'react-bootstrap/lib/Tabs';
import * as Thumbnail from 'react-bootstrap/lib/Thumbnail';
import * as ToggleButton from 'react-bootstrap/lib/ToggleButton';
import * as ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import * as Tooltip from 'react-bootstrap/lib/Tooltip';
import * as Well from 'react-bootstrap/lib/Well';

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
