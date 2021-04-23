export interface DraymanComponent<EventHubExtend = void, DataExtend = void> {
    (
        data: {
            forceUpdate: () => Promise<void>,
            EventHub: {
                on(name: string, fn: (message: any) => Promise<any>, groupId?: string): void;
            } & EventHubExtend,
        } & DataExtend,
    ): any;
}
