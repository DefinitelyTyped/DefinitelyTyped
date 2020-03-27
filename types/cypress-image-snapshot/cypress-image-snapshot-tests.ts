import * as command from 'cypress-image-snapshot/command';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

// $ExpectType void
command.addMatchImageSnapshotCommand({
    customSnapshotsDir: '../../test/cypress/snapshots',
    scale: true,
});

addMatchImageSnapshotPlugin(() => null, {}); // $ExpectType void
