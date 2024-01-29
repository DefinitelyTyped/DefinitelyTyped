(async () => {
    const zwlog = new ZwLog({ _user_id: "用户 ID", _user_nick: "用户昵称" });
    zwlog.onReady(() => {
        zwlog.init();
        zwlog.sendPV({
            miniAppId: "2002308510",
            miniAppName: "小程序名称",
            pageId: "页面 ID",
            pageName: "页面名称",
            t2: 0.3,
            t0: 0.3,
            log_status: "02",
        });

        zwlog.cbQueue.push(() => ({ foo: "bar" }));
        zwlog.metaInfo;
        zwlog.readyFlag;
        zwlog.record("__CLICK__", "CLK", { dd: "gg" });
        zwlog.sendAliMonitor({ name: "cj", obj: { title: "余额查询", c1: "taSR", url: "/pages/index/" } });
    });
});
