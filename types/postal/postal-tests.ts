


var channel = postal.channel("test");

channel.subscribe("test", function(data){ });

channel.publish("test", {id:1, name:"Test user"});

