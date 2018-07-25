// Type definitions for Chance 1.0.16
// Project: http://chancejs.com
// Definitions by: Chris Bowdon <https://github.com/cbowdon>
//                 Brice BERNARD <https://github.com/brikou>
//                 Carlos Sanchez <https://github.com/cafesanu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Chance {
    type Seed = number | string;

    interface Seeded {
        seed: Seed;
    }

    interface ChanceStatic {
        (): Chance;
        (seed: Seed): Chance;
        (generator: () => any): Chance;

        new (): Chance;
        new (seed: Seed): Chance;
        new (generator: () => any): Chance;
    }

    interface Chance extends Seeded {
        // Basics
        bool(opts?: Options): boolean;
        character(opts?: Options): string;
        floating(opts?: Options): number;
        integer(opts?: Options): number;
        letter(opts?: Options): string;
        natural(opts?: Options): number;
        string(opts?: Options): string;

        // Text
        paragraph(opts?: Options): string;
        sentence(opts?: Options): string;
        syllable(opts?: Options): string;
        word(opts?: Options): string;

        // Person
        age(opts?: Options): number;
        gender(): string;
        birthday(): Date;
        birthday(opts?: Options): Date | string;
        cf(opts?: Options): string;
        cpf(): string;
        first(opts?: Options): string;
        last(opts?: Options): string;
        name(opts?: Options): string;
        name_prefix(opts?: Options): string;
        name_suffix(opts?: Options): string;
        prefix(opts?: Options): string;
        ssn(opts?: Options): string;
        suffix(opts?: Options): string;

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
        email(opts?: Options): string;
        fbid(): string;
        google_analytics(): string;
        hashtag(): string;
        ip(): string;
        ipv6(): string;
        klout(): string;
        profession(opts?: Options): string;
        tld(): string;
        twitter(): string;
        url(opts?: Options): string;

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
        longitude(opts?: Options): number;
        phone(opts?: Options): string;
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
        weekday(opts: Options): 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
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
        n<T>(generator: () => T, count: number, opts?: Options): T[];
        normal(opts?: Options): number;
        radio(opts?: Options): string;
        rpg(dice: string): number[];
        rpg(dice: string, opts?: Options): number[] | number;
        tv(opts?: Options): string;
        unique<T>(generator: () => T, count: number, opts?: Options): T[];
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

    interface DateOptions {
        string?: boolean;
        american?: boolean;
        year?: number;
        month?: number;
        day?: number;
        min?: Date;
        max?: Date;
    }

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
        [id: string]: () => any;
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
