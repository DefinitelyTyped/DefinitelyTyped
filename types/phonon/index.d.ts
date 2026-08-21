/// <reference types="awesomplete" />

declare namespace Phonon {
    /*** Main object ***/
    interface Phonon {
        device: PhononDeviceObject;
        browser: PhononBrowserObject;
        event: PhononEventObject;
        options(options: PhononOptions): void;
        navigator(): PhononNavigator;
        i18n(): PhononI18n;
        updateLocale(language: string): void;
        ajax(request: PhononAjaxObject): PhononAjaxReturnObject;
        onReady(callback: () => void): void;
        panel(id: string): PhononPanelComponent;
        sidePanel(id: string): PhononSidePanelComponent;
        alert(text: string, title?: string, cancelable?: boolean, textOk?: string): PhononDialogComponent;
        confirm(
            text: string,
            title?: string,
            cancelable?: boolean,
            textOk?: string,
            textCancel?: string,
        ): PhononDialogComponent;
        prompt(
            text: string,
            title?: string,
            cancelable?: boolean,
            textOk?: string,
            textCancel?: string,
        ): PhononDialogComponent;
        indicator(title: string, cancelable?: boolean): PhononIndicatorComponent;
        dialog(id: string): PhononCustomDialogComponent;
        notif(textOrId: string, timeout?: number, showButton?: boolean, textButton?: string): PhononNotifComponent;
        popover(id?: string): PhononPopoverComponent;
        preloader(element: string | Element): PhononPreloaderComponent;
        tab(): PhononTabComponent;
        autocomplete(input: Element | HTMLElement | string, o?: Awesomplete.Options): Awesomplete;
    }
    interface PhononDeviceObject {
        os: string;
        osVersion: string;
        ANDROID: string;
        IOS: string;
    }
    interface PhononBrowserObject {
        name: string;
        version: string;
    }
    interface PhononEventObject {
        animationEnd: string;
        transitionEnd: string;
    }
    interface PhononCustomWindowEvent extends Event {
        detail: PhononDetail;
    }
    interface PhononDetail {
        page: string;
        req: string[];
    }

    /*** Options ***/
    interface PhononOptions {
        navigator?: PhononNavigatorOptions | undefined;
        i18n?: PhononI18nOptions | null | undefined;
    }
    interface PhononNavigatorOptions {
        defaultPage?: string | undefined;
        hashPrefix?: string | undefined;
        animatePages?: boolean | undefined;
        enableBrowserBackButton?: boolean | undefined;
        templateRootDirectory?: string | undefined;
        defaultTemplateExtension?: string | undefined;
        useHash?: boolean | undefined;
    }
    interface PhononI18nOptions {
        directory?: string | undefined;
        localeFallback?: string | undefined;
        localePreferred?: string | undefined;
    }

    /*** Navigation ***/
    interface PhononNavigator {
        currentPage: string;
        previousPage: string;
        changePage(pageName: string, parameter?: string): void;
        on(page: PhononPageObject, callback?: (activity: PhononActivity) => void): void;
        onPage(page: string): PhononPageEventObject;
        start(): void;
    }
    interface PhononActivity {
        onCreate(callback?: () => void): void;
        onReady(callback?: () => void): void;
        onClose(callback?: (self: PhononOnCloseObject) => void): void;
        onHidden(callback?: () => void): void;
        onTransitionEnd(callback?: () => void): void;
        onHashChanged(callback?: (...hash: string[]) => void): void;
        onTabChanged(callback?: (tabNumber: number) => void): void;
    }
    interface PhononPageObject {
        page: string;
        content?: string | null | undefined;
        preventClose?: boolean | undefined;
        readyDelay?: number | undefined;
    }
    interface PhononOnCloseObject {
        close(): void;
    }
    interface PhononPageEventObject {
        addEvent(event: string, callback: (parameter?: any) => void): void;
    }

    /*** Internationalization ***/
    interface PhononI18n {
        bind(element?: Element, callback?: () => void): void;
        bind(callback?: () => void): void;
        getAll(callback: (json: any) => void): void;
        get(key: string, callback: (value: any) => void): void;
        get(key: string[], callback: (values: any) => void): void;
        getPreference(): string;
        setPreference(newLanguage: string): void;
        getLocale(): string;
    }

    /*** Ajax ***/
    type PhononAjaxErrorFlag =
        | "NO_INTERNET_ACCESS"
        | "TIMEOUT_EXCEEDED"
        | "XMLHTTPREQUEST_UNAVAILABLE"
        | "JSON_MALFORMED"
        | "REQUEST_CANCELED";
    interface PhononAjaxObject {
        method: string;
        url: string;
        crossDomain?: boolean | undefined;
        dataType: string;
        contentType?: string | undefined;
        data?: any;
        timeout?: number | undefined;
        headers?: any;
        success(res: any, xhr: XMLHttpRequest): void;
        error?(res: any, flagError: PhononAjaxErrorFlag, xhr: XMLHttpRequest): void;
    }
    interface PhononAjaxReturnObject {
        cancel(): void;
    }

    /*** Components ***/
    type PhononColor = "positive" | "negative";
    type PhononPopoverDirection = "left" | "title-left" | "right" | "title";
    interface PhononPanelComponent {
        open(): void;
        close(): void;
    }
    interface PhononSidePanelComponent {
        open(): void;
        close(): void;
    }
    interface PhononDialogComponent {
        on(event: string, callback: (value?: any) => void): PhononDialogComponent;
    }
    interface PhononCustomDialogComponent extends PhononDialogComponent {
        open(): void;
        close(): void;
    }
    interface PhononIndicatorComponent extends PhononDialogComponent {
        open(): void;
        close(): void;
    }
    interface PhononNotifComponent {
        setColor(color: PhononColor): PhononNotifComponent;
        show(): PhononNotifComponent;
        hide(): PhononNotifComponent;
    }
    interface PhononPopoverItem {
        text: string;
        value: string;
    }
    interface PhononPopoverComponent {
        setList(list: string[] | PhononPopoverItem[]): PhononPopoverComponent;
        setList(list: any[], itemBuilder?: (item: any) => void): PhononPopoverComponent;
        attachButton(element: string | Element, autoBind?: boolean): PhononPopoverComponent;
        open(direction: PhononPopoverDirection): PhononPopoverComponent;
        openFrom(element: string | Element): PhononPopoverComponent;
        close(): void;
        onItemChanged(callback: (data: PhononPopoverItem) => void): PhononPopoverComponent;
    }
    interface PhononPreloaderComponent {
        show(): void;
        hide(): void;
    }
    interface PhononTabComponent {
        setCurrentTab(pageName: string, tabNumber: number): void;
        init(page?: string): void;
    }
}

interface Document {
    on(event: string, callback: (event: Phonon.PhononCustomWindowEvent) => void, useCapture?: boolean): void;
    off(event: string, callback: (event: Phonon.PhononCustomWindowEvent) => void, useCapture?: boolean): void;
}
interface Window {
    on(event: string, callback: (event: Phonon.PhononCustomWindowEvent) => void, useCapture?: boolean): void;
    off(event: string, callback: (event: Phonon.PhononCustomWindowEvent) => void, useCapture?: boolean): void;
    phonon: Phonon.Phonon;
}
interface Element {
    on(event: string, callback: (event: any) => void, useCapture?: boolean): void;
    off(event: string, callback: (event: any) => void, useCapture?: boolean): void;
}
interface NodeList {
    on(event: string, callback: (event: any) => void, useCapture?: boolean): void;
    off(event: string, callback: (event: any) => void, useCapture?: boolean): void;
}

declare const phonon: Phonon.Phonon;
