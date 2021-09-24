import editly = require('editly');
const { renderSingleFrame } = editly;

/* examples/alpha.json5 */
// $ExpectType Promise<void>
editly({
    enableFfmpegLog: true,
    outPath: './alpha.mp4',
    clips: [
        {
            duration: 2,
            layers: [
                { type: 'video', path: './assets/lofoten.mp4', cutFrom: 0.4, cutTo: 2 },
                { type: 'video', path: './assets/dancer1.webm', resizeMode: 'contain', cutFrom: 0, cutTo: 6 },
            ],
        },
        {
            layers: [
                { type: 'video', path: './assets/lofoten.mp4', cutFrom: 0.4, cutTo: 2 },
                { type: 'video', path: './assets/dancer1.webm', resizeMode: 'contain' },
            ],
        },
    ],
});

/* examples/audio-transition.json5 */
// $ExpectType Promise<void>
editly({
    enableFfmpegLog: true,
    outPath: './audio-transition.mp4',
    keepSourceAudio: true,
    defaults: {
        duration: 3,
        transition: { duration: 1, name: 'directional' },
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    clips: [
        {
            layers: [
                { type: 'title-background', text: 'Default transition' },
                { type: 'audio', path: './assets/sample1.m4a' },
            ],
        },
        {
            transition: { duration: 0.2 },
            layers: [
                { type: 'title-background', text: 'Fast transition' },
                { type: 'audio', path: './assets/sample2.m4a' },
            ],
        },
        {
            transition: { duration: 0 },
            layers: [
                { type: 'title-background', text: 'No transition' },
                { type: 'audio', path: './assets/sample1.m4a' },
            ],
        },
        {
            transition: { audioInCurve: 'exp', audioOutCurve: 'exp' },
            layers: [
                { type: 'title-background', text: 'Exp curve' },
                { type: 'audio', path: './assets/sample2.m4a' },
            ],
        },
        {
            transition: { name: 'dummy' },
            layers: [
                { type: 'title-background', text: 'Dummy' },
                { type: 'audio', path: './assets/sample1.m4a' },
            ],
        },
        {
            transition: { duration: 2 },
            layers: [
                { type: 'title-background', text: 'Too short' },
                { type: 'audio', path: './assets/sample2.m4a' },
            ],
        },
        {
            duration: 1,
            transition: { duration: 2 },
            layers: [
                { type: 'title-background', text: 'Too short' },
                { type: 'audio', path: './assets/sample2.m4a' },
            ],
        },
        {
            duration: 1,
            transition: { duration: 2 },
            layers: [
                { type: 'title-background', text: 'Too short' },
                { type: 'audio', path: './assets/sample2.m4a' },
            ],
        },
        {
            layers: [
                { type: 'title-background', text: 'THE END' },
                { type: 'audio', path: './assets/sample2.m4a' },
            ],
        },
    ],
});

/* examples/audio-volume.json5 */
// $ExpectType Promise<void>
editly({
    outPath: './audio-volume.mp4',
    width: 200,
    height: 200,
    clips: [{ duration: 2, layers: [{ type: 'title-background', text: 'Audio output volume' }] }],
    audioTracks: [{ path: './assets/High [NCS Release] - JPB  (No Copyright Music)-R8ZRCXy5vhA.m4a', cutFrom: 18 }],
    outputVolume: '-10dB',
});

/* examples/audio1.json5 */
// $ExpectType Promise<void>
editly({
    enableFfmpegLog: true,
    outPath: './audio1.mp4',
    keepSourceAudio: true,
    defaults: {
        transition: null,
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    clips: [
        { duration: 0.5, layers: [{ type: 'video', path: './assets/lofoten.mp4', cutFrom: 0.4, cutTo: 2 }] },

        {
            layers: [
                { type: 'title-background', text: 'test' },
                {
                    type: 'audio',
                    path: './assets/High [NCS Release] - JPB  (No Copyright Music)-R8ZRCXy5vhA.m4a',
                    cutFrom: 2,
                    cutTo: 5,
                },
            ],
        },

        {
            layers: [
                { type: 'video', path: './assets/lofoten.mp4', cutFrom: 0, cutTo: 2, mixVolume: 0 },
                {
                    type: 'audio',
                    path: './assets/High [NCS Release] - JPB  (No Copyright Music)-R8ZRCXy5vhA.m4a',
                    mixVolume: 0.1,
                },
            ],
        },

        {
            duration: 2,
            layers: [
                { type: 'video', path: './assets/lofoten.mp4', cutFrom: 0.4, cutTo: 2 },
                {
                    type: 'audio',
                    path: './assets/High [NCS Release] - JPB  (No Copyright Music)-R8ZRCXy5vhA.m4a',
                    cutFrom: 2,
                    cutTo: 3,
                    mixVolume: 0.5,
                },
            ],
        },

        { duration: 1.8, layers: [{ type: 'video', path: './assets/lofoten.mp4', cutFrom: 1, cutTo: 2 }] },
    ],
});

/* examples/audio2.json5 */
// $ExpectType Promise<void>
editly({
    enableFfmpegLog: true,
    outPath: './audio2.mp4',
    width: 200,
    height: 200,
    defaults: {
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    clips: [
        { layers: [{ type: 'video', path: './assets/lofoten.mp4', cutFrom: 1, cutTo: 2 }] },
        { duration: 15, layers: { type: 'title-background', text: 'Audio track' } },
    ],
    audioNorm: { enable: true, gaussSize: 3, maxGain: 100 },
    clipsAudioVolume: 50,
    audioTracks: [
        { path: './assets/High [NCS Release] - JPB  (No Copyright Music)-R8ZRCXy5vhA.m4a', cutFrom: 18 },
        { path: './assets/winxp.mp3', mixVolume: 10, cutFrom: 1, cutTo: 2, start: 2 },
        { path: './assets/Julen_ribas.m4a', mixVolume: 50, cutTo: 7, start: 5 },
    ],
});

/* examples/audio3.json5 */
// $ExpectType Promise<void>
editly({
    outPath: './audio3.mp4',
    width: 200,
    height: 200,
    defaults: {
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    clips: [
        {
            layers: [
                { type: 'video', path: './assets/lofoten.mp4', cutTo: 2 },
                { type: 'title', text: 'Arbitrary audio' },
            ],
        },
        {
            duration: 3,
            layers: [
                { type: 'title-background', text: 'Voice starts in 1 sec' },
                { type: 'detached-audio', path: './assets/Julen_ribas.m4a', mixVolume: 50, cutFrom: 2, start: 1 },
            ],
        },
        { duration: 1, layers: [{ type: 'title-background', text: 'Voice continues over clip 2' }] },
        { duration: 3, layers: [{ type: 'title-background', text: 'Voice continues over clip 3' }] },
        {
            duration: 2,
            layers: [
                { type: 'title-background', text: 'XP sound starts' },
                { type: 'detached-audio', path: './assets/winxp.mp3', mixVolume: 10, cutFrom: 0.5 },
            ],
        },
    ],
    audioNorm: { enable: true, gaussSize: 3, maxGain: 100 },
    audioTracks: [{ path: './assets/High [NCS Release] - JPB  (No Copyright Music)-R8ZRCXy5vhA.m4a', cutFrom: 18 }],
});

/* examples/audioLoop.json5 */
// $ExpectType Promise<void>
editly({
    outPath: './audioLoop.mp4',
    width: 200,
    height: 200,
    audioFilePath: './assets/winxp.mp3',
    loopAudio: true,
    defaults: {
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    clips: [{ duration: 10, layers: [{ type: 'title-background', text: 'Looping audio!' }] }],
});

/* examples/commonFeatures.json5 */
// $ExpectType Promise<void>
editly({
    width: 720,
    height: 1280,
    fps: 30,
    outPath: './commonFeatures.mp4',
    audioFilePath: './assets/High [NCS Release] - JPB  (No Copyright Music)-R8ZRCXy5vhA.m4a',
    defaults: {
        transition: { name: 'random' },
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    clips: [
        {
            duration: 3,
            transition: { name: 'directional-left' },
            layers: [
                {
                    type: 'title-background',
                    text: 'EDITLY\nVideo editing framework',
                    background: { type: 'linear-gradient', colors: ['#02aab0', '#00cdac'] },
                },
            ],
        },
        {
            duration: 4,
            transition: { name: 'dreamyzoom' },
            layers: [
                {
                    type: 'title-background',
                    text: 'Multi-line text with animated linear or radial gradients',
                    background: { type: 'radial-gradient' },
                },
            ],
        },
        {
            duration: 3,
            transition: { name: 'directional-right' },
            layers: [{ type: 'rainbow-colors' }, { type: 'title', text: 'Colorful backgrounds' }],
        },
        { duration: 3, layers: [{ type: 'pause' }, { type: 'title', text: 'and separators' }] },

        {
            duration: 3,
            transition: { name: 'fadegrayscale' },
            layers: [
                {
                    type: 'title-background',
                    text: 'Image slideshows with Ken Burns effect',
                    background: { type: 'linear-gradient' },
                },
            ],
        },
        {
            duration: 2.5,
            transition: { name: 'directionalWarp' },
            layers: [{ type: 'image', path: './assets/vertical.jpg', zoomDirection: 'out' }],
        },
        {
            duration: 3,
            transition: { name: 'dreamyzoom' },
            layers: [
                { type: 'image', path: './assets/img1.jpg', duration: 2.5, zoomDirection: 'in' },
                {
                    type: 'subtitle',
                    text: 'Indonesia has many spectacular locations. Here is the volcano Kelimutu, which has three lakes in its core, some days with three different colors!',
                },
                { type: 'title', position: 'top', text: 'With text' },
            ],
        },
        {
            duration: 3,
            transition: { name: 'colorphase' },
            layers: [
                { type: 'image', path: './assets/img2.jpg', zoomDirection: 'out' },
                { type: 'subtitle', text: 'Komodo national park is the only home of the endangered Komodo dragons' },
            ],
        },
        {
            duration: 2.5,
            transition: { name: 'simplezoom' },
            layers: [{ type: 'image', path: './assets/img3.jpg', zoomDirection: 'in' }],
        },

        {
            duration: 1.5,
            transition: { name: 'crosszoom', duration: 0.3 },
            layers: [
                { type: 'video', path: 'assets/kohlipe1.mp4', cutTo: 58 },
                { type: 'title', text: 'Videos' },
            ],
        },
        {
            duration: 3,
            transition: { name: 'fade' },
            layers: [{ type: 'video', path: 'assets/kohlipe1.mp4', cutFrom: 58 }],
        },
        { transition: { name: 'fade' }, layers: [{ type: 'video', path: 'assets/kohlipe2.mp4', cutTo: 2.5 }] },
        { duration: 1.5, layers: [{ type: 'video', path: 'assets/kohlipe3.mp4', cutFrom: 3, cutTo: 30 }] },

        {
            duration: 3,
            transition: { name: 'crosszoom' },
            layers: [
                { type: 'gl', fragmentPath: './assets/shaders/3l23Rh.frag' },
                { type: 'title', text: 'OpenGL\nshaders' },
            ],
        },
        { duration: 3, layers: [{ type: 'gl', fragmentPath: './assets/shaders/MdXyzX.frag' }] },
        { duration: 3, layers: [{ type: 'gl', fragmentPath: './assets/shaders/30daysofshade_010.frag' }] },
        { duration: 3, layers: [{ type: 'gl', fragmentPath: './assets/shaders/wd2yDm.frag', speed: 5 }] },

        {
            duration: 3,
            layers: [
                { type: 'image', path: './assets/91083241_573589476840991_4224678072281051330_n.jpg' },
                { type: 'news-title', text: 'BREAKING NEWS' },
                {
                    type: 'subtitle',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
                          'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
                          'pariatur.',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                },
            ],
        },

        {
            duration: 3,
            layers: [
                { type: 'rainbow-colors' },
                {
                    type: 'video',
                    path: './assets/tungestolen.mp4',
                    resizeMode: 'contain',
                    width: 0.4,
                    height: 0.4,
                    top: 0.05,
                    left: 0.95,
                    originY: 'top',
                    originX: 'right',
                },
                { type: 'title', position: 'bottom', text: 'Picture-in-Picture' },
            ],
        },

        { duration: 3, layers: [{ type: 'editly-banner' }] },
    ],
});

/* examples/contain-blur.json5 */
// $ExpectType Promise<void>
editly({
    width: 3000,
    height: 2000,
    fps: 15,
    outPath: './contain-blur.mp4',
    defaults: {
        transition: null,
    },
    clips: [
        { duration: 0.3, layers: [{ type: 'image', path: './assets/vertical.jpg', zoomDirection: null }] },
        { duration: 0.5, layers: [{ type: 'video', path: './assets/IMG_1884.MOV', cutFrom: 0, cutTo: 2 }] },
    ],
});

/* examples/customCanvas.js */
// $ExpectType Promise<void>
editly({
    fast: true,
    outPath: './customCanvas.gif',
    clips: [
        {
            duration: 2,
            layers: [
                { type: 'rainbow-colors' },
                {
                    type: 'canvas',
                    func: ({ canvas }) => ({
                        onRender: progress => {
                            const context = canvas.getContext();
                            const centerX = canvas.width! / 2;
                            const centerY = canvas.height! / 2;
                            const radius = 40 * (1 + progress * 0.5);

                            context.beginPath();
                            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
                            context.fillStyle = 'hsl(350, 100%, 37%)';
                            context.fill();
                            context.lineWidth = 5;
                            context.strokeStyle = '#fff';
                            context.stroke();
                        },
                    }),
                },
            ],
        },
    ],
});

/* examples/customFabric.js */
// $ExpectType Promise<void>
editly({
    fast: true,
    outPath: './customFabric.gif',
    clips: [
        {
            duration: 2,
            layers: [
                {
                    type: 'fabric',
                    func: ({ width, height, fabric }) => ({
                        onRender: (progress, canvas) => {
                            canvas.backgroundColor = 'hsl(33, 100%, 50%)';

                            const text = new fabric.Text(`PROGRESS\n${Math.floor(progress * 100)}%`, {
                                originX: 'center',
                                originY: 'center',
                                left: width / 2,
                                top: (height / 2) * (1 + (progress * 0.1 - 0.05)),
                                fontSize: 20,
                                textAlign: 'center',
                                fill: 'white',
                            });

                            canvas.add(text);
                        },
                    }),
                },
            ],
        },
    ],
});

/* examples/customOutputArgs.json5 */
// $ExpectType Promise<void>
editly({
    outPath: './customOutputArgs.webp',
    clips: [{ duration: 2, layers: [{ type: 'title-background', text: 'Custom output args' }] }],
    customOutputArgs: ['-compression_level', '5', '-qscale', '60', '-vcodec', 'libwebp'],
});

/* examples/gl.json5 */
// $ExpectType Promise<void>
editly({
    outPath: './gl.mp4',
    clips: [
        { transition: null, duration: 3, layers: [{ type: 'gl', fragmentPath: './assets/shaders/3l23Rh.frag' }] },
        { duration: 3, layers: [{ type: 'gl', fragmentPath: './assets/shaders/MdXyzX.frag' }] },
        { duration: 3, layers: [{ type: 'gl', fragmentPath: './assets/shaders/30daysofshade_010.frag', speed: 1 }] },
        { duration: 3, layers: [{ type: 'gl', fragmentPath: './assets/shaders/rainbow-background.frag' }] },
        { duration: 3, layers: [{ type: 'gl', fragmentPath: './assets/shaders/wd2yDm.frag', speed: 5 }] },
    ],
});

/* examples/gradients.json5 */
// $ExpectType Promise<void>
editly({
    outPath: './gradients.mp4',
    defaults: {
        transition: { name: 'linearblur', duration: 0.1 },
    },
    clips: [
        { duration: 1, layers: [{ type: 'linear-gradient', colors: ['#02aab0', '#00cdac'] }] },
        { duration: 1, layers: [{ type: 'radial-gradient', colors: ['#b002aa', '#ac00cd'] }] },
        { duration: 1, layers: [{ type: 'linear-gradient' }] },
        { duration: 1, layers: [{ type: 'radial-gradient' }] },
    ],
});

/* examples/image.json5 */
// $ExpectType Promise<void>
editly({
    width: 600,
    height: 300,
    outPath: './image.mp4',
    defaults: {
        transition: null,
        duration: 0.2,
    },
    clips: [
        { layers: [{ type: 'image', path: './assets/pano.jpg' }] },
        { layers: [{ type: 'image', path: './assets/vertical.jpg' }] },
        {
            layers: [
                { type: 'fill-color', color: 'white' },
                { type: 'image', path: './assets/pano.jpg', resizeMode: 'contain' },
            ],
        },
        {
            layers: [
                { type: 'fill-color', color: 'white' },
                { type: 'image', path: './assets/vertical.jpg', resizeMode: 'contain' },
            ],
        },
        { layers: [{ type: 'image', path: './assets/pano.jpg', resizeMode: 'cover' }] },
        { layers: [{ type: 'image', path: './assets/vertical.jpg', resizeMode: 'cover' }] },
        { layers: [{ type: 'image', path: './assets/pano.jpg', resizeMode: 'stretch' }] },
        { layers: [{ type: 'image', path: './assets/vertical.jpg', resizeMode: 'stretch' }] },
    ],
});

/* examples/imageOverlay.json5 */
// $ExpectType Promise<void>
editly({
    outPath: './imageOverlay.mp4',
    clips: [
        {
            layers: [
                { type: 'video', path: './assets/changi.mp4', cutTo: 2 },
                {
                    type: 'image-overlay',
                    path: './assets/overlay.svg',
                    width: 0.2,
                    position: { x: 0.95, y: 0.03, originX: 'right' },
                },
                { type: 'image-overlay', path: './assets/emoji.png', stop: 0.5, zoomDirection: 'in' },
                {
                    type: 'image-overlay',
                    path: './assets/emoji2.svg',
                    position: 'top',
                    start: 0.7,
                    stop: 1.5,
                    width: 0.2,
                },
                {
                    type: 'image-overlay',
                    path: './assets/emoji2.svg',
                    position: 'bottom',
                    start: 0.7,
                    stop: 1.5,
                    height: 0.2,
                },
            ],
        },
    ],
});

/* examples/kenBurns.json5 */
// $ExpectType Promise<void>
editly({
    outPath: './kenBurns.mp4',
    defaults: {
        transition: { name: 'fade' },
    },
    clips: [
        { duration: 3, layers: [{ type: 'image', path: './assets/img2.jpg', zoomDirection: 'out' }] },
        { duration: 3, layers: [{ type: 'image', path: './assets/img3.jpg', zoomDirection: 'in' }] },
        { duration: 3, layers: [{ type: 'image', path: './assets/img1.jpg', zoomDirection: null }] },
    ],
});

/* examples/losslesscut.json5 */
// $ExpectType Promise<void>
editly({
    fast: false,
    outPath: './losslesscut.mp4',
    verbose: true,
    enableFfmpegLog: true,
    fps: 30,
    audioFilePath: './Believe - Roa [Vlog No Copyright Music]-qldyHxWPFUY.m4a',
    defaults: {
        transition: { name: 'crossZoom', duration: 1 },
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    clips: [
        {
            duration: 3,
            layers: [{ type: 'title-background', text: 'LosslessCut', background: { type: 'linear-gradient' } }],
        },
        { layers: [{ type: 'video', path: '/Users/mifi/Desktop/losslesscut-usage/intro.mov' }] },
        {
            duration: 3,
            layers: [
                {
                    type: 'title-background',
                    text: 'Capture full resolution screenshots',
                    background: { type: 'radial-gradient' },
                },
            ],
        },
        { layers: [{ type: 'video', path: '/Users/mifi/Desktop/losslesscut-usage/capture screenshots.mov' }] },
        {
            duration: 3,
            layers: [
                {
                    type: 'title-background',
                    text: 'Extract tracks as individual files',
                    background: { type: 'radial-gradient' },
                },
            ],
        },
        {
            layers: [
                {
                    type: 'video',
                    path: '/Users/mifi/Desktop/losslesscut-usage/extract tracks as individual files.mov',
                },
            ],
        },
        {
            duration: 3,
            layers: [
                {
                    type: 'title-background',
                    text: 'Keyframes and zoom',
                    background: { type: 'radial-gradient' },
                },
            ],
        },
        { layers: [{ type: 'video', path: '/Users/mifi/Desktop/losslesscut-usage/keyframes and zoom.mov' }] },
        {
            duration: 3,
            layers: [{ type: 'title-background', text: 'Label segments', background: { type: 'radial-gradient' } }],
        },
        { layers: [{ type: 'video', path: '/Users/mifi/Desktop/losslesscut-usage/label segments.mov' }] },
        {
            duration: 3,
            layers: [
                {
                    type: 'title-background',
                    text: 'Lossless rotation',
                    background: { type: 'radial-gradient' },
                },
            ],
        },
        { layers: [{ type: 'video', path: '/Users/mifi/Desktop/losslesscut-usage/lossless rotation.mov' }] },
        {
            duration: 3,
            layers: [{ type: 'title-background', text: 'Thumbnails', background: { type: 'radial-gradient' } }],
        },
        { layers: [{ type: 'video', path: '/Users/mifi/Desktop/losslesscut-usage/thumbnails.mov' }] },
        {
            duration: 3,
            layers: [
                {
                    type: 'title-background',
                    text: 'Audio waveforms',
                    background: { type: 'radial-gradient' },
                },
            ],
        },
        { layers: [{ type: 'video', path: '/Users/mifi/Desktop/losslesscut-usage/audio waveform.mov' }] },
        {
            duration: 3,
            layers: [
                {
                    type: 'title-background',
                    text: 'Track information',
                    background: { type: 'radial-gradient' },
                },
            ],
        },
        { layers: [{ type: 'video', path: '/Users/mifi/Desktop/losslesscut-usage/track information.mov' }] },
        {
            duration: 3,
            layers: [
                {
                    type: 'title-background',
                    text: 'Tracks editor and audio swap',
                    background: { type: 'radial-gradient' },
                },
            ],
        },
        {
            layers: [
                {
                    type: 'video',
                    path: '/Users/mifi/Desktop/losslesscut-usage/tracks editor and replace audio.mov',
                },
            ],
        },
        {
            duration: 4,
            layers: [
                {
                    type: 'title-background',
                    text: 'Get it from\nMac App Store\nWindows Store',
                    background: { type: 'fill-color', color: 'black' },
                },
            ],
        },
        { duration: 2, layers: [{ type: 'editly-banner' }] },
    ],
});

/* examples/lowerThirds1Line.json5 */
// $ExpectType Promise<void>
editly({
    width: 1280,
    height: 720,
    outPath: './lowerThirds1Line.mp4',
    clips: [
        {
            duration: 7,
            layers: [
                { type: 'fill-color', color: '#555' },
                { type: 'video', path: 'assets/lowerthirds/UHD_DMGMORI_Lwr3rd_1Line.mov', resizeMode: 'contain' },
                {
                    type: 'slide-in-text',
                    text: 'Lower Line Regular Source Text',
                    position: { x: 0.035, y: 0.93, originX: 'left', originY: 'bottom' },
                    color: '#000',
                    fontSize: 0.021,
                    charSpacing: 0.025,
                    fontPath: './assets/lowerthirds/FF DIN Pro Light.otf',
                },
            ],
        },
    ],
});

/* examples/lowerThirds2Lines.json5 */
// $ExpectType Promise<void>
editly({
    width: 1280,
    height: 720,
    outPath: './lowerThirds2Lines.mp4',
    clips: [
        {
            duration: 7,
            layers: [
                { type: 'fill-color', color: '#555' },
                { type: 'video', path: 'assets/lowerthirds/UHD_DMGMORI_Lwr3rd_2Lines.webm', resizeMode: 'contain' },
                {
                    type: 'slide-in-text',
                    text: 'Upper Line Bold Source Text',
                    position: { x: 0.035, y: 0.877, originX: 'left', originY: 'bottom' },
                    color: '#000',
                    fontSize: 0.021,
                    charSpacing: 0.03,
                    fontPath: './assets/lowerthirds/FF DIN Pro Medium.otf',
                },
                {
                    type: 'slide-in-text',
                    text: 'Lower Line Regular Source Text',
                    position: { x: 0.035, y: 0.93, originX: 'left', originY: 'bottom' },
                    color: '#000',
                    fontSize: 0.021,
                    charSpacing: 0.025,
                    fontPath: './assets/lowerthirds/FF DIN Pro Light.otf',
                },
            ],
        },
    ],
});

/* examples/mosaic.json5 */
// $ExpectType Promise<void>
editly({
    width: 500,
    height: 500,
    outPath: './mosaic.mp4',
    defaults: {
        transition: { duration: 0 },
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
        layerType: {
            video: { width: 0.4, height: 0.4 },
        },
    },
    clips: [
        {
            duration: 2,
            layers: [
                {
                    type: 'video',
                    path: './assets/palawan.mp4',
                    cutFrom: 0,
                    cutTo: 2,
                    resizeMode: 'cover',
                    top: 0.5,
                    left: 0.5,
                    originY: 'center',
                    originX: 'center',
                },
                { type: 'video', path: './assets/palawan.mp4', cutFrom: 0, cutTo: 2, resizeMode: 'contain' },
                {
                    type: 'video',
                    path: './assets/palawan.mp4',
                    cutFrom: 0,
                    cutTo: 2,
                    resizeMode: 'contain-blur',
                    left: 1,
                    originX: 'right',
                },
                {
                    type: 'video',
                    path: './assets/IMG_1884.MOV',
                    cutFrom: 0,
                    cutTo: 2,
                    resizeMode: 'contain-blur',
                    left: 1,
                    top: 1,
                    originX: 'right',
                    originY: 'bottom',
                },
                {
                    type: 'video',
                    path: './assets/palawan.mp4',
                    cutFrom: 0,
                    cutTo: 2,
                    resizeMode: 'stretch',
                    top: 1,
                    originY: 'bottom',
                },
            ],
        },
    ],
});

/* examples/newsTitle.json5 */
// $ExpectType Promise<void>
editly({
    width: 900,
    height: 1600,
    outPath: './newsTitle.mp4',
    defaults: {
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    clips: [
        {
            duration: 10,
            layers: [
                { type: 'image', path: './assets/91083241_573589476840991_4224678072281051330_n.jpg' },
                { type: 'news-title', text: 'BREAKING NEWS' },
                {
                    type: 'subtitle',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
                          'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
                          'pariatur.',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                },
            ],
        },
    ],
});

/* examples/ph.json5 */
// $ExpectType Promise<void>
editly({
    width: 240,
    height: 240,
    fps: 14,
    outPath: './ph.gif',
    defaults: {
        transition: { duration: 0.4 },
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    clips: [
        {
            duration: 1,
            transition: { name: 'directionalWarp' },
            layers: [
                { type: 'image', path: './assets/vertical.jpg', zoomDirection: 'out' },
                { type: 'title', text: 'EDITLY' },
            ],
        },
        {
            duration: 1.5,
            transition: { name: 'dreamyzoom' },
            layers: [
                { type: 'image', path: './assets/img1.jpg', duration: 2.5, zoomDirection: 'in' },
                { type: 'title', position: 'bottom', text: 'Video editing API' },
            ],
        },

        {
            duration: 2,
            layers: [
                { type: 'image', path: './assets/91083241_573589476840991_4224678072281051330_n.jpg' },
                { type: 'news-title', text: 'EDITLY' },
                { type: 'subtitle', text: 'Get it from npm', backgroundColor: 'rgba(0,0,0,0.5)' },
            ],
        },
    ],
});

/* examples/pip.json5 */
// $ExpectType Promise<void>
editly({
    outPath: './pip.mp4',
    width: 1280,
    height: 720,
    fps: 30,
    defaults: {
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    clips: [
        {
            duration: 4,
            layers: [
                { type: 'rainbow-colors' },
                {
                    type: 'video',
                    path: './assets/tungestolen.mp4',
                    resizeMode: 'cover',
                    width: 0.3,
                    height: 0.4,
                    top: 0.05,
                    left: 0.95,
                    originY: 'top',
                    originX: 'right',
                },
                {
                    type: 'video',
                    path: './assets/tungestolen.mp4',
                    resizeMode: 'cover',
                    width: 0.4,
                    height: 0.2,
                    top: 0.05,
                    left: 0.05,
                    originY: 'top',
                    originX: 'left',
                },
                { type: 'title', position: 'bottom', text: 'Picture-in-Picture' },
            ],
        },
    ],
});

/* examples/position.json5 */
// $ExpectType Promise<void>
editly({
    outPath: './position.mp4',
    defaults: {
        layerType: {
            'image-overlay': { width: 0.1 },
        },
    },
    clips: [
        {
            layers: [
                { type: 'rainbow-colors' },
                { type: 'image-overlay', path: './assets/emoji2.svg', position: 'top' },
                { type: 'image-overlay', path: './assets/emoji2.svg', position: 'center' },
                { type: 'image-overlay', path: './assets/emoji2.svg', position: 'bottom' },
                { type: 'image-overlay', path: './assets/emoji2.svg', position: 'top-left' },
                { type: 'image-overlay', path: './assets/emoji2.svg', position: 'top-right' },
                { type: 'image-overlay', path: './assets/emoji2.svg', position: 'center-left' },
                { type: 'image-overlay', path: './assets/emoji2.svg', position: 'center-right' },
                { type: 'image-overlay', path: './assets/emoji2.svg', position: 'bottom-left' },
                { type: 'image-overlay', path: './assets/emoji2.svg', position: 'bottom-right' },
                {
                    type: 'image-overlay',
                    path: './assets/emoji.png',
                    width: 0.06,
                    position: { originX: 'center', originY: 'center', x: 0.75, y: 0.75 },
                },
            ],
        },
    ],
});

/* examples/remote.json5 */
// $ExpectType Promise<void>
editly({
    outPath: './remote.mp4',
    allowRemoteRequests: true,
    audioFilePath: './assets/High [NCS Release] - JPB  (No Copyright Music)-R8ZRCXy5vhA.m4a',
    clips: [
        { layers: [{ type: 'image', path: 'https://picsum.photos/400/400' }] },
        { layers: [{ type: 'image', path: 'https://picsum.photos/200/400' }] },
        { layers: [{ type: 'image', path: 'https://picsum.photos/400/200' }] },
    ],
});

/* examples/renderSingleFrame.js */
// $ExpectType Promise<void>
renderSingleFrame({
    time: 0,
    clips: [
        {
            duration: 2,
            layers: [
                {
                    type: 'title-background',
                    text: 'Editly can handle all formats and sizes with different fits',
                    background: { type: 'radial-gradient' },
                },
            ],
        },
        {
            layers: [
                { type: 'video', path: './assets/palawan.mp4', cutFrom: 0, cutTo: 2, resizeMode: 'contain' },
                { type: 'title', text: 'Contain' },
            ],
        },
        {
            layers: [
                { type: 'video', path: './assets/palawan.mp4', cutFrom: 0, cutTo: 2, resizeMode: 'contain-blur' },
                { type: 'title', text: 'Contain (blur)' },
            ],
        },
        {
            layers: [
                { type: 'video', path: './assets/IMG_1884.MOV', cutFrom: 0, cutTo: 2, resizeMode: 'contain-blur' },
                { type: 'title', text: 'Contain\n(blur, vertical)' },
            ],
        },
        {
            layers: [
                { type: 'video', path: './assets/palawan.mp4', cutFrom: 0, cutTo: 2, resizeMode: 'stretch' },
                { type: 'title', text: 'Stretch' },
            ],
        },
        {
            layers: [
                { type: 'video', path: './assets/palawan.mp4', cutFrom: 0, cutTo: 2, resizeMode: 'cover' },
                { type: 'title', text: 'Cover' },
            ],
        },
    ],
});

/* examples/single.json5 */
// $ExpectType Promise<void>
editly({
    // This is a test of a single clip to make sure that it works
    outPath: './single.mp4',
    keepSourceAudio: true,
    clips: [{ layers: [{ type: 'video', path: './assets/lofoten.mp4', cutFrom: 0, cutTo: 2 }] }],
});

/* examples/slideInText.json5 */
// $ExpectType Promise<void>
editly({
    outPath: './slideInText.mp4',
    defaults: {
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    clips: [
        {
            duration: 3,
            layers: [
                { type: 'image', path: 'assets/img2.jpg' },
                {
                    type: 'slide-in-text',
                    text: 'Text that slides in',
                    color: '#fff',
                    position: { x: 0.04, y: 0.93, originY: 'bottom', originX: 'left' },
                    fontSize: 0.05,
                },
            ],
        },
    ],
});

/* examples/smartFit.json5 */
// $ExpectType Promise<void>
editly({
    enableFfmpegLog: true,
    outPath: './smartFit.mp4',
    defaults: {
        transition: null,
        layer: { backgroundColor: 'white' },
    },
    clips: [
        { layers: [{ type: 'video', path: './assets/changi.mp4', cutFrom: 0.4, cutTo: 2 }] },
        { layers: [{ type: 'video', path: './assets/changi.mp4', cutFrom: 0.4, cutTo: 2, resizeMode: 'contain' }] },
        { layers: [{ type: 'video', path: './assets/changi.mp4', cutFrom: 0.4, cutTo: 2, resizeMode: 'stretch' }] },
    ],
});

/* examples/speedTest.json5 */
// $ExpectType Promise<void>
editly({
    outPath: './speedTest.mp4',
    defaults: {
        transition: null,
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    clips: [
        {
            duration: 2,
            layers: [
                {
                    type: 'title-background',
                    text: 'Speed up or slow down video',
                    background: { type: 'radial-gradient' },
                },
            ],
        },
        {
            duration: 2,
            layers: [
                { type: 'video', path: './assets/changi.mp4', cutFrom: 0, cutTo: 2 },
                { type: 'title', text: 'Same speed' },
            ],
        },
        {
            duration: 1,
            layers: [
                { type: 'video', path: './assets/changi.mp4', cutFrom: 0, cutTo: 4 },
                { type: 'title', text: '4x' },
            ],
        },
        {
            duration: 2,
            layers: [
                { type: 'video', path: './assets/changi.mp4', cutFrom: 0, cutTo: 1 },
                { type: 'title', text: '1/2x' },
            ],
        },
    ],
});

/* examples/subtitle.json5 */
// $ExpectType Promise<void>
editly({
    outPath: './subtitle.mp4',
    defaults: {
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
        layerType: { 'fill-color': { color: '#00aa00' } },
    },
    clips: [
        {
            duration: 2,
            layers: [
                { type: 'rainbow-colors' },
                {
                    type: 'subtitle',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
                          'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
                          'pariatur. Excepteur sint occaecat cupidatat non proident.',
                },
                { type: 'title', position: 'top', text: 'Subtitles' },
            ],
        },
        {
            duration: 2,
            layers: [
                { type: 'fill-color' },
                {
                    type: 'title',
                    position: { x: 0, y: 1, originY: 'bottom' },
                    text: 'Custom position',
                    zoomDirection: null,
                },
            ],
        },
    ],
});

/* examples/timeoutTest.json5 */
// $ExpectType Promise<void>
editly({
    outPath: './timeoutTest.mp4',
    clips: [
        {
            duration: 1.5,
            transition: { name: 'crosszoom', duration: 0.3 },
            layers: [{ type: 'video', path: './assets/tungestolen.mp4', cutTo: 58 }],
        },
        {
            duration: 3,
            transition: { name: 'fade' },
            layers: [{ type: 'video', path: './assets/tungestolen.mp4', cutFrom: 0 }],
        },
    ],
});

/* examples/transitionEasing.json5 */
// $ExpectType Promise<void>
editly({
    fast: true,
    outPath: './transitionEasing.mp4',
    defaults: {
        duration: 2,
    },
    clips: [
        {
            transition: { name: 'directional', duration: 0.5 },
            layers: [{ type: 'video', path: 'assets/changi.mp4', cutTo: 2 }],
        },
        {
            transition: { name: 'directional', duration: 0.5, params: { direction: [1, 0] } },
            layers: [{ type: 'video', path: 'assets/lofoten.mp4', cutTo: 2 }],
        },
        {
            transition: { name: 'directional', duration: 0.5, easing: null },
            layers: [{ type: 'video', path: 'assets/lofoten.mp4', cutTo: 2 }],
        },
        { layers: [{ type: 'pause' }] },
    ],
});

/* examples/transparentGradient.json5 */
// $ExpectType Promise<void>
editly({
    fast: true,
    outPath: './transparentGradient.mp4',
    clips: [
        {
            duration: 0.1,
            layers: [
                { type: 'fill-color', color: 'green' },
                { type: 'linear-gradient', colors: ['#ffffffff', '#ffffff00'] },
            ],
        },
    ],
});

/* examples/videos.json5 */
// $ExpectType Promise<void>
editly({
    width: 600,
    height: 800,
    outPath: './videos.mp4',
    defaults: {
        transition: { duration: 0 },
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    clips: [
        {
            duration: 2,
            layers: [
                {
                    type: 'title-background',
                    text: 'Editly can handle all formats and sizes with different fits',
                    background: { type: 'radial-gradient' },
                },
            ],
        },
        {
            layers: [
                { type: 'video', path: './assets/palawan.mp4', cutFrom: 0, cutTo: 2, resizeMode: 'contain' },
                { type: 'title', text: 'Contain' },
            ],
        },
        {
            layers: [
                { type: 'video', path: './assets/palawan.mp4', cutFrom: 0, cutTo: 2, resizeMode: 'contain-blur' },
                { type: 'title', text: 'Contain (blur)' },
            ],
        },
        {
            layers: [
                { type: 'video', path: './assets/IMG_1884.MOV', cutFrom: 0, cutTo: 2, resizeMode: 'contain-blur' },
                { type: 'title', text: 'Contain\n(blur, vertical)' },
            ],
        },
        {
            layers: [
                { type: 'video', path: './assets/palawan.mp4', cutFrom: 0, cutTo: 2, resizeMode: 'stretch' },
                { type: 'title', text: 'Stretch' },
            ],
        },
        {
            layers: [
                { type: 'video', path: './assets/palawan.mp4', cutFrom: 0, cutTo: 2, resizeMode: 'cover' },
                { type: 'title', text: 'Cover' },
            ],
        },
    ],
});

/* examples/videos2.json5 */
// $ExpectType Promise<void>
editly({
    verbose: true,
    enableFfmpegLog: true,
    outPath: './video2.mp4',
    defaults: {
        transition: {
            name: 'linearblur',
        },
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    clips: [
        {
            layers: [
                { type: 'video', path: './assets/changi.mp4', cutFrom: 0, cutTo: 2 },
                { type: 'title', text: 'Video 1' },
            ],
        },
        { layers: [{ type: 'video', path: './assets/IMG_1884.MOV', cutFrom: 0, cutTo: 2 }] },
    ],
});

/* examples/vignette.json5 */
// $ExpectType Promise<void>
editly({
    outPath: './vignette.mp4',
    clips: [
        {
            layers: [
                { type: 'video', path: './assets/tungestolen.mp4', cutTo: 2 },
                { type: 'image', path: './assets/vignette.png', resizeMode: 'stretch', zoomDirection: null },
            ],
        },
    ],
});

/* examples/visibleFromUntil.json5 */
// $ExpectType Promise<void>
editly({
    enableFfmpegLog: true,
    outPath: './visibleFromUntil.mp4',
    defaults: {
        layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    clips: [
        {
            duration: 2,
            layers: [
                { type: 'video', path: './assets/lofoten.mp4', cutFrom: 0.4, cutTo: 2 },
                {
                    type: 'video',
                    path: './assets/dancer1.webm',
                    resizeMode: 'contain',
                    cutFrom: 0,
                    cutTo: 6,
                    start: 0.5,
                    stop: 1,
                },
            ],
        },
        {
            duration: 2,
            layers: [
                { type: 'video', path: './assets/lofoten.mp4', cutFrom: 0.5, cutTo: 3.5 },
                { type: 'news-title', text: 'Hei', start: 0.5, stop: 1 },
            ],
        },
        {
            layers: [
                { type: 'video', path: './assets/lofoten.mp4', cutFrom: 0, cutTo: 4 },
                { type: 'video', path: './assets/changi.mp4', cutFrom: 0, cutTo: 1, start: 1, stop: 2 },
            ],
        },
    ],
});
