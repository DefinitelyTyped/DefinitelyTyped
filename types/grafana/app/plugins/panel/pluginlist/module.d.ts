import { PanelCtrl } from '../../../features/panel/panel_ctrl';

declare class PluginListCtrl extends PanelCtrl {
  private backendSrv;
  private $location;
  static templateUrl: string;
  pluginList: any[];
  viewModel: any;
  panelDefaults: {};
  /** @ngInject */
  constructor($scope: any, $injector: any, backendSrv: any, $location: any);
  onInitEditMode(): void;
  gotoPlugin(plugin: any, evt: any): void;
  updateAvailable(plugin: any, $event: any): void;
  update(): void;
}

export { PluginListCtrl, PluginListCtrl as PanelCtrl };
