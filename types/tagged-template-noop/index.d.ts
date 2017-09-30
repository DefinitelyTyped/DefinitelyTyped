// Type definitions for tagged-template-noop 2.0
// Project: https://github.com/lleaff/tagged-template-noop#readme
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = tagged_template_noop;

declare function tagged_template_noop(
    strings: TemplateStringsArray,
    ...interpolations: any[]
): string;
