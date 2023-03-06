import { BaseQuad, DatasetCore } from "rdf-js";

/**
 * Returns the canonical representation of the dataset as string.
 */
declare function toCanonical(dataset: DatasetCore<BaseQuad>): string;

export = toCanonical;
