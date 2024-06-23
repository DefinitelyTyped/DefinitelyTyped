/// <reference types="mocha" />

export function step(title: string, fn?: Mocha.Func): Mocha.Test;
export function xstep(title: string, fn?: Mocha.Func): Mocha.Test;

declare global {
    function step(title: string, fn?: Mocha.Func): Mocha.Test;
    function xstep(title: string, fn?: Mocha.Func): Mocha.Test;
}
