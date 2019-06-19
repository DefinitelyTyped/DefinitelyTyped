import basicAuth from "basic-auth-connect";

const callback = (username: string, password: string): boolean => (
    username === "username" && password === "password"
);

basicAuth("username", "password");
basicAuth("username", "password", "realm");
basicAuth(callback);
basicAuth(callback, "realm");
