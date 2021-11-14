import * as ATEM from 'applest-atem';

const atem = new ATEM();
atem.event.setMaxListeners(5);
atem.connect('192.168.1.220'); // Replace your ATEM switcher. address.

atem.on('connect', () => {
    atem.changeProgramInput(1); // ME1(0)
    atem.changePreviewInput(2); // ME1(0)
    atem.autoTransition(); // ME1(0)
    atem.changeProgramInput(3, 1); // ME2(1)

    atem.changeTransitionType(ATEM.TransitionStyle.MIX, 3);
    atem.changeTransitionType(ATEM.TransitionStyle.STING);

    // @ts-expect-error 4 is not a valid ME value (ME4 = 3)
    atem.changeProgramInput(3, 4);

    atem.changeAuxInput(0, 10011);
});

atem.on('stateChanged', (err, state) => {
    console.log(state); // catch the ATEM state.
});

atem.once('ping', () => {});

// @ts-expect-error invalid event
atem.once('sdfsdf', () => {});

console.log(atem.state);

const uploader = new ATEM.FileUploader(atem); // Pass the atem instance.
uploader.uploadFromPNGFile('/Users/Sakura/Desktop/FHD.png'); // Pass a path of valid PNG file.

const state: ATEM.State = {
    topology: {
        numberOfMEs: 1,
        numberOfSources: 14,
        numberOfColorGenerators: 1,
        numberOfAUXs: 1,
        numberOfDownstreamKeys: 0,
        numberOfStingers: 1,
        numberOfDVEs: 0,
        numberOfSuperSources: 0,
    },
    tallys: [1, 3, 0, 2, 0, 1],
    channels: {
        0: { name: 'Black', label: 'BLK' },
        1: { name: 'SDI 1', label: 'SDI1' },
        2: { name: 'SDI 2', label: 'SDI2' },
        3: { name: 'HDMI 3', label: 'CAM3' },
        4: { name: 'HDMI 4', label: 'CAM4' },
        1000: { name: 'Color Bars', label: 'BARS' },
        2001: { name: 'Color 1', label: 'COL1' },
        2002: { name: 'Color 2', label: 'COL2' },
        3010: { name: 'Media Player 1', label: 'MP1' },
        3011: { name: 'Media Player 1 Key', label: 'MP1K' },
        8001: { name: 'Output', label: '' },
        10010: { name: 'Program', label: 'PGM' },
        10011: { name: 'Preview', label: 'PVW' },
        11001: { name: 'Camera 1 Direct', label: 'DIR' },
    },
    video: {
        ME: [
            {
                upstreamKeyState: [false],
                upstreamKeyNextState: [false],
                numberOfKeyers: 1,
                programInput: 2,
                previewInput: 1,
                transitionStyle: 0,
                upstreamKeyNextBackground: true,
                transitionPreview: false,
                transitionPosition: 0,
                transitionFrameCount: 25,
                fadeToBlack: false,
            },
        ],
        downstreamKeyOn: [false],
        downstreamKeyTie: [false],
        auxs: { 0: 10010 },
    },
    audio: { hasMonitor: null, numberOfChannels: null, channels: {} },
    _pin: 'ATEM Television Studio HD',
    model: 13,
};
