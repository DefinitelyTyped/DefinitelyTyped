// Type definitions for phoenix_live_view 0.15
// Project: https://github.com/phoenixframework/phoenix_live_view
// Definitions by: Peter Zingg <https://github.com/pzingg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Version 0.15.4 added options and interfaces for LiveView uploads
// See: https://hexdocs.pm/phoenix_live_view/uploads.html

import { Socket, SocketConnectOption } from 'phoenix';

export interface Defaults {
  debounce?: number;
  throttle?: number;
}

// From morphdom
export interface DomOptions {
  getNodeKey?: (node: Node) => any;
  onBeforeNodeAdded?: (node: Node) => Node;
  onNodeAdded?: (node: Node) => Node;
  onBeforeElUpdated?: (fromEl: HTMLElement, toEl: HTMLElement) => boolean;
  onElUpdated?: (el: HTMLElement) => void;
  onBeforeNodeDiscarded?: (node: Node) => boolean;
  onNodeDiscarded?: (node: Node) => void;
  onBeforeElChildrenUpdated?: (fromEl: HTMLElement, toEl: HTMLElement) => boolean;
  childrenOnly?: boolean;
}

export type ViewLogger = (view: View, kind: string, msg: any, obj: any) => void;

export interface SocketOptions {
  bindingPrefix?: string;
  defaults?: Defaults;
  dom?: DomOptions;
  hooks?: object;
  loaderTimeout?: number;
  params?: object;
  uploaders?: object;
  viewLogger?: ViewLogger;
}

export type BindCallback = (e: Event, event: string, view: View, el: HTMLElement, targetCtx: object, phxEvent: string, windowOwner?: string) => void;

export class LiveSocket {
  // phxSocket should be the Socket class (LiveSocket will use the constructor)
  constructor(url: string, phxSocket: any, opts: SocketOptions);

  // public
  connect(): void;
  disableDebug(): void;
  disableLatencySim(): void;
  disableProfiling(): void;
  disconnect(callback: any): void;
  enableDebug(): void;
  enableLatencySim(upperBoundMs: number): void;
  enableProfiling(): void;
  getLatencySim(): number | null;
  getSocket(): Socket;
  isDebugEnabled(): boolean;
  isProfileEnabled(): boolean;

  // private
  // bind(events: string[], callback: BindCallback): void;
  // bindClick(eventName: string, bindingName: string, capture: boolean): void;
  // bindClicks(): void;
  // bindForms(): void;
  // binding(kind: string): string;
  // bindNav(): void;
  // bindTopLevelEvents(): void;
  // blurActiveElement(): void;
  // channel(topic: string, params: any): Channel;
  // commitPendingLink(linkRef: number): boolean;
  // debounce(el: HTMLElement, event: Event, callback: any): void;
  // destroyAllViews(): void;
  // destroyViewByEl(el: HTMLElement): void;
  // dropActiveElement(view: View): void;
  // eventMeta(eventName: string, e: Event, targetEl: HTMLElement): object;
  // getActiveElement(): Element;
  // getBindingPrefix(): string;
  // getHookCallbacks(hookName: string): any;
  // getHref(): string;
  // getRootById(id: string): any;
  // getViewByEl(el: HTMLElement): any;
  // hasPendingLink(): boolean;
  // historyPatch(href: string, linkState: string): void;
  // historyRedirect(href: string, linkState: string, flash: string): void;
  // isConnected(): boolean;
  // isPhxView(el: HTMLElement): boolean;
  // isUnloaded(): boolean;
  // joinRootView(el: HTMLElement, href: string, flash: string, callback: (view: View, joinCount: number) => void): View;
  // joinRootViews(): boolean;
  // log(view: View, kind: string, msgCallback: () => [any, any]): void;
  // on(event: string, callback: (e: Event) => void): void;
  // onChannel(channel: Channel, event: string, cb: (data: any) => void): void;
  // owner(childEl: HTMLElement, callback: (view: View) => void): void;
  // pushHistoryPatch(href: string, linkState: any, targetEl: HTMLElement): void;
  // redirect(to: string, flash: string): void;
  // registerNewLocation(newLocation: Location): boolean;
  // reloadWithJitter(view: View): void;
  // replaceMain(href: string, flash: string, callback?: any, linkRef?: number): void;
  // replaceRootHistory(): void;
  // restorePreviouslyActiveFocus(): void;
  // setActiveElement(target: Element): void;
  // setPendingLink(href: string): number;
  // silenceEvents(callback: () => void): void;
  // time(name: string, func: () => any): any;
  // triggerDOM(kind: string, args: any): void;
  // withinOwners(childEl: HTMLElement, callback: (view: View, el: HTMLElement) => void): void;
  // withPageLoading(info: Event, callback: any): any;
  // wrapPush(view: View, opts: any, push: () => any): any;
}

export class Rendered {
  constructor(viewId: string, rendered: any);

  // public
  componentCIDs(diff: any): number[];
  componentToString(cid: number): string;
  doRecursiveMerge(target: any, source: any): void;
  getComponent(diff: any, cid: number): any;
  isComponentOnlyDiff(diff: any): boolean;
  mergeDiff(diff: any): void;
  parentViewId(): string;
  pruneCIDs(cids: number[]): any;
  recursiveMerge(target: object, source: object): void;
  recursiveToString(rendered: any, components: any, onlyCids?: number[]): string;
  toString(onlyCids?: number[]): string;

  // private
  // comprehensionToBuffer(rendered: any, output: any): void;
  // createSpan(text: string, cid: number): HTMLSpanElement;
  // dynamicToBuffer(rendered: any, output: any): void;
  // get(): any;
  // isNewFingerprint(diff: object): boolean;
  // recursiveCIDToString(components: any, cid: string, onlyCids?: number[]): any;
  // toOutputBuffer(rendered: any, output: object): any;
}

export interface ViewHook {
  el: HTMLElement;
  viewName: string;
  pushEvent(event: string, payload: object, onReply?: (reply: any, ref: number) => any): void;
  pushEventTo(selectorOrTarget: any, event: string, payload: object, onReply?: (reply: any, ref: number) => any): void;
  handleEvent(event: string, callback: (payload: object) => void): void;

  // callbacks
  mounted?: () => void;
  beforeUpdate?: () => void;
  updated?: () => void;
  beforeDestroy?: () => void;
  destroyed?: () => void;
  disconnected?: () => void;
  reconnected?: () => void;
}

export class View {
  constructor(el: HTMLElement, liveSocket: LiveSocket, parentView: View, href: string, flash: string);

  // public?
  ackJoin(child: View): void;
  addHook(el: HTMLElement): void;
  applyDiff(type: string, rawDiff: any, callback: any): any;
  applyJoinPatch(live_patch: any, html: string, events: Array<[string, object]>): void;
  applyPendingUpdates(): void;
  attachTrueDocEl(): void;
  bindChannel(): void;
  binding(kind: string): any;
  cancelSubmit(formEl: HTMLElement): void;
  closestComponentID(targetCtx: object | null): number | null;
  componentID(el: HTMLElement): number | null;
  componentPatch(diff: any, cid: number): boolean;
  connectParams(): object;
  destroy(callback?: () => void): void;
  destroyAllChildren(): void;
  destroyDescendent(id: string): any;
  destroyHook(hook: ViewHook): void;
  dispatchEvents(events: Array<[string, object]>): void;
  displayError(): void;
  dropPendingRefs(): void;
  expandURL(to: string): string;
  extractMeta(el: HTMLElement, meta: object): object;
  formsForRecovery(html: string): HTMLElement[];
  getChildById(id: string): any;
  getDescendentByEl(el: HTMLElement): any;
  getHook(el: HTMLElement): ViewHook;
  getScheduledSubmit(formEl: HTMLElement): any;
  getSession(): any;
  getStatic(): string | null;
  hideLoader(): void;
  isConnected(): boolean;
  isDestroyed(): boolean;
  isJoinPending(): boolean;
  isLoading(): boolean;
  isMain(): boolean;
  join(callback: any): void;
  joinChild(el: HTMLElement): any;
  joinNewChildren(): void;
  log(kind: string, msgCallback: any): void;
  maybePushComponentsDestroyed(destroyedCIDs: number[]): any;
  name(): string;
  onAllChildJoinsComplete(): void;
  onChannel(event: string, cb: (resp: any) => void): void;
  onClose(reason: string): void;
  onError(reason: string): void;
  onJoin(resp: object): void;
  onJoinComplete(resp: object, html: string, events: Array<[string, object]>): void;
  onJoinError(resp: object): void;
  onLivePatch(redir: object): void;
  onLiveRedirect(redir: object): void;
  onRedirect(redir: object): void;
  ownsElement(el: HTMLElement): boolean;
  performPatch(patch: any, pruneCids: boolean): boolean;
  pushEvent(type: string, el: HTMLElement, targetCtx: object | null, phxEvent: string, meta: object): void;
  pushFileProgress(fileEl: HTMLElement, entryRef: string, progress: number, onReply?: () => void): void;
  pushFormRecovery(form: HTMLElement, callback: any): void;
  pushFormSubmit(formEl: HTMLElement, targetCtx: object | null, phxEvent: string, onReply: any): void;
  pushHookEvent(targetCtx: object | null, event: string, payload: object, onReply: any): void;
  pushInput(inputEl: HTMLElement, targetCtx: object | null, phxEvent: string, callback: any): void;
  pushKey(keyElement: HTMLElement, targetCtx: object | null, kind: string, phxEvent: string, meta: object): void;
  pushLinkPatch(href: string, targetEl: HTMLElement, callback: any): void;
  pushWithReply(refGenerator: any, event: string, payload: object, onReply?: () => void): any;
  putRef(elements: HTMLElement[], event: string): [number, HTMLElement[]];
  renderContainer(diff: any, kind: string): string;
  scheduleSubmit(formEl: HTMLElement, ref: number, callback: any): boolean;
  setContainerClasses(...classes: string[]): void;
  showLoader(timeout?: number): void;
  submitForm(form: HTMLElement, targetCtx: object | null, phxEvent: string): void;
  targetComponentID(target: HTMLElement, targetCtx?: object): number | null;
  triggerAwaitingSubmit(formEl: HTMLElement): void;
  triggerBeforeUpdateHook(fromEl: HTMLElement, toEl: HTMLElement): any;
  triggerReconnected(): void;
  undoRefs(ref: number): void;
  update(diff: any, events: Array<[string, object]>): void;
  uploadFiles(formEl: HTMLElement, targetCtx: object | null, ref: number, cid: number, onComplete: any): void;
  withinTargets(phxTarget: string, callback: any): void;
}

export interface LiveViewFile extends File {
  _phxRef?: string;
}

export class UploadEntry {
  constructor(fileEl: HTMLInputElement, file: LiveViewFile, view: View);

  fileEl: HTMLInputElement;
  file: LiveViewFile;
  view: View;
  meta: object | null;
  metadata: () => object | null;
  progress: (progress: number) => void;
  cancel: () => void;
  isDone: () => boolean;
  error: (reason: string) => void;
}

export interface LiveViewUploaderMeta {
  path: string;
  ref: string;
  name: string;
  type: string;
  size: number;
  last_modified?: number;
}

export function debug(view: View, kind: string, msg: object, obj: object): void;

export namespace Browser {
  function canPushState(): boolean;
  function dropLocal(namespace: string, subkey: string): any;
  function fetchPage(href: string, callback: (status: number, resp?: string) => any): any;
  function getCookie(name: string): string;
  function getHashTargetEl(maybeHash: any): HTMLElement | null;
  function getLocal(namespace: string, subkey: string): any;
  function localKey(namespace: string, subkey: string): string;
  function pushState(kind: string, meta: object, to: string): void;
  function redirect(toURL: string, flash: string): void;
  function setCookie(name: string, value: string): void;
  function updateCurrentState(callback: any): void;
  function updateLocal(namespace: string, subkey: string, initial: any, func: (current: any) => any): any;
}

export namespace DOM {
  function all(node: Node, query: string, callback: (el: HTMLElement) => HTMLElement): HTMLElement[];
  function byId(id: string): HTMLElement | void;
  function childNodeLength(html: string): number;
  function cleanChildNodes(container: Node, phxUpdate: string): void;
  function cloneNode(node: Node, html: string): Node;
  function copyPrivates(target: HTMLElement, source: HTMLElement): void;
  function debounce(el: HTMLElement, event: Event, phxDebounce: string, defaultDebounce: string | null, phxThrottle: string, defaultThrottle: string | null, callback: () => any): any;
  function deletePrivate(el: HTMLElement, key: string): void;
  function discardError(container: Node, el: HTMLElement, phxFeedbackFor: string): void;
  function dispatchEvent(target: Node, eventString: string, detail?: object): void;
  function filterWithinSameLiveView(nodes: Node[], parent: any): any;
  function findComponentNode(node: Node, cid: number): HTMLElement[];
  function findParentCIDs(node: Node, cids: number[]): Set<number>;
  function findPhxChildren(el: HTMLElement, parentId: string): HTMLElement[];
  function findPhxChildrenInFragment(html: string, parentId: string): HTMLElement[];
  function findUploadInputs(node: Node): void | any[];
  function hasSelectionRange(el: HTMLElement): boolean;
  function incCycle(el: HTMLElement, key: string, trigger?: any): number;
  function isFormInput(el: HTMLElement): boolean;
  function isIgnored(el: HTMLElement, phxUpdate: string): boolean;
  function isNowTriggerFormExternal(el: HTMLElement, phxTriggerExternal: string): boolean;
  function isPhxChild(el: Node): boolean;
  function isPhxDestroyed(node: Node): boolean;
  function isPhxUpdate(el: Node, phxUpdate: string, updateTypes: string[]): boolean;
  function isTextualInput(el: HTMLElement): boolean;
  function isUploadInput(el: HTMLElement): boolean;
  function markPhxChildDestroyed(el: HTMLElement): void;
  function mergeAttrs(target: HTMLElement, source: HTMLElement, exclude?: string[]): void;
  function mergeFocusedInput(target: HTMLElement, source: HTMLElement): void;
  function once(el: HTMLElement, key: string): boolean;
  function private(el: HTMLElement, key: string): any;
  function putPrivate(el: HTMLElement, key: string, value: any): void;
  function putTitle(str: string): void;
  function removeClass(el: HTMLElement, className: string): void;
  function restoreFocus(focused: HTMLElement, selectionStart: number, selectionEnd: number): void;
  function showError(inputEl: HTMLElement, phxFeedbackFor: string): void;
  function syncAttrsToProps(el: HTMLElement): void;
  function syncPendingRef(fromEl: HTMLElement, toEl: HTMLElement, disableWith: string): boolean;
  function triggerCycle(el: HTMLElement, key: string, currentCycle?: number): void;
  function withinSameLiveView(node: Node, parent: Node): boolean;
}
