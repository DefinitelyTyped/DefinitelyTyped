declare namespace Base64 {
    function encode(data: number[] | Uint8Array): string;
    function decode(data: string, offset?: number): number[];
}
export default Base64;
