

var app = angular.module('app', ['formly']);

interface IScope extends ng.IScope {
    to: { label: string; }
}

class FormConfig {
    constructor(formlyConfig: AngularFormly.IFormlyConfig, formlyValidationMessages: AngularFormly.IValidationMessages) {
        formlyConfig.setWrapper({
            name: 'validation',
            types: ['input', 'customInput'],
            templateUrl: 'my-messages.html'
        });

        formlyConfig.setWrapper([
            {
                name: 'validation-0',
                types: ['input-0', 'customInput-0'],
                templateUrl: 'my-messages-0.html'
            },
            {
                name: 'validation-1',
                types: ['input-1', 'customInput-1'],
                templateUrl: 'my-messages-1.html'
            }
        ]);

        formlyValidationMessages.addStringMessage('required', 'This field is required');

        formlyConfig.setType({
            name: 'customInput',
            extends: 'input'
        });

        formlyConfig.disableWarnings = true;
        formlyConfig.templateManipulators = undefined;

        formlyConfig.extras.apiCheckInstance = null;
        formlyConfig.extras.defaultHideDirective = 'ng-if';
        formlyConfig.extras.disableNgModelAttrsManipulator = true;
        formlyConfig.extras.errorExistsAndShouldBeVisibleExpression = angular.noop;
        formlyConfig.extras.explicitAsync = true;
        formlyConfig.extras.fieldTransform = angular.noop;
        formlyConfig.extras.fieldTransform = [angular.noop];
        formlyConfig.extras.getFieldId = angular.noop;
        formlyConfig.extras.ngModelAttrsManipulatorPreferUnbound = true;
    }
}

class AppController {
    fields: AngularFormly.IFieldArray;
    constructor() {
        var vm = this;
        vm.fields = [
            {
                key: 'firstName',
                type: 'customInput',
                templateOptions: {
                    required: true,
                    label: 'First Name',
                    foo: 'hi'
                }
            },
            {
                key: 'email',
                type: 'input',
                templateOptions: {
                    label: 'Email',
                    required: true,
                    type: 'email',
                    maxlength: 10,
                    minlength: 6,
                    placeholder: 'example@example.com'
                }
            },
            {
                key: 'ip',
                type: 'input',
                validators: {
                    ipAddress: {
                        expression: function(viewValue, modelValue) {
                            var value = modelValue || viewValue;
                            return /(\d{1,3}\.){3}\d{1,3}/.test(value);
                        },
                        message: '$viewValue + " is not a valid IP Address"'
                    }
                },
                templateOptions: {
                    label: 'IP Address',
                    required: true,
                    type: 'text',
                    placeholder: '127.0.0.1',
                },
                validation: {
                    messages: {
                        required: function($viewValue: any, $modelValue: any, scope: AngularFormly.ITemplateScope) {
                            return scope.to.label + ' is required'
                        }
                    }
                }
            },
            {
                key: 'mac',
                type: 'input',
                templateOptions: {
                    label: 'MAC Address',
                    required: true,
                    placeholder: '49-8A-BD-4E-00-1D',
                    pattern: '([0-9A-F]{2}[:-]){5}([0-9A-F]{2})'
                }
            },
            {
                type: 'checkbox',
                key: 'checked',
                templateOptions: {
                    label: 'Check this'
                }
            },
            {
                key: 'checked2',
                type: 'checkbox',
                wrapper: null,
                templateOptions: {
                    label: 'no wrapper here...'
                }
            },
            {
                //From http://angular-formly.com/#/example/other/nested-formly-forms
                key: 'address',
                wrapper: 'panel',
                templateOptions: { label: 'Address' },
                fieldGroup: [{
                  key: 'town',
                  type: 'input',
                  templateOptions: {
                    required: true,
                    type: 'text',
                    label: 'Town'
                  }
                }]
            }
        ]
    }
}

app.controller("AppController", AppController);

