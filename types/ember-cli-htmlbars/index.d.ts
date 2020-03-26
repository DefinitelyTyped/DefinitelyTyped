// Type definitions for ember-cli-htmlbars 4.2
// Project: https://github.com/ember-cli/ember-cli-htmlbars
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
//                 Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Using the same "brand" as the types for `htmlbars-inline-precompile` for
// backwards compatibility. The actual value of the brand doesn't matter; it is
// only important that it (a) is distinct and (b) interoperates with existing
// uses of the `hbs` export from `htmlbars-inline-precompile`.
export interface TemplateFactory {
    __htmlbars_inline_precompile_template_factory: any;
}

export function hbs(tagged: TemplateStringsArray): TemplateFactory;
