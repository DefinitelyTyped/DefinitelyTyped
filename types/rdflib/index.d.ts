// Type definitions for rdflib 0.17
// Project: https://github.com/linkeddata/rdflib.js
// Definitions by: Cénotélie <https://github.com/cenotelie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Acknowledgements: This work has been financed by Logilab SA, FRANCE, logilab.fr

/**
 * Class orders
 */
export const ClassOrder: {
    [id: string]: number;
};
/**
 * A type for values that serves as inputs
 */
export type ValueType = Node | Date | string | number | boolean | undefined;
/**
 * The superclass of all RDF Statement objects, that is NamedNode, Literal, BlankNode, etc.
 */
export class Node {
    /**
     * The type of node
     */
    termType: string;
    /**
     * Whether this node is a variable
     */
    isVar: boolean;
    /**
     * The class order for this node
     */
    classOrder: number;
    /**
     * The nod's value
     */
    value: string;
    /**
     * Gets the substituted node for this one, according to the specified bindings
     * @param bindings Bindings of identifiers to nodes
     */
    substitute(bindings: { [id: string]: Node }): Node;
    /**
     * Compares this node with another
     * @param term The other node
     */
    compareTerm(term: Node): number;
    /**
     * Gets whether the two nodes are equal
     * @param other The other node
     */
    equals(other: Node): boolean;
    /**
     * Gets a hash for this node
     */
    hashString(): string;
    /**
     * Gets whether this node is the same as the other one
     * @param other Another node
     */
    sameTerm(other: Node): boolean;
    /**
     * Gets the canonical string representation of this node
     */
    toCanonical(): string;
    /**
     * Gets the n-triples string representation of this node
     */
    toNT(): string;
    /**
     * Gets the string representation of this node
     */
    toString(): string;
    /**
     * Gets a node for the specifed input
     * @param value An input value
     */
    static fromValue(value: ValueType): Node | ValueType;
    /**
     * Gets the javascript object equivalent to a node
     * @param term The RDF node
     */
    static toJS(term: Node): any;
}
/**
 * An empty node
 */
export class Empty extends Node {
    constructor();
    static termType: string;
}
/**
 * A collection of other RDF nodes
 */
export class Collection extends Node {
    /**
     * The identifier for this collection
     */
    id: string;
    /**
     * The nodes in this collection
     */
    elements: Node[];
    /**
     * Whether this collection is closed
     */
    closed: boolean;
    /**
     * Initializes this collection
     * @param initial The initial elements
     */
    constructor(initial: ReadonlyArray<ValueType>);
    /**
     * Appends an element to this collection
     * @param element The new element
     */
    append(element: Node): number;
    /**
     * Closes this collection
     */
    close(): boolean;
    /**
     * Removes the first element from the collection (and return it)
     */
    shift(): Node;
    /**
     * Preprends the specified element to the colelction's front
     * @param element The element to preprend
     */
    unshift(element: Node): number;
    static termType: string;
}
/**
 * An RDF blank node
 */
export class BlankNode extends Node {
    /**
     * The identifier for the blank node
     */
    id: string;
    /**
     * Whether this is a blank node
     */
    isBlank: boolean;
    /**
     * Initializes this node
     * @param id The identifier for the blank node
     */
    constructor(id: string);
    /**
     * Gets a copy of this blank node in the specified formula
     * @param formula The formula
     */
    copy(formula: Formula): BlankNode;
    /**
     * The next unique identifier for blank nodes
     */
    static nextId: number;
    static termType: string;
    static NTAnonymousNodePrefix: string;
}
/**
 * A named (IRI) RDF node
 */
export class NamedNode extends Node {
    /**
     * The URI for this node
     */
    uri: string;
    /**
     * Initializes this node
     * @param iri The IRI for this node
     */
    constructor(iri: NamedNode | string);
    /**
     * Returns an RDF node for the containing directory, ending in slash.
     */
    dir(): NamedNode;
    /**
     * Returns an named node for the whole web site, ending in slash.
     * Contrast with the "origin" which does NOT have a trailing slash
     */
    site(): NamedNode;
    /**
     * Gets the named node for the document
     */
    doc(): NamedNode;
    static termType: string;
    /**
     * Gets a named node from the specified input value
     * @param value An input value
     */
    static fromValue(value: ValueType): NamedNode | ValueType;
}
/**
 * A RDF literal node
 */
export class Literal extends Node {
    /**
     * The language for the literal
     */
    lang: string;
    /**
     * The language for the literal
     */
    language: string;
    /**
     * The literal's datatype as a named node
     */
    datatype: NamedNode;
    /**
     * Initializes this literal
     * @param value The literal's lexical value
     * @param language The language for the literal
     * @param datatype The literal's datatype as a named node
     */
    constructor(value: string, language: string, datatype: NamedNode);
    /**
     * Gets a copy of this literal
     */
    copy(): Literal;
    static termType: string;
    /**
     * Builds a literal node from a boolean value
     * @param value The value
     */
    static fromBoolean(value: boolean): Literal;
    /**
     * Builds a literal node from a date value
     * @param value The value
     */
    static fromDate(value: Date): Literal;
    /**
     * Builds a literal node from a number value
     * @param value The value
     */
    static fromNumber(value: number): Literal;
    /**
     * Builds a literal node from an input value
     * @param value The input value
     */
    static fromValue(value: ValueType): Literal | ValueType;
}
/**
 * Variables are placeholders used in patterns to be matched.
 * In cwm they are symbols which are the formula's list of quantified variables.
 * In sparql they are not visibly URIs.  Here we compromise, by having
 * a common special base URI for variables. Their names are uris,
 * but the ? notation has an implicit base uri of 'varid:'
 */
export class Variable extends Node {
    /**
     * The base string for a variable's name
     */
    base: string;
    /**
     * The unique identifier of this variable
     */
    uri: string;
    /**
     * Initializes this variable
     * @param name The variable's name
     */
    constructor(name: string);
    static termType: string;
}
/**
 * The RDF default graph
 */
export class DefaultGraph extends Node {
    /**
     * Initializes this graph
     */
    constructor();
}
export namespace uri {
    /**
     * Gets the document part of an URI
     * @param uri The URI
     */
    function docpart(uri: string): string;
    /**
     * Gets the document part of an URI as a named node
     * @param x The URI
     */
    function document(x: string): NamedNode;
    /**
     * Gets the hostname in an URI
     * @param u The URI
     */
    function hostpart(u: string): string;
    /**
     * Joins an URI with a base
     * @param given The relative part
     * @param base The base URI
     */
    function join(given: string, base: string): string;
    /**
     * Gets the protocol part of an URI
     * @param uri The URI
     */
    function protocol(uri: string): string;
    /**
     * Gets a relative uri
     * @param base The base URI
     * @param uri The absolute URI
     */
    function refTo(base: string, uri: string): string;
}
export namespace log {
    /**
     * Logs a debug event
     * @param x The event
     */
    function debug(x: any): void;
    /**
     * Logs a warning event
     * @param x The event
     */
    function warn(x: any): void;
    /**
     * Logs an information event
     * @param x The event
     */
    function info(x: any): void;
    /**
     * Logs an error event
     * @param x The event
     */
    function error(x: any): void;
    /**
     * Logs a success event
     * @param x The event
     */
    function success(x: any): void;
    /**
     * Logs a message event
     * @param x The event
     */
    function msg(x: any): void;
}
/**
 * An RDF statement (subject, predicate, object)
 */
export class Statement {
    /**
     * The statement's subject
     */
    subject: Node;
    /**
     * The statement's predicate
     */
    predicate: Node;
    /**
     * The statement's object
     */
    object: Node;
    /**
     * The origin of this statement
     */
    why: ValueType;
    /**
     * The graph the contains this statement
     */
    graph: ValueType;
    /**
     * Initializes this statement
     * @param subject The statement's subject
     * @param predicate The statement's predicate
     * @param object The statement's object
     * @param graph The graph the contains this statement
     */
    constructor(
        subject: ValueType,
        predicate: ValueType,
        object: ValueType,
        graph: ValueType
    );
    /**
     * Gets whether two statements are the same
     * @param other The other statement
     */
    equals(other: Statement): boolean;
    /**
     * Gets this statement with the bindings substituted
     * @param bindings The bindings
     */
    substitute(bindings: { [id: string]: Node }): Statement;
    /**
     * Gets the canonical string representation of this statement
     */
    toCanonical(): string;
    /**
     * Gets the n-triples string representation of this statement
     */
    toNT(): string;
    /**
     * Gets the string representation of this statement
     */
    toString(): string;
}
export namespace convert {
    /**
     * Converts an n3 string to JSON
     * @param n3String The n3 string
     * @param jsonCallback Callback when the operation terminated
     */
    function convertToJson(
        n3String: string,
        jsonCallback: (err: string, jsonString: string) => void
    ): void;
    /**
     * Converts an n3 string to n-quads
     * @param n3String The n3 string
     * @param nquadCallback Callback when the operation terminated
     */
    function convertToNQuads(
        n3String: string,
        nquadCallback: (err: string, nquadString: string) => void
    ): void;
}
/**
 * A formula, or store of RDF statements
 */
export class Formula extends Node {
    /**
     * The stored statements
     */
    statements: Statement[];
    /**
     * Initializes this formula
     * @param statements The initial statements in this formulat
     * @param constraints The additional constraints
     * @param initBindings The initial bindings
     * @param optional
     */
    constructor(
        statements: ReadonlyArray<Statement>,
        constraints: ReadonlyArray<any>,
        initBindings: {
            [id: string]: Node;
        },
        optional: ReadonlyArray<any>
    );
    /**
     * Adds a statement to this formula
     * @param s The subject
     * @param p The predicate
     * @param o The object
     * @param g The graph that contains the statement
     */
    add(s: ValueType, p: ValueType, o: ValueType, g: ValueType): number;
    /**
     * Adds a statement to this formula
     * @param st The statement to add
     */
    addStatement(st: Statement): number;
    /**
     * Gets a node that matches the specified pattern
     * @param s The subject
     * @param p The predicate
     * @param o The object
     * @param g The graph that contains the statement
     */
    any(s: ValueType, p: ValueType, o: ValueType, g: ValueType): Node;
    /**
     * Gets a blank node
     * @param id The node's identifier
     */
    bnode(id: string): BlankNode;
    /**
     * Finds the types in the list which have no *stored* subtypes
     * These are a set of classes which provide by themselves complete
     * information -- the other classes are redundant for those who
     * know the class DAG.
     * @param types A map of the types
     */
    bottomTypeURIs(types: {
        [id: string]: string | NamedNode;
    }): {
        [id: string]: string | NamedNode;
    };
    /**
     * Gets a new collection
     */
    collection(): Collection;
    /**
     * Gets each node that matches the specified pattern
     * @param s The subject
     * @param p The predicate
     * @param o The object
     * @param g The graph that contains the statement
     */
    each(s: ValueType, p: ValueType, o: ValueType, g: ValueType): Node[];
    /**
     * Gets whether this formula is equals to the other one
     * @param other The other formula
     */
    equals(other: Formula): boolean;
    /**
     * For thisClass or any subclass, anything which has it is its type
     * or is the object of something which has the type as its range, or subject
     * of something which has the type as its domain
     * We don't bother doing subproperty (yet?)as it doesn't seeem to be used
     * much.
     * Get all the Classes of which we can RDFS-infer the subject is a member
     * @param thisClass A named node
     */
    findMembersNT(
        thisClass: Node
    ): {
        [uri: string]: Statement;
    };
    /**
     * For thisClass or any subclass, anything which has it is its type
     * or is the object of something which has the type as its range, or subject
     * of something which has the type as its domain
     * We don't bother doing subproperty (yet?)as it doesn't seeem to be used
     * much.
     * Get all the Classes of which we can RDFS-infer the subject is a member
     * @param subject A named node
     */
    findMemberURIs(
        subject: Node
    ): {
        [uri: string]: Statement;
    };
    /**
     * Get all the Classes of which we can RDFS-infer the subject is a superclass
     * Returns a hash table where key is NT of type and value is statement why we
     * think so.
     * Does NOT return terms, returns URI strings.
     * We use NT representations in this version because they handle blank nodes.
     * @param subject A subject node
     */
    findSubClassesNT(
        subject: Node
    ): {
        [uri: string]: boolean;
    };
    /**
     * Get all the Classes of which we can RDFS-infer the subject is a subclass
     * Returns a hash table where key is NT of type and value is statement why we
     * think so.
     * Does NOT return terms, returns URI strings.
     * We use NT representations in this version because they handle blank nodes.
     * @param subject A subject node
     */
    findSuperClassesNT(
        subject: Node
    ): {
        [uri: string]: boolean;
    };
    /**
     * Get all the Classes of which we can RDFS-infer the subject is a member
     * todo: This will loop is there is a class subclass loop (Sublass loops are
     * not illegal)
     * Returns a hash table where key is NT of type and value is statement why we
     * think so.
     * Does NOT return terms, returns URI strings.
     * We use NT representations in this version because they handle blank nodes.
     * @param subject A subject node
     */
    findTypesNT(
        subject: Node
    ): {
        [uri: string]: boolean;
    };
    /**
     * Get all the Classes of which we can RDFS-infer the subject is a member
     * todo: This will loop is there is a class subclass loop (Sublass loops are
     * not illegal)
     * Returns a hash table where key is NT of type and value is statement why we
     * think so.
     * Does NOT return terms, returns URI strings.
     * We use NT representations in this version because they handle blank nodes.
     * @param subject A subject node
     */
    findTypeURIs(
        subject: Node
    ): {
        [uri: string]: boolean;
    };
    /**
     * Trace the statements which connect directly, or through bnodes
     * Returns an array of statements
     * doc param may be null to search all documents in store
     * @param subject A subject node
     * @param doc A document (the graph that contains statements)
     * @param excludePredicateURIs The predicate URIs to exclude
     */
    connectedStatements(
        subject: Node,
        doc: ValueType,
        excludePredicateURIs: ReadonlyArray<string>
    ): Statement[];
    /**
     * Creates a new empty formula
     */
    formula(): Formula;
    /**
     * Creates a new empty indexed formulat
     * @param features The list of features
     */
    formula(features: ReadonlyArray<string>): IndexedFormula;
    /**
     * Transforms an NTriples string format into a Node.
     * The bnode bit should not be used on program-external values; designed
     * for internal work such as storing a bnode id in an HTML attribute.
     * This will only parse the strings generated by the vaious toNT() methods.
     * @param str A string representation
     */
    fromNT(str: string): Node;
    /**
     * Gets whether this formula holds the specified statement
     * @param s A subject
     * @param p A predicate
     * @param o An object
     * @param g A containing graph
     */
    holds(s: ValueType, p: ValueType, o: ValueType, g: ValueType): boolean;
    /**
     * Gets whether this formula holds the specified statement
     * @param s A statement
     */
    holds(s: Statement | ReadonlyArray<Statement>): boolean;
    /**
     * Gets whether this formula holds the specified statement
     * @param st A statement
     */
    holdsStatement(st: Statement): boolean;
    /**
     * Gets a collection from a list of values
     * @param values The values
     */
    list(values: Iterable<ValueType>): Collection;
    /**
     * Gets a literal node
     * @param val The literal's lexical value
     * @param lang The language
     * @param dt The datatype as a named node
     */
    literal(val: string, lang: string, dt: NamedNode): Literal;
    /**
     * Transform a collection of NTriple URIs into their URI strings
     * @param t some iterable colletion of NTriple URI strings
     * @return a collection of the URIs as strings
     */
    NTtoURI(t: {
        [uri: string]: any;
    }): {
        [uri: string]: any;
    };
    /**
     * Serializes this formula
     * @param base The base string
     * @param contentType The content type of the syntax to use
     * @param provenance The provenance URI
     */
    serialize(base: string, contentType: string, provenance: string): string;
    /**
     * Gets a new formula with the substituting bindings applied
     * @param bindings The bindings to substitute
     */
    substitute(bindings: { [id: string]: Node }): Formula;
    /**
     * Gets an named node for an URI
     * @param uri The URI
     */
    sym(uri: string | NamedNode): NamedNode;
    /**
     * Gets the node matching the specified pattern
     * @param s The subject
     * @param p The predicate
     * @param o The object
     * @param g The graph that contains the statement
     */
    the(s: ValueType, p: ValueType, o: ValueType, g: ValueType): Node;
    /**
     * RDFS Inference
     * These are hand-written implementations of a backward-chaining reasoner
     * over the RDFS axioms.
     * @param seeds A hash of NTs of classes to start with
     * @param predicate The property to trace though
     * @param inverse Trace inverse direction
     */
    transitiveClosure(
        seeds: {
            [uri: string]: boolean;
        },
        predicate: Node,
        inverse: Node
    ): {
        [uri: string]: boolean;
    };
    /**
     * Finds the types in the list which have no *stored* supertypes
     * We exclude the universal class, owl:Things and rdf:Resource, as it is
     * information-free.
     * @param types The types
     */
    topTypeURIs(types: {
        [id: string]: string | NamedNode;
    }): {
        [id: string]: string | NamedNode;
    };
    /**
     * Gets the number of statements in this formulat that matches the specified pattern
     * @param s The subject
     * @param p The predicate
     * @param o The object
     * @param g The graph that contains the statement
     */
    whether(s: ValueType, p: ValueType, o: ValueType, g: ValueType): number;
    /**
     * Serializes this formulat to a string
     */
    toString(): string;
    /**
     * Gets a namespace for the specified namespace's URI
     * @param nsuri The URI for the namespace
     */
    ns(nsuri: string): (ln: string) => NamedNode;
    /**
     * Gets a new variable
     * @param name The variable's name
     */
    variable(name: string): Variable;
    static termType: string;
}
/**
 * A formula (set of triples) which indexes by predicate, subject and object.
 * It "smushes"  (merges into a single node) things which are identical
 * according to owl:sameAs or an owl:InverseFunctionalProperty
 * or an owl:FunctionalProperty
 */
export class IndexedFormula extends Formula {
    /**
     * The number of statements in this formula
     */
    length: number;
    /**
     * Creates a new formula
     * @param features The list of features to support
     */
    constructor(features: ReadonlyArray<string>);
    /**
     * Gets the URI of the default graph
     */
    static defaultGraphURI(): string;
    /**
     * Gets the statements matching the specified pattern
     * @param subj The subject
     * @param pred The predicate
     * @param obj The object
     * @param why The graph that contains the statement
     * @param justOne Whether to only get one statement
     */
    statementsMatching(
        subj: Node,
        pred: Node,
        obj: Node,
        why: Node,
        justOne: boolean
    ): Statement[];
    /**
     * Adds all the statements to this formula
     * @param statements A collection of statements
     */
    addAll(statements: Iterable<Statement>): void;
    /**
     * Gets the value of a node that matches the specified pattern
     * @param s The subject
     * @param p The predicate
     * @param o The object
     * @param g The graph that contains the statement
     */
    anyValue(s: ValueType, p: ValueType, o: ValueType, g: ValueType): string;
    /**
     * Returns the symbol with canonical URI as smushed
     * @param term A RDF node
     */
    canon(term: Node): Node;
    /**
     * Checks this formula for consistency
     */
    check(): void;
    /**
     * Checks a list of statements for consistency
     * @param sts The list of statements to check
     * @param from An index with the array ['subject', 'predicate', 'object', 'why']
     */
    checkStatementList(sts: ReadonlyArray<Statement>, from: number): boolean;
    /**
     * Closes this formula (and return it)
     */
    close(): IndexedFormula;
    /**
     * Simplify graph in store when we realize two identifiers are equivalent
     * We replace the bigger with the smaller.
     * @param u1 The first node
     * @param u2 The second node
     */
    equate(u1: Node, u2: Node): boolean;
    /**
     * eturns any quads matching the given arguments.
     * Standard RDFJS Taskforce method for Source objects, implemented as an
     * alias to `statementsMatching()`
     * @param subject The subject
     * @param predicate The predicate
     * @param object The object
     * @param graph The graph that contains the statement
     */
    match(
        subject: ValueType,
        predicate: ValueType,
        object: ValueType,
        graph: ValueType
    ): Statement[];
    /**
     * Find out whether a given URI is used as symbol in the formula
     * @param uri The URI to look for
     */
    mentionsURI(uri: string): boolean;
    /**
     * Existentials are BNodes - something exists without naming
     * @param uri An URI
     */
    newExistential(uri: string): Node;
    /**
     * Creates a new universal node
     * Universals are Variables
     * @param uri An URI
     */
    newUniversal(uri: string): Node;
    /**
     * Find an unused id for a file being edited: return a symbol
     * (Note: Slow iff a lot of them -- could be O(log(k)) )
     * @param doc A document named node
     */
    nextSymbol(doc: NamedNode): NamedNode;
    /**
     * Removes a statement from this formula
     * @param st A statement to remove
     */
    remove(st: Statement): IndexedFormula;
    /**
     * Removes all statemnts in a doc
     * @param doc The document
     */
    removeDocument(doc: NamedNode): IndexedFormula;
    /**
     * Remove all statements matching args (within limit) *
     * @param subj The subject
     * @param pred The predicate
     * @param obj The object
     * @param why The graph that contains the statement
     * @param limit The number of statements to remove
     */
    removeMany(
        subj: Node,
        pred: Node,
        obj: Node,
        why: Node,
        limit: number
    ): void;
    /**
     * Remove all matching statements
     * @param subject The subject
     * @param predicate The predicate
     * @param object The object
     * @param graph The graph that contains the statement
     */
    removeMatches(
        subject: ValueType,
        predicate: ValueType,
        object: ValueType,
        graph: ValueType
    ): void;
    /**
     * Removes a statement
     * @param st The statement to remove
     */
    removeStatement(st: Statement): Formula;
    /**
     * Removes statements
     * @param sts The statements to remove
     */
    removeStatements(sts: ReadonlyArray<Statement>): Formula;
    /**
     * Return all equivalent URIs by which this is known
     * @param x A named node
     */
    allAliases(x: NamedNode): NamedNode[];
    /**
     * Compare by canonical URI as smushed
     * @param x A named node
     * @param y Another named node
     */
    sameThings(x: NamedNode, y: NamedNode): boolean;
    /**
     * A list of all the URIs by which this thing is known
     * @param term
     */
    uris(term: NamedNode): string[];
}
export namespace DataFactory {
    /**
     * Creates a new blank node
     * @param value The blank node's identifier
     */
    function blankNode(value: string): BlankNode;
    /**
     * Creates a new collection
     * @param elements The initial element
     */
    function collection(elements: ReadonlyArray<ValueType>): Collection;
    /**
     * Gets the default graph
     */
    function defaultGraph(): DefaultGraph;
    /**
     * Creates a new fetcher
     * @param store The store to use
     * @param options The options
     */
    function fetcher(store: Formula, options: any): Fetcher;
    /**
     * Creates a new graph (store)
     */
    function graph(): IndexedFormula;
    /**
     * Creates a new literal node
     * @param val The lexical value
     * @param lang The language
     * @param dt The datatype
     */
    function lit(val: string, lang: string, dt: NamedNode): Literal;
    /**
     * Creates a new literal node
     * @param value The lexical value
     * @param languageOrDatatype Either the language or the datatype
     */
    function literal(
        value: string,
        languageOrDatatype: string | NamedNode
    ): Literal;
    /**
     * Creates a new named node
     * @param value The new named node
     */
    function namedNode(value: string): NamedNode;
    /**
     * Creates a new statement
     * @param subject The subject
     * @param predicate The predicate
     * @param object The object
     * @param graph The containing graph
     */
    function quad(
        subject: Node,
        predicate: Node,
        object: Node,
        graph: Node
    ): Statement;
    /**
     * Creates a new statement
     * @param subject The subject
     * @param predicate The predicate
     * @param object The object
     * @param graph The containing graph
     */
    function st(
        subject: Node,
        predicate: Node,
        object: Node,
        graph: Node
    ): Statement;
    /**
     * Creates a new statement
     * @param subject The subject
     * @param predicate The predicate
     * @param object The object
     */
    function triple(subject: Node, predicate: Node, object: Node): Statement;
    /**
     * Creates a new variable
     * @param name The name for the variable
     */
    function variable(name: string): Variable;
}
export namespace Util {
    /**
     * Gets a named node for a media type
     * @param mediaType A media type
     */
    function mediaTypeClass(mediaType: string): NamedNode;
    /**
     * Gets a named node from the name of a relation
     * @param relation The name of a relation
     */
    function linkRelationProperty(relation: string): NamedNode;
    /**
     * Loads ontologies of the data we load (this is the callback from the kb to
     * the fetcher). Exports as `AJAR_handleNewTerm`
     * @param kb The store
     * @param p A property
     * @param requestedBy
     */
    function AJAR_handleNewTerm(
        kb: Formula,
        p: NamedNode,
        requestedBy: string
    ): Promise<any>;
}
/**
 * A datatype-specific handler for fetching data
 */
export interface Handler {
    response: any;
    dom: any;
}
/**
 * Responsible for fetching RDF data
 */
export class Fetcher {
    store: any;
    timeout: number;
    appNode: BlankNode;
    requested: {
        [uri: string]: any;
    };
    timeouts: any;
    redirectedTo: any;
    constructor(store: any, options: any);
    static HANDLERS: {
        RDFXMLHandler: Handler;
        XHTMLHandler: Handler;
        XMLHandler: Handler;
        HTMLHandler: Handler;
        TextHandler: Handler;
        N3Handler: Handler;
    };
    static CONTENT_TYPE_BY_EXT: {
        [ext: string]: string;
    };
}
/**
 * Gets a node for the specified input
 * @param value An input value
 */
export function term(value: ValueType): Node | Collection | ValueType;
/**
 * Gets a namespace
 * @param nsuri The URI for the namespace
 */
export function Namespace(nsuri: string): (ln: string) => NamedNode;
/**
 * Transforms an NTriples string format into a Node.
 * The bnode bit should not be used on program-external values; designed
 * for internal work such as storing a bnode id in an HTML attribute.
 * This will only parse the strings generated by the vaious toNT() methods.
 * @param str A string representation
 */
export function fromNT(str: string): Node;
/**
 * Creates a new fetcher
 * @param store The store to use
 * @param options The options
 */
export function fetcher(store: Formula, options: any): Fetcher;
/**
 * Creates a new graph (store)
 */
export function graph(): IndexedFormula;
/**
 * Creates a new literal node
 * @param val The lexical value
 * @param lang The language
 * @param dt The datatype
 */
export function lit(val: string, lang: string, dt: NamedNode): Literal;
/**
 * Creates a new statement
 * @param subject The subject
 * @param predicate The predicate
 * @param object The object
 * @param graph The containing graph
 */
export function st(
    subject: Node,
    predicate: Node,
    object: Node,
    graph: Node
): Statement;
/**
 * Creates a new named node
 * @param value The new named node
 */
export function sym(value: string): NamedNode;
/**
 * Creates a new variable
 * @param name The name for the variable
 */
export function variable(name: string): Variable;
/**
 * Creates a new blank node
 * @param value The blank node's identifier
 */
export function blankNode(value: string): BlankNode;
/**
 * Gets the default graph
 */
export function defaultGraph(): DefaultGraph;
/**
 * Creates a new literal node
 * @param value The lexical value
 * @param languageOrDatatype Either the language or the datatype
 */
export function literal(
    value: string,
    languageOrDatatype: string | NamedNode
): Literal;
/**
 * Creates a new named node
 * @param value The new named node
 */
export function namedNode(value: string): NamedNode;
/**
 * Creates a new statement
 * @param subject The subject
 * @param predicate The predicate
 * @param object The object
 * @param graph The containing graph
 */
export function quad(
    subject: Node,
    predicate: Node,
    object: Node,
    graph: Node
): Statement;
/**
 * Creates a new statement
 * @param subject The subject
 * @param predicate The predicate
 * @param object The object
 */
export function triple(subject: Node, predicate: Node, object: Node): Statement;
/**
 * Parse a string and put the result into the graph kb.
 * Normal method is sync.
 * Unfortunately jsdonld is currently written to need to be called async.
 * Hence the mess below with executeCallback.
 * @param str The input string to parse
 * @param kb The store to use
 * @param base The base URI to use
 * @param contentType The content type for the input
 * @param callback The callback to call when the data has been loaded
 */
export function parse(
    str: string,
    kb: Formula,
    base: string,
    contentType: string,
    callback: (error: any, kb: Formula) => void
): void;
/**
 * Get the next available unique identifier
 */
export let NextId: number;
