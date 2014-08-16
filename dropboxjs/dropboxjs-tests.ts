/// <reference path="dropboxjs.d.ts" />

var browserClient = new Dropbox.Client({ key: "your-key-here" });

browserClient.authenticate((error:any, client:Dropbox.Client) => {
    if (error) {
        alert(error);
    }

    client.onError.addListener((error:any) =>{
        if (window['console']) {  // Skip the "if" in node.js code.
            console.error(error);
        }
    });

    client.getAccountInfo( (error:Dropbox.ApiError, accountInfo:Dropbox.AccountInfo) => {
        if (error) {
            alert(error);  // Something went wrong.
        }

        alert("Hello, " + accountInfo.name + "!");
    });

    client.writeFile("hello_world.txt", "Hello, world!\n", (error:Dropbox.ApiError, stat:Dropbox.File.Stat ) => {
        if (error) {
            alert(error);  // Something went wrong.
        }

        alert("File saved as revision " + stat.versionTag);
    });

    client.readFile("hello_world.txt", (error:Dropbox.ApiError, data:string) => {
        if (error) {
            alert(error);  // Something went wrong.
        }

        alert(data);  // data has the file's contents
    });

    client.readdir("/", (err: Dropbox.ApiError, filenames: string[], stat: Dropbox.File.Stat, folderEntries: Dropbox.File.Stat[]) => {
        if (error) {
            alert(error);  // Something went wrong.
        }

        alert("Your Dropbox contains " + filenames.join(", "));
    });
});

var serverClient = new Dropbox.Client({
    key: "your-key-here",
    secret: "your-secret-here"
});

serverClient.authDriver(new Dropbox.AuthDriver.NodeServer({port:8191}));