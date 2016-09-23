import * as angular from 'angular';

angular
	.module('main', ['ui-select'])
	.config(function(uiSelectConfig: angular.ui.select.ISelectConfig) {
		uiSelectConfig.appendToBody = true;
		uiSelectConfig.resetSearchInput = true;
		uiSelectConfig.theme = "bootstrap";
	});