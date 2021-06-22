import getContext = require("audio-context");

const context = getContext();
const myContext = getContext(22000);
const yourOptions: getContext.Options = {
    sampleRate: 44000,
    offline: true,
    length: 3000,
    channels: 2
};
const yourContext = getContext(yourOptions);
