

var RedisSMQ = require("rsmq");
var rsmq = new RedisSMQ( {host: "127.0.0.1", port: 6379, ns: "rsmq"} );
var rsmq2 = new RedisSMQ({client: rsmq.redis, ns: "rsmq2"});

rsmq.createQueue({qname: "my-queue"}, (e: Error, success: number) => {
    if (e) {
        console.error(e);
    }

    console.info('"my-queue" has created');
});

rsmq.sendMessage({qname: "my-queue", message: "first message"}, (e: Error, id: string) => {
    rsmq.changeMessageVisibility({qname: "my-queue", id: id, vt: 100}, (e: Error, success: number) => {});
});
rsmq.getQueueAttributes({qname: 'my-queue'}, (e: Error, attr: any) =>{} );
rsmq.setQueueAttributes({qname: "my-queue", vt: 20}, (e: Error, attr: any) => {});
rsmq.receiveMessage({qname: "my-queue"}, (e: Error, message: any) => {
    rsmq.deleteMessage(message, (e: Error, success: number) => {});
});
rsmq.listQueues((e: Error, list: string[]) => {});
rsmq.deleteQueue({qname: "my-queue"}, (e: Error, res: number) => {});