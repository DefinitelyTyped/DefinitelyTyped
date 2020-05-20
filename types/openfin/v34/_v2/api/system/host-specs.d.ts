export interface Time {
    user: number;
    nice: number;
    sys: number;
    idle: number;
    irq: number;
}
export interface CpuInfo {
    model: string;
    speed: number;
    times: Time;
}
export interface GpuInfo {
    name: string;
}
export interface HostSpecs {
    cpu: CpuInfo[];
    memory: number;
    arch: string;
    name: string;
    gpu: GpuInfo;
}
