import { NodeKey } from './state';

export class AbstractRecoilValue<T> {
    tag: 'Writeable';
    key: NodeKey;
    constructor(newKey: NodeKey);
}

export class AbstractRecoilValueReadonly<T> {
    tag: 'Readonly';
    key: NodeKey;
    constructor(newKey: NodeKey);
}

export class RecoilState<T> extends AbstractRecoilValue<T> {}

export class RecoilValueReadOnly<T> extends AbstractRecoilValueReadonly<T> {}

export type RecoilValue<T> = RecoilValueReadOnly<T> | RecoilState<T>;

export function isRecoilValue(val: unknown): val is RecoilValue<any>;
