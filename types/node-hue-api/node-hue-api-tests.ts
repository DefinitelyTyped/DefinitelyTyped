import hue = require('node-hue-api');

hue.nupnpSearch().then(function (bridges) {
    if (!bridges || !bridges[0]) {
        throw "No bridge found";
    }
    let ip = bridges[0].ipaddress;
    //First load username from file. Register if there's no file.
    let api = new hue.HueApi();
    api.registerUser(ip).then(newUser => {
        console.log("Created Hue user: " + JSON.stringify(newUser));
    }).then(listScenes.bind(this, api));
})


function listScenes(api: hue.HueApi) {
    return api.getScenes().then(function (scenes) {
        return console.log(scenes.map(s => s.name).join(", "));
    });
}
