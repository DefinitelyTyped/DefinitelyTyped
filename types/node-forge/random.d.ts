declare module "node-forge" {
    namespace random {
        function getBytes(count: number, callback?: (err: Error | null, bytes: Bytes) => any): void;
        function getBytesSync(count: number): Bytes;
        type CB = (_: any, seed: string) => void;
        interface Random {
            seedFileSync: (needed: number) => string;
            seedFile: (needed: number, cb: CB) => void;
        }
        function createInstance(): Random;
    }
}
