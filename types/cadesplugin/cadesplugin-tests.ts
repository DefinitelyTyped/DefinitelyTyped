cadesplugin.then(async () => {
    if ("CreateObjectAsync" in cadesplugin) {
        const oAbout = await cadesplugin.CreateObjectAsync("CAdESCOM.About");
        const oVersion = await oAbout.CSPVersion();
        await oVersion.toString();
        await oAbout.toString();
    }
    if ("CreateObject" in cadesplugin) {
        cadesplugin.CreateObject("CAdESCOM.About").CSPVersion().toString();
    }
});
