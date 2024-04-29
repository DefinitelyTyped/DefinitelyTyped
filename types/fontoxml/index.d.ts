declare namespace com.fontoxml {
    // This is a description of how to invoke the FontoXML editor, and instruct it to load (a) document(s).
    // Please keep in mind that the URL length may be limited in certain browsers, so a safe limit of 2000 characters
    // for the whole URL including query parameters should be used.
    export interface IInvocator {
        // The document id's of the documents to load from the CMS.
        documentIds: string[];
        // The base URL where the CMS endpoints are exposed.
        cmsBaseUrl: string;
        // The edit session token to use for accessing the CMS endpoints.
        editSessionToken: string;
        // User information.
        user?: IUserInfo | undefined;
        // Workflow information.
        workflow?: IWorkflowInfo | undefined;
        // Allow/disallow auto-save functionality.
        autosave?: boolean | undefined;
        // If set to a positive integer, enable the Heartbeat API to send every x seconds.
        heartbeat?: number | undefined;
    }

    export interface IWorkflowInfo {
        id: string;
        displayName: string;
    }

    export interface IUserInfo extends IWorkflowInfo {
        roleId: string;
    }

    // This is describes the object that is assigned to the MessageEvent.data
    // property after the FontoXML editor posts a message
    export interface IFontoMessageEventData {
        command: string;
        type: string;
        scope: com.fontoxml.IInvocator;
        metadata: any;
    }
}
