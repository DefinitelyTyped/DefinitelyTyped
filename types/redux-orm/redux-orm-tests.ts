import { attr, createSelector as createSelectorORM, ORMCommonState, ORMId, QuerySet, TableState, SessionWithModels, Model, ORM } from 'redux-orm';

// Model
export class Test extends Model<TestStateItem, FetchIndicatorState> {
  static modelName = 'Test';

  static fields = {
    test: attr(),
    isFetching: attr({ getDefault: () => false }),
    id: attr()
  };
}

// core data which we do not have defaults for
export interface TestStateItem {
  test: string;
}

// optional data we provide defaults for
export interface FetchIndicatorState {
  isFetching: boolean;
}

// id attr is added automatically by redux-orm therefore we have IORMId interface
export type TestState = TableState<TestStateItem & ORMId & FetchIndicatorState>;

export interface TestORMState extends ORMCommonState {
  Test: TestState;
}

interface TestORMModels {
  Test: typeof Test;
}

const orm = new ORM<TestORMState>();
orm.register<TestORMModels>(Test);

// Reducer
interface TestDTO {
  test: string;
}

interface Action<P> {
  type: string;
  payload: P;
}

const reducerAddItem = (state: TestORMState, action: Action<TestDTO>): TestORMState => {
  const session = orm.session(state);
  session.Test.upsert<TestStateItem>(action.payload);
  return session.state;
};

// Selector
interface TestDisplayItem {
  test: string;
}
type TestDisplayItemList = TestDisplayItem[];

// Just for the example below. Use real createSelector from reselect in your app
const createSelector = <S, P1, R>(param1Creator: (state: S) => P1, combiner: (param1: P1) => R): (state: S) => R => (state) =>
  combiner(param1Creator(state));

interface RootState {
  test: TestORMState;
}

export const makeGetTestDisplayList = () => {
  const ormSelector = createSelectorORM<TestORMState>(orm, (session: SessionWithModels<TestORMState>) =>
    (session.Test.all() as QuerySet<TestStateItem, FetchIndicatorState>)
      .toRefArray()
      .map((item) => ({ ...item }))
  );
  return createSelector<RootState, TestORMState, TestDisplayItemList>(
    ({ test }) => test,
    ormSelector
  );
};
