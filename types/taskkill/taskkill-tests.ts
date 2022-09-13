import { Options, taskkill, taskkillSync } from 'taskkill';

declare const pid: string;
declare const name: string;
declare const options: Options;

async () => {
    await taskkill(pid, options);
    await taskkill(name, options);
    await taskkill([pid], options);
    taskkillSync(pid, options);
    taskkillSync(name, options);
    taskkillSync([pid], options);
    await taskkill(pid, { force: true, tree: true });
    taskkillSync(pid, { force: true });
};
