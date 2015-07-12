/// <reference path="angular-formly.d.ts" />

var app = angular.module('app', ['formly']);

class AppController {
	fields: AngularFormly.IFieldConfigurationObject[];
	constructor($scope: ng.IScope) {
		var vm = this;
		vm.fields = [
			{
				field: 'label',
				type: 'input',
				templateOptions: {
					maxlength: 8,
					minlength: 3
				}
			},
			{
				field: 'project',
				type: 'input',
				defaultValue: 'Project 1',
				templateOptions: {
					placeholder: 'Enter a project name...'
				}
			},
			{
				template: () => 'hello'
			}
		]
	}
}

app.controller("AppController", AppController);

