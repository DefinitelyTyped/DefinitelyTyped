declare var testRule: JestPresetStylelint.TestRule;

declare namespace JestPresetStylelint {
    interface TestRule {
        (schema: Schema): void;
    }

    interface Schema {
        plugins: string[];
        ruleName: string;
        config?: any;
        fix?: boolean | undefined;
        skipBasicChecks?: boolean | undefined;
        syntax?: Syntax | undefined;
        accept?: Case[] | undefined;
        reject?: RejectCase[] | undefined;
    }

    type Syntax =
        | "css-in-js"
        | "html"
        | "less"
        | "markdown"
        | "sass"
        | "scss"
        | "sugarss";

    interface Case {
        code: string;
        description?: string | undefined;
    }

    interface Report {
        message?: string | undefined;
        line?: number | undefined;
        column?: number | undefined;
    }

    interface RejectCase extends Case, Report {
        fixed?: string | undefined;
        only?: boolean | undefined;
        warnings?: Report[] | undefined;
    }
}
