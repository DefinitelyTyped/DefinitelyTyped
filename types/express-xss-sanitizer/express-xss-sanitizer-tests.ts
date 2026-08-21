import { sanitize, xss, type XssSanitizerOptions } from "express-xss-sanitizer";

// Test: configuring options
const options: XssSanitizerOptions = {
    allowedTags: ["b", "i", "u"],
    allowedAttributes: { a: ["href"] },
    allowedKeys: ["foo", "bar"],
};

// $ExpectType (req: any, res: any, next: any) => void
xss(options);

// $ExpectType string[]
sanitize(["<b>foo</b>"], options);

// $ExpectType { foo: string; bar: string; }
sanitize({ foo: "<b>abc</b>", bar: "<i>def</i>" }, options);

interface User {
    name: string;
    bio: string;
}
const user: User = { name: "Felipe", bio: "<u>dev</u>" };

// $ExpectType User
sanitize<User>(user, options);

// $ExpectType (req: any, res: any, next: any) => void
xss();

// $ExpectType (req: any, res: any, next: any) => void
xss({});
