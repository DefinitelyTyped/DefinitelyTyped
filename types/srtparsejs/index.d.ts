export interface srtArray {
    id: string;
    startTime: string;
    endTime: string;
    text: string;
}

export interface srtPlayer {
    id: number;
    time: string;
    srtArray: srtArray;
    setText: (text: string) => void;
    update: (time: string) => void;
    getEndTime: () => string;
}

export function parse(srtText: string): srtArray[];
export function toSrt(data: srtArray[]): string;
export function toMS(timeString: string): number;
export function toTime(timeNumber: number): string;
export function compareTime(timeString: string, startString: string, endString: string): number;
export function getSrtArrayIndex(
    srtArray: srtArray[],
    startindex: number,
    endindex: number,
    timeString: string,
): number | undefined;
export function setPlayer(srtArray: srtArray[], setText: (text: string) => void): srtPlayer;
