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
    readonly enter?: T;
    readonly leave?: T;
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
          Argument?: VisitFn<Argument>;
          ClientExtension?: VisitFn<ClientExtension>;
          Condition?: VisitFn<Condition>;
          Defer?: VisitFn<Defer>;
          Directive?: VisitFn<Directive>;
          Fragment?: VisitFn<Fragment>;
          FragmentSpread?: VisitFn<FragmentSpread>;
          InlineFragment?: VisitFn<InlineFragment>;
          LinkedField?: VisitFn<LinkedField>;
          Literal?: VisitFn<Literal>;
          LocalArgumentDefinition?: VisitFn<LocalArgumentDefinition>;
          ModuleImport?: VisitFn<ModuleImport>;
          Request?: VisitFn<Request>;
          Root?: VisitFn<Root>;
          RootArgumentDefinition?: VisitFn<RootArgumentDefinition>;
          ScalarField?: VisitFn<ScalarField>;
          SplitOperation?: VisitFn<SplitOperation>;
          Stream?: VisitFn<Stream>;
          Variable?: VisitFn<Variable>;
      }>
    | {
          Argument?: NodeVisitorObject<Argument>;
          ClientExtension?: VisitFn<ClientExtension>;
          Condition?: NodeVisitorObject<Condition>;
          Defer?: NodeVisitorObject<Defer>;
          Directive?: NodeVisitorObject<Directive>;
          Fragment?: NodeVisitorObject<Fragment>;
          FragmentSpread?: NodeVisitorObject<FragmentSpread>;
          InlineDataFragmentSpread?: NodeVisitorObject<InlineDataFragmentSpread>;
          InlineFragment?: NodeVisitorObject<InlineFragment>;
          LinkedField?: NodeVisitorObject<LinkedField>;
          Literal?: NodeVisitorObject<Literal>;
          LocalArgumentDefinition?: NodeVisitorObject<LocalArgumentDefinition>;
          ModuleImport?: NodeVisitorObject<ModuleImport>;
          Request?: NodeVisitorObject<Request>;
          Root?: NodeVisitorObject<Root>;
          RootArgumentDefinition?: NodeVisitorObject<RootArgumentDefinition>;
          ScalarField?: NodeVisitorObject<ScalarField>;
          SplitOperation?: NodeVisitorObject<SplitOperation>;
          Stream?: NodeVisitorObject<Stream>;
          Variable?: NodeVisitorObject<Variable>;
      };

export function visit(root: VisitNode, visitor: NodeVisitor): any;
