/// <reference types="windows-script-host" />

// Note -- running these tests under cscript requires some ES5 polyfills

const collectionToArray = <T>(col: { Item(key: any): T }): T[] => {
    const results: T[] = [];
    const enumerator = new Enumerator<T>(col);
    enumerator.moveFirst();
    while (!enumerator.atEnd()) {
        results.push(enumerator.item());
        enumerator.moveNext();
    }
    return results;
};

WScript.Echo('Hello, world');
WScript.Quit();

// source -- https://msdn.microsoft.com/en-us/library/windows/desktop/ms630826(v=vs.85).aspx
{
    const cd = new ActiveXObject('WIA.CommonDialog');
    const dm = new ActiveXObject('WIA.DeviceManager');

    // Download new items as they are created
    {
        dm.RegisterEvent(WIA.EventID.wiaEventItemCreated, WIA.Miscellaneous.wiaAnyDeviceID);
        ActiveXObject.on(dm, 'OnEvent', ['EventID', 'DeviceID', 'ItemID'], x => {
            const dev = dm.DeviceInfos(x.DeviceID).Connect();
            const itm = dev.GetItem(x.ItemID);
            const img = cd.ShowTransfer(itm);
            const v = img.FileData;
            // Picture type not available in Javascript
        });
    }

    // Convert a file
    {
        let img = cd.ShowAcquireImage();
        if (img && img.FormatID !== WIA.FormatID.wiaFormatJPEG) {
            const ip = new ActiveXObject('WIA.ImageProcess');
            ip.Filters.Add(ip.FilterInfos('Convert').FilterID);
            ip.Filters(1).Properties('FormatID').Value = WIA.FormatID.wiaFormatJPEG;
            img = ip.Apply(img);
        }
    }

    // Take a picture
    {
        const dev = cd.ShowSelectDevice();
        if (dev && dev.Type === WIA.WiaDeviceType.CameraDeviceType) {
            const item = dev.ExecuteCommand(WIA.CommandID.wiaCommandTakePicture);
        }
    }

    // Display detailed property information
    {
        const dev = cd.ShowSelectDevice();
        if (dev) {
            for (const p of collectionToArray(dev.Properties)) {
                let s = `${p.Name} (${p.PropertyID}) = `;
                if (p.IsVector) {
                    s += '[vector of data]';
                } else {
                    s += p.Value;
                    if (p.SubType !== WIA.WiaSubType.UnspecifiedSubType
                        && p.Value !== p.SubTypeDefault) {
                        s += ` (Default = ${p.SubTypeDefault})`;
                    }
                }

                if (p.IsReadOnly) {
                    s += ' [READ ONLY]';
                } else {
                    switch (p.SubType) {
                        case WIA.WiaSubType.FlagSubType:
                        case WIA.WiaSubType.ListSubType:
                            const count = p.SubTypeValues.Count;
                            const items: string[] = [];
                            for (let i = 1; i <= count; i++) {
                                items.push(p.SubTypeValues(i));
                            }
                            const descr = p.SubType === WIA.WiaSubType.FlagSubType ? 'flags' : 'values';
                            s += ` [valid ${descr} include: ${items.join(',')}]`;
                            break;
                        case WIA.WiaSubType.RangeSubType:
                            s += ` [valid values in the range from ${p.SubTypeMin} to ${p.SubTypeMax} in increments of ${p.SubTypeStep}]`;
                            break;
                    }
                }

                WScript.Echo(s);
            }
        }
    }

    // Determine whether the selected device is a camera
    {
        const dev = cd.ShowSelectDevice();
        if (dev && dev.Type === WIA.WiaDeviceType.CameraDeviceType) {
            WScript.Echo('Selectd device is a camera');
        }
    }

    // Count root - level images for transfer
    {
        const dev = cd.ShowSelectDevice();
        if (dev) {
            const count = collectionToArray(dev.Items).filter(f => {
                const imageFlag = WIA.WiaItemFlag.ImageItemFlag;
                return (f.Properties('Item Flags').Value & imageFlag) === imageFlag;
            }).length;
            WScript.Echo(`Selected device has ${count} top-level images`);
        }
    }

    // Display all imagefile properties
    {
        const img = cd.ShowAcquireImage();
        if (img) {
            for (const p of collectionToArray(img.Properties)) {
                let contents = '';
                if (p.IsVector) {
                    contents = '[vector data not emitted]';
                } else if (p.Type === WIA.WiaImagePropertyType.RationalImagePropertyType) {
                    contents = `${p.Value.Nunerator}/${p.Value.Denominator}`;
                } else if (p.Type === WIA.WiaImagePropertyType.StringImagePropertyType) {
                    contents = `"${p.Value}"`;
                } else {
                    contents = p.Value;
                }
                WScript.Echo(`${p.Name} (${p.PropertyID}) = ${contents}`);
            }
        }
    }

    // Determine the event type
    {
        const dev = cd.ShowSelectDevice();
        if (dev) {
            const actionEvent = WIA.WiaEventFlag.ActionEvent;
            for (const e of collectionToArray(dev.Events)) {
                const msg = (e.Type & actionEvent) === actionEvent ?
                    `${e.Name} is an Action event` :
                    `${e.Name} is not an Action event`;
                WScript.Echo(msg);
            }
        }
    }

    // Set rational numerator and denominator
    {
        const r = new ActiveXObject('WIA.Rational');
        r.Numerator = 1;
        r.Denominator = 3;
        WScript.Echo(`1/3 = ${r.Value}`);
        r.Numerator = 2;
        r.Denominator = 6;
        WScript.Echo(`2/6 = ${r.Value}`);
    }

    // Create and initialize a vector object
    {
        const v: WIA.Vector<number> = new ActiveXObject('WIA.Vector');
        v.SetFromString('This is a test', true, false);

        // when iterated using Enumerator / collectionToArray, each item comes back as an Automation Byte
        // https://stackoverflow.com/questions/48757982/wia-vector-returns-something-which-is-not-a-number
        // so the following falls, because fromCharCode is expecting a number
        // collectionToArray(v).forEach(item => WScript.Echo(String.fromCharCode(item)));

        // Instead, use the Vector's Item method, or the Vector's default property:
        for (let i = 1; i <= v.Count; i++) {
            WScript.Echo(String.fromCharCode(v(i)));
        }
    }

    // Display detailed image information
    {
        const img = new ActiveXObject('WIA.ImageFile');
        img.LoadFile('c:\\windows\\web\\Screen\\img102.jpg');

        let s = `
Width = ${img.Width}
Height = ${img.Height}
Depth = ${img.PixelDepth}
Horizontal resolution = ${img.HorizontalResolution}
Vertical resolution = ${img.VerticalResolution}
Frame count = ${img.FrameCount}}
        `.trim();

        let arr: string[] = [];

        if (img.IsIndexedPixelFormat) { arr.push('Pixel data contains palette indexes'); }
        if (img.IsAlphaPixelFormat) { arr.push('Pixel data has alpha information'); }
        if (img.IsExtendedPixelFormat) { arr.push('Pixel data has extended color information (16 bit/channel)'); }
        if (img.IsAnimated) { arr.push('Image is animated'); }

        const propertyTests = [40091, 40092, 40093, 40094, 40095]
            .filter(n => img.Properties.Exists(n))
            .map(n => {
                const prp = img.Properties(n);
                return `${prp.Name} = ${prp.Value.String}`;
            });
        arr = arr.concat(propertyTests);

        if (arr.length) {
            s += '\n' + arr.join('\n');
        }

        WScript.Echo(s);
    }

    // Create an imageprocess object and enumerate filters
    {
        const ip = new ActiveXObject('WIA.ImageProcess');
        for (const fi of collectionToArray(ip.FilterInfos)) {
            const s = [
                fi.Name,
                new Array(51).join('='),
                fi.Description
            ].join('\n');
            WScript.Echo(s);
        }
    }

    // Create an imageprocess object and create one of each available filter
    {
        const ip = new ActiveXObject('WIA.ImageProcess');

        const stringValue = (v: any) => {
            if (typeof v === 'string') { return `"${v}"`; }
            return v;
        };

        const listValues = (v: any) => collectionToArray(v).join(', ');

        const listProperties = (filter: WIA.Filter) => {
            let s = [
                `${filter.Name} (${filter.FilterID})`,
                new Array(51).join('='),
                filter.Description,
                new Array(51).join('=')
            ].map(line => line + '\n').join('');

            s += collectionToArray(filter.Properties).map(p => {
                let contents: string;

                switch (typeof p.Value) {
                    // these case clauses replace the IsObject function in VB6/VBScript
                    case 'boolean':
                    case 'string':
                    case 'number':
                        contents = stringValue(p.Value);
                    default:
                        switch (p.SubType) {
                            case WIA.WiaSubType.FlagSubType:
                                contents = ` // [valid values formed by using the OR operator with the following bit flags: ${listValues(p.SubTypeValues)}]`;
                                break;
                            case WIA.WiaSubType.ListSubType:
                                contents = ` // [valid values from the following list: ${listValues(p.SubTypeValues)}]`;
                                break;
                            case WIA.WiaSubType.RangeSubType:
                                contents = ` // [valid values between ${p.SubTypeMin} and ${p.SubTypeMax}, with a step of ${p.SubTypeStep}]`;
                                break;
                            default:
                                contents = '';
                                break;
                        }
                }

                return `ip.Filters(1).Properties("${p.Name}") = ${contents}`;
            }).join('\n');

            WScript.Echo(s);
        };

        for (const fi of collectionToArray(ip.FilterInfos)) {
            ip.Filters.Add(fi.FilterID);
            listProperties(ip.Filters(1));
            ip.Filters.Remove(1);
        }
    }

    // List the supported transfer formats
    {
        const stringFormat = (fld: string) => {
            switch (fld) {
                case WIA.FormatID.wiaFormatBMP: return 'BMP';
                case WIA.FormatID.wiaFormatPNG: return 'PNG';
                case WIA.FormatID.wiaFormatGIF: return 'GIF';
                case WIA.FormatID.wiaFormatJPEG: return 'JPEG';
                case WIA.FormatID.wiaFormatTIFF: return 'TIFF';
                default: return 'Unknown';
            }
        };

        const dev = cd.ShowSelectDevice();
        const items = dev && cd.ShowSelectItems(dev, WIA.WiaImageIntent.UnspecifiedIntent, WIA.WiaImageBias.MaximizeQuality, true);
        if (items) {
            WScript.Echo(collectionToArray(items(1).Formats).map(stringFormat).join(', '));
        }
    }

    // Enumerate supported commands in commands collection
    {
        const dev = cd.ShowSelectDevice();
        if (dev && collectionToArray(dev.Commands).some(dc => dc.CommandID === WIA.CommandID.wiaCommandTakePicture)) {
            WScript.Echo('Selected device supports the TakePicture command');
        }
    }

    // Enumerate root - level items and display their names
    {
        const dev = cd.ShowSelectDevice();
        if (dev) {
            for (const item of collectionToArray(dev.Items)) {
                let s: string = item.Properties("Item Name").Value;
                if (item.Properties.Exists("Item Time Stamp")) {
                    const v: WIA.Vector = item.Properties("Item Time Stamp").Value;
                    if (v.Count === 8) { s += ` (${v.Date})`; }
                }
                WScript.Echo(s);
            }
        }
    }

    // Determine the number of items returned by ShowSelectItems
    {
        const dev = cd.ShowSelectDevice();
        const items = dev && cd.ShowSelectItems(dev, WIA.WiaImageIntent.UnspecifiedIntent, WIA.WiaImageBias.MaximizeQuality, true);
        if (items) {
            WScript.Echo(`You selected ${items.Count} items`);
        }
    }

    // Enumerate all the supported events for the selected device
    {
        const dev = cd.ShowSelectDevice();
        if (dev) {
            const msg = collectionToArray(dev.Events)
                .map(e => `\n${e.Name} (${e.EventID}): ${e.Description}`)
                .join('');
            WScript.Echo('The selected device supports the following events: ' + msg);
        }
    }

    // List all available devices by name and deviceid
    for (const di of collectionToArray(dm.DeviceInfos)) {
        const name: string = di.Properties("Name").Value;
        WScript.Echo(`${name} (${di.DeviceID})`);
    }

    // Display all the properties for the selected device
    {
        const dev = cd.ShowSelectDevice();
        if (dev) {
            for (const p of collectionToArray(dev.Properties)) {
                const name = `${p.Name} (${p.PropertyID})`;
                let contents: string;
                if (p.IsVector) {
                    contents = '[vector of data]';
                } else if (p.Type === WIA.WiaPropertyType.StringPropertyType) {
                    contents = `"${p.Value}"`;
                } else {
                    contents = p.Value;
                }
                WScript.Echo(`${name} = ${contents}`);
            }
        }
    }

    // Enumerate the supported commands
    {
        const dev = cd.ShowSelectDevice();
        const items = dev && cd.ShowSelectItems(dev, WIA.WiaImageIntent.UnspecifiedIntent, WIA.WiaImageBias.MaximizeQuality, true);
        if (items) {
            const msg = collectionToArray(items(1).Commands)
                .map(c => `${c.Name}: ${c.Description}\n`)
                .join('');
            WScript.Echo(`The selected item supports the following commands:\n${msg}`);
        }
    }

    // Create an imagefile object that contains a blank page
    {
        // This fails with the error: `The Vector's Type is not compatible with this operation`
        /*const c = 0xFF0000FF;
        const v: WIA.Vector<number> = new ActiveXObject('WIA.Vector');
        for (let i = 0; i < 4; i++) {
            v.Add(c);
        }
        const img = v.ImageFile(2, 2);
        img.SaveFile('C:\\test.' + img.FileExtension);*/
    }

    interface WshArgumentsBase<TKey = number | string> {
        Item(index: TKey): string;
        (index: TKey): string;
        length: number;
        Count(): number;
    }

    interface WshArguments extends WshArgumentsBase {  // not sure if WshArguments takes a string as well, or only a number
        Named: WshArgumentsBase<string>;
        Unnamed: WshArgumentsBase<number>;
        ShowUsage(): void;
    }

    // Implement a windows script host script that runs automatically
    {
        const args = collectionToArray(WScript.Arguments as WshArguments)
            .map(arg => arg.toLowerCase());

        switch (args.length) {
            case 1:
            case 2:
                const command = `${WScript.FullName} "${WScript.ScriptFullName}" connect`;
                const name = 'QuickTransfer';
                const title = 'Quick Scripting Transfer';
                const icon = `${WScript.FullName}, 0`;
                const eventID = WIA.EventID.wiaEventDeviceConnected;
                const deviceID = args.length === 2 ? args[1] : WIA.Miscellaneous.wiaAnyDeviceID;

                if (args[0] === 'register') {
                    WScript.Echo('Registering event handler');
                    dm.RegisterPersistentEvent(command, name, title, icon, eventID, deviceID);
                    WScript.Quit();
                } else if (args[0] === 'unregister') {
                    WScript.Echo('Unregistering event handler');
                    dm.UnregisterPersistentEvent(command, name, title, icon, eventID, deviceID);
                    WScript.Quit();
                }
                break;
            case 3:
                if (args[0] === 'connect') {
                    const deviceID = args[1].substr(12);
                    const device = dm.DeviceInfos(deviceID).Connect();
                    for (const item of collectionToArray(device.Items)) {
                        const img = item.Transfer();
                        img.SaveFile(`C:\\${item.Properties('Item Name').Value}.${img.FileExtension}`);

                        // Uncomment the following lines to remove the picture from the camera after transfer
                        for (let i = 1; i < device.Items.Count; i++) {
                            const item2 = device.Items(i);
                            if (item2.ItemID !== item.ItemID) { continue; }
                            try {
                                // some cameras don't support deleting a picture
                                device.Items.Remove(i);
                            } catch (error) {
                                WScript.Echo(error);
                            }
                        }
                    }
                    WScript.Quit();
                }
                break;
        }

        const usage = `
Usage:

To register, type:

    ${WScript.ScriptName} register [<device id>]

To unregister, type:

    ${WScript.ScriptName} unregister [<device id>]

Available device ids:
${collectionToArray(dm.DeviceInfos)
                .map(device => `${device.DeviceID} '${device.Properties("Name").Value}'`)
                .join('\n')}
            `.trim();

        WScript.Echo(usage);
    }

    // Count the number of child items available for transfer
    {
        const device = cd.ShowSelectDevice();
        const items = device && cd.ShowSelectItems(device, WIA.WiaImageIntent.UnspecifiedIntent, WIA.WiaImageBias.MaximizeQuality, true);
        const item = items && items(1);
        if (item) {
            const count = collectionToArray(item.Items).filter(childItem => {
                const flags = childItem.Properties('Item Flags').Value as number;
                return (flags & WIA.WiaItemFlag.TransferItemFlag) === WIA.WiaItemFlag.TransferItemFlag;
            }).length;
            WScript.Echo(`Selected device has ${count} child items that can be transferred.`);
        }
    }

    // Use a vector object
    {
        const v: WIA.Vector<number | string> = new ActiveXObject('WIA.Vector');
        v.Add(1);
        v.Add(42);
        v.Add(3);
        v.Remove(1);
        v.Remove(2);
        WScript.Echo(`v(1) = ${v(1)}`);
        v.Clear();
        v.Add('This');
        v.Add('is');
        v.Add('Cool');
        v.Remove(1);
        v.Remove(2);
        WScript.Echo(`v(1) = ${v(1)}`);
    }
}
