import * as command from "cypress-image-snapshot/command";
import { addMatchImageSnapshotPlugin } from "cypress-image-snapshot/plugin";

// $ExpectType void
command.addMatchImageSnapshotCommand({
    customSnapshotsDir: "../../test/cypress/snapshots",
    scale: true,
});

command.addMatchImageSnapshotCommand({
    comparisonMethod: "ssim",
    failureThreshold: 0.01,
    failureThresholdType: "percent",
});

type Task = (value: any) => any;

interface Tasks {
    [key: string]: Task;
}

interface PluginEvents {
    (action: "after:screenshot", fn: (details: { path: string }) => void): void;
    (action: "task", tasks: Tasks): void;
}

function pluginSetup(on: PluginEvents, config: {}): void {
    addMatchImageSnapshotPlugin(on, config); // $ExpectType void
}
