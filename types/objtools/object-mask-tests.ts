import { Mask, MaskObj, ObjectMask } from 'objtools';

// Try out the Mask type.
const foo: Mask = true;
const bar: Mask = false;
const baz: Mask = { baz: true };

// Try out the MaskObj interface.
const fooObj: MaskObj = { foo: false, _: true };

// Try the ObjectMask contructor.
let mask: ObjectMask = new ObjectMask(true);

mask = new ObjectMask(false);

mask = new ObjectMask({ wow: true });

mask = new ObjectMask({ _: true, omg: false });

mask = new ObjectMask(foo);

mask = new ObjectMask(fooObj);

// Try out static methods.
mask = ObjectMask.createMaskFromFieldList(['foo', 'bar']);

mask = ObjectMask.addMasks({ foo: true }, { _: true, bar: false });
mask = ObjectMask.addMasks(
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

mask = ObjectMask.andMasks({ foo: true }, { _: true, bar: false });
mask = ObjectMask.andMasks(
  new ObjectMask({ foo: true }),
  new ObjectMask({ _: true, bar: false }),
);

// Try out instance methods.
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
