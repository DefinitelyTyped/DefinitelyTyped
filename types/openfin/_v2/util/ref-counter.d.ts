export default class RefCoutner {
    topicRefMap: Map<any, any>;
    incRefCount(key: string): number;
    decRefCount(key: string): number;
    actOnFirst(key: string, firstAction: () => any, nonFirstAction?: () => void): any;
    actOnLast(key: string, lastAction: () => any, nonLastAction?: () => void): any;
}
