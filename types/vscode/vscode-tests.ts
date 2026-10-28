import * as vscode from 'vscode';

vscode.commands.registerCommand('extension.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World!');
});

vscode.languages.registerCompletionItemProvider('markdown', {
    provideCompletionItems() {
        return [];
    }
});

new vscode.MarkdownString('# header').isTrusted = {
    enabledCommands: []
};

vscode.languages.registerDocumentHighlightProvider('typescript', {
    provideDocumentHighlights(document, position) {
        return [
            new vscode.DocumentHighlight(
                document.getWordRangeAtPosition(position) ?? new vscode.Range(position, position),
                vscode.DocumentHighlightKind.Read
            )
        ];
    }
});
