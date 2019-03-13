import * as vscode from 'vscode';

vscode.commands.registerCommand('extension.helloWorld', () => {
	vscode.window.showInformationMessage('Hello World!');
});

vscode.languages.registerCompletionItemProvider('markdown', {
	provideCompletionItems() {
		return [];
	}
});

const nodeDependenciesProvider: vscode.TreeDataProvider<string> = {
	getChildren() {
		return [];
	},
	getTreeItem(el: string) {
		return {
			id: el
		};
	}
};

vscode.window.registerTreeDataProvider('nodeDependencies', nodeDependenciesProvider);
