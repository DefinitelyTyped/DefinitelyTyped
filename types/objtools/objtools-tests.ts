import * as objtools from 'objtools';

let checkResult: boolean = objtools.isScalar('foo');

checkResult = objtools.isTerminal('foo');

checkResult = objtools.deepEquals('foo', 'bar');

checkResult = objtools.scalarEquals('foo', 'bar');

let obj: Record<string, any> = objtools.deepCopy({ foo: 'bar' });

obj = objtools.collapseToDotted({ foo: { bar: 'baz' } });
obj = objtools.collapseToDotted({ foo: { bar: 'baz' } }, true);
obj = objtools.collapseToDotted({ foo: { bar: 'baz' } }, true, true);

checkResult = objtools.matchDottedObject(obj, { wow: 'omg' });

checkResult = objtools.matchObject(obj, { wow: 'omg' });

obj = objtools.syncObject(
  obj,
  { foo: 'bar' },
  {
    onField(
      field: string,
      toVal: any,
      fromVal: any,
      parentObj: Record<string, any>,
    ): boolean {
      return false;
    },
    onChange(): void {},
  },
);

obj = objtools.setPath(obj, 'foo.bar', 'baz');

obj = objtools.deletePath(obj, 'foo.bar');

let pathValue: string = objtools.getPath(obj, 'foo.bar');
pathValue = objtools.getPath(obj, 'foo.bar', true);

obj = objtools.mergeLight(obj, { foo: 'bar' });
obj = objtools.mergeLight(obj, { foo: 'bar' }, { baz: 'qux' });

const customizer: objtools.MergeCustomizer = (
  objectValue: any,
  sourceValue: any,
  key: string,
  object: any,
) => {};

obj = objtools.merge(obj, { foo: 'bar' }, { baz: 'qux' });
obj = objtools.merge(obj, { foo: 'bar' }, { baz: 'qux' }, customizer);

obj = objtools.mergeHeavy(obj, { foo: 'bar' }, { baz: 'qux' });
obj = objtools.mergeHeavy(obj, { foo: 'bar' }, { baz: 'qux' }, customizer);

const duplicates: string[] = objtools.getDuplicates(['foo', 'bar', 'foo']);

const objDiff: Record<string, any> = objtools.diffObjects(
  {
    a: 'b',
    c: 'd',
    e: 'f',
    g: 'h',
    i: { j: 'k' },
    l: { m: 'n', o: { p: 'q' } },
  },
  {
    a: 'b',
    c: 1,
    e: 'f',
    g: { h: true },
    i: { k: 'j' },
    l: { m: 'nop' },
  },
);

const scalarDiff = objtools.diffObjects(
  {
    a: 'b',
    c: 'd',
    e: 'f',
    g: 'h',
    i: { j: 'k' },
    l: { m: 'n', o: { p: 'q' } },
  },
  {
    a: 'b',
    c: 1,
    e: 'f',
    g: { h: true },
    i: { k: 'j' },
    l: { m: 'nop' },
  },
  'scalar',
);

const dottedDiff: string[] = objtools.dottedDiff(
  { foo: 'bar' },
  { foo: 'baz' },
);

const hash: string = objtools.objectHash({ foo: 'bar' });

let date: Date | null = objtools.sanitizeDate('wow');
date = objtools.sanitizeDate(new Date());

checkResult = objtools.isPlainObject('foo');

checkResult = objtools.isEmptyObject('foo');

checkResult = objtools.isEmptyArray('foo');

checkResult = objtools.isEmpty('foo');
