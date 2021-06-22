import { getPass } from "getpass";

getPass((_error, _password) => {
    // do your thing
});

getPass({}, (_error, _password) => {
    // do your thing
});

getPass({ prompt: "Pass." }, (_error, _password) => {
    // do your thing
});
