/// <reference path="cordova-plugin-spinner.d.ts" />

SpinnerPlugin.activityStart();
SpinnerPlugin.activityStart("a");
SpinnerPlugin.activityStart("a", () => {});
SpinnerPlugin.activityStart("a", () => {}, () => {});

SpinnerPlugin.activityStop();
SpinnerPlugin.activityStop(() => {});
SpinnerPlugin.activityStop(() => {}, () => {});