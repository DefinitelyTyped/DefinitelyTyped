export default class NetStat {
    stats(): Promise<NetStatInfo[]>;

    inOut(interval?: number): Promise<NetStatMetrics | string>;
}

export interface NetStatInfo {
    interface: string;
    inputBytes: string;
    outputBytes: string;
}

export interface NetStatMetrics {
    total: { inputMb: number; outputMb: number; };

    [key: string]: { inputMb: number; outputMb: number; };
}
