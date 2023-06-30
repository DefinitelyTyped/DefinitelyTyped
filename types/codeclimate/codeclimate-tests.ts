import { Issue } from 'codeclimate';

let issue: Issue = {
    type: 'issue',
    check_name: 'no-shadow',
    description: 'Variable `shadowed` already exists in the current scope',
    categories: ['Bug Risk'],
    location: { path: 'path/to/file', lines: { begin: 1, end: 1 } },
};

issue = {
    type: 'issue',
    check_name: 'no-console',
    description: 'Disallowed use of console',
    categories: [
        'Bug Risk',
        'Clarity',
        'Compatibility',
        'Complexity',
        'Duplication',
        'Performance',
        'Security',
        'Style',

        // @ts-expect-error
        'Invalid string',
    ],
    location: { path: 'path/to/file', positions: { begin: { line: 1, column: 2 }, end: { offset: 5 } } },
    other_locations: [{ path: 'path/to/file', positions: { begin: { offset: 5 }, end: { line: 1, column: 2 } } }],
    trace: {
        stacktrace: true,
        locations: [{ path: 'path/to/file', positions: { begin: { offset: 5 }, end: { line: 1, column: 2 } } }],
    },
    content: { body: 'Use a proper logger instead' },
    fingerprint: '1234',
    remediation_points: 50_000,
};

issue.severity = 'info';
issue.severity = 'minor';
issue.severity = 'major';
issue.severity = 'critical';
issue.severity = 'blocker';
