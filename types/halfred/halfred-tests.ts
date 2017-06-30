
// run test with: $ tsc --noImplicitAny --target es6 --module commonjs halfred-tests.ts
import { parse } from 'halfred'; // require('halfred');
let resource = parse({foo: "bar", "_links": { "self": { href: "fooo" }}});
console.log(resource);

let allLinks = resource.allLinks();
for (let key in allLinks) {
  let link = allLinks[key];

  console.log(link[0].href);
}
