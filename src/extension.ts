import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {
	const eclipseCheExtPlugin = vscode.extensions.getExtension('@eclipse-che.ext-plugin');
	if (eclipseCheExtPlugin) {
		const user = await eclipseCheExtPlugin.exports.user.getCurrentUser();
		vscode.window.showInformationMessage(`Eclipse Che user information: id ${user.id} with name ${user.name}`);
	} else {
		vscode.window.showWarningMessage('Not running inside Eclipse Che, not displaying any user information');
	}
}