import { Base, EmitterBase } from '../base';
import { Identity } from '../../identity';
import Transport from '../../transport/transport';
import { ExternalApplicationEvents } from '../events/externalApplication';
export interface ExternalApplicationInfo {
    parent: Identity;
}
/**
 * @lends ExternalApplication
 */
export default class ExternalApplicationModule extends Base {
    /**
     * Asynchronously returns an External Application object that represents an existing external application.
     * @param {string} uuid The UUID of the external application to be wrapped
     * @return {Promise.<ExternalApplication>}
     * @tutorial ExternalApplication.wrap
     * @static
     */
    wrap(uuid: string): Promise<ExternalApplication>;
    /**
     * Synchronously returns an External Application object that represents an existing external application.
     * @param {string} uuid The UUID of the external application to be wrapped
     * @return {ExternalApplication}
     * @tutorial ExternalApplication.wrapSync
     * @static
     */
    wrapSync(uuid: string): ExternalApplication;
}
/**
 * @classdesc An ExternalApplication object representing an application. Allows
 * the developer to create, execute, show and close an external application as
 * well as listen to application events.
 * @class
 */
export declare class ExternalApplication extends EmitterBase<ExternalApplicationEvents> {
    identity: Identity;
    constructor(wire: Transport, identity: Identity);
    /**
     * Retrieves information about the external application.
     * @return {Promise.<ExternalApplicationInfo>}
     * @tutorial ExternalApplication.getInfo
     */
    getInfo(): Promise<ExternalApplicationInfo>;
}
