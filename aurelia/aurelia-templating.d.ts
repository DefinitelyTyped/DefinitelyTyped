declare module 'aurelia-templating/animator' {
	export class Animator {
	    static instance: any;
	    static configureDefault(container: any, animatorInstance?: any): void;
	    move(): Promise<boolean>;
	    enter(element: any): Promise<boolean>;
	    leave(element: any): Promise<boolean>;
	    removeClass(element: any, className: any): Promise<boolean>;
	    addClass(element: any, className: any): Promise<boolean>;
	}

}
declare module 'aurelia-templating/behavior-instance' {
	export class BehaviorInstance {
	    behavior: any;
	    executionContext: any;
	    isAttached: any;
	    boundProperties: any;
	    view: any;
	    constructor(behavior: any, executionContext: any, instruction: any);
	    created(context: any): void;
	    bind(context: any): void;
	    unbind(): void;
	    attached(): void;
	    detached(): void;
	}

}
declare module 'aurelia-templating/util' {
	export function hyphenate(name: any): any;

}
declare module 'aurelia-templating/bindable-property' {
	export class BindableProperty {
	    name: any;
	    attribute: any;
	    defaultBindingMode: any;
	    owner: any;
	    changeHandler: any;
	    hasOptions: any;
	    isDynamic: any;
	    defaultValue: any;
	    constructor(nameOrConfig: any);
	    registerWith(target: any, behavior: any): void;
	    defineOn(target: any, behavior: any): void;
	    createObserver(executionContext: any): any;
	    initialize(executionContext: any, observerLookup: any, attributes: any, behaviorHandlesBind: any, boundProperties: any): void;
	    createDynamicProperty(executionContext: any, observerLookup: any, behaviorHandlesBind: any, name: any, attribute: any, boundProperties: any): void;
	}

}
declare module 'aurelia-templating/binding-language' {
	export class BindingLanguage {
	    inspectAttribute(resources: any, attrName: any, attrValue: any): void;
	    createAttributeInstruction(resources: any, element: any, info: any, existingInstruction: any): void;
	    parseText(resources: any, value: any): void;
	}

}
declare module 'aurelia-templating/children' {
	export class ChildObserver {
	    selector: any;
	    changeHandler: any;
	    property: any;
	    constructor(property: any, changeHandler: any, selector: any);
	    createBinding(target: any, behavior: any): ChildObserverBinder;
	}
	export class ChildObserverBinder {
	    selector: any;
	    target: any;
	    property: any;
	    behavior: any;
	    changeHandler: any;
	    observer: any;
	    constructor(selector: any, target: any, property: any, behavior: any, changeHandler: any);
	    bind(source: any): void;
	    unbind(): void;
	    onChange(mutations: any): void;
	}

}
declare module 'aurelia-templating/view-strategy' {
	export class ViewStrategy {
	    static metadataKey: string;
	    makeRelativeTo(baseUrl: any): void;
	    static normalize(value: any): any;
	    static getDefault(target: any): any;
	}
	export class UseViewStrategy extends ViewStrategy {
	    path: any;
	    absolutePath: any;
	    moduleId: any;
	    constructor(path: any);
	    loadViewFactory(viewEngine: any, options: any): any;
	    makeRelativeTo(file: any): void;
	}
	export class ConventionalViewStrategy extends ViewStrategy {
	    moduleId: any;
	    viewUrl: any;
	    constructor(moduleId: any);
	    loadViewFactory(viewEngine: any, options: any): any;
	    static convertModuleIdToViewUrl(moduleId: any): string;
	}
	export class NoViewStrategy extends ViewStrategy {
	    loadViewFactory(): Promise<any>;
	}
	export class TemplateRegistryViewStrategy extends ViewStrategy {
	    moduleId: any;
	    registryEntry: any;
	    constructor(moduleId: any, registryEntry: any);
	    loadViewFactory(viewEngine: any, options: any): any;
	}

}
declare module 'aurelia-templating/resource-registry' {
	export class ResourceRegistry {
	    attributes: any;
	    elements: any;
	    valueConverters: any;
	    attributeMap: any;
	    baseResourceUrl: any;
	    constructor();
	    registerElement(tagName: any, behavior: any): void;
	    getElement(tagName: any): any;
	    registerAttribute(attribute: any, behavior: any, knownAttribute: any): void;
	    getAttribute(attribute: any): any;
	    registerValueConverter(name: any, valueConverter: any): void;
	    getValueConverter(name: any): any;
	}
	export class ViewResources extends ResourceRegistry {
	    parent: any;
	    viewUrl: any;
	    valueConverterLookupFunction: any;
	    constructor(parent: any, viewUrl: any);
	    relativeToView(path: any): any;
	    getElement(tagName: any): any;
	    mapAttribute(attribute: any): any;
	    getAttribute(attribute: any): any;
	    getValueConverter(name: any): any;
	}

}
declare module 'aurelia-templating/view' {
	export class View {
	    fragment: any;
	    behaviors: any;
	    bindings: any;
	    children: any;
	    systemControlled: any;
	    contentSelectors: any;
	    firstChild: any;
	    lastChild: any;
	    isBound: any;
	    isAttached: any;
	    executionContext: any;
	    owner: any;
	    constructor(fragment: any, behaviors: any, bindings: any, children: any, systemControlled: any, contentSelectors: any);
	    created(executionContext: any): void;
	    bind(executionContext: any, systemUpdate: any): void;
	    addBinding(binding: any): void;
	    unbind(): void;
	    insertNodesBefore(refNode: any): void;
	    appendNodesTo(parent: any): void;
	    removeNodes(): void;
	    attached(): void;
	    detached(): void;
	}

}
declare module 'aurelia-templating/content-selector' {
	export class ContentSelector {
	    static applySelectors(view: any, contentSelectors: any, callback: any): void;
	    anchor: any;
	    selector: any;
	    all: any;
	    groups: any;
	    constructor(anchor: any, selector: any);
	    copyForViewSlot(): ContentSelector;
	    matches(node: any): any;
	    add(group: any): void;
	    insert(index: any, group: any): void;
	    removeAt(index: any, fragment: any): void;
	}

}
declare module 'aurelia-templating/view-slot' {
	export class ViewSlot {
	    anchor: any;
	    viewAddMethod: any;
	    executionContext: any;
	    animator: any;
	    children: any;
	    isBound: any;
	    isAttached: any;
	    contentSelectors: any;
	    constructor(anchor: any, anchorIsContainer: any, executionContext?: any, animator?: any);
	    transformChildNodesIntoView(): void;
	    bind(executionContext: any): void;
	    unbind(): void;
	    add(view: any): void;
	    insert(index: any, view: any): void;
	    remove(view: any): void;
	    removeAt(index: any): any;
	    removeAll(): Promise<void>;
	    swap(view: any): void;
	    attached(): void;
	    detached(): void;
	    installContentSelectors(contentSelectors: any): void;
	    contentSelectorAdd(view: any): void;
	    contentSelectorInsert(index: any, view: any): void;
	    contentSelectorRemove(view: any): void;
	    contentSelectorRemoveAt(index: any): any;
	    contentSelectorRemoveAll(): any;
	}

}
declare module 'aurelia-templating/view-factory' {
	export class BoundViewFactory {
	    parentContainer: any;
	    viewFactory: any;
	    executionContext: any;
	    factoryOptions: any;
	    constructor(parentContainer: any, viewFactory: any, executionContext: any);
	    create(executionContext: any): any;
	}
	export class ViewFactory {
	    template: any;
	    instructions: any;
	    resources: any;
	    constructor(template: any, instructions: any, resources: any);
	    create(container: any, executionContext: any, options?: {
	        systemControlled: boolean;
	        suppressBind: boolean;
	    }): any;
	}

}
declare module 'aurelia-templating/view-compiler' {
	import { ViewFactory } from 'aurelia-templating/view-factory';
	import { BindingLanguage } from 'aurelia-templating/binding-language';
	export class ViewCompiler {
	    bindingLanguage: any;
	    static inject(): typeof BindingLanguage[];
	    constructor(bindingLanguage: any);
	    compile(templateOrFragment: any, resources: any, options?: any): ViewFactory;
	    compileNode(node: any, resources: any, instructions: any, parentNode: any, parentInjectorId: any, targetLightDOM: any): any;
	    compileElement(node: any, resources: any, instructions: any, parentNode: any, parentInjectorId: any, targetLightDOM: any): any;
	}

}
declare module 'aurelia-templating/html-behavior' {
	export class HtmlBehaviorResource {
	    elementName: any;
	    attributeName: any;
	    liftsContent: any;
	    targetShadowDOM: any;
	    skipContentProcessing: any;
	    usesShadowDOM: any;
	    childExpression: any;
	    hasDynamicOptions: any;
	    properties: any;
	    attributes: any;
	    observerLocator: any;
	    taskQueue: any;
	    target: any;
	    handlesCreated: any;
	    handlesBind: any;
	    handlesUnbind: any;
	    handlesAttached: any;
	    handlesDetached: any;
	    apiName: any;
	    viewStrategy: any;
	    viewFactory: any;
	    constructor();
	    static convention(name: any, existing?: any): any;
	    analyze(container: any, target: any): void;
	    load(container: any, target: any, viewStrategy?: any, transientView?: any): any;
	    register(registry: any, name: any): void;
	    compile(compiler: any, resources: any, node: any, instruction: any, parentNode: any): any;
	    create(container: any, instruction?: any, element?: any, bindings?: any): any;
	    ensurePropertiesDefined(instance: any, lookup: any): void;
	}

}
declare module 'aurelia-templating/module-analyzer' {
	export class ModuleAnalyzer {
	    cache: any;
	    constructor();
	    getAnalysis(moduleId: any): any;
	    analyze(moduleId: any, moduleInstance: any, viewModelMember: any): any;
	}

}
declare module 'aurelia-templating/view-engine' {
	export class ViewEngine {
	    static inject(): any[];
	    loader: any;
	    container: any;
	    viewCompiler: any;
	    moduleAnalyzer: any;
	    appResources: any;
	    constructor(loader: any, container: any, viewCompiler: any, moduleAnalyzer: any, appResources: any);
	    loadViewFactory(urlOrRegistryEntry: any, compileOptions: any, associatedModuleId: any): any;
	    loadTemplateResources(viewRegistryEntry: any, associatedModuleId: any): any;
	    importViewModelResource(moduleImport: any, moduleMember: any): any;
	    importViewResources(moduleIds: any, names: any, resources: any, associatedModuleId: any): any;
	}

}
declare module 'aurelia-templating/composition-engine' {
	import { ViewEngine } from 'aurelia-templating/view-engine';
	export class CompositionEngine {
	    static inject(): typeof ViewEngine[];
	    viewEngine: any;
	    constructor(viewEngine: any);
	    activate(instruction: any): any;
	    createBehaviorAndSwap(instruction: any): any;
	    createBehavior(instruction: any): any;
	    createViewModel(instruction: any): any;
	    compose(instruction: any): any;
	}

}
declare module 'aurelia-templating/element-config' {
	export class ElementConfigResource {
	    load(container: any, target: any): Promise<ElementConfigResource>;
	    register(): void;
	}

}
declare module 'aurelia-templating/decorators' {
	export function behavior(override: any): (target: any) => void;
	export function customElement(name: any): (target: any) => void;
	export function customAttribute(name: any): (target: any) => void;
	export function templateController(target?: any): any;
	export function bindable(nameOrConfigOrTarget: any, key?: any, descriptor?: any): any;
	export function dynamicOptions(target?: any): any;
	export function syncChildren(property: any, changeHandler: any, selector: any): (target: any) => void;
	export function useShadowDOM(target: any): void | ((target: any) => void);
	export function skipContentProcessing(target: any): void | ((target: any) => void);
	export function viewStrategy(strategy: any): (target: any) => void;
	export function useView(path: any): (target: any) => void;
	export function noView(target?: any): any;
	export function elementConfig(target: any): void | ((target: any) => void);

}
declare module 'aurelia-templating/index' {
	export { HtmlBehaviorResource } from 'aurelia-templating/html-behavior';
	export { BindableProperty } from 'aurelia-templating/bindable-property';
	export { ResourceRegistry, ViewResources } from 'aurelia-templating/resource-registry';
	export { ChildObserver } from 'aurelia-templating/children';
	export { ElementConfigResource } from 'aurelia-templating/element-config';
	export { ViewStrategy, UseViewStrategy, ConventionalViewStrategy, NoViewStrategy } from 'aurelia-templating/view-strategy';
	export { ViewCompiler } from 'aurelia-templating/view-compiler';
	export { ViewEngine } from 'aurelia-templating/view-engine';
	export { ViewFactory, BoundViewFactory } from 'aurelia-templating/view-factory';
	export { ViewSlot } from 'aurelia-templating/view-slot';
	export { BindingLanguage } from 'aurelia-templating/binding-language';
	export { CompositionEngine } from 'aurelia-templating/composition-engine';
	export { Animator } from 'aurelia-templating/animator';
	export * from 'aurelia-templating/decorators';

}
declare module 'aurelia-templating' {
	export * from 'aurelia-templating/index';
}
