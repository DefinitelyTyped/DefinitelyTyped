// Type definitions for mocha-steps 1.3
// Project: https://github.com/rprieto/mocha-steps
// Definitions by: AryloYeung <https://github.com/Arylo>
//                 Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="mocha" />

export function step(title: string, fn?: Mocha.Func): Mocha.Test;
export function xstep(title: string, fn?: Mocha.Func): Mocha.Test;

declare global {
  function step(title: string, fn?: Mocha.Func): Mocha.Test;
  function xstep(title: string, fn?: Mocha.Func): Mocha.Test;
}
