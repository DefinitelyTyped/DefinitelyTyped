import * as React from 'react';
import {Component, PropTypes} from 'react';
import * as ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {muiThemeable} from 'material-ui/styles/muiThemeable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {MuiTheme} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
import Checkbox from 'material-ui/Checkbox';
import Chip from 'material-ui/Chip';
import CircularProgress from 'material-ui/CircularProgress';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import LinearProgress from 'material-ui/LinearProgress';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import SelectField from 'material-ui/SelectField';
import Slider from 'material-ui/Slider';
import Snackbar from 'material-ui/Snackbar';
import Subheader from 'material-ui/Subheader';
import SvgIcon from 'material-ui/SvgIcon';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import Toggle from 'material-ui/Toggle';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import {makeSelectable} from 'material-ui/List';
import {Menu} from 'material-ui/Menu';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Step, Stepper, StepLabel, StepContent, StepButton} from 'material-ui/Stepper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import {
    Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter
} from 'material-ui/Table';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentLink from 'material-ui/svg-icons/content/link';
import ContentSend from 'material-ui/svg-icons/content/send';
import Delete from 'material-ui/svg-icons/action/delete';
import Download from 'material-ui/svg-icons/file/file-download';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FolderIcon from 'material-ui/svg-icons/file/folder-open';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import {
    cyan500, cyan700, grey100, grey300, grey400, grey500, pinkA200, white, darkBlack, fullBlack, blue300, indigo900,
    orange200, deepOrange300, pink400, purple500, fullWhite, blue500, red500, greenA200, yellow500, transparent,
    yellow600, indigo500, lightBlack, orange500
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import {default as withWidth} from 'material-ui/utils/withWidth';


import injectTapEventPlugin = require('react-tap-event-plugin');

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles: { [key: string]: React.CSSProperties } = {
  title: {
    cursor: 'pointer',
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  button: {
    margin: 12,
  },
  chip: {
    margin: 4
  },
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
  radioButton: {
    marginTop: 16,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
    justifyContent: 'space-around' as 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
  customWidth: {
    width: 200,
  },
  h3: {
    marginTop: 20,
    fontWeight: 400 as 400,
  },
  block: {
    display: 'flex',
    maxWidth: 250,
  },
  block2: {
    margin: 10,
  },
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
  checkbox: {
    marginBottom: 16,
  },
  toggle: {
    marginBottom: 16,
  },
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400 as 400,
  },
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

const style = {
  marginRight: 20,
  marginLeft: 20,
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

const iconStyles = {
  marginRight: 24,
};

// "http://www.material-ui.com/#/customization/themes"

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

const darkMuiTheme = getMuiTheme(darkBaseTheme);

const lightBaseTheme = {
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56,
  },
  button: {
    textTransform: "lowercase"
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};

const lightMuiTheme = getMuiTheme(lightBaseTheme);


class DeepDownTheTree extends React.Component<{} & {muiTheme: MuiTheme}> {
  static propTypes: React.ValidationMap<any> = {
    muiTheme: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <span style={{color: this.props.muiTheme.palette.textColor}}>
        Hello World!
      </span>
    );
  }
}

type Props = { label: string, muiTheme?: MuiTheme };
const MuiThemeableFunction = muiThemeable()<React.StatelessComponent<Props>, Props>(props => {
  return (
      <span style={{color: props.muiTheme.palette.textColor}}>
        Applied the Theme to functional component: {props.label}.
      </span>
  );
});

@muiThemeable()
class MuiThemeableClass extends React.Component<{label: string} & {muiTheme?: MuiTheme}> {
  render() {
    return (
      <span style={{color: this.props.muiTheme.palette.textColor}}>
        Applied the Theme to class component decorated: {this.props.label}.
      </span>
    );
  }
}

const MuiThemeableContainer = (props: {}) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <MuiThemeableFunction label='Hello'/>
      <MuiThemeableClass label='Hello'/>
    </div>
  </MuiThemeProvider>
);


// "http://www.material-ui.com/#/customization/inline-styles"
const InlineStylesCheckbox = () => (
  <Checkbox
    id="checkboxId1"
    name="checkboxName1"
    value="checkboxValue1"
    label="went for a run today"
    style={{
      width: '50%',
      margin: '0 auto'
    }}
    iconStyle={{
      fill: '#FF4081'
    }}
  />
);


// "http://www.material-ui.com/#/components/app-bar"
const AppBarExampleIcon = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

const AppBarExampleIconButton = () => (
  <AppBar
    title={<span style={styles.title}>Title</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<FlatButton label="Save" />}
  />
);

const AppBarExampleIconMenu = () => (
  <AppBar
    title="Title"
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    }
  />
);

// "http://www.material-ui.com/#/components/auto-complete"
export class AutoCompleteExampleSimple extends React.Component<{}, {dataSource: string[]}> {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  dataSourceConfig = {
    text: 'textKey',
    value: 'valueKey',
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Full width"
          fullWidth={true}
                    popoverProps={{
            animated: true
          }}
        />
        <AutoComplete
          hintText="Type anything"
          dataSource={[
            {
              textKey: 'hello',
              valueKey: 'world',
            },
          ]}
          dataSourceConfig={this.dataSourceConfig}
          onUpdateInput={this.handleUpdateInput}
        />
      </div>
    );
  }
}

const dataSource1 = [
  {
    text: 'text-value1',
    value: (
      <MenuItem
        primaryText="text-value1"
        secondaryText="&#9786;"
      />
    ),
  },
  {
    text: 'text-value2',
    value: (
      <MenuItem
        primaryText="text-value2"
        secondaryText="&#9786;"
      />
    ),
  },
];

const dataSource2 = ['12345', '23456', '34567'];

const dataSource3 = [
  {text: 'Some Text', value: 'someFirstValue'},
  {text: 'Some Text', value: 'someSecondValue'},
];

const AutoCompleteExampleNoFilter = () => (
  <div>
    <AutoComplete
      hintText="text-value data"
      filter={AutoComplete.noFilter}
      dataSource={dataSource1}
    /><br />
    <AutoComplete
      floatingLabelText="showAllItems"
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource2}
    /><br />
    <AutoComplete
      floatingLabelText="Same text, different values"
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource3}
    />
  </div>
);

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

const fruit = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon',
];

const AutoCompleteExampleFilters = () => (
  <div>
    <AutoComplete
      floatingLabelText="Type 'r', case insensitive"
      filter={AutoComplete.caseInsensitiveFilter}
      dataSource={colors}
    />
    <br />
    <AutoComplete
      floatingLabelText="Type 'peah', fuzzy search"
      filter={AutoComplete.fuzzyFilter}
      dataSource={fruit}
      maxSearchResults={5}
    />
  </div>
);

// "http://www.material-ui.com/#/components/avatar"
const AvatarExampleSimple = () => (
  <List>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar src="images/uxceo-128.jpg" />
      }
    >
      Image Avatar
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          src="images/uxceo-128.jpg"
          size={30}
          style={style}
        />
      }
    >
      Image Avatar with custom size
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar icon={<FontIcon className="muidocs-icon-communication-voicemail" />} />
      }
    >
      FontIcon Avatar
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
          color={blue300}
          backgroundColor={indigo900}
          size={30}
          style={style}
        />
      }
    >
      FontIcon Avatar with custom colors and size
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar icon={<FileFolder />} />
      }
    >
      SvgIcon Avatar
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          icon={<FileFolder />}
          color={orange200}
          backgroundColor={pink400}
          size={30}
          style={style}
        />
      }
    >
      SvgIcon Avatar with custom colors and size
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={<Avatar>A</Avatar>}
    >
      Letter Avatar
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          color={deepOrange300}
          backgroundColor={purple500}
          size={30}
          style={style}
        >
          A
        </Avatar>
      }
    >
      Letter Avatar with custom colors and size
    </ListItem>
  </List>
);


// "http://www.material-ui.com/#/components/badge"
const BadgeExampleSimple = () => (
  <div>
    <Badge
      badgeContent={4}
      primary={true}
    >
      <NotificationsIcon />
    </Badge>
    <Badge
      badgeContent={10}
      secondary={true}
      badgeStyle={{top: 12, right: 12}}
    >
      <IconButton tooltip="Notifications">
        <NotificationsIcon />
      </IconButton>
    </Badge>
  </div>
);

const BadgeExampleContent = () => (
  <div>
    <Badge
      badgeContent={<IconButton tooltip="Backup"><UploadIcon /></IconButton>}
    >
      <FolderIcon />
    </Badge>
    <Badge
      badgeContent="&copy;"
      badgeStyle={{fontSize: 20}}
    >
      Company Name
    </Badge>
  </div>
);


// "http://www.material-ui.com/#/components/flat-button"
const FlatButtonExampleSimple = () => (
  <div>
        <FlatButton label="Default"/>
        <FlatButton label="Primary" primary={true}/>
        <FlatButton label="Secondary" secondary={true}/>
        <FlatButton label="Disabled" disabled={true}/>
  </div>
);

const FlatButtonExampleComplex = () => (
  <div>
    <FlatButton label="Choose an Image" labelPosition="before">
            <input type="file" style={styles.exampleImageInput}/>
    </FlatButton>

    <FlatButton
      label={<span>Label before</span>}
      labelPosition="before"
      primary={true}
      style={styles.button}
      icon={<ActionAndroid />}
    />

    <FlatButton
      label="GitHub Link"
      href="https://github.com/callemall/material-ui"
      secondary={true}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
    />

  </div>
);

const FlatButtonExampleIcon = () => (
  <div>
    <FlatButton
      icon={<ActionAndroid />}
      style={style}
    />
    <FlatButton
      backgroundColor="#a4c639"
      hoverColor="#8AA62F"
      icon={<ActionAndroid color={fullWhite} />}
      style={style}
    />
    <FlatButton
      href="https://github.com/callemall/material-ui"
      secondary={true}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
      style={style}
    />
  </div>
);


// "http://www.material-ui.com/#/components/raised-button"
const RaisedButtonExampleSimple = () => (
  <div>
        <RaisedButton label="Default" style={style}/>
        <RaisedButton label="Primary" primary={true} style={style}/>
        <RaisedButton label="Secondary" secondary={true} style={style}/>
        <RaisedButton label="Disabled" disabled={true} style={style}/>
  </div>
);

const RaisedButtonExampleComplex = () => (
  <div>
    <RaisedButton
      label="Choose an Image"
      labelPosition="before"
      style={styles.button}
    >
            <input type="file" style={styles.exampleImageInput}/>
    </RaisedButton>
    <RaisedButton
            buttonStyle={styles.button}
      label={<span>Label before</span>}
      labelPosition="before"
      primary={true}
      icon={<ActionAndroid />}
    />
    <RaisedButton
      label="Github Link"
      href="https://github.com/callemall/material-ui"
      secondary={true}
      style={styles.button}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
    />
  </div>
);

const RaisedButtonExampleIcon = () => (
  <div>
    <RaisedButton
      icon={<ActionAndroid />}
      style={style}
    />
    <RaisedButton
      backgroundColor="#a4c639"
      icon={<ActionAndroid color={fullWhite} />}
      style={style}
    />
    <RaisedButton
      href="https://github.com/callemall/material-ui"
      secondary={true}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
      style={style}
    />
  </div>
);


// "http://www.material-ui.com/#/components/floating-action-button"
const FloatingActionButtonExampleSimple = () => (
  <div>
    <FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton>

    <FloatingActionButton mini={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>

    <FloatingActionButton secondary={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>

    <FloatingActionButton mini={true} secondary={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>

    <FloatingActionButton disabled={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>

    <FloatingActionButton mini={true} disabled={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);


// "http://www.material-ui.com/#/components/icon-button"
const IconButtonExampleSimple = () => (
  <div>
        <IconButton iconClassName="muidocs-icon-custom-github"/>
        <IconButton iconClassName="muidocs-icon-custom-github" disabled={true}/>
  </div>
);

const IconButtonExampleComplex = () => (
  <div>
    <IconButton tooltip="Font Icon">
            <FontIcon className="muidocs-icon-action-home"/>
    </IconButton>

    <IconButton tooltip="SVG Icon">
      <ActionHome />
    </IconButton>

    <IconButton
      iconClassName="material-icons"
      tooltip="Ligature"
    >
      home
    </IconButton>
  </div>
);

const IconButtonExampleSize = () => (
  <div>
    <IconButton>
      <ActionHome />
    </IconButton>

    <IconButton
      iconStyle={styles.smallIcon}
      style={styles.small}
    >
      <ActionHome />
    </IconButton>

    <IconButton
      iconStyle={styles.mediumIcon}
      style={styles.medium}
    >
      <ActionHome />
    </IconButton>

    <IconButton
      iconStyle={styles.largeIcon}
      style={styles.large}
    >
      <ActionHome />
    </IconButton>
  </div>
);

const IconButtonExampleTooltip = () => (
  <div>
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="bottom-right"
      tooltipPosition="bottom-right"
    />
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="bottom-center"
      tooltipPosition="bottom-center"
    />
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="bottom-left"
      tooltipPosition="bottom-left"
    />
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="top-right"
      tooltipPosition="top-right"
    />
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="top-center"
      tooltipPosition="top-center"
    />
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="top-left"
      tooltipPosition="top-left"
    />
  </div>
);

const IconButtonExampleTouch = () => (
  <div>
    <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="bottom-center" touch={true} tooltipPosition="bottom-center">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="bottom-left" touch={true} tooltipPosition="bottom-left">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="top-right" touch={true} tooltipPosition="top-right">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="top-center" touch={true} tooltipPosition="top-center">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="top-left" touch={true} tooltipPosition="top-left">
      <ActionGrade />
    </IconButton>
  </div>
);


// "http://www.material-ui.com/#/components/card"
const CardExampleWithAvatar = () => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="http://lorempixel.com/100/100/nature/"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
            <img src="http://lorempixel.com/600/337/nature/"/>
    </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle"/>
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
    </CardActions>
  </Card>
);

const CardExampleWithoutAvatar = () => (
  <Card>
    <CardHeader
      title="Without Avatar"
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions expandable={true}>
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
    </CardActions>
  </Card>
);

class CardExampleControlled extends React.Component<{}, {expanded: boolean}> {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded});
  }

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  }

  handleExpand = () => {
    this.setState({expanded: true});
  }

  handleReduce = () => {
    this.setState({expanded: false});
  }

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="http://lorempixel.com/100/100/nature/"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="This toggle controls the expanded state of the component."
          />
        </CardText>
        <CardMedia
          expandable={true}
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
                    <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" expandable={true}/>
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
                    <FlatButton label="Expand" onTouchTap={this.handleExpand}/>
                    <FlatButton label="Reduce" onTouchTap={this.handleReduce}/>
        </CardActions>
      </Card>
    );
  }
}

// "http://www.material-ui.com/#/components/chip"
const ChipExampleSimple = () => (
  <div>
    <Chip>Basic Chip</Chip>
    <Chip backgroundColor={blue300}>Blue Background</Chip>
    <Chip labelColor={blue500}>Blue Label Color</Chip>
    <Chip><Avatar size={32} color={blue300} backgroundColor={indigo900}>UI</Avatar> Avatar</Chip>
    <Chip style={styles.chip}>Styled</Chip>
  </div>
);

class ChipExampleComplex extends React.Component {
  handleRequestDelete = () => {
    alert('You clicked the delete button.');
  }

  handleTouchTap = () => {
    alert('You clicked the Chip.');
  }

  render() {
    return (
      <div>
        <Chip onTouchTap={this.handleTouchTap} onRequestDelete={this.handleRequestDelete}>Click Me</Chip>
      </div>
    );
  }
}


// "http://www.material-ui.com/#/components/date-picker"
const DatePickerExampleSimple = () => (
  <div>
        <DatePicker hintText="Portrait Dialog"/>
        <DatePicker hintText="Landscape Dialog" mode="landscape"/>
        <DatePicker hintText="Dialog Disabled" disabled={true}/>
  </div>
);

const DatePickerExampleInline = () => (
  <div>
        <DatePicker hintText="Portrait Inline Dialog" container="inline"/>
        <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape"/>
  </div>
);

const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};

interface DatePickerExampleToggleState {
  minDate?: Date;
  maxDate?: Date;
  autoOk?: boolean;
  disableYearSelection?: boolean;
}

class DatePickerExampleToggle extends React.Component<{}, DatePickerExampleToggleState> {
  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      minDate,
      maxDate,
      autoOk: false,
      disableYearSelection: false,
    };
  }

  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  }

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  }

  render() {
    return (
      <div>
        <DatePicker
          floatingLabelText="Ranged Date Picker"
          autoOk={this.state.autoOk}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          disableYearSelection={this.state.disableYearSelection}
        />
        <div style={optionsStyle}>
          <DatePicker
            onChange={this.handleChangeMinDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Min Date"
            defaultDate={this.state.minDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <DatePicker
            onChange={this.handleChangeMaxDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Max Date"
            defaultDate={this.state.maxDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <Toggle
            name="autoOk"
            value="autoOk"
            label="Auto Ok"
            toggled={this.state.autoOk}
            onToggle={this.handleToggle}
          />
          <Toggle
            name="disableYearSelection"
            value="disableYearSelection"
            label="Disable Year Selection"
            toggled={this.state.disableYearSelection}
            onToggle={this.handleToggle}
          />
        </div>
      </div>
    );
  }
}

class DatePickerExampleControlled extends React.Component<{}, {controlledDate?: Date}> {

  constructor(props) {
    super(props);

    this.state = {
      controlledDate: null,
    };
  }

  handleChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  }

  render() {
    return (
      <DatePicker
        hintText="Controlled Date Input"
        value={this.state.controlledDate}
        onChange={this.handleChange}
      />
    );
  }
}

function disableWeekends(date) {
  return date.getDay() === 0 || date.getDay() === 6;
}
function disableRandomDates() {
  return Math.random() > 0.7;
}
const DatePickerExampleDisableDates = () => (
  <div>
        <DatePicker hintText="Weekends Disabled" shouldDisableDate={disableWeekends}/>
        <DatePicker hintText="Random Dates Disabled" shouldDisableDate={disableRandomDates}/>
  </div>
);

const DatePickerExampleInternational = () => (
  <div>
    <DatePicker
      hintText="fr locale"
      DateTimeFormat={Intl.DateTimeFormat}
      okLabel="OK"
      cancelLabel="Annuler"
      locale="fr"
    />
    <DatePicker
      hintText="en-US locale"
      locale="en-US"
      firstDayOfWeek={0}
    />
    <DatePicker
      hintText="Custom date format"
      firstDayOfWeek={0}
      formatDate={new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format}
    />
  </div>
);


// "http://material-ui.com/#/components/dialog"
class DialogExampleSimple extends React.Component<{}, {open?: boolean}> {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
                <RaisedButton label="Dialog" onTouchTap={this.handleOpen}/>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}

class DialogExampleModal extends React.Component<{}, {open?: boolean}> {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
                <RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen}/>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Only actions can close this dialog.
        </Dialog>
      </div>
    );
  }
}

class DialogExampleCustomWidth extends React.Component<{}, {open?: boolean}> {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
                <RaisedButton label="Dialog With Custom Width" onTouchTap={this.handleOpen}/>
        <Dialog
          title="Dialog With Custom Width"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          This dialog spans the entire width of the screen.
        </Dialog>
      </div>
    );
  }
}

class DialogExampleDialogDatePicker extends React.Component<{}, {open?: boolean}> {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
                <RaisedButton label="Dialog With Date Picker" onTouchTap={this.handleOpen}/>
        <Dialog
          title="Dialog With Date Picker"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Open a Date Picker dialog from within a dialog.
                    <DatePicker hintText="Date Picker"/>
        </Dialog>
      </div>
    );
  }
}

class DialogExampleScrollable extends React.Component<{}, {open?: boolean}> {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    const radios = [];
    for (let i = 0; i < 30; i++) {
      radios.push(
        <RadioButton
          key={i}
          value={`value${i + 1}`}
          label={`Option ${i + 1}`}
          style={styles.radioButton}
        />
      );
    }

    return (
      <div>
                <RaisedButton label="Scrollable Dialog" onTouchTap={this.handleOpen}/>
        <Dialog
          title="Scrollable Dialog"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            {radios}
          </RadioButtonGroup>
        </Dialog>
      </div>
    );
  }
}

class DialogExampleAlert extends React.Component<{}, {open?: boolean}> {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Discard"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
                <RaisedButton label="Alert" onTouchTap={this.handleOpen}/>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Discard draft?
        </Dialog>
      </div>
    );
  }
}


// "http://www.material-ui.com/#/components/divider"
const DividerExampleForm = () => (
  <Paper zDepth={2}>
        <TextField hintText="First name" style={style} underlineShow={false}/>
    <Divider />
        <TextField hintText="Middle name" style={style} underlineShow={false}/>
    <Divider />
        <TextField hintText="Last name" style={style} underlineShow={false}/>
    <Divider />
        <TextField hintText="Email address" style={style} underlineShow={false}/>
    <Divider />
  </Paper>
);

const DividerExampleList = () => (
  <Paper height={250}>
    <List>
            <ListItem insetChildren={true} primaryText="Janet Perkins Bennet"/>
            <ListItem insetChildren={true} primaryText="Peter Carlsson"/>
    </List>
        <Divider inset={true}/>
    <List>
            <ListItem insetChildren={true} primaryText="Aaron Bennet"/>
            <ListItem insetChildren={true} primaryText="Abbey Christensen"/>
    </List>
  </Paper>
);

const DividerExampleMenu = () => (
  <Menu desktop={true} style={style}>
        <MenuItem primaryText="Settings"/>
        <MenuItem primaryText="Help &amp; feedback"/>
    <Divider />
        <MenuItem primaryText="Sign out"/>
  </Menu>
);


// "http://www.material-ui.com/#/components/drawer"
class DrawerSimpleExample extends React.Component<{}, {open?: boolean}> {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

class DrawerUndockedExample extends React.Component<{}, {open?: boolean}> {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

class DrawerOpenRightExample extends React.Component<{}, {open?: boolean}> {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
                <Drawer width="20%" openSecondary={true} open={this.state.open}>
                    <AppBar title="AppBar"/>
        </Drawer>
      </div>
    );
  }
}


// "http://www.material-ui.com/#/components/grid-list"
const tilesData: {img: string, title: string, author: string, featured?: boolean}[] = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={200}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
                    <img src={tile.img}/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

const GridListExampleComplex = () => (
  <div style={styles.root}>
    <GridList
      cols={2}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
                    <img src={tile.img}/>
        </GridTile>
      ))}
    </GridList>
  </div>
);


// "http://www.material-ui.com/#/components/font-icon"
const FontIconExampleSimple = () => (
  <div>
    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
    />

    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
      color={blue500}
    />

    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
      color={red500}
      hoverColor={greenA200}
    />
  </div>
);

const FontIconExampleIcons = () => (
  <div>
    <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} color={red500}>flight_takeoff</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} color={yellow500}>cloud_download</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} color={blue500}>videogame_asset</FontIcon>
  </div>
);


// "http://www.material-ui.com/#/components/svg-icon"
const HomeIcon = (props) => (
  <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </SvgIcon>
);

const SvgIconExampleSimple = () => (
  <div>
        <HomeIcon style={iconStyles}/>
        <HomeIcon style={iconStyles} color={blue500}/>
        <HomeIcon style={iconStyles} color={red500} hoverColor={greenA200}/>
  </div>
);

const SvgIconExampleIcons = () => (
  <div>
        <ActionHome style={iconStyles}/>
        <ActionFlightTakeoff style={iconStyles} color={red500}/>
        <FileCloudDownload style={iconStyles} color={yellow500}/>
        <HardwareVideogameAsset style={iconStyles} color={blue500}/>
  </div>
);


// "http://material-ui.com/#/components/lists"
const ListExampleSimple = () => (
  <Paper>
    <List>
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />}/>
            <ListItem primaryText="Starred" leftIcon={<ActionGrade />}/>
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />}/>
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />}/>
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />}/>
    </List>
    <Divider />
    <List>
            <ListItem primaryText="All mail" rightIcon={<ActionInfo />}/>
            <ListItem primaryText="Trash" rightIcon={<ActionInfo />}/>
            <ListItem primaryText="Spam" rightIcon={<ActionInfo />}/>
            <ListItem primaryText="Follow up" rightIcon={<ActionInfo />}/>
    </List>
  </Paper>
);

const ListExampleChat = () => (
  <Paper>
    <List>
      <Subheader>Recent chats</Subheader>
      <ListItem
        primaryText="Brendan Lim"
        leftAvatar={<Avatar src="images/ok-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        leftAvatar={<Avatar src="images/kolage-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Grace Ng"
        leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Kerem Suer"
        leftAvatar={<Avatar src="images/kerem-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Raquel Parrado"
        leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
    </List>
    <Divider />
    <List>
      <Subheader>Previous chats</Subheader>
      <ListItem
        primaryText="Chelsea Otakan"
        leftAvatar={<Avatar src="images/chexee-128.jpg" />}
      />
      <ListItem
        primaryText="James Anderson"
        leftAvatar={<Avatar src="images/jsa-128.jpg" />}
      />
    </List>
  </Paper>
);

const ListExampleContacts = () => (
  <Paper>
    <List>
      <ListItem
        primaryText="Chelsea Otakan"
        leftIcon={<ActionGrade color={pinkA200} />}
        rightAvatar={<Avatar src="images/chexee-128.jpg" />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        insetChildren={true}
        rightAvatar={<Avatar src="images/kolage-128.jpg" />}
      />
      <ListItem
        primaryText="James Anderson"
        insetChildren={true}
        rightAvatar={<Avatar src="images/jsa-128.jpg" />}
      />
      <ListItem
        primaryText="Kerem Suer"
        insetChildren={true}
        rightAvatar={<Avatar src="images/kerem-128.jpg" />}
      />
    </List>
        <Divider inset={true}/>
    <List>
      <ListItem
        primaryText="Adelle Charles"
        leftAvatar={
          <Avatar
            color={pinkA200} backgroundColor={transparent}
            style={{left: 8}}
          >
            A
          </Avatar>
        }
        rightAvatar={<Avatar src="images/adellecharles-128.jpg" />}
      />
      <ListItem
        primaryText="Adham Dannaway"
        insetChildren={true}
        rightAvatar={<Avatar src="images/adhamdannaway-128.jpg" />}
      />
      <ListItem
        primaryText="Allison Grayce"
        insetChildren={true}
        rightAvatar={<Avatar src="images/allisongrayce-128.jpg" />}
      />
      <ListItem
        primaryText="Angel Ceballos"
        insetChildren={true}
        rightAvatar={<Avatar src="images/angelceballos-128.jpg" />}
      />
    </List>
  </Paper>
);

const ListExampleFolder = () => (
  <Paper>
    <List>
      <Subheader inset={true}>Folders</Subheader>
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightIcon={<ActionInfo />}
        primaryText="Photos"
        secondaryText="Jan 9, 2014"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightIcon={<ActionInfo />}
        primaryText="Recipes"
        secondaryText="Jan 17, 2014"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightIcon={<ActionInfo />}
        primaryText="Work"
        secondaryText="Jan 28, 2014"
      />
    </List>
        <Divider inset={true}/>
    <List>
      <Subheader inset={true}>Files</Subheader>
      <ListItem
        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
        rightIcon={<ActionInfo />}
        primaryText="Vacation itinerary"
        secondaryText="Jan 20, 2014"
      />
      <ListItem
        leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
        rightIcon={<ActionInfo />}
        primaryText="Kitchen remodel"
        secondaryText="Jan 10, 2014"
      />
    </List>
  </Paper>
);

const ListExampleNested = () => (
  <Paper>
    <List>
      <Subheader>Nested List Items</Subheader>
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />}/>
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />}/>
      <ListItem
        primaryText="Inbox"
        leftIcon={<ContentInbox />}
        initiallyOpen={true}
                open={true}
        primaryTogglesNestedList={true}
        nestedItems={[
          <ListItem
            key={1}
            primaryText="Starred"
            leftIcon={<ActionGrade />}
          />,
          <ListItem
            key={2}
            primaryText="Sent Mail"
            leftIcon={<ContentSend />}
            disabled={true}
            nestedItems={[
              <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
            ]}
          />,
        ]}
      />
    </List>
  </Paper>
);

const ListExampleSettings = () => (
  <div>
    <Paper>
      <List>
        <Subheader>General</Subheader>
        <ListItem
          primaryText="Profile photo"
          secondaryText="Change your Google+ profile photo"
        />
        <ListItem
          primaryText="Show your status"
          secondaryText="Your status is visible to everyone you use with"
        />
      </List>
      <Divider />
      <List>
        <Subheader>Hangout Notifications</Subheader>
        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText="Notifications"
          secondaryText="Allow notifications"
        />
        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText="Sounds"
          secondaryText="Hangouts message"
        />
        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText="Video sounds"
          secondaryText="Hangouts video call"
        />
      </List>
    </Paper>
    <Paper>
      <List>
        <ListItem
          primaryText="When calls and notifications arrive"
          secondaryText="Always interrupt"
        />
      </List>
      <Divider />
      <List>
        <Subheader>Priority Interruptions</Subheader>
                <ListItem primaryText="Events and reminders" rightToggle={<Toggle />}/>
                <ListItem primaryText="Calls" rightToggle={<Toggle />}/>
                <ListItem primaryText="Messages" rightToggle={<Toggle />}/>
      </List>
      <Divider />
      <List>
        <Subheader>Hangout Notifications</Subheader>
                <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />}/>
                <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />}/>
                <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />}/>
      </List>
    </Paper>
  </div>
);

const ListExamplePhone = () => (
  <Paper>
    <List>
      <ListItem
        leftIcon={<CommunicationCall color={indigo500} />}
        rightIcon={<CommunicationChatBubble />}
        primaryText="(650) 555 - 1234"
        secondaryText="Mobile"
      />
      <ListItem
        insetChildren={true}
        rightIcon={<CommunicationChatBubble />}
        primaryText="(323) 555 - 6789"
        secondaryText="Work"
      />
    </List>
        <Divider inset={true}/>
    <List>
      <ListItem
        leftIcon={<CommunicationEmail color={indigo500} />}
        primaryText="aliconnors@example.com"
        secondaryText="Personal"
      />
      <ListItem
        insetChildren={true}
        primaryText="ali_connors@example.com"
        secondaryText="Work"
      />
    </List>
  </Paper>
);

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
        <MoreVertIcon color={grey400}/>
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const ListExampleMessages = () => (
  <div>
    <Paper>
      <List>
        <Subheader>Today</Subheader>
        <ListItem
          leftAvatar={<Avatar src="images/ok-128.jpg" />}
          primaryText="Brunch this weekend?"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Brendan Lim</span> --
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true}/>
        <ListItem
          leftAvatar={<Avatar src="images/kolage-128.jpg" />}
          primaryText={
            <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
          }
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
              Wish I could come, but I&apos;m out of town this weekend.
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true}/>
        <ListItem
          leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
          primaryText="Oui oui"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Grace Ng</span> --
              Do you have Paris recommendations? Have you ever been?
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true}/>
        <ListItem
          leftAvatar={<Avatar src="images/kerem-128.jpg" />}
          primaryText="Birdthday gift"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Kerem Suer</span> --
              Do you have any ideas what we can get Heidi for her birthday? How about a pony?
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true}/>
        <ListItem
          leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
          primaryText="Recipe to try"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Raquel Parrado</span> --
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
          secondaryTextLines={2}
        />
      </List>
    </Paper>
    <Paper>
      <List>
        <Subheader>Today</Subheader>
        <ListItem
          leftAvatar={<Avatar src="images/ok-128.jpg" />}
          rightIconButton={rightIconMenu}
          primaryText="Brendan Lim"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Brunch this weekend?</span><br />
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true}/>
        <ListItem
          leftAvatar={<Avatar src="images/kolage-128.jpg" />}
          rightIconButton={rightIconMenu}
          primaryText="me, Scott, Jennifer"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Summer BBQ</span><br />
              Wish I could come, but I&apos;m out of town this weekend.
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true}/>
        <ListItem
          leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
          rightIconButton={rightIconMenu}
          primaryText="Grace Ng"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Oui oui</span><br />
              Do you have any Paris recs? Have you ever been?
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true}/>
        <ListItem
          leftAvatar={<Avatar src="images/kerem-128.jpg" />}
          rightIconButton={rightIconMenu}
          primaryText="Kerem Suer"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Birthday gift</span><br />
              Do you have any ideas what we can get Heidi for her birthday? How about a pony?
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true}/>
        <ListItem
          leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
          rightIconButton={rightIconMenu}
          primaryText="Raquel Parrado"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Recipe to try</span><br />
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
          secondaryTextLines={2}
        />
      </List>
    </Paper>
  </div>
);

function wrapState(ComposedComponent: React.ComponentClass<__MaterialUI.List.SelectableProps>) {
  return class SelectableList extends Component<{defaultValue: number}, {selectedIndex: number}> {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    }

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

let SelectableList = wrapState(makeSelectable(List));

const ListExampleSelectable = () => (
  <Paper>
    <SelectableList defaultValue={3}>
      <Subheader>Selectable Contacts</Subheader>
      <ListItem
        value={1}
        primaryText="Brendan Lim"
        leftAvatar={<Avatar src="images/ok-128.jpg" />}
        nestedItems={[
          <ListItem
            value={2}
            primaryText="Grace Ng"
            leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
          />,
        ]}
      />
      <ListItem
        value={3}
        primaryText="Kerem Suer"
        leftAvatar={<Avatar src="images/kerem-128.jpg" />}
      />
      <ListItem
        value={4}
        primaryText="Eric Hoffman"
        leftAvatar={<Avatar src="images/kolage-128.jpg" />}
      />
      <ListItem
        value={5}
        primaryText="Raquel Parrado"
        leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
      />
    </SelectableList>
  </Paper>
);


// "http://www.material-ui.com/#/components/menu"
const MenuExampleSimple = () => (
  <div>
    <Paper style={style}>
      <Menu>
                <MenuItem primaryText="Maps"/>
                <MenuItem primaryText="Books"/>
                <MenuItem primaryText="Flights"/>
                <MenuItem primaryText="Apps"/>
      </Menu>
    </Paper>
    <Paper style={style}>
      <Menu>
                <MenuItem primaryText="Refresh"/>
                <MenuItem primaryText="Help &amp; feedback"/>
                <MenuItem primaryText="Settings"/>
                <MenuItem primaryText="Sign out"/>
      </Menu>
    </Paper>
  </div>
);

const MenuExampleDisable = () => (
  <div>
    <Paper style={style}>
      <Menu desktop={true}>
                <MenuItem primaryText="Back"/>
                <MenuItem primaryText="Forward" disabled={true}/>
        <Divider />
                <MenuItem primaryText="Recently closed" disabled={true}/>
                <MenuItem primaryText="Google" disabled={true}/>
                <MenuItem primaryText="YouTube"/>
      </Menu>
    </Paper>
    <Paper style={style}>
      <Menu desktop={true}>
                <MenuItem primaryText="Undo"/>
                <MenuItem primaryText="Redo" disabled={true}/>
        <Divider />
                <MenuItem primaryText="Cut" disabled={true}/>
                <MenuItem primaryText="Copy" disabled={true}/>
                <MenuItem primaryText="Paste"/>
      </Menu>
    </Paper>
  </div>
);

const MenuExampleIcons = () => (
  <div>
    <Paper style={styles.paper}>
      <Menu>
                <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />}/>
                <MenuItem primaryText="Share" leftIcon={<PersonAdd />}/>
                <MenuItem primaryText="Get links" leftIcon={<ContentLink />}/>
        <Divider />
                <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />}/>
                <MenuItem primaryText="Download" leftIcon={<Download />}/>
        <Divider />
                <MenuItem primaryText="Remove" leftIcon={<Delete />}/>
      </Menu>
    </Paper>
    <Paper style={styles.paper}>
      <Menu>
                <MenuItem primaryText="Clear Config"/>
                <MenuItem primaryText="New Config" rightIcon={<PersonAdd />}/>
                <MenuItem primaryText="Project" rightIcon={<FontIcon className="material-icons">settings</FontIcon>}/>
        <MenuItem
          primaryText="Workspace"
          rightIcon={
            <FontIcon className="material-icons" style={{color: '#559'}}>settings</FontIcon>
          }
        />
                <MenuItem primaryText="Paragraph" rightIcon={<b style={styles.rightIcon}>¶</b>}/>
                <MenuItem primaryText="Section" rightIcon={<b style={styles.rightIcon}>§</b>}/>
      </Menu>
    </Paper>
  </div>
);

const MenuExampleSecondary = () => (
  <div>
    <Paper style={style}>
      <Menu desktop={true} width={256}>
                <MenuItem primaryText="Bold" secondaryText="&#8984;B"/>
                <MenuItem primaryText="Italic" secondaryText="&#8984;I"/>
                <MenuItem primaryText="Underline" secondaryText="&#8984;U"/>
                <MenuItem primaryText="Strikethrough" secondaryText="Alt+Shift+5"/>
                <MenuItem primaryText="Superscript" secondaryText="&#8984;."/>
                <MenuItem primaryText="Subscript" secondaryText="&#8984;,"/>
        <Divider />
                <MenuItem primaryText="Paragraph styles" rightIcon={<ArrowDropRight />}/>
                <MenuItem primaryText="Align" rightIcon={<ArrowDropRight />}/>
                <MenuItem primaryText="Line spacing" rightIcon={<ArrowDropRight />}/>
                <MenuItem primaryText="Numbered list" rightIcon={<ArrowDropRight />}/>
                <MenuItem primaryText="List options" rightIcon={<ArrowDropRight />}/>
        <Divider />
                <MenuItem primaryText="Clear formatting" secondaryText="&#8984;/"/>
      </Menu>
    </Paper>
    <Paper style={style}>
      <Menu desktop={true} width={256}>
                <MenuItem primaryText="Open" secondaryText="Cmd + O"/>
                <MenuItem primaryText="Paste in place" secondaryText="Shift + V"/>
                <MenuItem primaryText="Research" secondaryText="Opt + Shift + Cmd + I"/>
      </Menu>
    </Paper>
    <Paper style={style}>
      <Menu desktop={true} width={256}>
                <MenuItem primaryText="Open" secondaryText="&#8984;O"/>
                <MenuItem primaryText="Paste in place" secondaryText="&#8679;&#8984;V"/>
                <MenuItem primaryText="Research" secondaryText="&#8997;&#8679;&#8984;I"/>
      </Menu>
    </Paper>
  </div>
);

const MenuExampleNested = () => (
  <div>
    <Paper style={style}>
      <Menu desktop={true} width={320}>
                <MenuItem primaryText="Single" insetChildren={true}/>
                <MenuItem primaryText="1.15" insetChildren={true}/>
                <MenuItem primaryText="Double" insetChildren={true}/>
        <MenuItem
          primaryText="Custom: 1.2"
          checked={true}
          rightIcon={<ArrowDropRight />}
          menuItems={[
            <MenuItem
              primaryText="Show"
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="Show Level 2" />,
                <MenuItem primaryText="Grid lines" checked={true} />,
                <MenuItem primaryText="Page breaks" insetChildren={true} />,
                <MenuItem primaryText="Rules" checked={true} />,
              ]}
            />,
            <MenuItem primaryText="Grid lines" checked={true} />,
            <MenuItem primaryText="Page breaks" insetChildren={true} />,
            <MenuItem primaryText="Rules" checked={true} />,
          ]}
        />
        <Divider />
                <MenuItem primaryText="Add space before paragraph"/>
                <MenuItem primaryText="Add space after paragraph"/>
        <Divider />
                <MenuItem primaryText="Custom spacing..."/>
      </Menu>
    </Paper>
  </div>
);


// "http://www.material-ui.com/#/components/icon-menu"
const IconMenuExampleSimple = () => (
  <div>
    <IconMenu
      animated={true}
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
            <MenuItem primaryText="Refresh"/>
            <MenuItem primaryText="Send feedback"/>
            <MenuItem primaryText="Settings"/>
            <MenuItem primaryText="Help"/>
            <MenuItem primaryText="Sign out"/>
    </IconMenu>
    <IconMenu
      animated={false}
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
    >
            <MenuItem primaryText="Refresh"/>
            <MenuItem primaryText="Send feedback"/>
            <MenuItem primaryText="Settings"/>
            <MenuItem primaryText="Help"/>
            <MenuItem primaryText="Sign out"/>
    </IconMenu>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
    >
            <MenuItem primaryText="Refresh"/>
            <MenuItem primaryText="Send feedback"/>
            <MenuItem primaryText="Settings"/>
            <MenuItem primaryText="Help"/>
            <MenuItem primaryText="Sign out"/>
    </IconMenu>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
    >
            <MenuItem primaryText="Refresh"/>
            <MenuItem primaryText="Send feedback"/>
            <MenuItem primaryText="Settings"/>
            <MenuItem primaryText="Help"/>
            <MenuItem primaryText="Sign out"/>
    </IconMenu>
  </div>
);

interface IconMenuExampleControlledState {
  valueSingle?: string;
  valueMultiple?: string[];
  openMenu?: boolean;
}

class IconMenuExampleControlled extends React.Component<{}, IconMenuExampleControlledState> {
  constructor(props) {
    super(props);

    this.state = {
      valueSingle: '3',
      valueMultiple: ['3', '5'],
    };
  }

  handleChangeSingle = (event, value) => {
    this.setState({
      valueSingle: value,
    });
  }

  handleChangeMultiple = (event, value) => {
    this.setState({
      valueMultiple: value,
    });
  }

  handleOpenMenu = () => {
    this.setState({
      openMenu: true,
    });
  }

  handleOnRequestChange = (value) => {
    this.setState({
      openMenu: value,
    });
  }

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          onChange={this.handleChangeSingle}
          value={this.state.valueSingle}
        >
                    <MenuItem value="1" primaryText="Refresh"/>
                    <MenuItem value="2" primaryText="Send feedback"/>
                    <MenuItem value="3" primaryText="Settings"/>
                    <MenuItem value="4" primaryText="Help"/>
                    <MenuItem value="5" primaryText="Sign out"/>
        </IconMenu>
        <IconMenu
          iconButtonElement={<IconButton><ContentFilter /></IconButton>}
          onChange={this.handleChangeMultiple}
          value={this.state.valueMultiple}
          multiple={true}
        >
                    <MenuItem value="1" primaryText="Blu-ray"/>
                    <MenuItem value="2" primaryText="Cassette"/>
                    <MenuItem value="3" primaryText="CD"/>
                    <MenuItem value="4" primaryText="DVD Audio"/>
                    <MenuItem value="5" primaryText="Hybrid SACD"/>
                    <MenuItem value="6" primaryText="Vinyl"/>
        </IconMenu>
        <IconMenu
          iconButtonElement={<IconButton><FileFileDownload /></IconButton>}
          open={this.state.openMenu}
          onRequestChange={this.handleOnRequestChange}
        >
                    <MenuItem value="1" primaryText="Windows App"/>
                    <MenuItem value="2" primaryText="Mac App"/>
                    <MenuItem value="3" primaryText="Android App"/>
                    <MenuItem value="4" primaryText="iOS App"/>
        </IconMenu>
                <RaisedButton onTouchTap={this.handleOpenMenu} label="Downloads"/>
      </div>
    );
  }
}

const IconMenuExampleScrollable = () => (
  <IconMenu
    iconButtonElement={<IconButton><MapsPlace /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    maxHeight={272}
  >
        <MenuItem value="AL" primaryText="Alabama"/>
        <MenuItem value="AK" primaryText="Alaska"/>
        <MenuItem value="AZ" primaryText="Arizona"/>
        <MenuItem value="AR" primaryText="Arkansas"/>
        <MenuItem value="CA" primaryText="California"/>
        <MenuItem value="CO" primaryText="Colorado"/>
        <MenuItem value="CT" primaryText="Connecticut"/>
        <MenuItem value="DE" primaryText="Delaware"/>
        <MenuItem value="DC" primaryText="District Of Columbia"/>
        <MenuItem value="FL" primaryText="Florida"/>
        <MenuItem value="GA" primaryText="Georgia"/>
        <MenuItem value="HI" primaryText="Hawaii"/>
        <MenuItem value="ID" primaryText="Idaho"/>
        <MenuItem value="IL" primaryText="Illinois"/>
        <MenuItem value="IN" primaryText="Indiana"/>
        <MenuItem value="IA" primaryText="Iowa"/>
        <MenuItem value="KS" primaryText="Kansas"/>
        <MenuItem value="KY" primaryText="Kentucky"/>
        <MenuItem value="LA" primaryText="Louisiana"/>
        <MenuItem value="ME" primaryText="Maine"/>
        <MenuItem value="MD" primaryText="Maryland"/>
        <MenuItem value="MA" primaryText="Massachusetts"/>
        <MenuItem value="MI" primaryText="Michigan"/>
        <MenuItem value="MN" primaryText="Minnesota"/>
        <MenuItem value="MS" primaryText="Mississippi"/>
        <MenuItem value="MO" primaryText="Missouri"/>
        <MenuItem value="MT" primaryText="Montana"/>
        <MenuItem value="NE" primaryText="Nebraska"/>
        <MenuItem value="NV" primaryText="Nevada"/>
        <MenuItem value="NH" primaryText="New Hampshire"/>
        <MenuItem value="NJ" primaryText="New Jersey"/>
        <MenuItem value="NM" primaryText="New Mexico"/>
        <MenuItem value="NY" primaryText="New York"/>
        <MenuItem value="NC" primaryText="North Carolina"/>
        <MenuItem value="ND" primaryText="North Dakota"/>
        <MenuItem value="OH" primaryText="Ohio"/>
        <MenuItem value="OK" primaryText="Oklahoma"/>
        <MenuItem value="OR" primaryText="Oregon"/>
        <MenuItem value="PA" primaryText="Pennsylvania"/>
        <MenuItem value="RI" primaryText="Rhode Island"/>
        <MenuItem value="SC" primaryText="South Carolina"/>
        <MenuItem value="SD" primaryText="South Dakota"/>
        <MenuItem value="TN" primaryText="Tennessee"/>
        <MenuItem value="TX" primaryText="Texas"/>
        <MenuItem value="UT" primaryText="Utah"/>
        <MenuItem value="VT" primaryText="Vermont"/>
        <MenuItem value="VA" primaryText="Virginia"/>
        <MenuItem value="WA" primaryText="Washington"/>
        <MenuItem value="WV" primaryText="West Virginia"/>
        <MenuItem value="WI" primaryText="Wisconsin"/>
        <MenuItem value="WY" primaryText="Wyoming"/>
  </IconMenu>
);

const IconMenuExampleNested = () => (
  <div>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem
        primaryText="Copy &amp; Paste"
        rightIcon={<ArrowDropRight />}
        menuItems={[
          <MenuItem primaryText="Cut" />,
          <MenuItem primaryText="Copy" />,
          <Divider />,
          <MenuItem primaryText="Paste" />,
        ]}
      />

      <MenuItem
        primaryText="Case Tools"
        rightIcon={<ArrowDropRight />}
        menuItems={[
          <MenuItem primaryText="UPPERCASE" />,
          <MenuItem primaryText="lowercase" />,
          <MenuItem primaryText="CamelCase" />,
          <MenuItem primaryText="Propercase" />,
        ]}
      />
      <Divider />
            <MenuItem primaryText="Download" leftIcon={<Download />}/>
      <Divider />
            <MenuItem value="Del" primaryText="Delete"/>

    </IconMenu>
  </div>
);


// "http://www.material-ui.com/#/components/dropdown-menu"
class DropDownMenuSimpleExample extends React.Component<{}, {value?: number}> {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <DropDownMenu animated={false} value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value={1} primaryText="Never"/>
                    <MenuItem value={2} primaryText="Every Night"/>
                    <MenuItem value={3} primaryText="Weeknights"/>
                    <MenuItem value={4} primaryText="Weekends"/>
                    <MenuItem value={5} primaryText="Weekly"/>
        </DropDownMenu>
        <br />
        <DropDownMenu
          animated={true}
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
                    <MenuItem value={1} primaryText="Custom width"/>
                    <MenuItem value={2} primaryText="Every Night"/>
                    <MenuItem value={3} primaryText="Weeknights"/>
                    <MenuItem value={4} primaryText="Weekends"/>
                    <MenuItem value={5} primaryText="Weekly"/>
        </DropDownMenu>
      </div>
    );
  }
}

class DropDownMenuOpenImmediateExample extends React.Component<{}, {value?: number}> {

  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={true}>
                <MenuItem value={1} primaryText="Never"/>
                <MenuItem value={2} primaryText="Every Night"/>
                <MenuItem value={3} primaryText="Weeknights"/>
                <MenuItem value={4} primaryText="Weekends"/>
                <MenuItem value={5} primaryText="Weekly"/>
      </DropDownMenu>
    );
  }
}

const items: React.ReactElement<__MaterialUI.Menus.MenuItemProps>[] = [];
for (let i = 0; i < 100; i++) {
    items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`}/>);
}

class DropDownMenuLongMenuExample extends React.Component<{}, {value?: number}> {

  constructor(props) {
    super(props);
    this.state = {value: 10};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
        {items}
      </DropDownMenu>
    );
  }
}

class DropDownMenuLabeledExample extends React.Component<{}, {value?: number}> {

  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning"/>
                <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon"/>
                <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening"/>
                <MenuItem value={4} label="9 pm - 5 am" primaryText="Night"/>
      </DropDownMenu>
    );
  }
}


// "http://material-ui.com/#/components/paper"
const PaperExampleSimple = () => (
  <div>
        <Paper style={style} zDepth={1}/>
        <Paper style={style} zDepth={2}/>
        <Paper style={style} zDepth={3}/>
        <Paper style={style} zDepth={4}/>
        <Paper style={style} zDepth={5}/>
  </div>
);

const PaperExampleRounded = () => (
  <div>
        <Paper style={style} zDepth={1} rounded={false}/>
        <Paper style={style} zDepth={2} rounded={false}/>
        <Paper style={style} zDepth={3} rounded={false}/>
        <Paper style={style} zDepth={4} rounded={false}/>
        <Paper style={style} zDepth={5} rounded={false}/>
  </div>
);

const PaperExampleCircle = () => (
  <div>
        <Paper style={style} zDepth={1} circle={true}/>
        <Paper style={style} zDepth={2} circle={true}/>
        <Paper style={style} zDepth={3} circle={true}/>
        <Paper style={style} zDepth={4} circle={true}/>
        <Paper style={style} zDepth={5} circle={true}/>
  </div>
);


// "http://www.material-ui.com/#/components/popover"
class PopoverExampleSimple extends React.Component<{}, {open?: boolean, anchorEl?: React.ReactInstance}> {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Click me"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
                        <MenuItem primaryText="Refresh"/>
                        <MenuItem primaryText="Help &amp; feedback"/>
                        <MenuItem primaryText="Settings"/>
                        <MenuItem primaryText="Sign out"/>
          </Menu>
        </Popover>
      </div>
    );
  }
}

class PopoverExampleAnimation extends React.Component<{}, {open?: boolean, anchorEl?: React.ReactInstance}> {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Click me"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
                        <MenuItem primaryText="Refresh"/>
                        <MenuItem primaryText="Help &amp; feedback"/>
                        <MenuItem primaryText="Settings"/>
                        <MenuItem primaryText="Sign out"/>
          </Menu>
        </Popover>
      </div>
    );
  }
}

interface PopoverExampleConfigurableState {
  open?: boolean;
  anchorOrigin?: __MaterialUI.propTypes.origin;
  targetOrigin?: __MaterialUI.propTypes.origin;
  anchorEl?: React.ReactInstance;
}

class PopoverExampleConfigurable extends React.Component<{}, PopoverExampleConfigurableState> {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top',
      },
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  setAnchor = (positionElement, position) => {
    const {anchorOrigin} = this.state;
    anchorOrigin[positionElement] = position;

    this.setState({
      anchorOrigin
    });
  }

  setTarget = (positionElement, position) => {
    const {targetOrigin} = this.state;
    targetOrigin[positionElement] = position;

    this.setState({
      targetOrigin
    });
  }

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Click me"
        />
        <h3 style={styles.h3}>Current Settings</h3>
        <pre>
          anchorOrigin: {JSON.stringify(this.state.anchorOrigin)}
          <br />
          targetOrigin: {JSON.stringify(this.state.targetOrigin)}
        </pre>
        <h3 style={styles.h3}>Position Options</h3>
        <p>Use the settings below to toggle the positioning of the popovers above</p>
        <h3 style={styles.h3}>Anchor Origin</h3>
        <div style={styles.block}>
          <div style={styles.block2}>
            <span>Vertical</span>
            <RadioButton
              onClick={this.setAnchor.bind(this, 'vertical', 'top')}
              label="Top" checked={this.state.anchorOrigin.vertical === 'top'}
            />
            <RadioButton
              onClick={this.setAnchor.bind(this, 'vertical', 'center')}
              label="Center" checked={this.state.anchorOrigin.vertical === 'center'}
            />
            <RadioButton
              onClick={this.setAnchor.bind(this, 'vertical', 'bottom')}
              label="Bottom" checked={this.state.anchorOrigin.vertical === 'bottom'}
            />
          </div>
          <div style={styles.block2}>
            <span>Horizontal</span>
            <RadioButton
              onClick={this.setAnchor.bind(this, 'horizontal', 'left')}
              label="Left" checked={this.state.anchorOrigin.horizontal === 'left'}
            />
            <RadioButton
              onClick={this.setAnchor.bind(this, 'horizontal', 'middle')}
              label="Middle" checked={this.state.anchorOrigin.horizontal === 'middle'}
            />
            <RadioButton
              onClick={this.setAnchor.bind(this, 'horizontal', 'right')}
              label="Right" checked={this.state.anchorOrigin.horizontal === 'right'}
            />
          </div>
        </div>
        <h3 style={styles.h3}>Target Origin</h3>
        <div style={styles.block}>
          <div style={styles.block2}>
            <span>Vertical</span>
            <RadioButton
              onClick={this.setTarget.bind(this, 'vertical', 'top')}
              label="Top" checked={this.state.targetOrigin.vertical === 'top'}
            />
            <RadioButton
              onClick={this.setTarget.bind(this, 'vertical', 'center')}
              label="Center" checked={this.state.targetOrigin.vertical === 'center'}
            />
            <RadioButton
              onClick={this.setTarget.bind(this, 'vertical', 'bottom')}
              label="Bottom" checked={this.state.targetOrigin.vertical === 'bottom'}
            />
          </div>
          <div style={styles.block2}>
            <span>Horizontal</span>
            <RadioButton
              onClick={this.setTarget.bind(this, 'horizontal', 'left')}
              label="Left" checked={this.state.targetOrigin.horizontal === 'left'}
            />
            <RadioButton
              onClick={this.setTarget.bind(this, 'horizontal', 'middle')}
              label="Middle" checked={this.state.targetOrigin.horizontal === 'middle'}
            />
            <RadioButton
              onClick={this.setTarget.bind(this, 'horizontal', 'right')}
              label="Right" checked={this.state.targetOrigin.horizontal === 'right'}
            />
          </div>
        </div>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={this.state.anchorOrigin}
          targetOrigin={this.state.targetOrigin}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
                        <MenuItem primaryText="Refresh"/>
                        <MenuItem primaryText="Help &amp; feedback"/>
                        <MenuItem primaryText="Settings"/>
                        <MenuItem primaryText="Sign out"/>
          </Menu>
        </Popover>
      </div>
    );
  }
}


// "http://www.material-ui.com/#/components/circular-progress"
const CircularProgressExampleSimple = () => (
  <div>
    <CircularProgress />
        <CircularProgress size={1.5}/>
        <CircularProgress size={2} thickness={1.5}/>
  </div>
);

class CircularProgressExampleDeterminate extends React.Component<{}, {completed?: number}> {
  private timer: number;

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
    return (
      <div>
                <CircularProgress mode="determinate" value={this.state.completed}/>
                <CircularProgress mode="determinate" value={this.state.completed} size={1.5}/>
                <CircularProgress mode="determinate" value={this.state.completed} size={2}/>
      </div>
    );
  }
}


// "http://www.material-ui.com/#/components/linear-progress"
const LinearProgressExampleSimple = () => (
    <LinearProgress mode="indeterminate"/>
);

class LinearProgressExampleDeterminate extends React.Component<{}, {completed?: number}> {
  private timer: number;

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
    return (
            <LinearProgress mode="determinate" value={this.state.completed}/>
    );
  }
}


// "http://www.material-ui.com/#/components/refresh-indicator"
const RefreshIndicatorExampleSimple = () => (
  <div style={styles.container}>
    <RefreshIndicator
      percentage={30}
      size={40}
      left={10}
      top={0}
      status="ready"
      style={styles.refresh}
    />
    <RefreshIndicator
      percentage={60}
      size={50}
      left={65}
      top={0}
      status="ready"
      style={styles.refresh}
    />
    <RefreshIndicator
      percentage={80}
      size={60}
      left={120}
      top={0}
      color={"red"}
      status="ready"
      style={styles.refresh}
    />
    <RefreshIndicator
      percentage={100}
      size={70}
      left={175}
      top={0}
      color={"red"} // Overridden by percentage={100}
      status="ready"
      style={styles.refresh}
    />
  </div>
);

const RefreshIndicatorExampleLoading = () => (
  <div style={styles.container}>
    <RefreshIndicator
      size={40}
      left={10}
      top={0}
      status="loading"
      style={styles.refresh}
    />
    <RefreshIndicator
      size={50}
      left={70}
      top={0}
      loadingColor={"#FF9800"}
      status="loading"
      style={styles.refresh}
    />
  </div>
);


// "http://www.material-ui.com/#/components/select-field"
class SelectFieldExampleSimple extends React.Component<{}, {value?: number}> {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value={1} primaryText="Never"/>
                    <MenuItem value={2} primaryText="Every Night"/>
                    <MenuItem value={3} primaryText="Weeknights"/>
                    <MenuItem value={4} primaryText="Weekends"/>
                    <MenuItem value={5} primaryText="Weekly"/>
        </SelectField>
        <br />
        <SelectField value={1} disabled={true}>
                    <MenuItem value={1} primaryText="Disabled"/>
                    <MenuItem value={2} primaryText="Every Night"/>
        </SelectField>
        <br />
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
        >
                    <MenuItem value={1} primaryText="Custom width"/>
                    <MenuItem value={2} primaryText="Every Night"/>
                    <MenuItem value={3} primaryText="Weeknights"/>
                    <MenuItem value={4} primaryText="Weekends"/>
                    <MenuItem value={5} primaryText="Weekly"/>
        </SelectField>
        <br />
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          autoWidth={true}
        >
                    <MenuItem value={1} primaryText="Auto width"/>
                    <MenuItem value={2} primaryText="Every Night"/>
                    <MenuItem value={3} primaryText="Weeknights"/>
                    <MenuItem value={4} primaryText="Weekends"/>
                    <MenuItem value={5} primaryText="Weekly"/>
        </SelectField>
      </div>
    );
  }
}

class SelectFieldLongMenuExample extends React.Component<{}, {value?: number}> {

  constructor(props) {
    super(props);
    this.state = {value: 10};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <SelectField maxHeight={300} value={this.state.value} onChange={this.handleChange}>
        {items}
      </SelectField>
    );
  }
}

class SelectFieldExampleCustomLabel extends React.Component<{}, {value?: number}> {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <SelectField value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning"/>
                <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon"/>
                <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening"/>
                <MenuItem value={4} label="9 pm - 5 am" primaryText="Night"/>
      </SelectField>
    );
  }
}

const itemsPeriod = [
    <MenuItem key={1} value={1} primaryText="Never"/>,
    <MenuItem key={2} value={2} primaryText="Every Night"/>,
    <MenuItem key={3} value={3} primaryText="Weeknights"/>,
    <MenuItem key={4} value={4} primaryText="Weekends"/>,
    <MenuItem key={5} value={5} primaryText="Weekly"/>,
];

export default class SelectFieldExampleFloatingLabel extends React.Component<{}, {value?: number}> {

  constructor(props) {
    super(props);
    this.state = {value: null};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelText="Floating Label Text"
        >
          {itemsPeriod}
        </SelectField>
        <br />
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelFixed={true}
          floatingLabelText="Styled Floating Label Text"
          floatingLabelStyle={{color: 'red'}}
        >
          {itemsPeriod}
        </SelectField>
      </div>
    );
  }
}

class SelectFieldExampleError extends React.Component<{}, {value?: number}> {

  constructor(props) {
    super(props);
    this.state = {value: null};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const {value} = this.state;

    const night = value === 2 || value === 3;

    return (
      <div>
        <SelectField
          value={value}
          onChange={this.handleChange}
          errorText={!night && 'Should be Night'}
        >
          {itemsPeriod}
        </SelectField>
        <br />
        <SelectField
          value={value}
          onChange={this.handleChange}
          errorText={night && 'Should not be Night (Custom error style)'}
          errorStyle={{color: 'orange'}}
        >
          {itemsPeriod}
        </SelectField>
      </div>
    );
  }
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

class SelectFieldExampleMultiSelect extends React.Component<{}, {values?: string[]}> {

  constructor(props) {
    super(props);
    this.state = {values: []};
  }

  handleChange = (event, index, values) => this.setState({values});

  menuItems(values) {
    return names.map((name) => (
      <MenuItem
        key={name}
        insetChildren={true}
        checked={values && values.includes(name)}
        value={name}
        primaryText={name}
      />
    ));
  }

  render() {
    const {values} = this.state;
    return (
      <SelectField
        multiple={true}
        hintText="Select a name"
        value={values}
        onChange={this.handleChange}
      >
        {this.menuItems(values)}
      </SelectField>
    );
  }
}

const persons = [
  {value: 0, name: 'Oliver Hansen'},
  {value: 1, name: 'Van Henry'},
  {value: 2, name: 'April Tucker'},
  {value: 3, name: 'Ralph Hubbard'},
  {value: 4, name: 'Omar Alexander'},
  {value: 5, name: 'Carlos Abbott'},
  {value: 6, name: 'Miriam Wagner'},
  {value: 7, name: 'Bradley Wilkerson'},
  {value: 8, name: 'Virginia Andrews'},
  {value: 9, name: 'Kelly Snyder'},
];

class SelectFieldExampleSelectionRenderer extends React.Component<{}, {values?: string[]}> {

  constructor(props) {
    super(props);
    this.state = {values: []};
  }

  handleChange = (event, index, values) => this.setState({values});

  selectionRenderer = (values) => {
    switch (values.length) {
      case 0:
        return '';
      case 1:
        return persons[values[0]].name;
      default:
        return `${values.length} names selected`;
    }
  }

  menuItems(persons) {
    return persons.map((person) => (
      <MenuItem
        key={person.value}
        insetChildren={true}
        checked={this.state.values.indexOf(person.value) >= 0}
        value={person.value}
        primaryText={person.name}
      />
    ));
  }

  render() {
    return (
      <SelectField
        multiple={true}
        hintText="Select a name"
        value={this.state.values}
        onChange={this.handleChange}
        selectionRenderer={this.selectionRenderer}
      >
        {this.menuItems(persons)}
      </SelectField>
    );
  }
}


// "http://www.material-ui.com/#/components/slider"
const SliderExampleSimple = () => (
  <div>
    <Slider />
        <Slider defaultValue={0.5}/>
        <Slider defaultValue={1}/>
  </div>
);

const SliderExampleDisabled = () => (
  <div>
        <Slider disabled={true}/>
        <Slider disabled={true} value={0.5}/>
        <Slider disabled={true} value={1}/>
  </div>
);

const SliderExampleStep = () => (
    <Slider step={0.10} value={.5}/>
);

class SliderExampleControlled extends React.Component<{}, {firstSlider?: number, secondSlider?: number}> {

  state = {
    firstSlider: 0.5,
    secondSlider: 50,
  };

  handleFirstSlider(event, value) {
    this.setState({firstSlider: value});
  }

  handleSecondSlider(event, value) {
    this.setState({secondSlider: value});
  }

  render() {
    return (
      <div>
        <Slider
          defaultValue={0.5}
          value={this.state.firstSlider}
          onChange={this.handleFirstSlider.bind(this)}
        />
        <p>
          <span>{'The value of this slider is: '}</span>
          <span>{this.state.firstSlider}</span>
          <span>{' from a range of 0 to 1 inclusive'}</span>
        </p>
        <Slider
          min={0}
          max={100}
          step={1}
          defaultValue={50}
          value={this.state.secondSlider}
          onChange={this.handleSecondSlider.bind(this)}
        />
        <p>
          <span>{'The value of this slider is: '}</span>
          <span>{this.state.secondSlider}</span>
          <span>{' from a range of 0 to 100 inclusive'}</span>
        </p>
      </div>
    );
  }
}


// "http://www.material-ui.com/#/components/checkbox"
const CheckboxExampleSimple = () => (
  <div style={styles.block}>
    <Checkbox
      label="Simple"
      style={styles.checkbox}
    />
    <Checkbox
      label="Checked by default"
      defaultChecked={true}
      style={styles.checkbox}
    />
    <Checkbox
      checkedIcon={<ActionFavorite />}
      uncheckedIcon={<ActionFavoriteBorder />}
      label="Custom icon"
      style={styles.checkbox}
    />
    <Checkbox
      label="Disabled unchecked"
      disabled={true}
      style={styles.checkbox}
    />
    <Checkbox
      label="Disabled checked"
      checked={true}
      disabled={true}
      style={styles.checkbox}
    />
    <Checkbox
      label="Label on the left"
      labelPosition="left"
      style={styles.checkbox}
    />
  </div>
);


// "http://www.material-ui.com/#/components/radio-button"
const RadioButtonExampleSimple = () => (
  <div>
    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
      <RadioButton
        value="light"
        label="Simple"
        style={styles.radioButton}
      />
      <RadioButton
        value="not_light"
        label="Selected by default"
        style={styles.radioButton}
      />
      <RadioButton
        value="ludicrous"
        label="Custom icon"
        checkedIcon={<ActionFavorite />}
        uncheckedIcon={<ActionFavoriteBorder />}
        style={styles.radioButton}
      />
    </RadioButtonGroup>
    <RadioButtonGroup name="shipName" defaultSelected="community">
      <RadioButton
        value="enterprise"
        label="Disabled unchecked"
        disabled={true}
        style={styles.radioButton}
      />
      <RadioButton
        value="community"
        label="Disabled checked"
        disabled={true}
        style={styles.radioButton}
      />
    </RadioButtonGroup>
    <RadioButtonGroup name="notRight" labelPosition="left" style={styles.block}>
      <RadioButton
        value="reverse"
        label="Label on the left"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);


// "http://www.material-ui.com/#/components/toggle"
const ToggleExampleSimple = () => (
  <div style={styles.block}>
    <Toggle
      label="Simple"
      style={styles.toggle}
    />
    <Toggle
      label="Toggled by default"
      defaultToggled={true}
      style={styles.toggle}
    />
    <Toggle
      label="Disabled"
      disabled={true}
      style={styles.toggle}
    />
    <Toggle
      label="Label on the right"
      labelPosition="right"
      style={styles.toggle}
      thumbSwitchedStyle={styles.toggle}
      trackSwitchedStyle={styles.toggle}
    />
  </div>
);


// "http://material-ui.com/#/components/snackbar"
class SnackbarExampleSimple extends React.Component<{}, {open?: boolean}> {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Add to my calendar"
        />
        <Snackbar
          open={this.state.open}
          message="Event added to your calendar"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
                    contentStyle={{margin: 16}}
        />
      </div>
    );
  }
}

class SnackbarExampleAction extends React.Component<{}, {open?: boolean, autoHideDuration?: number, message?: string}> {

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 4000,
      message: 'Event added to your calendar',
      open: false,
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  handleActionTouchTap = () => {
    this.setState({
      open: false,
    });
    alert('Event removed from your calendar.');
  }

  handleChangeDuration = (event) => {
    const value = event.target.value;
    this.setState({
      autoHideDuration: value.length > 0 ? parseInt(value, 10) : 0,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Add to my calendar"
        />
        <br />
        <TextField
          floatingLabelText="Auto Hide Duration in ms"
          value={this.state.autoHideDuration}
          onChange={this.handleChangeDuration}
        />
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          action="undo"
          autoHideDuration={this.state.autoHideDuration}
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

class SnackbarExampleTwice extends React.Component<{}, {open?: boolean, message?: string}> {

  private timer: number;

  constructor(props) {
    super(props);
    this.state = {
      message: 'Event 1 added to your calendar',
      open: false,
    };
    this.timer = undefined;
  }

  componentWillUnMount() {
    clearTimeout(this.timer);
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });

    this.timer = setTimeout(() => {
      this.setState({
        message: `Event ${Math.round(Math.random() * 100)} added to your calendar`,
      });
    }, 1500);
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Add to my calendar two times"
        />
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          action="undo"
          autoHideDuration={3000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}


// "http://www.material-ui.com/#/components/stepper"
class HorizontalLinearStepper extends React.Component<{}, {stepIndex?: number, finished?: boolean}> {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Select campaign settings</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create an ad group</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

class VerticalLinearStepper extends React.Component<{}, {stepIndex?: number, finished?: boolean}> {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{width: 380, height: 400, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Select campaign settings</StepLabel>
            <StepContent>
              <p>
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
              </p>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create an ad group</StepLabel>
            <StepContent>
              <p>An ad group contains one or more ads which target a shared set of keywords.</p>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        )}
      </div>
    );
  }
}

class HorizontalNonLinearStepper extends React.Component<{}, {stepIndex?: number}> {

  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper linear={false} activeStep={stepIndex}>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Select campaign settings
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Create an ad group
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Create an ad
            </StepButton>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          <p>{this.getStepContent(stepIndex)}</p>
          <div style={{marginTop: 12}}>
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              onTouchTap={this.handlePrev}
              style={{marginRight: 12}}
            />
            <RaisedButton
              label="Next"
              disabled={stepIndex === 2}
              primary={true}
              onTouchTap={this.handleNext}
            />
          </div>
        </div>
      </div>
    );
  }
}

class VerticalNonLinear extends React.Component<{}, {stepIndex?: number}> {

  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {stepIndex} = this.state;

    return (
      <div style={{width: 380, height: 400, margin: 'auto'}}>
        <Stepper
          activeStep={stepIndex}
          linear={false}
          orientation="vertical"
        >
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Select campaign settings
            </StepButton>
            <StepContent>
              <p>
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
              </p>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Create an ad group
            </StepButton>
            <StepContent>
              <p>An ad group contains one or more ads which target a shared set of keywords.</p>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Create an ad
            </StepButton>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }
}

const getStyles = () => {
  return {
    root: {
      width: '100%',
      maxWidth: 700,
      margin: 'auto',
    },
    content: {
      margin: '0 16px',
    },
    actions: {
      marginTop: 12,
    },
    backButton: {
      marginRight: 12,
    },
  };
};

class GranularControlStepper extends React.Component<{}, {stepIndex?: number, visited?: number[]}> {

  state = {
    stepIndex: null,
    visited: [],
  };

  componentWillMount() {
    const {stepIndex, visited} = this.state;
    this.setState({visited: visited.concat(stepIndex)});
  }

  componentWillUpdate(nextProps, nextState) {
    const {stepIndex, visited} = nextState;
    if (visited.indexOf(stepIndex) === -1) {
      this.setState({visited: visited.concat(stepIndex)});
    }
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Click a step to get started.';
    }
  }

  render() {
    const {stepIndex, visited} = this.state;
    const styles = getStyles();

    return (
      <div style={styles.root}>
        <p>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              this.setState({stepIndex: null, visited: []});
            }}
          >
            Click here
          </a> to reset the example.
        </p>
        <Stepper linear={false}>
          <Step completed={visited.indexOf(0) !== -1} active={stepIndex === 0}>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Select campaign settings
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(1) !== -1} active={stepIndex === 1}>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Create an ad group
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(2) !== -1} active={stepIndex === 2}>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Create an ad
            </StepButton>
          </Step>
        </Stepper>
        <div style={styles.content}>
          <p>{this.getStepContent(stepIndex)}</p>
          {stepIndex !== null && (
            <div style={styles.actions}>
              <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={styles.backButton}
              />
              <RaisedButton
                label="Next"
                primary={true}
                onTouchTap={this.handleNext}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

class CustomIcon extends React.Component<{}, {stepIndex?: number}> {

  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper linear={false}>
          <Step completed={false}>
            <StepLabel>
              Select campaign settings
            </StepLabel>
          </Step>
          <Step completed={false}>
            <StepLabel
              icon={<WarningIcon color={red500} />}
              style={{color: red500}}
            >
              Create an ad group
            </StepLabel>
          </Step>
          <Step completed={false}>
            <StepLabel>
              Create an ad
            </StepLabel>
          </Step>
        </Stepper>
      </div>
    );
  }
}


// "http://www.material-ui.com/#/components/subheader"
// Included in ListExampleChat and ListExampleFolder

// "http://www.material-ui.com/#/components/table"
const TableExampleSimple = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

const tableData: {name: string, status: string, selected?: boolean}[] = [
  {
    name: 'John Smith',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

interface TableExampleComplexState {
  fixedHeader?: boolean;
  fixedFooter?: boolean;
  stripedRows?: boolean;
  showRowHover?: boolean;
  selectable?: boolean;
  multiSelectable?: boolean;
  enableSelectAll?: boolean;
  deselectOnClickaway?: boolean;
  showCheckboxes?: boolean;
  height?: string;
}

class TableExampleComplex extends React.Component<{}, TableExampleComplexState> {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
    };
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  }

  handleChange = (event) => {
    this.setState({height: event.target.value});
  }

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan={3} tooltip="Super Header" style={{textAlign: 'center'}}>
                Super Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
                        {tableData.map((row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan={3} style={{textAlign: 'center'}}>
                Super Footer
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>

        <div style={styles.propContainer}>
          <h3>Table Properties</h3>
          <TextField
            floatingLabelText="Table Body Height"
            defaultValue={this.state.height}
            onChange={this.handleChange}
          />
          <Toggle
            name="fixedHeader"
            label="Fixed Header"
            onToggle={this.handleToggle}
            defaultToggled={this.state.fixedHeader}
          />
          <Toggle
            name="fixedFooter"
            label="Fixed Footer"
            onToggle={this.handleToggle}
            defaultToggled={this.state.fixedFooter}
          />
          <Toggle
            name="selectable"
            label="Selectable"
            onToggle={this.handleToggle}
            defaultToggled={this.state.selectable}
          />
          <Toggle
            name="multiSelectable"
            label="Multi-Selectable"
            onToggle={this.handleToggle}
            defaultToggled={this.state.multiSelectable}
          />
          <Toggle
            name="enableSelectAll"
            label="Enable Select All"
            onToggle={this.handleToggle}
            defaultToggled={this.state.enableSelectAll}
          />
          <h3 style={styles.propToggleHeader}>TableBody Properties</h3>
          <Toggle
            name="deselectOnClickaway"
            label="Deselect On Clickaway"
            onToggle={this.handleToggle}
            defaultToggled={this.state.deselectOnClickaway}
          />
          <Toggle
            name="stripedRows"
            label="Stripe Rows"
            onToggle={this.handleToggle}
            defaultToggled={this.state.stripedRows}
          />
          <Toggle
            name="showRowHover"
            label="Show Row Hover"
            onToggle={this.handleToggle}
            defaultToggled={this.state.showRowHover}
          />
          <h3 style={styles.propToggleHeader}>Multiple Properties</h3>
          <Toggle
            name="showCheckboxes"
            label="Show Checkboxes"
            onToggle={this.handleToggle}
            defaultToggled={this.state.showCheckboxes}
          />
        </div>
      </div>
    );
  }
}

// "http://www.material-ui.com/#/components/tabs"
function handleActive(tab) {
  alert(`A tab with this value property ${tab.props.value} was activated.`);
}

const TabsExampleSimple = () => (
  <Tabs tabTemplateStyle={{backgroundColor: 'red'}}>
        <Tab label="Item One">
      <div>
        <h2 style={styles.headline}>Tab One</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
                <Slider name="slider0" defaultValue={0.5}/>
      </div>
    </Tab>
        <Tab label="Item Two">
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="onActive"
      value="/home"
      onActive={handleActive}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);

class TabsExampleControlled extends React.Component<{}, {value?: string}> {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value
    });
  }

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
                <Tab label="Tab A" value="a">
          <div>
            <h2 style={styles.headline}>Controllable Tab A</h2>
            <p>
              Tabs are also controllable if you want to programmatically pass them their values.
              This allows for more functionality in Tabs such as not
              having any Tab selected or assigning them different values.
            </p>
          </div>
        </Tab>
        <Tab label="Tab B" value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

const TabsExampleIcon = () => (
  <Tabs>
        <Tab icon={<FontIcon className="muidocs-icon-action-home" />}/>
        <Tab icon={<ActionFlightTakeoff />}/>
        <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>}/>
  </Tabs>
);

const TabsExampleIconText = () => (
  <Tabs>
    <Tab
      icon={<FontIcon className="material-icons">phone</FontIcon>}
      label="RECENTS"
    />
    <Tab
      icon={<FontIcon className="material-icons">favorite</FontIcon>}
      label="FAVORITES"
    />
    <Tab
      icon={<MapsPersonPin />}
      label="NEARBY"
    />
  </Tabs>
);


// "http://www.material-ui.com/#/components/text-field"
const TextFieldExampleSimple = () => (
  <div>
    <TextField
      hintText="Hint Text"
    /><br />
    <br />
    <TextField
      hintText="The hint text can be as long as you want, it will wrap."
    /><br />
    <TextField
      id="text-field-default"
      defaultValue="Default Value"
    /><br />
    <TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      hintText="Hint Text"
      floatingLabelText="Fixed Floating Label Text"
      floatingLabelFixed={true}
    /><br />
    <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
    /><br />
    <TextField
      hintText="MultiLine with rows: 2 and rowsMax: 4"
      multiLine={true}
      rows={2}
      rowsMax={4}
    /><br />
    <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
    /><br />
    <TextField
      hintText="Full width"
      fullWidth={true}
    /><br />
    <TextField
      type="number"
      min={5}
      max={50}
      step={5}
    /><br />
    <TextField
        hintText="Hint Text"
        errorText="This field is required"
        required
    />
  </div>
);

const TextFieldExampleError = () => (
  <div>
    <TextField
      hintText="Hint Text"
      errorText="This field is required"
    /><br />
    <TextField
      hintText="Hint Text"
      errorText="The error text can be as long as you want, it will wrap."
    /><br />
    <TextField
      hintText="Hint Text"
      errorText="This field is required"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      hintText="Message Field"
      errorText="This field is required."
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
    /><br />
  </div>
);

const TextFieldExampleCustomize = () => (
  <div>
    <TextField
      hintText="Styled Hint Text"
      hintStyle={styles.errorStyle}
    /><br />
    <TextField
      hintText="Custom error color"
      errorText="This field is required."
      errorStyle={styles.errorStyle}
    /><br />
    <TextField
      hintText="Custom Underline Color"
      underlineStyle={styles.underlineStyle}
    /><br />
    <TextField
      hintText="Custom Underline Focus Color"
      underlineFocusStyle={styles.underlineStyle}
    /><br />
    <TextField
      floatingLabelText="Styled Floating Label Text"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    />
  </div>
);

const TextFieldExampleDisabled = () => (
  <div>
    <TextField
      disabled={true}
      hintText="Disabled Hint Text"
    /><br />
    <TextField
      disabled={true}
      id="text-field-disabled"
      defaultValue="Disabled Value"
    /><br />
    <TextField
      disabled={true}
      hintText="Disabled Hint Text"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      disabled={true}
      hintText="Disabled Hint Text"
      defaultValue="Disabled With Floating Label"
      floatingLabelText="Floating Label Text"
    />
  </div>
);

class TextFieldExampleControlled extends React.Component<{}, {value?: string}> {

  constructor(props) {
    super(props);

    this.state = {
      value: 'Property Value',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <TextField
          id="text-field-controlled"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

// "http://www.material-ui.com/#/components/time-picker"
const TimePickerExampleSimple = () => (
  <div>
    <TimePicker
      hintText="12hr Format"
    />
    <TimePicker
      format="24hr"
      hintText="24hr Format"
    />
    <TimePicker
      disabled={true}
      format="24hr"
      hintText="Disabled TimePicker"
    />
  </div>
);

class TimePickerExampleComplex extends React.Component<{}, {value24?: Date, value12?: Date}> {

  constructor(props) {
    super(props);
    this.state = {value24: null, value12: null};
  }

  handleChangeTimePicker24 = (event, date) => {
    this.setState({value24: date});
  }

  handleChangeTimePicker12 = (event, date) => {
    this.setState({value12: date});
  }

  render() {
    return (
      <div>
        <TimePicker
          format="ampm"
          hintText="12hr Format"
          value={this.state.value12}
          onChange={this.handleChangeTimePicker12}
        />
        <TimePicker
          format="24hr"
          hintText="24hr Format"
          value={this.state.value24}
          onChange={this.handleChangeTimePicker24}
        />
      </div>
    );
  }
}

const TimePickerInternational = () => (
  <div>
    <TimePicker
      hintText="Custom Labels"
      okLabel="确定"
      cancelLabel="取消"
    />
  </div>
);


// "http://www.material-ui.com/#/components/toolbar"
class ToolbarExamplesSimple extends React.Component<{}, {value?: number}> {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="All Broadcasts"/>
                        <MenuItem value={2} primaryText="All Voice"/>
                        <MenuItem value={3} primaryText="All Text"/>
                        <MenuItem value={4} primaryText="Complete Voice"/>
                        <MenuItem value={5} primaryText="Complete Text"/>
                        <MenuItem value={6} primaryText="Active Voice"/>
                        <MenuItem value={7} primaryText="Active Text"/>
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
                    <ToolbarTitle text="Options"/>
                    <FontIcon className="muidocs-icon-custom-sort"/>
          <ToolbarSeparator />
                    <RaisedButton label="Create Broadcast" primary={true}/>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
                        <MenuItem primaryText="Download"/>
                        <MenuItem primaryText="More Info"/>
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

const componentWithWidth = withWidth()(ToolbarExamplesSimple);

class BottomNavigationExample extends React.Component<{}, {
  index?: number
}> {
  constructor() {
    super()
    this.state = {
      index: 0
    };
  }
  render() {
    return <BottomNavigation selectedIndex={this.state.index}>
      <BottomNavigationItem label='0' icon={<ActionHome/>} onTouchTap={() => this.setState({index: 0})}/>
      <BottomNavigationItem label='1' icon={<ActionInfo/>} onTouchTap={() => this.setState({index: 1})}/>
    </BottomNavigation>;
  }
}

interface MaterialUiTestsState {
}

class MaterialUiTests extends React.Component<{}, MaterialUiTestsState> {

    render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
                <AppBar title="My AppBar"/>

      </MuiThemeProvider>
    );
  }
}

// "http://www.material-ui.com/#/get-started/usage"
ReactDOM.render(
  <MaterialUiTests />,
  document.getElementById('app')
);
