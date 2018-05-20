import { GrafanaStreamDS } from './datasource';
import { QueryCtrl } from 'grafana/app/plugins/sdk';

declare class GrafanaQueryCtrl extends QueryCtrl {
  static templateUrl: string;
}
export { GrafanaStreamDS as Datasource, GrafanaQueryCtrl as QueryCtrl };
