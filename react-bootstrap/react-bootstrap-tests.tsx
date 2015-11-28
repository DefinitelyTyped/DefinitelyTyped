// React-Bootstrap Test
// ================================================================================
///<reference path="react-bootstrap.d.ts"/>
///<reference path="../react/react.d.ts"/>

// Imports
// --------------------------------------------------------------------------------
import * as React from 'react';
import { Component, CSSProperties } from 'react';
import { Button, ButtonToolbar, Modal, Well, ButtonGroup, DropdownButton, MenuItem, Panel, ListGroup, ListGroupItem, Accordion, Tooltip, OverlayTrigger, Popover, ProgressBar, Nav, NavItem, Navbar, NavDropdown, Tabs, Tab, Pager, PageItem, Pagination, Alert, Carousel, CarouselItem, Grid, Row, Col, Thumbnail, Label, Badge, Jumbotron, PageHeader, Glyphicon, Table, Input, ButtonInput } from 'react-bootstrap';


export class ReactBootstrapTest extends Component<any, any> {
    callback() {
        alert('Callback: ' + JSON.stringify(arguments));
    }

    public render() {
        let style: CSSProperties = { padding: '50px' };
        let tooltip = (<Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>);

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


                <div style={style as CSSProperties}>
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
                  <DropdownButton bsStyle={'default'} title={'hello'} key={0} id={0}>
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
                        Basic panel example
                    </Panel>
                </div>

                <div style={style}>
                  <div>
                    <Panel header='Panel heading without title'>
                      Panel content
                    </Panel>
                    <Panel header='Header'>
                      Panel content
                    </Panel>
                  </div>
                </div>

                <div style={style}>
                  <Panel footer='Panel footer'>
                    Panel content
                  </Panel>
                </div>

                <div style={style}>
                  <div>
                    <Panel header='Header'>
                      Panel content
                    </Panel>

                    <Panel header='Header' bsStyle='primary'>
                      Panel content
                    </Panel>

                    <Panel header='Header' bsStyle='success'>
                      Panel content
                    </Panel>

                    <Panel header='Header' bsStyle='info'>
                      Panel content
                    </Panel>

                    <Panel header='Header' bsStyle='warning'>
                      Panel content
                    </Panel>

                    <Panel header='Header' bsStyle='danger'>
                      Panel content
                    </Panel>
                  </div>
                </div>

                <div style={style}>
                  <Panel collapsible defaultExpanded header='Panel heading'>
                    Some default panel content here.
                    <ListGroup fill>
                      <ListGroupItem>Item 1</ListGroupItem>
                      <ListGroupItem>Item 2</ListGroupItem>
                      <ListGroupItem>&hellip;</ListGroupItem>
                    </ListGroup>
                    Some more panel content here.
                  </Panel>
                </div>

                <div style={style}>
                  <Accordion>
                    <Panel header='Collapsible Group Item #1' eventKey='1'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </Panel>
                    <Panel header='Collapsible Group Item #2' eventKey='2'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </Panel>
                    <Panel header='Collapsible Group Item #3' eventKey='3'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </Panel>
                  </Accordion>
                </div>

                <div style={style}>
                  <div className='static-modal'>
                    <Modal.Dialog>
                      <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        One fine body...
                      </Modal.Body>

                      <Modal.Footer>
                        <Button>Close</Button>
                        <Button bsStyle='primary'>Save changes</Button>
                      </Modal.Footer>

                    </Modal.Dialog>
                  </div>
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
                  <div style={{ height: 120, position: 'relative' } as CSSProperties}>
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
                    <PageItem href='#'>Previous</PageItem>
                    <PageItem href='#'>Next</PageItem>
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
                    <Pagination
                      bsSize='large'
                      items={10}
                      activePage={1}
                      onSelect={this.callback} />
                    <br />
                    <Pagination
                      bsSize='medium'
                      items={10}
                      activePage={1}
                      onSelect={this.callback} />
                    <br />

                    <Pagination
                      bsSize='small'
                      items={10}
                      activePage={1}
                      onSelect={this.callback} />
                  </div>
                </div>

                <div style={style}>
                  <Alert bsStyle='warning'>
                    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
                  </Alert>
                </div>

                <div style={style}>
                  <Carousel>
                    <CarouselItem>
                      <img width={900} height={500} alt='900x500' src='carousel.png'/>
                      <div className='carousel-caption'>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <img width={900} height={500} alt='900x500' src='carousel.png'/>
                      <div className='carousel-caption'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <img width={900} height={500} alt='900x500' src='carousel.png'/>
                      <div className='carousel-caption'>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </div>
                    </CarouselItem>
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
                  <Input type='text'
                         value="hello"
                         placeholder='Enter text'
                         label='Working example with validation'
                         help='Validation is based on string length.'
                         bsStyle="success"
                         hasFeedback
                         ref='input'
                         groupClassName='group-class'
                         labelClassName='label-class'
                         onChange={this.callback} />
                </div>

                <div style={style}>
                  <form>
                    <Input type='text' label='Text' placeholder='Enter text' />
                    <Input type='email' label='Email Address' placeholder='Enter email' />
                    <Input type='password' label='Password' />
                    <Input type='file' label='File' help='[Optional] Block level help text' />
                    <Input type='checkbox' label='Checkbox' checked readOnly />
                    <Input type='radio' label='Radio' checked readOnly />
                    <Input type='select' label='Select' placeholder='select'>
                      <option value='select'>select</option>
                      <option value='other'>...</option>
                    </Input>
                    <Input type='select' label='Multiple Select' multiple>
                      <option value='select'>select (multiple)</option>
                      <option value='other'>...</option>
                    </Input>
                    <Input type='textarea' label='Text Area' placeholder='textarea' />
                    <ButtonInput value='Button Input' />
                    <ButtonInput type='reset' value='Reset Button' />
                    <ButtonInput type='submit' value='Submit Button' />
                  </form>
                </div>

                <div style={style}>
                  <form>
                    <Input type="text" ref="input" onChange={this.callback} />
                      <ButtonInput bsSize="small">Child Text</ButtonInput>
                      <ButtonInput type="reset" bsStyle="primary" onClick={this.callback} />
                      <ButtonInput type="submit" value="Submit Your Input" bsStyle="success" bsSize="large" disabled={false} />
                    </form>
                </div>

                <div style={style}>
                  <form>
                    <Input type='text' addonBefore='@' />
                    <Input type='text' addonAfter='.00' />
                    <Input type='text' addonBefore='$' addonAfter='.00' />
                    <Input type='text' addonAfter={innerGlyphicon} />
                    <Input type='text' buttonBefore={innerButton} />
                    <Input type='text' buttonAfter={innerDropdown} />
                    <Input type='text' addonBefore={innerRadio} />
                    <Input type='text' addonBefore={innerCheckbox} />
                  </form>
                </div>

                <div style={style}>
                  <form>
                    <Input type='text' bsSize="large" placeholder='Large text' />
                    <Input type='text' bsSize="medium" placeholder='Normal text' />
                    <Input type='text' bsSize="small" placeholder='Small text' />
                  </form>
                </div>

                <div style={style}>
                  <form>
                    <Input type='text' bsStyle='success' label='Success' hasFeedback />
                    <Input type='text' bsStyle='warning' label='Warning' hasFeedback />
                    <Input type='text' bsStyle='error' label='Error' hasFeedback />
                  </form>
                </div>

                <div style={style}>
                  <form className='form-horizontal'>
                    <Input type='text' label='Text' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
                    <Input type='textarea' label='Textarea' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
                    <Input type='checkbox' label='Checkbox' wrapperClassName='col-xs-offset-2 col-xs-10' help='Offset is applied to wrapper.' />
                  </form>
                </div>

                <div style={style}>
                  <Input label='Input wrapper' help='Use this when you need something other than the available input types.' wrapperClassName='wrapper'>
                    <Row>
                      <Col xs={6}>
                        <input type='text' className='form-control' />
                      </Col>
                      <Col xs={6}>
                        <input type='text' className='form-control' />
                      </Col>
                    </Row>
                  </Input>
                </div>
            </div>
        );
    }
}
