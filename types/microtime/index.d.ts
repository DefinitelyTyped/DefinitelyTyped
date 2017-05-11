// Type definitions for microtime 2.1
// Project: https://github.com/wadey/node-microtime
// Definitions by: Kovács Vince <https://github.com/vincekovacs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace microtime {
  function now (): number

  function nowDouble (): number

  function nowStruct (): number[]
}

export = microtime;