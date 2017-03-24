//source -- https://msdn.microsoft.com/en-us/library/windows/desktop/ms630826(v=vs.85).aspx


//Convert a file
var commonDialog = new ActiveXObject('WIA.CommonDialog');
var img = commonDialog.ShowAcquireImage();
if (img.FormatID !== WIA.FormatID.wiaFormatJPEG) {
    var ip = new ActiveXObject('WIA.ImageProcess');
    ip.Filters.Add(ip.FilterInfos.Item('Convert').FilterID);
    ip.Filters.Item(1).Properties.Item('FormatID').Value = WIA.FormatID.wiaFormatJPEG;
    img = ip.Apply(img);
}


//Take a picture
var dev = commonDialog.ShowSelectDevice();
if (dev.Type === WIA.WiaDeviceType.CameraDeviceType) {
    var itm = dev.ExecuteCommand(WIA.CommandID.wiaCommandTakePicture);
}


//Display detailed property information
dev = commonDialog.ShowSelectDevice();
var e = new Enumerator<WIA.Property>(dev.Properties);  //no foreach over ActiveX collections
e.moveFirst();
while (!e.atEnd()) {
    var p = e.item();
    var s = p.Name + ' (' + p.PropertyID + ') = ';
    if (p.IsVector) {
        s += '[vector of data]';
    } else {
        s += p.Value;
        if (p.SubType !== WIA.WiaSubType.UnspecifiedSubType) {
            if (p.Value !== p.SubTypeDefault) {
                s += ' (Default = ' + p.SubTypeDefault + ')';
            }
        }
    }

    if (p.IsReadOnly) {
        s += ' [READ ONLY]';
    } else {
        switch (p.SubType) {
            case WIA.WiaSubType.FlagSubType:
            case WIA.WiaSubType.ListSubType:
                if (p.SubType === WIA.WiaSubType.FlagSubType) {
                    s += ' [valid flags include: ';
                } else {
                    s += ' [valid values include: ';
                }
                var count = p.SubTypeValues.Count;
                for (var i = 1; i <= count; i++) {
                    s += p.SubTypeValues.Item(i);
                    if (i < count) {
                        s += ', ';
                    }
                }
                s += ']';
                break;
            case WIA.WiaSubType.RangeSubType:
                s += ' [valid values in the range from ' + p.SubTypeMin + ' to ' + p.SubTypeMax + ' in increments of ' + p.SubTypeStep + ']';
                break;
        }
    }

    if (WScript) {
        WScript.Echo(s);
    } else if (window) {
        window.alert(s);
    }
}