export = ValidationFactors;
declare class ValidationFactors {
    readonly validationFactors: any;

    constructor(validationFactorPairs: any);
    toCrowd(): ValidationFactorsObj;
    static fromCrowd(validationFactorsObj: ValidationFactorsObj): ValidationFactors;
}

interface ValidationFactorsObj {
    validationFactors: any[];
}
