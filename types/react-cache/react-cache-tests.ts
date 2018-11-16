import { createResource } from "react-cache";

const StringResource = createResource((key: string) => {
    return new Promise(resolve => {
        resolve(key);
    });
});

StringResource.read();
StringResource.read(5); // $ExpectError
