import { EventDispatcher, EventInterface } from "yuka";

class TestEvent implements EventInterface {
    type = "foo";
    target: EventDispatcher;
}

const handlerFunction = (event: EventInterface) => {};

const dispatcher = new EventDispatcher();

dispatcher.addEventListener("dummy", handlerFunction);
dispatcher.hasEventListener("dummy", handlerFunction);
dispatcher.dispatchEvent(new TestEvent());
dispatcher.dispatchEvent({ type: "generic-event" });
dispatcher.removeEventListener("dummy", handlerFunction);
