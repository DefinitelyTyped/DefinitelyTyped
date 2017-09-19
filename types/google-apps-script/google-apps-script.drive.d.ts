// Type definitions for Google Apps Script 2017-05-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  export module Drive {
    /**
     * An enum representing classes of users who can access a file or folder, besides any individual
     *  users who have been explicitly given access. These properties can be accessed from
     *  DriveApp.Access.
     *
     *      // Creates a folder that anyone on the Internet can read from and write to. (Domain
     *      // administrators can prohibit this setting for users of a G Suite domain.)
     *      var folder = DriveApp.createFolder('Shared Folder');
     *      folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
     */
    export enum Access { ANYONE, ANYONE_WITH_LINK, DOMAIN, DOMAIN_WITH_LINK, PRIVATE }

    /**
     * Allows scripts to create, find, and modify files and folders in Google Drive.
     *
     *      // Log the name of every file in the user's Drive.
     *      var files = DriveApp.getFiles();
     *      while (files.hasNext()) {
     *        var file = files.next();
     *        Logger.log(file.getName());
     *      }
     */
    export interface DriveApp {
      Access: typeof Access;
      Permission: typeof Permission;
      addFile(child: File): Folder;
      addFolder(child: Folder): Folder;
      continueFileIterator(continuationToken: string): FileIterator;
      continueFolderIterator(continuationToken: string): FolderIterator;
      createFile(blob: Base.BlobSource): File;
      createFile(name: string, content: string): File;
      createFile(name: string, content: string, mimeType: string): File;
      createFolder(name: string): Folder;
      getFileById(id: string): File;
      getFiles(): FileIterator;
      getFilesByName(name: string): FileIterator;
      getFilesByType(mimeType: string): FileIterator;
      getFolderById(id: string): Folder;
      getFolders(): FolderIterator;
      getFoldersByName(name: string): FolderIterator;
      getRootFolder(): Folder;
      getStorageLimit(): Integer;
      getStorageUsed(): Integer;
      getTrashedFiles(): FileIterator;
      getTrashedFolders(): FolderIterator;
      removeFile(child: File): Folder;
      removeFolder(child: Folder): Folder;
      searchFiles(params: string): FileIterator;
      searchFolders(params: string): FolderIterator;
    }

    /**
     * A file in Google Drive. Files can be accessed or created from DriveApp.
     *
     *      // Trash every untitled spreadsheet that hasn't been updated in a week.
     *      var files = DriveApp.getFilesByName('Untitled spreadsheet');
     *      while (files.hasNext()) {
     *        var file = files.next();
     *        if (new Date() - file.getLastUpdated() > 7 * 24 * 60 * 60 * 1000) {
     *          file.setTrashed(true);
     *        }
     *      }
     */
    export interface File {
      addCommenter(emailAddress: string): File;
      addCommenter(user: Base.User): File;
      addCommenters(emailAddresses: String[]): File;
      addEditor(emailAddress: string): File;
      addEditor(user: Base.User): File;
      addEditors(emailAddresses: String[]): File;
      addViewer(emailAddress: string): File;
      addViewer(user: Base.User): File;
      addViewers(emailAddresses: String[]): File;
      getAccess(email: string): Permission;
      getAccess(user: Base.User): Permission;
      getAs(contentType: string): Base.Blob;
      getBlob(): Base.Blob;
      getDateCreated(): Date;
      getDescription(): string;
      getDownloadUrl(): string;
      getEditors(): User[];
      getId(): string;
      getLastUpdated(): Date;
      getMimeType(): string;
      getName(): string;
      getOwner(): User;
      getParents(): FolderIterator;
      getSharingAccess(): Access;
      getSharingPermission(): Permission;
      getSize(): Integer;
      getThumbnail(): Base.Blob;
      getUrl(): string;
      getViewers(): User[];
      isShareableByEditors(): boolean;
      isStarred(): boolean;
      isTrashed(): boolean;
      makeCopy(): File;
      makeCopy(destination: Folder): File;
      makeCopy(name: string): File;
      makeCopy(name: string, destination: Folder): File;
      removeCommenter(emailAddress: string): File;
      removeCommenter(user: Base.User): File;
      removeEditor(emailAddress: string): File;
      removeEditor(user: Base.User): File;
      removeViewer(emailAddress: string): File;
      removeViewer(user: Base.User): File;
      revokePermissions(user: string): File;
      revokePermissions(user: Base.User): File;
      setContent(content: string): File;
      setDescription(description: string): File;
      setName(name: string): File;
      setOwner(emailAddress: string): File;
      setOwner(user: Base.User): File;
      setShareableByEditors(shareable: boolean): File;
      setSharing(accessType: Access, permissionType: Permission): File;
      setStarred(starred: boolean): File;
      setTrashed(trashed: boolean): File;
    }

    /**
     * An iterator that allows scripts to iterate over a potentially large collection of files. File
     *  iterators can be acccessed from DriveApp or a Folder.
     *
     *      // Log the name of every file in the user's Drive.
     *      var files = DriveApp.getFiles();
     *      while (files.hasNext()) {
     *        var file = files.next();
     *        Logger.log(file.getName());
     *      }
     */
    export interface FileIterator {
      getContinuationToken(): string;
      hasNext(): boolean;
      next(): File;
    }

    /**
     * A folder in Google Drive. Folders can be accessed or created from DriveApp.
     *
     *      // Log the name of every folder in the user's Drive.
     *      var folders = DriveApp.getFolders();
     *      while (folders.hasNext()) {
     *        var folder = folders.next();
     *        Logger.log(folder.getName());
     *      }
     */
    export interface Folder {
      addEditor(emailAddress: string): Folder;
      addEditor(user: Base.User): Folder;
      addEditors(emailAddresses: String[]): Folder;
      addFile(child: File): Folder;
      addFolder(child: Folder): Folder;
      addViewer(emailAddress: string): Folder;
      addViewer(user: Base.User): Folder;
      addViewers(emailAddresses: String[]): Folder;
      createFile(blob: Base.BlobSource): File;
      createFile(name: string, content: string): File;
      createFile(name: string, content: string, mimeType: string): File;
      createFolder(name: string): Folder;
      getAccess(email: string): Permission;
      getAccess(user: Base.User): Permission;
      getDateCreated(): Date;
      getDescription(): string;
      getEditors(): User[];
      getFiles(): FileIterator;
      getFilesByName(name: string): FileIterator;
      getFilesByType(mimeType: string): FileIterator;
      getFolders(): FolderIterator;
      getFoldersByName(name: string): FolderIterator;
      getId(): string;
      getLastUpdated(): Date;
      getName(): string;
      getOwner(): User;
      getParents(): FolderIterator;
      getSharingAccess(): Access;
      getSharingPermission(): Permission;
      getSize(): Integer;
      getUrl(): string;
      getViewers(): User[];
      isShareableByEditors(): boolean;
      isStarred(): boolean;
      isTrashed(): boolean;
      removeEditor(emailAddress: string): Folder;
      removeEditor(user: Base.User): Folder;
      removeFile(child: File): Folder;
      removeFolder(child: Folder): Folder;
      removeViewer(emailAddress: string): Folder;
      removeViewer(user: Base.User): Folder;
      revokePermissions(user: string): Folder;
      revokePermissions(user: Base.User): Folder;
      searchFiles(params: string): FileIterator;
      searchFolders(params: string): FolderIterator;
      setDescription(description: string): Folder;
      setName(name: string): Folder;
      setOwner(emailAddress: string): Folder;
      setOwner(user: Base.User): Folder;
      setShareableByEditors(shareable: boolean): Folder;
      setSharing(accessType: Access, permissionType: Permission): Folder;
      setStarred(starred: boolean): Folder;
      setTrashed(trashed: boolean): Folder;
    }

    /**
     * An object that allows scripts to iterate over a potentially large collection of folders. Folder
     *  iterators can be acccessed from DriveApp, a File, or a Folder.
     *
     *      // Log the name of every folder in the user's Drive.
     *      var folders = DriveApp.getFolders();
     *      while (folders.hasNext()) {
     *        var folder = folders.next();
     *        Logger.log(folder.getName());
     *      }
     */
    export interface FolderIterator {
      getContinuationToken(): string;
      hasNext(): boolean;
      next(): Folder;
    }

    /**
     * An enum representing the permissions granted to users who can access a file or folder, besides
     *  any individual users who have been explicitly given access. These properties can be accessed from
     *  DriveApp.Permission.
     *
     *      // Creates a folder that anyone on the Internet can read from and write to. (Domain
     *      // administrators can prohibit this setting for users of a G Suite domain.)
     *      var folder = DriveApp.createFolder('Shared Folder');
     *      folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
     */
    export enum Permission { VIEW, EDIT, COMMENT, OWNER, ORGANIZER, NONE }

    /**
     * A user associated with a file in Google Drive. Users can be accessed from
     *  File.getEditors(), Folder.getViewers(), and other methods.
     *
     *      // Log the email address of all users who have edit access to a file.
     *      var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var editors = file.getEditors();
     *      for (var i = 0; i < editors.length; i++) {
     *        Logger.log(editors[i].getEmail());
     *      }
     */
    export interface User {
      getDomain(): string;
      getEmail(): string;
      getName(): string;
      getPhotoUrl(): string;
      getUserLoginId(): string;
    }

  }
}

declare var DriveApp: GoogleAppsScript.Drive.DriveApp;
