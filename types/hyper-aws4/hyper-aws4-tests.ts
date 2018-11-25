import { sign, Request } from "hyper-aws4";

const signOption: Request = {
    url: "https://us-west-1.hyper.sh/version",
    method: "GET",
    credential: {
        accessKey: "6DPLADBPWYXDUVXLX34EJXBL",
        secretKey: "2ldD1Yz0nzATl9vvagBwYTjglXBjVOWU8gV8aMm5"
    }
};

sign(signOption);
