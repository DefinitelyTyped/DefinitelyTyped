import observer = require("node-observer");

class Demo {
    sayHello(msg: string) {
        console.log(`hello ${msg}`);
    }
}

const obj = new Demo();

for (let i = 0; i < 3; i++) {
    observer.subscribe(obj, "hello", obj.sayHello);
}
observer.unsubscribe(obj, "hello");

observer.send(obj, "hello", "sent event");
