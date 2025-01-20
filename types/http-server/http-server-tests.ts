import { createServer } from "http-server";

const server = createServer({
    username: "admin",
    password: "admin",
});
server.listen(8000);

server.close();
