import Castjs from 'castjs';

// Default instance
let cjs = new Castjs();

// Custom receiver or joinpolicy
const cjsComplex = new Castjs({
    receiver  : 'CC1AD845',              // default
    joinpolicy: 'tab_and_origin_scoped', // default
//  joinpolicy: 'custom_controller_scoped',
//  joinpolicy: 'origin_scoped',
//  joinpolicy: 'page_scoped',
});

// Check if casting is available
if (cjs.available) {
    // Initiate new cast session with a simple video
    cjs.cast('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4');

    // A more complex example
    cjs.cast('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', {
        poster     : 'https://castjs.io/media/poster.jpg',
        title      : 'Sintel',
        description: 'Third Open Movie by Blender Foundation',
        subtitles: [{
            active: true,
            label : 'English',
            src   : 'https://castjs.io/media/english.vtt'
        }, {
            label : 'Spanish',
            src   : 'https://castjs.io/media/spanish.vtt'
        }],
    })
}

// Castjs Events
cjs.on('available',    ()  => {});  // Casting is available
cjs.on('connect',      ()  => {});  // Connected with device
cjs.on('disconnect',   ()  => {});  // Disconnected with device
cjs.on('statechange',  ()  => {});  // Device state
cjs.on('timeupdate',   ()  => {});  // Current time changed
cjs.on('volumechange', ()  => {});  // Volume changed
cjs.on('mute',         ()  => {});  // Muted state changed
cjs.on('unmute',       ()  => {});  // Muted state changed
cjs.on('playing',      ()  => {});  // Media is playing
cjs.on('pause',        ()  => {});  // Media is paused
cjs.on('end',          ()  => {});  // Media ended
cjs.on('buffering',    ()  => {});  // Media is buffering / seeking
cjs.on('event',        (e) => {});  // Catch all events except 'error'
cjs.on('error',        (e) => {});  // Catch any errors

// Castjs properties
let verison        = cjs.version;        // Castjs Version
let receiver       = cjs.receiver;       // Receiver ID
let available      = cjs.available       // Casting is available
let connected      = cjs.connected      // Connected with cast device
let device         = cjs.device          // Cast device name
let src            = cjs.src             // Media source
let title          = cjs.title           // Media title
let descipription  = cjs.description     // Media description
let poster         = cjs.poster          // Media poster image
let subtitled      = cjs.subtitles       // Media subtitles
let volumeLevel    = cjs.volumeLevel     // Volume level
let muted          = cjs.muted           // If muted
let paused         = cjs.paused          // If paused
let time           = cjs.time            // Time in seconds
let timePRetty     = cjs.timePretty      // Time formatted in time hh:mm:ss
let duration       = cjs.duration        // Duration in seconds
let durationPretty = cjs.durationPretty  // Duration formatted in hh:mm:ss
let progress       = cjs.progress        // Progress in percentage 0 - 100
let state          = cjs.state           // State of cast device
