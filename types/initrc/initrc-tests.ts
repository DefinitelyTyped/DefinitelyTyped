import { base } from "initrc";

const init = new base();
init.startAdd(() => { }, 1, 'test');
init.startRun();
init.stopAdd(() => { }, 1, 'test');
init.startRun();
init.status();
