import * as launch from "launchpad";

launch.local(function(error, launcher) {
  launcher.browsers(function(error, browsers) {
    // -> List of available browsers with version
  });

  const handleInstance = function(err: any, instance: launch.Instance) {
    instance; // -> A browser instance
    instance.id; // -> unique instance id
    instance.stop(() => {}); // -> Stop the instance
    instance.status((err, status) => {}); // -> Get status information about the instance
  };

  launcher.chrome("https://example.com/", handleInstance);

  launcher.firefox("http://url", function(err, instance) {
    // An instance is an event emitter
    instance.on("stop", function() {
      console.log("Terminated local firefox");
    });
  });
});

launch.browserstack({
    username : "user",
    password : "password"
  },
  function(err, browserstack) {
    browserstack.browsers(function(error, browsers) {
      // -> List of all Browserstack browsers
    });

    browserstack.ie("http://url", function(err, instance) {
      // Shut the instance down after 5 seconds
      setTimeout(function() {
        instance.stop(function (err) {
          if (err) {
            console.log(err);
          }
          console.log("Browser instance has stopped");
        });
      }, 5000);
  });
});
