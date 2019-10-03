import { FluentBundle } from './bundle';

export default class Scope {
    constructor(bundle: FluentBundle, errors: string[], args: object, insideTermReference: boolean, dirty: WeakSet<{}>);
    cloneForTermReference(args: object): Scope;
    reportError(error: string): void;
    memoizeIntlObject<OptsType, ObjectType>(
        ctor: new (locales: string[], opts: OptsType) => ObjectType,
        opts: OptsType,
    ): ObjectType;
}
