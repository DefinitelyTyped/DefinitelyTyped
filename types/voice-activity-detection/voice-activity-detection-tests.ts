import vad = require('voice-activity-detection');

const valueContainer = document.createElement('div');
document.body.appendChild(valueContainer);

const stateContainer = document.createElement('div');
document.body.appendChild(stateContainer);

requestMic();

function requestMic() {
    try {
        navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia;
        navigator.mediaDevices.getUserMedia({ audio: true }).then(startUserMedia, handleMicConnectError);
    } catch (e) {
        handleUserMediaError();
    }
}

function handleUserMediaError() {
    console.warn('Mic input is not supported by the browser.');
}

function handleMicConnectError() {
    console.warn('Could not connect microphone. Possible rejected by the user or is blocked by the browser.');
}

function startUserMedia(stream: MediaStream) {
    const audioContext = new AudioContext();

    const options = {
        onVoiceStart: () => {
            console.log('voice start');
            stateContainer.innerHTML = 'Voice state: <strong>active</strong>';
        },
        onVoiceStop: () => {
            console.log('voice stop');
            stateContainer.innerHTML = 'Voice state: <strong>inactive</strong>';
        },
        onUpdate: (val: number) => {
            console.log('curr val:', val);
            valueContainer.innerHTML = `Current voice activity value: <strong>${val}</strong>`;
        }
    };

    const voiceActivityDetection = vad(audioContext, stream, options);

    voiceActivityDetection.destroy();
}
