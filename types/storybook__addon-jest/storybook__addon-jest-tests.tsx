/// <reference types="storybook__react" />

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';

const testDecorator = withTests({
    results: {
        numFailedTestSuites: 0,
        numFailedTests: 0,
        numPassedTestSuites: 1,
        numPassedTests: 1,
        numPendingTestSuites: 0,
        numPendingTests: 0,
        numRuntimeErrorTestSuites: 0,
        numTotalTestSuites: 1,
        numTotalTests: 1,
        startTime: 1533301378256,
        success: true,
        testResults: [
            {
                assertionResults: [
                    {
                        ancestorTitles: [
                            'TestComponent',
                            'Basic'
                        ],
                        failureMessages: [],
                        fullName: 'TestComponent Basic should render without error',
                        location: null,
                        status: 'passed',
                        title: 'should render without error',
                    }
                ],
                endTime: 1533301381197,
                message: '',
                name: '/path/to/tests',
                startTime: 1533301379074,
                status: 'passed',
                summary: ''
            }
        ],
        wasInterrupted: false,
    },
});

storiesOf('Test', module)
    .addDecorator(testDecorator('test'))
    .add('test', () => (
        <button>
          Hello World!
        </button>
    ));
