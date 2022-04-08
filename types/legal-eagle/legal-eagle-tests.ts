/// <reference types="node" />

import legalEagle = require('legal-eagle');

// from the package's README
legalEagle({path: process.cwd()}, (err, summary) => {
    if (err != null) {
        console.error(err);
        return;
    }
    console.log(summary);
});

// from GitHub desktop
declare var appRoot: string;
legalEagle(
    {
        path: appRoot,
        overrides: {
            'foo@1.2.3': {
                repository: 'git+ssh://git@github.com/foo/bar',
                license: '...',
                source: '...',
                sourceText: '...',
            }
        },
        omitPermissive: true
    }, (err, summary) => {
        if (err) {
            console.error(err);
            return;
        }

        if (Object.keys(summary).length > 0) {
            let licensesMessage = '';
            for (const key in summary) {
                const license = summary[key];
                licensesMessage += `${key} (${license.repository}): ${license.license}\n`;
            }

            throw new Error(licensesMessage);
        }
    }
);
