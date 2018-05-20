/// 
export declare class Profiler {
  panelsRendered: number;
  enabled: boolean;
  panelsInitCount: any;
  timings: any;
  digestCounter: any;
  $rootScope: any;
  scopeCount: any;
  init(config: any, $rootScope: any): void;
  refresh(): void;
  dashboardFetched(): void;
  dashboardInitialized(): void;
  getTotalWatcherCount(): number;
  renderingCompleted(panelId: any, panelTimings: any): void;
  panelInitialized(): void;
}
declare var profiler: Profiler;
export { profiler };
