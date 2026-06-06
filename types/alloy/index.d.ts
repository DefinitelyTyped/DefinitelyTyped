/// <reference types="backbone" />
/// <reference types="titanium" />

/**
 * Properties and TSS classes to apply to a Titanium UI element.
 */
interface AlloyStyleDict {
    /**
     * Array of TSS classes to apply to the Titanium UI object.
     */
    classes?: string[] | string | undefined;

    /**
     * TSS ID style to apply to the Titanium UI object.
     */
    id?: string | undefined;

    [key: string]: any;
}

/**
 * Provides convenience methods for working with Titanium Views in Alloy
 */
interface AlloyControllerUI {
    /**
     * Creates a Titanium UI element with the specified options.
     *
     * The following creates a new View and assigns the "dialog" TSS class
     * (defined in your styles) to the view, and finally adds it to main window.
     *
     * ```js
     * const view = $.UI.create("View", {
     *   classes: 'dialog'
     * });
     * $.index.add(view);
     * ```
     *
     * @param apiName Name of the UI element to create. This can either be the full class name, such as `Ti.UI.Button`, or the XML element, such as `Button`.
     * @param opts Styles and any additional properties you would like to apply directly the created view.
     */
    create(apiName: string, opts?: AlloyStyleDict): any;
}

interface AlloyFactories {
    /**
     * Factory method for instantiating a Backbone collection of model objects.
     *
     * Creates and returns a collection for holding the named type of model objects.
     *
     * @param name Name of model to hold in this collection.
     * @param args Arguments to pass to the collection.
     */
    createCollection(name: string, args?: any): Backbone.Collection;

    /**
     * Factory method for instantiating a controller.
     *
     * Creates and returns an instance of the named controller.
     *
     * @param name Name of controller to instantiate.
     * @param args Arguments to pass to the controller
     */
    createController(name: string, args?: any): AlloyController;

    /**
     * Factory method for instantiating a Backbone Model object.
     *
     * Creates and returns an instance of the named model.
     *
     * @param name Name of model to instantiate.
     * @param args Arguments to pass to the model.
     */
    createModel(name: string, args?: any): Backbone.Model;

    /**
     * Factory method for instantiating a widget controller.
     *
     * Creates and returns an instance of the named widget.
     *
     * @param id Id of widget to instantiate.
     * @param name Name of the view within the widget to instantiate ('widget' by default)
     * @param args Arguments to pass to the widget.
     */
    createWidget(id: string, args?: any): AlloyController;
    createWidget(id: string, name?: string, args?: any): AlloyController;
}

/**
 * The base class for Alloy controllers.
 */
interface AlloyController extends Backbone.Events {
    args: any;

    /**
     * Provides convenience methods for working with Titanium Views in Alloy
     */
    UI: AlloyControllerUI;

    /**
     * @param proxy View object to which to add class(es).
     * @param classes Array or space-separated list of classes to apply.
     * @param opts Dictionary of properties to apply after classes have been added.
     */
    addClass<T extends Titanium.Proxy>(proxy: T, classes: string | string[], opts?: Partial<T>): void;

    /**
     * Adds a tracked event listeners to a view proxy object. By default, any event listener declared in XML is tracked by Alloy.
     *
     * @param proxy Proxy view object to listen to.
     * @param type Name of the event.
     * @param callback Callback function to invoke when the event is fired.
     * @returns ID attribute of the view object. If one does not exist, Alloy will create a unique ID.
     */
    addListener(proxy: Titanium.Proxy, type: string, callback: (e: any) => void): string;

    /**
     * Creates a dictionary of properties based on the specified styles.
     *
     * @param opts Dictionary of styles to apply.
     * @returns Dictionary of properties that can be passed to a view factory function or applyProperties().
     */
    createStyle(opts: any): Partial<Titanium.Proxy>;

    /**
     * Frees binding resources associated with this controller and its UI
     * components.
     *
     * It is critical that this is called when employing model/collection binding
     * in order to avoid potential memory leaks. `$.destroy()` should be called
     * whenever a controller's UI is to be "closed" or removed from the app.
     */
    destroy(): void;

    /**
     * Gets all the tracked event listeners of the view-controller or only the
     * ones specified by the parameters.
     *
     * Passing no parameters, retrieves all tracked event listeners. Set a
     * parameter to null if you do not want to restrict the match to that
     * parameter.
     *
     * @param proxy Proxy view object.
     * @param type Name of the event.
     */
    getListener(proxy?: Titanium.Proxy, type?: string): any[];

    /**
     * Returns a list of the root view elements associated with this controller.
     */
    getTopLevelViews(): any[];

    /**
     * Returns the specified view associated with this controller.
     *
     * If no id is specified, returns the first top-level view.
     *
     * @param id ID of the view to return.
     */
    getView(id?: string): any;

    /**
     * Returns a list of all IDed view elements associated with this controller.
     */
    getViews(): any[];

    /**
     * Removes a TSS class from the specified view object.
     *
     * @param proxy View object from which to remove class(es)
     * @param classes Array or space-separated list of classes to remove.
     * @param opts Dictionary of properties to apply after the class removal.
     */
    removeClass<T extends Titanium.Proxy>(proxy: T, classes: string | string[], opts?: Partial<T>): void;

    /**
     * Removes all tracked event listeners or only the ones specified by the parameters.
     *
     * Passing no parameters, removes all tracked event listeners. Set a
     * parameter to null if you do not want to restrict the match to that
     * parameter.
     *
     * @param proxy Proxy view object to remove event listeners from.
     * @param type Name of the event to remove.
     * @param callback Callback to remove.
     */
    removeListener(proxy: Titanium.Proxy, type?: string, callback?: (e: any) => void): AlloyController;

    /**
     * Sets the array of TSS classes for the target View object, adding the classes specified and removing any applied classes that are not specified.
     *
     * @param proxy View object to reset.
     * @param classes Array or space-separated list of classes to apply after the reset.
     * @param opts Dictionary of properties to apply after the reset.
     */
    resetClass<T extends Titanium.Proxy>(proxy: T, classes: string | string[], opts?: Partial<T>): void;

    /**
     * Applies a set of properties to view elements associated with this controller.
     *
     * @param args An object whose keys are the IDs (in form '#id') of views to which the styles will be applied.
     */
    updateViews(args: { [k: string]: any }): AlloyController;
}

interface SingletonCollections {
    /**
     * Creates a singleton instance of a Collection based on the given model, or
     * returns an existing instance if one has already been created.
     *
     * @param name The name of the base model for the collection.
     */
    instance(name: string): Backbone.Collection;
    [key: string]: unknown;
}

interface SingletonModels {
    /**
     * Creates a singleton instance of a Model based on the given model, or
     * returns an existing instance if one has already been created.
     *
     * @param name The name of the base model for the model.
     */
    instance(name: string): Backbone.Model;
    [key: string]: unknown;
}

interface BackboneSingletons {
    /**
     * An object for storing globally accessible Alloy collections. Singleton
     * collections created via markup will be stored on this object.
     *
     * ```xml
     * <Collection src="myModel"/>
     * ```
     *
     * The above markup would effectively generate the following code:
     *
     * ```js
     * Alloy.Collections.myModel = Alloy.createCollection('MyModel');
     * ```
     *
     * Alloy.Collections.myModel would then be accessible in any controller in your app.v
     */
    Collections: SingletonCollections;

    /**
     * An object for storing globally accessible Alloy models.
     *
     * Singleton models created via markup will be stored on this object.
     *
     * ```xml
     * <Model src="myModel"/>
     * ```
     *
     * The above markup would effectively generate the following code:
     *
     * ```js
     * Alloy.Models.myModel = Alloy.createModel('MyModel');
     * ```
     *
     * `Alloy.Models.myModel` would then be accessible in any controller in your app.
     */
    Models: SingletonModels;
}

/**
 * Top-level module for Alloy functions.
 */
interface AlloyInterface extends AlloyFactories, BackboneSingletons {
    /**
     * An object that stores Alloy configuration values as defined in your app's
     * `app/config.json`.
     */
    CFG: any;

    /**
     * An object for storing globally accessible variables and functions.
     */
    Globals: any;

    /**
     * `true` if the current device is a handheld device (not a tablet).
     */
    isHandheld: boolean;

    /**
     * `true` if the current device is a tablet.
     */
    isTablet: boolean;
}

/**
 * The global Alloy module.
 */
declare const Alloy: AlloyInterface;

interface WidgetInterface extends AlloyFactories, BackboneSingletons {}

/**
 * The current Widget context.
 *
 * Use `Widget.create*` rather than the `Alloy.create*` methods to create
 * components relative to the widget context rather than the Alloy project.
 */
declare const Widget: WidgetInterface;
