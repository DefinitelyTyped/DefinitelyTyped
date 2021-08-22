// Type definitions for faker 5.5
// Project: http://marak.com/faker.js/
// Definitions by: Ben Swartz <https://github.com/bensw>
//                 Bas Pennings <https://github.com/basp>
//                 Yuki Kokubun <https://github.com/Kuniwak>
//                 Matt Bishop <https://github.com/mattbishop>
//                 Leonardo Testa <https://github.com/testica>
//                 Sebastian Pettersson <https://github.com/TastefulElk>
//                 Daniel Montesinos <https://github.com/damonpam>
//                 Shinya Ohyanagi <https://github.com/heavenshell>
//                 Piotr Kuczynski <https://github.com/pkuczynski>
//                 Jérémie Parker <https://github.com/p-j>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const fakerStatic: Faker.FakerStatic;

declare namespace Faker {
    interface FakerStatic {
        locale: string;
        setLocale(locale: string): void;

        address: {
            zipCodeByState(state: string): string;
            zipCode(format?: string): string;
            city(format?: string): string;
            cityName(): string;
            cityPrefix(): string;
            citySuffix(): string;
            streetName(): string;
            streetAddress(useFullAddress?: boolean): string;
            streetSuffix(): string;
            streetPrefix(): string;
            secondaryAddress(): string;
            county(): string;
            country(): string;
            countryCode(alphaCode?: string): string;
            state(useAbbr?: boolean): string;
            stateAbbr(): string;
            latitude(max?: number, min?: number, precision?: number): string;
            longitude(max?: number, min?: number, precision?: number): string;
            direction(useAbbr?: boolean): string;
            cardinalDirection(useAbbr?: boolean): string;
            ordinalDirection(useAbbr?: boolean): string;
            nearbyGPSCoordinate(
                coordinate?: ReadonlyArray<number | string>,
                radius?: number,
                isMetric?: boolean,
            ): string[];
            timeZone(): string;
        };

        commerce: {
            color(): string;
            department(): string;
            productName(): string;
            price(min?: number, max?: number, dec?: number, symbol?: string): string;
            productAdjective(): string;
            productMaterial(): string;
            product(): string;
            productDescription(): string;
        };

        company: {
            suffixes(): string[];
            companyName(format?: number): string;
            companySuffix(): string;
            catchPhrase(): string;
            bs(): string;
            catchPhraseAdjective(): string;
            catchPhraseDescriptor(): string;
            catchPhraseNoun(): string;
            bsAdjective(): string;
            bsBuzz(): string;
            bsNoun(): string;
        };

        database: {
            column(): string;
            type(): string;
            collation(): string;
            engine(): string;
        };

        datatype: {
            number(max?: number): number;
            number(options?: { min?: number | undefined; max?: number | undefined; precision?: number | undefined }): number;
            float(precision?: number): number;
            float(options?: { min?: number | undefined; max?: number | undefined; precision?: number | undefined }): number;
            datetime(max?: number): Date;
            datetime(options?: { min?: number | undefined; max?: number | undefined }): Date;
            string(length?: number): string;
            uuid(): string;
            boolean(): boolean;
            hexaDecimal(count?: number): string;
            json(): string;
            array(length?: number): Array<string | number>;
        };

        date: {
            past(years?: number, refDate?: string | Date): Date;
            future(years?: number, refDate?: string | Date): Date;
            between(from: string | number | Date, to: string | Date): Date;
            recent(days?: number, refDate?: string | Date): Date;
            soon(days?: number, refDate?: string | Date): Date;
            month(options?: { abbr?: boolean | undefined; context?: boolean | undefined }): string;
            weekday(options?: { abbr?: boolean | undefined; context?: boolean | undefined }): string;
        };

        fake(str: string): string;

        finance: {
            account(length?: number): string;
            accountName(): string;
            routingNumber(): string;
            mask(length?: number, parens?: boolean, elipsis?: boolean): string;
            amount(min?: number, max?: number, dec?: number, symbol?: string): string;
            transactionType(): string;
            currencyCode(): string;
            currencyName(): string;
            currencySymbol(): string;
            bitcoinAddress(): string;
            iban(formatted?: boolean, countryCode?: string): string;
            bic(): string;
            litecoinAddress(): string;
            creditCardNumber(provider?: string): string;
            creditCardCVV(): string;
            ethereumAddress(): string;
            transactionDescription(): string;
        };

        git: {
            branch(): string;
            commitEntry(options?: { merge: boolean }): string;
            commitMessage(): string;
            commitSha(): string;
            shortSha(): string;
        };

        hacker: {
            abbreviation(): string;
            adjective(): string;
            noun(): string;
            verb(): string;
            ingverb(): string;
            phrase(): string;
        };

        helpers: {
            randomize<T>(array: T[]): T;
            randomize(): string;
            slugify(string?: string): string;
            replaceSymbolWithNumber(string?: string, symbol?: string): string;
            replaceSymbols(string?: string): string;
            replaceCreditCardSymbols(string?: string, symbol?: string): string;
            repeatString(string: string, num?: number): string;
            regexpStyleStringParse(string: string): string;
            shuffle<T>(o: T[]): T[];
            shuffle(): string[];
            mustache(
                str: string,
                data: { [key: string]: string | ((substring: string, ...args: any[]) => string) },
            ): string;
            createCard(): Card;
            contextualCard(): ContextualCard;
            userCard(): UserCard;
            createTransaction(): Transaction;
        };

        image: {
            image(): string;
            avatar(): string;
            imageUrl(width?: number, height?: number, category?: string, randomize?: boolean, https?: boolean): string;
            abstract(width?: number, height?: number): string;
            animals(width?: number, height?: number): string;
            business(width?: number, height?: number): string;
            cats(width?: number, height?: number): string;
            city(width?: number, height?: number): string;
            food(width?: number, height?: number): string;
            nightlife(width?: number, height?: number): string;
            fashion(width?: number, height?: number): string;
            people(width?: number, height?: number): string;
            nature(width?: number, height?: number): string;
            sports(width?: number, height?: number): string;
            technics(width?: number, height?: number): string;
            transport(width?: number, height?: number): string;
            dataUri(width?: number, height?: number, color?: string): string;
        };

        internet: {
            avatar(): string;
            email(firstName?: string, lastName?: string, provider?: string): string;
            exampleEmail(firstName?: string, lastName?: string): string;
            userName(firstName?: string, lastName?: string): string;
            protocol(): string;
            url(): string;
            domainName(): string;
            domainSuffix(): string;
            domainWord(): string;
            ip(): string;
            ipv6(): string;
            port(): number;
            userAgent(): string;
            color(baseRed255?: number, baseGreen255?: number, baseBlue255?: number): string;
            mac(sep?: string): string;
            password(len?: number, memorable?: boolean, pattern?: string | RegExp, prefix?: string): string;
        };

        lorem: {
            word(length?: number): string;
            words(num?: number): string;
            sentence(wordCount?: number, range?: number): string;
            slug(wordCount?: number): string;
            sentences(sentenceCount?: number): string;
            paragraph(sentenceCount?: number): string;
            paragraphs(paragraphCount?: number, separator?: string): string;
            text(times?: number): string;
            lines(lineCount?: number): string;
        };

        name: {
            firstName(gender?: number): string;
            lastName(gender?: number): string;
            middleName(gender?: number): string;
            findName(firstName?: string, lastName?: string, gender?: number): string;
            jobTitle(): string;
            gender(): string;
            prefix(): string;
            suffix(): string;
            title(): string;
            jobDescriptor(): string;
            jobArea(): string;
            jobType(): string;
        };

        music: {
            genre(): string;
        };

        phone: {
            phoneNumber(format?: string): string;
            phoneNumberFormat(phoneFormatsArrayIndex?: number): string;
            phoneFormats(): string;
        };

        random: {
            /** @deprecated faker.random.number is now located in faker.datatype.number */
            number(max?: number): number;
            /** @deprecated faker.random.number is now located in faker.datatype.number */
            number(options?: { min?: number | undefined; max?: number | undefined; precision?: number | undefined }): number;
            /** @deprecated faker.random.float is now located in faker.datatype.float */
            float(max?: number): number;
            /** @deprecated faker.random.float is now located in faker.datatype.float */
            float(options?: { min?: number | undefined; max?: number | undefined; precision?: number | undefined }): number;
            arrayElement(): string;
            arrayElement<T>(array: T[]): T;
            arrayElement<T>(array: ReadonlyArray<T>): T;
            arrayElements(count?: number): string[];
            arrayElements<T>(array: T[], count?: number): T[];
            arrayElements<T>(array: ReadonlyArray<T>, count?: number): ReadonlyArray<T>;
            objectElement(object?: { [key: string]: any }, field?: 'key'): string;
            objectElement<T>(object?: { [key: string]: T }, field?: any): T;
            /** @deprecated faker.random.uuid is now located in faker.datatype.uuid */
            uuid(): string;
            /** @deprecated faker.random.boolean is now located in faker.datatype.boolean */
            boolean(): boolean;
            word(type?: string): string;
            words(count?: number): string;
            image(): string;
            locale(): string;
            alpha(options?: { count?: number | undefined; upcase?: boolean | undefined }): string;
            alphaNumeric(count?: number): string;
            /** @deprecated faker.random.hexaDecimal is now located in faker.datatype.hexaDecimal */
            hexaDecimal(count?: number): string;
        };

        system: {
            fileName(): string;
            commonFileName(ext?: string): string;
            mimeType(): string;
            commonFileType(): string;
            commonFileExt(): string;
            fileType(): string;
            fileExt(mimeType?: string): string;
            directoryPath(): string;
            filePath(): string;
            semver(): string;
        };

        time: {
            recent(): number;
            recent(outputType: 'unix'): number;
            recent(outputType: 'abbr' | 'wide'): string;
        };

        seed(value: number): void;
        seedValue?: number | undefined;

        vehicle: {
            vehicle(): string;
            manufacturer(): string;
            model(): string;
            type(): string;
            fuel(): string;
            vin(): string;
            color(): string;
            vrm(): string;
            bicycle(): string;
        };

        unique<T extends (...args: any) => any>(
            method: T,
            args?: Parameters<T>,
            opts?: { maxTime?: number | undefined; maxRetries?: number | undefined },
        ): ReturnType<T>;
    }

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
        avatar: string;
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

declare module 'faker' {
    export = fakerStatic;
}

declare module 'faker/locale/az' {
    export = fakerStatic;
}

declare module 'faker/locale/ar' {
    export = fakerStatic;
}

declare module 'faker/locale/cz' {
    export = fakerStatic;
}

declare module 'faker/locale/de' {
    export = fakerStatic;
}

declare module 'faker/locale/de_AT' {
    export = fakerStatic;
}

declare module 'faker/locale/de_CH' {
    export = fakerStatic;
}

declare module 'faker/locale/en' {
    export = fakerStatic;
}

declare module 'faker/locale/en_AU' {
    export = fakerStatic;
}

declare module 'faker/locale/en_AU_ocker' {
    export = fakerStatic;
}

declare module 'faker/locale/en_BORK' {
    export = fakerStatic;
}

declare module 'faker/locale/en_CA' {
    export = fakerStatic;
}

declare module 'faker/locale/en_GB' {
    export = fakerStatic;
}

declare module 'faker/locale/en_IE' {
    export = fakerStatic;
}

declare module 'faker/locale/en_IND' {
    export = fakerStatic;
}

declare module 'faker/locale/en_US' {
    export = fakerStatic;
}

declare module 'faker/locale/en_ZA' {
    export = fakerStatic;
}

declare module 'faker/locale/es' {
    export = fakerStatic;
}

declare module 'faker/locale/es_MX' {
    export = fakerStatic;
}

declare module 'faker/locale/fa' {
    export = fakerStatic;
}

declare module 'faker/locale/fi' {
    export = fakerStatic;
}

declare module 'faker/locale/fr' {
    export = fakerStatic;
}

declare module 'faker/locale/fr_CA' {
    export = fakerStatic;
}

declare module 'faker/locale/fr_CH' {
    export = fakerStatic;
}

declare module 'faker/locale/ge' {
    export = fakerStatic;
}

declare module 'faker/locale/id_ID' {
    export = fakerStatic;
}

declare module 'faker/locale/it' {
    export = fakerStatic;
}

declare module 'faker/locale/ja' {
    export = fakerStatic;
}

declare module 'faker/locale/ko' {
    export = fakerStatic;
}

declare module 'faker/locale/nb_NO' {
    export = fakerStatic;
}

declare module 'faker/locale/nep' {
    export = fakerStatic;
}

declare module 'faker/locale/nl' {
    export = fakerStatic;
}

declare module 'faker/locale/nl_BE' {
    export = fakerStatic;
}

declare module 'faker/locale/pl' {
    export = fakerStatic;
}

declare module 'faker/locale/pt_BR' {
    export = fakerStatic;
}

declare module 'faker/locale/pt_PT' {
    export = fakerStatic;
}

declare module 'faker/locale/ro' {
    export = fakerStatic;
}

declare module 'faker/locale/ru' {
    export = fakerStatic;
}

declare module 'faker/locale/sk' {
    export = fakerStatic;
}

declare module 'faker/locale/sv' {
    export = fakerStatic;
}

declare module 'faker/locale/tr' {
    export = fakerStatic;
}

declare module 'faker/locale/uk' {
    export = fakerStatic;
}

declare module 'faker/locale/vi' {
    export = fakerStatic;
}

declare module 'faker/locale/zh_CN' {
    export = fakerStatic;
}

declare module 'faker/locale/zh_TW' {
    export = fakerStatic;
}
