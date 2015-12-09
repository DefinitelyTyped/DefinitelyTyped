// Licensed under the MIT license.

/// <reference path="StatusBar.d.ts" />

var statusBar: StatusBar = window.StatusBar;
statusBar.overlaysWebView(true);
statusBar.overlaysWebView(false);
statusBar.styleDefault();
statusBar.styleLightContent();
statusBar.styleBlackTranslucent();
statusBar.styleBlackOpaque();
statusBar.backgroundColorByName("red");
statusBar.backgroundColorByHexString("#aaa");
statusBar.hide();
statusBar.show();
var visible: boolean = statusBar.isVisible;
