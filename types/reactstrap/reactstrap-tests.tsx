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
  ButtonToggle,
  ButtonToolbar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Card,
  CardBody,
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
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselItem,
  CarouselIndicators,
  Row,
  Col,
  Container,
  Collapse,
  CustomInput,
  Fade,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
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
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  PaginationItem,
  PaginationLink,
  Popover,
  PopoverBody,
  PopoverHeader,
  Progress,
  TabPane,
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  UncontrolledTooltip,
  UncontrolledCollapse,
  UncontrolledCarousel,
  TabContent,
  Table,
  Tag,
  Toast,
  ToastBody,
  ToastHeader,
  Tooltip,
  Spinner,
  UncontrolledPopover,
  Util
} from 'reactstrap';

// --------------- Alert
const Examplea = (props: any) => {
  return (
    <div>
      <Alert
        color="success"
        closeClassName="close"
        closeAriaLabel="close"
        fade={false}
        innerRef={React.createRef()}
      >
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
  state: any;
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

interface CustomButtonProps extends ButtonProps {
  customProp: string;
}
// NOTE: not adding the <{}> causes the generic parameter to be a spread type of CustomButtonProps,
// for some reason this causes children to be inferred as being 'ReactNode & {}' which makes the spread
// invalid. TS3.2 bug?
const CustomButton: React.SFC<CustomButtonProps> = props => <Button<{}> {...props}/>;

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

const ExampleButtonClose = () => (
  <div>
    <CardGroup>
      <Card>
        <CardBody>
          <CardTitle>
            <Button close />
          </CardTitle>
          <CardText>Default close icon</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>
            <Button close aria-label="Cancel">
              <span aria-hidden>&ndash;</span>
            </Button>
          </CardTitle>
          <CardText>
          Custom content and aria-label
          </CardText>
        </CardBody>
      </Card>
    </CardGroup>
  </div>
);

class ExampleButtonToggle extends React.Component {
  render() {
    return (
      <div>
        <ButtonToggle color="primary">primary</ButtonToggle>{' '}
        <ButtonToggle color="secondary">secondary</ButtonToggle>{' '}
        <ButtonToggle color="success">success</ButtonToggle>{' '}
        <ButtonToggle color="info">info</ButtonToggle>{' '}
        <ButtonToggle color="warning">warning</ButtonToggle>{' '}
        <ButtonToggle color="danger">danger</ButtonToggle>{' '}
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
          <DropdownItem onClick={(event: React.MouseEvent<HTMLElement>) => {
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
  <ButtonDropdown isOpen={true} toggle={() => true} direction="up">
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
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

const Example26 = (props: any) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

const Example27 = (props: any) => {
  return (
    <Row noGutters>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
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
      <Card body>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
      <Card body className="text-center">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
      <Card body className="text-right">
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
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>

      <Card>
        <CardHeader tag="h3">Featured</CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
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
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
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
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      <Card body inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="success">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="info">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="warning">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="danger">
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
      <Card body outline color="secondary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      <Card body outline color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body outline color="success">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body outline color="info">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body outline color="warning">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body outline color="danger">
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
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            card has even longer content than the first to show that equal height action.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

const Example35 = (props: any) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This card has
              even longer content than the first to show that equal height action.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

const Example36 = (props: any) => {
  return (
    <CardColumns>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      <Card>
        <CardImg top width="100%"
                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                 alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This card
              has even longer content than the first to show that equal height action.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card body inverse color="primary">
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
            <CardBody>
              Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
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
            <CardBody>
              Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
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
        <FormGroup tag="fieldset">
          <FormGroup check inline>
            <Label check>
              <Input type="checkbox" />{' '}
              Check me out
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
              <Input type="checkbox" />{' '}
              Check me out as well
            </Label>
          </FormGroup>
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
        <Input placeholder="lg" bsSize="lg" />
        <Input placeholder="default" />
        <Input placeholder="sm" bsSize="sm" />
        <Input type="select" bsSize="lg">
          <option>Large Select</option>
        </Input>
        <Input type="select">
          <option>Default Select</option>
        </Input>
        <Input type="select" bsSize="sm">
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
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Input addon type="checkbox" aria-label="Checkbox for following text input" />
        </InputGroupAddon>
        <Input placeholder="Check it out" />
      </InputGroup>
      <br />
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupAddon addonType="prepend">@example.com</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>$</InputGroupText>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Dolla dolla billz yo!" />
        <InputGroupAddon addonType="append">
          <InputGroupText>$</InputGroupText>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input placeholder="Amount" type="number" step="1" />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
    </div>
  );
};

const Example53 = (props: any) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">To the Left!</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">To the Right!</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">To the Left!</InputGroupAddon>
        <Input placeholder="and..." />
        <InputGroupAddon addonType="append">To the Right!</InputGroupAddon>
      </InputGroup>
    </div>
  );
};

const Example54 = (props: any) => {
  return (
    <div>
      <InputGroup size="lg">
        <InputGroupAddon addonType="prepend">@lg</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">@normal</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">@sm</InputGroupAddon>
        <Input />
      </InputGroup>
    </div>
  );
};

const Example55 = (props: any) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append"></InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend"></InputGroupAddon>
        <Input placeholder="and..." />
        <InputGroupAddon addonType="append"><Button color="secondary">I'm a button</Button></InputGroupAddon>
      </InputGroup>
    </div>
  );
};

const Example56 = (props: any) => {
  return (
    <div>
      <InputGroup size="lg">
        <InputGroupAddon addonType="prepend">@lg</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">@normal</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">@sm</InputGroupAddon>
        <Input />
      </InputGroup>
    </div>
  );
};

const Example57 = (props: any) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="prepend"></InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend"></InputGroupAddon>
        <Input placeholder="and..." />
        <InputGroupAddon addonType="append"><Button color="secondary">I'm a button</Button></InputGroupAddon>
      </InputGroup>
    </div>
  );
};

const Example58 = (props: any) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">To the Left!</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append" color="secondary">To the Right!</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend" color="danger">To the Left!</InputGroupAddon>
        <Input placeholder="and..." />
        <InputGroupAddon addonType="append" color="success">To the Right!</InputGroupAddon>
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

const ExampleResponsiveContainer = (props: any) => {
  return (
    <>
      <Container className="themed-container">.container</Container>
      <Container className="themed-container" fluid="sm">.container-sm</Container>
      <Container className="themed-container" fluid="md">.container-md</Container>
      <Container className="themed-container" fluid="lg">.container-lg</Container>
      <Container className="themed-container" fluid="xl">.container-xl</Container>
      <Container className="themed-container" fluid={true}>.container-fluid</Container>
    </>
  );
};

const ExampleRowColumns = (props: any) => {
  return (
    <Container>
      <Row xs="2">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
      <Row xs="3">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
      <Row xs="4">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
      <Row xs="4">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col xs="6">Column</Col>
        <Col>Column</Col>
      </Row>
      <Row xs="1" sm="2" md="4">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
    </Container>
  );
};

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

const ExampleListGroupFlush = (props: any) => {
  return (
    <ListGroup flush>
      <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
      <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
      <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
    </ListGroup>
  );
};

const ExampleListGroupHorizontal = (props: any) => {
  return (
    <div>
      <p>The <code>horizontal</code> prop can be a Boolean or a string specifying one of Bootstrap's breakpoints</p>
      <ListGroup horizontal>
        <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <p className="mt-3">This list group is horizontal at the <code>lg</code> breakpoint and up.</p>
      <ListGroup horizontal="lg">
        <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <p className="mt-3">Note that horizontal list groups cannot be combined with flush list groups. If <code>flush</code> is <code>true</code> then <code>horizontal</code> has no effect.</p>
    </div>
  );
};

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
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} container="#test">
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
  element: HTMLElement;
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
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop} container={this.element}>
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

class ModalExampleDestructuring extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      modal: false,
      unmountOnClose: true
    };

    this.toggle = this.toggle.bind(this);
    this.changeUnmountOnClose = this.changeUnmountOnClose.bind(this);
  }

  toggle() {
    this.setState((prevState: any) => ({
      modal: !prevState.modal
    }));
  }

  changeUnmountOnClose(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    this.setState({ unmountOnClose: JSON.parse(value) });
  }

  render() {
    return (
      <div>
        <Form inline onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <Label for="unmountOnClose">UnmountOnClose value</Label>{' '}
            <Input type="select" name="unmountOnClose" id="unmountOnClose" onChange={this.changeUnmountOnClose}>
              <option value="true">true</option>
              <option value="false">false</option>
            </Input>
          </FormGroup>
          {' '}
          <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        </Form>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} unmountOnClose={this.state.unmountOnClose} scrollable>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Input type="textarea" placeholder="Write something (data should remain in modal if unmountOnClose is set to false)" rows={5} />
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

class ModalExampleFocusAfterClose extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
      focusAfterClose: true
    };
    this.toggle = this.toggle.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  handleSelectChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    this.setState({ focusAfterClose: JSON.parse(value) });
  }

  render() {
    return (
      <div>
        <Form inline onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <Label for="focusAfterClose">Focus After Close</Label>
            <Input className="mx-2" type="select" id="focusAfterClose" onChange={this.handleSelectChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Input>
          </FormGroup>
          <Button color="danger" onClick={this.toggle}>Open</Button>
        </Form>
        <Modal returnFocusAfterClose={this.state.focusAfterClose} isOpen={this.state.open}>
          <ModalBody>
            Observe the "Open" button. It will be focused after close when "returnFocusAfterClose" is true and will not be focused if "returnFocusAfterClose" is false.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Close</Button>
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
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar onToggle={() => {}} a11y>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
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
          <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
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
        <Nav vertical>
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
        <Nav vertical>
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
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
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
          </Dropdown>
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
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
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
          </Dropdown>
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
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
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
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}

class Example82 extends React.Component {
  render() {
    return (
      <Pagination aria-label="Page navigation example">
        <PaginationItem disabled>
          <PaginationLink first href="#" />
        </PaginationItem>
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
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}

class Example83 extends React.Component {
  render() {
    return (
      <Pagination size="lg" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
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
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}

class Example84 extends React.Component {
  render() {
    return (
      <Pagination size="sm" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
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
        <PaginationItem>
          <PaginationLink last href="#" />
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
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle} onClick={() => {}}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
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
        <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle} hideArrow={true}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
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

class PopoverExampleFlipFade extends React.Component<any, any> {
  render() {
    return (
      <Popover target="dummy" flip fade>
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
      </Popover>
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
      <Progress value="1" min="1" max="5" />
      <div className="text-center">50 of 135</div>
      <Progress value={50} max="135" />
      <div className="text-center">75 of 111</div>
      <Progress value={75} min={1} max={111} />
      <div className="text-center">463 of 500</div>
      <Progress value="463" max={500} barAriaValueText="test" barAriaLabelledBy="test" />

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
      <Table responsive="md">
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
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
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

class TooltipExampleFlipFade {
  render() {
    return (
      <Tooltip target="dummy" flip fade>
        Tooltip Content!
      </Tooltip>
    );
  }
}

function Example() {
  return (
    <div>
      <p>Somewhere in here is a <a href="#" id="UncontrolledTooltipExample">tooltip</a>.</p>
      <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample" popperClassName="popperClassName">
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
        <Input type="text" bsSize="lg" {...props} />
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
  private input: HTMLInputElement | null;

  render() {
    return <Input type="file" innerRef={(input) => { this.input = input; }} />;
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
        <Navbar color="faded" dark expand>
          <NavbarToggler onClick={this.toggle} />
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
          <NavbarToggler onClick={this.toggle} />
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
          <NavbarToggler onClick={this.toggle} />
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
          <NavbarToggler onClick={this.toggle} />
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
          <NavbarToggler onClick={this.toggle} />
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

class Example114 extends React.Component<any, any> {
    private element: HTMLElement;

    refFn(r: HTMLElement | null) {
        if (r) {
            this.element = r;
        }
    }

    render() {
        return (
        <div>
            <p>Somewhere in here is a <a href="#" ref={this.refFn}>tooltip</a>.</p>
            <Tooltip placement="bottom-start" isOpen={this.state.tooltipOpen} target={this.element}>
            Hello world!
            </Tooltip>
        </div>
        );
    }
}

class Example115 extends React.Component<any, any> {
    // https://reactstrap.github.io/components/carousel/

    private readonly items = [
        {
          src: 'data:image/svg+xml...',
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src: 'data:image/svg+xml...',
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src: 'data:image/svg+xml...',
          altText: 'Slide 3',
          caption: 'Slide 3'
        }
      ];

    private animating: boolean;

    state: any;
    constructor(props: any) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }

    onExiting() {
      this.animating = true;
    }

    onExited() {
      this.animating = false;
    }

    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === this.items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }

    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? this.items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex: number) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }

    render() {
      const { activeIndex } = this.state;

      const slides = this.items.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      return (
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={this.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      );
    }
  }

const Example116 = (props: any) => {
  return(
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupButtonDropdown addonType="append" isOpen={false}>
          <DropdownToggle caret>
            Button Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupButtonDropdown addonType="prepend" isOpen={true}>
          <Button outline>Split Button</Button>
          <DropdownToggle split outline />
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
        <Input placeholder="and..." />
        <InputGroupAddon addonType="append"><Button color="secondary">I'm a button</Button></InputGroupAddon>
      </InputGroup>
    </div>
  );
};

function Example117() {
    const ref = (e: any) => {};

    <Button ref={ref}/>;
    <Carousel ref={ref} next={null as any} previous={null as any}/>;
    <CarouselItem ref={ref}/>;
    <Collapse ref={ref}/>;
    <Dropdown ref={ref}/>;
    <DropdownItem ref={ref}/>;
    <DropdownToggle ref={ref}/>;
    <Form ref={ref}/>;
    <Input ref={ref}/>;
    <Modal ref={ref}/>;
    <NavLink ref={ref}/>;
    <TabContent ref={ref}/>;
    <Tooltip ref={ref} target={null as any}/>;
    <UncontrolledAlert ref={ref}/>;
    <UncontrolledButtonDropdown ref={ref}/>;
    <UncontrolledDropdown ref={ref}/>;
    <UncontrolledTooltip ref={ref} target={null as any}/>;
    <UncontrolledCollapse ref={ref} target={null as any} toggler="#foobar"/>;
}

function Example118() {
    const ref: React.Ref<any> = React.createRef();

    <Button innerRef={ref}/>;
    <CardLink innerRef={ref}/>;
    <Form innerRef={ref}/>;
    <Input innerRef={ref}/>;
    <NavLink innerRef={ref}/>;
}

import { default as Alert_ } from './lib/Alert'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Badge_ } from './lib/Badge'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Breadcrumb_ } from './lib/Breadcrumb'; /* tslint:disable-line: no-relative-import-in-test */
import { default as BreadcrumbItem_ } from './lib/BreadcrumbItem'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Button_, ButtonProps } from './lib/Button'; /* tslint:disable-line: no-relative-import-in-test */
import { default as ButtonDropdown_ } from './lib/ButtonDropdown'; /* tslint:disable-line: no-relative-import-in-test */
import { default as ButtonGroup_ } from './lib/ButtonGroup'; /* tslint:disable-line: no-relative-import-in-test */
import { default as ButtonToolbar_ } from './lib/ButtonToolbar'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Card_ } from './lib/Card'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CardBody_ } from './lib/CardBody'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CardColumns_ } from './lib/CardColumns'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CardDeck_ } from './lib/CardDeck'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CardFooter_ } from './lib/CardFooter'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CardGroup_ } from './lib/CardGroup'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CardHeader_ } from './lib/CardHeader'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CardImg_ } from './lib/CardImg'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CardImgOverlay_ } from './lib/CardImgOverlay'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CardLink_ } from './lib/CardLink'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CardSubtitle_ } from './lib/CardSubtitle'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CardText_ } from './lib/CardText'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CardTitle_ } from './lib/CardTitle'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Carousel_ } from './lib/Carousel'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CarouselItem_ } from './lib/CarouselItem'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CarouselControl_ } from './lib/CarouselControl'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CarouselIndicators_ } from './lib/CarouselIndicators'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CarouselCaption_ } from './lib/CarouselCaption'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Col_ } from './lib/Col'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Collapse_ } from './lib/Collapse'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Container_ } from './lib/Container'; /* tslint:disable-line: no-relative-import-in-test */
import { default as CustomInput_ } from './lib/CustomInput'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Dropdown_ } from './lib/Dropdown'; /* tslint:disable-line: no-relative-import-in-test */
import { default as DropdownItem_ } from './lib/DropdownItem'; /* tslint:disable-line: no-relative-import-in-test */
import { default as DropdownMenu_ } from './lib/DropdownMenu'; /* tslint:disable-line: no-relative-import-in-test */
import { default as DropdownToggle_ } from './lib/DropdownToggle'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Fade_ } from './lib/Fade'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Form_ } from './lib/Form'; /* tslint:disable-line: no-relative-import-in-test */
import { default as FormFeedback_ } from './lib/FormFeedback'; /* tslint:disable-line: no-relative-import-in-test */
import { default as FormGroup_ } from './lib/FormGroup'; /* tslint:disable-line: no-relative-import-in-test */
import { default as FormText_ } from './lib/FormText'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Input_ } from './lib/Input'; /* tslint:disable-line: no-relative-import-in-test */
import { default as InputGroup_ } from './lib/InputGroup'; /* tslint:disable-line: no-relative-import-in-test */
import { default as InputGroupAddon_ } from './lib/InputGroupAddon'; /* tslint:disable-line: no-relative-import-in-test */
import { default as InputGroupButtonDropdown_ } from './lib/InputGroupButtonDropdown'; /* tslint:disable-line: no-relative-import-in-test */
import { default as InputGroupText_ } from './lib/InputGroupText'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Jumbotron_ } from './lib/Jumbotron'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Label_ } from './lib/Label'; /* tslint:disable-line: no-relative-import-in-test */
import { default as ListGroup_ } from './lib/ListGroup'; /* tslint:disable-line: no-relative-import-in-test */
import { default as ListGroupItem_ } from './lib/ListGroupItem'; /* tslint:disable-line: no-relative-import-in-test */
import { default as ListGroupItemHeading_ } from './lib/ListGroupItemHeading'; /* tslint:disable-line: no-relative-import-in-test */
import { default as ListGroupItemText_ } from './lib/ListGroupItemText'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Media_ } from './lib/Media'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Modal_ } from './lib/Modal'; /* tslint:disable-line: no-relative-import-in-test */
import { default as ModalBody_ } from './lib/ModalBody'; /* tslint:disable-line: no-relative-import-in-test */
import { default as ModalFooter_ } from './lib/ModalFooter'; /* tslint:disable-line: no-relative-import-in-test */
import { default as ModalHeader_ } from './lib/ModalHeader'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Nav_ } from './lib/Nav'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Navbar_ } from './lib/Navbar'; /* tslint:disable-line: no-relative-import-in-test */
import { default as NavbarBrand_ } from './lib/NavbarBrand'; /* tslint:disable-line: no-relative-import-in-test */
import { default as NavbarToggler_ } from './lib/NavbarToggler'; /* tslint:disable-line: no-relative-import-in-test */
import { default as NavItem_ } from './lib/NavItem'; /* tslint:disable-line: no-relative-import-in-test */
import { default as NavLink_ } from './lib/NavLink'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Pagination_ } from './lib/Pagination'; /* tslint:disable-line: no-relative-import-in-test */
import { default as PaginationItem_ } from './lib/PaginationItem'; /* tslint:disable-line: no-relative-import-in-test */
import { default as PaginationLink_ } from './lib/PaginationLink'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Popover_ } from './lib/Popover'; /* tslint:disable-line: no-relative-import-in-test */
import { default as PopoverBody_ } from './lib/PopoverBody'; /* tslint:disable-line: no-relative-import-in-test */
import { default as PopoverHeader_ } from './lib/PopoverHeader'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Progress_ } from './lib/Progress'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Row_ } from './lib/Row'; /* tslint:disable-line: no-relative-import-in-test */
import { default as TabContent_ } from './lib/TabContent'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Table_ } from './lib/Table'; /* tslint:disable-line: no-relative-import-in-test */
import { default as TabPane_ } from './lib/TabPane'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Tag_ } from './lib/Tag'; /* tslint:disable-line: no-relative-import-in-test */
import { default as Tooltip_ } from './lib/Tooltip'; /* tslint:disable-line: no-relative-import-in-test */
import { UncontrolledAlert as UncontrolledAlert_ } from './lib/Uncontrolled'; /* tslint:disable-line: no-relative-import-in-test */
import { UncontrolledButtonDropdown as UncontrolledButtonDropdown_ } from './lib/Uncontrolled'; /* tslint:disable-line: no-relative-import-in-test no-duplicate-imports */
import { UncontrolledDropdown as UncontrolledDropdown_ } from './lib/Uncontrolled'; /* tslint:disable-line: no-relative-import-in-test no-duplicate-imports */
import { UncontrolledTooltip as UncontrolledTooltip_ } from './lib/Uncontrolled'; /* tslint:disable-line: no-relative-import-in-test no-duplicate-imports */
import { UncontrolledCollapse as UncontrolledCollapse_ } from './lib/Uncontrolled'; /* tslint:disable-line: no-relative-import-in-test no-duplicate-imports */

function AnyPropExample() {
  return (
    <React.Fragment >
      <Alert_ foo={1} bar={false} foobar="example" />
      <Badge_ foo={1} bar={false} foobar="example" />
      <Breadcrumb_ foo={1} bar={false} foobar="example" />
      <BreadcrumbItem_ foo={1} bar={false} foobar="example" />
      <Button_ foo={1} bar={false} foobar="example" />
      <ButtonDropdown_ foo={1} bar={false} foobar="example" />
      <ButtonGroup_ foo={1} bar={false} foobar="example" />
      <ButtonToolbar_ foo={1} bar={false} foobar="example" />
      <Card_ foo={1} bar={false} foobar="example" />
      <CardBody_ foo={1} bar={false} foobar="example" />
      <CardColumns_ foo={1} bar={false} foobar="example" />
      <CardDeck_ foo={1} bar={false} foobar="example" />
      <CardFooter_ foo={1} bar={false} foobar="example" />
      <CardGroup_ foo={1} bar={false} foobar="example" />
      <CardHeader_ foo={1} bar={false} foobar="example" />
      <CardImg_ foo={1} bar={false} foobar="example" />
      <CardImgOverlay_ foo={1} bar={false} foobar="example" />
      <CardLink_ foo={1} bar={false} foobar="example" />
      <CardSubtitle_ foo={1} bar={false} foobar="example" />
      <CardText_ foo={1} bar={false} foobar="example" />
      <CardTitle_ foo={1} bar={false} foobar="example" />
      <Carousel_ foo={1} bar={false} foobar="example" next={() => {}} previous={() => {}}/>
      <CarouselItem_ foo={1} bar={false} foobar="example" />
      <CarouselControl_ foo={1} bar={false} foobar="example" direction="next" onClickHandler={() => {}} directionText="" />
      <CarouselIndicators_ foo={1} bar={false} foobar="example" items={[]} activeIndex={-1} onClickHandler={() => {}} />
      <CarouselCaption_ foo={1} bar={false} foobar="example" captionText="" />
      <Col_ foo={1} bar={false} foobar="example" />
      <Collapse_ foo={1} bar={false} foobar="example" />
      <Container_ foo={1} bar={false} foobar="example" />
      <CustomInput_ foo={1} bar={false} foobar="example" type="file" />
      <Dropdown_ foo={1} bar={false} foobar="example" />
      <DropdownItem_ foo={1} bar={false} foobar="example" />
      <DropdownMenu_ foo={1} bar={false} foobar="example" />
      <DropdownToggle_ foo={1} bar={false} foobar="example" />
      <Fade_ foo={1} bar={false} foobar="example" />
      <Form_ foo={1} bar={false} foobar="example" />
      <FormFeedback_ foo={1} bar={false} foobar="example" />
      <FormGroup_ foo={1} bar={false} foobar="example" />
      <FormText_ foo={1} bar={false} foobar="example" />
      <Input_ foo={1} bar={false} foobar="example" />
      <InputGroup_ foo={1} bar={false} foobar="example" />
      <InputGroupAddon_ foo={1} bar={false} foobar="example" addonType="prepend" />
      <InputGroupButtonDropdown_ foo={1} bar={false} foobar="example" addonType="prepend" />
      <InputGroupText_ foo={1} bar={false} foobar="example" />
      <Jumbotron_ foo={1} bar={false} foobar="example" />
      <Label_ foo={1} bar={false} foobar="example" />
      <ListGroup_ foo={1} bar={false} foobar="example" />
      <ListGroupItem_ foo={1} bar={false} foobar="example" />
      <ListGroupItemHeading_ foo={1} bar={false} foobar="example" />
      <ListGroupItemText_ foo={1} bar={false} foobar="example" />
      <Media_ foo={1} bar={false} foobar="example" />
      <Modal_ foo={1} bar={false} foobar="example" />
      <ModalBody_ foo={1} bar={false} foobar="example" />
      <ModalFooter_ foo={1} bar={false} foobar="example" />
      <ModalHeader_ foo={1} bar={false} foobar="example" />
      <Nav_ foo={1} bar={false} foobar="example" />
      <Navbar_ foo={1} bar={false} foobar="example" />
      <NavbarBrand_ foo={1} bar={false} foobar="example" />
      <NavbarToggler_ foo={1} bar={false} foobar="example" />
      <NavItem_ foo={1} bar={false} foobar="example" />
      <NavLink_ foo={1} bar={false} foobar="example" />
      <Pagination_ foo={1} bar={false} foobar="example" />
      <PaginationItem_ foo={1} bar={false} foobar="example" />
      <PaginationLink_ foo={1} bar={false} foobar="example" />
      <Popover_ foo={1} bar={false} foobar="example" target="" />
      <PopoverBody_ foo={1} bar={false} foobar="example" />
      <PopoverHeader_ foo={1} bar={false} foobar="example" />
      <Progress_ foo={1} bar={false} foobar="example" />
      <Row_ foo={1} bar={false} foobar="example" />
      <TabContent_ foo={1} bar={false} foobar="example" />
      <Table_ foo={1} bar={false} foobar="example" />
      <TabPane_ foo={1} bar={false} foobar="example" />
      <Tag_ foo={1} bar={false} foobar="example" />
      <Tooltip_ foo={1} bar={false} foobar="example" target="" />
      <UncontrolledAlert_ foo={1} bar={false} foobar="example" />
      <UncontrolledButtonDropdown_ foo={1} bar={false} foobar="example" />
      <UncontrolledDropdown_ foo={1} bar={false} foobar="example" />
      <UncontrolledTooltip_ foo={1} bar={false} foobar="example" target="" />
      <UncontrolledCollapse_ foo={1} bar={false} foobar="example" target="" toggler="#foobar" />
    </React.Fragment >
  );
}

interface GenericInterface {
  foo: number;
  bar: boolean;
  foobar?: string;
}
class AlertGeneric extends Alert<GenericInterface> {}
class BadgeGeneric extends Badge<GenericInterface> {}
class BreadcrumbGeneric extends Breadcrumb<GenericInterface> {}
class BreadcrumbItemGeneric extends BreadcrumbItem<GenericInterface> {}
class ButtonGeneric extends Button<GenericInterface> {}
class ButtonDropdownGeneric extends ButtonDropdown<GenericInterface> {}
class ButtonGroupGeneric extends ButtonGroup<GenericInterface> {}
class ButtonToolbarGeneric extends ButtonToolbar<GenericInterface> {}
class CardGeneric extends Card<GenericInterface> {}
class CardBodyGeneric extends CardBody<GenericInterface> {}
class CardColumnsGeneric extends CardColumns<GenericInterface> {}
class CardDeckGeneric extends CardDeck<GenericInterface> {}
class CardFooterGeneric extends CardFooter<GenericInterface> {}
class CardGroupGeneric extends CardGroup<GenericInterface> {}
class CardHeaderGeneric extends CardHeader<GenericInterface> {}
class CardImgGeneric extends CardImg<GenericInterface> {}
class CardImgOverlayGeneric extends CardImgOverlay<GenericInterface> {}
class CardLinkGeneric extends CardLink<GenericInterface> {}
class CardSubtitleGeneric extends CardSubtitle<GenericInterface> {}
class CardTextGeneric extends CardText<GenericInterface> {}
class CardTitleGeneric extends CardTitle<GenericInterface> {}
class CarouselGeneric extends Carousel<GenericInterface> {}
class CarouselItemGeneric extends CarouselItem<GenericInterface> {}
class CarouselControlGeneric extends CarouselControl<GenericInterface> {}
class CarouselIndicatorsGeneric extends CarouselIndicators<GenericInterface> {}
class CarouselCaptionGeneric extends CarouselCaption<GenericInterface> {}
class ColGeneric extends Col<GenericInterface> {}
class CollapseGeneric extends Collapse<GenericInterface> {}
class ContainerGeneric extends Container<GenericInterface> {}
class CustomInputGeneric extends CustomInput<GenericInterface> {}
class DropdownGeneric extends Dropdown<GenericInterface> {}
class DropdownItemGeneric extends DropdownItem<GenericInterface> {}
class DropdownMenuGeneric extends DropdownMenu<GenericInterface> {}
class DropdownToggleGeneric extends DropdownToggle<GenericInterface> {}
class FadeGeneric extends Fade<GenericInterface> {}
class FormGeneric extends Form<GenericInterface> {}
class FormFeedbackGeneric extends FormFeedback<GenericInterface> {}
class FormGroupGeneric extends FormGroup<GenericInterface> {}
class FormTextGeneric extends FormText<GenericInterface> {}
class InputGeneric extends Input<GenericInterface> {}
class InputGroupGeneric extends InputGroup<GenericInterface> {}
class InputGroupAddonGeneric extends InputGroupAddon<GenericInterface> {}
class InputGroupButtonDropdownGeneric extends InputGroupButtonDropdown<GenericInterface> {}
class InputGroupTextGeneric extends InputGroupText<GenericInterface> {}
class JumbotronGeneric extends Jumbotron<GenericInterface> {}
class LabelGeneric extends Label<GenericInterface> {}
class ListGroupGeneric extends ListGroup<GenericInterface> {}
class ListGroupItemGeneric extends ListGroupItem<GenericInterface> {}
class ListGroupItemHeadingGeneric extends ListGroupItemHeading<GenericInterface> {}
class ListGroupItemTextGeneric extends ListGroupItemText<GenericInterface> {}
class MediaGeneric extends Media<GenericInterface> {}
class ModalGeneric extends Modal<GenericInterface> {}
class ModalBodyGeneric extends ModalBody<GenericInterface> {}
class ModalFooterGeneric extends ModalFooter<GenericInterface> {}
class ModalHeaderGeneric extends ModalHeader<GenericInterface> {}
class NavGeneric extends Nav<GenericInterface> {}
class NavbarGeneric extends Navbar<GenericInterface> {}
class NavbarBrandGeneric extends NavbarBrand<GenericInterface> {}
class NavbarTogglerGeneric extends NavbarToggler<GenericInterface> {}
class NavItemGeneric extends NavItem<GenericInterface> {}
class NavLinkGeneric extends NavLink<GenericInterface> {}
class PaginationGeneric extends Pagination<GenericInterface> {}
class PaginationItemGeneric extends PaginationItem<GenericInterface> {}
class PaginationLinkGeneric extends PaginationLink<GenericInterface> {}
class PopoverGeneric extends Popover<GenericInterface> {}
class PopoverBodyGeneric extends PopoverBody<GenericInterface> {}
class PopoverHeaderGeneric extends PopoverHeader<GenericInterface> {}
class ProgressGeneric extends Progress<GenericInterface> {}
class RowGeneric extends Row<GenericInterface> {}
class TabContentGeneric extends TabContent<GenericInterface> {}
class TableGeneric extends Table<GenericInterface> {}
class TabPaneGeneric extends TabPane<GenericInterface> {}
class TagGeneric extends Tag<GenericInterface> {}
class TooltipGeneric extends Tooltip<GenericInterface> {}
class UncontrolledAlertGeneric extends UncontrolledAlert<GenericInterface> {}
class UncontrolledButtonDropdownGeneric extends UncontrolledButtonDropdown<GenericInterface> {}
class UncontrolledDropdownGeneric extends UncontrolledDropdown<GenericInterface> {}
class UncontrolledTooltipGeneric extends UncontrolledTooltip<GenericInterface> {}
class UncontrolledCollapseGeneric extends UncontrolledCollapse<GenericInterface> {}

function GenericPropExample() {
  return (
    <React.Fragment >
      <AlertGeneric foo={1} bar={false} foobar="example" />
      <BadgeGeneric foo={1} bar={false} foobar="example" />
      <BreadcrumbGeneric foo={1} bar={false} foobar="example" />
      <BreadcrumbItemGeneric foo={1} bar={false} foobar="example" />
      <ButtonGeneric foo={1} bar={false} foobar="example" />
      <ButtonDropdownGeneric foo={1} bar={false} foobar="example" />
      <ButtonGroupGeneric foo={1} bar={false} foobar="example" />
      <ButtonToolbarGeneric foo={1} bar={false} foobar="example" />
      <CardGeneric foo={1} bar={false} foobar="example" />
      <CardBodyGeneric foo={1} bar={false} foobar="example" />
      <CardColumnsGeneric foo={1} bar={false} foobar="example" />
      <CardDeckGeneric foo={1} bar={false} foobar="example" />
      <CardFooterGeneric foo={1} bar={false} foobar="example" />
      <CardGroupGeneric foo={1} bar={false} foobar="example" />
      <CardHeaderGeneric foo={1} bar={false} foobar="example" />
      <CardImgGeneric foo={1} bar={false} foobar="example" />
      <CardImgOverlayGeneric foo={1} bar={false} foobar="example" />
      <CardLinkGeneric foo={1} bar={false} foobar="example" />
      <CardSubtitleGeneric foo={1} bar={false} foobar="example" />
      <CardTextGeneric foo={1} bar={false} foobar="example" />
      <CardTitleGeneric foo={1} bar={false} foobar="example" />
      <CarouselGeneric foo={1} bar={false} foobar="example" next={() => {}} previous={() => {}}/>
      <CarouselItemGeneric foo={1} bar={false} foobar="example" />
      <CarouselControlGeneric foo={1} bar={false} foobar="example" direction="next" onClickHandler={() => {}} directionText="" />
      <CarouselIndicatorsGeneric foo={1} bar={false} foobar="example" items={[]} activeIndex={-1} onClickHandler={() => {}} />
      <CarouselCaptionGeneric foo={1} bar={false} foobar="example" captionText="" />
      <ColGeneric foo={1} bar={false} foobar="example" />
      <CollapseGeneric foo={1} bar={false} foobar="example" />
      <ContainerGeneric foo={1} bar={false} foobar="example" />
      <CustomInputGeneric foo={1} bar={false} foobar="example" type="file" />
      <DropdownGeneric foo={1} bar={false} foobar="example" />
      <DropdownItemGeneric foo={1} bar={false} foobar="example" />
      <DropdownMenuGeneric foo={1} bar={false} foobar="example" />
      <DropdownToggleGeneric foo={1} bar={false} foobar="example" />
      <FadeGeneric foo={1} bar={false} foobar="example" />
      <FormGeneric foo={1} bar={false} foobar="example" />
      <FormFeedbackGeneric foo={1} bar={false} foobar="example" />
      <FormGroupGeneric foo={1} bar={false} foobar="example" />
      <FormTextGeneric foo={1} bar={false} foobar="example" />
      <InputGeneric foo={1} bar={false} foobar="example" />
      <InputGroupGeneric foo={1} bar={false} foobar="example" />
      <InputGroupAddonGeneric foo={1} bar={false} foobar="example" addonType="prepend" />
      <InputGroupButtonDropdownGeneric foo={1} bar={false} foobar="example" addonType="prepend" />
      <InputGroupTextGeneric foo={1} bar={false} foobar="example" />
      <JumbotronGeneric foo={1} bar={false} foobar="example" />
      <LabelGeneric foo={1} bar={false} foobar="example" />
      <ListGroupGeneric foo={1} bar={false} foobar="example" />
      <ListGroupItemGeneric foo={1} bar={false} foobar="example" />
      <ListGroupItemHeadingGeneric foo={1} bar={false} foobar="example" />
      <ListGroupItemTextGeneric foo={1} bar={false} foobar="example" />
      <MediaGeneric foo={1} bar={false} foobar="example" />
      <ModalGeneric foo={1} bar={false} foobar="example" />
      <ModalBodyGeneric foo={1} bar={false} foobar="example" />
      <ModalFooterGeneric foo={1} bar={false} foobar="example" />
      <ModalHeaderGeneric foo={1} bar={false} foobar="example" />
      <NavGeneric foo={1} bar={false} foobar="example" />
      <NavbarGeneric foo={1} bar={false} foobar="example" />
      <NavbarBrandGeneric foo={1} bar={false} foobar="example" />
      <NavbarTogglerGeneric foo={1} bar={false} foobar="example" />
      <NavItemGeneric foo={1} bar={false} foobar="example" />
      <NavLinkGeneric foo={1} bar={false} foobar="example" />
      <PaginationGeneric foo={1} bar={false} foobar="example" />
      <PaginationItemGeneric foo={1} bar={false} foobar="example" />
      <PaginationLinkGeneric foo={1} bar={false} foobar="example" />
      <PopoverGeneric foo={1} bar={false} foobar="example" target="" />
      <PopoverBodyGeneric foo={1} bar={false} foobar="example" />
      <PopoverHeaderGeneric foo={1} bar={false} foobar="example" />
      <ProgressGeneric foo={1} bar={false} foobar="example" />
      <RowGeneric foo={1} bar={false} foobar="example" />
      <TabContentGeneric foo={1} bar={false} foobar="example" />
      <TableGeneric foo={1} bar={false} foobar="example" />
      <TabPaneGeneric foo={1} bar={false} foobar="example" />
      <TagGeneric foo={1} bar={false} foobar="example" />
      <TooltipGeneric foo={1} bar={false} foobar="example" target="" />
      <UncontrolledAlertGeneric foo={1} bar={false} foobar="example" />
      <UncontrolledButtonDropdownGeneric foo={1} bar={false} foobar="example" />
      <UncontrolledDropdownGeneric foo={1} bar={false} foobar="example" />
      <UncontrolledTooltipGeneric foo={1} bar={false} foobar="example" target="" />
      <UncontrolledCollapseGeneric foo={1} bar={false} foobar="example" target="" toggler="#foobar" />
    </React.Fragment >
  );
}

class Example119 extends React.Component<any, any> {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleCheckbox">Checkboxes</Label>
          <div>
            <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
            <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
            <CustomInput type="checkbox" id="exampleCustomCheckbox3" label={<span>Or this one</span>} />
            <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="But not this disabled one" disabled />
            <CustomInput type="checkbox" id="exampleCustomCheckbox5" label="Can't click this label to check!" htmlFor="exampleCustomCheckbox5_X" disabled />
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCheckbox">Radios</Label>
          <div>
            <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Select this custom radio" />
            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Or this one" />
            <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label={<span>Or this one</span>} />
            <CustomInput type="radio" id="exampleCustomRadio4" label="But not this disabled one" disabled />
            <CustomInput type="radio" id="exampleCustomRadio5" label="Can't click this label to select!" htmlFor="exampleCustomRadio5_X" disabled />
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCheckbox">Inline</Label>
          <div>
            <CustomInput type="checkbox" id="exampleCustomInline" label="An inline custom input" inline />
            <CustomInput type="checkbox" id="exampleCustomInline2" label="and another one" inline />
            <CustomInput type="checkbox" id="exampleCustomInline3" label={<span>and this one</span>} inline />
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomSelect">Custom Select</Label>
          <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
            <option value="">Select</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
            <option>Value 4</option>
            <option>Value 5</option>
          </CustomInput>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomMutlipleSelect">Custom Multiple Select</Label>
          <CustomInput type="select" id="exampleCustomMutlipleSelect" name="customSelect" multiple>
            <option value="">Select</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
            <option>Value 4</option>
            <option>Value 5</option>
          </CustomInput>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomSelectDisabled">Custom Select Disabled</Label>
          <CustomInput type="select" id="exampleCustomSelectDisabled" name="customSelect" disabled>
            <option value="">Select</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
            <option>Value 4</option>
            <option>Value 5</option>
          </CustomInput>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomMutlipleSelectDisabled">Custom Multiple Select Disabled</Label>
          <CustomInput type="select" id="exampleCustomMutlipleSelectDisabled" name="customSelect" multiple disabled>
            <option value="">Select</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
            <option>Value 4</option>
            <option>Value 5</option>
          </CustomInput>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomRange">Custom Range</Label>
          <CustomInput type="range" id="exampleCustomRange" name="customRange" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomFileBrowser">File Browser</Label>
          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomFileBrowser">File Browser with Custom Label</Label>
          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Yo, pick a file!" />
          <CustomInput type="file" id="exampleCustomFileBrowser1" name="customFile" label={<span>Yo, pick a file!</span>} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomFileBrowser">File Browser Disabled</Label>
          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" disabled />
        </FormGroup>
      </Form>
    );
  }
}

class Example120 extends React.Component<any, any> {
  render() {
    return (
      <Table borderless>
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

class Example121 extends React.Component<any, any> {
  render() {
    return (
      <UncontrolledDropdown className="some-class" setActiveFromChild>
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
}

class Example122 extends React.Component<any, any> {
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
        <DropdownMenu persist>
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

function Example123() {
  return(
    <div>
      <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
        Toggle
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <Card>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
            dignissimos esse fuga! Minus, alias.
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
}

function Example124()  {
  // https://reactstrap.github.io/components/carousel/
  const items = [
    {
      src: 'data:image/svg+xml...',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: 'data:image/svg+xml...',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: 'data:image/svg+xml...',
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];

  return (
    <UncontrolledCarousel items={items} />
  );
}

function Example125() {
  return (
    <div>
      <Spinner />
      <Spinner color="primary" />
      <Spinner size="sm" />
      <Spinner type="grow" />
      <Spinner color="success" size="sm" type="grow" />
      <Spinner className="customClass" />
    </div>
  );
}

function Example126() {
    return (
        <div>
            <UncontrolledPopover placement="bottom" target="UncontrolledPopover" popperClassName="popperClassName">
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>Lorem ipsum dolor sit amet</PopoverBody>
            </UncontrolledPopover>
            <UncontrolledPopover defaultOpen={true} placement="bottom" target="UncontrolledPopover">
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>Lorem ipsum dolor sit amet</PopoverBody>
            </UncontrolledPopover>
        </div>
    );
}

function Example127() {
    return (
        <div>
            <Toast>
                <ToastHeader icon="primary">
                    Reactstrap
                </ToastHeader>
                <ToastBody>
                    This is a toast with a primary icon — check it out!
                </ToastBody>
            </Toast>
            <Toast fade={false}>
                <ToastHeader icon={<Spinner/>} toggle={() => {}}>
                    Reactstrap
                </ToastHeader>
                <ToastBody>
                    This is a toast with a custom icon — check it out!
                </ToastBody>
            </Toast>
        </div>
    );
}

function Example128() {
  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
}

class Example129 extends React.Component<any, any> {
    constructor(props: any) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false,
      };
    }

    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen,
      });
    }

    render() {
      return (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu persist positionFixed>
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

class Example130 extends React.Component {
  render() {
    return (
      <>
        <Carousel
          activeIndex={1}
          next={() => {}}
          previous={() => {}}
          enableTouch={false}
        >
          <CarouselIndicators items={[]} activeIndex={1} onClickHandler={() => {}} />
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => {}} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={() => {}} />
        </Carousel>
        <Carousel
          activeIndex={1}
          next={() => {}}
          previous={() => {}}
          enableTouch={true}
        >
          <CarouselIndicators items={[]} activeIndex={1} onClickHandler={() => {}} />
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => {}} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={() => {}} />
        </Carousel>
        <UncontrolledCarousel
          activeIndex={1}
          next={() => {}}
          previous={() => {}}
          enableTouch={false}
          items={[]}
        >
          <CarouselIndicators items={[]} activeIndex={1} onClickHandler={() => {}} />
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => {}} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={() => {}} />
        </UncontrolledCarousel>
        <UncontrolledCarousel
          activeIndex={1}
          next={() => {}}
          previous={() => {}}
          enableTouch={true}
          items={[]}
        >
          <CarouselIndicators items={[]} activeIndex={1} onClickHandler={() => {}} />
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => {}} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={() => {}} />
        </UncontrolledCarousel>
      </>
    );
  }
}

const CustomInputTestInnerRef = () => {
  const ref = React.createRef<HTMLButtonElement>();
  return (<CustomInput type="checkbox" innerRef={ref} />);
};

const PopoverTestInnerRef = () => {
  const target = React.createRef<HTMLButtonElement>();
  const container = React.createRef<HTMLDivElement>();
  return (<Popover target={target} container={container}>Yo!</Popover>);
};

const UncontrolledTooltipTestInnerRef = () => {
  const target = React.createRef<HTMLButtonElement>();
  const container = React.createRef<HTMLDivElement>();
  return (<UncontrolledTooltip target={target} container={container}>Yo!</UncontrolledTooltip>);
};

const UtilTest = () => {
  Util.setGlobalCssModule({
    btn: 'btn2'
  });
};

const ScheduleUpdate = () => {
  return (
    <>
      <UncontrolledPopover trigger="click" placement="top" target="ScheduleUpdateButton">
        {({ scheduleUpdate }) => (
          <div>test</div>
        )}
      </UncontrolledPopover>
      <UncontrolledTooltip placement="top" target="ScheduleUpdateTooltip" trigger="click">
        {({ scheduleUpdate }) => (
          <div>test</div>
        )}
      </UncontrolledTooltip>
    </>
  );
};

const noop = () => {};

const htmlProps: Pick<React.HTMLAttributes<HTMLElement>, 'id' | 'className' | 'style' | 'onClick'> = {
  id: 'id',
  className: 'className',
  style: { backgroundColor: '#fff' },
  onClick: noop
};

const MegaTest = () => {
  return (
    <>
      <Alert
        ref={React.createRef<Alert>()}
        {...htmlProps}
      />
      <Badge
        ref={React.createRef<Badge>()}
        {...htmlProps}
      />
      <Breadcrumb
        ref={React.createRef<Breadcrumb>()}
        {...htmlProps}
      />
      <BreadcrumbItem
        ref={React.createRef<BreadcrumbItem>()}
        {...htmlProps}
      />
      <Button
        ref={React.createRef<Button>()}
        {...htmlProps}
      />
      <ButtonGroup
        ref={React.createRef<ButtonGroup>()}
        {...htmlProps}
      />
      <ButtonToggle
        ref={React.createRef<ButtonToggle>()}
        {...htmlProps}
      />
      <ButtonToolbar
        ref={React.createRef<ButtonToolbar>()}
        {...htmlProps}
      />
      <Card
        ref={React.createRef<Card>()}
        {...htmlProps}
      />
      <CardBody
        ref={React.createRef<CardBody>()}
        {...htmlProps}
      />
      <CardColumns
        ref={React.createRef<CardColumns>()}
        {...htmlProps}
      />
      <CardDeck
        ref={React.createRef<CardDeck>()}
        {...htmlProps}
      />
      <CardFooter
        ref={React.createRef<CardFooter>()}
        {...htmlProps}
      />
      <CardGroup
        ref={React.createRef<CardGroup>()}
        {...htmlProps}
      />
      <CardHeader
        ref={React.createRef<CardHeader>()}
        {...htmlProps}
      />
      <CardImg
        ref={React.createRef<CardImg>()}
        {...htmlProps}
      />
      <CardImgOverlay
        ref={React.createRef<CardImgOverlay>()}
        {...htmlProps}
      />
      <CardLink
        ref={React.createRef<CardLink>()}
        {...htmlProps}
      />
      <CardSubtitle
        ref={React.createRef<CardSubtitle>()}
        {...htmlProps}
      />
      <CardText
        ref={React.createRef<CardText>()}
        {...htmlProps}
      />
      <CardTitle
        ref={React.createRef<CardTitle>()}
        {...htmlProps}
      />
      <Carousel
        ref={React.createRef<Carousel>()}
        {...htmlProps}
        previous={noop}
        next={noop}
      />
      <CarouselCaption
        ref={React.createRef<CarouselCaption>()}
        {...htmlProps}
        captionText="a"
      />
      <CarouselControl
        ref={React.createRef<CarouselControl>()}
        {...htmlProps}
        direction="next"
        onClickHandler={noop}
      />
      <CarouselIndicators
        ref={React.createRef<CarouselIndicators>()}
        {...htmlProps}
        items={[]}
        onClickHandler={noop}
        activeIndex={1}
      />
      <CarouselItem
        ref={React.createRef<CarouselItem>()}
        {...htmlProps}
      />
      <Col
        ref={React.createRef<Col>()}
        {...htmlProps}
      />
      <Collapse
        ref={React.createRef<Collapse>()}
        {...htmlProps}
      />
      <Container
        ref={React.createRef<Container>()}
        {...htmlProps}
      />
      <CustomInput
        ref={React.createRef<CustomInput>()}
        {...htmlProps}
        type="checkbox"
      />
      <Dropdown
        ref={React.createRef<Dropdown>()}
        {...htmlProps}
      />
      <DropdownItem
        ref={React.createRef<DropdownItem<{}>>()}
        {...htmlProps}
      />
      <DropdownMenu
        ref={React.createRef<DropdownMenu>()}
        {...htmlProps}
      />
      <DropdownToggle
        ref={React.createRef<DropdownToggle<{}>>()}
        {...htmlProps}
      />
      <Fade
        ref={React.createRef<Fade>()}
        {...htmlProps}
      />
      <Form
        ref={React.createRef<Form<{}>>()}
        {...htmlProps}
      />
      <FormFeedback
        ref={React.createRef<FormFeedback>()}
        {...htmlProps}
      />
      <FormGroup
        ref={React.createRef<FormGroup>()}
        {...htmlProps}
      />
      <FormText
        ref={React.createRef<FormText>()}
        {...htmlProps}
      />
      <Input
        ref={React.createRef<Input<{}>>()}
        {...htmlProps}
      />
      <InputGroup
        ref={React.createRef<InputGroup>()}
        {...htmlProps}
      />
      <InputGroupAddon
        ref={React.createRef<InputGroupAddon>()}
        {...htmlProps}
        addonType="append"
      />
      <InputGroupText
        ref={React.createRef<InputGroupText>()}
        {...htmlProps}
      />
      <Jumbotron
        ref={React.createRef<Jumbotron>()}
        {...htmlProps}
      />
      <Label
        ref={React.createRef<Label>()}
        {...htmlProps}
      />
      <ListGroup
        ref={React.createRef<ListGroup>()}
        {...htmlProps}
      />
      <ListGroupItem
        ref={React.createRef<ListGroupItem>()}
        {...htmlProps}
      />
      <ListGroupItemHeading
        ref={React.createRef<ListGroupItemHeading>()}
        {...htmlProps}
      />
      <ListGroupItemText
        ref={React.createRef<ListGroupItemText>()}
        {...htmlProps}
      />
      <Media
        ref={React.createRef<Media>()}
        {...htmlProps}
      />
      <Modal
        ref={React.createRef<Modal<{}>>()}
        {...htmlProps}
      />
      <ModalBody
        ref={React.createRef<ModalBody>()}
        {...htmlProps}
      />
      <ModalFooter
        ref={React.createRef<ModalFooter>()}
        {...htmlProps}
      />
      <ModalHeader
        ref={React.createRef<ModalHeader>()}
        {...htmlProps}
      />
      <Nav
        ref={React.createRef<Nav>()}
        {...htmlProps}
      />
      <NavItem
        ref={React.createRef<NavItem>()}
        {...htmlProps}
      />
      <NavLink
        ref={React.createRef<NavLink<{}>>()}
        {...htmlProps}
      />
      <Navbar
        ref={React.createRef<Navbar>()}
        {...htmlProps}
      />
      <NavbarBrand
        ref={React.createRef<NavbarBrand>()}
        {...htmlProps}
      />
      <NavbarText
        ref={React.createRef<NavbarText>()}
        {...htmlProps}
      />
      <NavbarToggler
        ref={React.createRef<NavbarToggler>()}
        {...htmlProps}
      />
      <Pagination
        ref={React.createRef<Pagination>()}
        {...htmlProps}
      />
      <PaginationItem
        ref={React.createRef<PaginationItem>()}
        {...htmlProps}
      />
      <PaginationLink
        ref={React.createRef<PaginationLink>()}
        {...htmlProps}
      />
      <Popover
        ref={React.createRef<Popover<{}>>()}
        {...htmlProps}
        target="a"
      />
      <PopoverBody
        ref={React.createRef<PopoverBody>()}
        {...htmlProps}
      />
      <PopoverHeader
        ref={React.createRef<PopoverHeader>()}
        {...htmlProps}
      />
      <Progress
        ref={React.createRef<Progress>()}
        {...htmlProps}
      />
      <Row
        ref={React.createRef<Row>()}
        {...htmlProps}
      />
      <Spinner
        ref={React.createRef<Spinner>()}
        {...htmlProps}
      />
      <TabContent
        ref={React.createRef<TabContent<{}>>()}
        {...htmlProps}
      />
      <TabPane
        ref={React.createRef<TabPane>()}
        {...htmlProps}
      />
      <Table
        ref={React.createRef<Table>()}
        {...htmlProps}
      />
      <Tag
        ref={React.createRef<Tag>()}
        {...htmlProps}
      />
      <Toast
        ref={React.createRef<Toast<{}>>()}
        {...htmlProps}
        target="a"
      />
      <ToastBody
        ref={React.createRef<ToastBody>()}
        {...htmlProps}
      />
      <ToastHeader
        ref={React.createRef<ToastHeader>()}
        {...htmlProps}
      />
      <Tooltip
        ref={React.createRef<Tooltip<{}>>()}
        {...htmlProps}
        target="a"
      />
    </>
  );
};
