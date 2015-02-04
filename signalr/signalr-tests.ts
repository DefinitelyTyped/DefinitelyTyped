/// <reference path="signalr.d.ts" />

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
        connection.send($('#msg').val());
    });
}

interface MyHubConnection extends HubConnection {
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
    var connection = $.hubConnection('http://localhost:8081/');
    connection.start({ jsonp: true });
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
            chat.server.send($('#msg').val());
        });
    });
});