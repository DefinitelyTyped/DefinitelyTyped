// Type definitions for InboxSDK
// Project: https://www.inboxsdk.com/
// Definitions by: Raphaël Doursenaud <rdoursenaud@gpcsolutions.fr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*
 * Copyright (c) 2016 GPC.solutions
 */
export function load(version: number, appId?: string, opts?: LoadOptions): Promise<InboxSDKInstance>;

export function loadScript(url: string): Promise<void>;

// // Undocummented
// var IMPL_VERSION: string;
// var LOADER_VERSION: string;
// var destroyed: boolean; //: false
// var Logger: {
//   error: () => any;
//   event: () => any;
// };

interface LoadOptions {
  appName?: string;
  appIconUrl?: string;
}

export interface InboxSDKInstance {
  Compose: Compose.Compose;
  Lists: Lists.Lists;
  Conversations: Conversations.Conversations;
  Toolbars: Toolbars.Toolbars;
  Router: Router.Router;
  NavMenu: NavMenu.NavMenu;
  Widgets: Widgets.Widgets;
  ButterBar: ButterBar.ButterBar;
  Search: Search.Search;
  User: User.User;
  Keyboard: Keyboard.Keyboard;
}

declare namespace Common {
  export interface Contact {
    name: string;
    emailAddress: string;
  }

  export interface DropdownView {
    setPlacementOptions(options: PositionOptions): void;

    close(): void;

    el: HTMLElement;
    destroyed: boolean;

    // TODO: Events
  }

  export interface PositionOptions {
    position?: string; //: null
    forcePosition?: boolean; //: false
    hAlign?: string; //: null
    forceHAlign?: boolean; //: false
    vAlign?: string; //: null
    forceVAlign?: boolean; //: false
    buffer?: number; //: 0
    topBuffer?: number; //:0
    bottomBuffer?: number; //: 0
    leftBuffer?: number; //:0
    rightBuffer?: number; //:0
  }

  export interface SimpleElementView {
    destroy(): void;

    el: HTMLElement;
    destroyed: boolean;
  }
}

declare namespace Compose {
  export interface Compose {
    registerComposeViewHandler(handler: (composeView: ComposeView) => void): Function;

    openNewComposeView(): Promise<ComposeView>;
  }

  export interface ComposeView {
    addButton(buttonDescriptor: ComposeButtonDescriptor): void;

    //addButton(buttonDescriptor: Stream<ComposeButtonDescriptor>): void;

    addStatusBar(statusBarDescriptor: StatusBarDescriptor): StatusBarView;

    close(): void;

    send(): void;

    getBodyElement(): HTMLElement;

    getInitialMessageID(): string;

    getThreadID(): string;

    getDraftID(): Promise<string>;

    getCurrentDraftID(): Promise<string>;

    getHTMLContent(): string;

    getSelectedBodyHTML(): string;

    getSelectedBodyText(): string;

    getSubject(): string;

    getTextContent(): string;

    getToRecipients(): Common.Contact[];

    getCcRecipients(): Common.Contact[];

    getBccRecipients(): Common.Contact[];

    insertTextIntoBodyAtCursor(text: string): void;

    insertHTMLIntoBodyAtCursor(html: string): HTMLElement;

    insertHTMLIntoBodyAtCursor(html: HTMLElement): HTMLElement;

    insertLinkChipIntoBodyAtCursor(text: string, url: string, iconUrl: string): HTMLElement;

    isInlineReplyForm(): boolean;

    isFullscreen(): boolean;

    setFullscreen(minimized: boolean): void;

    isMinimized(): boolean;

    setMinimized(minimized: boolean): void;

    popOut(): Promise<ComposeView>;

    isReply(): boolean;

    setToRecipients(emails: string[]): void;

    setCcRecipients(emails: string[]): void;

    setBccRecipients(emails: string[]): void;

    getFromContact(): Common.Contact;

    getFromContactChoices(): Common.Contact[];

    setFromEmail(email: string[]): void;

    setSubject(text: string): void;

    setBodyHTML(html: string): void;

    setBodyText(text: string): void;

    attachFiles(files: Blob[]): void;

    attachInlineFiles(Files: Blob[]): void;

    // TODO: Events

    // Properties
    destroyed: boolean;
  }

  interface ComposeButtonDescriptor {
    title: string;
    iconUrl?: string;  //: null
    iconClass?: string; //: null
    onClick: (event: ComposeButtonClickEvent) => void;
    hasDropdown?: boolean; //: false
    type?: string; //: 'MODIFIER' // Permitted values SEND_ACTION, MODIFIER
    orderHint?: number; //: 0
    enabled?: boolean; //: true
  }

  interface ComposeButtonClickEvent {
    composeView: ComposeView;
    dropdown: Common.DropdownView;
  }

  interface StatusBarDescriptor {
    height?: number; //:40
    orderHint?: number; //:0
  }

  interface StatusBarView {
    el: HTMLElement;
    destroyed: boolean;

    destroy(): void;

    // TODO: Events
  }
}

declare namespace Lists {
  interface Lists {
    registerThreadRowViewHandler(handler: (threadRowView: ThreadRowView) => any): void;
  }

  interface ThreadRowView {
    addLabel(labelDescriptor: LabelDescriptor): void;

    //addLabel(labelDescriptor: Stream<LabelDescriptor>): void;

    addImage(imageDescriptor: ImageDescriptor): void;

    //addImage(imageDescriptor: Stream<ImageDescriptor>): void;

    addButton(buttonDescriptor: ThreadRowButtonDescriptor): void;

    //addButton(buttonDescriptor: Stream<ThreadRowButtonDescriptor>): void;

    addActionButton(buttonDescriptor: ThreadRowActionButtonDescriptor): void;

    //addActionButton(buttonDescriptor: Stream<ThreadRowActionButtonDescriptor>): void;

    addAttachmentIcon(threadRowAttachmentIconDescriptor: ThreadRowAttachmentIconDescriptor): void

    //addAttachmentIcon(threadRowAttachmentIconDescriptor: stream<ThreadRowAttachmentIconDescriptor>): void

    replaceDate(threadRowDateDescriptor: ThreadRowDateDescriptor): void;

    //replaceDate(threadRowDateDescriptor: Stream<ThreadRowDateDescriptor>): void;

    replaceDraftLabel(draftLabelDescriptor: ThreadRowDraftLabelDescriptor): void;

    //replaceDraftLabel(draftLabelDescriptor: Stream<ThreadRowDraftLabelDescriptor>): void;

    getSubject(): string;

    getDateString(): string;

    getThreadID(): string;

    getThreadIDIfStable(): string;

    getDraftID(): Promise<string>;

    getVisibleDraftCount(): number;

    getVisibleMessageCount(): number;

    getContacts(): Common.Contact[];

    // TODO: Events

    destroyed: boolean;
  }

  interface ThreadRowButtonDescriptor {
    iconUrl: string;
    iconClass?: string; //: ''
    onClick: (event: ThreadRowButtonClickEvent) => void;
    hasDropdown?: boolean; //: false
  }

  interface ThreadRowButtonClickEvent {
    threadRowView: ThreadRowView;
    dropdown: Common.DropdownView;
  }

  interface ThreadRowActionButtonDescriptor {
    type: ActionButtonTypes;
    title: string;
    className?: string; //: ''
    onClick?: (event: ThreadRowActionButtonClickEvent) => void;
    url: string;
  }

  interface ThreadRowActionButtonClickEvent {
    // FIXME: testme, undocummented
  }

  interface LabelDescriptor {
    title: string;
    foregroundColor?: string; //: ''
    backgroundColor?: string; //: ''
    iconUrl: string;
    iconClass?: string; //: ''
  }

  interface ImageDescriptor {
    imageUrl: string;
    imageClass?: string; //: null
    tooltip?: string; //: null
    orderHint?: number; //: 0
  }

  interface ThreadRowDateDescriptor {
    text: string;
    textColor?: string; //: ''
    tooltip?: string; //: ''
  }

  interface ThreadRowAttachmentIconDescriptor {
    iconUrl?: string; //: ''
    iconClass?: string; //: ''
    tooltip?: string; //: ''
  }

  interface ThreadRowDraftLabelDescriptor {
    text: string;
    count?: string; //: 1
  }

  enum ActionButtonTypes {
    LINK
  }
}

declare namespace Conversations {
  interface Conversations {
    registerThreadViewHandler(handler: (threadView: ThreadView) => void): void;

    registerMessageViewHandler(handler: (messageView: MessageView) => void): void;

    registerMessageViewHandlerAll(handler: (messageView: MessageView) => void): void;

    registerFileAttachmentCardViewHandler(handler: (attachmentCardView: AttachmentCardView) => void): void;
  }

  interface ThreadView {
    addNoticeBar(): Common.SimpleElementView;

    addSidebarContentPanel(contentPanelDescriptor: ContentPanelDescriptor): ContentPanelView;

    getMessageViews(): MessageView[];

    getMessageViewsAll(): MessageView[];

    getSubject(): string;

    getThreadID(): string;

    on(name: 'contactHover', cb: (event: ContactHoverEvent) => void): void

    on(name: 'destroy', cb: () => void): void

    destroyed: boolean;
  }

  interface ContactHoverEvent {
    contact: Common.Contact;
    contactType: 'sender' | 'recipient';
    messageView: MessageView;
    threadView: ThreadView;
  }

  interface MessageView {
    addAttachmentCardView(cardOptions: AttachmentCardOptions): AttachmentCardView;

    addAttachmentCardView(cardOptions: AttachmentCardNoPreviewOptions): AttachmentCardView;

    addaAttachmentsToolbarButton(buttonOptions: AttachmentsToolbarButtonDescriptor): void;

    addToolbarButton(options: MessageViewToolbarButtonDescriptor): void;

    getBodyElement(): HTMLElement;

    getMessageID(): string;

    getFileAttachmentCardViews(): AttachmentCardView[];

    isElementInQuotedArea(): boolean;

    isLoaded(): boolean;

    getLinksInbody(): MessageViewLinkDescriptor[];

    getSender(): Common.Contact;

    getRecipients(): Common.Contact[];

    getThreadView(): ThreadView;

    getDateString(): string;

    addAttachmentIcon(iconDescriptor: MessageAttachmentIconDescriptor): void;

    //addAttachmentIcon(iconDescriptor: Stream<MessageAttachmentIconDescriptor>): void;

    getViewState(): MessageViewViewStates;

    // TODO: Events

    destroyed: boolean;
  }

  interface ContentPanelView {
    remove(): void;

    // TODO: Events

    destroyed: boolean;
  }

  interface AttachmentCardView {
    getAttachmentType(): string;

    addButton(buttonDescriptor: CustomButtonDescriptor): void;

    getTitle(): string;

    getDownloadURL(): Promise<string>;

    getMessageView(): void; // TODO: null is not a type?
    getMessageView(): MessageView;

    // TODO: Events

    destroyed: boolean;
  }

  // ConversationsDescriptors

  interface AttachmentCardOptions {
    title: string;
    description: string;
    previewUrl: string;
    previewThumbnailUrl: string;
    failoverPreviewIconUrl: string;
    previewOnClick: (event: PreviewClickEvent) => void;
    fileIconImageUrl: string;
    buttons: DownloadButtonDescriptor[] | CustomButtonDescriptor[];
    foldColor?: string; //: #BEBEBE
    mimeType?: string; //: null
  }

  interface AttachmentCardNoPreviewOptions {
    title: string;
    description: string;
    previewUrl: string;
    iconThumbnailUrl: string;
    previewOnClick: (event: PreviewClickEvent) => void;
    fileIconImageUrl: string;
    buttons: DownloadButtonDescriptor[] | CustomButtonDescriptor[];
    foldColor?: string; //: #BEBEBE
  }

  interface PreviewClickEvent {
    attachmentCardView: AttachmentCardView;

    preventDefault(): void;
  }

  interface ContentPanelDescriptor {
    el: HTMLElement;
    title: string;
    iconUrl: string;
    orderHint?: number; //: 0
  }

  interface DownloadButtonDescriptor {
    downloadUrl: string;
    onClick: (event: DownloadButtonClickEvent) => void;
    openInNewTab?: boolean; //: false
  }

  interface DownloadButtonClickEvent {
    // FIXME: testme, undocumented
  }

  interface CustomButtonDescriptor {
    iconUrl: string;
    tooltip: string;
    onClick: (event: AttachmentCardClickEvent) => void;
  }

  interface AttachmentCardClickEvent {
    // FIXME: testme, AttachmentCardClickEvent not documented
  }

  interface AttachmentsToolbarButtonDescriptor {
    tooltip: string;
    iconUrl: string;
    onClick: (event: AttachmentsToolbarButtonEvent) => void;
  }

  interface AttachmentsToolbarButtonEvent {
    attachmentCardViews: AttachmentCardView[];
  }

  interface MessageViewLinkDescriptor {
    text: string;
    html: string;
    element: HTMLElement;
    href: string;
    isInQuotedArea: boolean;
  }

  interface MessageAttachmentIconDescriptor {
    iconUrl: string;
    iconClass?: string; //: 'MODIFIER'
    tooltip: string;
    onClick: () => any; // TODO: check any?
  }

  interface MessageViewToolbarButtonDescriptor {
    section: 'MORE';
    title: string;
    iconUrl: string;
    onClick: () => any;
    iconClass?: string;
    orderHint?: number;
  }

  enum MessageViewViewStates {
    HIDDEN,
    COLLAPSED,
    EXPANDED
  }
}

declare namespace Toolbars {
  interface Toolbars {
    registerThreadButton(toolbarButtonDescriptor: ToolbarButtonDescriptor): void;

    registerToolbarButtonForList(toolbarButtonDescriptor: ToolbarButtonDescriptor): void;

    registerToolbarButtonForThreadView(toolbarButtonDescriptor: ToolbarButtonDescriptor): void;

    addToolbarButtonForApp(appToolbarButtonDescriptor: AppToolbarButtonDescriptor): AppToolbarButtonView;
  }

  interface ToolbarButtonDescriptor {
    title: string;
    onClick: (event: ToolbarButtonEvent) => void;
    iconUrl?: string; //: null
    iconClass?: string; //: null
    section?: SectionNames;
    hasDropdown?: boolean //: false
    hideFor?: (routeView: Router.RouteView) => void; //: null
    keyboardShortcutHandle?: Keyboard.KeyboardShortcutHandle; //: null
  }

  interface ToolbarButtonEvent {
    selectedThreadRowViews: Lists.ThreadRowView[];
    threadRowViews: Lists.ThreadRowView[];
    threadView: Conversations.ThreadView;
    dropdown: Common.DropdownView;
  }

  interface AppToolbarButtonDescriptor {
    title: string;
    titleClass?: string; //: null
    iconUrl: string;
    iconClass?: string; //: null
    onClick: (event: AppToolbarButtonEvent) => void;
    arrowColor?: string; //: null
  }

  interface AppToolbarButtonView {
    open(): void;

    close(): void;

    remove(): void;

    //TODO: Events

    destroyed: boolean;
  }

  interface AppToolbarButtonEvent {
    dropdown: Common.DropdownView;
  }

  enum SectionNames {
    INBOX_STATE,
    METADATA_STATE,
    OTHER
  }
}

declare namespace Router {
  interface Router {
    createLink(routeID: string, params: Object): string;

    goto(routeID: string, params: Object): void;

    handleCustomRoute(routeID: string, handler: (customRouteView: CustomRouteView) => void): Function;

    handleAllRoutes(handler: (routeView: RouteView) => Function): Function;

    handleListRoute(routeID: NativeListRouteIDs, handler: (listRouteView: ListRouteView) => Function): Function;

    handleCustomListRoute(routeID: string, handler: () => string[]): Function; // Array of ThreadIDs
    handleCustomListRoute(routeID: string, handler: () => Promise<string[]>): Function; // Promise for an array of ThreadIDs

    getCurrentRouteView(): RouteView;
  }

  interface RouteView {
    getRouteID(): string;

    getRouteType(): string;

    getParams(): string;

    // TODO: Events

    destroyed: boolean;
  }

  interface CustomRouteView extends RouteView {
    getElement(): HTMLElement;
  }

  interface ListRouteView extends RouteView {
    addCollapsibleSection(options: SectionDescriptor): CollapsibleSectionView;

    //addCollapsibleSection(options: Stream<SectionDescriptor>): CollapsibleSectionView;

    addSection(options: SectionDescriptor): SectionView;

    //addSection(options: Stream<SectionDescriptor>): SectionView;

    refresh(): void;
  }

  interface SectionView {
    remove(): void;

    // TODO: Events

    destroyed: boolean;
  }

  interface CollapsibleSectionView extends SectionView {
    setCollapsed(value: boolean): void;

    remove(): void

    // TODO: Events
  }

  interface SectionDescriptor {
    title: string;
    subtitle?: string; //: null
    titleLinkText?: string; //: null
    onTitleLinkClick?: () => any; //: null // TODO: check any?
    hasDropdown?: boolean; //: false
    onDropdownClick?: (event: SectionDropdownClickEvent) => any; //: null // TODO: check any?
    tableRows?: RowDescriptor[]; //: null
    contentElement?: HTMLElement; //:null
    footerLinkText?: string; //: null
    onFooterLinkClick?: (event: SectionFooterLinkClickEvent) => any //: null // TODO: check any?
  }

  interface SectionDropdownClickEvent {
    dropdown: Common.DropdownView;
  }

  interface SectionFooterLinkClickEvent {
    // FIXME: testme, undocumented
  }

  interface RowDescriptor {
    title: string;
    body: string;
    shortDetailText: string;
    isRead: string;
    labels: Lists.LabelDescriptor[];
    iconUrl?: string; //: null
    iconClass?: string; //: null
    routeID?: string; //: null
    routeParams?: string; //: null
    onClick?: () => any; //: null
  }

  enum NativeRouteIDs {
    INBOX,
    ALL_MAIL,
    SENT,
    STARRED,
    DRAFTS,
    SNOOZED,
    DONE,
    REMINDERS,
    LABEL,
    TRASH,
    SPAM,
    IMPORTANT,
    SEARCH,
    THREAD,
    CHATS,
    CHAT,
    CONTACTS,
    CONTACT,
    SETTINGS,
    ANY_LIST
  }

  enum NativeListRouteIDs {
    INBOX,
    ALL_MAIL,
    SENT,
    STARRED,
    DRAFTS,
    SNOOZED,
    DONE,
    REMINDERS,
    LABEL,
    TRASH,
    SPAM,
    IMPORTANT,
    SEARCH,
    ANY_LIST
  }

  enum RouteTypes {
    LIST,
    THREAD,
    SETTINGS,
    CHAT,
    CUSTOM,
    UNKNOWN
  }
}

declare namespace NavMenu {
  interface NavMenu {
    addNavItem(navItemDescriptor: NavItemDescriptor): NavItemView;
  }

  interface NavItemView {
    addNavItem(navItemDescriptor: NavItemDescriptor): NavItemView;

    remove(): void;

    isCollapsed(): boolean;

    setCollapsed(collapseValue: boolean): void;

    // TODO: Events

    destroyed: boolean;
  }

  interface NavItemDescriptor {
    name: string;
    routeId?: string; //: null
    routeParams?: Object; //: null
    orderHint?: number; //: Number.MAX_SAFE_INTEGER  // FIXME: integer
    accessory?: CreateAccessoryDescriptor | IconButtonAccessoryDescriptor | DropdownButtonAccessoryDescriptor; //: null
    iconUrl?: string; //: null
    iconClass?: string; //: null
  }

  interface CreateAccessoryDescriptor {
    type: string; //: 'CREATE'
    onClick: () => any; // TODO: check any?
  }

  interface IconButtonAccessoryDescriptor {
    type: string; //: 'ICON_BUTTON'
    onClick: () => any; // TODO: check any?
    iconUrl: string;
    iconClass?: string; //: null
  }

  interface DropdownButtonAccessoryDescriptor {
    type: string; //: 'DROPDOWN_BUTTON'
    buttonBackgroundColor: string;
    buttonForegroundColor: string;
    onClick: (event: DropdownButtonClickEvent) => any; // TODO: check any?
  }

  interface DropdownButtonClickEvent {
    dropdown: Common.DropdownView;
  }

  // Undocumented
  enum NavItemTypes {
    MANAGE,
    NAVIGATION
  }

  // Undocumented
  var SENT_MAIL: Object;
}

declare namespace Widgets {

  interface Widgets {
    showModalView(options: ModalOptions): ModalView;

    showMoleView(options: MoleOptions): MoleView;

    showDrawerView(options: DrawerOptions): DrawerView;
  }

  interface ModalOptions {
    el: HTMLElement;
    chrome?: boolean; //: true
    showCloseButton?: boolean; //: false
    title?: string; //: ''
    buttons?: ModalButtonDescriptor[]; // []
  }

  interface ModalButtonDescriptor {
    text: string;
    title: string;
    onClick: () => any; // TODO: check any?
    type?: string; //: 'SECONDARY_ACTION'
    orderHint?: number; //: 0
  }

  interface MoleOptions {
    el: HTMLElement;
    title?: string; //: ''
    titleEl?: HTMLElement; //: null
    minimizedTitleEl?: HTMLElement; //: null
    className?: string; //: ''
    titleButtons?: MoleButtonDescriptor[]; //: []
    chrome?: boolean; //: false
  }

  interface MoleButtonDescriptor {
    title: string;
    iconUrl: string;
    iconClass?: string; //: ''
    onClick: () => any; // TODO: check any?
  }

  interface DrawerOptions {
    el: HTMLElement;
    chrome?: boolean; //: true
    title?: string; //: ''
    composeView?: Compose.ComposeView; //: null
    closeWithCompose?: boolean; //: false
  }

  interface ModalView {
    close(): void;

    // TODO: Events

    destroyed: boolean;
  }

  interface MoleView {
    close(): void;

    setTitle(text: string): void;

    setMinimized(minimized: boolean): void;

    getMinimized(): boolean;

    // TODO: Events

    destroyed: boolean;
  }

  interface DrawerView {
    close(): void;

    associateComposeView(composeView: Compose.ComposeView, closeWithCompose: boolean): void;

    // TODO: Events

    destroyed: boolean;
  }
}

declare namespace ButterBar {
  interface ButterBar {
    showMessage(options: MessageDescriptor): Object;

    showLoading(): Object;

    showError(options: MessageDescriptor): Object;

    showSaving(options: SavingMessageDescriptor): Object;

    hideMessage(messageKey: Object): void;

    hideGmailMessage(): void;
  }

  interface MessageDescriptorBase {
    className?: string; //: ''
    priority?: number; //: 0
    time?: number; //: 15000
    hideOnViewChanged?: boolean; //: true
    persistent?: boolean; //: false
    messageKey?: Object; //: null
  }

  interface MessageDescriptorText extends MessageDescriptorBase {
    text: string;
  }

  interface MessageDescriptorHtml extends MessageDescriptorBase {
    html: string;
  }

  interface MessageDescriptorHtmlElement extends MessageDescriptorBase {
    el: HTMLElement;
  }

  type MessageDescriptor = MessageDescriptorText | MessageDescriptorHtml | MessageDescriptorHtmlElement;

  interface SavingMessageDescriptor {
    text?: string; //: 'Saving...'
    confirmationText?: string; //: 'Saved'
    priority?: number; //: 0
    time?: number; //: Infinity
    confirmationTime?: number; //: 1000
    showConfirmation?: boolean; //: true
    hideOnViewChanged?: boolean; //: true
    persistent?: boolean; //: true
    messageKey?: Object; //: null
  }
}

declare namespace Search {
  interface Search {
    registerSearchSuggestionsProvider(handler: (query: string) => AutocompleteSearchResult[] | Promise<AutocompleteSearchResult[]>): void;

    registerSearchQueryRewriter(rewriter: SearchQueryRewriter): void;
  }

  interface AutocompleteSearchResultBase {
    iconUrl?: string;
    routeName?: string;
    routeParams?: string[]
    externalURL?: string;
  }

  interface AutocompleteSearchResultText extends AutocompleteSearchResultBase {
    name: string;
    description: string;
  }

  interface AutocompleteSearchResultHtml extends AutocompleteSearchResultBase {
    nameHTML: string;
    descriptionHTML: string;
  }

  type AutocompleteSearchResult = AutocompleteSearchResultText | AutocompleteSearchResultHtml;

  interface SearchQueryRewriter {
    term: string;
    termReplacer: () => any; // TODO: check any? // FIXME: function can take a string or a Promise
  }
}

declare namespace User {
  interface User {
    getEmailAddress(): string;

    getAccountSwitcherContactList(): Common.Contact[];
  }
}

declare namespace Keyboard {
  interface Keyboard {
    createShortcutHandle(keyboardShortcutDescriptor: KeyboardShortcutDescriptor): KeyboardShortcutHandle;
  }

  interface KeyboardShortcutHandle {
    remove(): void;
  }

  interface KeyboardShortcutDescriptor {
    chord: string;
    description: string;
  }
}
