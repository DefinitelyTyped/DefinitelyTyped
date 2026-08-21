import uma from "umtrack-wx";

uma.init({
    appKey: "123123",
    useOpenid: true,
    autoGetOpenid: false,
    debug: false,
});

uma.setOpenid("123123");

uma.setUnionid("321321");

uma.trackEvent("dpit", {
    startTime: "2020-04-04 11:11",
});

uma.trackEvent("pv");
