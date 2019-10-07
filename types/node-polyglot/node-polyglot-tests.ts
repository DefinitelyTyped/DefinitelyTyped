import Polyglot = require('node-polyglot');

function instantiatePolyglot(): void {
    var polyglot = new Polyglot();
    var phrasedPolyglot = new Polyglot({ phrases: { hello: 'Hello' } });
    var localePolyglot = new Polyglot({ locale: 'fr' });
    var allowMissingPolyglot = new Polyglot({
        phrases: { hello: 'Hello' },
        allowMissing: true,
    });
    var onMissingKeySimplePolyglot = new Polyglot({
        phrases: { hello: 'Hello' },
        onMissingKey: (key: string): string => {
            return 'ouups!';
        },
    });
    var onMissingKeyComplexPolyglot = new Polyglot({
        phrases: { hello: 'Hello' },
        onMissingKey: (key: string, options: Polyglot.InterpolationOptions, locale: string): string => {
            return 'ouups!';
        },
    });
    var warnPolyglot = new Polyglot({
        warn: (message: string): void => {
            return;
        },
    });
    var interpolationPrefixPolyglot = new Polyglot({
        interpolation: { prefix: '$[' },
    });
    var interpolationSuffixPolyglot = new Polyglot({ interpolation: { suffix: ']' } });
}

function translate(): void {
    var polyglot = new Polyglot();

    polyglot.extend({
        hello: 'Hello',
        hello_name: 'Hola, %{name}.',
        nav: {
            sidebar: {
                welcome: 'Welcome',
            },
        },
        num_cars: '%{smart_count} car |||| %{smart_count} cars',
    });
    polyglot.extend(
        {
            hello: 'Hello',
            hello_name: 'Hola, %{name}.',
        },
        'nested',
    );

    polyglot.t('hello');
    polyglot.t('hello_name');
    polyglot.t('nav.sidebar.welcome');
    polyglot.t('num_cars', { smart_count: 0 });
    polyglot.t('num_cars', 0);
    polyglot.t('hello_name', { name: 'Spike' });
    polyglot.t('i_like_to_write_in_language', {
        _: 'I like to write in %{language}.',
        language: 'Javascript',
    });

    polyglot.has('hello');
    polyglot.has('world');

    polyglot.replace({
        hello: 'hey',
        nav: {
            sidebar: {
                welcome: 'Greetings',
            },
        },
    });

    polyglot.unset('hello');
    polyglot.unset({
        hello_name: 'Hola, %{name}.',
    });
    polyglot.unset('hello', 'nested');
    polyglot.unset(
        {
            hello_name: 'Hola, %{name}.',
        },
        'nested',
    );

    polyglot.clear();

    if (polyglot.locale('fr')) {
    }

    if (polyglot.locale()) {
    }
}

function transform(): void {
    Polyglot.transformPhrase('Hello');
    Polyglot.transformPhrase('Hola, %{name}.', { name: 'Spike' });
    Polyglot.transformPhrase('%{smart_count} car |||| %{smart_count} cars', 0);
    Polyglot.transformPhrase('%{smart_count} car |||| %{smart_count} cars', { smart_count: 0 });
    Polyglot.transformPhrase('Bonjour', undefined, 'fr');
}
