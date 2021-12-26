export = ClassDefManager;
declare function ClassDefManager(
    opt_options?:
        | {
              vfs: any;
              classes: any;
          }
        | Record<any, any>,
    ...args: any[]
): void;
declare class ClassDefManager {
    constructor(
        opt_options?:
            | {
                  vfs: any;
                  classes: any;
              }
            | Record<any, any>,
        ...args: any[]
    );
    vfs: any;
    classes: any;
    cache: {};
    private masterDetailFieldsToValidate_;
    strictMode: boolean;
    protected runStartupScripts(): void;
    private formatCacheId_;
    private configStrictEvaluator_;
    private strictEvaluator_;
    private validateFields_;
    private getDef_;
    getModelDef(
        classKey: number,
        opt_options?:
            | Record<any, any>
            | {
                  ignoredFileKeys: number[];
                  forceStrictMode: boolean;
              }
    ): ModelDef;
    getViewDef(
        classKey: number,
        opt_options?:
            | Record<any, any>
            | {
                  ignoredFileKeys: number[];
              }
    ): ModelDef;
    getConfig(
        classKey: number,
        opt_options?:
            | Record<any, any>
            | {
                  ignoredFileKeys: number[];
              }
    ): ConfigDef;
    getClassDef(classKey: number, opt_ignoredClassKeys?: number[]): ModelDef;
    getModelDefBySource(src: string, parent: number, opt_classKey?: number): ModelDef;
    getViewDefBySource(src: string, parent: number): ModelDef;
    getClassDefBySource: any;
    getConfigDefBySource(src: string, parent: number): ModelDef;
    private getDefBySource_;
    getHierarchicalClasses(classKey: number): number[];
    private createDef_;
    getDefVersion(classKey: number, sourceType: string): number;
    getClassDefVersion(classKey: number): number;
    private updateChildrenCachedClassDef_;
    clearCache(): void;
    hasOwnViewDef(classKey: number): boolean;
    hasOwnModelDef(classKey: number): boolean;
}
declare namespace ClassDefManager {
    const protectedFieldProperties: string[];
    const protectedFieldEvents: string[];
    const protectedModelDefProperties: string[];
    const protectedModelDefEvents: string[];
    namespace constructors {
        export { ModelDef as VIEW };
        export { ModelDef as MODEL };
        export { ConfigDef as CONFIG };
        export { ModelDef as NON_STRICT_MODEL };
    }
    function getParentClass(classKey: number | DBKey): number;
    function getClassVersion(classKey: number | DBKey): number;
    function getInstance(): ClassDefManager;
}
declare const classes: import('../database/Classes.js');
import ModelDef = require('./ModelDef.js');
import ConfigDef = require('./ConfigDef.js');
import DBKey = require('../dbkey/DBKey.js');
