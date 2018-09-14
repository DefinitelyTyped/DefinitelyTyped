import loadDevtool from 'electron-load-devtool';

loadDevtool(loadDevtool.REDUX_DEVTOOLS);
loadDevtool(loadDevtool.EMBER_INSPECTOR);
loadDevtool(loadDevtool.REACT_DEVELOPER_TOOLS);
loadDevtool(loadDevtool.BACKBONE_DEBUGGER);
loadDevtool(loadDevtool.JQUERY_DEBUGGER);
loadDevtool(loadDevtool.ANGULARJS_BATARANG);
loadDevtool(loadDevtool.VUEJS_DEVTOOLS);
loadDevtool('another-devtools-id');

loadDevtool(loadDevtool.REDUX_DEVTOOLS, {
  enabled: false
});

loadDevtool(loadDevtool.REDUX_DEVTOOLS, {
  name: 'chromium',
  profile: 'another-profile-name',
  version: '1.2.3'
});
