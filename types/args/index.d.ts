declare var args: Args.API;
export = args;

declare namespace Args {
    export interface IMriUnknownFunction {
        (param: string): boolean
    }

    export interface IMinimistUnknownFunction {
        (param: string): boolean
    }

    export interface IMriArguments {
        args?: string[];
        alias?: {
            [key: string]: string | string[]
        };
        boolean?: string | string[];
        default?: {
            [key: string]: any
        };
        string?: string | string[];
        unknown?: IMriUnknownFunction;
    }

    export interface IMinimistArguments {
        string?: string | string[];
        boolean?: boolean | string | string[];
        alias?: {
            [key: string]: string | string[]
        };
        default?: {
            [key: string]: any
        };
        stopEarly?: boolean;
        "--"?: boolean;
        unknown?: IMinimistUnknownFunction;
    }

    export interface IOptionInitFunction {
        (value: any): any;
    }

    export interface ICommandInitFunction {
        (name: string, sub: {}[], options: {}[]): void;
    }

    export interface IUsageFilterFunction {
        (output: any): any;
    }

    export interface IConfiguration {
        help?: boolean;
        name?: string;
        version?: boolean;
        usageFilter?: IUsageFilterFunction;
        value?: string;
        mri: IMriArguments;
        minimist?: IMinimistArguments;
        mainColor: string | string[];
        subColor: string | string[];
    }

    export interface IOption {
        name: string;
        description: string;
        init?: IOptionInitFunction;
        defaultValue?: any;
    }

    export interface IExample {
        usage: string;
        description: string;
    }

    export interface API {
        sub: string[];

        option(name: string | [string, string], description: string, defaultValue?: any, init?: IOptionInitFunction): API;
        options(list: IOption[]): API;
        command(name: string, description: string, init?: ICommandInitFunction, aliases?: string[]): API;
        example(usage: string, description: string): API;
        examples(list: IExample[]): API;
        parse(argv: string[], options?: IConfiguration): { [key: string]: any };
        showHelp(): void;
    }
}
