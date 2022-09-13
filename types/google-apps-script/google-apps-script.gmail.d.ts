// Type definitions for Google Apps Script 2020-01-02
// Project: https://developers.google.com/apps-script/
// Definitions by: PopGoesTheWza <https://github.com/PopGoesTheWza>
//                 motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Gmail {
    /**
     * Provides access to Gmail threads, messages, and labels.
     */
    interface GmailApp {
      createDraft(recipient: string, subject: string, body: string): GmailDraft;
      createDraft(recipient: string, subject: string, body: string, options: GmailAdvancedOptions): GmailDraft;
      createLabel(name: string): GmailLabel;
      deleteLabel(label: GmailLabel): GmailApp;
      getAliases(): string[];
      getChatThreads(): GmailThread[];
      getChatThreads(start: Integer, max: Integer): GmailThread[];
      getDraft(draftId: string): GmailDraft;
      getDraftMessages(): GmailMessage[];
      getDrafts(): GmailDraft[];
      getInboxThreads(): GmailThread[];
      getInboxThreads(start: Integer, max: Integer): GmailThread[];
      getInboxUnreadCount(): Integer;
      getMessageById(id: string): GmailMessage;
      getMessagesForThread(thread: GmailThread): GmailMessage[];
      getMessagesForThreads(threads: GmailThread[]): GmailMessage[][];
      getPriorityInboxThreads(): GmailThread[];
      getPriorityInboxThreads(start: Integer, max: Integer): GmailThread[];
      getPriorityInboxUnreadCount(): Integer;
      getSpamThreads(): GmailThread[];
      getSpamThreads(start: Integer, max: Integer): GmailThread[];
      getSpamUnreadCount(): Integer;
      getStarredThreads(): GmailThread[];
      getStarredThreads(start: Integer, max: Integer): GmailThread[];
      getStarredUnreadCount(): Integer;
      getThreadById(id: string): GmailThread;
      getTrashThreads(): GmailThread[];
      getTrashThreads(start: Integer, max: Integer): GmailThread[];
      getUserLabelByName(name: string): GmailLabel;
      getUserLabels(): GmailLabel[];
      markMessageRead(message: GmailMessage): GmailApp;
      markMessageUnread(message: GmailMessage): GmailApp;
      markMessagesRead(messages: GmailMessage[]): GmailApp;
      markMessagesUnread(messages: GmailMessage[]): GmailApp;
      markThreadImportant(thread: GmailThread): GmailApp;
      markThreadRead(thread: GmailThread): GmailApp;
      markThreadUnimportant(thread: GmailThread): GmailApp;
      markThreadUnread(thread: GmailThread): GmailApp;
      markThreadsImportant(threads: GmailThread[]): GmailApp;
      markThreadsRead(threads: GmailThread[]): GmailApp;
      markThreadsUnimportant(threads: GmailThread[]): GmailApp;
      markThreadsUnread(threads: GmailThread[]): GmailApp;
      moveMessageToTrash(message: GmailMessage): GmailApp;
      moveMessagesToTrash(messages: GmailMessage[]): GmailApp;
      moveThreadToArchive(thread: GmailThread): GmailApp;
      moveThreadToInbox(thread: GmailThread): GmailApp;
      moveThreadToSpam(thread: GmailThread): GmailApp;
      moveThreadToTrash(thread: GmailThread): GmailApp;
      moveThreadsToArchive(threads: GmailThread[]): GmailApp;
      moveThreadsToInbox(threads: GmailThread[]): GmailApp;
      moveThreadsToSpam(threads: GmailThread[]): GmailApp;
      moveThreadsToTrash(threads: GmailThread[]): GmailApp;
      refreshMessage(message: GmailMessage): GmailApp;
      refreshMessages(messages: GmailMessage[]): GmailApp;
      refreshThread(thread: GmailThread): GmailApp;
      refreshThreads(threads: GmailThread[]): GmailApp;
      search(query: string): GmailThread[];
      search(query: string, start: Integer, max: Integer): GmailThread[];
      sendEmail(recipient: string, subject: string, body: string): GmailApp;
      sendEmail(recipient: string, subject: string, body: string, options: GmailAdvancedOptions): GmailApp;
      setCurrentMessageAccessToken(accessToken: string): void;
      starMessage(message: GmailMessage): GmailApp;
      starMessages(messages: GmailMessage[]): GmailApp;
      unstarMessage(message: GmailMessage): GmailApp;
      unstarMessages(messages: GmailMessage[]): GmailApp;
    }
    /**
     * An attachment from Gmail. This is a regular Blob except that it has an extra getSize() method that is faster than calling
     * getBytes().length and does not count against the Gmail read quota.
     *
     *     // Logs information about any attachments in the first 100 inbox threads.
     *     var threads = GmailApp.getInboxThreads(0, 100);
     *     var msgs = GmailApp.getMessagesForThreads(threads);
     *     for (var i = 0 ; i < msgs.length; i++) {
     *       for (var j = 0; j < msgs[i].length; j++) {
     *         var attachments = msgs[i][j].getAttachments();
     *         for (var k = 0; k < attachments.length; k++) {
     *           Logger.log('Message "%s" contains the attachment "%s" (%s bytes)',
     *                      msgs[i][j].getSubject(), attachments[k].getName(), attachments[k].getSize());
     *         }
     *       }
     *     }
     */
    interface GmailAttachment {
      copyBlob(): Base.Blob;
      getAs(contentType: string): Base.Blob;
      getBytes(): Byte[];
      getContentType(): string;
      getDataAsString(): string;
      getDataAsString(charset: string): string;
      getHash(): string;
      getName(): string;
      getSize(): Integer;
      isGoogleType(): boolean;
      setBytes(data: Byte[]): Base.Blob;
      setContentType(contentType: string): Base.Blob;
      setContentTypeFromExtension(): Base.Blob;
      setDataFromString(string: string): Base.Blob;
      setDataFromString(string: string, charset: string): Base.Blob;
      setName(name: string): Base.Blob;
      /** @deprecated DO NOT USE */ getAllBlobs(): Base.Blob[];
    }
    /**
     * A user-created draft message in a user's Gmail account.
     */
    interface GmailDraft {
      /**
       * Deletes this draft message.
       */
      deleteDraft(): void;
      /**
       * Gets the ID of this draft message.
       */
      getId(): string;
      /**
       * Returns a GmailMessage representing this draft.
       */
      getMessage(): GmailMessage;
      /**
       * Returns the ID of the `GmailMessage` representing this draft.
       */
      getMessageId(): string;
      /**
       * Sends this draft email message.
       */
      send(): GmailMessage;
      /**
       * Replaces the contents of this draft message.
       */
      update(recipient: string, subject: string, body: string): GmailDraft;
      /**
       * Replaces the contents of this draft message using optional arguments.
       */
      update(recipient: string, subject: string, body: string, options: GmailAdvancedOptions): GmailDraft;
    }
    /**
     * Options for a Gmail draft.
     */
    interface GmailAdvancedOptions {
      /**
       * An array of files to send with the email.
       */
      attachments?: Base.BlobSource[] | undefined;
      /**
       * A comma-separated list of email addresses to BCC.
       */
      bcc?: string | undefined;
      /**
       * A comma-separated list of email addresses to CC.
       */
      cc?: string | undefined;
      /**
       * The address that the email should be sent from, which must be one of the values returned by `GmailApp.getAliases()`.
       */
      from?: string | undefined;
      /**
       * If set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional `inlineImages` field in HTML body if you have inlined images for your email.
       */
      htmlBody?: string | undefined;
      /**
       * A JavaScript object containing a mapping from image key (`String`) to image data (`BlobSource`) ; this assumes that the `htmlBody` parameter is used and contains references to these images in the format `<img src="cid:imageKey" />`.
       */
      inlineImages?: { [imageKey: string]: Base.BlobSource } | undefined;
      /**
       * The name of the sender of the email (default: the user's name).
       */
      name?: string | undefined;
      /**
       * True if the email should be sent from a generic no-reply email address to discourage recipients from responding to emails; this option is only possible for Google Workspace accounts, not Gmail users.
       */
      noReply?: boolean | undefined;
      /**
       * An email address to use as the default reply-to address (default: the user's email address).
       */
      replyTo?: string | undefined;
    }
    /** alias to GmailAdvancedOptions */
    type GmailDraftOptions = GmailAdvancedOptions;
    /**
     * Options for a Gmail Attachments.
     */
    interface GmailAttachmentOptions {
      /**
       * If the returned array of Blob attachments should include inline images.
       */
      includeInlineImages?: boolean | undefined;
      /**
       *  If the returned array of Blob attachments should include regular (non-inline) attachments.
       */
      includeAttachments?: boolean | undefined;
      /**
       * A comma-separated list of email addresses to BCC.
       */
    }
    /**
     * A user-created label in a user's Gmail account.
     */
    interface GmailLabel {
      addToThread(thread: GmailThread): GmailLabel;
      addToThreads(threads: GmailThread[]): GmailLabel;
      deleteLabel(): void;
      getName(): string;
      getThreads(): GmailThread[];
      getThreads(start: Integer, max: Integer): GmailThread[];
      getUnreadCount(): Integer;
      removeFromThread(thread: GmailThread): GmailLabel;
      removeFromThreads(threads: GmailThread[]): GmailLabel;
    }
    /**
     * A message in a user's Gmail account.
     */
    interface GmailMessage {
      createDraftReply(body: string): GmailDraft;
      createDraftReply(body: string, options: GmailAdvancedOptions): GmailDraft;
      createDraftReplyAll(body: string): GmailDraft;
      createDraftReplyAll(body: string, options: GmailAdvancedOptions): GmailDraft;
      forward(recipient: string): GmailMessage;
      forward(recipient: string, options: GmailAdvancedOptions): GmailMessage;
      getAttachments(): GmailAttachment[];
      getAttachments(options: GmailAttachmentOptions): GmailAttachment[];
      getBcc(): string;
      getBody(): string;
      getCc(): string;
      getDate(): Base.Date;
      getFrom(): string;
      getHeader(name: string): string;
      getId(): string;
      getPlainBody(): string;
      getRawContent(): string;
      getReplyTo(): string;
      getSubject(): string;
      getThread(): GmailThread;
      getTo(): string;
      isDraft(): boolean;
      isInChats(): boolean;
      isInInbox(): boolean;
      isInPriorityInbox(): boolean;
      isInTrash(): boolean;
      isStarred(): boolean;
      isUnread(): boolean;
      markRead(): GmailMessage;
      markUnread(): GmailMessage;
      moveToTrash(): GmailMessage;
      refresh(): GmailMessage;
      reply(body: string): GmailMessage;
      reply(body: string, options: GmailAdvancedOptions): GmailMessage;
      replyAll(body: string): GmailMessage;
      replyAll(body: string, options: GmailAdvancedOptions): GmailMessage;
      star(): GmailMessage;
      unstar(): GmailMessage;
    }
    /**
     * A thread in a user's Gmail account.
     */
    interface GmailThread {
      addLabel(label: GmailLabel): GmailThread;
      createDraftReply(body: string): GmailDraft;
      createDraftReply(body: string, options: GmailAdvancedOptions): GmailDraft;
      createDraftReplyAll(body: string): GmailDraft;
      createDraftReplyAll(body: string, options: GmailAdvancedOptions): GmailDraft;
      getFirstMessageSubject(): string;
      getId(): string;
      getLabels(): GmailLabel[];
      getLastMessageDate(): Base.Date;
      getMessageCount(): Integer;
      getMessages(): GmailMessage[];
      getPermalink(): string;
      hasStarredMessages(): boolean;
      isImportant(): boolean;
      isInChats(): boolean;
      isInInbox(): boolean;
      isInPriorityInbox(): boolean;
      isInSpam(): boolean;
      isInTrash(): boolean;
      isUnread(): boolean;
      markImportant(): GmailThread;
      markRead(): GmailThread;
      markUnimportant(): GmailThread;
      markUnread(): GmailThread;
      moveToArchive(): GmailThread;
      moveToInbox(): GmailThread;
      moveToSpam(): GmailThread;
      moveToTrash(): GmailThread;
      refresh(): GmailThread;
      removeLabel(label: GmailLabel): GmailThread;
      reply(body: string): GmailThread;
      reply(body: string, options: GmailAdvancedOptions): GmailThread;
      replyAll(body: string): GmailThread;
      replyAll(body: string, options: GmailAdvancedOptions): GmailThread;
    }
  }
}

declare var GmailApp: GoogleAppsScript.Gmail.GmailApp;
