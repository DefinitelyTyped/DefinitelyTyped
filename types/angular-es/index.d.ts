declare module "angular-es" {
    interface ClassDecorator {
        <TFunction extends Function>(target: TFunction): TFunction | void;
    }

    interface MethodDecorator {
        <T>(
            target: Object,
            propertyKey: string | symbol,
            descriptor: TypedPropertyDescriptor<T>,
        ): TypedPropertyDescriptor<T> | void;
    }

    /**
     * Decorated target
     */
    interface ngESDecorator extends ClassDecorator, MethodDecorator {
        (
            target: Object | Function,
            ngName?: string,
            ngArguments?: Array<any>,
            ngType?: string,
            injectAsProperty?: Array<string>,
        ): void;
    }

    /**
     * Component interface
     * @see https://docs.angularjs.org/guide/component
     */
    interface iComponent {
        selector: string;
        controllerAs?: string | undefined;
        require?: string | undefined;
        template?: string | undefined;
        templateUrl?: string | undefined;
        transclude?: string | undefined;
        bindings?: Object | undefined;
    }

    /**
     * Register component
     *
     * @param component - component config
     *
     * @returns decorated class
     */
    function Component(component: iComponent): ngESDecorator;

    /**
     * Register config block
     */
    function Config(): ngESDecorator;

    /**
     * Register constant
     *
     * @param name - constant name
     *
     * @returns decorated class
     */
    function Constant(name: string): ngESDecorator;

    /**
     * Register controller
     *
     * @param name - controller name
     *
     * @returns decorated class
     */
    function Controller(name: string): ngESDecorator;

    /**
     * Register decorator
     *
     * @param name - provider name to decorate
     *
     * @returns decorated class
     */
    function Decorator(name: string): ngESDecorator;

    /**
     * Register directive
     *
     * @param name - directive selector, can be in hyphen-case
     *
     * @returns decorated class
     */
    function Directive(name: string): ngESDecorator;

    /**
     * Register factory
     *
     * @param name - factory name
     *
     * @returns decorated class
     */
    function Factory(name: string): ngESDecorator;

    /**
     * Register filter
     *
     * @param name - filter name
     *
     * @returns decorated class
     */
    function Filter(name: string): ngESDecorator;

    /**
     * Add $inject property to target
     *
     * @param dependencies - dependencies to inject
     *
     * @returns decorated class
     */
    function Inject(...dependencies: Array<string>): ngESDecorator;

    /**
     * Inject dependencies as properties to target
     *
     * @param dependencies - dependencies to inject
     *
     * @returns decorated class
     */
    function InjectAsProperty(...dependencies: Array<string>): ngESDecorator;

    /**
     * Attach target to the specified module
     *
     * @param name - module name
     *
     * @returns decorated class
     */
    function Module(name: string): ngESDecorator;

    /**
     * Register provider
     *
     * @param name - provider name
     *
     * @returns decorated class
     */
    function Provider(name: string): ngESDecorator;

    /**
     * Register run block
     *
     * @returns decorated class
     */
    function Run(): ngESDecorator;

    /**
     * Register service
     *
     * @param name - service name
     *
     * @returns decorated class
     */
    function Service(name: string): ngESDecorator;

    /**
     * Register value
     *
     * @param name - value name
     *
     * @returns decorated class
     */
    function Value(name: string): ngESDecorator;

    export {
        Component,
        Config,
        Constant,
        Controller,
        Decorator,
        Directive,
        Factory,
        Filter,
        Inject,
        InjectAsProperty,
        Module,
        Provider,
        Run,
        Service,
        Value,
    };
}
