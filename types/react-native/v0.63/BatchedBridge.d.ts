interface SpyData {
    type: number;
    module?: string;
    method: string | number;
    args: any[];
}

declare class MessageQueue {
    static spy(spyOrToggle: boolean | ((data: SpyData) => void)): void;

    getCallableModule(name: string): Object;
    registerCallableModule(name: string, module: Object): void;
    registerLazyCallableModule(name: string, factory: () => Object): void;
}

declare module "react-native/Libraries/BatchedBridge/BatchedBridge" {
    const BatchedBridge: MessageQueue;
    export default BatchedBridge;
}

declare module "react-native/Libraries/BatchedBridge/MessageQueue" {
    export default MessageQueue;
}
