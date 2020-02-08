export function createView(options: {
    viewPath: string;
    require?: ((module: string) => any) | ((modules: string[], ready?: any, errback?: any) => void);
}): Promise<any>;
export function createViewModel(options: {
    viewModelPath: string;
    require?: ((module: string) => any) | ((modules: string[], ready?: any, errback?: any) => void);
}): Promise<any>;
