import { GraphiteDatasource } from './datasource';
import { GraphiteQueryCtrl } from './query_ctrl';

declare class GraphiteConfigCtrl {
  static templateUrl: string;
}
declare class GraphiteQueryOptionsCtrl {
  static templateUrl: string;
}
declare class AnnotationsQueryCtrl {
  static templateUrl: string;
}
export { 
    GraphiteDatasource as Datasource, 
    GraphiteQueryCtrl as QueryCtrl, 
    GraphiteConfigCtrl as ConfigCtrl, 
    GraphiteQueryOptionsCtrl as QueryOptionsCtrl, 
    AnnotationsQueryCtrl as AnnotationsQueryCtrl
};
