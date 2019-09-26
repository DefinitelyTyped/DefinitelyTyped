import { ChannelBase, ProviderIdentity } from './channel';
import Transport from '../../../transport/transport';
export declare class ChannelClient extends ChannelBase {
    constructor(providerIdentity: ProviderIdentity, send: Transport['sendAction']);
    dispatch(action: string, payload?: any): Promise<any>;
}
