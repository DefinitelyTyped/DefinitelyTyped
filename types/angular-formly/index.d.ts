// Type definitions for angular-formly 7.2.4
// Project: https://github.com/formly-js/angular-formly
// Definitions by: Scott Hatcher <https://github.com/scatcher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

declare module 'AngularFormly' {
    export = AngularFormly;
}

declare module 'angular-formly' {
    var angularFormlyDefaultExport: string;
    export = angularFormlyDefaultExport;
}

declare namespace AngularFormly {

    interface IFieldArray extends Array<IFieldConfigurationObject | IFieldGroup> {

    }

    interface IFieldGroup {
        data?: {
            [key: string]: any;
        };
        className?: string;
        elementAttributes?: string;
        fieldGroup?: IFieldArray;
        form?: Object;
        hide?: boolean;
        hideExpression?: string | IExpressionFunction;
        key?: string | number;
        model?: string | {
            [key: string]: any;
        };
        options?: IFormOptionsAPI;
        templateOptions?: ITemplateOptions;
        wrapper?: string | string[];
    }


    interface IFormOptionsAPI {
        data?: {
            [key: string]: any;
        };
        fieldTransform?: Function | Array<Function>;
        formState?: Object;
        removeChromeAutoComplete?: boolean;
        resetModel?: Function;
        templateManipulators?: ITemplateManipulators;
        updateInitialValue?: Function;
        wrapper?: string | string[];
    }


    /**
     * see http://docs.angular-formly.com/docs/formly-expressions#expressionproperties-validators--messages
     */
    interface IExpressionFunction {
        ($viewValue: any, $modelValue: any, scope: ITemplateScope): any;
    }


    interface IModelOptions {
        updateOn?: string;
        debounce?: number;
        allowInvalid?: boolean;
        getterSetter?: string;
        timezone?: string;
    }


    interface ITemplateManipulator {
        (template: string | HTMLElement, options: Object, scope: ITemplateScope): string | HTMLElement;
    }


    interface ITemplateManipulators {
        preWrapper?: ITemplateManipulator[];
        postWrapper?: ITemplateManipulator[];
    }

    interface ISelectOption {
        name?: string;
        value?: string;
        group?: string;
        [key: string]: any;
    }

    /**
     * see http://docs.angular-formly.com/docs/ngmodelattrstemplatemanipulator
     */
    interface ITemplateOptions {

        // both attribute or regular attribute
        disabled?: boolean;
        maxlength?: number;
        minlength?: number;
        pattern?: string;
        required?: boolean;

        //attribute only
        max?: number;
        min?: number;
        placeholder?: number | string;
        tabindex?: number;
        type?: string;

        //expression types
        onBlur?: string | IExpressionFunction;
        onChange?: string | IExpressionFunction;
        onClick?: string | IExpressionFunction;
        onFocus?: string | IExpressionFunction;
        onKeydown?: string | IExpressionFunction;
        onKeypress?: string | IExpressionFunction;
        onKeyup?: string | IExpressionFunction;

        //Bootstrap types
        label?: string;
        description?: string;
        [key: string]: any;

        // types for select/radio fields
        options?: Array<ISelectOption>;
        groupProp?: string;  // default: group
        valueProp?: string;  // default: value
        labelProp?: string;  // default: name

    }


    /**
     * see http://docs.angular-formly.com/docs/field-configuration-object#validators-object
     */
    interface IValidator {
        expression: string | IExpressionFunction;
        message?: string | IExpressionFunction;
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
        deep?: boolean; //Defaults to false
        expression?: string | { (field: IFieldRuntimeObject, scope: ITemplateScope): boolean };
        listener: (field: IFieldRuntimeObject, newValue: any, oldValue: any, scope: ITemplateScope, stopWatching: Function) => void;
        type?: string; //Defaults to $watch but can be set to $watchCollection or $watchGroup
    }

    interface IFieldRuntimeObject extends IFieldObject {
        model: {
            [key: string]: any;
        };
    }

    interface IFieldConfigurationObject extends IFieldObject {
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
        model?: string | {
            [key: string]: any;
        };
    }


    // see http://docs.angular-formly.com/docs/field-configuration-object
    interface IFieldObject {


        /**
         * Added in 6.18.0
         *
         * Demo
         * see http://angular-formly.com/#/example/other/unique-value-async-validation
         */
        asyncValidators?: {
            [key: string]: string | IExpressionFunction | IValidator;
        };

        /**
         * This is a great way to add custom behavior to a specific field. It is injectable with the $scope of the
         * field, and anything else you have in your injector.
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#controller-controller-name-as-string--controller-f
         */
        controller?: string | Function;


        /**
         * This is reserved for the developer. You have our guarantee to be able to use this and not worry about
         * future versions of formly overriding your usage and preventing you from upgrading :-)
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#data-object
         */
        data?: {
            [key: string]: any;
        };


        /**
         * Use defaultValue to initialize it the model. If this is provided and the value of the
         * model at compile-time is undefined, then the value of the model will be assigned to defaultValue.
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#defaultvalue-any
         */
        defaultValue?: any;


        /**
         * You can specify your own class that will be applied to the formly-field directive (or ng-form of
         * a fieldGroup).
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#classname-string
         */
        className?: string;


        elementAttributes?: {
            [key: string]: string;
        };


        /**
         * An object where the key is a property to be set on the main field config and the value is an
         * expression used to assign that property. The value is a formly expressions. The returned value is
         * wrapped in $q.when so you can return a promise from your function :-)
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#expressionproperties-object
         */
        expressionProperties?: {
            [key: string]: string | IExpressionFunction | IValidator;
        };


        /**
         * Uses ng-if. Whether to hide the field. Defaults to false. If you wish this to be conditional, use
         * hideExpression. See below.
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#hide-boolean
         */
        hide?: boolean;


        /**
         * This is similar to expressionProperties with a slight difference. You should (hopefully) never
         * notice the difference with the most common use case. This is available due to limitations with
         * expressionProperties and ng-if not working together very nicely.
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#hideexpression-string--function
         */
        hideExpression?: string | IExpressionFunction;


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


        initialValue?: any;


        /**
         * Can be set instead of type or template to use a custom html template form field. Works
         * just like a directive templateUrl and uses the $templateCache
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#key-string
         */
        key?: string | number;


        /**
         * This allows you to specify a link function. It is invoked after your template has finished compiling.
         * You are passed the normal arguments for a normal link function.
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#link-link-function
         */
        link?: ng.IDirectiveLinkFn;


        /**
         * Allows you to take advantage of ng-model-options directive. Formly's built-in templateManipulator (see
         * below) will add this attribute to your ng-model element automatically if this property exists. Note,
         * if you use the getter/setter option, formly's templateManipulator will change the value of ng-model
         * to options.value which is a getterSetter that formly adds to field options.
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#modeloptions
         */
        modelOptions?: IModelOptions;


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
         * This is used by ngModelAttrsTemplateManipulator to automatically add attributes to the ng-model element
         * of field templates. You will likely not use this often. This object is a little complex, but extremely
         * powerful. It's best to explain this api via an example. For more information, see the guide on ngModelAttrs.
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#ngmodelattrs-object
         */
        ngModelAttrs?: {
            attribute?: any;
            bound?: any;
            expression?: any;
            value?: any;
            [key: string]: any;
        };


        /**
         * This allows you to place attributes with string values on the ng-model element.
         * Easy to use alternative to ngModelAttrs option.
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#ngmodelelattrs-object
         */
        ngModelElAttrs?: {
            [key: string]: string;
        };


        /**
         * Used to tell angular-formly to not attempt to add the formControl property to your object. This is useful
         * for things like validation, but not necessary if your "field" doesn't use ng-model (if it's just a horizontal
         * line for example). Defaults to undefined.
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#noformcontrol-boolean
         */
        noFormControl?: boolean;


        /**
         * Allows you to specify extra types to get options from. Duplicate options are overridden in later priority
         * (index 1 will override index 0 properties). Also, these are applied after the type's defaultOptions and
         * hence will override any duplicates of those properties as well.
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#optionstypes-string--array-of-strings
         */
        optionsTypes?: string | string[];


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
         * Allows you to specify custom template manipulators for this specific field. (use defaultOptions in a
         * type configuration if you want it to apply to all fields of a certain type).
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#templatemanipulator-object-of-arrays-of-functions
         */
        templateManipulators?: ITemplateManipulators;


        /**
         * This is reserved for the templates. Any template-specific options go in here. Look at your specific
         * template implementation to know the options required for this.
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#templateoptions-object
         */
        templateOptions?: ITemplateOptions;


        /**
         * Can be set instead of type or template to use a custom html template form field. Works
         * just like a directive templateUrl and uses the $templateCache
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#templateurl-string--function
         */
        templateUrl?: string | { (fieldConfiguration: IFieldConfigurationObject): string | ng.IPromise<string> };


        /**
         * The type of field to be rendered. This is the recommended method
         * for defining fields. Types must be pre-defined using formlyConfig.
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#type-string
         */
        type?: string;


        /**
         * An object with a few useful properties mostly handy when used in combination with ng-messages
         */
        validation?: {

            /**
             * This is set by angular-formly. This is a boolean indicating whether an error message should be shown. Because
             * you generally only want to show error messages when the user has interacted with a specific field, this value
             * is set to true based on this rule: field invalid && (field touched || validation.show) (with slight difference
             * for pre-angular 1.3 because it doesn't have touched support).
             */
            errorExistsAndShouldBeVisible?: boolean;


            /**
             * A map of Formly Expressions mapped to message names. This is really useful when you're using ng-messages
             * like in this example.
             */
            messages?: {
                [key: string]: IExpressionFunction | string;
            }


            /**
             * A boolean you as the developer can set to specify to force options.validation.errorExistsAndShouldBeVisible
             * to be set to true when there are $errors. This is useful when you're trying to call the user's attention to
             * some fields for some reason.
             */
            show?: boolean;

        };


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
            [key: string]: string | IExpressionFunction | IValidator;
        };


        /**
         * This is a getter/setter function for the value that your field is representing. Useful when using getterSetter: true
         * in the modelOptions (in fact, if you don't disable the ngModelAttrsTemplateManipulator that comes built-in with formly,
         * it will automagically change your field's ng-model attribute to use options.value.
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#value-gettersetter-function
         */
        value?(): any; //Getter
        value?(val: any): void; //Setter


        /**
         * An object which has at least two properties called expression and listener. The watch.expression is added
         * to the formly-form directive's scope (to allow it to run even when hide is true). You can specify a type
         * ($watchCollection or $watchGroup) via the watcher.type property (defaults to $watch) and whether you want
         * it to be a deep watch via the watcher.deep property (defaults to false).
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#watcher-objectarray-of-watches
         */
        watcher?: IWatcher | IWatcher[];


        /**
         * This makes reference to setWrapper in formlyConfig. It is expected to be the name of the wrapper. If
         * given an array, the formly field template will be wrapped by the first wrapper, then the second, then
         * the third, etc. You can also specify these as part of a type (which is the recommended approach).
         * Specifying this property will override the wrappers for the type for this field.
         *
         * http://docs.angular-formly.com/docs/field-configuration-object#wrapper-string--array-of-strings
         */
        wrapper?: string | string[];


        //ALL PROPERTIES BELOW ARE ADDED (So you should not be setting them yourself.)


        /**
         * This is the NgModelController for the field. It provides you with awesome stuff like $errors :-)
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#formcontrol-ngmodelcontroller
         */
        formControl?: ng.IFormController | ng.IFormController[];


        /**
         * Will reset the field's model and the field control to the last initialValue. This is used by the
         * formly-form's options.resetModel function.
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#resetmodel-function
         */
        resetModel?: () => void;


        /**
         * It is not likely that you'll ever want to invoke this function. It simply runs the expressionProperties expressions.
         * It is used internally and you shouldn't have to use it, but you can if you want to, and any breaking changes to the
         * way it works will result in a major version change, so you can rely on its api.
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#runexpressions-function
         */
        runExpressions?: () => void;


        /**
         * Will reset the field's initialValue to the current state of the model. Useful if you load the model asynchronously.
         * Invoke this when the model gets set. This is used by the formly-form's options.updateInitialValue function.
         *
         * see http://docs.angular-formly.com/docs/field-configuration-object#updateinitialvalue-function
         */
        updateInitialValue?: () => void;

    }

    /**
     *
     *
     * see http://docs.angular-formly.com/docs/custom-templates#section-formlyconfig-settype-options
     */
    interface ITypeOptions {
        apiCheck?: { [key: string]: Function };
        apiCheckFunction?: string; //'throw' or 'warn
        apiCheckInstance?: any;
        apiCheckOptions?: Object;
        defaultOptions?: IFieldConfigurationObject | Function;
        controller?: Function | string | any[];
        data?: {
            [key: string]: any;
        };
        extends?: string;
        link?: ng.IDirectiveLinkFn;
        overwriteOk?: boolean;
        name: string;
        template?: Function | string;
        templateUrl?: Function | string;
        validateOptions?: Function;
        wrapper?: string | string[];
    }

    interface IWrapperOptions {
        apiCheck?: { [key: string]: Function };
        apiCheckFunction?: string; //'throw' or 'warn
        apiCheckInstance?: any;
        apiCheckOptions?: Object;
        overwriteOk?: boolean;
        name?: string;
        template?: string;
        templateUrl?: string;
        types?: string[];
        validateOptions?: Function;
    }

    interface IFormlyConfigExtras {
        disableNgModelAttrsManipulator: boolean;
        apiCheckInstance: any;
        ngModelAttrsManipulatorPreferUnbound: boolean;
        removeChromeAutoComplete: boolean;
        defaultHideDirective: string;
        errorExistsAndShouldBeVisibleExpression: any;
        getFieldId: Function;
        fieldTransform: Function | Array<Function>;
        explicitAsync: boolean;
    }

    interface IFormlyConfig {
        disableWarnings: boolean;
        extras: IFormlyConfigExtras;
        setType(typeOptions: ITypeOptions): void;
        setWrapper(wrapperOptions: IWrapperOptions | Array<IWrapperOptions>): void;
        templateManipulators: ITemplateManipulators;
    }

    interface ITemplateScopeOptions {
        formControl: ng.IFormController | ng.IFormController[];
        templateOptions: ITemplateOptions;
        validation: Object;
    }

    /**
     * see http://docs.angular-formly.com/docs/custom-templates#templates-scope
     */
    interface ITemplateScope {
        options: ITemplateScopeOptions;
        //Shortcut to options.formControl
        fc: ng.IFormController | ng.IFormController[];
        //all the fields for the form
        fields: IFieldArray;
        //the form controller the field is in
        form: any;
        //The object passed as options.formState to the formly-form directive. Use this to share state between fields.
        formState: Object;
        //The id of the field. You shouldn't have to use this.
        id: string;
        //The index of the field the form is on (in ng-repeat)
        index: number;
        //the model of the form (or the model specified by the field if it was specified).
        model?: {
            [key: string]: any;
        };
        //Shortcut to options.validation.errorExistsAndShouldBeVisible
        showError: boolean;
        //Shortcut to options.templateOptions
        to: ITemplateOptions;
    }

    /**
     * see http://docs.angular-formly.com/docs/formlyvalidationmessages#addtemplateoptionvaluemessage
     */
    interface IValidationMessages {
        addTemplateOptionValueMessage(name: string, prop: string, prefix: string, suffix: string, alternate: string): void;
        addStringMessage(name: string, string: string): void;
        messages: { [key: string]: ($viewValue: any, $modelValue: any, scope: ITemplateScope) => string };
    }

}
