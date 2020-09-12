/// <reference types="node" />
import karma = require('karma');

const testNoAddOns = (config: karma.Config) => {
    config.set({
        browsers: ['IE_no_addons'],
        customLaunchers: {
            IE_no_addons: {
                base: 'IE',
                flags: ['-extoff'],
            },
        },
    });
};

const testEmulated = (config: karma.Config) => {
    config.set({
        browsers: ['IE_no_addons'],
        customLaunchers: {
            IE9: {
                base: 'IE',
                'x-ua-compatible': 'IE=EmulateIE9',
            },
            IE8: {
                base: 'IE',
                'x-ua-compatible': 'IE=EmulateIE8',
            },
        },
    });
};
