// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_xml-hint

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface XmlHintOptions {
        schemaInfo?: object;
        quoteChar?: string;
    }

    interface HintHelper {
        xml: HintFunction<XmlHintOptions>;
    }
}
