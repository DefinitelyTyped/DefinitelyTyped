export interface CssLocation {
    source: string;
    start: {
        offset: number;
        line: number;
        column: number;
    };
    end: {
        offset: number;
        line: number;
        column: number;
    };
}

export interface ListItem<TData> {
    prev: ListItem<TData> | null;
    next: ListItem<TData> | null;
    data: TData;
}

export type IteratorFn<TData, TResult, TContext = List<TData>> = (
    this: TContext,
    item: TData,
    node: ListItem<TData>,
    list: List<TData>,
) => TResult;
export type FilterFn<TData, TResult extends TData, TContext = List<TData>> = (
    this: TContext,
    item: TData,
    node: ListItem<TData>,
    list: List<TData>,
) => item is TResult;
export type ReduceFn<TData, TValue, TContext = List<TData>> = (this: TContext, accum: TValue, data: TData) => TValue;

export class List<TData> {
    constructor();
    static createItem<T>(data: T): ListItem<T>;
    get size(): number;
    get isEmpty(): boolean;
    get first(): TData | null;
    get last(): TData | null;
    [Symbol.iterator](): IterableIterator<TData>;
    fromArray(array: TData[]): List<TData>;
    createItem(data: TData): ListItem<TData>;
    toArray(): TData[];
    toJSON(): TData[];
    forEach<TContext>(fn: IteratorFn<TData, void, TContext>, context: TContext): void;
    forEach(fn: IteratorFn<TData, void>): void;
    forEachRight<TContext>(fn: IteratorFn<TData, void, TContext>, context: TContext): void;
    forEachRight(fn: IteratorFn<TData, void>): void;
    nextUntil<TContext>(start: ListItem<TData>, fn: IteratorFn<TData, boolean, TContext>, context: TContext): void;
    nextUntil(start: ListItem<TData>, fn: IteratorFn<TData, boolean>): void;
    prevUntil<TContext>(start: ListItem<TData>, fn: IteratorFn<TData, boolean, TContext>, context: TContext): void;
    prevUntil(start: ListItem<TData>, fn: IteratorFn<TData, boolean>): void;
    reduce<TValue, TContext>(fn: ReduceFn<TData, TValue, TContext>, initialValue: TValue, context: TContext): TValue;
    reduce<TValue>(fn: ReduceFn<TData, TValue>, initialValue: TValue): TValue;
    reduceRight<TValue, TContext>(
        fn: ReduceFn<TData, TValue, TContext>,
        initialValue: TValue,
        context: TContext,
    ): TValue;
    reduceRight<TValue>(fn: ReduceFn<TData, TValue>, initialValue: TValue): TValue;
    some<TContext>(fn: IteratorFn<TData, boolean, TContext>, context: TContext): boolean;
    some(fn: IteratorFn<TData, boolean>): boolean;
    map<TContext, TResult>(fn: IteratorFn<TData, TResult, TContext>, context: TContext): List<TResult>;
    map<TResult>(fn: IteratorFn<TData, TResult>): List<TResult>;
    filter<TContext, TResult extends TData>(fn: FilterFn<TData, TResult, TContext>, context: TContext): List<TResult>;
    filter<TResult extends TData>(fn: FilterFn<TData, TResult>): List<TResult>;
    filter<TContext>(fn: IteratorFn<TData, boolean, TContext>, context: TContext): List<TData>;
    filter(fn: IteratorFn<TData, boolean>): List<TData>;
    clear(): void;
    copy(): List<TData>;
    prepend(item: ListItem<TData>): List<TData>;
    prependData(data: TData): List<TData>;
    append(item: ListItem<TData>): List<TData>;
    appendData(data: TData): List<TData>;
    insert(item: ListItem<TData>, before?: ListItem<TData> | null): List<TData>;
    insertData(data: TData, before: ListItem<TData>): List<TData>;
    remove(item: ListItem<TData>): ListItem<TData>;
    push(item: TData): void;
    pop(): ListItem<TData> | null;
    unshift(data: TData): void;
    shift(): ListItem<TData> | null;
    prependList(list: List<TData>): List<TData>;
    appendList(list: List<TData>): List<TData>;
    insertList(list: List<TData>, before: ListItem<TData>): List<TData>;
    replace(oldItem: ListItem<TData>, newItemOrList: List<TData> | ListItem<TData>): void;
}

export interface CssNodeCommon {
    type: string;
    loc?: CssLocation | undefined;
}

export interface AnPlusB extends CssNodeCommon {
    type: "AnPlusB";
    a: string | null;
    b: string | null;
}

export interface Atrule extends CssNodeCommon {
    type: "Atrule";
    name: string;
    prelude: AtrulePrelude | Raw | null;
    block: Block | null;
}

export interface AtrulePlain extends CssNodeCommon {
    type: "Atrule";
    name: string;
    prelude: AtrulePreludePlain | Raw | null;
    block: BlockPlain | null;
}

export interface AtrulePrelude extends CssNodeCommon {
    type: "AtrulePrelude";
    children: List<CssNode>;
}

export interface AtrulePreludePlain extends CssNodeCommon {
    type: "AtrulePrelude";
    children: CssNodePlain[];
}

export interface AttributeSelector extends CssNodeCommon {
    type: "AttributeSelector";
    name: Identifier;
    matcher: string | null;
    value: StringNode | Identifier | null;
    flags: string | null;
}

export interface Block extends CssNodeCommon {
    type: "Block";
    children: List<CssNode>;
}

export interface BlockPlain extends CssNodeCommon {
    type: "Block";
    children: CssNodePlain[];
}

export interface Brackets extends CssNodeCommon {
    type: "Brackets";
    children: List<CssNode>;
}

export interface BracketsPlain extends CssNodeCommon {
    type: "Brackets";
    children: CssNodePlain[];
}

export interface CDC extends CssNodeCommon {
    type: "CDC";
}

export interface CDO extends CssNodeCommon {
    type: "CDO";
}

export interface ClassSelector extends CssNodeCommon {
    type: "ClassSelector";
    name: string;
}

export interface Combinator extends CssNodeCommon {
    type: "Combinator";
    name: string;
}

export interface Comment extends CssNodeCommon {
    type: "Comment";
    value: string;
}

export interface Declaration extends CssNodeCommon {
    type: "Declaration";
    important: boolean | string;
    property: string;
    value: Value | Raw;
}

export interface DeclarationPlain extends CssNodeCommon {
    type: "Declaration";
    important: boolean | string;
    property: string;
    value: ValuePlain | Raw;
}

export interface DeclarationList extends CssNodeCommon {
    type: "DeclarationList";
    children: List<CssNode>;
}

export interface DeclarationListPlain extends CssNodeCommon {
    type: "DeclarationList";
    children: CssNodePlain[];
}

export interface Dimension extends CssNodeCommon {
    type: "Dimension";
    value: string;
    unit: string;
}

export interface FunctionNode extends CssNodeCommon {
    type: "Function";
    name: string;
    children: List<CssNode>;
}

export interface FunctionNodePlain extends CssNodeCommon {
    type: "Function";
    name: string;
    children: CssNodePlain[];
}

export interface Hash extends CssNodeCommon {
    type: "Hash";
    value: string;
}

export interface IdSelector extends CssNodeCommon {
    type: "IdSelector";
    name: string;
}

export interface Identifier extends CssNodeCommon {
    type: "Identifier";
    name: string;
}

export interface Layer extends CssNodeCommon {
    type: "Layer";
    name: string;
}

export interface LayerList extends CssNodeCommon {
    type: "LayerList";
    children: List<CssNode>;
}

export interface LayerListPlain extends CssNodeCommon {
    type: "LayerList";
    children: CssNodePlain[];
}

export interface Feature extends CssNodeCommon {
    type: "Feature";
    kind: string;
    name: string;
    value: Identifier | NumberNode | Dimension | Ratio | FunctionNode | null;
}

export interface FeaturePlain extends CssNodeCommon {
    type: "Feature";
    kind: string;
    name: string;
    value: Identifier | NumberNode | Dimension | RatioPlain | FunctionNodePlain | null;
}

export interface FeatureRange extends CssNodeCommon {
    type: "FeatureRange";
    kind: string;
    left: Identifier | NumberNode | Dimension | Ratio | FunctionNode;
    leftComparison: string;
    middle: Identifier | NumberNode | Dimension | Ratio | FunctionNode;
    rightComparison: string | null;
    right: Identifier | NumberNode | Dimension | Ratio | FunctionNode | null;
}

export interface FeatureRangePlain extends CssNodeCommon {
    type: "FeatureRange";
    kind: string;
    left: Identifier | NumberNode | Dimension | RatioPlain | FunctionNodePlain;
    leftComparison: string;
    middle: Identifier | NumberNode | Dimension | RatioPlain | FunctionNodePlain;
    rightComparison: string | null;
    right: Identifier | NumberNode | Dimension | RatioPlain | FunctionNodePlain | null;
}

export interface FeatureFunction extends CssNodeCommon {
    type: "FeatureFunction";
    kind: string;
    feature: string;
    value: Declaration | Selector;
}

export interface FeatureFunctionPlain extends CssNodeCommon {
    type: "FeatureFunction";
    kind: string;
    feature: string;
    value: DeclarationPlain | SelectorPlain;
}

export interface GeneralEnclosed extends CssNodeCommon {
    type: "GeneralEnclosed";
    kind: string;
    function: string | null;
    children: List<CssNode>;
}

export interface GeneralEnclosedPlain extends CssNodeCommon {
    type: "GeneralEnclosed";
    kind: string;
    function: string | null;
    children: CssNodePlain[];
}

export interface Condition extends CssNodeCommon {
    type: "Condition";
    kind: string;
    children: List<CssNode>;
}

export interface ConditionPlain extends CssNodeCommon {
    type: "Condition";
    kind: string;
    children: CssNodePlain[];
}

export interface SupportsDeclaration extends CssNodeCommon {
    type: "SupportsDeclaration";
    declaration: Declaration;
}

export interface SupportsDeclarationPlain extends CssNodeCommon {
    type: "SupportsDeclaration";
    declaration: DeclarationPlain;
}

export interface Scope extends CssNodeCommon {
    type: "Scope";
    root: SelectorList | Raw | null;
    limit: SelectorList | Raw | null;
}

export interface ScopePlain extends CssNodeCommon {
    type: "Scope";
    root: SelectorListPlain | Raw | null;
    limit: SelectorListPlain | Raw | null;
}

export interface MediaQuery extends CssNodeCommon {
    type: "MediaQuery";
    modifier: string | null;
    mediaType: string | null;
    condition: Condition | null;
}

export interface MediaQueryPlain extends CssNodeCommon {
    type: "MediaQuery";
    modifier: string | null;
    mediaType: string | null;
    condition: ConditionPlain | null;
}

export interface MediaQueryList extends CssNodeCommon {
    type: "MediaQueryList";
    children: List<CssNode>;
}

export interface MediaQueryListPlain extends CssNodeCommon {
    type: "MediaQueryList";
    children: CssNodePlain[];
}

export interface NestingSelector extends CssNodeCommon {
    type: "NestingSelector";
}

export interface Nth extends CssNodeCommon {
    type: "Nth";
    nth: AnPlusB | Identifier;
    selector: SelectorList | null;
}

export interface NthPlain extends CssNodeCommon {
    type: "Nth";
    nth: AnPlusB | Identifier;
    selector: SelectorListPlain | null;
}

export interface NumberNode extends CssNodeCommon {
    type: "Number";
    value: string;
}

export interface Operator extends CssNodeCommon {
    type: "Operator";
    value: string;
}

export interface Parentheses extends CssNodeCommon {
    type: "Parentheses";
    children: List<CssNode>;
}

export interface ParenthesesPlain extends CssNodeCommon {
    type: "Parentheses";
    children: CssNodePlain[];
}

export interface Percentage extends CssNodeCommon {
    type: "Percentage";
    value: string;
}

export interface PseudoClassSelector extends CssNodeCommon {
    type: "PseudoClassSelector";
    name: string;
    children: List<CssNode> | null;
}

export interface PseudoClassSelectorPlain extends CssNodeCommon {
    type: "PseudoClassSelector";
    name: string;
    children: CssNodePlain[] | null;
}

export interface PseudoElementSelector extends CssNodeCommon {
    type: "PseudoElementSelector";
    name: string;
    children: List<CssNode> | null;
}

export interface PseudoElementSelectorPlain extends CssNodeCommon {
    type: "PseudoElementSelector";
    name: string;
    children: CssNodePlain[] | null;
}

export interface Ratio extends CssNodeCommon {
    type: "Ratio";
    left: NumberNode | FunctionNode;
    right: NumberNode | FunctionNode | null;
}

export interface RatioPlain extends CssNodeCommon {
    type: "Ratio";
    left: NumberNode | FunctionNodePlain;
    right: NumberNode | FunctionNodePlain | null;
}

export interface Raw extends CssNodeCommon {
    type: "Raw";
    value: string;
}

export interface Rule extends CssNodeCommon {
    type: "Rule";
    prelude: SelectorList | Raw;
    block: Block;
}

export interface RulePlain extends CssNodeCommon {
    type: "Rule";
    prelude: SelectorListPlain | Raw;
    block: BlockPlain;
}

export interface Selector extends CssNodeCommon {
    type: "Selector";
    children: List<CssNode>;
}

export interface SelectorPlain extends CssNodeCommon {
    type: "Selector";
    children: CssNodePlain[];
}

export interface SelectorList extends CssNodeCommon {
    type: "SelectorList";
    children: List<CssNode>;
}

export interface SelectorListPlain extends CssNodeCommon {
    type: "SelectorList";
    children: CssNodePlain[];
}

export interface StringNode extends CssNodeCommon {
    type: "String";
    value: string;
}

export interface StyleSheet extends CssNodeCommon {
    type: "StyleSheet";
    children: List<CssNode>;
}

export interface StyleSheetPlain extends CssNodeCommon {
    type: "StyleSheet";
    children: CssNodePlain[];
}

export interface TypeSelector extends CssNodeCommon {
    type: "TypeSelector";
    name: string;
}

export interface UnicodeRange extends CssNodeCommon {
    type: "UnicodeRange";
    value: string;
}

export interface Url extends CssNodeCommon {
    type: "Url";
    value: string;
}

export interface Value extends CssNodeCommon {
    type: "Value";
    children: List<CssNode>;
}

export interface ValuePlain extends CssNodeCommon {
    type: "Value";
    children: CssNodePlain[];
}

export interface WhiteSpace extends CssNodeCommon {
    type: "WhiteSpace";
    value: string;
}

export type CssNode =
    | AnPlusB
    | Atrule
    | AtrulePrelude
    | AttributeSelector
    | Block
    | Brackets
    | CDC
    | CDO
    | ClassSelector
    | Combinator
    | Comment
    | Declaration
    | DeclarationList
    | Dimension
    | FunctionNode
    | Hash
    | IdSelector
    | Identifier
    | Feature
    | FeatureRange
    | FeatureFunction
    | GeneralEnclosed
    | Condition
    | SupportsDeclaration
    | MediaQuery
    | MediaQueryList
    | NestingSelector
    | Nth
    | NumberNode
    | Operator
    | Parentheses
    | Percentage
    | PseudoClassSelector
    | PseudoElementSelector
    | Ratio
    | Raw
    | Rule
    | Selector
    | SelectorList
    | StringNode
    | StyleSheet
    | TypeSelector
    | UnicodeRange
    | Url
    | Value
    | WhiteSpace
    | Layer
    | LayerList
    | Scope;

export type CssNodePlain =
    | AnPlusB
    | AtrulePlain
    | AtrulePreludePlain
    | AttributeSelector
    | BlockPlain
    | BracketsPlain
    | CDC
    | CDO
    | ClassSelector
    | Combinator
    | Comment
    | DeclarationPlain
    | DeclarationListPlain
    | Dimension
    | FunctionNodePlain
    | Hash
    | IdSelector
    | Identifier
    | FeaturePlain
    | FeatureRangePlain
    | FeatureFunctionPlain
    | GeneralEnclosedPlain
    | ConditionPlain
    | SupportsDeclarationPlain
    | MediaQueryPlain
    | MediaQueryListPlain
    | NthPlain
    | NumberNode
    | Operator
    | ParenthesesPlain
    | Percentage
    | PseudoClassSelectorPlain
    | PseudoElementSelectorPlain
    | RatioPlain
    | Raw
    | RulePlain
    | SelectorPlain
    | SelectorListPlain
    | StringNode
    | StyleSheetPlain
    | TypeSelector
    | UnicodeRange
    | Url
    | ValuePlain
    | WhiteSpace
    | Layer
    | LayerListPlain
    | ScopePlain;

export interface SyntaxParseError extends SyntaxError {
    source: string;
    offset: number;
    line: number;
    column: number;
    formattedMessage: string;
    sourceFragment(extraLines?: number): string;
}

export interface ParseOptions {
    context?: string | undefined;
    atrule?: string | undefined;
    positions?: boolean | undefined;
    onComment?: (value: string, loc: CssLocation) => void;
    onParseError?: ((error: SyntaxParseError, fallbackNode: CssNode) => void) | undefined;
    filename?: string | undefined;
    offset?: number | undefined;
    line?: number | undefined;
    column?: number | undefined;
    parseAtrulePrelude?: boolean | undefined;
    parseRulePrelude?: boolean | undefined;
    parseValue?: boolean | undefined;
    parseCustomProperty?: boolean | undefined;
    onToken?:
        | ((type: number, start: number, end: number, index: number) => void)
        | Array<{ type: number; start: number; end: number }>
        | undefined;
    list?: boolean | undefined;
}

export function parse(text: string, options: ParseOptions & { list: false }): CssNodePlain;
export function parse(text: string, options?: ParseOptions): CssNode;

export interface GenerateHandlers {
    node(node: CssNode): void;
    tokenBefore(prevCode: number, type: number, value: string): number;
    token(type: number, value: string, suppressAutoWhiteSpace?: boolean): void;
    emit(value: string, type: number, auto: boolean): void;
    result(): string;
}

export interface GenerateOptions {
    sourceMap?: boolean | undefined;
    decorator?: ((handlers: GenerateHandlers) => GenerateHandlers) | undefined;
    mode?: "safe" | "spec" | undefined;
}

export function generate(ast: CssNode, options?: GenerateOptions): string;

export interface WalkContext {
    /**
     * Stops traversal. No visitor function will be invoked once this value is
     * returned by a visitor.
     */
    break: symbol;
    /**
     * Prevent the current node from being iterated. No visitor function will be
     * invoked for its properties or children nodes; note that this value only
     * has an effect for enter visitor as leave visitor invokes after iterating
     * over all node's properties and children.
     */
    skip: symbol;
    root: CssNode;
    stylesheet: StyleSheet | null;
    atrule: Atrule | null;
    atrulePrelude: AtrulePrelude | null;
    rule: Rule | null;
    selector: SelectorList | null;
    block: Block | null;
    declaration: Declaration | null;
    function: FunctionNode | PseudoClassSelector | PseudoElementSelector | null;
}

export type EnterOrLeaveFn<NodeType = CssNode> = (
    this: WalkContext,
    node: NodeType,
    item: ListItem<CssNode>,
    list: List<CssNode>,
) => void;

export interface WalkOptionsNoVisit {
    visit?: never;
    enter?: EnterOrLeaveFn | undefined;
    leave?: EnterOrLeaveFn | undefined;
    reverse?: boolean | undefined;
}

export interface WalkOptionsVisit<NodeType extends CssNode = CssNode> {
    visit: NodeType["type"];
    enter?: EnterOrLeaveFn<NodeType> | undefined;
    leave?: EnterOrLeaveFn<NodeType> | undefined;
    reverse?: boolean | undefined;
}

export type WalkOptions =
    | WalkOptionsVisit<AnPlusB>
    | WalkOptionsVisit<Atrule>
    | WalkOptionsVisit<AtrulePrelude>
    | WalkOptionsVisit<AttributeSelector>
    | WalkOptionsVisit<Block>
    | WalkOptionsVisit<Brackets>
    | WalkOptionsVisit<CDC>
    | WalkOptionsVisit<CDO>
    | WalkOptionsVisit<ClassSelector>
    | WalkOptionsVisit<Combinator>
    | WalkOptionsVisit<Comment>
    | WalkOptionsVisit<Declaration>
    | WalkOptionsVisit<DeclarationList>
    | WalkOptionsVisit<Dimension>
    | WalkOptionsVisit<FunctionNode>
    | WalkOptionsVisit<Hash>
    | WalkOptionsVisit<IdSelector>
    | WalkOptionsVisit<Identifier>
    | WalkOptionsVisit<Feature>
    | WalkOptionsVisit<FeatureRange>
    | WalkOptionsVisit<FeatureFunction>
    | WalkOptionsVisit<GeneralEnclosed>
    | WalkOptionsVisit<Condition>
    | WalkOptionsVisit<SupportsDeclaration>
    | WalkOptionsVisit<MediaQuery>
    | WalkOptionsVisit<MediaQueryList>
    | WalkOptionsVisit<Nth>
    | WalkOptionsVisit<NumberNode>
    | WalkOptionsVisit<Operator>
    | WalkOptionsVisit<Parentheses>
    | WalkOptionsVisit<Percentage>
    | WalkOptionsVisit<PseudoClassSelector>
    | WalkOptionsVisit<PseudoElementSelector>
    | WalkOptionsVisit<Ratio>
    | WalkOptionsVisit<Raw>
    | WalkOptionsVisit<Rule>
    | WalkOptionsVisit<Selector>
    | WalkOptionsVisit<SelectorList>
    | WalkOptionsVisit<StringNode>
    | WalkOptionsVisit<StyleSheet>
    | WalkOptionsVisit<TypeSelector>
    | WalkOptionsVisit<UnicodeRange>
    | WalkOptionsVisit<Url>
    | WalkOptionsVisit<Value>
    | WalkOptionsVisit<WhiteSpace>
    | WalkOptionsVisit<NestingSelector>
    | WalkOptionsVisit<Layer>
    | WalkOptionsVisit<LayerList>
    | WalkOptionsVisit<Scope>
    | WalkOptionsNoVisit;

export const walk: {
    (ast: CssNode, options: EnterOrLeaveFn | WalkOptions): void;
    /**
     * Stops traversal. No visitor function will be invoked once this value is returned by a visitor.
     */
    readonly break: symbol;
    /**
     * Prevent the current node from being iterated. No visitor function will be invoked for its properties or children
     * nodes; note that this value only has an effect for enter visitor as leave visitor invokes after iterating over
     * all node's properties and children.
     */
    readonly skip: symbol;
};

export type FindFn = (this: WalkContext, node: CssNode, item: ListItem<CssNode>, list: List<CssNode>) => boolean;

export function find(ast: CssNode, fn: FindFn): CssNode | null;
export function findLast(ast: CssNode, fn: FindFn): CssNode | null;
export function findAll(ast: CssNode, fn: FindFn): CssNode[];

export interface Property {
    readonly basename: string;
    readonly name: string;
    readonly hack: string;
    readonly vendor: string;
    readonly prefix: string;
    readonly custom: boolean;
}

export function property(value: string): Property;

export interface Keyword {
    readonly basename: string;
    readonly name: string;
    readonly vendor: string;
    readonly prefix: string;
    readonly custom: boolean;
}

export function keyword(value: string): Keyword;

export function clone(node: CssNode): CssNode;

export function fromPlainObject(node: CssNodePlain): CssNode;
export function toPlainObject(node: CssNode): CssNodePlain;

/**
 * Definition syntax AtWord node
 */
export interface DSNodeAtWord {
    type: "AtKeyword";
    name: string;
}

/**
 * Definition syntax Boolean node
 */
export interface DSNodeBoolean {
    type: "Boolean";
    term: DSNode;
}

/**
 * Definition syntax Comma node
 */
export interface DSNodeComma {
    type: "Comma";
}

/**
 * Definition syntax Function node
 */
export interface DSNodeFunction {
    type: "Function";
    name: string;
}

export type DSNodeCombinator = "|" | "||" | "&&" | " ";

/**
 * Definition syntax Group node
 */
export interface DSNodeGroup {
    type: "Group";
    terms: DSNode[];
    combinator: DSNodeCombinator;
    disallowEmpty: boolean;
    explicit: boolean;
}

/**
 * Definition syntax Keyword node
 */
export interface DSNodeKeyword {
    type: "Keyword";
    name: string;
}

/**
 * Definition syntax Multiplier node
 */
export interface DSNodeMultiplier {
    type: "Multiplier";
    comma: boolean;
    min: number;
    max: number;
    term: DSNodeMultiplied;
}

/**
 * Definition syntax Property node
 */
export interface DSNodeProperty {
    type: "Property";
    name: string;
}

/**
 * Definition syntax String node
 */
export interface DSNodeString {
    type: "String";
    value: string;
}

/**
 * Definition syntax Token node
 */
export interface DSNodeToken {
    type: "Token";
    value: string;
}

/**
 * Definition syntax Type node options
 */
export interface DSNodeTypeOpts {
    type: "Range";
    min: number | null;
    max: number | null;
}

/**
 * Definition syntax Type node
 */
export interface DSNodeType {
    type: "Type";
    name: string;
    opts: DSNodeTypeOpts | null;
}

/**
 * Definition syntax node
 */
export type DSNode =
    | DSNodeAtWord
    | DSNodeBoolean
    | DSNodeComma
    | DSNodeFunction
    | DSNodeGroup
    | DSNodeKeyword
    | DSNodeMultiplier
    | DSNodeProperty
    | DSNodeString
    | DSNodeToken
    | DSNodeType;

/**
 * Definition syntax node compatible with a multiplier
 */
export type DSNodeMultiplied =
    | DSNodeFunction
    | DSNodeGroup
    | DSNodeKeyword
    | DSNodeProperty
    | DSNodeString
    | DSNodeType
    | DSNodeToken
    | DSNodeBoolean
    | DSNodeMultiplier;

export type DSGenerateDecorateFn = (
    result: string,
    node: DSNode | DSNodeTypeOpts,
) => string;

/**
 * Definition syntax generate options
 */
export interface DSGenerateOptions {
    forceBraces?: boolean | undefined;
    compact?: boolean | undefined;
    decorate?: DSGenerateDecorateFn | undefined;
}

/**
 * Definition syntax walk options
 */
export interface DSWalkOptions {
    enter?: DSWalkEnterOrLeaveFn | undefined;
    leave?: DSWalkEnterOrLeaveFn | undefined;
}

/**
 * Definition syntax walk callback
 */
export type DSWalkEnterOrLeaveFn = (node: DSNode) => void;

export interface DefinitionSyntaxError extends SyntaxError {
    input: string;
    offset: number;
    rawMessage: string;
}

/**
 * DefinitionSyntax
 */
export interface DefinitionSyntax {
    /**
     * Generates CSS value definition syntax from an AST
     *
     * @param node - The AST
     * @param options - Options that affect generation
     *
     * @example
     *  generate({type: 'Keyword', name: 'foo'}) => 'foo'
     */
    generate(node: DSNode, options?: DSGenerateOptions | DSGenerateDecorateFn): string;

    /**
     * Generates an AST from a CSS value syntax
     *
     * @param source - The CSS value syntax to parse
     *
     * @example
     *  parse('foo | bar') =>
     *    {
     *      type: 'Group',
     *      terms: [
     *        { type: 'Keyword', name: 'foo' },
     *        { type: 'Keyword', name: 'bar' }
     *      ],
     *      combinator: '|',
     *      disallowEmpty: false,
     *      explicit: false
     *    }
     */
    parse(source: string): DSNodeGroup;

    /**
     * Walks definition syntax AST
     */
    walk(node: DSNode, options: DSWalkEnterOrLeaveFn | DSWalkOptions, context?: any): void;

    /**
     * Wrapper for syntax errors
     */
    SyntaxError: (
        message: string,
        input: string,
        offset?: number,
    ) => DefinitionSyntaxError;
}

export const definitionSyntax: DefinitionSyntax;

export const ident: {
    decode(input: string): string;
    encode(input: string): string;
};

export const string: {
    encode(input: string, apostrophe?: boolean): string;
    decode(input: string): string;
};

export const url: {
    decode(input: string): string;
    encode(input: string): string;
};

export interface SyntaxMatchError extends SyntaxError {
    rawMessage: string;
    syntax: string;
    css: string;
    mismatchOffset: number;
    mismatchLength: number;
    offset: number;
    line: number;
    column: number;
    loc: {
        source: string;
        start: { offset: number; line: number; column: number };
        end: { offset: number; line: number; column: number };
    };
}

export interface SyntaxReferenceError extends SyntaxError {
    reference: string;
}

export interface SyntaxMatchNode {
    syntax: { type: string; name: string } | null;
    match?: SyntaxMatchNode[];
    node?: CssNode;
}

export interface LexerMatchResult {
    matched: SyntaxMatchNode | null;
    iterations: number;
    error: Error | SyntaxMatchError | SyntaxReferenceError | null;
    getTrace(node: CssNode): SyntaxMatchNode[] | null;
    isType(node: CssNode, type: string): boolean;
    isProperty(node: CssNode, property: string): boolean;
    isKeyword(node: CssNode): boolean;
}

export interface LexerValueFragment {
    parent: List<CssNode>;
    nodes: List<CssNode>;
}

export interface SyntaxDescriptor {
    type: "Property" | "Type" | "AtrulePrelude" | "AtruleDescriptor";
    name: string;
    parent: SyntaxDescriptor | null;
    serializable: boolean;
    syntax: DSNode | null;
    match: ((...args: unknown[]) => unknown) | null;
    matchRef?: ((...args: unknown[]) => unknown) | null;
}

export interface AtruleDescriptor {
    type: "Atrule";
    name: string;
    prelude: SyntaxDescriptor | null;
    descriptors: Record<string, SyntaxDescriptor> | null;
}

export interface StructureWarning {
    node: CssNode;
    message: string;
}

export interface LexerValidationResult {
    errors: string[];
    types: string[];
    properties: string[];
}

export class Lexer {
    checkStructure(ast: CssNode): StructureWarning[] | false;
    checkAtruleName(atruleName: string): SyntaxReferenceError | undefined;
    checkAtrulePrelude(
        atruleName: string,
        prelude: CssNode | string,
    ): Error | SyntaxReferenceError | undefined;
    checkAtruleDescriptorName(
        atruleName: string,
        descriptorName: string,
    ): SyntaxReferenceError | SyntaxError | undefined;
    checkPropertyName(propertyName: string): SyntaxReferenceError | undefined;

    matchAtruleDescriptor(
        atruleName: string,
        descriptorName: string,
        value: CssNode | string,
    ): LexerMatchResult;
    matchAtrulePrelude(
        atruleName: string,
        prelude: CssNode | string,
    ): LexerMatchResult;
    matchDeclaration(node: CssNode): LexerMatchResult;
    matchProperty(
        propertyName: string,
        value: CssNode | string,
    ): LexerMatchResult;
    matchType(typeName: string, value: CssNode | string): LexerMatchResult;
    match(syntax: DSNode | string, value: CssNode | string): LexerMatchResult;
    findValueFragments(
        propertyName: string,
        value: CssNode,
        type: string,
        name: string,
    ): LexerValueFragment[];
    findDeclarationValueFragments(
        declaration: Declaration,
        type: string,
        name: string,
    ): LexerValueFragment[];
    findAllFragments(
        ast: CssNode,
        type: string,
        name: string,
    ): LexerValueFragment[];

    getAtrule(
        atruleName: string,
        fallbackBasename?: boolean,
    ): AtruleDescriptor | null;
    getAtrulePrelude(
        atruleName: string,
        fallbackBasename?: boolean,
    ): SyntaxDescriptor | null;
    getAtruleDescriptor(
        atruleName: string,
        name: string,
    ): SyntaxDescriptor | null;
    getProperty(
        propertyName: string,
        fallbackBasename?: boolean,
    ): SyntaxDescriptor | null;
    getType(name: string): SyntaxDescriptor | null;

    validate(): LexerValidationResult | null;
    dump(syntaxAsAst?: boolean, pretty?: boolean): unknown;
    toString(): string;
}

export const lexer: Lexer;

export interface SyntaxConfig {
    generic?: boolean | undefined;
    cssWideKeywords?: string[] | undefined;
    units?: Record<string, string[]> | undefined;
    types?: Record<string, string> | undefined;
    atrules?:
        | Record<
            string,
            | string
            | {
                prelude?: string | null;
                descriptors?: Record<string, string> | null;
            }
        >
        | undefined;
    properties?: Record<string, string> | undefined;
    node?: Record<string, unknown> | undefined;
}

export interface Syntax {
    lexer: Lexer;
    createLexer(config?: SyntaxConfig): Lexer;
    tokenize(
        source: string,
        onToken?: (type: number, start: number, end: number) => void,
    ): void;
    parse(text: string, options: ParseOptions & { list: false }): CssNodePlain;
    parse(text: string, options?: ParseOptions): CssNode;
    generate(ast: CssNode, options?: GenerateOptions): string;
    walk(ast: CssNode, options: EnterOrLeaveFn | WalkOptions): void;
    find(ast: CssNode, fn: FindFn): CssNode | null;
    findLast(ast: CssNode, fn: FindFn): CssNode | null;
    findAll(ast: CssNode, fn: FindFn): CssNode[];
    fromPlainObject(node: CssNodePlain): CssNode;
    toPlainObject(node: CssNode): CssNodePlain;
    fork(
        extension: SyntaxConfig | ((config: SyntaxConfig) => SyntaxConfig),
    ): Syntax;
}

export function createSyntax(config: SyntaxConfig): Syntax;

export function fork(
    extension: SyntaxConfig | ((config: SyntaxConfig) => SyntaxConfig),
): Syntax;

export function createLexer(config?: SyntaxConfig): Lexer;

export function tokenize(
    source: string,
    onToken?: (type: number, start: number, end: number) => void,
): void;

export const tokenTypes: {
    readonly EOF: number;
    readonly Ident: number;
    readonly Function: number;
    readonly AtKeyword: number;
    readonly Hash: number;
    readonly String: number;
    readonly BadString: number;
    readonly Url: number;
    readonly BadUrl: number;
    readonly Delim: number;
    readonly Number: number;
    readonly Percentage: number;
    readonly Dimension: number;
    readonly WhiteSpace: number;
    readonly CDO: number;
    readonly CDC: number;
    readonly Colon: number;
    readonly Semicolon: number;
    readonly Comma: number;
    readonly LeftSquareBracket: number;
    readonly RightSquareBracket: number;
    readonly LeftParenthesis: number;
    readonly RightParenthesis: number;
    readonly LeftCurlyBracket: number;
    readonly RightCurlyBracket: number;
    readonly Comment: number;
};

export const tokenNames: string[];

export type TokenizeHandler = (
    source: string,
    onToken: (type: number, start: number, end: number) => void,
) => void;

export class TokenStream {
    source: string;
    firstCharOffset: number;
    tokenCount: number;
    eof: boolean;
    tokenIndex: number;
    tokenType: number;
    tokenStart: number;
    tokenEnd: number;
    constructor(source: string, tokenize: TokenizeHandler);
    reset(): void;
    setSource(source?: string, tokenize?: TokenizeHandler): void;
    lookupType(offset: number): number;
    lookupTypeNonSC(idx: number): number;
    lookupOffset(offset: number): number;
    lookupOffsetNonSC(idx: number): number;
    lookupValue(offset: number, referenceStr: string): boolean;
    getTokenStart(tokenIndex: number): number;
    getTokenEnd(tokenIndex: number): number;
    getTokenType(tokenIndex: number): number;
    substrToCursor(start: number): string;
    isBlockOpenerTokenType(tokenType: number): boolean;
    isBlockCloserTokenType(tokenType: number): boolean;
    getBlockTokenPairIndex(tokenIndex: number): number;
    isBalanceEdge(tokenIndex: number): boolean;
    isDelim(code: number, offset?: number): boolean;
    skip(tokenCount: number): void;
    next(): void;
    skipSC(): void;
    skipUntilBalanced(
        startToken: number,
        stopConsume: (code: number) => number,
    ): void;
    forEachToken(
        fn: (type: number, start: number, end: number, index: number) => void,
    ): void;
    dump(): Array<{
        idx: number;
        type: string;
        chunk: string;
        balance: number;
    }>;
}

export class OffsetToLocation {
    constructor(
        source: string,
        startOffset?: number,
        startLine?: number,
        startColumn?: number,
    );
    setSource(
        source?: string,
        startOffset?: number,
        startLine?: number,
        startColumn?: number,
    ): void;
    getLocation(
        offset: number,
        filename?: string,
    ): { source: string; offset: number; line: number; column: number };
    getLocationRange(
        start: number,
        end: number,
        filename?: string,
    ): CssLocation;
}

export function vendorPrefix(str: string, offset?: number): string;
export function isCustomProperty(str: string, offset?: number): boolean;

export const version: string;
