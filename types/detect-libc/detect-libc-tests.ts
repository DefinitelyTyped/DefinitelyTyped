import * as detectLibc from 'detect-libc';

detectLibc.GLIBC; // $ExpectType "glibc"
detectLibc.MUSL; // $ExpectType "musl"
detectLibc.family; // $ExpectType "" | "glibc" | "musl"
detectLibc.isNonGlibcLinux; // $ExpectType boolean
detectLibc.method; // $ExpectType "" | "getconf" | "ldd" | "filesystem"
detectLibc.version; // $ExpectType string
