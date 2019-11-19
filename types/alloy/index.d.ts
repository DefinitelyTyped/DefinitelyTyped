// Type definitions for npm package Alloy 1.14
// Project: https://github.com/appcelerator/alloy
// Definitions by: Axway Appcelerator <https://github.com/appcelerator>
//                 Mathias Lorenzen <https://github.com/ffMathy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="backbone" />
/// <reference types="titanium" />

interface AlloyControllerUI {
  create(apiName: string, opts?: any): any;
}

/**
 * The base class for Alloy controllers.
 */
interface AlloyController extends Backbone.Events {
  args: any;
  UI: AlloyControllerUI;

  /**
   *
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

  destroy(): void;

  getListener(proxy?: Titanium.Proxy, type?: string): any[];

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
  updateViews(args: { [k: string]: any}): AlloyController;
}

/**
 * Top-level module for Alloy functions.
 */
interface AlloyInterface {
  /**
   * An object for storing globally accessible Alloy collections. Singleton collections created via markup will be stored on this object.
   */
  Collections: {
    [k: string]: unknown;
    instance(name: string): unknown;
  };

  /**
   * An object for storing globally accessible Alloy models. Singleton models created via markup will be stored on this object.
   */
  Models: unknown;

  /**
   * Returns true if the current device is a handheld device (not a tablet).
   */
  isHandheld: boolean;

  /**
   * true if the current device is a tablet.
   */
  isTablet: boolean;

  /**
   * Factory method for instantiating a Backbone collection of model objects. Creates and returns a collection for holding the named type of model objects.
   *
   * @param name Name of model to hold in this collection.
   * @param args Arguments to pass to the collection.
   */
  createCollection(name: string, args?: any): any;

  /**
   * Factory method for instantiating a controller. Creates and returns an instance of the named controller.
   *
   * @param name Name of controller to instantiate.
   * @param args Arguments to pass to the controller
   */
  createController(name: string, args?: any): any;

  /**
   * Factory method for instantiating a Backbone Model object. Creates and returns an instance of the named model.
   *
   * @param name Name of model to instantiate.
   * @param args Arguments to pass to the model.
   */
  createModel(name: string, args?: any): any;

  /**
   * Factory method for instantiating a widget controller. Creates and returns an instance of the named widget.
   *
   * @param id Id of widget to instantiate.
   * @param name Name of the view within the widget to instantiate ('widget' by default)
   * @param args Arguments to pass to the widget.
   */
  createWidget(id: string, args?: any): any;
  createWidget(id: string, name?: string, args?: any): any;
}

/**
 * The global Alloy module.
 */
declare const Alloy: AlloyInterface;

/**
 * Top-level module for Alloy widget.
 */
interface WidgetInterface {
  /**
   * Factory method for instantiating a controller. Creates and returns an instance of the named controller.
   *
   * @param name Name of controller to instantiate.
   * @param args Arguments to pass to the controller
   */
  createController(name: string, args?: any): any;
}

/**
 * The global Widget module.
 */
declare const Widget: WidgetInterface;

/**
 * Shows an AlertDialog with the specified message.
 *
 * @param msg Message to show in the alert dialog
 */
declare function alert(msg: string): void;

/**
 * True if the current target platform is Android, false otherwise
 */
declare const OS_ANDROID: boolean;

/**
 * True if the current target platform is iOS, false otherwise
 */
declare const OS_IOS: boolean;
