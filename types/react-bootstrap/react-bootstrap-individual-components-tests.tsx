import * as React from 'react';
import Accordion from 'react-bootstrap/lib/Accordion';
import Alert from 'react-bootstrap/lib/Alert';
import Badge from 'react-bootstrap/lib/Badge';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/lib/BreadcrumbItem';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselCaption from 'react-bootstrap/lib/CarouselCaption';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import Col from 'react-bootstrap/lib/Col';
import Collapse from 'react-bootstrap/lib/Collapse';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import DropdownMenu from 'react-bootstrap/lib/DropdownMenu';
import DropdownToggle from 'react-bootstrap/lib/DropdownToggle';
import Fade from 'react-bootstrap/lib/Fade';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import FormControlStatic from 'react-bootstrap/lib/FormControlStatic';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Grid from 'react-bootstrap/lib/Grid';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Image from 'react-bootstrap/lib/Image';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';
import InputGroupButton from 'react-bootstrap/lib/InputGroupButton';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Label from 'react-bootstrap/lib/Label';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Media from 'react-bootstrap/lib/Media';
import MediaBody from 'react-bootstrap/lib/MediaBody';
import MediaHeading from 'react-bootstrap/lib/MediaHeading';
import MediaLeft from 'react-bootstrap/lib/MediaLeft';
import MediaList from 'react-bootstrap/lib/MediaList';
import MediaListItem from 'react-bootstrap/lib/MediaListItem';
import MediaRight from 'react-bootstrap/lib/MediaRight';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Modal from 'react-bootstrap/lib/Modal';
import ModalBody from 'react-bootstrap/lib/ModalBody';
import ModalDialog from 'react-bootstrap/lib/ModalDialog';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';
import ModalTitle from 'react-bootstrap/lib/ModalTitle';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import Overlay from 'react-bootstrap/lib/Overlay';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import PageItem from 'react-bootstrap/lib/PageItem';
import Pager from 'react-bootstrap/lib/Pager';
import PagerItem from 'react-bootstrap/lib/PagerItem';
import Pagination from 'react-bootstrap/lib/Pagination';
import PaginationButton from 'react-bootstrap/lib/PaginationButton';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Popover from 'react-bootstrap/lib/Popover';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Radio from 'react-bootstrap/lib/Radio';
import ResponsiveEmbed from 'react-bootstrap/lib/ResponsiveEmbed';
import Row from 'react-bootstrap/lib/Row';
import SafeAnchor from 'react-bootstrap/lib/SafeAnchor';
import SplitButton from 'react-bootstrap/lib/SplitButton';
import SplitToggle from 'react-bootstrap/lib/SplitToggle';
import Tab from 'react-bootstrap/lib/Tab';
import TabContainer from 'react-bootstrap/lib/TabContainer';
import TabContent from 'react-bootstrap/lib/TabContent';
import TabPane from 'react-bootstrap/lib/TabPane';
import Table from 'react-bootstrap/lib/Table';
import Tabs from 'react-bootstrap/lib/Tabs';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Well from 'react-bootstrap/lib/Well';

const noop = () => {};

/**
 * Mostly just checking here that TS recognizes all of the imports as Components, which means we properly exported them
 * from lib/*
 */

export class ReactBootstrapIndividualComponentsTest extends React.Component {
  public render() {
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
        <DropdownButton id="foo" />
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
        <PaginationButton onClick={noop} />
        <Panel />
        <PanelGroup />
        <Popover />
        <ProgressBar />
        <Radio />
        <ResponsiveEmbed />
        <Row />
        <SafeAnchor />
        <SplitButton />
        <SplitToggle />
        <Tab />
        <TabContainer />
        <TabContent />
        <TabPane />
        <Table />
        <Tabs />
        <Thumbnail />
        <Tooltip />
        <Well />
      </div>
    )
  }
}
