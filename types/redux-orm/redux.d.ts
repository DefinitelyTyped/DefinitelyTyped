import { IndexedModelClasses, ORM, OrmState } from './ORM';
import { OrmSession } from './Session';

export interface ORMReducer<I extends IndexedModelClasses, TAction extends any = any> {
    (state: OrmState<I> | undefined, action: TAction): OrmState<I>;
}

export type defaultUpdater<I extends IndexedModelClasses, TAction extends any = any> = (
    session: OrmSession<I>,
    action: TAction
) => void;

export function createReducer<I extends IndexedModelClasses, TAction extends any = any>(
    orm: ORM<I>,
    updater?: defaultUpdater<I, TAction>
): ORMReducer<I, TAction>;

export type Selector<S, R> = (state: S) => R;

export interface ORMSelector<I extends IndexedModelClasses, Args extends any[], R> {
    (session: OrmSession<I>, ...args: Args): R;
}

export function createSelector<S, I, R1, R2, R3, R4, R5, R6, R>(
    orm: ORM<I>,
    ormStateSelector: Selector<S, OrmState<I>>,
    selector1: Selector<S, R1>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    ormSelector: ORMSelector<I, [R1, R2, R3, R4, R5, R6], R>
): Selector<S, R>;

export function createSelector<S, I, R1, R2, R3, R4, R5, R>(
    orm: ORM<I>,
    ormStateSelector: Selector<S, OrmState<I>>,
    selector1: Selector<S, R1>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    ormSelector: ORMSelector<I, [R1, R2, R3, R4, R5], R>
): Selector<S, R>;

export function createSelector<S, I, R1, R2, R3, R4, R>(
    orm: ORM<I>,
    ormStateSelector: Selector<S, OrmState<I>>,
    selector1: Selector<S, R1>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    ormSelector: ORMSelector<I, [R1, R2, R3, R4], R>
): Selector<S, R>;

export function createSelector<S, I, R1, R2, R3, R>(
    orm: ORM<I>,
    ormStateSelector: Selector<S, OrmState<I>>,
    selector1: Selector<S, R1>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    ormSelector: ORMSelector<I, [R1, R2, R3], R>
): Selector<S, R>;

export function createSelector<S, I, R1, R2, R>(
    orm: ORM<I>,
    ormStateSelector: Selector<S, OrmState<I>>,
    selector1: Selector<S, R1>,
    selector2: Selector<S, R2>,
    ormSelector: ORMSelector<I, [R1, R2], R>
): Selector<S, R>;

export function createSelector<S, I, R1, R>(
    orm: ORM<I>,
    ormStateSelector: Selector<S, OrmState<I>>,
    selector1: Selector<S, R1>,
    ormSelector: ORMSelector<I, [R1], R>
): Selector<S, R>;

export function createSelector<S, I, R>(
    orm: ORM<I>,
    ormStateSelector: Selector<S, OrmState<I>>,
    ormSelector: ORMSelector<I, [], R>
): Selector<S, R>;

export function createSelector<I, R>(orm: ORM<I>, ormSelector: ORMSelector<I, [], R>): Selector<OrmState<I>, R>;
