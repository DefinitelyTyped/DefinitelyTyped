declare module Module {
  export function register<T>(moduleName: string, moduleProperties: ModuleProperties<T>): void

  export type ModuleProperties<T> = {
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
  } & ThisType<ModuleProperties<T>>
}