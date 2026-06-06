
declare namespace Blaze {
    var View: ViewStatic;

    interface ViewStatic {
        new (name?: string, renderFunction?: Function): View;
    }

    interface View {
        name: string;
        parentView: View;
        isCreated: boolean;
        isRendered: boolean;
        isDestroyed: boolean;
        renderCount: number;
        autorun(runFunc: (computation: Tracker.Computation) => void): Tracker.Computation;
        onViewCreated(func: Function): void;
        onViewReady(func: Function): void;
        onViewDestroyed(func: Function): void;
        firstNode(): Node;
        lastNode(): Node;
        template: Template;
        templateInstance(): TemplateInstance;
    }
    var currentView: View;

    function isTemplate(value: any): boolean;

    interface HelpersMap {
        [key: string]: Function;
    }

    interface EventsMap<D = any, T = TemplateInstance<D>> {
        [key: string]: (event: Meteor.Event, instance: T) => any;
    }

    var Template: TemplateStatic;

    interface TemplateStatic<D = any, T = TemplateInstance<D>> {
        new (viewName?: string, renderFunction?: Function): Template;

        registerHelper(name: string, func: Function): void;
        instance(): T;
        currentData(): D;
        parentData(numLevels?: number): Record<string, any>;
    }

    interface Template<D = any, T = TemplateInstance<D>> {
        viewName: string;
        renderFunction: Function;
        constructView(): View;
        head: Template;
        find(selector: string): HTMLElement;
        findAll(selector: string): HTMLElement[];
        $: typeof $;
        /**
         * Register a function to be called when an instance of this template is created.
         * @param callback A function to be added as a callback.
         */
        onCreated(callback: (this: T) => any): void;
        /**
         * Register a function to be called when an instance of this template is inserted into the DOM.
         * @param callback A function to be added as a callback.
         */
        onRendered(callback: (this: T) => any): void;
        /**
         * Register a function to be called when an instance of this template is removed from the DOM and destroyed.
         * @param callback A function to be added as a callback.
         */
        onDestroyed(callback: (this: T) => any): void;
        created: Function;
        rendered: Function;
        destroyed: Function;
        helpers(helpersMap: HelpersMap): void;
        events(eventsMap: EventsMap<D, T>): void;
    }

    class TemplateInstance<D = any> {
        constructor(view: View);

        $<TElement extends HTMLElement = HTMLElement>(selector: string): JQuery<TElement>;
        autorun(runFunc: (computation: Tracker.Computation) => void): Tracker.Computation;
        data: D;
        find(selector: string): HTMLElement;
        findAll(selector: string): HTMLElement[];
        firstNode: Object;
        lastNode: Object;
        subscribe(name: string, ...args: any[]): Meteor.SubscriptionHandle;
        subscriptionsReady(): boolean;
        view: Object;
    }

    function Each(argFunc: Function, contentFunc: Function, elseFunc?: Function): View;

    function Unless(conditionFunc: Function, contentFunc: Function, elseFunc?: Function): View;

    function If(conditionFunc: Function, contentFunc: Function, elseFunc?: Function): View;

    function Let(bindings: Function, contentFunc: Function): View;

    function With(data: Object | Function, contentFunc: Function): View;

    function getData(elementOrView?: HTMLElement | View): Object;

    function getView(element?: HTMLElement): View;

    function remove(renderedView: View): void;

    function render(templateOrView: Template | View, parentNode: Node, nextNode?: Node, parentView?: View): View;

    function renderWithData(
        templateOrView: Template | View,
        data: Object | Function,
        parentNode: Node,
        nextNode?: Node,
        parentView?: View,
    ): View;

    function toHTML(templateOrView: Template | View): string;

    function toHTMLWithData(templateOrView: Template | View, data: Object | Function): string;
}
