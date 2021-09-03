declare module 'node_helper' {
  export function create(object: NodeHelperModule): void

  export type NodeHelperModule = {
    init?(): void
    start?(): void
    stop?(): void
    socketNotificationReceived?(notification: string, payload: any): void
    sendSocketNotification?(notification: string, payload: any): void
    [key: string]: any
  } & ThisType<NodeHelperModule>
}
