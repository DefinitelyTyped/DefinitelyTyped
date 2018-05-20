import { OpenTsDatasource } from './datasource';
import { OpenTsQueryCtrl } from './query_ctrl';
import { OpenTsConfigCtrl } from './config_ctrl';

declare class AnnotationsQueryCtrl {
  static templateUrl: string;
}

export {
  OpenTsDatasource as Datasource, 
  OpenTsQueryCtrl as QueryCtrl, 
  OpenTsConfigCtrl as ConfigCtrl, 
  AnnotationsQueryCtrl as AnnotationsQueryCtrl
};
