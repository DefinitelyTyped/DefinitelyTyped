import * as vscode from 'vscode';
import fetch from 'node-fetch';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('epistemic.activateLicense', async () => {
        const license = await vscode.window.showInputBox({ prompt: 'Enter your Epistemic license key' });
        if (!license) {
            vscode.window.showWarningMessage('No license supplied. Activation aborted.');
            return;
        }

        try {
            // Store key securely
            await context.secrets.store('epistemic.licenseKey', license);
            vscode.window.showInformationMessage('License key stored. Verifying...');

            // Verify against local dev server (prototype)
            const res = await fetch('http://localhost:5000/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ license_key: license })
            });

            const json = await res.json();
            if (res.ok && json.status === 'valid') {
                vscode.window.showInformationMessage(`License valid (tier: ${json.tier}).`);
                await context.secrets.store('epistemic.jwt', json.signature || 'mock-jwt');
            } else {
                vscode.window.showErrorMessage(`License invalid: ${json.reason || res.statusText}`);
                await context.secrets.delete('epistemic.licenseKey');
            }
        } catch (err: any) {
            vscode.window.showErrorMessage('License verification failed: ' + (err.message || err));
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
