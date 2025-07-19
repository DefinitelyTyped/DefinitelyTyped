interface InstallFunction {
    (): Promise<string>;
    (installUrl: string): Promise<string>;
    (installUrl: string, manifestId: string): Promise<string>;
}

interface Navigator {
    install?: InstallFunction;
}
