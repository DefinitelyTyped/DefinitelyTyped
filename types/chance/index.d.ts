declare namespace Chance {
    type Seed = number | string;

    interface Seeded {
        seed: Seed;
    }

    interface ChanceStatic {
        (): Chance;
        (...seed: Seed[]): Chance;
        (generator: () => any): Chance;

        new(): Chance;
        new(...seed: Seed[]): Chance;
        new(generator: () => any): Chance;
    }

    type FalsyType = false | null | undefined | 0 | typeof NaN | "";
    interface FalsyOptions {
        pool: FalsyType[];
    }

    interface Chance extends Seeded {
        // Basics
        bool(opts?: { likelihood: number }): boolean;
        character(opts?: Partial<CharacterOptions>): string;
        /** https://chancejs.com/basics/falsy.html */
        falsy(ops?: FalsyOptions): FalsyType;
        floating(opts?: Options): number;
        integer(opts?: Partial<IntegerOptions>): number;
        letter(opts?: Options): string;
        natural(opts?: Options): number;
        string(opts?: Partial<StringOptions>): string;
        template(template: string): string;

        // Text
        paragraph(opts?: Options): string;
        sentence(opts?: Partial<SentenceOptions>): string;
        syllable(opts?: Options): string;
        word(opts?: Partial<WordOptions>): string;

        // Person
        age(opts?: Options): number;
        gender(): string;
        birthday(): Date;
        birthday(opts?: Options): Date | string;
        cf(opts?: Options): string;
        cpf(opts?: { formatted: boolean }): string;
        first(opts?: Partial<FirstNameOptions>): string;
        last(opts?: LastNameOptions): string;
        name(opts?: Partial<NameOptions>): string;
        name_prefix(opts?: Partial<PrefixOptions>): string;
        name_suffix(opts?: SuffixOptions): string;
        prefix(opts?: Partial<PrefixOptions>): string;
        ssn(opts?: Options): string;
        suffix(opts?: SuffixOptions): string;

        // Mobile
        animal(opts?: Options): string;

        // Mobile
        android_id(): string;
        apple_token(): string;
        bb_pin(): string;
        wp7_anid(): string;
        wp8_anid2(): string;

        // Web
        avatar(opts?: Options): string;
        color(opts?: Options): string;
        company(): string;
        domain(opts?: Options): string;
        email(opts?: Partial<EmailOptions>): string;
        fbid(): string;
        google_analytics(): string;
        hashtag(): string;
        ip(): string;
        ipv6(): string;
        klout(): string;
        profession(opts?: Options): string;
        tld(): string;
        twitter(): string;
        url(opts?: Partial<UrlOptions>): string;
        mac_address(opts?: Partial<MacOptions>): string;

        // Location
        address(opts?: Options): string;
        altitude(opts?: Options): number;
        areacode(): string;
        city(): string;
        coordinates(opts?: Options): string;
        country(opts?: Options): string;
        depth(opts?: Options): number;
        geohash(opts?: Options): string;
        latitude(opts?: Options): number;
        locale(opts?: { region: true }): string;
        locales(opts?: { region: true }): string[];
        longitude(opts?: Options): number;
        phone(opts?: Options): string;
        postcode(): string;
        postal(): string;
        province(opts?: Options): string;
        state(opts?: Options): string;
        street(opts?: Options): string;
        zip(opts?: Options): string;

        // Time
        ampm(): string;
        date(): Date;
        date(opts: DateOptions): Date | string;
        hammertime(): number;
        hour(opts?: Options): number;
        millisecond(): number;
        minute(): number;
        month(): string;
        month(opts: Options): Month;
        second(): number;
        timestamp(): number;
        timezone(): Timezone;
        weekday(opts: Options): "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        year(opts?: Options): string;

        // Finance
        cc(opts?: Options): string;
        cc_type(): string;
        cc_type(opts: Options): string | CreditCardType;
        currency(): Currency;
        currency_pair(): [Currency, Currency];
        dollar(opts?: Options): string;
        euro(opts?: Options): string;
        exp(): string;
        exp(opts: Options): string | CreditCardExpiration;
        exp_month(opts?: Options): string;
        exp_year(opts?: Options): string;

        // Helpers
        capitalize(str: string): string;
        mixin(desc: MixinDescriptor): any;
        pad(num: number, width: number, padChar?: string): string;
        /**
         * @deprecated Use pickone
         */
        pick<T>(arr: T[]): T;
        pickone<T>(arr: T[]): T;
        /**
         * @deprecated Use pickset
         */
        pick<T>(arr: T[], count: number): T[];
        pickset<T>(arr: T[], count?: number): T[];
        set: Setter;
        shuffle<T>(arr: T[]): T[];

        // Miscellaneous
        coin(): string;
        d4(): number;
        d6(): number;
        d8(): number;
        d10(): number;
        d12(): number;
        d20(): number;
        d30(): number;
        d100(): number;
        guid(options?: { version: 4 | 5 }): string;
        hash(opts?: Options): string;
        n<T>(generator: () => T, count: number): T[];
        n<T, O extends Options>(generator: (options: O) => T, count: number, options: O): T[];
        normal(opts?: Options): number;
        radio(opts?: Options): string;
        rpg(dice: string): number[];
        rpg(dice: string, opts?: Options): number[] | number;
        tv(opts?: Options): string;
        unique<T>(generator: () => T, count: number): T[];
        unique<T, O extends UniqueOptions<T>>(generator: (options: O) => T, count: number, options: O): T[];
        weighted<T>(values: T[], weights: number[]): T;

        // "Hidden"
        cc_types(): CreditCardType[];
        mersenne_twister(seed?: Seed): any; // API return type not defined in docs
        months(): Month[];
        name_prefixes(): Name[];
        provinces(): Name[];
        states(): Name[];
        street_suffix(): Name;
        street_suffixes(): Name[];
    }

    // A more rigorous approach might be to produce
    // the correct options interfaces for each method
    interface Options {
        [id: string]: any;
    }

    interface WordOptions {
        length: number;
        syllables: number;
        capitalize: boolean;
    }

    interface CharacterOptions {
        casing: "upper" | "lower";
        pool: string;
        alpha: boolean;
        numeric: boolean;
        symbols: boolean;
    }

    type StringOptions = CharacterOptions & { length: number };

    interface UrlOptions {
        protocol: string;
        domain: string;
        domain_prefix: string;
        path: string;
        extensions: string[];
    }

    interface MacOptions {
        separator: string;
        networkVersion: boolean;
    }

    interface IntegerOptions {
        min: number;
        max: number;
    }

    type FirstNameNationalities = "en" | "it";
    type LastNameNationalities = FirstNameNationalities | "nl" | "uk" | "de" | "jp" | "es" | "fr" | "*";

    interface FullNameOptions {
        middle: boolean;
        middle_initial: boolean;
        prefix: boolean;
        suffix: boolean;
    }

    interface FirstNameOptions {
        gender: "male" | "female";
        nationality: FirstNameNationalities;
    }

    interface LastNameOptions {
        nationality: LastNameNationalities;
    }

    interface SuffixOptions {
        full: boolean;
    }

    type PrefixOptions = { gender: "male" | "female" | "all" } & SuffixOptions;

    type NameOptions = FullNameOptions & FirstNameOptions & LastNameOptions & PrefixOptions;

    interface EmailOptions {
        length: number;
        domain: string;
    }

    interface SentenceOptions {
        words: number;
        punctuation: "." | "?" | ";" | "!" | ":" | boolean;
    }

    interface DateOptions {
        string?: boolean | undefined;
        american?: boolean | undefined;
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        min?: Date | undefined;
        max?: Date | undefined;
    }

    type UniqueOptions<T> = { comparator?: ((array: T[], value: T) => boolean) | undefined } & Options;

    interface Month {
        name: string;
        short_name: string;
        numeric: string;
    }

    interface CreditCardType {
        name: string;
        short_name: string;
        prefix: string;
        length: number;
    }

    interface Currency {
        code: string;
        name: string;
    }

    interface CreditCardExpiration {
        month: string;
        year: string;
    }

    interface MixinDescriptor {
        [id: string]: (...args: any[]) => any;
    }

    interface Setter {
        (key: "firstNames", values: string[]): any;
        (key: "lastNames", values: string[]): any;
        (key: "provinces", values: string[]): any;
        (key: "us_states_and_dc", values: string[]): any;
        (key: "territories", values: string[]): any;
        (key: "armed_forces", values: string[]): any;
        (key: "street_suffixes", values: string[]): any;
        (key: "months", values: string[]): any;
        (key: "cc_types", values: string[]): any;
        (key: "currency_types", values: string[]): any;
        <T>(key: string, values: T[]): any;
    }

    interface Name {
        name: string;
        abbreviation: string;
    }

    interface Timezone {
        name: string;
        abbr: string;
        offset: number;
        isdst: boolean;
        text: string;
        utc: string[];
    }
}

declare module "chance" {
    interface ExportedChance extends Chance.ChanceStatic {
        Chance: ExportedChance;
    }
    var Chance: ExportedChance;

    export = Chance;
}
