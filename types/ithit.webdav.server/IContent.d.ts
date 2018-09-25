/// <reference types="node" />
import { IncomingMessage, ServerResponse } from "http";
/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
/**
 * Base interface for items that have content, like {@link IFile}.
 */
export interface IContent {
    /**
     * Gets the media type of the file.
     * The mime-type provided by this property is returned in a Content-Type header with GET request.
     * When deciding which action to perform when downloading a file some WebDAV clients and browsers
     * (such as Internet Explorer) rely on file extension, while others (such as Firefox) rely on Content-Type
     * header returned by server. For identical behavior in all browsers and WebDAV clients your server must
     * return a correct mime-type with a requested file.
     * @returns {string} The MIME type of the file.
     */
    readonly ContentType: string;
    /**
     * Gets the size of the file content in bytes.
     * @returns {number}  Length of the file content in bytes.
     */
    readonly ContentLength: number;
    /**
     * Gets entity tag - string that identifies current state of resource's content.
     * More information about etags is available here: http://en.wikipedia.org/wiki/HTTP_ETag
     * You can return here either cheksum or hash or counter which increases with every modification.
     * This property shall return different value if content changes.
     * @returns {string} null to indicate that server doesn't support etags.
     */
    readonly Etag: string;
    /**
     * Reads the file content from the repository and writes it to the specified stream.
     * By default ASP.NET buffers content on server side before sending output. You must turn off buffering to
     * eliminate keeping entire file content in memory before sending:
     * Client application can request only a part of a file specifying @b  Range header. Download managers
     * may use this header to download single file using several threads at a time.
     * @param output Output stream.
     * @param startIndex The zero-bazed byte offset in file content at which to begin copying bytes to
     * the output stream.
     * @param count The number of bytes to be written to the output stream.
     * @exception NeedPrivilegesException The user doesn't have enough privileges.
     * @exception DavException In other cases.
     */
    Read(output: ServerResponse, startIndex: number, count: number): Promise<void>;
    /**
     * Saves the content of the file from the specified stream to the WebDAV repository.
     * @param content Stream to read the content of the file from.
     * @param contentType Indicates the media type of the file.
     * @param startIndex Start offset to which content shall be saved.
     * @param totalFileSize Entire length of the file. Is is not less then length of @paramref content  stream.
     * @returns Boolean value indicating whether entire stream was written. This value is used by engine to take decision whether autocheckin shall be performed.
     * @exception LockedException The file was locked and client did not provide lock token.
     * @exception NeedPrivilegesException The user doesn't have enough privileges.
     * @exception InsufficientStorageException Quota limit is reached.
     * @exception DavException In other cases.
     * @desc  IIS and ASP.NET does not support files upload larger than 2Gb. If you need to upload files larger
     * than 2Gb you must develop HttpListener-based WebDAV server or implement resumable upload interfaces.
     * If you are creating HttpHandler-based WebDAV server you must specify the file
     * maximum upload size in web.config of your web application. By default maximum
     * upload size is set to 4096 KB (4 MB) by ASP.NET. This limit is used to
     * prevent denial of service attacks caused by users posting large files to the
     * server. To increase the upload limit add &lt;httpRuntime&gt; section to your web application web.config
     * file and specify the limit in kilobytes
     * @desc When client uploads file to IIS, ASP.NET first creates the file in a the temporary upload directory.
     * Only when the entire file is uploaded to server you can read its content from stream. By default ASP.NET
     * uploads files to @b  %FrameworkInstallLocation%\Temporary ASP.NET Files folder.
     * You must make sure you have enough disk space to keep temporary files uploaded to your server.
     * To change this folder location add the following section to your web.config file
     * @desc To avoid temporary file creation and pass content directly to engine set the {@link ResumableUpload.PutUploadProgressAndResumeModule}
     * module in your web.config file. Unlike IIS/ASP.NET, HttpListener-based server does not create any
     * temporary files when handling uploads.
     */
    write(content: IncomingMessage, contentType: string, startIndex: number, totalFileSize: number): Promise<boolean>;
}
