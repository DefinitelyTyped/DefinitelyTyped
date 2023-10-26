import AfricasTalking = require("africastalking");

const africastalking = AfricasTalking({
    apiKey: "apiKey",
    username: "username",
});

const SMS = async () => {
    const token = africastalking.TOKEN;
    const sms = africastalking.SMS;

    const sendSmsResult = await africastalking.SMS.send({
        to: "to",
        message: "message",
        from: "from",
    });

    const checkoutTokenResponse = await token.createCheckoutToken("phoneNumber");

    const options = {
        // Set your premium product shortCode and keyword
        shortCode: "shortCode",
        keyword: "keyword",
        phoneNumber: "+phoneNumber",
        checkoutToken: checkoutTokenResponse.token,
    };

    const res = await sms.createSubscription(options);
};

const VOICE = async () => {
    const voice = africastalking.VOICE;

    const result = await voice.call({
        callFrom: "+254711XXXYYY",
        callTo: ["+254711XXXZZZ", "+254711XXXPPP"],
    });
};
