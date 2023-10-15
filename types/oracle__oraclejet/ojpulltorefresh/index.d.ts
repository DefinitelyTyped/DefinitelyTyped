export function setupPullToRefresh(element: Element, refreshFunc: () => Promise<any>, options?: {
    threshold?: number | undefined;
    primaryText?: string | undefined;
    secondaryText?: string | undefined;
}): void;
export function tearDownPullToRefresh(element: Element): void;
