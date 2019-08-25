declare const cons: typeof import('./index');
export = cons;

declare const rad: typeof import('./lib/radisk');
declare global {
    const Gun: typeof cons;
    const Radisk: typeof rad;
}
