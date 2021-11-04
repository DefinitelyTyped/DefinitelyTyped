import { unstable_createResource } from "react-cache";

const fetchName = (name: string) =>
    new Promise<string>((resolve, reject) => {
        if (name === "Bob") {
            resolve(name);
        } else {
            reject(`Invalid name: ${name}`);
        }
    });

const nameResource = unstable_createResource(fetchName);
nameResource.read("Bob");

const fetchUser = ({ name }: { name: string }) =>
    new Promise<string>((resolve, reject) => {
        if (name === "Jill") {
            resolve(name);
        } else {
            reject(`Invalid name: ${name}`);
        }
    });

const userResource = unstable_createResource(fetchUser, ({ name }) => name);
userResource.read({ name: "Jill" });
