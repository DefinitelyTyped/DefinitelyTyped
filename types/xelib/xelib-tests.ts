import { wrapper as xelib, Handle, ElementHandle, RecordHandle, ConflictAll, ConflictThis } from 'xelib';

xelib.GetGlobal('foo');

xelib.SetSortMode('None', false);

xelib.BuildReferences(0, false);

// Fake handles for test
const handle = 1 as Handle;
const elHandle = 1 as ElementHandle;

// Check that numbers for Handles error
xelib.Name(1); // $ExpectError

const [ca, ct]: [keyof typeof ConflictAll, keyof typeof ConflictThis] = xelib.GetConflictData(0, elHandle, true);
xelib.GetConflictData(0, elHandle); // $ExpectType [ConflictAll, ConflictThis]

// $ExpectType { [k: string]: RecordHandle; }
xelib.BuildReferenceMap(handle, '');
// $ExpectType { [k: string]: number; }
xelib.BuildReferenceMap(handle, '', undefined, (_: RecordHandle) => 1);

// $ExpectType { a: Zeroable<ElementHandle>; b: Zeroable<ElementHandle>; }
xelib.ResolveElements(handle, { a: 'foo', b: 'bar' });
// $ExpectType { a: ElementHandle; b: ElementHandle; }
xelib.ResolveElementsEx(handle, { a: 'foo', b: 'bar' });
