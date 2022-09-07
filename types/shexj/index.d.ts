// Type definitions for non-npm package ShExJ 2.1
// Project: https://github.com/shexSpec/shex
// Definitions by: Eric Prud'hommeaux <https://github.com/ericprud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

// Conforms to <https://shex.io/shex-semantics/#shexj> and shex-test@2.2.0-alpha.1

export {}; // only export specified symbols (strict-export-declare-modifiers)

/**
 * Structure for expressing a Shape Expression schema.
 * @see <a href="http://shex.io/shex-semantics/#dfn-shapes-schema">ShEx Schema definition</a>
 */
export interface Schema {
    /**
     * Mandatory type "Schema".
     */
    type: "Schema";
    /**
     * JSON-LD <a href="https://www.w3.org/TR/json-ld11/#the-context">@context</a> for ShEx.
     */
    "@context"?: "http://www.w3.org/ns/shex.jsonld" | undefined;
    /**
     * List of semantic actions to be executed when evaluating conformance.
     */
    startActs?: SemAct[] | undefined; // +
    /**
     * Identifies default starting shape expression.
     */
    start?: shapeExprOrRef | undefined;
    /**
     * List of ShEx schemas to <a href="http://shex.io/shex-semantics/#import">import</a> when processing this schema.
     */
    imports?: IRIREF[] | undefined; // +
    /**
     * The list of {@link ShapeDecl}s defined in this schema. Each MUST include and {@link ShapeOr#id}.
     */
    shapes?: ShapeDecl[] | undefined; // +
}

/**
 * A declaration for a shapeExpr with added inheritance constraints.
 * @see <a href="http://shex.io/shex-semantics/#dfn-shapedecl">ShEx ShapeDecl definition</a>
 */
export interface ShapeDecl {
    /**
     * Mandatory type "ShapeDecl".
     */
    type: "ShapeDecl";
    /**
     * The identifier is an <a href="https://www.w3.org/TR/json-ld11/#node-identifiers">IRI</a> or a <a href="https://www.w3.org/TR/json-ld11/#identifying-blank-nodes">BlankNode</a>
     * as expressed in <a href="https://www.w3.org/TR/json-ld11/">JSON-LD 1.1</a>.
     */
    id: shapeDeclLabel;
    /**
     * Whether this ShapeDecl participates in <a href="http://shex.io/shex-semantics/#dfn-inheritanceSubstitution">inheritance substitution</a>.
     */
    abstract?: BOOL | undefined;
    /**
     * The list of {@link shapeExprOrRef}s that a neighborhood MUST conform to in order to conform to this ShapeDecl.
     */
    restricts?: shapeExprOrRef[] | undefined; // +
    /**
     * The {@link shapeExpr} to which this neighborhood MUST also conform.
     */
    shapeExpr: shapeExpr;
}

/**
 * Union of shape expression types.
 * @see <a href="http://shex.io/shex-semantics/#dfn-shapeexpr">ShEx shapeExpr definition</a>
 */
export type shapeExpr = ShapeOr | ShapeAnd | ShapeNot | NodeConstraint | Shape | ShapeExternal;

/**
 * Union of shapeExpr and shapeDeclRef.
 * @see <a href="http://shex.io/shex-semantics/#dfn-shapeexpr">ShEx shapeExpr definition</a>
 */
export type shapeExprOrRef = shapeExpr | shapeDeclRef;

/**
 * A non-exclusive choice of shape expressions; considered conformant if any of {@link #shapeExprs} conforms.
 * @see <a href="http://shex.io/shex-semantics/#dfn-shapeor">ShEx shapeExpr definition</a>
 */
export interface ShapeOr {
    /**
     * Mandatory type "ShapeOr".
     */
    type: "ShapeOr";
    /**
     * List of two or more {@link shapeExprOrRef}s in this disjunction.
     */
    shapeExprs: shapeExprOrRef[]; // {2,}
}

/**
 * A conjunction of shape expressions; considered conformant if each conjunct conforms.
 * @see <a href="http://shex.io/shex-semantics/#dfn-shapeor">ShEx shapeExpr definition</a>
 */
export interface ShapeAnd {
    /**
     * Mandatory type "ShapeAnd".
     */
    type: "ShapeAnd";
    /**
     * List of two or more {@link shapeExprOrRef}s in this conjunction.
     */
    shapeExprs: shapeExprOrRef[]; // {2,}
}

/**
 * A negated shape expressions; considered conformant if {@link #shapeExpr} is not conformant.
 * @see <a href="http://shex.io/shex-semantics/#dfn-shapenot">ShEx shapeExpr definition</a>
 */
export interface ShapeNot {
    /**
     * Mandatory type "ShapeNot".
     */
    type: "ShapeNot";
    /**
     * The {@link shapeExprOrRef} that must be non-conformant for this shape expression to be conformant.
     */
    shapeExpr: shapeExprOrRef;
}

/**
 * A shape expression not defined in this schema or in any imported schema. The definition of this shape expression is NOT defined by ShEx.
 * @see <a href="http://shex.io/shex-semantics/#dfn-shapeexternal">ShEx shapeExpr definition</a>
 */
export interface ShapeExternal {
    /**
     * Mandatory type "ShapeExternal".
     */
    type: "ShapeExternal";
}

/**
 * A reference a shape expression.
 * The reference is an <a href="https://www.w3.org/TR/json-ld11/#node-identifiers">IRI</a> or a <a href="https://www.w3.org/TR/json-ld11/#identifying-blank-nodes">BlankNode</a>
 * as expressed in <a href="https://www.w3.org/TR/json-ld11/">JSON-LD 1.1</a>.
 */
export type shapeDeclRef = shapeDeclLabel;

/**
 * An identifier for a shape expression.
 * The identifier is an <a href="https://www.w3.org/TR/json-ld11/#node-identifiers">IRI</a> or a <a href="https://www.w3.org/TR/json-ld11/#identifying-blank-nodes">BlankNode</a>
 * as expressed in <a href="https://www.w3.org/TR/json-ld11/">JSON-LD 1.1</a>.
 */
export type shapeDeclLabel = IRIREF | BNODE;

/**
 * A collection of constraints on <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-node">RDF Term</a>s expected for conformance.
 * The identifier is an <a href="https://www.w3.org/TR/json-ld11/#node-identifiers">IRI</a> or a <a href="https://www.w3.org/TR/json-ld11/#identifying-blank-nodes">BlankNode</a>
 * as expressed in <a href="https://www.w3.org/TR/json-ld11/">JSON-LD 1.1</a>.
 */
export interface NodeConstraint extends xsFacets, semactsAndAnnotations {
    /**
     * Mandatory type "NodeConstraint".
     */
    type: "NodeConstraint";
    /**
     * Type of <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-node">RDF Term</a> expected for a conformant RDF node.
     * @see <a href="http://shex.io/shex-semantics/#nodeKind">ShEx nodeKind definition</a>
     */
    nodeKind?: "iri" | "bnode" | "nonliteral" | "literal" | undefined;
    /**
     * The <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-datatype-iri">RDF Literal datatype IRITerm</a> expected for a conformant RDF node.
     * @see <a href="http://shex.io/shex-semantics/#datatype">ShEx datatype definition</a>
     */
    datatype?: IRIREF | undefined;
    /**
     * The set of permissible values.
     * @see <a href="http://shex.io/shex-semantics/#values">ShEx values definition</a>
     */
    values?: valueSetValue[] | undefined;
}

/**
 * The set of XML Schema Facets supported in ShEx; defers to {@link stringFacets} and {@link numericFacets}.
 * @see <a href="http://shex.io/shex-semantics/#xs-string">ShEx String Facet Constraints</a> and <a href="http://shex.io/shex-semantics/#xs-numeric">ShEx Numeric Facet Constraints</a>.
 */
export interface xsFacets extends stringFacets, numericFacets {
}

/**
 * The set of <a href="https://www.w3.org/TR/xmlschema-2/#facets">XML Schema Facets</a> applying to <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-lexical-form">lexical forms of RDF terms</a>.
 * @see <a href="http://shex.io/shex-semantics/#xs-string">ShEx String Facet Constraints</a>.
 */
export interface stringFacets {
    /**
     * Expected length of the lexical form of an RDF Term.
     */
    length?: INTEGER | undefined;
    /**
     * Expected minimum length of the lexical form of an RDF Term.
     */
    minlength?: INTEGER | undefined;
    /**
     * Expected maximum length of the lexical form of an RDF Term.
     */
    maxlength?: INTEGER | undefined;
    /**
     * Regular expression which the lexical forn of an RDF Term must match.
     */
    pattern?: STRING | undefined;
    /**
     * Optional flags for the regular expression in {@link pattern}.
     */
    flags?: STRING | undefined;
}

/**
 * The set of <a href="https://www.w3.org/TR/xmlschema-2/#facets">XML Schema Facets</a> applying to <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-value-space">numeric values of RDF terms</a>.
 * @see <a href="http://shex.io/shex-semantics/#xs-numeric">ShEx Numeric Facet Constraints</a>.
 */
export interface numericFacets {
    /**
     * Conformant <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-literal">RDF Literal</a> has as a numeric value <= {@link mininclusive}.
     */
    mininclusive?: numericLiteral | undefined;
    /**
     * Conformant <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-literal">RDF Literal</a> has as a numeric value < {@link minexclusive}.
     */
    minexclusive?: numericLiteral | undefined;
    /**
     * Conformant <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-literal">RDF Literal</a> has as a numeric value > {@link maxinclusive}.
     */
    maxinclusive?: numericLiteral | undefined;
    /**
     * Conformant <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-literal">RDF Literal</a> has as a numeric value >= {@link maxexclusive}.
     */
    maxexclusive?: numericLiteral | undefined;
    /**
     * Conformant <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-literal">RDF Literal</a> has as a numeric value whose canonical form has {@link totaldigits} digits.
     * @see <a href="http://shex.io/shex-semantics/#nodeSatisfies-totaldigits">ShEx totalDigits definition</a>
     */
    totaldigits?: INTEGER | undefined;
    /**
     * Conformant <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-literal">RDF Literal</a> has as a numeric value whose canonical form has {@link fractiondigits} digits.
     * @see <a href="http://shex.io/shex-semantics/#nodeSatisfies-fractiondigits">ShEx fractionDigits definition</a>
     */
    fractiondigits?: INTEGER | undefined;
}

export interface semactsAndAnnotations {
    /**
     * List of semantic actions to be executed when evaluating conformance.
     */
    semActs?: SemAct[] | undefined; // +;
    /**
     * List of {@link SemAct#predicate}/{@link SemAct#object} annotations.
     */
    annotations?: Annotation[] | undefined; // +
}

/**
 * Union of numeric types in ShEx used in {@link numericFacets}s.
 */
export type numericLiteral = INTEGER | DECIMAL | DOUBLE;

/**
 * Union of numeric types that may appear in a value set.
 * @see {@link NodeConstraint#values}.
 */
export type valueSetValue = objectValue | IriStem | IriStemRange | LiteralStem | LiteralStemRange | Language | LanguageStem | LanguageStemRange;

/**
 * JSON-LD representation of a URL or a Literal.
 */
export type objectValue = IRIREF | ObjectLiteral;

/**
 * A <a href="https://www.w3.org/TR/json-ld11/#value-objects">JSON-LD Value Object</a> used to express an <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-literal">RDF Literal</a>.
 */
export interface ObjectLiteral {
    /**
     * The <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-lexical-form">lexical form</a> of an RDF Literal.
     */
    value: STRING;
    /**
     * The <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-language-tag">language tag</a> of an RDF Literal.
     */
    language?: STRING | undefined;
    /**
     * The <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-datatype">datatype</a> of an RDF Literal.
     */
    type?: STRING | undefined;
}

/**
 * Matchs an <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-iri">RDF IRI</a> starting with the character sequence in {@link stem}.
 */
export interface IriStem {
    /**
     * Mandatory type "IriStem".
     */
    type: "IriStem";
    /**
     * substring of IRI to be matched.
     */
    stem: IRIREF;
}

/**
 * Filters a matching <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-iri">RDF IRI</a>s through a list of exclusions.
 * The initial match is made on an IRI stem per {@link IriStem} or a {@link Wildcard} to accept any IRI.
 * The {@link exclusion}s are either specific IRIs or {@link IRIStem}s.
 */
export interface IriStemRange {
    /**
     * Mandatory type "IriStemRange".
     */
    type: "IriStemRange";
    /**
     * substring of IRI to be matched or a {@link Wildcard} matching any IRI.
     */
    stem: IRIREF | Wildcard;
    /**
     * IRIs or {@link IRIStem}s to exclude.
     */
    exclusions: Array<IRIREF | IriStem>; // +
}

/**
 * Matchs an <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-literal">RDF Literal</a> starting with the character sequence in {@link stem}.
 */
export interface LiteralStem {
    /**
     * Mandatory type "LiteralStem".
     */
    type: "LiteralStem";
    /**
     * substring of Literal to be matched.
     */
    stem: STRING;
}

/**
 * Filters a matching <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-literal">RDF Literal</a>s through a list of exclusions.
 * The initial match is made on an Literal stem per {@link LiteralStem} or a {@link Wildcard} to accept any Literal.
 * The {@link exclusion}s are either specific Literals or {@link LiteralStem}s.
 */
export interface LiteralStemRange {
    /**
     * Mandatory type "LiteralStemRange".
     */
    type: "LiteralStemRange";
    /**
     * substring of Literal to be matched or a {@link Wildcard} matching any Literal.
     */
    stem: STRING | Wildcard;
    /**
     * Literals or {@link LiteralStem}s to exclude.
     */
    exclusions: Array<STRING | LiteralStem>; // +
}

/**
 * An <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-language-tag">RDF Language Tag</a>.
 */
export interface Language {
    /**
     * Mandatory type "Language".
     */
    type: "Language";
    /**
     * The <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-lexical-form">lexical representation</a> of an RDF Language Tag.
     */
    languageTag: LANGTAG;
}

/**
 * Matchs an <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-language-tag">RDF Language Tag</a> starting with the character sequence in {@link stem}.
 */
export interface LanguageStem {
    /**
     * Mandatory type "LanguageStem".
     */
    type: "LanguageStem";
    /**
     * substring of Language Tag to be matched.
     */
    stem: LANGTAG;
}

/**
 * Filters a matching <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-langugae-tag">RDF Language Tag</a>s through a list of exclusions.
 * The initial match is made on an Language Tag stem per {@link Language TagStem} or a {@link Wildcard} to accept any Language Tag.
 * The {@link exclusion}s are either specific Language Tags or {@link Language TagStem}s.
 */
export interface LanguageStemRange {
    /**
     * Mandatory type "LanguageStemRange".
     */
    type: "LanguageStemRange";
    /**
     * substring of Language-Tag to be matched or a {@link Wildcard} matching any Language Tag.
     */
    stem: LANGTAG | Wildcard;
    /**
     * Language Tags or {@link LanguageStem}s to exclude.
     */
    exclusions: Array<LANGTAG | LanguageStem>; // +
}

/**
 * An empty object signifying than any item may be matched.
 * This is used in {@link IriStemRange}, {@link LiteralStemRange} and {@link LanguageStemRange}.
 */
export interface Wildcard {
    /**
     * Mandatory type "Wildcard".
     */
    type: "Wildcard";
}

/**
 * A collection of {@link tripleExpr}s which must be matched by <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-triple">RDF Triple</a>s in conformance data.
 */
export interface Shape extends semactsAndAnnotations {
    /**
     * Mandatory type "Shape".
     */
    type: "Shape";
    /**
     * Only the predicates mentioned in the {@link expression} may appear in conformant data.
     */
    closed?: BOOL | undefined;
    /**
     * Permit extra triples with these predicates to appear in triples which don't match any {@link TripleConstraint}s mentioned in the {@link expression}.
     */
    extra?: IRIREF[] | undefined;
    /**
     * List of one or more {@link shapeExprOrRef}s that a neighborhood must satisfy in order to conform to this shape.
     */
    extends?: shapeExprOrRef[];
    /**
     * A tree of {@link tripleExpr}s specifying a set triples into or out of conformant <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-node">RDF Nodes</a>.
     */
    expression?: tripleExprOrRef | undefined;
}

/**
 * Union of triple expression types.
 * @see <a href="http://shex.io/shex-semantics/#dfn-tripleexpr">ShEx tripleExpr definition</a>
 */
export type tripleExpr = EachOf | OneOf | TripleConstraint;

/**
 * A tripleExpr or a label to one.
 * @see <a href="http://shex.io/shex-semantics/#dfn-tripleexpr">ShEx tripleExpr definition</a>
 */
export type tripleExprOrRef = tripleExpr | tripleExprRef;

/**
 * Common attributes appearing in every form of {@link tripleExpr}.
 */
export interface tripleExprBase extends semactsAndAnnotations {
    /**
     * Optional identifier for {@link tripleExpr}s for reference by {@link tripleExprRef}.
     * The identifier is an <a href="https://www.w3.org/TR/json-ld11/#node-identifiers">IRI</a> or a <a href="https://www.w3.org/TR/json-ld11/#identifying-blank-nodes">BlankNode</a>
     * as expressed in <a href="https://www.w3.org/TR/json-ld11/">JSON-LD 1.1</a>.
     */
    id?: tripleExprLabel | undefined;
    /**
     * Minimum number of times matching triples must appear in conformant data.
     */
    min?: INTEGER | undefined;
    /**
     * Maximum number of times matching triples must appear in conformant data.
     */
    max?: INTEGER | undefined;
}

/**
 * A list of of triple expressions; considered conformant if there is some conforming mapping of the examined triples to the {@link #tripleExprs}.
 * @see <a href="http://shex.io/shex-semantics/#dfn-eachof">ShEx EachOf definition</a>
 */
export interface EachOf extends tripleExprBase {
    /**
     * Mandatory type "EachOf".
     */
    type: "EachOf";
    expressions: tripleExprOrRef[]; // {2,}
}

/**
 * An exclusive choice of triple expressions; considered conformant if exactly one of {@link #shapeExprs} conforms.
 * @see <a href="http://shex.io/shex-semantics/#dfn-oneof">ShEx OneOf definition</a>
 */
export interface OneOf extends tripleExprBase {
    /**
     * Mandatory type "OneOf".
     */
    type: "OneOf";
    expressions: tripleExprOrRef[]; // {2,}
}

/**
 * A template matching a number of triples attached to the node being validated.
 */
export interface TripleConstraint extends tripleExprBase {
    /**
     * Mandatory type "TripleConstraint".
     */
    type: "TripleConstraint";
    /**
     * If false, the TripleConstraint matches the a triple composed of a focus node, the {@link predicate} and an object matching the (optional) {@link shapeExpr}.
     * If true, the TripleConstraint matches the a triple composed of a subject matching the (optional) {@link shapeExpr}, the {@link predicate} and focus node.
     */
    inverse?: BOOL | undefined;
    /**
     * The predicate expected in a matching <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-triple">RDF Triple</a>.
     */
    predicate: IRIREF;
    /**
     * A {@link shapeExpr} matching a conformant <a href="https://www.w3.org/TR/rdf11-concepts/#dfn-triple">RDF Triple</a>s subject or object, depending on the value of {@link inverse}.
     */
    valueExpr?: shapeExprOrRef | undefined;
}

/**
 * A reference a triple expression.
 * The reference is an <a href="https://www.w3.org/TR/json-ld11/#node-identifiers">IRI</a> or a <a href="https://www.w3.org/TR/json-ld11/#identifying-blank-nodes">BlankNode</a>
 * as expressed in <a href="https://www.w3.org/TR/json-ld11/">JSON-LD 1.1</a>.
 */
export type tripleExprRef = tripleExprLabel;

/**
 * An identifier for a triple expression.
 * The identifier is an <a href="https://www.w3.org/TR/json-ld11/#node-identifiers">IRI</a> or a <a href="https://www.w3.org/TR/json-ld11/#identifying-blank-nodes">BlankNode</a>
 * as expressed in <a href="https://www.w3.org/TR/json-ld11/">JSON-LD 1.1</a>.
 */
export type tripleExprLabel = IRIREF | BNODE;

/**
 * An extension point for Shape Expressions allowing external code to be invoked during validation.
 */
export interface SemAct {
    /**
     * Mandatory type "SemAct".
     */
    type: "SemAct";
    /*
     * Identifier of the language for this semantic action.
     */
    name: IRIREF;
    /*
     * The actual code to be interpreted/executed.
     * This may be kept separate from the ShEx containing the schema by including only {@link name}s in the schema.
     */
    code?: STRING | undefined;
}

/**
 * An assertion about some part of a ShEx schema which has no affect on conformance checking.
 * These can be useful for documentation, provenance tracking, form generation, etch.
 */
export interface Annotation {
    /**
     * Mandatory type "Annotation".
     */
    type: "Annotation";
    /**
     * The <a href="https://www.w3.org/TR/json-ld11/#node-identifiers">RDF Predicate</a> of the annotation.
     */
    predicate: IRI;
    /**
     * A value for the above {@link predicate}.
     */
    object: objectValue;
}

export type IRIREF = string;
export type BNODE = string;
export type INTEGER = number;
export type STRING = string;
export type DECIMAL = number;
export type DOUBLE = number;
export type LANGTAG = string;
export type BOOL = boolean;
export type IRI = string;
