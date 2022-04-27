import cpuFeatures = require('cpu-features');

// test type exports
type CpuFeatures = cpuFeatures.CpuFeatures;
type X86CpuFeatures = cpuFeatures.X86CpuFeatures;
type X86UArch = cpuFeatures.X86UArch;
type X86CpuFlags = cpuFeatures.X86CpuFlags;
type ArmCpuFeatures = cpuFeatures.ArmCpuFeatures;
type ArmCpuFlags = cpuFeatures.ArmCpuFlags;
type Aarch64CpuFeatures = cpuFeatures.Aarch64CpuFeatures;
type Aarch64CpuFlags = cpuFeatures.Aarch64CpuFlags;
type MipsCpuFeatures = cpuFeatures.MipsCpuFeatures;
type MipsCpuFlags = cpuFeatures.MipsCpuFlags;
type PPCCpuFeatures = cpuFeatures.PPCCpuFeatures;
type PPCCpuFlags = cpuFeatures.PPCCpuFlags;
type UnknownCpuFeatures = cpuFeatures.UnknownCpuFeatures;

const features = cpuFeatures(); // $ExpectType CpuFeatures

switch (features.arch) {
    case 'x86':
        features; // $ExpectType X86CpuFeatures
        features.brand; // $ExpectType string
        features.family; // $ExpectType number
        features.model; // $ExpectType number
        features.stepping; // $ExpectType number
        features.uarch; // $ExpectType X86UArch
        features.flags; // $ExpectType X86CpuFlags
        break;
    case 'arm':
        features; // $ExpectType ArmCpuFeatures
        features.implementer; // $ExpectType number
        features.architecture; // $ExpectType number
        features.variant; // $ExpectType number
        features.part; // $ExpectType number
        features.revision; // $ExpectType number
        features.flags; // $ExpectType ArmCpuFlags
        break;
    case 'aarch64':
        features; // $ExpectType Aarch64CpuFeatures
        features.implementer; // $ExpectType number
        features.variant; // $ExpectType number
        features.part; // $ExpectType number
        features.revision; // $ExpectType number
        features.flags; // $ExpectType Aarch64CpuFlags
        break;
    case 'mips':
        features; // $ExpectType MipsCpuFeatures
        features.flags; // $ExpectType MipsCpuFlags
        break;
    case 'ppc':
        features; // $ExpectType PPCCpuFeatures
        features.platform; // $ExpectType string
        features.model; // $ExpectType string
        features.machine; // $ExpectType string
        features.cpu; // $ExpectType string
        features['instruction set']; // $ExpectType string
        features.microarchitecture; // $ExpectType string
        features.flags; // $ExpectType PPCCpuFlags
        break;
    default:
        features; // $ExpectType UnknownCpuFeatures
        features.arch; // $ExpectType "unknown"
        features.flags; // $ExpectType {}
}
