export = MessageBuffer;
declare function MessageBuffer(): void;
declare class MessageBuffer {
    private messages_;
    retrieve(): Array<{
        targetId: string;
        message: any;
    }>;
    add(targetId: string, message: any): void;
}
