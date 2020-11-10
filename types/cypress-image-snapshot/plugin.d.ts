import * as cypress from 'cypress';

declare function addMatchImageSnapshotPlugin(on: cypress.PluginEvents, config: cypress.PluginConfigOptions): void;

export { addMatchImageSnapshotPlugin };
