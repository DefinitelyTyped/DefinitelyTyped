import installExtension, {
    EMBER_INSPECTOR, REACT_DEVELOPER_TOOLS,
    BACKBONE_DEBUGGER, JQUERY_DEBUGGER,
    ANGULARJS_BATARANG, VUEJS_DEVTOOLS,
    REDUX_DEVTOOLS, REACT_PERF,
} from 'electron-devtools-installer';


installExtension(EMBER_INSPECTOR);
installExtension(REACT_DEVELOPER_TOOLS);
installExtension(BACKBONE_DEBUGGER);
installExtension(JQUERY_DEBUGGER);
installExtension(ANGULARJS_BATARANG);
installExtension(VUEJS_DEVTOOLS);
installExtension(REDUX_DEVTOOLS);
installExtension(REACT_PERF);
installExtension('abcdefghijkl');