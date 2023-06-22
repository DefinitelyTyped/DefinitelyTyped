import { createComplexityLimitRule } from "graphql-validation-complexity";
createComplexityLimitRule(1000, {
    scalarCost: 1,
    objectCost: 2,
    listFactor: 10,
    onCost: (cost) => {
        console.log('query cost:', cost);
      },
      formatErrorMessage: (cost) =>
        `query with cost ${cost} exceeds complexity limit`,
});
