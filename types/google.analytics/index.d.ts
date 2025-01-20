declare class Tracker {
    _trackPageview(): void;
    _getName(): string;
    _getAccount(): string;
    _getVersion(): string;
    _getVisitorCustomVar(index: number): string;
    _setAccount(): string;
    _setCustomVar(index: number, name: string, value: string, opt_scope?: number): boolean;
    _setSampleRate(newRate: string): void;
    _setSessionCookieTimeout(cookieTimeoutMillis: number): void;
    _setSiteSpeedSampleRate(sampleRate: number): void;
    _setVisitorCookieTimeout(milliseconds: number): void;
    _trackPageLoadTime(): void;
}

interface GoogleAnalyticsCode {
    push(commandArray: Array<string | boolean | number>): void;
    push(func: Function): void;
}

interface GoogleAnalyticsTracker {
    _getTracker(account: string): Tracker;
    _createTracker(opt_account: string, opt_name?: string): Tracker;
    _getTrackerByName(opt_name?: string): Tracker;
    _anonymizeIp(): void;
}

interface GoogleAnalytics {
    type: string;
    src: string;
    async: boolean;
}

declare namespace UniversalAnalytics {
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/method-reference

    // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#hitType
    type HitType = "pageview" | "screenview" | "event" | "transaction" | "item" | "social" | "exception" | "timing";

    // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference

    interface FieldsObject {
        affiliation?: string | undefined;
        allowAnchor?: boolean | undefined;
        allowLinker?: boolean | undefined;
        alwaysSendReferrer?: boolean | undefined;
        anonymizeIp?: boolean | undefined;
        appId?: string | undefined;
        appInstallerId?: string | undefined;
        appName?: string | undefined;
        appVersion?: string | undefined;
        brand?: string | undefined;
        campaignId?: string | undefined;
        campaignContent?: string | undefined;
        campaignKeyword?: string | undefined;
        campaignMedium?: string | undefined;
        campaignName?: string | undefined;
        campaignSource?: string | undefined;
        category?: string | undefined;
        clientId?: string | undefined;
        contentGroup1?: string | undefined;
        contentGroup2?: string | undefined;
        contentGroup3?: string | undefined;
        contentGroup4?: string | undefined;
        contentGroup5?: string | undefined;
        contentGroup6?: string | undefined;
        contentGroup7?: string | undefined;
        contentGroup8?: string | undefined;
        contentGroup9?: string | undefined;
        contentGroup10?: string | undefined;
        cookieName?: string | undefined;
        cookieDomain?: string | undefined;
        cookieExpires?: number | undefined;
        cookieFlags?: string | undefined;
        cookiePath?: string | undefined;
        cookieUpdate?: boolean | undefined;
        coupon?: string | undefined;
        creative?: string | undefined;
        currencyCode?: string | undefined;
        dataSource?: string | undefined;
        dimension1?: string | undefined;
        dimension2?: string | undefined;
        dimension3?: string | undefined;
        dimension4?: string | undefined;
        dimension5?: string | undefined;
        dimension6?: string | undefined;
        dimension7?: string | undefined;
        dimension8?: string | undefined;
        dimension9?: string | undefined;
        dimension10?: string | undefined;
        dimension11?: string | undefined;
        dimension12?: string | undefined;
        dimension13?: string | undefined;
        dimension14?: string | undefined;
        dimension15?: string | undefined;
        dimension16?: string | undefined;
        dimension17?: string | undefined;
        dimension18?: string | undefined;
        dimension19?: string | undefined;
        dimension20?: string | undefined;
        dimension21?: string | undefined;
        dimension22?: string | undefined;
        dimension23?: string | undefined;
        dimension24?: string | undefined;
        dimension25?: string | undefined;
        dimension26?: string | undefined;
        dimension27?: string | undefined;
        dimension28?: string | undefined;
        dimension29?: string | undefined;
        dimension30?: string | undefined;
        dimension31?: string | undefined;
        dimension32?: string | undefined;
        dimension33?: string | undefined;
        dimension34?: string | undefined;
        dimension35?: string | undefined;
        dimension36?: string | undefined;
        dimension37?: string | undefined;
        dimension38?: string | undefined;
        dimension39?: string | undefined;
        dimension40?: string | undefined;
        dimension41?: string | undefined;
        dimension42?: string | undefined;
        dimension43?: string | undefined;
        dimension44?: string | undefined;
        dimension45?: string | undefined;
        dimension46?: string | undefined;
        dimension47?: string | undefined;
        dimension48?: string | undefined;
        dimension49?: string | undefined;
        dimension50?: string | undefined;
        dimension51?: string | undefined;
        dimension52?: string | undefined;
        dimension53?: string | undefined;
        dimension54?: string | undefined;
        dimension55?: string | undefined;
        dimension56?: string | undefined;
        dimension57?: string | undefined;
        dimension58?: string | undefined;
        dimension59?: string | undefined;
        dimension60?: string | undefined;
        dimension61?: string | undefined;
        dimension62?: string | undefined;
        dimension63?: string | undefined;
        dimension64?: string | undefined;
        dimension65?: string | undefined;
        dimension66?: string | undefined;
        dimension67?: string | undefined;
        dimension68?: string | undefined;
        dimension69?: string | undefined;
        dimension70?: string | undefined;
        dimension71?: string | undefined;
        dimension72?: string | undefined;
        dimension73?: string | undefined;
        dimension74?: string | undefined;
        dimension75?: string | undefined;
        dimension76?: string | undefined;
        dimension77?: string | undefined;
        dimension78?: string | undefined;
        dimension79?: string | undefined;
        dimension80?: string | undefined;
        dimension81?: string | undefined;
        dimension82?: string | undefined;
        dimension83?: string | undefined;
        dimension84?: string | undefined;
        dimension85?: string | undefined;
        dimension86?: string | undefined;
        dimension87?: string | undefined;
        dimension88?: string | undefined;
        dimension89?: string | undefined;
        dimension90?: string | undefined;
        dimension91?: string | undefined;
        dimension92?: string | undefined;
        dimension93?: string | undefined;
        dimension94?: string | undefined;
        dimension95?: string | undefined;
        dimension96?: string | undefined;
        dimension97?: string | undefined;
        dimension98?: string | undefined;
        dimension99?: string | undefined;
        dimension100?: string | undefined;
        dimension101?: string | undefined;
        dimension102?: string | undefined;
        dimension103?: string | undefined;
        dimension104?: string | undefined;
        dimension105?: string | undefined;
        dimension106?: string | undefined;
        dimension107?: string | undefined;
        dimension108?: string | undefined;
        dimension109?: string | undefined;
        dimension110?: string | undefined;
        dimension111?: string | undefined;
        dimension112?: string | undefined;
        dimension113?: string | undefined;
        dimension114?: string | undefined;
        dimension115?: string | undefined;
        dimension116?: string | undefined;
        dimension117?: string | undefined;
        dimension118?: string | undefined;
        dimension119?: string | undefined;
        dimension120?: string | undefined;
        dimension121?: string | undefined;
        dimension122?: string | undefined;
        dimension123?: string | undefined;
        dimension124?: string | undefined;
        dimension125?: string | undefined;
        dimension126?: string | undefined;
        dimension127?: string | undefined;
        dimension128?: string | undefined;
        dimension129?: string | undefined;
        dimension130?: string | undefined;
        dimension131?: string | undefined;
        dimension132?: string | undefined;
        dimension133?: string | undefined;
        dimension134?: string | undefined;
        dimension135?: string | undefined;
        dimension136?: string | undefined;
        dimension137?: string | undefined;
        dimension138?: string | undefined;
        dimension139?: string | undefined;
        dimension140?: string | undefined;
        dimension141?: string | undefined;
        dimension142?: string | undefined;
        dimension143?: string | undefined;
        dimension144?: string | undefined;
        dimension145?: string | undefined;
        dimension146?: string | undefined;
        dimension147?: string | undefined;
        dimension148?: string | undefined;
        dimension149?: string | undefined;
        dimension150?: string | undefined;
        dimension151?: string | undefined;
        dimension152?: string | undefined;
        dimension153?: string | undefined;
        dimension154?: string | undefined;
        dimension155?: string | undefined;
        dimension156?: string | undefined;
        dimension157?: string | undefined;
        dimension158?: string | undefined;
        dimension159?: string | undefined;
        dimension160?: string | undefined;
        dimension161?: string | undefined;
        dimension162?: string | undefined;
        dimension163?: string | undefined;
        dimension164?: string | undefined;
        dimension165?: string | undefined;
        dimension166?: string | undefined;
        dimension167?: string | undefined;
        dimension168?: string | undefined;
        dimension169?: string | undefined;
        dimension170?: string | undefined;
        dimension171?: string | undefined;
        dimension172?: string | undefined;
        dimension173?: string | undefined;
        dimension174?: string | undefined;
        dimension175?: string | undefined;
        dimension176?: string | undefined;
        dimension177?: string | undefined;
        dimension178?: string | undefined;
        dimension179?: string | undefined;
        dimension180?: string | undefined;
        dimension181?: string | undefined;
        dimension182?: string | undefined;
        dimension183?: string | undefined;
        dimension184?: string | undefined;
        dimension185?: string | undefined;
        dimension186?: string | undefined;
        dimension187?: string | undefined;
        dimension188?: string | undefined;
        dimension189?: string | undefined;
        dimension190?: string | undefined;
        dimension191?: string | undefined;
        dimension192?: string | undefined;
        dimension193?: string | undefined;
        dimension194?: string | undefined;
        dimension195?: string | undefined;
        dimension196?: string | undefined;
        dimension197?: string | undefined;
        dimension198?: string | undefined;
        dimension199?: string | undefined;
        dimension200?: string | undefined;
        encoding?: string | undefined;
        eventAction?: string | undefined;
        eventCategory?: string | undefined;
        eventLabel?: string | undefined;
        eventValue?: number | undefined;
        exDescription?: string | undefined;
        exFatal?: boolean | undefined;
        expId?: string | undefined;
        expVar?: string | undefined;
        flashVersion?: string | undefined;
        forceSSL?: boolean | undefined;
        hitCallback?(): void;
        hitType?: HitType | undefined;
        hostname?: string | undefined;
        id?: string | undefined;
        javaEnabled?: boolean | undefined;
        language?: string | undefined;
        legacyCookieDomain?: string | undefined;
        legacyHistoryImport?: boolean | undefined;
        linkid?: string | undefined;
        list?: string | undefined;
        location?: string | undefined;
        metric1?: string | number | undefined;
        metric2?: string | number | undefined;
        metric3?: string | number | undefined;
        metric4?: string | number | undefined;
        metric5?: string | number | undefined;
        metric6?: string | number | undefined;
        metric7?: string | number | undefined;
        metric8?: string | number | undefined;
        metric9?: string | number | undefined;
        metric10?: string | number | undefined;
        metric11?: string | number | undefined;
        metric12?: string | number | undefined;
        metric13?: string | number | undefined;
        metric14?: string | number | undefined;
        metric15?: string | number | undefined;
        metric16?: string | number | undefined;
        metric17?: string | number | undefined;
        metric18?: string | number | undefined;
        metric19?: string | number | undefined;
        metric20?: string | number | undefined;
        metric21?: string | number | undefined;
        metric22?: string | number | undefined;
        metric23?: string | number | undefined;
        metric24?: string | number | undefined;
        metric25?: string | number | undefined;
        metric26?: string | number | undefined;
        metric27?: string | number | undefined;
        metric28?: string | number | undefined;
        metric29?: string | number | undefined;
        metric30?: string | number | undefined;
        metric31?: string | number | undefined;
        metric32?: string | number | undefined;
        metric33?: string | number | undefined;
        metric34?: string | number | undefined;
        metric35?: string | number | undefined;
        metric36?: string | number | undefined;
        metric37?: string | number | undefined;
        metric38?: string | number | undefined;
        metric39?: string | number | undefined;
        metric40?: string | number | undefined;
        metric41?: string | number | undefined;
        metric42?: string | number | undefined;
        metric43?: string | number | undefined;
        metric44?: string | number | undefined;
        metric45?: string | number | undefined;
        metric46?: string | number | undefined;
        metric47?: string | number | undefined;
        metric48?: string | number | undefined;
        metric49?: string | number | undefined;
        metric50?: string | number | undefined;
        metric51?: string | number | undefined;
        metric52?: string | number | undefined;
        metric53?: string | number | undefined;
        metric54?: string | number | undefined;
        metric55?: string | number | undefined;
        metric56?: string | number | undefined;
        metric57?: string | number | undefined;
        metric58?: string | number | undefined;
        metric59?: string | number | undefined;
        metric60?: string | number | undefined;
        metric61?: string | number | undefined;
        metric62?: string | number | undefined;
        metric63?: string | number | undefined;
        metric64?: string | number | undefined;
        metric65?: string | number | undefined;
        metric66?: string | number | undefined;
        metric67?: string | number | undefined;
        metric68?: string | number | undefined;
        metric69?: string | number | undefined;
        metric70?: string | number | undefined;
        metric71?: string | number | undefined;
        metric72?: string | number | undefined;
        metric73?: string | number | undefined;
        metric74?: string | number | undefined;
        metric75?: string | number | undefined;
        metric76?: string | number | undefined;
        metric77?: string | number | undefined;
        metric78?: string | number | undefined;
        metric79?: string | number | undefined;
        metric80?: string | number | undefined;
        metric81?: string | number | undefined;
        metric82?: string | number | undefined;
        metric83?: string | number | undefined;
        metric84?: string | number | undefined;
        metric85?: string | number | undefined;
        metric86?: string | number | undefined;
        metric87?: string | number | undefined;
        metric88?: string | number | undefined;
        metric89?: string | number | undefined;
        metric90?: string | number | undefined;
        metric91?: string | number | undefined;
        metric92?: string | number | undefined;
        metric93?: string | number | undefined;
        metric94?: string | number | undefined;
        metric95?: string | number | undefined;
        metric96?: string | number | undefined;
        metric97?: string | number | undefined;
        metric98?: string | number | undefined;
        metric99?: string | number | undefined;
        metric100?: string | number | undefined;
        metric101?: string | number | undefined;
        metric102?: string | number | undefined;
        metric103?: string | number | undefined;
        metric104?: string | number | undefined;
        metric105?: string | number | undefined;
        metric106?: string | number | undefined;
        metric107?: string | number | undefined;
        metric108?: string | number | undefined;
        metric109?: string | number | undefined;
        metric110?: string | number | undefined;
        metric111?: string | number | undefined;
        metric112?: string | number | undefined;
        metric113?: string | number | undefined;
        metric114?: string | number | undefined;
        metric115?: string | number | undefined;
        metric116?: string | number | undefined;
        metric117?: string | number | undefined;
        metric118?: string | number | undefined;
        metric119?: string | number | undefined;
        metric120?: string | number | undefined;
        metric121?: string | number | undefined;
        metric122?: string | number | undefined;
        metric123?: string | number | undefined;
        metric124?: string | number | undefined;
        metric125?: string | number | undefined;
        metric126?: string | number | undefined;
        metric127?: string | number | undefined;
        metric128?: string | number | undefined;
        metric129?: string | number | undefined;
        metric130?: string | number | undefined;
        metric131?: string | number | undefined;
        metric132?: string | number | undefined;
        metric133?: string | number | undefined;
        metric134?: string | number | undefined;
        metric135?: string | number | undefined;
        metric136?: string | number | undefined;
        metric137?: string | number | undefined;
        metric138?: string | number | undefined;
        metric139?: string | number | undefined;
        metric140?: string | number | undefined;
        metric141?: string | number | undefined;
        metric142?: string | number | undefined;
        metric143?: string | number | undefined;
        metric144?: string | number | undefined;
        metric145?: string | number | undefined;
        metric146?: string | number | undefined;
        metric147?: string | number | undefined;
        metric148?: string | number | undefined;
        metric149?: string | number | undefined;
        metric150?: string | number | undefined;
        metric151?: string | number | undefined;
        metric152?: string | number | undefined;
        metric153?: string | number | undefined;
        metric154?: string | number | undefined;
        metric155?: string | number | undefined;
        metric156?: string | number | undefined;
        metric157?: string | number | undefined;
        metric158?: string | number | undefined;
        metric159?: string | number | undefined;
        metric160?: string | number | undefined;
        metric161?: string | number | undefined;
        metric162?: string | number | undefined;
        metric163?: string | number | undefined;
        metric164?: string | number | undefined;
        metric165?: string | number | undefined;
        metric166?: string | number | undefined;
        metric167?: string | number | undefined;
        metric168?: string | number | undefined;
        metric169?: string | number | undefined;
        metric170?: string | number | undefined;
        metric171?: string | number | undefined;
        metric172?: string | number | undefined;
        metric173?: string | number | undefined;
        metric174?: string | number | undefined;
        metric175?: string | number | undefined;
        metric176?: string | number | undefined;
        metric177?: string | number | undefined;
        metric178?: string | number | undefined;
        metric179?: string | number | undefined;
        metric180?: string | number | undefined;
        metric181?: string | number | undefined;
        metric182?: string | number | undefined;
        metric183?: string | number | undefined;
        metric184?: string | number | undefined;
        metric185?: string | number | undefined;
        metric186?: string | number | undefined;
        metric187?: string | number | undefined;
        metric188?: string | number | undefined;
        metric189?: string | number | undefined;
        metric190?: string | number | undefined;
        metric191?: string | number | undefined;
        metric192?: string | number | undefined;
        metric193?: string | number | undefined;
        metric194?: string | number | undefined;
        metric195?: string | number | undefined;
        metric196?: string | number | undefined;
        metric197?: string | number | undefined;
        metric198?: string | number | undefined;
        metric199?: string | number | undefined;
        metric200?: string | number | undefined;
        name?: string | undefined;
        nonInteraction?: boolean | undefined;
        option?: string | undefined;
        page?: string | undefined;
        position?: number | string | undefined;
        price?: string | undefined;
        quantity?: number | undefined;
        queueTime?: number | undefined;
        referrer?: string | undefined;
        revenue?: string | undefined;
        sampleRate?: number | undefined;
        sessionControl?: string | undefined;
        siteSpeedSampleRate?: number | undefined;
        screenColors?: string | undefined;
        screenName?: string | undefined;
        screenResolution?: string | undefined;
        shipping?: string | undefined;
        socialAction?: string | undefined;
        socialNetwork?: string | undefined;
        socialTarget?: string | undefined;
        some?: string | undefined;
        step?: boolean | number | undefined;
        storage?: string | undefined;
        storeGac?: boolean | undefined;
        tax?: string | undefined;
        timingCategory?: string | undefined;
        timingLabel?: string | undefined;
        timingValue?: number | undefined;
        timingVar?: string | undefined;
        title?: string | undefined;
        transport?: string | undefined;
        useBeacon?: boolean | undefined;
        userId?: string | undefined;
        variant?: string | undefined;
        viewportSize?: string | undefined;
    }

    interface ga {
        l: number;
        q: any[];

        (
            command: "send",
            hitType: "event",
            eventCategory: string,
            eventAction: string,
            eventLabel?: string,
            eventValue?: number,
            fieldsObject?: FieldsObject,
        ): void;
        (
            command: "send",
            hitType: "event",
            fieldsObject: {
                eventCategory: string;
                eventAction: string;
                eventLabel?: string | undefined;
                eventValue?: number | undefined;
                nonInteraction?: boolean | undefined;
            },
        ): void;
        (
            command: "send",
            fieldsObject: {
                hitType: HitType; // 'event'
                eventCategory: string;
                eventAction: string;
                eventLabel?: string | undefined;
                eventValue?: number | undefined;
                nonInteraction?: boolean | undefined;
            },
        ): void;
        (command: "send", hitType: "pageview", page: string): void;
        (
            command: "send",
            hitType: "social",
            socialNetwork: string,
            socialAction: string,
            socialTarget: string,
        ): void;
        (
            command: "send",
            hitType: "social",
            fieldsObject: {
                socialNetwork: string;
                socialAction: string;
                socialTarget: string;
            },
        ): void;
        (
            command: "send",
            hitType: "timing",
            timingCategory: string,
            timingVar: string,
            timingValue: number,
        ): void;
        (
            command: "send",
            hitType: "timing",
            fieldsObject: {
                timingCategory: string;
                timingVar: string;
                timingValue: number;
            },
        ): void;
        (command: "send", fieldsObject: FieldsObject): void;
        (command: string, hitType: HitType, ...fields: any[]): void;
        (command: "require", pluginName: string, pluginOptions?: any): void;
        (
            command: "provide",
            pluginName: string,
            pluginConstructor: (tracker: Tracker, pluginOptions?: Object) => void,
        ): void;

        (
            command: "create",
            trackingId: string,
            cookieDomain?: string,
            name?: string,
            fieldsObject?: FieldsObject,
        ): void;
        (command: "remove"): void;

        (command: string, ...fields: any[]): void;

        (readyCallback: (defaultTracker?: Tracker) => void): void;

        create(trackingId: string, cookieDomain: string, name: string, fieldsObject?: FieldsObject): Tracker;
        create(trackingId: string, cookieDomain: string, fieldsObject?: FieldsObject): Tracker;
        create(trackingId: string, fieldsObject?: FieldsObject): Tracker;

        getAll(): Tracker[];
        getByName(name: string): Tracker;
        remove(name: string): void;
    }

    interface Tracker {
        get(fieldName: string): any;
        set(fieldName: string, fieldValue: any): void;
        set(fieldsObject: {}): void;
        send(hitType: string, ...fields: any[]): void;
        send(hitType: string, fieldsObject: {}): void;
    }

    interface Model {
        get(fieldName: string): any;
        set(fieldName: string, fieldValue: any, temporary?: boolean): void;
        set(fields: {}, fieldValue?: null, temporary?: boolean): void;
    }
}

declare var gaClassic: GoogleAnalytics;
declare var ga: UniversalAnalytics.ga;
declare var _gaq: GoogleAnalyticsCode;
declare var _gat: GoogleAnalyticsTracker;
