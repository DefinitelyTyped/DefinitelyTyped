// Type definitions for agilite 6.4
// Project: https://www.npmjs.com/package/agilite
// Definitions by: Armand Smit <https://github.com/ArrieAgilite>
//                 John Jardin <https://github.com/johnjardin>
//                 Agilit-e <https://github.com/agilitehub>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

declare class Agilite {
  constructor(config: Agilite.AgiliteConfig);

  config: Agilite.AgiliteConfig;

  ApiKeys: Agilite.ApiKeys;
  Keywords: Agilite.Keywords;
  Numbering: Agilite.Numbering;
  Connectors: Agilite.Connectors;
  DataMappings: Agilite.DataMappings;
  Templates: Agilite.Templates;
  BPM: Agilite.BPM;
  Roles: Agilite.Roles;
  Files: Agilite.Files;
  Utils: Agilite.Utils;
  TierStructures: Agilite.TierStructures;

  appName: Agilite.appName;
  reqType: Agilite.reqType;

  getConfig(): Agilite.AgiliteConfig;

  executeCRUDRequest(appName: string, reqType: string, data: any, headers: any): any;
}

declare namespace Agilite {
  interface AgiliteConfig {
    apiServerUrl?: string;
    apiKey?: string;
    teamId?: string;
  }

  interface reqType {
    GET: string;
    POST: string;
    PUT: string;
    DELETE: string;
  }

  interface appName {
    MODULE_KEY_API_KEYS: string;
    MODULE_KEY_KEYWORDS: string;
    MODULE_KEY_NUMBERING: string;
    MODULE_KEY_CONNECTORS: string;
    MODULE_KEY_DATA_MAPPING: string;
    MODULE_KEY_TEMPLATES: string;
    MODULE_KEY_BPM: string;
    MODULE_KEY_ROLES: string;
    MODULE_KEY_BOT_BUILDER: string;
    MODULE_KEY_FILES: string;
    MODULE_KEY_UTILS: string;
    MODULE_KEY_TIER_STRUCTURES: string;
  }

  interface sort {
    ASC: string;
    DESC: string;
    ASC_VALUE: string;
    DESC_VALUE: string;
  }

  interface outputFormat {
    ARRAY: string;
    JSON: string;
    STRING: string;
  }

  interface responseType {
    ARRAY_BUFFER: string;
    BLOB: string;
    DOCUMENT: string;
    JSON: string;
    TEXT: string;
    STREAM: string;
  }

  class ApiKeys {
    constructor(config: AgiliteConfig);

    postData(data: any): any;
    getData(profileKeys: string[], recordIds: string[], slimResult: boolean): any;
    putData(recordId: string, data: any): any;
    deleteData(recordId: string): any;
    generateApiKey(recordId: string): any;
    resetApiKeys(recordId: string): any;
    disableApiKey(recordId: string): any;
    enableApiKey(recordId: string): any;
  }

  class Keywords {
    constructor(config: AgiliteConfig);

    sort: sort;
    outputFormat: outputFormat;

    postData(data: any): any;
    getData(profileKeys: string[], recordIds: string[], slimResult: boolean): any;
    putData(recordId: string, data: any): any;
    deleteData(recordId: string): any;
    getByProfileKey(profileKey: string, sort: string, outputFormat: string): any;
    getProfileKeysByGroup(groupName: string, sort: string): any;
    getLabelByValue(profileKey: string, value: string, outputFormat: string): any;
    getValueByLabel(profileKey: string, label: string, outputFormat: string): any;
  }

  class Numbering {
    constructor(config: AgiliteConfig);

    outputFormat: outputFormat;

    postData(data: any): any;
    getData(profileKeys: string[], recordIds: string[], slimResult: boolean): any;
    putData(recordId: string, data: any): any;
    deleteData(recordId: string): any;
    generate(profileKey: string, outputFormat: string, data: any): any;
    resetCounters(recordId: string): any;
  }

  class Connectors {
    constructor(config: AgiliteConfig);

    postData(data: any): any;
    getData(profileKeys: string[], recordIds: string[], slimResult: boolean): any;
    putData(recordId: string, data: any): any;
    deleteData(recordId: string): any;
    execute(profileKey: string, routeKey: string, data: any): any;
  }

  class DataMappings {
    constructor(config: AgiliteConfig);

    postData(data: any): any;
    getData(profileKeys: string[], recordIds: string[], slimResult: boolean): any;
    putData(recordId: string, data: any): any;
    deleteData(recordId: string): any;
    execute(profileKey: string, data: any): any;
  }

  class Templates {
    constructor(config: AgiliteConfig);

    postData(data: any): any;
    getData(profileKeys: string[], recordIds: string[], slimResult: boolean): any;
    putData(recordId: string, data: any): any;
    deleteData(recordId: string): any;
    execute(profileKey: string, data: any): any;
  }

  class BPM {
    constructor(config: AgiliteConfig);

    postData(data: any): any;
    getData(profileKeys: string[], recordIds: string[], slimResult: boolean): any;
    putData(recordId: string, data: any): any;
    deleteData(recordId: string): any;
    registerBPMRecord(processKey: string, currentUser: string): any;
    execute(processKey: string, bpmRecordId: string, optionSelected: string, currentUser: string, comments: string, data: any): any;
    // tslint:disable-next-line max-line-length
    getRecordState(processKeys: string[], bpmRecordIds: string[], stepNames: string[], responsibleUsers: string[], relevantUsers: string[], includeHistory: boolean, includeStepOptions: boolean, includeVisibleObjects: boolean, page: any, pageLimit: any): any;
    getByProfileKey(profileKey: string): any;
    clearHistoryData(profileKey: string): any;
    getActiveSteps(processKey: string): any;
    getActiveUsers(processKey: string): any;
  }

  class Roles {
    constructor(config: AgiliteConfig);

    postData(data: any): any;
    getData(profileKeys: string[], recordIds: string[], slimResult: boolean): any;
    putData(recordId: string, data: any): any;
    deleteData(recordId: string): any;
    getRole(roleNames: string[], conditionalLevels: string[], data: any): any;
    assignRole(processKey: string, bpmRecordId: string, roleName: string, currentUser: string, responsibleUsers: string[]): any;
    getAssignedRoles(processKey: string, bpmRecordId: string, roleNames: string[]): any;
    changeConditionalLevels(recordId: string, conditionalLevels: string[]): any;
    reAssignResponsibleUser(recordId: string, responsibleUser: string): any;
  }

  class Files {
    constructor(config: AgiliteConfig);

    responseType: responseType;

    getFile(recordId: string, responseType: any): any;
    uploadFile(fileName: string, contentType: string, data: any): any;
    deleteFile(recordId: string): any;
    getFileName(recordId: string): any;
  }

  class Utils {
    constructor(config: AgiliteConfig);

    responseType: responseType;

    encodeXML(data: string): any;
    decodeXML(data: string): any;
    XMLToJS(data: string): any;
    JSToXML(data: string): any;
    html2json(data: string): any;
    generatePDF(data: any): any;
    generateUUID(): any;
    formatDateTime(dateTimeValue: string, formatKey: string): any;
    account(): any;
    dashboardReports(startDate: any, endDate: any): any;
    exportData(includeModules: any): any;
    importData(fileId: string): any;
  }

  class TierStructures {
    constructor(config: AgiliteConfig);

    sort: sort;
    outputFormat: outputFormat;

    postData(data: any): any;
    getData(profileKeys: string[], recordIds: string[], slimResult: boolean): any;
    putData(recordId: string, data: any): any;
    deleteData(recordId: string): any;
    getTierByKey(tierKeys: string[], includeValues: boolean, includeMetaData: boolean, includeTierEntries: boolean, sortValues: string, valuesOutputFormat: string): any;
  }
}

export = Agilite;
