// Type definitions for Google Analytics (Classic and Universal)
// Project: https://developers.google.com/analytics/devguides/collection/gajs/, https://developers.google.com/analytics/devguides/collection/analyticsjs/method-reference
// Definitions by: Ronnie Haakon Hegelund <http://ronniehegelund.blogspot.dk>, Pat Kujawa <http://patkujawa.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
    push(commandArray: string[]): void;
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

    enum HitType {
        'pageview', 'screenview', 'event', 'transaction', 'item', 'social', 'exception', 'timing'
    }

    // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference

    interface FieldsObject {
        affiliation?: string;
        allowAnchor?: boolean;
        allowLinker?: boolean;
        alwaysSendReferrer?: boolean;
        anonymizeIp?: boolean;
        appId?: string;
        appInstallerId?: string;
        appName?: string;
        appVersion?: string;
        brand?: string;
        campaignId?: string;
        campaignContent?: string;
        campaignKeyword?: string;
        campaignMedium?: string;
        campaignName?: string;
        campaignSource?: string;
        category?: string;
        clientId?: string;
        contentGroup1?: string;
        contentGroup2?: string;
        contentGroup3?: string;
        contentGroup4?: string;
        contentGroup5?: string;
        contentGroup6?: string;
        contentGroup7?: string;
        contentGroup8?: string;
        contentGroup9?: string;
        contentGroup10?: string;
        cookieName?: string;
        cookieDomain?: string;
        cookieExpires?: number;
        coupon?: string;
        creative?: string;
        currencyCode?: string;
        dataSource?: string;
        dimension1?: string;
        dimension2?: string;
        dimension3?: string;
        dimension4?: string;
        dimension5?: string;
        dimension6?: string;
        dimension7?: string;
        dimension8?: string;
        dimension9?: string;
        dimension10?: string;
        dimension11?: string;
        dimension12?: string;
        dimension13?: string;
        dimension14?: string;
        dimension15?: string;
        dimension16?: string;
        dimension17?: string;
        dimension18?: string;
        dimension19?: string;
        dimension20?: string;
        dimension21?: string;
        dimension22?: string;
        dimension23?: string;
        dimension24?: string;
        dimension25?: string;
        dimension26?: string;
        dimension27?: string;
        dimension28?: string;
        dimension29?: string;
        dimension30?: string;
        dimension31?: string;
        dimension32?: string;
        dimension33?: string;
        dimension34?: string;
        dimension35?: string;
        dimension36?: string;
        dimension37?: string;
        dimension38?: string;
        dimension39?: string;
        dimension40?: string;
        dimension41?: string;
        dimension42?: string;
        dimension43?: string;
        dimension44?: string;
        dimension45?: string;
        dimension46?: string;
        dimension47?: string;
        dimension48?: string;
        dimension49?: string;
        dimension50?: string;
        dimension51?: string;
        dimension52?: string;
        dimension53?: string;
        dimension54?: string;
        dimension55?: string;
        dimension56?: string;
        dimension57?: string;
        dimension58?: string;
        dimension59?: string;
        dimension60?: string;
        dimension61?: string;
        dimension62?: string;
        dimension63?: string;
        dimension64?: string;
        dimension65?: string;
        dimension66?: string;
        dimension67?: string;
        dimension68?: string;
        dimension69?: string;
        dimension70?: string;
        dimension71?: string;
        dimension72?: string;
        dimension73?: string;
        dimension74?: string;
        dimension75?: string;
        dimension76?: string;
        dimension77?: string;
        dimension78?: string;
        dimension79?: string;
        dimension80?: string;
        dimension81?: string;
        dimension82?: string;
        dimension83?: string;
        dimension84?: string;
        dimension85?: string;
        dimension86?: string;
        dimension87?: string;
        dimension88?: string;
        dimension89?: string;
        dimension90?: string;
        dimension91?: string;
        dimension92?: string;
        dimension93?: string;
        dimension94?: string;
        dimension95?: string;
        dimension96?: string;
        dimension97?: string;
        dimension98?: string;
        dimension99?: string;
        dimension100?: string;
        dimension101?: string;
        dimension102?: string;
        dimension103?: string;
        dimension104?: string;
        dimension105?: string;
        dimension106?: string;
        dimension107?: string;
        dimension108?: string;
        dimension109?: string;
        dimension110?: string;
        dimension111?: string;
        dimension112?: string;
        dimension113?: string;
        dimension114?: string;
        dimension115?: string;
        dimension116?: string;
        dimension117?: string;
        dimension118?: string;
        dimension119?: string;
        dimension120?: string;
        dimension121?: string;
        dimension122?: string;
        dimension123?: string;
        dimension124?: string;
        dimension125?: string;
        dimension126?: string;
        dimension127?: string;
        dimension128?: string;
        dimension129?: string;
        dimension130?: string;
        dimension131?: string;
        dimension132?: string;
        dimension133?: string;
        dimension134?: string;
        dimension135?: string;
        dimension136?: string;
        dimension137?: string;
        dimension138?: string;
        dimension139?: string;
        dimension140?: string;
        dimension141?: string;
        dimension142?: string;
        dimension143?: string;
        dimension144?: string;
        dimension145?: string;
        dimension146?: string;
        dimension147?: string;
        dimension148?: string;
        dimension149?: string;
        dimension150?: string;
        dimension151?: string;
        dimension152?: string;
        dimension153?: string;
        dimension154?: string;
        dimension155?: string;
        dimension156?: string;
        dimension157?: string;
        dimension158?: string;
        dimension159?: string;
        dimension160?: string;
        dimension161?: string;
        dimension162?: string;
        dimension163?: string;
        dimension164?: string;
        dimension165?: string;
        dimension166?: string;
        dimension167?: string;
        dimension168?: string;
        dimension169?: string;
        dimension170?: string;
        dimension171?: string;
        dimension172?: string;
        dimension173?: string;
        dimension174?: string;
        dimension175?: string;
        dimension176?: string;
        dimension177?: string;
        dimension178?: string;
        dimension179?: string;
        dimension180?: string;
        dimension181?: string;
        dimension182?: string;
        dimension183?: string;
        dimension184?: string;
        dimension185?: string;
        dimension186?: string;
        dimension187?: string;
        dimension188?: string;
        dimension189?: string;
        dimension190?: string;
        dimension191?: string;
        dimension192?: string;
        dimension193?: string;
        dimension194?: string;
        dimension195?: string;
        dimension196?: string;
        dimension197?: string;
        dimension198?: string;
        dimension199?: string;
        dimension200?: string;
        encoding?: string;
        eventAction?: string;
        eventCategory?: string;
        eventLabel?: string;
        eventValue?: number;
        exDescription?: string;
        exFatal?: boolean;
        expId?: string;
        expVar?: string;
        flashVersion?: string;
        forceSSL?: boolean;
        hitCallback?(): void;
        hitType?: string;
        hostname?: string;
        id?: string;
        javaEnabled?: boolean;
        language?: string;
        legacyCookieDomain?: string;
        legacyHistoryImport?: boolean;
        linkid?: string;
        list?: string;
        location?: string;
        metric1?: number;
        metric2?: string;
        metric3?: string;
        metric4?: string;
        metric5?: string;
        metric6?: string;
        metric7?: string;
        metric8?: string;
        metric9?: string;
        metric10?: string;
        metric11?: string;
        metric12?: string;
        metric13?: string;
        metric14?: string;
        metric15?: string;
        metric16?: string;
        metric17?: string;
        metric18?: string;
        metric19?: string;
        metric20?: string;
        metric21?: string;
        metric22?: string;
        metric23?: string;
        metric24?: string;
        metric25?: string;
        metric26?: string;
        metric27?: string;
        metric28?: string;
        metric29?: string;
        metric30?: string;
        metric31?: string;
        metric32?: string;
        metric33?: string;
        metric34?: string;
        metric35?: string;
        metric36?: string;
        metric37?: string;
        metric38?: string;
        metric39?: string;
        metric40?: string;
        metric41?: string;
        metric42?: string;
        metric43?: string;
        metric44?: string;
        metric45?: string;
        metric46?: string;
        metric47?: string;
        metric48?: string;
        metric49?: string;
        metric50?: string;
        metric51?: string;
        metric52?: string;
        metric53?: string;
        metric54?: string;
        metric55?: string;
        metric56?: string;
        metric57?: string;
        metric58?: string;
        metric59?: string;
        metric60?: string;
        metric61?: string;
        metric62?: string;
        metric63?: string;
        metric64?: string;
        metric65?: string;
        metric66?: string;
        metric67?: string;
        metric68?: string;
        metric69?: string;
        metric70?: string;
        metric71?: string;
        metric72?: string;
        metric73?: string;
        metric74?: string;
        metric75?: string;
        metric76?: string;
        metric77?: string;
        metric78?: string;
        metric79?: string;
        metric80?: string;
        metric81?: string;
        metric82?: string;
        metric83?: string;
        metric84?: string;
        metric85?: string;
        metric86?: string;
        metric87?: string;
        metric88?: string;
        metric89?: string;
        metric90?: string;
        metric91?: string;
        metric92?: string;
        metric93?: string;
        metric94?: string;
        metric95?: string;
        metric96?: string;
        metric97?: string;
        metric98?: string;
        metric99?: string;
        metric100?: string;
        metric101?: string;
        metric102?: string;
        metric103?: string;
        metric104?: string;
        metric105?: string;
        metric106?: string;
        metric107?: string;
        metric108?: string;
        metric109?: string;
        metric110?: string;
        metric111?: string;
        metric112?: string;
        metric113?: string;
        metric114?: string;
        metric115?: string;
        metric116?: string;
        metric117?: string;
        metric118?: string;
        metric119?: string;
        metric120?: string;
        metric121?: string;
        metric122?: string;
        metric123?: string;
        metric124?: string;
        metric125?: string;
        metric126?: string;
        metric127?: string;
        metric128?: string;
        metric129?: string;
        metric130?: string;
        metric131?: string;
        metric132?: string;
        metric133?: string;
        metric134?: string;
        metric135?: string;
        metric136?: string;
        metric137?: string;
        metric138?: string;
        metric139?: string;
        metric140?: string;
        metric141?: string;
        metric142?: string;
        metric143?: string;
        metric144?: string;
        metric145?: string;
        metric146?: string;
        metric147?: string;
        metric148?: string;
        metric149?: string;
        metric150?: string;
        metric151?: string;
        metric152?: string;
        metric153?: string;
        metric154?: string;
        metric155?: string;
        metric156?: string;
        metric157?: string;
        metric158?: string;
        metric159?: string;
        metric160?: string;
        metric161?: string;
        metric162?: string;
        metric163?: string;
        metric164?: string;
        metric165?: string;
        metric166?: string;
        metric167?: string;
        metric168?: string;
        metric169?: string;
        metric170?: string;
        metric171?: string;
        metric172?: string;
        metric173?: string;
        metric174?: string;
        metric175?: string;
        metric176?: string;
        metric177?: string;
        metric178?: string;
        metric179?: string;
        metric180?: string;
        metric181?: string;
        metric182?: string;
        metric183?: string;
        metric184?: string;
        metric185?: string;
        metric186?: string;
        metric187?: string;
        metric188?: string;
        metric189?: string;
        metric190?: string;
        metric191?: string;
        metric192?: string;
        metric193?: string;
        metric194?: string;
        metric195?: string;
        metric196?: string;
        metric197?: string;
        metric198?: string;
        metric199?: string;
        metric200?: string;
        name?: string;
        nonInteraction?: boolean;
        option?: string;
        page?: string;
        position?: number | string;
        price?: string;
        quantity?: number;
        queueTime?: number;
        referrer?: string;
        revenue?: string;
        sampleRate?: number;
        sessionControl?: string;
        siteSpeedSampleRate?: number;
        screenColors?: string;
        screenName?: string;
        screenResolution?: string;
        shipping?: string;
        socialAction?: string;
        socialNetwork?: string;
        socialTarget?: string;
        some?: string;
        step?: boolean;
        tax?: string;
        timingCategory?: string;
        timingLabel?: string;
        timingValue?: number;
        timingVar?: string;
        title?: string;
        transport?: string;
        useBeacon?: boolean;
        userId?: string;
        variant?: string;
        viewportSize?: string;
    }

    interface ga {
        l: number;
        q: any[];

        (
            command: 'send',
            hitType: 'event',
            eventCategory: string,
            eventAction: string,
            eventLabel?: string,
            eventValue?: number,
            fieldsObject?: FieldsObject): void;
        (
            command: 'send',
            hitType: 'event',
            fieldsObject: {
                eventCategory: string,
                eventAction: string,
                eventLabel?: string,
                eventValue?: number,
                nonInteraction?: boolean
            }): void;
        (
            command: 'send',
            fieldsObject: {
                hitType: HitType, // 'event'
                eventCategory: string,
                eventAction: string,
                eventLabel?: string,
                eventValue?: number,
                nonInteraction?: boolean
            }): void;
        (command: 'send', hitType: 'pageview', page: string): void;
        (
            command: 'send',
            hitType: 'social',
            socialNetwork: string,
            socialAction: string,
            socialTarget: string): void;
        (
            command: 'send',
            hitType: 'social',
            fieldsObject: {
                socialNetwork: string,
                socialAction: string,
                socialTarget: string
            }): void;
        (
            command: 'send',
            hitType: 'timing',
            timingCategory: string,
            timingVar: string,
            timingValue: number): void;
        (
            command: 'send',
            hitType: 'timing',
            fieldsObject: {
                timingCategory: string,
                timingVar: string,
                timingValue: number
            }): void;
        (command: 'send', fieldsObject: FieldsObject): void;
        (command: string, hitType: HitType, ...fields: any[]): void;

        (command: 'create', trackingId: string, cookieDomain?: string, name?: string, fieldsObject?: FieldsObject): void;
        (command: 'remove'): void;

        (command: string, ...fields: any[]): void;

        (readyCallback: (defaultTracker?: UniversalAnalytics.Tracker) => void): void;

        create(trackingId: string, cookieDomain: string, name: string, fieldsObject?: FieldsObject): UniversalAnalytics.Tracker;
        create(trackingId: string, cookieDomain: string, fieldsObject?: FieldsObject): UniversalAnalytics.Tracker;
        create(trackingId: string, fieldsObject?: FieldsObject): UniversalAnalytics.Tracker;

        getAll(): UniversalAnalytics.Tracker[];
        getByName(name: string): UniversalAnalytics.Tracker;
        remove(name: string): void;
    }

    interface Tracker {
        get<T>(fieldName: string): T;
        send(hitType: string, opt_fieldObject?: {}): void;
        set(fieldName: string, value: string): void;
        set(fieldName: string, value: {}): void;
        set(fieldName: string, value: number): void;
        set(fieldName: string, value: boolean): void;
    }
}

declare var gaClassic: GoogleAnalytics;
declare var ga: UniversalAnalytics.ga;
declare var _gaq: GoogleAnalyticsCode;
declare var _gat: GoogleAnalyticsTracker;
