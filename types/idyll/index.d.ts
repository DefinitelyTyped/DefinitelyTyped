import { EventEmitter } from "events";
import { Options as CompilerOptions } from "idyll-compiler";

interface Options {
    /**
     * Monitor input files and rebuild on changes
     */
    watch?: boolean | undefined;
    /**
     * The datasets directory
     */
    datasets?: string | undefined;
    /**
     * Whether to minify output build
     */
    minify?: boolean | undefined;
    /**
     * Pre-render HTML as part of the build
     */
    ssr?: boolean | undefined;
    /**
     * The components directory
     */
    components?: boolean | undefined;
    /**
     * The default component directory
     * This corresponds to where the idyll-components package stays
     */
    defaultComponents?: boolean | undefined;
    /**
     * The layout defined in idyll-layouts package
     */
    layout?: string | undefined;
    /**
     * The theme defined in idyll-theme package
     */
    theme?: string | undefined;
    /**
     * The output directory for compiled documents
     */
    output?: string | undefined;
    /**
     * Custom port to bind the local server to.
     */
    port?: number | undefined;
    /**
     * Temporary directory used by idyll
     */
    temp?: string | undefined;
    /**
     * path to HTML template
     */
    template?: string | undefined;

    /**
     * Custom CSS file to include in output
     */
    css?: string | undefined;
    /**
     * Custom browserify transforms to apply.
     */
    transform?: string[] | undefined;
    /**
     * Compiler options
     */
    compiler?: CompilerOptions | undefined;
    /**
     * the idyll file to be compiled into
     */
    inputFile?: string | undefined;

    /**
     * used internally by IdyllInstance
     */
    inputConfig?: {
        components: any;
        transform: any[];
        compiler: CompilerOptions;
    } | undefined;
}

type PredefinedFile =
    | "APP_PATH"
    | "CSS_INPUT_FILE"
    | "DATA_DIR"
    | "HTML_TEMPLATE_FILE"
    | "IDYLL_INPUT_FILE"
    | "INPUT_DIR"
    | "PACKAGE_FILE"
    | "OUTPUT_DIR"
    | "TMP_DIR"
    | "CSS_OUTPUT_FILE"
    | "HTML_OUTPUT_FILE"
    | "JS_OUTPUT_FILE";

type ComponentFiles = "COMPONENT_DIRS" | "DEFAULT_COMPONENT_DIRS";

type Paths = Record<PredefinedFile, string> & Record<ComponentFiles, string[]>;

declare class IdyllInstance extends EventEmitter {
    /**
     * Returns internal paths used by idyll-cli
     */
    getPaths(): Paths;
    /**
     * Returns idyll compiling's options
     */
    getOptions(): Options;
    /**
     * if indexIdyllMarkup is provided, compiles it
     *
     * Otherwise, compiles and optionally watches
     * the idyll file at IOptions.inputFile
     */
    build(indexIdyllMarkup?: string | null): this;
}

declare function idyll(options: Options, callback?: () => void): IdyllInstance;

export = idyll;
