// Type definitions for doT 1.1
// Project: http://github.com/olado/dot
// Definitions by: ZombieHunter <https://github.com/ZombieHunter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace doT;

/** Version number */
export const version: string;

/** Template settings */
export let templateSettings: TemplateSettings;

export type RenderFunction = (...args: any[]) => string;

/** Compile template */
export function template(tmpl: string, c?: TemplateSettings, def?: {}): RenderFunction;

/** For express */
export function compile(tmpl: string, def?: {}): RenderFunction;

export interface TemplateSettings {
    evaluate: RegExp;
    interpolate: RegExp;
    encode: RegExp;
    use: RegExp;
    useParams: RegExp;
    define: RegExp;
    defineParams: RegExp;
    conditional: RegExp;
    iterate: RegExp;
    varname: string;
    strip: boolean;
    append: boolean;
    selfcontained: boolean;
}

declare global {
    interface String {
        encodeHTML(): string;
    }
}
