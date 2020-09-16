import twilio = require('twilio');
import * as Express from "express";

// Examples taken from https://twilio.github.io/twilio-node/ (v2.1.0)

var str: string;

// Create a client:
var client: twilio.RestClient = twilio('ACCOUNT_SID', 'AUTH_TOKEN');

//Get a list of calls made by this account
// GET /2010-04-01/Accounts/ACCOUNT_SID/Calls
// alias for get is "list", if you prefer
client.calls.get(function(err: any, response: any) {
    response.calls.forEach(function(call: any) {
        console.log('Received call from: ' + call.from);
        console.log('Call duration (in seconds): ' + call.duration);
    });
});

// Using the alias described above
client.calls.list(function(err: any, response: any) {
    response.calls.forEach(function(call: any) {});
});

//Get a list of calls made by this account, from this phone number
// GET /2010-04-01/Accounts/ACCOUNT_SID/Calls?From=+16513334455
client.calls.get({
    from:'+16513334455'
}, function(err, response) {
    response.calls.forEach(function(call: any) {
        console.log('Received call from: ' + call.from);
        console.log('This call\'s unique ID is: ' + call.sid);
    });
});

//Get data for a specific call
// GET /2010-04-01/Accounts/ACCOUNT_SID/Calls/abc123...
client.calls('abc123...').get(function(err, call) {
    console.log('This call\'s unique ID is: ' + call.sid);
    console.log('This call was created at: ' + call.dateCreated);
});

//Get data for a specific call, for a specific account
// GET /2010-04-01/Accounts/AC.../Calls/abc123...
client.accounts('AC...').calls('abc123...').get(function(err, response) {
    response.calls.forEach(function(call: any) {
        console.log('Received call from: ' + call.from);
        console.log('This call\'s unique ID is: ' + call.sid);
    });
});

// Create (send) an SMS message
// POST /2010-04-01/Accounts/ACCOUNT_SID/SMS/Messages
// "create" and "update" aliases are in place where appropriate on PUT and POST requests
client.sms.messages.post({
    to:'+16515559999',
    from:'+14503334455',
    body:'word to your mother.'
}, function(err: any, text: any) {
    console.log('You sent: '+ text.body);
    console.log('Current status of this text message is: '+ text.status);
});

// Delete a TwiML application
// DELETE /2010-04-01/Accounts/ACCOUNT_SID/Applications/APP...
client.applications('APP...').delete(function(err, response) {
    //DELETE requests do not return data - if there was no error, it worked.
    err ? console.log('There was an error') : console.log('it worked!');
});

var SOME_SUBACCOUNT_SID = 'AC...';

//Send a text message, associated with the given subaccount
client.accounts(SOME_SUBACCOUNT_SID).sms.messages.create({
    to:'+16512223333',
    from:'+14505556677',
    body:'word to your subaccount mother.'
}, function(err: any, text: any) {
    console.log('You sent: '+ text.body);
    console.log('Current status of this text message is: '+ text.status);
});

//This REST call using the master/default account for the client...
client.makeCall({
    to:'+16512223333',
    from:'+14505556677',
    url:'http://example.com/someTwiml.php'
}, function(err: any, call: any) {
    console.log('This call\'s unique ID is: ' + call.sid);
    console.log('This call was created at: ' + call.dateCreated);
});

//...is the same as...
client.accounts(str).calls.create({
    to:'+16512223333',
    from:'+14505556677',
    url:'http://example.com/someTwiml.php'
}, function(err: any, call: any) {
    console.log('This call\'s unique ID is: ' + call.sid);
    console.log('This call was created at: ' + call.dateCreated);
});

var restClient = new twilio.RestClient('ACCOUNT_SID', 'AUTH_TOKEN');

// A simple example of making a phone call using promises
var promise = restClient.makeCall({
    to:'+16515556667777', // a number to call
    from:'+16518889999', // a Twilio number you own
    url:'https://demo.twilio.com/welcome/voice' // A URL containing TwiML instructions for the call
});

// You can assign functions to be called, at any time, after the request to
// Twilio has been completed.  The first function is called when the request
// succeeds, the second if there was an error.
promise.then(function(call: any) {
    console.log('Call success! Call SID: '+call.sid);
}, function(error: any) {
    console.error('Call failed!  Reason: '+error.message);
});

// Let's look at an example where we're making multiple requests to Twilio, like
// buying a new phone number.  This is where promises can become very useful:

// First, search for available phone numbers
restClient.availablePhoneNumbers('US').local.get({
    areaCode:'651'
}).then(function(searchResults: any) {

    // handle the case where there are no numbers found
    if (searchResults.availablePhoneNumbers.length < 1) {
        throw { message:'No numbers found with that area code' };
    }

    // Okay, so there are some available numbers.  Now, let's buy the first one
    // in the list.  Return the promise created by the next call to Twilio:
    return restClient.incomingPhoneNumbers.create({
        phoneNumber:searchResults.availablePhoneNumbers[0].phoneNumber,
        voiceUrl:'https://demo.twilio.com/welcome/voice',
        smsUrl:'https://demo.twilio.com/welcome/sms/reply'
    });

}).then(function(number: any) {

    // We bought the number!  Everything worked!
    console.log('Your new number: '+number.phoneNumber);

}).fail(function(error: any) {

    // This callback will be invoked on any error returned in the
    // process.
    console.log('Number purchase failed! Reason: '+error.message);

}).fin(function() {

    // You can use this optional callback like a "finally" block
    // It will always execute last.  Perform any cleanup necessary here.

});

client.request({
    url:'/Accounts',
    method:'GET'
}, function (error: any, responseData: any) {
    //work with response data
});

/// TwiML
var resp = new twilio.TwimlResponse();

resp.say('Welcome to Twilio!');
resp.say('Please let us know if we can help during your development.', {
    voice:'woman',
    language:'en-gb'
});

console.log(resp.toString());

resp.say('Welcome to Twilio!')
    .pause({ length:3 })
    .say('Please let us know if we can help during your development.', {
        voice:'woman',
        language:'en-gb'
    })
    .play('http://www.example.com/some_sound.mp3');

resp.say('Welcome to Acme Customer Service!')
    .gather({
        action:'http://www.example.com/callFinished.php',
        finishOnKey:'*'
    }, function() {
        this.say('Press 1 for customer service')
            .say('Press 2 for British customer service', { language:'en-gb' });
    });

resp.say('Welcome to Acme Customer Service!')
    .gather({
        action:'http://www.example.com/callFinished.php',
        finishOnKey:'*'
    }, function(node: twilio.Node) { //note the use of the "node" variable in the anonymous function

        //Now you can use this reference as well, if using "this" wrankles you
        node.say('Press 1 for customer service')
            .say('Press 2 for British customer service', { language:'en-gb' });

    });

resp.say('Your conference call is starting.',
    {
        voice:'woman',
        language:'en-gb'
    })
    .dial({
            action:'http://example.com/something.php'
        }, function(node: twilio.Node) {
            node.conference('waitingRoom', {
            beep:'false'
        });
    });

resp.hangup();

/// Capabilities
var capability = new twilio.Capability(str, str);
capability.allowClientIncoming('jenny');
var token = capability.generate();

capability.allowClientOutgoing('AP123');
var token = capability.generate();

capability.allowClientOutgoing('AP123');
var token = capability.generate(120);

/// Utilities
twilio.validateRequest(token, str, 'http://example.herokuapp.com', { query: 'val' });
twilio.validateExpressRequest(getMockExpressRequest(), 'YOUR_TWILIO_AUTH_TOKEN');
twilio.validateExpressRequest(getMockExpressRequest(), 'YOUR_TWILIO_AUTH_TOKEN', {});
twilio.webhook({ validate: false });
twilio.webhook("MYAUTHTOKEN", { validate: false });


function getMockExpressRequest(): Express.Request {
    return JSON.parse("{}") as Express.Request;
}
