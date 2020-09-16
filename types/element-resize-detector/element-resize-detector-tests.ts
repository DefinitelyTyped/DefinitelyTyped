import * as elementResizeDetectorMaker from 'element-resize-detector';

const erd = elementResizeDetectorMaker({
    strategy: "scroll",
    debug: true,
    callOnAdd: false
});

const testElement: HTMLElement | null = null;

erd.listenTo(testElement!, (element) => {
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    console.log(`Size: " + ${width} + "x" + ${height}`);
});

erd.removeListener(testElement!, (testElement) => {});

erd.removeAllListeners(testElement!);

erd.uninstall(testElement!);
