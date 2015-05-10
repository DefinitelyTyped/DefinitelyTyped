declare module 'aurelia-loader/template-registry-entry' {
	export class TemplateDependency {
	    src: any;
	    name: any;
	    constructor(src: any, name: any);
	}
	export class TemplateRegistryEntry {
	    id: any;
	    template: any;
	    dependencies: any;
	    resources: any;
	    factory: any;
	    constructor(id: any);
	    templateIsLoaded: boolean;
	    isReady: boolean;
	    setTemplate(template: any): void;
	    setResources(resources: any): void;
	    setFactory(factory: any): void;
	}

}
declare module 'aurelia-loader/loader' {
	export class Loader {
	    templateRegistry: any;
	    constructor();
	    loadModule(id: any): void;
	    loadAllModules(ids: any): void;
	    loadTemplate(url: any): void;
	    getOrCreateTemplateRegistryEntry(id: any): any;
	    importDocument(url: any): Promise<{}>;
	    importTemplate(url: any): Promise<any>;
	    findTemplate(doc: any, url: any): any;
	}

}
declare module 'aurelia-loader/index' {
	export { TemplateRegistryEntry, TemplateDependency } from 'aurelia-loader/template-registry-entry';
	export { Loader } from 'aurelia-loader/loader';

}
declare module 'aurelia-loader' {
	export * from 'aurelia-loader/index';
}
