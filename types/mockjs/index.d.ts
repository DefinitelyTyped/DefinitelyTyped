// Type definitions for mockjs 1.0
// Project: http://mockjs.com/
// Definitions by: lavyun <httpS://github.com/lavyun>
//                 ChenKS12138 <https://github.com/ChenKS12138>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace mockjs {
    type N = number;
    type S = string;
    type B = boolean;

    // Interface for global namespace 'Mockjs'
    interface Mockjs {
        mock: MockjsMock;
        setup: MockjsSetup;
        Random: MockjsRandom;
        valid: MockjsValid;
        toJSONSchema: MockjsToJSONSchema;
        version: number;
    }

    // Mockjs.mock()
    // see https://github.com/nuysoft/Mock/wiki/Mock.mock()
    interface MockjsMock {
        (rurl: S | RegExp, rtype: S, template: any): Mockjs;

        (rurl: S | RegExp, template: any): Mockjs;

        (template: any): any;
    }

    interface MockjsSetupSettings {
        timeout?: number | S;
    }

    // Mockjs.setup()
    // see https://github.com/nuysoft/Mock/wiki/Mock.setup()
    type MockjsSetup = (settings: MockjsSetupSettings) => void;

    // Mockjs.Random - Basic
    // see https://github.com/nuysoft/Mock/wiki/Basic
    interface MockjsRandomBasic {
        // Random.boolean
        boolean(min: N, max: N, current: B): B;
        boolean(): B;

        // Random.natural
        natural(min?: N, max?: N): N;

        // Random.integer
        integer(min?: N, max?: N): N;

        // Random.float
        float(min?: N, max?: N, dmin?: N, dmax?: N): N;

        // Random.character
        character(pool: 'lower' | 'upper' | 'number' | 'symbol'): S;
        character(pool?: S): S;

        // Random.string
        string(pool?: S | N, min?: N, max?: N): S;

        // Random.range
        range(start?: N, stop?: N, step?: N): N;
    }

    // Mockjs.Random - Date
    // see https://github.com/nuysoft/Mock/wiki/Date
    type RandomDateUtilString = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second' | 'week';
    interface MockjsRandomDate {
        // Random.date
        date(format?: S): S;

        // Random.time
        time(format?: S): S;

        // Random.datetime
        datetime(format?: S): S;

        // Random.now
        now(util: RandomDateUtilString, format?: S): S;
        mow(format?: S): S;
    }

    // Mockjs.Random - Image
    // see https://github.com/nuysoft/Mock/wiki/Image
    type RandomImageFormatString = 'png' | 'gif' | 'jpg';
    interface MockjsRandomImage {
        // Random.image
        image(size?: S, background?: S, foreground?: S, format?: RandomImageFormatString | S, text?: S): S;

        // Random.dataImage
        dataImage(size?: S, text?: S): S;
    }

    // Mockjs.Random - Color
    // see https://github.com/nuysoft/Mock/wiki/Color
    interface MockjsRandomColor {
        // Random.color
        color(): S;

        // Random.hex
        hex(): S;

        // Random.rgb
        rgb(): S;

        // Random.rgba
        rgba(): S;

        // Random.hsl
        hsl(): S;
    }

    // Mockjs.Random - Text
    // see https://github.com/nuysoft/Mock/wiki/Text
    interface MockjsRandomText {
        // Random.paragraph
        paragraph(min?: N, max?: N): S;

        // Random.cparagraph
        cparagraph(min?: N, max?: N): S;

        // Random.sentence
        sentence(min?: N, max?: N): S;

        // Random.csentence
        csentence(min?: N, max?: N): S;

        // Random.word
        word(min?: N, max?: N): S;

        // Random.cword
        cword(pool?: S | N, min?: N, max?: N): S;

        // Random.title
        title(min?: N, max?: N): S;

        // Random.ctitle
        ctitle(min?: N, max?: N): S;
    }

    // Mockjs.Random - Name
    // see https://github.com/nuysoft/Mock/wiki/Name
    interface MockjsRandomName {
        // Random.first
        first(): S;

        // Random.last
        last(): S;

        // Random.name
        name(middle?: B): S;

        // Random.cfirst
        cfirst(): S;

        // Random.clast
        clast(): S;

        // Random.cname
        cname(): S;
    }

    // Mockjs.Random - Web
    // see https://github.com/nuysoft/Mock/wiki/Web
    type RandomWebProtocal =
        | 'http'
        | 'ftp'
        | 'gopher'
        | 'mailto'
        | 'mid'
        | 'cid'
        | 'news'
        | 'nntp'
        | 'prospero'
        | 'telnet'
        | 'rlogin'
        | 'tn3270'
        | 'wais';
    interface MockjsRandomWeb {
        // Random.url
        url(protocol?: S, host?: S): S;

        // Random.protocol
        protocal(): RandomWebProtocal;

        // Random.domain
        domain(): S;

        // Random.tld
        dtl(): S;

        // Random.email
        email(domain?: S): S;

        // Random.ip
        ip(): S;
    }

    // Mockjs.Random - Address
    // see https://github.com/nuysoft/Mock/wiki/Address
    interface MockjsRandomAddress {
        // Random.region
        region(): S;

        // Random.province
        province(): S;

        // Random.city
        city(prefix?: B): S;

        // Random.county
        county(prefix?: B): S;

        // Random.zip
        zip(prefix?: B): S;
    }

    // Mockjs.Random - Helper
    // see https://github.com/nuysoft/Mock/wiki/Helper
    interface MockjsRandomHelper {
        // Random.capitalize
        capitalize(word: S): S;

        // Random.upper
        upper(str: S): S;

        // Random.lower
        lower(str: S): S;

        // Random.pick
        pick(arr: any[]): any;

        // Random.shuffle
        shuffle(arr: any[]): any[];
    }

    // Mockjs.Random - Miscellaneous
    // see https://github.com/nuysoft/Mock/wiki/Miscellaneous
    interface MockjsRandomMiscellaneous {
        // Random.guid
        guid(): S;

        // Random.id
        id(): S;

        // Random.increment
        increment(step?: N): N;
    }

    interface MockjsRandomExtendOption {
        [randomType: string]: (...args: any[]) => any;
    }

    // Mockjs.Random
    // see https://github.com/nuysoft/Mock/wiki/Mock.Random
    interface MockjsRandom
        extends MockjsRandomBasic,
            MockjsRandomDate,
            MockjsRandomImage,
            MockjsRandomColor,
            MockjsRandomAddress,
            MockjsRandomHelper,
            MockjsRandomMiscellaneous,
            MockjsRandomName,
            MockjsRandomText,
            MockjsRandomWeb,
            MockjsRandomExtendOption {
        // Random.extend
        extend(extendOption: MockjsRandomExtendOption): MockjsRandom;
    }

    interface MockjsValidRsItem {
        action: S;
        actual: S;
        expected: S;
        message: S;
        path: S[];
        type: S;
    }

    // Mockjs.valid()
    // see https://github.com/nuysoft/Mock/wiki/Mock.valid()
    type MockjsValid = (template: any, data: any) => MockjsValidRsItem[];

    interface MockjsToJSONSchemaRs {
        name: S | undefined;
        template: any;
        type: S;
        rule: object;
        path: S[];
        properties?: MockjsToJSONSchemaRs[];
        items?: MockjsToJSONSchemaRs[];
    }

    // Mockjs.toJSONSchema()
    // see https://github.com/nuysoft/Mock/wiki/Mock.toJSONSchema()
    type MockjsToJSONSchema = (template: any) => MockjsToJSONSchemaRs;

    let mock: MockjsMock;
    let setup: MockjsSetup;
    let Random: MockjsRandom;
    let valid: MockjsValid;
    let toJSONSchema: MockjsToJSONSchema;
    let version: number;
}

export = mockjs;
