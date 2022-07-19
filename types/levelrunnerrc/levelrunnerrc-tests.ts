import { levelRunnerBase } from "levelrunnerrc";

const runner = new levelRunnerBase(() => { }, () => { }, 20);
runner.add(() => { }, 1, 'test');
runner.run();
