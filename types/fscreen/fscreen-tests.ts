import fscreen from 'fscreen';

const element = document.createElement('div');

if (fscreen.fullscreenEnabled) {
    fscreen.addEventListener('fullscreenchange', handler, false);
    fscreen.requestFullscreen(element);
}

function handler() {
    if (fscreen.fullscreenElement !== null) {
        // Entered fullscreen mode
    } else {
        // Exited fullscreen mode
    }
}

fscreen.requestFullscreen(element);
fscreen.requestFullscreenFunction(element);
fscreen.exitFullscreen();
fscreen.onfullscreenchange = handler;
fscreen.addEventListener('fullscreenchange', handler);
fscreen.removeEventListener('fullscreenchange', handler);
fscreen.onfullscreenerror = handler;
fscreen.addEventListener('fullscreenerror', handler);
fscreen.removeEventListener('fullscreenerror', handler);
