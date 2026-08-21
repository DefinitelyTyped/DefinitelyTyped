export default class GeneralPurposeBit {
    descriptor: boolean;
    encryption: boolean;
    utf8: boolean;
    numberOfShannonFanoTrees: number;
    strongEncryption: boolean;
    slidingDictionarySize: number;

    static parse(buf: Buffer, offset?: number): GeneralPurposeBit;

    encode(): Buffer;

    setNumberOfShannonFanoTrees(n: number): void;
    getNumberOfShannonFanoTrees(): number;

    setSlidingDictionarySize(n: number): void;
    getSlidingDictionarySize(): number;

    useDataDescriptor(b: boolean): void;
    usesDataDescriptor(): boolean;

    useEncryption(b: boolean): void;
    usesEncryption(): boolean;

    useStrongEncryption(b: boolean): void;
    usesStrongEncryption(): boolean;

    useUTF8ForNames(b: boolean): void;
    usesUTF8ForNames(): boolean;
}
