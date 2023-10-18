interface SMSMessageData {
    Message: string;
    Recipients: {
        "statusCode": number;
        "number": string;
        "status": "fulfilled" | "failed";
        "cost": string;
        "messageId": string;
    };
}

interface SMSOptions {
    to: string | string[];
    from: string;
    message: string;
}

interface SMS {
    /**
     * This is used to send SMSs to your clients/recipients.
     *
     * @param to The recipients' phone number.  e.g +2547********. Note it can either be a string or an array
     * @param from Your registered short code or alphanumeric, e.g. AFRICASTKNG.
     * @param message The message to be sent.
     */
    send: (options: SMSOptions) => Promise<SMSMessageData>;
    /**
     * This is used to send SMSs to your clients/recipients.
     *
     * @param to The recipients' phone number.  e.g +2547********. Note it can either be a string or an array
     * @param from Your registered short code or alphanumeric, e.g. AFRICASTKNG.
     * @param message The message to be sent.
     */
    sendBulk: (options: SMSOptions) => Promise<SMSMessageData>;
    createSubscription: (options: {
        shortCode: string;
        keyword: string;
        phoneNumber: string;
        checkoutToken: string;
    }) => Promise<{
        "description": "Success" | "Failed";
        "token": string;
    }>;
}

interface TOKEN {
    generateAuthToken: () => Promise<{
        "description": "Success" | "Failed";
        "token": string;
    }>;
    createCheckoutToken: (phoneNumber: string) => Promise<{
        description: "Success" | "Failed";
        token: string;
    }>;
}

interface AfricasTalking {
    SMS: SMS;
    TOKEN: TOKEN;
}

export = africastalking;

declare function africastalking(
    options: { username: string; apiKey: string },
): AfricasTalking;
