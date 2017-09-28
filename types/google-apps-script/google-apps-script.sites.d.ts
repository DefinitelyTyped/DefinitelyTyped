// Type definitions for Google Apps Script 2017-05-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  export module Sites {
    /**
     * A Sites Attachment such as a file attached to a page.
     *
     *  Note that an Attachment is a Blob and can be used anywhere Blob input is expected.
     *  A
     *  rebuilt
     *  version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     *  modify Sites made with this version, but script can still access
     *
     *    classic Sites.
     *
     *      var filesPage = SitesApp.getSite('example.com', 'mysite').getChildByName("files");
     *      var attachments = filesPage.getAttachments();
     *
     *      // DocsList.createFile accepts a blob input. Since an Attachment is just a blob, we can
     *      // just pass it directly to that method
     *      var file = DocsList.createFile(attachments[0]);
     */
    export interface Attachment {
      deleteAttachment(): void;
      getAs(contentType: string): Base.Blob;
      getAttachmentType(): AttachmentType;
      getBlob(): Base.Blob;
      getContentType(): string;
      getDatePublished(): Date;
      getDescription(): string;
      getLastUpdated(): Date;
      getParent(): Page;
      getTitle(): string;
      getUrl(): string;
      setContentType(contentType: string): Attachment;
      setDescription(description: string): Attachment;
      setFrom(blob: Base.BlobSource): Attachment;
      setParent(parent: Page): Attachment;
      setTitle(title: string): Attachment;
      setUrl(url: string): Attachment;
    }

    /**
     * A typesafe enum for sites attachment type.
     *  A
     *  rebuilt
     *  version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     *  modify Sites made with this version, but script can still access
     *
     *    classic Sites.
     */
    export enum AttachmentType { WEB, HOSTED }

    /**
     * A Sites Column - a column from a Sites List page.
     *  A
     *  rebuilt
     *  version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     *  modify Sites made with this version, but script can still access
     *
     *    classic Sites.
     */
    export interface Column {
      deleteColumn(): void;
      getName(): string;
      getParent(): Page;
      setName(name: string): Column;
    }

    /**
     * A Comment attached to any Sites page.
     *  A
     *  rebuilt
     *  version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     *  modify Sites made with this version, but script can still access
     *
     *    classic Sites.
     */
    export interface Comment {
      deleteComment(): void;
      getAuthorEmail(): string;
      getAuthorName(): string;
      getContent(): string;
      getDatePublished(): Date;
      getLastUpdated(): Date;
      getParent(): Page;
      setContent(content: string): Comment;
      setParent(parent: Page): Comment;
    }

    /**
     * A Sites ListItem - a list element from a Sites List page.
     *  A
     *  rebuilt
     *  version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     *  modify Sites made with this version, but script can still access
     *
     *    classic Sites.
     */
    export interface ListItem {
      deleteListItem(): void;
      getDatePublished(): Date;
      getLastUpdated(): Date;
      getParent(): Page;
      getValueByIndex(index: Integer): string;
      getValueByName(name: string): string;
      setParent(parent: Page): ListItem;
      setValueByIndex(index: Integer, value: string): ListItem;
      setValueByName(name: string, value: string): ListItem;
    }

    /**
     * A Page on a Google Site.
     *  A
     *  rebuilt
     *  version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     *  modify Sites made with this version, but script can still access
     *
     *    classic Sites.
     */
    export interface Page {
      addColumn(name: string): Column;
      addHostedAttachment(blob: Base.BlobSource): Attachment;
      addHostedAttachment(blob: Base.BlobSource, description: string): Attachment;
      addListItem(values: String[]): ListItem;
      addWebAttachment(title: string, description: string, url: string): Attachment;
      createAnnouncement(title: string, html: string): Page;
      createAnnouncement(title: string, html: string, asDraft: boolean): Page;
      createAnnouncementsPage(title: string, name: string, html: string): Page;
      createFileCabinetPage(title: string, name: string, html: string): Page;
      createListPage(title: string, name: string, html: string, columnNames: String[]): Page;
      createPageFromTemplate(title: string, name: string, template: Page): Page;
      createWebPage(title: string, name: string, html: string): Page;
      deletePage(): void;
      getAllDescendants(): Page[];
      getAllDescendants(options: Object): Page[];
      getAnnouncements(): Page[];
      getAnnouncements(optOptions: Object): Page[];
      getAttachments(): Attachment[];
      getAttachments(optOptions: Object): Attachment[];
      getAuthors(): String[];
      getChildByName(name: string): Page;
      getChildren(): Page[];
      getChildren(options: Object): Page[];
      getColumns(): Column[];
      getDatePublished(): Date;
      getHtmlContent(): string;
      getIsDraft(): boolean;
      getLastEdited(): Date;
      getLastUpdated(): Date;
      getListItems(): ListItem[];
      getListItems(optOptions: Object): ListItem[];
      getName(): string;
      getPageType(): PageType;
      getParent(): Page;
      getTextContent(): string;
      getTitle(): string;
      getUrl(): string;
      isDeleted(): boolean;
      isTemplate(): boolean;
      publishAsTemplate(name: string): Page;
      search(query: string): Page[];
      search(query: string, options: Object): Page[];
      setHtmlContent(html: string): Page;
      setIsDraft(draft: boolean): Page;
      setName(name: string): Page;
      setParent(parent: Page): Page;
      setTitle(title: string): Page;
      addComment(content: string): Comment;
      getComments(): Comment[];
      getComments(optOptions: Object): Comment[];
      getPageName(): string;
      getSelfLink(): string;
    }

    /**
     * A typesafe enum for sites page type.
     *  A
     *  rebuilt
     *  version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     *  modify Sites made with this version, but script can still access
     *
     *    classic Sites.
     */
    export enum PageType { WEB_PAGE, LIST_PAGE, ANNOUNCEMENT, ANNOUNCEMENTS_PAGE, FILE_CABINET_PAGE }

    /**
     * An object representing a Google Site.
     *  A
     *  rebuilt
     *  version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     *  modify Sites made with this version, but script can still access
     *
     *    classic Sites.
     */
    export interface Site {
      addEditor(emailAddress: string): Site;
      addEditor(user: Base.User): Site;
      addEditors(emailAddresses: String[]): Site;
      addOwner(email: string): Site;
      addOwner(user: Base.User): Site;
      addViewer(emailAddress: string): Site;
      addViewer(user: Base.User): Site;
      addViewers(emailAddresses: String[]): Site;
      createAnnouncementsPage(title: string, name: string, html: string): Page;
      createFileCabinetPage(title: string, name: string, html: string): Page;
      createListPage(title: string, name: string, html: string, columnNames: String[]): Page;
      createPageFromTemplate(title: string, name: string, template: Page): Page;
      createWebPage(title: string, name: string, html: string): Page;
      getAllDescendants(): Page[];
      getAllDescendants(options: Object): Page[];
      getChildByName(name: string): Page;
      getChildren(): Page[];
      getChildren(options: Object): Page[];
      getEditors(): Base.User[];
      getName(): string;
      getOwners(): Base.User[];
      getSummary(): string;
      getTemplates(): Page[];
      getTheme(): string;
      getTitle(): string;
      getUrl(): string;
      getViewers(): Base.User[];
      removeEditor(emailAddress: string): Site;
      removeEditor(user: Base.User): Site;
      removeOwner(email: string): Site;
      removeOwner(user: Base.User): Site;
      removeViewer(emailAddress: string): Site;
      removeViewer(user: Base.User): Site;
      search(query: string): Page[];
      search(query: string, options: Object): Page[];
      setSummary(summary: string): Site;
      setTheme(theme: string): Site;
      setTitle(title: string): Site;
      addCollaborator(email: string): Site;
      addCollaborator(user: Base.User): Site;
      createAnnouncement(title: string, html: string, parent: Page): Page;
      createComment(inReplyTo: string, html: string, parent: Page): Comment;
      createListItem(html: string, columnNames: String[], values: String[], parent: Page): ListItem;
      createWebAttachment(title: string, url: string, parent: Page): Attachment;
      deleteSite(): void;
      getAnnouncements(): Page[];
      getAnnouncementsPages(): Page[];
      getAttachments(): Attachment[];
      getCollaborators(): Base.User[];
      getComments(): Comment[];
      getFileCabinetPages(): Page[];
      getListItems(): ListItem[];
      getListPages(): Page[];
      getSelfLink(): string;
      getSiteName(): string;
      getWebAttachments(): Attachment[];
      getWebPages(): Page[];
      removeCollaborator(email: string): Site;
      removeCollaborator(user: Base.User): Site;
    }

    /**
     * Create and access Google Sites.
     *  A
     *  rebuilt
     *  version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     *  modify Sites made with this version, but script can still access
     *
     *    classic Sites.
     */
    export interface SitesApp {
      AttachmentType: typeof AttachmentType;
      PageType: typeof PageType;
      copySite(domain: string, name: string, title: string, summary: string, site: Site): Site;
      createSite(domain: string, name: string, title: string, summary: string): Site;
      getActivePage(): Page;
      getActiveSite(): Site;
      getAllSites(domain: string): Site[];
      getAllSites(domain: string, start: Integer, max: Integer): Site[];
      getPageByUrl(url: string): Page;
      getSite(name: string): Site;
      getSite(domain: string, name: string): Site;
      getSiteByUrl(url: string): Site;
      getSites(): Site[];
      getSites(start: Integer, max: Integer): Site[];
      getSites(domain: string): Site[];
      getSites(domain: string, start: Integer, max: Integer): Site[];
    }

  }
}

declare var SitesApp: GoogleAppsScript.Sites.SitesApp;
