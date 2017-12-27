import * as elementResizeDetectorMaker from 'element-resize-detector'

let erd = elementResizeDetectorMaker({
    strategy: "scroll"
  });

const testElement: HTMLElement = null;

  erd.listenTo(testElement, function(element) {
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    console.log("Size: " + width + "x" + height);
  });

  erd.removeListener(testElement, (testElement) => {});

  erd.removeAllListeners(testElement);

  erd.uninstall(testElement);
