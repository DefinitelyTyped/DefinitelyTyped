export = Spring;
/**
 * Represents a physical spring. Spring connects two bodies, has rest length
 * stiffness coefficient and optional weight
 */
declare function Spring(fromBody: any, toBody: any, length: any, coeff: any, weight: any): void;
declare class Spring {
    /**
     * Represents a physical spring. Spring connects two bodies, has rest length
     * stiffness coefficient and optional weight
     */
    constructor(fromBody: any, toBody: any, length: any, coeff: any, weight: any);
    from: any;
    to: any;
    length: any;
    coeff: any;
    weight: number;
}
