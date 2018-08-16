import { Callback } from './connection';
import { Record } from './record';

export class QuickAction {
    /**
     * Retrieve default field values in the action for the given record
     * @param contextId Id of record
     * @param callback Callback function
     */
    defaultValues(contextId: string, callback?: Callback<Record>): Promise<Record>;
    /** Retrieve default field values in the action */
    defaultValues(callback?: Callback<Record>): Promise<Record>;
    /**
     * Describe the action's information (including layout, etc.)
     * @param callback Callback function
     */
    describe(callback?: Callback<QuickActionDescribeInfo>): Promise<QuickActionDescribeInfo>;
    /**
     * Execute the action for given context id and record information
     * @param contextId Context record ID of the action
     * @param record Input record information for the action
     * @param callback Callback function
     */
    execute<T>(contextId: string, record: Record<T>, callback?: Callback<QuickActionResult>): Promise<QuickActionResult>;
}

// TODO: figure out the actual shape of this. the docs don't have it
export type QuickActionResult = object;

export interface QuickActionInfo {
    /** Type of the action (e.g. Create, Update, Post, LogACall) */
    type: string;
    /** Name of the action */
    name: string;
    /** Label of the action */
    label: string;
    /** Endpoint URL information of the action */
    urls: object;
}

export interface QuickActionDescribeInfo {
    /** Object type used for the action */
    contextSobjectType: string;
    /** Object type of the action to target */
    targetSobjectType: string;
    /** Field name in the target object which refers parent(context) object record ID */
    targetParentField: string;
    /** Record type of the targeted record */
    targetRecordTypeId: string;
    /** Layout sections that comprise an action */
    layout: object;
}
