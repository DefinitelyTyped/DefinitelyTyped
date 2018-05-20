import { GrafanaDatasource } from './datasource';
import { QueryCtrl } from 'grafana/app/plugins/sdk';

declare class GrafanaQueryCtrl extends QueryCtrl {
  static templateUrl: string;
}

declare class GrafanaAnnotationsQueryCtrl {
  annotation: any;
  constructor();
  static templateUrl: string;
}
export { 
  GrafanaDatasource, 
  GrafanaDatasource as Datasource, 
  GrafanaQueryCtrl as QueryCtrl, 
  GrafanaAnnotationsQueryCtrl as AnnotationsQueryCtrl
};
