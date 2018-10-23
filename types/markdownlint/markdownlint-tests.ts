import * as markdownlint from 'markdownlint';

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
const results = markdownlint.sync(options);

markdownlint(options, (err, results) => {
    // $ExpectType Error | null
    err;

    // $ExpectType MarkdownlintResults
    results;

    const resultString: string = results.toString();
    // $ExpectError
    results.toString() as markdownlint.MarkdownlintResult[];

    const fileErrors: markdownlint.MarkdownlintResult[] = results[
        'file.md'
    ] as markdownlint.MarkdownlintResult[];
    const firstFileError: markdownlint.MarkdownlintResult = fileErrors[0];
    const firstFileErrorRule: string = firstFileError.ruleName;
});
