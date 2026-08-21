export type Unsubscribe = () => void;
export type Subscribe = (key: string, cb: (state: any) => void) => Unsubscribe;

export default function(store: any): Subscribe;

export const subscribe: Subscribe;
