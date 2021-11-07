// Type definitions for Google Apps Script 2020-01-02
// Project: https://developers.google.com/apps-script/
// Definitions by: PopGoesTheWza <https://github.com/PopGoesTheWza>
//                 motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Sites {
    /**
     * A Sites Attachment such as a file attached to a page.
     *
     * Note that an Attachment is a Blob and can be used anywhere Blob input is expected.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     *
     *     var filesPage = SitesApp.getSite('example.com', 'mysite').getChildByName("files");
     *     var attachments = filesPage.getAttachments();
     *
     *     // DocsList.createFile accepts a blob input. Since an Attachment is just a blob, we can
     *     // just pass it directly to that method
     *     var file = DocsList.createFile(attachments[0]);
     */
    interface Attachment {
      deleteAttachment(): void;
      getAs(contentType: string): Base.Blob;
      getAttachmentType(): AttachmentType;
      getBlob(): Base.Blob;
      getContentType(): string;
      getDatePublished(): Base.Date;
      getDescription(): string;
      getLastUpdated(): Base.Date;
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
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     */
    enum AttachmentType { WEB, HOSTED }
    /**
     * A Sites Column - a column from a Sites List page.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     */
    interface Column {
      deleteColumn(): void;
      getName(): string;
      getParent(): Page;
      setName(name: string): Column;
    }
    /**
     * A Comment attached to any Sites page.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     */
    interface Comment {
      deleteComment(): void;
      getAuthorEmail(): string;
      getAuthorName(): string;
      getContent(): string;
      getDatePublished(): Base.Date;
      getLastUpdated(): Base.Date;
      getParent(): Page;
      setContent(content: string): Comment;
      setParent(parent: Page): Comment;
    }
    /**
     * A Sites ListItem - a list element from a Sites List page.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     */
    interface ListItem {
      deleteListItem(): void;
      getDatePublished(): Base.Date;
      getLastUpdated(): Base.Date;
      getParent(): Page;
      getValueByIndex(index: Integer): string;
      getValueByName(name: string): string;
      setParent(parent: Page): ListItem;
      setValueByIndex(index: Integer, value: string): ListItem;
      setValueByName(name: string, value: string): ListItem;
    }
    interface PageAdvancedParameters {
      /** only get pages of this type */
      type?: PageType[] | undefined;
      /** start the results here */
      start?: Integer | undefined;
      /** the max number of results (default 200) */
      max?: Integer | undefined;
      /** whether to include draft pages (default false) */
      includeDrafts?: boolean | undefined;
      /** whether to include deleted pages (default false) */
      includeDeleted?: boolean | undefined;
      /** only return pages matching this query */
      search?: string | undefined;
    }
    /**
     * A Page on a Google Site.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     */
    interface Page {
      addColumn(name: string): Column;
      addHostedAttachment(blob: Base.BlobSource): Attachment;
      addHostedAttachment(blob: Base.BlobSource, description: string): Attachment;
      addListItem(values: string[]): ListItem;
      addWebAttachment(title: string, description: string, url: string): Attachment;
      createAnnouncement(title: string, html: string): Page;
      createAnnouncement(title: string, html: string, asDraft: boolean): Page;
      createAnnouncementsPage(title: string, name: string, html: string): Page;
      createFileCabinetPage(title: string, name: string, html: string): Page;
      createListPage(title: string, name: string, html: string, columnNames: string[]): Page;
      createPageFromTemplate(title: string, name: string, template: Page): Page;
      createWebPage(title: string, name: string, html: string): Page;
      deletePage(): void;
      getAllDescendants(): Page[];
      getAllDescendants(options: PageAdvancedParameters): Page[];
      getAnnouncements(): Page[];
      getAnnouncements(optOptions: PageAdvancedParameters): Page[];
      getAttachments(): Attachment[];
      getAttachments(optOptions: { start?: Integer | undefined; max?: Integer | undefined}): Attachment[];
      getAuthors(): string[];
      getChildByName(name: string): Page;
      getChildren(): Page[];
      getChildren(options: PageAdvancedParameters): Page[];
      getColumns(): Column[];
      getDatePublished(): Base.Date;
      getHtmlContent(): string;
      getIsDraft(): boolean;
      getLastEdited(): Base.Date;
      getLastUpdated(): Base.Date;
      getListItems(): ListItem[];
      getListItems(optOptions: { start?: Integer | undefined; max?: Integer | undefined}): ListItem[];
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
      search(query: string, options: PageAdvancedParameters): Page[];
      setHtmlContent(html: string): Page;
      setIsDraft(draft: boolean): Page;
      setName(name: string): Page;
      setParent(parent: Page): Page;
      setTitle(title: string): Page;
      /** @deprecated DO NOT USE */ addComment(content: string): Comment;
      /** @deprecated DO NOT USE */ getComments(): Comment[];
      /** @deprecated DO NOT USE */ getComments(optOptions: { start?: Integer | undefined; max?: Integer | undefined}): Comment[];
      /** @deprecated DO NOT USE */ getPageName(): string;
      /** @deprecated DO NOT USE */ getSelfLink(): string;
    }
    /**
     * A typesafe enum for sites page type.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     */
    enum PageType { WEB_PAGE, LIST_PAGE, ANNOUNCEMENT, ANNOUNCEMENTS_PAGE, FILE_CABINET_PAGE }
    /**
     * An object representing a Google Site.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     */
    interface Site {
      addEditor(emailAddress: string): Site;
      addEditor(user: Base.User): Site;
      addEditors(emailAddresses: string[]): Site;
      addOwner(email: string): Site;
      addOwner(user: Base.User): Site;
      addViewer(emailAddress: string): Site;
      addViewer(user: Base.User): Site;
      addViewers(emailAddresses: string[]): Site;
      createAnnouncementsPage(title: string, name: string, html: string): Page;
      createFileCabinetPage(title: string, name: string, html: string): Page;
      createListPage(title: string, name: string, html: string, columnNames: string[]): Page;
      createPageFromTemplate(title: string, name: string, template: Page): Page;
      createWebPage(title: string, name: string, html: string): Page;
      getAllDescendants(): Page[];
      getAllDescendants(options: PageAdvancedParameters): Page[];
      getChildByName(name: string): Page;
      getChildren(): Page[];
      getChildren(options: PageAdvancedParameters): Page[];
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
      search(query: string, options: PageAdvancedParameters): Page[];
      setSummary(summary: string): Site;
      setTheme(theme: string): Site;
      setTitle(title: string): Site;
      /** @deprecated DO NOT USE */ addCollaborator(email: string): Site;
      /** @deprecated DO NOT USE */ addCollaborator(user: Base.User): Site;
      /** @deprecated DO NOT USE */ createAnnouncement(title: string, html: string, parent: Page): Page;
      /** @deprecated DO NOT USE */ createComment(inReplyTo: string, html: string, parent: Page): Comment;
      /** @deprecated DO NOT USE */ createListItem(html: string, columnNames: string[], values: string[], parent: Page): ListItem;
      /** @deprecated DO NOT USE */ createWebAttachment(title: string, url: string, parent: Page): Attachment;
      /** @deprecated DO NOT USE */ deleteSite(): void;
      /** @deprecated DO NOT USE */ getAnnouncements(): Page[];
      /** @deprecated DO NOT USE */ getAnnouncementsPages(): Page[];
      /** @deprecated DO NOT USE */ getAttachments(): Attachment[];
      /** @deprecated DO NOT USE */ getCollaborators(): Base.User[];
      /** @deprecated DO NOT USE */ getComments(): Comment[];
      /** @deprecated DO NOT USE */ getFileCabinetPages(): Page[];
      /** @deprecated DO NOT USE */ getListItems(): ListItem[];
      /** @deprecated DO NOT USE */ getListPages(): Page[];
      /** @deprecated DO NOT USE */ getSelfLink(): string;
      /** @deprecated DO NOT USE */ getSiteName(): string;
      /** @deprecated DO NOT USE */ getWebAttachments(): Attachment[];
      /** @deprecated DO NOT USE */ getWebPages(): Page[];
      /** @deprecated DO NOT USE */ removeCollaborator(email: string): Site;
      /** @deprecated DO NOT USE */ removeCollaborator(user: Base.User): Site;
    }
    /**
     * Create and access Google Sites.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     */
    interface SitesApp {
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
