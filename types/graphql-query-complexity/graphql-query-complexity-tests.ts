import QueryComplexity from "graphql-query-complexity/dist/QueryComplexity";

const complexity = new QueryComplexity(null as any, null as any);
complexity.createError().message; // $ExpectType string
