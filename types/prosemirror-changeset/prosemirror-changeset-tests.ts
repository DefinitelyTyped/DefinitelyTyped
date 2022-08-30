import { Change, ChangeSet, simplifyChanges, Span } from 'prosemirror-changeset';
import { Node } from 'prosemirror-model';
import { StepMap } from 'prosemirror-transform';

const span = new Span(0, { test: 'test' });

// $ExpectType number
span.length;
// $ExpectType any
span.data;
// $ExpectType Span
span.cut(2);

// $ExpectType Span[]
Span.slice([new Span(0, { test: 'test' })], 1, 2);

// $ExpectType Span[]
Span.join([new Span(0, { test: 'test' })], [new Span(0, { test: 'test' })], (a, b) => ({ ...a, ...b }));

// $ExpectType number
Span.len([new Span(0, { test: 'test' })]);

const change = new Change(0, 0, 1, 1, [new Span(0, { test: 'test' })], [new Span(0, { test: 'test' })]);

// $ExpectType number
change.fromA;

// $ExpectType number
change.toA;

// $ExpectType number
change.fromB;

// $ExpectType number
change.toB;

// $ExpectType Span[]
change.deleted;

// $ExpectType Span[]
change.inserted;

// $ExpectType number
change.lenA;

// $ExpectType number
change.lenB;

// $ExpectType Change
change.slice(0, 0, 1, 1);

// $ExpectType Change[]
Change.merge(
    [new Change(0, 0, 1, 1, [new Span(0, { test: 'test' })], [new Span(0, { test: 'test' })])],
    [new Change(0, 0, 1, 1, [new Span(0, { test: 'test' })], [new Span(0, { test: 'test' })])],
    (a, b) => ({ ...a, ...b }),
);

const changeset = new ChangeSet<any>({}, [
    new Change(0, 0, 1, 1, [new Span(0, { test: 'test' })], [new Span(0, { test: 'test' })]),
]);

// $ExpectType Change[]
changeset.changes;

// $ExpectType ChangeSet<any>
changeset.addSteps(new Node(), [new StepMap([0, 1, 1])]);
// $ExpectType ChangeSet<any>
changeset.addSteps(new Node(), [new StepMap([0, 1, 1])], { test: 'test' });

// $ExpectType ProsemirrorNode<any>
changeset.startDoc;

// $ExpectType ChangeSet<any>
changeset.map(range => ({ test: 'test' }));

// $ExpectType { from: number; to: number; } | undefined
changeset.changedRange(
    new ChangeSet({}, [new Change(0, 0, 1, 1, [new Span(0, { test: 'test' })], [new Span(0, { test: 'test' })])]),
);

// $ExpectType { from: number; to: number; } | undefined
changeset.changedRange(
    new ChangeSet({}, [new Change(0, 0, 1, 1, [new Span(0, { test: 'test' })], [new Span(0, { test: 'test' })])]),
    [new StepMap([0, 1, 1])],
);

// $ExpectType ChangeSet<any>
ChangeSet.create(new Node());
// $ExpectType ChangeSet<any>
ChangeSet.create(new Node(), (a, b) => ({ ...a, ...b }));

// $ExpectType Change[]
simplifyChanges([new Change(0, 0, 1, 1, [new Span(0, { test: 'test' })], [new Span(0, { test: 'test' })])], new Node());
