interface String {
    toInt(): number[];
}

interface Color {
    red: number;
    green: number;
    blue: number;
}

/**
 * Prints a message to the terminal and the log file.
 *
 * @param {string} message - The log message.
 * @deprecated Use console.log()/console.warn()/console.debug() instead.
 */
declare function print(message: string): void;

declare function printObject(obj: any, maxdepth: number): void;
declare function stringifyObject(obj: any, maxdepth: any, checked: any[], prefix: string): any;
declare function arrayContains(array: any[], elem: any): boolean;
declare function secondstominutes(secs: number): string;
declare function msecondstominutes(msecs: number): string;
declare function colorCodeFromObject(color: Color): number;
declare function colorCodeToObject(colorCode: number): Color;

declare namespace ButtonState {
    let released: number;
    let pressed: number;
}

declare namespace LedState {
    let off: number;
    let on: number;
}

declare namespace script {
    let LIBRARY_COLUMNS: Readonly<{
        ARTIST: 1;
        TITLE: 2;
        ALBUM: 3;
        ALBUM_ARTIST: 4;
        YEAR: 5;
        GENRE: 6;
        COMPOSER: 7;
        GROUPING: 8;
        TRACK_NUMBER: 9;
        FILETYPE: 10;
        NATIVE_LOCATION: 11;
        COMMENT: 12;
        DURATION: 13;
        BITRATE: 14;
        BPM: 15;
        REPLAY_GAIN: 16;
        DATETIME_ADDED: 17;
        TIMES_PLAYED: 18;
        RATING: 19;
        KEY: 20;
        PREVIEW: 21;
        COVERART: 22;
        TRACK_COLOR: 30;
        LAST_PLAYED: 31;
    }>;
    // DEPRECATED -- use script.midiDebug() instead
    function debug(channel: string, control: string, value: number, status: number, group: string): void;
    // DEPRECATED -- use script.midiPitch() instead
    function pitch(LSB: number, MSB: number, status: number): number | false;
    // DEPRECATED -- use script.absoluteLin() instead
    function absoluteSlider(
        group: string,
        key: string,
        value: number,
        low: number,
        high: number,
        min: number,
        max: number,
    ): void;

    type CoCallback = (value: number, group: string, name: string) => void;
    interface connections {
        [name: string]: CoCallback;
    }

    function midiDebug(channel: string, control: string, value: number, status: number, group: string): void;
    function deckFromGroup(group: string): number;
    function bindConnections(group: string, controlsToFunctions: connections, remove: boolean): void;
    function toggleControl(group: string, control: string): void;
    function triggerControl(group: string, control: string, delay: number): void;
    function absoluteLin(value: number, low: number, high: number, min: number, max: number): number;
    function absoluteLinInverse(value: number, low: number, high: number, min: number, max: number): number;
    function absoluteNonLin(value: number, low: number, mid: number, high: number, min: number, max: number): number;
    function absoluteNonLinInverse(
        value: number,
        low: number,
        mid: number,
        high: number,
        min: number,
        max: number,
    ): number;
    function crossfaderCurve(value: number, min: number, max: number): void;
    function posMod(a: number, m: number): number;
    function loopMove(group: string, direction: number, numberOfBeats: number): void;
    function midiPitch(LSB: number, MSB: number, status: number): number | false;
    function spinback(
        channel: string,
        control: string,
        value: number,
        status: number,
        group: string,
        factor: number,
        rate: number,
    ): void;
    function brake(
        channel: string,
        control: string,
        value: number,
        status: number,
        group: string,
        factor: number,
    ): void;
    function softStart(
        channel: string,
        control: string,
        value: number,
        status: number,
        group: string,
        factor: number,
    ): void;
    let samplerRegEx: RegExp;
    let channelRegEx: RegExp;
    let eqRegEx: RegExp;
    let quickEffectRegEx: RegExp;
    let effectUnitRegEx: RegExp;
    let individualEffectRegEx: RegExp;
}

declare namespace bpm {
    let tapTime: number;
    let previousTapDelta: number;
    let tap: number[];
    function tapButton(deck: number): void;
}

declare class Controller {
    addButton(buttonName: string, button: Button, eventHandler: (value: number) => void): void;
    setControlValue(control: string, value: number): void;
}
declare class Button {
    private constructor(deck: number);
    handleEvent(value: number): void;
}
declare class Control {
    private constructor(mappedFunction: string, softMode: boolean);
    setValue(group: string, inputvalue: number): void;
}
declare class Deck extends Controller {
    private constructor(deckNumber: number, group: string);
}
