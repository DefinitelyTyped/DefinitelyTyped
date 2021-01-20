import * as command from 'cypress-image-snapshot/command';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

// $ExpectType void
command.addMatchImageSnapshotCommand({
    customSnapshotsDir: '../../test/cypress/snapshots',
    scale: true,
});

function pluginSetup(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): void {
    addMatchImageSnapshotPlugin(on, config); // $ExpectType void
}
