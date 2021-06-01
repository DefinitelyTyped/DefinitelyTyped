import { Card, ContextualCard, Transaction, UserCard } from "..";

declare class Faker {
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
        nearbyGPSCoordinate(coordinate?: ReadonlyArray<number | string>, radius?: number, isMetric?: boolean): string[];
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
        // tslint:disable-next-line:unified-signatures
        number(options?: { min?: number; max?: number; precision?: number }): number;
        float(max?: number): number;
        // tslint:disable-next-line:unified-signatures
        float(options?: { min?: number; max?: number; precision?: number }): number;
        datetime(max?: number): Date;
        // tslint:disable-next-line:unified-signatures
        datetime(options?: { min?: number; max?: number }): Date;
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
        month(options?: { abbr?: boolean; context?: boolean }): string;
        weekday(options?: { abbr?: boolean; context?: boolean }): string;
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
        iban(formatted?: boolean): string;
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
        // tslint:disable-next-line:unified-signatures
        number(options?: { min?: number; max?: number; precision?: number }): number;
        /** @deprecated faker.random.float is now located in faker.datatype.float */
        float(max?: number): number;
        /** @deprecated faker.random.float is now located in faker.datatype.float */
        // tslint:disable-next-line:unified-signatures
        float(options?: { min?: number; max?: number; precision?: number }): number;
        arrayElement(): string;
        arrayElement<T>(array: T[] | ReadonlyArray<T>): T;
        arrayElements(count?: number): string[];
        arrayElements<T>(array: T[], count?: number): T[];
        arrayElements<T>(array: ReadonlyArray<T>, count?: number): ReadonlyArray<T>;
        objectElement(object?: { [key: string]: any }, field?: "key"): string;
        objectElement<T>(object?: { [key: string]: T }, field?: any): T;
        /** @deprecated faker.random.uuid is now located in faker.datatype.uuid */
        uuid(): string;
        /** @deprecated faker.random.boolean is now located in faker.datatype.boolean */
        boolean(): boolean;
        word(type?: string): string;
        words(count?: number): string;
        image(): string;
        locale(): string;
        alpha(options?: { count?: number; upcase?: boolean }): string;
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
        recent(outputType?: "unix"): number;
        recent(outputType: "abbr" | "wide"): string;
    };

    seed(value: number): void;
    seedValue?: number;

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
        opts?: { maxTime?: number; maxRetries?: number },
    ): ReturnType<T>;
}

export = Faker;
