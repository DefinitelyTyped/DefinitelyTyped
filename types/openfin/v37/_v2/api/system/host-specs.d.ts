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
    aeroGlassEnabled?: boolean;
    arch: string;
    cpus: CpuInfo[];
    gpu: GpuInfo;
    memory: number;
    name: string;
    screenSaver?: boolean;
}
