// Type definitions for progressbar 1.1
// Project: https://github.com/bevry/progressbar
// Definitions by: Arne Schubert <https://github.com/atd-schubert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Progressbar {
    step(step: string): this;
    getStep(): string;
    setStep(steps: string): this;
    setTick(ticks: number): this;
    addTick(steps?: number): this;
    tick(steps?: number): this;
    getTick(): number;
    setTotal(total: number): this;
    total(total: number): this;
    addTotal(total?: number): this;
    getTotal(): number;
    finish(next?: () => void): this;
}

export function create(): Progressbar;
