import Reddit = require("reddit");

interface Response {
    status: number;
    name: string;
    type: boolean;
}

interface Request {
    postId: number;
}

(async () => {
    const creds: Reddit.Credentials = {
        username: "username",
        password: "password",
        appId: "appId",
        appSecret: "appSecret",
    };

    creds.userAgent = "userAgent";

    // $ExpectType string
    creds.appId;

    // $ExpectType Reddit
    const reddit = new Reddit(creds);

    // @ts-expect-error
    const reddit1 = new Reddit("test");

    const request: Request = {
        postId: 5,
    };

    // $ExpectType Promise<Response>
    reddit.get<Response>("link");

    // $ExpectType Promise<string>
    reddit.get<string>("link");

    // $ExpectType Promise<number>
    reddit.get<number>("link");

    // $ExpectType number
    (await reddit.delete<Response>("link")).status;

    // $ExpectType number
    (await reddit.put<Response, Request>("link", request)).status;

    // $ExpectType string
    (await reddit.get<Response>("link")).name;

    // $ExpectType boolean
    (await reddit.get<Response>("link")).type;

    // $ExpectType Response
    await reddit.patch<Response, Request>("link", request);

    // $ExpectType void
    await reddit.post<void, Request>("link", request); // eslint-disable-line @typescript-eslint/no-invalid-void-type
});
