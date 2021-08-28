import { EResult } from '../resources/EResult';

export interface Helpers {
    isSteamID(input: any): boolean;

    decodeSteamTime(time: any): Date;

    /**
     * Get an Error object for a particular EResult
     * @param eresult
     * @returns null|Error
     */
    eresultError(eresult: EResult): null | Error;
}
