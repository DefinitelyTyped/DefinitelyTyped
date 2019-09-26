import { Base, EmitterBase, Reply } from '../base';
import { Identity } from '../../identity';
import Transport from '../../transport/transport';
export interface ExternalApplicationInfo {
    parent: Identity;
}
export default class ExternalApplicationModule extends Base {
    /**
     * Returns an External Application object that represents an existing external application.
     * @param {string} uuid The UUID of the external application to be wrapped
     * @return {Promise.<ExternalApplication>}
     */
    wrap(uuid: string): Promise<ExternalApplication>;
}
/**
 * @classdesc An ExternalApplication object representing an application. Allows
 * the developer to create, execute, show and close an external application as
 * well as listen to application events.
 * @class
 */
export declare class ExternalApplication extends EmitterBase {
    identity: Identity;
    constructor(wire: Transport, identity: Identity);
    /**
     * Retrieves information about the external application.
     * @return {Promise.<ExternalApplicationInfo>}
     * @tutorial ExternalApplication.getInfo
     */
    getInfo(): Promise<ExternalApplicationInfo>;
}
export interface ExternalApplication {
    on(type: 'connected', listener: (data: Reply<'externalapplication', 'connected'>) => void): Promise<void>;
    on(type: 'disconnected', listener: (data: Reply<'externalapplication', 'disconnected'>) => void): Promise<void>;
    on(type: 'removeListener', listener: (eventType: string) => void): Promise<void>;
    on(type: 'newListener', listener: (eventType: string) => void): Promise<void>;
}
