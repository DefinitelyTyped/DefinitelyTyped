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
				template: '<hr />'
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
			},
			{
				type: 'input',
				key: 'zip',
				templateOptions: {
					type: 'number',
					label: 'Zip',
					max: 99999,
					min: 0,
					pattern: '\\d{5}'
				}
			},
			{
				type: 'checkbox',
				key: 'happyUser',
				templateOptions: {
					label: 'Are you happy?'
				}
			}
		]
	}
}

app.controller("AppController", AppController);

