/// <reference path="angular-agility.d.ts" />
/// <reference path='../angularjs/angular.d.ts' />

var validIconStrategy:aa.IValidIconStrategy = <aa.IValidIconStrategy>{};
validIconStrategy.validIcon = "";
validIconStrategy.invalidIcon = "";
validIconStrategy.getContainer(<ng.IAugmentedJQueryStatic>{});

var provider:aa.IFormExtensionsProvider = <aa.IFormExtensionsProvider>{};
provider.defaultLabelStrategy = "";
provider.defaultFieldGroupStrategy = "";
provider.defaultValMsgPlacementStrategy = "";
provider.validIconStrategy = validIconStrategy;
provider.defaultSpinnerClickStrategy = "";
provider.defaultNotifyTarget = "";
provider.defaultOnNavigateAwayStrategy = "";
provider.validationMessages['testName'] = 'testMessages';
provider.valMsgForTemplate = "";
provider.confirmResetStrategy = ():boolean=>{ return false; };
provider.globalSettings['testSetting'] = 'test';
provider.labelStrategies['testLabelStratgey'] = (element:ng.IAugmentedJQueryStatic, labelText:string, isRequired:boolean):void=>{};
provider.fieldGroupStrategies['testFieldGroupStratgey'] = (element:ng.IAugmentedJQueryStatic):void=>{};
provider.valMsgPlacementStrategies['testValMsgPlacementStrategy'] = (formFieldElement:ng.IAugmentedJQueryStatic, formName:string, formFieldName:string):void=>{};
provider.spinnerClickStrategies['testSpinnerClickStratgey'] = (element:ng.IAugmentedJQueryStatic):void=>{};
provider.onNavigateAwayStrategies['testOnNavigateAwayStrategy'] = (rootFormScope:ng.IScope, rootForm:ng.IAugmentedJQueryStatic, $injector:ng.auto.IInjectorService)=>{};

var defaults:aa.INotifyDefaults = <aa.INotifyDefaults>{};
defaults.success = (message:string, options:any, notifier:any):any=>{};
defaults.info = (message:string, options:any, notifier:any):any=>{};
defaults.warning = (message:string, options:any, notifier:any):any=>{};
defaults.danger = (message:string, options:any, notifier:any):any=>{};
defaults.error = (message:string, options:any, notifier:any):any=>{};

var configWithoutTemplate:aa.INotifyConfig = {
	name: "",
	options: <aa.INotifyOptions> {},
	namedDefaults: <aa.INotifyDefaults> {}
}

var configWithTemplate:aa.INotifyConfig = {
	name: "",
	template: "",
	templateName: "",
	options: <aa.INotifyOptions> {},
	namedDefaults: <aa.INotifyDefaults> {}
}

var notifyOptionsWithoutCssClasses:aa.INotifyOptions = {
	messageType: "",
	allowHtml: true,
	message: ""
}

var notifyOptionsWithCssClasses:aa.INotifyOptions = {
	cssClasses: "",
	messageType: "",
	allowHtml: true,
	message: ""
}

var notifyConfigProvider:aa.INotifyConfigProvider = <aa.INotifyConfigProvider> {};
notifyConfigProvider.notifyConfigs = {};
notifyConfigProvider.defaultTargetContainerName = "";
notifyConfigProvider.defaultNotifyConfig = "";
notifyConfigProvider.addOrUpdateNotifyConfig("", configWithTemplate);
notifyConfigProvider.optionsTransformer(notifyOptionsWithCssClasses, <ng.ISCEService>{});

var fullExternalConfig:aa.IExternalFormValidationConfig = {
	validations: "",
	ignore: "",
	globals: "",
	resolve: "",
	resolveFn: (modelValue:string):string=>{ return "" }
}

var minimalExternalConfig:aa.IExternalFormValidationConfig = {
	validations: ""
}
