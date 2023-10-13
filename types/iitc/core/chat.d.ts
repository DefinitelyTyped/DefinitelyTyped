import { Intel } from "./inteltypes";

export {};

declare global {
    type ChatChannels = "all" | "faction" | "alerts";

    class Chat {
        /** @return name of active tab */
        getActive(): string;

        /** Expand or collapse chat window */
        toggle(): void;

        handleTabCompletion(): void;

        genPostData(channel: ChatChannels, storageHash: chatStorage, getOlderMsgs: boolean): any;

        // faction
        _faction: chatStorage;
        _requestFactionRunning: boolean;
        requestFaction(getOlderMsgs: boolean, isRetry: boolean): void;
        handleFaction(data: any, olderMsgs: boolean): void;
        renderFaction(oldMsgsWereAdded: boolean): void;

        // all
        _public: chatStorage;
        _requestPublicRunning: boolean;
        requestPublic(getOlderMsgs: boolean, isRetry: boolean): void;
        handlePublic(data: any, olderMsgs: boolean): void;
        renderPublic(oldMsgsWereAdded: boolean): void;

        // alerts
        _alerts: chatStorage;
        _requestAlertsRunning: boolean;
        requestAlerts(getOlderMsgs: boolean, isRetry: boolean): void;
        handleAlerts(data: any, olderMsgs: boolean): void;
        renderAlerts(oldMsgsWereAdded: boolean): void;

        /** if user clicked a agent name */
        nicknameClicked(event: MouseEvent, nickname: string): void;

        /** store incoming data */
        writeDataToHash(newData: any, storageHash: chatStorage, isPublicChannel: boolean, isOlderMsgs: boolean): void;

        /** Override portal names that are used over and over, such as 'US Post Office' */
        getChatPortalName(markup: Intel.MarkUpPortalType): string;

        /**
         * renders data from the data-hash to the element defined by the given
         * ID. Set 3rd argument to true if it is likely that old data has been
         * added. Latter is only required for scrolling.
         */
        renderData(data: any, element: "chatfaction" | "chatall" | "chatalerts", likelyWereOldMsgs: boolean): void;

        renderDivider(text: string): string;

        renderMsg(
            msg: string,
            nick: string,
            time: number,
            team: 0 | 1 | 2,
            msgToPlayer: boolean,
            systemNarrowcast: boolean,
        ): string;

        /** add nickname to chat-input line */
        addNickname(nick: string): void;

        tabToChannel(tab: ChatChannels | string): ChatChannels;

        /**
         * called by plugins (or other things?) that need to monitor COMM data streams when the user is not viewing them
         * instance: a unique string identifying the plugin requesting background COMM
         * channel: either 'all', 'faction' or (soon) 'alerts' - others possible in the future
         * flag: true for data wanted, false for not wanted
         */
        backgroundChannelData(instance: string, channel: ChatChannels, flag: boolean): void;

        backgroundInstanceChannel: {}; // [instance][channel] = flag;

        request(): void;

        /**
         * checks if there are enough messages in the selected chat tab and
         * loads more if not.
         */
        needMoreMessages(): void;

        /** activate a chat tab  */
        show(tab: ChatChannels): void;

        chooseTab(tab: ChatChannels): void;

        /** mouse event handler */
        chooser(event: MouseEvent): void;

        /** contains the logic to keep the correct scroll position. */
        keepScrollPosition(box: JQuery, scrollBefore: number, isOldMsgs: boolean): void;

        /** init */
        setup(): void;
        setupTime(): void;
        setupPosting(): void;

        /** send current message of current chat to server */
        postMsg(): void;
    }

    interface chatStorage {
        data: {};
        oldestTimestamp: number;
        newestTimestamp: number;
    }

    var chat: Chat;
}
