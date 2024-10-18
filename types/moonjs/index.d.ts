declare namespace Moon {
    interface Instance<Data> {
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

    interface MoonConstructor {
        new<Props extends string = never, Data = {}, Methods = {}>(
            options?: ConstructorOptions<Props, Data, Methods>,
        ): Instance<Data & Methods & Record<Props, any>>;
    }

    interface MoonStatic extends MoonConstructor {
        component<Props extends string = never, Data = {}, Methods = {}>(
            name: string,
            options: ComponentOptions<Props, Data, Methods>,
        ): MoonConstructor;
        config: MoonConfig;
        use(plugin: object): void;
        compile(template: string): void;
        nextTick(callback: () => void): void;
        directive(name: string, action: (el: any, val: any) => void): void;
    }

    type ConstructorOptions<Props extends string, Data, Methods> =
        & ComponentOptionsProperties<Props, (() => Data) | Data, Methods>
        & ThisType<Instance<Data & Methods & Record<Props, any>>>;

    type ComponentOptions<Props extends string, Data, Methods> =
        & ComponentOptionsProperties<Props, () => Data, Methods>
        & ThisType<Instance<Data & Methods & Record<Props, any>>>;

    interface ComponentOptionsProperties<Props extends string, Data, Methods> {
        el?: string | HTMLElement | undefined;
        template?: string | undefined;
        name?: string | undefined;

        functional?: true | undefined;
        props?: Props[] | undefined;
        data?: Data | undefined;
        methods?: Methods | undefined;
        hooks?: LifecycleHooks | undefined;
        render?(h: CreateElement, ctx: any): VDomElement;
    }

    interface CreateElement {
        (tag: "#text", attrs: Record<string, any>, metadata?: any, children?: string): VDomElement;
        (
            tag: string | Instance<object>,
            attrs: Record<string, any>,
            metadata?: any,
            children?: string | VDomElement[],
        ): VDomElement;
    }

    interface VDomElement {
        type: string;
        val: string;
        props: Record<string, any>;
        meta: object;
        children: VDomElement[];
    }

    interface LifecycleHooks {
        init?(): void;
        mounted?(): void;
        updated?(): void;
        destroyed?(): void;
    }

    interface MoonConfig {
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
