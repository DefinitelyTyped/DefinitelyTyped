import * as arc from "@architect/functions";

function test() {
    arc.ws.send({ id: "anything", payload: { a: 4 } });
}

test();
