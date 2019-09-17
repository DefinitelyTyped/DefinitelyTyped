import { GraphQLSchema } from 'graphql';
import { Root, Fragment, SplitOperation, Location } from './GraphQLIR';
import { GraphQLReporter } from '../reporters/GraphQLReporter';

export type IRTransform = (
  context: GraphQLCompilerContext,
) => GraphQLCompilerContext;
export type IRValidation = (contect: GraphQLCompilerContext) => void;

export type CompilerContextDocument = Fragment | Root | SplitOperation;

export class GraphQLCompilerContext {
  constructor(serverSchema: GraphQLSchema, clientSchema?: GraphQLSchema);
  documents(): ReadonlyArray<CompilerContextDocument>;
  forEachDocument(fn: (doc: CompilerContextDocument) => void): void;
  replace(node: CompilerContextDocument): GraphQLCompilerContext;
  add(node: CompilerContextDocument): GraphQLCompilerContext;
  addAll(nodes: ReadonlyArray<CompilerContextDocument>): GraphQLCompilerContext;
  applyTransforms(
    transforms: ReadonlyArray<IRTransform>,
    reporter?: GraphQLReporter,
  ): GraphQLCompilerContext;
  applyTransform(
    transform: IRTransform,
    reporter?: GraphQLReporter,
  ): GraphQLCompilerContext;
  applyValidations(
    validations: ReadonlyArray<IRValidation>,
    reporter?: GraphQLReporter,
  ): void;
  get(name: string): CompilerContextDocument | undefined;
  getFragment(name: string, referencedFrom?: Location): Fragment;
  getRoot(name: string): Root;
  remove(name: string): GraphQLCompilerContext;
  withMutations(
    fn: (context: GraphQLCompilerContext) => GraphQLCompilerContext,
  ): GraphQLCompilerContext;
}
