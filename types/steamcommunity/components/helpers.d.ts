import { EResult } from '../index';

export interface Helpers {
    isSteamID(input: any): boolean;

    decodeSteamTime(time: string): Date;

    /**
     * Get an Error object for a particular EResult
     * @param eresult
     * @returns null|Error
     */
    eresultError(eresult: EResult): null | Error;
}
