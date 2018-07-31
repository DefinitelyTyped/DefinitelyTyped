import confit = require("confit");

var basedir = "./config";

confit(basedir).create(function (err, config) {
    config.get("key");
    config.set("key", 120);
    config.use({});
});

confit(options)
  .addDefault('./mydefaults.json')  //or .addDefault({foo: 'bar'})
  .addOverride('./mysettings.json') //or .addOverride({foo: 'baz'})
  .create(function (err, config) {
      // ...
  });

var options = {
    basedir: basedir,
    protocols: <confit.ProtocolsSet>{
        file: (value, cb) => { cb(); },
        glob: (value) => {}
    }
};

confit(options).create(function (err, config) {
    // ...
});
