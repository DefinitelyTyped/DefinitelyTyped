﻿/**
 * Created by using code samples from https://github.com/sendgrid/sendgrid-nodejs#usage
 */

///<reference path="../node/node.d.ts" />
///<reference path="sendgrid.d.ts" />

import sg = require('sendgrid');
var sendgrid  = sg('YOUR_SENDGRID_API_KEY');

/*
 * Simple Usage
 */
var payload = {
    to: 'to@example.com',
    from: 'from@other.com',
    subject: 'Saying Hi',
    text: 'This is my first email through SendGrid'
};

sendgrid.send(payload, function (err, json) {
    if (err) {
        console.error(err);
    }
    console.log(json);
});

/**
 * Email:
 * https://github.com/sendgrid/sendgrid-nodejs#email
 */
var email = new sendgrid.Email({
    to: 'foo@bar.com',
    from: 'you@yourself.com',
    subject: 'Subject goes here',
    text: 'Hello world'
});

sendgrid.send(email, function (err, json) {
    if (err) {
        return console.error(err);
    }
    console.log(json);
});

/**
 * Setting Params
 * https://github.com/sendgrid/sendgrid-nodejs#setting-params
 */
var email = new sendgrid.Email({ to: 'person@email.com' });
email.to = "different@email.com";
email.replyto = "reply-here@email.com";
email.subject = "This is a subject";

/**
 * addTo
 * https://github.com/sendgrid/sendgrid-nodejs#addto
 */
var email = new sendgrid.Email();
email.addTo('foo@bar.com');
email.addTo('another@another.com');
sendgrid.send(email, function (err, json) { });

/**
 * addSmtpapiTo
 * https://github.com/sendgrid/sendgrid-nodejs#addsmtpapito
 */
var email = new sendgrid.Email()
email.addSmtpapiTo('test@test.com');
sendgrid.send(email, function(err, json) { });

/**
 * setTos
 * https://github.com/sendgrid/sendgrid-nodejs#settos
 */
var email     = new sendgrid.Email();
email.setTos(['foo@bar.com', 'another@another.com']);
sendgrid.send(email, function(err, json) { });

/**
 * setSmtpapiTos
 * https://github.com/sendgrid/sendgrid-nodejs#setsmtpapitos
 */
var email = new sendgrid.Email();
email.setSmtpapiTos(["test@test.com","test2@test.com"]);
sendgrid.send(email, function(err, json) { });


/**
 * setFrom
 * https://github.com/sendgrid/sendgrid-nodejs#setfrom
 */
var email = new sendgrid.Email();
email.setFrom('foo@bar.com');
sendgrid.send(email, function (err, json) { });

/**
 * setFromName
 * https://github.com/sendgrid/sendgrid-nodejs#setfromname
 */
var email     = new sendgrid.Email();
email.setFromName('Bob Bar');
sendgrid.send(email, function(err, json) { });

/**
 * addCc
 * https://github.com/sendgrid/sendgrid-nodejs#addcc
 */
var email     = new sendgrid.Email();
email.addCc('foo@bar.com');
email.addCc('another@another.com');
sendgrid.send(email, function(err, json) { });

/**
 * setCcs
 * https://github.com/sendgrid/sendgrid-nodejs#setccs
 */
var email     = new sendgrid.Email();
email.setCcs(['foo@bar.com', 'another@another.com']);
sendgrid.send(email, function(err, json) { });

/**
 * addBcc
 * https://github.com/sendgrid/sendgrid-nodejs#addbcc
 */
var email     = new sendgrid.Email();
email.addBcc('foo@bar.com');
email.addBcc('another@another.com');
sendgrid.send(email, function(err, json) { });

/**
 * setBccs
 * https://github.com/sendgrid/sendgrid-nodejs#setbccs
 */
var email     = new sendgrid.Email();
email.setBccs(['foo@bar.com', 'another@another.com']);
sendgrid.send(email, function(err, json) { });

/**
 * setSubject
 * https://github.com/sendgrid/sendgrid-nodejs#setsubject
 */
var email = new sendgrid.Email();
email.setSubject('Some subject');
sendgrid.send(email, function (err, json) { });

/**
 * setText
 * https://github.com/sendgrid/sendgrid-nodejs#settext
 */
var email = new sendgrid.Email();
email.setText('Some text');
sendgrid.send(email, function (err, json) { });

/**
 * setHtml
 * https://github.com/sendgrid/sendgrid-nodejs#sethtml
 */
var email = new sendgrid.Email();
email.setHtml('<h1>Some html</h1>');
sendgrid.send(email, function (err, json) { });

/**
 * setDate
 * https://github.com/sendgrid/sendgrid-nodejs#setdate
 */
var email = new sendgrid.Email();
email.setDate('Wed, 17 Dec 2014 19:21:16 +0000');
sendgrid.send(email, function(err, json) { });

/**
 * setSendAt
 * https://github.com/sendgrid/sendgrid-nodejs#setsendat
 */
var email = new sendgrid.Email();
email.setSendAt(1409348513);
sendgrid.send(email, function(err, json) { });

/**
 * setSendEachAt
 * https://github.com/sendgrid/sendgrid-nodejs#setsendeachat
 */
var email     = new sendgrid.Email();
email.setSendEachAt([1409348513, 1409348514]);
sendgrid.send(email, function(err, json) { });

/**
 * addSendEachAt
 * https://github.com/sendgrid/sendgrid-nodejs#addsendeachat
 */
var email     = new sendgrid.Email();
email.addSendEachAt(1409348513);
email.addSendEachAt(1409348514);
sendgrid.send(email, function(err, json) { });

/**
 * addHeader
 * https://github.com/sendgrid/sendgrid-nodejs#addheader
 */
var email = new sendgrid.Email();
email.setHeaders({ full: 'hearts' });   // headers = {full: 'hearts'}
email.addHeader('spin', 'attack');   // headers = {full: 'hearts', spin: 'attack'}
email.addHeader('mask', 'salesman'); // headers = {full: 'hearts', spin: 'attack', mask: 'salesman'}
sendgrid.send(email, function (err, json) { });

/**
 * setHeaders
 * https://github.com/sendgrid/sendgrid-nodejs#setheaders
 */
var email = new sendgrid.Email();
email.setHeaders({ full: 'hearts' });   // headers = {full: 'hearts'}
email.setHeaders({ mask: 'salesman' }); // headers = {mask: 'salesman'}
sendgrid.send(email, function (err, json) { });

/**
 * addSubstitution
 * https://github.com/sendgrid/sendgrid-nodejs#addsubstitution
 */
var email = new sendgrid.Email();
email.addSubstitution('keep', 'secret'); // sub = {keep: ['secret']}
email.addSubstitution('other', ['one', 'two']);   // sub = {keep: ['secret'], other: ['one', 'two']}

/**
 * setSubstitutions
 * https://github.com/sendgrid/sendgrid-nodejs#setsubstitutions
 */
var email = new sendgrid.Email();
email.setSubstitutions({ keep: ['secret'], other: ['one', 'two'] }); // sub = {keep: ['secret'], other: ['one', 'two']});

/**
 * addSection
 * https://github.com/sendgrid/sendgrid-nodejs#addsection
 */
var email = new sendgrid.Email();
email.addSection({ '-charge-': 'This ship is useless.' }); // section = {'-charge-': 'This ship is useless.'}

/**
 * setSections
 * https://github.com/sendgrid/sendgrid-nodejs#setsections
 */
var email = new sendgrid.Email();
email.setSections({ '-charge-': 'This ship is useless.' }); // section = {'-charge-': 'This ship is useless.'}

/**
 * addUniqueArg
 * https://github.com/sendgrid/sendgrid-nodejs#adduniquearg
 */
var email = new sendgrid.Email();
email.setUniqueArgs({ cow: 'chicken' }); // unique_args = {cow: 'chicken'}
email.addUniqueArg({ cat: 'dog' });     // unique_args = {cow: 'chicken', cat: 'dog'}

/**
 * setUniqueArgs
 * https://github.com/sendgrid/sendgrid-nodejs#setuniqueargs
 */
var email = new sendgrid.Email();
email.setUniqueArgs({ cow: 'chicken' }); // unique_args = {cow: 'chicken'}
email.setUniqueArgs({ dad: 'proud' });   // unique_args = {dad: 'proud'}


/**
 * addCategory
 * https://github.com/sendgrid/sendgrid-nodejs#addcategory
 */
var email = new sendgrid.Email();
email.addCategory('tactics');        // category = ['tactics']
email.addCategory('advanced');       // category = ['tactics', 'advanced']

/**
 * setCategories
 * https://github.com/sendgrid/sendgrid-nodejs#setcategories
 */
var email = new sendgrid.Email();
email.setCategories(['tactics']);        // category = ['tactics']
email.setCategories(['snowball-fight']); // category = ['snowball-fight']

/**
 * addFilter
 * https://github.com/sendgrid/sendgrid-nodejs#addfilter
 */
var email = new sendgrid.Email();
email.addFilter('footer', 'enable', 1);
email.addFilter('footer', 'text/html', '<strong>boo</strong>');

/**
 * setFilters
 * https://github.com/sendgrid/sendgrid-nodejs#setfilters
 */
var email = new sendgrid.Email();
var email = new sendgrid.Email();
email.setFilters({
    'footer': {
        'setting': {
            'enable': 1,
            'text/plain': 'You can haz footers!'
        }
    }
});

/**
 * setASMGroupID
 * https://github.com/sendgrid/sendgrid-nodejs#setasmgroupid
 */
var email     = new sendgrid.Email();
email.setASMGroupID(123);

/**
 * addFile
 * https://github.com/sendgrid/sendgrid-nodejs#addfile
 */
var email = new sendgrid.Email();
email.addFile({
    filename: 'secret.txt',
    content: new Buffer('You will never know....')
});
// or
email.addFile({
    filename: 'icon.jpg',
    url: 'http://i.imgur.com/2fDh8.jpg'
});
// or
email.addFile({
    path: '../files/resume.txt'
});
// or
email.addFile({
    cid: 'the_logo',           // should match cid value in html
    path: '../files/logo.png'
});
email.setHtml('<div>Our logo:<img src="cid:the_logo"></div>');

/**
 * Options - Changing URL
 * https://github.com/sendgrid/sendgrid-nodejs#changing-url
 */
var sendgrid1 = sg('username', 'password', { "protocol": "http", "host": "sendgrid.org", "endpoint": "/send", "port": "80" });
var sendgrid2 = sg('username', 'password', { "uri": "http://sendgrid.org:80/send" });

/**
 * Options - Request
 * https://github.com/sendgrid/sendgrid-nodejs#request
 */
var sendgrid3 = sg('username', 'password', { proxy: "http://localproxy:3128" });
// or
import https = require('https');
var agent = new https.Agent();
agent.maxSockets = 500; // Set Max Sockets to 500
var sendgrid4 = sg('username', 'password', { web: { pool: agent } });


