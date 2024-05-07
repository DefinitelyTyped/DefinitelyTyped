export {};

declare global {
    class Android {
        saveFile(filename: string, mime: string, content: string): void;

        // open dialog to send geo intent for navigation apps like gmaps or waze etc...
        intentPosLink(lat: number, lng: number, zoom: number, title: string, isPortal: boolean): void;

        // share a string to the IITC share activity. only uses the share tab.
        shareString(text: string): void;

        // disable javascript injection while spinner is enabled prevent the spinner from closing automatically
        spinnerEnabled(enable: boolean): void;

        copy(text: string): void;

        getVersionCode(): number;
        getVersionName(): string;

        addPane(id: string, label: string, icon?: string /*= "ic_action_new_event"*/): void;
        switchToPane(id: string): void;

        dialogFocused(id: string): void;
        dialogOpened(id: string, open: boolean): void;

        setLayers(base_layer: string, overlay_layer: string): void;

        addPortalHighlighter(name: string): void;
        setActiveHighlighter(name: string): void;

        // IITC-Version check plugin
        updateIitc(fileUrl: string): void;

        showZoom(): boolean;
        setFollowMode(follow: boolean): void;

        setProgress(progress: number): void;

        getFileRequestUrlPrefix(): string;
        setPermalink(href: string): void;

        reloadIITC(clearCache?: boolean /*= false*/): void;
    }

    let android: Android;
}
