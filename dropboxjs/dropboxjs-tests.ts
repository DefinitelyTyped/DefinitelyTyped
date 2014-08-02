/// <reference path="dropboxjs.d.ts" />

var browserClient = new Dropbox.Client({ key: "your-key-here" });

browserClient.authenticate(function (error, client) {
    if (error) {
        alert(error);
    }

    client.onError.addListener(function (error) {
        if (window.console) {  // Skip the "if" in node.js code.
            console.error(error);
        }
    });

    client.getAccountInfo(function (error, accountInfo) {
        if (error) {
            alert(error);  // Something went wrong.
        }

        alert("Hello, " + accountInfo.name + "!");
    });

    client.writeFile("hello_world.txt", "Hello, world!\n", function (error, stat) {
        if (error) {
            alert(error);  // Something went wrong.
        }

        alert("File saved as revision " + stat.versionTag);
    });

    client.readFile("hello_world.txt", function (error, data) {
        if (error) {
            alert(error);  // Something went wrong.
        }

        alert(data);  // data has the file's contents
    });

    client.readdir("/", function (error, entries) {
        if (error) {
            alert(error);  // Something went wrong.
        }

        alert("Your Dropbox contains " + entries.join(", "));
    });
});

var serverClient = new Dropbox.Client({
    key: "your-key-here",
    secret: "your-secret-here"
});

serverClient.authDriver(new Dropbox.AuthDriver.NodeServer(8191));