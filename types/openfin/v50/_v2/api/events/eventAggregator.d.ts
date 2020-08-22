import { Message } from '../../transport/transport';
import { EmitterMap } from './emitterMap';
export declare class EventAggregator extends EmitterMap {
    dispatchEvent: (message: Message<any>) => boolean;
}
