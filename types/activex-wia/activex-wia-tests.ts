// source -- https://msdn.microsoft.com/en-us/library/windows/desktop/ms630826(v=vs.85).aspx

// Convert a file
let commonDialog = new ActiveXObject('WIA.CommonDialog');
let img = commonDialog.ShowAcquireImage();

// when DefinitelyTyped supports Typescript 2.4 -- end of July 2017, replace these:
let jpegFormatID =  '{B96B3CAE-0728-11D3-9D7B-0000F81EF32E}';
if (img.FormatID !== jpegFormatID) {
    const ip = new ActiveXObject('WIA.ImageProcess');
    ip.Filters.Add(ip.FilterInfos.Item('Convert').FilterID);
    ip.Filters.Item(1).Properties.Item('FormatID').Value = jpegFormatID;
    img = ip.Apply(img);
}
// with this:
/*if (img.FormatID !== WIA.FormatID.wiaFormatJPEG) {
    let ip = new ActiveXObject('WIA.ImageProcess');
    ip.Filters.Add(ip.FilterInfos.Item('Convert').FilterID);
    ip.Filters.Item(1).Properties.Item('FormatID').Value = WIA.FormatID.wiaFormatJPEG;
    img = ip.Apply(img);
}*/

// Take a picture
let dev = commonDialog.ShowSelectDevice();
if (dev.Type === WIA.WiaDeviceType.CameraDeviceType) {
    // when DefinitelyTyped supports Typescript 2.4 -- end of July 2017, replace these:
    const commandID = '{AF933CAC-ACAD-11D2-A093-00C04F72DC3C}';
    const itm = dev.ExecuteCommand(commandID);

    // with this:
    // let itm = dev.ExecuteCommand(WIA.CommandID.wiaCommandTakePicture);
}

// Display detailed property information
dev = commonDialog.ShowSelectDevice();
let e = new Enumerator<WIA.Property>(dev.Properties);  // no foreach over ActiveX collections
e.moveFirst();
while (!e.atEnd()) {
    const p = e.item();
    let s = `${p.Name} (${p.PropertyID}) = `;
    if (p.IsVector) {
        s += '[vector of data]';
    } else {
        s += p.Value;
        if (p.SubType !== WIA.WiaSubType.UnspecifiedSubType) {
            if (p.Value !== p.SubTypeDefault) {
                s += ` (Default = ${p.SubTypeDefault})`;
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
                const count = p.SubTypeValues.Count;
                for (let i = 1; i <= count; i++) {
                    s += p.SubTypeValues.Item(i);
                    if (i < count) {
                        s += ', ';
                    }
                }
                s += ']';
                break;
            case WIA.WiaSubType.RangeSubType:
                s += ` [valid values in the range from ${p.SubTypeMin} to ${p.SubTypeMax} in increments of ${p.SubTypeStep}]`;
                break;
        }
    }

    WScript.Echo(s);
}
