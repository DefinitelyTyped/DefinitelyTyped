const client = new LanguageClient(
    'apexskier.typescript',
    'Typescript Language Server',
    {
        type: 'stdio',
        path: `/usr/bin/env`,
        args: ['bash', '-c', `${nova.extension.path}/run.sh | tee /tmp/nova-typescript.sh.log`],
        env: {
            WORKSPACE_DIR: nova.workspace.path || '',
        },
    },
    {
        syntaxes: ['typescript'],
    },
);

export function activate() {
    console.log('activating...');
    client.start();
}

export function deactivate() {
    console.log('deactivating...');
    client.stop();
}
