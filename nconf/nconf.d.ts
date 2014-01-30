declare module nconf_module
{
    enum formats {
        json,
        ini
    }

    interface IOptions
    {
        type?: string;
    }

    interface IFileOptions extends IOptions
    {
        file?: string;
        dir?: string;
        search?: boolean;
        json_spacing?: number;
    }


    interface ICallbackFunction
    { (err?:any); }

    class Provider
    {
        constructor(options:IOptions);

        stores:any;
        sources:any[];

        clear(key:string, callback?:ICallbackFunction):any;

        get(key:string, callback?:ICallbackFunction):any;

        merge(key:string, value:any, callback?:ICallbackFunction):any;

        set(key:string, value:any, callback?:ICallbackFunction):any;

        reset(callback?:ICallbackFunction):any;

        load(callback?:ICallbackFunction):any;

        mergeSources(data:any):void;

        loadSources():any;

        save(value:any, callback?:ICallbackFunction):any;

        add(name:string, options?:IOptions):Provider;

        argv(options?:IOptions):Provider;

        env(options?:IOptions):Provider;

        file(name:string, options?:IFileOptions):Provider;

        file(options:IFileOptions):Provider;

        use(name:string, options?:IOptions):Provider;

        defaults(options?:IOptions):Provider;

        init(options?:IOptions):void;

        overrides(options?:IOptions):Provider;

        remove(name:string):void;

        create(name:string, options:IOptions):IStore;
    }

    interface IStore
    {
        type: string;
        get (key:string): any;
        set (key:string, value:any): boolean;
        clear(key:string): boolean;
        merge(key:string, value:any): boolean;
        reset(callback?:ICallbackFunction): boolean;
    }
}

interface NconfStatic
{
    clear(key:string, callback?:nconf_module.ICallbackFunction): any;
    get (key:string, callback?:nconf_module.ICallbackFunction): any;
    merge(key:string, value:any, callback?:nconf_module.ICallbackFunction): any;
    set (key:string, value:any, callback?:nconf_module.ICallbackFunction): any;
    reset(callback?:nconf_module.ICallbackFunction): any;

    load(callback?:nconf_module.ICallbackFunction): any;
    mergeSources(data:any): void;
    loadSources(): any;
    save(value:any, callback?:nconf_module.ICallbackFunction): any;

    add(name:string, options?:nconf_module.IOptions): nconf_module.Provider;
    argv(options?:nconf_module.IOptions): nconf_module.Provider;
    env(options?:nconf_module.IOptions): nconf_module.Provider;
    file(name:string, options?:nconf_module.IFileOptions): nconf_module.Provider;
    file(options:nconf_module.IFileOptions): nconf_module.Provider;
    use(name:string, options?:nconf_module.IOptions): nconf_module.Provider;
    defaults(options?:nconf_module.IOptions): nconf_module.Provider;
    init(options?:nconf_module.IOptions): void;
    overrides(options?:nconf_module.IOptions): nconf_module.Provider;
    remove(name:string): void;
    create(name:string, options:nconf_module.IOptions): nconf_module.IStore;

    key(...values:any[]): string;
    path(key:any): any[];
    loadFiles(files:any, callback?:nconf_module.ICallbackFunction);
    loadFilesSync(files:any, callback?:nconf_module.ICallbackFunction);
}

declare var nconf:NconfStatic;
