// source -- https://msdn.microsoft.com/en-us/library/windows/desktop/ms630826(v=vs.85).aspx

// Convert a file
let commonDialog = new ActiveXObject('WIA.CommonDialog');
let img = commonDialog.ShowAcquireImage();
if (img.FormatID !== WIA.FormatID.wiaFormatJPEG) {
    let ip = new ActiveXObject('WIA.ImageProcess');
    ip.Filters.Add(ip.FilterInfos.Item('Convert').FilterID);
    ip.Filters.Item(1).Properties.Item('FormatID').Value = WIA.FormatID.wiaFormatJPEG;
    img = ip.Apply(img);
}

// Take a picture
let dev = commonDialog.ShowSelectDevice();
if (dev.Type === WIA.WiaDeviceType.CameraDeviceType) {
    let itm = dev.ExecuteCommand(WIA.CommandID.wiaCommandTakePicture);
}

// Display detailed property information
dev = commonDialog.ShowSelectDevice();
let e = new Enumerator<WIA.Property>(dev.Properties);  // no foreach over ActiveX collections
e.moveFirst();
while (!e.atEnd()) {
    let p = e.item();
    let s = p.Name + ' (' + p.PropertyID + ') = ';
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
                let count = p.SubTypeValues.Count;
                for (let i = 1; i <= count; i++) {
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

    WScript.Echo(s);
}
