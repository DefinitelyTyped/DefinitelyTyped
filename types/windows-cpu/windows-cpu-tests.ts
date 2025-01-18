import cpu from "windows-cpu";

cpu.wmic; // $ExpectType string
new cpu.WindowsCPU(); // $ExpectType WindowsCPU
cpu.isSupported(); // $ExpectType boolean
cpu.totalLoad(); // $ExpectType Promise<number[]>
cpu.findLoad(); // $ExpectType Promise<{ load: number[] | 0, found: { pid: number, process: string, load: number }[] }>
cpu.nodeLoad(); // $ExpectType Promise<{ load: number[] | 0, found: { pid: number, process: string, load: number }[] }>
cpu.thisLoad(); // $ExpectType Promise<{ load: number[] | 0, found: { pid: number, process: string, load: number }[] }>
cpu.cpuInfo(); // $ExpectType Promise<string[]>
cpu.totalMemoryUsage(); // $ExpectType Promise<{ usageInKb: number, usageInMb: number, usageInGb: number }>
