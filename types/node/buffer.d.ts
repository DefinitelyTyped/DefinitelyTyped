declare module "buffer" {
    export const INSPECT_MAX_BYTES: number;
    const BuffType: typeof Buffer;

    export const SlowBuffer: {
        /** @deprecated since v6.0.0, use Buffer.allocUnsafeSlow() */
        new(size: number): Buffer;
        prototype: Buffer;
    };

    export { BuffType as Buffer };
}
