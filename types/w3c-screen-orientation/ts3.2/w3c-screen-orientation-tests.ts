// Example 1 (from the spec):
const show = () => {
    console.log("Orientation type is " + screen.orientation.type);
    console.log("Orientation angle is " + screen.orientation.angle);
};

screen.orientation.addEventListener("change", show);
window.onload = show;

// Example 2 (from the spec):
const start = () => {
    document.onfullscreenchange = () => {
        screen.orientation.lock('natural').then(startInternal);
    };
    document.documentElement.requestFullscreen();
};

// Example 3 (from the spec):
const startInternal = () => {};

const start2 = () => {
    screen.orientation.lock('landscape-primary').then(startInternal, () => {
        alert('To start, rotate your screen to landscape.');

        const orientationChangeHandler = () => {
            if (!screen.orientation.type.startsWith('landscape')) {
                return;
            }
            screen.orientation.removeEventListener('change', orientationChangeHandler);
            startInternal();
        };

        screen.orientation.addEventListener('change', orientationChangeHandler);
    });
};
window.onload = start2;
