import AsyncPolling = require("async-polling");

// Tests based on examples in https://github.com/cGuille/async-polling#readme

AsyncPolling(end => {
    end();
}, 3000).run();

function someAsynchroneProcess(callback: (error?: Error, response?: any) => any): any {
    callback();
}

let polling = AsyncPolling(end => {
    someAsynchroneProcess(function (error, response) {
        if (error) {
            end(error);
            return;
        }

        end(null, response);
    });
}, 3000);
polling.on("error", (error: Error) => {});
polling.on("result", (result: any) => {});
polling.run();
polling.stop();

AsyncPolling(function(end) {
    this.stop();
    end();
}, 3000).run();

let i = 0;

polling = AsyncPolling(function(end) {
    ++i;
    if (i === 3) {
        return end(new Error("i is " + i));
    }
    if (i >= 5) {
        this.stop();
        return end(null, `#${i} stop`);
    }
    end(null, `#${i} wait a second...`);
}, 1000);

const eventNames: AsyncPolling.EventName[] = ["run", "start", "end", "schedule", "stop"];
eventNames.forEach(eventName => {
    polling.on(eventName, () => {
        console.log("lifecycle:", eventName);
    });
});

polling.on("result", (result: any) => {
    console.log("result:", result);
});

polling.on("error", (error: Error) => {
    console.error("error:", error);
});

polling.run();