import * as Hawk from "hawk";
import * as Http from "http";
import * as Request from "request";

{
    // Credentials lookup function

    const credentialsFunc: Hawk.server.CredentialsFunc = (id: string) => {
        const credentials: Hawk.server.Credentials = {
            key: "werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn",
            algorithm: "sha256",
            user: "Steve",
        };

        return credentials;
    };

    // Create HTTP server

    const handler = async (req: Http.IncomingMessage, res: Http.ServerResponse) => {
        let payload;
        let status;
        const headers: Http.IncomingHttpHeaders = { "Content-Type": "text/plain" };

        // Authenticate incoming request

        try {
            const { credentials, artifacts } = await Hawk.server.authenticate(req, credentialsFunc);
            payload = `Hello ${credentials.user} ${artifacts.ext}`;
            status = 200;

            // Generate Server-Authorization response header

            const header = Hawk.server.header(credentials, artifacts, {
                payload,
                contentType: headers["Content-Type"],
            });
            headers["Server-Authorization"] = header;
        } catch (error) {
            payload = "Shoosh!";
            status = 401;
        }

        // Prepare response

        // Send the response back

        res.writeHead(status, headers);
        res.end(payload);
    };

    // Start server

    Http.createServer(handler).listen(8000, "example.com");
}

{
    // Client credentials

    const credentials: Hawk.client.Credentials = {
        id: "dh37fgj492je",
        key: "werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn",
        algorithm: "sha256",
    };

    // Request options

    const requestOptions: Request.RequiredUriUrl & Request.CoreOptions & { headers: Request.Headers } = {
        uri: "http://example.com:8000/resource/1?b=1&a=2",
        method: "GET",
        headers: {},
    };

    // Generate Authorization request header

    const { header, artifacts } = Hawk.client.header("http://example.com:8000/resource/1?b=1&a=2", "GET", {
        credentials,
        ext: "some-app-data",
    });
    requestOptions.headers.Authorization = header;

    // Send authenticated request

    Request(requestOptions, (error, response, body) => {
        // Authenticate the server's response

        const isValid = Hawk.client.authenticate(response, credentials, artifacts, { payload: body });

        // Output results

        console.log(`${response.statusCode}: ${body}` + (isValid ? " (valid)" : " (invalid)"));
    });
}

// {
//     Sntp.start();
//     Hawk.utils.setTimeFunction(Sntp.now);
// }
