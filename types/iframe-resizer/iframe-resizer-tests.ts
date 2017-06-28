import {IFrameComponent, IFrameOptions, iframeResizer} from "iframe-resizer";

function testOne(): void {
    let iframe: HTMLIFrameElement = document.createElement('iframe');
    let options: IFrameOptions = {log: true};
    let components: IFrameComponent[] = iframeResizer(options, iframe);
    if (components) {
        components.forEach(component => console.log(component.iFrameResizer));
    } else {
        console.log("No components");
    }
}

function testTwo(): void {
    let iframe: HTMLIFrameElement = document.createElement('iframe');
    let components: IFrameComponent[] = iframeResizer({
        initCallback: () => {
            console.log('Init');
        },
        closedCallback: () => {
            console.log('Closed');
        }
    }, iframe);
    if (components) {
        components.forEach(component => console.log(component.iFrameResizer));
    } else {
        console.log("No components");
    }
}

testOne();
testTwo();
