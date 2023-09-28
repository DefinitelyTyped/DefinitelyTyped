const navigation = window.navigation;

const entries: NavigationHistoryEntry[] = navigation.entries();
const entry: NavigationHistoryEntry | null = navigation.currentEntry;
if (entry) {
    const key: string = entry.key;
    const id: string = entry.id;
    const url: string | null = entry.url;
    const index: number = entry.index;
    const sameDocument: boolean = entry.sameDocument;
    const state: unknown = entry.getState();
    entry.ondispose = () => {};
    const listener = () => {};
    entry.addEventListener("dispose", listener);
    entry.removeEventListener("dispose", listener);
}
navigation.updateCurrentEntry({ state: "" as unknown });
const transition: NavigationTransition | null = navigation.transition;
if (transition) {
    const navigationType: NavigationTypeString = transition.navigationType;
    const from: NavigationHistoryEntry = transition.from;
    const finished: Promise<void> = transition.finished;
}
const canGoBack: boolean = navigation.canGoBack;
const canGoForward: boolean = navigation.canGoForward;
navigation.navigate("/url", { state: "" as unknown, history: "replace", info: "" as unknown });
navigation.reload({ state: "" as unknown, info: "" as unknown });
navigation.traverseTo("", { info: "" as unknown });
navigation.back({ info: "" as unknown });
navigation.forward({ info: "" as unknown });
const navigateListener = (e: NavigateEvent) => {
    const navigationType: NavigationTypeString = e.navigationType;
    const canIntercept: boolean = e.canIntercept;
    const userInitiated: boolean = e.userInitiated;
    const hashChange: boolean = e.hashChange;
    const destination: NavigationDestination = e.destination;
    const url: string = destination.url;
    const key: string | null = destination.key;
    const id: string | null = destination.id;
    const index: number = destination.index;
    const sameDocument: boolean = destination.sameDocument;
    const state: unknown = destination.getState();
    const signal: AbortSignal = e.signal;
    const formData: FormData | null = e.formData;
    const downloadRequest: string | null = e.downloadRequest;
    const info: unknown = e.info;
};
navigation.onnavigate = navigateListener;
navigation.addEventListener("navigate", navigateListener);
navigation.removeEventListener("navigate", navigateListener);
const navigateSuccessListener = (e: Event) => {};
navigation.onnavigatesuccess = navigateSuccessListener;
navigation.addEventListener("navigatesuccess", navigateSuccessListener);
navigation.removeEventListener("navigatesuccess", navigateSuccessListener);
const navigateErrorListener = (e: Event) => {};
navigation.onnavigateerror = navigateErrorListener;
navigation.addEventListener("navigateerror", navigateErrorListener);
navigation.removeEventListener("navigateerror", navigateErrorListener);
const currentEntryChangeListener = (e: NavigationCurrentEntryChangeEvent) => {
    const navigationType: NavigationTypeString | null = e.navigationType;
    const from: NavigationHistoryEntry = e.from;
};
navigation.oncurrententrychange = currentEntryChangeListener;
navigation.addEventListener("currententrychange", currentEntryChangeListener);
navigation.removeEventListener("currententrychange", currentEntryChangeListener);
