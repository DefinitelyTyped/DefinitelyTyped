import * as chai from 'chai';

import { createMockStore, createMockDispatch } from 'redux-test-utils';

const expect = chai.expect;
const assert = chai.assert;

function test_creatMockStore() {
  const state = 'state';
  const store = createMockStore(state);
  const action = {
    type: 'type',
    data: 'data'
  };
  store.dispatch(action);

  expect(store.getAction(action.type)).to.equal(action);
  expect(store.getActions()).to.equal([action]);
  expect(store.isActionDispatched(action)).to.be.true;
  expect(store.isActionTypeDispatched(action.type)).to.be.true;
  expect(store.getState()).to.be(state);
}

function test_createMockDispatch() {
  const state = 'state';
  const dispatchMock = createMockDispatch();
  const action = {
    type: 'type',
    data: 'data',
  };
  dispatchMock.dispatch(action);

  expect(dispatchMock.getAction(action.type)).to.equal(action);
  expect(dispatchMock.getActions()).to.equal([action]);
  expect(dispatchMock.isActionDispatched(action)).to.be.true;
  expect(dispatchMock.isActionTypeDispatched(action.type)).to.be.true;
}
