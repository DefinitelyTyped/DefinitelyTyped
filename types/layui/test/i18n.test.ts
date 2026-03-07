function testI18n() {
    const i18n = layui.i18n;
    i18n.config;
    i18n.set({
        locale: "zh-CN",
        messages: {
            "zh-CN": {
                code: {
                    copy: "复制",
                    copied: "已复制",
                },
                util: {
                    toDateString: {
                        meridiem(hours, minutes) {
                            return hours < 12 ? "AM" : "PM";
                        },
                    },
                },
            },
        },
    });

    i18n.translation("code.copy");
    i18n.$t("util.toDateString.meridiem");
    i18n.$t("laydate.months");
    i18n.$t("laypage.total", { total: 10 });
    i18n.$t("laypage.total", { total: 10 }, { locale: "en-US", default: "Total: {total}" });
    // never
    i18n.$t("custom");
}
