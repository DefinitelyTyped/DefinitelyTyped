import * as Immutable from 'immutable';
import * as Serialize from 'remotedev-serialize';

const { stringify, parse } =  Serialize.immutable(Immutable);

const data = Immutable.fromJS({foo: 'bar', baz: {qux: 42}});
const serialized = stringify(data);
const parsed = parse(serialized);
