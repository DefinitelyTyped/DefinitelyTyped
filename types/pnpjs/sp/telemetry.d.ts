import { ISharePointQueryable } from "./sharepointqueryable";
/**
 * Includes this method name in the X-ClientService-ClientTag used to record pnpjs usage
 *
 * @param name Method name, displayed in the
 */
export declare function tag(name: string): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
export declare namespace tag {
    var getClientTag: (h: Headers, deleteFromCollection?: boolean) => string;
    var configure: <T extends ISharePointQueryable<any>>(o: T, name: string) => T;
    var isTagged: <T extends ISharePointQueryable<any>>(o: T) => T;
}
//# sourceMappingURL=telemetry.d.ts.map