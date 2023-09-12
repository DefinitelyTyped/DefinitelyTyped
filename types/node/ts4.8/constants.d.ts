/** @deprecated since v6.3.0 - use constants property exposed by the relevant module instead. */
declare module 'node:constants' {
    import { constants as osConstants, SignalConstants } from 'node:os';
    import { constants as cryptoConstants } from 'node:crypto';
    import { constants as fsConstants } from 'node:fs';

    const exp: typeof osConstants.errno &
        typeof osConstants.priority &
        SignalConstants &
        typeof cryptoConstants &
        typeof fsConstants;
    export = exp;
}

declare module 'constants' {
    import constants = require('node:constants');
    export = constants;
}
