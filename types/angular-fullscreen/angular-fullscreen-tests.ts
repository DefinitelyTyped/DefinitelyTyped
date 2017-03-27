

angular
  .module('TestApp', ['FBAngular'])
  .controller('TestCtrl', (Fullscreen: ng.fullscreen.IFullscreen) => {
    Fullscreen.all();
    Fullscreen.toggleAll();
    Fullscreen.enable(document.getElementById('test-id'));
    Fullscreen.cancel();
    Fullscreen.isEnabled();
    Fullscreen.isSupported();
  });
