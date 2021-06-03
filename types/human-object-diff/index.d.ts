// Type definitions for human-object-diff 2.0
// Project: https://github.com/Spence-S/human-object-diff
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace DiffEngine {
    type TemplateType = "N" | "D" | "E" | "I" | "R" | "AE" | "NS" | "DS" | "ES" | "IS" | "RS" | "AES";
    type PathPredicate = (path: Array<string | number>, key: string | number) => boolean;
    interface Options {
        /**
         * @default 'MM/dd/yyyy hh:mm a'
         */
        dateFormat?: string;

        prefilter: string[] | PathPredicate | undefined;
        /**
         * @default 'Obj'
         */
        objectName?: string;
        /**
         * @default false
         */
        ignoreArrays?: boolean;
        /**
         * @default []
         */
        sensitivePaths?: string[];
        /**
         * @default false
         */
        dontHumanizePropertyNames?: boolean;
        templates?: Record<TemplateType, string>;
    }
}

declare class DiffEngine {
    readonly config: Required<DiffEngine.Options>;
    readonly templates: Record<DiffEngine.TemplateType, string>;
    readonly sentenceDiffs: string[];
    readonly sentences: string[];

    constructor(config?: DiffEngine.Options);

    // tslint:disable-next-line:no-unnecessary-generics
    diff<LHS, RHS = LHS>(lhs: LHS, rhs: RHS): DiffEngine["sentenceDiffs"];
}

export = DiffEngine;
