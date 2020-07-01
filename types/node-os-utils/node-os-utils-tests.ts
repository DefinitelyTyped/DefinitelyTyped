import * as NodeOsUtils from 'node-os-utils';

NodeOsUtils.mem.info()
    .then(console.log);

NodeOsUtils.exec("ls -al")()
    .then(console.log);
