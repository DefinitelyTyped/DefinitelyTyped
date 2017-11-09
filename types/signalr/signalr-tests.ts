

var connection = $.hubConnection();
var contosoChatHubProxy = connection.createHubProxy('contosoChatHub');
contosoChatHubProxy.on('addContosoChatMessageToPage', function (name, message) {
    console.log(name + ' ' + message);
});
connection.start().done(function () {
    // Wire up Send button to call NewContosoChatMessage on the server.
    $('#newContosoChatMessage').click(function () {
        contosoChatHubProxy.invoke('newContosoChatMessage', $('#displayname').val(), $('#message').val());
        $('#message').val('').focus();
    });
}).fail(function () {
    console.log('Could not connect');
});

connection.qs = { 'version': '1.0' };

$.connection.hub.url = '<yourbackendurl>';
$.connection.hub.qs = { 'version': '1.0' };
$.connection.hub.start({ transport: 'longPolling' });
$.connection.hub.start({ transport: ['webSockets', 'longPolling'] });
connection.start({ transport: 'longPolling' });
connection.start({ transport: ['webSockets', 'longPolling'] });

$.connection.hub.start().done(function () {
    console.log("Connected, transport = " + $.connection.hub.transport.name);
});

connection.hub.start().done(function () {
    console.log("Connected, transport = " + connection.transport.name);
});

$.connection.hub.connectionSlow(function () {
    console.log('We are currently experiencing difficulties with the connection.')
});
connection.connectionSlow(function () {
    console.log('We are currently experiencing difficulties with the connection.')
});

$.connection.hub.error(function (error) {
    console.log('SignalR error: ' + error)
});
connection.error(function (error) {
    console.log('SignalR error: ' + error)
});

connection.logging = true;
$.connection.hub.logging = true;

function test_client() {
    var connection = $.connection('/echo');
    connection.received(function (data) {
        console.log(data);
    });
    connection.error(function (error) {
        console.warn(error);
    });
    connection.stateChanged(function (change) {
        if (change.newState === $.signalR.connectionState.reconnecting) {
            console.log('Re-connecting');
        }
        else if (change.newState === $.signalR.connectionState.connected) {
            console.log('The server is online');
        }
    });
    connection.reconnected(function () {
        console.log('Reconnected');
    });
    connection.start();
    connection.start(function () {
        console.log("connection started!");
    });
    connection.stop();
    connection.start().done(function () {
        console.log("connection started!");
    });
    connection.start({ transport: 'longPolling' });
    connection.start({ transport: $.signalR.transports.webSockets });
    connection.start({ transport: ['longPolling', 'webSockets'] });
    connection.start({ waitForPageLoad: false });
    connection.start({ transport: 'longPolling' }, function () {
        console.log('connection started!');
    });
    connection.send("Hello World");
    var connection = $.connection('http://localhost:8081/echo');
    connection.start({ jsonp: true });
}

function test_connection() {
    var connection = $.connection('/echo');
    connection.received(function (data) {
        $('#messages').append('<li>' + data + '</li>');
    });
    connection.start();
    $("#broadcast").click(function () {
        connection.send($('#msg').val() as string);
    });
}

interface MyHubConnection extends SignalR.Hub.Connection {
    someState: string;
    SomeFunction: Function;

    // My Hubs Client functions: 
    client: {
        addMessage: (message: string) => void;
    };
    // My Hubs Server function: 
    server: {
        send(message: string): any;
    };
}

interface SignalR {
    chat: MyHubConnection;
    myHub: MyHubConnection;
}

function test_hubs() {
    var chat = $.connection.chat;
    $.connection.hub.start()
        .done(function () { alert("Now connected!"); })
        .fail(function () { alert("Could not Connect!"); });

    $.connection.hub.logging = true;
    var myHub = $.connection.myHub;
    myHub.someState = "SomeValue";
    function connectionReady() {
        alert("Done calling first hub serverside-function");
    };
    myHub.SomeFunction = function () {
        alert("serverside called 'Clients.SomeClientFunction()'");
    };
    $.connection.hub.error(function () {
        alert("An error occured");
    });
    $.connection.hub.start()
        .done(function () {
            myHub.SomeFunction("whatever")
                .done(connectionReady);
        })
        .fail(function () {
            alert("Could not Connect!");
        });

    $.connection.hub.url = 'http://localhost:8081/signalr'
    $.connection.hub.start();

    var connection = $.hubConnection();
    var proxy = connection.createHubProxy('chat');
    var proxy = connection.createHubProxy('chat'),
        msg = 'hello',
        room = 'main';
    proxy.invoke('send', msg);
    proxy.invoke('send', msg, room);
    proxy.invoke('add', 1, 2)
        .done(function (result: any) {
            console.log('The result is ' + result);
        });
    proxy.on('addMessage', function (msg?) {
        console.log(msg);
    });

    //a listener may have more than 1 parameter, and you should be able to subscribe and unsubscribe
    function listenerWithMoreParams(id: number, anything: string) {
        console.log('listenerWithMoreParams -> ', arguments);
    };
    //subscribe
    proxy.on('listenerWithMoreParams', listenerWithMoreParams);

    var connection = $.hubConnection('http://localhost:8081/');
    connection.start({ jsonp: true });

    //unsubscribe
    proxy.off('listenerWithMoreParams', listenerWithMoreParams);
}

// Sample from : https://github.com/SignalR/SignalR/wiki/QuickStart-Hubs#javascript--html 
$(function () {
    // Proxy created on the fly          
    var chat = $.connection.chat;

    // Declare a function on the chat hub so the server can invoke it          
    chat.client.addMessage = function (message) {
        $('#messages').append('<li>' + message + '</li>');
    };

    // Start the connection
    $.connection.hub.start().done(function () {
        $("#broadcast").click(function () {
            // Call the chat method on the server
            chat.server.send($('#msg').val() as string);
        });
    });
});
