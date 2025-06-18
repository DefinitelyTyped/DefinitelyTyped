export const colabFunction = (name: string) => async (...args: Array<{}>) => {
    // stricter types are coming in the future.  for now, just importing from
    // @googlecolab
    const response = (await google.colab.kernel.invokeFunction(name, args)) as {
        data: {
            ["application/json"]: [{}]; // eslint-disable-line @definitelytyped/no-single-element-tuple-type
        };
    };
    return response.data["application/json"][0];
};

if (google.colab.kernel.accessAllowed) {
    let channel: google.colab.kernel.comms.Comm;

    (async () => {
        channel = await google.colab.kernel.comms.open("sample");

        // sending messages to Python
        setInterval(() => {
            channel.send({ value: `hi from JavaScript at ${new Date()}` });
        }, 1000);

        // receiving messages from Python
        for await (const message of channel.messages) {
            console.log(message);
        }
    })();
}

const div = document.createElement("div");
google.colab.output.getActiveOutputArea().appendChild(div);
google.colab.output.getDefaultOutputArea().appendChild(div);

google.colab.output.pauseOutputUntil(fetch("http://example.com"));

declare const someEmptyPromise: Promise<void>;
google.colab.output.pauseOutputUntil(someEmptyPromise);

google.colab.output.setIframeHeight(100, true, { interactive: true });
google.colab.output.resizeIframeToContent();
