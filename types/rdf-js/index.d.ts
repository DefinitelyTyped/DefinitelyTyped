// Type definitions for the RDFJS specification 1.0
// Project: https://github.com/rdfjs/representation-task-force
// Definitions by: Ruben Taelman <https://github.com/rubensworks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from "stream";
import { EventEmitter } from "events";

/* Data Interfaces */
/* https://github.com/rdfjs/representation-task-force/blob/master/interface-spec.md#data-interfaces */

/**
 * Abstract interface for RDF terms (subject, predicate, object or graph).
 */
export interface Term {
    /**
     * Contains a value that identifies the concrete interface of the term,
     * since Term itself is not directly instantiated.
     *
     * Possible values include "NamedNode", "BlankNode", "Literal", "Variable" and "DefaultGraph".
     */
    termType: "NamedNode" | "BlankNode" | "Literal" | "Variable" | "DefaultGraph";
    /**
     * Refined by each interface which extends Term
     */
    value: string;

    /**
     * @param {RDF.Term} other The term to compare with.
     * @return {boolean} If the termType is equal and the contents are equal (as defined by concrete subclasses).
     */
    equals(other: Term): boolean;
}

/**
 * Contains an IRI.
 */
export interface NamedNode extends Term {
    /**
     * Contains the constant "NamedNode".
     */
    termType: "NamedNode";
    /**
     * The IRI of the named node (example: `http://example.org/resource`)
     */
    value: string;

    /**
     * @param {RDF.Term} other The term to compare with.
     * @return {boolean} True if and only if other has termType "NamedNode" and the same `value`.
     */
    equals(other: Term): boolean;
}

/**
 * Contains an RDF blank node.
 */
export interface BlankNode extends Term {
    /**
     * Contains the constant "BlankNode".
     */
    termType: "BlankNode";
    /**
     * Blank node name as a string, without any serialization specific prefixes,
     * e.g. when parsing,
     * if the data was sourced from Turtle, remove _:,
     * if it was sourced from RDF/XML, do not change the blank node name (example: blank3).
     */
    value: string;

    /**
     * @param {RDF.Term} other The term to compare with.
     * @return {boolean} True if and only if other has termType "BlankNode" and the same `value`.
     */
    equals(other: Term): boolean;
}

/**
 * An RDF literal, containing a string with an optional language tag and/or datatype.
 */
export interface Literal extends Term {
    /**
     * Contains the constant "Literal".
     */
    termType: "Literal";
    /**
     * The text value, unescaped, without language or type (example: Brad Pitt).
     */
    value: string;
    /**
     * the language as lowercase BCP47 string (examples: en, en-gb)
     * or an empty string if the literal has no language.
     * @link http://tools.ietf.org/html/bcp47
     */
    language: string;
    /**
     * A NamedNode whose IRI represents the datatype of the literal.
     */
    datatype: NamedNode;

    /**
     * @param {RDF.Term} other The term to compare with.
     * @return {boolean} True if and only if other has termType "Literal"
     *                   and the same `value`, `language`, and `datatype`.
     */
    equals(other: Term): boolean;
}

/**
 * A variable name.
 */
export interface Variable extends Term {
    /**
     * Contains the constant "Variable".
     */
    termType: "Variable";
    /**
     * The name of the variable *without* leading ? (example: a).
     */
    value: string;

    /**
     * @param {RDF.Term} other The term to compare with.
     * @return {boolean} True if and only if other has termType "Variable" and the same `value`.
     */
    equals(other: Term): boolean;
}

/**
 * An instance of DefaultGraph represents the default graph.
 * It's only allowed to assign a DefaultGraph to the .graph property of a Quad.
 */
export interface DefaultGraph extends Term {
    /**
     * Contains the constant "DefaultGraph".
     */
    termType: "DefaultGraph";
    /**
     * Contains an empty string as constant value.
     */
    value: "";

    /**
     * @param {RDF.Term} other The term to compare with.
     * @return {boolean} True if and only if other has termType "DefaultGraph".
     */
    equals(other: Term): boolean;
}

/**
 * An RDF quad, containing the subject, predicate, object and graph terms.
 */
export interface Quad {
    /**
     * The subject, which is a NamedNode, BlankNode or Variable.
     * @see NamedNode
     * @see BlankNode
     * @see Variable
     */
    subject: Term;
    /**
     * The predicate, which is a NamedNode or Variable.
     * @see NamedNode
     * @see Variable
     */
    predicate: Term;
    /**
     * The object, which is a NamedNode, Literal, BlankNode or Variable.
     * @see NamedNode
     * @see Literal
     * @see BlankNode
     * @see Variable
     */
    object: Term;
    /**
     * The named graph, which is a DefaultGraph, NamedNode, BlankNode or Variable.
     * @see DefaultGraph
     * @see NamedNode
     * @see BlankNode
     * @see Variable
     */
    graph: Term;

    /**
     * @param {RDF.Quad} other The term to compare with.
     * @return {boolean} True if and only if the argument is a) of the same type b) has all components equal.
     */
    equals(other: Quad): boolean;
}

/**
 * An RDF triple, containing the subject, predicate, object terms.
 *
 * Triple is an alias of Quad.
 */
// tslint:disable-next-line no-empty-interface
export interface Triple extends Quad {}

/**
 * A factory for instantiating RDF terms, triples and quads.
 */
export interface DataFactory {
    /**
     * @param {string} value The IRI for the named node.
     * @return {RDF.NamedNode} A new instance of NamedNode.
     * @see NamedNode
     */
    namedNode(value: string): NamedNode;

    /**
     * @param {string} value The optional blank node identifier.
     * @return {RDF.BlankNode} A new instance of BlankNode.
     *                         If the `value` parameter is undefined a new identifier
     *                         for the blank node is generated for each call.
     * @see BlankNode
     */
    blankNode(value?: string): BlankNode;

    /**
     * @param {string}                 value              The literal value.
     * @param {string | RDF.NamedNode} languageOrDatatype The optional language or datatype.
     *                                                    If `languageOrDatatype` is a NamedNode,
     *                                                    then it is used for the value of `NamedNode.datatype`.
     *                                                    Otherwise `languageOrDatatype` is used for the value
     *                                                    of `NamedNode.language`.
     * @return {RDF.Literal} A new instance of Literal.
     * @see Literal
     */
    literal(value: string, languageOrDatatype?: string | NamedNode): Literal;

    /**
     * This method is optional.
     * @param {string} value The variable name
     * @return {RDF.Variable} A new instance of Variable.
     * @see Variable
     */
    variable?(value: string): Variable;

    /**
     * @return {RDF.DefaultGraph} An instance of DefaultGraph.
     */
    defaultGraph(): DefaultGraph;

    /**
     * @param {RDF.Term} subject   The triple subject term.
     * @param {RDF.Term} predicate The triple predicate term.
     * @param {RDF.Term} object    The triple object term.
     * @return {RDF.Quad} A new instance of Quad with `Quad.graph` set to DefaultGraph.
     * @see Quad
     * @see Triple
     * @see DefaultGraph
     */
    triple(subject: Term, predicate: Term, object: Term): Quad;

    /**
     * @param {RDF.Term} subject   The quad subject term.
     * @param {RDF.Term} predicate The quad predicate term.
     * @param {RDF.Term} object    The quad object term.
     * @param {RDF.Term} graph     The quad graph term.
     * @return {RDF.Quad} A new instance of Quad.
     * @see Quad
     */
    quad(subject: Term, predicate: Term, object: Term, graph?: Term): Quad;
}

/* Stream Interfaces */
/* https://github.com/rdfjs/representation-task-force/blob/master/interface-spec.md#stream-interfaces */

/**
 * A quad stream.
 * This stream is only readable, not writable.
 *
 * Events:
 * * `readable()`:           When a quad can be read from the stream, it will emit this event.
 * * `end()`:                This event fires when there will be no more quads to read.
 * * `error(error: Error)`:  This event fires if any error occurs. The `message` describes the error.
 * * `data(quad: RDF.Quad)`: This event is emitted for every quad that can be read from the stream.
 *                           The quad is the content of the data.
 * Optional events:
 * * prefix(prefix: string, iri: RDF.NamedNode): This event is emitted every time a prefix is mapped to some IRI.
 */
export interface Stream extends EventEmitter {
    /**
     * This method pulls a quad out of the internal buffer and returns it.
     * If there is no quad available, then it will return null.
     *
     * @return {RDF.Quad} A quad from the internal buffer, or null if none is available.
     */
    read(): Quad;
}

/**
 * A Source is an object that emits quads.
 *
 * It can contain quads but also generate them on the fly.
 *
 * For example, parsers and transformations which generate quads can implement the Source interface.
 */
export interface Source {
    /**
     * Returns a stream that processes all quads matching the pattern.
     *
     * @param {RDF.Term | RegExp} subject   The optional exact subject or subject regex to match.
     * @param {RDF.Term | RegExp} predicate The optional exact predicate or predicate regex to match.
     * @param {RDF.Term | RegExp} object    The optional exact object or object regex to match.
     * @param {RDF.Term | RegExp} graph     The optional exact graph or graph regex to match.
     * @return {RDF.Stream} The resulting quad stream.
     */
    match(subject?: Term | RegExp, predicate?: Term | RegExp, object?: Term | RegExp, graph?: Term | RegExp)
        : Stream;
}

/**
 * A Sink is an object that consumes data from different kinds of streams.
 *
 * It can store the content of the stream or do some further processing.
 *
 * For example parsers, serializers, transformations and stores can implement the Sink interface.
 */
export interface Sink {
    /**
     * Consumes the given stream.
     *
     * The `end` and `error` events are used like described in the Stream interface.
     * Depending on the use case, subtypes of EventEmitter or Stream are used.
     * @see Stream
     *
     * @param {RDF.Stream} stream The stream that will be consumed.
     * @return {"events".internal.EventEmitter} The resulting event emitter.
     */
    import(stream: Stream): EventEmitter;
}

/**
 * A Store is an object that usually used to persist quads.
 *
 * The interface allows removing quads, beside read and write access.
 * The quads can be stored locally or remotely.
 *
 * Access to stores LDP or SPARQL endpoints can be implemented with a Store inteface.
 */
export interface Store extends Source, Sink {
    /**
     * Removes all streamed quads.
     *
     * The end and error events are used like described in the Stream interface.
     * @see Stream
     *
     * @param {RDF.Stream} stream The stream that will be consumed.
     * @return {"events".internal.EventEmitter} The resulting event emitter.
     */
    remove(stream: Stream): EventEmitter;

    /**
     * All quads matching the pattern will be removed.
     *
     * The `end` and `error` events are used like described in the Stream interface.
     * @see Stream
     *
     * @param {RDF.Term | RegExp} subject   The optional exact subject or subject regex to match.
     * @param {RDF.Term | RegExp} predicate The optional exact predicate or predicate regex to match.
     * @param {RDF.Term | RegExp} object    The optional exact object or object regex to match.
     * @param {RDF.Term | RegExp} graph     The optional exact graph or graph regex to match.
     * @return {"events".internal.EventEmitter} The resulting event emitter.
     */
    removeMatches(subject?: Term | RegExp, predicate?: Term | RegExp, object?: Term | RegExp, graph?: Term | RegExp)
        : EventEmitter;

    /**
     * Deletes the given named graph.
     *
     * The `end` and `error` events are used like described in the Stream interface.
     * @see Stream
     *
     * @param {RDF.Term | string} graph The graph term or string to match.
     * @return {"events".internal.EventEmitter} The resulting event emitter.
     */
    deleteGraph(graph: Term | string): EventEmitter;
}
