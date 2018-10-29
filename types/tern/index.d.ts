// Type definitions for tern
// Project: https://github.com/ternjs/tern
// Definitions by: Nikolaj Kappler <https://github.com/nkappler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "tern" {
    import * as infer from "tern/lib/infer";
    import * as tern from "tern/lib/tern";
    const t: typeof tern & typeof infer;
    export = t;
}
