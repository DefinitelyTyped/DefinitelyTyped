cadesplugin.then(async () => {
    if ("CreateObjectAsync" in cadesplugin) {
        const pluginAsync: CADESPluginAsync = cadesplugin;
        const oAbout = await pluginAsync.CreateObjectAsync("CAdESCOM.About");
        const oVersion = await oAbout.CSPVersion();
        await oVersion.toString();
    }
    if ("CreateObject" in cadesplugin) {
        const pluginSync: CADESPluginSync = cadesplugin;
        pluginSync.CreateObject("CAdESCOM.About").CSPVersion().toString();
    }
});
