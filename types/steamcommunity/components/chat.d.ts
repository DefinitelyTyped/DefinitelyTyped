import { Callback, userid } from '../index';

export interface Chat {
    /**
     * @deprecated No support for new Steam chat. Use steam-user instead.
     *
     * @param interval
     * @param uiMode
     */
    chatLogon(interval: number, uiMode: string): void;

    /**
     * @deprecated No support for new Steam chat. Use steam-user instead.
     */
    chatLogoff(): void;

    /**
     * @deprecated No support for new Steam chat. Use steam-user instead.
     * @param recipient
     * @param text
     * @param [type]
     * @param [callback]
     */
    chatMessage(recipient: userid, text: string, type: string, callback: Callback): void;
}
