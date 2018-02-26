declare namespace adone {
    namespace application {
        namespace I {
            type ArgumentType = ((x: string, index: number) => any) | RegExp;

            interface ArgumentInfo {
                name: string | string[];
                action?: "store"
                    | "store_const"
                    | "store_true"
                    | "store_false"
                    | "append"
                    | "count"
                    | "set";
                nargs?: number | "+" | "*" | "?"
                type?: ArgumentType | ArgumentType[];
                verify?: (args: any, opts: any) => boolean; // TODO
                required?: boolean;
                description?: string;
                help?: string;
                holder?: string | string[];
                appendDefaultMessage?: boolean;
                appendChoicesHelpMessage?: boolean;
                default?: any;
                enabled?: boolean;
            }

            interface Group {
                name: string;
                description?: string;
            }

            interface MainCommandInfo {
                arguments?: Array<ArgumentInfo | string>;
                options?: Array<ArgumentInfo | string>;
                description?: string;
                optionsGroups?: Group[];
                blindMode?: boolean;
                match?: (name: string) => boolean;
                handler?: (args: object, opts: object) => void;
            }

            interface CommandInfo extends MainCommandInfo {
                name?: string | string[];
                group?: string;
            }

            interface ApplicationInfo {
                name?: string;
                description?: string;
                subsystems?: SubsystemInfo[];
                commandsGroups?: Group[]
            }

            interface SubsystemInfo {
                name: string;
                description?: string;
                subsystem: string;
                transpile?: boolean;
                group?: string;
            }
        }

        function DSubsystem(info?: I.ApplicationInfo): (...args: any[]) => void;

        function DApplication(info?: I.ApplicationInfo): (...args: any[]) => void;

        function DCliCommand(info?: I.CommandInfo): (...args: any[]) => void;

        function DMainCliCommand(info?: I.MainCommandInfo): (...args: any[]) => void;

        namespace I {
            interface LoadSubsystemOptions {
                name?: string,
                description?: string,
                group?: string,
                transpile?: boolean
            }

            interface CommonAddSubsystemInfo {
                name?: string,
                useFilename?: boolean
                description?: string,
                group?: string,
                configureArgs?: any[]
                transpile?: boolean,
                bind?: boolean | string
            }

            interface AddSubsystemInfo extends CommonAddSubsystemInfo {
                subsystem: Subsystem | string,
            }

            interface SysInfo {
                name: string;
                description: string;
                group: string;
                configureArgs: any[];
                instance: Subsystem;
                path: string | null;
            }

            interface SysInfoWithPath extends SysInfo {
                path: string;
            }

            interface SysInfoNoPath extends SysInfo {
                path: null;
            }

            interface AddSubsystemsFromOptions extends CommonAddSubsystemInfo {
                filter?: string[] | ((file: string) => boolean | Promise<boolean>)
            }
        }

        class Subsystem extends event.AsyncEmitter {
            constructor(options?: { name?: string });

            readonly name?: string;

            readonly root?: Subsystem;

            setRoot(root: Subsystem): void;

            readonly parent?: Subsystem;

            readonly state: number;

            readonly isOwned: boolean;

            setState(state: number): void;

            waitForState(expectedState: number, timeout?: number): Promise<void>;

            configure(): void;

            initialize(): void;

            uninitialize(): void;

            configureSubsystems(): Promise<void>;

            uninitializeSubsystems(): Promise<void>;

            reinitializeSubsystems(): Promise<void>;

            configureSubsystem(name: string): Promise<void>;

            loadSubsystem(subsystem: string | Subsystem, options?: I.LoadSubsystemOptions): Promise<void>;

            unloadSubsystem(name: string): Promise<void>;

            initializeSubsystem(name: string): Promise<void>;

            uninitializeSubsystem(name: string): Promise<void>;

            reinitializeSubsystem(name: string): Promise<void>;

            getSubsystem(name: string): Subsystem;

            hasSubsystem(name: string): boolean;

            hasSubsystems(): boolean;

            addSubsystem(info: I.AddSubsystemInfo & { subsystem: Subsystem }): I.SysInfoNoPath;
            addSubsystem(info: I.AddSubsystemInfo & { subsystem: string }): I.SysInfoWithPath;

            addSubsystemsFrom(path: string, options?: I.AddSubsystemsFromOptions): I.SysInfoWithPath;

            instantiateSubsystem(subsystem: string | Subsystem, options?: {
                transpile?: boolean
            }): Subsystem;

            deleteSubsystem(name: string, force?: boolean): void;

            getSubsystemInfo(name: string): I.SysInfo;

            getSubsystems(): I.SysInfo[];
        }

        namespace I {
            interface ReportOptions {
                events?: string;
                signal?: string;
                filename?: string;
                directory?: string;
            }
        }

        class Application extends Subsystem {
            readonly isMain: boolean;

            main(): void;

            enableReport(opts?: I.ReportOptions): void;

            reportEnabled(): boolean;

            run(): Promise<void>;

            exit(code?: number): Promise<void>;

            exitOnSignal(...names: string[]): void;

            removeProcesshandlers(): void;

            _uncaughtException(err: any): void;

            _unhandledRejection(reson: any, p: Promise<any>): void;

            _rejectionHandled(p: Promise<any>): void;

            _signalExit(sigName: string): void;

        }

        namespace I {
            interface Command {
                // ?
            }

            interface Argument {
                // ?
            }

            interface PositionalArgument extends Argument {
                // ?
            }

            interface OptionalArgument extends Argument {
                // ?
            }

            interface DefineCommandFromSubsystemOptions {
                name?: string;
                description?: string;
                group?: string;
                subsystem: string | Subsystem;
                configureArgs?: any[];
                lazily?: boolean;
                transpile?: boolean;
            }
        }

        class CliApplication extends Application {
            run(options?: { ignoreArgs?: boolean }): Promise<void>;

            getVersion(): Promise<string | undefined>;

            exposeCliInterface(ctxId?: string): void;

            readonly mainCommand: I.Command;

            defineMainCommand(schema: I.MainCommandInfo): this;

            defineArguments(schema: I.MainCommandInfo): this;

            defineCommand(schema: I.CommandInfo): I.Command;

            defineCommandFromSubsystem(options?: I.DefineCommandFromSubsystemOptions): void;

            defineOption(schema: I.ArgumentInfo): void;

            defineOptionsGroup(schema: I.Group): void;

            defineCommandsGroup(schema: I.Group): void;

            option(path: string, options?: { value?: boolean }): any;
        }

        function run(app: Application, ignoreArgs?: boolean): Promise<void>;

        function runCli(app: CliApplication, ignoreArgs?: boolean): Promise<void>;
    }
}
