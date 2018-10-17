// Type definitions for graphql-list-fields 2.0
// Project: https://github.com/jakepusateri/graphql-list-fields#readme
// Definitions by: Chris Filipowski <https://github.com/filipows>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { GraphQLResolveInfo } from "graphql";

declare function getFieldList(info: GraphQLResolveInfo): string[];

export = getFieldList;
