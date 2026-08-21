import * as RDF from "@rdfjs/types";
import { BlankNodeExt } from "./lib/BlankNode.js";
import { DefaultGraphExt } from "./lib/DefaultGraph.js";
import { LiteralExt } from "./lib/Literal.js";
import { NamedNodeExt } from "./lib/NamedNode.js";
import { QuadExt } from "./lib/Quad.js";
import { VariableExt } from "./lib/Variable.js";

export interface DataFactoryExt extends RDF.DataFactory<QuadExt, RDF.Quad> {
    init(): void;

    namedNode<Iri extends string = string>(value: Iri): NamedNodeExt<Iri>;

    blankNode(value?: string): BlankNodeExt;

    literal(value: string, languageOrDatatype?: string | RDF.NamedNode): LiteralExt;

    variable(value: string): VariableExt;

    defaultGraph(): DefaultGraphExt;

    quad(
        subject: RDF.Quad_Subject,
        predicate: RDF.Quad_Predicate,
        object: RDF.Quad_Object,
        graph?: RDF.Quad_Graph,
    ): QuadExt;

    fromTerm(original: RDF.NamedNode): NamedNodeExt;
    fromTerm(original: RDF.BlankNode): BlankNodeExt;
    fromTerm(original: RDF.Literal): LiteralExt;
    fromTerm(original: RDF.Variable): VariableExt;
    fromTerm(original: RDF.DefaultGraph): DefaultGraphExt;
    fromTerm(original: RDF.BaseQuad): QuadExt;

    fromQuad(original: RDF.Quad): QuadExt;
}

interface DataFactoryExtCtor {
    new(): DataFactoryExt;
    exports: [
        "namedNode",
        "blankNode",
        "literal",
        "variable",
        "defaultGraph",
        "quad",
        "fromTerm",
        "fromQuad",
    ];
}

declare const dataFactoryExt: DataFactoryExtCtor;
export default dataFactoryExt;
