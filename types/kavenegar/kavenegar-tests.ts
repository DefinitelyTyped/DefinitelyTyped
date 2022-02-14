import * as Kavenegar from 'kavenegar';

const kavenegar = Kavenegar.KavenegarApi({
    apikey: 'your api key',
});

kavenegar.Send(
    {
        message: 'خدمات پیام کوتاه کاوه نگار',
        sender: '10004346',
        receptor: '09123456789,09367891011',
    },
    (response, status) => {
        console.log(response);
        console.log(status);
    },
);

kavenegar.Send(
    {
        message: 'خدمات پیام کوتاه کاوه نگار',
        sender: '10004346',
        receptor: '09123456789',
    },
    (response, status, message) => {
        console.log(response, status, message);
    },
);

kavenegar.SendArray(
    {
        message: '["کاوه نگار", "وب سرویس کاوه نگار"]',
        sender: '["10008445","10008445"]',
        receptor: '["09123456789","09123456781"]',
    },
    (response, status, message) => {
        console.log(response, status, message);
    },
);

kavenegar.Status(
    {
        messageid: '85463238,85463239',
    },
    (response, status, message) => {
        console.log(response, status, message);
        console.log(response[0].messageid);
        console.log(response[0].status);
        console.log(response[0].statustext);
    },
);

kavenegar.StatusLocalMessageid(
    {
        localid: '450',
    },
    (response, status, message) => {
        console.log(response, status, message);
        console.log(response[0].messageid);
        console.log(response[0].localid);
        console.log(response[0].status);
        console.log(response[0].statustext);
    },
);

kavenegar.Select(
    {
        messageid: '989405630,31031213,31031214',
    },
    (response, status, message) => {
        console.log(response, status, message);
        console.log(response[0].messageid);
        console.log(response[0].status);
        console.log(response[0].statustext);
        console.log(response[0].cost);
    },
);

kavenegar.SelectOutbox(
    {
        startdate: 1644822633,
        enddate: 1644869633,
    },
    (response, status, message) => {
        console.log(response, status, message);
        console.log(response[0].messageid);
        console.log(response[0].status);
        console.log(response[0].statustext);
        console.log(response[0].cost);
    },
);

kavenegar.LatestOutbox({ pagesize: 12, sender: '10004535' }, (response, status, message) => {
    console.log(response, status, message);
    console.log(response[0].messageid);
    console.log(response[0].status);
    console.log(response[0].statustext);
    console.log(response[0].cost);
});

kavenegar.Cancel({ messageid: '989405630,31031213,31031214' }, (response, status, message) => {
    console.log(response, status, message);
    console.log(response[0].messageid);
    console.log(response[0].status);
    console.log(response[0].statustext);
});

kavenegar.Receive({ linenumber: '30002225', isread: 1 }, (response, status, message) => {
    console.log(response, status, message);
});

kavenegar.CountInbox(
    {
        startdate: 1644862633,
        enddate: 1410570000,
        linenumber: '10008284',
        isread: 1,
    },
    (response, status, message) => {
        console.log(response, status, message);
    },
);

kavenegar.VerifyLookup(
    {
        receptor: '09361234567',
        token: '852596',
        template: 'registerverify',
    },
    (response, status, message) => {
        console.log(response, status, message);
    },
);

kavenegar.CallMakeTTS(
    {
        receptor: '09361234567',
        message: 'خدمات پیام کوتاه کاوه نگار',
    },
    (response, status, message) => {
        console.log(response, status, message);
    },
);

kavenegar.AccountInfo({}, (response, status, message) => {
    console.log(response, status, message);
    console.log(response.remaincredit);
    console.log(response.expiredate);
    console.log(response.type);
});

kavenegar.AccountConfig({ apilogs: 'justfaults', defaultsender: '10004535' }, (response, status, message) => {
    console.log(response, status, message);
});
