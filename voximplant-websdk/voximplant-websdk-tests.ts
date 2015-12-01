/// <reference path="./voximplant-websdk.d.ts"/>

var vox: VoxImplant.Client = VoxImplant.getInstance(),
	call: VoxImplant.Call;

vox.init({
	micRequired: true 
});

vox.addEventListener(VoxImplant.Events.SDKReady, function(event: VoxImplant.Events.SDKReady) {
	console.log("VoxImplant SDK ver. " + event.version + " initialized");
	vox.connect();
});

vox.addEventListener(VoxImplant.Events.ConnectionEstablished, function(event: VoxImplant.Events.ConnectionEstablished) {
	console.log("Connection established");
	vox.login("username", "password");
});

vox.addEventListener(VoxImplant.Events.ConnectionClosed, function(event: VoxImplant.Events.ConnectionClosed) {
	console.log("Connection closed");
});

vox.addEventListener(VoxImplant.Events.ConnectionFailed, function(event: VoxImplant.Events.ConnectionFailed) {
	console.log("Connection failed. Reason: " + event.message);
});

vox.addEventListener(VoxImplant.Events.AuthResult, function(event: VoxImplant.Events.AuthResult) {
	if (event.result === true) {
		// Authorized successfully
		console.log("Logged in as " + event.displayName);

		call = vox.call("some_number", false);
		call.addEventListener(VoxImplant.CallEvents.Connected, function(callevent: VoxImplant.CallEvents.Connected) {
			console.log("Call connected");
		});
		call.addEventListener(VoxImplant.CallEvents.Failed, function(callevent: VoxImplant.CallEvents.Failed) {
			console.log("Call failed, reason: " + callevent.reason);
		});
		call.addEventListener(VoxImplant.CallEvents.Disconnected, function(callevent: VoxImplant.CallEvents.Disconnected) {
			console.log("Call disconnected");
		});

		var msg_id:String = vox.sendInstantMessage("other_user", "Hello World!");

	} else {
		console.log("Authorization failed. Code: " + event.code);
	}
});

vox.addEventListener(VoxImplant.Events.MicAccessResult, function(event: VoxImplant.Events.MicAccessResult) {
	console.log("Microphone access allowed: " + event.result);
});

vox.addEventListener(VoxImplant.Events.IncomingCall, function(event: VoxImplant.Events.IncomingCall) {
	call = event.call;
	call.addEventListener(VoxImplant.CallEvents.Connected, function(callevent: VoxImplant.CallEvents.Connected) {
		console.log("Inbound Call Connected");
		setTimeout(function() {
			vox.disconnect();
		}, 5000);
	});
	call.answer();
});

vox.addEventListener(VoxImplant.IMEvents.MessageReceived, function(event: VoxImplant.IMEvents.MessageReceived) {
	console.log("Message received: " + event.content + " from " + event.id + " id " + event.message_id);
});

vox.addEventListener(VoxImplant.Events.SourcesInfoUpdated, function(event: VoxImplant.Events.SourcesInfoUpdated) {
	var audioSources: VoxImplant.AudioSourceInfo[] = vox.audioSources(),
		videoSources: VoxImplant.VideoSourceInfo[] = vox.videoSources();
	console.log("Received recording sources data:");
	console.log("Audio: " + audioSources);
	console.log("Video: " + videoSources);

	vox.useAudioSource(audioSources[0].id, function() { console.log('OK'); }, function() { console.log('Failed'); });
	vox.useVideoSource(videoSources[0].id, function() { console.log('OK'); }, function() { console.log('Failed'); });
});

vox.addEventListener(VoxImplant.IMEvents.RosterReceived, function(event: VoxImplant.IMEvents.RosterReceived) {
	var roster: VoxImplant.RosterItem[] = event.roster;
	console.log("Roster received: " + roster);
});

