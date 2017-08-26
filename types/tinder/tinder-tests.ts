import tinder = require('tinder');
var client : tinder.TinderClient = new tinder.TinderClient();

client.authorize(
    '<fb user token>',
    '<fb user id>',
    function () {

        client.getRecommendations(10, (error, data) => {
            var results = data.results;
            results.forEach((recommendation) => {
                client.like(recommendation._id, (data) => {
                    if (data.matched) {
                        client.sendMessage(recommendation._id, "hey ;)", function (error, data) {
                            if (!error) {
                                console.log('Message sent to ' + recommendation.name + ' id: ' + recommendation._id)
                            }
                        });
                    }
                })
            });
        });

        client.getHistory((error, history)=>{
            if (history.matches && history.matches.length) {
                console.log(history.matches[0].messages);
            }
        });

        client.getUpdates((error, updates)=>{
            if (updates.matches && updates.matches.length) {
                console.log(updates.matches);
            }
        });
    });