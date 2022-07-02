import { BaseQuad, DatasetCore } from "rdf-js";

/**
 * Tests if the datasets a and b contain the same quads without doing a normalization step beforehand.
 *
 * That means Blank Node labels must also match. The comparison is done by testing `.size` of both dataset for
 * equality and by looping over all quads of a and check if b contains it using the `.has` method. Returns `true` if
 * both datasets are equal. Otherwise `false `is returned.
 */
declare function equals(a: DatasetCore<BaseQuad>, b: DatasetCore<BaseQuad>): boolean;

export = equals;
