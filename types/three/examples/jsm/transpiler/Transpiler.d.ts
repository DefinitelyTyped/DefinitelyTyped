export default class Transpiler<U, V> {
    constructor(decoder: { parse(source: string): U }, encoder: { emit(decoded: U): V });

    parse(source: string): V;
}
