import SemanticContext from '../atn/SemanticContext';

/**
 * Map a predicate to a predicted alternative.
 */
export default class PredPrediction {
    alt: number;
    pred: SemanticContext;

    constructor(pred: SemanticContext, alt: number);

    toString(): string;
}
