import { runAsync } from "async-rerun";

function test() {
    return new Promise((resolve, reject) => {
        reject(false);
    });
}

runAsync(test, 10, 1000, false, true).then((res: any) => {
    // logic for the positive case
    return true;
}).catch((res: any) => {
    // logic for the negative case
    return false;
});
