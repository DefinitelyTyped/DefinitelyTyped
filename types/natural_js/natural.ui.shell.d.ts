declare class NUS {

    notify(opts?: NUS.Options.Notify): NUS.Notify;
    docs(opts?: NUS.Options.Documents): NUS.Documents;

    static notify: {
        new(position: NUS.Options.NotifyPosition, opts?: NUS.Options.Notify): NUS.Notify;
        add(msg: string, url: string): void;
        wrapEle(): void;
    };

    static docs: {
        new(obj: NJS<HTMLElement[]>, opts?: NUS.Options.Documents): NUS.Documents;
        createLoadIndicator(): NUS.Documents;
        updateLoadIndicator(entireLoadRequestCnt: number, entireLoadRequestMaxCnt: number): NUS.Documents;
        removeLoadIndicator(): NUS.Documents;
        errorLoadIndicator(): NUS.Documents;
        wrapEle(): void;
        wrapScroll(): void;
        clearScrollPosition(tabEle: number | NJS<HTMLElement[]>, isActive?: boolean): void;
        loadContent(docOpts: NUS.Options.DocOpts, callback: NUS.Callbacks.Documents.LoadContent): void;
        closeBtnControl(): void;
        inactivateTab(): void;
        activateTab(docId_: string, isFromDocsTabList_?: boolean, isNotLoaded_?: boolean): void;
        showTabContents(docId_: string): boolean | void;
        hideTabContents(docId_: string): void;
        remove(targetTabEle: NJS<HTMLElement[]>): void;
    };

}

declare namespace NUS {

    interface Notify {
        options: NUS.Options.Notify;
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        add(msg: string, url?: string): NUS.Notify;
        remove(msgBoxEle: NJS<HTMLElement[]>): NUS.Notify;
    }

    interface Documents {
        options: NUS.Options.Documents;
        request: DocumentsRequest;
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        add(docId: string, docNm: string, docOpts: NUS.Options.DocOpts): NUS.Documents;
        active(docId: string, isFromDocsTabList?: boolean, isNotLoaded?: boolean): NUS.Documents;
        removeState(docId: string, callback: NUS.Callbacks.Documents.RemoveState): NUS.Documents;
        remove(docId: string, unconditional?: boolean): NUS.Documents;
        doc(docId: string): NUS.Options.DocsObject | NUS.Options.DocOpts;
        cont(docId: string): NA.Objects.Controller.Object;
        reload(docId: string, callback: NA.Callbacks.Communicator.Submit): NUS.Documents;
    }

    interface DocumentsRequest extends Documents {
        attr(name: string, obj?: any): DocumentsRequest;
        removeAttr(name: string): DocumentsRequest;
        param(): object;
        param(name: string): string;
        get(): DocumentsRequest;
        get(key: string): any;
    }

}
