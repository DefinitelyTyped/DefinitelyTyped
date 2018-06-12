import ComposeView = InboxSDK.Compose.ComposeView;
import Contact = InboxSDK.Common.Contact;
import ThreadRowView = InboxSDK.Lists.ThreadRowView;
import ThreadView = InboxSDK.Conversations.ThreadView;
import SimpleElementView = InboxSDK.Common.SimpleElementView;
import ContentPanelView = InboxSDK.Conversations.ContentPanelView;
import MessageView = InboxSDK.Conversations.MessageView;
import AttachmentCardView = InboxSDK.Conversations.AttachmentCardView;
import AttachmentCardClickEvent = InboxSDK.Conversations.AttachmentCardClickEvent;
import MessageViewLinkDescriptor = InboxSDK.Conversations.MessageViewLinkDescriptor;
import SectionDescriptor = InboxSDK.Router.SectionDescriptor;
import NavItemDescriptor = InboxSDK.NavMenu.NavItemDescriptor;

InboxSDK.load(1, '1234').then((_sdk: InboxSDK.InboxSDKInstance) => {
  _sdk.ButterBar.hideGmailMessage();
});

InboxSDK.load(1, '1234', {}).then(() => console.log('done'));
InboxSDK.load(1, '1234', {
  appIconUrl: 'url',
  appName: 'name',
  suppressAddonTitle: 'su'
}).then(() => console.log('done'));

InboxSDK.loadScript('https://google.com').then(() => console.log('done'));
InboxSDK.loadScript('https://google.com', {}).then(() => console.log('done'));
InboxSDK.loadScript('https://google.com', {nowrap: true}).then(() => console.log('done'));

InboxSDK.load(1, '1234').then((sdk: InboxSDK.InboxSDKInstance) => {
  sdk.ButterBar.showMessage({
    text: 'text',
  });

  sdk.ButterBar.showMessage({
    text: 'text',
    className: 'c',
    hideOnViewChanged: true,
    persistent: true,
    priority: 1,
    time: 1,
    messageKey: '1'
  });

  const el: HTMLElement = new HTMLElement();

  sdk.ButterBar.showMessage({
    el,
  });

  sdk.ButterBar.showMessage({
    el,
    className: 'c',
    hideOnViewChanged: true,
    persistent: true,
    priority: 1,
    time: 1,
    messageKey: '1'
  });

  sdk.ButterBar.showMessage({
    html: '<p></p>',
  });

  sdk.ButterBar.showMessage({
    html: '<p></p>',
    className: 'c',
    hideOnViewChanged: true,
    persistent: true,
    priority: 1,
    time: 1,
    messageKey: '1'
  });

  sdk.ButterBar.showLoading();

  sdk.ButterBar.showError({
    text: 'error'
  });

  sdk.ButterBar.showSaving({
    text: 'saving'
  });

  sdk.ButterBar.hideMessage('key');
  sdk.ButterBar.hideGmailMessage();
});

InboxSDK.load(1, '1234').then((sdk: InboxSDK.InboxSDKInstance) => {
  const unregister = sdk.Compose.registerComposeViewHandler((composeView: ComposeView) => {
    composeView.addButton({
      title: 'button title',
      onClick: e => {
        const eq = e.composeView === composeView;
        const dropdownDestroyed = e.dropdown.destroyed;

        e.dropdown.close();

        const el: HTMLElement = e.dropdown.el;

        e.dropdown.setPlacementOptions({});
        e.dropdown.setPlacementOptions({
          bottomBuffer: 1,
          buffer: 1,
          forceHAlign: true,
          forcePosition: true,
          forceVAlign: true,
          hAlign: 'center',
          position: 'middle',
          rightBuffer: 1,
          topBuffer: 1,
          vAlign: 'top',
          leftBuffer: 1
        });
      }
    });

    const statusBarView = composeView.addStatusBar({});
    statusBarView.setHeight(1);

    composeView.addStatusBar({
      height: 1,
      orderHint: 1
    });

    composeView.close();

    composeView.send();
    composeView.send({sendAndArchive: true});

    const element: HTMLElement = composeView.getBodyElement();
    const msgId: string = composeView.getInitialMessageID();
    const threadId: string = composeView.getThreadID();
    composeView.getDraftID().then(draftId => {
      const id: string = draftId.toLowerCase();
    });
    composeView.getCurrentDraftID().then(draftId => {
      if (draftId) {
        const id: string = draftId.toLowerCase();
      }
    });

    const html: string = composeView.getHTMLContent();
    const bodyHtml: string = composeView.getSelectedBodyHTML();
    const bodyText: string = composeView.getSelectedBodyText();
    const subject: string = composeView.getSubject();
    const textContent: string = composeView.getTextContent();
    const contacts: Contact[] = composeView.getToRecipients();
    const contactsCC: Contact[] = composeView.getCcRecipients();
    const contactsBCC: Contact[] = composeView.getBccRecipients();

    composeView.insertTextIntoBodyAtCursor('text');
    const el1: HTMLElement = composeView.insertHTMLIntoBodyAtCursor(new HTMLElement());
    const el2: HTMLElement = composeView.insertHTMLIntoBodyAtCursor('html');

    const el3: HTMLElement = composeView.insertLinkChipIntoBodyAtCursor('text', 'http://url.com', 'http://url.com/favicon.ico');
    const el4: HTMLElement = composeView.insertLinkIntoBodyAtCursor('text', 'http://url.com');

    const inline: boolean = composeView.isInlineReplyForm();
    const fullScreen: boolean = composeView.isFullscreen();
    const minimized: boolean = composeView.isMinimized();
    composeView.setFullscreen(true);
    composeView.setMinimized(true);
    composeView.popOut().then(view => view === composeView);

    const removeColor = composeView.setTitleBarColor('red');
    removeColor();

    const isReply: boolean = composeView.isReply();

    composeView.setToRecipients(['a@a.com', 'b@b.com']);
    composeView.setCcRecipients(['a@a.com', 'b@b.com']);
    composeView.setBccRecipients(['a@a.com', 'b@b.com']);

    const fromContact: InboxSDK.Common.Contact = composeView.getFromContact();
    const fromContacts: InboxSDK.Common.Contact[] = composeView.getFromContactChoices();

    composeView.setFromEmail('a@a.com');
    composeView.setSubject('subject');
    composeView.setBodyHTML('<p></p>');
    composeView.setBodyText('text');
    composeView.attachFiles([new Blob()]).then(() => console.log());
    composeView.attachInlineFiles([new Blob()]).then(() => console.log());

    composeView.on('destroy', event => {
      const msgId: string = event.messageID;
      const byInbox: boolean = event.closedByInboxSDK;
    });

    composeView.on('fullscreenChanged', event => {
      const fs: boolean = event.fullscreen;
    });

    composeView.on('fromContactChanged', event => {
      const c: InboxSDK.Common.Contact = event.contact;
    });

    composeView.on('toContactAdded', event => {
      const c: InboxSDK.Common.Contact = event.contact;
    });

    composeView.on('toContactRemoved', event => {
      const c: InboxSDK.Common.Contact = event.contact;
    });

    composeView.on('ccContactAdded', event => {
      const c: InboxSDK.Common.Contact = event.contact;
    });

    composeView.on('ccContactRemoved', event => {
      const c: InboxSDK.Common.Contact = event.contact;
    });

    composeView.on('bccContactAdded', event => {
      const c: InboxSDK.Common.Contact = event.contact;
    });

    composeView.on('bccContactRemoved', event => {
      const c: InboxSDK.Common.Contact = event.contact;
    });

    composeView.on('recipientsChanged', event => {
      let c: InboxSDK.Common.Contact;
      c = event.to.added[0];
      c = event.to.removed[0];
      c = event.cc.added[0];
      c = event.cc.removed[0];
      c = event.bcc.added[0];
      c = event.bcc.removed[0];
    });

    composeView.on('presending', event => {
      event.cancel();
    });

    composeView.on('sent', event => {
      event.getMessageID().then(msgId => msgId.toLowerCase());
      event.getThreadID().then(threadId => threadId.toLowerCase());
    });

    composeView.on('discard', () => {
      console.log();
    });
    composeView.on('sendCanceled', () => {
      console.log();
    });
    composeView.on('sending', () => {
      console.log();
    });
    composeView.on('bodyChanged', () => {
      console.log();
    });
    composeView.on('minimized', () => {
      console.log();
    });
    composeView.on('restored', () => {
      console.log();
    });

    const destroyed: boolean = composeView.destroyed;
  });

  unregister();
});

InboxSDK.load(1, '1234').then((sdk: InboxSDK.InboxSDKInstance) => {
  const unregister = sdk.Lists.registerThreadRowViewHandler((threadRowView: ThreadRowView) => {
    threadRowView.addLabel({
      title: 'title',
      iconUrl: 'http://url.com'
    });

    threadRowView.addLabel({
      title: 'title',
      iconUrl: 'http://url.com',
      backgroundColor: 'red',
      foregroundColor: 'blue',
      iconBackgroundColor: 'yellow',
      iconClass: 'big'
    });

    threadRowView.addImage({
      imageUrl: 'http://url.com'
    });

    threadRowView.addImage({
      imageUrl: 'http://url.com',
      imageClass: 'big',
      tooltip: 'tooltip',
      orderHint: 1
    });

    threadRowView.addButton({
      title: 'title',
      iconUrl: 'http://url.com',
      onClick: event => {
        const eq = event.threadRowView === threadRowView;
        if (event.dropdown) {
          event.dropdown.close();
        }
      },
      hasDropdown: true
    });

    threadRowView.addButton({
      title: 'title',
      iconUrl: 'http://url.com',
      onClick: event => {
      },
      hasDropdown: false,
      iconClass: 'big'
    });

    threadRowView.addActionButton({
      type: 'LINK',
      title: 'title',
      className: 'big',
      url: 'http://url.com',
      onClick: () => {
      }
    });

    threadRowView.addAttachmentIcon({});
    threadRowView.addAttachmentIcon({
      tooltip: 'tooltip',
      iconClass: 'big',
      iconUrl: 'http://url.com'
    });

    threadRowView.replaceDate({
      text: '1/1/2000'
    });
    threadRowView.replaceDate({
      text: '1/1/2000',
      textColor: 'red',
      tooltip: 'tooltip'
    });

    threadRowView.replaceDraftLabel({
      text: 'my draft'
    });
    threadRowView.replaceDraftLabel({
      text: 'my draft',
      count: '2'
    });

    const subject: string = threadRowView.getSubject();
    const date: string = threadRowView.getDateString();
    threadRowView.getThreadIDAsync().then(threadId => threadId.toLowerCase());
    threadRowView.getThreadIDIfStableAsync().then(threadId => {
      if (threadId) {
        threadId.toLowerCase();
      }
    });
    threadRowView.getDraftID().then(draftId => draftId.toLowerCase());

    const count1: number = threadRowView.getVisibleDraftCount();
    const count2: number = threadRowView.getVisibleMessageCount();

    const contacts: InboxSDK.Common.Contact[] = threadRowView.getContacts();

    threadRowView.on('destroyed', () => console.log());

    const destroyed: boolean = threadRowView.destroyed;
  });

  unregister();
});

InboxSDK.load(1, '1234').then((sdk: InboxSDK.InboxSDKInstance) => {
  const unregister = sdk.Conversations.registerThreadViewHandler((threadView: ThreadView) => {
    const noticeBar: SimpleElementView = threadView.addNoticeBar();
    noticeBar.destroy();

    const contentPanel: ContentPanelView = threadView.addSidebarContentPanel({
      el: new HTMLElement(),
      title: 'title',
      iconUrl: 'http://url.com',
    });

    contentPanel.remove();
    const destroyed: boolean = contentPanel.destroyed;
    contentPanel.on('destroy', () => console.log());
    contentPanel.on('deactivate', () => console.log());
    contentPanel.on('activate', () => console.log());

    threadView.addSidebarContentPanel({
      el: new HTMLElement(),
      title: 'title',
      iconUrl: 'http://url.com',
      appIconUrl: 'http://url.com',
      appName: 'app name',
      id: '1',
      orderHint: 1,
      hideTitleBar: true
    });

    const messageViews: MessageView[] = threadView.getMessageViews();
    const allMessageViews: MessageView[] = threadView.getMessageViewsAll();
    const subject: string = threadView.getSubject();
    threadView.getThreadIDAsync().then(threadId => threadId.toLowerCase());

    threadView.on('contactHover', event => {
      const contact: Contact = event.contact;
      const eq1 = event.messageView === messageViews[0];
      const eq2 = event.threadView === threadView;
      const isSender: boolean = event.contactType === 'sender';
    });

    threadView.on('destroy', () => console.log());
  });

  unregister();
});

InboxSDK.load(1, '1234').then((sdk: InboxSDK.InboxSDKInstance) => {
  const unregister = sdk.Conversations.registerMessageViewHandler((messageView: MessageView) => {
    const attachmentCardView: AttachmentCardView = messageView.addAttachmentCardView({
      title: 'title',
      description: 'desc',
      previewUrl: 'http://url.com',
      previewThumbnailUrl: 'http://url.com',
      failoverPreviewIconUrl: 'http://url.com',
      previewOnClick: event => {
        const eq = event.attachmentCardView === attachmentCardView;
        event.preventDefault();
      },
      fileIconImageUrl: 'http://url.com',
      buttons: [
        {
          downloadUrl: 'http://url.com',
          downloadFilename: 'file.txt',
          openInNewTab: true,
          onClick: () => {
          }
        },
        {
          iconUrl: 'http://url.com',
          tooltip: 'tooltip',
          onClick: (event: AttachmentCardClickEvent) => event.getDownloadURL().then(url => url.toLowerCase())
        }
      ],
      foldColor: 'red',
      mimeType: 'text'
    });

    const attachmentType: string = attachmentCardView.getAttachmentType();
    const title: string = attachmentCardView.getTitle();
    const msgView: MessageView | null = attachmentCardView.getMessageView();
    attachmentCardView.addButton({
      iconUrl: 'http://url.com',
      tooltip: 'tooltip',
      onClick: (event: AttachmentCardClickEvent) => event.getDownloadURL().then(url => url.toLowerCase())
    });

    attachmentCardView.on('destroy', () => console.log());
    const destroyed: boolean = attachmentCardView.destroyed;

    messageView.addAttachmentsToolbarButton({
      iconUrl: 'http://url.com',
      tooltip: 'tooltip',
      onClick: event => {
        const attType: string = event.attachmentCardViews[0].getAttachmentType();
      }
    });

    messageView.addToolbarButton({
      section: 'MORE',
      title: 'title',
      iconUrl: 'http://url.com',
      iconClass: 'big',
      onClick: () => {
      },
      orderHint: 1
    });

    const el: HTMLElement = messageView.getBodyElement();
    messageView.getMessageIDAsync().then(msgId => msgId.toLowerCase());
    const attCardViews: AttachmentCardView[] = messageView.getFileAttachmentCardViews();
    const isQuotedArea = messageView.isElementInQuotedArea();
    const isLoaded = messageView.isLoaded();
    const links: MessageViewLinkDescriptor[] = messageView.getLinksInBody();
    links[0].text.toLowerCase();
    links[0].element.click();
    links[0].html.toLowerCase();
    const isInQuotedArea: boolean = links[0].isInQuotedArea;
    links[0].href.toLowerCase();

    const contact: Contact = messageView.getSender();
    const add: string[] = messageView.getRecipientEmailAddresses();
    messageView.getRecipientsFull().then(contacts => {
      const c: Contact = contacts[0];
    });

    const threadView: ThreadView = messageView.getThreadView();
    const date: string = messageView.getDateString();
    messageView.addAttachmentIcon({
      iconUrl: 'http://url.com',
      iconClass: 'big',
      onClick: () => {
      },
      tooltip: 'tooltip'
    });

    const eq = messageView.getViewState() === 'HIDDEN';

    messageView.on('viewStateChange', event => {
      const eq1 = event.newViewState === 'COLLAPSED';
      const eq2 = event.oldViewState === 'EXPANDED';
      const eq3 = event.messageView === messageView;
    });

    messageView.on('contactHover', event => {
      event.contact.name.toLowerCase();
    });

    messageView.on('load', () => console.log());
    messageView.on('destroy', () => console.log());

    const destroyed1: boolean = messageView.destroyed;
  });

  unregister();
});

InboxSDK.load(1, '1234').then((sdk: InboxSDK.InboxSDKInstance) => {
  const unregister = sdk.Conversations.registerMessageViewHandlerAll((messageView: MessageView) => {
    const isLoaded: boolean = messageView.isLoaded();
  });

  unregister();
});

InboxSDK.load(1, '1234').then((sdk: InboxSDK.InboxSDKInstance) => {
  const unregister = sdk.Conversations.registerFileAttachmentCardViewHandler((attachmentCardView: AttachmentCardView) => {
    const messageView: MessageView | null = attachmentCardView.getMessageView();
  });

  unregister();
});

InboxSDK.load(1, '1234').then((sdk: InboxSDK.InboxSDKInstance) => {
  const unregister = sdk.Toolbars.registerThreadButton({
    hasDropdown: true,
    hideFor: (routeView => routeView.getParams()),
    iconClass: 'big',
    iconUrl: 'http://url.com',
    keyboardShortcutHandle: {
      remove: () => {
      }
    },
    listSection: 'INBOX_STATE',
    onClick: event => event.position === 'LIST',
    orderHint: 1,
    positions: ['LIST', 'ROW'],
    threadSection: 'METADATA_STATE',
    title: 'title'
  });

  unregister();

  sdk.Toolbars.addToolbarButtonForApp({
    iconClass: 'big',
    arrowColor: 'red',
    iconUrl: 'http://url.com',
    onClick: event => event.dropdown.close(),
    title: 'title',
    titleClass: 'big'
  });
});

InboxSDK.load(1, '1234').then((sdk: InboxSDK.InboxSDKInstance) => {
  sdk.Router.createLink('1234', {p1: 1, 0: 1}).toLowerCase();
  sdk.Router.goto('1234', {p1: 1, 0: 1});

  const unregister1 = sdk.Router.handleCustomRoute('1234', customRouteView => {
    customRouteView.getParams();
    customRouteView.setFullWidth(true);
    customRouteView.getElement().click();
  });

  unregister1();

  const unregister2 = sdk.Router.handleAllRoutes(routeView => {
    routeView.getParams();
    routeView.getRouteID();
    routeView.getRouteType();
    routeView.on('destroy', () => {
    });
    const destroyed: boolean = routeView.destroyed;
  });

  unregister2();

  const unregister3 = sdk.Router.handleListRoute('ALL_MAIL', listRouteView => {
    const sectionDescriptor: SectionDescriptor = {
      contentElement: new HTMLElement(),
      footerLinkText: 'text',
      hasDropdown: true,
      onDropdownClick: event => event.dropdown.close(),
      onFooterLinkClick: event => {
      },
      onTitleLinkClick: () => {
      },
      subtitle: 'title',
      tableRows: [{
        body: 'body',
        iconClass: 'big',
        iconUrl: 'http://url.com',
        isRead: 'true',
        labels: [{
          iconClass: 'big',
          iconBackgroundColor: 'red',
          foregroundColor: 'green',
          backgroundColor: 'blue',
          iconUrl: 'http://url.com',
          title: 'title'
        }],
        onClick: () => {
        },
        routeID: '1234',
        routeParams: ['p1'],
        shortDetailText: 'text',
        title: 'title'
      }],
      title: 'title',
      titleLinkText: 'text'
    };

    listRouteView.addCollapsibleSection(sectionDescriptor);
    listRouteView.addSection(sectionDescriptor);

    listRouteView.refresh();
  });

  unregister3();

  const unregister4 = sdk.Router.handleCustomListRoute('1234', (offset, max) => {
    return {
      threads: [
        {
          rfcMessageId: 'id',
          gmailThreadId: 'id'
        },
        'id'
      ],
      total: 1,
      hasMore: true,
    };
  });

  unregister4();

  sdk.Router.getCurrentRouteView().getRouteID().toLowerCase();
});

InboxSDK.load(1, '1234').then((sdk: InboxSDK.InboxSDKInstance) => {
  const navItemDescriptor: NavItemDescriptor = {
    accessory: {
      type: 'CREATE',
      onClick: () => {
      }
    },
    backgroundColor: 'red',
    expanderForegroundColor: 'green',
    iconClass: 'big',
    iconUrl: 'http://url.com',
    name: 'name',
    onClick: event => event.preventDefault(),
    orderHint: 1,
    routeID: '1234',
    routeParams: {p: 1},
    type: 'MANAGE'
  };

  const navItem = sdk.NavMenu.addNavItem(navItemDescriptor);
  const navItem1 = navItem.addNavItem(navItemDescriptor);
  navItem.remove();
  navItem1.remove();

  const isCollapsed: boolean = navItem.isCollapsed();
  navItem.setCollapsed(true);

  navItem.on('destroy', () => {
  });
  const destroyed: boolean = navItem.destroyed;
});

InboxSDK.load(1, '1234').then((sdk: InboxSDK.InboxSDKInstance) => {
  const modalView = sdk.Widgets.showModalView({
    buttons: [{
      color: 'red',
      onClick: () => {
      },
      orderHint: 1,
      text: 'text',
      title: 'title',
      type: 'PRIMARY_ACTION'
    }],
    chrome: true,
    constrainTitleWidth: true,
    el: new HTMLElement(),
    showCloseButton: true,
    title: 'title'
  });

  modalView.close();
  modalView.on('destroyed', () => {
  });
  const destroyed: boolean = modalView.destroyed;

  const moleView = sdk.Widgets.showMoleView({
    chrome: true,
    className: 'big',
    el: new HTMLElement(),
    minimizedTitleEl: new HTMLElement(),
    title: 'title',
    titleEl: new HTMLElement(),
    titleButtons: [{
      iconClass: 'big',
      iconUrl: 'http://url.com',
      onClick: () => {
      },
      title: 'title'
    }]
  });

  moleView.close();
  const minimized: boolean = moleView.getMinimized();
  moleView.setMinimized(true);
  moleView.setTitle('title');
  moleView.on('destroyed', () => {
  });
  moleView.on('minimize', () => {
  });
  moleView.on('restore', () => {
  });

  const drawerView = sdk.Widgets.showDrawerView({
    chrome: true,
    closeWithCompose: true,
    el: new HTMLElement(),
    title: 'title'
  });

  drawerView.close();
  drawerView.disassociateComposeView();
  const destroyed1: boolean = drawerView.destroyed;
  drawerView.on('destroyed', () => {
  });
  drawerView.on('slideAnimationDone', () => {
  });
  drawerView.on('closing', () => {
  });
});

InboxSDK.load(1, '1234').then((sdk: InboxSDK.InboxSDKInstance) => {
  const searchResults = [{
    iconUrl: 'http://url.com',
    onClick: () => {
    },
    description: 'desc',
    externalURL: 'http://url.com',
    name: 'name',
    routeName: 'name',
    routeParams: ['a', 'b']
  }, {
    iconUrl: 'http://url.com',
    onClick: () => {
    },
    descriptionHTML: 'desc',
    externalURL: 'http://url.com',
    nameHTML: 'name',
    routeName: 'name',
    routeParams: ['a', 'b']
  }];

  sdk.Search.registerSearchSuggestionsProvider(query => searchResults);
  sdk.Search.registerSearchSuggestionsProvider(query => Promise.resolve(searchResults));

  sdk.Search.registerSearchQueryRewriter({
    term: 'a',
    termReplacer: () => 'b'
  });

  sdk.Search.registerSearchQueryRewriter({
    term: 'a',
    termReplacer: () => Promise.resolve('b')
  });
});

InboxSDK.load(1, '1234').then((sdk: InboxSDK.InboxSDKInstance) => {
  sdk.User.getEmailAddress().toLowerCase();
  const isConversationViewDisabled: boolean = sdk.User.isConversationViewDisabled();
  const isUsingGmailMaterialUI: boolean = sdk.User.isUsingGmailMaterialUI();
  sdk.User.getLanguage().toLowerCase();
  sdk.User.getAccountSwitcherContactList()[0].name.toLowerCase();
});

InboxSDK.load(1, '1234').then((sdk: InboxSDK.InboxSDKInstance) => {
  const panel = sdk.Global.addSidebarContentPanel({
    el: new HTMLElement(),
    title: 'title',
    iconUrl: 'http://url.com'
  });
  panel.remove();
});

InboxSDK.load(1, '1234').then((sdk: InboxSDK.InboxSDKInstance) => {
  const handler = sdk.Keyboard.createShortcutHandle({
    chord: 'a',
    description: 'b'
  });

  handler.remove();
});
