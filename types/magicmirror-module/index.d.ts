// Type definitions for MagicMirror Modules
// Project: https://magicmirror.builders/
// Definitions by: Jalibu <https://github.com/jalibu>
//                 MichMich <https://github.com/MichMich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare namespace Module {
    function register<T>(moduleName: string, moduleProperties: ModuleProperties<T>): void;
 
    type ModuleProperties<T> = {
     config?: T
     defaults?: T
     getDom?: () => HTMLElement
     getHeader?: () => string
     getStyles?: () => string[]
     getTemplate?: () => string
     getTemplateData?: () => object
     getTranslations?: () => { [key: string]: string }
     notificationReceived?: (notification: string, payload: any, sender: object) => void
     resume?: () => void
     socketNotificationReceived?: (notification: string, payload: any) => void
     suspend?: () => void
     [key: string]: any
   } & ThisType<ModuleProperties<T>>;
 }

 declare namespace node_helper {
    function create(object: NodeHelperModule): void;
 
    type NodeHelperModule = {
     init?(): void
     start?(): void
     stop?(): void
     socketNotificationReceived?(notification: string, payload: any): void
     sendSocketNotification?(notification: string, payload: any): void
     [key: string]: any
   } & ThisType<NodeHelperModule>;
 }
 