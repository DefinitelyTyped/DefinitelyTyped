// Type definitions for sql-tagged-template-literal 1.2
// Project: https://github.com/TehShrike/sql-tagged-template-literal#readme
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function sqlTag(queryParts: TemplateStringsArray, ...values: readonly unknown[]): string;

export = sqlTag;
