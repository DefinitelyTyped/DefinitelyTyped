import { sha1 } from "react-native-sha1";

sha1("")
    .then(hash => {
        // Do something
    })
    .catch(e => {
        // Error
    });
