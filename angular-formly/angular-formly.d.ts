// Type definitions for angular-formly 6.17.0
// Project: https://github.com/formly-js/angular-formly
// Definitions by: Scott Hatcher <https://github.com/scatcher>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module 'AngularFormly' {
	export = AngularFormly;
}

declare module AngularFormly {


	/**
	 * see http://docs.angular-formly.com/docs/formly-expressions#expressionproperties-validators--messages
	 */
	interface IExpresssionFunction {
		($viewValue, $modelValue, scope): any;
	}


	/**
	 * This is part of the built-in formlyConfig templateManipulator called ngModelAttrsTemplateManipulator.
	 * This allows you to keep your templates very small and add custom behavior on at the type or field level.
	 *
	 * see http://docs.angular-formly.com/docs/ngmodelattrs
	 */
	interface INGModelAttrs {
		[key: string]: {
			attribute?: string;
			expresssion?: string;
			value?: string;
		}
	}


	interface ITemplateManipulator {
		(template, options, scope): string;
	}


	/**
	 * see http://docs.angular-formly.com/docs/ngmodelattrstemplatemanipulator
	 */
	interface ITemplateOptions {

		// both attribute or regular attribute
		disabled?: boolean | string;
		maxlength?: number | string;
		minlength?: number | string;
		pattern?: string;
		required?: boolean | string;

		//attribute only
		max?: number;
		min?: number;
		placeholder?: number | string;
		tabindex?: number;
		type?: string;

		//expression types
		onBlur?: string;
		onChange?: string;
		onClick?: string;
		onFocus?: string;
		onKeydown?: string;
		onKeypress?: string;
		onKeyup?: string;

		[key: string]: any;

	}


	/**
	 * see http://docs.angular-formly.com/docs/field-configuration-object#validators-object
	 */
	interface IValidator {
		expression?: string | { (viewValue, modelValue): boolean };
	}


	/**
	 * An object which has at least two properties called expression and listener. The watch.expression
	 * is added to the formly-form directive's scope (to allow it to run even when hide is true). You
	 * can specify a type ($watchCollection or $watchGroup) via the watcher.type property (defaults to
	 * $watch) and whether you want it to be a deep watch via the watcher.deep property (defaults to false).
	 *
	 * see http://docs.angular-formly.com/docs/field-configuration-object#watcher-objectarray-of-watches
	 */
	interface IWatcher {
		expression?: string | { (field, scope): boolean };
		listener: (field, newValue, oldValue, scope, stopWatching) => void;
		type?: string; //Defaults to $watch but can be set to $watchCollection or $watchGroup
	}


	// see http://docs.angular-formly.com/docs/field-configuration-object
	interface IFieldConfigurationObject {


		/**
		 * The type of field to be rendered. This is the recommended method
		 * for defining fields. Types must be pre-defined using formlyConfig.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#type-string
		 */
		type?: string;


		/**
		 * Can be set instead of type or templateUrl to use a custom html
		 * template form field. Recommended to be used with one-liners mostly
		 * (like a directive), or if you're using webpack with the ability to require templates :-)
		 *
		 * If a function is passed, it is invoked with the field configuration object and can return
		 * either a string for the template or a promise that resolves to a string.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#template-string--function
		 */
		template?: string | { (fieldConfiguration: IFieldConfigurationObject): string | ng.IPromise<string> };


		/**
		 * Can be set instead of type or template to use a custom html template form field. Works
		 * just like a directive templateUrl and uses the $templateCache
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#templateurl-string--function
		 */
		templateUrl?: string | { (fieldConfiguration: IFieldConfigurationObject): string | ng.IPromise<string> };


		/**
		 * Can be set instead of type or template to use a custom html template form field. Works
		 * just like a directive templateUrl and uses the $templateCache
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#key-string
		 */
		key?: string;


		/**
		 * Use defaultValue to initialize it the model. If this is provided and the value of the
		 * model at compile-time is undefined, then the value of the model will be assigned to defaultValue.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#defaultvalue-any
		 */
		defaultValue?: any;


		/**
		 * Uses ng-if. Whether to hide the field. Defaults to false. If you wish this to be conditional, use
		 * hideExpression. See below.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#hide-boolean
		 */
		hide?: boolean


		/**
		 * This is similar to expressionProperties with a slight difference. You should (hopefully) never
		 * notice the difference with the most common use case. This is available due to limitations with
		 * expressionProperties and ng-if not working together very nicely.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#hideexpression-string--function
		 */
		hideExpression?: string | IExpresssionFunction;


		/**
		 * By default, the model passed to the formly-field directive is the same as the model passed to the
		 * formly-form. However, if the field has a model specified, then it is used for that field (and that
		 * field only). In addition, a deep watch is added to the formly-field directive's scope to run the
		 * expressionProperties when the specified model changes.
		 *
		 * Note, the formly-form directive will allow you to specify a string which is an (almost) formly
		 * expression which allows you to define the model as relative to the scope of the form.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#model-object--string
		 */
		model?: Object | string;


		/**
		 * An object where the key is a property to be set on the main field config and the value is an
		 * expression used to assign that property. The value is a formly expressions. The returned value is
		 * wrapped in $q.when so you can return a promise from your function :-)
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#expressionproperties-object
		 */
		expressionProperties?: {
			[key: string]: string | IExpresssionFunction;
		}


		/**
		 * You can specify your own class that will be applied to the formly-field directive (or ng-form of
		 * a fieldGroup).
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#classname-string
		 */
		className?: string;


		/**
		 * This allows you to specify the id of your field (which will be used for its name as well unless
		 * a name is provided). Note, you can also override the id generation code using the formlyConfig
		 * extra called getFieldId.
		 *
		 * AVOID THIS
		 * If you don't have to do this, don't. Specifying IDs makes it harder to re-use things and it's
		 * just extra work. Part of the beauty that angular-formly provides is the fact that you don't need
		 * to concern yourself with making sure that this is unique.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#id-string
		 */
		id?: string;


		/**
		 * If you wish to, you can specify a specific name for your ng-model. This is useful if you're posting
		 * the form to a server using techniques of yester-year.
		 *
		 * AVOID THIS
		 * If you don't have to do this, don't. It's just extra work. Part of the beauty that angular-formly
		 * provides is the fact that you don't need to concern yourself with stuff like this.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#name-string
		 */
		name?: string;


		/**
		 * This is reserved for the developer. You have our guarantee to be able to use this and not worry about
		 * future versions of formly overriding your usage and preventing you from upgrading :-)
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#data-object
		 */
		data?: any;


		/**
		 * This is reserved for the templates. Any template-specific options go in here. Look at your specific
		 * template implementation to know the options required for this.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#templateoptions-object
		 */
		templateOptions?: ITemplateOptions;


		/**
		 * Allows you to specify custom template manipulators for this specific field. (use defaultOptions in a
		 * type configuration if you want it to apply to all fields of a certain type).
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#templatemanipulator-object-of-arrays-of-functions
		 */
		templateManipulator?: {
			[key: string]: ITemplateManipulator[];
		}


		/**
		 * This makes reference to setWrapper in formlyConfig. It is expected to be the name of the wrapper. If
		 * given an array, the formly field template will be wrapped by the first wrapper, then the second, then
		 * the third, etc. You can also specify these as part of a type (which is the recommended approach).
		 * Specifying this property will override the wrappers for the type for this field.
		 *
		 * http://docs.angular-formly.com/docs/field-configuration-object#wrapper-string--array-of-strings
		 */
		wrapper?: string | string[];


		//TODO:Scott Figure out what this really does.
		/**
		 * This is used by ngModelAttrsTemplateManipulator to automatically add attributes to the ng-model element
		 * of field templates. You will likely not use this often. This object is a little complex, but extremely
		 * powerful. It's best to explain this api via an example. For more information, see the guide on ngModelAttrs.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#ngmodelattrs-object
		 */
		ngModelAttrs?: any;


		/**
		 * This is a great way to add custom behavior to a specific field. It is injectable with the $scope of the
		 * field, and anything else you have in your injector.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#controller-controller-name-as-string--controller-f
		 */
		controller?: string | { ($scope: ng.IScope, ...args): void };


		/**
		 * This allows you to specify a link function. It is invoked after your template has finished compiling.
		 * You are passed the normal arguments for a normal link function.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#link-link-function
		 */
		link?: ng.IDirectiveLinkFn;


		/**
		 * Allows you to specify extra types to get options from. Duplicate options are overridden in later priority
		 * (index 1 will override index 0 properties). Also, these are applied after the type's defaultOptions and
		 * hence will override any duplicates of those properties as well.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#optionstypes-string--array-of-strings
		 */
		optionsTypes?: string | string[];


		//TODO:Scott Still need to define
		/**
		 * Allows you to take advantage of ng-model-options directive. Formly's built-in templateManipulator (see
		 * below) will add this attribute to your ng-model element automatically if this property exists. Note,
		 * if you use the getter/setter option, formly's templateManipulator will change the value of ng-model
		 * to options.value which is a getterSetter that formly adds to field options.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#modeloptions
		 */
		modelOptions?: any;


		/**
		 * Used to tell angular-formly to not attempt to add the formControl property to your object. This is useful
		 * for things like validation, but not necessary if your "field" doesn't use ng-model (if it's just a horizontal
		 * line for example). Defaults to undefined.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#noformcontrol-boolean
		 */
		noFormControl?: boolean;


		/**
		 * An object which has at least two properties called expression and listener. The watch.expression is added
		 * to the formly-form directive's scope (to allow it to run even when hide is true). You can specify a type
		 * ($watchCollection or $watchGroup) via the watcher.type property (defaults to $watch) and whether you want
		 * it to be a deep watch via the watcher.deep property (defaults to false).
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#watcher-objectarray-of-watches
		 */
		watcher?: IWatcher | IWatcher[];


		//TODO:Scott Look at defining validators as an Object to see if additional interface needs to be created
		/**
		 * An object where the keys are the name of the validator and the values are Formly Expressions;
		 *
		 * Async Validation
		 * All function validators can return true/false/Promise. A validator passes if it returns true or a promise
		 * that is resolved. A validator fails if it returns false or a promise that is rejected.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#validators-object
		 */
		validators?: {
			[key: string]: IValidator | string;
		}


		/**
		 * An object with a few useful properties mostly handy when used in combination with ng-messages
		 */
		validation?: {


			/**
			 * A map of Formly Expressions mapped to message names. This is really useful when you're using ng-messages
			 * like in this example.
			 */
			messages?: {
				[key: string]: IExpresssionFunction;
			}


			/**
			 * A boolean you as the developer can set to specify to force options.validation.errorExistsAndShouldBeVisible
			 * to be set to true when there are $errors. This is useful when you're trying to call the user's attention to
			 * some fields for some reason.
			 */
			show?: boolean;


			/**
			 * This is set by angular-formly. This is a boolean indicating whether an error message should be shown. Because
			 * you generally only want to show error messages when the user has interacted with a specific field, this value
			 * is set to true based on this rule: field invalid && (field touched || validation.show) (with slight difference
			 * for pre-angular 1.3 because it doesn't have touched support).
			 */
			errorExistsAndShouldBeVisible?: boolean;

		}

		/**
		 * This is a getter/setter function for the value that your field is representing. Useful when using getterSetter: true
		 * in the modelOptions (in fact, if you don't disable the ngModelAttrsTemplateManipulator that comes built-in with formly,
		 * it will automagically change your field's ng-model attribute to use options.value.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#value-gettersetter-function
		 */
		value?(): any; //Getter
		value?(val): void; //Setter


		//ALL PROPERTIES BELOW ARE ADDED (So you should not be setting them yourself.)


		/**
		 * This is the NgModelController for the field. It provides you with awesome stuff like $errors :-)
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#formcontrol-ngmodelcontroller
		 */
		formControl?: ng.IFormController;


		/**
		 * Will reset the field's model and the field control to the last initialValue. This is used by the
		 * formly-form's options.resetModel function.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#resetmodel-function
		 */
		resetModel?: () => void;


		/**
		 * Will reset the field's initialValue to the current state of the model. Useful if you load the model asynchronously.
		 * Invoke this when the model gets set. This is used by the formly-form's options.updateInitialValue function.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#updateinitialvalue-function
		 */
		updateInitialValue?: () => void;


		/**
		 * It is not likely that you'll ever want to invoke this function. It simply runs the expressionProperties expressions.
		 * It is used internally and you shouldn't have to use it, but you can if you want to, and any breaking changes to the
		 * way it works will result in a major version change, so you can rely on its api.
		 *
		 * see http://docs.angular-formly.com/docs/field-configuration-object#runexpressions-function
		 */
		runExpressions?: () => void;

	}

}