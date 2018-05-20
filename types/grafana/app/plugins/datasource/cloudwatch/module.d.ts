import './query_parameter_ctrl';
import { CloudWatchDatasource } from './datasource';
import { CloudWatchQueryCtrl } from './query_ctrl';
import { CloudWatchConfigCtrl } from './config_ctrl';
declare class CloudWatchAnnotationsQueryCtrl {
  static templateUrl: string;
}
export { 
  CloudWatchDatasource as Datasource, 
  CloudWatchQueryCtrl as QueryCtrl, 
  CloudWatchConfigCtrl as ConfigCtrl, 
  CloudWatchAnnotationsQueryCtrl as AnnotationsQueryCtrl
};
