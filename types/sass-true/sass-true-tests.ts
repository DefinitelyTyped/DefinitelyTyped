import { formatFailureMessage, parse, runSass } from 'sass-true';

// $ExpectType void
runSass({ file: 'file.scss' }, { it: () => {}, describe: () => {} });

// $ExpectType string
formatFailureMessage({
    description: 'description',
    assertionType: 'assertionType',
    expected: 'expected',
    output: 'output',
    passed: true,
});

// $ExpectType Module[]
parse('rawCss');
