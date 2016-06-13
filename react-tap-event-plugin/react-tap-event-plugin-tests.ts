/// <reference path="react-tap-event-plugin.d.ts"/>

import * as injectTapEventPluginAll from 'react-tap-event-plugin';

// since the export is a function, this is the only actual correct way:
import injectTapEventPluginRequire = require("react-tap-event-plugin");

injectTapEventPluginAll();

injectTapEventPluginAll({
  shouldRejectClick: function (lastTouchEventTimestamp, clickEventTimestamp) {
    return true;
  }
});

injectTapEventPluginRequire();

injectTapEventPluginRequire({});
