
declare module Blaze {
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

    interface EventsMap {
        [key: string]: Function;
    }

    var Template: TemplateStatic;

    interface TemplateStatic {
        new (viewName?: string, renderFunction?: Function): Template;

        registerHelper(name: string, func: Function): void;
        instance(): TemplateInstance;
        currentData(): any;
        parentData(numLevels: number): any;
    }

    interface Template {
        viewName: string;
        renderFunction: Function;
        constructView(): View;
        head: Template;
        find(selector: string): HTMLElement;
        findAll(selector: string): HTMLElement[];
        $: any;
        onCreated(cb: Function): void;
        onRendered(cb: Function): void;
        onDestroyed(cb: Function): void;
        created: Function;
        rendered: Function;
        destroyed: Function;
        helpers(helpersMap: HelpersMap): void;
        events(eventsMap: EventsMap): void;
    }

    var TemplateInstance: TemplateInstanceStatic;

    interface TemplateInstanceStatic {
        new (view: View): TemplateInstance;
    }

    interface TemplateInstance {
        $(selector: string): any;
        autorun(runFunc: (computation: Tracker.Computation) => void): Tracker.Computation;
        data: Object;
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

    function renderWithData(templateOrView: Template | View, data: Object | Function, parentNode: Node, nextNode?: Node, parentView?: View): View;

    function toHTML(templateOrView: Template | View): string;

    function toHTMLWithData(templateOrView: Template | View, data: Object | Function): string;
}

declare module "meteor/blaze" {
    module Blaze {
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

        interface EventsMap {
            [key: string]: Function;
        }

        var Template: TemplateStatic;

        interface TemplateStatic {
            new (viewName?: string, renderFunction?: Function): Template;

            registerHelper(name: string, func: Function): void;
            instance(): TemplateInstance;
            currentData(): any;
            parentData(numLevels: number): any;
        }

        interface Template {
            viewName: string;
            renderFunction: Function;
            constructView(): View;
            head: Template;
            find(selector: string): HTMLElement;
            findAll(selector: string): HTMLElement[];
            $: any;
            onCreated(cb: Function): void;
            onRendered(cb: Function): void;
            onDestroyed(cb: Function): void;
            created: Function;
            rendered: Function;
            destroyed: Function;
            helpers(helpersMap: HelpersMap): void;
            events(eventsMap: EventsMap): void;
        }

        var TemplateInstance: TemplateInstanceStatic;

        interface TemplateInstanceStatic {
            new (view: View): TemplateInstance;
        }

        interface TemplateInstance {
            $(selector: string): any;
            autorun(runFunc: (computation: Tracker.Computation) => void): Tracker.Computation;
            data: Object;
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

        function renderWithData(templateOrView: Template | View, data: Object | Function, parentNode: Node, nextNode?: Node, parentView?: View): View;

        function toHTML(templateOrView: Template | View): string;

        function toHTMLWithData(templateOrView: Template | View, data: Object | Function): string;
    }
}
