import { createAirService } from "./lib/Air";
import { airErrors } from "./lib/AirErrors";
import { errorCodes } from "./lib/error-codes";
import { commonErrors } from "./lib/error-types";
import { hotelsErrors } from "./lib/HotelsErrors";
import { createHotelService } from "./lib/HotelsService";
import { requestErrors } from "./lib/RequestErrors";
import { createTerminalService } from "./lib/Terminal";
import { terminalErrors } from "./lib/TerminalErrors";
import { utilsErrors } from "./lib/UtilsErrors";
import { createUtilsService } from "./lib/UtilsService";

export namespace errors {
    export { commonErrors as Common };
    export { requestErrors as Request };
    export { airErrors as Air };
    export { hotelsErrors as Hotels };
    export { utilsErrors as Utils };
    export { terminalErrors as Terminal };
}
export { createAirService, createHotelService, createTerminalService, createUtilsService, errorCodes };
