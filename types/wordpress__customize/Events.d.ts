export class Events<T extends keyof any> {
    // TODO: class with statics instead?
    topics: Record<T, JQuery.Callbacks>;
    trigger(id: T): this;
    bind(id: T): this;
    unbind(id: T): this;
}
