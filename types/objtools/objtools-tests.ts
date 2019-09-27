import * as objtools from 'objtools';

// Extract ObjectMask class and its associated types.
const { ObjectMask } = objtools;
type Mask = objtools.Mask;
type MaskObj = objtools.MaskObj;
type ObjectMask = objtools.ObjectMask;

// Try out the Mask type.
const foo: Mask = true;
const bar: Mask = false;
const baz: Mask = { baz: true };
const qux: Mask = [ { qux: true } ];

// Try out the MaskObj interface.
const fooObj: MaskObj = { foo: false, _: true };

// Try the ObjectMask contructor.
let mask: ObjectMask = new ObjectMask(true);

mask = new ObjectMask(false);

mask = new ObjectMask({ wow: true });

mask = new ObjectMask({ _: true, omg: false });

mask = new ObjectMask(foo);

mask = new ObjectMask(fooObj);

// Try out ObjectMask static methods.
mask = ObjectMask.createMaskFromFieldList(['foo', 'bar']);

let maskOrTrue: ObjectMask|true = ObjectMask.addMasks(
    { foo: true },
    { _: true, bar: false },
);
maskOrTrue = ObjectMask.addMasks(
  new ObjectMask({ foo: true }),
  new ObjectMask({ _: true, bar: false }),
);

mask = ObjectMask.subtractMasks({ foo: true }, { _: true, bar: false });
mask = ObjectMask.subtractMasks(
  new ObjectMask({ foo: true }),
  new ObjectMask({ _: true, bar: false }),
);

mask = ObjectMask.invertMask({ foo: true });
mask = ObjectMask.invertMask(new ObjectMask({ _: true, bar: false }));

let checkResult: boolean = ObjectMask.isObjectMask({ foo: true });
checkResult = ObjectMask.isObjectMask(new ObjectMask({ _: true, bar: false }));

let maskOrFalse: ObjectMask|false = ObjectMask.andMasks(
    { foo: true },
    { _: true, bar: false },
);
maskOrFalse = ObjectMask.andMasks(
  new ObjectMask({ foo: true }),
  new ObjectMask({ _: true, bar: false }),
);

// Try out ObjectMask instance methods.
mask = mask.subtractMask({ foo: true });
mask = mask.subtractMask(new ObjectMask({ _: true, bar: false }));

mask = mask.addField('foo.bar');

mask = mask.removeField('foo.bar');

let obj: Record<string, any> = { foo: 'bar', baz: 'qux' };
obj = mask.filterObject(obj);
obj = mask.filterObject(obj, (field: string): void => {});

mask = mask.getSubMask('foo.bar');

checkResult = mask.checkPath('foo.bar');

mask = mask.clone();

const maskObj: Mask = mask.toObject();

checkResult = mask.validate();

let fields: string[] = mask.getMaskedOutFields(obj);

obj = mask.filterDottedObject(obj);
obj = mask.filterDottedObject(obj, (field: string): void => {});

fields = mask.getDottedMaskedOutFields(obj);

checkResult = mask.checkFields(obj);

checkResult = mask.checkDottedFields(obj);

const filter: (
  obj: Record<string, any>,
) => Record<string, any> = mask.createFilterFunc();

obj = filter(obj);

// Try static objtools functions.
checkResult = objtools.isScalar('foo');

checkResult = objtools.isTerminal('foo');

checkResult = objtools.deepEquals('foo', 'bar');

checkResult = objtools.scalarEquals('foo', 'bar');

obj = objtools.deepCopy({ foo: 'bar' });

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
