export default class Kinetic {
    constructor(decay: number, minVelocity: number, delay: number);
    /**
     * FIXME empty description for jsdoc
     */
    begin(): void;
    end(): boolean;
    getAngle(): number;
    getDistance(): number;
    update(x: number, y: number): void;
}
