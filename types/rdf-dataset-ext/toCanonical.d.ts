import { BaseQuad, DatasetCore } from "@rdfjs/types";

/**
 * Returns the canonical representation of the dataset as string.
 */
declare function toCanonical(dataset: DatasetCore<BaseQuad>): string;

export = toCanonical;
