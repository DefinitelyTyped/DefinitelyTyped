import { IncomingMessage } from "http";
import { DefaultOptions, EmitData, EventData, Fields, File, Files, Options, Part, PluginFunction } from "./";
declare class IncomingForm {
    static readonly DEFAULT_OPTIONS: DefaultOptions;
    constructor(options?: Partial<Options>);

    /**
     * Parses an incoming Node.js request containing form data. If callback is provided, all fields
     * and files are collected and passed to the callback.
     *
     * @link https://github.com/node-formidable/formidable#parserequest-callback
     */
    parse(request: IncomingMessage, callback: (err: any, fields: Fields, files: Files) => void): void;

    once(name: "end", callback: () => void): void;
    once(name: "error", callback: (err: any) => void): void;

    on(name: "data", callback: (data: EventData) => void): void;
    on(name: "error", callback: (err: any) => void): void;
    on(name: "field", callback: (name: string, value: string) => void): void;
    on(name: "fileBegin" | "file", callback: (formName: string, file: File) => void): void;
    on(name: "progress", callback: (bytesReceived: number, bytesExpected: number) => void): void;
    on(name: string, callback: () => void): void;

    emit(name: "data", data: EmitData): void;

    /**
     * A method that allows you to extend the Formidable library. By default we include 4 plugins,
     * which essentially are adapters to plug the different built-in parsers.
     *
     * @link https://github.com/node-formidable/formidable#useplugin-plugin
     */
    use(plugin: PluginFunction): void;

    /**
     * If you want to use Formidable to only handle certain parts for you, you can do something
     * similar. Or see #387 for inspiration, you can for example validate the mime-type.
     *
     * @link https://github.com/node-formidable/formidable#formonpart
     */
    onPart(part: Part): void;

    handlePart(part: Part): void;
}

export = IncomingForm;
