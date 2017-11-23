// Type definitions for Notifier
// Project: https://github.com/allipierre/Type-definitions-for-jquery-confirm/tree/master/types/confirmDialog-js
// Definitions by: Alli Pierre Yotti <https://github.com/allipierre>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace notifier {
    /**
     * notifier.show(title, msg, type, icon, timeout);
     * @param {title} title
     * @param {msg} msg
     * @param {type} type
     * @param {icon} icon
     * @param {timeout} timeout
     */
    function show(title: string, msg: string, type: string, icon: string, timeout?: number): string | number;
    function hide(notificationId: string | number): boolean;

}
