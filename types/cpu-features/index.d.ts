export = getCpuInfo;

/**
 * A simple node.js binding to [`cpu_features`](https://github.com/google/cpu_features) for obtaining
 * information about installed CPU(s).
 *
 * @example
 * // Generally it's a good idea to just call this once and
 * // reuse the result since `cpu-features` does not cache
 * // the result itself.
 * import cpuFeatures = require('cpu-features');
 *
 * console.log(cpuFeatures());
 * // example output:
 * // {
 * //   arch: 'x86',
 * //   brand: 'Intel(R) Core(TM) i7-3520M CPU @ 2.90GHz',
 * //   family: 6,
 * //   model: 58,
 * //   stepping: 9,
 * //   uarch: 'INTEL_IVB',
 * //   flags: {
 * //     fpu: true,
 * //     tsc: true,
 * //     cx8: true,
 * //     clfsh: true,
 * //     mmx: true,
 * //     aes: true,
 * //     erms: true,
 * //     f16c: true,
 * //     sse: true,
 * //     sse2: true,
 * //     sse3: true,
 * //     ssse3: true,
 * //     sse4_1: true,
 * //     sse4_2: true,
 * //     avx: true,
 * //     pclmulqdq: true,
 * //     smx: true,
 * //     cx16: true,
 * //     popcnt: true,
 * //     rdrnd: true,
 * //     ss: true
 * //   }
 * // }
 */
declare function getCpuInfo(): getCpuInfo.CpuFeatures;

declare namespace getCpuInfo {
    type CpuFeatures =
        | X86CpuFeatures
        | ArmCpuFeatures
        | Aarch64CpuFeatures
        | MipsCpuFeatures
        | PPCCpuFeatures
        | UnknownCpuFeatures;

    interface X86CpuFeatures {
        arch: "x86";
        brand: string;
        family: number;
        model: number;
        stepping: number;
        uarch: X86UArch;
        flags: X86CpuFlags;
    }

    type X86UArch =
        | "X86_UNKNOWN"
        | "INTEL_CORE"
        | "INTEL_PNR"
        | "INTEL_NHM"
        | "INTEL_ATOM_BNL"
        | "INTEL_WSM"
        | "INTEL_SNB"
        | "INTEL_IVB"
        | "INTEL_ATOM_SMT"
        | "INTEL_HSW"
        | "INTEL_BDW"
        | "INTEL_SKL"
        | "INTEL_ATOM_GMT"
        | "INTEL_KBL"
        | "INTEL_CFL"
        | "INTEL_WHL"
        | "INTEL_CNL"
        | "INTEL_ICL"
        | "INTEL_TGL"
        | "INTEL_SPR"
        | "AMD_HAMMER"
        | "AMD_K10"
        | "AMD_K11"
        | "AMD_K12"
        | "AMD_BOBCAT"
        | "AMD_PILEDRIVER"
        | "AMD_STREAMROLLER"
        | "AMD_EXCAVATOR"
        | "AMD_BULLDOZER"
        | "AMD_PUMA"
        | "AMD_JAGUAR"
        | "AMD_ZEN"
        | "AMD_ZEN_PLUS"
        | "AMD_ZEN2"
        | "AMD_ZEN3"
        | "unknown microarchitecture";

    /**
     * See https://en.wikipedia.org/wiki/CPUID for a list of x86 cpu features.
     * The field names are based on the short name provided in the wikipedia tables.
     */
    interface X86CpuFlags {
        fpu?: true;
        tsc?: true;
        cx8?: true;
        clfsh?: true;
        mmx?: true;
        aes?: true;
        erms?: true;
        f16c?: true;
        fma4?: true;
        fma3?: true;
        vaes?: true;
        vpclmulqdq?: true;
        bmi1?: true;
        hle?: true;
        bmi2?: true;
        rtm?: true;
        rdseed?: true;
        clflushopt?: true;
        clwb?: true;

        sse?: true;
        sse2?: true;
        sse3?: true;
        ssse3?: true;
        sse4_1?: true;
        sse4_2?: true;
        sse4a?: true;

        avx?: true;
        avx2?: true;

        avx512f?: true;
        avx512cd?: true;
        avx512er?: true;
        avx512pf?: true;
        avx512bw?: true;
        avx512dq?: true;
        avx512vl?: true;
        avx512ifma?: true;
        avx512vbmi?: true;
        avx512vbmi2?: true;
        avx512vnni?: true;
        avx512bitalg?: true;
        avx512vpopcntdq?: true;
        avx512_4vnniw?: true;
        avx512_4vbmi2?: true;
        avx512_second_fma?: true;
        avx512_4fmaps?: true;
        avx512_bf16?: true;
        avx512_vp2intersect?: true;
        amx_bf16?: true;
        amx_tile?: true;
        amx_int8?: true;

        pclmulqdq?: true;
        smx?: true;
        sgx?: true;
        /**
         * aka. CMPXCHG16B
         */
        cx16?: true;
        sha?: true;
        popcnt?: true;
        movbe?: true;
        rdrnd?: true;

        dca?: true;
        ss?: true;
    }

    interface ArmCpuFeatures {
        arch: "arm";
        implementer: number;
        architecture: number;
        variant: number;
        part: number;
        revision: number;
        flags: ArmCpuFlags;
    }

    interface ArmCpuFlags {
        /**
         * SWP instruction (atomic read-modify-write)
         */
        swp?: true;
        /**
         * Half-word loads and stores
         */
        half?: true;
        /**
         * Thumb (16-bit instruction set)
         */
        thumb?: true;
        /**
         * "26 Bit" Model (Processor status register folded into program counter)
         */
        _26bit?: true;
        /**
         * 32x32->64-bit multiplication
         */
        fastmult?: true;
        /**
         * Floating point accelerator
         */
        fpa?: true;
        /**
         * Vector Floating Point.
         */
        vfp?: true;
        /**
         * DSP extensions (the 'e' variant of the ARM9 CPUs, and all others above)
         */
        edsp?: true;
        /**
         * Jazelle (Java bytecode accelerator)
         */
        java?: true;
        /**
         * Intel Wireless MMX Technology.
         */
        iwmmxt?: true;
        /**
         * MaverickCrunch coprocessor
         */
        crunch?: true;
        /**
         * ThumbEE
         */
        thumbee?: true;
        /**
         * Advanced SIMD.
         */
        neon?: true;
        /**
         * VFP version 3
         */
        vfpv3?: true;
        /**
         * VFP version 3 with 16 D-registers
         */
        vfpv3d16?: true;
        /**
         * TLS register
         */
        tls?: true;
        /**
         * VFP version 4 with fast context switching
         */
        vfpv4?: true;
        /**
         * SDIV and UDIV hardware division in ARM mode.
         */
        idiva?: true;
        /**
         * SDIV and UDIV hardware division in Thumb mode.
         */
        idivt?: true;
        /**
         * VFP with 32 D-registers
         */
        vfpd32?: true;
        /**
         * Large Physical Address Extension (>4GB physical memory on 32-bit architecture)
         */
        lpae?: true;
        /**
         * kernel event stream using generic architected timer
         */
        evtstrm?: true;
        /**
         * Hardware-accelerated Advanced Encryption Standard.
         */
        aes?: true;
        /**
         * Polynomial multiply long.
         */
        pmull?: true;
        /**
         * Hardware-accelerated SHA1.
         */
        sha1?: true;
        /**
         * Hardware-accelerated SHA2-256.
         */
        sha2?: true;
        /**
         * Hardware-accelerated CRC-32.
         */
        crc32?: true;
    }

    interface Aarch64CpuFeatures {
        arch: "aarch64";
        implementer: number;
        variant: number;
        part: number;
        revision: number;
        flags: Aarch64CpuFlags;
    }

    interface Aarch64CpuFlags {
        /**
         * Floating-point.
         */
        fp?: true;
        /**
         * Advanced SIMD.
         */
        asimd?: true;
        /**
         * Generic timer generated events.
         */
        evtstrm?: true;
        /**
         * Hardware-accelerated Advanced Encryption Standard.
         */
        aes?: true;
        /**
         * Polynomial multiply long.
         */
        pmull?: true;
        /**
         * Hardware-accelerated SHA1.
         */
        sha1?: true;
        /**
         * Hardware-accelerated SHA2-256.
         */
        sha2?: true;
        /**
         * Hardware-accelerated CRC-32.
         */
        crc32?: true;
        /**
         * Armv8.1 atomic instructions.
         */
        atomics?: true;
        /**
         * Half-precision floating point support.
         */
        fphp?: true;
        /**
         * Advanced SIMD half-precision support.
         */
        asimdhp?: true;
        /**
         * Access to certain ID registers.
         */
        cpuid?: true;
        /**
         * Rounding Double Multiply Accumulate/Subtract.
         */
        asimdrdm?: true;
        /**
         * Support for JavaScript conversion.
         */
        jscvt?: true;
        /**
         * Floating point complex numbers.
         */
        fcma?: true;
        /**
         * Support for weaker release consistency.
         */
        lrcpc?: true;
        /**
         * Data persistence writeback.
         */
        dcpop?: true;
        /**
         * Hardware-accelerated SHA3.
         */
        sha3?: true;
        /**
         * Hardware-accelerated SM3.
         */
        sm3?: true;
        /**
         * Hardware-accelerated SM4.
         */
        sm4?: true;
        /**
         * Dot product instruction.
         */
        asimddp?: true;
        /**
         * Hardware-accelerated SHA512.
         */
        sha512?: true;
        /**
         * Scalable Vector Extension.
         */
        sve?: true;
        /**
         * Additional half-precision instructions.
         */
        asimdfhm?: true;
        /**
         * Data independent timing.
         */
        dit?: true;
        /**
         * Unaligned atomics support.
         */
        uscat?: true;
        /**
         * Additional support for weaker release consistency.
         */
        ilrcpc?: true;
        /**
         * Flag manipulation instructions.
         */
        flagm?: true;
        /**
         * Speculative Store Bypass Safe PSTATE bit.
         */
        ssbs?: true;
        /**
         * Speculation barrier.
         */
        sb?: true;
        /**
         * Address authentication.
         */
        paca?: true;
        /**
         * Generic authentication.
         */
        pacg?: true;
        /**
         * Data cache clean to point of persistence.
         */
        dcpodp?: true;
        /**
         * Scalable Vector Extension (version 2).
         */
        sve2?: true;
        /**
         * SVE AES instructions.
         */
        sveaes?: true;
        /**
         * SVE polynomial multiply long instructions.
         */
        svepmull?: true;
        /**
         * SVE bit permute instructions.
         */
        svebitperm?: true;
        /**
         * SVE SHA3 instructions.
         */
        svesha3?: true;
        /**
         * SVE SM4 instructions.
         */
        svesm4?: true;
        /**
         * Additional flag manipulation instructions.
         */
        flagm2?: true;
        /**
         * Floating point to integer rounding.
         */
        frint?: true;
        /**
         * SVE Int8 matrix multiplication instructions.
         */
        svei8mm?: true;
        /**
         * SVE FP32 matrix multiplication instruction.
         */
        svef32mm?: true;
        /**
         * SVE FP64 matrix multiplication instructions.
         */
        svef64mm?: true;
        /**
         * SVE BFloat16 instructions.
         */
        svebf16?: true;
        /**
         * Int8 matrix multiplication instructions.
         */
        i8mm?: true;
        /**
         * BFloat16 instructions.
         */
        bf16?: true;
        /**
         * Data Gathering Hint instruction.
         */
        dgh?: true;
        /**
         * True random number generator support.
         */
        rng?: true;
        /**
         * Branch target identification.
         */
        bti?: true;
        /**
         * Memory tagging extension.
         */
        mte?: true;
    }

    interface MipsCpuFeatures {
        arch: "mips";
        flags: MipsCpuFlags;
    }

    interface MipsCpuFlags {
        /*
         * MIPS SIMD Architecture
         * https://www.mips.com/products/architectures/ase/simd/
         */
        msa?: true;
        /**
         * Enhanced Virtual Addressing
         * https://www.mips.com/products/architectures/mips64/
         */
        eva?: true;
        /**
         * `true` if is release 6 of the processor.
         */
        r6?: true;
    }

    interface PPCCpuFeatures {
        arch: "ppc";
        platform: string;
        model: string;
        machine: string;
        cpu: string;
        "instruction set": string;
        microarchitecture: string;
        flags: PPCCpuFlags;
    }

    interface PPCCpuFlags {
        ppc32?: true;
        ppc64?: true;
        ppc601?: true;
        altivec?: true;
        fpu?: true;
        mmu?: true;
        mac_4xx?: true;
        unifiedcache?: true;
        spe?: true;
        efpsingle?: true;
        efpdouble?: true;
        no_tb?: true;
        power4?: true;
        power5?: true;
        power5plus?: true;
        cell?: true;
        booke?: true;
        smt?: true;
        icachesnoop?: true;
        arch205?: true;
        pa6t?: true;
        dfp?: true;
        power6ext?: true;
        arch206?: true;
        vsx?: true;
        pseries_perfmon_compat?: true;
        truele?: true;
        ppcle?: true;
        arch207?: true;
        htm?: true;
        dscr?: true;
        ebb?: true;
        isel?: true;
        tar?: true;
        vcrypto?: true;
        htm_nosc?: true;
        arch300?: true;
        ieee128?: true;
        darn?: true;
        scv?: true;
        htm_no_suspend?: true;
    }

    interface UnknownCpuFeatures {
        arch: "unknown";
        flags: {};
    }
}
