declare namespace oj {  
  class PullToRefreshUtils {
    static setupPullToRefresh(element: Element, refreshFunc: (()=> Promise<any>), options?: {threshold?: number, primaryText?: string, secondaryText?: string}): void;
    static tearDownPullToRefresh(element: Element): void;
  }

}
