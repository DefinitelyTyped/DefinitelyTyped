/**
 * NAMESPACE
 */
declare namespace StringTemplate {
    /**
     * Format
     */
    interface Format {
        // Format using an object hash with keys matching [0-9a-zA-Z]+
        (string: string, object: any): string;
        // Format using a number indexed array
        (string: string, array: any[]): string;
        // Format using optional arguments
        (string: string, ...array: any[]): string;
        // Escape {} pairs by using double {{}}
        (string: string): string;
    }

    /**
     * Compile
     */
    interface Compile {
        (string: string, inline?: boolean): Template;
    }

    interface Template {
        (object: any): string;
        (array: any[]): string;
        (...array: any[]): string;
    }
}

/**
 * MODULES
 */
declare module "string-template" {
    const format: StringTemplate.Format;
    export = format;
}

declare module "string-template/compile" {
    const comile: StringTemplate.Compile;
    export = comile;
}
