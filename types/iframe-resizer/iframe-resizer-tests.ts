import { iframeResizer } from 'iframe-resizer';
import ifr = require("iframe-resizer");

function testOne(): void {
  const iframe: HTMLIFrameElement = document.createElement('iframe');
  const options: iframeResizer.IFrameOptions = { log: true };
  const components: iframeResizer.IFrameComponent[] = iframeResizer(options, iframe);
  if (components) {
    components.forEach(component => console.log(component.iFrameResizer));
  } else {
    console.log("No components");
  }
}

function testTwo(): void {
  const iframe: HTMLIFrameElement = document.createElement('iframe');
  const components: iframeResizer.IFrameComponent[] = iframeResizer({
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

function testThree(): void {
  iframeResizer({}, '.my-iframe');
}

function testOneRequire(): void {
  const iframe: HTMLIFrameElement = document.createElement('iframe');
  const options: ifr.IFrameOptions = { log: true };
  const components: ifr.IFrameComponent[] = ifr(options, iframe);
  if (components) {
    components.forEach(component => console.log(component.iFrameResizer));
  } else {
    console.log("No components");
  }
}

function testTwoRequire(): void {
  const iframe: HTMLIFrameElement = document.createElement('iframe');
  const components: ifr.IFrameComponent[] = ifr({
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

function testThreeRequire(): void {
  ifr({}, '.my-iframe');
}

testOne();
testTwo();
testThree();
testOneRequire();
testTwoRequire();
testThreeRequire();
