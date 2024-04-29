import installExtension, {
    ANGULARJS_BATARANG,
    APOLLO_DEVELOPER_TOOLS,
    BACKBONE_DEBUGGER,
    CYCLEJS_DEVTOOL,
    EMBER_INSPECTOR,
    JQUERY_DEBUGGER,
    MOBX_DEVTOOLS,
    REACT_DEVELOPER_TOOLS,
    REACT_PERF,
    REDUX_DEVTOOLS,
    VUEJS_DEVTOOLS,
} from "electron-devtools-installer";

installExtension(EMBER_INSPECTOR);
installExtension(REACT_DEVELOPER_TOOLS);
installExtension(BACKBONE_DEBUGGER);
installExtension(JQUERY_DEBUGGER);
installExtension(ANGULARJS_BATARANG);
installExtension(VUEJS_DEVTOOLS);
installExtension(REDUX_DEVTOOLS);
installExtension(REACT_PERF);
installExtension(CYCLEJS_DEVTOOL);
installExtension(APOLLO_DEVELOPER_TOOLS);
installExtension(MOBX_DEVTOOLS);
installExtension("abcdefghijkl");
installExtension([EMBER_INSPECTOR, JQUERY_DEBUGGER]);
installExtension(["extension", "another-extension"]);
installExtension([REACT_DEVELOPER_TOOLS, "MOBX_DEVTOOLS"]);
