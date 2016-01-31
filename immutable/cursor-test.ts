/// <reference path="./cursor.d.ts"/>

import * as Cursor from 'immutable/contrib/cursor';

let data = Immutable.fromJS({a:1});

let cursor = Cursor.from(data);
cursor.getIn(['name', 'last']);

let cursor1 = Cursor.from(data, ['name']);
cursor.get('last')

let cursor2 = Cursor.from(data, ['name']);
data.get('name') === cursor.deref();
// true

let modifiedAgeCursor = cursor.set('age', 45);

cursor.get('age');
// 35
modifiedAgeCursor.get('age');
// 45
let firstNameOnly = cursor.get('name').take(1);
firstNameOnly.deref().toJS();
let valueEqualCursor = Cursor.from(data);

cursor === valueEqualCursor;
// false
Immutable.is(cursor, valueEqualCursor);
// true
Immutable.is(valueEqualCursor, data);
// true

let Name = Immutable.Record({
    first: 'Luke',
    last: 'Skywalker'
});

let person = Immutable.Map({
    name: new Name()
});

let cursor3 = Cursor.from(person, ['name']);
cursor.first;
// 'Luke'

let nameCursor = cursor.cursor(['name']);

nameCursor.get('first');
// 'Luke'

let nameCursor2 = cursor.get('name');

nameCursor.get('last');
// 'Skywalker'

let cursor4 = Cursor.from(data, [], (nextState, currentState) => {
    let newFirstName = nextState.getIn(['name', 'first']);
    let currentFirstName = currentState.getIn(['name', 'first']);
    console.log(currentFirstName + ' => ' + newFirstName);
});

cursor.setIn(['name', 'first'], 'Anakin');
// 'Luke => Anakin'

let cursor5 = Cursor.from(data, ['name'], (nextState, currentState) => {
    if (nextState.get('first') === 'Leia') {
        return nextState.set('last', 'Organa');
    }
});

let anakinCursor = cursor.set('first', 'Anakin');
anakinCursor.get('first');
// 'Anakin'

let leiaCursor = cursor.set('first', 'Leia');
leiaCursor.get('last');
// 'Organa'
