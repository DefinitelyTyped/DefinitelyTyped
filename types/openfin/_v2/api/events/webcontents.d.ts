import { BaseEventMap, WindowEvent } from './base';
import { CrashedEvent } from './application';
import { WindowNavigationRejectedEvent } from './window';
export interface WindowResourceLoadFailedEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    errorCode: number;
    errorDescription: string;
    validatedURL: string;
    isMainFrame: boolean;
}
export interface WindowResourceResponseReceivedEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    status: boolean;
    newUrl: string;
    originalUrl: string;
    httpResponseCode: number;
    requestMethod: string;
    referrer: string;
    headers: any;
    resourceType: 'mainFrame' | 'subFrame' | 'styleSheet' | 'script' | 'image' | 'object' | 'xhr' | 'other';
}
export interface PageTitleUpdatedEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    title: string;
}
export interface CertificateErrorEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    error: string;
    url: string;
    certificate: any;
}
export interface WebContentsEventMapping<Topic = string, Type = string> extends BaseEventMap {
    'certificate-error': CertificateErrorEvent<Topic, Type>;
    'crashed': CrashedEvent & WindowEvent<Topic, Type>;
    'did-change-theme-color': WindowEvent<Topic, Type>;
    'found-in-page': WindowEvent<Topic, Type>;
    'navigation-rejected': WindowNavigationRejectedEvent<Topic, Type>;
    'page-favicon-updated': WindowEvent<Topic, Type>;
    'page-title-updated': PageTitleUpdatedEvent<Topic, Type>;
    'resource-load-failed': WindowResourceLoadFailedEvent<Topic, Type>;
    'resource-response-received': WindowResourceResponseReceivedEvent<Topic, Type>;
}
