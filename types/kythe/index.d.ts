/**
 * A VName (Vector Name) for a node in the Kythe schema consists of:
 *  - `signature`: a unique, opaque signature for a node
 *  - `corpus`: a collection of related files the node is defined in
 *  - `root`: a label denoting a distinct subset of the corpus
 *  - `path`: the relative path of the file containing the node
 *  - `language`: programming language the node belongs to
 */
export interface VName {
    signature: string;
    corpus: string;
    root: string;
    path: string;
    language: string;
}

/**
 * Kythe edge kinds. See
 *   https://kythe.io/docs/schema/#_edge_kinds
 *   https://github.com/kythe/kythe/tree/master/kythe/data/schema_index.textproto#L17
 */
export enum EdgeKind {
    ALIASES = "/kythe/edge/aliases",
    ALIASES_ROOT = "/kythe/edge/aliases/root",
    ANNOTATED_BY = "/kythe/edge/annotatedby",
    BOUNDED_LOWER = "/kythe/edge/bounded/lower",
    BOUNDED_UPPER = "/kythe/edge/bounded/upper",
    CHILD_OF = "/kythe/edge/childof",
    CHILD_OF_CONTEXT = "/kythe/edge/childof/context",
    COMPLETES = "/kythe/edge/completes",
    COMPLETES_UNIQUELY = "/kythe/edge/completes/uniquely",
    DEFINES = "/kythe/edge/defines",
    DEFINES_BINDING = "/kythe/edge/defines/binding",
    DEPENDS = "/kythe/edge/depends",
    DOCUMENTS = "/kythe/edge/documents",
    EXPORTS = "/kythe/edge/exports",
    EXTENDS = "/kythe/edge/extends",
    GENERATES = "/kythe/edge/generates",
    INSTANTIATES = "/kythe/edge/instantiates",
    INSTANTIATES_SPECULATIVE = "/kythe/edge/instantiates/speculative",
    IMPUTES = "/kythe/edge/imputes",
    NAMED = "/kythe/edge/named",
    OVERRIDES = "/kythe/edge/overrides",
    OVERRIDES_ROOT = "/kythe/edge/overrides/root",
    OVERRIDES_TRANSITIVE = "/kythe/edge/overrides/transitive",
    PARAM = "/kythe/edge/param",
    REF = "/kythe/edge/ref",
    REF_IMPLICIT = "/kythe/edge/ref/implicit",
    REF_CALL = "/kythe/edge/ref/call",
    REF_CALL_IMPLICIT = "/kythe/edge/ref/call/implicit",
    REF_DOC = "/kythe/edge/ref/doc",
    REF_EXPANDS = "/kythe/edge/ref/expands",
    REF_EXPANDS_TRANSITIVE = "/kythe/edge/ref/expands/transitive",
    REF_FILE = "/kythe/edge/ref/file",
    REF_IMPORTS = "/kythe/edge/ref/imports",
    REF_INCLUDES = "/kythe/edge/ref/includes",
    REF_INIT = "/kythe/edge/ref/init",
    REF_INIT_IMPLICIT = "/kythe/edge/ref/init/implicit",
    REF_QUERIES = "/kythe/edge/ref/queries",
    SATISFIES = "/kythe/edge/satisfies",
    SPECIALIZES = "/kythe/edge/specializes",
    SPECIALIZES_SPECULATIVE = "/kythe/edge/specializes/speculative",
    TAGGED = "/kythe/edge/tagged",
    TYPED = "/kythe/edge/typed",
    UNDEFINES = "/kythe/edge/undefines",
}

/**
 * A Kythe ordinal edge has the form of
 *   `${EdgeKind}.${number}`
 * This is represented as a branded string that is incompatible with a string
 * but can be compared to a string.
 */
export type OrdinalEdge = string & {
    __ordinalBrand: "ordinal";
};

/**
 * Kythe node kinds. See
 *   https://kythe.io/docs/schema/#_node_kinds
 *   https://github.com/kythe/kythe/tree/master/kythe/data/schema_index.textproto#L64
 */
export enum NodeKind {
    ABS = "abs",
    ABSVAR = "absvar",
    ANCHOR = "anchor",
    CONSTANT = "constant",
    DIAGNOSTIC = "diagnostic",
    DOC = "doc",
    FILE = "file",
    INTERFACE = "interface",
    FUNCTION = "function",
    LOOKUP = "lookup",
    MACRO = "macro",
    META = "meta",
    NAME = "name",
    PACKAGE = "package",
    PROCESS = "process",
    RECORD = "record",
    SUM = "sum",
    SYMBOL = "symbol",
    TALIAS = "talias",
    TAPP = "tapp",
    TBUILTIN = "tbuiltin",
    TNOMINAL = "tnominal",
    TSIGMA = "tsigma",
    VARIABLE = "variable",
    VCS = "vcs",
}

/**
 * Kythe fact names. See
 *   https://github.com/kythe/kythe/tree/master/kythe/data/schema_index.textproto#L92
 */
export enum FactName {
    BUILD_CONFIG = "/kythe/build/config",
    CODE = "/kythe/code",
    COMPLETE = "/kythe/complete",
    CONTEXT_URL = "/kythe/context/url",
    DETAILS = "/kythe/details",
    DOC_URI = "/kythe/doc/uri",
    LABEL = "/kythe/label",
    LOC_END = "/kythe/loc/end",
    LOC_START = "/kythe/loc/start",
    MESSAGE = "/kythe/message",
    NODE_KIND = "/kythe/node/kind",
    PARAM_DEFAULT = "/kythe/param/default",
    RULE_CLASS = "/kythe/ruleclass",
    SNIPPET_END = "/kythe/snippet/end",
    SNIPPET_START = "/kythe/snippet/start",
    SUBKIND = "/kythe/subkind",
    TEXT = "/kythe/text",
    TEXT_ENCODING = "/kythe/text/encoding",
    VISIBILITY = "/kythe/visibility",
}

/**
 * Kythe fact subkinds. See
 *   https://github.com/kythe/kythe/tree/master/kythe/data/schema_index.textproto#L115
 */
export enum Subkind {
    CATEGORY = "category",
    CLASS = "class",
    CONSTRUCTOR = "constructor",
    DESTRUCTOR = "destructor",
    ENUM = "enum",
    ENUM_CLASS = "enumClass",
    FIELD = "field",
    IMPLICIT = "implicit",
    IMPORT = "import",
    INITIALIZER = "initializer",
    LOCAL = "local",
    LOCAL_PARAMETER = "local/parameter",
    METHOD = "method",
    NAMESPACE = "namespace",
    STRUCT = "struct",
    TYPE = "type",
    UNION = "union",
}

/**
 * An Entry in the Kythe schema is either a Fact or an Edge that describes at
 * least one node.
 */
export interface Entry {
    source: VName;
    label: string;
}

/**
 * A Fact is an Entry that also has a fact `value`.
 */
export interface Fact extends Entry {
    value: string;
}

/**
 * An Edge is an Entry that also has a `target` and an edge `kind`.
 */
export interface Edge extends Entry {
    target: VName;
    kind: string;
}

/**
 * A Kythe fact expressed in the schema JSON-style encoding.
 */
export interface JSONFact {
    source: VName;
    fact_name: FactName;
    fact_value: string;
}

/**
 * A Kythe edge expressed in the schema JSON-style encoding.
 */
export interface JSONEdge {
    source: VName;
    target: VName;
    edge_kind: EdgeKind | OrdinalEdge;
    fact_name: "/";
}
