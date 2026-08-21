import Rendered from "./rendered";

export function prependFormDataKey(key: any, prefix: any): any;
export default class View {
    static closestView(el: any): any;
    constructor(el: any, liveSocket: any, parentView: any, flash: any, liveReferer: any);
    isDead: boolean;
    liveSocket: any;
    flash: any;
    parent: any;
    root: any;
    el: any;
    id: any;
    ref: number;
    lastAckRef: any;
    childJoins: number;
    loaderTimer: number | null;
    pendingDiffs: any[];
    pendingForms: Set<any>;
    redirect: boolean;
    href: any;
    joinCount: number;
    joinAttempts: number;
    joinPending: boolean;
    destroyed: boolean;
    joinCallback: (onDone: any) => void;
    stopCallback: () => void;
    pendingJoinOps: never[] | null;
    viewHooks: {};
    formSubmits: any[];
    children: {} | null;
    formsForRecovery: {};
    channel: any;
    setHref(href: any): void;
    setRedirect(href: any): void;
    isMain(): any;
    connectParams(liveReferer: any): any;
    isConnected(): any;
    getSession(): any;
    getStatic(): any;
    destroy(callback?: () => void): void;
    setContainerClasses(...classes: any[]): void;
    showLoader(timeout: any): void;
    execAll(binding: any): void;
    hideLoader(): void;
    triggerReconnected(): void;
    log(kind: any, msgCallback: any): void;
    transition(time: any, onStart: any, onDone?: () => void): void;
    withinTargets(phxTarget: any, callback: any, dom: Document | undefined, viewEl: any): any;
    applyDiff(type: any, rawDiff: any, callback: any): void;
    onJoin(resp: any): void;
    rendered: Rendered | undefined;
    dropPendingRefs(): void;
    onJoinComplete(
        { live_patch }: {
            live_patch: any;
        },
        html: any,
        streams: any,
        events: any,
    ): void;
    attachTrueDocEl(): void;
    execNewMounted(parent?: any): void;
    applyJoinPatch(live_patch: any, html: any, streams: any, events: any): void;
    triggerBeforeUpdateHook(fromEl: any, toEl: any): any;
    maybeMounted(el: any): void;
    maybeAddNewHook(el: any): void;
    performPatch(patch: any, pruneCids: any, isJoinPatch?: boolean): boolean;
    afterElementsRemoved(elements: any, pruneCids: any): void;
    joinNewChildren(): void;
    maybeRecoverForms(html: any, callback: any): any;
    getChildById(id: any): any;
    getDescendentByEl(el: any): any;
    destroyDescendent(id: any): any;
    joinChild(el: any): true | undefined;
    isJoinPending(): boolean;
    ackJoin(_child: any): void;
    onAllChildJoinsComplete(): void;
    update(diff: any, events: any): number | undefined;
    renderContainer(diff: any, kind: any): any;
    componentPatch(diff: any, cid: any): boolean;
    getHook(el: any): any;
    addHook(el: any): any;
    destroyHook(hook: any): void;
    applyPendingUpdates(): void;
    eachChild(callback: any): void;
    onChannel(event: any, cb: any): void;
    bindChannel(): void;
    destroyAllChildren(): void;
    onLiveRedirect(redir: any): void;
    onLivePatch(redir: any): void;
    expandURL(to: any): any;
    onRedirect({ to, flash, reloadToken }: {
        to: any;
        flash: any;
        reloadToken: any;
    }): void;
    isDestroyed(): boolean;
    joinDead(): void;
    joinPush(): () => /*elided*/ any;
    join(callback: any): void;
    onJoinError(resp: any): void;
    onClose(reason: any): any;
    onError(reason: any): void;
    displayError(classes: any): void;
    wrapPush(callerPush: any, receives: any): void;
    pushWithReply(refGenerator: any, event: any, payload: any): Promise<any>;
    undoRefs(ref: any, phxEvent: any, onlyEls: any): void;
    undoElRef(el: any, ref: any, phxEvent: any): void;
    refSrc(): any;
    putRef(elements: any, phxEvent: any, eventType: any, opts?: {}): any[];
    isAcked(ref: any): boolean;
    componentID(el: any): number | null;
    targetComponentID(target: any, targetCtx: any, opts?: {}): any;
    closestComponentID(targetCtx: any): any;
    pushHookEvent(el: any, targetCtx: any, event: any, payload: any, onReply: any): any;
    extractMeta(el: any, meta: any, value: any): any;
    pushEvent(type: any, el: any, targetCtx: any, phxEvent: any, meta: any, opts: {} | undefined, onReply: any): void;
    pushFileProgress(fileEl: any, entryRef: any, progress: any, onReply?: () => void): void;
    pushInput(inputEl: any, targetCtx: any, forceCid: any, phxEvent: any, opts: any, callback: any): void;
    triggerAwaitingSubmit(formEl: any, phxEvent: any): void;
    getScheduledSubmit(formEl: any): any;
    scheduleSubmit(formEl: any, ref: any, opts: any, callback: any): true | undefined;
    cancelSubmit(formEl: any, phxEvent: any): void;
    disableForm(formEl: any, phxEvent: any, opts?: {}): any[];
    pushFormSubmit(
        formEl: any,
        targetCtx: any,
        phxEvent: any,
        submitter: any,
        opts: any,
        onReply: any,
    ): true | undefined;
    uploadFiles(formEl: any, phxEvent: any, targetCtx: any, ref: any, cid: any, onComplete: any): void;
    handleFailedEntryPreflight(uploadRef: any, reason: any, uploader: any): void;
    dispatchUploads(targetCtx: any, name: any, filesOrBlobs: any): void;
    targetCtxElement(targetCtx: any): any;
    pushFormRecovery(oldForm: any, newForm: any, templateDom: any, callback: any): void;
    pushLinkPatch(e: any, href: any, targetEl: any, callback: any): void;
    getFormsForRecovery(): any;
    maybePushComponentsDestroyed(destroyedCIDs: any): void;
    ownsElement(el: any): any;
    submitForm(form: any, targetCtx: any, phxEvent: any, submitter: any, opts?: {}): void;
    binding(kind: any): any;
}
