// Type definitions for aurelia-framework v1.0.0-beta.1.2.2 
// Project: https://github.com/aurelia/framework/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-logging.d.ts" />
/// <reference path="./aurelia-dependency-injection.d.ts" />
/// <reference path="./aurelia-loader.d.ts" />
/// <reference path="./aurelia-templating.d.ts" />
/// <reference path="./aurelia-pal.d.ts" />
/// <reference path="./aurelia-path.d.ts" />

declare module 'aurelia-framework' {
  import * as TheLogManager from 'aurelia-logging';
  import {
    Container
  } from 'aurelia-dependency-injection';
  import {
    Loader
  } from 'aurelia-loader';
  import {
    BindingLanguage,
    ViewSlot,
    ViewResources,
    TemplatingEngine,
    CompositionTransaction,
    ViewEngine
  } from 'aurelia-templating';
  import {
    DOM,
    PLATFORM
  } from 'aurelia-pal';
  import {
    join
  } from 'aurelia-path';

  /**
   * The framework core that provides the main Aurelia object.
   */
  export class Aurelia {

    /**
       * The loader used by the application.
       */
    loader: Loader;

    /**
       * The root DI container used by the application.
       */
    container: Container;

    /**
       * The global view resources used by the application.
       */
    resources: ViewResources;

    /**
       * The configuration used during application startup.
       */
    use: FrameworkConfiguration;

    /**
       * Creates an instance of Aurelia.
       * @param loader The loader for this Aurelia instance to use. If a loader is not specified, Aurelia will use the loader type specified by PLATFORM.Loader.
       * @param container The dependency injection container for this Aurelia instance to use. If a container is not specified, Aurelia will create an empty, global container.
       * @param resources The resource registry for this Aurelia instance to use. If a resource registry is not specified, Aurelia will create an empty registry.
       */
    constructor(loader?: Loader, container?: Container, resources?: ViewResources);

    /**
       * Loads plugins, then resources, and then starts the Aurelia instance.
       * @return Returns a Promise with the started Aurelia instance.
       */
    start(): Promise<Aurelia>;

    /**
       * Enhances the host's existing elements with behaviors and bindings.
       * @param bindingContext A binding context for the enhanced elements.
       * @param applicationHost The DOM object that Aurelia will enhance.
       * @return Returns a Promise for the current Aurelia instance.
       */
    enhance(bindingContext?: Object, applicationHost?: string | Element): Promise<Aurelia>;

    /**
       * Instantiates the root component and adds it to the DOM.
       * @param root The root component to load upon bootstrap.
       * @param applicationHost The DOM object that Aurelia will attach to.
       * @return Returns a Promise of the current Aurelia instance.
       */
    setRoot(root?: string, applicationHost?: string | Element): Promise<Aurelia>;
  }

  /**
   * Manages configuring the aurelia framework instance.
   */
  export class FrameworkConfiguration {

    /**
       * The root DI container used by the application.
       */
    container: Container;

    /**
       * The aurelia instance.
       */
    aurelia: Aurelia;

    /**
       * Creates an instance of FrameworkConfiguration.
       * @param aurelia An instance of Aurelia.
       */
    constructor(aurelia: Aurelia);

    /**
       * Adds an existing object to the framework's dependency injection container.
       * @param type The object type of the dependency that the framework will inject.
       * @param instance The existing instance of the dependency that the framework will inject.
       * @return Returns the current FrameworkConfiguration instance.
       */
    instance(type: any, instance: any): FrameworkConfiguration;

    /**
       * Adds a singleton to the framework's dependency injection container.
       * @param type The object type of the dependency that the framework will inject.
       * @param implementation The constructor function of the dependency that the framework will inject.
       * @return Returns the current FrameworkConfiguration instance.
       */
    singleton(type: any, implementation?: Function): FrameworkConfiguration;

    /**
       * Adds a transient to the framework's dependency injection container.
       * @param type The object type of the dependency that the framework will inject.
       * @param implementation The constructor function of the dependency that the framework will inject.
       * @return Returns the current FrameworkConfiguration instance.
       */
    transient(type: any, implementation?: Function): FrameworkConfiguration;

    /**
       * Adds an async function that runs before the plugins are run.
       * @param task The function to run before start.
       * @return Returns the current FrameworkConfiguration instance.
       */
    preTask(task: Function): FrameworkConfiguration;

    /**
       * Adds an async function that runs after the plugins are run.
       * @param task The function to run after start.
       * @return Returns the current FrameworkConfiguration instance.
       */
    postTask(task: Function): FrameworkConfiguration;

    /**
       * Configures an internal feature plugin before Aurelia starts.
       * @param plugin The folder for the internal plugin to configure (expects an index.js in that folder).
       * @param config The configuration for the specified plugin.
       * @return Returns the current FrameworkConfiguration instance.
       */
    feature(plugin: string, config?: any): FrameworkConfiguration;

    /**
       * Adds globally available view resources to be imported into the Aurelia framework.
       * @param resources The relative module id to the resource. (Relative to the plugin's installer.)
       * @return Returns the current FrameworkConfiguration instance.
       */
    globalResources(resources: string | string[]): FrameworkConfiguration;

    /**
       * Renames a global resource that was imported.
       * @param resourcePath The path to the resource.
       * @param newName The new name.
       * @return Returns the current FrameworkConfiguration instance.
       */
    globalName(resourcePath: string, newName: string): FrameworkConfiguration;

    /**
       * Configures an external, 3rd party plugin before Aurelia starts.
       * @param plugin The ID of the 3rd party plugin to configure.
       * @param config The configuration for the specified plugin.
       * @return Returns the current FrameworkConfiguration instance.
     */
    plugin(plugin: string, config?: any): FrameworkConfiguration;

    /**
       * Plugs in the default binding language from aurelia-templating-binding.
       * @return Returns the current FrameworkConfiguration instance.
      */
    defaultBindingLanguage(): FrameworkConfiguration;

    /**
       * Plugs in the router from aurelia-templating-router.
       * @return Returns the current FrameworkConfiguration instance.
      */
    router(): FrameworkConfiguration;

    /**
       * Plugs in the default history implementation from aurelia-history-browser.
       * @return Returns the current FrameworkConfiguration instance.
      */
    history(): FrameworkConfiguration;

    /**
       * Plugs in the default templating resources (if, repeat, show, compose, etc.) from aurelia-templating-resources.
       * @return Returns the current FrameworkConfiguration instance.
      */
    defaultResources(): FrameworkConfiguration;

    /**
       * Plugs in the event aggregator from aurelia-event-aggregator.
       * @return Returns the current FrameworkConfiguration instance.
      */
    eventAggregator(): FrameworkConfiguration;

    /**
       * Sets up the Aurelia configuration. This is equivalent to calling `.defaultBindingLanguage().defaultResources().history().router().eventAggregator();`
       * @return Returns the current FrameworkConfiguration instance.
      */
    standardConfiguration(): FrameworkConfiguration;

    /**
       * Plugs in the ConsoleAppender and sets the log level to debug.
       * @return {FrameworkConfiguration} Returns the current FrameworkConfiguration instance.
      */
    developmentLogging(): FrameworkConfiguration;

    /**
       * Loads and configures the plugins registered with this instance.
       * @return Returns a promise which resolves when all plugins are loaded and configured.
      */
    apply(): Promise<void>;
  }
  export * from 'aurelia-dependency-injection';
  export * from 'aurelia-binding';
  export * from 'aurelia-metadata';
  export * from 'aurelia-templating';
  export * from 'aurelia-loader';
  export * from 'aurelia-task-queue';
  export * from 'aurelia-path';
  export * from 'aurelia-pal';
  /**
   * The log manager.
   */
  export const LogManager: any;
}