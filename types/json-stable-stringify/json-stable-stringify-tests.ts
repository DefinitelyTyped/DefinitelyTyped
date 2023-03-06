import stringify = require('json-stable-stringify');

const obj = { c: 8, b: [{z: 6, y: 5, x: 4}, 7], a: 3 };

{
  console.log(stringify(obj));
}

{
  // Second arg can be a stringify.Comparator function.
  const s: string = stringify(obj, (a: stringify.Element, b: stringify.Element): number => a.key < b.key ? 1 : -1);
  console.log(s);
}

{
  // Can specify Comparator in an Options object.
  function reverse(a: stringify.Element, b: stringify.Element): number {
    return a.value < b.value ? 1 : -1;
  }
  const opts: stringify.Options = { cmp: reverse };
  const s: string = stringify(obj, opts);
  console.log(s);
}

{
  // Space can be a string.
  const s: string = stringify(obj, { space: '  ' });
  console.log(s);
}

{
  // Space can be an integer.
  const s: string = stringify(obj, { space: 2 });
  console.log(s);
}

{
  // The replacer option can remove or modify values.
  function removeStrings(key: string, value: any): any {
    if (typeof value === "string") {
      return undefined;
    }
    return value;
  }
  const s: string = stringify(obj, { replacer: removeStrings });
  console.log(s);
}

{
  // We can specify the cycles
  stringify(obj, { cycles: true }); // $ExpectType string
}
