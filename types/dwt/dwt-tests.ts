// tslint:disable:jsdoc-format
// tslint:disable:max-line-length
// tslint:disable:no-irregular-whitespace

import Dynamsoft from 'dwt';
import { DeviceConfiguration } from 'dwt/WebTwain.Acquire';

function Dynamsoft_OnReady() {
    const DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    if (DWObject) {
        let count = DWObject.SourceCount;
        if (count === 0) {
            DWObject.CloseSourceManager();
            DWObject.ImageCaptureDriverType = 0;
            DWObject.OpenSourceManager();
            count = DWObject.SourceCount;
        }
    }
}

function acquireImage() {
    const DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    if (DWObject) {
        DWObject.SelectSourceByIndex(0); // Use method SelectSourceByIndex to avoid the 'Select Source' dialog
        DWObject.OpenSource();
        DWObject.IfDisableSourceAfterAcquire = true; // Scanner source will be disabled/closed automatically after the scan.
        DWObject.AcquireImage({}, () => { }, (settings: DeviceConfiguration, errorCode: number, errorString: string) => { DWObject.CloseSource(); });
    }
}

function registerEvent() {
    const DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    if (DWObject) {
        DWObject.RegisterEvent("OnPostTransfer", function () { });
        DWObject.RegisterEvent("OnPostLoad", function () { });
        DWObject.RegisterEvent("OnMouseClick", function () { });
        DWObject.RegisterEvent("OnTopImageInTheViewChanged", function (index: number) {
            DWObject.CurrentImageIndexInBuffer = index;
        });
    }
}

function editImage() {
    const DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    if (DWObject) {
        if (DWObject.HowManyImagesInBuffer > 0)
            DWObject.RotateLeft(DWObject.CurrentImageIndexInBuffer);
        if (DWObject.HowManyImagesInBuffer > 0)
            DWObject.RotateRight(DWObject.CurrentImageIndexInBuffer);
        if (DWObject.HowManyImagesInBuffer > 0)
            DWObject.Mirror(DWObject.CurrentImageIndexInBuffer);
        if (DWObject.HowManyImagesInBuffer > 0)
            DWObject.Flip(DWObject.CurrentImageIndexInBuffer);
    }
}

function showImageEditor() {
    const DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    if (DWObject) {
        DWObject.ShowImageEditor();
    }
}

function saveImage() {
    const DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    if (DWObject) {
        DWObject.ConvertToGrayScale(DWObject.CurrentImageIndexInBuffer);
        DWObject.SaveAsJPEG("DynamicWebTWAIN.jpg", DWObject.CurrentImageIndexInBuffer);
        DWObject.SaveAllAsMultiPageTIFF("DynamicWebTWAIN.tiff", () => { }, (errorCode: number, errorString: string) => { });
        DWObject.SaveAllAsPDF("DynamicWebTWAIN.pdf", () => { }, (errorCode: number, errorString: string) => { });
    }
}

function updateLargeViewer() {
    const DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    const DWObjectLargeViewer = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainerLargeViewer');
    if (DWObject) {
        DWObject.CopyToClipboard(DWObject.CurrentImageIndexInBuffer); // Copy the current image in the thumbnail to clipboard in DIB format.
        DWObjectLargeViewer.LoadDibFromClipboard(); // Load the image from Clipboard into the large viewer.
    }
}

function uploadImage() {
    const DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    if (DWObject) {
        DWObject.HTTPPort = 80;
        DWObject.IfSSL = false;
        DWObject.HTTPUploadThroughPost("www.dynamsoft.com", DWObject.CurrentImageIndexInBuffer, "upload", "tmp.jpg", () => { }, (errorCode: number, errorString: string) => { });
    }
}

function downloadImage() {
    const DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    if (DWObject) {
        DWObject.HTTPPort = 80;
        DWObject.HTTPDownload("www.dynamsoft.com", "img.png", () => { }, (errorCode: number, errorString: string) => { });
    }
}

function loadPDF() {
    const DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    if (DWObject) {
        DWObject.Addon.PDF.SetResolution(200);
        DWObject.Addon.PDF.SetConvertMode(1);
        DWObject.IfShowFileDialog = true;
        DWObject.LoadImageEx(" ", 5);
    }
}
