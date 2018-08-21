import * as getPort from "get-port";

getPort().then(port => {
    console.log(port);
});

getPort({ port: 3000 }).then(port => {
    console.log(port);
});

getPort({ port: [3000, 3001] }).then(port => {
    console.log(port);
});
