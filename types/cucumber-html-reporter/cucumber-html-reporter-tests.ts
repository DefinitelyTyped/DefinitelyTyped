import * as reporter from 'cucumber-html-reporter';

const options = {
  theme: 'bootstrap',
  jsonFile: './bdd/reports/cucumber-report.json',
  output: './bdd/reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    Application: 'ExampleProject',
    'Test Environment': 'Test',
    Browser: 'Chrome',
    Platform: 'OSx',
  },
};

reporter.generate(options);
