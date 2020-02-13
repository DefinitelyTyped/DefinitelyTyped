namespace adoneTests.net.http.client {
    const {
        net: {
            http: {
                client
            }
        }
    } = adone;

    let bool: boolean;
    let num: number;
    let str: string;
    let buf: Buffer;
    let stream: nodestd.stream.Readable;

    namespace Client {
        const {
            Client
        } = client;

        new Client();
        new Client({});
        new Client({
            auth: {
                username: "a"
            }
        });
        new Client({
            auth: {
                password: "a"
            }
        });
        new Client({
            cancelToken: new client.CancelToken(() => {})
        });
        new Client({
            data: Buffer.from("hello")
        });
        new Client({
            data: "hello"
        });
        new Client({
            data: adone.fs.createReadStream(__filename)
        });
        new Client({
            data: new ArrayBuffer(10)
        });
        new Client({
            formData: {
                a: "string"
            }
        });
        new Client({
            formData: {
                a: ["string"]
            }
        });
        new Client({
            formData: {
                a: [adone.fs.createReadStream(__filename)]
            }
        });
        new Client({
            formData: {
                a: {
                    value: "string",
                    options: {}
                }
            }
        });
        new Client({
            formData: {
                a: {
                    value: "string",
                    options: {
                        contentType: "a"
                    }
                }
            }
        });
        new Client({
            formData: {
                a: {
                    value: "string",
                    options: {
                        filename: "a"
                    }
                }
            }
        });
        new Client({
            formData: {
                a: {
                    value: "string",
                    options: {
                        header: "a"
                    }
                }
            }
        });
        new Client({
            formData: {
                a: {
                    value: "string",
                    options: {
                        header: {
                            a: "a"
                        }
                    }
                }
            }
        });
        new Client({
            formData: {
                a: {
                    value: "string",
                    options: {
                        knownLength: 100500
                    }
                }
            }
        });
        new Client({
            formData: {
                a: [{
                    value: "string",
                    options: {
                        knownLength: 100500
                    }
                }]
            }
        });
        new Client({
            headers: {
                "User-Agent": "true"
            }
        });
        new Client({
            httpAgent: {}
        });
        new Client({
            httpsAgent: {}
        });
        new Client({
            maxContentLength: 100500
        });
        new Client({
            maxRedirects: 100500
        });
        new Client({
            method: "GET"
        });
        new Client({
            onUploadProgress(event) {
                bool = event.lengthComputable;
                num = event.loaded;
                num = event.total;
            }
        });
        new Client({
            params: {
                a: 1
            }
        });
        new Client({
            paramsSerializer(params: object) {
                return "asd";
            }
        });
        new Client({
            proxy: "socks5://localhost"
        });
        new Client({
            proxy: {
                protocol: "socks5",
                host: "127.0.0.1",
                port: 9000,
                auth: {
                    username: "hello",
                    password: "world"
                }
            }
        });

        new Client({
            rejectUnauthorized: true
        });
        new Client({
            responseEncoding: "CP1251"
        });
        new Client({
            responseType: "stream"
        });
        new Client({
            timeout: 100
        });
        new Client({
            transformRequest: [(data, headers, config) => {
                return data;
            }]
        });
        new Client({
            transformResponse: [(data, headers, config) => {
                return data;
            }]
        });
        new Client({
            transport: adone.std.http
        });
        new Client({
            validateStatus(status) {
                return status > 100;
            }
        });
        new Client({
            xsrfCookieName: "a"
        });
        new Client({
            xsrfHeaderName: "a"
        });

        const req = new Client();

        namespace request {
            req.request({
                method: "GET"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                const len = resp.headers["content-length"];
                if (!adone.is.undefined(len)) {
                    str = len;
                }
                const data = resp.data;
                if (!adone.is.object(data)) {
                    str = data;
                }
            });
            req.request({
                method: "GET",
                responseType: "string"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                str = resp.data;
            });
            req.request({
                method: "GET",
                responseType: "buffer"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                buf = resp.data;
            });
            req.request({
                method: "GET",
                responseType: "stream"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                stream = resp.data;
            });
        }

        namespace get {
            req.get("url").then((resp) => {
                num = resp.status;
                str = resp.statusText;
                const data = resp.data;
                if (!adone.is.object(data)) {
                    str = data;
                }
            });
            req.get("url", {
                responseType: "string"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                str = resp.data;
            });
            req.get("url", {
                responseType: "buffer"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                buf = resp.data;
            });
            req.get("url", {
                responseType: "stream"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                stream = resp.data;
            });
        }

        namespace post {
            req.post("url", {}).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                const data = resp.data;
                if (!adone.is.object(data)) {
                    str = data;
                }
            });
            req.post("url", {}, {
                responseType: "string"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                str = resp.data;
            });
            req.post("url", {}, {
                responseType: "buffer"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                buf = resp.data;
            });
            req.post("url", {}, {
                responseType: "stream"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                stream = resp.data;
            });
        }

        namespace put {
            req.put("url", {}).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                const data = resp.data;
                if (!adone.is.object(data)) {
                    str = data;
                }
            });
            req.put("url", {}, {
                responseType: "string"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                str = resp.data;
            });
            req.put("url", {}, {
                responseType: "buffer"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                buf = resp.data;
            });
            req.put("url", {}, {
                responseType: "stream"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                stream = resp.data;
            });
        }

        namespace patch {
            req.patch("url", {}).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                const data = resp.data;
                if (!adone.is.object(data)) {
                    str = data;
                }
            });
            req.patch("url", {}, {
                responseType: "string"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                str = resp.data;
            });
            req.patch("url", {}, {
                responseType: "buffer"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                buf = resp.data;
            });
            req.patch("url", {}, {
                responseType: "stream"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                stream = resp.data;
            });
        }

        namespace _delete {
            req.delete("url").then((resp) => {
                num = resp.status;
                str = resp.statusText;
                const data = resp.data;
                if (!adone.is.object(data)) {
                    str = data;
                }
            });
            req.delete("url", {
                responseType: "string"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                str = resp.data;
            });
            req.delete("url", {
                responseType: "buffer"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                buf = resp.data;
            });
            req.delete("url", {
                responseType: "stream"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                stream = resp.data;
            });
        }

        namespace options {
            req.options("url").then((resp) => {
                num = resp.status;
                str = resp.statusText;
                const data = resp.data;
                if (!adone.is.object(data)) {
                    str = data;
                }
            });
            req.options("url", {
                responseType: "string"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                str = resp.data;
            });
            req.options("url", {
                responseType: "buffer"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                buf = resp.data;
            });
            req.options("url", {
                responseType: "stream"
            }).then((resp) => {
                num = resp.status;
                str = resp.statusText;
                stream = resp.data;
            });
        }
    }

    namespace request {
        client.request.get("htllo").then((x) => {
            num = x.status;
        });
    }

    namespace create {
        client.create();
        client.create({});
        const req = client.create({
            headers: {
                "User-Agent": "Hello"
            }
        });
        req.get("hello world").then((x) => {
            num = x.status;
        });
    }

    namespace cancel {
        const {
            Cancel,
            CancelToken,
            isCancel
        } = client;

        new CancelToken((s: string) => 123).promise.then((x) => {
            str = x.message;
        });
        new CancelToken((s: string) => 123).reason;
        CancelToken.source().token.promise;
        CancelToken.source().cancel("hello");

        new Cancel("hello").message;

        const a: any = 2;

        if (isCancel(a)) {
            str = a.message;
        }
    }
}
