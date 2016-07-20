// Type definitions for vuejs 1.0.21
// Project: https://github.com/vuejs/vue
// Definitions by: odangosan <https://github.com/odangosan>, kaorun343 <https://github.com/kaorun343>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Array<T> {
    $remove(item: T): Array<T>;
    $set(index: any, val: T): T;
}

declare namespace vuejs {

    interface PropOption {
        type?: { new (...args: any[]): any; } | { new (...args: any[]): any; }[];
        required?: boolean;
        default?: any;
        twoWay?: boolean;
        validator?(value: any): boolean;
        coerce?(value: any): any;
    }

    interface ComputedOption {
        get(): any;
        set(value: any): void;
    }

    interface WatchOption {
        handler(val: any, oldVal: any): void;
        deep?: boolean;
        immidiate?: boolean;
    }

    interface DirectiveOption {
        bind?(): any;
        update?(newVal?: any, oldVal?: any): any;
        unbind?(): any;
        params?: string[];
        deep?: boolean;
        twoWay?: boolean;
        acceptStatement?: boolean;
        terminal?: boolean;
        priority?: number;
        [key: string]: any;
    }

    interface Directive {
        el: HTMLElement;
        vm: Vue;
        expression: string;
        arg?: string;
        name: string;
        modifiers: { [key: string]: boolean };
        descriptor: any;
        params?: { [key: string]: any };
    }

    interface FilterOption {
        read?: Function;
        write?: Function;
    }

    interface TransitionOption {
        css?: boolean;
        animation?: string;
        enterClass?: string;
        leaveClass?: string;
        beforeEnter?(el: HTMLElement): void;
        enter?(el: HTMLElement, done?: () => void): void;
        afterEnter?(el: HTMLElement): void;
        enterCancelled?(el: HTMLElement): void;
        beforeLeave?(el: HTMLElement): void;
        leave?(el: HTMLElement, done?: () => void): void;
        afterLeave?(el: HTMLElement): void;
        leaveCancelled?(el: HTMLElement): void;
        stagger?(index: number): number;
        enterStagger?(index: number): number;
        leaveStagger?(index: number): number;
        [key: string]: any;
    }

    interface ComponentOption {
        data?: { [key: string]: any } | Function;
        props?: string[] | { [key: string]: (PropOption | { new (...args: any[]): any; } | { new (...args: any[]): any; }[]) };
        computed?: { [key: string]: (Function | ComputedOption) };
        methods?: { [key: string]: Function };
        watch?: { [key: string]: ((val: any, oldVal: any) => void) | string | WatchOption };
        el?: string | HTMLElement | (() => HTMLElement);
        template?: string;
        replace?: boolean;
        init?(): void;
        created?(): void;
        beforeCompile?(): void;
        compiled?(): void;
        ready?(): void;
        attached?(): void;
        detached?(): void;
        beforeDestroy?(): void;
        destroyed?(): void;
        activate?(): void;
        directives?: { [key: string]: (DirectiveOption | Function) };
        elementDirectives?: { [key: string]: (DirectiveOption | Function) };
        filters?: { [key: string]: (Function | FilterOption) };
        components?: { [key: string]: any };
        transitions?: { [key: string]: TransitionOption };
        partials?: { [key: string]: string };
        parent?: Vue;
        events?: { [key: string]: ((...args: any[]) => (boolean | void)) | string };
        mixins?: Object[];
        name?: string;
        [key: string]: any;
    }

    interface Vue {
        $data: any;
        $el: HTMLElement;
        $options: Object;
        $parent: Vue;
        $root: Vue;
        $children: Vue[];
        $refs: Object;
        $els: Object;

        // instance/api/data.js
        $get(exp: string, asStatement?: boolean): any;
        $set<T>(key: string | number, value: T): T;
        $delete(key: string): void;
        $eval(expression: string): string;
        $interpolate(expression: string): string;
        $log(keypath?: string): void;
        $watch(expOrFn: string | Function, callback: ((newVal: any, oldVal?: any) => any) | string, options?: { deep?: boolean, immidiate?: boolean }): Function;
        // instance/api/dom.js
        $nextTick(callback: Function): void;
        $appendTo(target: (HTMLElement | string), callback?: Function, withTransition?: boolean): this;
        $prependTo(target: (HTMLElement | string), callback?: Function, withTransition?: boolean): this;
        $before(target: (HTMLElement | string), callback?: Function, withTransition?: boolean): this;
        $after(target: (HTMLElement | string), callback?: Function, withTransition?: boolean): this;
        $remove(callback?: Function): this;
        // instance/api/events.js
        $on(event: string, callback: Function): this;
        $once(event: string, callback: Function): this;
        $off(event: string, callback?: Function): this;
        $emit(event: string, ...args: any[]): this;
        $broadcast(event: string, ...args: any[]): this;
        $dispatch(event: string, ...args: any[]): this;
        // instance/api/lifecycle.js
        $mount(elementOrSelector?: (HTMLElement | string)): this;
        $destroy(remove?: boolean): void;
        $compile(el: Element | DocumentFragment, host?: Vue): Function;

        _init(options?: ComponentOption): void;
    }

    interface VueConfig {
        debug: boolean;
        delimiters: [string, string];
        unsafeDelimiters: [string, string];
        silent: boolean;
        async: boolean;
        devtools: boolean;
    }

    interface VueUtil {
        // util/lang.js
        set(obj: Object, key: string, value: any): void;
        del(obj: Object, key: string): void;
        hasOwn(obj: Object, key: string): boolean;
        isLiteral(exp: string): boolean;
        isReserved(str: string): boolean;
        _toString(value: any): string;
        toNumber<T>(value: T): T | number;
        toBoolean<T>(value: T): T | boolean;
        stripQuotes(str: string): string;
        camelize(str: string): string;
        hyphenate(str: string): string;
        classify(str: string): string;
        bind(fn: Function, ctx: Object): Function;
        toAarray<T>(list: ArrayLike<T>, start?: number): Array<T>;
        extend<T, F>(to: T, from: F): (T & F);
        isObject(obj: any): boolean;
        isPlainObject(obj: any): boolean;
        isArray: typeof Array.isArray;
        def(obj: Object, key: string, value: any, enumerable?: boolean): void;
        debounce(func: Function, wait: number): Function;
        indexOf<T>(arr: Array<T>, obj: T): number;
        cancellable(fn: Function): Function;
        looseEqual(a: any, b: any): boolean;
        // util/env.js
        hasProto: boolean;
        inBrowser: boolean;
        isIE9: boolean;
        isAndroid: boolean;
        transitionProp: string;
        transitionEndEvent: string;
        animationProp: string;
        animationEndEvent: string;
        nextTick(cb: Function, ctx?: Object): void;
        // util/dom.js
        query(el: string | Element): Element;
        inDoc(node: Node): boolean;
        getAttr(node: Node, _attr: string): string;
        getBindAttr(node: Node, name: string): string;
        before(el: Element, target: Element): void;
        after(el: Element, target: Element): void;
        remove(el: Element): void;
        prepend(el: Element, target: Element): void;
        replace(target: Element, el: Element): void;
        on(el: Element, event: string, cb: Function): void;
        off(el: Element, event: string, cb: Function): void;
        addClass(el: Element, cls: string): void;
        removeClass(el: Element, cls: string): void;
        extractContent(el: Element, asFragment: boolean): (HTMLDivElement | DocumentFragment);
        trimNode(node: Node): void;
        isTemplate(el: Element): boolean;
        createAnchor(content: string, persist: boolean): (Comment | Text);
        findRef(node: Element): string;
        mapNodeRange(node: Node, end: Node, op: Function): void;
        removeNodeRange(start: Node, end: Node, vm: any, frag: DocumentFragment, cb: Function): void;
        // util/options.js
        mergeOptions<P, C>(parent: P, child: C, vm?: any): (P & C);
        resolveAsset(options: Object, type: string, id: string): (Object | Function);
        assertAsset(val: any, type: string, id: string): void;
        // util/component.js
        commonTagRE: RegExp;
        checkComponentAttr(el: Element, options?: Object): Object;
        initProp(vm: Vue, prop: Object, value: any): void;
        assertProp(prop: Object, value: any): boolean;
        // util/debug.js
        warn(msg: string, e?: Error): void;
        // observer/index.js
        defineReactive(obj: Object, key: string, val: any): void;
    }

    // instance/api/global.js
    interface VueStatic {
        new (options?: ComponentOption): Vue;
        prototype: Vue;
        util: VueUtil;
        config: VueConfig;
        set(object: Object, key: string, value: any): void;
        delete(object: Object, key: string): void;
        nextTick(callback: Function): any;

        cid: number;

        extend(options?: ComponentOption): VueStatic;
        use(callback: Function | { install: Function, [key: string]: any }, option?: Object): VueStatic;
        mixin(mixin: Object): void;

        directive<T extends (Function | DirectiveOption)>(id: string, definition: T): T;
        directive(id: string): any;
        elementDirective<T extends (Function | DirectiveOption)>(id: string, definition: T): T;
        elementDirective(id: string): any;
        filter<T extends (Function | FilterOption)>(id: string, definition: T): T;
        filter(id: string): any;
        component(id: string, definition: ComponentOption): any;
        component(id: string): any;
        transition<T extends TransitionOption>(id: string, hooks: T): T;
        transition(id: string): TransitionOption;
        partial(id: string, partial: string): string;
        partial(id: string): string;
    }
}

declare var Vue: vuejs.VueStatic;

declare module "vue" {
    export = Vue;
}
