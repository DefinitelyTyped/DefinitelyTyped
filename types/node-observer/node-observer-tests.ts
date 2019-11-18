import observer = require("node-observer");

class Demo {
    public sayHello(msg: String) {
        console.log(`hello ${msg}`);
    }
}

let obj = new Demo();

for (let i = 0; i < 3; i++) {
    observer.subscribe(obj, "hello", obj.sayHello);
}
observer.unsubscribe(obj, "hello");

observer.send(obj, "hello", "sent event");