import * as azdata from 'azdata';
import * as vscode from 'vscode';

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

const testComponentBuilder: azdata.ComponentBuilder<azdata.InputBoxComponent, azdata.InputBoxProperties> = {
    component: () => <any> {},
    withProperties: (properties: azdata.InputBoxProperties): azdata.ComponentBuilder<azdata.InputBoxComponent, azdata.InputBoxProperties> => { throw new Error('Function not implemented.'); },
    withProps: (properties: azdata.InputBoxProperties) => { throw new Error('Function not implemented.'); },
    withValidation: (validation: (component: azdata.InputBoxComponent) => boolean | Thenable<boolean>) => { throw new Error('Function not implemented.'); }
};
testComponentBuilder.component();

const testContainerBuilder: azdata.ContainerBuilder<azdata.DivContainer, any, any, azdata.DivContainerProperties> = {
    component: () => <any> {},
    withItems: (component: azdata.Component[]) => { throw new Error('Not implemented'); },
    withLayout: (layout: any) => { throw new Error('Not implemented'); },
    withProperties: (properties: azdata.DivContainerProperties) => { throw new Error('Not implemented'); },
    withProps: (properties: azdata.DivContainerProperties) => { throw new Error('Not implemented'); },
    withValidation: (validation: (component: azdata.DivContainer) => boolean | Thenable<boolean>) => { throw new Error('Not implemented'); }
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

azdata.window.createModelViewDialog('MyTitle', 'MyDialog', 'narrow');
azdata.window.createModelViewDialog('MyTitle2', 'MyDialog2', 'narrow', 'callout', 'below', true, true, { xPos: 0, yPos: 0, width: 100, height: 100 });
azdata.window.createModelViewDashboard('MyDashboardTitle', 'MyDashboard', { showIcon: true, alwaysShowTabs: false });

const testCard: azdata.CardProperties = {
    label: 'test-label',
    iconHeight: '16px',
    iconWidth: '16px'
};

const updateDisplayData: azdata.nb.IUpdateDisplayData = {
    output_type: 'update_display_data',
    data: {
        key1: 'value1'
    }
};

const connectionResult: azdata.ConnectionResult = {
    connected: true
};

const disposable: vscode.Disposable = azdata.queryeditor.registerQueryEventListener({
    onQueryEvent(type: azdata.queryeditor.QueryEventType, document: azdata.queryeditor.QueryDocument, args: azdata.ResultSetSummary | string | undefined) {
        return;
    }
});
