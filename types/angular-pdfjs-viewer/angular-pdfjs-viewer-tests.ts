import * as angular from "angular";
import "angular-pdfjs-viewer";

angular.module('app').config((pdfjsViewerConfigProvider: angular.pdfjsViewer.ConfigProvider) => {
  pdfjsViewerConfigProvider.setWorkerSrc("/assets/pdf.js-viewer/pdf.worker.js");
  pdfjsViewerConfigProvider.setCmapDir("/assets/pdf.js-viewer/cmaps");
  pdfjsViewerConfigProvider.setImageDir("/assets/pdf.js-viewer/images");

  pdfjsViewerConfigProvider.disableWorker();
  pdfjsViewerConfigProvider.setVerbosity("infos");  // "errors", "warnings" or "infos"
});
