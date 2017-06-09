import * as getPort from "get-port";

getPort().then(port => {
    console.log(port);
});
