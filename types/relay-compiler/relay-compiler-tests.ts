import {
    CompilerContext,
    Fragment,
    Root,
    Printer as GraphQLIRPrinter,
    Schema
} from 'relay-compiler';
import * as InlineFragmentsTransform from 'relay-compiler/lib/transforms/InlineFragmentsTransform';
import * as SkipRedundantNodesTransform from 'relay-compiler/lib/transforms/SkipRedundantNodesTransform';
import * as ApplyFragmentArgumentTransform from 'relay-compiler/lib/transforms/ApplyFragmentArgumentTransform';
import * as FlattenTransform from 'relay-compiler/lib/transforms/FlattenTransform';
import * as ConnectionTransform from 'relay-compiler/lib/transforms/ConnectionTransform';
import { getLanguagePlugin } from 'relay-compiler/lib/bin/RelayCompilerMain';
import { visit } from 'relay-compiler/lib/core/IRVisitor';

const TestSchema: Schema = (undefined as any) as Schema;

declare function parseGraphQLText(schema: Schema, text: string): {
    definitions: ReadonlyArray<Fragment | Root>,
    schema: Schema
};

const schema = TestSchema.extend([
    /* GraphQL */ `
        directive @connection(key: String!) on FIELD
        directive @client on FIELD
    `,
]);

const text = `
    fragment ScalarField on User {
      traits
    }
  `;

const { definitions, schema: extendedSchema } = parseGraphQLText(schema, text);
const queryCompilerContext = new CompilerContext(extendedSchema)
    .addAll(definitions)
    .applyTransforms([
        ApplyFragmentArgumentTransform.transform,
        InlineFragmentsTransform.transform,
        FlattenTransform.transformWithOptions({ flattenAbstractTypes: false }),
        SkipRedundantNodesTransform.transform,
        ConnectionTransform.transform,
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
