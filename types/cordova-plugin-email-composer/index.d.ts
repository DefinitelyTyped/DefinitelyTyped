/**
 * The plugin provides access to the standard interface that manages the
 * editing and sending an email message
 */
interface CordovaPluginEmailComposer {
    /** Determine if the device is capable to send emails */
    isAvailable(callback: (isAvailable: boolean) => void, scope?: any): void;
    /** Open a pre-filled email draft */
    open(options?: ICordovaPluginEmailComposerOpenOptions, callback?: () => void, scope?: any): void;
    openDraft(options?: ICordovaPluginEmailComposerOpenOptions, callback?: () => void, scope?: any): void;
}

interface ICordovaPluginEmailComposerOpenOptions {
    /** An configured email account is required to send emails */
    to?: string[] | undefined;
    body?: string | undefined;
    cc?: string[] | undefined;
    bcc?: string[] | undefined;
    /** Attachments can be either base64 encoded datas, files from the the device storage or assets from within the www folder */
    attachments?: any[] | undefined;
    subject?: string | undefined;
    /** The default value for isHTML is true */
    isHtml?: boolean | undefined;
}

interface CordovaPlugins {
    email: CordovaPluginEmailComposer;
}
