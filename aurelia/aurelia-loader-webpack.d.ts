// Type definitions for aurelia-loader-webpack v1.0.0-beta.1.0.1
// Project: https://github.com/aurelia/loader-webpack/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-metadata.d.ts" />
/// <reference path="./aurelia-loader.d.ts" />
/// <reference path="./aurelia-pal.d.ts" />

declare module 'aurelia-loader-webpack' {
  import {
    Origin
  } from 'aurelia-metadata';
  import {
    Loader
  } from 'aurelia-loader';
  import {
    DOM,
    PLATFORM
  } from 'aurelia-pal';
  
  /**
  * An implementation of the TemplateLoader interface implemented with text-based loading.
  */
  export class TextTemplateLoader {
    
    /**
      * Loads a template.
      * @param loader The loader that is requesting the template load.
      * @param entry The TemplateRegistryEntry to load and populate with a template.
      * @return A promise which resolves when the TemplateRegistryEntry is loaded with a template.
      */
    loadTemplate(loader: any, entry: any): any;
  }
  
  /**
  * A default implementation of the Loader abstraction which works with webpack (extended common-js style).
  */
  export class WebpackLoader extends Loader {
    constructor();
    
    /**
      * Maps a module id to a source.
      * @param id The module id.
      * @param source The source to map the module to.
      */
    map(id: any, source: any): any;
    
    /**
      * Normalizes a module id.
      * @param moduleId The module id to normalize.
      * @param relativeTo What the module id should be normalized relative to.
      * @return The normalized module id.
      */
    normalizeSync(moduleId: any, relativeTo: any): any;
    
    /**
      * Normalizes a module id.
      * @param moduleId The module id to normalize.
      * @param relativeTo What the module id should be normalized relative to.
      * @return The normalized module id.
      */
    normalize(moduleId: any, relativeTo: any): any;
    
    /**
      * Instructs the loader to use a specific TemplateLoader instance for loading templates
      * @param templateLoader The instance of TemplateLoader to use for loading templates.
      */
    useTemplateLoader(templateLoader: any): any;
    
    /**
      * Loads a collection of modules.
      * @param ids The set of module ids to load.
      * @return A Promise for an array of loaded modules.
      */
    loadAllModules(ids: any): any;
    
    /**
      * Loads a module.
      * @param id The module id to normalize.
      * @return A Promise for the loaded module.
      */
    loadModule(id: any): any;
    
    /**
      * Loads a template.
      * @param url The url of the template to load.
      * @return A Promise for a TemplateRegistryEntry containing the template.
      */
    loadTemplate(url: any): any;
    
    /**
      * Loads a text-based resource.
      * @param url The url of the text file to load.
      * @return A Promise for text content.
      */
    loadText(url: any): any;
    
    /**
      * Alters a module id so that it includes a plugin loader.
      * @param url The url of the module to load.
      * @param pluginName The plugin to apply to the module id.
      * @return The plugin-based module id.
      */
    applyPluginToUrl(url: any, pluginName: any): any;
    
    /**
      * Registers a plugin with the loader.
      * @param pluginName The name of the plugin.
      * @param implementation The plugin implementation.
      */
    addPlugin(pluginName: any, implementation: any): any;
  }
}