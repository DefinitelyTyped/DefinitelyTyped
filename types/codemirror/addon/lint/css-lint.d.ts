import { Linter } from './lint';

declare module '../../' {
    namespace lint {
        const css: Linter<any>;
    }
}
