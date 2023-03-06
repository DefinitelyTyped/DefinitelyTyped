window.obsstudio.pluginVersion;

window.obsstudio.getControlLevel();
window.obsstudio.getControlLevel((level: OBSControlLevel) => {
    level;
});

window.obsstudio.getCurrentScene();
window.obsstudio.getCurrentScene((scene: OBSSceneInfo) => {
    scene;
    scene.name;
    scene.width;
    scene.height;
});

window.obsstudio.setCurrentScene('Scene 1');

window.obsstudio.getCurrentTransition();
window.obsstudio.getCurrentTransition((transition: string) => {
    transition;
});

window.obsstudio.setCurrentTransition('Cut');

window.obsstudio.getScenes();
window.obsstudio.getScenes((scenes: string[]) => {
    scenes;
    scenes[0];
});

window.obsstudio.getTransitions();
window.obsstudio.getTransitions((transitions: string[]) => {
    transitions;
    transitions[0];
});

window.obsstudio.getStatus();
window.obsstudio.getStatus((status: OBSStatus) => {
    status.recording;
    status.recordingPaused;
    status.replaybuffer;
    status.streaming;
    status.virtualcam;
});

window.obsstudio.saveReplayBuffer();
window.obsstudio.startReplayBuffer();
window.obsstudio.stopReplayBuffer();

window.obsstudio.startStreaming();
window.obsstudio.stopStreaming();

window.obsstudio.startRecording();
window.obsstudio.pauseRecording();
window.obsstudio.unpauseRecording();
window.obsstudio.stopRecording();

window.obsstudio.startVirtualcam();
window.obsstudio.stopVirtualcam();

const sceneChangeCb = (event: CustomEvent<OBSSceneInfo>) => {
    event;
    event.detail;
    event.detail.name;
    event.detail.width;
    event.detail.height;
};

window.addEventListener('obsSceneChanged', sceneChangeCb);
window.removeEventListener('obsSceneChanged', sceneChangeCb);

window.addEventListener('obsStreamingStarting', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsStreamingStarted', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsStreamingStopping', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsStreamingStopped', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsRecordingStarting', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsRecordingStarted', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsRecordingStopping', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsRecordingStopped', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsRecordingPaused', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsRecordingUnpaused', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsReplaybufferStarting', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsReplaybufferStarted', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsReplaybufferStopping', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsReplaybufferStopped', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsReplaybufferSaved', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsVirtualcamStarted', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsVirtualcamStopped', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsExit', (event: CustomEvent<null>) => {
    event;
    event.detail;
});

window.addEventListener('obsSourceActiveChanged', (event: CustomEvent<ActiveInfo>) => {
    event;
    event.detail;
    event.detail.active;
});

window.addEventListener('obsSourceVisibleChanged', (event: CustomEvent<VisibleInfo>) => {
    event;
    event.detail;
    event.detail.visible;
});

window.obsstudio.onVisibilityChange = (visibility: boolean) => {
    visibility;
};

window.obsstudio.onActiveChange = (active: boolean) => {
    active;
};
