/*
* This file contains all of the example code that was on http://senecajs.org as of Mon June 16, 2016.
*/

import SENECA = require('seneca');
var seneca: SENECA.Instance = SENECA()

seneca.add({ cmd: 'salestax' }, function (args, callback) {
  var rate  = 0.23
  var total = args.net * (1 + rate)
  callback(null, { total: total })
})

seneca.act({ cmd: 'salestax', net: 100 }, function (err, result) {
  console.log(result.total)
})



seneca.add({ cmd: 'config' }, function (args, callback) {
  var config: any = {     // any added here due to following config[] access
    rate: 0.23
  }
  var value = config[args.prop]
  callback(null, { value: value })
})

seneca.add({ cmd: 'salestax' }, function (args, callback) {
  seneca.act({ cmd: 'config', prop: 'rate' }, function (err, result) {
    var rate  = parseFloat(result.value)
    var total = args.net * (1 + rate)
    callback(null, { total: total })
  })
})

seneca.act({ cmd: 'salestax', net: 100 }, function (err, result) {
  console.log(result.total)
})




seneca.act('cmd:salestax,net:100', function (err, result) {
  console.log(result.total)
})




seneca.act('cmd:salestax', { net: 100 }, function (err, result) {
  console.log(result.total)
})



seneca.add({ cmd: 'config' }, function (args, callback) {
    var config: any = {     // any added here due to following config[] access
    rate: 0.23
  }
  var value = config[args.prop]
  callback(null, { value: value })
})

seneca.listen()



seneca.add({ cmd: 'salestax' }, function (args, callback) {
  seneca.act({cmd: 'config', prop: 'rate' }, function (err, result) {
    var rate  = parseFloat(result.value)
    var total = args.net * (1 + rate)
    callback(null, { total: total })
  })
})

seneca.client()

seneca.act('cmd:salestax,net:100', function (err, result) {
  console.log(result.total)
})



// fixed rate
seneca.add({ cmd: 'salestax' }, function (args, callback) {
  var rate  = 0.23
  var total = args.net * (1 + rate)
  callback(null, { total: total })
})


// local rates
seneca.add({ cmd: 'salestax', country: 'US' }, function (args, callback) {
  var state: any = {     // any added here due to following state[] access
    'NY': 0.04,
    'CA': 0.0625
    // ...
  }
  var rate = state[args.state]
  var total = args.net * (1 + rate)
  callback(null, { total: total })
})


// categories
seneca.add({ cmd: 'salestax', country: 'IE' }, function (args, callback) {
  var category: any = {     // any added here due to following category[] access
    'top': 0.23,
    'reduced': 0.135
    // ...
  }
  var rate = category[args.category]
  var total = args.net * (1 + rate)
  callback(null, { total: total })
})


seneca.act('cmd:salestax,net:100,country:DE', function (err, result) {
  console.log('DE: ' + result.total)
})

seneca.act('cmd:salestax,net:100,country:US,state:NY', function (err, result) {
  console.log('US,NY: ' + result.total)
})

seneca.act('cmd:salestax,net:100,country:IE,category:reduced', function (err, result) {
  console.log('IE: ' + result.total)
})

/** With Generic Type usage **/
seneca.add<SalestaxPattern, SalestaxParams>({cmd: 'salestax'}, function(args, callback) {
    var rate = 0.23;
    var total = args.net * (1 + rate);
    callback(null, {total: total});
});

seneca.act<SalesTaxRequest>({cmd: 'salestax', net: 100}, function(err, result) {
    console.log(result.total);
});

seneca.add<ConfigPattern, ConfigParams>({cmd: 'config'}, function(args, callback) {
    var config: any = {
        // any added here due to following config[] access
        rate: 0.23,
    };
    var value = config[args.prop];
    callback(null, {value: value});
});

seneca.add<SalestaxPattern, SalestaxParams>({cmd: 'salestax'}, function(args, callback) {
    seneca.act<ConfigRequest>({cmd: 'config', prop: 'rate'}, function(err, result) {
        var rate = parseFloat(result.value);
        var total = args.net * (1 + rate);
        callback(null, {total: total});
    });
});


interface SalestaxPattern {
    cmd: 'salestax';
}

interface SalestaxParams {
    net: number;
}

export interface SalesTaxRequest extends SalestaxPattern, SalestaxParams {}

interface ConfigPattern {
    cmd: 'config';
}

interface ConfigParams {
    prop: string;
}

export interface ConfigRequest extends ConfigPattern, ConfigParams {}

