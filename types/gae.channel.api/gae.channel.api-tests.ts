

function test_channel() {
    var channel = new goog.appengine.Channel("test");
    var socket = channel.open();

    socket.onopen = () => {
        console.log("onopen");
    };
    socket.onmessage = (message) => {
        console.log("onmessage", message.data);
    };
    socket.onclose = ()=> {
        console.log("onclose");
    }
    socket.close();
}
