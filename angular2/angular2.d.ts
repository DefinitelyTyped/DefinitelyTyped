// Type definitions for Angular v2.0.0-alpha.22
// Project: http://angular.io/
// Definitions by: angular team <https://github.com/angular/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/******************
 * This is a minimal type definition for the Angular2 quickstart.
 * We plan to publish a complete definition soon.
 ******************/

interface List<T> extends Array<T> {}
interface Type {}

interface _ComponentArg {
  /**
   * The CSS selector that triggers the instantiation of a directive.
   *
   * Angular only allows directives to trigger on CSS selectors that do not cross element boundaries.
   *
   * `selector` may be declared as one of the following:
   *
   * - `element-name`: select by element name.
   * - `.class`: select by class name.
   * - `[attribute]`: select by attribute name.
   * - `[attribute=value]`: select by attribute name and value.
   * - `:not(sub_selector)`: select only if the element does not match the `sub_selector`.
   * - `selector1, selector2`: select if either `selector1` or `selector2` matches.
   *
   *
   * ## Example
   *
   * Suppose we have a directive with an `input[type=text]` selector.
   *
   * And the following HTML:
   *
   * ```html
   * <form>
   *   <input type="text">
   *   <input type="radio">
   * <form>
   * ```
   *
   * The directive would only be instantiated on the `<input type="text">` element.
   *
   */
  selector: string;
  
  /**
   * Enumerates the set of properties that accept data binding for a directive.
   *
   * The `properties` property defines a set of `directiveProperty` to `bindingProperty`
   * key-value pairs:
   *
   * - `directiveProperty` specifies the component property where the value is written.
   * - `bindingProperty` specifies the DOM property where the value is read from.
   *
   * You can include a {@link Pipe} when specifying a `bindingProperty` to allow for data transformation and structural
   * change detection of the value. These pipes will be evaluated in the context of this component.
   *
   *
   * ## Syntax
   *
   * ```
   * @Directive({
   *   properties: {
   *     'directiveProperty1': 'bindingProperty1',
   *     'directiveProperty2': 'bindingProperty2 | pipe1 | ...',
   *     ...
   *   }
   * }
   * ```
   *
   *
   * ## Basic Property Binding
   *
   * We can easily build a simple `Tooltip` directive that exposes a `tooltip` property, which can be used in templates
   * with standard Angular syntax. For example:
   *
   * ```
   * @Directive({
   *   selector: '[tooltip]',
   *   properties: {
   *     'text': 'tooltip'
   *   }
   * })
   * class Tooltip {
   *   set text(text) {
   *     // This will get called every time the 'tooltip' binding changes with the new value.
   *   }
   * }
   * ```
   *
   * We can then bind to the `tooltip' property as either an expression (`someExpression`) or as a string literal, as
   * shown in the HTML template below:
   *
   * ```html
   * <div [tooltip]="someExpression">...</div>
   * <div tooltip="Some Text">...</div>
   * ```
   *
   * Whenever the `someExpression` expression changes, the `properties` declaration instructs
   * Angular to update the `Tooltip`'s `text` property.
   *
   *
   *
   * ## Bindings With Pipes
   *
   * You can also use pipes when writing binding definitions for a directive.
   *
   * For example, we could write a binding that updates the directive on structural changes, rather than on reference
   * changes, as normally occurs in change detection.
   *
   * See {@link Pipe} and {@link keyValDiff} documentation for more details.
   *
   * ```
   * @Directive({
   *   selector: '[class-set]',
   *   properties: {
   *     'classChanges': 'classSet | keyValDiff'
   *   }
   * })
   * class ClassSet {
   *   set classChanges(changes:KeyValueChanges) {
   *     // This will get called every time the `class-set` expressions changes its structure.
   *   }
   * }
   * ```
   *
   * The template that this directive is used in may also contain its own pipes. For example:
   *
   * ```html
   * <div [class-set]="someExpression | somePipe">
   * ```
   *
   * In this case, the two pipes compose as if they were inlined: `someExpression | somePipe | keyValDiff`.
   *
   */
  properties?: Object;
  
  /**
   * Specifies which DOM hostListeners a directive listens to.
   *
   * The `hostListeners` property defines a set of `event` to `method` key-value pairs:
   *
   * - `event1`: the DOM event that the directive listens to.
   * - `statement`: the statement to execute when the event occurs.
   * If the evalutation of the statement returns `false`, then `preventDefault`is applied on the DOM event.
   *
   * To listen to global events, a target must be added to the event name.
   * The target can be `window`, `document` or `body`.
   *
   * When writing a directive event binding, you can also refer to the following local variables:
   * - `$event`: Current event object which triggered the event.
   * - `$target`: The source of the event. This will be either a DOM element or an Angular directive.
   *   (will be implemented in later release)
   *
   *
   * ## Syntax
   *
   * ```
   * @Directive({
   *   hostListeners: {
   *     'event1': 'onMethod1(arguments)',
   *     'target:event2': 'onMethod2(arguments)',
   *     ...
   *   }
   * }
   * ```
   *
   * ## Basic Event Binding:
   *
   * Suppose you want to write a directive that triggers on `change` events in the DOM and on `resize` events in window.
   * You would define the event binding as follows:
   *
   * ```
   * @Directive({
   *   selector: 'input',
   *   hostListeners: {
   *     'change': 'onChange($event)',
   *     'window:resize': 'onResize($event)'
   *   }
   * })
   * class InputDirective {
   *   onChange(event:Event) {
   *   }
   *   onResize(event:Event) {
   *   }
   * }
   * ```
   *
   * Here the `onChange` method of `InputDirective` is invoked whenever the DOM element fires the 'change' event.
   *
   */
  hostListeners?: Object;
  
  /**
   * Defines the set of injectable objects that are visible to a Component and its children.
   *
   * The `injectables` defined in the Component annotation allow you to configure a set of bindings for the component's
   * injector.
   *
   * When a component is instantiated, Angular creates a new child Injector, which is configured with the bindings in
   * the Component `injectables` annotation. The injectable objects then become available for injection to the component
   * itself and any of the directives in the component's template, i.e. they are not available to the directives which
   * are children in the component's light DOM.
   *
   *
   * The syntax for configuring the `injectables` injectable is identical to {@link Injector} injectable configuration.
   * See {@link Injector} for additional detail.
   *
   *
   * ## Simple Example
   *
   * Here is an example of a class that can be injected:
   *
   * ```
   * class Greeter {
   *    greet(name:string) {
   *      return 'Hello ' + name + '!';
   *    }
   * }
   *
   * @Component({
   *   selector: 'greet',
   *   injectables: [
   *     Greeter
   *   ]
   * })
   * @View({
   *   template: `{{greeter.greet('world')}}!`,
   *   directives: Child
   * })
   * class HelloWorld {
   *   greeter:Greeter;
   *
   *   constructor(greeter:Greeter) {
   *     this.greeter = greeter;
   *   }
   * }
   * ```
   */
  injectables?: List<any>;
  
  /**
   * Specifies a set of lifecycle hostListeners in which the directive participates.
   *
   * See {@link onChange}, {@link onDestroy}, {@link onAllChangesDone} for details.
   */
  lifecycle?: List<any>;
  
  /**
   * Defines the used change detection strategy.
   *
   * When a component is instantiated, Angular creates a change detector, which is responsible for propagating
   * the component's bindings.
   *
   * The `changeDetection` property defines, whether the change detection will be checked every time or only when the component
   * tells it to do so.
   */
  changeDetection?: string;
}

interface _ViewArg {
  /**
   * Specifies a template URL for an angular component.
   *
   * NOTE: either `templateUrl` or `template` should be used, but not both.
   */
  templateUrl?: string;
  
  /**
   * Specifies an inline template for an angular component.
   *
   * NOTE: either `templateUrl` or `template` should be used, but not both.
   */
  template?: string;
  
  /**
   * Specifies a list of directives that can be used within a template.
   *
   * Directives must be listed explicitly to provide proper component encapsulation.
   */
  directives?: List<Type>;
}
  
declare module "angular2/angular2" {
  /**
   * Bootstrapping for Angular applications.
   *
   * You instantiate an Angular application by explicitly specifying a component to use as the root component for your
   * application via the `bootstrap()` method.
   *
   * ## Simple Example
   *
   * Assuming this `index.html`:
   *
   * ```html
   * <html>
   *   <!-- load Angular script tags here. -->
   *   <body>
   *     <my-app>loading...</my-app>
   *   </body>
   * </html>
   * ```
   *
   * An application is bootstrapped inside an existing browser DOM, typically `index.html`. Unlike Angular 1, Angular 2
   * does not compile/process bindings in `index.html`. This is mainly for security reasons, as well as architectural
   * changes in Angular 2. This means that `index.html` can safely be processed using server-side technologies such as
   * bindings. Bindings can thus use double-curly `{{ syntax }}` without collision from Angular 2 component double-curly
   * `{{ syntax }}`.
   *
   * We can use this script code:
   *
   * ```
   * @Component({
   *    selector: 'my-app'
   * })
   * @View({
   *    template: 'Hello {{ name }}!'
   * })
   * class MyApp {
   *   name:string;
   *
   *   constructor() {
   *     this.name = 'World';
   *   }
   * }
   *
   * main() {
   *   return bootstrap(MyApp);
   * }
   * ```
   *
   * When the app developer invokes `bootstrap()` with the root component `MyApp` as its argument, Angular performs the
   * following tasks:
   *
   *  1. It uses the component's `selector` property to locate the DOM element which needs to be upgraded into
   *     the angular component.
   *  2. It creates a new child injector (from the platform injector) and configures the injector with the component's
   *     `injectables`. Optionally, you can also override the injector configuration for an app by invoking
   *     `bootstrap` with the `componentInjectableBindings` argument.
   *  3. It creates a new `Zone` and connects it to the angular application's change detection domain instance.
   *  4. It creates a shadow DOM on the selected component's host element and loads the template into it.
   *  5. It instantiates the specified component.
   *  6. Finally, Angular performs change detection to apply the initial data bindings for the application.
   *
   *
   * ## Instantiating Multiple Applications on a Single Page
   *
   * There are two ways to do this.
   *
   *
   * ### Isolated Applications
   *
   * Angular creates a new application each time that the `bootstrap()` method is invoked. When multiple applications
   * are created for a page, Angular treats each application as independent within an isolated change detection and
   * `Zone` domain. If you need to share data between applications, use the strategy described in the next
   * section, "Applications That Share Change Detection."
   *
   *
   * ### Applications That Share Change Detection
   *
   * If you need to bootstrap multiple applications that share common data, the applications must share a common
   * change detection and zone. To do that, create a meta-component that lists the application components in its template.
   * By only invoking the `bootstrap()` method once, with the meta-component as its argument, you ensure that only a
   * single change detection zone is created and therefore data can be shared across the applications.
   *
   *
   * ## Platform Injector
   *
   * When working within a browser window, there are many singleton resources: cookies, title, location, and others.
   * Angular services that represent these resources must likewise be shared across all Angular applications that
   * occupy the same browser window.  For this reason, Angular creates exactly one global platform injector which stores
   * all shared services, and each angular application injector has the platform injector as its parent.
   *
   * Each application has its own private injector as well. When there are multiple applications on a page, Angular treats
   * each application injector's services as private to that application.
   *
   *
   * # API
   * - `appComponentType`: The root component which should act as the application. This is a reference to a `Type`
   *   which is annotated with `@Component(...)`.
   * - `componentInjectableBindings`: An additional set of bindings that can be added to `injectables` for the
   * {@link Component} to override default injection behavior.
   * - `errorReporter`: `function(exception:any, stackTrace:string)` a default error reporter for unhandled exceptions.
   *
   * Returns a `Promise` with the application`s private {@link Injector}.
   *
   */
  function bootstrap(appComponentType: any): void;
  
  /**
   * Declare reusable UI building blocks for an application.
   *
   * Each Angular component requires a single `@Component` and at least one `@View` annotation. The `@Component`
   * annotation specifies when a component is instantiated, and which properties and hostListeners it binds to.
   *
   * When a component is instantiated, Angular
   * - creates a shadow DOM for the component.
   * - loads the selected template into the shadow DOM.
   * - creates a child {@link Injector} which is configured with the `injectables` for the {@link Component}.
   *
   * All template expressions and statements are then evaluated against the component instance.
   *
   * For details on the `@View` annotation, see {@link View}.
   *
   * ## Example
   *
   * ```
   * @Component({
   *   selector: 'greet'
   * })
   * @View({
   *   template: 'Hello {{name}}!'
   * })
   * class Greet {
   *   name: string;
   *
   *   constructor() {
   *     this.name = 'World';
   *   }
   * }
   * ```
   *
   *
   * Dynamically loading a component at runtime:
   *
   * Regular Angular components are statically resolved. Dynamic components allows to resolve a component at runtime
   * instead by providing a placeholder into which a regular Angular component can be dynamically loaded. Once loaded,
   * the dynamically-loaded component becomes permanent and cannot be changed.
   * Dynamic components are declared just like components, but without a `@View` annotation.
   *
   *
   * ## Example
   *
   * Here we have `DynamicComp` which acts as the placeholder for `HelloCmp`. At runtime, the dynamic component
   * `DynamicComp` requests loading of the `HelloCmp` component.
   *
   * There is nothing special about `HelloCmp`, which is a regular Angular component. It can also be used in other static
   * locations.
   *
   * ```
   * @Component({
   *   selector: 'dynamic-comp'
   * })
   * class DynamicComp {
   *   helloCmp:HelloCmp;
   *   constructor(loader:DynamicComponentLoader, location:ElementRef) {
   *     loader.load(HelloCmp, location).then((helloCmp) => {
   *       this.helloCmp = helloCmp;
   *     });
   *   }
   * }
   *
   * @Component({
   *   selector: 'hello-cmp'
   * })
   * @View({
   *   template: "{{greeting}}"
   * })
   * class HelloCmp {
   *   greeting:string;
   *   constructor() {
   *     this.greeting = "hello";
   *   }
   * }
   * ```
   *
   */
  function Component(arg: _ComponentArg): (target: any) => any;
  
  /**
   * Declares the available HTML templates for an application.
   *
   * Each angular component requires a single `@Component` and at least one `@View` annotation. The @View
   * annotation specifies the HTML template to use, and lists the directives that are active within the template.
   *
   * When a component is instantiated, the template is loaded into the component's shadow root, and the
   * expressions and statements in the template are evaluated against the component.
   *
   * For details on the `@Component` annotation, see {@link Component}.
   *
   * ## Example
   *
   * ```
   * @Component({
   *   selector: 'greet'
   * })
   * @View({
   *   template: 'Hello {{name}}!',
   *   directives: [GreetUser, Bold]
   * })
   * class Greet {
   *   name: string;
   *
   *   constructor() {
   *     this.name = 'World';
   *   }
   * }
   * ```
   *
   */
  function View(arg: _ViewArg): (target: any) => any;
  
  /**
   * The `For` directive instantiates a template once per item from an iterable. The context for each
   * instantiated template inherits from the outer context with the given loop variable set to the
   * current item from the iterable.
   *
   * It is possible to alias the `index` to a local variable that will be set to the current loop
   * iteration in the template context.
   *
   * When the contents of the iterator changes, `For` makes the corresponding changes to the DOM:
   *
   * * When an item is added, a new instance of the template is added to the DOM.
   * * When an item is removed, its template instance is removed from the DOM.
   * * When items are reordered, their respective templates are reordered in the DOM.
   *
   * # Example
   *
   * ```
   * <ul>
   *   <li *for="#error of errors; #i = index">
   *     Error {{i}} of {{errors.length}}: {{error.message}}
   *   </li>
   * </ul>
   * ```
   *
   * # Syntax
   *
   * - `<li *for="#item of items; #i = index">...</li>`
   * - `<li template="for #item of items; #i=index">...</li>`
   * - `<template [for]="#item" [of]="items" #i="index"><li>...</li></template>`
   *
   */
  function For(): void;
  
  /**
   * Removes or recreates a portion of the DOM tree based on an {expression}.
   *
   * If the expression assigned to `if` evaluates to a false value then the element is removed from the
   * DOM, otherwise a clone of the element is reinserted into the DOM.
   *
   * # Example:
   *
   * ```
   * <div *if="errorCount > 0" class="error">
   *   <!-- Error message displayed when the errorCount property on the current context is greater than 0. -->
   *   {{errorCount}} errors detected
   * </div>
   * ```
   *
   * # Syntax
   *
   * - `<div *if="condition">...</div>`
   * - `<div template="if condition">...</div>`
   * - `<template [if]="condition"><div>...</div></template>`
   *
   */
  function If(): void;
  
  /**
   * The `NonBindable` directive tells Angular not to compile or bind the contents of the current
   * DOM element. This is useful if the element contains what appears to be Angular directives and
   * bindings but which should be ignored by Angular. This could be the case if you have a site that
   * displays snippets of code, for instance.
   *
   * Example:
   *
   * ```
   * <div>Normal: {{1 + 2}}</div> // output "Normal: 3"
   * <div non-bindable>Ignored: {{1 + 2}}</div> // output "Ignored: {{1 + 2}}"
   * ```
   *
   */
  function NonBindable(): void;
  
  /**
   * The `Switch` directive is used to conditionally swap DOM structure on your template based on a
   * scope expression.
   * Elements within `Switch` but without `SwitchWhen` or `SwitchDefault` directives will be
   * preserved at the location as specified in the template.
   *
   * `Switch` simply chooses nested elements and makes them visible based on which element matches
   * the value obtained from the evaluated expression. In other words, you define a container element
   * (where you place the directive), place an expression on the **`[switch]="..."` attribute**),
   * define any inner elements inside of the directive and place a `[switch-when]` attribute per
   * element.
   * The when attribute is used to inform Switch which element to display when the expression is
   * evaluated. If a matching expression is not found via a when attribute then an element with the
   * default attribute is displayed.
   *
   * # Example:
   *
   * ```
   * <ANY [switch]="expression">
   *   <template [switch-when]="whenExpression1">...</template>
   *   <template [switch-when]="whenExpression1">...</template>
   *   <template [switch-default]>...</template>
   * </ANY>
   * ```
   *
   */
 function Switch(): void;
}

declare module "angular2/di" {
  /**
   * Provides an API for imperatively constructing {@link Binding}s.
   *
   * This is only relevant for JavaScript. See {@link BindingBuilder}.
   *
   * ## Example
   *
   * ```javascript
   * bind(MyInterface).toClass(MyClass)
   *
   * ```
   *
   */
   function bind(token: any): any;
}
