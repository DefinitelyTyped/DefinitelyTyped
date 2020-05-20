declare namespace adone {
    namespace fake {
        namespace I {
            interface Card {
                name: string;
                username: string;
                email: string;
                address: FullAddress;
                phone: string;
                website: string;
                company: Company;
                posts: Post[];
                accountHistory: string[];
            }

            interface FullAddress {
                streetA: string;
                streetB: string;
                streetC: string;
                streetD: string;
                city: string;
                state: string;
                county: string;
                zipcode: string;
                geo: Geo;
            }

            interface Geo {
                lat: string;
                lng: string;
            }

            interface Company {
                name: string;
                catchPhrase: string;
                bs: string;
            }

            interface Post {
                words: string;
                sentence: string;
                sentences: string;
                paragraph: string;
            }

            interface ContextualCard {
                name: string;
                username: string;
                email: string;
                dob: Date;
                phone: string;
                address: Address;
                website: string;
                company: Company;
            }

            interface Address {
                street: string;
                suite: string;
                city: string;
                state: string;
                zipcode: string;
                geo: Geo;
            }

            interface UserCard {
                name: string;
                username: string;
                email: string;
                address: Address;
                phone: string;
                website: string;
                company: Company;
            }

            interface Transaction {
                amount: string;
                date: Date;
                business: string;
                name: string;
                type: string;
                account: string;
            }
        }

        namespace address {
            function zipCode(format?: string): string;
            function city(format?: number): string;
            function cityPrefix(): string;
            function citySuffix(): string;
            function streetName(): string;
            function streetAddress(useFullAddress?: boolean): string;
            function streetSuffix(): string;
            function streetPrefix(): string;
            function secondaryAddress(): string;
            function county(): string;
            function country(): string;
            function countryCode(): string;
            function state(useAbbr?: boolean): string;
            function stateAbbr(): string;
            function latitude(): string;
            function longitude(): string;
        }

        namespace commerce {
            function color(): string;
            function department(): string;
            function productName(): string;
            function price(min?: number, max?: number, dec?: number, symbol?: string): string;
            function productAdjective(): string;
            function productMaterial(): string;
            function product(): string;
        }

        namespace company {
            function suffixes(): string[];
            function companyName(format?: number): string;
            function companySuffix(): string;
            function catchPhrase(): string;
            function bs(): string;
            function catchPhraseAdjective(): string;
            function catchPhraseDescriptor(): string;
            function catchPhraseNoun(): string;
            function bsAdjective(): string;
            function bsBuzz(): string;
            function bsNoun(): string;
        }

        namespace database {
            function column(): string;
            function type(): string;
            function collation(): string;
            function engine(): string;
        }

        namespace date {
            function past(years?: number, refDate?: string|Date): Date;
            function future(years?: number, refDate?: string|Date): Date;
            function between(from: string|number|Date, to: string|Date): Date;
            function recent(days?: number): Date;
            function soon(days?: number): Date;
            function month(options?: { abbr?: boolean, context?: boolean }): string;
            function weekday(options?: { abbr?: boolean, context?: boolean }): string;
        }

        function fake(str: string): string;

        namespace finance {
            function account(length?: number): string;
            function accountName(): string;
            function mask(length?: number, parens?: boolean, elipsis?: boolean): string;
            function amount(min?: number, max?: number, dec?: number, symbol?: string): string;
            function transactionType(): string;
            function currencyCode(): string;
            function currencyName(): string;
            function currencySymbol(): string;
            function bitcoinAddress(): string;
            function ethereumAddress(): string;
            function iban(formatted?: boolean): string;
            function bic(): string;
        }

        namespace hacker {
            function abbreviation(): string;
            function adjective(): string;
            function noun(): string;
            function verb(): string;
            function ingverb(): string;
            function phrase(): string;
        }

        namespace helpers {
            function randomize<T>(array: T[]): T;
            function randomize(): string;
            function slugify(string?: string): string;
            function replaceSymbolWithNumber(string?: string, symbol?: string): string;
            function replaceSymbols(string?: string): string;
            function shuffle<T>(o: T[]): T[];
            function shuffle(): string[];
            function mustache(str: string, data: { [key: string]: string|((substring: string, ...args: any[]) => string) }): string;
            function createCard(): I.Card;
            function contextualCard(): I.ContextualCard;
            function userCard(): I.UserCard;
            function createTransaction(): I.Transaction;
        }

        namespace image {
            function image(): string;
            function avatar(): string;
            function imageUrl(width?: number, height?: number, category?: string): string;
            function abstract(width?: number, height?: number): string;
            function animals(width?: number, height?: number): string;
            function business(width?: number, height?: number): string;
            function cats(width?: number, height?: number): string;
            function city(width?: number, height?: number): string;
            function food(width?: number, height?: number): string;
            function nightlife(width?: number, height?: number): string;
            function fashion(width?: number, height?: number): string;
            function people(width?: number, height?: number): string;
            function nature(width?: number, height?: number): string;
            function sports(width?: number, height?: number): string;
            function technics(width?: number, height?: number): string;
            function transport(width?: number, height?: number): string;
            function dataUri(width?: number, height?: number): string;
        }

        namespace internet {
            function avatar(): string;
            function email(firstName?: string, lastName?: string, provider?: string): string;
            function exampleEmail(firstName?: string, lastName?: string): string;
            function userName(firstName?: string, lastName?: string): string;
            function protocol(): string;
            function url(): string;
            function domainName(): string;
            function domainSuffix(): string;
            function domainWord(): string;
            function ip(): string;
            function ipv6(): string;
            function userAgent(): string;
            function color(baseRed255?: number, baseGreen255?: number, baseBlue255?: number): string;
            function mac(): string;
            function password(len?: number, memorable?: boolean, pattern?: string|RegExp, prefix?: string): string;
        }

        namespace lorem {
            function word(): string;
            function words(num?: number): string;
            function sentence(wordCount?: number, range?: number): string;
            function slug(wordCount?: number): string;
            function sentences(sentenceCount?: number): string;
            function paragraph(sentenceCount?: number): string;
            function paragraphs(paragraphCount?: number, separator?: string): string;
            function text(times?: number): string;
            function lines(lineCount?: number): string;
        }

        namespace name {
            function firstName(gender?: number): string;
            function lastName(gender?: number): string;
            function findName(firstName?: string, lastName?: string, gender?: number): string;
            function jobTitle(): string;
            function prefix(): string;
            function suffix(): string;
            function title(): string;
            function jobDescriptor(): string;
            function jobArea(): string;
            function jobType(): string;
        }

        namespace phone {
            function phoneNumber(format?: string): string;
            function phoneNumberFormat(phoneFormatsArrayIndex?: number): string;
            function phoneFormats(): string;
        }

        namespace random {
            function number(max: number): number;
            function number(options?: { min?: number, max?: number, precision?: number }): number;
            function arrayElement(): string;
            function arrayElement<T>(array: T[]): T;
            function objectElement(object?: { [key: string]: any }, field?: "key"): string;
            function objectElement<T>(object?: { [key: string]: T }, field?: any): T;
            function uuid(): string;
            function boolean(): boolean;
            function word(type?: string): string;
            function words(count?: number): string;
            function image(): string;
            function locale(): string;
            function alphaNumeric(count?: number): string;
            function hexaDecimal(count?: number): string;
        }

        namespace system {
            function fileName(ext: string, type: string): string;
            function commonFileName(ext: string, type: string): string;
            function mimeType(): string;
            function commonFileType(): string;
            function commonFileExt(): string;
            function fileType(): string;
            function fileExt(mimeType: string): string;
            function directoryPath(): string;
            function filePath(): string;
            function semver(): string;
        }

        function seed(value: number): void;

        namespace I {
            type Locale =
                | "az"
                | "cz"
                | "de"
                | "de_AT"
                | "de_CH"
                | "el"
                | "en"
                | "en_AU"
                | "en_BORK"
                | "en_CA"
                | "en_GB"
                | "en_IE"
                | "en_IND"
                | "en_US"
                | "en_au_ocker"
                | "es"
                | "es_MX"
                | "fa"
                | "fr"
                | "fr_CA"
                | "ge"
                | "id_ID"
                | "it"
                | "ja"
                | "ko"
                | "lv"
                | "nb_NO"
                | "nep"
                | "nl"
                | "nl_BE"
                | "pl"
                | "pt_BR"
                | "ro"
                | "ru"
                | "sk"
                | "sv"
                | "tr"
                | "uk"
                | "vi"
                | "zh_CN"
                | "zh_TW";
        }

        function getLocale(): I.Locale;

        function setLocale(locale: I.Locale): void;
    }
}
