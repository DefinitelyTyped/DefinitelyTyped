import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import { connect } from 'puppeteer';

initStoryshots({
    test: imageSnapshot(),
});

initStoryshots({
    test: imageSnapshot({
        storybookUrl: 'http://localhost:9002',
        chromeExecutablePath: '/usr/local/bin/chrome',
        getMatchOptions: () => ({
            failureThreshold: 0.2,
            failureThresholdType: 'percent',
        }),
        getScreenshotOptions: () => ({ path: '/foo' }),
        beforeScreenshot: page => page.setViewport({ width: 300, height: 100 }),
        getGotoOptions: () => ({ timeout: 10 }),
        customizePage: page => page.setViewport({ width: 300, height: 100 }),
        getCustomBrowser: () => connect({ browserWSEndpoint: 'ws://yourUrl' }),
    }),
});
