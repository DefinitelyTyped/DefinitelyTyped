webvis.requestContext("test_context", {
    hubURL: "https://demo.threedy.io",
}).then((context: webvis.ContextAPI | undefined) => {
    console.log("Context created", context);
}).catch((error) => {
    console.error("Error creating context:", error);
});

const myContext: webvis.ContextAPI | undefined = webvis.getContext("test_context");
const myContexts: webvis.ContextAPI[] = webvis.getContexts();

const contextCreatedListener = (context: webvis.ContextAPI) => {
    console.log("Context created", context);
};

const contextRemovedListener = (contextName: string) => {
    console.log("Context removed", contextName);
};

webvis.addContextCreatedListener(contextCreatedListener, { once: true });
webvis.addContextRemovedListener(contextRemovedListener, { once: true });

webvis.removeContextCreatedListener(contextCreatedListener);
webvis.removeContextRemovedListener(contextRemovedListener);

webvis.removeContext("test_context");
