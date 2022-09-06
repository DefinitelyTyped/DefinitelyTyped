/* tslint:disable:no-namespace */
'use strict';

import standardVersion from 'standard-version';

namespace Module {
    declare const options: standardVersion.Options;

    // $ExpectType Promise<void>
    standardVersion(options);

    // @ts-expect-error
    standardVersion();

    // $ExpectType Promise<void>
    standardVersion({
        bumpFiles: [{ filename: 'version.json', type: 'json' }],
        packageFiles: [{ filename: 'version.json', type: 'json' }],
    });

    // $ExpectType Promise<void>
    standardVersion({
        bumpFiles: ['version.json'],
        packageFiles: ['version.json'],
    });
}
