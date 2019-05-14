// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#active-line

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

    interface Hint {
        sql: HintFunction<SqlHintOptions>;
    }

    var hint: Hint;
}
