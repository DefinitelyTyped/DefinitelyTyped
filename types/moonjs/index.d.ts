// Type definitions for moonjs 0.9
// Project: https://github.com/KingPixil/moon
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace Moon {
    export interface Moon<Data> {
        get<K extends keyof Data>(name: K): Data[K];
        set<K extends keyof Data>(name: K, value: Data[K]): void;

        callMethod<K extends keyof Data>(methodName: K, params?: any[]): any;

        mount(selector: string): void;
        destroy(): void;
        build(): void;
        on(eventName: string, listener: (event: Event) => void): void;
        off(eventName?: string, listener?: (event: Event) => void): void;
        emit(eventName: string, data?: any): void;

        $data: Data;
    }

    export interface MoonConstructor {
        new <Props extends string, Data, Methods>(options?: ThisAwareComponentOptions<Props, Data, Methods>): Moon<Data & Methods>;
    }

    export interface MoonStatic extends MoonConstructor {
        component<Props extends string, Data, Methods>(name: string, options: ThisAwareComponentOptions<Props, Data, Methods>): MoonConstructor;
        config: MoonConfig;
        use(plugin: object): void;
        compile(template: string): void;
        nextTick(callback: () => void): void;
        directive(name: string, action: (el: any, val: any) => void): void;
    }

    export type ThisAwareComponentOptions<Props extends string, Data, Methods> =
        & ComponentOptions<Props, Data, Methods>
        & ThisType<Moon<Data & Methods>>;

    export interface ComponentOptions<Props extends string, Data, Methods> {
        el?: string;
        template?: string;
        name?: string;

        functional?: true;
        props?: Props[];
        data?: Data;
        methods?: Methods;
        hooks?: LifecycleHooks;
        render?(h: CreateElement, ctx: any): VDomElement;
    }

    export interface CreateElement {
        (tag: "#text", attrs: Record<string, any>, metadata?: any, children?: string): VDomElement;
        (tag: string | Moon<object>, attrs: Record<string, any>, metadata?: any, children?: string | VDomElement[]): VDomElement;
    }

    export interface VDomElement {
        type: string;
        val: string;
        props: Record<string, any>;
        meta: object;
        children: VDomElement[];
    }

    export interface LifecycleHooks {
        init?(): void;
        mounted?(): void;
        updated?(): void;
        destroyed?(): void;
    }

    export interface MoonConfig {
        silent: boolean;
        prefix: string;
        keycodes(codemap: Record<string, number>): void;
        delimiters: string[];
        version: string;
    }
}

// Declared as a module.
declare var Moon: Moon.MoonStatic;
export = Moon;

// Also available as a global.
export as namespace Moon;
