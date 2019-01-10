export type RunMethod<Target, Ret = any> = ((this: Target, ...args: any[]) => Ret) | keyof Target;
export type EmberRunQueues =
    | 'sync'
    | 'actions'
    | 'routerTransitions'
    | 'render'
    | 'afterRender'
    | 'destroy';
