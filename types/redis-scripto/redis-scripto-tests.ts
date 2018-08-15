import * as redis from 'redis';
import Scripto = require('redis-scripto');

var num: number;
var str: string;
var options: redis.ClientOpts;
var redisClient = redis.createClient(num, str, options);

var scriptManager = new Scripto(redisClient);
scriptManager.loadFromDir('/path/to/lua/scripts');

var keys    = ['keyOne', 'keyTwo'];
var values  = [10, 20];
scriptManager.run('your-script', keys, values, function(err, result) {

});

scriptManager.eval('your-script', keys, values, function(err, result) {

});

scriptManager.loadFromFile('script-one', '/path/to/the/file');
scriptManager.run('script-one', [], [], function(err, result) {

});

var scripts: Scripto.Scripts = {
  'script-two': 'return 1000'
};

scriptManager.load(scripts);
scriptManager.run('script-two', [], [], function(err, result) {

});
