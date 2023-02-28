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
    (response, status, message) => {
        const responseTest = response;
        const statusTest = status;
        const messageTest = message;
    },
);

kavenegar.SendArray(
    {
        message: '["کاوه نگار", "وب سرویس کاوه نگار"]',
        sender: '["10008445","10008445"]',
        receptor: '["09123456789","09123456781"]',
    },
    (response, status, message) => {
        const responseMessage = message;
    },
);

kavenegar.Status(
    {
        messageid: '85463238,85463239',
    },
    (response, status, message) => {
        const messageId = response[0].messageid;
        const responseStatus = response[0].status;
    },
);

kavenegar.StatusLocalMessageid(
    {
        localid: '450',
    },
    (response, status, message) => {
        const messageId = response[0].messageid;
        const localId = response[0].localid;
        const statusText = response[0].statustext;
    },
);

kavenegar.Select(
    {
        messageid: '989405630,31031213,31031214',
    },
    (response, status, message) => {
        const messageId = response[0].messageid;
        const statusText = response[0].statustext;
        const cost = response[0].cost;
    },
);

kavenegar.SelectOutbox(
    {
        startdate: 1644822633,
        enddate: undefined,
    },
    (response, status, message) => {
        const responseTest = response;
    },
);

kavenegar.LatestOutbox({ pagesize: 12, sender: '10004535' }, (response, status, message) => {
    const responseTest = response[0];
});

kavenegar.Cancel({ messageid: '989405630,31031213,31031214' }, (response, status, message) => {
    const responseTest = response;
});

kavenegar.Receive({ linenumber: '30002225', isread: 1 }, (response, status, message) => {
    const responseTest = response;
});

kavenegar.CountInbox(
    {
        startdate: 1644862633,
        enddate: 1410570000,
        linenumber: '10008284',
        isread: 1,
    },
    (response, status, message) => {
        const responseTest = response[0];
    },
);

kavenegar.VerifyLookup(
    {
        receptor: '09361234567',
        token: '852596',
        template: 'registerverify',
    },
    (response, status, message) => {
        const responseTest = response;
    },
);

kavenegar.CallMakeTTS(
    {
        receptor: '09361234567',
        message: 'خدمات پیام کوتاه کاوه نگار',
    },
    (response, status, message) => {
        const responseTest = response;
    },
);

kavenegar.AccountInfo({}, (response, status, message) => {
    const responseTest = response;
    const remainCredit = response.remaincredit;
    const expireDate = response.expiredate;
    const type = response.type;
});

kavenegar.AccountConfig({ apilogs: 'justfaults', defaultsender: '10004535' }, (response, status, message) => {
    const responseTest = response;
});
