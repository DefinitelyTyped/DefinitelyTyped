/*~ If this module has methods, declare them as functions like so.
 */
export function charset(name: "numbers" | "alphabetic" | "alphanumeric"): string;
export function generate(config?: generatorConfig): string[];

/*~ You can declare types that are available via importing the module */
export interface generatorConfig {
    length?: number | undefined;
    count?: number | undefined;
    charset?: string | undefined;
    prefix?: string | undefined;
    postfix?: string | undefined;
    pattern?: string | undefined;
}
