import JestSummaryReporter from 'jest-summarizing-reporter';

// Class extension working.
class CustomReporter extends JestSummaryReporter {}

// Custom config types working.

// $ExpectType JestSummaryReporter
const reporter = new JestSummaryReporter(
    {},
    {
        diffs: false,
    },
);

// $ExpectError
reporter.onRunComplete(new Set(), {});

// $ExpectType void
reporter.onRunStart();
