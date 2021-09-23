// Adapted from README
import stompit = require("stompit");

import fs = require("fs");
import path = require("path");
import { NetTcpConnectOptions } from "stompit/lib/connect";

{
    const connectOptions = {
        host: "localhost",
        port: 61613,
        connectHeaders: {
            host: "/",
            login: "username",
            passcode: "password",
            "heart-beat": "5000,5000"
        }
    };

    stompit.connect(
        connectOptions,
        (error, client) => {
            if (error) {
                console.log("connect error " + error.message);
                return;
            }

            const sendHeaders = {
                destination: "/queue/test",
                "content-type": "text/plain"
            };

            const frame = client.send(sendHeaders);
            frame.write("hello");
            frame.end();

            const subscribeHeaders = {
                destination: "/queue/test",
                ack: "client-individual"
            };

            client.subscribe(subscribeHeaders, (error, message) => {
                if (error) {
                    console.log("subscribe error " + error.message);
                    return;
                }

                message.readString("utf-8", (error, body) => {
                    if (error) {
                        console.log("read message error " + error.message);
                        return;
                    }

                    console.log("received message: " + body);

                    client.ack(message);

                    client.disconnect();
                });
            });
        }
    );
}

// Test connect(port: number, connectionListener: ConnectionListener) variant
{
    stompit.connect(
        12345,
        (error, client) => {
            if (error) {
                console.log("connect error " + error.message);
                return;
            }

            const sendHeaders = {
                destination: "/queue/test",
                "content-type": "text/plain"
            };

            const frame = client.send(sendHeaders);
            frame.write("hello");
            frame.end();

            const subscribeHeaders = {
                destination: "/queue/test",
                ack: "client-individual"
            };

            client.subscribe(subscribeHeaders, (error, message) => {
                if (error) {
                    console.log("subscribe error " + error.message);
                    return;
                }

                message.readString("utf-8", (error, body) => {
                    if (error) {
                        console.log("read message error " + error.message);
                        return;
                    }

                    console.log("received message: " + body);

                    client.ack(message);

                    client.disconnect();
                });
            });
        }
    );
}

// Test connect(host: string, connectionListener: ConnectionListener) variant
{
    stompit.connect(
        'localhost',
        (error, client) => {
            if (error) {
                console.log("connect error " + error.message);
                return;
            }

            const sendHeaders = {
                destination: "/queue/test",
                "content-type": "text/plain"
            };

            const frame = client.send(sendHeaders);
            frame.write("hello");
            frame.end();

            const subscribeHeaders = {
                destination: "/queue/test",
                ack: "client-individual"
            };

            client.subscribe(subscribeHeaders, (error, message) => {
                if (error) {
                    console.log("subscribe error " + error.message);
                    return;
                }

                message.readString("utf-8", (error, body) => {
                    if (error) {
                        console.log("read message error " + error.message);
                        return;
                    }

                    console.log("received message: " + body);

                    client.ack(message);

                    client.disconnect();
                });
            });
        }
    );
}

// Test connect(port: string, host: string, connectionListener: ConnectionListener) variant
{
    stompit.connect(
        123456,
        'localhost',
        (error, client) => {
            if (error) {
                console.log("connect error " + error.message);
                return;
            }

            const sendHeaders = {
                destination: "/queue/test",
                "content-type": "text/plain"
            };

            const frame = client.send(sendHeaders);
            frame.write("hello");
            frame.end();

            const subscribeHeaders = {
                destination: "/queue/test",
                ack: "client-individual"
            };

            client.subscribe(subscribeHeaders, (error, message) => {
                if (error) {
                    console.log("subscribe error " + error.message);
                    return;
                }

                message.readString("utf-8", (error, body) => {
                    if (error) {
                        console.log("read message error " + error.message);
                        return;
                    }

                    console.log("received message: " + body);

                    client.ack(message);

                    client.disconnect();
                });
            });
        }
    );
}

// Adapted from examples folder

// channel/consume_once.js
{
    // Configure connection management

    const servers = [
        {
            host: "localhost",
            port: 61613,
            connectHeaders: {
                host: "localhost",
                login: "admin",
                passcode: "password",
                "heart-beat": "100,100"
            }
        }
    ];

    const reconnectOptions = {
        maxReconnects: 1
    };

    const connections = new stompit.ConnectFailover(servers, reconnectOptions);

    // Log connection events

    connections.on("connecting", connector => {
        const address = connector.serverProperties.remoteAddress.transportPath;

        console.log("Connecting to " + address);
    });

    connections.on("error", error => {
        const connectArgs = error.connectArgs as NetTcpConnectOptions;
        const address = `${connectArgs.host}:${connectArgs.port}`;

        console.log(`Connection error to ${address}: ${error.message}`);
    });

    // Create channel, subscribe to a queue, and consume one message

    const channelFactory = new stompit.ChannelFactory(connections);

    channelFactory.channel((error, channel) => {
        if (error) {
            console.log("channel factory error: " + error.message);
            return;
        }

        const headers = {
            destination: "/queue/test",
            ack: "client-individual"
        };

        channel.subscribe(headers, (error, message, subscription) => {
            if (error) {
                console.log("subscribe error: " + error.message);
                return;
            }

            message.readString("utf8", (error, string) => {
                if (error) {
                    console.log("read message error: " + error.message);
                    return;
                }

                console.log("receive message: " + string);

                channel.ack(message);

                // We only want to consume one message so we unsubscribe now
                subscription.unsubscribe();
            });
        });
    });
}

// channel/send.js
{
    // Configure connection management

    const servers = [
        {
            host: "localhost",
            port: 61613,
            connectHeaders: {
                host: "localhost",
                login: "admin",
                passcode: "password"
            }
        }
    ];

    const reconnectOptions = {
        maxReconnects: 1
    };

    const connections = new stompit.ConnectFailover(servers, reconnectOptions);

    // Log connection events

    connections.on("connecting", connector => {
        const address = connector.serverProperties.remoteAddress.transportPath;

        console.log("Connecting to " + address);
    });

    connections.on("error", error => {
        const connectArgs = error.connectArgs as NetTcpConnectOptions;
        const address = `${connectArgs.host}:${connectArgs.port}`;

        console.log(`Connection error to ${address}: ${error.message}`);
    });

    // Create channel and send message

    const channelFactory = new stompit.ChannelFactory(connections);

    channelFactory.channel((error, channel) => {
        if (error) {
            console.log("channel factory error: " + error.message);
            return;
        }

        const headers = {
            destination: "/queue/test",
            "content-type": "text/plain",
            "content-length": 5
        };

        const body = "hello";

        channel.send(headers, body, error => {
            if (error) {
                console.log("send error: " + error.message);
                return;
            }

            console.log("sent message");
        });
    });
}

// client/consume_once.js
{
    const connectParams = {
        host: "localhost",
        port: 61613,
        connectHeaders: {
            host: "localhost",
            login: "admin",
            passcode: "password"
        }
    };

    stompit.connect(
        connectParams,
        (error, client) => {
            if (error) {
                console.log("Unable to connect: " + error.message);
                return;
            }

            const subscribeParams = {
                destination: "/queue/test",
                ack: "client-individual"
            };

            let consuming = false;

            client.subscribe(subscribeParams, (error, message) => {
                // Don't consume more than one message
                if (consuming) {
                    return;
                }

                consuming = true;

                const read = () => {
                    let chunk: any;
                    // tslint:disable-next-line:no-conditional-assignment
                    while (null !== (chunk = message.read())) {
                        process.stdout.write(chunk);
                    }
                };

                message.on("readable", read);

                message.on("end", () => {
                    client.ack(message);
                    client.disconnect();
                });
            });
        }
    );
}

// client/send_file.js
{
    const connectParams = {
        host: "localhost",
        port: 61613,
        connectHeaders: {
            host: "localhost",
            login: "admin",
            passcode: "password"
        }
    };

    stompit.connect(
        connectParams,
        (error, client) => {
            if (error) {
                console.log("Unable to connect: " + error.message);
                return;
            }

            const filename = path.dirname(module.filename) + "/data/input1.jpg";

            const fileStat = fs.statSync(filename);
            const contentLength = fileStat.size;

            const sendParams = {
                destination: "/queue/test",
                "content-type": "image/jpeg",
                "content-length": contentLength
            };

            const frame = client.send(sendParams);

            const file = fs.createReadStream(filename);
            file.pipe(frame);

            client.disconnect(error => {
                if (error) {
                    console.log("Error while disconnecting: " + error.message);
                    return;
                }
                console.log("Sent file");
            });
        }
    );
}

// client/send.js
{
    const connectParams = {
        host: "localhost",
        port: 61613,
        connectHeaders: {
            host: "localhost",
            login: "admin",
            passcode: "password"
        }
    };

    stompit.connect(
        connectParams,
        (error, client) => {
            if (error) {
                console.log("Unable to connect: " + error.message);
                return;
            }

            const sendParams = {
                destination: "/queue/test",
                "content-type": "application/json"
            };

            const frame = client.send(sendParams);

            frame.end(
                JSON.stringify({
                    anything: "anything",
                    example: true
                })
            );

            client.disconnect(error => {
                if (error) {
                    console.log("Error while disconnecting: " + error.message);
                    return;
                }
                console.log("Sent message");
            });
        }
    );
}

// client/transaction.js
{
    const connectParams = {
        host: "localhost",
        port: 61613,
        connectHeaders: {
            host: "localhost",
            login: "admin",
            passcode: "password"
        }
    };

    stompit.connect(
        connectParams,
        (error, client) => {
            if (error) {
                console.log("Unable to connect: " + error.message);
                return;
            }

            const transaction = client.begin();

            transaction.send({ destination: "/queue/test" }).end("first");
            transaction.send({ destination: "/queue/test" }).end("second");

            transaction.commit(); // or call transaction.abort()

            client.disconnect(error => {
                if (error) {
                    console.log("Error while disconnecting: " + error.message);
                    return;
                }
                console.log("Sent messages");
            });
        }
    );
}

// pubsub.js
{
    const connectionManager = new stompit.ConnectFailover([
        {
            host: "localhost",
            port: 61613,
            resetDisconnect: false,
            connectHeaders: {
                "accept-version": "1.0",
                host: "localhost",
                login: "admin",
                passcode: "password",
                "heart-beat": "1000,1000"
            }
        }
    ]);

    connectionManager.on("error", error => {
        const connectArgs = error.connectArgs as NetTcpConnectOptions;
        const address = `${connectArgs.host}:${connectArgs.port}`;
        console.log(`Could not connect to ${address}: ${error.message}`);
    });

    connectionManager.on("connecting", connector => {
        console.log("Connecting to " + connector.serverProperties.remoteAddress.transportPath);
    });

    const channelPool = new stompit.ChannelPool(connectionManager);

    channelPool.channel((error, channel) => {
        if (error) {
            console.log("send-channel error: " + error.message);
            return;
        }

        const sendHeaders = {
            destination: "/queue/a"
        };

        channel.send(sendHeaders, "hello", error => {
            if (error) {
                console.log("send error " + error.message);
                return;
            }

            console.log("message sent");
        });
    });

    channelPool.channel((error, channel) => {
        if (error) {
            console.log("subscribe-channel error: " + error.message);
            return;
        }

        const subscribeHeaders = {
            destination: "/queue/a"
        };

        channel.subscribe(subscribeHeaders, (error, message, subscription) => {
            if (error) {
                console.log("subscribe error: " + error.message);
                return;
            }

            message.readString("utf8", (error, body) => {
                if (error) {
                    console.log("read message error " + error.message);
                    return;
                }

                console.log("received message: " + body);

                subscription.unsubscribe();
            });
        });
    });
}
