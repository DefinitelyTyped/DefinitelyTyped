// Type definitions for itunesconnectanalytics 0.5
// Project: https://github.com/JanHalozan/iTunesConnectAnalytics#readme
// Definitions by: David Trotz <https://github.com/dctrotz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0
import * as moment from 'moment';

export class Itunes {
    constructor(username: string, password: string, options: ItunesOptions);
    executeRequest(task: RequestTask, callback: () => void): void;
    login(username: string, password: string): void;
    changeProvider(providerId: string, callback: (error?: any, paused?: boolean) => void): void;
    getApps(callback: (error: any, paused: boolean) => void): void;
    getSettings(callback: (error: any, paused: boolean) => void): void;
    getAPIURL(url: string, callback: (error: any, paused: boolean) => void): void;
    request(query: AnalyticsQuery, callback: (error: any, body: QueryResult) => void): void;
    getCookies(): string;
    getHeaders(): object;
}

export interface ItunesOptions {
    baseURL?: string;
    loginURL?: string;
    settingsURL?: string;
    appleWidgetKey?: string;
    concurrentRequests?: number;
    errorCallback: (error: any) => void;
    successCallback: (cookies: string) => void;
}

export  type QueryDateTypes = string | Date | moment.Moment;

export interface QueryResult {
    size: number;
    results: AnalyticsResult[];
}

export interface AnalyticsResult {
    adamId: string;
    meetsThreshold: boolean;
    group: AnalyticsGroup | null;
    data: AnalyticsDataPoint[];
    totals: AnalyticsTotals;
}

export interface AnalyticsDataPoint {
    date: Date;
    installs?: number;
    uninstalls?: number;
    sessions?: number;
    pageViewCount?: number;
    activeDevices?: number;
    rollingActiveDevices?: number;
    crashes?: number;
    payingUsers?: number;
    units?: number;
    sales?: number;
    iap?: number;
    impressionsTotal?: number;
    impressionsTotalUnique?: number;
    pageViewUnique?: number;
}

export interface AnalyticsGroup {
    key: string;
    title: string;
}

export interface AnalyticsTotals {
    value: number;
    type: string;
    key: string;
}

export interface  RequestTask {
    query: string;
    completed: (error: Error, body: string) => void;
}

export interface QueryGroup {
    metric?: measures;
    dimension: dimension;
    rank?: string;
    limit?: number;
}

export interface DimensionFilters {
    dimensionKey: dimensionFilterKey;
    optionKeys: string[];
}

export interface QueryConfig {
    measures?: measures | measures[];
    start?: QueryDateTypes;
    end?: QueryDateTypes;
    frequency?: frequency;
    group?: QueryGroup;
    dimensionFilters?: DimensionFilters[];
}

export class AnalyticsQuery {
    constructor(type: string, appId: string, config: QueryConfig);
    static metrics(appId: string, config: QueryConfig): AnalyticsQuery;
    static sources(appId: string, config: QueryConfig): AnalyticsQuery;
    date(start: QueryDateTypes, end: QueryDateTypes): AnalyticsQuery;
    time(value: number, unit: string): AnalyticsQuery;
    limit(limit: number): AnalyticsQuery;
}

export enum frequency {
    days = 'DAY',
    weeks = 'WEEK',
    months = 'MONTH'
}

export enum measures {
    installs = 'installs',
    uninstalls = 'uninstalls',
    sessions = 'sessions',
    pageViews = 'pageViewCount',
    activeDevices = 'activeDevices',
    activeLast30days = 'rollingActiveDevices',
    crashes = 'crashes',
    payingUsers = 'payingUsers',
    units = 'units',
    sales = 'sales',
    iap = 'iap',
    impressions = 'impressionsTotal',
    impressionsUnique = 'impressionsTotalUnique',
    pageViewUnique = 'pageViewUnique'
}

export enum dimension {
    appVersion = 'appVersion',
    campaigns = 'campaignId',
    device = 'platform',
    platformVersion = 'platformVersion',
    region = 'region',
    territory = 'storefront',
    websites = 'domainReferrer',
    apps = 'appReferrer',
    sourceType = 'source'
}

export enum dimensionFilterKey {
    appPurchaseWeek = 'apppurchaseWeek',
    apppurchaseDay = 'apppurchaseDay',
    apppurchaseMonth = 'apppurchaseMonth',
    appVersion = 'appVersion',
    campaigns = 'campaignId',
    device = 'platform',
    platformVersion = 'platformVersion',
    territory = 'storefront',
    region = 'region',
    websites = 'domainReferrer'
}

export enum platform {
    iPhone = 'iPhone',
    iPad = 'iPad',
    iPod = 'iPod',
    appleTV = 'AppleTV'
}

export enum queryType {
    sources = 'sources',
    metrics = 'metrics'
}

export enum region {
    usaCanada = '-100001',
    latinAmericaTheCaribbean = '-100002',
    europe = '-100003',
    asiaPacific = '-100004',
    africaMiddleEastIndia = '-100005'
}

export enum territory {
    unitedStates = '143441',
    france = '143442',
    germany = '143443',
    unitedKingdom = '143444',
    austria = '143445',
    belgium = '143446',
    finland = '143447',
    greece = '143448',
    ireland = '143449',
    italy = '143450',
    luxembourg = '143451',
    netherlands = '143452',
    portugal = '143453',
    spain = '143454',
    canada = '143455',
    sweden = '143456',
    norway = '143457',
    denmark = '143458',
    switzerland = '143459',
    australia = '143460',
    newZealand = '143461',
    japan = '143462',
    hongKong = '143463',
    singapore = '143464',
    china = '143465',
    korea = '143466',
    india = '143467',
    mexico = '143468',
    russia = '143469',
    taiwan = '143470',
    vietnam = '143471',
    southAfrica = '143472',
    malaysia = '143473',
    philippines = '143474',
    thailand = '143475',
    indonesia = '143476',
    pakistan = '143477',
    poland = '143478',
    saudiArabia = '143479',
    turkey = '143480',
    unitedArabEmirates = '143481',
    hungary = '143482',
    chile = '143483',
    nepal = '143484',
    panama = '143485',
    sriLanka = '143486',
    romania = '143487',
    czechRepublic = '143489',
    israel = '143491',
    ukraine = '143492',
    kuwait = '143493',
    croatia = '143494',
    costaRica = '143495',
    slovakia = '143496',
    lebanon = '143497',
    qatar = '143498',
    slovenia = '143499',
    colombia = '143501',
    venezuela = '143502',
    brazil = '143503',
    guatemala = '143504',
    argentina = '143505',
    elSalvador = '143506',
    peru = '143507',
    dominicanRepublic = '143508',
    ecuador = '143509',
    honduras = '143510',
    jamaica = '143511',
    nicaragua = '143512',
    paraguay = '143513',
    uruguay = '143514',
    macau = '143515',
    egypt = '143516',
    kazakhstan = '143517',
    estonia = '143518',
    latvia = '143519',
    lithuania = '143520',
    malta = '143521',
    moldova = '143523',
    armenia = '143524',
    botswana = '143525',
    bulgaria = '143526',
    jordan = '143528',
    kenya = '143529',
    macedonia = '143530',
    madagascar = '143531',
    mali = '143532',
    mauritius = '143533',
    niger = '143534',
    senegal = '143535',
    tunisia = '143536',
    uganda = '143537',
    anguilla = '143538',
    bahamas = '143539',
    antiguaAndBarbuda = '143540',
    barbados = '143541',
    bermuda = '143542',
    virginIslands = '143543',
    caymanIslands = '143544',
    dominica = '143545',
    grenada = '143546',
    montserrat = '143547',
    stKittsAndNevis = '143548',
    saintLucia = '143549',
    stVincentAndTheGrenadines = '143550',
    trinidadAndTobago = '143551',
    turksAndCaicos = '143552',
    guyana = '143553',
    suriname = '143554',
    belize = '143555',
    bolivia = '143556',
    cyprus = '143557',
    iceland = '143558',
    bahrain = '143559',
    bruneiDarussalam = '143560',
    nigeria = '143561',
    oman = '143562',
    algeria = '143563',
    angola = '143564',
    belarus = '143565',
    uzbekistan = '143566',
    azerbaijan = '143568',
    yemen = '143571',
    tanzania = '143572',
    ghana = '143573',
    albania = '143575',
    benin = '143576',
    bhutan = '143577',
    burkinaFaso = '143578',
    cambodia = '143579',
    capeVerde = '143580',
    chad = '143581',
    congo = '143582',
    fiji = '143583',
    gambia = '143584',
    guinea = '143585',
    kyrgyzstan = '143586',
    lao = '143587',
    liberia = '143588',
    malawi = '143589',
    mauritania = '143590',
    micronesia = '143591',
    mongolia = '143592',
    mozambique = '143593',
    namibia = '143594',
    palau = '143595',
    papuaNewGuinea = '143597',
    sãoToméandPríncipe = '143598',
    seychelles = '143599',
    sierraLeone = '143600',
    solomonIslands = '143601',
    swaziland = '143602',
    tajikistan = '143603',
    turkmenistan = '143604',
    zimbabwe = '143605'
}
