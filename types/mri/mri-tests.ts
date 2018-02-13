import * as mri from 'mri';

const first = mri(['--foo', 'bar']);

const second = mri(['--foo', 'bar'], {
  default: { foo: true, baz: 'hello', bat: 42 }
});
