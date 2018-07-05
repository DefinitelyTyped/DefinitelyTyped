// since the export is a function, this is the only actual correct way:
import injectTapEventPluginRequire = require("react-tap-event-plugin");

injectTapEventPluginRequire({
  shouldRejectClick: function (lastTouchEventTimestamp, clickEventTimestamp) {
    return true;
  }
});

injectTapEventPluginRequire();
injectTapEventPluginRequire({});
