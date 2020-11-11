// Type definitions for json-templates 3.0
// Project: https://github.com/datavis-tech/json-templates
// Definitions by: Nicolas Witczak <https://github.com/nicolas800>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function parse(atemplate: string | object): { parameters: [{ key: string; defaultValue: string }] } & ((parameters?: object) => string) ;
export = parse ;
