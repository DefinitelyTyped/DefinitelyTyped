export type Mix<A, B> = B & Pick<A, Exclude<keyof A, keyof B>>;
export type Mix3<A, B, C> = Mix<Mix<A, B>, C>;
export type Mix4<A, B, C, D> = Mix3<Mix<A, B>, C, D>;
export default Mix;
