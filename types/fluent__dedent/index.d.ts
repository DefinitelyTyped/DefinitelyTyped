// Type definitions for @fluent/dedent 0.1
// Project: http://projectfluent.org
// Definitions by: Mark Weaver <https://github.com/blushingpenguin>, Huy Nguyen <https://github.com/huy-nguyen>, James Nimlos <https://github.com/jamesnimlos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

declare function FluentDedent(strings: TemplateStringsArray, ...values: any[]): string;

export = FluentDedent;

export as namespace FluentDedent;
