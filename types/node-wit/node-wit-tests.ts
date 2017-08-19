import { Wit, log, WitRequest, WitResponse, WitContext } from "node-wit";

const wit = new Wit({
    accessToken: "",
    actions: {
        send(request: WitRequest, response: WitResponse) {
            return new Promise((resolve, reject) => {
                console.log(response.text);
                console.log(request.entities);
                return resolve();
            });
        },
        myAction(request: WitRequest) {
            console.log(`Session ${request.sessionId} received ${request.text}`);
            console.log(`The current context is ${JSON.stringify(request.context)}`);
            console.log(`Wit extracted ${JSON.stringify(request.entities)}`);
            return Promise.resolve(request.context);
        }
    },
    logger: new log.Logger(log.DEBUG)
});

wit.message("what is the weather in London?", {}).then((res) => {
    console.log(res._text);

    console.log(res.entities);
}).catch((err) => {
    console.log(err);
});

const sessionId = 'my-user-session-42';
const context0: WitContext = {};
wit.runActions(sessionId, 'what is the weather in London?', context0)
.then((context1) => {
  console.log('The session state is now: ' + JSON.stringify(context1));
  return wit.runActions(sessionId, 'and in Brussels?', context1);
})
.then((context2) => {
  console.log(context2.entities + ", ");
  console.log(context2.location + ", ");
  console.log(context2.reference_time + ", ");
  console.log(context2.state + ", ");
  console.log(context2.timezone);
})
.catch((e) => {
  console.log('Oops! Got an error: ' + e);
});

wit.converse('my-user-session-42', 'what is the weather in London?', {})
.then((data) => {
  console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
  console.log(data.entities);
})
.catch(console.error);
