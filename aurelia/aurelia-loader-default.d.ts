// Type definitions for aurelia-loader-default v1.0.0-beta.1.2.1
// Project: https://github.com/aurelia/loader-default/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-loader.d.ts" />
/// <reference path="./aurelia-pal.d.ts" />
/// <reference path="./aurelia-metadata.d.ts" />

declare module 'aurelia-loader-default' {
  import {
    TemplateRegistryEntry,
    Loader
  } from 'aurelia-loader';
  import {
    DOM,
    PLATFORM
  } from 'aurelia-pal';
  import {
    Origin
  } from 'aurelia-metadata';
  
  /**
  * Represents a template loader.
  */
  export interface TemplateLoader {
    
    /**
      * Loads a template.
      * @param loader The loader that is requesting the template load.
      * @param entry The TemplateRegistryEntry to load and populate with a template.
      * @return A promise which resolves when the TemplateRegistryEntry is loaded with a template.
      */
    loadTemplate(loader: Loader, entry: TemplateRegistryEntry): Promise<any>;
  }
  
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
    loadTemplate(loader: Loader, entry: TemplateRegistryEntry): Promise<any>;
  }
  
  /**
  * A default implementation of the Loader abstraction which works with SystemJS, RequireJS and Dojo Loader.
  */
  /**
  * A default implementation of the Loader abstraction which works with SystemJS, RequireJS and Dojo Loader.
  */
  export class DefaultLoader extends Loader {
    
    /**
      * The name of the underlying native loader plugin used to load text.
      */
    textPluginName: string;
    
    /**
      * Creates an instance of the DefaultLoader.
      */
    constructor();
    
    /**
      * Instructs the loader to use a specific TemplateLoader instance for loading templates
      * @param templateLoader The instance of TemplateLoader to use for loading templates.
      */
    useTemplateLoader(templateLoader: TemplateLoader): void;
    
    /**
      * Loads a collection of modules.
      * @param ids The set of module ids to load.
      * @return A Promise for an array of loaded modules.
      */
    loadAllModules(ids: string[]): Promise<any[]>;
    
    /**
      * Loads a template.
      * @param url The url of the template to load.
      * @return A Promise for a TemplateRegistryEntry containing the template.
      */
    loadTemplate(url: string): Promise<TemplateRegistryEntry>;
    
    /**
      * Loads a text-based resource.
      * @param url The url of the text file to load.
      * @return A Promise for text content.
      */
    loadText(url: string): Promise<string>;
  }
}