import * as azdata from 'azdata';

azdata.dataprotocol.registerConnectionProvider({
    providerId: 'MyProvider',
    connect(connectionUri: string, connectionInfo: azdata.ConnectionInfo): Thenable<boolean> { return Promise.resolve(true); },
    disconnect(connectionUri: string): Thenable<boolean> { return Promise.resolve(true); },
    cancelConnect(connectionUri: string): Thenable<boolean> { return Promise.resolve(true); },
    listDatabases(connectionUri: string): Thenable<azdata.ListDatabasesResult> { return Promise.resolve({ databaseNames: [] }); },
    changeDatabase(connectionUri: string, newDatabase: string): Thenable<boolean> { return Promise.resolve(true); },
    rebuildIntelliSenseCache(connectionUri: string): Thenable<void> { return Promise.resolve(); },
    getConnectionString(connectionUri: string, includePassword: boolean): Thenable<string> { return Promise.resolve(''); },
    buildConnectionInfo(connectionString: string): Thenable<azdata.ConnectionInfo> { return Promise.resolve({ options: {} }); },
    registerOnConnectionComplete(handler: (connSummary: azdata.ConnectionInfoSummary) => any): void { },
    registerOnIntelliSenseCacheComplete(handler: (connectionUri: string) => any): void { },
    registerOnConnectionChanged(handler: (changedConnInfo: azdata.ChangedConnectionInfo) => any): void { }
});

class StubDisposable {
    public dispose(): void { }
}

const testContainerBuilder: azdata.ContainerBuilder<azdata.InputBoxComponent, any, any, azdata.InputBoxProperties> = {
    component: () => <any> {},
    withItems: (component: azdata.Component[]) => { throw new Error('Not implemented'); },
    withLayout: (layout: any) => { throw new Error('Not implemented'); },
    withProperties: (properties: azdata.InputBoxProperties) => { throw new Error('Not implemented'); },
    withValidation: (validation: (component: azdata.InputBoxComponent) => boolean | Thenable<boolean>) => { throw new Error('Not implemented'); }
};
testContainerBuilder.component();

const testButtonComponent: azdata.ButtonComponent = {
    id: 'my-loading-component',
    onDidClick: (listener: (e: any) => any) => new StubDisposable(),
    updateProperty: async (key: string, value: any) => { },
    updateCssStyles: async (cssStyles) => { },
    updateProperties: async (properties: { [key: string]: any }) => { },
    valid: false,
    validate: async () => false,
    focus: async () => { },
    onValidityChanged: (listener: (e: boolean) => any) => new StubDisposable()
};
testButtonComponent.validate();

const testLoadingComponent: azdata.LoadingComponent = {
    loading: false,
    component: testContainerBuilder.component(),
    id: 'my-loading-component',
    updateProperty: async (key: string, value: any) => { },
    updateCssStyles: async (cssStyles) => { },
    updateProperties: async (properties: { [key: string]: any }) => { },
    valid: false,
    validate: async () => false,
    focus: async () => { },
    onValidityChanged: (listener: (e: boolean) => any) => new StubDisposable()
};
testLoadingComponent.validate();
