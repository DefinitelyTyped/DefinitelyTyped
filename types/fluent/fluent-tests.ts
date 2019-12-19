import { FluentBundle, ftl, FluentResource } from 'fluent';

const bundle1 = new FluentBundle('en-US');

const errors1 = bundle1.addMessages(ftl`
    -brand-name = Foo 3000
    welcome = Welcome, { $name }, to { -brand-name }!
`);

if (errors1.length) {
  // syntax errors are per-message and don't break the whole resource
}

const welcome = bundle1.getMessage('welcome');

bundle1.format(welcome || [], { name: 'Anna' });

// FluentBundle constructor examples:
const bundle2 = new FluentBundle(['en-US']);

const bundle3 = new FluentBundle(['en-US'], { useIsolating: false });

const bundle4 = new FluentBundle(['en-US'], {
  useIsolating: true,
  functions: {
    NODE_ENV: () => 'production'
  }
});

// FluentBundle addMessages examples:
bundle1.addMessages('foo = Foo');
bundle2.hasMessage('foo');
bundle2.getMessage('foo');

// FluentBundle addResource examples:
const a = FluentResource.fromString('foo');
bundle1.addResource(a);
bundle2.getMessage('foo');

// FluentBundle format examples:
const errors2: Array<string | Error> = [];
bundle1.addMessages('hello = Hello, { $name }!');
const hello = bundle2.getMessage('hello');
bundle3.format(hello || [], { name: 'Jane' }, errors2);
bundle3.format(hello || [], undefined, errors2);

for (const [id, message] of bundle1.messages) {
  bundle1.getMessage(id);
  bundle1.format(message);
}

Array.isArray(bundle4.locales);
