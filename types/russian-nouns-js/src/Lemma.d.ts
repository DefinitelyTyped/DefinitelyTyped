import Gender from './Gender';

export type LemmaOptions = {
    text: string;
    gender?: Gender[keyof Gender];
    indeclinable?: boolean;
    pluraleTantum?: boolean;
    animate?: boolean;
};

export class Lemma {
    constructor(o: LemmaOptions | Lemma);

    public newText(f: (o: string) => string): Lemma;
    public newGender(f: (o: string) => string): Lemma;
    public equals(o: Lemma): boolean;
    public fuzzyEquals(o: Lemma): boolean;
    public text(): string;
    public lower(): string;
    public isPluraleTantum(): boolean;
    /**
     * @deprecated Используйте isPluraleTantum(), т.к. речь об одной лемме, а pluralia — во мн.ч. на латыни.
     * @returns {boolean}
     */
    public isPluraliaTantum(): boolean;
    public getGender(): string;
    public isIndeclinable(): boolean;
    public isAnimate(): boolean;
    public isASurname(): boolean;
    public isASurname(): boolean;
    public isATransport(): boolean;
}
