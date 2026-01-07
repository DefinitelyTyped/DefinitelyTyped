import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CopyrightOwnershipTransfer
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CopyrightOwnershipTransfer extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        receiving_rights_holder: "receiving_rights_holder";
        sending_rights_holder: "sending_rights_holder";
        status: "status";
        transfer_territories: "transfer_territories";
        transfer_time: "transfer_time";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<CopyrightOwnershipTransfer>;
}
