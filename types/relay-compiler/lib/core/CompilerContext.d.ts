import { Root, Fragment, SplitOperation, Location } from './IR';
import { Schema } from './Schema';
import { Reporter } from '../reporters/Reporter';

export type IRTransform = (
  context: CompilerContext,
) => CompilerContext;

export type CompilerContextDocument = Fragment | Root | SplitOperation;

export class CompilerContext {
  constructor(schema: Schema);
  documents(): CompilerContextDocument[];
  forEachDocument(fn: (doc: CompilerContextDocument) => void): void;
  replace(node: CompilerContextDocument): CompilerContext;
  add(node: CompilerContextDocument): CompilerContext;
  addAll(nodes: ReadonlyArray<CompilerContextDocument>): CompilerContext;
  applyTransforms(
    transforms: ReadonlyArray<IRTransform>,
    reporter?: Reporter,
  ): CompilerContext;
  applyTransform(
    transform: IRTransform,
    reporter?: Reporter,
  ): CompilerContext;
  get(name: string): CompilerContextDocument | undefined;
  getFragment(name: string, referencedFrom?: Location): Fragment;
  getRoot(name: string): Root;
  remove(name: string): CompilerContext;
  withMutations(
    fn: (context: CompilerContext) => CompilerContext,
  ): CompilerContext;
  getSchema(): Schema;
}
