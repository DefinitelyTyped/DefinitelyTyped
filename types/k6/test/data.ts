import { SharedArray } from 'k6/data';

interface Foo {
  bar: string
}

const foos: Foo[] = [{bar: "a"}, {bar: "a"}]

new SharedArray('hola', () => foos); // $ExpectType Foo[]
