var myApp = angular.module('testModule');

interface MySortableControllerScope extends ng.IScope {
  items: SortableModelInfo[];
  sortableOptions: ng.ui.UISortableOptions<SortableModelInfo>;
  sortingLog: SortLogInfo[];
}

interface SortableModelInfo {
  text: string;
  value: number;
}

interface SortLogInfo {
  ID: number;
  Text: string;
}

myApp.controller('sortableController', function ($scope: MySortableControllerScope) {
  $scope.sortableOptions = {
    activate: function(e, ui) {
      var jQueryEventObject: JQueryEventObject = e;
      var uiSortableUIParams: ng.ui.UISortableUIParams<SortableModelInfo> = ui;
    },
    beforeStop: function(e, ui) {
      var jQueryEventObject: JQueryEventObject = e;
      var uiSortableUIParams: ng.ui.UISortableUIParams<SortableModelInfo> = ui;
    },
    change: function(e, ui) {
      var jQueryEventObject: JQueryEventObject = e;
      var uiSortableUIParams: ng.ui.UISortableUIParams<SortableModelInfo> = ui;
    },
    deactivate: function(e, ui) {
      var jQueryEventObject: JQueryEventObject = e;
      var uiSortableUIParams: ng.ui.UISortableUIParams<SortableModelInfo> = ui;
    },
    out: function(e, ui) {
      var jQueryEventObject: JQueryEventObject = e;
      var uiSortableUIParams: ng.ui.UISortableUIParams<SortableModelInfo> = ui;
    },
    over: function(e, ui) {
      var jQueryEventObject: JQueryEventObject = e;
      var uiSortableUIParams: ng.ui.UISortableUIParams<SortableModelInfo> = ui;
    },
    receive: function(e, ui) {
      var jQueryEventObject: JQueryEventObject = e;
      var uiSortableUIParams: ng.ui.UISortableUIParams<SortableModelInfo> = ui;
    },
    remove: function(e, ui) {
      var jQueryEventObject: JQueryEventObject = e;
      var uiSortableUIParams: ng.ui.UISortableUIParams<SortableModelInfo> = ui;
    },
    sort: function(e, ui) {
      var jQueryEventObject: JQueryEventObject = e;
      var uiSortableUIParams: ng.ui.UISortableUIParams<SortableModelInfo> = ui;
    },
    start: function(e, ui) {
      var jQueryEventObject: JQueryEventObject = e;
      var uiSortableUIParams: ng.ui.UISortableUIParams<SortableModelInfo> = ui;
    },
    stop: function(e, ui) {
      var jQueryEventObject: JQueryEventObject = e;
      var uiSortableUIParams: ng.ui.UISortableUIParams<SortableModelInfo> = ui;
      var uiitem: ng.ui.UISortableUIItem<SortableModelInfo> = ui.item;
      var uiitemscope: ng.IScope = uiitem.scope();
      var uiitemsortable: ng.ui.UISortableProperties<SortableModelInfo> = uiitem.sortable;

      var dropindex: number = uiitemsortable.dropindex;
      var droptarget: number = uiitemsortable.droptarget;
      var droptargetModel: SortableModelInfo[] = uiitemsortable.droptargetModel;
      var index: number = uiitemsortable.index;
      var model: SortableModelInfo = uiitemsortable.model;
      var moved: SortableModelInfo = uiitemsortable.moved;
      var received: Boolean = uiitemsortable.received;
      var source: ng.IAugmentedJQuery = uiitemsortable.source;
      var sourceModel: SortableModelInfo[] = uiitemsortable.sourceModel;

      var logEntry = {
        ID: $scope.sortingLog.length + 1,
        Text: 'Moved element: ' + ui.item.sortable.model.text
      };
      $scope.sortingLog.push(logEntry);
    },
    update: function(e, ui) {
      var jQueryEventObject: JQueryEventObject = e;
      var uiSortableUIParams: ng.ui.UISortableUIParams<SortableModelInfo> = ui;
      var voidcanceled: void = ui.item.sortable.cancel();
      var isCanceled: Boolean = ui.item.sortable.isCanceled();
      var isCustomHelperUsed: Boolean =ui.item.sortable.isCustomHelperUsed();
    }
  };

  $scope.sortableOptions.appendTo = document.body;
  $scope.sortableOptions.appendTo = angular.element(document.body);
  $scope.sortableOptions.appendTo = 'body';
  $scope.sortableOptions.axis = 'x';
  $scope.sortableOptions.axis = 'y';
  $scope.sortableOptions.axis = false;
  $scope.sortableOptions.cancel = '.disabled';
  $scope.sortableOptions.connectWith = '.connectedSortable';
  $scope.sortableOptions.connectWith = false;
  $scope.sortableOptions.containment = 'parent';
  $scope.sortableOptions.containment = 'body';
  $scope.sortableOptions.containment = document.body;
  $scope.sortableOptions.containment = false;
  $scope.sortableOptions.cursor = 'move';
  $scope.sortableOptions.cursorAt = false;
  $scope.sortableOptions.cursorAt = { left: 5 };
  $scope.sortableOptions.delay = 300;
  $scope.sortableOptions.disabled = true;
  $scope.sortableOptions.distance = 5;
  $scope.sortableOptions.dropOnEmpty = false;
  $scope.sortableOptions.forceHelperSize = true;
  $scope.sortableOptions.forcePlaceholderSize = true;
  $scope.sortableOptions.grid = false;
  $scope.sortableOptions.grid = [20, 10];
  $scope.sortableOptions.handle = '.handle';
  $scope.sortableOptions.helper = 'clone';
  $scope.sortableOptions.helper = function(e: JQueryEventObject, item: ng.IAugmentedJQuery) {
    return item.clone();
  };
  $scope.sortableOptions.items = '> li:not(.disabled)';
  $scope.sortableOptions.opacity = false;
  $scope.sortableOptions.opacity = 0.5;
  $scope.sortableOptions.placeholder = false;
  $scope.sortableOptions.placeholder = 'sortable-placeholder';
  $scope.sortableOptions.revert = true;
  $scope.sortableOptions.revert = 300;
  $scope.sortableOptions.scroll = false;
  $scope.sortableOptions.scrollSensitivity = 10;
  $scope.sortableOptions.scrollSpeed = 40;
  $scope.sortableOptions.tolerance = 'pointer';
  $scope.sortableOptions.zIndex = 9999;

  $scope.sortableOptions['ui-floating'] = undefined;
  $scope.sortableOptions['ui-floating'] = null;
  $scope.sortableOptions['ui-floating'] = false;
  $scope.sortableOptions['ui-floating'] = true;
  $scope.sortableOptions['ui-floating'] = "auto";
});
