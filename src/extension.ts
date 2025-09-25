import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('periscope-go.showImplementation', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor || editor.document.languageId !== 'go') {
            vscode.window.showInformationMessage('Debe estar en un archivo Go para usar esta función');
            return;
        }

        try {
            const implementations = await vscode.commands.executeCommand<vscode.Location[]>(
                'vscode.executeImplementationProvider',
                editor.document.uri,
                editor.selection.active
            );

            if (implementations && implementations.length > 0) {
                const doc = await vscode.workspace.openTextDocument(implementations[0].uri);
                const editor = await vscode.window.showTextDocument(doc, vscode.ViewColumn.Beside);
                editor.selection = new vscode.Selection(
                    implementations[0].range.start,
                    implementations[0].range.end
                );
                editor.revealRange(implementations[0].range);
            }
        } catch (error) {
            vscode.window.showErrorMessage('Error al obtener la implementación');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}