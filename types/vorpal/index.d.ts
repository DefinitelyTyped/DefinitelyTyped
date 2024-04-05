declare class Vorpal {
    parse(argv: readonly string[], opts?: Vorpal.ParseOpts): this;
    delimiter(value: string): this;
    show(): this;
    hide(): this;
    find(command: string): Vorpal.Command;
    exec(command: string): Promise<{}>;
    execSync(command: string): Promise<{}>;
    log(value: string, ...values: string[]): this;
    history(id: string): this;
    localStorage(id: string): object;
    help(value: (cmd: string) => string): this;
    pipe(value: (stdout: string) => string): this;
    use(extension: Vorpal.Extension): this;
    catch(command: string, description?: string): Vorpal.Catch;
    command(command: string, description?: string): Vorpal.Command;
    version(version: string): this;
    sigint(value: () => void): this;
    ui: Vorpal.UI;
    activeCommand: Vorpal.CommandInstance;
}

declare namespace Vorpal {
    interface Args {
        [key: string]: any;
        options: {
            [key: string]: any;
        };
    }

    interface ParseOpts {
        use?: "minimist";
    }

    interface PromptObject {
        [key: string]: any;
    }

    type Action = (args: Args) => Promise<void>;
    type Cancel = () => void;

    class Command {
        _name: string;
        _fn: Action;
        _cancel: Cancel | undefined;
        alias(command: string): this;
        parse(value: (command: string, args: Args) => string): this;
        option(option: string, description: string, autocomplete?: readonly string[]): this;
        types(types: { string?: readonly string[] | undefined }): this;
        hidden(): this;
        remove(): this;
        help(value: (args: Args) => void): this;
        validate(value: (args: Args) => boolean | string): this;
        autocomplete(values: readonly string[] | { data: () => Promise<readonly string[]> }): this;
        action(action: Action): this;
        cancel(cancel: Cancel): this;
        allowUnknownOptions(): this;
    }

    class Catch extends Command {}

    class Extension {}

    class UI {
        delimiter(text?: string): string;
        input(text?: string): string;
        imprint(): void;
        submit(command: string): string;
        cancel(): void;
        redraw: {
            (text: string, ...texts: string[]): void;
            clear(): void;
            done(): void;
        };
    }

    class CommandInstance {
        log(value: string, ...values: string[]): void;
        prompt(prompt: object | readonly object[]): Promise<PromptObject>;
        delimiter(value: string): void;
    }
}

export = Vorpal;
