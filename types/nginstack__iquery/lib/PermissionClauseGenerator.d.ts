export = PermissionClauseGenerator;
declare function PermissionClauseGenerator(): void;
declare class PermissionClauseGenerator {
    extrafilterClassMap_: {};
    classesWithoutExtrafilter_: any[];
    iGroupUser_: import('@nginstack/engine/lib/dataset/DataSet');
    classDefManager_: ClassDefManager;
    insertClassPermission_(classKey: any, userKey: any, extraFilterDef: any): void;
    addClassPermission(classKey: any, userKey: any): void;
    generate(classFieldName: any):
        | string
        | Array<
              | string
              | {
                    field: any;
                    operator: string;
                    value: any;
                    disableGetChildren: boolean;
                }
          >
        | {
              field: any;
              operator: string;
              value: any[];
              disableGetChildren: boolean;
          }
        | Array<
              | string
              | Array<
                    | string
                    | {
                          field: any;
                          operator: string;
                          value: any;
                          disableGetChildren: boolean;
                      }
                >
              | {
                    field: any;
                    operator: string;
                    value: any[];
                    disableGetChildren: boolean;
                }
          >;
}
import ClassDefManager = require('@nginstack/engine/lib/classdef/ClassDefManager.js');
