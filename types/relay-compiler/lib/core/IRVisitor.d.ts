import {
    Argument,
    ClientExtension,
    Condition,
    Defer,
    Directive,
    Fragment,
    FragmentSpread,
    InlineDataFragmentSpread,
    InlineFragment,
    LinkedField,
    Literal,
    LocalArgumentDefinition,
    ModuleImport,
    Request,
    Root,
    RootArgumentDefinition,
    ScalarField,
    SplitOperation,
    Stream,
    Variable,
} from './IR';

export type VisitNode =
    | Argument
    | ClientExtension
    | Condition
    | Defer
    | Directive
    | Fragment
    | FragmentSpread
    | InlineDataFragmentSpread
    | InlineFragment
    | LinkedField
    | Literal
    | LocalArgumentDefinition
    | ModuleImport
    | Request
    | Root
    | RootArgumentDefinition
    | ScalarField
    | SplitOperation
    | Stream
    | Variable;

export interface EnterLeave<T> {
    readonly enter?: T | undefined;
    readonly leave?: T | undefined;
}

export type VisitFn<T extends VisitNode> = (
    node: T, // node we're visiting
    key?: any, // index/key to node from parent array/object
    parent?: null | VisitNode | VisitNode[], // Object immediately above node
    path?: any[], // keys to get from root: [keyForChild, ..., keyForParent]
    ancestors?: Array<VisitNode | VisitNode[]>, // [root, child1, ..., grandparent]
) => // Note: ancestors includes arrays which contain the visited node
// These correspond to array indices in `path`.
any;

export type NodeVisitorObject<T extends VisitNode> = EnterLeave<VisitFn<T>> | VisitFn<T>;

export type NodeVisitor =
    | EnterLeave<{
          Argument?: VisitFn<Argument> | undefined;
          ClientExtension?: VisitFn<ClientExtension> | undefined;
          Condition?: VisitFn<Condition> | undefined;
          Defer?: VisitFn<Defer> | undefined;
          Directive?: VisitFn<Directive> | undefined;
          Fragment?: VisitFn<Fragment> | undefined;
          FragmentSpread?: VisitFn<FragmentSpread> | undefined;
          InlineFragment?: VisitFn<InlineFragment> | undefined;
          LinkedField?: VisitFn<LinkedField> | undefined;
          Literal?: VisitFn<Literal> | undefined;
          LocalArgumentDefinition?: VisitFn<LocalArgumentDefinition> | undefined;
          ModuleImport?: VisitFn<ModuleImport> | undefined;
          Request?: VisitFn<Request> | undefined;
          Root?: VisitFn<Root> | undefined;
          RootArgumentDefinition?: VisitFn<RootArgumentDefinition> | undefined;
          ScalarField?: VisitFn<ScalarField> | undefined;
          SplitOperation?: VisitFn<SplitOperation> | undefined;
          Stream?: VisitFn<Stream> | undefined;
          Variable?: VisitFn<Variable> | undefined;
      }>
    | {
          Argument?: NodeVisitorObject<Argument> | undefined;
          ClientExtension?: VisitFn<ClientExtension> | undefined;
          Condition?: NodeVisitorObject<Condition> | undefined;
          Defer?: NodeVisitorObject<Defer> | undefined;
          Directive?: NodeVisitorObject<Directive> | undefined;
          Fragment?: NodeVisitorObject<Fragment> | undefined;
          FragmentSpread?: NodeVisitorObject<FragmentSpread> | undefined;
          InlineDataFragmentSpread?: NodeVisitorObject<InlineDataFragmentSpread> | undefined;
          InlineFragment?: NodeVisitorObject<InlineFragment> | undefined;
          LinkedField?: NodeVisitorObject<LinkedField> | undefined;
          Literal?: NodeVisitorObject<Literal> | undefined;
          LocalArgumentDefinition?: NodeVisitorObject<LocalArgumentDefinition> | undefined;
          ModuleImport?: NodeVisitorObject<ModuleImport> | undefined;
          Request?: NodeVisitorObject<Request> | undefined;
          Root?: NodeVisitorObject<Root> | undefined;
          RootArgumentDefinition?: NodeVisitorObject<RootArgumentDefinition> | undefined;
          ScalarField?: NodeVisitorObject<ScalarField> | undefined;
          SplitOperation?: NodeVisitorObject<SplitOperation> | undefined;
          Stream?: NodeVisitorObject<Stream> | undefined;
          Variable?: NodeVisitorObject<Variable> | undefined;
      };

export function visit(root: VisitNode, visitor: NodeVisitor): any;
