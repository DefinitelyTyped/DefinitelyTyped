

var manifestUrl = window.location.protocol + "//" + window.location.host + "/manifest.webapp";

var log = (data:any) => {
	alert(data);
};

var setupCallback = (src:string, request:DOMRequest<App>) => {
	request.onsuccess = (data: any)=> {
		if (request.result && request.result.manifest) {
			log('app is installed ' + request.result.manifest.name + " by " + src);
		} else if (request.result) {
			// bug 806597. https://bugzilla.mozilla.org/show_bug.cgi?id=806597
			log("app is installed by " + src);
		} else {
			log("app is not installed by " + src);
		}
	};
	request.onerror = ()=> {
		log('failed, error: ' + request.error.name + " by " + src);
	};
};

var apps = navigator.mozApps;
setupCallback("install", apps.install(manifestUrl));
setupCallback("checkInstalled", apps.checkInstalled(manifestUrl));
setupCallback("getSelf", apps.getSelf());
