// @ts-expect-error
open();
// @ts-expect-error
open(123);
const text: string = open("foo.txt");
// @ts-expect-error
open("foo.txt", 123);
// @ts-expect-error
open("foo.txt", { as: 123 });
// @ts-expect-error
open("foo.txt", { as: "foo" });
const binary: string = open("foo.txt", { as: "binary" });
