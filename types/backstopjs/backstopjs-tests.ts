import backstop, { Scenario, Viewport } from 'backstopjs';

/** Examples inspired on https://github.com/garris/BackstopJS#integration-options-local-install */

backstop('approve').then(() => { }).catch(() => { });

backstop('init');

backstop('reference', {
  filter: 'someScenarioLabelAsRegExString'
});

backstop('test', { config: 'custom/backstop/config.json' });

backstop('test', {
  filter: 'someScenarioLabelAsRegExString',
  config: {
    id: 'foo',
    scenarios: [],
    viewports: [],
  }
});

/** Custom example */

const scenarios: Scenario[] = [{ label: 'fake', url: 'fakeUrl' }];
const viewports: Viewport[] = [
  {
    name: 'phone',
    width: 320,
    height: 480,
  },
  {
    name: 'tablet',
    width: 1024,
    height: 768,
  },
  {
    name: 'desktop',
    width: 1280,
    height: 1024,
  },
];
backstop('test', {
  config: {
    scenarios,
    viewports,
    asyncCaptureLimit: 10,
    asyncCompareLimit: 100,
    baseUrl: 'http://fake:8080',
    id: 'fakeId',
    engine: 'puppeteer',
    engineOptions: {
      args: ['--no-sandbox'],
    },
    onReadyScript: 'fake/path',
    paths: {
      bitmaps_reference: 'fake/path',
      bitmaps_test: 'fake/path',
      html_report: 'fake/path',
    },
    report: ['browser'],
  },
});
