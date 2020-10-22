const collectionToArray = <T>(col: any) => { // tslint:disable-line no-unnecessary-generics
    const results: T[] = [];
    const enumerator = new Enumerator<T>(col);
    enumerator.moveFirst();
    while (!enumerator.atEnd()) {
        results.push(enumerator.item());
        enumerator.moveNext();
    }
    return results;
};

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787925(v=vs.85).aspx
(() => {
    const enumUsers = (label: string) => {
        const volume = new ActiveXObject('Microsoft.DiskQuota');
        volume.Initialize(label, true);
        collectionToArray<DiskQuotaTypeLibrary.DIDiskQuotaUser>(volume).forEach(x => {
            // Use the QuotaUser object to retrieve or set one or more of the user's disk quota properties
        });
    };
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787916(v=vs.85).aspx
(() => {
    const volume = new ActiveXObject('Microsoft.DiskQuota');
    volume.Initialize('MYDISK', true);
    ActiveXObject.on(volume, 'OnUserNameChanged', ['pUser'], p => {
        // Code to handle the event.
    });
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787904(v=vs.85).aspx
(() => {
    const dqc = new ActiveXObject('Microsoft.DiskQuota');
    dqc.Initialize('MYDISK', true);
    const findName = (name: string) => {
        try {
            return dqc.FindUser(name);
        } catch { }
        try {
            return dqc.FindUser(dqc.TranslateLogonNameToSID(name));
        } catch { }
    };
})();
