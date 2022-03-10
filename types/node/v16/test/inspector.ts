import * as inspector from 'node:inspector';

const b: inspector.Console.ConsoleMessage = { source: 'test', text: 'test', level: 'error' };
inspector.open();
inspector.open(0);
inspector.open(0, 'localhost');
inspector.open(0, 'localhost', true);
inspector.close();
const inspectorUrl: string | undefined = inspector.url();

const session = new inspector.Session();
session.connect();
session.connectToMainThread();
session.disconnect();

// Unknown post method
session.post('A.b', { key: 'value' }, (err, params) => { });
// TODO: parameters are implicitly 'any' and need type annotation
session.post('A.b', (err: Error | null, params?: {}) => { });
session.post('A.b');
// Known post method
const parameter: inspector.Runtime.EvaluateParameterType = { expression: '2 + 2' };
session.post('Runtime.evaluate', parameter,
    (err: Error | null, params: inspector.Runtime.EvaluateReturnType) => { });
session.post('Runtime.evaluate', (err: Error, params: inspector.Runtime.EvaluateReturnType) => {
    const exceptionDetails: inspector.Runtime.ExceptionDetails = params.exceptionDetails!;
    const resultClassName: string = params.result.className!;
});
session.post('Runtime.evaluate');

// General event
session.on('inspectorNotification', message => {
    message; // $ExpectType InspectorNotification<{}>
});
// Known events
session.on('Debugger.paused', (message: inspector.InspectorNotification<inspector.Debugger.PausedEventDataType>) => {
    const method: string = message.method;
    const pauseReason: string = message.params.reason;
});
session.on('Debugger.resumed', () => { });
