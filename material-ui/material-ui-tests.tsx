///<reference path='../react/react.d.ts' />
///<reference path='../react/react-addons-linked-state-mixin.d.ts' />
///<reference path='material-ui.d.ts' />

import * as React from "react";
import * as LinkedStateMixin from "react-addons-linked-state-mixin";
import * as MaterialUi from "material-ui";
import ActionGrade from "material-ui/lib/svg-icons/action/grade";
import AppBar from "material-ui/lib/app-bar";
import ArrowDropRight from "material-ui/lib/svg-icons/navigation-arrow-drop-right";
import AutoComplete from 'material-ui/lib/auto-complete';
import Avatar from "material-ui/lib/avatar";
import Badge from "material-ui/lib/badge";
import Card from "material-ui/lib/card/card";
import CardActions from "material-ui/lib/card/card-actions";
import CardHeader from "material-ui/lib/card/card-header";
import CardMedia from 'material-ui/lib/card/card-media';
import CardText from "material-ui/lib/card/card-text";
import CardTitle from 'material-ui/lib/card/card-title';
import Checkbox from "material-ui/lib/checkbox";
import CircularProgress from 'material-ui/lib/circular-progress';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Colors from "material-ui/lib/styles/colors";
import DatePicker from "material-ui/lib/date-picker/date-picker";
import Dialog from "material-ui/lib/dialog";
import Divider from 'material-ui/lib/divider';
import DropDownMenu from "material-ui/lib/drop-down-menu";
import FileFolder from "material-ui/lib/svg-icons/file/folder";
import FlatButton from "material-ui/lib/flat-button";
import FloatingActionButton from "material-ui/lib/floating-action-button";
import FontIcon from "material-ui/lib/font-icon";
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from "material-ui/lib/icon-button";
import IconMenu from "material-ui/lib/menus/icon-menu";
import LeftNav from 'material-ui/lib/left-nav';
import LinearProgress from 'material-ui/lib/linear-progress';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Paper from 'material-ui/lib/paper';
import Popover from 'material-ui/lib/popover/popover';
import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';
import RadioButton from "material-ui/lib/radio-button";
import RadioButtonGroup from "material-ui/lib/radio-button-group";
import RaisedButton from "material-ui/lib/raised-button";
import RefreshIndicator from 'material-ui/lib/refresh-indicator';
import SelectField from "material-ui/lib/select-field";
import Slider from 'material-ui/lib/slider';
import Snackbar from 'material-ui/lib/snackbar';
import Spacing from "material-ui/lib/styles/spacing";
import Styles from 'material-ui/lib/styles';
import SvgIcon from 'material-ui/lib/svg-icon';
import Tab from 'material-ui/lib/tabs/tab';
import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import Tabs from 'material-ui/lib/tabs/tabs';
import TextField from "material-ui/lib/text-field";
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import TimePicker from "material-ui/lib/time-picker";
import Toggle from "material-ui/lib/toggle";
import ToggleStar from "material-ui/lib/svg-icons/toggle/star";
import ToggleStarBorder from "material-ui/lib/svg-icons/toggle/star-border";
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import Typography from "material-ui/lib/styles/typography";
import zIndex from 'material-ui/lib/styles/zIndex';

import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';

import * as Icons from "material-ui/lib/svg-icons";
import ActionAndroid from 'material-ui/lib/svg-icons/action/android';
import ActionFavorite from 'material-ui/lib/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';
import ActionFlightTakeoff from 'material-ui/lib/svg-icons/action/flight-takeoff';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import CommunicationChatBubble from 'material-ui/lib/svg-icons/communication/chat-bubble';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import ContentCopy from 'material-ui/lib/svg-icons/content/content-copy';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentFilter from 'material-ui/lib/svg-icons/content/filter-list';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentLink from 'material-ui/lib/svg-icons/content/link';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import Delete from 'material-ui/lib/svg-icons/action/delete';
import Download from 'material-ui/lib/svg-icons/file/file-download';
import FileCloudDownload from 'material-ui/lib/svg-icons/file/cloud-download';
import FolderIcon from 'material-ui/lib/svg-icons/file/folder-open';
import HardwareVideogameAsset from 'material-ui/lib/svg-icons/hardware/videogame-asset';
import MapsPlace from 'material-ui/lib/svg-icons/maps/place';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import NavigationClose from "material-ui/lib/svg-icons/navigation/close";
import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';
import PersonAdd from 'material-ui/lib/svg-icons/social/person-add';
import RemoveRedEye from 'material-ui/lib/svg-icons/image/remove-red-eye';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import UploadIcon from 'material-ui/lib/svg-icons/file/cloud-upload';


type CheckboxProps = __MaterialUI.CheckboxProps;
type MuiTheme = __MaterialUI.Styles.MuiTheme;
type TouchTapEvent = __MaterialUI.TouchTapEvent;

interface MaterialUiTestsState {
    showDialogStandardActions: boolean;
    showDialogCustomActions: boolean;
    showDialogScrollable: boolean;
    value: number;
    dataSource: [string];
    minDate: Date;
    maxDate: Date;
    autoOk: boolean;
    disableYearSelection: boolean;
    open: boolean;
    valueSingle: string;
    valueMultiple: string[];
    anchorEl: Element;
    completed: number;
    message: string;
    autoHideDuration: number;
    fixedHeader: boolean;
    fixedFooter: boolean;
    stripedRows: boolean;
    showRowHover: boolean;
    selectable: boolean;
    multiSelectable: boolean;
    enableSelectAll: boolean;
    deselectOnClickaway: boolean;
    height: string;
}

// "http://www.material-ui.com/#/customization/themes"
let muiTheme: MuiTheme = ThemeManager.getMuiTheme({
    spacing: Spacing,
    zIndex: zIndex,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: Colors.cyan500,
        primary2Color: Colors.cyan700,
        primary3Color: Colors.lightBlack,
        accent1Color: Colors.pinkA200,
        accent2Color: Colors.grey100,
        accent3Color: Colors.grey500,
        textColor: Colors.darkBlack,
        alternateTextColor: Colors.white,
        canvasColor: Colors.white,
        borderColor: Colors.grey300,
        disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
        pickerHeaderColor: Colors.cyan500,
    }
});

let SelectableList = SelectableContainerEnhance(List);

@ThemeDecorator(muiTheme)
class MaterialUiTests extends React.Component<{}, MaterialUiTestsState> implements React.LinkedStateMixin {

    // injected with mixin
    linkState: <T>(key: string) => React.ReactLink<T>;

    private picker12hr: TimePicker;
    private picker24hr: TimePicker;

    private touchTapEventHandler(e: TouchTapEvent) {
        console.info("Received touch tap", e);
    }
    private formEventHandler(e: React.FormEvent) {
    }
    private selectFieldChangeHandler(e: TouchTapEvent, si: number, mi: any) {
    }
    private handleRequestClose(buttonClicked: boolean) {
    }
    private handleRequestCloseReason(reason: string) {
    }
    private handleToggle() { 
        this.setState(Object.assign({}, this.state, { open: !this.state.open }));
    }
    private handleClose() {
        this.setState(Object.assign({}, this.state, { open: false }));
    }
    private handleChangeSingle(event: React.MouseEvent, value: string){
    }
    private handleChangeMultiple(event: React.MouseEvent, value: string[]) {
    }

    private handleChange = (e: TouchTapEvent, index: number, value: number) => this.setState(Object.assign({}, this.state, { value }));

    private handleUpdateInput(t: string) {
        this.setState(Object.assign({}, this.state, {
            dataSource: [t, t + t, t + t + t],
        }));
    }
    private handleTouchTap(e: TouchTapEvent) {
        alert('onTouchTap triggered on the title component');
    }
    private handleActionTouchTap() {
        this.setState(Object.assign({}, this.state, {open: false,}));
        alert('Event removed from your calendar.');
    }
    private handleChangeDuration = (event: React.FormEvent) => {
        const value = event.target["value"];
        this.setState(Object.assign({}, this.state, {
            autoHideDuration: value.length > 0 ? parseInt(value) : 0,
        }));
    }
    private onRowSelection(selectedRows: number[] | string) {
    }
    private handleActive(tab: Tab) {
        alert(`A tab with this route property ${tab.props.value} was activated.`);
    }
    private handleChangeTabs(value: any, e: React.FormEvent, tab: Tab) {
    }
    private handleChangeTimePicker12(err, time) {
        this.picker12hr.setTime(time);
    };

    private handleChangeTimePicker24(err, time) {
        this.picker24hr.setTime(time);
    };

    render() {

        const styles = {
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
            floatingButton: {
                marginRight: 20,
            },
            textField: {
                marginLeft: 20,
            },
            floatLeft: {
                float: 'left',
            },
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {
                width: 500,
                height: 400,
                overflowY: 'auto',
                marginBottom: 24,
            },
            icons: {
                marginRight: 24,
            },
            menu: {
                marginRight: 32,
                marginBottom: 32,
                float: 'left',
                position: 'relative',
                zIndex: 0,
            },
            rightIcon: {
                textAlign: 'center',
                lineHeight: '24px',
            },
            paper: {
                height: 100,
                width: 100,
                margin: 20,
                textAlign: 'center',
                display: 'inline-block',
            },
            popover: {
                padding: 20,
            },
            container: {
                position: 'relative',
            },
            refresh: {
                display: 'inline-block',
                position: 'relative',
            },
            block: {
                maxWidth: 250,
            },
            checkbox: {
                marginBottom: 16,
            },
            radioButton: {
                marginBottom: 16,
            },
            toggle: {
                marginBottom: 16,
            },
            propContainerStyle: {
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
                fontWeight: 400,
            },
            errorStyle: {
                color: Colors.orange500,
            },
            underlineStyle: {
                borderColor: Colors.orange500,
            },
        };
        const colors = Styles.Colors;

        // "http://www.material-ui.com/#/customization/inline-styles"
        let element: React.ReactElement<any>;
        element = <Checkbox
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
            }}/>
        element = React.createElement<CheckboxProps>(Checkbox, {
            id: "checkboxId1", name: "checkboxName1", value: "checkboxValue1", label: "went for a run today", style: {
                width: '50%',
                margin: '0 auto'
            }, iconStyle: {
                fill: '#FF4081'
            }
        });

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
                onTitleTouchTap={this.handleTouchTap}
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
                        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    >
                        <MenuItem primaryText="Refresh" />
                        <MenuItem primaryText="Help" />
                        <MenuItem primaryText="Sign out" />
                    </IconMenu>
                }
            />
        );

        // "http://www.material-ui.com/#/components/auto-complete"
        element =   <AutoComplete
                        hintText="Type c"
                        dataSource={this.state.dataSource}
                        onUpdateInput={this.handleUpdateInput}
                    />

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

        const AutoCompleteExampleNoFilter = () => (
            <div>
                <AutoComplete
                    hintText="text-value data"
                    filter={AutoComplete.noFilter}
                    dataSource={dataSource1}
                /><br/>
                <AutoComplete
                    floatingLabelText="showAllItems"
                    filter={AutoComplete.noFilter}
                    triggerUpdateOnFocus={true}
                    dataSource={dataSource2}
                />
            </div>
        );

        const AutoCompleteExampleFilters = () => (
            <div>
                <AutoComplete
                    floatingLabelText="Type t, fuzzy search"
                    filter={AutoComplete.fuzzyFilter}
                    dataSource={dataSource2}
                />
                <br/>
                <AutoComplete
                    floatingLabelText="Type r, case insensitive"
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={dataSource2}
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
                        color={colors.blue300}
                        backgroundColor={colors.indigo900}
                        />
                    }
                    >
                    FontIcon Avatar with custom colors
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
                        color={colors.orange200}
                        backgroundColor={colors.pink400}
                        />
                    }
                >
                    SvgIcon Avatar with custom colors
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
                        color={colors.deepOrange300}
                        backgroundColor={colors.purple500}
                        >
                        A
                        </Avatar>
                    }
                >
                    Letter Avatar with custom colors
                </ListItem>
            </List>
        );

        //image avatar
        element = <Avatar src="images/uxceo-128.jpg" />;
        //SvgIcon avatar
        element = <Avatar icon={<FileFolder />} />;
        //SvgIcon avatar with custom colors
        element = <Avatar
            icon={<FileFolder />}
            color={Colors.orange200}
            backgroundColor={Colors.pink400} />;
        //FontIcon avatar
        element = <Avatar
            icon={
            <FontIcon className="muidocs-icon-communication-voicemail" />
            } />;
        //FontIcon avatar with custom colors
        element = <Avatar
            icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
            color={Colors.blue300}
            backgroundColor={Colors.indigo900} />;
        //Letter avatar
        element = <Avatar>A</Avatar>;
        //Letter avatar with custom colors
        element = <Avatar
            color={Colors.deepOrange300}
            backgroundColor={Colors.purple500}>
            </Avatar>

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
                    badgeStyle={{ top: 12, right: 12 }}
                    >
                  <IconButton tooltip="Notifications">
                    <NotificationsIcon/>
                      </IconButton>
                </Badge>
            </div>
        );
        const BadgeExampleContent = () => (
            <div>
                <Badge
                    badgeContent={<IconButton tooltip="Backup"><UploadIcon/></IconButton>}
                    >
                  <FolderIcon />
                </Badge>
                <Badge
                    badgeContent="&copy;"
                    badgeStyle={{ fontSize: 20 }}
                    >
                    Company Name
                </Badge>
            </div>
        );

        // "http://www.material-ui.com/#/components/flat-button"
        const FlatButtonExampleSimple = () => (
            <div>
                <FlatButton label="Default" />
                <FlatButton label="Primary" primary={true} />
                <FlatButton label="Secondary" secondary={true} />
                <FlatButton label="Disabled" disabled={true} />
            </div>
        );
        const FlatButtonExampleComplex = () => (
            <div>
                <FlatButton label="Choose an Image">
                  <input type="file" style={styles.exampleImageInput} />
                </FlatButton>

                <FlatButton
                    label="Label before"
                    labelPosition="before"
                    primary={true}
                    icon={<ActionAndroid />}
                />

                <FlatButton
                    label="GitHub Link"
                    linkButton={true}
                    href="https://github.com/callemall/material-ui"
                    secondary={true}
                    icon={<FontIcon className="muidocs-icon-custom-github" />}
                />

            </div>
        );

        // "http://www.material-ui.com/#/components/raised-button"
        const RaisedButtonExampleSimple = () => (
            <div>
                <RaisedButton label="Default" style={styles.button} />
                <RaisedButton label="Primary" primary={true} style={styles.button} />
                <RaisedButton label="Secondary" secondary={true} style={styles.button} />
                <RaisedButton label="Disabled" disabled={true} style={styles.button} />
            </div>
        );
        const RaisedButtonExampleComplex = () => (
            <div>
                <RaisedButton
                    label="Choose an Image"
                    style={styles.button}
                >
                    <input type="file" style={styles.exampleImageInput} />
                </RaisedButton>
                <RaisedButton
                    label="Label before"
                    labelPosition="before"
                    primary={true}
                    icon={<ActionAndroid />}
                    style={styles.button}
                />
                <RaisedButton
                    label="Github Link"
                    linkButton={true}
                    href="https://github.com/callemall/material-ui"
                    secondary={true}
                    style={styles.button}
                    icon={<FontIcon className="muidocs-icon-custom-github"/>}
                />
            </div>
        );

        // "http://www.material-ui.com/#/components/floating-action-button"
        const FloatingActionButtonExampleSimple = () => (
            <div>
                <FloatingActionButton style={styles.floatingButton}>
                  <ContentAdd />
                </FloatingActionButton>

                <FloatingActionButton mini={true} style={styles.floatingButton}>
                  <ContentAdd />
                </FloatingActionButton>

                <FloatingActionButton secondary={true} style={styles.floatingButton}>
                  <ContentAdd />
                </FloatingActionButton>

                <FloatingActionButton mini={true} secondary={true} style={styles.floatingButton}>
                  <ContentAdd />
                </FloatingActionButton>

                <FloatingActionButton disabled={true} style={styles.floatingButton}>
                  <ContentAdd />
                </FloatingActionButton>

                <FloatingActionButton mini={true} disabled={true} style={styles.floatingButton}>
                  <ContentAdd />
                </FloatingActionButton>
                </div>
        );

        // "http://www.material-ui.com/#/components/icon-button"
        const IconButtonExampleSimple = () => (
            <div>
                <IconButton iconClassName="muidocs-icon-custom-github" />
                <IconButton iconClassName="muidocs-icon-custom-github" disabled={true} />
            </div>
        );
        const IconButtonExampleComplex = () => (
            <div>
                <IconButton tooltip="Font Icon">
                  <FontIcon className="muidocs-icon-action-home" />
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
                  <ActionGrade/>
                </IconButton>
                <IconButton tooltip="bottom-center" touch={true} tooltipPosition="bottom-center">
                  <ActionGrade/>
                </IconButton>
                <IconButton tooltip="bottom-left" touch={true} tooltipPosition="bottom-left">
                  <ActionGrade/>
                </IconButton>
                <IconButton tooltip="top-right" touch={true} tooltipPosition="top-right">
                  <ActionGrade/>
                </IconButton>
                <IconButton tooltip="top-center" touch={true} tooltipPosition="top-center">
                  <ActionGrade/>
                </IconButton>
                <IconButton tooltip="top-left" touch={true} tooltipPosition="top-left">
                  <ActionGrade/>
                </IconButton>
            </div>
        );
        //Method 1: muidocs-icon-github is defined in a style sheet.
        element = <IconButton iconClassName="muidocs-icon-custom-github" tooltip="GitHub"/>;
        //Method 2: ActionGrade is a component created using mui.SvgIcon.
        element = <IconButton tooltip= "Star" touch= { true}>
                <ActionGrade/>
            </IconButton >;
        //Method 3: Manually creating a mui.FontIcon component within IconButton
        element = <IconButton tooltip= "Sort" disabled= {true}>
                <FontIcon className="muidocs-icon-custom-sort"/>
            </IconButton>;
        //Method 4: Using Google material-icons
        element = <IconButton iconClassName="material-icons" tooltipPosition="bottom-center"
            tooltip="Sky">settings_system_daydream</IconButton>;


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
                  <img src="http://lorempixel.com/600/337/nature/" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa.Aliquam erat volutpat.Nulla facilisi.
                    Donec vulputate interdum sollicitudin.Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
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
                    Donec mattis pretium massa.Aliquam erat volutpat.Nulla facilisi.
                    Donec vulputate interdum sollicitudin.Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions expandable={true}>
                  <FlatButton label="Action1"/>
                  <FlatButton label="Action2"/>
                </CardActions>
            </Card>
        );

        // "http://www.material-ui.com/#/components/date-picker"
        const DatePickerExampleSimple = () => (
            <div>
                <DatePicker hintText="Portrait Dialog" />
                <DatePicker hintText="Landscape Dialog" mode="landscape" />
                <DatePicker hintText="Dialog Disabled" disabled={true} />
            </div>
        );
        const DatePickerExampleInline = () => (
            <div>
                <DatePicker hintText="Portrait Inline Dialog" container="inline" />
                <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
            </div>
        );
        element = (
            <div>
                <DatePicker
                    hintText="Ranged Date Picker"
                    autoOk={this.state.autoOk}
                    minDate={this.state.minDate}
                    maxDate={this.state.maxDate}
                    disableYearSelection={this.state.disableYearSelection}
                />
            </div>
        );
        element = <DatePicker style={{ color: 'red' }} />;
        element = <DatePicker
            floatingLabelText="Floating Label Text" />;
        element = <DatePicker
            hintText="Hint Text" />;

        // "http://material-ui.com/#/components/dialog"
        let standardActions = [
            { text: 'Cancel' },
            { text: 'Submit', onTouchTap: this.touchTapEventHandler, ref: 'submit' }
        ];

        element = <Dialog
            title="Dialog With Standard Actions"
            actions={standardActions}
            actionFocus="submit"
            open={this.state.showDialogStandardActions}
            onRequestClose={this.handleRequestClose}>
            The actions in this window are created from the json that's passed in.
            </Dialog>;

        //Custom Actions
        let customActions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onTouchTap={this.touchTapEventHandler} />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.touchTapEventHandler} />
        ];

        element = <Dialog
            title="Dialog With Custom Actions"
            actions={customActions}
            open={this.state.showDialogCustomActions}
            onRequestClose={this.handleRequestClose}>
            The actions in this window were passed in as an array of react objects.
            </Dialog>;

        element = <Dialog
                title="Dialog With Scrollable Content"
                actions={customActions}
                autoDetectWindowHeight={true}
                autoScrollBodyContent={true}
                open={this.state.showDialogScrollable}
                onRequestClose={this.handleRequestClose}>
                <div style={{ height: '1000px' }}>
                  Really long content
                </div>
            </Dialog>;

        // "http://www.material-ui.com/#/components/divider"
        const DividerExampleForm = () => (
            <Paper zDepth={2}>
                <TextField hintText="First name" style={styles.textField} underlineShow={false} />
                <Divider />
                <TextField hintText="Middle name" style={styles.textField} underlineShow={false} />
                <Divider />
                <TextField hintText="Last name" style={styles.textField} underlineShow={false} />
                <Divider />
                <TextField hintText="Email address" style={styles.textField} underlineShow={false} />
                <Divider />
            </Paper>
        );
        const DividerExampleList = () => (
            <div>
                <List>
                  <ListItem insetChildren={true} primaryText="Janet Perkins Bennet" />
                  <ListItem insetChildren={true} primaryText="Peter Carlsson" />
                </List>
                <Divider inset={true}/>
                <List>
                  <ListItem insetChildren={true} primaryText="Aaron Bennet" />
                  <ListItem insetChildren={true} primaryText="Abbey Christensen" />
                </List>
            </div>
        );
        const DividerExampleMenu = () => (
            <Menu desktop={true} style={styles.floatLeft}>
                <MenuItem primaryText="Settings" />
                <MenuItem primaryText="Help & feedback" />
                <Divider />
                <MenuItem primaryText="Sign out" />
            </Menu>
        );


        // "http://www.material-ui.com/#/components/grid-list"
        const tilesData = [
            {
                img: 'images/grid-list/00-52-29-429_640.jpg',
                title: 'Breakfast',
                author: 'jill111',
                featured: false,
            }];
        const GridListExampleSimple = () => (
            <div style={styles.root}>
                <GridList
                    cellHeight={200}
                    style={styles.gridList}
                    >
                  {tilesData.map(tile => (
                      <GridTile
                          key={tile.img}
                          title={tile.title}
                          subtitle={<span>by <b>{tile.author}</b></span>}
                          actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                      >
                          <img src={tile.img} />
                      </GridTile>
                  )) }
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
                  {tilesData.map(tile => (
                      <GridTile
                          key={tile.img}
                          title={tile.title}
                          actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                          actionPosition="left"
                          titlePosition="top"
                          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                          cols={tile.featured ? 2 : 1}
                          rows={tile.featured ? 2 : 1}
                          >
                      <img src={tile.img} />
                          </GridTile>
                  )) }
                </GridList>
            </div>
        );


        element = <GridList
            cols={3}
            padding={50}
            cellHeight={200}
            style={{ color: 'red' }} />;

        element = <GridTile
            title="GridTileTitle"
            actionIcon={<h1>GridTile</h1>}
            actionPosition="left"
            titlePosition="top"
            titleBackground="rgba(0, 0, 0, 0.4)"
            cols={2}
            rows={1}
            style={{ color: 'red' }}>
            <h1>Children are Required!</h1>
            </GridTile>;


        // "http://www.material-ui.com/#/components/font-icon"
        const FontIconExampleSimple = () => (
            <div>
                <FontIcon
                    className="muidocs-icon-action-home"
                    style={styles.icons}
                    />

                <FontIcon
                    className="muidocs-icon-action-home"
                    style={styles.icons}
                    color={Colors.blue500}
                    />

                <FontIcon
                    className="muidocs-icon-action-home"
                    style={styles.icons}
                    color={Colors.red500}
                    hoverColor={Colors.greenA200}
                    />
            </div>
        );

        const FontIconExampleIcons = () => (
            <div>
                <FontIcon className="material-icons" style={styles.icons}>home</FontIcon>
                <FontIcon className="material-icons" style={styles.icons} color={Colors.red500}>flight_takeoff</FontIcon>
                <FontIcon className="material-icons" style={styles.icons} color={Colors.yellow500}>cloud_download</FontIcon>
                <FontIcon className="material-icons" style={styles.icons} color={Colors.blue500}>videogame_asset</FontIcon>
            </div>
        );


        // "http://www.material-ui.com/#/components/svg-icon"
        const HomeIcon = (props) => (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );

        const SvgIconExampleSimple = () => (
            <div>
                <HomeIcon style={styles.icons} />
                <HomeIcon style={styles.icons} color={Colors.blue500} />
                <HomeIcon style={styles.icons} color={Colors.red500} hoverColor={Colors.greenA200} />
            </div>
        );
        const SvgIconExampleIcons = () => (
            <div>
                <ActionHome style={styles.icons}/>
                <ActionFlightTakeoff style={styles.icons} color={Colors.red500} />
                <FileCloudDownload style={styles.icons} color={Colors.yellow500} />
                <HardwareVideogameAsset style={styles.icons} color={Colors.blue500} />
            </div>
        );
        element = <MaterialUi.Icons.NavigationMenu />;
        element = <Icons.ToggleStar />;
        element = <FontIcon className= "material-icons" color= { Colors.red500 } > home</FontIcon>;


        // "http://www.material-ui.com/#/components/left-nav"
        element = (
            <div>
                <RaisedButton
                    label="Toggle LeftNav"
                    onTouchTap={this.handleToggle}
                />
                <LeftNav open={this.state.open}>
                  <MenuItem>Menu Item</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
                </LeftNav>
            </div>
        );
        element = (
            <div>
                <RaisedButton
                    label="Open LeftNav"
                    onTouchTap={this.handleToggle}
                />
                <LeftNav
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={open => this.setState(Object.assign({}, this.state, { open })) }
                >
                  <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                  <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </LeftNav>
            </div>
        );
        element = (
            <div>
                <RaisedButton
                    label="Toggle LeftNav"
                    onTouchTap={this.handleToggle}
                />
                <LeftNav width={200} openRight={true} open={this.state.open} >
                  <AppBar title="AppBar"/>
                </LeftNav>
            </div>
        );


        // "http://material-ui.com/#/components/lists"
        const ListExampleSimple = () => (
            <div>
                <List>
                  <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                  <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
                  <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                  <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                  <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                </List>
                <Divider />
                <List>
                  <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
                  <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
                  <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
                  <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
                </List>
            </div>
        );
        const ListExampleChat = () => (
            <div>
                <List subheader="Recent chats">
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
                <List subheader="Previous chats">
                  <ListItem
                      primaryText="Chelsea Otakan"
                      leftAvatar={<Avatar src="images/chexee-128.jpg" />}
                  />
                  <ListItem
                      primaryText="James Anderson"
                      leftAvatar={<Avatar src="images/jsa-128.jpg" />}
                  />
                </List>
            </div>
        );
        const ListExampleNested = () => (
            <div>
                <List subheader="Nested List Items">
                  <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                  <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                  <ListItem
                      primaryText="Inbox"
                      leftIcon={<ContentInbox />}
                      initiallyOpen={true}
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
            </div>
        );
        const iconButtonElement = (
            <IconButton
                touch={true}
                tooltip="more"
                tooltipPosition="bottom-left"
            >
                <MoreVertIcon color={Colors.grey400} />
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
                <List subheader="Today">
                    <ListItem
                        leftAvatar={<Avatar src="images/ok-128.jpg" />}
                        rightIconButton={rightIconMenu}
                        primaryText="Brendan Lim"
                        secondaryText={
                        <p>
                          <span style={{ color: Colors.darkBlack }}>Brunch this weekend?</span><br/>
                          I&apos; ll be in your neighborhood doing errands this weekend.Do you want to grab brunch?
                            </p>
                        }
                        secondaryTextLines={2}
                    />
                </List>
            </div>
        );
        const ListExampleSelectable = () => (
            <div>
                <SelectableList
                    value={3}
                    subheader="SelectableContacts"
                >
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
            </div>
        );


        // "http://www.material-ui.com/#/components/menu"
        const MenuExampleSimple = () => (
            <div>
                <Menu style={styles.menu}>
                  <MenuItem primaryText="Maps" />
                  <MenuItem primaryText="Books" />
                  <MenuItem primaryText="Flights" />
                  <MenuItem primaryText="Apps" />
                </Menu>
                <Menu style={styles.menu}>
                  <MenuItem primaryText="Refresh" />
                  <MenuItem primaryText="Help &amp; feedback" />
                  <MenuItem primaryText="Settings" />
                  <MenuItem primaryText="Sign out" />
                </Menu>
            </div>
        );
        const MenuExampleDisable = () => (
            <div>
                <Menu style={styles.menu} desktop={true}>
                  <MenuItem primaryText="Back" />
                  <MenuItem primaryText="Forward" disabled={true} />
                  <Divider />
                  <MenuItem primaryText="Recently closed" disabled={true} />
                  <MenuItem primaryText="Google" disabled={true} />
                  <MenuItem primaryText="YouTube" />
                </Menu>
                <Menu style={styles.menu} desktop={true}>
                  <MenuItem primaryText="Undo" />
                  <MenuItem primaryText="Redo" disabled={true} />
                  <Divider />
                  <MenuItem primaryText="Cut" disabled={true} />
                  <MenuItem primaryText="Copy" disabled={true} />
                  <MenuItem primaryText="Paste" />
                </Menu>
            </div>
        );
        const MenuExampleIcons = () => (
            <div>
                <Menu style={styles.menu}>
                  <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
                  <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
                  <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
                  <Divider />
                  <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
                  <MenuItem primaryText="Download" leftIcon={<Download />} />
                  <Divider />
                  <MenuItem primaryText="Remove" leftIcon={<Delete />} />
                </Menu>
                <Menu style={styles.menu} desktop={false}>
                  <MenuItem primaryText="Clear Config" />
                  <MenuItem primaryText="New Config" rightIcon={<PersonAdd />} />
                  <MenuItem primaryText="Project" rightIcon={<FontIcon className="material-icons">settings</FontIcon>}/>
                  <MenuItem
                      primaryText="Workspace"
                      rightIcon={
                      <FontIcon className="material-icons" style={{ color: '#559' }}>settings</FontIcon>
                      }
                  />
                  <MenuItem primaryText="Paragraph" rightIcon={<b style={styles.rightIcon}>¶</b>} />
                  <MenuItem primaryText="Section" rightIcon={<b style={styles.rightIcon}>§</b>} />
                </Menu>
            </div>
        );
        const MenuExampleSecondary = () => (
            <div>
                <Menu style={styles.menu} desktop={true} width={320}>
                  <MenuItem primaryText="Bold" secondaryText="&#8984;B" />
                  <MenuItem primaryText="Italic" secondaryText="&#8984;I" />
                  <MenuItem primaryText="Underline" secondaryText="&#8984;U" />
                  <MenuItem primaryText="Strikethrough" secondaryText="Alt+Shift+5" />
                  <MenuItem primaryText="Superscript" secondaryText="&#8984;." />
                  <MenuItem primaryText="Subscript" secondaryText="&#8984;," />
                  <Divider />
                  <MenuItem primaryText="Paragraph styles" rightIcon={<ArrowDropRight />} />
                  <MenuItem primaryText="Align" rightIcon={<ArrowDropRight />} />
                  <MenuItem primaryText="Line spacing" rightIcon={<ArrowDropRight />} />
                  <MenuItem primaryText="Numbered list" rightIcon={<ArrowDropRight />} />
                  <MenuItem primaryText="List options" rightIcon={<ArrowDropRight />} />
                  <Divider />
                  <MenuItem primaryText="Clear formatting" secondaryText="&#8984;/" />
                </Menu>
                <Menu style={styles.menu} desktop={true} width={320}>
                  <MenuItem primaryText="Open" secondaryText="Cmd + O" />
                  <MenuItem primaryText="Paste in place" secondaryText="Shift + V" />
                  <MenuItem primaryText="Research" secondaryText="Opt + Shift + Cmd + I" />
                </Menu>
                <Menu style={styles.menu} desktop={true} width={320}>
                  <MenuItem primaryText="Open" secondaryText="&#8984;O" />
                  <MenuItem primaryText="Paste in place" secondaryText="&#8679;&#8984;V" />
                  <MenuItem primaryText="Research" secondaryText="&#8997;&#8679;&#8984;I" />
                </Menu>
            </div>
        );
        const MenuExampleNested = () => (
            <div>
                <Menu style={styles.menu} desktop={true} width={320}>
                  <MenuItem primaryText="Single" insetChildren={true} />
                  <MenuItem primaryText="1.15" insetChildren={true} />
                  <MenuItem primaryText="Double" insetChildren={true} />
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
                  <MenuItem primaryText="Add space before paragraph" />
                  <MenuItem primaryText="Add space after paragraph" />
                  <Divider />
                  <MenuItem primaryText="Custom spacing..." />
                </Menu>
            </div>
        );


        // "http://www.material-ui.com/#/components/icon-menu"
        const IconMenuExampleSimple = () => (
            <div>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                >
                  <MenuItem primaryText="Refresh" />
                  <MenuItem primaryText="Send feedback" />
                  <MenuItem primaryText="Settings" />
                  <MenuItem primaryText="Help" />
                  <MenuItem primaryText="Sign out" />
                </IconMenu>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                >
                  <MenuItem primaryText="Refresh" />
                  <MenuItem primaryText="Send feedback" />
                  <MenuItem primaryText="Settings" />
                  <MenuItem primaryText="Help" />
                  <MenuItem primaryText="Sign out" />
                </IconMenu>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    targetOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem primaryText="Refresh" />
                  <MenuItem primaryText="Send feedback" />
                  <MenuItem primaryText="Settings" />
                  <MenuItem primaryText="Help" />
                  <MenuItem primaryText="Sign out" />
                </IconMenu>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    >
                  <MenuItem primaryText="Refresh" />
                  <MenuItem primaryText="Send feedback" />
                  <MenuItem primaryText="Settings" />
                  <MenuItem primaryText="Help" />
                  <MenuItem primaryText="Sign out" />
                </IconMenu>
            </div>
        );
        element = (
            <div>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    onChange={this.handleChangeSingle}
                    value={this.state.valueSingle}
                    >
                  <MenuItem value="1" primaryText="Refresh" />
                  <MenuItem value="2" primaryText="Send feedback" />
                  <MenuItem value="3" primaryText="Settings" />
                  <MenuItem value="4" primaryText="Help" />
                  <MenuItem value="5" primaryText="Sign out" />
                </IconMenu>
                <IconMenu
                    iconButtonElement={<IconButton><ContentFilter /></IconButton>}
                    onChange={this.handleChangeMultiple}
                    value={this.state.valueMultiple}
                    multiple={true}
                    >
                  <MenuItem value="1" primaryText="Blu-ray" />
                  <MenuItem value="2" primaryText="Cassette" />
                  <MenuItem value="3" primaryText="CD" />
                  <MenuItem value="4" primaryText="DVD Audio" />
                  <MenuItem value="5" primaryText="Hybrid SACD" />
                  <MenuItem value="6" primaryText="Vinyl" />
                </IconMenu>
            </div>
        );
        const IconMenuExampleScrollable = () => (
            <IconMenu
                iconButtonElement={<IconButton><MapsPlace /></IconButton>}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                maxHeight={272}
            >
                <MenuItem value="AL" primaryText="Alabama" />
                <MenuItem value="AK" primaryText="Alaska" />
            </IconMenu>
        );


        // "http://www.material-ui.com/#/components/dropdown-menu"
        element = <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="Never"/>
                        <MenuItem value={2} primaryText="Every Night"/>
                        <MenuItem value={3} primaryText="Weeknights"/>
                        <MenuItem value={4} primaryText="Weekends"/>
                        <MenuItem value={5} primaryText="Weekly"/>
            </DropDownMenu>;
        const menuItems = [<MenuItem value={0} key={0} primaryText={'Item 0'}/>];
        element = (
            <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
                {menuItems}
            </DropDownMenu>
        );
        element = (
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
                <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
                <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
                <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
            </DropDownMenu>
        );

        // "http://material-ui.com/#/components/paper"
        const PaperExampleSimple = () => (
            <div>
                <Paper style={styles.paper} zDepth={1}/>
                <Paper style={styles.paper} zDepth={2}/>
                <Paper style={styles.paper} zDepth={3}/>
                <Paper style={styles.paper} zDepth={4}/>
                <Paper style={styles.paper} zDepth={5}/>
            </div>
        );
        const PaperExampleRounded = () => (
            <div>
                <Paper style={styles.paper} zDepth={1} rounded={false}/>
                <Paper style={styles.paper} zDepth={2} rounded={false}/>
                <Paper style={styles.paper} zDepth={3} rounded={false}/>
                <Paper style={styles.paper} zDepth={4} rounded={false}/>
                <Paper style={styles.paper} zDepth={5} rounded={false}/>
            </div>
        );
        const PaperExampleCircle = () => (
            <div>
                <Paper style={styles.paper} zDepth={1} circle={true}/>
                <Paper style={styles.paper} zDepth={2} circle={true}/>
                <Paper style={styles.paper} zDepth={3} circle={true}/>
                <Paper style={styles.paper} zDepth={4} circle={true}/>
                <Paper style={styles.paper} zDepth={5} circle={true}/>
            </div>
        );


        // "http://www.material-ui.com/#/components/popover"
        element = (
            <div>
                <RaisedButton
                    onTouchTap={this.handleTouchTap}
                    label="Click me"
                />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    onRequestClose={this.handleRequestCloseReason}
                >
                  <div style={styles.popover}>
                    <RaisedButton primary={true} label="Here is a button"/>
                  </div>
                </Popover>
            </div>
        );
        element = (
            <div>
                <RaisedButton
                    onTouchTap={this.handleTouchTap}
                    label="Click me"
                />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    onRequestClose={this.handleRequestCloseReason}
                    animation={PopoverAnimationFromTop}
                    >
                  <div style={styles.popover}>
                    <RaisedButton primary={true} label="Here is a button"/>
                  </div>
                </Popover>
            </div>
        );


        // "http://www.material-ui.com/#/components/circular-progress"
        const CircularProgressExampleSimple = () => (
            <div>
                <CircularProgress />
                <CircularProgress size={1.5} />
                <CircularProgress size={2} />
            </div>
        );
        element = (
            <div>
                <CircularProgress mode="determinate" value={this.state.completed}/>
                <CircularProgress mode="determinate" value={this.state.completed} size={1.5}/>
                <CircularProgress mode="determinate" value={this.state.completed} size={2}/>
            </div>
        );


        // "http://www.material-ui.com/#/components/linear-progress"
        const LinearProgressExampleSimple = () => (
            <LinearProgress mode="indeterminate"/>
        );
        element = (
            <LinearProgress mode="determinate" value={this.state.completed} />
        );


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
        element = (
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
                  <MenuItem value={1} primaryText="Never"/>
                  <MenuItem value={2} primaryText="Every Night"/>
                </SelectField>
            </div>
        );
        element = (
            <SelectField maxHeight={300} value={this.state.value} onChange={this.handleChange}>
                {menuItems}
            </SelectField>
        );
        element = (
            <SelectField value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning"/>
                <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon"/>
                <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening"/>
                <MenuItem value={4} label="9 pm - 5 am" primaryText="Night"/>
            </SelectField>
        );
        element = (
            <div>
                <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    floatingLabelText="Floating Label Text"
                >
                  {menuItems}
                </SelectField>
                <br />
                <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    floatingLabelText="Styled Floating Label Text"
                    floatingLabelStyle={{ color: 'red' }}
                >
                  {menuItems}
                </SelectField>
            </div>
        );
        const {value} = this.state;
        const night = value === 2 || value === 3;
        element = (
            <div>
                <SelectField
                    value={value}
                    onChange={this.handleChange}
                    errorText={!night && 'Should be Night'}
                >
                  {menuItems}
                </SelectField>
                <br/>
                <SelectField
                    value={value}
                    onChange={this.handleChange}
                    errorText={night && 'Should not be Night (Custom error style)'}
                    errorStyle={{ color: 'orange' }}
                >
                  {menuItems}
                </SelectField>
            </div>
        );


        // "http://www.material-ui.com/#/components/slider"
        const SliderExampleSimple = () => (
            <div>
                <Slider/>
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
                    label="Disabled"
                    disabled={true}
                    style={styles.checkbox}
                />
                <Checkbox
                    checkedIcon={<ActionFavorite />}
                    unCheckedIcon={<ActionFavoriteBorder />}
                    label="Custom icon"
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
                      label="Disabled"
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
                />
            </div>
        );


        // "http://material-ui.com/#/components/snackbar"
        element = (
            <div>
                <RaisedButton
                    onTouchTap={this.handleTouchTap}
                    label="Add to my calendar"
                />
                <Snackbar
                    open={this.state.open}
                    message="Event added to your calendar"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestCloseReason}
                />
            </div>
        );
        element = (
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
                    onRequestClose={this.handleRequestCloseReason}
                />
            </div>
        );

        // "http://www.material-ui.com/#/components/table"
        element = (
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
        const tableData = [
            {
                name: 'John Smith',
                status: 'Employed',
                selected: true,
            },
        ];
        element = (
          <div>
            <Table
              height={this.state.height}
              fixedHeader={this.state.fixedHeader}
              fixedFooter={this.state.fixedFooter}
              selectable={this.state.selectable}
              multiSelectable={this.state.multiSelectable}
              onRowSelection={this.onRowSelection}
            >
              <TableHeader enableSelectAll={this.state.enableSelectAll}>
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
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
              >
                {tableData.map( (row, index) => (
                  <TableRow key={index} selected={row.selected}>
                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{row.name}</TableRowColumn>
                    <TableRowColumn>{row.status}</TableRowColumn>
                  </TableRow>
                  ))}
              </TableBody>
              <TableFooter>
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

            <div style={styles.propContainerStyle}>
              <h3>Table Properties</h3>
              <TextField
                floatingLabelText="Table Body Height"
                defaultValue={this.state.height}
                onChange={this.formEventHandler}
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
            </div>
          </div>
        );

        // "http://www.material-ui.com/#/components/tabs"
        const TabsExampleSimple = () => (
          <Tabs>
            <Tab label="Item One" >
              <div>
                <h2 style={styles.headline}>Tab One</h2>
                <p>
                  This is an example tab.
                </p>
                <p>
                  You can put any sort of HTML or react component in here. It even keeps the component state!
                </p>
                <Slider name="slider0" defaultValue={0.5} />
              </div>
            </Tab>
            <Tab label="Item Two" >
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
              onActive={this.handleActive}
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
        element = (
          <Tabs
            value={this.state.value}
            onChange={this.handleChangeTabs}
          >
            <Tab label="Tab A" value="a" >
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
        const TabsExampleIcon = () => (
            <Tabs>
                <Tab icon={<FontIcon className="muidocs-icon-action-home" />} />
                <Tab icon={<ActionFlightTakeoff />} />
                <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>} />
            </Tabs>
        );

        // "http://www.material-ui.com/#/components/text-field"
        const TextFieldExampleSimple = () => (
          <div>
            <TextField
              hintText="Hint Text"
            /><br/>
            <br/>
            <TextField
              hintText="The hint text can be as long as you want, it will wrap."
            /><br/>
            <TextField
              defaultValue="Default Value"
            /><br/>
            <TextField
              hintText="Hint Text"
              floatingLabelText="Floating Label Text"
            /><br/>
            <TextField
              hintText="Password Field"
              floatingLabelText="Password"
              type="password"
            /><br/>
            <TextField
              hintText="MultiLine with rows: 2 and rowsMax: 4"
              multiLine={true}
              rows={2}
              rowsMax={4}
            /><br/>
            <TextField
              hintText="Message Field"
              floatingLabelText="MultiLine and FloatingLabel"
              multiLine={true}
              rows={2}
            />
          </div>
        );
        const TextFieldExampleError = () => (
          <div>
            <TextField
              hintText="Hint Text"
              errorText="This field is required"
            /><br/>
            <TextField
              hintText="Hint Text"
              errorText="The error text can be as long as you want, it will wrap."
            /><br/>
            <TextField
              hintText="Hint Text"
              errorText="This field is required"
              floatingLabelText="Floating Label Text"
            /><br/>
            <TextField
              hintText="Message Field"
              errorText="This field is required."
              floatingLabelText="MultiLine and FloatingLabel"
              multiLine={true}
              rows={2}
            /><br/>
          </div>
        );
        const TextFieldExampleCustomize = () => (
          <div>
            <TextField
              hintText="Styled Hint Text"
              hintStyle={styles.errorStyle}
            /><br/>
            <TextField
              hintText="Custom error color"
              errorText="This field is required."
              errorStyle={styles.errorStyle}
            /><br/>
            <TextField
              hintText="Custom Underline Color"
              underlineStyle={styles.underlineStyle}
            /><br/>
            <TextField
              hintText="Custom Underline Focus Color"
              underlineFocusStyle={styles.underlineStyle}
            />
          </div>
        );
        const TextFieldExampleDisabled = () => (
          <div>
            <TextField
              disabled={true}
              hintText="Disabled Hint Text"
            /><br/>
            <TextField
              disabled={true}
              defaultValue="Disabled Value"
            /><br/>
            <TextField
              disabled={true}
              hintText="Disabled Hint Text"
              floatingLabelText="Floating Label Text"
            /><br/>
            <TextField
              disabled={true}
              hintText="Disabled Hint Text"
              defaultValue="Disabled With Floating Label"
              floatingLabelText="Floating Label Text"
            />
          </div>
        );
        element = <TextField
            hintText = "Hint Text"
            value = { this.state.value }
            underlineStyle = {{ borderColor: Colors.green500 }}
            onChange = { this.formEventHandler } />;


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
          </div>
        );
        element = (
          <div>
            <TimePicker
              ref={t => this.picker12hr = t}
              format="ampm"
              hintText="12hr Format"
              onChange={this.handleChangeTimePicker12}
            />
            <TimePicker
              ref={t => this.picker24hr = t}
              format="24hr"
              hintText="24hr Format"
              onChange={this.handleChangeTimePicker24}
            />
          </div>
        );

        // "http://www.material-ui.com/#/components/toolbar"
        const ToolbarExamplesSimple = () => (
          <Toolbar>
            <ToolbarGroup firstChild={true} float="left">
              <DropDownMenu value={3}>
                <MenuItem value={1} primaryText="All Broadcasts" />
                <MenuItem value={2} primaryText="All Voice" />
                <MenuItem value={3} primaryText="All Text" />
                <MenuItem value={4} primaryText="Complete Voice" />
                <MenuItem value={5} primaryText="Complete Text" />
                <MenuItem value={6} primaryText="Active Voice" />
                <MenuItem value={7} primaryText="Active Text" />
              </DropDownMenu>
            </ToolbarGroup>
            <ToolbarGroup float="right">
              <ToolbarTitle text="Options" />
              <FontIcon className="muidocs-icon-custom-sort" />
              <IconMenu
                iconButtonElement={
                  <IconButton touch={true}>
                    <NavigationExpandMoreIcon />
                  </IconButton>
                }
              >
                <MenuItem primaryText="Download" />
                <MenuItem primaryText="More Info" />
              </IconMenu>
              <ToolbarSeparator />
              <RaisedButton label="Create Broadcast" primary={true} />
            </ToolbarGroup>
          </Toolbar>
        );

        return element;
    }
}
