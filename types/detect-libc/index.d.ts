export const GLIBC: "glibc";
export const MUSL: "musl";
export const family: "" | "glibc" | "musl";
export const version: string;
export const method: "" | "getconf" | "ldd" | "filesystem";
export const isNonGlibcLinux: boolean;
