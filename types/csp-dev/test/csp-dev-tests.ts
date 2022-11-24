import ContentSecurityPolicy = require('csp-dev');

// test type exports
type ShareFormat = ContentSecurityPolicy.ShareFormat;
type Directive = ContentSecurityPolicy.Directive;
type DirectiveDescriptor = ContentSecurityPolicy.DirectiveDescriptor;

const csp = new ContentSecurityPolicy(); // $ExpectType ContentSecurityPolicy
// $ExpectType ContentSecurityPolicy
new ContentSecurityPolicy(`
default-src 'self';
script-src 'self' 'unsafe-inline' 'nonce-2726c7f26c' *.test.com;
style-src data:
`);

csp.newDirective('script-src', ['self', 'unsafe-inline', 'nonce-2726c7f26c', '*.test.com']); // $ExpectType ContentSecurityPolicy

csp.newDirective('child-src', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('connect-src', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('default-src', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('font-src', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('frame-src', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('img-src', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('manifest-src', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('media-src', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('object-src', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('script-src', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('style-src', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('base-uri', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('plugin-types', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('sandbox', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('form-action', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('frame-ancestors', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('block-all-mixed-content', 'self'); // $ExpectType ContentSecurityPolicy
csp.newDirective('upgrade-insecure-requests', 'self'); // $ExpectType ContentSecurityPolicy
// @ts-expect-error
csp.newDirective('foo', 'self');

// $ExpectType ContentSecurityPolicy
csp.load({
    'default-src': ['self'],
    'script-src': ['self', 'unsafe-inline', 'nonce-2726c7f26c', '*.test.com'],
    'style-src': ['data:'],
});
// $ExpectType ContentSecurityPolicy
csp.load({
    'child-src': ['self'],
    'connect-src': ['self'],
    'default-src': ['self'],
    'font-src': ['self'],
    'frame-src': ['self'],
    'img-src': ['self'],
    'manifest-src': ['self'],
    'media-src': ['self'],
    'object-src': ['self'],
    'script-src': ['self'],
    'style-src': ['self'],
    'base-uri': ['self'],
    'plugin-types': ['self'],
    sandbox: ['self'],
    'form-action': ['self'],
    'frame-ancestors': ['self'],
    'block-all-mixed-content': ['self'],
    'upgrade-insecure-requests': ['self'],
});
// @ts-expect-error
csp.load({ foo: ['self'] });

csp.share('json'); // $ExpectType Partial<Record<Directive, string[]>>
csp.share('string'); // $ExpectType string
csp.share('html'); // $ExpectType string
// @ts-expect-error
csp.share('foo');

csp.valid(); // $ExpectType boolean
