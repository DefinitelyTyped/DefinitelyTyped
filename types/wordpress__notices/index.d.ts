import { StoreDescriptor } from "@wordpress/data";
import { MouseEventHandler } from "react";

declare module "@wordpress/data" {
    function dispatch(key: "core/notices"): typeof import("./store/actions");
    function select(key: "core/notices"): typeof import("./store/selectors");
}

export type Status = "error" | "info" | "success" | "warning";
export type NoticeType = "snackbar" | "default";

export interface Notice {
    /**
     * Unique identifier of notice.
     */
    id: string;
    /**
     * Status of notice, one of `success`, `info`, `error`, or `warning`. Defaults to `info`.
     */
    status: Status;
    /**
     * Notice message.
     */
    content: string;
    /**
     * Audibly announced message text used by assistive technologies.
     */
    spokenMessage: string;
    /**
     * Notice message as raw HTML. Intended to serve primarily for compatibility of server-rendered notices, and SHOULD
     * NOT be used for notices. It is subject to removal without notice.
     */
    __unstableHTML: string;
    /**
     * Whether the notice can be dismissed by user. Defaults to `true`
     */
    isDismissible: boolean;
    /**
     * Type of notice, one of `default`, or `snackbar`. Defaults to `default`.
     * @defaultValue `'global'`
     */
    type: NoticeType;
    /**
     * Whether the notice content should be announced to screen readers. Defaults to `true`.
     */
    speak: boolean;
    /**
     * User actions to present with notice.
     */
    actions: readonly Action[];
}

export interface BaseAction {
    label: string;
}
export interface ButtonAction extends BaseAction {
    onClick: MouseEventHandler<HTMLButtonElement>;
}
export interface URLAction extends BaseAction {
    url: string;
}

export type Action = ButtonAction | URLAction;

export interface Options {
    /**
     * User actions to be presented with notice.
     */
    actions: readonly Action[];
    /**
     * Context under which to group notice.
     * @defaultValue `'global'`
     */
    context: string;
    /**
     * Identifier for notice. Automatically assigned if not specified.
     */
    id: string;
    /**
     * Whether the notice can be dismissed by user.
     * @defaultValue `true`
     */
    isDismissible: boolean;
    /**
     * Whether the notice content should be announced to screen readers.
     * @defaultValue `true`
     */
    speak: boolean;
    /**
     * The type of notice.
     * @defaultValue `'default'`
     */
    type: NoticeType;
    /**
     *  An icon displayed with the notice.
     * @defaultValue `null`
     */
    icon: null | JSX.Element;
    /**
     * Whether the notice includes
     * an explict dismiss button and
     * can't be dismissed by clicking
     * the body of the notice.
     * @defaultValue `false`
     */
    explicitDismiss: boolean;
    /**
     *  Called when the notice is dismissed.
     */
    onDismiss(): void;
}

export interface NoticesStoreDescriptor extends StoreDescriptor {
    name: "core/notices";
}

// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "@wordpress/notices" {
    const store: NoticesStoreDescriptor;
}
