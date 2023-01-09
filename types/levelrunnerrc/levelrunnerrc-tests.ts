import { LevelRunner } from "levelrunnerrc";

const runner = new LevelRunner(() => { }, () => { }, 20);
runner.add(() => { }, 1, 'test');
runner.run();
