let app = launchnavigator.APP["GOOGLE_MAPS"];
let platform = launchnavigator.PLATFORM["ANDROID"];

let destination = "Westminster, London, UK";

let options = {
    successCallback: () => {
        console.log("success");
    },
    errorCallback: (error:string) => {
        console.log("error: "+error);
    },
    app: app,
    destinationName: "Bob's House",
    start: "Buckingham Palace, London, UK",
    startName: "My House",
    transportMode: launchnavigator.TRANSPORT_MODE["walking"],
    enableDebug: true,
    extras: {"t": "k"},
    launchMode: launchnavigator.LAUNCH_MODE["maps"],
    appSelectionDialogHeader: "Select app for navigation",
    appSelectionCancelButton: "Cancel",
    appSelectionList: [
        launchnavigator.APP["GOOGLE_MAPS"],
        launchnavigator.APP["WAZE"]
    ],
    appSelectionCallback: (app:string) => {
        console.log("selected app: "+app);
    }
};

launchnavigator.navigate(destination, options);

launchnavigator.userSelect(destination, options);

launchnavigator.isAppAvailable(
    app,
    (isAvailable) => {
        console.log("isAvailable:" + isAvailable);
    },
    (error) => {
        console.error("ERROR:" + error);
    }
);

launchnavigator.availableApps(
    (apps) => {
        for (let app of apps){
            console.log("available:" + app);
        }
    },
    (error) => {
        console.error("ERROR:" + error);
    }
);

(function(){
    let name = launchnavigator.getAppDisplayName(app);
    console.log("App Name: "+ name);
}());

(function(){
    let apps = launchnavigator.getAppsForPlatform(platform);
    for (let app of apps){
        console.log("available for platform:" + app);
    }
}());

(function(){
    let supported = launchnavigator.supportsTransportMode(app, platform);
    console.log("supported: "+ supported);
}());

(function(){
    var modes = launchnavigator.getTransportModes(app, platform);
    for (let mode of modes){
        console.log("transport modes for platform:" + mode);
    }
}());

(function(){
    let supported = launchnavigator.supportsLaunchMode(app, platform);
    console.log("supported: "+ supported);
}());

(function(){
    let supported = launchnavigator.supportsStart(app, platform);
    console.log("supported: "+ supported);
}());

(function(){
    let supported = launchnavigator.supportsStartName(app, platform);
    console.log("supported: "+ supported);
}());

(function(){
    let supported = launchnavigator.supportsDestName(app, platform);
    console.log("supported: "+ supported);
}());