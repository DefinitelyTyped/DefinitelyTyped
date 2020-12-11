import { GraphQueryableCollection, GraphQueryableInstance } from "./graphqueryable";
import { Security as ISecurity, Alert as IAlert } from "@microsoft/microsoft-graph-types";
export interface ISecurityMethods {
    alerts: Alerts;
}
export declare class Security extends GraphQueryableInstance<ISecurity> implements ISecurityMethods {
    readonly alerts: Alerts;
}
export declare class Alerts extends GraphQueryableCollection<IAlert[]> {
    getById(id: string): Alert;
}
export declare class Alert extends GraphQueryableInstance<IAlert> {
    /**
    * Update the properties of an Alert
    *
    * @param properties Set of properties of this Alert to update
    */
    update(properties: IAlert): Promise<void>;
}
