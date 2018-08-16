// Type definitions for Google Apps Script 2018-07-11
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  export module Drive {
    /**
     * An enum representing classes of users who can access a file or folder, besides any individual
     * users who have been explicitly given access. These properties can be accessed from DriveApp.Access.
     *
     *     // Creates a folder that anyone on the Internet can read from and write to. (Domain
     *     // administrators can prohibit this setting for users of a G Suite domain.)
     *     var folder = DriveApp.createFolder('Shared Folder');
     *     folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
     */
    export enum Access { ANYONE, ANYONE_WITH_LINK, DOMAIN, DOMAIN_WITH_LINK, PRIVATE }

    /**
     * Allows scripts to create, find, and modify files and folders in Google Drive.
     *
     *     // Log the name of every file in the user's Drive.
     *     var files = DriveApp.getFiles();
     *     while (files.hasNext()) {
     *       var file = files.next();
     *       Logger.log(file.getName());
     *     }
     */
    export interface DriveApp {
      Access: typeof Access;
      Permission: typeof Permission;
      /**
       * Adds the given file to the root of the user's Drive.
       * This method does not move the file out of its existing parent folder;
       * a file can have more than one parent simultaneously.
       */
      addFile(child: File): Folder;
      /**
       * Adds the given folder to the root of the user's Drive.
       * This method does not move the folder out of its existing parent folder;
       * a folder can have more than one parent simultaneously.
       */
      addFolder(child: Folder): Folder;
      /**
       * Resumes a file iteration using a continuation token from a previous iterator.
       * This method is useful if processing an iterator in one execution would exceed
       * the maximum execution time. Continuation tokens are generally valid for one week.
       */
      continueFileIterator(continuationToken: string): FileIterator;
      /**
       * Resumes a folder iteration using a continuation token from a previous iterator.
       * This method is useful if processing an iterator in one execution would exceed
       * the maximum execution time. Continuation tokens are generally valid for one week.
       */
      continueFolderIterator(continuationToken: string): FolderIterator;
      /** Creates a file in the root of the user's Drive from a given Blob of arbitrary data. */
      createFile(blob: Base.BlobSource): File;
      /**
       * Creates a text file in the root of the user's Drive with the given name
       * and contents. Throws an exception if content is larger than 50 MB.
       */
      createFile(name: string, content: string): File;
      /**
       * Creates a file in the root of the user's Drive with the given name, contents, and MIME type.
       * Throws an exception if content is larger than 10MB.
       */
      createFile(name: string, content: string, mimeType: string): File;
      /** Creates a folder in the root of the user's Drive with the given name. */
      createFolder(name: string): Folder;
      /**
       * Gets the file with the given ID.
       * Throws a scripting exception if the file does not exist or
       * the user does not have permission to access it.
       */
      getFileById(id: string): File;
      /** Gets a collection of all files in the user's Drive. */
      getFiles(): FileIterator;
      /** Gets a collection of all files in the user's Drive that have the given name. */
      getFilesByName(name: string): FileIterator;
      /** Gets a collection of all files in the user's Drive that have the given MIME type. */
      getFilesByType(mimeType: string): FileIterator;
      /**
       * Gets the folder with the given ID. Throws a scripting exception if the folder
       * does not exist or the user does not have permission to access it.
       */
      getFolderById(id: string): Folder;
      /** Gets a collection of all folders in the user's Drive. */
      getFolders(): FolderIterator;
      /** Gets a collection of all folders in the user's Drive that have the given name. */
      getFoldersByName(name: string): FolderIterator;
      /** Gets the folder at the root of the user's Drive. */
      getRootFolder(): Folder;
      /** Gets the number of bytes the user is allowed to store in Drive. */
      getStorageLimit(): Integer;
      /** Gets the number of bytes the user is currently storing in Drive. */
      getStorageUsed(): Integer;
      /** Gets a collection of all the files in the trash of the user's Drive. */
      getTrashedFiles(): FileIterator;
      /** Gets a collection of all the folders in the trash of the user's Drive. */
      getTrashedFolders(): FolderIterator;
      /**
       * Removes the given file from the root of the user's Drive.
       * This method does not delete the file, but if a file is removed from all
       * of its parents, it cannot be seen in Drive except by searching for it
       * or using the "All items" view.
       */
      removeFile(child: File): Folder;
      /**
       * Removes the given folder from the root of the user's Drive.
       * This method does not delete the folder or its contents, but if a folder
       * is removed from all of its parents, it cannot be seen in Drive except
       * by searching for it or using the "All items" view.
       */
      removeFolder(child: Folder): Folder;
      /**
       * Gets a collection of all files in the user's Drive that match the given search criteria.
       * The search criteria are detailed the Google Drive SDK documentation.
       * Note that the params argument is a query string that may contain string values,
       * so take care to escape quotation marks correctly
       * (for example "title contains 'Gulliver\\'s Travels'" or 'title contains "Gulliver\'s Travels"').
       */
      searchFiles(params: string): FileIterator;
      /**
       * Gets a collection of all folders in the user's Drive that match the given search criteria.
       * The search criteria are detailed the Google Drive SDK documentation.
       * Note that the params argument is a query string that may contain string values,
       * so take care to escape quotation marks correctly
       * (for example "title contains 'Gulliver\\'s Travels'" or 'title contains "Gulliver\'s Travels"').
       */
      searchFolders(params: string): FolderIterator;
    }

    /**
     * A file in Google Drive. Files can be accessed or created from DriveApp.
     *
     *     // Trash every untitled spreadsheet that hasn't been updated in a week.
     *     var files = DriveApp.getFilesByName('Untitled spreadsheet');
     *     while (files.hasNext()) {
     *       var file = files.next();
     *       if (new Date() - file.getLastUpdated() > 7 * 24 * 60 * 60 * 1000) {
     *         file.setTrashed(true);
     *       }
     *     }
     */
    export interface File {
      addCommenter(emailAddress: string): File;
      addCommenter(user: Base.User): File;
      addCommenters(emailAddresses: string[]): File;
      addEditor(emailAddress: string): File;
      addEditor(user: Base.User): File;
      addEditors(emailAddresses: string[]): File;
      addViewer(emailAddress: string): File;
      addViewer(user: Base.User): File;
      addViewers(emailAddresses: string[]): File;
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
     * iterators can be acccessed from DriveApp or a Folder.
     *
     *     // Log the name of every file in the user's Drive.
     *     var files = DriveApp.getFiles();
     *     while (files.hasNext()) {
     *       var file = files.next();
     *       Logger.log(file.getName());
     *     }
     */
    export interface FileIterator {
      /**
       * Gets a token that can be used to resume this iteration at a later time.
       * This method is useful if processing an iterator in one execution would
       * exceed the maximum execution time. Continuation tokens are generally valid for one week.
       */
      getContinuationToken(): string;
      /** Determines whether calling next() will return an item. */
      hasNext(): boolean;
      /**
       * Gets the next item in the collection of files or folders.
       * Throws an exception if no items remain.
       */
      next(): File;
    }

    /**
     * A folder in Google Drive. Folders can be accessed or created from DriveApp.
     *
     *     // Log the name of every folder in the user's Drive.
     *     var folders = DriveApp.getFolders();
     *     while (folders.hasNext()) {
     *       var folder = folders.next();
     *       Logger.log(folder.getName());
     *     }
     */
    export interface Folder {
      addEditor(emailAddress: string): Folder;
      addEditor(user: Base.User): Folder;
      addEditors(emailAddresses: string[]): Folder;
      addFile(child: File): Folder;
      addFolder(child: Folder): Folder;
      addViewer(emailAddress: string): Folder;
      addViewer(user: Base.User): Folder;
      addViewers(emailAddresses: string[]): Folder;
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
     * iterators can be acccessed from DriveApp, a File, or a Folder.
     *
     *     // Log the name of every folder in the user's Drive.
     *     var folders = DriveApp.getFolders();
     *     while (folders.hasNext()) {
     *       var folder = folders.next();
     *       Logger.log(folder.getName());
     *     }
     */
    export interface FolderIterator {
      getContinuationToken(): string;
      hasNext(): boolean;
      next(): Folder;
    }

    /**
     * An enum representing the permissions granted to users who can access a file or folder, besides
     * any individual users who have been explicitly given access. These properties can be accessed from
     * DriveApp.Permission.
     *
     *     // Creates a folder that anyone on the Internet can read from and write to. (Domain
     *     // administrators can prohibit this setting for G Suite users.)
     *     var folder = DriveApp.createFolder('Shared Folder');
     *     folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
     */
    export enum Permission { VIEW, EDIT, COMMENT, OWNER, ORGANIZER, NONE }

    /**
     * A user associated with a file in Google Drive. Users can be accessed from File.getEditors(), Folder.getViewers(), and other methods.
     *
     *     // Log the email address of all users who have edit access to a file.
     *     var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var editors = file.getEditors();
     *     for (var i = 0; i < editors.length; i++) {
     *       Logger.log(editors[i].getEmail());
     *     }
     */
    export interface User {
      /** Gets the domain name associated with the user's account. */
      getDomain(): string;
      /**
       * Gets the user's email address. The user's email address is only available
       * if the user has chosen to share the address from the Google+ account settings
       * page, or if the user belongs to the same domain as the user running the script
       * and the domain administrator has allowed all users within the domain to see
       * other users' email addresses.
       */
      getEmail(): string;
      /** Gets the user's name. This method returns null if the user's name is not available. */
      getName(): string;
      /** Gets the URL for the user's photo. This method returns null if the user's photo is not available. */
      getPhotoUrl(): string;
      /**
       * Gets the user's email address.
       * @deprecated As of June 24, 2013, replaced by getEmail()
       */
      getUserLoginId(): string;
    }
  }
}

declare var DriveApp: GoogleAppsScript.Drive.DriveApp;
