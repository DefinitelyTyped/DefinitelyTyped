import markdownlint = require('markdownlint');

const config: markdownlint.MarkdownlintConfig = {
    default: true,
    MD003: { style: 'atx_closed' },
    MD007: { indent: 4 },
    'no-hard-tabs': false,
    whitespace: false,
};

const options: markdownlint.MarkdownlintOptions = {
    files: ['README.md'],
    strings: { 'file.md': 'Header' },
    config,
    noInlineConfig: false,
    resultVersion: 1,
};

// $ExpectType MarkdownlintResults
markdownlint.sync(options);

markdownlint(options, (err, results) => {
    // $ExpectType Error | null
    err;

    // $ExpectType MarkdownlintResults
    results;

    // $ExpectType string
    results.toString();

    const fileErrors: markdownlint.MarkdownlintResult[] = results[
        'file.md'
    ] as markdownlint.MarkdownlintResult[];
    const firstFileError: markdownlint.MarkdownlintResult = fileErrors[0];
    const firstFileErrorRule: string = firstFileError.ruleName;
});

// tslint:disable: object-literal-key-quotes
markdownlint.sync({
    config: {
        "default": false,
        "heading-style": {
            "style": "atx"
        },
        "ul-style": {
            "style": "asterisk"
        },
        "list-indent": true,
        "ul-start-left": true,
        "ul-indent": {
            "indent": 4
        },
        "no-trailing-spaces": true,
        "no-hard-tabs": true,
        "no-reversed-links": true,
        "no-multiple-blanks": true,
        "no-missing-space-atx": true,
        "no-multiple-space-atx": true,
        "blanks-around-headings": true,
        "heading-start-left": true,
        "no-trailing-punctuation": {
            "punctuation": ".,;:!"
        },
        "no-multiple-space-blockquote": true,
        "no-blanks-blockquote": true,
        "ol-prefix": {
            "style": "ordered"
        },
        "list-marker-space": true,
        "blanks-around-fences": true,
        "blanks-around-lists": true,
        "no-bare-urls": true,
        "hr-style": {
            "style": "---"
        },
        "no-space-in-emphasis": true,
        "no-space-in-links": true,
        "fenced-code-language": true
    }
});
// tslint:enable: object-literal-key-quotes
