import { Progressbar, create } from 'progressbar';

let str: string = '';
let progressbar: Progressbar;
let num: number = 1;
const fn: () => void = () => {};

progressbar = create();
progressbar = progressbar.step(str);
progressbar = progressbar.setStep(str);
progressbar = progressbar.setTick(num);
progressbar = progressbar.addTick();
progressbar = progressbar.addTick(num);
progressbar = progressbar.tick();
progressbar = progressbar.tick(num);
progressbar = progressbar.setTotal(num);
progressbar = progressbar.total(num);
progressbar = progressbar.addTotal();
progressbar = progressbar.addTotal(num);
progressbar = progressbar.finish(fn);

str = progressbar.getStep();

num = progressbar.getTick();
num = progressbar.getTotal();
