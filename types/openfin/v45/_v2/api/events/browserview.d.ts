import { WebContentsEventMapping } from './webcontents';
import { WindowEvent } from './base';
export interface ViewEventMapping<Topic = string, Type = string> extends WebContentsEventMapping {
    'attached': WindowEvent<Topic, Type>;
    'created': WindowEvent<Topic, Type>;
    'destroyed': WindowEvent<Topic, Type>;
    'hidden': WindowEvent<Topic, Type>;
    'shown': WindowEvent<Topic, Type>;
}
export declare type ViewEvents = {
    [Type in keyof ViewEventMapping]: ViewEventMapping<'view', Type>[Type];
};
