import { fsp, common } from '@happyguestmx/web-utilities';

new fsp.FSP([], [], true, true);
common.isEmpty({});
common.cleanFields({ foo: undefined });
