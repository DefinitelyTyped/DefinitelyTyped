// Type definitions for react-bootstrap 0.31
// Project: https://github.com/react-bootstrap/react-bootstrap
// Definitions by: Walker Burgin <https://github.com/walkerburgin>,
//                 Vincent Siao <https://github.com/vsiao>,
//                 Danilo Barros <https://github.com/danilojrr>,
//                 Batbold Gansukh <https://github.com/Batbold-Gansukh>,
//                 Raymond May Jr. <https://github.com/octatone>,
//                 Cheng Sieu Ly <https://github.com/chengsieuly>,
//                 Kat Busch <https://github.com/katbusch>,
//                 Vito Samson <https://github.com/vitosamson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export type Sizes = 'xs' | 'xsmall' | 'sm' | 'small' | 'medium' | 'lg' | 'large';

export interface SelectCallback extends React.EventHandler<any> {
  (eventKey: any, e: React.SyntheticEvent<{}>): void;
  /**
   * @deprecated
   * This signature is a hack so can still derive from HTMLProps.
   * It does not reflect the underlying event and should not be used.
   */
  (e: React.MouseEvent<{}>): void;
}

export interface TransitionCallbacks {
  onEnter?(node: HTMLElement): any;
  onEntered?(node: HTMLElement): any;
  onEntering?(node: HTMLElement): any;
  onExit?(node: HTMLElement): any;
  onExited?(node: HTMLElement): any;
  onExiting?(node: HTMLElement): any;
}

export {
  Accordion,
  Alert,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Carousel,
  CarouselCaption,
  CarouselItem,
  Checkbox,
  Clearfix,
  Col,
  Collapse,
  ControlLabel,
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormControl,
  FormControlFeedback,
  FormControlStatic,
  FormGroup,
  Glyphicon,
  Grid,
  HelpBlock,
  Image,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  Jumbotron,
  Label,
  ListGroup,
  ListGroupItem,
  Media,
  MediaBody,
  MediaHeading,
  MediaLeft,
  MediaList,
  MediaListItem,
  MediaRight,
  MenuItem,
  Modal,
  ModalBody,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarHeader,
  NavbarToggle,
  NavDropdown,
  NavItem,
  Overlay,
  OverlayTrigger,
  PageHeader,
  PageItem,
  Pager,
  PagerItem,
  Pagination,
  PaginationButton,
  Panel,
  PanelGroup,
  Popover,
  ProgressBar,
  Radio,
  ResponsiveEmbed,
  Row,
  SafeAnchor,
  SplitButton,
  SplitToggle,
  Tab,
  TabContainer,
  TabContent,
  Table,
  TabPane,
  Tabs,
  Thumbnail,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Well,
  utils,
} from './lib';
