import register from '@cypress/code-coverage/task';
import '@cypress/code-coverage/support';

const on: Cypress.PluginEvents = null as never;
const config: Cypress.PluginConfigOptions = null as never;

register(on, config);
