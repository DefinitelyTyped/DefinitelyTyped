import { BaseQuad, DatasetCore, Term } from "rdf-js";

/**
 * Deletes all quads in the given dataset which match the given subject, predicate, object, graph pattern.
 *
 * `.match` of dataset is used to find the matches and .delete to delete all matches. Returns the given dataset.
 */
declare function deleteMatch<D extends DatasetCore<BaseQuad> = DatasetCore>(dataset: D, subject?: Term, predicate?: Term, object?: Term, graph?: Term): D;

export = deleteMatch;
