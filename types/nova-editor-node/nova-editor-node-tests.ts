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

interface TestThisType {
    __type: 'TestThisType';
}
declare const testThis: TestThisType;

client.onDidStop(err => {
    // $ExpectType Error | undefined
    err;
});
client.onDidStop(function(err) {
    // $ExpectType Error | undefined
    err;
    // $ExpectType TestThisType
    this;
}, testThis);

export function activate() {
    client.start();
}

export function deactivate() {
    client.stop();
}

nova.commands.register('apexskier.foo', (foo: string) => {});

type CustomThis = string & { __t: 'CustomThis' };
const thisValue: CustomThis = 'hello' as CustomThis;
nova.commands.register(
    'apexskier.bar',
    function f(foo: string) {
        // $ExpectType CustomThis
        this;
    },
    thisValue,
);

nova.commands.invoke('apexskier.bar', 'foo');
// You're allowed to pass an editor in your own extension's commands
nova.commands.invoke('apexskier.bar', editor, 'foo');

// after 3.4: $ExpectType unknown
nova.config.get('test');

// $ExpectType string[] | null
nova.config.get('test', 'array');

/// https://novadocs.panic.com/api-reference/assistants-registry/

nova.assistants.registerColorAssistant(['foo'], {
    async provideColors(editor, context) {
        // $ExpectType TextEditor
        editor;
        // $ExpectType ColorInformationContext
        context;
        return [colorInformation];
    },
    async provideColorPresentations(color, editor, context) {
        // $ExpectType Color
        color;
        // $ExpectType TextEditor
        editor;
        // $ExpectType ColorPresentationContext
        context;
        return [colorPresentation];
    },
});

nova.assistants.registerCompletionAssistant('foo', {
    async provideCompletionItems(editor, context) {
        // $ExpectType TextEditor
        editor;
        // $ExpectType CompletionContext
        context;
        return [completionItem];
    },
});

/// https://novadocs.panic.com/api-reference/charset/

const charset1 = new Charset('abcd1234');
const charset2 = charset1.intersect(Charset.letters);

/// https://docs.nova.app/api-reference/clipboard/

// $ExpectType Promise<string>
nova.clipboard.readText();

/// https://novadocs.panic.com/api-reference/completion-item/

const completionItem = new CompletionItem('label', CompletionItemKind.Struct);
completionItem.insertTextFormat = InsertTextFormat.Snippet;
completionItem.insertText = 'text to insert';
completionItem.commitChars = new Charset('-');

/// https://docs.nova.app/api-reference/color-information/

const colorInformation = new ColorInformation(
    new Range(4, 2),
    new Color(ColorFormat.rgb, [1, 0, 0.5, 1])
);

/// https://docs.nova.app/api-reference/color-presentation/

const colorPresentation = new ColorPresentation('#000000', 'hex');

/// https://novadocs.panic.com/api-reference/emitter/

const emitter = new Emitter();

emitter.on('myEvent', (arg1, arg2, arg3) => {});

function doTask() {
    emitter.emit('myEvent', 'foo', 'bar', 12);
}

/// https://novadocs.panic.com/api-reference/file-system/

nova.fs.copyAsync('src', 'dst', function callback(err) {
    // @ts-expect-error
    this;
    // $ExpectType Error | undefined
    err;
});

nova.fs.copyAsync(
    'src',
    'dst',
    function callback(err) {
        // $ExpectType CustomThis
        this;
        // $ExpectType Error | undefined
        err;
    },
    thisValue,
);

nova.fs.moveAsync('src', 'dst', function callback(err) {
    // @ts-expect-error
    this;
    // $ExpectType Error | undefined
    err;
});

nova.fs.moveAsync(
    'src',
    'dst',
    function callback(err) {
        // $ExpectType CustomThis
        this;
        // $ExpectType Error | undefined
        err;
    },
    thisValue,
);

/// https://novadocs.panic.com/api-reference/issue-collection/

class MyLinterClass {
    issueCollection = new IssueCollection();

    deliverResults(fileURI: string, issues: Issue[]) {
        this.issueCollection.set(fileURI, issues);
    }

    // $ExpectType (fileURI: string) => boolean
    hasIssues(fileURI: string) {
        return this.issueCollection.has(fileURI);
    }

    // $ExpectType (fileURI: string) => ReadonlyArray<Issue>
    getIssues(fileURI: string) {
        return this.issueCollection.get(fileURI);
    }
}

/// https://novadocs.panic.com/api-reference/issue-parser/

const p = new Process('/path', {
    args: [],
});

const parser = new IssueParser('my-issue-matcher');

p.onStdout(line => {
    parser.pushLine(line);
});

p.onDidExit(code => {
    const issues = parser.issues;
});

p.start();

/// https://novadocs.panic.com/api-reference/issue/

const issue = new Issue();

issue.message = "Undefined name 'foobar'";
issue.code = 'E12';
issue.severity = IssueSeverity.Error;
issue.line = 10;
issue.column = 12;

new IssueCollection().set('fileURI', [issue]);

/// https://novadocs.panic.com/api-reference/notification-request/

const request = new NotificationRequest('foobar-not-found');

request.title = nova.localize('Foobar Not Found');
request.body = nova.localize('Enter the path to the foobar tool.');

request.type = 'input';
request.actions = [nova.localize('OK'), nova.localize('Ignore')];

const promise = nova.notifications.add(request);
promise.then(
    reply => {},
    error => {},
);

/// https://novadocs.panic.com/api-reference/path/

nova.path.join('test');
nova.path.join('test', 'a', 'b');

/// https://novadocs.panic.com/api-reference/process/

// Launches the Python executable to determine its current version
const options = {
    args: ['python', '--version'],
};

const process = new Process('/usr/bin/env', options);

process.onStdout(line => {});

process.start();

process.notify('didSave', { file: 'foo.txt' });

process.request('getNames', { sort: 'alpha' }).then(reply => {
    // $ExpectType any
    reply.result;
});

process.onNotify('didConnect', message => {});

process.onRequest('getCount', request => {
    return new Promise((resolve, reject) => {
        resolve({ count: 10 });
    });
});

// $ExpectType WritableStream<any> | null
process.stdin;
// $ExpectType WritableStreamDefaultWriter<any> | undefined
process.stdin?.getWriter();

// $ExpectType ReadableStream<any> | null
process.stdout;
// $ExpectType ReadableStreamDefaultReader<any> | undefined
process.stdout?.getReader();

// $ExpectType ReadableStream<any> | null
process.stderr;
// $ExpectType ReadableStreamDefaultReader<any> | undefined
process.stderr?.getReader();

/// https://novadocs.panic.com/api-reference/scanner/

const scanner = new Scanner('Foobar abc 12.0');

scanner.scanString('Foo'); // => "Foo"
scanner.scanString('Foo'); // => null
scanner.scanString('bar'); // => "bar"

scanner.scanChars(Charset.alphanumeric); // => "abc";

scanner.scanFloat(); // => 12.0
scanner.scanFloat(); // => null

scanner.atEnd; // => true

scanner.location = 42;

/// https://docs.nova.app/api-reference/task/

const task = new Task('Say Example');

task.setAction(
    Task.Build,
    new TaskProcessAction('/usr/bin/say', {
        args: ["I'm Building!"],
        env: {},
    }),
);

task.setAction(
    Task.Run,
    new TaskProcessAction('/usr/bin/say', {
        args: ["I'm Running!"],
        env: {},
    }),
);

task.setAction(
    Task.Clean,
    new TaskProcessAction('/usr/bin/say', {
        args: ["I'm Cleaning!"],
        env: {},
    }),
);

/// https://docs.nova.app/api-reference/task-command-action/

const action = new TaskCommandAction('myextension.runAction', {
    args: ["I'm Running!"],
});

task.setAction(Task.Run, action);

/// https://docs.nova.app/api-reference/task-resolvable-action/

const action2 = new TaskResolvableAction({
    data: [1, 2, 3],
});

task.setAction(Task.Run, action2);

// $ExpectType number[]
action2.data;

/// https://novadocs.panic.com/api-reference/text-editor/

// @ts-expect-error
new TextEditor();

declare const editor: TextEditor;

editor.selectedRange = editor.getLineRangeForRange(new Range(4, 2));

/// https://novadocs.panic.com/api-reference/tree-view/

class MyDataProvider implements TreeDataProvider<{ name: string }> {
    getChildren(element: { name: string }): Array<{ name: string }> | Promise<Array<{ name: string }>> {
        throw new Error('Method not implemented.');
    }
    getTreeItem(element: { name: string }): TreeItem {
        throw new Error('Method not implemented.');
    }
    getParent(element: { name: string }): TreeItem | null {
        return null;
    }
}

// Create the TreeView
const treeView = new TreeView('my-identifier', {
    dataProvider: new MyDataProvider(),
});

treeView.onDidChangeSelection(selection => {});

treeView.onDidExpandElement(element => {});

treeView.onDidCollapseElement(element => {});

treeView.onDidChangeVisibility(() => {});

/// https://novadocs.panic.com/api-reference/text-editor/

nova.workspace.showInputPalette('This is an input');

nova.workspace.showInputPalette('This is an input', {
    placeholder: "Help text"
});

nova.workspace.showInputPalette('This is an input', {
    placeholder: "Help text",
    // after 6.0
    value: "Default value"
});

/// https://docs.nova.app/api-reference/workspace/

nova.workspace.openFile("file:///tmp/test/txt");
nova.workspace.openFile("file:///tmp/test/txt", { line: 1 });
nova.workspace.openFile("file:///tmp/test/txt", { line: 1, column: 2 });
// @ts-expect-error
nova.workspace.openFile("file:///tmp/test/txt", { column: 2 });
nova.workspace.openNewTextDocument();
nova.workspace.openNewTextDocument({ content: "<!doctype html>" });
nova.workspace.openNewTextDocument({ syntax: "html" });
nova.workspace.openNewTextDocument({ content: "<!doctype html>", syntax: "html" });
nova.workspace.openNewTextDocument({ line: 1 });
nova.workspace.openNewTextDocument({ line: 1, column: 2 });
nova.workspace.openNewTextDocument({ syntax: "html", line: 1 });
// @ts-expect-error
nova.workspace.openNewTextDocument({ syntax: "html", column: 2 });
nova.workspace.openNewTextDocument({ content: "<!doctype html>", syntax: "html", line: 1, column: 2 });
