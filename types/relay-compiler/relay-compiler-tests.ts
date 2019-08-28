import {
  GraphQLCompilerContext,
  transformASTSchema,
  Parser as RelayParser,
  Printer as GraphQLIRPrinter,
} from 'relay-compiler';

import * as InlineFragmentsTransform from 'relay-compiler/lib/InlineFragmentsTransform';
import * as SkipRedundantNodesTransform from 'relay-compiler/lib/SkipRedundantNodesTransform';
import * as RelayApplyFragmentArgumentTransform from 'relay-compiler/lib/RelayApplyFragmentArgumentTransform';
import * as FlattenTransform from 'relay-compiler/lib/FlattenTransform';

import { GraphQLSchema, DefinitionNode } from 'graphql';

const documentAsts: DefinitionNode[] = [];
const schema: GraphQLSchema = (undefined as any) as GraphQLSchema;

const adjustedSchema = transformASTSchema(schema, [
  /* GraphQL */ `
    directive @connection(key: String!) on FIELD
    directive @client on FIELD
  `,
]);

const relayDocuments = RelayParser.transform(adjustedSchema, documentAsts);
const queryCompilerContext = new GraphQLCompilerContext(adjustedSchema)
  .addAll(relayDocuments)
  .applyTransforms([
    RelayApplyFragmentArgumentTransform.transform,
    InlineFragmentsTransform.transform,
    FlattenTransform.transformWithOptions({ flattenAbstractTypes: false }),
    SkipRedundantNodesTransform.transform,
  ]);

queryCompilerContext.documents().map(doc => GraphQLIRPrinter.print(doc));
