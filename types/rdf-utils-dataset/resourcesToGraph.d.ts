import * as RDF from "@rdfjs/types";
import DatasetExt from "rdf-ext/lib/Dataset";
import QuadExt from "rdf-ext/lib/Quad";

type Factory<
    OutQuad extends RDF.BaseQuad = RDF.BaseQuad,
    InQuad extends RDF.BaseQuad = RDF.BaseQuad,
    D extends RDF.DatasetCore<OutQuad, InQuad> = RDF.DatasetCore<OutQuad, InQuad>,
> = RDF.DataFactory<OutQuad, InQuad> & RDF.DatasetCoreFactory<OutQuad, InQuad, D>;

interface Options<F extends Factory> {
    factory?: F | undefined;
}

type DatasetOf<F> = F extends RDF.DatasetCoreFactory<any, any, infer D> ? D : never;

export default function resourcesToGraph<F extends Factory = Factory<QuadExt, QuadExt, DatasetExt>>(
    _input: RDF.DatasetCore<RDF.BaseQuad, RDF.BaseQuad>,
    options?: Options<F>,
): DatasetOf<F>;
export {};
