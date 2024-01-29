/// <reference types="jquery" />

// http://atom.github.io/space-pen/

interface JQuery {
    view(): any;
    views(): any[];
}

interface JQuery {
    scrollBottom(): number;
    scrollBottom(newValue: number): JQuery;
    scrollDown(): JQuery;
    scrollUp(): JQuery;
    scrollToTop(): JQuery;
    scrollToBottom(): JQuery;
    scrollRight(): number;
    scrollRight(newValue: number): JQuery;
    pageUp(): JQuery;
    pageDown(): JQuery;
    isOnDom(): boolean;
    isVisible(): boolean;
    isHidden(): boolean;
    isDisabled(): boolean;
    enable(): JQuery;
    disable(): JQuery;
    insertAt(index: number, element: any): JQuery;
    removeAt(index: number): JQuery;
    indexOf(child: any): any;
    containsElement(element: any): boolean;
    preempt(eventName: any, handler: Function): any;
    handlers(eventName: any): any;
    hasParent(): boolean;
    hasFocus(): boolean;
    flashError(): number;
    trueHeight(): any;
    trueWidth(): any;
    document(eventName: any, docString: string): any;
    events(): any;
    command(eventName: any, handler: any): any;
    command(eventName: any, selector: any, handler: any): any;
    command(eventName: any, selector: any, options: any, handler: any): any;
    iconSize(size: number): void;
    intValue(): number;
}

declare class View /* implements JQuery */ {
    static builderStack: Builder[];

    static subview(name: any, view: any): void;

    static text(str: string): void;

    static tag(tagName: any, ...args: any[]): void;

    static raw(str: string): void;

    static pushBuilder(): void;

    static popBuilder(): Builder;

    static buildHtml(fn: () => void): string[];

    static render(fn: () => void): JQuery;

    // please override this method!
    static content(...args: any[]): void;

    // tag start
    static a(...args: any[]): void;

    static abbr(...args: any[]): void;

    static address(...args: any[]): void;

    static article(...args: any[]): void;

    static aside(...args: any[]): void;

    static audio(...args: any[]): void;

    static b(...args: any[]): void;

    static bdi(...args: any[]): void;

    static bdo(...args: any[]): void;

    static blockquote(...args: any[]): void;

    static body(...args: any[]): void;

    static button(...args: any[]): void;

    static canvas(...args: any[]): void;

    static caption(...args: any[]): void;

    static cite(...args: any[]): void;

    static code(...args: any[]): void;

    static colgroup(...args: any[]): void;

    static datalist(...args: any[]): void;

    static dd(...args: any[]): void;

    static del(...args: any[]): void;

    static details(...args: any[]): void;

    static dfn(...args: any[]): void;

    static div(...args: any[]): void;

    static dl(...args: any[]): void;

    static dt(...args: any[]): void;

    static em(...args: any[]): void;

    static fieldset(...args: any[]): void;

    static figcaption(...args: any[]): void;

    static figure(...args: any[]): void;

    static footer(...args: any[]): void;

    static form(...args: any[]): void;

    static h1(...args: any[]): void;

    static h2(...args: any[]): void;

    static h3(...args: any[]): void;

    static h4(...args: any[]): void;

    static h5(...args: any[]): void;

    static h6(...args: any[]): void;

    static head(...args: any[]): void;

    static header(...args: any[]): void;

    static hgroup(...args: any[]): void;

    static html(...args: any[]): void;

    static i(...args: any[]): void;

    static iframe(...args: any[]): void;

    static ins(...args: any[]): void;

    static kbd(...args: any[]): void;

    static label(...args: any[]): void;

    static legend(...args: any[]): void;

    static li(...args: any[]): void;

    static map(...args: any[]): void;

    static mark(...args: any[]): void;

    static menu(...args: any[]): void;

    static meter(...args: any[]): void;

    static nav(...args: any[]): void;

    static noscript(...args: any[]): void;

    static object(...args: any[]): void;

    static ol(...args: any[]): void;

    static optgroup(...args: any[]): void;

    static option(...args: any[]): void;

    static output(...args: any[]): void;

    static p(...args: any[]): void;

    static pre(...args: any[]): void;

    static progress(...args: any[]): void;

    static q(...args: any[]): void;

    static rp(...args: any[]): void;

    static rt(...args: any[]): void;

    static ruby(...args: any[]): void;

    static s(...args: any[]): void;

    static samp(...args: any[]): void;

    static script(...args: any[]): void;

    static section(...args: any[]): void;

    static select(...args: any[]): void;

    static small(...args: any[]): void;

    static span(...args: any[]): void;

    static strong(...args: any[]): void;

    static style(...args: any[]): void;

    static sub(...args: any[]): void;

    static summary(...args: any[]): void;

    static sup(...args: any[]): void;

    static table(...args: any[]): void;

    static tbody(...args: any[]): void;

    static td(...args: any[]): void;

    static textarea(...args: any[]): void;

    static tfoot(...args: any[]): void;

    static th(...args: any[]): void;

    static thead(...args: any[]): void;

    static time(...args: any[]): void;

    static title(...args: any[]): void;

    static tr(...args: any[]): void;

    static u(...args: any[]): void;

    static ul(...args: any[]): void;

    static video(...args: any[]): void;

    static area(...args: any[]): void;

    static base(...args: any[]): void;

    static br(...args: any[]): void;

    static col(...args: any[]): void;

    static command(...args: any[]): void;

    static embed(...args: any[]): void;

    static hr(...args: any[]): void;

    static img(...args: any[]): void;

    static input(...args: any[]): void;

    static keygen(...args: any[]): void;

    static link(...args: any[]): void;

    static meta(...args: any[]): void;

    static param(...args: any[]): void;

    static source(...args: any[]): void;

    static track(...args: any[]): void;

    static wbrk(...args: any[]): void;

    // tag end

    initialize(view: View, args: any): void;

    constructor(...args: any[]);

    buildHtml(params: any): any;

    wireOutlets(view: View): void;

    bindEventHandlers(view: View): void;

    pushStack(elems: any): any;

    end(): any;

    command(commandName: any, selector: any, options: any, handler: any): any;

    preempt(eventName: any, handler: any): any;
}

declare class Builder {
    document: any[];
    postProcessingSteps: any[];

    buildHtml(): any[];

    tag(name: string, ...args: any[]): void;

    openTag(name: string, attributes: any): void;

    closeTag(name: string): void;

    text(str: string): void;

    raw(str: string): void;

    subview(outletName: any, subview: View): void;

    extractOptions(args: any): any;
}

declare module "space-pen" {
    // copy & paste start
    class View /* implements JQueryStatic */ {
        static builderStack: Builder[];

        static subview(name: any, view: any): void;

        static text(str: string): void;

        static tag(tagName: any, ...args: any[]): void;

        static raw(str: string): void;

        static pushBuilder(): void;

        static popBuilder(): Builder;

        static buildHtml(fn: () => void): string[];

        static render(fn: () => void): JQuery;

        // please override this method!
        static content(...args: any[]): void;

        // tag start
        static a(...args: any[]): any;

        static abbr(...args: any[]): any;

        static address(...args: any[]): any;

        static article(...args: any[]): any;

        static aside(...args: any[]): any;

        static audio(...args: any[]): any;

        static b(...args: any[]): any;

        static bdi(...args: any[]): any;

        static bdo(...args: any[]): any;

        static blockquote(...args: any[]): any;

        static body(...args: any[]): any;

        static button(...args: any[]): any;

        static canvas(...args: any[]): any;

        static caption(...args: any[]): any;

        static cite(...args: any[]): any;

        static code(...args: any[]): any;

        static colgroup(...args: any[]): any;

        static datalist(...args: any[]): any;

        static dd(...args: any[]): any;

        static del(...args: any[]): any;

        static details(...args: any[]): any;

        static dfn(...args: any[]): any;

        static div(...args: any[]): any;

        static dl(...args: any[]): any;

        static dt(...args: any[]): any;

        static em(...args: any[]): any;

        static fieldset(...args: any[]): any;

        static figcaption(...args: any[]): any;

        static figure(...args: any[]): any;

        static footer(...args: any[]): any;

        static form(...args: any[]): any;

        static h1(...args: any[]): any;

        static h2(...args: any[]): any;

        static h3(...args: any[]): any;

        static h4(...args: any[]): any;

        static h5(...args: any[]): any;

        static h6(...args: any[]): any;

        static head(...args: any[]): any;

        static header(...args: any[]): any;

        static hgroup(...args: any[]): any;

        static html(...args: any[]): any;

        static i(...args: any[]): any;

        static iframe(...args: any[]): any;

        static ins(...args: any[]): any;

        static kbd(...args: any[]): any;

        static label(...args: any[]): any;

        static legend(...args: any[]): any;

        static li(...args: any[]): any;

        static map(...args: any[]): any;

        static mark(...args: any[]): any;

        static menu(...args: any[]): any;

        static meter(...args: any[]): any;

        static nav(...args: any[]): any;

        static noscript(...args: any[]): any;

        static object(...args: any[]): any;

        static ol(...args: any[]): any;

        static optgroup(...args: any[]): any;

        static option(...args: any[]): any;

        static output(...args: any[]): any;

        static p(...args: any[]): any;

        static pre(...args: any[]): any;

        static progress(...args: any[]): any;

        static q(...args: any[]): any;

        static rp(...args: any[]): any;

        static rt(...args: any[]): any;

        static ruby(...args: any[]): any;

        static s(...args: any[]): any;

        static samp(...args: any[]): any;

        static script(...args: any[]): any;

        static section(...args: any[]): any;

        static select(...args: any[]): any;

        static small(...args: any[]): any;

        static span(...args: any[]): any;

        static strong(...args: any[]): any;

        static style(...args: any[]): any;

        static sub(...args: any[]): any;

        static summary(...args: any[]): any;

        static sup(...args: any[]): any;

        static table(...args: any[]): any;

        static tbody(...args: any[]): any;

        static td(...args: any[]): any;

        static textarea(...args: any[]): any;

        static tfoot(...args: any[]): any;

        static th(...args: any[]): any;

        static thead(...args: any[]): any;

        static time(...args: any[]): any;

        static title(...args: any[]): any;

        static tr(...args: any[]): any;

        static u(...args: any[]): any;

        static ul(...args: any[]): any;

        static video(...args: any[]): any;

        static area(...args: any[]): any;

        static base(...args: any[]): any;

        static br(...args: any[]): any;

        static col(...args: any[]): any;

        static command(...args: any[]): any;

        static embed(...args: any[]): any;

        static hr(...args: any[]): any;

        static img(...args: any[]): any;

        static input(...args: any[]): any;

        static keygen(...args: any[]): any;

        static link(...args: any[]): any;

        static meta(...args: any[]): any;

        static param(...args: any[]): any;

        static source(...args: any[]): any;

        static track(...args: any[]): any;

        static wbrk(...args: any[]): any;

        // tag end

        initialize(view: View, args: any): void;

        constructor(...args: any[]);

        buildHtml(params: any): any;

        wireOutlets(view: View): void;

        bindEventHandlers(view: View): void;

        pushStack(elems: any): any;

        end(): any;

        command(eventName: string, handler: any): any;

        command(eventName: string, selector: any, handler: any): any;

        command(eventName: string, selector: any, options: any, handler: any): any;

        preempt(eventName: any, handler: any): any;
    }

    class Builder {
        document: any[];
        postProcessingSteps: any[];

        buildHtml(): any[];

        tag(name: string, ...args: any[]): void;

        openTag(name: string, attributes: any): void;

        closeTag(name: string): void;

        text(str: string): void;

        raw(str: string): void;

        subview(outletName: any, subview: View): void;

        extractOptions(args: any): any;
    }
    // copy & paste end

    var jQuery: JQueryStatic;
    var $: JQueryStatic;
    var $$: (fn: Function) => JQuery; // same type as View.render's return type.
    var $$$: (fn: Function) => any; // same type as View.buildHtml's return type's [0].
}
