// Type definitions for KSS 3.0.0-beta
// Project: https://github.com/kss-node/kss-node
// Definitions by: Gilad Gray <https://github.com/giladgray>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Builds a styleguide given the proper options. */
declare function kss(options?: kss.IKssOptions): Promise<kss.KssStyleguide>;
declare namespace kss {
    interface IFile {
        /** bath to source directory */
        base: string;
        /** file contents */
        contents: string;
        /** full path to file */
        path: string;
    }

    interface ISource {
        /** The name of the file. */
        filename: string;
        /** The full path of the file. */
        path: string;
        /** The line number where the KSS comment is found. */
        line: number;
    }

    interface IOptions {
        /**
         * Whether to automatically format Markdown using [marked](https://github.com/chjj/marked).
         * Enabled by default.
         * @default true
         */
        markdown?: boolean;
        /**
         * Use a regex or string (e.g. `*.less|*.css`) to only parse files matching this value.
         * @default *.css|*.less|*.sass|*.scss|*.styl|*.stylus
         */
        mask?: string | RegExp;
        /**
         * kss-node makes the header available separately from the description. To make kss-node
         * behave like the Ruby KSS, disable this option and the title will remain a part of the
         * description. Enabled by default.
         * @default true.
         */
        header?: boolean;
    }

    interface IKssOptions extends IOptions {
        builder?: any;
        clone?: boolean;
        custom?: any;
        logErrorFunction?: (...msg: string[]) => void;
        json?: boolean;
        mask?: string | RegExp;
        source: string[];
        verbose?: boolean;
    }

    type CallbackFn = (error: Error | null, styleguide: KssStyleguide) => void;

    class KssStyleguide {
        constructor(data?: object);
        autoInit(autoInit: boolean): KssStyleguide;
        customPropertyNames(): string[];
        customPropertyNames(names: string | string[]): KssStyleguide;
        hasNumericReferences(): boolean;
        init(): KssStyleguide;
        referenceDelimiter(): string;
        sections(): KssSection[];
        sections(query: string | RegExp): false | KssSection | KssSection[];
        sections(sections: KssSection | KssSection[]): KssStyleguide;
        toJSON(): object;
    }

    class KssSection {
        constructor(data?: object);
        custom(name: string): any;
        custom(name: string, value: any): KssSection;
        customPropertyNames(): string[];
        deprecated(): boolean;
        deprecated(deprecated: boolean): KssSection;
        depth(): number;
        depth(depth: number): KssSection;
        description(): string;
        description(description: string): KssSection;
        experimental(): boolean;
        experimental(experimental: boolean): KssSection;
        header(): string;
        header(header: string): KssSection;
        markup(): false | string;
        markup(markup: string): KssSection;
        modifiers(): KssModifier[];
        modifiers(query: number | string): false | KssModifier;
        modifiers(modifiers: KssModifier | KssModifier[]): KssSection;
        parameters(): KssParameter[];
        parameters(query: number | string): false | KssParameter;
        parameters(parameters: KssParameter | KssParameter[]): KssSection;
        reference(): string;
        reference(reference: string): KssSection;
        referenceNumber(): string;
        referenceNumber(referenceNumber: string): KssSection;
        referenceURI(): string;
        referenceURI(referenceURI: string): KssSection;
        source(): ISource;
        source(source: ISource): KssSection;
        sourceFileName(): string;
        sourceLine(): string;
        styleGuide(): KssStyleguide;
        styleGuide(styleguide: KssStyleguide): KssSection;
        toJSON(): object;
        weight(): number;
        weight(weight: number): KssSection;
    }

    class KssModifier {
        constructor(data?: object);
        className(): string;
        className(className: string): KssModifier;
        description(): string;
        description(description: string): KssModifier;
        markup(): string;
        markup(markup: string): KssModifier;
        name(): string;
        name(name: string): KssModifier;
        section(): KssSection;
        section(section: KssSection): KssModifier;
        toJSON(): object;
    }

    class KssParameter {
        constructor(data?: object);
        defaultValue(): string;
        description(): string;
        description(description: string): KssParameter;
        name(): string;
        name(name: string): KssParameter;
        section(): KssSection;
        section(section: KssSection): KssParameter;
        toJSON(): object;
    }

    /** Parse a string of documented CSS, or an array of file objects with their content. */
    function parse(input: string | IFile[], options: IOptions): KssStyleguide;

    /** Traverse a directory, parse its contents, and create a `KssStyleGuide`. */
    function traverse(directory: string | string[], options: IOptions): Promise<KssStyleguide>;
}

export = kss;
