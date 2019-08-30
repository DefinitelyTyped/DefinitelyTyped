
// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_sql-hint

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface Table {
        text?: string
        columns?: string[]
    }

    interface SqlHintOptions {
        tables?: { [table: string]: Table } | (string | Table)[];
        defaultTable?: string;
        disableKeywords?: string[];
    }

    interface HintHelper {
        sql: HintFunction<SqlHintOptions>;
    }
}
