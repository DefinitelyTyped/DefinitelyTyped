import graphqlDepthLimit = require("graphql-depth-limit");
import { buildSchema, DocumentNode, GraphQLSchema, parse, Source, specifiedRules, validate } from "graphql";

const schema: GraphQLSchema = buildSchema(`
  # graphql schema goes here...
`);
const document: DocumentNode = parse(
    new Source(
        `
  # graphql query goes here...
`,
        "GraphQL request",
    ),
);

validate(schema, document, [graphqlDepthLimit(5)]);

validate(schema, document, [...specifiedRules, graphqlDepthLimit(10)]);

validate(schema, document, [graphqlDepthLimit(
    10,
    { ignore: [/_trusted$/, "idontcare"] },
    (depths: any) => {
        // do something....
    },
)]);

validate(schema, document, [graphqlDepthLimit(
    10,
    {}, // Ignore nothing, but run the callback
    (depths: any) => {
        // do something....
    },
)]);
