import { TermMapFactory } from '@rdfjs/term-map/Factory.js';
import { TermSetFactory } from '@rdfjs/term-set/Factory.js';

interface Factory extends TermSetFactory, TermMapFactory {
}

interface FactoryCtor {
    new(): Factory;
}

declare const factoryCtor: FactoryCtor;

export default factoryCtor;
