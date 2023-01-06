export function getPreHashStringOfField(field: string, value: any, throwError: boolean): string;
export function getPreHashStringFromCustomFieldElementList(prefix: string, value: any, throwError: boolean): string;
export function getPreHashStringFromCustomFieldElement(key: string, value: any, context: {}, throwError: boolean): string;
export function getPreHashStringOfElementWithChildren(element: {}, context: {}, throwError: boolean): string;
export function preHashStringTheList(list: [], context: {}, fieldName: string, throwError: boolean): any;
export function getOrderedPreHashString(object: {}, context: {}, orderList: [], throwError: boolean, recursive?: boolean): {
    preHashed: string;
    customFields: [];
};
export function eventToPreHashedString(event: {}, context: string | any | Array<string> | Array<any>, throwError?: boolean): string;
