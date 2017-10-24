// Type definitions for Google Apps Script 2017-05-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  export module Gmail {
    /**
     * Provides access to Gmail threads, messages, and labels.
     */
    export interface GmailApp {
      createLabel(name: string): GmailLabel;
      deleteLabel(label: GmailLabel): GmailApp;
      getAliases(): string[];
      getChatThreads(): GmailThread[];
      getChatThreads(start: Integer, max: Integer): GmailThread[];
      getDraftMessages(): GmailMessage[];
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
      sendEmail(recipient: string, subject: string, body: string, options: Object): GmailApp;
      starMessage(message: GmailMessage): GmailApp;
      starMessages(messages: GmailMessage[]): GmailApp;
      unstarMessage(message: GmailMessage): GmailApp;
      unstarMessages(messages: GmailMessage[]): GmailApp;
    }

    /**
     * An attachment from Gmail. This is a regular
     *  Blob except that it has an extra
     *  getSize() method that is faster than calling getBytes().length and does
     *  not count against the Gmail read quota.
     *
     *      // Logs information about any attachments in the first 100 inbox threads.
     *      var threads = GmailApp.getInboxThreads(0, 100);
     *      var msgs = GmailApp.getMessagesForThreads(threads);
     *      for (var i = 0 ; i < msgs.length; i++) {
     *        for (var j = 0; j < msgs[i].length; j++) {
     *          var attachments = msgs[i][j].getAttachments();
     *          for (var k = 0; k < attachments.length; k++) {
     *            Logger.log('Message "%s" contains the attachment "%s" (%s bytes)',
     *                       msgs[i][j].getSubject(), attachments[k].getName(), attachments[k].getSize());
     *          }
     *        }
     *      }
     */
    export interface GmailAttachment {
      copyBlob(): Base.Blob;
      getAs(contentType: string): Base.Blob;
      getBytes(): Byte[];
      getContentType(): string;
      getDataAsString(): string;
      getDataAsString(charset: string): string;
      getName(): string;
      getSize(): Integer;
      isGoogleType(): boolean;
      setBytes(data: Byte[]): Base.Blob;
      setContentType(contentType: string): Base.Blob;
      setContentTypeFromExtension(): Base.Blob;
      setDataFromString(string: string): Base.Blob;
      setDataFromString(string: string, charset: string): Base.Blob;
      setName(name: string): Base.Blob;
      getAllBlobs(): Base.Blob[];
    }

    /**
     * A user-created label in a user's Gmail account.
     */
    export interface GmailLabel {
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
    export interface GmailMessage {
      forward(recipient: string): GmailMessage;
      forward(recipient: string, options: Object): GmailMessage;
      getAttachments(): GmailAttachment[];
      getBcc(): string;
      getBody(): string;
      getCc(): string;
      getDate(): Date;
      getFrom(): string;
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
      isInTrash(): boolean;
      isStarred(): boolean;
      isUnread(): boolean;
      markRead(): GmailMessage;
      markUnread(): GmailMessage;
      moveToTrash(): GmailMessage;
      refresh(): GmailMessage;
      reply(body: string): GmailMessage;
      reply(body: string, options: Object): GmailMessage;
      replyAll(body: string): GmailMessage;
      replyAll(body: string, options: Object): GmailMessage;
      star(): GmailMessage;
      unstar(): GmailMessage;
    }

    /**
     * A thread in a user's Gmail account.
     */
    export interface GmailThread {
      addLabel(label: GmailLabel): GmailThread;
      getFirstMessageSubject(): string;
      getId(): string;
      getLabels(): GmailLabel[];
      getLastMessageDate(): Date;
      getMessageCount(): Integer;
      getMessages(): GmailMessage[];
      getPermalink(): string;
      hasStarredMessages(): boolean;
      isImportant(): boolean;
      isInChats(): boolean;
      isInInbox(): boolean;
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
      reply(body: string, options: Object): GmailThread;
      replyAll(body: string): GmailThread;
      replyAll(body: string, options: Object): GmailThread;
    }

  }
}

declare var GmailApp: GoogleAppsScript.Gmail.GmailApp;
