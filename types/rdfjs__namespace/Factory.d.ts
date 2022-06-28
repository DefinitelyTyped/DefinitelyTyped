import { NamespaceBuilder } from '.';

export default class Factory {
    static exports: ['namespace'];
    namespace(baseIRI: string): NamespaceBuilder;
}
