

declare var StatusBarView:StatusBar.IStatusBarViewStatic;

StatusBarView.content();

var statusBar = new StatusBarView();
statusBar.appendLeft(new View());
