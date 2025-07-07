import type { NextFunction, Request, Response } from 'express';
import { sanitize, xss, XssSanitizerOptions } from 'express-xss-sanitizer';

// Test: configuring options
const options: XssSanitizerOptions = {
  allowedTags: ['b', 'i', 'u'],
  allowedAttributes: { a: ['href'] },
  allowedKeys: ['foo', 'bar'],
};

// Should accept options and return a valid Express middleware
const middleware = xss(options);
// $ExpectType (req: Request, res: Response, next: NextFunction) => void
(middleware as (req: Request, res: Response, next: NextFunction) => void);

// Should work without options as well
const middlewareDefault = xss();
// $ExpectType (req: Request, res: Response, next: NextFunction) => void
(middlewareDefault as (req: Request, res: Response, next: NextFunction) => void);

// Test: sanitize usage for string
const sanitizedStr = sanitize('<script>alert(1)</script>', options);
// $ExpectType string

// Test: sanitize usage for array of strings
const sanitizedArr = sanitize(['<b>foo</b>', '<i>bar</i>'], options);
// $ExpectType string[]

// Test: sanitize usage for generic object
const inputObj = { foo: '<b>abc</b>', bar: '<i>def</i>' };
const sanitizedObj = sanitize(inputObj, options);
// $ExpectType { foo: string; bar: string; }

// Test: sanitize usage for arbitrary types
type User = { name: string; bio: string; };
const user: User = { name: 'Felipe', bio: '<u>dev</u>' };
const sanitizedUser = sanitize<User>(user, options);
// $ExpectType User

// Test: usage without options (should work)
const sanitizedNoOptions = sanitize('test');
// $ExpectType string

// Test: passing invalid type to options (should error)
// @ts-expect-error
xss({ unknownOption: true });

// Test: using allowedAttributes with invalid value (should error)
// @ts-expect-error
const invalidOptions: XssSanitizerOptions = { allowedAttributes: { a: ['href'], b: 123 } };

// Test: minimal usage of sanitize (no options)
sanitize('<div>hi</div>');
