declare namespace NUS {

    namespace Options {
        type NotifyPosition = {
            left?: number;
            right?: number;
            top?: number;
            bottom?: number;
        }
        type Notify = {
            position?: NotifyPosition;
            container?: NJS<HTMLElement[]>;
            context?: NJS<HTMLElement[]> | null;
            displayTime?: number;
            alwaysOnTop?: boolean;
            html?: boolean;
            alwaysOnTopCalcTarget?: string;
        };

        type DocsObject = {
            [key: string]: DocOpts;
        }
        type DocOpts = {
            /**
             * Document id
             */
            docId?: string;
            /**
             * Document name
             */
            docNm?: string;
            /**
             * Document url
             */
            url?: string;
            /**
             * Specifies whether to block responses when the location.href when requesting to the server is different from the location.href when receiving the response from the server.
             */
            urlSync?: boolean;
            onBeforeLoad?: EventHandlers.Documents.OnBeforeLoad | null;
            onLoad?: EventHandlers.Documents.OnLoad | null;
            onBeforeActive?: EventHandlers.Documents.OnBeforeActive | null;
            onActive?: EventHandlers.Documents.OnActive | null;
            onBeforeInactive?: EventHandlers.Documents.OnBeforeInactive | null;
            onInactive?: EventHandlers.Documents.OnInactive | null;
            onBeforeRemoveState?: EventHandlers.Documents.OnBeforeRemoveState | null;
            onRemoveState?: EventHandlers.Documents.OnRemoveState | null;
            onBeforeRemove?: EventHandlers.Documents.OnBeforeRemove | null;
            onRemove?: EventHandlers.Documents.OnRemove | null;
            stateless?: boolean
        };
        type Documents = {
            context?: NJS<HTMLElement[]> | null;
            multi?: boolean;
            maxStateful?: number;
            maxTabs?: number;
            addLast?: boolean;
            tabScroll?: boolean;
            closeAllRedirectURL?: string | null;
            tabScrollCorrection?: {
                rightCorrectionPx?: number;
            };
            msgContext?: NJS<Window[]>;
            entireLoadIndicator?: boolean;
            entireLoadScreenBlock?: boolean;
            entireLoadExcludeURLs?: string[];
            entireLoadRequestCnt?: number;
            entireLoadRequestMaxCnt?: number;
            onBeforeLoad?: EventHandlers.Documents.OnBeforeLoad | null;
            onLoad?: EventHandlers.Documents.OnLoad | null;
            onBeforeEntireLoad?: EventHandlers.Documents.OnBeforeEntireLoad | null;
            onErrorEntireLoad?: EventHandlers.Documents.OnErrorEntireLoad | null;
            onEntireLoad?: EventHandlers.Documents.OnEntireLoad | null;
            onBeforeActive?: EventHandlers.Documents.OnBeforeActive | null;
            onActive?: EventHandlers.Documents.OnActive | null;
            onBeforeInactive?: EventHandlers.Documents.OnBeforeInactive | null;
            onInactive?: EventHandlers.Documents.OnInactive | null;
            onBeforeRemoveState?: EventHandlers.Documents.OnBeforeRemoveState | null;
            onRemoveState?: EventHandlers.Documents.OnRemoveState | null;
            onBeforeRemove?: EventHandlers.Documents.OnBeforeRemove | null;
            onRemove?: EventHandlers.Documents.OnRemove | null;
            saveHistory?: boolean;
            docs?: DocsObject;
            alwaysOnTop?: boolean;
            alwaysOnTopCalcTarget?: string;
            order?: string[];
            loadedDocId?: string | null;
        }
    }

    namespace EventHandlers {
        namespace Documents {
            type OnBeforeEntireLoad = {
                (this: NUS.Documents, docId?: string): void;
            }
            type OnErrorEntireLoad = {
                (this: NUS.Documents, e: Error, request: NA.Request, xhr: JQueryXHR, textStatus: "success" | "error", submitCallback: NA.Callbacks.Communicator.Submit): void;
            }
            type OnEntireLoad = {
                (this: NUS.Documents, docId: string, entireLoadRequestCnt: number, entireLoadRequestMaxCnt: number): void;
            }

            type OnBeforeLoad = {
                (this: NUS.Documents, docId: string, target: NJS<HTMLElement[]>): void;
            }
            type OnLoad = {
                (this: NUS.Documents, docId: string): void;
            }
            type OnBeforeActive = {
                (this: NUS.Documents, docId: string, isFromDocsTabList: boolean, isNotLoaded: boolean): void;
            }
            type OnActive = {
                (this: NUS.Documents, docId: string, isFromDocsTabList: boolean, isNotLoaded: boolean): void;
            }
            type OnBeforeInactive = {
                (this: NUS.Documents, docId?: string): void;
            }
            type OnInactive = {
                (this: NUS.Documents, docId?: string): void;
            }
            type OnBeforeRemoveState = {
                (this: NUS.Documents, docId?: string): void;
            }
            type OnRemoveState = {
                (this: NUS.Documents, docId?: string): void;
            }
            type OnBeforeRemove = {
                (this: NUS.Documents, docId?: string): void;
            }
            type OnRemove = {
                (this: NUS.Documents, docId?: string): void;
            }
        }
    }

    namespace Callbacks {
        namespace Documents {
            type RemoveState = {
                (this: NUS.Documents, docId?: string): void;
            }
            type LoadContent = {
                (this: NUS.Documents): void;
            }
            type Reload = {
                (this: NA.Communicator, html?: string, request?: NA.Request): void;
            }
        }
    }

}
