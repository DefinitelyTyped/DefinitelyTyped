class ZChatImpl implements ZChat {
    addTags(tags: string[], callback?: (err: Error) => void): void {
    }

    clearVisitorDefaultDepartment(callback?: (err: Error) => void): void {
    }

    getAccountStatus(): "online" | "offline" | "away" {
        return "online";
    }

    getAllDepartments(): Department[] {
        return [];
    }

    getChatInfo(): { rating?: string; comment?: string } {
        return {};
    }

    getChatLog(): ChatEvent.ChatEventData[] {
        return [];
    }

    getConnectionStatus(): "connected" | "connecting" | "closed" {
        return "connected";
    }

    getDepartment(id: number): Department {
        return {
            id: 0,
            name: 'fake_name',
            status: 'online',
        };
    }

    getQueuePosition(): number {
        return 0;
    }

    getVisitorDefaultDepartment(id?: number): Department {
        return {
            id: 0,
            name: 'fake_name',
            status: 'online',
        };
    }

    getVisitorInfo(): VisitorInfo {
        return {
            display_name: 'fake_name',
            email: 'fake_email',
            phone: 'fake_phone000',
        };
    }

    init(initProps: InitProps): void {
    }

    isChatting(): boolean {
        return false;
    }

    removeTags(tags: string[], callback?: (err: Error) => void): void {
    }

    sendChatComment(comment: string, callback?: (err: Error) => void): void {
    }

    sendChatMsg(msg: string, callback?: (err: Error) => void): void {
    }

    sendChatRating(rating: "good" | "bad" | undefined, callback?: (err: Error) => void): void {
    }

    sendFile(file: File, callback?: (err: SendFileErrorMessage, data: { mime_type: string; name: string; size: number; url: string }) => void): void {
    }

    sendOfflineMsg(options: { name: string; email: string; phone?: string; message: string; department?: number }, callback: (err: Error) => void): void {
    }

    sendTyping(is_typing: boolean): void {
    }

    sendVisitorPath(options: { title: string; url: string }, callback?: (err: Error) => void): void {
    }

    setVisitorDefaultDepartment(id: number, callback?: (err: Error) => void): void {
    }

    setVisitorInfo(options: Partial<VisitorInfo>, callback?: (err: Error) => void): void {
    }

    on(event_name: EventName, handler: (event_data?: EventData) => void): void {
    }

    un(event_name: EventName, handler: (event_data?: EventData) => void): void {
    }
}

const fakeCallback = (err: Error) => 0;
const fakeFile = new File(['foo'], 'foo.txt', {
    type: 'text/plain',
});
const zChat = new ZChatImpl();

zChat.addTags(['tag1', 'tag2']);
zChat.clearVisitorDefaultDepartment(fakeCallback);
zChat.getAccountStatus();
zChat.getAllDepartments();
zChat.getChatInfo();
zChat.getChatLog();
zChat.getConnectionStatus();
zChat.getDepartment(1);
zChat.getQueuePosition();
zChat.getVisitorDefaultDepartment();
zChat.getVisitorInfo();
zChat.init({account_key: 'fake_account_key'});
zChat.isChatting();
zChat.removeTags(['tag1', 'tag2']);
zChat.sendChatComment('fake_comment', fakeCallback);
zChat.sendChatMsg('fake_message', fakeCallback);
zChat.sendChatRating('good', fakeCallback);
zChat.sendFile(fakeFile,
    (err: SendFileErrorMessage, data: { mime_type: string; name: string; size: number; url: string }) => 0);
zChat.sendOfflineMsg({name: 'fake_name', email: 'fake_email', message: 'fake_message'}, fakeCallback);
zChat.sendTyping(true);
zChat.sendVisitorPath({title: 'fake_title', url: 'fake_url'}, fakeCallback);
zChat.setVisitorDefaultDepartment(1, fakeCallback);
zChat.setVisitorInfo({
    display_name: 'fake_name',
    email: 'fake_email',
    phone: 'fake_phone',
});
const fakeHandler = (event_data?: EventData) => 0;
zChat.on("account_status", fakeHandler);
zChat.un("account_status", fakeHandler);
