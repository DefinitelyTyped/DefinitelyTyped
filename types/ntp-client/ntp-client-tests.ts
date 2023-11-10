import * as ntp from "ntp-client";

// `ntp.demo()` should accept any params passed to it
ntp.demo();
ntp.demo(1, 2, 3);
ntp.demo("hello", "world");
ntp.demo([1, 2, 3], { some: "param" });
ntp.demo(null);

// ntp.defaultNtpServer should be accessible
ntp.defaultNtpServer;

// ntp.defaultNtpPort should be accessible
ntp.defaultNtpPort;

// ntp.ntpReplyTimeout should be accessible
ntp.ntpReplyTimeout;

// ntp.getNetworkTime should accept params
ntp.getNetworkTime("pool.ntp.org", 123, (err, date) => {
    if (err != null) {
        date;
    }
});

// ntp.getNetworkTime should accept null for params
ntp.getNetworkTime(null, null, (err, date) => {
    if (err != null) {
        date;
    }
});

// ntp.getNetworkTime should accept undefined for params
ntp.getNetworkTime(undefined, undefined, (err, date) => {
    if (err != null) {
        date;
    }
});
