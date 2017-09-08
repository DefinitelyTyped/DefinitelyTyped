import { hubConnection } from 'signalr-no-jquery';

const connection = hubConnection('http://[address]:[port]');
const hubProxy = connection.createHubProxy('hubNameString');
 
// set up event listeners i.e. for incoming "message" event
hubProxy.on('message', function(message) {
    console.log(message);
});
 
// connect
connection.start({ jsonp: true })
.done(function(){ console.log('Now connected, connection ID=' + connection.id); })
.fail(function(){ console.log('Could not connect'); });