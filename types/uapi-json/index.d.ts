// Type definitions for uapi-json 1.13
// Project: https://github.com/Travelport-Ukraine/uapi-json
// Definitions by: Zvi Wex <https://github.com/zviwex>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { createUtilsService } from './lib/UtilsService';
import { createHotelService } from './lib/HotelsService';
import { createAirService } from './lib/Air';
import { createTerminalService } from './lib/Terminal';
import { commonErrors } from './lib/error-types';
import { requestErrors } from './lib/RequestErrors';
import { airErrors } from './lib/AirErrors';
import { hotelsErrors } from './lib/HotelsErrors';
import { utilsErrors } from './lib/UtilsErrors';
import { terminalErrors } from './lib/TerminalErrors';
import { errorCodes } from './lib/error-codes';

export namespace errors {
    export { commonErrors as Common };
    export { requestErrors as Request };
    export { airErrors as Air };
    export { hotelsErrors as Hotels };
    export { utilsErrors as Utils };
    export { terminalErrors as Terminal };
}
export { createUtilsService, createHotelService, createAirService, createTerminalService, errorCodes };
