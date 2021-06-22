import * as React from "react";
import HuaweiProtectedApps from "react-native-huawei-protected-apps";

const config = {
  title: "Huawei Protected Apps",
  text: "This app requires to be enabled in 'Protected Apps' in order to receive push notifcations",
  doNotShowAgainText: "Do not show again",
  positiveText: "PROTECTED APPS",
  negativeText: "CANCEL"
};

HuaweiProtectedApps.AlertIfHuaweiDevice(config);
