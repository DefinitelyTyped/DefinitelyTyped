/// <reference path="../github-electron/github-electron.d.ts" />
/// <reference path="electron-devtools-installer.d.ts" />

import installExtension, {
    EMBER_INSPECTOR, REACT_DEVELOPER_TOOLS,
    BACKBONE_DEBUGGER, JQUERY_DEBUGGER,
    ANGULARJS_BATARANG, VUEJS_DEVTOOLS,
    REDUX_DEVTOOLS, REACT_PERF,
} from 'electron-devtools-installer';


installExtension(EMBER_INSPECTOR)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
installExtension(BACKBONE_DEBUGGER)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
installExtension(JQUERY_DEBUGGER)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
installExtension(ANGULARJS_BATARANG)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
installExtension(VUEJS_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
installExtension(REACT_PERF)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));