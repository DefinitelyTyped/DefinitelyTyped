import QueryComplexity from "graphql-query-complexity/dist/QueryComplexity";
import complexityFunction from "graphql-query-complexity";
const complexity = new QueryComplexity(null as any, null as any);
complexity.createError().message; // $ExpectType string
complexityFunction({maximumComplexity: 10});
