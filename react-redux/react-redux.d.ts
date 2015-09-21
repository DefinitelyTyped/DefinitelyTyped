// Type definitions for react-redux
// Project: https://github.com/rackt/react-redux
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "react-redux" {
  export function connect<T>(...functions: Function[]): (t: T) => T;
}
