export default class Cpu {
    average(): CpuAverageInfo;

    usage(interval?: number): Promise<number>;

    free(interval?: number): Promise<number>;

    count(): number;

    model(): string;

    loadavg(): number[];

    loadavgTime(time: string | number): number;
}

export interface CpuAverageInfo {
    totalIdle: number;
    totalTick: number;
    avgIdle: number;
    avgTotal: number;
}
