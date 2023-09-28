import { SalesforceId } from "./salesforce-id";

export interface SObjectOptions {
    Id?: SalesforceId | undefined;
    Name?: string | undefined;
    ExtId__c?: string | undefined;
}
