import { FrameEvent } from './frame';
export declare type RuntimeEvent<Topic = string, Type = string> = Topic extends 'window' | 'view' ? WindowEvent<Topic, Type> : Topic extends 'frame' ? FrameEvent<Type> : Topic extends 'application' ? ApplicationEvent<Topic, Type> : Topic extends 'external-window' ? ApplicationEvent<Topic, Type> : BaseEvent<Topic, Type>;
export interface BaseEvent<Topic, Type> {
    topic: Topic;
    type: Type;
}
export interface ApplicationEvent<Topic, Type> extends BaseEvent<Topic, Type> {
    uuid: string;
}
export interface WindowEvent<Topic, Type> extends ApplicationEvent<Topic, Type> {
    name: string;
}
export declare function getTopic(e: RuntimeEvent<any>): string;
export interface BaseEventMap {
    [name: string]: any;
    newListener: string;
    listenerRemoved: string;
}
