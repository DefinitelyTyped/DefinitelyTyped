/// <reference path="solution-center-communicator.d.ts" />

import * as ScCommunicator from 'solution-center-communicator';

var environment: ScCommunicator.Environment = {
  NAME: 'TEST',
  URL: 'https://norris.test.zalan.do',
  DOMAIN: '.zalan.do',
  PORT: '',
  USER_SERVICE: 'https://um.norris.test.zalan.do',
  TOKEN_SERVICE: 'https://tm.norris.test.zalan.do',
  MODULE_SERVICE: 'https://ms.norris.test.zalan.do'
};

var environments: ScCommunicator.Environments;
environments.TESTING = environment;

var environmentsProvider: ScCommunicator.ScEnvironmentsProvider;

environmentsProvider.setCurrentEnvironment(environment);
environmentsProvider.getCurrentEnvironment();
environmentsProvider.getSpecificEnvironment('TESTING');
