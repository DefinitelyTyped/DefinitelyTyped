import {
    Agent,
    start
} from 'elastic-apm-node';

const agent: Agent = start({
  serviceName: '',
  secretToken: '',
  serverUrl: ''
});
const started: boolean = agent.isStarted();

function testCallbacks() {
    const testError: Error = new Error("Test Error");
    agent.captureError(testError, {error: "test"}, (err: Error) => err = testError);
    agent.captureError(testError, {error: "test"});
    agent.captureError(testError);

    agent.addFilter((payload: any) => {
        return payload;
    });

    agent.handleUncaughtExceptions((err: Error) => err = testError);

    agent.flush((test: any) => test);
}

const customContext: boolean = agent.setCustomContext({
    id: "test id",
    username: "test user",
    email: "testEmail@test.com"
});

const userContext: boolean = agent.setUserContext({
    id: "test id",
    username: "test user",
    email: "testEmail@test.com"
});

const transactionName: any = agent.setTransactionName("new name");

const tags: any = agent.setTag("name", "value");

const addedTags: any = agent.addTags({name: "value"});

const startSpan: any = agent.startSpan();

const secondStartSpan: any = agent.startSpan("name", 13);

const transaction = agent.startTransaction();
