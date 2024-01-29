export type JadeCustomFilterFunction = (text: string, options: {
    [key: string]: boolean;
}) => string;

export interface JadeOptions {
    filename?: string | undefined;
    basedir?: string | undefined;
    doctype?: string | undefined;
    pretty?: boolean | string | undefined;
    filters?: {
        [key: string]: JadeCustomFilterFunction;
    } | undefined;
    self?: boolean | undefined;
    debug?: boolean | undefined;
    compileDebug?: boolean | undefined;
    globals?: string[] | undefined;
    cache?: boolean | undefined;
    inlineRuntimeFunctions?: boolean | undefined;
    name?: string | undefined;
}

export interface TemplateLocals {
    [key: string]: any;
}

export type JadeGenerationFunction = (locals?: TemplateLocals) => string;

export declare function compile(template: string, options?: JadeOptions): JadeGenerationFunction;
export declare function compileFile(path: string, options?: JadeOptions): JadeGenerationFunction;
export declare function compileClient(template: string, options?: JadeOptions): JadeGenerationFunction;
export declare function compileClientWithDependenciesTracked(template: string, options?: JadeOptions): {
    body: JadeGenerationFunction;
    dependencies: string[];
};
export declare function render(template: string, options?: JadeOptions): string;
export declare function renderFile(path: string, options?: JadeOptions): string;
