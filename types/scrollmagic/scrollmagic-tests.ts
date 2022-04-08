import ScrollMagic, { DestroyEvent, SceneProgressEvent } from 'scrollmagic';

const myController = new ScrollMagic.Controller();

const currentVersion = ScrollMagic.version;

function handleDestroy(e: DestroyEvent) {
    console.log(e);
}

function handleBorderCrossing(e: SceneProgressEvent<'enter'> | SceneProgressEvent<'leave'>) {
    console.log(e.state);
}

const myScene = new ScrollMagic.Scene({
    duration: 300,
    loglevel: 2,
    triggerHook: 'onLeave',
    triggerElement: '#trigger',
})
    .on('destroy', handleDestroy)
    .on('enter leave', handleBorderCrossing)
    .addTo(myController);

myScene.destroy();
