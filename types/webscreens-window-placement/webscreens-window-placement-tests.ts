/**
 * Test Screen Details
 */

window.getScreenDetails().then((screenDetails: ScreenDetails) => {
    const currentScreen: ScreenDetailed = screenDetails.currentScreen;

    const screens: ScreenDetailed[] = screenDetails.screens;

    screenDetails.oncurrentscreenchange = (ev: Event) => console.log(ev);
    screenDetails.onscreenschange = (ev: Event) => console.log(ev);

    screenDetails.addEventListener('screenschange', (ev: Event) => console.log(ev));
    screenDetails.addEventListener('screenschange', (ev: Event) => console.log(ev));

    console.log(currentScreen);
    console.log(screens);
});

/**
 * Test Request Fullscreen
 */

window.document.body.requestFullscreen({});
window.getScreenDetails().then(screenDetails => {
    window.document.body.requestFullscreen({
        screen: screenDetails.currentScreen,
    });
    window.document.body.requestFullscreen({
        screen: screenDetails.screens[0],
    });
});
