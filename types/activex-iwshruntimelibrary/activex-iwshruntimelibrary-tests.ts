/// <reference types="windows-script-host" />

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

const wshn = new ActiveXObject('WScript.Network');

// https://msdn.microsoft.com/en-us/library/s6wt333f(v=vs.84).aspx
// https://msdn.microsoft.com/en-us/library/wck0hkd7(v=vs.84).aspx
// https://msdn.microsoft.com/en-us/library/tte130y1(v=vs.84).aspx
// https://msdn.microsoft.com/en-us/library/3fxhka75(v=vs.84).aspx
{
    WScript.Echo('Domain = ' + wshn.UserDomain);
    WScript.Echo('Computer Name = ' + wshn.ComputerName);
    WScript.Echo('User Name = ' + wshn.UserName);
}

// https://msdn.microsoft.com/en-us/library/zsdh7hkb(v=vs.84).aspx
wshn.AddWindowsPrinterConnection('\\\\printserv\\DefaultPrinter');

// https://msdn.microsoft.com/en-us/library/kxsdca3c(v=vs.84).aspx
wshn.AddPrinterConnection("LPT1", "\\\\Server\\Print1");

// https://msdn.microsoft.com/en-us/library/t9zt39at(v=vs.84).aspx
// https://msdn.microsoft.com/en-us/library/zhds6k80(v=vs.84).aspx
{
    const drives = wshn.EnumNetworkDrives();
    const printers = wshn.EnumPrinterConnections();
    WScript.Echo("Network drive mappings:");
    for (let i = 0; i < drives.length; i += 2) {
        WScript.Echo(`Drive ${drives.Item(i)} = ${drives.Item(i + 1)}`);
    }
    WScript.Echo('');
    WScript.Echo("Network printer mappings:");
    for (let i = 0; i < printers.length; i += 2) {
        WScript.Echo(`Port ${printers.Item(i)} = ${printers.Item(i + 1)}`);
    }
}

// https://msdn.microsoft.com/en-us/library/8kst88h6(v=vs.84).aspx
wshn.MapNetworkDrive('E:', '\\\\Server\\Public');

// https://msdn.microsoft.com/en-us/library/d16d7wbf(v=vs.84).aspx
wshn.RemoveNetworkDrive('E:');

// https://msdn.microsoft.com/en-us/library/tsbh2yy7(v=vs.84).aspx
wshn.RemovePrinterConnection('\\\\PRN-CORP1\\B41-4523-A', true, true);

// https://msdn.microsoft.com/en-us/library/2ccwwdct(v=vs.84).aspx
{
    const printerPath = "\\\\research\\library1";
    wshn.AddWindowsPrinterConnection(printerPath);
    wshn.SetDefaultPrinter(printerPath);
}
