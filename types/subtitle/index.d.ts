export interface subTitleType {
    start: number | string;
    end: number | string;
    text: string;
    setting?: string | undefined;
}

export function parse(srtOrVtt: string): subTitleType[];
export function stringify(captions: ReadonlyArray<subTitleType>): string;
export function stringifyVtt(captions: ReadonlyArray<subTitleType>): string;
export function resync(captions: ReadonlyArray<subTitleType>, time: number): subTitleType[];
export function toMS(timestamp: string): number;
export function toSrtTime(timestamp: number): string;
export function toVttTime(timestamp: number): string;
