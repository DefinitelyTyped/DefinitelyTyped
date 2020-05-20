import graphqlDepthLimit = require('graphql-depth-limit');
import {
    GraphQLSchema,
    DocumentNode,
    buildSchema,
    Source,
    parse,
    validate,
    specifiedRules
} from 'graphql';

const schema: GraphQLSchema = buildSchema(`
  # graphql schema goes here...
`);
const document: DocumentNode = parse(new Source(`
  # graphql query goes here...
`, 'GraphQL request'));

validate(schema, document, [ graphqlDepthLimit(5) ]);

validate(schema, document, [ ...specifiedRules, graphqlDepthLimit(10) ]);

validate(schema, document, [ graphqlDepthLimit(
    10,
    { ignore: [ /_trusted$/, 'idontcare' ] },
    (depths: any) => {
        // do something....
    },
)]);
