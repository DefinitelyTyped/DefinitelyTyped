// Type definitions for aurelia-dialog v0.5.10 
// Project: https://github.com/aurelia/dialog/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-templating.d.ts" />
/// <reference path="./aurelia-metadata.d.ts" />
/// <reference path="./aurelia-dependency-injection.d.ts" />

declare module 'aurelia-dialog' {
  import {
    customElement,
    bindable,
    customAttribute,
    CompositionEngine,
    ViewSlot
  } from 'aurelia-templating';
  import {
    Origin
  } from 'aurelia-metadata';
  import {
    Container
  } from 'aurelia-dependency-injection';
  export let dialogOptions: any;
  export class AiDialogBody {
  
  }
  
  /**
   * * View-model for footer of Dialog.
   * */
  export class AiDialogFooter {
    static inject: any;
    buttons: any[];
    useDefaultButtons: boolean;
    constructor(controller: DialogController);
    close(buttonValue: string): any;
    useDefaultButtonsChanged(newValue: boolean): any;
    static isCancelButton(value: string): any;
  }
  export class AiDialogHeader {
    static inject: any;
    constructor(controller: any);
  }
  export class AiDialog {
  
  }
  export class AttachFocus {
    static inject: any;
    value: any;
    constructor(element: any);
    attached(): any;
    valueChanged(newValue: any): any;
  }
  
  /**
   * Call a lifecycle method on a viewModel if it exists.
   * @function
   * @param instance The viewModel instance.
   * @param name The lifecycle method name.
   * @param model The model to pass to the lifecycle method.
   * @returns Promise The result of the lifecycle method.
   */
  export function invokeLifecycle(instance: any, name: string, model: any): any;
  
  /**
   * A controller object for a Dialog instance.
   * @constructor
   */
  export class DialogController {
    settings: any;
    constructor(renderer: DialogRenderer, settings: any, resolve: Function, reject: Function);
    
    /**
       * Closes the dialog with a successful result.
       * @param result The returned success result.
       */
    ok(result: any): any;
    
    /**
       * Closes the dialog with a cancel result.
       * @param result The returned cancel result.
       */
    cancel(result: any): any;
    
    /**
       * Closes the dialog with an error result.
       * @param message An error message.
       * @returns Promise An empty promise object.
       */
    error(message: any): any;
    
    /**
       * Closes the dialog.
       * @param ok Whether or not the user input signified success.
       * @param result The specified result.
       * @returns Promise An empty promise object.
       */
    close(ok: boolean, result: any): any;
  }
  
  /**
   * An abstract base class for implementors of the basic Renderer API.
   */
  export class Renderer {
    
    /**
       * Gets an anchor for the ViewSlot to insert a view into.
       * @returns A DOM element.
       */
    getDialogContainer(): any;
    
    /**
       * Displays the dialog.
       * @returns Promise A promise that resolves when the dialog has been displayed.
       */
    showDialog(dialogController: DialogController): Promise<any>;
    
    /**
       * Hides the dialog.
       * @returns Promise A promise that resolves when the dialog has been hidden.
       */
    hideDialog(dialogController: DialogController): Promise<any>;
  }
  export class DialogRenderer {
    defaultSettings: any;
    constructor();
    getDialogContainer(): any;
    createDialogHost(dialogController: DialogController): any;
    showDialog(dialogController: DialogController): any;
    hideDialog(dialogController: DialogController): any;
  }
  
  /**
   * A service allowing for the creation of dialogs.
   * @constructor
   */
  export class DialogService {
    static inject: any;
    constructor(container: Container, compositionEngine: any, renderer: any);
    
    /**
       * Opens a new dialog.
       * @param settings Dialog settings for this dialog instance.
       * @return Promise A promise that settles when the dialog is closed.
       */
    open(settings?: Object): any;
  }
  
  /**
   * A configuration builder for the dialog plugin.
   * @constructor
   */
  export class DialogConfiguration {
    constructor(aurelia: any);
    
    /**
       * Selects the Aurelia conventional defaults for the dialog plugin.
       * @chainable
       */
    useDefaults(): DialogConfiguration;
    
    /**
       * Exports the chosen dialog element or view to Aurelia's global resources.
       * @param resourceName The name of the dialog resource to export.
       * @chainable
       */
    useResource(resourceName: string): DialogConfiguration;
    
    /**
       * Configures the plugin to use a specific dialog renderer.
       * @param renderer An object with a Renderer interface.
       * @param settings Global settings for the renderer.
       * @chainable
       */
    useRenderer(renderer: Renderer, settings?: Object): DialogConfiguration;
  }
}