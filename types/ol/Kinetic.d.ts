export default class Kinetic {
    constructor(decay: number, minVelocity: number, delay: number);
    begin(): void;
    end(): boolean;
    getAngle(): number;
    getDistance(): number;
    update(x: number, y: number): void;
}
