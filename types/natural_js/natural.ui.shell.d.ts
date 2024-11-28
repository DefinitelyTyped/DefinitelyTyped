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
        createLoadIndicator(): typeof NUS.docs;
        updateLoadIndicator(entireLoadRequestCnt: number, entireLoadRequestMaxCnt: number): typeof NUS.docs;
        removeLoadIndicator(): typeof NUS.docs;
        errorLoadIndicator(): typeof NUS.docs;
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
        add(msg: string, url?: string): this;
        remove(msgBoxEle: NJS<HTMLElement[]>): this;
    }

    interface Documents {
        options: NUS.Options.Documents;
        request: NA.Request;
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        add(docId: string, docNm: string, docOpts: NUS.Options.DocOpts): this;
        active(docId: string, isFromDocsTabList?: boolean, isNotLoaded?: boolean): this;
        removeState(docId: string, callback: NUS.Callbacks.Documents.RemoveState): this;
        remove(docId: string, unconditional?: boolean): this;
        doc(docId: string): NUS.Options.DocsObject | NUS.Options.DocOpts;
        cont(docId: string): NA.Objects.Controller.Object;
        reload(docId: string, callback: NA.Callbacks.Communicator.Submit): this;
    }

}
