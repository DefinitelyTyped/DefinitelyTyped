export = MessageBuffer;
declare function MessageBuffer(): void;
declare class MessageBuffer {
    messages_: Array<{
        targetId: string;
        message: any;
    }>;
    retrieve(): Array<{
        targetId: string;
        message: any;
    }>;
    add(targetId: string, message: any): void;
}
