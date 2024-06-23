declare const shortid: ShortId;

export = shortid;

interface ShortId {
    (): string;
    generate: () => string;
    characters: (string: string) => string;
    isValid: (id: any) => boolean;
    worker: (integer: number) => void;
    seed: (float: number) => void;
}
