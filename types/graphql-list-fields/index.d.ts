import { GraphQLResolveInfo } from "graphql";

declare function getFieldList(info: GraphQLResolveInfo): string[];

export = getFieldList;
