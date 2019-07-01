import { IndexedModelClasses, ORM, OrmState } from './ORM';
import { OrmSession } from './Session';

export interface ORMReducer<I extends IndexedModelClasses<any>, TAction extends any = any> {
    (state: OrmState<I> | undefined, action: TAction): OrmSession<I>;
}

export type defaultUpdater<I extends IndexedModelClasses<any>, TAction extends any = any> = (
    session: OrmSession<I>,
    action: TAction
) => void;

export function createReducer<I extends IndexedModelClasses<any>, TAction extends any = any>(
    orm: ORM<I>,
    updater?: defaultUpdater<I, TAction>
): ORMReducer<I, TAction>;

export interface ORMSelector<I extends IndexedModelClasses<any>, Result extends any = any> {
    (session: OrmSession<I>, ...args: any[]): Result;
}

export function createSelector<I extends IndexedModelClasses<any>, Result extends any = any>(
    orm: ORM<I>,
    ormSelector: ORMSelector<I, Result>
): (state: OrmState<I>) => Result;
