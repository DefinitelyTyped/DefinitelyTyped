export function setupPullToRefresh(element: Element, refreshFunc: (() => Promise<any>), options?: {
    threshold?: number;
    primaryText?: string;
    secondaryText?: string;
}): void;
export function tearDownPullToRefresh(element: Element): void;
