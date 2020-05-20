import * as React from 'react';
import {
  Alert,
  UncontrolledAlert,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Card,
  CardBody,
  CardBlock,
  CardColumns,
  CardDeck,
  CardFooter,
  CardGroup,
  CardHeader,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
  Row,
  Col,
  Container,
  Collapse,
  Fade,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  Pagination,
  Label,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  ModalFooter,
  Modal,
  ModalBody,
  ModalHeader,
  Jumbotron,
  Media,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavDropdown,
  NavItem,
  NavLink,
  PaginationItem,
  PaginationLink,
  Popover,
  PopoverContent,
  PopoverTitle,
  Progress,
  TabPane,
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  UncontrolledNavDropdown,
  UncontrolledTooltip,
  TabContent,
  Table,
  Tag,
  TetherContent,
  Tooltip
} from 'reactstrap';

// --------------- Alert
const Examplea = (props: any) => {
  return (
    <div>
      <Alert color="success">
        <strong>Well done!</strong> You successfully read this important alert message.
      </Alert>
      <Alert color="info">
        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
      </Alert>
      <Alert color="warning">
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
      </Alert>
      <Alert color="danger">
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </Alert>
    </div>
  );
};

class AlertExample extends React.Component<any, any> {
  state: {
    visible: boolean
  };
  constructor(props: any) {
    super(props);

    this.state = {
      visible: true
    };
  }

  onDismiss = () => {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
        I am an alert and I can be dismissed!
      </Alert>
    );
  }
}

function AlertExample1() {
  return (
    <UncontrolledAlert color="info">
      I am an alert and I can be dismissed!
    </UncontrolledAlert>
  );
}

// --------------- Badge
class Example2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Heading <Badge>New</Badge></h1>
        <h2>Heading <Badge>New</Badge></h2>
        <h3>Heading <Badge>New</Badge></h3>
        <h4>Heading <Badge>New</Badge></h4>
        <h5>Heading <Badge>New</Badge></h5>
        <h6>Heading <Badge>New</Badge></h6>
      </div>
    );
  }
}

export class Example3 extends React.Component {
  render() {
    return (
      <div>
        <Badge>default</Badge>
        <Badge color="primary">primary</Badge>
        <Badge color="success">success</Badge>
        <Badge color="info">info</Badge>
        <Badge color="warning">warning</Badge>
        <Badge color="danger">danger</Badge>
      </div>
    );
  }
}

class Example4 extends React.Component {
  render() {
    return (
      <div>
        <Badge color="default" pill>default</Badge>{' '}
        <Badge color="primary" pill>primary</Badge>{' '}
        <Badge color="success" pill>success</Badge>{' '}
        <Badge color="info" pill>info</Badge>{' '}
        <Badge color="warning" pill>warning</Badge>{' '}
        <Badge color="danger" pill>danger</Badge>
      </div>
    );
  }
}

// ------------- Breadcrumbs
const Example5 = (props: any) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

const Example6 = (props: any) => {
  return (
    <div>
      <Breadcrumb tag="nav">
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
        <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

// ------------- Buttons
class Example7 extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
      </div>
    );
  }
}

class Example8 extends React.Component {
  render() {
    return (
      <div>
        <Button outline color="primary">primary</Button>{' '}
        <Button outline color="secondary">secondary</Button>{' '}
        <Button outline color="success">success</Button>{' '}
        <Button outline color="info">info</Button>{' '}
        <Button outline color="warning">warning</Button>{' '}
        <Button outline color="danger">danger</Button>
      </div>
    );
  }
}

const Example9 = (
  <div>
    <Button color="primary" size="lg">Large Button</Button>{' '}
    <Button color="secondary" size="lg">Large Button</Button>
  </div>
);

const Example10 = (
  <div>
    <Button color="primary" size="sm">Small Button</Button>{' '}
    <Button color="secondary" size="sm">Small Button</Button>
  </div>
);

const Example11 = (
  <div>
    <Button color="primary" size="lg" block>Block level button</Button>
    <Button color="secondary" size="lg" block>Block level button</Button>
  </div>
);

const Example12 = (
  <div>
    <Button color="primary" size="lg" active>Primary link</Button>{' '}
    <Button color="secondary" size="lg" active>Link</Button>
  </div>
);

const Example13 = (
  <div>
    <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
    <Button color="secondary" size="lg" disabled>Button</Button>
  </div>
);

class Example14 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected: number) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected: number) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <div>
        <h5>Radio Buttons</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
        </ButtonGroup>
        <p>Selected: {this.state.rSelected}</p>

        <h5>Checkbox Buttons</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
        </ButtonGroup>
        <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
      </div>
    );
  }
}

// ------------- Button Dropdown
class Example15 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Button Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={event => {
            // something happens here
          }}>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

const Example16 = (
  <ButtonDropdown isOpen={true} toggle={() => true}>
    <DropdownToggle caret color="primary">
      Text
  </DropdownToggle>
    <DropdownMenu>
      <DropdownItem header>Header</DropdownItem>
      <DropdownItem disabled>Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Another Action</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
);

const Example17 = (props: any) => (
  <ButtonDropdown isOpen={true} toggle={() => true}>
    <Button id="caret" color="primary">{props.text}</Button>
    <DropdownToggle caret color="primary" />
    <DropdownMenu>
      <DropdownItem header>Header</DropdownItem>
      <DropdownItem disabled>Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Another Action</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
);

const Example18 = (
  <div>
    <ButtonDropdown isOpen={true} toggle={() => true}>
      <DropdownToggle caret size="lg">
        Large Button
    </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>

    <ButtonDropdown isOpen={true} toggle={() => true}>
      <DropdownToggle caret size="sm">
        Small Button
    </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  </div>
);

const Example19 = (
  <ButtonDropdown isOpen={true} toggle={() => true} dropup>
    <DropdownToggle caret size="lg">
      Dropup
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Another Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
);

// --------------- ButtonGroup
class Example20 extends React.Component {
  render() {
    return (
      <ButtonGroup>
        <Button>Left</Button>{' '}
        <Button>Middle</Button>{' '}
        <Button>Right</Button>
      </ButtonGroup>
    );
  }
}

class Example21 extends React.Component {
  render() {
    return (
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
    );
  }
}

const Example22 = (props: any) => (
  <div>
    <ButtonGroup size="lg">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>

    <ButtonGroup size="sm">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </div>
);

const Example23 = (props: any) => (
  <ButtonGroup>
    <Button>1</Button>
    <Button>2</Button>
    <ButtonDropdown isOpen={true} toggle={() => true}>
      <DropdownToggle caret>
        Dropdown
    </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Dropdown Link</DropdownItem>
        <DropdownItem>Dropdown Link</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  </ButtonGroup>
);

const Example24 = (props: any) => (
  <ButtonGroup vertical>
    <Button>1</Button>
    <Button>2</Button>
    <ButtonDropdown isOpen={props.dropdownOpen} toggle={() => true}>
      <DropdownToggle caret>
        Dropdown
    </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Dropdown Link</DropdownItem>
        <DropdownItem>Dropdown Link</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  </ButtonGroup>
);

// ------------------ Cards
const Example25 = (props: any) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBlock>
      </Card>
    </div>
  );
};

const Example26 = (props: any) => {
  return (
    <div>
      <Card>
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBlock>
        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBlock>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBlock>
      </Card>
    </div>
  );
};

const Example27 = (props: any) => {
  return (
    <Row noGutters>
      <Col sm="6">
        <Card block>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card block>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  );
};

const Example28 = (props: any) => {
  return (
    <div>
      <Card block>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
      <Card block className="text-center">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
      <Card block className="text-right">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
    </div>
  );
};

const Example29 = (props: any) => {
  return (
    <div>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBlock>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBlock>
        <CardFooter>Footer</CardFooter>
      </Card>

      <Card>
        <CardHeader tag="h3">Featured</CardHeader>
        <CardBlock>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBlock>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
    </div>
  );
};

const Example30 = (props: any) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBlock>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBlock>
      </Card>
      <Card>
        <CardBlock>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBlock>
        <CardImg bottom width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
      </Card>
    </div>
  );
};

const Example31 = (props: any) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

const Example32 = (props: any) => {
  return (
    <div>
      <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      <Card block inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card block inverse color="success">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card block inverse color="info">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card block inverse color="warning">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card block inverse color="danger">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
    </div>
  );
};

const Example33 = (props: any) => {
  return (
    <div>
      <Card block outline color="secondary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      <Card block outline color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card block outline color="success">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card block outline color="info">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card block outline color="warning">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card block outline color="danger">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
    </div>
  );
};

const Example34 = (props: any) => {
  return (
    <CardGroup>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBlock>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBlock>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            card has even longer content than the first to show that equal height action.
          </CardText>
          <Button>Button</Button>
        </CardBlock>
      </Card>
    </CardGroup>
  );
};

const Example35 = (props: any) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBlock>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBlock>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This card has
              even longer content than the first to show that equal height action.
          </CardText>
          <Button>Button</Button>
        </CardBlock>
      </Card>
    </CardDeck>
  );
};

const Example36 = (props: any) => {
  return (
    <CardColumns>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBlock>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
      </Card>
      <Card>
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBlock>
      </Card>
      <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      <Card>
        <CardImg top width="100%"
                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                 alt="Card image cap" />
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This card
              has even longer content than the first to show that equal height action.
          </CardText>
          <Button>Button</Button>
        </CardBlock>
      </Card>
      <Card block inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
    </CardColumns>
  );
};

// ------------------ Collapse

class Example37 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBlock>
              Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBlock>
          </Card>
        </Collapse>
      </div>
    );
  }
}

class Example38 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);
    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, status: 'Closed' };
  }

  onOpened() {
    this.setState({ ...this.state, status: 'Opened' });
  }

  onClosed() {
    this.setState({ ...this.state, status: 'Closed' });
  }

  toggle() {
    const status = !this.state.collapse ? 'Opening...' : 'Closing...';
    this.setState({ collapse: !this.state.collapse, status });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <h5>Current state: {this.state.status}</h5>
        <Collapse isOpen={this.state.collapse} onOpened={this.onOpened} onClosed={this.onClosed}>
          <Card>
            <CardBlock>
              Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBlock>
          </Card>
        </Collapse>
      </div>
    );
  }
}

// ------- Dropdown

class Example39 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

const Example40 = (props: any) => (
  <Dropdown isOpen={false} toggle={() => false}>
    <DropdownToggle caret>
      Dropdown
  </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem header>Header</DropdownItem>
      <DropdownItem disabled>Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Another Action</DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

const Example41 = (props: any) => (
  <DropdownItem header>Header</DropdownItem>
);

const Example42 = (props: any) => (
  <div>
    <DropdownItem divider />
    <DropdownItem>Action</DropdownItem>
    <DropdownItem disabled>Action</DropdownItem>
    <Dropdown group isOpen={true} size="lg" toggle={() => true}>
      <DropdownToggle caret>asdfasd</DropdownToggle>
      <DropdownMenu>sadfas</DropdownMenu>
    </Dropdown>

    <Dropdown isOpen={true} toggle={() => true}>
      <DropdownToggle caret>sadfasd</DropdownToggle>
      <DropdownMenu>sadf</DropdownMenu>
    </Dropdown>

    <Dropdown group isOpen={true} size="sm" toggle={() => true}>
      <DropdownToggle caret>asdf</DropdownToggle>
      <DropdownMenu>sasdfsdf</DropdownMenu>
    </Dropdown>

  </div>
);

class Example43 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <span
          onClick={this.toggle}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={this.state.dropdownOpen}
        >
          Custom Dropdown Content
        </span>
        <DropdownMenu>
          <div onClick={this.toggle}>Custom dropdown item</div>
          <div onClick={this.toggle}>Custom dropdown item</div>
          <div onClick={this.toggle}>Custom dropdown item</div>
          <div onClick={this.toggle}>Custom dropdown item</div>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

function Example44() {
  return (
    <UncontrolledDropdown className="some-class">
      <DropdownToggle caret>
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

// ------------------ Form
class Example45 extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

class Example46 extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Select</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
          <Col sm={10}>
            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Text Area</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>File</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup tag="fieldset" row>
          <legend className="col-form-legend col-sm-2">Radio Buttons</legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Option one is this and that—be sure to include why it's great
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Option two can be something else and selecting it will deselect option one
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="radio2" disabled />{' '}
                Option three is disabled
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="checkbox2" sm={2}>Checkbox</Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                Check me out
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

class Example47 extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>{' '}
          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword">Password</Label>{' '}
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    );
  }
}

class Example48 extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup color="success">
          <Label for="exampleEmail">Input with success</Label>
          <Input state="success" />
          <FormFeedback>Success! You did it!</FormFeedback>
          <FormText color="muted">Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup color="warning">
          <Label for="examplePassword">Input with warning</Label>
          <Input state="warning" />
          <FormFeedback>Whoops, check your formatting and try again.</FormFeedback>
          <FormText color="muted">Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup color="danger">
          <Label for="examplePassword">Input with danger</Label>
          <Input state="danger" />
          <FormFeedback>Oh noes! that name is already taken</FormFeedback>
          <FormText color="muted">Example help text that remains unchanged.</FormText>
        </FormGroup>
      </Form>
    );
  }
}

class Example49 extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Static</Label>
          <Input>Some static value</Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleUrl">Url</Label>
          <Input type="url" name="url" id="exampleUrl" placeholder="url placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Number</Label>
          <Input type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDatetime">Datetime</Label>
          <Input type="datetime" name="datetime" id="exampleDatetime" placeholder="datetime placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleTime">Time</Label>
          <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleColor">Color</Label>
          <Input type="color" name="color" id="exampleColor" placeholder="color placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSearch">Search</Label>
          <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
      </Form>
    );
  }
}

class Example50 extends React.Component {
  render() {
    return (
      <Form>
        <Input placeholder="lg" size="lg" />
        <Input placeholder="default" />
        <Input placeholder="sm" size="sm" />
        <Input type="select" size="lg">
          <option>Large Select</option>
        </Input>
        <Input type="select">
          <option>Default Select</option>
        </Input>
        <Input type="select" size="sm">
          <option>Small Select</option>
        </Input>
      </Form>
    );
  }
}

class Example51 extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    );
  }
}

const Example52 = (props: any) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon>@</InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>
          <Input addon type="checkbox" aria-label="Checkbox for following text input" />
        </InputGroupAddon>
        <Input placeholder="Check it out" />
      </InputGroup>
      <br />
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupAddon>@example.com</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>$</InputGroupAddon>
        <InputGroupAddon>$</InputGroupAddon>
        <Input placeholder="Dolla dolla billz yo!" />
        <InputGroupAddon>$</InputGroupAddon>
        <InputGroupAddon>$</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>$</InputGroupAddon>
        <Input placeholder="Amount" type="number" step="1" />
        <InputGroupAddon>.00</InputGroupAddon>
      </InputGroup>
    </div>
  );
};

const Example53 = (props: any) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon>To the Left!</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupAddon>To the Right!</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>To the Left!</InputGroupAddon>
        <Input placeholder="and..." />
        <InputGroupAddon>To the Right!</InputGroupAddon>
      </InputGroup>
    </div>
  );
};

const Example54 = (props: any) => {
  return (
    <div>
      <InputGroup size="lg">
        <InputGroupAddon>@lg</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>@normal</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup size="sm">
        <InputGroupAddon>@sm</InputGroupAddon>
        <Input />
      </InputGroup>
    </div>
  );
};

const Example55 = (props: any) => {
  return (
    <div>
      <InputGroup>
        <InputGroupButton><Button>I'm a button</Button></InputGroupButton>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupButton></InputGroupButton>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupButton></InputGroupButton>
        <Input placeholder="and..." />
        <InputGroupButton><Button color="secondary">I'm a button</Button></InputGroupButton>
      </InputGroup>
    </div>
  );
};

const Example56 = (props: any) => {
  return (
    <div>
      <InputGroup size="lg">
        <InputGroupAddon>@lg</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>@normal</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup size="sm">
        <InputGroupAddon>@sm</InputGroupAddon>
        <Input />
      </InputGroup>
    </div>
  );
};

const Example57 = (props: any) => {
  return (
    <div>
      <InputGroup>
        <InputGroupButton><Button>I'm a button</Button></InputGroupButton>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupButton></InputGroupButton>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupButton></InputGroupButton>
        <Input placeholder="and..." />
        <InputGroupButton><Button color="secondary">I'm a button</Button></InputGroupButton>
      </InputGroup>
    </div>
  );
};

const Example58 = (props: any) => {
  return (
    <div>
      <InputGroup>
        <InputGroupButton>To the Left!</InputGroupButton>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupButton color="secondary">To the Right!</InputGroupButton>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupButton color="danger">To the Left!</InputGroupButton>
        <Input placeholder="and..." />
        <InputGroupButton color="success">To the Right!</InputGroupButton>
      </InputGroup>
    </div>
  );
};

const Example59 = (props: any) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

const Example60 = (props: any) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

class Example61 extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col xs="3">.col-3</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="3">.col-3</Col>
        </Row>
        <Row>
          <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col .col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>.col .col-sm-6 .col-sm-push-2 .col-sm-pull-2 .col-sm-offset-2</Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>.col .col-sm-12 .col-md-6 .col-md-offset-3</Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
          <Col sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
        </Row>
      </Container>
    );
  }
}

class Example62 extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    );
  }
}

class Example63 extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
        <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
        <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
      </ListGroup>
    );
  }
}

class Example64 extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
      </ListGroup>
    );
  }
}

class Example65 extends React.Component {
  render() {
    return (
      <div>
        <h3>Anchors </h3>
        <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p>
        <ListGroup>
          <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <p />
        <h3>Buttons </h3>
        <ListGroup>
          <ListGroupItem active tag="button" action>Cras justo odio</ListGroupItem>
          <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
          <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

class Example66 extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem color="success">Cras justo odio</ListGroupItem>
        <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
        <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
      </ListGroup>
    );
  }
}

class Example67 extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem active>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

// ------------- Media
const Example68 = () => {
  return (
    <Media>
      <Media left href="#">
        <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus
        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
  );
};

const Example69 = () => {
  return (
    <Media>
      <Media left href="#">
        <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus
        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
        <Media>
          <Media left href="#">
            <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Nested media heading
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras
            purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
            fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </Media>
    </Media>
  );
};

const Example70 = () => {
  return (
    <div>
      <Media>
        <Media left top href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Top aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras
          purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
          fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left middle href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Middle aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras
          purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
          fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left bottom href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Bottom aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras
          purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
          fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
    </div>
  );
};

const Example71 = () => {
  return (
    <Media list>
      <Media tag="li">
        <Media left href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Media heading
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras
          purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
          fringilla. Donec lacinia congue felis in faucibus.
          <Media>
            <Media left href="#">
              <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
            </Media>
            <Media body>
              <Media heading>
                Nested media heading
              </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
              Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
              vulputate fringilla. Donec lacinia congue felis in faucibus.
              <Media>
                <Media left href="#">
                  <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                </Media>
                <Media body>
                  <Media heading>
                    Nested media heading
                  </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                  Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                  vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Media>
            </Media>
          </Media>
          <Media>
            <Media left href="#">
              <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
            </Media>
            <Media body>
              <Media heading>
                Nested media heading
              </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras
              purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
              fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Media>
        </Media>
      </Media>
      <Media tag="li">
        <Media body>
          <Media heading>
            Media heading
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras
          purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
          fringilla. Donec lacinia congue felis in faucibus.
        </Media>
        <Media right href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
      </Media>
    </Media>
  );
};

// --------------- Modal
class ModalExample72 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

class ModalExample73 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true
    };

    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  changeBackdrop(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  render() {
    return (
      <div>
        <Form inline onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <Label for="backdrop">Backdrop value</Label>{' '}
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup>
          {' '}
          <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        </Form>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

class ModalExample74 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
            <br />
            <Button color="success" onClick={this.toggleNested}>Show Nested Model</Button>
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested}>
              <ModalHeader>Nested Modal title</ModalHeader>
              <ModalBody>Stuff and things</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>All Done</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

class Example75 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

class Example76 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

class Example77 extends React.Component {
  render() {
    return (
      <div>
        <p>List Based</p>
        <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        <hr />
        <p>Link Based</p>
        <Nav>
          <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
      </div>
    );
  }
}

class Example78 extends React.Component<any, any> {
  render() {
    return (
      <div>
        <p>List Based</p>
        <Nav inline>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        <hr />
        <p>Link based</p>
        <Nav inline>
          <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
      </div>
    );
  }
}

class Example79 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="#" active>Link</NavLink>
          </NavItem>
          <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </NavDropdown>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

class Example80 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="#" active>Link</NavLink>
          </NavItem>
          <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </NavDropdown>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

// ----------- Pagination
class Example81 extends React.Component {
  render() {
    return (
      <Pagination>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}

class Example82 extends React.Component {
  render() {
    return (
      <Pagination>
        <PaginationItem disabled>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}

class Example83 extends React.Component {
  render() {
    return (
      <Pagination size="lg">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}

class Example84 extends React.Component {
  render() {
    return (
      <Pagination size="sm">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}

// ------------------------- Popover
class Example85 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" onClick={this.toggle}>
          Launch Popover
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverContent>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverContent>
        </Popover>
      </div>
    );
  }
}

class PopoverItem extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <span>
        <Button className="mr-1" color="secondary" id={'Popover-' + this.props.id} onClick={this.toggle}>
          {this.props.item.text}
        </Button>
        <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverContent>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverContent>
        </Popover>
      </span>
    );
  }
}

class PopoverExampleMulti extends React.Component<any, {popovers: Array<{placement: string; text: string; }>}> {
  state: {popovers: Array<{placement: string; text: string; }>};
  constructor(props: any) {
    super(props);

    this.state = {
      popovers: [
        {
          placement: 'top',
          text: 'Top'
        },
        {
          placement: 'bottom',
          text: 'Bottom'
        },
        {
          placement: 'left',
          text: 'Left'
        },
        {
          placement: 'right',
          text: 'Right'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.popovers.map((popover, i) => {
          return <PopoverItem key={i} item={popover} id={i} />;
        })}
      </div>
    );
  }
}

// ------------------------- Progress

const Example86 = (props: any) => {
  return (
    <div>
      <div className="text-center">0%</div>
      <Progress />
      <div className="text-center">25%</div>
      <Progress value="25" />
      <div className="text-center">50%</div>
      <Progress value={50} />
      <div className="text-center">75%</div>
      <Progress value={75} />
      <div className="text-center">100%</div>
      <Progress value="100" />
      <div className="text-center">Multiple bars</div>
      <Progress multi>
        <Progress bar value="15" />
        <Progress bar color="success" value="30" />
        <Progress bar color="info" value="25" />
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="5" />
      </Progress>
    </div>
  );
};

const Example87 = (props: any) => {
  return (
    <div>
      <Progress value={2 * 5} />
      <Progress color="success" value="25" />
      <Progress color="info" value={50} />
      <Progress color="warning" value={75} />
      <Progress color="danger" value="100" />
    </div>
  );
};

const Example88 = (props: any) => {
  return (
    <div>
      <Progress value="25">25%</Progress>
      <Progress value={50}>1/2</Progress>
      <Progress value={75}>You're almost there!</Progress>
      <Progress color="success" value="100">You did it!</Progress>
      <Progress multi>
        <Progress bar value="15">Meh</Progress>
        <Progress bar color="success" value="30">Wow!</Progress>
        <Progress bar color="info" value="25">Cool</Progress>
        <Progress bar color="warning" value="20">20%</Progress>
        <Progress bar color="danger" value="5">!!</Progress>
      </Progress>
    </div>
  );
};

const Example89 = (props: any) => {
  return (
    <div>
      <Progress striped value={2 * 5} />
      <Progress striped color="success" value="25" />
      <Progress striped color="info" value={50} />
      <Progress striped color="warning" value={75} />
      <Progress striped color="danger" value="100" />
      <Progress multi>
        <Progress striped bar value="10" />
        <Progress striped bar color="success" value="30" />
        <Progress striped bar color="warning" value="20" />
        <Progress striped bar color="danger" value="20" />
      </Progress>
    </div>
  );
};

const Example90 = (props: any) => {
  return (
    <div>
      <Progress animated value={2 * 5} />
      <Progress animated color="success" value="25" />
      <Progress animated color="info" value={50} />
      <Progress animated color="warning" value={75} />
      <Progress animated color="danger" value="100" />
      <Progress multi>
        <Progress animated bar value="10" />
        <Progress animated bar color="success" value="30" />
        <Progress animated bar color="warning" value="20" />
        <Progress animated bar color="danger" value="20" />
      </Progress>
    </div>
  );
};

const Example91 = (props: any) => {
  return (
    <div>
      <div className="text-center">Plain</div>
      <Progress multi>
        <Progress bar value="15" />
        <Progress bar color="success" value="20" />
        <Progress bar color="info" value="25" />
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="15" />
      </Progress>
      <div className="text-center">With Labels</div>
      <Progress multi>
        <Progress bar value="15">Meh</Progress>
        <Progress bar color="success" value="35">Wow!</Progress>
        <Progress bar color="warning" value="25">25%</Progress>
        <Progress bar color="danger" value="25">LOOK OUT!!</Progress>
      </Progress>
      <div className="text-center">Stripes and Animations</div>
      <Progress multi>
        <Progress bar striped value="15">Stripes</Progress>
        <Progress bar animated color="success" value="30">Animated Stripes</Progress>
        <Progress bar color="info" value="25">Plain</Progress>
      </Progress>
    </div>
  );
};

const Example92 = (props: any) => {
  return (
    <div>
      <div className="text-center">1 of 5</div>
      <Progress value="1" max="5" />
      <div className="text-center">50 of 135</div>
      <Progress value={50} max="135" />
      <div className="text-center">75 of 111</div>
      <Progress value={75} max={111} />
      <div className="text-center">463 of 500</div>
      <Progress value="463" max={500} />

      <div className="text-center">Various (40) of 55</div>
      <Progress multi>
        <Progress bar value="5" max={55}>5</Progress>
        <Progress bar color="success" value="15" max={55}>15</Progress>
        <Progress bar color="warning" value="10" max={55}>10</Progress>
        <Progress bar color="danger" value="10" max={55}>10</Progress>
      </Progress>
    </div>
  );
};

// --------------- Table
class Example93 extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

class Example94 extends React.Component {
  render() {
    return (
      <Table inverse>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

class Example95 extends React.Component {
  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

class Example96 extends React.Component {
  render() {
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

class Example97 extends React.Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

class Example98 extends React.Component {
  render() {
    return (
      <Table size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

class Example99 extends React.Component {
  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
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
            <th scope="row">1</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

class Example100 extends React.Component {
  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
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
            <th scope="row">1</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

class Example101 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab: string) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className=""
              onClick={() => { this.toggle('1'); }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className=""
              onClick={() => { this.toggle('2'); }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card block>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card block>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

class Example102 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <p>Somewhere in here is a <a href="#" id="TooltipExample">tooltip</a>.</p>
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
          Hello world!
        </Tooltip>
      </div>
    );
  }
}

class Example103 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <p>Sometimes you need to allow users to select text within a <a href="#" id="DisabledAutoHideExample">tooltip</a>.</p>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={this.toggle}>
          Try to select this text!
        </Tooltip>
      </div>
    );
  }
}

class TooltipItem extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <span>
        <Button className="mr-1" color="secondary" id={'Tooltip-' + this.props.id}>
          {this.props.item.text}
        </Button>
        <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
          Tooltip Content!
        </Tooltip>
      </span>
    );
  }
}

class TooltipExampleMulti extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.state = {
      tooltips: [
        {
          placement: 'top',
          text: 'Top'
        },
        {
          placement: 'bottom',
          text: 'Bottom'
        },
        {
          placement: 'left',
          text: 'Left'
        },
        {
          placement: 'right',
          text: 'Right'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.tooltips.map((tooltip: {placement: string; text: string; }, i: number) => {
          return <TooltipItem key={i} item={tooltip} id={i} />;
        })}
      </div>
    );
  }
}

function Example() {
  return (
    <div>
      <p>Somewhere in here is a <a href="#" id="UncontrolledTooltipExample">tooltip</a>.</p>
      <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
        Hello world!
      </UncontrolledTooltip>
    </div>
  );
}

function Example104() {
  const props = {
    className: 'my-input',
    style: {
      borderColor: 'black',
    }
  };

  return (
    <FormGroup
      className="some-class"
      aria-labelledby="label"
    >
      <Label sm={3} id="label">
        Label
      </Label>

      <Col className="col-12" sm={9}>
        <Input type="text" size="lg" {...props} />
      </Col>
    </FormGroup>
  );
}

function Example105() {
  return (
    <Dropdown
      className="main-nav-avatar"
      isOpen={true}
      aria-labelledby="menu"
    >
      <a
        href="javascript:void(0)"
        id="menu"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Toggle
      </a>

      <DropdownMenu right className="asdf">
        <div className="d-block">
          Item
        </div>
      </DropdownMenu>
    </Dropdown>
  );
}

function Example106() {
  return (
    <Nav vertical>
      <NavLink
        className="toggle-drawer"
        href="#"
      >
        Details
      </NavLink>
    </Nav>
  );
}

const CSSModuleExample = (props: any) => {
  const cssModule = {
    btn: 'hash'
  };

  return (
    <Button color="secondary" cssModule={cssModule}>Button</Button>
  );
};

class Example107 extends React.Component {
  private input: HTMLInputElement;

  render() {
    return <Input type="file" getRef={(input) => { this.input = input; }} />;
  }
}

class Example108 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" dark toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

class Example109 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

class Example110 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

class Example111 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand tag="a" href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

class Example112 extends React.Component<any, any> {
  state: any;
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand className="logo" href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const Example113 = (props: any) => {
    return (
      <div>
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad squid. Nihil
            anim keffiyeh helvetica, craft beer labore wes anderson cred
            nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </div>
    );
  };
