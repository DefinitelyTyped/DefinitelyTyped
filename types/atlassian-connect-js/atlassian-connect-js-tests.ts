AP.defineGlobal({}); // $ExpectType void
AP.defineModule('module', {}); // $ExpectType void
AP.getLocation(location => console.log(location)); // $ExpectType void
AP.resize('10px', '10px'); // $ExpectType void
AP.sizeToParent(true); // $ExpectType void
AP.hideFooter(true); // $ExpectType void
AP.addRequestMarshal(); // $ExpectType void
AP.request('http://example.com', {}); // $ExpectType Promise<{ body: string; xhr: XMLHttpRequest }>
AP.request({ url: 'http://example.com' }); // $ExpectType Promise<{ body: string; xhr: XMLHttpRequest }>

AP.context.getToken(token => console.log(token)); // $ExpectType void
AP.context.getContext(context => console.log(context)); // $ExpectType void

AP.cookie.save('name', 'value', 10); // $ExpectType void
AP.cookie.read('name', value => console.log(value)); // $ExpectType void
AP.cookie.erase('name'); // $ExpectType void

AP.dialog.create({ key: 'key', size: 'small', customData: { data: 1 } }); // $ExpectType Dialog
AP.dialog.close(); // $ExpectType void
AP.dialog.getCustomData(data => console.log(data)); // $ExpectType void
AP.dialog.getButton('submit'); // $ExpectType {} | DialogButton
AP.dialog.disableCloseOnSubmit(); // $ExpectType void
AP.dialog.createButton(); // $ExpectType DialogButton
AP.dialog.isCloseOnEscape(enabled => console.log(enabled)); // $ExpectType void

const filter = (toCompare: any) => (toCompare === 'data' ? true : false);

AP.events.on('name', data => console.log(data)); // $ExpectType void
AP.events.onPublic('n', () => null, filter); // $ExpectType void
AP.events.once('name', data => console.log(data)); // $ExpectType void
AP.events.oncePublic('name', data => console.log(data), filter); // $ExpectType void
AP.events.onAny(data => console.log(data)); // $ExpectType void
AP.events.onAnyPublic(data => console.log(data), filter); // $ExpectType void
AP.events.off('name', data => console.log(data)); // $ExpectType void
AP.events.offPublic('name', data => console.log(data)); // $ExpectType void
AP.events.offAll('name'); // $ExpectType void
AP.events.offAllPublic('name'); // $ExpectType void
AP.events.offAnyPublic(data => console.log(data)); // $ExpectType void
AP.events.emit('name', ['data']); // $ExpectType void
AP.events.emitPublic('name', ['data']); // $ExpectType void

const flag = AP.flag.create({ title: 'title', body: 'body', type: 'info', actions: { test: 'text' } }); // $ExpectType Flag
flag.close(); // $ExpectType void

AP.history.back(); // $ExpectType void
AP.history.forward(); // $ExpectType void
AP.history.go(-2); // $ExpectType void
AP.history.getState(); // $ExpectType string
AP.history.pushState({ state: 'state' }, 'title', 'https://example.com'); // $ExpectType void
AP.history.replaceState('https://example.com'); // $ExpectType void

AP.host.getSelectedText(selection => console.log(selection)); // $ExpectType void

AP.inlineDialog.hide(); // $ExpectType void

AP.jira.refreshIssuePage(); // $ExpectType void
AP.jira.getWorkflowConfiguration(workflowConfiguration => console.log(workflowConfiguration)); // $ExpectType void
AP.jira.isDashboardItemEditable(editable => console.log(editable)); // $ExpectType void
AP.jira.openCreateIssueDialog(issues => console.log(issues), { pid: 1, issueType: 1, fields: { field1: 'field' } }); // $ExpectType void
AP.jira.setDashboardItemTitle('title'); // $ExpectType void
AP.jira.initJQLEditor(); // $ExpectType void
AP.jira.showJQLEditor(obj => console.log(obj.jql), {}); // $ExpectType void
AP.jira.isNativeApp(isNative => console.log(isNative)); // $ExpectType void

AP.navigator.getLocation(location => console.log(location)); // $ExpectType void
AP.navigator.go(AP.navigator.NavigatorTargetConfluence.dashboard, {}); // $ExpectType void
AP.navigator.go(AP.navigator.NavigatorTargetJira.dashboard, {}); // $ExpectType void
AP.navigator.reload(); // $ExpectType void

AP.user.getUser(user => console.log(user.id, user.key, user.fullName)); // $ExpectType void
AP.user.getCurrentUser(user => console.log(user.atlassianAccountId)); // $ExpectType void
AP.user.getTimeZone(timezone => console.log(timezone)); // $ExpectType void
AP.user.getLocale(locale => console.log(locale)); // $ExpectType void
