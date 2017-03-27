import * as sequester from "sequester";

function cb() {};

{
    const lock = sequester.createLock();
    lock.share(cb);
    lock.exclude(cb);
    const a: number = lock.count;
    lock.unlock();
    lock.downgrade();
    lock.dispose();
}
