
// https://github.com/martynsmith/node-irc/blob/master/example/bot.js

import irc = require('irc');

function test_bot() {
    var bot = new irc.Client('irc.dollyfish.net.nz', 'nodebot', {
    debug: true,
    channels: ['#blah', '#test']
    });

    bot.connect(function() {
        console.log("Connected");
    });

    bot.addListener('error', <irc.handlers.IError> ((message: irc.IMessage) => {
    console.error('ERROR: %s: %s', message.command, message.args.join(' '));
    }));

    bot.addListener('message#blah', <irc.handlers.IMessageChannel> ((from: string, message: string) => {
    console.log('<%s> %s', from, message);
    }));

    bot.addListener('message', <irc.handlers.IRecievedMessage> ((from: string, to: string, message: string) => {
    console.log('%s => %s: %s', from, to, message);

    if (to.match(/^[#&]/)) {
        // channel message
        if (message.match(/hello/i)) {
            bot.say(to, 'Hello there ' + from);
        }
        if (message.match(/dance/)) {
            setTimeout(() => { bot.say(to, '\u0001ACTION dances: :D\\-<\u0001'); }, 1000);
            setTimeout(() => { bot.say(to, '\u0001ACTION dances: :D|-<\u0001');  }, 2000);
            setTimeout(() => { bot.say(to, '\u0001ACTION dances: :D/-<\u0001');  }, 3000);
            setTimeout(() => { bot.say(to, '\u0001ACTION dances: :D|-<\u0001');  }, 4000);
        }
    }
    else {
        // private message
        console.log('private message');
    }
    }));

    bot.addListener('pm', <irc.handlers.IPm> ((nick: string, message: string) => {
    console.log('Got private message from %s: %s', nick, message);
    }));

    bot.addListener('join', <irc.handlers.IJoin> ((channel: string, who: string) => {
    console.log('%s has joined %s', who, channel);
    }));

    bot.addListener('part', <irc.handlers.IPart> ((channel: string, who: string, reason: string) => {
    console.log('%s has left %s: %s', who, channel, reason);
    }));

    bot.addListener('kick', <irc.handlers.IKick> ((channel: string, who: string, by: string, reason: string) => {
    console.log('%s was kicked from %s by %s: %s', who, channel, by, reason);
    }));
}

function test_secure() {
    var options = true;

    var bot = new irc.Client('chat.us.freenode.net', 'nodebot', {
        port: 6697,
        debug: true,
        secure: options,
        channels: ['#botwar']
    });
}

function test_connect() {
    var bot = new irc.Client('chat.us.freenode.net', 'nodebot', {
        port: 6697,
        autoConnect: false
    });

    bot.connect(5);

    bot.connect(5, function() {});

    bot.connect(function() {});
}
