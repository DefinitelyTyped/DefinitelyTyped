// Type definitions for redux-subscriber 1.1
// Project: https://github.com/ivantsov/redux-subscriber#readme
// Definitions by: thisissami <https://github.com/thisissami>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Unsubscribe = () => void;
export type Subscribe = (key: string, cb: (state: any) => void) => Unsubscribe;

export default function(store: any): Subscribe;

export const subscribe: Subscribe;
