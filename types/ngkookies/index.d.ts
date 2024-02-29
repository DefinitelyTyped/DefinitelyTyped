declare namespace angular.kookies {
    type Options = {
        expires?: number | Date | undefined;
        path?: string | undefined;
        domain?: string | undefined;
        secure?: boolean | undefined;
    };

    interface IKookiesService {
        set(name: string, value: string, optopns?: Options): void;
        get(): any;
        get(name: string): any;
        get(name: string, converter: any): any;
        get<T>(name: string, converter: any): T;
        remove(name: string, options?: Options): boolean;
    }

    type Config = { raw?: boolean | undefined; json?: boolean | undefined };

    interface IKookiesProvider {
        config: Config;
        setConfig(config: Config): void;
        defaults: Options;
        setDefaults(options: Options): void;
    }
}
