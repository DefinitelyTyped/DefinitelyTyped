// run test with: $ tsc --noImplicitAny --target es6 --module commonjs halfred-tests.ts
import { parse } from "halfred";
// $ExpectType Resource
const resource = parse({ foo: "bar", _links: { self: { href: "fooo" } } });

const allLinks = resource.allLinks();
for (const key in allLinks) {
    // $ExpectType Link[]
    const link = allLinks[key];
}
