import c1 from "node:console";
import c2 from "console";

c1.log();
c2.log();

async () => {
    // tslint:disable-next-line:await-promise
    for await (const line of c1) {
        console.log("Received:", line);
    }

    // tslint:disable-next-line:await-promise
    for await (const line of c2) {
        console.log("Received:", line);
    }
    // tslint:disable-next-line:await-promise
    for await (const line of console) {
        console.log("Received:", line);
    }

    return null;
};
