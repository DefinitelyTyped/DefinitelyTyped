import key from 'key';

let a = key.get(56);
a = key.code.arrow.down;
a = key.code.special.enter;
a = key.code.punctuation.slash.backward;
a = key.code.punctuation.brace.square.close;
const b: boolean = key.is(key.get(54), 54);

const n: number = a.code;
const s: string = a.name;
