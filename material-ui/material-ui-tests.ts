// This tests React components, so it is most natural to write the test as a .TSX file,
// however the DefinitelyTyped test runner only accepts .TS files.  To convert:
//  1. Save in Visual Studio or otherwise use TSC to save as a "material-ui-tests.js" file.
//  2. Copy the "material-ui-tests.tsx" file to "material-ui-tests.ts".
//  3. Copy the body of "MaterialUiTests.prototype.render = function ()" in "material-ui-tsets.js"
//     and replace the body of render() in "material-ui-tests.ts".
//  4. Correct some missing information:
//      a. Find "var element;" and change to "let element: React.ReactElement<any>;".
//      b. Replace "this.linkState(" with "this.linkState<string>(".
//      c. Add generic type help for the Component Property to the remaining errors on
//         React.createElement, for example, add "<__MaterialUI.DialogProp>".

///<reference path='../react/react.d.ts' />
///<reference path='material-ui.d.ts' />

import * as React from "react/addons";
import mui = require("material-ui");
import Colors = require("material-ui/lib/styles/colors");
import AppBar = require("material-ui/lib/app-bar");
import IconButton = require("material-ui/lib/icon-button");
import FlatButton = require("material-ui/lib/flat-button");
import Avatar = require("material-ui/lib/avatar");
import FontIcon = require("material-ui/lib/font-icon");
import Typography = require("material-ui/lib/styles/typography");
import RaisedButton = require("material-ui/lib/raised-button");
import FloatingActionButton = require("material-ui/lib/floating-action-button");
import Card = require("material-ui/lib/card/card");
import CardHeader = require("material-ui/lib/card/card-header");
import CardText = require("material-ui/lib/card/card-text");
import CardActions = require("material-ui/lib/card/card-actions");
import Dialog = require("material-ui/lib/dialog");
import DropDownMenu = require("material-ui/lib/drop-down-menu");
import RadioButtonGroup = require("material-ui/lib/radio-button-group");
import RadioButton = require("material-ui/lib/radio-button");
import Toggle = require("material-ui/lib/toggle");
import TextField = require("material-ui/lib/text-field");
import SelectField = require("material-ui/lib/select-field");
import IconMenu = require("material-ui/lib/menus/icon-menu");
import Menu = require('material-ui/lib/menus/menu');
import MenuItem = require('material-ui/lib/menus/menu-item');
import MenuDivider = require('material-ui/lib/menus/menu-divider');

import NavigationClose = require("material-ui/lib/svg-icon");  // TODO: Should actually import the actual "material-ui/lib/svg-icons/navigation/close", but they aren't defined yet.
import FileFolder = require("material-ui/lib/svg-icon");  // TODO: Should actually import the actual "material-ui/lib/svg-icons/file/folder", but they aren't defined yet.
import ToggleStar = require("material-ui/lib/svg-icon");  // TODO: Should actually import the actual "material-ui/lib/svg-icons/toggle/star", but they aren't defined yet.
import ActionGrade = require("material-ui/lib/svg-icon");  // TODO: Should actually import the actual "material-ui/lib/svg-icons/action/grade", but they aren't defined yet.
import ToggleStarBorder = require("material-ui/lib/svg-icon");  // TODO: Should actually import the actual "material-ui/lib/svg-icons/toggle/star-border", but they aren't defined yet.
import ArrowDropRight = require("material-ui/lib/svg-icon");  // TODO: Should actually import the actual "material-ui/lib/svg-icons/toggle/star-border", but they aren't defined yet.

class MaterialUiTests extends React.Component<{}, {}> implements React.LinkedStateMixin {

    // injected with mixin
    linkState: <T>(key: string) => React.ReactLink<T>;
    dialog: mui.Dialog;
    //dialog2: Dialog;  // can't get type directly from require("material-ui/lib/dialog");

    private touchTapEventHandler(e: __MaterialUI.TouchTapEvent) {
        this.dialog.show();
        //this.dialog2.show();
    }
    private formEventHandler(e: React.FormEvent) {
    }
    private selectFieldChangeHandler(e: __MaterialUI.TouchTapEvent, si: number, mi: any) {
    }

    render() {
        // "http://material-ui.com/#/customization/themes"
        var ThemeManager = new mui.Styles.ThemeManager();
        ThemeManager.setTheme(ThemeManager.types.LIGHT);
        ThemeManager.setTheme(ThemeManager.types.DARK);
        var muiTheme = ThemeManager.getCurrentTheme();
        ThemeManager.setComponentThemes({
            toggle: {
                thumbOnColor: "#00bcd4",
                trackOnColor: "LightCyan",
            }
        });
        // "http://material-ui.com/#/customization/inline-styles"
        var Checkbox = mui.Checkbox;
        let element: React.ReactElement<any>;
        element = React.createElement(Checkbox, {"id": "checkboxId1", "name": "checkboxName1", "value": "checkboxValue1", "label": "went for a run today", "style": {
            width: '50%',
            margin: '0 auto'
        }, "iconStyle": {
            fill: '#FF4081'
        }});
        element = React.createElement(Checkbox, {
            id: "checkboxId1", name: "checkboxName1", value: "checkboxValue1", label: "went for a run today", style: {
                width: '50%',
                margin: '0 auto'
            }, iconStyle: {
                fill: '#FF4081'
            }
        });
        // "http://material-ui.com/#/customization/colors"
        ThemeManager.setComponentThemes({
            toggle: {
                thumbOnColor: Colors.cyan200,
                thumbOffColor: Colors.grey400,
            }
        });
        // "http://material-ui.com/#/components/appbar"
        element = React.createElement(AppBar, {"title": "Title", "iconClassNameRight": "muidocs-icon-navigation-expand-more"});
        element = React.createElement(AppBar, {"title": "Title", "iconElementLeft": React.createElement(IconButton, null, React.createElement(NavigationClose, null)), "iconElementRight": React.createElement(FlatButton, {"label": "Save"})});
        // "http://material-ui.com/#/components/avatars"
        //image avatar
        element = React.createElement(Avatar, {"src": "images/uxceo-128.jpg"});
        //SvgIcon avatar
        element = React.createElement(Avatar, {"icon": React.createElement(FileFolder, null)});
        //SvgIcon avatar with custom colors
        element = React.createElement(Avatar, {"icon": React.createElement(FileFolder, null), "color": Colors.orange200, "backgroundColor": Colors.pink400});
        //FontIcon avatar
        element = React.createElement(Avatar, {"icon": React.createElement(FontIcon, {"className": "muidocs-icon-communication-voicemail"})});
        //FontIcon avatar with custom colors
        element = React.createElement(Avatar, {"icon": React.createElement(FontIcon, {"className": "muidocs-icon-communication-voicemail"}), "color": Colors.blue300, "backgroundColor": Colors.indigo900});
        //Letter avatar
        element = React.createElement(Avatar, null, "A");
        //Letter avatar with custom colors
        element = React.createElement(Avatar, {"color": Colors.deepOrange300, "backgroundColor": Colors.purple500});
        // "http://material-ui.com/#/components/buttons"
        element = React.createElement(FlatButton, {"linkButton": true, "href": "https://github.com/callemall/material-ui", "secondary": true, "label": "GitHub"}, React.createElement(FontIcon, {"style": { color: Typography.textFullWhite }, "className": "muidocs-icon-custom-github"}));
        element = React.createElement(RaisedButton, {"linkButton": true, "href": "https://github.com/callemall/material-ui", "secondary": true, "label": "GitHub"}, React.createElement(FontIcon, {"style": { color: Typography.textFullWhite }, "className": "muidocs-icon-custom-github"}));
        element = React.createElement(FloatingActionButton, {"secondary": true, "mini": true, "linkButton": true, "href": "https://github.com/callemall/material-ui"}, React.createElement(ToggleStar, null));
        // "http://material-ui.com/#/components/cards"
        element = React.createElement(Card, {"initiallyExpanded": true}, React.createElement(CardHeader, {"title": "Title", "subtitle": "Subtitle", "avatar": React.createElement(Avatar, {"style": { color: 'red' }}, "A"), "showExpandableButton": true}), React.createElement(CardText, {"expandable": true}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."), React.createElement(CardActions, {"expandable": true}, React.createElement(FlatButton, {"label": "Action1"}), React.createElement(FlatButton, {"label": "Action2"})), React.createElement(CardText, {"expandable": true}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."));
        // "http://material-ui.com/#/components/date-picker"
        // "http://material-ui.com/#/components/dialog"
        var standardActions = [
            { text: 'Cancel' },
            { text: 'Submit', onTouchTap: this.touchTapEventHandler, ref: 'submit' }
        ];
        element = React.createElement<__MaterialUI.DialogProp>(Dialog, {"title": "Dialog With Standard Actions", "actions": standardActions, "actionFocus": "submit", "modal": true}, "The actions in this window are created from the json that's passed in.");
        //Custom Actions
        var customActions = [
            React.createElement(FlatButton, {"label": "Cancel", "secondary": true, "onTouchTap": this.touchTapEventHandler}),
            React.createElement(FlatButton, {"label": "Submit", "primary": true, "onTouchTap": this.touchTapEventHandler})
        ];
        element = React.createElement(Dialog, {"title": "Dialog With Custom Actions", "actions": customActions, "modal": false, "autoDetectWindowHeight": true, "autoScrollBodyContent": true}, "The actions in this window were passed in as an array of react objects.");
        // "http://material-ui.com/#/components/dropdown-menu"
        var menuItems: __MaterialUI.Menu.MenuItemRequest[] = [
            { payload: '1', text: 'Never' },
            { payload: '2', text: 'Every Night' },
            { payload: '3', text: 'Weeknights' },
            { payload: '4', text: 'Weekends' },
            { payload: '5', text: 'Weekly' },
        ];
        element = React.createElement(DropDownMenu, {"menuItems": menuItems});
        // "http://material-ui.com/#/components/icons"
        element = React.createElement(FontIcon, {"className": "material-icons", "color": Colors.red500}, " home");
        // "http://material-ui.com/#/components/icon-buttons"
        //Method 1: muidocs-icon-github is defined in a style sheet.
        element = React.createElement(IconButton, {"iconClassName": "muidocs-icon-custom-github", "tooltip": "GitHub"});
        //Method 2: ActionGrade is a component created using mui.SvgIcon.
        element = React.createElement(IconButton, {"tooltip": "Star", "touch": true}, React.createElement(ActionGrade, null));
        //Method 3: Manually creating a mui.FontIcon component within IconButton
        element = React.createElement(IconButton, {"tooltip": "Sort", "disabled": true}, React.createElement(FontIcon, {"className": "muidocs-icon-custom-sort"}));
        //Method 4: Using Google material-icons
        element = React.createElement(IconButton, {"iconClassName": "material-icons", "tooltipPosition": "bottom-center", "tooltip": "Sky"}, "settings_system_daydream");
        // "http://material-ui.com/#/components/icon-menus"
        element = React.createElement(IconMenu, {"iconButtonElement": React.createElement(IconButton, null)}, React.createElement(MenuItem, {"primaryText": "Refresh"}), React.createElement(MenuItem, {"primaryText": "Send feedback"}), React.createElement(MenuItem, {"primaryText": "Settings"}), React.createElement(MenuItem, {"primaryText": "Help"}), React.createElement(MenuItem, {"primaryText": "Sign out"}));
        // "http://material-ui.com/#/components/left-nav"
        // "http://material-ui.com/#/components/lists"
        // "http://material-ui.com/#/components/menus"
        element = React.createElement(Menu, null, React.createElement(MenuItem, {"primaryText": "Maps"}), React.createElement(MenuItem, {"primaryText": "Books"}), React.createElement(MenuItem, {"primaryText": "Flights"}), React.createElement(MenuItem, {"primaryText": "Apps"}));
        element = React.createElement(Menu, {"desktop": true, "width": 320}, React.createElement(MenuItem, {"primaryText": "Bold", "secondaryText": "&#8984;B"}), React.createElement(MenuItem, {"primaryText": "Italic", "secondaryText": "&#8984;I"}), React.createElement(MenuItem, {"primaryText": "Underline", "secondaryText": "&#8984;U"}), React.createElement(MenuItem, {"primaryText": "Strikethrough", "secondaryText": "Alt+Shift+5"}), React.createElement(MenuItem, {"primaryText": "Superscript", "secondaryText": "&#8984;."}), React.createElement(MenuItem, {"primaryText": "Subscript", "secondaryText": "&#8984;,"}), React.createElement(MenuDivider, null), React.createElement(MenuItem, {"primaryText": "Paragraph styles", "rightIcon": React.createElement(ArrowDropRight, null)}), React.createElement(MenuItem, {"primaryText": "Align", "rightIcon": React.createElement(ArrowDropRight, null)}), React.createElement(MenuItem, {"primaryText": "Line spacing", "rightIcon": React.createElement(ArrowDropRight, null)}), React.createElement(MenuItem, {"primaryText": "Numbered list", "rightIcon": React.createElement(ArrowDropRight, null)}), React.createElement(MenuItem, {"primaryText": "List options", "rightIcon": React.createElement(ArrowDropRight, null)}), React.createElement(MenuDivider, null), React.createElement(MenuItem, {"primaryText": "Clear formatting", "secondaryText": "&#8984;/"}));
        // "http://material-ui.com/#/components/paper"
        // "http://material-ui.com/#/components/progress"
        // "http://material-ui.com/#/components/refresh-indicator"
        // "http://material-ui.com/#/components/sliders"
        // "http://material-ui.com/#/components/switches"
        element = React.createElement(Checkbox, {"name": "checkboxName2", "value": "checkboxValue2", "label": "fed the dog", "defaultChecked": true});
        element = React.createElement(Checkbox, {"name": "checkboxName3", "value": "checkboxValue3", "label": "built a house on the moon", "disabled": true});
        element = React.createElement<__MaterialUI.CheckboxProp>(Checkbox, {"name": "checkboxName4", "value": "checkboxValue4", "checkedIcon": React.createElement(ToggleStar, null), "unCheckedIcon": React.createElement(ToggleStarBorder, null), "label": "custom icon"});
        element = React.createElement(RadioButtonGroup, {"name": "shipSpeed", "defaultSelected": "not_light"}, React.createElement(RadioButton, {"value": "light", "label": "prepare for light speed", "style": { marginBottom: 16 }}), ";", React.createElement(RadioButton, {"value": "not_light", "label": "light speed too slow", "style": { marginBottom: 16 }}), ";", React.createElement(RadioButton, {"value": "ludicrous", "label": "go to ludicrous speed", "style": { marginBottom: 16 }, "disabled": true}));
        element = React.createElement(Toggle, {"name": "toggleName1", "value": "toggleValue1", "label": "activate thrusters"});
        element = React.createElement(Toggle, {"name": "toggleName2", "value": "toggleValue2", "label": "auto-pilot", "defaultToggled": true});
        element = React.createElement(Toggle, {"name": "toggleName3", "value": "toggleValue3", "label": "initiate self-destruct sequence", "disabled": true});
        // "http://material-ui.com/#/components/snackbar"
        // "http://material-ui.com/#/components/table"
        // "http://material-ui.com/#/components/tabs"
        // "http://material-ui.com/#/components/text-fields"
        element = React.createElement(TextField, {"hintText": "Hint Text"});
        element = React.createElement(TextField, {"hintText": "Hint Text", "defaultValue": "Default Value"});
        element = React.createElement(TextField, {"hintText": "Hint Text", "value": "value", "underlineStyle": { borderColor: Colors.green500 }, "onChange": this.formEventHandler});
        element = React.createElement(TextField, {"hintText": "Custom Underline Focus Color", "underlineFocusStyle": { borderColor: Colors.amber900 }});
        element = React.createElement(TextField, {"hintText": "Hint Text", "valueLink": this.linkState<string>('valueLinkValue')});
        element = React.createElement(TextField, {"hintText": "Hint Text (MultiLine)", "multiLine": true});
        element = React.createElement(TextField, {"hintText": "The hint text can be as long as you want, it will wrap.", "multiLine": true});
        element = React.createElement(TextField, {"hintText": "Hint Text", "errorText": "The error text can be as long as you want, it will wrap."});
        element = React.createElement(TextField, {"hintText": "Hint Text", "errorText": "error text", "onChange": this.formEventHandler});
        element = React.createElement(TextField, {"hintText": "Hint Text (custom error color)", "errorText": "error text", "errorStyle": { color: 'orange' }, "onChange": this.formEventHandler, "defaultValue": "Custom error color"});
        element = React.createElement(TextField, {"hintText": "Disabled Hint Text", "disabled": true});
        element = React.createElement(TextField, {"hintText": "Disabled Hint Text", "disabled": true, "defaultValue": "Disabled With Value"});
        //Select Fields
        var arbitraryArrayMenuItems: __MaterialUI.Menu.MenuItemRequest[] = [
            {
                id: 0,
                name: "zero",
            },
        ];
        element = React.createElement(SelectField, {"value": 0, "onChange": this.selectFieldChangeHandler, "hintText": "Hint Text", "menuItems": menuItems});
        element = React.createElement(SelectField, {"valueLink": this.linkState<string>('selectValueLinkValue'), "floatingLabelText": "Float Label Text", "valueMember": "id", "displayMember": "name", "menuItems": arbitraryArrayMenuItems});
        element = React.createElement(SelectField, {"valueLink": this.linkState<string>('selectValueLinkValue2'), "floatingLabelText": "Float Custom Label Text", "floatingLabelStyle": { color: "red" }, "valueMember": "id", "displayMember": "name", "menuItems": arbitraryArrayMenuItems});
        element = React.createElement(SelectField, {"value": 0, "onChange": this.selectFieldChangeHandler, "menuItems": arbitraryArrayMenuItems});
        //Floating Hint Text Labels
        element = React.createElement(TextField, {"hintText": "Hint Text", "floatingLabelText": "Floating Label Text"});
        element = React.createElement(TextField, {"hintText": "Hint Text", "defaultValue": "Default Value", "floatingLabelText": "Floating Label Text"});
        element = React.createElement(TextField, {"hintText": "Hint Text", "floatingLabelText": "Floating Label Text", "value": "value", "onChange": this.formEventHandler});
        element = React.createElement(TextField, {"hintText": "Hint Text", "floatingLabelText": "Floating Label Text", "valueLink": this.linkState<string>('floatingValueLinkValue')});
        element = React.createElement(TextField, {"hintText": "Hint Text (MultiLine)", "floatingLabelText": "Floating Label Text", "multiLine": true});
        element = React.createElement(TextField, {"hintText": "Hint Text", "errorText": "floating text", "floatingLabelText": "Floating Label Text", "onChange": this.formEventHandler});
        element = React.createElement(TextField, {"hintText": "Hint Text", "errorText": "error text", "defaultValue": "abc", "floatingLabelText": "Floating Label Text", "onChange": this.formEventHandler});
        element = React.createElement(TextField, {"hintText": "Disabled Hint Text", "disabled": true, "floatingLabelText": "Floating Label Text"});
        element = React.createElement(TextField, {"hintText": "Disabled Hint Text", "disabled": true, "defaultValue": "Disabled With Value", "floatingLabelText": "Floating Label Text"});
        element = React.createElement(TextField, {"hintText": "Password Field", "floatingLabelText": "Password", "type": "password"});
        // "http://material-ui.com/#/components/time-picker"
        // "http://material-ui.com/#/components/toolbars"
        return element;
    }
}