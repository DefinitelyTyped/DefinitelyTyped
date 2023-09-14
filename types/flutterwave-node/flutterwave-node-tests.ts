import Ravepay from "flutterwave-node";

(async () => {
    const rave = new Ravepay("PUBLICK_KEY", "SECRET_KEY", false);

    // Account
    await rave.Account.charge({
        amount: "10",
        email: "x@gmail.com",
        txRef: "xxx",
        device_fingerprint: "xxx",
        accountbank: "xxx",
        accountnumber: "xxx",
    });
    await rave.Account.validate({ otp: "xxx", transactionreference: "xxx" });

    // BillsPayment
    await rave.BillsPayment.bills({
        service: "xxx",
        service_channel: "xxx",
        service_method: "xxx",
        service_version: "xxx",
    });

    // Bvn
    await rave.Bvn.verification({ bvn: "xxx" });

    // Card
    await rave.Card.charge({ token: "xxx", currency: "xxx", amount: "xxx", email: "xxx", txRef: "xxx" });
    await rave.Card.validate({ transaction_reference: "xxx" });

    // CustomRequest
    await rave.CustomRequest.custom("xxx", {});

    // Ebills
    await rave.Ebills.create({
        numberofunits: "xx",
        narration: "xx",
        currency: "xxx",
        country: "xxx",
        custom_business_name: "xxx",
        amount: "xxx",
        email: "xx",
        txRef: "xxx",
        IP: "xxx",
        phonenumber: "xxx",
    });

    await rave.Ebills.update({ reference: "xxx", amount: "xxx" });
})();
