export = TLRE;

declare function TLRE(options?: { limit: number }): TLRE.TLRE;

declare namespace TLRE {
    interface TLRE {
        match(regex: RegExp, string: string): Promise<RegExpMatchArray | null>;
    }
}
