import { AttributeMemberType } from "webidl2";

declare class Transformer {
    constructor(opts?: Transformer.Options);

    /**
     * @param idl The WebIDL file or directory of WebIDL files
     *        to generate wrappers for.
     * @param impl The directory containing implementation files
     *        for the provided WebIDL file(s).
     */
    addSource(idl: string, impl: string): this;

    /**
     * Generates WebIDL2JS wrapper classes for the supplied WebIDL file(s)
     * in the supplied output directory.
     *
     * @param outputDir The directory where WebIDL2JS wrappers will be generated in.
     * @return A promise that will be resolved once all files have been written,
     *         or rejected if an error was encountered.
     */
    generate(outputDir: string): Promise<void>;
}

declare namespace Transformer {
    interface ProcessorContext {
        /**
         * @param specifier The import specifier.
         * @param property The imported property, when undefined or empty,
         *        then the whole module namespace will be imported.
         * @return The identifier referring to this imported value.
         */
        addImport(specifier: string, property?: string): string;
    }

    type CodeProcessor = (this: ProcessorContext, code: string) => string;

    type AttributeProcessor = (
        this: ProcessorContext,
        idl: AttributeMemberType,
        implName: string,
    ) => {
        get: string;
        set: string;
    };

    interface Options {
        /**
         * The optional suffix present on implementation files.
         *
         * @default ""
         */
        implSuffix?: string | undefined;

        /**
         * The function used to modify attributes and operations
         * with the `[CEReactions]` extended attribute.
         *
         * The default value is the identity function.
         */
        processCEReactions?: CodeProcessor | undefined;

        /**
         * The function used to modify attributes and operations
         * with the `[HTMLConstructor]` extended attribute.
         *
         * The default value is the identity function.
         */
        processHTMLConstructor?: CodeProcessor | undefined;

        /**
         * The function used to generate attributes and operations
         * with the `[Reflect]` extended attribute.
         *
         * @default null
         */
        processReflect?: AttributeProcessor | null | undefined;

        /**
         * Whether non-fatal errors should be ignored.
         *
         * @default false
         */
        suppressErrors?: boolean | undefined;
    }
}

export = Transformer;
