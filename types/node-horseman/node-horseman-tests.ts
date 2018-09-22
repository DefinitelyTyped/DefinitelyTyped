import horseman = require("node-horseman");

const horse = new horseman({
    timeout: 10000
});

horse.on('error', (msg: any, trace: any) => { console.log(msg, trace); })
.open("http://example.org/").waitForNextPage().html().then((pageContent: string) => {
    console.log(pageContent);
    horse.close();
});
