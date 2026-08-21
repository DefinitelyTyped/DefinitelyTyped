import { Client, Service } from "upyun";

const service = new Service("your service name", "your operator name", "your operator password");
const client = new Client(service);

client.usage("/sub/dir").then(size => {
    console.log("/sub/dir total used size: " + size);
});
