export default interface Initializer<T> {
    name: string;
    before?: string[];
    after?: string[];
    initialize(application: T): void;
}
