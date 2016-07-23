// React-Bootstrap Test
// ================================================================================
///<reference path="react-bootstrap.d.ts"/>
///<reference path="../react/react.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Imports
// --------------------------------------------------------------------------------
var React = require('react');
var react_1 = require('react');
var react_bootstrap_1 = require('react-bootstrap');
var ReactBootstrapTest = (function (_super) {
    __extends(ReactBootstrapTest, _super);
    function ReactBootstrapTest() {
        _super.apply(this, arguments);
    }
    ReactBootstrapTest.prototype.callback = function () {
        alert('Callback: ' + JSON.stringify(arguments));
    };
    ReactBootstrapTest.prototype.render = function () {
        var style = { padding: '50px' };
        var tooltip = (<react_bootstrap_1.Tooltip><strong>Holy guacamole!</strong> Check this info.</react_bootstrap_1.Tooltip>);
        var innerGlyphicon = <react_bootstrap_1.Glyphicon glyph='music'/>;
        var innerButton = <react_bootstrap_1.Button>Before</react_bootstrap_1.Button>;
        var innerDropdown = (<react_bootstrap_1.DropdownButton title='Action' id='input-dropdown-addon'>
            <react_bootstrap_1.MenuItem key='1'>Item</react_bootstrap_1.MenuItem>
          </react_bootstrap_1.DropdownButton>);
        var innerRadio = <input type='radio' aria-label='...'/>;
        var innerCheckbox = <input type='checkbox' aria-label='...'/>;
        return (<div style={style}>
                <div style={style}>
                    <react_bootstrap_1.ButtonToolbar>
                        <react_bootstrap_1.Button>Default</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button bsStyle='primary'>Primary</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button bsStyle='success'>Success</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button bsStyle='info'>Info</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button bsStyle='warning'>Warning</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button bsStyle='danger'>Danger</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button bsStyle='link'>Link</react_bootstrap_1.Button>
                    </react_bootstrap_1.ButtonToolbar>
                </div>

                <div style={style}>
                    <react_bootstrap_1.ButtonToolbar>
                        <react_bootstrap_1.Button bsStyle='primary' bsSize='large'>Large button</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button bsSize='large'>Large button</react_bootstrap_1.Button>
                    </react_bootstrap_1.ButtonToolbar>
                    <react_bootstrap_1.ButtonToolbar>
                        <react_bootstrap_1.Button bsStyle='primary'>Default button</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button>Default button</react_bootstrap_1.Button>
                    </react_bootstrap_1.ButtonToolbar>
                    <react_bootstrap_1.ButtonToolbar>
                        <react_bootstrap_1.Button bsStyle='primary' bsSize='small'>Small button</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button bsSize='small'>Small button</react_bootstrap_1.Button>
                    </react_bootstrap_1.ButtonToolbar>
                    <react_bootstrap_1.ButtonToolbar>
                        <react_bootstrap_1.Button bsStyle='primary' bsSize='xsmall'>Extra small button</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button bsSize='xsmall'>Extra small button</react_bootstrap_1.Button>
                    </react_bootstrap_1.ButtonToolbar>
                </div>

                <div style={style}>
                    <react_bootstrap_1.Well>
                        <react_bootstrap_1.Button bsStyle='primary' bsSize='large' block>Block level button</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button bsSize='large' block>Block level button</react_bootstrap_1.Button>
                    </react_bootstrap_1.Well>
                </div>

                <div style={style}>
                    <react_bootstrap_1.ButtonToolbar>
                        <react_bootstrap_1.Button bsStyle='primary' bsSize='large' active>Primary button</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button bsSize='large' active>Button</react_bootstrap_1.Button>
                    </react_bootstrap_1.ButtonToolbar>
                </div>


                <div style={style}>
                    <react_bootstrap_1.ButtonToolbar>
                        <react_bootstrap_1.Button href='#'>Link</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button>Button</react_bootstrap_1.Button>
                    </react_bootstrap_1.ButtonToolbar>
                </div>


                <div style={style}>
                    <react_bootstrap_1.ButtonGroup>
                        <react_bootstrap_1.Button>Left</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button>Middle</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button>Right</react_bootstrap_1.Button>
                    </react_bootstrap_1.ButtonGroup>
                </div>


                <div style={style}>
                    <react_bootstrap_1.ButtonToolbar>
                        <react_bootstrap_1.ButtonGroup>
                            <react_bootstrap_1.Button>1</react_bootstrap_1.Button>
                            <react_bootstrap_1.Button>2</react_bootstrap_1.Button>
                            <react_bootstrap_1.Button>3</react_bootstrap_1.Button>
                            <react_bootstrap_1.Button>4</react_bootstrap_1.Button>
                        </react_bootstrap_1.ButtonGroup>
                        <react_bootstrap_1.ButtonGroup>
                            <react_bootstrap_1.Button>5</react_bootstrap_1.Button>
                            <react_bootstrap_1.Button>6</react_bootstrap_1.Button>
                            <react_bootstrap_1.Button>7</react_bootstrap_1.Button>
                        </react_bootstrap_1.ButtonGroup>
                        <react_bootstrap_1.ButtonGroup>
                            <react_bootstrap_1.Button>8</react_bootstrap_1.Button>
                        </react_bootstrap_1.ButtonGroup>
                    </react_bootstrap_1.ButtonToolbar>
                </div>
        // TODO: Start here
        

                // TODO: Start here

                <div style={style}>
                  <react_bootstrap_1.ButtonToolbar>
                      <react_bootstrap_1.ButtonGroup bsSize='large'>
                        <react_bootstrap_1.Button>Left</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button>Middle</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button>Right</react_bootstrap_1.Button>
                      </react_bootstrap_1.ButtonGroup>
                    </react_bootstrap_1.ButtonToolbar>

                    <react_bootstrap_1.ButtonToolbar>
                      <react_bootstrap_1.ButtonGroup>
                        <react_bootstrap_1.Button>Left</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button>Middle</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button>Right</react_bootstrap_1.Button>
                      </react_bootstrap_1.ButtonGroup>
                    </react_bootstrap_1.ButtonToolbar>

                    <react_bootstrap_1.ButtonToolbar>
                      <react_bootstrap_1.ButtonGroup bsSize='small'>
                        <react_bootstrap_1.Button>Left</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button>Middle</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button>Right</react_bootstrap_1.Button>
                      </react_bootstrap_1.ButtonGroup>
                    </react_bootstrap_1.ButtonToolbar>

                    <react_bootstrap_1.ButtonToolbar>
                      <react_bootstrap_1.ButtonGroup bsSize='xsmall'>
                        <react_bootstrap_1.Button>Left</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button>Middle</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button>Right</react_bootstrap_1.Button>
                      </react_bootstrap_1.ButtonGroup>
                    </react_bootstrap_1.ButtonToolbar>
                </div>

                <div style={style}>
                  <react_bootstrap_1.ButtonGroup vertical>
                    <react_bootstrap_1.Button>Button</react_bootstrap_1.Button>
                    <react_bootstrap_1.Button>Button</react_bootstrap_1.Button>
                    <react_bootstrap_1.DropdownButton title='Dropdown' id='bg-vertical-dropdown-1'>
                      <react_bootstrap_1.MenuItem eventKey='1'>Dropdown link</react_bootstrap_1.MenuItem>
                      <react_bootstrap_1.MenuItem eventKey='2'>Dropdown link</react_bootstrap_1.MenuItem>
                    </react_bootstrap_1.DropdownButton>
                    <react_bootstrap_1.Button>Button</react_bootstrap_1.Button>
                    <react_bootstrap_1.Button>Button</react_bootstrap_1.Button>
                    <react_bootstrap_1.DropdownButton title='Dropdown' id='bg-vertical-dropdown-2'>
                      <react_bootstrap_1.MenuItem eventKey='1'>Dropdown link</react_bootstrap_1.MenuItem>
                      <react_bootstrap_1.MenuItem eventKey='2'>Dropdown link</react_bootstrap_1.MenuItem>
                    </react_bootstrap_1.DropdownButton>
                    <react_bootstrap_1.DropdownButton title='Dropdown' id='bg-vertical-dropdown-3'>
                      <react_bootstrap_1.MenuItem eventKey='1'>Dropdown link</react_bootstrap_1.MenuItem>
                      <react_bootstrap_1.MenuItem eventKey='2'>Dropdown link</react_bootstrap_1.MenuItem>
                    </react_bootstrap_1.DropdownButton>
                  </react_bootstrap_1.ButtonGroup>
                </div>

                <div style={style}>
                  <react_bootstrap_1.DropdownButton bsStyle={'default'} title={'hello'} key={0} id={0}>
                    <react_bootstrap_1.MenuItem eventKey='1'>Action</react_bootstrap_1.MenuItem>
                    <react_bootstrap_1.MenuItem eventKey='2'>Another action</react_bootstrap_1.MenuItem>
                    <react_bootstrap_1.MenuItem eventKey='3' active>Active Item</react_bootstrap_1.MenuItem>
                    <react_bootstrap_1.MenuItem divider/>
                    <react_bootstrap_1.MenuItem eventKey='4'>Separated link</react_bootstrap_1.MenuItem>
                  </react_bootstrap_1.DropdownButton>
                </div>

                <div style={style}>
                  <div className="clearfix">
                    <ul className="dropdown-menu open">
                      <react_bootstrap_1.MenuItem header>Header</react_bootstrap_1.MenuItem>
                      <react_bootstrap_1.MenuItem>link</react_bootstrap_1.MenuItem>
                      <react_bootstrap_1.MenuItem divider/>
                      <react_bootstrap_1.MenuItem header>Header</react_bootstrap_1.MenuItem>
                      <react_bootstrap_1.MenuItem>link</react_bootstrap_1.MenuItem>
                      <react_bootstrap_1.MenuItem disabled>disabled</react_bootstrap_1.MenuItem>
                      <react_bootstrap_1.MenuItem title="See? I have a title.">
                        link with title
                      </react_bootstrap_1.MenuItem>
                      <react_bootstrap_1.MenuItem eventKey={1} href="#someHref" onSelect={this.callback}>
                        link that alerts
                      </react_bootstrap_1.MenuItem>
                    </ul>
                  </div>
                </div>

                <div style={style}>
                    <react_bootstrap_1.Panel onClick={this.callback}>
                        Basic panel example
                    </react_bootstrap_1.Panel>
                </div>

                <div style={style}>
                  <div>
                    <react_bootstrap_1.Panel header='Panel heading without title'>
                      Panel content
                    </react_bootstrap_1.Panel>
                    <react_bootstrap_1.Panel header='Header'>
                      Panel content
                    </react_bootstrap_1.Panel>
                  </div>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Panel footer='Panel footer'>
                    Panel content
                  </react_bootstrap_1.Panel>
                </div>

                <div style={style}>
                  <div>
                    <react_bootstrap_1.Panel header='Header'>
                      Panel content
                    </react_bootstrap_1.Panel>

                    <react_bootstrap_1.Panel header='Header' bsStyle='primary'>
                      Panel content
                    </react_bootstrap_1.Panel>

                    <react_bootstrap_1.Panel header='Header' bsStyle='success'>
                      Panel content
                    </react_bootstrap_1.Panel>

                    <react_bootstrap_1.Panel header='Header' bsStyle='info'>
                      Panel content
                    </react_bootstrap_1.Panel>

                    <react_bootstrap_1.Panel header='Header' bsStyle='warning'>
                      Panel content
                    </react_bootstrap_1.Panel>

                    <react_bootstrap_1.Panel header='Header' bsStyle='danger'>
                      Panel content
                    </react_bootstrap_1.Panel>
                  </div>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Panel collapsible defaultExpanded header='Panel heading'>
                    Some default panel content here.
                    <react_bootstrap_1.ListGroup fill>
                      <react_bootstrap_1.ListGroupItem>Item 1</react_bootstrap_1.ListGroupItem>
                      <react_bootstrap_1.ListGroupItem>Item 2</react_bootstrap_1.ListGroupItem>
                      <react_bootstrap_1.ListGroupItem>&hellip;</react_bootstrap_1.ListGroupItem>
                    </react_bootstrap_1.ListGroup>
                    Some more panel content here.
                  </react_bootstrap_1.Panel>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Accordion>
                    <react_bootstrap_1.Panel header='Collapsible Group Item #1' eventKey='1'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </react_bootstrap_1.Panel>
                    <react_bootstrap_1.Panel header='Collapsible Group Item #2' eventKey='2'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </react_bootstrap_1.Panel>
                    <react_bootstrap_1.Panel header='Collapsible Group Item #3' eventKey='3'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </react_bootstrap_1.Panel>
                  </react_bootstrap_1.Accordion>
                </div>

                <div style={style}>
                  <div className='static-modal'>
                    <react_bootstrap_1.Modal.Dialog onHide={this.callback} onEnter={this.callback} onEntered={this.callback} onEntering={this.callback} onExit={this.callback} onExited={this.callback} onExiting={this.callback}>
                      <react_bootstrap_1.Modal.Header>
                        <react_bootstrap_1.Modal.Title>Modal title</react_bootstrap_1.Modal.Title>
                      </react_bootstrap_1.Modal.Header>

                      <react_bootstrap_1.Modal.Body>
                        One fine body...
                      </react_bootstrap_1.Modal.Body>

                      <react_bootstrap_1.Modal.Footer>
                        <react_bootstrap_1.Button>Close</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button bsStyle='primary'>Save changes</react_bootstrap_1.Button>
                      </react_bootstrap_1.Modal.Footer>

                    </react_bootstrap_1.Modal.Dialog>
                  </div>
                </div>

                <div style={style} className="static-tooltip">
                  <div>
                    <react_bootstrap_1.Tooltip placement="right" className="in">
                      Tooltip right
                    </react_bootstrap_1.Tooltip>

                    <react_bootstrap_1.Tooltip placement="top" className="in">
                      Tooltip top
                    </react_bootstrap_1.Tooltip>

                    <react_bootstrap_1.Tooltip placement="left" className="in">
                      Tooltip left
                    </react_bootstrap_1.Tooltip>

                    <react_bootstrap_1.Tooltip placement="bottom" className="in">
                      Tooltip bottom
                    </react_bootstrap_1.Tooltip>
                  </div>
                </div>

                <div style={style}>
                  <react_bootstrap_1.ButtonToolbar>
                    <react_bootstrap_1.OverlayTrigger placement='left' overlay={tooltip}>
                      <react_bootstrap_1.Button bsStyle='default'>Holy guacamole!</react_bootstrap_1.Button>
                    </react_bootstrap_1.OverlayTrigger>

                    <react_bootstrap_1.OverlayTrigger placement='top' overlay={tooltip}>
                      <react_bootstrap_1.Button bsStyle='default'>Holy guacamole!</react_bootstrap_1.Button>
                    </react_bootstrap_1.OverlayTrigger>

                    <react_bootstrap_1.OverlayTrigger placement='bottom' overlay={tooltip}>
                      <react_bootstrap_1.Button bsStyle='default'>Holy guacamole!</react_bootstrap_1.Button>
                    </react_bootstrap_1.OverlayTrigger>

                    <react_bootstrap_1.OverlayTrigger placement='right' overlay={tooltip}>
                      <react_bootstrap_1.Button bsStyle='default'>Holy guacamole!</react_bootstrap_1.Button>
                    </react_bootstrap_1.OverlayTrigger>
                  </react_bootstrap_1.ButtonToolbar>
                </div>

                <div style={style}>
                  <div style={{ height: 120, position: 'relative' }}>
                    <react_bootstrap_1.Popover placement='right' positionLeft={200} positionTop={50} title='Popover right'>
                      And here's some <strong>amazing</strong> content. It's very engaging. right?
                    </react_bootstrap_1.Popover>
                  </div>
                </div>

                <div style={style}>
                  <react_bootstrap_1.ButtonToolbar>
                    <react_bootstrap_1.OverlayTrigger trigger='click' placement='left' overlay={<react_bootstrap_1.Popover title='Popover left'><strong>Holy guacamole!</strong> Check this info.</react_bootstrap_1.Popover>}>
                      <react_bootstrap_1.Button bsStyle='default'>Holy guacamole!</react_bootstrap_1.Button>
                    </react_bootstrap_1.OverlayTrigger>
                    <react_bootstrap_1.OverlayTrigger trigger='click' placement='top' overlay={<react_bootstrap_1.Popover title='Popover top'><strong>Holy guacamole!</strong> Check this info.</react_bootstrap_1.Popover>}>
                      <react_bootstrap_1.Button bsStyle='default'>Holy guacamole!</react_bootstrap_1.Button>
                    </react_bootstrap_1.OverlayTrigger>
                    <react_bootstrap_1.OverlayTrigger trigger='click' placement='bottom' overlay={<react_bootstrap_1.Popover title='Popover bottom'><strong>Holy guacamole!</strong> Check this info.</react_bootstrap_1.Popover>}>
                      <react_bootstrap_1.Button bsStyle='default'>Holy guacamole!</react_bootstrap_1.Button>
                    </react_bootstrap_1.OverlayTrigger>
                    <react_bootstrap_1.OverlayTrigger trigger='click' placement='right' overlay={<react_bootstrap_1.Popover title='Popover right'><strong>Holy guacamole!</strong> Check this info.</react_bootstrap_1.Popover>}>
                      <react_bootstrap_1.Button bsStyle='default'>Holy guacamole!</react_bootstrap_1.Button>
                    </react_bootstrap_1.OverlayTrigger>
                  </react_bootstrap_1.ButtonToolbar>
                </div>

                <div style={style}>
                  <react_bootstrap_1.ButtonToolbar>
                    <react_bootstrap_1.OverlayTrigger trigger='click' placement='bottom' overlay={<react_bootstrap_1.Popover title='Popover bottom'><strong>Holy guacamole!</strong> Check this info.</react_bootstrap_1.Popover>}>
                      <react_bootstrap_1.Button bsStyle='default'>Click</react_bootstrap_1.Button>
                    </react_bootstrap_1.OverlayTrigger>
                    <react_bootstrap_1.OverlayTrigger trigger='hover' placement='bottom' overlay={<react_bootstrap_1.Popover title='Popover bottom'><strong>Holy guacamole!</strong> Check this info.</react_bootstrap_1.Popover>}>
                      <react_bootstrap_1.Button bsStyle='default'>Hover</react_bootstrap_1.Button>
                    </react_bootstrap_1.OverlayTrigger>
                    <react_bootstrap_1.OverlayTrigger trigger='focus' placement='bottom' overlay={<react_bootstrap_1.Popover title='Popover bottom'><strong>Holy guacamole!</strong> Check this info.</react_bootstrap_1.Popover>}>
                      <react_bootstrap_1.Button bsStyle='default'>Focus</react_bootstrap_1.Button>
                    </react_bootstrap_1.OverlayTrigger>
                    <react_bootstrap_1.OverlayTrigger trigger={['click', 'hover', 'focus']} placement='bottom' overlay={<react_bootstrap_1.Popover title='Popover bottom'><strong>Holy guacamole!</strong> Check this info.</react_bootstrap_1.Popover>}>
                      <react_bootstrap_1.Button bsStyle='default'>Click or hover or focus</react_bootstrap_1.Button>
                    </react_bootstrap_1.OverlayTrigger>
                    <react_bootstrap_1.OverlayTrigger trigger='click' rootClose placement='bottom' overlay={<react_bootstrap_1.Popover title='Popover bottom'><strong>Holy guacamole!</strong> Check this info.</react_bootstrap_1.Popover>}>
                      <react_bootstrap_1.Button bsStyle='default'>Click + rootClose</react_bootstrap_1.Button>
                    </react_bootstrap_1.OverlayTrigger>
                  </react_bootstrap_1.ButtonToolbar>
                </div>

                <div style={style}>
                  <react_bootstrap_1.ProgressBar now={60}/>
                </div>

                <div style={style}>
                  <react_bootstrap_1.ProgressBar now={60} label='%(percent)s%'/>
                </div>

                <div style={style}>
                  <div>
                    <react_bootstrap_1.ProgressBar bsStyle='success' now={40}/>
                    <react_bootstrap_1.ProgressBar bsStyle='info' now={20}/>
                    <react_bootstrap_1.ProgressBar bsStyle='warning' now={60}/>
                    <react_bootstrap_1.ProgressBar bsStyle='danger' now={80}/>
                  </div>
                </div>

                <div style={style}>
                  <div>
                    <react_bootstrap_1.ProgressBar striped bsStyle='success' now={40}/>
                    <react_bootstrap_1.ProgressBar striped bsStyle='info' now={20}/>
                    <react_bootstrap_1.ProgressBar striped bsStyle='warning' now={60}/>
                    <react_bootstrap_1.ProgressBar striped bsStyle='danger' now={80}/>
                  </div>
                </div>

                <div style={style}>
                  <react_bootstrap_1.ProgressBar active now={45}/>
                </div>

                <div style={style}>
                  <react_bootstrap_1.ProgressBar>
                    <react_bootstrap_1.ProgressBar striped bsStyle='success' now={35} key={1}/>
                    <react_bootstrap_1.ProgressBar bsStyle='warning' now={20} key={2}/>
                    <react_bootstrap_1.ProgressBar active bsStyle='danger' now={10} key={3}/>
                  </react_bootstrap_1.ProgressBar>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Nav bsStyle='pills' activeKey={1} onSelect={this.callback}>
                    <react_bootstrap_1.NavItem eventKey={1} href='/home'>NavItem 1 content</react_bootstrap_1.NavItem>
                    <react_bootstrap_1.NavItem eventKey={2} title='Item'>NavItem 2 content</react_bootstrap_1.NavItem>
                    <react_bootstrap_1.NavItem eventKey={3} disabled>NavItem 3 content</react_bootstrap_1.NavItem>
                  </react_bootstrap_1.Nav>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Nav bsStyle='pills' stacked activeKey={1} onSelect={this.callback}>
                    <react_bootstrap_1.NavItem eventKey={1} href='/home'>NavItem 1 content</react_bootstrap_1.NavItem>
                    <react_bootstrap_1.NavItem eventKey={2} title='Item'>NavItem 2 content</react_bootstrap_1.NavItem>
                    <react_bootstrap_1.NavItem eventKey={3} disabled>NavItem 3 content</react_bootstrap_1.NavItem>
                  </react_bootstrap_1.Nav>
                </div>

                <div style={style}>
                  <div>
                    <react_bootstrap_1.Nav bsStyle='tabs' justified activeKey={1} onSelect={this.callback}>
                      <react_bootstrap_1.NavItem eventKey={1} href='/home'>NavItem 1 content</react_bootstrap_1.NavItem>
                      <react_bootstrap_1.NavItem eventKey={2} title='Item'>NavItem 2 content</react_bootstrap_1.NavItem>
                      <react_bootstrap_1.NavItem eventKey={3} disabled>NavItem 3 content</react_bootstrap_1.NavItem>
                    </react_bootstrap_1.Nav>
                    <br />
                    <react_bootstrap_1.Nav bsStyle='pills' justified activeKey={1} onSelect={this.callback}>
                      <react_bootstrap_1.NavItem eventKey={1} href='/home'>NavItem 1 content</react_bootstrap_1.NavItem>
                      <react_bootstrap_1.NavItem eventKey={2} title='Item'>NavItem 2 content</react_bootstrap_1.NavItem>
                      <react_bootstrap_1.NavItem eventKey={3} disabled>NavItem 3 content</react_bootstrap_1.NavItem>
                    </react_bootstrap_1.Nav>
                  </div>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Navbar brand='React-Bootstrap'>
                    <react_bootstrap_1.Navbar.Header>
                      <react_bootstrap_1.Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                      </react_bootstrap_1.Navbar.Brand>
                      <react_bootstrap_1.Navbar.Toggle />
                    </react_bootstrap_1.Navbar.Header>
                    <react_bootstrap_1.Navbar.Collapse>
                      <react_bootstrap_1.Nav>
                        <react_bootstrap_1.NavItem eventKey={1} href='#'>Link</react_bootstrap_1.NavItem>
                        <react_bootstrap_1.NavItem eventKey={2} href='#'>Link</react_bootstrap_1.NavItem>
                        <react_bootstrap_1.NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
                          <react_bootstrap_1.MenuItem eventKey='1'>Action</react_bootstrap_1.MenuItem>
                          <react_bootstrap_1.MenuItem eventKey='2'>Another action</react_bootstrap_1.MenuItem>
                          <react_bootstrap_1.MenuItem eventKey='3'>Something else here</react_bootstrap_1.MenuItem>
                          <react_bootstrap_1.MenuItem divider/>
                          <react_bootstrap_1.MenuItem eventKey='4'>Separated link</react_bootstrap_1.MenuItem>
                        </react_bootstrap_1.NavDropdown>
                      </react_bootstrap_1.Nav>
                    </react_bootstrap_1.Navbar.Collapse>
                  </react_bootstrap_1.Navbar>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Navbar brand='React-Bootstrap' inverse toggleNavKey={0}>
                    <react_bootstrap_1.Nav right eventKey={0}> 
                      <react_bootstrap_1.NavItem eventKey={1} href='#'>Link</react_bootstrap_1.NavItem>
                      <react_bootstrap_1.NavItem eventKey={2} href='#'>Link</react_bootstrap_1.NavItem>
                    </react_bootstrap_1.Nav>
                  </react_bootstrap_1.Navbar>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Pager>
                    <react_bootstrap_1.Pager.Item href='#'>Previous</react_bootstrap_1.Pager.Item>
                    <react_bootstrap_1.Pager.Item href='#'>Next</react_bootstrap_1.Pager.Item>
                  </react_bootstrap_1.Pager>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Tabs defaultActiveKey={1} animation={false}>
                    <react_bootstrap_1.Tab eventKey={1} title='Tab 1'>Tab 1 content</react_bootstrap_1.Tab>
                    <react_bootstrap_1.Tab eventKey={2} title='Tab 2'>Tab 2 content</react_bootstrap_1.Tab>
                    <react_bootstrap_1.Tab eventKey={3} title='Tab 3' disabled>Tab 3 content</react_bootstrap_1.Tab>
                  </react_bootstrap_1.Tabs>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <react_bootstrap_1.Row className="clearfix">
                      <react_bootstrap_1.Col sm={4}>
                        <react_bootstrap_1.Nav bsStyle="pills" stacked>
                          <react_bootstrap_1.NavItem eventKey="first">
                            Tab 1
                          </react_bootstrap_1.NavItem>
                          <react_bootstrap_1.NavItem eventKey="second">
                            Tab 2
                          </react_bootstrap_1.NavItem>
                        </react_bootstrap_1.Nav>
                      </react_bootstrap_1.Col>
                      <react_bootstrap_1.Col sm={8}>
                        <react_bootstrap_1.Tab.Content animation>
                          <react_bootstrap_1.Tab.Pane eventKey="first">
                            Tab 1 content
                          </react_bootstrap_1.Tab.Pane>
                          <react_bootstrap_1.Tab.Pane eventKey="second">
                            Tab 2 content
                          </react_bootstrap_1.Tab.Pane>
                        </react_bootstrap_1.Tab.Content>
                      </react_bootstrap_1.Col>
                    </react_bootstrap_1.Row>
                  </react_bootstrap_1.Tab.Container>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Pager>
                    <react_bootstrap_1.PageItem href='#'>Previous</react_bootstrap_1.PageItem>
                    <react_bootstrap_1.PageItem href='#'>Next</react_bootstrap_1.PageItem>
                  </react_bootstrap_1.Pager>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Pager>
                    <react_bootstrap_1.PageItem previous href='#'>&larr; Previous Page</react_bootstrap_1.PageItem>
                    <react_bootstrap_1.PageItem next href='#'>Next Page &rarr;</react_bootstrap_1.PageItem>
                  </react_bootstrap_1.Pager>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Pager>
                    <react_bootstrap_1.PageItem previous href='#'>&larr; Previous</react_bootstrap_1.PageItem>
                    <react_bootstrap_1.PageItem disabled next href='#'>Next &rarr;</react_bootstrap_1.PageItem>
                  </react_bootstrap_1.Pager>
                </div>

                <div style={style}>
                  <div>
                    <react_bootstrap_1.Pagination bsSize='large' items={10} activePage={1} onSelect={this.callback}/>
                    <br />
                    <react_bootstrap_1.Pagination bsSize='medium' items={10} activePage={1} onSelect={this.callback}/>
                    <br />

                    <react_bootstrap_1.Pagination bsSize='small' items={10} activePage={1} onSelect={this.callback}/>
                  </div>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Alert bsStyle='warning'>
                    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
                  </react_bootstrap_1.Alert>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Carousel>
                    <react_bootstrap_1.CarouselItem>
                      <img width={900} height={500} alt='900x500' src='carousel.png'/>
                      <div className='carousel-caption'>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </react_bootstrap_1.CarouselItem>
                    <react_bootstrap_1.CarouselItem>
                      <img width={900} height={500} alt='900x500' src='carousel.png'/>
                      <div className='carousel-caption'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </react_bootstrap_1.CarouselItem>
                    <react_bootstrap_1.CarouselItem>
                      <img width={900} height={500} alt='900x500' src='carousel.png'/>
                      <div className='carousel-caption'>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </div>
                    </react_bootstrap_1.CarouselItem>
                  </react_bootstrap_1.Carousel>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Grid>
                    <react_bootstrap_1.Row className='show-grid'>
                      <react_bootstrap_1.Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></react_bootstrap_1.Col>
                      <react_bootstrap_1.Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></react_bootstrap_1.Col>
                    </react_bootstrap_1.Row>

                    <react_bootstrap_1.Row className='show-grid'>
                      <react_bootstrap_1.Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></react_bootstrap_1.Col>
                      <react_bootstrap_1.Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></react_bootstrap_1.Col>
                      <react_bootstrap_1.Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></react_bootstrap_1.Col>
                    </react_bootstrap_1.Row>

                    <react_bootstrap_1.Row className='show-grid'>
                      <react_bootstrap_1.Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></react_bootstrap_1.Col>
                    </react_bootstrap_1.Row>

                    <react_bootstrap_1.Row className='show-grid'>
                      <react_bootstrap_1.Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></react_bootstrap_1.Col>
                      <react_bootstrap_1.Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></react_bootstrap_1.Col>
                    </react_bootstrap_1.Row>
                  </react_bootstrap_1.Grid>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Grid>
                    <react_bootstrap_1.Row>
                    <react_bootstrap_1.Col xs={6} md={3}>
                      <react_bootstrap_1.Thumbnail href='#' alt='171x180' src='thumbnail.png'/>
                    </react_bootstrap_1.Col>
                    <react_bootstrap_1.Col xs={6} md={3}>
                      <react_bootstrap_1.Thumbnail href='#' alt='171x180' src='thumbnail.png'/>
                    </react_bootstrap_1.Col>
                    <react_bootstrap_1.Col xs={6} md={3}>
                      <react_bootstrap_1.Thumbnail href='#' alt='171x180' src='thumbnail.png'/>
                    </react_bootstrap_1.Col>
                    </react_bootstrap_1.Row>
                  </react_bootstrap_1.Grid>
                </div>

                <div style={style}>
                  <react_bootstrap_1.ListGroup>
                    <react_bootstrap_1.ListGroupItem>Item 1</react_bootstrap_1.ListGroupItem>
                    <react_bootstrap_1.ListGroupItem>Item 2</react_bootstrap_1.ListGroupItem>
                    <react_bootstrap_1.ListGroupItem>...</react_bootstrap_1.ListGroupItem>
                  </react_bootstrap_1.ListGroup>
                </div>

                <div style={style}>
                  <react_bootstrap_1.ListGroup>
                    <react_bootstrap_1.ListGroupItem href='#link1'>Link 1</react_bootstrap_1.ListGroupItem>
                    <react_bootstrap_1.ListGroupItem href='#link2'>Link 2</react_bootstrap_1.ListGroupItem>
                    <react_bootstrap_1.ListGroupItem onClick={this.callback}>
                      Trigger an alert
                    </react_bootstrap_1.ListGroupItem>
                  </react_bootstrap_1.ListGroup>
                </div>

                <div style={style}>
                  <react_bootstrap_1.ListGroup>
                    <react_bootstrap_1.ListGroupItem href='#' active>Link 1</react_bootstrap_1.ListGroupItem>
                    <react_bootstrap_1.ListGroupItem href='#'>Link 2</react_bootstrap_1.ListGroupItem>
                    <react_bootstrap_1.ListGroupItem href='#' disabled>Link 3</react_bootstrap_1.ListGroupItem>
                  </react_bootstrap_1.ListGroup>
                </div>

                <div style={style}>
                  <react_bootstrap_1.ListGroup>
                    <react_bootstrap_1.ListGroupItem bsStyle='success'>Success</react_bootstrap_1.ListGroupItem>
                    <react_bootstrap_1.ListGroupItem bsStyle='info'>Info</react_bootstrap_1.ListGroupItem>
                    <react_bootstrap_1.ListGroupItem bsStyle='warning'>Warning</react_bootstrap_1.ListGroupItem>
                    <react_bootstrap_1.ListGroupItem bsStyle='danger'>Danger</react_bootstrap_1.ListGroupItem>
                  </react_bootstrap_1.ListGroup>
                </div>

                <div style={style}>
                  <react_bootstrap_1.ListGroup>
                    <react_bootstrap_1.ListGroupItem header='Heading 1'>Some body text</react_bootstrap_1.ListGroupItem>
                    <react_bootstrap_1.ListGroupItem header='Heading 2' href='#'>Linked item</react_bootstrap_1.ListGroupItem>
                    <react_bootstrap_1.ListGroupItem header='Heading 3' bsStyle='danger'>Danger styling</react_bootstrap_1.ListGroupItem>
                  </react_bootstrap_1.ListGroup>
                </div>

                <div style={style}>
                  <div>
                    <h1>Label <react_bootstrap_1.Label>New</react_bootstrap_1.Label></h1>
                    <h2>Label <react_bootstrap_1.Label>New</react_bootstrap_1.Label></h2>
                    <h3>Label <react_bootstrap_1.Label>New</react_bootstrap_1.Label></h3>
                    <h4>Label <react_bootstrap_1.Label>New</react_bootstrap_1.Label></h4>
                    <h5>Label <react_bootstrap_1.Label>New</react_bootstrap_1.Label></h5>
                    <p>Label <react_bootstrap_1.Label>New</react_bootstrap_1.Label></p>
                  </div>
                </div>

                <div style={style}>
                  <div>
                    <react_bootstrap_1.Label bsStyle='default'>Default</react_bootstrap_1.Label>&nbsp;
                    <react_bootstrap_1.Label bsStyle='primary'>Primary</react_bootstrap_1.Label>&nbsp;
                    <react_bootstrap_1.Label bsStyle='success'>Success</react_bootstrap_1.Label>&nbsp;
                    <react_bootstrap_1.Label bsStyle='info'>Info</react_bootstrap_1.Label>&nbsp;
                    <react_bootstrap_1.Label bsStyle='warning'>Warning</react_bootstrap_1.Label>&nbsp;
                    <react_bootstrap_1.Label bsStyle='danger'>Danger</react_bootstrap_1.Label>
                  </div>
                </div>

                <div style={style}>
                  <p>Badges <react_bootstrap_1.Badge>42</react_bootstrap_1.Badge></p>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p><react_bootstrap_1.Button bsStyle='primary'>Learn more</react_bootstrap_1.Button></p>
                  </react_bootstrap_1.Jumbotron>
                </div>

                <div style={style}>
                    <react_bootstrap_1.Image src="https://placeholdit.imgix.net/~text?txtsize=33&txt=AUDIO&w=150&h=150" rounded/>
                </div>

                <div style={style}>
                  <react_bootstrap_1.PageHeader>Example page header <small>Subtext for header</small></react_bootstrap_1.PageHeader>
                </div>

                <div style={style}>
                    <react_bootstrap_1.Well>Look I'm in a well!</react_bootstrap_1.Well>
                </div>

                <div style={style}>
                  <div>
                    <react_bootstrap_1.Well bsSize='large'>Look I'm in a large well!</react_bootstrap_1.Well>
                    <react_bootstrap_1.Well bsSize='small'>Look I'm in a small well!</react_bootstrap_1.Well>
                  </div>
                </div>

                <div style={style}>
                  <div>
                    <react_bootstrap_1.ButtonToolbar>
                      <react_bootstrap_1.ButtonGroup>
                        <react_bootstrap_1.Button><react_bootstrap_1.Glyphicon glyph='align-left'/></react_bootstrap_1.Button>
                        <react_bootstrap_1.Button><react_bootstrap_1.Glyphicon glyph='align-center'/></react_bootstrap_1.Button>
                        <react_bootstrap_1.Button><react_bootstrap_1.Glyphicon glyph='align-right'/></react_bootstrap_1.Button>
                        <react_bootstrap_1.Button><react_bootstrap_1.Glyphicon glyph='align-justify'/></react_bootstrap_1.Button>
                      </react_bootstrap_1.ButtonGroup>
                    </react_bootstrap_1.ButtonToolbar>
                    <react_bootstrap_1.ButtonToolbar>
                      <react_bootstrap_1.ButtonGroup>
                        <react_bootstrap_1.Button bsSize='large'><react_bootstrap_1.Glyphicon glyph='star'/> Star</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button><react_bootstrap_1.Glyphicon glyph='star'/> Star</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button bsSize='small'><react_bootstrap_1.Glyphicon glyph='star'/> Star</react_bootstrap_1.Button>
                        <react_bootstrap_1.Button bsSize='xsmall'><react_bootstrap_1.Glyphicon glyph='star'/> Star</react_bootstrap_1.Button>
                      </react_bootstrap_1.ButtonGroup>
                    </react_bootstrap_1.ButtonToolbar>
                  </div>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Table striped bordered condensed hover>
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
                  </react_bootstrap_1.Table>
                </div>

                <div style={style}>
                <react_bootstrap_1.Table responsive>
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
                  </react_bootstrap_1.Table>
                </div>

                <div style={style}>
                  <react_bootstrap_1.FormGroup validationState="success">
                    <react_bootstrap_1.ControlLabel>Working example with validation</react_bootstrap_1.ControlLabel>
                    <react_bootstrap_1.FormControl type='text' value="hello" placeholder='Enter text' ref='input' onChange={this.callback}/>
                    <react_bootstrap_1.FormControl.Feedback />
                    <react_bootstrap_1.HelpBlock>Validation is based on string length.</react_bootstrap_1.HelpBlock>
                  </react_bootstrap_1.FormGroup>
                </div>

                <div style={style}>
                  <react_bootstrap_1.FormGroup>
                    <react_bootstrap_1.InputGroup type='text' label='Text' placeholder='Enter text'/>
                    <react_bootstrap_1.InputGroup type='email' label='Email Address' placeholder='Enter email'/>
                    <react_bootstrap_1.InputGroup type='password' label='Password'/>
                    <react_bootstrap_1.InputGroup type='file' label='File' help='[Optional] Block level help text'/>
                    <react_bootstrap_1.InputGroup type='checkbox' label='Checkbox' checked readOnly/>
                    <react_bootstrap_1.InputGroup type='radio' label='Radio' checked readOnly/>
                    <react_bootstrap_1.InputGroup type='select' label='Select' placeholder='select'>
                      <option value='select'>select</option>
                      <option value='other'>...</option>
                    </react_bootstrap_1.InputGroup>
                    <react_bootstrap_1.InputGroup type='textarea' label='Text Area' placeholder='textarea'/>
                  </react_bootstrap_1.FormGroup>
                </div>

                <div style={style}>
                  <form>
                    <Input type="text" name="text" ref="input" onChange={this.callback}/>
                      <ButtonInput bsSize="small">Child Text</ButtonInput>
                      <ButtonInput type="reset" bsStyle="primary" onClick={this.callback}/>
                      <ButtonInput type="submit" value="Submit Your Input" bsStyle="success" bsSize="large" disabled={false}/>
                    </form>
                </div>

                <div style={style}>
                  <form>
                    <Input type='text' addonBefore='@'/>
                    <Input type='text' addonAfter='.00'/>
                    <Input type='text' addonBefore='$' addonAfter='.00'/>
                    <Input type='text' addonAfter={innerGlyphicon}/>
                    <Input type='text' buttonBefore={innerButton}/>
                    <Input type='text' buttonAfter={innerDropdown}/>
                    <Input type='text' addonBefore={innerRadio}/>
                    <Input type='text' addonBefore={innerCheckbox}/>
                  </form>
                </div>

                <div style={style}>
                  <form>
                    <Input type='text' bsSize="large" placeholder='Large text'/>
                    <Input type='text' bsSize="medium" placeholder='Normal text'/>
                    <Input type='text' bsSize="small" placeholder='Small text'/>
                  </form>
                </div>

                <div style={style}>
                  <form>
                    <Input type='text' bsStyle='success' label='Success' hasFeedback/>
                    <Input type='text' bsStyle='warning' label='Warning' hasFeedback/>
                    <Input type='text' bsStyle='error' label='Error' hasFeedback/>
                  </form>
                </div>

                <div style={style}>
                  <form className='form-horizontal'>
                    <Input type='text' label='Text' labelClassName='col-xs-2' wrapperClassName='col-xs-10'/>
                    <Input type='textarea' label='Textarea' labelClassName='col-xs-2' wrapperClassName='col-xs-10'/>
                    <Input type='checkbox' label='Checkbox' wrapperClassName='col-xs-offset-2 col-xs-10' help='Offset is applied to wrapper.'/>
                  </form>
                </div>

                <div style={style}>
                  <Input label='Input wrapper' help='Use this when you need something other than the available input types.' wrapperClassName='wrapper'>
                    <react_bootstrap_1.Row>
                      <react_bootstrap_1.Col xs={6}>
                        <input type='text' className='form-control'/>
                      </react_bootstrap_1.Col>
                      <react_bootstrap_1.Col xs={6}>
                        <input type='text' className='form-control'/>
                      </react_bootstrap_1.Col>
                    </react_bootstrap_1.Row>
                  </Input>
                </div>

                <div style={style}>
                  <react_bootstrap_1.Form>
                    <react_bootstrap_1.FormGroup controlId="formBasicText">
                      <react_bootstrap_1.ControlLabel>Control Label</react_bootstrap_1.ControlLabel>
                      <react_bootstrap_1.FormControl type="text" placeholder="Enter text"/>
                      <react_bootstrap_1.FormControl.Feedback />
                      <react_bootstrap_1.HelpBlock>Help block message.</react_bootstrap_1.HelpBlock>
                    </react_bootstrap_1.FormGroup>

                    <react_bootstrap_1.FormGroup>
                      <react_bootstrap_1.Checkbox name="checkbox" inline>1</react_bootstrap_1.Checkbox>
                      {' '}
                      <react_bootstrap_1.Checkbox name="checkbox" inline>2</react_bootstrap_1.Checkbox>
                      {' '}
                      <react_bootstrap_1.Checkbox name="checkbox" inline>3</react_bootstrap_1.Checkbox>
                    </react_bootstrap_1.FormGroup>
                    <react_bootstrap_1.FormGroup>
                      <react_bootstrap_1.Radio name="radio" inline>1</react_bootstrap_1.Radio>
                      {' '}
                      <react_bootstrap_1.Radio name="radio" inline>2</react_bootstrap_1.Radio>
                      {' '}
                      <react_bootstrap_1.Radio name="radio" inline>3</react_bootstrap_1.Radio>
                    </react_bootstrap_1.FormGroup>
                  </react_bootstrap_1.Form>
                </div>

               <div style={style}>
                <react_bootstrap_1.Media>
                  <react_bootstrap_1.Media.Left align="top">
                    <img width={64} height={64} src="https://placeholdit.imgix.net/~text?txtsize=33&txt=AUDIO&w=150&h=150" alt="Image"/>
                  </react_bootstrap_1.Media.Left>
                  <react_bootstrap_1.Media.Body>
                    <react_bootstrap_1.Media.Heading>Top aligned media</react_bootstrap_1.Media.Heading>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </react_bootstrap_1.Media.Body>
                </react_bootstrap_1.Media>
              </div>
            </div>);
    };
    return ReactBootstrapTest;
}(react_1.Component));
exports.ReactBootstrapTest = ReactBootstrapTest;
