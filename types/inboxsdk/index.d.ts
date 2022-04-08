// Type definitions for non-npm package InboxSDK 2.0
// Project: https://www.inboxsdk.com/
// Definitions by: Raphaël Doursenaud <https://github.com/rdoursenaud>
//                 Amiram Korach <https://github.com/amiram>
//                 Antoine Boisadam <https://github.com/Antoine38660>
//                 Alex Bilbie <https://github.com/alexbilbie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/*
 * Copyright (c) 2016 GPC.solutions
 * Copyright (c) 2018 https://propelmypr.com
 */

// tslint:disable-next-line:export-just-namespace
export = InboxSDK;
export as namespace InboxSDK;

declare namespace InboxSDK {
  function load(version: number, appId?: string, opts?: LoadOptions): Promise<InboxSDKInstance>;

  function loadScript(url: string, options?: LoadScriptOptions): Promise<void>;

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
    suppressAddonTitle?: string;
  }

  interface LoadScriptOptions {
    nowrap?: boolean;
  }

  interface InboxSDKInstance {
    Compose: Compose.ComposeInstance;
    Lists: Lists.ListsInstance;
    Conversations: Conversations.ConversationsInstance;
    Toolbars: Toolbars.ToolbarsInstance;
    Router: Router.RouterInstance;
    NavMenu: NavMenu.NavMenuInstance;
    Widgets: Widgets.WidgetsInstance;
    ButterBar: ButterBar.ButterBarInstance;
    Search: Search.SearchInstance;
    User: User.UserInstance;
    Keyboard: Keyboard.KeyboardInstance;
    Global: Global.GlobalInstance;
  }

  namespace Common {
    interface Contact {
      name: string;
      emailAddress: string;
    }

    interface DropdownView {
      setPlacementOptions(options: PositionOptions): void;

      close(): void;

      reposition(): void;

      el: HTMLElement;
      destroyed: boolean;

      on(name: 'destroy', cb: () => void): void;

      on(name: 'preautoclose', cb: (event: PreAutoCloseEvent) => void): void;
    }

    interface PreAutoCloseEvent {
      type: 'outsideInteraction' | 'escape';
      cause: Event;

      cancel(): void;
    }

    interface PositionOptions {
      position?: string;
      forcePosition?: boolean;
      hAlign?: string;
      forceHAlign?: boolean;
      vAlign?: string;
      forceVAlign?: boolean;
      buffer?: number;
      topBuffer?: number;
      bottomBuffer?: number;
      leftBuffer?: number;
      rightBuffer?: number;
    }

    interface SimpleElementView {
      destroy(): void;

      el: HTMLElement;
      destroyed: boolean;

      on(name: 'destroy', cb: () => void): void;
    }
  }

  export namespace Compose {
    interface ComposeInstance {
      registerComposeViewHandler(handler: (composeView: ComposeView) => void): () => void;

      openNewComposeView(): Promise<ComposeView>;
    }

    interface ComposeView {
      addButton(buttonDescriptor: ComposeButtonDescriptor): void;

      addComposeNotice(composeNoticeDescriptor: ComposeNoticeDescriptor): Common.SimpleElementView;

      addStatusBar(statusBarDescriptor: StatusBarDescriptor): StatusBarView;

      close(): void;

      send(options?: SendOptions): void;

      getBodyElement(): HTMLElement;

      getMetadataFormElement(): HTMLElement;

      getInitialMessageID(): string;

      getThreadID(): string;

      getDraftID(): Promise<string>;

      getCurrentDraftID(): Promise<string | null>;

      getHTMLContent(): string;

      getSelectedBodyHTML(): string;

      getSelectedBodyText(): string;

      getSubject(): string;

      getTextContent(): string;

      getToRecipients(): Common.Contact[];

      getCcRecipients(): Common.Contact[];

      getBccRecipients(): Common.Contact[];

      insertTextIntoBodyAtCursor(text: string): void;

      insertHTMLIntoBodyAtCursor(html: string | HTMLElement): HTMLElement;

      insertLinkChipIntoBodyAtCursor(text: string, url: string, iconUrl: string): HTMLElement;

      insertLinkIntoBodyAtCursor(text: string, url: string): HTMLElement;

      isForward(): boolean;

      isInlineReplyForm(): boolean;

      isFullscreen(): boolean;

      setFullscreen(minimized: boolean): void;

      isMinimized(): boolean;

      setMinimized(minimized: boolean): void;

      popOut(): Promise<ComposeView>;

      setTitleBarColor(color: string): () => void;

      isReply(): boolean;

      setToRecipients(emails: string[]): void;

      setCcRecipients(emails: string[]): void;

      setBccRecipients(emails: string[]): void;

      getFromContact(): Common.Contact;

      getFromContactChoices(): Common.Contact[];

      setFromEmail(email: string): void;

      setSubject(text: string): void;

      setBodyHTML(html: string): void;

      setBodyText(text: string): void;

      attachFiles(files: Blob[]): Promise<void>;

      attachInlineFiles(Files: Blob[]): Promise<void>;

      on(name: 'destroy', cb: (event: { messageID: string, closedByInboxSDK: boolean }) => void): void;

      on(name: 'fullscreenChanged', cb: (event: { fullscreen: boolean }) => void): void;

      on(name: 'responseTypeChanged', cb: (event: { isForward: boolean }) => void): void;

      on(name: 'fromContactChanged' | 'toContactAdded' | 'toContactRemoved' | 'ccContactAdded' | 'ccContactRemoved' | 'bccContactAdded' | 'bccContactRemoved',
         cb: (event: { contact: Common.Contact }) => void): void;

      on(name: 'recipientsChanged', cb: (event: RecipientsChangedEvent) => void): void;

      on(name: 'presending', cb: (event: { cancel: () => void }) => void): void;

      on(name: 'sent', cb: (event: { getThreadID: () => Promise<string>, getMessageID: () => Promise<string> }) => void): void;

      on(name: 'discard' | 'sendCanceled' | 'sending' | 'bodyChanged' | 'minimized' | 'restored', cb: () => void): void;

      destroyed: boolean;
    }

    interface RecipientsChangedEvent {
      to: {
        added: Common.Contact[];
        removed: Common.Contact[];
      };
      cc: {
        added: Common.Contact[];
        removed: Common.Contact[];
      };
      bcc: {
        added: Common.Contact[];
        removed: Common.Contact[];
      };
    }

    interface ComposeButtonDescriptor {
      title: string;
      iconUrl?: string;
      iconClass?: string;
      onClick: (event: ComposeButtonClickEvent) => void;
      hasDropdown?: boolean;
      type?: 'MODIFIER' | 'SEND_ACTION';
      orderHint?: number;
      enabled?: boolean;
    }

    interface ComposeNoticeDescriptor {
      orderHint?: number;
    }

    interface ComposeButtonClickEvent {
      composeView: ComposeView;
      dropdown: Common.DropdownView;
    }

    interface StatusBarDescriptor {
      height?: number;
      orderHint?: number;
    }

    interface StatusBarView extends Common.SimpleElementView {
      setHeight(height: number): void;
    }

    interface SendOptions {
      sendAndArchive?: boolean;
    }
  }

  export namespace Lists {
    interface ListsInstance {
      registerThreadRowViewHandler(handler: (threadRowView: ThreadRowView) => any): () => void;

      getSelectedThreadRowViews(): ThreadRowView[];

      registerThreadRowViewSelectionHandler(handler: () => any): () => void;
    }

    interface ThreadRowView {
      addLabel(labelDescriptor: LabelDescriptor): void;

      // addLabel(labelDescriptor: Stream<LabelDescriptor>): void;

      addImage(imageDescriptor: ImageDescriptor): void;

      // addImage(imageDescriptor: Stream<ImageDescriptor>): void;

      addButton(buttonDescriptor: ThreadRowButtonDescriptor): void;

      // addButton(buttonDescriptor: Stream<ThreadRowButtonDescriptor>): void;

      addActionButton(buttonDescriptor: ThreadRowActionButtonDescriptor): void;

      // addActionButton(buttonDescriptor: Stream<ThreadRowActionButtonDescriptor>): void;

      addAttachmentIcon(threadRowAttachmentIconDescriptor: ThreadRowAttachmentIconDescriptor): void;

      // addAttachmentIcon(threadRowAttachmentIconDescriptor: stream<ThreadRowAttachmentIconDescriptor>): void

      replaceDate(threadRowDateDescriptor: ThreadRowDateDescriptor): void;

      // replaceDate(threadRowDateDescriptor: Stream<ThreadRowDateDescriptor>): void;

      replaceDraftLabel(draftLabelDescriptor: ThreadRowDraftLabelDescriptor): void;

      // replaceDraftLabel(draftLabelDescriptor: Stream<ThreadRowDraftLabelDescriptor>): void;

      getSubject(): string;

      getDateString(): string;

      getThreadIDAsync(): Promise<string>;

      getThreadIDIfStableAsync(): Promise<string | null>;

      getDraftID(): Promise<string>;

      getVisibleDraftCount(): number;

      getVisibleMessageCount(): number;

      getContacts(): Common.Contact[];

      on(name: 'destroy', cb: () => void): void;

      destroyed: boolean;
    }

    interface ThreadRowButtonDescriptor {
      title: string;
      iconUrl: string;
      iconClass?: string;
      onClick: (event: ThreadRowButtonClickEvent) => void;
      hasDropdown?: boolean;
    }

    interface ThreadRowButtonClickEvent {
      threadRowView: ThreadRowView;
      dropdown?: Common.DropdownView;
    }

    interface ThreadRowActionButtonDescriptor {
      type: 'LINK';
      title: string;
      className?: string;
      onClick?: (event: any) => void;
      url: string;
    }

    interface LabelDescriptorBase {
      title: string;
      foregroundColor?: string;
      backgroundColor?: string;
      iconBackgroundColor?: string;
    }

    interface LabelDescriptorHtml extends LabelDescriptorBase {
      iconHtml: string;
    }

    interface LabelDescriptorUrl extends LabelDescriptorBase {
      iconUrl: string;
      iconClass?: string;
    }

    type LabelDescriptor = LabelDescriptorHtml | LabelDescriptorUrl;

    interface ImageDescriptor {
      imageUrl: string;
      imageClass?: string;
      tooltip?: string;
      orderHint?: number;
    }

    interface ThreadRowDateDescriptor {
      text: string;
      textColor?: string;
      tooltip?: string;
    }

    interface ThreadRowAttachmentIconDescriptorBase {
      tooltip?: string;
    }

    interface ThreadRowAttachmentIconUrlDescriptor extends ThreadRowAttachmentIconDescriptorBase {
      iconUrl: string;
      iconClass?: string;
    }

    interface ThreadRowAttachmentIconHtmlDescriptor extends ThreadRowAttachmentIconDescriptorBase {
      iconHtml: string;
    }

    type ThreadRowAttachmentIconDescriptor = ThreadRowAttachmentIconUrlDescriptor | ThreadRowAttachmentIconHtmlDescriptor;

    interface ThreadRowDraftLabelDescriptor {
      text: string;
      count?: string;
    }
  }

  export namespace Conversations {
    interface ConversationsInstance {
      registerThreadViewHandler(handler: (threadView: ThreadView) => void): () => void;

      registerMessageViewHandler(handler: (messageView: MessageView) => void): () => void;

      registerMessageViewHandlerAll(handler: (messageView: MessageView) => void): () => void;

      registerFileAttachmentCardViewHandler(handler: (attachmentCardView: AttachmentCardView) => void): () => void;
    }

    interface ThreadView {
      addNoticeBar(): Common.SimpleElementView;

      addLabel(): Common.SimpleElementView;

      addSidebarContentPanel(contentPanelDescriptor: ContentPanelDescriptor): ContentPanelView;

      getMessageViews(): MessageView[];

      getMessageViewsAll(): MessageView[];

      getSubject(): string;

      getThreadIDAsync(): Promise<string>;

      on(name: 'contactHover', cb: (event: ContactHoverEvent) => void): void;

      on(name: 'destroy', cb: () => void): void;

      destroyed: boolean;
    }

    interface ContactHoverEvent {
      contact: Common.Contact;
      contactType: 'sender' | 'recipient';
      messageView: MessageView;
      threadView: ThreadView;
    }

    interface MessageView {
      addAttachmentCardView(cardOptions: AttachmentCardOptions | AttachmentCardNoPreviewOptions): AttachmentCardView;

      addAttachmentsToolbarButton(buttonOptions: AttachmentsToolbarButtonDescriptor): void;

      addToolbarButton(options: MessageViewToolbarButtonDescriptor): void;

      getBodyElement(): HTMLElement;

      getMessageIDAsync(): Promise<string>;

      getFileAttachmentCardViews(): AttachmentCardView[];

      isElementInQuotedArea(): boolean;

      isLoaded(): boolean;

      getLinksInBody(): MessageViewLinkDescriptor[];

      getSender(): Common.Contact;

      getRecipientEmailAddresses(): string[];

      getRecipientsFull(): Promise<Common.Contact[]>;

      getThreadView(): ThreadView;

      getDateString(): string;

      addAttachmentIcon(iconDescriptor: MessageAttachmentIconDescriptor): void;

      // addAttachmentIcon(iconDescriptor: Stream<MessageAttachmentIconDescriptor>): void;

      getViewState(): MessageViewViewStates;

      on(name: 'viewStateChange', cb: (event: { newViewState: MessageViewViewStates, oldViewState: MessageViewViewStates, messageView: MessageView }) => void): void;

      on(name: 'contactHover', cb: (event: ContactHoverEvent) => void): void;

      on(name: 'destroy' | 'load', cb: () => void): void;

      destroyed: boolean;
    }

    type MessageViewViewStates = 'HIDDEN' | 'COLLAPSED' | 'EXPANDED';

    interface ContentPanelView {
      isActive(): boolean;

      open(): void;

      /**
       * Undocumented method, no guarantee it will always work.
       */
      close(): void;

      remove(): void;

      on(name: 'destroy' | 'activate' | 'deactivate', cb: () => void): void;

      destroyed: boolean;
    }

    interface AttachmentCardView {
      getAttachmentType(): string;

      addButton(buttonDescriptor: CustomButtonDescriptor): void;

      getTitle(): string;

      /**
       * @deprecated. Use AttachmentCardClickEvent.getDownloadURL() instead
       */
      getDownloadURL(): Promise<string>;

      getMessageView(): MessageView | null;

      on(name: 'destroy', cb: () => void): void;

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
      buttons: Array<DownloadButtonDescriptor | CustomButtonDescriptor>;
      foldColor?: string;
      mimeType?: string;
    }

    interface AttachmentCardNoPreviewOptions {
      title: string;
      description: string;
      previewUrl: string;
      iconThumbnailUrl: string;
      previewOnClick: (event: PreviewClickEvent) => void;
      fileIconImageUrl: string;
      buttons: Array<DownloadButtonDescriptor | CustomButtonDescriptor>;
      foldColor?: string;
    }

    interface PreviewClickEvent {
      attachmentCardView: AttachmentCardView;

      preventDefault(): void;
    }

    interface ContentPanelDescriptor {
      el: HTMLElement;
      title: string;
      iconUrl: string;
      appName?: string;
      appIconUrl?: string;
      id?: string;
      hideTitleBar?: boolean;
      orderHint?: number;
    }

    interface DownloadButtonDescriptor {
      downloadUrl: string;
      downloadFilename?: string;
      onClick: (event: any) => void;
      openInNewTab?: boolean;
    }

    interface CustomButtonDescriptor {
      iconUrl: string;
      tooltip: string;
      onClick: (event: AttachmentCardClickEvent) => void;
    }

    interface AttachmentCardClickEvent {
      getDownloadURL(): Promise<string>;
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

    interface MessageAttachmentIconDescriptorBase {
      iconClass?: string;
      tooltip: string | HTMLElement;
      onClick?: () => void;
    }

    interface MessageAttachmentIconUrlDescriptor extends MessageAttachmentIconDescriptorBase {
      iconUrl: string;
    }

    interface MessageAttachmentIconHtmlDescriptor extends MessageAttachmentIconDescriptorBase {
      iconHtml: string;
    }

    type MessageAttachmentIconDescriptor = MessageAttachmentIconUrlDescriptor | MessageAttachmentIconHtmlDescriptor;

    interface MessageViewToolbarButtonDescriptor {
      section: 'MORE';
      title: string;
      iconUrl: string;
      onClick: () => void;
      iconClass?: string;
      orderHint: number;
    }
  }

  export namespace Toolbars {
    interface ToolbarsInstance {
      registerThreadButton(toolbarButtonDescriptor: ToolbarButtonDescriptor): () => void;

      /**
       * @deprecated. use registerThreadButton
       * @param toolbarButtonDescriptor
       */
      registerToolbarButtonForList(toolbarButtonDescriptor: LegacyToolbarButtonDescriptor): () => void;

      /**
       * @deprecated. use registerThreadButton
       * @param toolbarButtonDescriptor
       */
      registerToolbarButtonForThreadView(toolbarButtonDescriptor: LegacyToolbarButtonDescriptor): () => void;

      addToolbarButtonForApp(appToolbarButtonDescriptor: AppToolbarButtonDescriptor): AppToolbarButtonView;
    }

    interface ToolbarButtonDescriptor {
      title: string;
      onClick: (event: ToolbarButtonEvent) => void;
      iconUrl?: string;
      iconClass?: string;
      positions?: ToolbarButtonPosition[];
      threadSection?: SectionNames;
      listSection?: SectionNames;
      hasDropdown?: boolean;
      hideFor?: (routeView: Router.RouteView) => void;
      orderHint?: number;
      keyboardShortcutHandle?: Keyboard.KeyboardShortcutHandle;
    }

    interface LegacyToolbarButtonDescriptor {
      title: string;
      onClick: (event: LegacyToolbarButtonEvent) => void;
      iconUrl?: string;
      iconClass?: string;
      section: SectionNames;
      hasDropdown?: boolean;
      hideFor?: (routeView: Router.RouteView) => void;
      keyboardShortcutHandle?: Keyboard.KeyboardShortcutHandle;
    }

    type ToolbarButtonPosition = 'THREAD' | 'ROW' | 'LIST';

    interface ToolbarButtonEvent {
      position: ToolbarButtonPosition;
      selectedThreadRowViews: Lists.ThreadRowView[];
      selectedThreadViews: Conversations.ThreadView[];
      dropdown?: Common.DropdownView;
    }

    interface LegacyToolbarButtonEvent {
      selectedThreadRowViews: Lists.ThreadRowView[];
      threadRowViews: Lists.ThreadRowView[];
      threadView: Conversations.ThreadView;
      dropdown?: Common.DropdownView;
    }

    interface AppToolbarButtonDescriptor {
      title: string;
      titleClass?: string;
      iconUrl: string;
      iconClass?: string;
      onClick: (event: AppToolbarButtonEvent) => void;
      arrowColor?: string;
    }

    interface AppToolbarButtonView {
      open(): void;

      close(): void;

      remove(): void;

      on(name: 'destroy', cb: () => void): void;

      destroyed: boolean;
    }

    interface AppToolbarButtonEvent {
      dropdown: Common.DropdownView;
    }

    type SectionNames = 'INBOX_STATE' | 'METADATA_STATE' | 'OTHER';
  }

  export namespace Router {
    interface RouterInstance {
      createLink(routeID: string | NativeRouteIDs, params: RouteParams): string;

      goto(routeID: string | NativeRouteIDs, params: RouteParams): void;

      handleCustomRoute(routeID: string, handler: (customRouteView: CustomRouteView) => void): () => void;

      handleAllRoutes(handler: (routeView: RouteView) => void): () => void;

      handleListRoute(routeID: NativeListRouteIDs, handler: (listRouteView: ListRouteView) => void): () => void;

      handleCustomListRoute(routeID: string, handler: (offset: number, max: number) => CustomListDescriptor | Promise<CustomListDescriptor>): () => void;

      getCurrentRouteView(): RouteView;

      NativeListRouteIDs: typeof NativeListRouteIDs;
      NativeRouteIDs: typeof NativeRouteIDs;
    }

    interface CustomListDescriptor {
      threads: Array<ThreadDescriptor | string>;
      total?: number;
      hasMore?: boolean;
    }

    interface ThreadDescriptor {
      rfcMessageId?: string;
      gmailThreadId?: string;
    }

    interface RouteParams {
      [key: number]: string | number;

      [key: string]: string | number;
    }

    interface RouteView {
      getRouteID(): string;

      getRouteType(): RouteTypes;

      getParams(): RouteParams;

      on(name: 'destroy', cb: () => void): void;

      destroyed: boolean;
    }

    type RouteTypes = 'LIST' | 'THREAD' | 'SETTINGS' | 'CHAT' | 'CUSTOM' | 'UNKNOWN';

    interface CustomRouteView extends RouteView {
      getElement(): HTMLElement;

      setFullWidth(fullWidth: boolean): void;
    }

    interface ListRouteView extends RouteView {
      addCollapsibleSection(options: SectionDescriptor): CollapsibleSectionView;

      // addCollapsibleSection(options: Stream<SectionDescriptor>): CollapsibleSectionView;

      addSection(options: SectionDescriptor): SectionView;

      // addSection(options: Stream<SectionDescriptor>): SectionView;

      refresh(): void;
    }

    interface SectionView {
      remove(): void;

      on(name: 'destroy', cb: () => void): void;

      destroyed: boolean;
    }

    interface CollapsibleSectionView extends SectionView {
      setCollapsed(value: boolean): void;

      remove(): void;

      on(name: 'destroy' | 'expanded' | 'collapsed', cb: () => void): void;
    }

    interface SectionDescriptor {
      title: string;
      subtitle?: string;
      titleLinkText?: string;
      onTitleLinkClick?: () => void;
      hasDropdown?: boolean;
      onDropdownClick?: (event: SectionDropdownClickEvent) => void;
      tableRows?: RowDescriptor[];
      contentElement?: HTMLElement;
      footerLinkText?: string;
      onFooterLinkClick?: (event: any) => void;
    }

    interface SectionDropdownClickEvent {
      dropdown: Common.DropdownView;
    }

    interface RowDescriptor {
      title: string;
      body: string;
      shortDetailText: string;
      isRead: string;
      labels: Lists.LabelDescriptor[];
      iconHtml?: string;
      iconUrl?: string;
      iconClass?: string;
      routeID?: string;
      routeParams?: string[];
      onClick?: () => void;
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
  }

  export namespace NavMenu {
    interface NavMenuInstance {
      addNavItem(navItemDescriptor: NavItemDescriptor): NavItemView;
    }

    interface NavItemView {
      addNavItem(navItemDescriptor: NavItemDescriptor): NavItemView;

      remove(): void;

      isCollapsed(): boolean;

      setCollapsed(collapseValue: boolean): void;

      on(name: 'destroy', cb: () => void): void;

      destroyed: boolean;
    }

    interface NavItemDescriptorBase {
      name: string;
      routeID?: string;
      routeParams?: object;
      onClick?: (event: { preventDefault(): void }) => void;
      orderHint?: number;
      accessory?: CreateAccessoryDescriptor | IconButtonAccessoryDescriptor | DropdownButtonAccessoryDescriptor;
      backgroundColor?: string;
      expanderForegroundColor?: string;
      type?: NavItemTypes;
    }

    interface NavItemIconUrlDescriptor extends NavItemDescriptorBase {
      iconUrl?: string;
      iconClass?: string;
    }

    interface NavItemIconHtmlDescriptor extends NavItemDescriptorBase {
      iconElement?: HTMLElement;
    }

    type NavItemDescriptor = NavItemIconUrlDescriptor | NavItemIconHtmlDescriptor;

    interface CreateAccessoryDescriptor {
      type: 'CREATE';
      onClick: () => void;
    }

    interface IconButtonAccessoryDescriptor {
      type: 'ICON_BUTTON';
      onClick: () => void;
      iconUrl: string;
      iconClass?: string;
    }

    interface DropdownButtonAccessoryDescriptor {
      type: 'DROPDOWN_BUTTON';
      buttonBackgroundColor: string;
      buttonForegroundColor: string;
      onClick: (event: DropdownButtonClickEvent) => void;
    }

    interface DropdownButtonClickEvent {
      dropdown: Common.DropdownView;
    }

    type NavItemTypes = 'LINK' | 'NAVIGATION';
  }

  export namespace Widgets {
    interface WidgetsInstance {
      showModalView(options: ModalOptions): ModalView;

      showMoleView(options: MoleOptions): MoleView;

      showDrawerView(options: DrawerOptions): DrawerView;
    }

    interface ModalOptions {
      el: HTMLElement;
      chrome?: boolean;
      constrainTitleWidth?: boolean;
      showCloseButton?: boolean;
      title?: string;
      buttons?: ModalButtonDescriptor[];
    }

    interface ModalButtonDescriptor {
      text: string;
      title: string;
      onClick: () => void;
      type?: 'PRIMARY_ACTION' | 'SECONDARY_ACTION';
      color?: string;
      orderHint?: number;
    }

    interface MoleOptions {
      el: HTMLElement;
      title?: string;
      titleEl?: HTMLElement;
      minimizedTitleEl?: HTMLElement;
      className?: string;
      titleButtons?: MoleButtonDescriptor[];
      chrome?: boolean;
    }

    interface MoleButtonDescriptor {
      title: string;
      iconUrl: string;
      iconClass?: string;
      onClick: () => void;
    }

    interface DrawerOptions {
      el: HTMLElement;
      chrome?: boolean;
      title?: string;
      composeView?: Compose.ComposeView;
      closeWithCompose?: boolean;
    }

    interface ModalView {
      close(): void;

      on(name: 'destroy', cb: () => void): void;

      destroyed: boolean;
    }

    interface MoleView {
      close(): void;

      setTitle(text: string): void;

      setMinimized(minimized: boolean): void;

      getMinimized(): boolean;

      on(name: 'destroy' | 'minimize' | 'restore', cb: () => void): void;

      destroyed: boolean;
    }

    interface DrawerView {
      close(): void;

      associateComposeView(composeView: Compose.ComposeView, closeWithCompose: boolean): void;

      disassociateComposeView(): void;

      on(name: 'destroy' | 'slideAnimationDone' | 'closing', cb: () => void): void;

      on(name: 'preautoclose', cb: (event: Common.PreAutoCloseEvent) => void): void;

      destroyed: boolean;
    }
  }

  export namespace ButterBar {
    interface ButterBarInstance {
      showMessage(options: MessageDescriptor): Destroyer;

      showLoading(options: LoadingMessageDescriptor): Destroyer;

      showError(options: MessageDescriptor): Destroyer;

      showSaving(options: SavingMessageDescriptor): SavingResolver;

      hideMessage(messageKey: object | string): void;

      hideGmailMessage(): void;
    }

    interface Destroyer {
      destroy(): void;
    }

    interface SavingResolver {
      resolve(): void;
      reject(): void;
    }

    interface MessageDescriptorBase {
      className?: string;
      priority?: number;
      time?: number;
      hideOnViewChanged?: boolean;
      persistent?: boolean;
      messageKey?: object | string;
      buttons?: MessageButtonDescriptor[];
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

    interface MessageButtonDescriptor {
      onClick(event: any): void;
      title: string;
    }

    interface LoadingMessageDescriptorBase {
      className?: string;
      priority?: number;
      hideOnViewChanged?: boolean;
      persistent?: boolean;
      messageKey?: object | string;
    }

    interface LoadingMessageDescriptorText extends LoadingMessageDescriptorBase {
      text: string;
    }

    interface LoadingMessageDescriptorHtml extends LoadingMessageDescriptorBase {
      html: string;
    }

    interface LoadingMessageDescriptorHtmlElement extends LoadingMessageDescriptorBase {
      el: HTMLElement;
    }

    type LoadingMessageDescriptor = LoadingMessageDescriptorText | LoadingMessageDescriptorHtml | LoadingMessageDescriptorHtmlElement;

    interface SavingMessageDescriptorBase {
      className?: string;
      confirmationText?: string;
      priority?: number;
      time?: number;
      confirmationTime?: number;
      showConfirmation?: boolean;
      hideOnViewChanged?: boolean;
      persistent?: boolean;
      messageKey?: object | string;
    }

    interface SavingMessageDescriptorText extends SavingMessageDescriptorBase {
      text: string;
    }

    interface SavingMessageDescriptorHtml extends SavingMessageDescriptorBase {
      html: string;
    }

    interface SavingMessageDescriptorHtmlElement extends SavingMessageDescriptorBase {
      el: HTMLElement;
    }

    type SavingMessageDescriptor =
      SavingMessageDescriptorText
      | SavingMessageDescriptorHtml
      | SavingMessageDescriptorHtmlElement;
  }

  export namespace Search {
    interface SearchInstance {
      registerSearchSuggestionsProvider(handler: (query: string) => AutocompleteSearchResult[] | Promise<AutocompleteSearchResult[]>): void;

      registerSearchQueryRewriter(rewriter: SearchQueryRewriter): void;
    }

    interface AutocompleteSearchResultBase {
      iconUrl?: string;
      iconHTML?: string;
      routeName?: string;
      routeParams?: string[];
      externalURL?: string;
      onClick?: () => void;
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
      termReplacer: () => string | Promise<string>;
    }
  }

  export namespace User {
    interface UserInstance {
      getEmailAddress(): string;

      isUsingGmailMaterialUI(): boolean;

      isConversationViewDisabled(): boolean;

      getLanguage(): string;

      getAccountSwitcherContactList(): Common.Contact[];
    }
  }

  export namespace Keyboard {
    interface KeyboardInstance {
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

  export namespace Global {
    interface GlobalInstance {
      addSidebarContentPanel(contentPanelDescriptor: Conversations.ContentPanelDescriptor): Promise<Conversations.ContentPanelView>;
    }
  }
}
