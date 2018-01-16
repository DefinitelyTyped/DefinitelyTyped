

resemble.outputSettings({
  errorColor: {
    red: 255,
    green: 0,
    blue: 255
  },
  errorType: 'movement',
  transparency: 0.3,
  largeImageThreshold: 1200
});

resemble("images/image.png").onComplete(function(data) {
  var r: number = data.red;
  var g: number = data.green;
  var b: number = data.blue;
  var brightness: number = data.brightness;
});

resemble("images/image.png").compareTo("images/image2.png").onComplete(function(data) {
  var diffImageDataUrl: string = data.getImageDataUrl();
  var difference: number = data.misMatchPercentage;
});

resemble("images/image2.png").compareTo("images/image2.png")
                     .ignoreAntialiasing()
                     .ignoreColors()
                     .repaint()
                     .onComplete(function(data) {
  var diffImageDataUrl: string = data.getImageDataUrl();
  var difference: number = data.misMatchPercentage;
});
