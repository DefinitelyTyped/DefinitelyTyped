

var QRScanner: QRScanner = window.QRScanner;
QRScanner.prepare();
QRScanner.prepare((err, status) => { var error: QRScannerError = err; var obj: QRScannerStatus = status; });
QRScanner.scan((err, results) => { var error: QRScannerError = err; var contents: string = results; });
QRScanner.cancelScan();
QRScanner.cancelScan((status) => {var obj: QRScannerStatus = status; });
QRScanner.show();
QRScanner.show((status) => {var obj: QRScannerStatus = status; });
QRScanner.hide();
QRScanner.hide((status) => {var obj: QRScannerStatus = status; });
QRScanner.enableLight();
QRScanner.enableLight((err, status) => { var error: QRScannerError = err; var obj: QRScannerStatus = status; });
QRScanner.disableLight();
QRScanner.disableLight((err, status) => { var error: QRScannerError = err; var obj: QRScannerStatus = status; });
QRScanner.useCamera(1);
QRScanner.useCamera(1, (err, status) => { var error: QRScannerError = err; var obj: QRScannerStatus = status; });
QRScanner.useFrontCamera();
QRScanner.useFrontCamera((err, status) => { var error: QRScannerError = err; var obj: QRScannerStatus = status; });
QRScanner.useBackCamera();
QRScanner.useBackCamera((err, status) => { var error: QRScannerError = err; var obj: QRScannerStatus = status; });
QRScanner.pausePreview();
QRScanner.pausePreview((status) => {var obj: QRScannerStatus = status; });
QRScanner.resumePreview();
QRScanner.resumePreview((status) => {var obj: QRScannerStatus = status; });
QRScanner.openSettings();
QRScanner.openSettings((err, status) => { var error: QRScannerError = err; var obj: QRScannerStatus = status; });
QRScanner.destroy();
QRScanner.destroy((status) => {var obj: QRScannerStatus = status; });

QRScanner.prepare((err, status) => {
  var error: QRScannerError = err;
  var num: number = error.code;
  var str: string = error.name;
  str = error._message;

  var obj: QRScannerStatus = status;
  var bool: boolean = status.authorized;
  bool = status.denied;
  bool = status.restricted;
  bool = status.prepared;
  bool = status.scanning;
  bool = status.previewing;
  bool = status.webviewBackgroundIsTransparent;
  bool = status.lightEnabled;
  bool = status.canOpenSettings;
  bool = status.canEnableLight;
  var num: number = status.currentCamera;
});
