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

// eslint-disable-next-line export-just-namespace
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
    appName?: string | undefined;
    appIconUrl?: string | undefined;
    suppressAddonTitle?: string | undefined;
  }

  interface LoadScriptOptions {
    nowrap?: boolean | undefined;
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
      position?: string | undefined;
      forcePosition?: boolean | undefined;
      hAlign?: string | undefined;
      forceHAlign?: boolean | undefined;
      vAlign?: string | undefined;
      forceVAlign?: boolean | undefined;
      buffer?: number | undefined;
      topBuffer?: number | undefined;
      bottomBuffer?: number | undefined;
      leftBuffer?: number | undefined;
      rightBuffer?: number | undefined;
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
      iconUrl?: string | undefined;
      iconClass?: string | undefined;
      onClick: (event: ComposeButtonClickEvent) => void;
      hasDropdown?: boolean | undefined;
      type?: 'MODIFIER' | 'SEND_ACTION' | undefined;
      orderHint?: number | undefined;
      enabled?: boolean | undefined;
    }

    interface ComposeNoticeDescriptor {
      orderHint?: number | undefined;
    }

    interface ComposeButtonClickEvent {
      composeView: ComposeView;
      dropdown: Common.DropdownView;
    }

    interface StatusBarDescriptor {
      height?: number | undefined;
      orderHint?: number | undefined;
    }

    interface StatusBarView extends Common.SimpleElementView {
      setHeight(height: number): void;
    }

    interface SendOptions {
      sendAndArchive?: boolean | undefined;
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
      iconClass?: string | undefined;
      onClick: (event: ThreadRowButtonClickEvent) => void;
      hasDropdown?: boolean | undefined;
    }

    interface ThreadRowButtonClickEvent {
      threadRowView: ThreadRowView;
      dropdown?: Common.DropdownView | undefined;
    }

    interface ThreadRowActionButtonDescriptor {
      type: 'LINK';
      title: string;
      className?: string | undefined;
      onClick?: ((event: any) => void) | undefined;
      url: string;
    }

    interface LabelDescriptorBase {
      title: string;
      foregroundColor?: string | undefined;
      backgroundColor?: string | undefined;
      iconBackgroundColor?: string | undefined;
    }

    interface LabelDescriptorHtml extends LabelDescriptorBase {
      iconHtml: string;
    }

    interface LabelDescriptorUrl extends LabelDescriptorBase {
      iconUrl: string;
      iconClass?: string | undefined;
    }

    type LabelDescriptor = LabelDescriptorHtml | LabelDescriptorUrl;

    interface ImageDescriptor {
      imageUrl: string;
      imageClass?: string | undefined;
      tooltip?: string | undefined;
      orderHint?: number | undefined;
    }

    interface ThreadRowDateDescriptor {
      text: string;
      textColor?: string | undefined;
      tooltip?: string | undefined;
    }

    interface ThreadRowAttachmentIconDescriptorBase {
      tooltip?: string | undefined;
    }

    interface ThreadRowAttachmentIconUrlDescriptor extends ThreadRowAttachmentIconDescriptorBase {
      iconUrl: string;
      iconClass?: string | undefined;
    }

    interface ThreadRowAttachmentIconHtmlDescriptor extends ThreadRowAttachmentIconDescriptorBase {
      iconHtml: string;
    }

    type ThreadRowAttachmentIconDescriptor = ThreadRowAttachmentIconUrlDescriptor | ThreadRowAttachmentIconHtmlDescriptor;

    interface ThreadRowDraftLabelDescriptor {
      text: string;
      count?: string | undefined;
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
      foldColor?: string | undefined;
      mimeType?: string | undefined;
    }

    interface AttachmentCardNoPreviewOptions {
      title: string;
      description: string;
      previewUrl: string;
      iconThumbnailUrl: string;
      previewOnClick: (event: PreviewClickEvent) => void;
      fileIconImageUrl: string;
      buttons: Array<DownloadButtonDescriptor | CustomButtonDescriptor>;
      foldColor?: string | undefined;
    }

    interface PreviewClickEvent {
      attachmentCardView: AttachmentCardView;

      preventDefault(): void;
    }

    interface ContentPanelDescriptor {
      el: HTMLElement;
      title: string;
      iconUrl: string;
      appName?: string | undefined;
      appIconUrl?: string | undefined;
      id?: string | undefined;
      hideTitleBar?: boolean | undefined;
      orderHint?: number | undefined;
    }

    interface DownloadButtonDescriptor {
      downloadUrl: string;
      downloadFilename?: string | undefined;
      onClick: (event: any) => void;
      openInNewTab?: boolean | undefined;
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
      iconClass?: string | undefined;
      tooltip: string | HTMLElement;
      onClick?: (() => void) | undefined;
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
      iconClass?: string | undefined;
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
      iconUrl?: string | undefined;
      iconClass?: string | undefined;
      positions?: ToolbarButtonPosition[] | undefined;
      threadSection?: SectionNames | undefined;
      listSection?: SectionNames | undefined;
      hasDropdown?: boolean | undefined;
      hideFor?: ((routeView: Router.RouteView) => void) | undefined;
      orderHint?: number | undefined;
      keyboardShortcutHandle?: Keyboard.KeyboardShortcutHandle | undefined;
    }

    interface LegacyToolbarButtonDescriptor {
      title: string;
      onClick: (event: LegacyToolbarButtonEvent) => void;
      iconUrl?: string | undefined;
      iconClass?: string | undefined;
      section: SectionNames;
      hasDropdown?: boolean | undefined;
      hideFor?: ((routeView: Router.RouteView) => void) | undefined;
      keyboardShortcutHandle?: Keyboard.KeyboardShortcutHandle | undefined;
    }

    type ToolbarButtonPosition = 'THREAD' | 'ROW' | 'LIST';

    interface ToolbarButtonEvent {
      position: ToolbarButtonPosition;
      selectedThreadRowViews: Lists.ThreadRowView[];
      selectedThreadViews: Conversations.ThreadView[];
      dropdown?: Common.DropdownView | undefined;
    }

    interface LegacyToolbarButtonEvent {
      selectedThreadRowViews: Lists.ThreadRowView[];
      threadRowViews: Lists.ThreadRowView[];
      threadView: Conversations.ThreadView;
      dropdown?: Common.DropdownView | undefined;
    }

    interface AppToolbarButtonDescriptor {
      title: string;
      titleClass?: string | undefined;
      iconUrl: string;
      iconClass?: string | undefined;
      onClick: (event: AppToolbarButtonEvent) => void;
      arrowColor?: string | undefined;
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
      total?: number | undefined;
      hasMore?: boolean | undefined;
    }

    interface ThreadDescriptor {
      rfcMessageId?: string | undefined;
      gmailThreadId?: string | undefined;
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
      subtitle?: string | undefined;
      titleLinkText?: string | undefined;
      onTitleLinkClick?: (() => void) | undefined;
      hasDropdown?: boolean | undefined;
      onDropdownClick?: ((event: SectionDropdownClickEvent) => void) | undefined;
      tableRows?: RowDescriptor[] | undefined;
      contentElement?: HTMLElement | undefined;
      footerLinkText?: string | undefined;
      onFooterLinkClick?: ((event: any) => void) | undefined;
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
      iconHtml?: string | undefined;
      iconUrl?: string | undefined;
      iconClass?: string | undefined;
      routeID?: string | undefined;
      routeParams?: string[] | undefined;
      onClick?: (() => void) | undefined;
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
      routeID?: string | undefined;
      routeParams?: object | undefined;
      onClick?: ((event: { preventDefault(): void }) => void) | undefined;
      orderHint?: number | undefined;
      accessory?: CreateAccessoryDescriptor | IconButtonAccessoryDescriptor | DropdownButtonAccessoryDescriptor | undefined;
      backgroundColor?: string | undefined;
      expanderForegroundColor?: string | undefined;
      type?: NavItemTypes | undefined;
    }

    interface NavItemIconUrlDescriptor extends NavItemDescriptorBase {
      iconUrl?: string | undefined;
      iconClass?: string | undefined;
    }

    interface NavItemIconHtmlDescriptor extends NavItemDescriptorBase {
      iconElement?: HTMLElement | undefined;
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
      iconClass?: string | undefined;
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
      chrome?: boolean | undefined;
      constrainTitleWidth?: boolean | undefined;
      showCloseButton?: boolean | undefined;
      title?: string | undefined;
      buttons?: ModalButtonDescriptor[] | undefined;
    }

    interface ModalButtonDescriptor {
      text: string;
      title: string;
      onClick: () => void;
      type?: 'PRIMARY_ACTION' | 'SECONDARY_ACTION' | undefined;
      color?: string | undefined;
      orderHint?: number | undefined;
    }

    interface MoleOptions {
      el: HTMLElement;
      title?: string | undefined;
      titleEl?: HTMLElement | undefined;
      minimizedTitleEl?: HTMLElement | undefined;
      className?: string | undefined;
      titleButtons?: MoleButtonDescriptor[] | undefined;
      chrome?: boolean | undefined;
    }

    interface MoleButtonDescriptor {
      title: string;
      iconUrl: string;
      iconClass?: string | undefined;
      onClick: () => void;
    }

    interface DrawerOptions {
      el: HTMLElement;
      chrome?: boolean | undefined;
      title?: string | undefined;
      composeView?: Compose.ComposeView | undefined;
      closeWithCompose?: boolean | undefined;
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
      className?: string | undefined;
      priority?: number | undefined;
      time?: number | undefined;
      hideOnViewChanged?: boolean | undefined;
      persistent?: boolean | undefined;
      messageKey?: object | string | undefined;
      buttons?: MessageButtonDescriptor[] | undefined;
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
      className?: string | undefined;
      priority?: number | undefined;
      hideOnViewChanged?: boolean | undefined;
      persistent?: boolean | undefined;
      messageKey?: object | string | undefined;
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
      className?: string | undefined;
      confirmationText?: string | undefined;
      priority?: number | undefined;
      time?: number | undefined;
      confirmationTime?: number | undefined;
      showConfirmation?: boolean | undefined;
      hideOnViewChanged?: boolean | undefined;
      persistent?: boolean | undefined;
      messageKey?: object | string | undefined;
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
      iconUrl?: string | undefined;
      iconHTML?: string | undefined;
      routeName?: string | undefined;
      routeParams?: string[] | undefined;
      externalURL?: string | undefined;
      onClick?: (() => void) | undefined;
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
