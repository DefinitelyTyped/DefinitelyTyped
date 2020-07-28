import * as angular from 'angular';

angular.module('main', ['ui-select']).config(function(uiSelectConfig: angular.ui.select.ISelectConfig) {
    uiSelectConfig.appendToBody = true;
    uiSelectConfig.backspaceReset = true;
    uiSelectConfig.closeOnSelect = true;
    uiSelectConfig.dropdownPosition = 'auto';
    uiSelectConfig.generateId = function() {
        return 0;
    };
    uiSelectConfig.paste = function(data: string) {
        console.log(`Pasted [${data}]`);
    };
    uiSelectConfig.paste = undefined;
    uiSelectConfig.placeholder = '';
    uiSelectConfig.refreshDelay = 1000;
    uiSelectConfig.removeSelected = true;
    uiSelectConfig.resetSearchInput = true;
    uiSelectConfig.searchEnabled = true;
    uiSelectConfig.skipFocusser = false;
    uiSelectConfig.sortable = false;
    uiSelectConfig.spinnerClass = 'glyphicon glyphicon-refresh ui-select-spin';
    uiSelectConfig.spinnerEnabled = false;
    uiSelectConfig.theme = 'bootstrap';
});

angular.module('main', ['ui-select']).directive('myUiSelect', function() {
    return {
        require: 'uiSelect',
        link: function(
            $scope: angular.IScope,
            element: angular.IAugmentedJQuery,
            attrs: angular.IAttributes,
            $select: angular.ui.select.ISelectController,
        ) {
            1 === $select.activeIndex;
            true === $select.clickTriggeredSelect;
            true === $select.closeOnSelect;
            $select.close();
            $select.close(false);
            true === $select.disabled;
            'text' === $select.dropdownPosition;
            true === $select.focus;
            true === $select.isEmpty();
            true === $select.isGrouped;
            true === $select.isLocked();
            'text' === $select.itemProperty;
            true === $select.open;
            'text' === $select.parserResult.filters;
            'text' === $select.parserResult.itemName;
            'text' === $select.parserResult.keyName;
            'text' === $select.parserResult.modelMapper;
            'text' === $select.parserResult.repeatExpression(true);
            'text' === $select.parserResult.source;
            'text' === $select.parserResult.trackByExp;
            $select.paste('Pasted text');
            'text' === $select.placeholder;
            1 === $select.refreshDelay;
            true === $select.refreshing;
            true === $select.removeSelected;
            true === $select.resetSearchInput;
            true === $select.searchEnabled;
            'text' === $select.search;
            $select.setFocus();
            $select.sizeSearchInput();
            true === $select.skipFocusser;
            true === $select.sortable;
            'text' === $select.spinnerClass;
            true === $select.spinnerEnabled;
        },
    };
});
