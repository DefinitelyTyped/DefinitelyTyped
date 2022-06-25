import * as React from 'react';
import { Component, CSSProperties } from 'react';
import {
    Button,
    ButtonToolbar,
    Modal,
    Well,
    ButtonGroup,
    DropdownButton,
    MenuItem,
    Panel,
    PanelGroup,
    ListGroup,
    ListGroupItem,
    Accordion,
    Tooltip,
    Overlay,
    OverlayTrigger,
    Popover,
    ProgressBar,
    Nav,
    NavItem,
    Navbar,
    NavDropdown,
    Tabs,
    Tab,
    Pager,
    PageItem,
    Pagination,
    Alert,
    Carousel,
    SafeAnchor,
    Grid,
    Row,
    Col,
    Thumbnail,
    Image,
    ResponsiveEmbed,
    Label,
    Badge,
    Jumbotron,
    PageHeader,
    Glyphicon,
    Table,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Radio,
    Checkbox,
    Media,
    InputGroup,
    ToggleButtonGroup,
    ToggleButton,
    Collapse
} from 'react-bootstrap';

export class ReactBootstrapTest extends Component {
    callback() {
        alert('Callback: ' + JSON.stringify(arguments));
    }

    render() {
        const style: CSSProperties = { padding: '50px' };
        const tooltip = (<Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>);

        const innerGlyphicon = <Glyphicon glyph='music' />;
        const innerButton = <Button>Before</Button>;
        const innerDropdown = (
          <DropdownButton title='Action' id='input-dropdown-addon'>
            <MenuItem key='1'>Item</MenuItem>
          </DropdownButton>
        );
        const innerRadio = <input type='radio' aria-label='...' />;
        const innerCheckbox = <input type='checkbox' aria-label='...' />;

        return (
            <div style={style}>
                { innerGlyphicon }
                { innerButton }
                { innerDropdown }
                { innerRadio }
                { innerCheckbox }

                <div style={style}>
                    <ButtonToolbar>
                        <Button>Default</Button>
                        <Button bsStyle='primary'>Primary</Button>
                        <Button bsStyle='success'>Success</Button>
                        <Button bsStyle='info'>Info</Button>
                        <Button bsStyle='warning'>Warning</Button>
                        <Button bsStyle='danger'>Danger</Button>
                        <Button bsStyle='link'>Link</Button>
                    </ButtonToolbar>
                </div>

                <div style={style}>
                    <ButtonToolbar>
                        <Button bsStyle='primary' bsSize='large'>Large button</Button>
                        <Button bsSize='large'>Large button</Button>
                    </ButtonToolbar>
                    <ButtonToolbar>
                        <Button bsStyle='primary'>Default button</Button>
                        <Button>Default button</Button>
                    </ButtonToolbar>
                    <ButtonToolbar>
                        <Button bsStyle='primary' bsSize='small'>Small button</Button>
                        <Button bsSize='small'>Small button</Button>
                    </ButtonToolbar>
                    <ButtonToolbar>
                        <Button bsStyle='primary' bsSize='xsmall'>Extra small button</Button>
                        <Button bsSize='xsmall'>Extra small button</Button>
                    </ButtonToolbar>
                </div>

                <div style={style}>
                    <Well>
                        <Button bsStyle='primary' bsSize='large' block>Block level button</Button>
                        <Button bsSize='large' block>Block level button</Button>
                    </Well>
                </div>

                <div style={style}>
                    <ButtonToolbar>
                        <Button bsStyle='primary' bsSize='large' active>Primary button</Button>
                        <Button bsSize='large' active>Button</Button>
                    </ButtonToolbar>
                </div>

                <div style={style}>
                    <ButtonToolbar>
                        <Button href='#'>Link</Button>
                        <Button>Button</Button>
                    </ButtonToolbar>
                </div>

                <div style={style}>
                    <ButtonGroup>
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </div>

                <div style={style}>
                    <ButtonToolbar>
                        <Button disabled>Disabled button</Button>
                        <Button bsStyle='large' disabled>Disabled large button</Button>
                    </ButtonToolbar>
                </div>

                <div style={style}>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button>1</Button>
                            <Button>2</Button>
                            <Button>3</Button>
                            <Button>4</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button>5</Button>
                            <Button>6</Button>
                            <Button>7</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button>8</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>

                // TODO: Start here

                <div style={style}>
                  <ButtonToolbar>
                      <ButtonGroup bsSize='large'>
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                      </ButtonGroup>
                    </ButtonToolbar>

                    <ButtonToolbar>
                      <ButtonGroup>
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                      </ButtonGroup>
                    </ButtonToolbar>

                    <ButtonToolbar>
                      <ButtonGroup bsSize='small'>
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                      </ButtonGroup>
                    </ButtonToolbar>

                    <ButtonToolbar>
                      <ButtonGroup bsSize='xsmall'>
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                </div>

                <div style={style}>
                  <ButtonGroup vertical>
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <DropdownButton title='Dropdown' id='bg-vertical-dropdown-1'>
                      <MenuItem eventKey='1'>Dropdown link</MenuItem>
                      <MenuItem eventKey='2'>Dropdown link</MenuItem>
                    </DropdownButton>
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <DropdownButton title='Dropdown' id='bg-vertical-dropdown-2'>
                      <MenuItem eventKey='1'>Dropdown link</MenuItem>
                      <MenuItem eventKey='2'>Dropdown link</MenuItem>
                    </DropdownButton>
                    <DropdownButton title='Dropdown' id='bg-vertical-dropdown-3'>
                      <MenuItem eventKey='1'>Dropdown link</MenuItem>
                      <MenuItem eventKey='2'>Dropdown link</MenuItem>
                    </DropdownButton>
                  </ButtonGroup>
                </div>

                <div style={style}>
                  <DropdownButton bsStyle={'default'} title={'hello'} key={0} id={"0"}>
                    <MenuItem eventKey='1'>Action</MenuItem>
                    <MenuItem eventKey='2'>Another action</MenuItem>
                    <MenuItem eventKey='3' active>Active Item</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey='4'>Separated link</MenuItem>
                  </DropdownButton>
                </div>

                <div style={style}>
                  <div className="clearfix">
                    <ul className="dropdown-menu open">
                      <MenuItem header>Header</MenuItem>
                      <MenuItem>link</MenuItem>
                      <MenuItem divider/>
                      <MenuItem header>Header</MenuItem>
                      <MenuItem>link</MenuItem>
                      <MenuItem disabled>disabled</MenuItem>
                      <MenuItem title="See? I have a title.">
                        link with title
                      </MenuItem>
                      <MenuItem eventKey={1} href="#someHref" onSelect={this.callback}>
                        link that alerts
                      </MenuItem>
                    </ul>
                  </div>
                </div>

                <div style={style}>
                    <Panel onClick={this.callback}>
                      <Panel.Body>
                        Basic panel example
                      </Panel.Body>
                    </Panel>
                </div>

                <div style={style}>
                  <div>
                    <Panel>
                      <Panel.Heading>
                        Panel heading without title
                      </Panel.Heading>
                      <Panel.Body>
                        Panel content
                      </Panel.Body>
                    </Panel>
                    <Panel>
                      <Panel.Heading>
                        <Panel.Title componentClass="h3">
                          Panel heading with a title
                        </Panel.Title>
                      </Panel.Heading>
                      <Panel.Body>
                        Panel content
                      </Panel.Body>
                    </Panel>
                  </div>
                </div>

                <div style={style}>
                  <Panel>
                    <Panel.Body>Panel content</Panel.Body>
                    <Panel.Footer>Panel footer</Panel.Footer>
                  </Panel>
                </div>

                <div style={style}>
                  <Panel bsClass="custom-class">
                    <Panel.Body>Panel content</Panel.Body>
                    <Panel.Footer>Panel footer</Panel.Footer>
                  </Panel>
                </div>

                <div style={style}>
                  <div>
                    <Panel bsStyle="primary">
                      <Panel.Heading>
                        <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body>Panel content</Panel.Body>
                    </Panel>

                    <Panel bsStyle="success">
                      <Panel.Heading>
                        <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body>Panel content</Panel.Body>
                    </Panel>

                    <Panel bsStyle="info">
                      <Panel.Heading>
                        <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body>Panel content</Panel.Body>
                    </Panel>

                    <Panel bsStyle="warning">
                      <Panel.Heading>
                        <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body>Panel content</Panel.Body>
                    </Panel>

                    <Panel bsStyle="danger">
                      <Panel.Heading>
                        <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body>Panel content</Panel.Body>
                    </Panel>
                  </div>
                </div>

                <div style={style}>
                  <Panel>
                    <Panel.Heading>Panel heading</Panel.Heading>
                    <Panel.Body>Some default panel content here.</Panel.Body>
                    <ListGroup>
                      <ListGroupItem>Item 1</ListGroupItem>
                      <ListGroupItem>Item 2</ListGroupItem>
                      <ListGroupItem>&hellip;</ListGroupItem>
                    </ListGroup>
                    <Panel.Body>Some more panel content here.</Panel.Body>
                  </Panel>
                </div>

                <div style={style}>
                  <Panel id="collapsible-panel-example-1" expanded={true}>
                    <Panel.Collapse>
                      <Panel.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente
                        ea proident.
                      </Panel.Body>
                    </Panel.Collapse>
                  </Panel>
                  <Panel id="collapsible-panel-example-2" defaultExpanded>
                    <Panel.Heading>
                      <Panel.Title toggle>
                        Title that functions as a collapse toggle
                      </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                      <Panel.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente
                        ea proident.
                      </Panel.Body>
                    </Panel.Collapse>
                  </Panel>
                  <Panel id="collapsible-panel-example-3" defaultExpanded>
                    <Panel.Heading>
                      <Panel.Title>Title that functions as a collapse toggle</Panel.Title>
                      <Panel.Toggle componentClass="a">My own toggle</Panel.Toggle>
                    </Panel.Heading>
                    <Panel.Collapse>
                      <Panel.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente
                        ea proident.
                      </Panel.Body>
                    </Panel.Collapse>
                  </Panel>
                </div>

                <div style={style}>
                  <PanelGroup
                    accordion
                    id="accordion-controlled-example"
                    activeKey={0}
                    onSelect={this.callback}
                  >
                    <Panel eventKey="1">
                      <Panel.Heading>
                        <Panel.Title toggle>Panel heading 1</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>Panel content 1</Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                      <Panel.Heading>
                        <Panel.Title toggle>Panel heading 2</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>Panel content 2</Panel.Body>
                    </Panel>
                  </PanelGroup>
                </div>

                <div style={style}>
                  <Accordion>
                    <Panel eventKey='1'>
                      <Panel.Heading>Collapsible Group Item #1</Panel.Heading>
                      <Panel.Body>
                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </Panel.Body>
                    </Panel>
                    <Panel eventKey='2'>
                      <Panel.Heading>Collapsible Group Item #2</Panel.Heading>
                      <Panel.Body>
                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </Panel.Body>
                    </Panel>
                    <Panel eventKey='3'>
                      <Panel.Heading>Collapsible Group Item #3</Panel.Heading>
                      <Panel.Body>
                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                       </Panel.Body>
                    </Panel>
                  </Accordion>
                </div>

                <div>
                  <PanelGroup
                    accordion
                    id="accordion-uncontrolled-example"
                    defaultActiveKey="2"
                  >
                    <Panel eventKey="1">
                      <Panel.Heading>
                        <Panel.Title toggle>Panel heading 1</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>Panel content 1</Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                      <Panel.Heading>
                        <Panel.Title toggle>Panel heading 2</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>Panel content 2</Panel.Body>
                    </Panel>
                  </PanelGroup>
                </div>

                <div>
                  <PanelGroup accordion id="accordion-example">
                    <Panel eventKey="1">
                      <Panel.Heading>
                        <Panel.Title toggle>Collapsible Group Item #1</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                        haven't heard of them accusamus labore sustainable VHS.
                      </Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                      <Panel.Heading>
                        <Panel.Title toggle>Collapsible Group Item #2</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                        haven't heard of them accusamus labore sustainable VHS.
                      </Panel.Body>
                    </Panel>
                    <Panel eventKey="3">
                      <Panel.Heading>
                        <Panel.Title toggle>Collapsible Group Item #3</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                        haven't heard of them accusamus labore sustainable VHS.
                      </Panel.Body>
                    </Panel>
                  </PanelGroup>
                </div>

                <div style={style}>
                  <div className='static-modal'>
                    <Modal.Dialog
                      onHide={this.callback}
                      onEnter={this.callback}
                      onEntered={this.callback}
                      onEntering={this.callback}
                      onExit={this.callback}
                      onExited={this.callback}
                      onExiting={this.callback}
                    >
                      <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                      </Modal.Header>

                      <Modal.Body bsClass="custom-class">
                        One fine body...
                      </Modal.Body>

                      <Modal.Footer>
                        <Button>Close</Button>
                        <Button bsStyle='primary'>Save changes</Button>
                      </Modal.Footer>
                    </Modal.Dialog>
                  </div>
                </div>

                <div style={style}>
                    <Modal show={false} onHide={() => ({})} style={style}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body bsClass="custom-class">
                            <h4>Text in a modal</h4>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                            <h4>Popover in a modal</h4>
                            <p>there is a <OverlayTrigger overlay={null}><a href="#">popover</a></OverlayTrigger> here</p>

                            <h4>Tooltips in a modal</h4>
                            <p>there is a <OverlayTrigger overlay={null}><a href="#">tooltip</a></OverlayTrigger> here</p>

                            <hr />

                            <h4>Overflowing text to show scroll behavior</h4>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => ({})}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div style={style} className="static-tooltip">
                  <div>
                    <Tooltip placement="right" className="in">
                      Tooltip right
                    </Tooltip>

                    <Tooltip placement="top" className="in">
                      Tooltip top
                    </Tooltip>

                    <Tooltip placement="left" className="in">
                      Tooltip left
                    </Tooltip>

                    <Tooltip placement="bottom" className="in">
                      Tooltip bottom
                    </Tooltip>
                  </div>
                </div>

                <div style={style}>
                    <Overlay>Overlay</Overlay>
                </div>

                <div style={style}>
                  <ButtonToolbar>
                    <OverlayTrigger placement='left' overlay={tooltip}>
                      <Button bsStyle='default'>Holy guacamole!</Button>
                    </OverlayTrigger>

                    <OverlayTrigger placement='top' overlay={tooltip}>
                      <Button bsStyle='default'>Holy guacamole!</Button>
                    </OverlayTrigger>

                    <OverlayTrigger placement='bottom' overlay={tooltip}>
                      <Button bsStyle='default'>Holy guacamole!</Button>
                    </OverlayTrigger>

                    <OverlayTrigger placement='right' overlay={tooltip}>
                      <Button bsStyle='default'>Holy guacamole!</Button>
                    </OverlayTrigger>
                  </ButtonToolbar>
                </div>

                <div style={style}>
                  <div style={{ height: 120, position: 'relative' }}>
                    <Popover placement='right' positionLeft={200} positionTop={50} title='Popover right'>
                      And here's some <strong>amazing</strong> content. It's very engaging. right?
                    </Popover>
                  </div>
                </div>

                <div style={style}>
                  <ButtonToolbar>
                    <OverlayTrigger trigger='click' placement='left' overlay={<Popover title='Popover left'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
                      <Button bsStyle='default'>Holy guacamole!</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger='click' placement='top' overlay={<Popover title='Popover top'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
                      <Button bsStyle='default'>Holy guacamole!</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger='click' placement='bottom' overlay={<Popover title='Popover bottom'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
                      <Button bsStyle='default'>Holy guacamole!</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger='click' placement='right' overlay={<Popover title='Popover right'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
                      <Button bsStyle='default'>Holy guacamole!</Button>
                    </OverlayTrigger>
                  </ButtonToolbar>
                </div>

                <div style={style}>
                  <ButtonToolbar>
                    <OverlayTrigger trigger='click' placement='bottom' overlay={<Popover title='Popover bottom'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
                      <Button bsStyle='default'>Click</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger='hover' placement='bottom' overlay={<Popover title='Popover bottom'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
                      <Button bsStyle='default'>Hover</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger='focus' placement='bottom' overlay={<Popover title='Popover bottom'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
                      <Button bsStyle='default'>Focus</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger={['click', 'hover', 'focus']} placement='bottom' overlay={<Popover title='Popover bottom'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
                      <Button bsStyle='default'>Click or hover or focus</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger='click' rootClose placement='bottom' overlay={<Popover title='Popover bottom'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
                      <Button bsStyle='default'>Click + rootClose</Button>
                    </OverlayTrigger>
                  </ButtonToolbar>
                </div>

                <div style={style}>
                  <ProgressBar now={60} />
                </div>

                <div style={style}>
                  <ProgressBar now={60} label='%(percent)s%' />
                </div>

                <div style={style}>
                  <div>
                    <ProgressBar bsStyle='success' now={40} />
                    <ProgressBar bsStyle='info' now={20} />
                    <ProgressBar bsStyle='warning' now={60} />
                    <ProgressBar bsStyle='danger' now={80} />
                  </div>
                </div>

                <div style={style}>
                  <div>
                    <ProgressBar striped bsStyle='success' now={40} />
                    <ProgressBar striped bsStyle='info' now={20} />
                    <ProgressBar striped bsStyle='warning' now={60} />
                    <ProgressBar striped bsStyle='danger' now={80} />
                  </div>
                </div>

                <div style={style}>
                  <ProgressBar active now={45} />
                </div>

                <div style={style}>
                  <ProgressBar>
                    <ProgressBar striped bsStyle='success' now={35} key={1} />
                    <ProgressBar bsStyle='warning' now={20} key={2} />
                    <ProgressBar active bsStyle='danger' now={10} key={3} />
                  </ProgressBar>
                </div>

                <div style={style}>
                  <Nav bsStyle='pills' activeKey={1} onSelect={this.callback}>
                    <NavItem eventKey={1} href='/home'>NavItem 1 content</NavItem>
                    <NavItem eventKey={2} title='Item'>NavItem 2 content</NavItem>
                    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
                  </Nav>
                </div>

                <div style={style}>
                  <Nav bsStyle='pills' stacked activeKey={1} onSelect={this.callback}>
                    <NavItem eventKey={1} href='/home'>NavItem 1 content</NavItem>
                    <NavItem eventKey={2} title='Item'>NavItem 2 content</NavItem>
                    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
                  </Nav>
                </div>

                <div style={style}>
                  <div>
                    <Nav bsStyle='tabs' justified activeKey={1} onSelect={this.callback}>
                      <NavItem eventKey={1} href='/home'>NavItem 1 content</NavItem>
                      <NavItem eventKey={2} title='Item'>NavItem 2 content</NavItem>
                      <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
                    </Nav>
                    <br />
                    <Nav bsStyle='pills' justified activeKey={1} onSelect={this.callback}>
                      <NavItem eventKey={1} href='/home'>NavItem 1 content</NavItem>
                      <NavItem eventKey={2} title='Item'>NavItem 2 content</NavItem>
                      <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
                    </Nav>
                  </div>
                </div>

                <div style={style}>
                  <Navbar brand='React-Bootstrap'>
                    <Navbar.Header>
                      <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                      </Navbar.Brand>
                      <Navbar.Toggle onClick={ () => {} } />
                    </Navbar.Header>
                    <Navbar.Collapse>
                      <Nav>
                        <NavItem eventKey={1} href='#'>Link</NavItem>
                        <NavItem eventKey={2} href='#'>Link</NavItem>
                        <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
                          <MenuItem eventKey='1'>Action</MenuItem>
                          <MenuItem eventKey='2'>Another action</MenuItem>
                          <MenuItem eventKey='3'>Something else here</MenuItem>
                          <MenuItem divider />
                          <MenuItem eventKey='4'>Separated link</MenuItem>
                        </NavDropdown>
                      </Nav>
                      <Navbar.Text>
                          Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
                      </Navbar.Text>
                      <Navbar.Form pullRight>
                        <FormGroup>
                          <FormControl type='text' placeholder='Search' />
                        </FormGroup>
                        {' '}
                        <Button type='submit'>Submit</Button>
                      </Navbar.Form>
                      <Navbar.Text pullRight>
                          Have a great day!
                      </Navbar.Text>
                    </Navbar.Collapse>
                  </Navbar>
                </div>

                <div style={style}>
                  <Navbar brand='React-Bootstrap' inverse toggleNavKey={0}>
                    <Nav right eventKey={0}> {/* This is the eventKey referenced */}
                      <NavItem eventKey={1} href='#'>Link</NavItem>
                      <NavItem eventKey={2} href='#'>Link</NavItem>
                    </Nav>
                  </Navbar>
                </div>

                <div style={style}>
                  <Pager>
                        <Pager.Item href="#">Previous</Pager.Item>
                        {' '}
                        <Pager.Item href="#">Next</Pager.Item>
                    </Pager>
                </div>

                <div style={style}>
                    <Pager>
                        <Pager.Item previous href="#">&larr; Previous Page</Pager.Item>
                        <Pager.Item next href="#">Next Page &rarr;</Pager.Item>
                    </Pager>
                </div>

                <div style={style}>
                    <Pager>
                        <Pager.Item previous href="#">&larr; Previous</Pager.Item>
                        <Pager.Item disabled next href="#">Next &rarr;</Pager.Item>
                  </Pager>
                </div>

                <div style={style}>
                  <Tabs defaultActiveKey={1} animation={false}>
                    <Tab eventKey={1} title='Tab 1'>Tab 1 content</Tab>
                    <Tab eventKey={2} title='Tab 2'>Tab 2 content</Tab>
                    <Tab eventKey={3} title='Tab 3' disabled>Tab 3 content</Tab>
                  </Tabs>
                </div>

                <div style={style}>
                  <Tabs defaultActiveKey={1} animation={true}>
                    <Tab animation={true}
                     onEntered={() => {}}
                     onEntering={() => {}}
                     onExit={() => {}}
                     onExited={() => {}}
                     onExiting={() => {}}
                     unmountOnExit={true}
                     bsClass="some style" tabClassName="classname"  eventKey={1} title='Tab 1'>Tab 1 content</Tab>
                    <Tab eventKey={2} title='Tab 2'>Tab 2 content</Tab>
                    <Tab eventKey={3} title='Tab 3' disabled>Tab 3 content</Tab>
                  </Tabs>
                </div>

                <div style={style}>
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className="clearfix">
                      <Col sm={4}>
                        <Nav bsStyle="pills" stacked>
                          <NavItem eventKey="first">
                            Tab 1
                          </NavItem>
                          <NavItem eventKey="second">
                            Tab 2
                          </NavItem>
                        </Nav>
                      </Col>
                      <Col sm={8}>
                        <Tab.Content animation>
                          <Tab.Pane eventKey="first">
                            Tab 1 content
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            Tab 2 content
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </div>

                <div style={style}>
                  <Pager>
                    <PageItem href='#'>Previous</PageItem>
                    <PageItem href='#'>Next</PageItem>
                  </Pager>
                </div>

                <div style={style}>
                  <Pager>
                    <PageItem previous href='#'>&larr; Previous Page</PageItem>
                    <PageItem next href='#'>Next Page &rarr;</PageItem>
                  </Pager>
                </div>

                <div style={style}>
                  <Pager>
                    <PageItem previous href='#'>&larr; Previous</PageItem>
                    <PageItem disabled next href='#'>Next &rarr;</PageItem>
                  </Pager>
                </div>

                <div style={style}>
                  <div>
                    <Pagination bsSize="large">{null}</Pagination>
                    <br />
                    <Pagination>
                      <Pagination.First />
                      <Pagination.Prev />
                      <Pagination.Item>{1}</Pagination.Item>
                      <Pagination.Ellipsis />

                      <Pagination.Item>{10}</Pagination.Item>
                      <Pagination.Item>{11}</Pagination.Item>
                      <Pagination.Item active>{12}</Pagination.Item>
                      <Pagination.Item>{13}</Pagination.Item>
                      <Pagination.Item disabled>{14}</Pagination.Item>

                      <Pagination.Ellipsis />
                      <Pagination.Item>{20}</Pagination.Item>
                      <Pagination.Next />
                      <Pagination.Last />
                    </Pagination>
                  </div>
                </div>

                <div style={style}>
                  <Alert bsStyle='warning'>
                    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
                  </Alert>
                </div>

                <div style={style}>
                  <Carousel>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
                            <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
                            <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
                            <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                      </Carousel.Item>
                  </Carousel>
                </div>

                <div style={style}>
                  <Grid>
                    <Row className='show-grid'>
                      <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
                      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                    </Row>

                    <Row className='show-grid'>
                      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                    </Row>

                    <Row className='show-grid'>
                      <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
                    </Row>

                    <Row className='show-grid'>
                      <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
                      <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
                    </Row>
                  </Grid>
                </div>

                <div style={style}>
                  <Grid>
                    <Row>
                    <Col xs={6} md={3}>
                      <Thumbnail href='#' alt='171x180' src='thumbnail.png' />
                    </Col>
                    <Col xs={6} md={3}>
                      <Thumbnail href='#' alt='171x180' src='thumbnail.png' />
                    </Col>
                    <Col xs={6} md={3}>
                      <Thumbnail href='#' alt='171x180' src='thumbnail.png' />
                    </Col>
                    </Row>
                  </Grid>
                </div>

                <div style={style}>
                  <ListGroup>
                    <ListGroupItem>Item 1</ListGroupItem>
                    <ListGroupItem>Item 2</ListGroupItem>
                    <ListGroupItem>...</ListGroupItem>
                  </ListGroup>
                </div>

                <div style={style}>
                  <ListGroup>
                    <ListGroupItem href='#link1'>Link 1</ListGroupItem>
                    <ListGroupItem href='#link2'>Link 2</ListGroupItem>
                    <ListGroupItem onClick={this.callback}>
                      Trigger an alert
                    </ListGroupItem>
                  </ListGroup>
                </div>

                <div style={style}>
                  <ListGroup>
                    <ListGroupItem href='#' active>Link 1</ListGroupItem>
                    <ListGroupItem href='#'>Link 2</ListGroupItem>
                    <ListGroupItem href='#' disabled>Link 3</ListGroupItem>
                  </ListGroup>
                </div>

                <div style={style}>
                  <ListGroup>
                    <ListGroupItem bsStyle='success'>Success</ListGroupItem>
                    <ListGroupItem bsStyle='info'>Info</ListGroupItem>
                    <ListGroupItem bsStyle='warning'>Warning</ListGroupItem>
                    <ListGroupItem bsStyle='danger'>Danger</ListGroupItem>
                  </ListGroup>
                </div>

                <div style={style}>
                  <ListGroup>
                    <ListGroupItem header='Heading 1'>Some body text</ListGroupItem>
                    <ListGroupItem header='Heading 2' href='#'>Linked item</ListGroupItem>
                    <ListGroupItem header='Heading 3' bsStyle='danger'>Danger styling</ListGroupItem>
                  </ListGroup>
                </div>

                <div style={style}>
                  <div>
                    <h1>Label <Label>New</Label></h1>
                    <h2>Label <Label>New</Label></h2>
                    <h3>Label <Label>New</Label></h3>
                    <h4>Label <Label>New</Label></h4>
                    <h5>Label <Label>New</Label></h5>
                    <p>Label <Label>New</Label></p>
                  </div>
                </div>

                <div style={style}>
                  <div>
                    <Label bsStyle='default'>Default</Label>&nbsp;
                    <Label bsStyle='primary'>Primary</Label>&nbsp;
                    <Label bsStyle='success'>Success</Label>&nbsp;
                    <Label bsStyle='info'>Info</Label>&nbsp;
                    <Label bsStyle='warning'>Warning</Label>&nbsp;
                    <Label bsStyle='danger'>Danger</Label>
                  </div>
                </div>

                <div style={style}>
                  <p>Badges <Badge>42</Badge></p>
                </div>

                <div style={style}>
                  <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p><Button bsStyle='primary'>Learn more</Button></p>
                  </Jumbotron>
                </div>

                <div style={style}>
                    <Image src="https://placeholdit.imgix.net/~text?txtsize=33&txt=AUDIO&w=150&h=150" rounded />
                </div>

                <div style={style}>
                  <div>
                    <ResponsiveEmbed a16by9>
                      Embedded Content
                    </ResponsiveEmbed>
                    <ResponsiveEmbed a4by3>
                      Embedded Content
                    </ResponsiveEmbed>
                    <ResponsiveEmbed bsClass='embed-responsive'>
                      Embedded Content
                    </ResponsiveEmbed>
                  </div>
                </div>

                <div style={style}>
                  <PageHeader>Example page header <small>Subtext for header</small></PageHeader>
                </div>

                <div style={style}>
                    <Well>Look I'm in a well!</Well>
                </div>

                <div style={style}>
                  <div>
                    <Well bsSize='large'>Look I'm in a large well!</Well>
                    <Well bsSize='small'>Look I'm in a small well!</Well>
                  </div>
                </div>

                <div style={style}>
                  <div>
                    <ButtonToolbar>
                      <ButtonGroup>
                        <Button><Glyphicon glyph='align-left' /></Button>
                        <Button><Glyphicon glyph='align-center' /></Button>
                        <Button><Glyphicon glyph='align-right' /></Button>
                        <Button><Glyphicon glyph='align-justify' /></Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                    <ButtonToolbar>
                      <ButtonGroup>
                        <Button bsSize='large'><Glyphicon glyph='star' /> Star</Button>
                        <Button><Glyphicon glyph='star' /> Star</Button>
                        <Button bsSize='small'><Glyphicon glyph='star' /> Star</Button>
                        <Button bsSize='xsmall'><Glyphicon glyph='star' /> Star</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </div>
                </div>

                <div style={style}>
                  <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div style={style}>
                <Table responsive>
                    <thead>
                      <tr>
                        <th>Number</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div style={style}>
                    <FormGroup validationState="success">
                        <ControlLabel>Working example with validation</ControlLabel>
                        <FormControl type='text'
                         value="hello"
                         placeholder='Enter text'
                         ref='input'
                         onChange={this.callback} />
                        <FormControl.Feedback/>
                        <HelpBlock>Validation is based on string length.</HelpBlock>
                    </FormGroup>
                </div>

                <div style={style}>
                  <form>
                        <FormGroup>
                            <ControlLabel>Text</ControlLabel>
                            <FormControl type="text" placeholder="Enter text"/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Email address</ControlLabel>
                            <FormControl type="email" placeholder="Enter email"/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Pass</ControlLabel>
                            <FormControl type="password" placeholder="Password"/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>File</ControlLabel>
                            <FormControl type="file"/>
                            <HelpBlock>[Optional] Block level help text</HelpBlock>
                        </FormGroup>
                        <Checkbox checked readOnly>
                            Checkbox
                        </Checkbox>
                        <Radio checked readOnly>
                            Radio
                        </Radio>
                        <FormGroup>
                            <ControlLabel>Select</ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                      <option value='select'>select</option>
                      <option value='other'>...</option>
                            </FormControl>
                        </FormGroup>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Textarea</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="textarea" />
                        </FormGroup>
                  </form>
                </div>

                <div style={style}>
                  <form>
                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Addon>@</InputGroup.Addon>
                                <FormControl type="text" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <FormControl type="text" />
                                <InputGroup.Addon>.00</InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Addon>$</InputGroup.Addon>
                                <FormControl type="text" />
                                <InputGroup.Addon>.00</InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>

                        <FormGroup>
                            <InputGroup>
                                <FormControl type="text" />
                                <InputGroup.Addon>
                                    <Glyphicon glyph="music" />
                                </InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>

                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Button>
                                    <Button>Before</Button>
                                </InputGroup.Button>
                                <FormControl type="text" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <FormControl type="text" />
                                <DropdownButton
                                  componentClass={InputGroup.Button}
                                  id="input-dropdown-addon"
                                  title="Action"
                                >
                                    <MenuItem key="1">Item</MenuItem>
                                </DropdownButton>
                            </InputGroup>
                        </FormGroup>

                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Addon>
                                    <input type="radio" aria-label="..." />
                                </InputGroup.Addon>
                                <FormControl type="text" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Addon>
                                    <input type="checkbox" aria-label="..." />
                                </InputGroup.Addon>
                                <FormControl type="text" />
                            </InputGroup>
                        </FormGroup>
                  </form>
                </div>

                <div style={style}>
                  <form>
                        <FormGroup bsSize="large">
                            <FormControl type="text" placeholder="Large text" />
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Normal text" />
                        </FormGroup>
                        <FormGroup bsSize="small">
                            <FormControl type="text" placeholder="Small text" />
                        </FormGroup>
                  </form>
                </div>

                <div style={style}>
                  <form>
                        <FormGroup controlId="formValidationSuccess1" validationState="success">
                            <ControlLabel>Input with success</ControlLabel>
                            <FormControl type="text" />
                            <HelpBlock>Help text with validation state.</HelpBlock>
                        </FormGroup>

                        <FormGroup controlId="formValidationWarning1" validationState="warning">
                            <ControlLabel>Input with warning</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>

                        <FormGroup controlId="formValidationError1" validationState="error">
                            <ControlLabel>Input with error</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>

                        <FormGroup controlId="formValidationSuccess2" validationState="success">
                            <ControlLabel>Input with success and feedback icon</ControlLabel>
                            <FormControl type="text" />
                            <FormControl.Feedback />
                        </FormGroup>

                        <FormGroup controlId="formValidationWarning2" validationState="warning">
                            <ControlLabel>Input with warning and feedback icon</ControlLabel>
                            <FormControl type="text" />
                            <FormControl.Feedback />
                        </FormGroup>

                        <FormGroup controlId="formValidationError2" validationState="error">
                            <ControlLabel>Input with error and feedback icon</ControlLabel>
                            <FormControl type="text" />
                            <FormControl.Feedback />
                        </FormGroup>

                        <FormGroup controlId="formValidationSuccess3" validationState="success">
                            <ControlLabel>Input with success and custom feedback icon</ControlLabel>
                            <FormControl type="text" />
                            <FormControl.Feedback>
                                <Glyphicon glyph="music" />
                            </FormControl.Feedback>
                        </FormGroup>

                        <FormGroup controlId="formValidationWarning3" validationState="warning">
                            <ControlLabel>Input group with warning</ControlLabel>
                            <InputGroup>
                                <InputGroup.Addon>@</InputGroup.Addon>
                                <FormControl type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                        </FormGroup>

                        <Form componentClass="fieldset" horizontal>
                            <FormGroup controlId="formValidationError3" validationState="error">
                                <Col componentClass={ControlLabel} xs={3}>
                                    Input with error
                      </Col>
                                <Col xs={9}>
                                    <FormControl type="text" />
                                    <FormControl.Feedback />
                      </Col>
                            </FormGroup>

                            <FormGroup controlId="formValidationSuccess4" validationState="success">
                                <Col componentClass={ControlLabel} xs={3}>
                                    Input group with success
                                </Col>
                                <Col xs={9}>
                                    <InputGroup>
                                        <InputGroup.Addon>@</InputGroup.Addon>
                                        <FormControl type="text" />
                                    </InputGroup>
                                    <FormControl.Feedback />
                                </Col>
                            </FormGroup>
                        </Form>

                        <Form componentClass="fieldset" inline>
                            <FormGroup controlId="formValidationWarning4" validationState="warning">
                                <ControlLabel>Input with warning</ControlLabel>
                                {' '}
                                <FormControl type="text" />
                                <FormControl.Feedback />
                            </FormGroup>
                            {' '}
                            <FormGroup controlId="formValidationError4" validationState="error">
                                <ControlLabel>Input group with error</ControlLabel>
                                {' '}
                                <InputGroup>
                                    <InputGroup.Addon>@</InputGroup.Addon>
                                    <FormControl type="text" />
                                </InputGroup>
                                <FormControl.Feedback />
                            </FormGroup>
                        </Form>

                        <Checkbox validationState="success">
                            Checkbox with success
                        </Checkbox>
                        <Radio validationState="warning">
                            Radio with warning
                        </Radio>
                        <Checkbox validationState="error">
                            Checkbox with error
                        </Checkbox>

                        {/* This requires React 15's <span>-less spaces to be exactly correct. */}
                        <FormGroup validationState="success">
                            <Checkbox inline>
                                Checkbox
                            </Checkbox>
                            {' '}
                            <Checkbox inline>
                                with
                            </Checkbox>
                            {' '}
                            <Checkbox inline>
                                success
                            </Checkbox>
                        </FormGroup>
                    </form>
                </div>

                <div style={style}>
                  <Form>
                        <FormGroup controlId="formBasicText">
                      <ControlLabel>Control Label</ControlLabel>
                            <FormControl type="text" placeholder="Enter text" />
                      <FormControl.Feedback />
                      <HelpBlock>Help block message.</HelpBlock>
                    </FormGroup>

                    <FormGroup>
                      <Checkbox name="checkbox" inline>1</Checkbox>
                      {' '}
                      <Checkbox name="checkbox" inline>2</Checkbox>
                      {' '}
                      <Checkbox name="checkbox" inline>3</Checkbox>
                    </FormGroup>
                    <FormGroup>
                      <Radio name="radio" inline>1</Radio>
                      {' '}
                      <Radio name="radio" inline>2</Radio>
                      {' '}
                      <Radio name="radio" inline>3</Radio>
                    </FormGroup>
                  </Form>
                </div>

               <div style={style}>
                <Media>
                  <Media.Left align="top">
                    <img width={64} height={64} src="https://placeholdit.imgix.net/~text?txtsize=33&txt=AUDIO&w=150&h=150" alt="Image"/>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>Top aligned media</Media.Heading>
                    <p>Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </Media.Body>
                </Media>
              </div>

              <div>
                <ButtonToolbar>
                  <ToggleButtonGroup
                    type="checkbox"
                    defaultValue={[1, 3]}
                    bsSize="small"
                  >
                    <ToggleButton value={1} bsSize="small" active>
                      Checkbox 1 (pre-checked)
                    </ToggleButton>
                    <ToggleButton value={2}>
                      Checkbox 2
                    </ToggleButton>
                    <ToggleButton value={3}>
                      Checkbox 3 (pre-checked)
                    </ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>

                <ButtonToolbar>
                  <ToggleButtonGroup
                    type="radio"
                    name="options"
                    defaultValue={1}
                  >
                    <ToggleButton
                      value={1}
                      bsSize="large"
                    >
                      Radio 1 (pre-checked)
                    </ToggleButton>
                    <ToggleButton
                      value={2}
                      bsSize="small"
                    >
                      Radio 2
                    </ToggleButton>
                    <ToggleButton
                      value={3}
                      bsSize="xsmall"
                    >
                      Radio 3
                    </ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </div>

              <div style={style}>
                <Collapse>Collapse</Collapse>
              </div>
            </div>
        );
    }
}
