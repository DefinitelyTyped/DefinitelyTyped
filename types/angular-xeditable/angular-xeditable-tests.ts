var myApp = angular.module('testModule', ['xeditable']);

myApp.run(["editableOptions", (editableOptions: angular.xeditable.IEditableOptions) => {

        editableOptions.activate = "select";
        editableOptions.activationEvent = "click";
        editableOptions.blurElem = "ignore";
        editableOptions.blurForm = "submit";
        editableOptions.buttons = "no";
        editableOptions.icon_set = "font-awesome";
        editableOptions.isDisabled = true;
        editableOptions.theme = "bs3";
}]);