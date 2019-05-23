// Type definitions for liquid-pid 1.0
// Project: https://github.com/hekike/liquid-pid
// Definitions by: Kadu Penido <https://github.com/kadupenido>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface PIDControllerOption {
    temp?: { ref?: number };
    Pmax?: number;
    Kp?: number;
    Ki?: number;
    Kd?: number;
}

export class PIDController {
    constructor(options?: PIDControllerOption);

    calculate(actualTemperature: number): number;
    getRefTemperature(): number;
    setPoint(temp: number): number;
    tune(Kp: number, Ki: number, Kd: number): void;
}
