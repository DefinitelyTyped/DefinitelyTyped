declare module "murmurhash3js" {
    export namespace x86 {
        function hash32(val: string, seed?: number): number;
        function hash128(val: string, seed?: number): string;
    }

    export namespace x64 {
        function hash128(val: string, seed?: number): string;
    }
}
