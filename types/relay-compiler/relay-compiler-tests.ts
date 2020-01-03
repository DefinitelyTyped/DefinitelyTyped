import {
    GraphQLCompilerContext,
    transformASTSchema,
    Parser as RelayParser,
    Printer as GraphQLIRPrinter,
} from 'relay-compiler';

import * as InlineFragmentsTransform from 'relay-compiler/lib/transforms/InlineFragmentsTransform';
import * as SkipRedundantNodesTransform from 'relay-compiler/lib/transforms/SkipRedundantNodesTransform';
import * as ApplyFragmentArgumentTransform from 'relay-compiler/lib/transforms/ApplyFragmentArgumentTransform';
import * as FlattenTransform from 'relay-compiler/lib/transforms/FlattenTransform';
import * as ConnectionFieldTransform from 'relay-compiler/lib/transforms/ConnectionFieldTransform';
import { getLanguagePlugin } from 'relay-compiler/lib/bin/RelayCompilerMain';
import { visit } from 'relay-compiler/lib/core/GraphQLIRVisitor';

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
        ApplyFragmentArgumentTransform.transform,
        InlineFragmentsTransform.transform,
        FlattenTransform.transformWithOptions({ flattenAbstractTypes: false }),
        SkipRedundantNodesTransform.transform,
        ConnectionFieldTransform.transform,
    ]);

queryCompilerContext.documents().map(doc => GraphQLIRPrinter.print(doc));

getLanguagePlugin(() => ({
    findGraphQLTags: (text, filePath) =>
        text
            .split(filePath)
            .map(template => ({ template, keyName: filePath, sourceLocationOffset: { line: 24, column: 42 } })),
    formatModule: options => options.docText || '',
    inputExtensions: ['foo'],
    outputExtension: 'bar',
    typeGenerator: {
        transforms: [ApplyFragmentArgumentTransform.transform],
        generate: (schema, node, options) => {
            visit(node, {
                Fragment(fragment) {
                    return {
                        ...fragment,
                        name: 'BestFragmentName',
                    };
                },
            });
            return options.useSingleArtifactDirectory ? 'Some generated typings' : 'Some other generated typings';
        },
    },
}));
getLanguagePlugin('typescript').outputExtension;
